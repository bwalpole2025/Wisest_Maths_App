import { Question } from "@/lib/types";

/**
 * Year 2 — Trigonometry (Y2) § 6.2 Secant, Cosecant and Cotangent
 * Ref: y2tf2
 * 71 questions: reciprocal definitions and exact values, signs/quadrants,
 * given-ratio problems, the identities 1+tan²=sec² and 1+cot²=csc², proving
 * identities, simplifying expressions, ranges, and solving trig equations.
 * ~50% Challenge.
 */
export const questions: Question[] = [
  {
    "id": "y2tf2-001",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 01",
    "difficulty": "Foundation",
    "questionText": "Find the exact values of \\(\\sec\\tfrac{\\pi}{3}\\), \\(\\csc\\tfrac{\\pi}{6}\\) and \\(\\cot\\tfrac{\\pi}{4}\\).",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sec",
      "cosec",
      "cot",
      "exact values"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the three reciprocal definitions.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta},\\quad \\csc\\theta=\\tfrac{1}{\\sin\\theta},\\quad \\cot\\theta=\\tfrac{1}{\\tan\\theta}",
          "explanation": "Each new ratio is the reciprocal of one of the three familiar ratios. The classic slip is pairing secant with sine; remember secant goes with cosine (a useful mnemonic is that the third letter of co-secant matches sine).",
          "stepNumber": 1
        },
        {
          "description": "Set up sec(pi/3) as one over cosine.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{\\cos\\tfrac{\\pi}{3}}",
          "explanation": "Because secant is one over cosine, the secant of an angle requires the cosine of that same angle. Do not change the angle when you take the reciprocal.",
          "stepNumber": 2
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{3}=60^\\circ",
          "explanation": "Since pi radians is 180 degrees, pi/3 is 180/3 = 60 degrees. Recognising the angle in degrees makes the exact value easier to recall.",
          "stepNumber": 3
        },
        {
          "description": "Write the exact value of cos(pi/3).",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12",
          "explanation": "This comes from the 30-60-90 triangle; the cosine of 60 degrees is one half. A common slip is confusing it with sin(pi/3)=\\tfrac{\\sqrt3}{2}.",
          "stepNumber": 4
        },
        {
          "description": "Substitute that value in.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{1/2}",
          "explanation": "Replace cos(pi/3) by 1/2 inside the reciprocal. The expression is now a single number divided by a fraction.",
          "stepNumber": 5
        },
        {
          "description": "Reciprocate to finish sec(pi/3).",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=2",
          "explanation": "Dividing 1 by a half doubles it: inverting a fraction flips numerator and denominator, so 1 over (1/2) is 2/1 = 2.",
          "stepNumber": 6
        },
        {
          "description": "Set up csc(pi/6) as one over sine.",
          "workingLatex": "\\csc\\tfrac{\\pi}{6}=\\tfrac{1}{\\sin\\tfrac{\\pi}{6}}",
          "explanation": "Cosecant is the reciprocal of sine, so we need the sine of the same angle pi/6. Keep the angle unchanged.",
          "stepNumber": 7
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{6}=30^\\circ",
          "explanation": "Here pi/6 is 180/6 = 30 degrees, the other key angle of the 30-60-90 triangle.",
          "stepNumber": 8
        },
        {
          "description": "Write the exact value of sin(pi/6).",
          "workingLatex": "\\sin\\tfrac{\\pi}{6}=\\tfrac12",
          "explanation": "The sine of 30 degrees is one half (from the 30-60-90 triangle). Do not confuse with cos(pi/6)=\\tfrac{\\sqrt3}{2}.",
          "stepNumber": 9
        },
        {
          "description": "Substitute that value in.",
          "workingLatex": "\\csc\\tfrac{\\pi}{6}=\\tfrac{1}{1/2}",
          "explanation": "Replace sin(pi/6) by 1/2 inside the reciprocal, leaving 1 divided by a half.",
          "stepNumber": 10
        },
        {
          "description": "Reciprocate to finish csc(pi/6).",
          "workingLatex": "\\csc\\tfrac{\\pi}{6}=2",
          "explanation": "Same reasoning as before: the reciprocal of one half is 2.",
          "stepNumber": 11
        },
        {
          "description": "Set up cot(pi/4) as one over tan.",
          "workingLatex": "\\cot\\tfrac{\\pi}{4}=\\tfrac{1}{\\tan\\tfrac{\\pi}{4}}",
          "explanation": "Cotangent is the reciprocal of tangent, so we need tan(pi/4) of the same angle.",
          "stepNumber": 12
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{4}=45^\\circ",
          "explanation": "Here pi/4 is 180/4 = 45 degrees, the angle of the isosceles right-angled triangle.",
          "stepNumber": 13
        },
        {
          "description": "Write the exact value of tan(pi/4).",
          "workingLatex": "\\tan\\tfrac{\\pi}{4}=1",
          "explanation": "At 45 degrees sine equals cosine, so their ratio (the tangent) is 1.",
          "stepNumber": 14
        },
        {
          "description": "Substitute that value in.",
          "workingLatex": "\\cot\\tfrac{\\pi}{4}=\\tfrac{1}{1}",
          "explanation": "Replace tan(pi/4) by 1 inside the reciprocal.",
          "stepNumber": 15
        },
        {
          "description": "Reciprocate to finish cot(pi/4).",
          "workingLatex": "\\cot\\tfrac{\\pi}{4}=1",
          "explanation": "The reciprocal of 1 is 1, so cot(pi/4) is just 1.",
          "stepNumber": 16
        }
      ],
      "finalAnswer": "\\(2,\\ 2,\\ 1\\).",
      "commonMistakes": [
        "Reciprocating the wrong ratio (\\(\\sec=1/\\cos\\), not \\(1/\\sin\\))."
      ]
    }
  },
  {
    "id": "y2tf2-002",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 02",
    "difficulty": "Foundation",
    "questionText": "State the definitions of \\(\\sec x\\), \\(\\csc x\\) and \\(\\cot x\\) in terms of \\(\\sin x\\) and \\(\\cos x\\).",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "definitions"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Define secant as one over cosine.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine. The single most common error in the whole topic is pairing secant with sine instead; secant and cosine belong together.",
          "stepNumber": 1
        },
        {
          "description": "Define cosecant as one over sine.",
          "workingLatex": "\\csc x=\\tfrac{1}{\\sin x}",
          "explanation": "Cosecant is the reciprocal of sine. The 'co' in cosecant is a false friend; despite the name it pairs with sine, not cosine.",
          "stepNumber": 2
        },
        {
          "description": "Define cotangent as one over tangent.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\tan x}",
          "explanation": "Cotangent is the reciprocal of tangent. This is the starting point before we rewrite it purely in terms of sine and cosine.",
          "stepNumber": 3
        },
        {
          "description": "Recall tangent as sin over cos.",
          "workingLatex": "\\tan x=\\tfrac{\\sin x}{\\cos x}",
          "explanation": "Tangent itself is defined as sine divided by cosine. We will feed this into the cotangent expression so that no tangent remains.",
          "stepNumber": 4
        },
        {
          "description": "Substitute tan into the cotangent reciprocal.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\sin x/\\cos x}",
          "explanation": "Replacing tan x by sin x over cos x inside the reciprocal expresses everything in sine and cosine, as the question demands.",
          "stepNumber": 5
        },
        {
          "description": "Rewrite dividing by a fraction as multiplying by its reciprocal.",
          "workingLatex": "\\cot x=1\\times\\tfrac{\\cos x}{\\sin x}",
          "explanation": "Dividing by sin/cos is the same as multiplying by its flip cos/sin. This is the 'invert and multiply' rule for fractions.",
          "stepNumber": 6
        },
        {
          "description": "Simplify to the final form.",
          "workingLatex": "\\cot x=\\tfrac{\\cos x}{\\sin x}",
          "explanation": "Multiplying by 1 leaves cos over sin. Note carefully it is cos/sin, not sin/cos (that would be tan).",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(\\sec x=\\tfrac{1}{\\cos x},\\ \\csc x=\\tfrac{1}{\\sin x},\\ \\cot x=\\tfrac{\\cos x}{\\sin x}\\).",
      "commonMistakes": [
        "Writing \\(\\cot x=\\tfrac{\\sin x}{\\cos x}\\) (that is \\(\\tan x\\))."
      ]
    }
  },
  {
    "id": "y2tf2-003",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 03",
    "difficulty": "Foundation",
    "questionText": "Of \\(\\sec x\\), \\(\\csc x\\), \\(\\cot x\\), which are undefined at \\(x=0\\)?",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "domain"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall a ratio is undefined where its denominator is 0.",
          "workingLatex": "\\text{undefined when denominator}=0",
          "explanation": "Division by zero has no value, so each reciprocal ratio fails exactly where the function on its denominator equals zero.",
          "stepNumber": 1
        },
        {
          "description": "Write each ratio as a fraction.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x},\\ \\csc x=\\tfrac{1}{\\sin x},\\ \\cot x=\\tfrac{\\cos x}{\\sin x}",
          "explanation": "Expressing all three as fractions lets us see exactly which function sits in each denominator. Note sec has cos on the bottom, while csc and cot both have sin on the bottom.",
          "stepNumber": 2
        },
        {
          "description": "State the value of sin at x=0.",
          "workingLatex": "\\sin 0=0",
          "explanation": "This is a standard exact value. Since sin0 is zero, any ratio carrying sine in the denominator will be undefined at x=0.",
          "stepNumber": 3
        },
        {
          "description": "State the value of cos at x=0.",
          "workingLatex": "\\cos 0=1",
          "explanation": "Another standard exact value. Since cos0 is 1 (not zero), any ratio with only cosine in the denominator survives at x=0.",
          "stepNumber": 4
        },
        {
          "description": "Substitute into sec at x=0.",
          "workingLatex": "\\sec 0=\\tfrac{1}{\\cos 0}=\\tfrac{1}{1}",
          "explanation": "Put cos0 = 1 into the secant fraction. The denominator is 1, which is allowed.",
          "stepNumber": 5
        },
        {
          "description": "Evaluate sec at x=0.",
          "workingLatex": "\\sec 0=1",
          "explanation": "The denominator is not zero, so secant is perfectly well defined at x=0 and equals 1.",
          "stepNumber": 6
        },
        {
          "description": "Substitute into csc at x=0.",
          "workingLatex": "\\csc 0=\\tfrac{1}{\\sin 0}=\\tfrac{1}{0}",
          "explanation": "Put sin0 = 0 into the cosecant fraction. The denominator is now zero.",
          "stepNumber": 7
        },
        {
          "description": "Conclude csc is undefined.",
          "workingLatex": "\\csc 0\\ \\text{undefined}",
          "explanation": "Division by zero has no value, so cosecant is undefined at x=0.",
          "stepNumber": 8
        },
        {
          "description": "Substitute into cot at x=0.",
          "workingLatex": "\\cot 0=\\tfrac{\\cos 0}{\\sin 0}=\\tfrac{1}{0}",
          "explanation": "Put cos0 = 1 and sin0 = 0 into the cotangent fraction. The denominator is again zero.",
          "stepNumber": 9
        },
        {
          "description": "Conclude cot is undefined.",
          "workingLatex": "\\cot 0\\ \\text{undefined}",
          "explanation": "The denominator sin0 is zero, so cotangent is undefined at x=0 as well.",
          "stepNumber": 10
        },
        {
          "description": "Collect the conclusion.",
          "workingLatex": "\\csc 0,\\ \\cot 0\\ \\text{undefined};\\ \\sec 0=1",
          "explanation": "Both csc and cot carry sine in the denominator, so both fail at x=0, whereas sec survives.",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "\\(\\csc x\\) and \\(\\cot x\\).",
      "commonMistakes": [
        "Forgetting that division by \\(\\sin 0=0\\) is undefined."
      ]
    }
  },
  {
    "id": "y2tf2-004",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 04",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), the equation \\(\\sec^2\\theta-2\\tan\\theta=4\\). Give answers to 3 s.f. where not exact.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "domain"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose a strategy: reduce to one function.",
          "workingLatex": "\\sec^2\\theta-2\\tan\\theta=4",
          "explanation": "The equation mixes \\(\\sec^2\\theta\\) and \\(\\tan\\theta\\). To solve it we want everything in one trig function; the Pythagorean identity linking sec and tan is the natural tool.",
          "stepNumber": 1
        },
        {
          "description": "State the identity 1+tan^2 = sec^2.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\). Use it as written; the common error is writing \\(1-\\tan^2\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute the identity for sec^2.",
          "workingLatex": "(1+\\tan^2\\theta)-2\\tan\\theta=4",
          "explanation": "Replacing \\(\\sec^2\\theta\\) by \\(1+\\tan^2\\theta\\) leaves the whole equation in terms of \\(\\tan\\theta\\) only. The bracket keeps the substituted block together.",
          "stepNumber": 3
        },
        {
          "description": "Remove the bracket.",
          "workingLatex": "\\tan^2\\theta-2\\tan\\theta+1=4",
          "explanation": "The bracket is added, so it simply drops away, reordered into descending powers of \\(\\tan\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Move 4 to the left side.",
          "workingLatex": "\\tan^2\\theta-2\\tan\\theta+1-4=0",
          "explanation": "Subtract 4 from both sides so the equation reads equal to zero, ready to become a standard quadratic.",
          "stepNumber": 5
        },
        {
          "description": "Combine the constants.",
          "workingLatex": "\\tan^2\\theta-2\\tan\\theta-3=0",
          "explanation": "Here 1 minus 4 is minus 3. We now have a quadratic in \\(\\tan\\theta\\).",
          "stepNumber": 6
        },
        {
          "description": "Substitute t = tan(theta) to see the quadratic.",
          "workingLatex": "t^2-2t-3=0,\\quad t=\\tan\\theta",
          "explanation": "Writing \\(t=\\tan\\theta\\) makes it clear this is an ordinary quadratic that we can factorise.",
          "stepNumber": 7
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(t-3)(t+1)=0",
          "explanation": "We need two numbers multiplying to \\(-3\\) and adding to \\(-2\\): those are \\(-3\\) and \\(+1\\). Check by expanding to confirm the middle term is \\(-2t\\).",
          "stepNumber": 8
        },
        {
          "description": "Replace t back with tan(theta).",
          "workingLatex": "(\\tan\\theta-3)(\\tan\\theta+1)=0",
          "explanation": "Undo the substitution so the factors are in terms of the original variable \\(\\tan\\theta\\).",
          "stepNumber": 9
        },
        {
          "description": "Apply the zero-product principle.",
          "workingLatex": "\\tan\\theta=3\\ \\text{or}\\ \\tan\\theta=-1",
          "explanation": "A product is zero only if one factor is zero, giving two separate equations in \\(\\tan\\theta\\) to solve over the given interval.",
          "stepNumber": 10
        },
        {
          "description": "Take the principal value for tan = 3.",
          "workingLatex": "\\theta=\\arctan 3\\approx 1.2490",
          "explanation": "The calculator gives the principal value in radians, which lies in the first quadrant since tangent is positive. Keep extra decimals until the end to avoid rounding error.",
          "stepNumber": 11
        },
        {
          "description": "Add pi for the second solution of tan = 3.",
          "workingLatex": "\\theta\\approx 1.2490+\\pi",
          "explanation": "Tangent has period \\(\\pi\\), so once you have one solution every other is reached by adding \\(\\pi\\). Set up the addition before evaluating.",
          "stepNumber": 12
        },
        {
          "description": "Evaluate the second tan = 3 solution.",
          "workingLatex": "\\theta\\approx 4.3906",
          "explanation": "Since \\(1.2490+\\pi\\approx 1.2490+3.1416=4.3906\\), still inside [0,2pi). A further \\(+\\pi\\) would exceed 2pi, so stop here.",
          "stepNumber": 13
        },
        {
          "description": "Round the tan = 3 solutions.",
          "workingLatex": "\\theta\\approx 1.25,\\ 4.39",
          "explanation": "Rounding to 3 significant figures as required by the question gives 1.25 and 4.39 radians.",
          "stepNumber": 14
        },
        {
          "description": "Find the principal value for tan = -1.",
          "workingLatex": "\\arctan(-1)=-\\tfrac{\\pi}{4}",
          "explanation": "The calculator returns a negative angle for negative tangent. This is outside [0,2pi), so we adjust it onto the required interval next.",
          "stepNumber": 15
        },
        {
          "description": "Place the first tan = -1 solution in range.",
          "workingLatex": "\\theta=-\\tfrac{\\pi}{4}+\\pi=\\tfrac{3\\pi}{4}",
          "explanation": "Adding the period \\(\\pi\\) brings the angle into the interval; this lands in the second quadrant where tangent is negative, as expected.",
          "stepNumber": 16
        },
        {
          "description": "Add pi again for the second tan = -1 solution.",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4}+\\pi=\\tfrac{7\\pi}{4}",
          "explanation": "Adding another \\(\\pi\\) gives the fourth-quadrant solution, which is also negative-tangent. Both \\(\\tfrac{3\\pi}{4}\\) and \\(\\tfrac{7\\pi}{4}\\) lie in [0,2pi) and are exact.",
          "stepNumber": 17
        },
        {
          "description": "Collect all four solutions.",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4},\\ 1.25,\\ 4.39",
          "explanation": "Quoting the exact values where available and the rounded decimals otherwise, exactly as the question asks.",
          "stepNumber": 18
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}\\) and \\(\\theta\\approx1.25,\\ 4.39\\) rad.",
      "commonMistakes": [
        "Replacing \\(\\sec^2\\) by \\(1-\\tan^2\\) (wrong identity).",
        "Losing the \\(\\tan\\theta=-1\\) family or a solution outside \\([0,\\tfrac{\\pi}{2})\\)."
      ]
    }
  },
  {
    "id": "y2tf2-005",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 05",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\sec 0\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Use the reciprocal of cosine.",
          "workingLatex": "\\sec 0=\\tfrac{1}{\\cos 0}",
          "explanation": "Secant is defined as one over cosine, so secant of an angle is one over the cosine of that same angle. Beware the common slip of using sine here.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the exact value cos 0 = 1.",
          "workingLatex": "\\sec 0=\\tfrac{1}{1}",
          "explanation": "The cosine of 0 is 1, a standard exact value (at angle zero the adjacent side equals the hypotenuse).",
          "stepNumber": 2
        },
        {
          "description": "Simplify the fraction.",
          "workingLatex": "\\sec 0=1",
          "explanation": "One divided by 1 is 1, so the reciprocal of cos0 is simply 1.",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Reciprocating sine instead of cosine."
      ]
    }
  },
  {
    "id": "y2tf2-006",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 06",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\csc\\tfrac{\\pi}{2}\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, by definition. A common slip is to pair cosecant with cosine because both start with the letter 'c'; remember instead that it is co-secant (cosec) which goes with sine, while secant goes with cosine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the given angle.",
          "workingLatex": "\\csc\\tfrac{\\pi}{2}=\\tfrac{1}{\\sin\\tfrac{\\pi}{2}}",
          "explanation": "Put \\(\\theta=\\tfrac{\\pi}{2}\\) into the reciprocal definition. This turns the problem into one about sine, whose exact values we already know.",
          "stepNumber": 2
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{2}\\ \\text{radians}=90^{\\circ}",
          "explanation": "Half of \\(\\pi\\) radians is half of \\(180^{\\circ}\\), which is \\(90^{\\circ}\\). Recognising the angle in degrees makes the sine value easier to recall.",
          "stepNumber": 3
        },
        {
          "description": "Recall the exact value of the sine.",
          "workingLatex": "\\sin\\tfrac{\\pi}{2}=1",
          "explanation": "At \\(90^{\\circ}\\) sine reaches its maximum value of 1. On the unit circle the point at the top has y-coordinate exactly 1, and sine reads off the y-coordinate.",
          "stepNumber": 4
        },
        {
          "description": "Substitute this value in.",
          "workingLatex": "\\csc\\tfrac{\\pi}{2}=\\tfrac{1}{1}",
          "explanation": "Replace \\(\\sin\\tfrac{\\pi}{2}\\) by 1 in the fraction. The denominator is non-zero, so the expression is well defined.",
          "stepNumber": 5
        },
        {
          "description": "Simplify the fraction.",
          "workingLatex": "\\csc\\tfrac{\\pi}{2}=1",
          "explanation": "Dividing 1 by 1 gives 1. So the cosecant of \\(\\tfrac{\\pi}{2}\\) is exactly 1.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Confusing \\(\\csc\\) (reciprocal of sine) with \\(\\sec\\)."
      ]
    }
  },
  {
    "id": "y2tf2-007",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 07",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\cot\\tfrac{\\pi}{2}\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent equals cosine over sine (equivalently \\(1/\\tan\\theta\\)). The cosine-over-sine form is the safer one to use here, because \\(\\tan\\tfrac{\\pi}{2}\\) is itself undefined and the reciprocal-of-tan approach would confuse a beginner.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the given angle.",
          "workingLatex": "\\cot\\tfrac{\\pi}{2}=\\tfrac{\\cos\\tfrac{\\pi}{2}}{\\sin\\tfrac{\\pi}{2}}",
          "explanation": "Put \\(\\theta=\\tfrac{\\pi}{2}\\) into the definition so we can read off the exact cosine and sine separately.",
          "stepNumber": 2
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{2}\\ \\text{radians}=90^{\\circ}",
          "explanation": "Half of \\(\\pi\\) radians is half of \\(180^{\\circ}\\), i.e. \\(90^{\\circ}\\). Seeing the angle in degrees makes the exact values easier to recall.",
          "stepNumber": 3
        },
        {
          "description": "Recall the cosine value.",
          "workingLatex": "\\cos\\tfrac{\\pi}{2}=0",
          "explanation": "At \\(90^{\\circ}\\) the x-coordinate on the unit circle is 0, and cosine reads off the x-coordinate, so the cosine is exactly 0.",
          "stepNumber": 4
        },
        {
          "description": "Recall the sine value.",
          "workingLatex": "\\sin\\tfrac{\\pi}{2}=1",
          "explanation": "At \\(90^{\\circ}\\) the y-coordinate is 1, and sine reads off the y-coordinate. This denominator is non-zero, so the fraction is well defined.",
          "stepNumber": 5
        },
        {
          "description": "Substitute both values in.",
          "workingLatex": "\\cot\\tfrac{\\pi}{2}=\\tfrac{0}{1}",
          "explanation": "Replace the cosine by 0 and the sine by 1 in the fraction.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the fraction.",
          "workingLatex": "\\cot\\tfrac{\\pi}{2}=0",
          "explanation": "A zero numerator over a non-zero denominator equals 0. This is NOT undefined: division by 1 is perfectly fine, and only division by 0 would be a problem.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(0\\).",
      "commonMistakes": [
        "Thinking it is undefined — it is \\(\\cos/\\sin\\), and \\(\\cos\\tfrac{\\pi}{2}=0\\)."
      ]
    }
  },
  {
    "id": "y2tf2-008",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 08",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), the equation \\(2\\cot^2\\theta+3\\csc\\theta=0\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the equation to be solved.",
          "workingLatex": "2\\cot^2\\theta+3\\csc\\theta=0",
          "explanation": "Begin from the given equation. It mixes two different functions, \\(\\cot^2\\theta\\) and \\(\\csc\\theta\\), so before solving we must reduce it to just one function.",
          "stepNumber": 1
        },
        {
          "description": "Decide which function to keep.",
          "workingLatex": "2\\cot^2\\theta+3\\csc\\theta=0\\ \\text{(target: }\\csc\\theta\\text{)}",
          "explanation": "Since \\(\\cot^2\\theta\\) is linked to \\(\\csc^2\\theta\\) by a Pythagorean identity, converting the \\(\\cot^2\\) term will leave everything in \\(\\csc\\theta\\). That gives a quadratic we can factorise.",
          "stepNumber": 2
        },
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "This is the standard identity connecting cotangent and cosecant. It follows from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\).",
          "stepNumber": 3
        },
        {
          "description": "Rearrange the identity for \\(\\cot^2\\theta\\).",
          "workingLatex": "\\cot^2\\theta=\\csc^2\\theta-1",
          "explanation": "Subtracting 1 from both sides isolates \\(\\cot^2\\theta\\). Watch the sign carefully: it is \\(\\csc^2\\theta-1\\), not \\(1-\\csc^2\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Substitute into the equation.",
          "workingLatex": "2(\\csc^2\\theta-1)+3\\csc\\theta=0",
          "explanation": "Replace \\(\\cot^2\\theta\\) by \\(\\csc^2\\theta-1\\). Every term now involves \\(\\csc\\theta\\) only, ready to become a quadratic.",
          "stepNumber": 5
        },
        {
          "description": "Expand the bracket.",
          "workingLatex": "2\\csc^2\\theta-2+3\\csc\\theta=0",
          "explanation": "Multiply the 2 through the bracket: \\(2\\times\\csc^2\\theta\\) and \\(2\\times(-1)=-2\\). A frequent error is to forget to multiply the \\(-1\\) by 2.",
          "stepNumber": 6
        },
        {
          "description": "Write in standard quadratic order.",
          "workingLatex": "2\\csc^2\\theta+3\\csc\\theta-2=0",
          "explanation": "Reorder the terms as \\(ax^2+bx+c=0\\) with \\(x=\\csc\\theta\\): squared term first, then linear, then constant. This makes the factorising clearer.",
          "stepNumber": 7
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(2\\csc\\theta-1)(\\csc\\theta+2)=0",
          "explanation": "Treat it as \\(2x^2+3x-2=(2x-1)(x+2)\\). Check by expanding: \\(2x^2+4x-x-2=2x^2+3x-2\\), which matches.",
          "stepNumber": 8
        },
        {
          "description": "Set the first factor to zero.",
          "workingLatex": "2\\csc\\theta-1=0\\Rightarrow\\csc\\theta=\\tfrac12",
          "explanation": "If a product is zero, at least one factor is zero. Solving the first factor gives \\(\\csc\\theta=\\tfrac12\\).",
          "stepNumber": 9
        },
        {
          "description": "Set the second factor to zero.",
          "workingLatex": "\\csc\\theta+2=0\\Rightarrow\\csc\\theta=-2",
          "explanation": "Solving the second factor gives \\(\\csc\\theta=-2\\). Both candidate roots must be examined before discarding any.",
          "stepNumber": 10
        },
        {
          "description": "State the range of cosecant.",
          "workingLatex": "|\\sin\\theta|\\le1\\Rightarrow|\\csc\\theta|\\ge1",
          "explanation": "Because \\(\\csc\\theta=1/\\sin\\theta\\) and \\(|\\sin\\theta|\\le1\\), taking reciprocals forces \\(|\\csc\\theta|\\ge1\\). Cosecant can never lie strictly between \\(-1\\) and \\(1\\).",
          "stepNumber": 11
        },
        {
          "description": "Reject the impossible root.",
          "workingLatex": "\\csc\\theta=\\tfrac12\\ \\text{rejected}\\ (|\\tfrac12|<1)",
          "explanation": "The value \\(\\tfrac12\\) fails \\(|\\csc\\theta|\\ge1\\); it would need \\(\\sin\\theta=2\\), which is impossible. So we discard this root.",
          "stepNumber": 12
        },
        {
          "description": "Convert the surviving root to sine.",
          "workingLatex": "\\csc\\theta=-2\\Rightarrow\\sin\\theta=-\\tfrac12",
          "explanation": "Taking reciprocals of \\(\\csc\\theta=-2\\) gives \\(\\sin\\theta=1/(-2)=-\\tfrac12\\). This is a standard exact value to solve.",
          "stepNumber": 13
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "\\sin^{-1}\\tfrac12=\\tfrac{\\pi}{6}",
          "explanation": "Ignore the sign for the reference angle: \\(\\sin\\tfrac{\\pi}{6}=\\tfrac12\\). The negative sign will tell us which quadrants to use, not the size of the reference angle.",
          "stepNumber": 14
        },
        {
          "description": "Identify the correct quadrants.",
          "workingLatex": "\\sin\\theta<0\\Rightarrow\\text{quadrants III and IV}",
          "explanation": "Sine equals the y-coordinate, which is negative in the third and fourth quadrants. We place the reference angle \\(\\tfrac{\\pi}{6}\\) in each.",
          "stepNumber": 15
        },
        {
          "description": "Write the third-quadrant solution.",
          "workingLatex": "\\theta=\\pi+\\tfrac{\\pi}{6}=\\tfrac{7\\pi}{6}",
          "explanation": "In the third quadrant the angle is \\(\\pi\\) plus the reference angle. Here \\(\\pi+\\tfrac{\\pi}{6}=\\tfrac{6\\pi}{6}+\\tfrac{\\pi}{6}=\\tfrac{7\\pi}{6}\\).",
          "stepNumber": 16
        },
        {
          "description": "Write the fourth-quadrant solution.",
          "workingLatex": "\\theta=2\\pi-\\tfrac{\\pi}{6}=\\tfrac{11\\pi}{6}",
          "explanation": "In the fourth quadrant the angle is \\(2\\pi\\) minus the reference angle. Here \\(2\\pi-\\tfrac{\\pi}{6}=\\tfrac{12\\pi}{6}-\\tfrac{\\pi}{6}=\\tfrac{11\\pi}{6}\\). Both solutions lie in \\([0,2\\pi)\\).",
          "stepNumber": 17
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}\\).",
      "commonMistakes": [
        "Keeping the root \\(\\csc\\theta=\\tfrac12\\) (impossible, since \\(|\\csc\\theta|\\ge1\\))."
      ]
    }
  },
  {
    "id": "y2tf2-009",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 09",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(3\\csc^2\\theta-5\\cot\\theta=5\\). Give answers to 3 s.f.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "domain"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the equation to be solved.",
          "workingLatex": "3\\csc^2\\theta-5\\cot\\theta=5",
          "explanation": "Begin from the given equation. It contains two different functions, \\(\\csc^2\\theta\\) and \\(\\cot\\theta\\), so we first reduce it to a single function.",
          "stepNumber": 1
        },
        {
          "description": "Decide which function to keep.",
          "workingLatex": "3\\csc^2\\theta-5\\cot\\theta=5\\ \\text{(target: }\\cot\\theta\\text{)}",
          "explanation": "Converting \\(\\csc^2\\theta\\) using the Pythagorean identity will leave a quadratic purely in \\(\\cot\\theta\\), which we can then solve.",
          "stepNumber": 2
        },
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "This is the standard identity linking cotangent and cosecant, obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\sin^2\\theta\\).",
          "stepNumber": 3
        },
        {
          "description": "Write the identity as a substitution.",
          "workingLatex": "\\csc^2\\theta=1+\\cot^2\\theta",
          "explanation": "Read the identity the other way round so it is ready to replace \\(\\csc^2\\theta\\). Watch the sign: it is \\(1+\\cot^2\\theta\\), never \\(\\cot^2\\theta-1\\).",
          "stepNumber": 4
        },
        {
          "description": "Substitute the identity.",
          "workingLatex": "3(1+\\cot^2\\theta)-5\\cot\\theta=5",
          "explanation": "Replace \\(\\csc^2\\theta\\) by \\(1+\\cot^2\\theta\\) so the whole equation is in terms of \\(\\cot\\theta\\).",
          "stepNumber": 5
        },
        {
          "description": "Expand the bracket.",
          "workingLatex": "3+3\\cot^2\\theta-5\\cot\\theta=5",
          "explanation": "Multiply the 3 through: \\(3\\times1=3\\) and \\(3\\times\\cot^2\\theta=3\\cot^2\\theta\\). Keep the \\(\\cot^2\\) and \\(\\cot\\) terms separate.",
          "stepNumber": 6
        },
        {
          "description": "Subtract 5 from both sides.",
          "workingLatex": "3\\cot^2\\theta-5\\cot\\theta+3-5=0",
          "explanation": "Move the 5 from the right to the left so the equation equals zero, ready for the quadratic form.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the constant.",
          "workingLatex": "3\\cot^2\\theta-5\\cot\\theta-2=0",
          "explanation": "Since \\(3-5=-2\\), we obtain a clean quadratic in \\(\\cot\\theta\\).",
          "stepNumber": 8
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(3\\cot\\theta+1)(\\cot\\theta-2)=0",
          "explanation": "Treat it as \\(3x^2-5x-2=(3x+1)(x-2)\\). Check by expanding: \\(3x^2-6x+x-2=3x^2-5x-2\\), which matches.",
          "stepNumber": 9
        },
        {
          "description": "Set the first factor to zero.",
          "workingLatex": "3\\cot\\theta+1=0\\Rightarrow\\cot\\theta=-\\tfrac13",
          "explanation": "If a product is zero, one factor is zero. Solving the first factor gives \\(\\cot\\theta=-\\tfrac13\\).",
          "stepNumber": 10
        },
        {
          "description": "Set the second factor to zero.",
          "workingLatex": "\\cot\\theta-2=0\\Rightarrow\\cot\\theta=2",
          "explanation": "Solving the second factor gives \\(\\cot\\theta=2\\). Both roots are valid, since cotangent has no restricted range.",
          "stepNumber": 11
        },
        {
          "description": "Convert each root to \\(\\tan\\theta\\).",
          "workingLatex": "\\tan\\theta=-3\\quad\\text{or}\\quad\\tan\\theta=\\tfrac12",
          "explanation": "Since \\(\\cot\\theta=1/\\tan\\theta\\), take reciprocals: the reciprocal of \\(-\\tfrac13\\) is \\(-3\\), and the reciprocal of \\(2\\) is \\(\\tfrac12\\).",
          "stepNumber": 12
        },
        {
          "description": "Find the principal value for \\(\\tan\\theta=\\tfrac12\\).",
          "workingLatex": "\\tan^{-1}\\tfrac12=0.4636",
          "explanation": "The calculator (in radians) gives the first-quadrant principal value \\(0.4636\\). Tangent is positive in quadrants I and III.",
          "stepNumber": 13
        },
        {
          "description": "Write both solutions for \\(\\tan\\theta=\\tfrac12\\).",
          "workingLatex": "\\theta=0.464,\\quad \\theta=0.4636+\\pi=3.61",
          "explanation": "Adding \\(\\pi\\) (the period of tangent) gives the third-quadrant solution. Both \\(0.464\\) and \\(3.61\\) lie in \\([0,2\\pi)\\).",
          "stepNumber": 14
        },
        {
          "description": "Find the principal value for \\(\\tan\\theta=-3\\).",
          "workingLatex": "\\tan^{-1}(-3)=-1.249",
          "explanation": "The calculator returns a negative principal value, which is outside \\([0,2\\pi)\\). Negative tangent occurs in quadrants II and IV, so we must shift it into range.",
          "stepNumber": 15
        },
        {
          "description": "Write both solutions for \\(\\tan\\theta=-3\\).",
          "workingLatex": "\\theta=-1.249+\\pi=1.89,\\quad \\theta=-1.249+2\\pi=5.03",
          "explanation": "Adding \\(\\pi\\) gives the second-quadrant solution \\(1.89\\); adding \\(2\\pi\\) brings the negative value into range as the fourth-quadrant solution \\(5.03\\).",
          "stepNumber": 16
        },
        {
          "description": "Collect all four solutions, sorted.",
          "workingLatex": "\\theta\\approx0.464,\\ 1.89,\\ 3.61,\\ 5.03",
          "explanation": "List in increasing order to 3 significant figures, as the question requires.",
          "stepNumber": 17
        }
      ],
      "finalAnswer": "\\(\\theta\\approx0.464,\\ 1.89,\\ 3.61,\\ 5.03\\) rad.",
      "commonMistakes": [
        "Using \\(\\csc^2=\\cot^2-1\\) (sign wrong)."
      ]
    }
  },
  {
    "id": "y2tf2-010",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 10",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), the equation \\(\\tan^2\\theta=\\sec\\theta+1\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "domain"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the equation to be solved.",
          "workingLatex": "\\tan^2\\theta=\\sec\\theta+1",
          "explanation": "Begin from the given equation. It mixes \\(\\tan^2\\theta\\) and \\(\\sec\\theta\\), so we first reduce it to a single function.",
          "stepNumber": 1
        },
        {
          "description": "Decide which function to keep.",
          "workingLatex": "\\tan^2\\theta=\\sec\\theta+1\\ \\text{(target: }\\sec\\theta\\text{)}",
          "explanation": "Converting \\(\\tan^2\\theta\\) with the Pythagorean identity will leave a quadratic purely in \\(\\sec\\theta\\), which we can then solve.",
          "stepNumber": 2
        },
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "This is the standard identity linking tangent and secant, obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\).",
          "stepNumber": 3
        },
        {
          "description": "Rearrange for \\(\\tan^2\\theta\\).",
          "workingLatex": "\\tan^2\\theta=\\sec^2\\theta-1",
          "explanation": "Subtract 1 from both sides to isolate \\(\\tan^2\\theta\\). The sign is \\(\\sec^2\\theta-1\\); do not write \\(1-\\sec^2\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Substitute into the equation.",
          "workingLatex": "\\sec^2\\theta-1=\\sec\\theta+1",
          "explanation": "Replace \\(\\tan^2\\theta\\) by \\(\\sec^2\\theta-1\\) on the left. Every term is now in \\(\\sec\\theta\\).",
          "stepNumber": 5
        },
        {
          "description": "Subtract \\(\\sec\\theta\\) from both sides.",
          "workingLatex": "\\sec^2\\theta-\\sec\\theta-1=1",
          "explanation": "Bring the linear term to the left. Do not cancel a \\(\\sec\\theta\\) factor — that would lose solutions.",
          "stepNumber": 6
        },
        {
          "description": "Subtract 1 from both sides.",
          "workingLatex": "\\sec^2\\theta-\\sec\\theta-1-1=0",
          "explanation": "Move the remaining constant to the left so the equation equals zero, ready for the quadratic form.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the constant.",
          "workingLatex": "\\sec^2\\theta-\\sec\\theta-2=0",
          "explanation": "Combine \\(-1-1=-2\\) to obtain a clean quadratic in \\(\\sec\\theta\\).",
          "stepNumber": 8
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(\\sec\\theta-2)(\\sec\\theta+1)=0",
          "explanation": "Treat it as \\(x^2-x-2=(x-2)(x+1)\\). Check by expanding: \\(x^2-2x+x-2=x^2-x-2\\), which matches.",
          "stepNumber": 9
        },
        {
          "description": "Set the first factor to zero.",
          "workingLatex": "\\sec\\theta-2=0\\Rightarrow\\sec\\theta=2",
          "explanation": "If a product is zero, one factor is zero. The first factor gives \\(\\sec\\theta=2\\).",
          "stepNumber": 10
        },
        {
          "description": "Set the second factor to zero.",
          "workingLatex": "\\sec\\theta+1=0\\Rightarrow\\sec\\theta=-1",
          "explanation": "The second factor gives \\(\\sec\\theta=-1\\). Both satisfy \\(|\\sec\\theta|\\ge1\\), so neither is rejected on range grounds.",
          "stepNumber": 11
        },
        {
          "description": "Convert each root to cosine.",
          "workingLatex": "\\cos\\theta=\\tfrac12\\quad\\text{or}\\quad\\cos\\theta=-1",
          "explanation": "Since \\(\\cos\\theta=1/\\sec\\theta\\), take reciprocals: \\(1/2\\) and \\(1/(-1)=-1\\).",
          "stepNumber": 12
        },
        {
          "description": "Find the reference angle for \\(\\cos\\theta=\\tfrac12\\).",
          "workingLatex": "\\cos^{-1}\\tfrac12=\\tfrac{\\pi}{3}",
          "explanation": "The reference angle whose cosine is \\(\\tfrac12\\) is \\(\\tfrac{\\pi}{3}\\) (i.e. \\(60^{\\circ}\\)). Positive cosine occurs in quadrants I and IV.",
          "stepNumber": 13
        },
        {
          "description": "Write both solutions for \\(\\cos\\theta=\\tfrac12\\).",
          "workingLatex": "\\theta=\\tfrac{\\pi}{3}\\quad\\text{or}\\quad\\theta=2\\pi-\\tfrac{\\pi}{3}=\\tfrac{5\\pi}{3}",
          "explanation": "The first-quadrant solution is the reference angle itself; the fourth-quadrant solution is \\(2\\pi-\\tfrac{\\pi}{3}=\\tfrac{6\\pi}{3}-\\tfrac{\\pi}{3}=\\tfrac{5\\pi}{3}\\). Both lie in \\([0,2\\pi)\\).",
          "stepNumber": 14
        },
        {
          "description": "Solve \\(\\cos\\theta=-1\\).",
          "workingLatex": "\\theta=\\pi",
          "explanation": "Cosine equals \\(-1\\) only at \\(\\theta=\\pi\\) within \\([0,2\\pi)\\). This is a single boundary value, not a pair of solutions.",
          "stepNumber": 15
        },
        {
          "description": "Collect all solutions in order.",
          "workingLatex": "\\theta=\\tfrac{\\pi}{3},\\ \\pi,\\ \\tfrac{5\\pi}{3}",
          "explanation": "List the three solutions in increasing order within the required interval.",
          "stepNumber": 16
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{\\pi}{3},\\ \\pi,\\ \\tfrac{5\\pi}{3}\\).",
      "commonMistakes": [
        "Cancelling rather than forming a quadratic in \\(\\sec\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-011",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 11",
    "difficulty": "Foundation",
    "questionText": "Find the exact value of \\(\\sec\\tfrac{\\pi}{6}\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Secant is defined as the reciprocal of cosine, not of sine. Pairing sec with cos is the single most common slip in this whole topic, so fix it firmly before substituting any numbers. A memory hook: the third letter of 'secant' matches 'cosine'.",
          "stepNumber": 1
        },
        {
          "description": "Convert the radian angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{6}\\text{ rad}=30^\\circ",
          "explanation": "Multiplying a radian measure by \\(\\tfrac{180}{\\pi}\\) gives degrees, and \\(\\tfrac{\\pi}{6}\\times\\tfrac{180}{\\pi}=30\\). Knowing this lets us use the familiar exact-value triangle in degrees.",
          "stepNumber": 2
        },
        {
          "description": "Apply the definition at \\(\\theta=\\pi/6\\).",
          "workingLatex": "\\sec\\tfrac{\\pi}{6}=\\tfrac{1}{\\cos(\\pi/6)}",
          "explanation": "Just substitute \\(\\theta=\\tfrac{\\pi}{6}\\) into the reciprocal definition. Nothing has been evaluated yet; we have only rewritten sec as one-over-cos.",
          "stepNumber": 3
        },
        {
          "description": "Recall the exact value of \\(\\cos(\\pi/6)\\).",
          "workingLatex": "\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}",
          "explanation": "From the standard exact-value triangle (the 30-60-90 triangle), \\(\\cos 30^\\circ=\\tfrac{\\sqrt3}{2}\\). Do not mix this up with \\(\\cos 60^\\circ=\\tfrac12\\); the larger value \\(\\tfrac{\\sqrt3}{2}\\) belongs to the smaller angle.",
          "stepNumber": 4
        },
        {
          "description": "Substitute the exact cosine value.",
          "workingLatex": "\\sec\\tfrac{\\pi}{6}=\\tfrac{1}{\\sqrt3/2}",
          "explanation": "Replace \\(\\cos(\\pi/6)\\) by \\(\\tfrac{\\sqrt3}{2}\\). We now have a single one divided by a fraction, which we tidy in the next move.",
          "stepNumber": 5
        },
        {
          "description": "Rewrite dividing by a fraction as multiplying by its reciprocal.",
          "workingLatex": "\\tfrac{1}{\\sqrt3/2}=1\\times\\tfrac{2}{\\sqrt3}",
          "explanation": "Dividing by \\(\\tfrac{\\sqrt3}{2}\\) is the same as multiplying by its reciprocal \\(\\tfrac{2}{\\sqrt3}\\) (flip the divisor). A frequent error is to write \\(\\tfrac{\\sqrt3}{2}\\) here instead of flipping it.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the multiplication.",
          "workingLatex": "1\\times\\tfrac{2}{\\sqrt3}=\\tfrac{2}{\\sqrt3}",
          "explanation": "Multiplying by 1 leaves the fraction unchanged, so the result is \\(\\tfrac{2}{\\sqrt3}\\). This is correct but still has a surd in the denominator.",
          "stepNumber": 7
        },
        {
          "description": "Set up rationalising the denominator.",
          "workingLatex": "\\tfrac{2}{\\sqrt3}=\\tfrac{2}{\\sqrt3}\\times\\tfrac{\\sqrt3}{\\sqrt3}",
          "explanation": "Multiplying by \\(\\tfrac{\\sqrt3}{\\sqrt3}=1\\) does not change the value but is the standard trick to remove a surd from the denominator. We multiply numerator and denominator by \\(\\sqrt3\\).",
          "stepNumber": 8
        },
        {
          "description": "Carry out the rationalisation.",
          "workingLatex": "\\tfrac{2}{\\sqrt3}\\times\\tfrac{\\sqrt3}{\\sqrt3}=\\tfrac{2\\sqrt3}{3}",
          "explanation": "The numerator becomes \\(2\\times\\sqrt3=2\\sqrt3\\) and the denominator becomes \\(\\sqrt3\\times\\sqrt3=3\\). A surd-free denominator is the expected final form.",
          "stepNumber": 9
        }
      ],
      "finalAnswer": "\\(\\tfrac{2\\sqrt3}{3}\\).",
      "commonMistakes": [
        "Leaving \\(\\tfrac{2}{\\sqrt3}\\) un-rationalised."
      ]
    }
  },
  {
    "id": "y2tf2-012",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 12",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\sec\\tfrac{\\pi}{4}\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Secant is one-over-cosine, never one-over-sine. Lock this in first; mixing it up with \\(\\csc\\theta=\\tfrac{1}{\\sin\\theta}\\) is the classic mistake here.",
          "stepNumber": 1
        },
        {
          "description": "Convert the radian angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{4}\\text{ rad}=45^\\circ",
          "explanation": "Using \\(\\tfrac{\\pi}{4}\\times\\tfrac{180}{\\pi}=45\\), the angle is \\(45^\\circ\\). This is the angle in the isosceles right-angled triangle, where the exact values are easy to recall.",
          "stepNumber": 2
        },
        {
          "description": "Apply the definition at \\(\\theta=\\pi/4\\).",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\cos(\\pi/4)}",
          "explanation": "Substitute \\(\\theta=\\tfrac{\\pi}{4}\\) into the reciprocal definition. Nothing is evaluated yet; we have only rewritten sec as one-over-cos.",
          "stepNumber": 3
        },
        {
          "description": "Recall the exact value of \\(\\cos(\\pi/4)\\).",
          "workingLatex": "\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}",
          "explanation": "From the 45-45-90 triangle, \\(\\cos 45^\\circ=\\tfrac{1}{\\sqrt2}=\\tfrac{\\sqrt2}{2}\\). Both forms are equal; we use the rationalised form \\(\\tfrac{\\sqrt2}{2}\\) here.",
          "stepNumber": 4
        },
        {
          "description": "Substitute the exact cosine value.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2/2}",
          "explanation": "Replace \\(\\cos(\\pi/4)\\) by \\(\\tfrac{\\sqrt2}{2}\\). This leaves one divided by a fraction, which we tidy next.",
          "stepNumber": 5
        },
        {
          "description": "Rewrite dividing by a fraction as multiplying by its reciprocal.",
          "workingLatex": "\\tfrac{1}{\\sqrt2/2}=1\\times\\tfrac{2}{\\sqrt2}=\\tfrac{2}{\\sqrt2}",
          "explanation": "Dividing by \\(\\tfrac{\\sqrt2}{2}\\) means multiplying by its reciprocal \\(\\tfrac{2}{\\sqrt2}\\) (flip the divisor). Do not accidentally leave it as \\(\\tfrac{\\sqrt2}{2}\\).",
          "stepNumber": 6
        },
        {
          "description": "Set up rationalising the denominator.",
          "workingLatex": "\\tfrac{2}{\\sqrt2}=\\tfrac{2}{\\sqrt2}\\times\\tfrac{\\sqrt2}{\\sqrt2}",
          "explanation": "Multiply numerator and denominator by \\(\\sqrt2\\); since \\(\\tfrac{\\sqrt2}{\\sqrt2}=1\\) the value is unchanged. This clears the surd from the bottom.",
          "stepNumber": 7
        },
        {
          "description": "Carry out the rationalisation.",
          "workingLatex": "\\tfrac{2}{\\sqrt2}\\times\\tfrac{\\sqrt2}{\\sqrt2}=\\tfrac{2\\sqrt2}{2}",
          "explanation": "The numerator becomes \\(2\\sqrt2\\) and the denominator becomes \\(\\sqrt2\\times\\sqrt2=2\\). We still have a common factor of 2 to cancel.",
          "stepNumber": 8
        },
        {
          "description": "Cancel the common factor.",
          "workingLatex": "\\tfrac{2\\sqrt2}{2}=\\sqrt2",
          "explanation": "Dividing numerator and denominator by 2 leaves \\(\\sqrt2\\). Equivalently, \\(\\tfrac{2}{\\sqrt2}=\\sqrt2\\) since \\(2=\\sqrt2\\cdot\\sqrt2\\).",
          "stepNumber": 9
        }
      ],
      "finalAnswer": "\\(\\sqrt2\\).",
      "commonMistakes": [
        "Using \\(1/\\sin\\) — \\(\\sec=1/\\cos\\)."
      ]
    }
  },
  {
    "id": "y2tf2-013",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 13",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\sec^2\\theta=3+\\tan\\theta\\). Give answers to 3 s.f. where not exact.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose a strategy: get everything in \\(\\tan\\theta\\).",
          "workingLatex": "\\text{recall } 1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "The equation mixes \\(\\sec^2\\theta\\) and \\(\\tan\\theta\\). The Pythagorean identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\) lets us trade \\(\\sec^2\\) for an expression in \\(\\tan\\), so the whole thing becomes a quadratic in one variable.",
          "stepNumber": 1
        },
        {
          "description": "Replace \\(\\sec^2\\theta\\) using the identity.",
          "workingLatex": "1+\\tan^2\\theta=3+\\tan\\theta",
          "explanation": "Substitute \\(\\sec^2\\theta=1+\\tan^2\\theta\\) on the left. Be careful: the identity is \\(1+\\tan^2\\), not \\(1-\\tan^2\\); using the wrong sign is the headline mistake here.",
          "stepNumber": 2
        },
        {
          "description": "Subtract \\(3\\) from both sides.",
          "workingLatex": "\\tan^2\\theta-2=\\tan\\theta",
          "explanation": "Take \\(3\\) off each side: \\(1-3=-2\\) on the left, and the right loses its \\(3\\). This starts gathering everything towards one side.",
          "stepNumber": 3
        },
        {
          "description": "Subtract \\(\\tan\\theta\\) from both sides.",
          "workingLatex": "\\tan^2\\theta-\\tan\\theta-2=0",
          "explanation": "Moving \\(\\tan\\theta\\) to the left sets the equation equal to zero, the standard form for a quadratic. Think of it as \\(x^2-x-2=0\\) with \\(x=\\tan\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Find the factor pair.",
          "workingLatex": "(-2)\\times(+1)=-2,\\quad (-2)+(+1)=-1",
          "explanation": "For \\(x^2-x-2\\) we need two numbers multiplying to \\(-2\\) (the constant) and summing to \\(-1\\) (the coefficient of \\(x\\)). Those numbers are \\(-2\\) and \\(+1\\).",
          "stepNumber": 5
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(\\tan\\theta-2)(\\tan\\theta+1)=0",
          "explanation": "Use the pair found above. Check by expanding: \\(\\tan^2\\theta+\\tan\\theta-2\\tan\\theta-2=\\tan^2\\theta-\\tan\\theta-2\\), which matches.",
          "stepNumber": 6
        },
        {
          "description": "Split into two simple equations.",
          "workingLatex": "\\tan\\theta=2 \\quad\\text{or}\\quad \\tan\\theta=-1",
          "explanation": "A product is zero only when a factor is zero (the null factor law). Set each bracket to zero and solve each branch separately over \\(0\\le\\theta<2\\pi\\).",
          "stepNumber": 7
        },
        {
          "description": "First branch: principal value of \\(\\tan\\theta=2\\).",
          "workingLatex": "\\theta=\\arctan 2\\approx 1.107",
          "explanation": "The calculator (in radians) gives the principal value \\(\\arctan 2\\approx1.107\\), which lies in the first quadrant (Q1) since it is positive and less than \\(\\tfrac{\\pi}{2}\\).",
          "stepNumber": 8
        },
        {
          "description": "Identify the other quadrant for \\(\\tan\\theta=2\\).",
          "workingLatex": "\\tan\\theta>0\\ \\text{in Q1 and Q3}",
          "explanation": "Tangent is positive in the first and third quadrants. We already have Q1, so the remaining solution in range is in Q3.",
          "stepNumber": 9
        },
        {
          "description": "Second solution for \\(\\tan\\theta=2\\): add \\(\\pi\\).",
          "workingLatex": "\\theta\\approx 1.107+\\pi\\approx 4.249",
          "explanation": "Tangent has period \\(\\pi\\), so adding \\(\\pi\\) gives the Q3 solution. Rounding to 3 s.f. gives \\(1.11\\) and \\(4.25\\).",
          "stepNumber": 10
        },
        {
          "description": "Second branch: reference angle for \\(\\tan\\theta=-1\\).",
          "workingLatex": "|\\tan\\theta|=1\\Rightarrow\\text{reference }\\tfrac{\\pi}{4}",
          "explanation": "Ignore the sign first: since \\(\\tan\\tfrac{\\pi}{4}=1\\), the acute reference angle is \\(\\tfrac{\\pi}{4}\\).",
          "stepNumber": 11
        },
        {
          "description": "Identify the quadrants for \\(\\tan\\theta=-1\\).",
          "workingLatex": "\\tan\\theta<0\\ \\text{in Q2 and Q4}",
          "explanation": "Tangent is negative in the second and fourth quadrants, so both solutions for this branch come from there.",
          "stepNumber": 12
        },
        {
          "description": "Compute the Q2 solution.",
          "workingLatex": "\\theta=\\pi-\\tfrac{\\pi}{4}=\\tfrac{3\\pi}{4}",
          "explanation": "In quadrant 2 the angle is \\(\\pi\\) minus the reference angle. This value is exact, so leave it as a multiple of \\(\\pi\\).",
          "stepNumber": 13
        },
        {
          "description": "Compute the Q4 solution.",
          "workingLatex": "\\theta=2\\pi-\\tfrac{\\pi}{4}=\\tfrac{7\\pi}{4}",
          "explanation": "In quadrant 4 the angle is \\(2\\pi\\) minus the reference angle. Again leave it exact.",
          "stepNumber": 14
        },
        {
          "description": "Collect all solutions in range.",
          "workingLatex": "\\theta\\approx 1.11,\\ 4.25;\\quad \\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "All four values lie in \\(0\\le\\theta<2\\pi\\). Quote the arctan answers to 3 s.f. and the others exactly, as the question instructs.",
          "stepNumber": 15
        }
      ],
      "finalAnswer": "\\(\\theta\\approx1.11,\\ 4.25\\) and \\(\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}\\).",
      "commonMistakes": [
        "Wrong identity for \\(\\sec^2\\)."
      ]
    }
  },
  {
    "id": "y2tf2-014",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 14",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\sec\\theta=-2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Use the reciprocal relationship.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Secant equations are almost always easier once converted to cosine, because cosine is what the unit circle and exact-value triangles are built around.",
          "stepNumber": 1
        },
        {
          "description": "Write the equation with the definition.",
          "workingLatex": "\\tfrac{1}{\\cos\\theta}=-2",
          "explanation": "Replace \\(\\sec\\theta\\) by \\(\\tfrac{1}{\\cos\\theta}\\). The equation is now purely in terms of cosine.",
          "stepNumber": 2
        },
        {
          "description": "Take reciprocals of both sides.",
          "workingLatex": "\\cos\\theta=-\\tfrac12",
          "explanation": "The reciprocal of \\(\\tfrac{1}{\\cos\\theta}\\) is \\(\\cos\\theta\\), and the reciprocal of \\(-2\\) is \\(-\\tfrac12\\). The sign stays negative throughout.",
          "stepNumber": 3
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12\\Rightarrow\\text{reference }\\tfrac{\\pi}{3}",
          "explanation": "Ignore the sign first and ask where \\(\\cos=\\tfrac12\\): that is \\(\\tfrac{\\pi}{3}\\) (i.e. \\(60^\\circ\\)). This is the acute reference angle.",
          "stepNumber": 4
        },
        {
          "description": "Decide which quadrants apply.",
          "workingLatex": "\\cos\\theta<0\\ \\text{in Q2 and Q3}",
          "explanation": "Cosine is negative in the second and third quadrants. A common error is to give only one solution; the range \\(0\\le\\theta<2\\pi\\) demands both.",
          "stepNumber": 5
        },
        {
          "description": "Compute the Q2 solution.",
          "workingLatex": "\\theta=\\pi-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}",
          "explanation": "In quadrant 2 the angle is \\(\\pi\\) minus the reference angle. Combining over a common denominator: \\(\\tfrac{3\\pi}{3}-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}\\).",
          "stepNumber": 6
        },
        {
          "description": "Compute the Q3 solution.",
          "workingLatex": "\\theta=\\pi+\\tfrac{\\pi}{3}=\\tfrac{4\\pi}{3}",
          "explanation": "In quadrant 3 the angle is \\(\\pi\\) plus the reference angle: \\(\\tfrac{3\\pi}{3}+\\tfrac{\\pi}{3}=\\tfrac{4\\pi}{3}\\).",
          "stepNumber": 7
        },
        {
          "description": "Confirm both lie in range.",
          "workingLatex": "0\\le\\tfrac{2\\pi}{3}<2\\pi,\\quad 0\\le\\tfrac{4\\pi}{3}<2\\pi",
          "explanation": "Both \\(\\tfrac{2\\pi}{3}\\) and \\(\\tfrac{4\\pi}{3}\\) satisfy \\(0\\le\\theta<2\\pi\\), so both are valid solutions.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3}\\).",
      "commonMistakes": [
        "Only giving one solution."
      ]
    }
  },
  {
    "id": "y2tf2-015",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 15",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\cot\\tfrac{\\pi}{3}\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent. (Equivalently \\(\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\), but the reciprocal form is quickest here.)",
          "stepNumber": 1
        },
        {
          "description": "Convert the radian angle to degrees.",
          "workingLatex": "\\tfrac{\\pi}{3}\\text{ rad}=60^\\circ",
          "explanation": "Since \\(\\tfrac{\\pi}{3}\\times\\tfrac{180}{\\pi}=60\\), the angle is \\(60^\\circ\\), which sits in the 30-60-90 exact-value triangle.",
          "stepNumber": 2
        },
        {
          "description": "Apply the definition at \\(\\theta=\\pi/3\\).",
          "workingLatex": "\\cot\\tfrac{\\pi}{3}=\\tfrac{1}{\\tan(\\pi/3)}",
          "explanation": "Substitute \\(\\theta=\\tfrac{\\pi}{3}\\) into the reciprocal definition. Nothing is evaluated yet; we have only rewritten cot as one-over-tan.",
          "stepNumber": 3
        },
        {
          "description": "Recall the exact value of \\(\\tan(\\pi/3)\\).",
          "workingLatex": "\\tan\\tfrac{\\pi}{3}=\\sqrt3",
          "explanation": "From the 30-60-90 triangle, \\(\\tan 60^\\circ=\\sqrt3\\). Do not confuse it with \\(\\tan 30^\\circ=\\tfrac{1}{\\sqrt3}\\).",
          "stepNumber": 4
        },
        {
          "description": "Substitute the exact tangent value.",
          "workingLatex": "\\cot\\tfrac{\\pi}{3}=\\tfrac{1}{\\sqrt3}",
          "explanation": "Replace \\(\\tan(\\pi/3)\\) by \\(\\sqrt3\\). This is correct but still has a surd in the denominator.",
          "stepNumber": 5
        },
        {
          "description": "Set up rationalising the denominator.",
          "workingLatex": "\\tfrac{1}{\\sqrt3}=\\tfrac{1}{\\sqrt3}\\times\\tfrac{\\sqrt3}{\\sqrt3}",
          "explanation": "Multiply numerator and denominator by \\(\\sqrt3\\); since \\(\\tfrac{\\sqrt3}{\\sqrt3}=1\\) the value is unchanged. This is the standard step to clear a surd from the bottom.",
          "stepNumber": 6
        },
        {
          "description": "Carry out the rationalisation.",
          "workingLatex": "\\tfrac{1}{\\sqrt3}\\times\\tfrac{\\sqrt3}{\\sqrt3}=\\tfrac{\\sqrt3}{3}",
          "explanation": "The numerator becomes \\(1\\times\\sqrt3=\\sqrt3\\) and the denominator becomes \\(\\sqrt3\\times\\sqrt3=3\\). The surd-free form is the expected answer.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(\\tfrac{\\sqrt3}{3}\\).",
      "commonMistakes": [
        "Leaving \\(\\tfrac{1}{\\sqrt3}\\) un-rationalised."
      ]
    }
  },
  {
    "id": "y2tf2-016",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 16",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\cot\\theta=-1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the given equation.",
          "workingLatex": "\\cot\\theta=-1",
          "explanation": "Start by recording exactly what must be solved. The unknown is the angle \\(\\theta\\), restricted to \\(0\\le\\theta<2\\pi\\), so we expect answers measured in radians.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of cotangent.",
          "workingLatex": "\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}=\\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent, so an equation in \\(\\cot\\theta\\) can always be rewritten as an equation in \\(\\tan\\theta\\). Working in \\(\\tan\\theta\\) is easier because the standard reference angles are memorised for tangent.",
          "stepNumber": 2
        },
        {
          "description": "State the reciprocal relationship to use.",
          "workingLatex": "\\tan\\theta=\\frac{1}{\\cot\\theta}",
          "explanation": "Because \\(\\cot\\theta=1/\\tan\\theta\\), taking the reciprocal of both sides of that identity gives \\(\\tan\\theta=1/\\cot\\theta\\). This is the rule we apply next; it is valid provided \\(\\cot\\theta\\neq0\\), which holds here since \\(-1\\neq0\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the given value.",
          "workingLatex": "\\tan\\theta=\\frac{1}{-1}",
          "explanation": "Replace \\(\\cot\\theta\\) with its value \\(-1\\) in the reciprocal relationship. A common slip is to leave the value unchanged as \\(-1\\) without writing the reciprocal step; here you must still show the substitution explicitly.",
          "stepNumber": 4
        },
        {
          "description": "Simplify the right-hand side.",
          "workingLatex": "\\tan\\theta=-1",
          "explanation": "The reciprocal of \\(-1\\) is \\(-1\\), since \\(1\\div(-1)=-1\\). So the equation reduces neatly. Note the sign is negative, which will fix which quadrants we may use.",
          "stepNumber": 5
        },
        {
          "description": "Take the magnitude to find the reference angle.",
          "workingLatex": "|\\tan\\theta|=1",
          "explanation": "The reference (acute) angle is found from the size of the value only, ignoring the sign. We therefore solve \\(\\tan\\alpha=1\\) for an acute \\(\\alpha\\).",
          "stepNumber": 6
        },
        {
          "description": "Find the reference (acute) angle.",
          "workingLatex": "\\tan\\alpha=1\\ \\Rightarrow\\ \\alpha=\\tfrac{\\pi}{4}",
          "explanation": "Since \\(\\tan\\tfrac{\\pi}{4}=1\\), the acute reference angle is \\(\\alpha=\\tfrac{\\pi}{4}\\). This is one of the standard exact tangent values.",
          "stepNumber": 7
        },
        {
          "description": "Recall the CAST sign rule for tangent.",
          "workingLatex": "\\tan>0\\ \\text{in Q1, Q3};\\quad \\tan<0\\ \\text{in Q2, Q4}",
          "explanation": "Tangent is positive in the first and third quadrants and negative in the second and fourth (CAST diagram). This tells us where a negative tangent can occur.",
          "stepNumber": 8
        },
        {
          "description": "Decide the quadrants from the sign.",
          "workingLatex": "\\tan\\theta=-1<0\\ \\Rightarrow\\ \\text{Q2 and Q4}",
          "explanation": "Because \\(\\tan\\theta=-1<0\\), only the second and fourth quadrants give solutions. There are exactly two such quadrants in \\(0\\le\\theta<2\\pi\\), so we expect two answers.",
          "stepNumber": 9
        },
        {
          "description": "Write the second-quadrant formula.",
          "workingLatex": "\\theta=\\pi-\\alpha",
          "explanation": "In the second quadrant the angle with reference angle \\(\\alpha\\) is \\(\\pi-\\alpha\\). Substituting \\(\\alpha=\\tfrac{\\pi}{4}\\) next gives the actual value.",
          "stepNumber": 10
        },
        {
          "description": "Substitute and use a common denominator.",
          "workingLatex": "\\theta=\\pi-\\tfrac{\\pi}{4}=\\tfrac{4\\pi}{4}-\\tfrac{\\pi}{4}",
          "explanation": "Convert \\(\\pi\\) to quarters as \\(\\tfrac{4\\pi}{4}\\) before subtracting so the fraction arithmetic shares a denominator. This avoids errors when combining the terms.",
          "stepNumber": 11
        },
        {
          "description": "Simplify the second-quadrant solution.",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4}",
          "explanation": "Subtracting the numerators, \\(4\\pi-\\pi=3\\pi\\) over the common denominator \\(4\\), gives \\(\\tfrac{3\\pi}{4}\\). This is the first solution.",
          "stepNumber": 12
        },
        {
          "description": "Write the fourth-quadrant formula.",
          "workingLatex": "\\theta=2\\pi-\\alpha",
          "explanation": "In the fourth quadrant the angle with reference angle \\(\\alpha\\) is \\(2\\pi-\\alpha\\). We now substitute \\(\\alpha=\\tfrac{\\pi}{4}\\).",
          "stepNumber": 13
        },
        {
          "description": "Substitute and use a common denominator.",
          "workingLatex": "\\theta=2\\pi-\\tfrac{\\pi}{4}=\\tfrac{8\\pi}{4}-\\tfrac{\\pi}{4}",
          "explanation": "Writing \\(2\\pi=\\tfrac{8\\pi}{4}\\) keeps a common denominator with \\(\\tfrac{\\pi}{4}\\). Always rewrite whole multiples of \\(\\pi\\) over the same denominator before subtracting.",
          "stepNumber": 14
        },
        {
          "description": "Simplify the fourth-quadrant solution.",
          "workingLatex": "\\theta=\\tfrac{7\\pi}{4}",
          "explanation": "Subtracting numerators, \\(8\\pi-\\pi=7\\pi\\) over \\(4\\), gives \\(\\tfrac{7\\pi}{4}\\). This is the second solution.",
          "stepNumber": 15
        },
        {
          "description": "Check both lie in the required range.",
          "workingLatex": "0\\le\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}<2\\pi\\ \\checkmark",
          "explanation": "Both values satisfy \\(0\\le\\theta<2\\pi\\), so neither needs adjusting by \\(\\pm 2\\pi\\). Always confirm the interval before stating the final answer.",
          "stepNumber": 16
        },
        {
          "description": "Sanity-check using the period.",
          "workingLatex": "\\tfrac{7\\pi}{4}-\\tfrac{3\\pi}{4}=\\pi",
          "explanation": "Tangent has period \\(\\pi\\), so the two answers should differ by exactly \\(\\pi\\). They do, which confirms we have not missed or duplicated a solution.",
          "stepNumber": 17
        },
        {
          "description": "State all solutions.",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "These are the only two solutions in the interval \\(0\\le\\theta<2\\pi\\).",
          "stepNumber": 18
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}\\).",
      "commonMistakes": [
        "Reciprocal slip."
      ]
    }
  },
  {
    "id": "y2tf2-017",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 46",
    "difficulty": "Standard",
    "questionText": "Find the exact value of \\(\\sec\\tfrac{2\\pi}{3}\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec\\theta=\\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so to find \\(\\sec\\tfrac{2\\pi}{3}\\) we first need the exact value of \\(\\cos\\tfrac{2\\pi}{3}\\).",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition to this angle.",
          "workingLatex": "\\sec\\tfrac{2\\pi}{3}=\\frac{1}{\\cos\\tfrac{2\\pi}{3}}",
          "explanation": "Substitute \\(\\theta=\\tfrac{2\\pi}{3}\\) into the definition. The whole task now reduces to evaluating \\(\\cos\\tfrac{2\\pi}{3}\\) exactly.",
          "stepNumber": 2
        },
        {
          "description": "Convert the angle to degrees.",
          "workingLatex": "\\tfrac{2\\pi}{3}=\\tfrac{2}{3}\\times180^\\circ=120^\\circ",
          "explanation": "Using \\(\\pi=180^\\circ\\), we get \\(\\tfrac{2}{3}\\times180^\\circ=120^\\circ\\). This makes it easy to see which quadrant the angle is in.",
          "stepNumber": 3
        },
        {
          "description": "Locate the quadrant.",
          "workingLatex": "90^\\circ<120^\\circ<180^\\circ\\ \\Rightarrow\\ \\text{Q2}",
          "explanation": "Angles strictly between \\(90^\\circ\\) and \\(180^\\circ\\) lie in the second quadrant. Identifying the quadrant is essential for fixing the sign of the answer.",
          "stepNumber": 4
        },
        {
          "description": "State the sign of cosine here.",
          "workingLatex": "\\text{in Q2: }\\cos\\theta<0",
          "explanation": "By the CAST rule, cosine is negative in the second quadrant (only sine is positive there). So the final cosine value will carry a minus sign.",
          "stepNumber": 5
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "180^\\circ-120^\\circ=60^\\circ=\\tfrac{\\pi}{3}",
          "explanation": "The reference angle is the acute angle to the horizontal axis. In Q2 it is \\(180^\\circ-\\theta\\), giving \\(60^\\circ\\), i.e. \\(\\tfrac{\\pi}{3}\\).",
          "stepNumber": 6
        },
        {
          "description": "Write the cosine magnitude.",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12",
          "explanation": "This is a standard exact value. The reference angle supplies the size of the cosine, before we apply the quadrant sign.",
          "stepNumber": 7
        },
        {
          "description": "Apply the quadrant sign.",
          "workingLatex": "\\cos\\tfrac{2\\pi}{3}=-\\tfrac12",
          "explanation": "Combining the magnitude \\(\\tfrac12\\) with the negative sign from Q2 gives \\(-\\tfrac12\\). Forgetting this minus sign is the most common error here.",
          "stepNumber": 8
        },
        {
          "description": "Substitute the cosine value.",
          "workingLatex": "\\sec\\tfrac{2\\pi}{3}=\\frac{1}{-\\tfrac12}",
          "explanation": "Put the cosine value into \\(\\sec\\theta=1/\\cos\\theta\\). Keep the negative sign attached to the denominator so it is not lost.",
          "stepNumber": 9
        },
        {
          "description": "Rewrite division as multiplication.",
          "workingLatex": "\\frac{1}{-\\tfrac12}=1\\times\\left(-\\frac{2}{1}\\right)",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal; the reciprocal of \\(-\\tfrac12\\) is \\(-2\\). This intermediate line makes the next step transparent.",
          "stepNumber": 10
        },
        {
          "description": "Simplify to the final value.",
          "workingLatex": "\\sec\\tfrac{2\\pi}{3}=-2",
          "explanation": "The product is \\(-2\\). The result stays negative because cosine was negative, consistent with \\(\\sec\\) sharing the sign of \\(\\cos\\).",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "\\(-2\\).",
      "commonMistakes": [
        "Dropping the negative sign (2nd-quadrant cosine is negative)."
      ]
    }
  },
  {
    "id": "y2tf2-018",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 47",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\cot\\theta=\\sqrt3\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the given equation.",
          "workingLatex": "\\cot\\theta=\\sqrt3",
          "explanation": "Record what must be solved. The unknown \\(\\theta\\) is restricted to \\(0\\le\\theta<2\\pi\\), so answers will be in radians within one full turn.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of cotangent.",
          "workingLatex": "\\cot\\theta=\\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent, so we rewrite the equation in terms of \\(\\tan\\theta\\) to use familiar reference angles.",
          "stepNumber": 2
        },
        {
          "description": "State the reciprocal relationship to use.",
          "workingLatex": "\\tan\\theta=\\frac{1}{\\cot\\theta}",
          "explanation": "Inverting the identity \\(\\cot\\theta=1/\\tan\\theta\\) gives \\(\\tan\\theta=1/\\cot\\theta\\). This is valid because \\(\\cot\\theta=\\sqrt3\\neq0\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the given value.",
          "workingLatex": "\\tan\\theta=\\frac{1}{\\sqrt3}",
          "explanation": "Replace \\(\\cot\\theta\\) with \\(\\sqrt3\\). The key trap is writing \\(\\tan\\theta=\\sqrt3\\) by mistake; the reciprocal turns it into \\(\\tfrac{1}{\\sqrt3}\\), which is essential.",
          "stepNumber": 4
        },
        {
          "description": "Note the value is positive.",
          "workingLatex": "\\tan\\theta=\\frac{1}{\\sqrt3}>0",
          "explanation": "The right-hand side is positive, which determines which quadrants can contain the solutions.",
          "stepNumber": 5
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "\\tan\\alpha=\\frac{1}{\\sqrt3}\\ \\Rightarrow\\ \\alpha=\\tfrac{\\pi}{6}",
          "explanation": "Since \\(\\tan\\tfrac{\\pi}{6}=\\tfrac{1}{\\sqrt3}\\), the acute reference angle is \\(\\tfrac{\\pi}{6}\\). Do not confuse this with \\(\\tfrac{\\pi}{3}\\), whose tangent is \\(\\sqrt3\\).",
          "stepNumber": 6
        },
        {
          "description": "Recall the CAST sign rule for tangent.",
          "workingLatex": "\\tan>0\\ \\text{in Q1, Q3};\\quad \\tan<0\\ \\text{in Q2, Q4}",
          "explanation": "Tangent is positive in the first and third quadrants and negative in the second and fourth. This tells us where a positive tangent can occur.",
          "stepNumber": 7
        },
        {
          "description": "Decide the quadrants from the sign.",
          "workingLatex": "\\tan\\theta>0\\ \\Rightarrow\\ \\text{Q1 and Q3}",
          "explanation": "Because the value is positive, both solutions come from the first and third quadrants. We therefore expect exactly two answers in \\(0\\le\\theta<2\\pi\\).",
          "stepNumber": 8
        },
        {
          "description": "Write the first-quadrant solution.",
          "workingLatex": "\\theta=\\alpha=\\tfrac{\\pi}{6}",
          "explanation": "In the first quadrant the angle equals the reference angle itself, so \\(\\theta=\\tfrac{\\pi}{6}\\). This is the first solution.",
          "stepNumber": 9
        },
        {
          "description": "Write the third-quadrant formula.",
          "workingLatex": "\\theta=\\pi+\\alpha",
          "explanation": "In the third quadrant the angle with reference angle \\(\\alpha\\) is \\(\\pi+\\alpha\\). We now substitute \\(\\alpha=\\tfrac{\\pi}{6}\\).",
          "stepNumber": 10
        },
        {
          "description": "Substitute and use a common denominator.",
          "workingLatex": "\\theta=\\pi+\\tfrac{\\pi}{6}=\\tfrac{6\\pi}{6}+\\tfrac{\\pi}{6}",
          "explanation": "Writing \\(\\pi=\\tfrac{6\\pi}{6}\\) gives a common denominator for the addition, preventing arithmetic slips.",
          "stepNumber": 11
        },
        {
          "description": "Simplify the third-quadrant solution.",
          "workingLatex": "\\theta=\\tfrac{7\\pi}{6}",
          "explanation": "Adding numerators, \\(6\\pi+\\pi=7\\pi\\) over \\(6\\), gives \\(\\tfrac{7\\pi}{6}\\). This is the second solution.",
          "stepNumber": 12
        },
        {
          "description": "Check both lie in the required range.",
          "workingLatex": "0\\le\\tfrac{\\pi}{6},\\ \\tfrac{7\\pi}{6}<2\\pi\\ \\checkmark",
          "explanation": "Both solutions satisfy \\(0\\le\\theta<2\\pi\\), so no adjustment by \\(\\pm 2\\pi\\) is needed.",
          "stepNumber": 13
        },
        {
          "description": "Sanity-check using the period.",
          "workingLatex": "\\tfrac{7\\pi}{6}-\\tfrac{\\pi}{6}=\\pi",
          "explanation": "The two answers differ by \\(\\pi\\), matching tangent's period of \\(\\pi\\). This quick consistency check confirms the pair is complete.",
          "stepNumber": 14
        },
        {
          "description": "State all solutions.",
          "workingLatex": "\\theta=\\tfrac{\\pi}{6},\\ \\tfrac{7\\pi}{6}",
          "explanation": "These are the only two solutions in the interval.",
          "stepNumber": 15
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{\\pi}{6},\\ \\tfrac{7\\pi}{6}\\).",
      "commonMistakes": [
        "Using \\(\\tan\\theta=\\sqrt3\\) instead of \\(\\tfrac{1}{\\sqrt3}\\)."
      ]
    }
  },
  {
    "id": "y2tf2-019",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 48",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\csc\\theta=-\\sqrt2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the given equation.",
          "workingLatex": "\\csc\\theta=-\\sqrt2",
          "explanation": "Record what must be solved. The unknown \\(\\theta\\) lies in \\(0\\le\\theta<2\\pi\\), so the answers are radians within one full turn.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of cosecant.",
          "workingLatex": "\\csc\\theta=\\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, so we convert the equation into one for \\(\\sin\\theta\\), where standard exact values are known.",
          "stepNumber": 2
        },
        {
          "description": "State the reciprocal relationship to use.",
          "workingLatex": "\\sin\\theta=\\frac{1}{\\csc\\theta}",
          "explanation": "Inverting \\(\\csc\\theta=1/\\sin\\theta\\) gives \\(\\sin\\theta=1/\\csc\\theta\\). This is valid since \\(\\csc\\theta=-\\sqrt2\\neq0\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the given value.",
          "workingLatex": "\\sin\\theta=\\frac{1}{-\\sqrt2}",
          "explanation": "Replace \\(\\csc\\theta\\) with \\(-\\sqrt2\\). The negative sign carries through, as the reciprocal of a negative number is negative.",
          "stepNumber": 4
        },
        {
          "description": "Write the value with the sign in front.",
          "workingLatex": "\\sin\\theta=-\\frac{1}{\\sqrt2}",
          "explanation": "Bringing the minus sign to the front tidies the expression. Keeping the negative explicit now prevents a sign error when choosing quadrants.",
          "stepNumber": 5
        },
        {
          "description": "Rationalise the denominator.",
          "workingLatex": "-\\frac{1}{\\sqrt2}=-\\frac{1}{\\sqrt2}\\times\\frac{\\sqrt2}{\\sqrt2}=-\\frac{\\sqrt2}{2}",
          "explanation": "Multiplying numerator and denominator by \\(\\sqrt2\\) gives the standard rationalised form \\(-\\tfrac{\\sqrt2}{2}\\). Both forms are equal and acceptable.",
          "stepNumber": 6
        },
        {
          "description": "Take the magnitude for the reference angle.",
          "workingLatex": "|\\sin\\theta|=\\frac{1}{\\sqrt2}",
          "explanation": "The reference angle uses the magnitude only, ignoring the sign. We solve \\(\\sin\\alpha=\\tfrac{1}{\\sqrt2}\\) for an acute \\(\\alpha\\).",
          "stepNumber": 7
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "\\sin\\alpha=\\frac{1}{\\sqrt2}\\ \\Rightarrow\\ \\alpha=\\tfrac{\\pi}{4}",
          "explanation": "Since \\(\\sin\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2}\\), the acute reference angle is \\(\\tfrac{\\pi}{4}\\). This is a standard exact value.",
          "stepNumber": 8
        },
        {
          "description": "Recall the CAST sign rule for sine.",
          "workingLatex": "\\sin>0\\ \\text{in Q1, Q2};\\quad \\sin<0\\ \\text{in Q3, Q4}",
          "explanation": "Sine is positive in the first and second quadrants and negative in the third and fourth. This tells us where a negative sine can occur.",
          "stepNumber": 9
        },
        {
          "description": "Decide the quadrants from the sign.",
          "workingLatex": "\\sin\\theta<0\\ \\Rightarrow\\ \\text{Q3 and Q4}",
          "explanation": "As \\(\\sin\\theta<0\\), the solutions lie in the third and fourth quadrants, so we expect two answers in the interval.",
          "stepNumber": 10
        },
        {
          "description": "Write the third-quadrant formula.",
          "workingLatex": "\\theta=\\pi+\\alpha",
          "explanation": "In the third quadrant the angle with reference angle \\(\\alpha\\) is \\(\\pi+\\alpha\\). Substitute \\(\\alpha=\\tfrac{\\pi}{4}\\) next.",
          "stepNumber": 11
        },
        {
          "description": "Substitute and use a common denominator.",
          "workingLatex": "\\theta=\\pi+\\tfrac{\\pi}{4}=\\tfrac{4\\pi}{4}+\\tfrac{\\pi}{4}",
          "explanation": "Convert \\(\\pi\\) to \\(\\tfrac{4\\pi}{4}\\) for a common denominator before adding. This keeps the fraction arithmetic safe.",
          "stepNumber": 12
        },
        {
          "description": "Simplify the third-quadrant solution.",
          "workingLatex": "\\theta=\\tfrac{5\\pi}{4}",
          "explanation": "Adding numerators, \\(4\\pi+\\pi=5\\pi\\) over \\(4\\), gives \\(\\tfrac{5\\pi}{4}\\). This is the first solution.",
          "stepNumber": 13
        },
        {
          "description": "Write the fourth-quadrant formula.",
          "workingLatex": "\\theta=2\\pi-\\alpha",
          "explanation": "In the fourth quadrant the angle with reference angle \\(\\alpha\\) is \\(2\\pi-\\alpha\\). Substitute \\(\\alpha=\\tfrac{\\pi}{4}\\) next.",
          "stepNumber": 14
        },
        {
          "description": "Substitute and use a common denominator.",
          "workingLatex": "\\theta=2\\pi-\\tfrac{\\pi}{4}=\\tfrac{8\\pi}{4}-\\tfrac{\\pi}{4}",
          "explanation": "Writing \\(2\\pi=\\tfrac{8\\pi}{4}\\) keeps the arithmetic clean by matching denominators before subtracting.",
          "stepNumber": 15
        },
        {
          "description": "Simplify the fourth-quadrant solution.",
          "workingLatex": "\\theta=\\tfrac{7\\pi}{4}",
          "explanation": "Subtracting numerators, \\(8\\pi-\\pi=7\\pi\\) over \\(4\\), gives \\(\\tfrac{7\\pi}{4}\\). This is the second solution.",
          "stepNumber": 16
        },
        {
          "description": "Check both lie in the required range.",
          "workingLatex": "0\\le\\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}<2\\pi\\ \\checkmark",
          "explanation": "Both values satisfy \\(0\\le\\theta<2\\pi\\), so no adjustment by \\(\\pm 2\\pi\\) is needed.",
          "stepNumber": 17
        },
        {
          "description": "Sanity-check the symmetry.",
          "workingLatex": "\\tfrac{5\\pi}{4}+\\tfrac{7\\pi}{4}=3\\pi=2\\times\\tfrac{3\\pi}{2}",
          "explanation": "The two solutions are symmetric about \\(\\tfrac{3\\pi}{2}\\), as expected for a negative sine. Their average being \\(\\tfrac{3\\pi}{2}\\) confirms the pair.",
          "stepNumber": 18
        },
        {
          "description": "State all solutions.",
          "workingLatex": "\\theta=\\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "These are the only two solutions in the interval.",
          "stepNumber": 19
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}\\).",
      "commonMistakes": [
        "Sign/quadrant error."
      ]
    }
  },
  {
    "id": "y2tf2-020",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 49",
    "difficulty": "Standard",
    "questionText": "Find \\(\\sec\\!\\left(-\\tfrac{\\pi}{3}\\right)\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact",
      "even"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec\\theta=\\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so to evaluate the secant of any angle we first need the cosine of that angle.",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition to this angle.",
          "workingLatex": "\\sec\\!\\left(-\\tfrac{\\pi}{3}\\right)=\\frac{1}{\\cos\\!\\left(-\\tfrac{\\pi}{3}\\right)}",
          "explanation": "Substitute \\(\\theta=-\\tfrac{\\pi}{3}\\) into the definition. We now deal with \\(\\cos(-\\tfrac{\\pi}{3})\\) inside the reciprocal.",
          "stepNumber": 2
        },
        {
          "description": "Use that cosine is an even function.",
          "workingLatex": "\\cos(-\\theta)=\\cos\\theta",
          "explanation": "Cosine is even: a negative angle gives the same cosine as the positive angle. This is because reflecting in the \\(x\\)-axis leaves the \\(x\\)-coordinate unchanged.",
          "stepNumber": 3
        },
        {
          "description": "Apply evenness to the angle.",
          "workingLatex": "\\cos\\!\\left(-\\tfrac{\\pi}{3}\\right)=\\cos\\tfrac{\\pi}{3}",
          "explanation": "Replacing \\(-\\tfrac{\\pi}{3}\\) with \\(\\tfrac{\\pi}{3}\\) leaves the cosine unchanged. It follows that secant is even too, so no sign change will occur.",
          "stepNumber": 4
        },
        {
          "description": "Write the exact cosine value.",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12",
          "explanation": "This is a standard exact value; \\(\\tfrac{\\pi}{3}=60^\\circ\\) lies in the first quadrant where cosine is positive.",
          "stepNumber": 5
        },
        {
          "description": "Substitute the cosine value.",
          "workingLatex": "\\sec\\!\\left(-\\tfrac{\\pi}{3}\\right)=\\frac{1}{\\tfrac12}",
          "explanation": "Put \\(\\cos(-\\tfrac{\\pi}{3})=\\tfrac12\\) back into the reciprocal expression from step 2.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the reciprocal.",
          "workingLatex": "\\frac{1}{\\tfrac12}=2",
          "explanation": "Dividing \\(1\\) by \\(\\tfrac12\\) is the same as multiplying by \\(2\\), giving \\(2\\). There is no sign change, unlike \\(\\csc\\) or \\(\\cot\\), which are odd functions.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(2\\).",
      "commonMistakes": [
        "Making it negative — \\(\\sec\\) is even."
      ]
    }
  },
  {
    "id": "y2tf2-021",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 50",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\cot\\theta=\\tfrac{24}{7}\\) and \\(\\theta\\) lies in the third quadrant, find the exact values of \\(\\sec\\theta\\) and \\(\\csc\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact",
      "odd"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose the identity linking cot and csc.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "We are given \\(\\cot\\theta\\) and want \\(\\csc\\theta\\), so the Pythagorean identity \\(1+\\cot^2\\theta=\\csc^2\\theta\\) is the direct link. A common slip is reaching for \\(1+\\tan^2=\\sec^2\\) instead, which would require an extra reciprocal first.",
          "stepNumber": 1
        },
        {
          "description": "Square the numerator and denominator.",
          "workingLatex": "\\left(\\tfrac{24}{7}\\right)^2=\\tfrac{24^2}{7^2}",
          "explanation": "To square a fraction, square the top and the bottom separately: \\(\\left(\\tfrac{a}{b}\\right)^2=\\tfrac{a^2}{b^2}\\). A frequent error is to square only the numerator and leave the denominator as \\(7\\).",
          "stepNumber": 2
        },
        {
          "description": "Evaluate the two squares.",
          "workingLatex": "\\cot^2\\theta=\\tfrac{576}{49}",
          "explanation": "Compute \\(24^2=576\\) and \\(7^2=49\\). This is the value we will substitute into the identity.",
          "stepNumber": 3
        },
        {
          "description": "Substitute into the identity.",
          "workingLatex": "\\csc^2\\theta=1+\\tfrac{576}{49}",
          "explanation": "Replace \\(\\cot^2\\theta\\) with the value just found in \\(1+\\cot^2\\theta=\\csc^2\\theta\\). We will now add the \\(1\\) by writing it over the common denominator \\(49\\).",
          "stepNumber": 4
        },
        {
          "description": "Write 1 over the common denominator.",
          "workingLatex": "\\csc^2\\theta=\\tfrac{49}{49}+\\tfrac{576}{49}",
          "explanation": "To add a whole number to a fraction we give it the same denominator: \\(1=\\tfrac{49}{49}\\). Only then can the numerators be combined.",
          "stepNumber": 5
        },
        {
          "description": "Add the fractions.",
          "workingLatex": "\\csc^2\\theta=\\tfrac{625}{49}",
          "explanation": "Add the numerators over the shared denominator: \\(49+576=625\\). Note \\(625=25^2\\) and \\(49=7^2\\): this is the familiar \\(7\\text{–}24\\text{–}25\\) triangle, a good consistency check.",
          "stepNumber": 6
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\csc\\theta=\\pm\\sqrt{\\tfrac{625}{49}}",
          "explanation": "Square-rooting a squared quantity introduces a \\(\\pm\\), because both a positive and a negative number square to the same value. The sign must stay undecided until the quadrant fixes it.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the surd.",
          "workingLatex": "\\csc\\theta=\\pm\\tfrac{25}{7}",
          "explanation": "Root the top and bottom separately: \\(\\sqrt{625}=25\\) and \\(\\sqrt{49}=7\\). Never drop the \\(\\pm\\) at this stage — the sign is set in the next step.",
          "stepNumber": 8
        },
        {
          "description": "State the signs in the third quadrant.",
          "workingLatex": "\\text{Q3: }\\sin\\theta<0,\\ \\cos\\theta<0",
          "explanation": "In the third quadrant both sine and cosine are negative (only tangent and cotangent are positive there). This matches the data: \\(\\cot\\theta=\\cos\\theta/\\sin\\theta>0\\) needs sine and cosine to share a sign.",
          "stepNumber": 9
        },
        {
          "description": "Decide the sign of cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}<0",
          "explanation": "Cosecant is the reciprocal of sine, and the reciprocal of a negative number is negative. Since \\(\\sin\\theta<0\\) in Q3, \\(\\csc\\theta\\) must be negative too.",
          "stepNumber": 10
        },
        {
          "description": "Select the negative root for cosecant.",
          "workingLatex": "\\csc\\theta=-\\tfrac{25}{7}",
          "explanation": "Of the two candidates \\(\\pm\\tfrac{25}{7}\\), the quadrant forces the negative one. This is our first required answer.",
          "stepNumber": 11
        },
        {
          "description": "Recover sine by reciprocating cosecant.",
          "workingLatex": "\\sin\\theta=\\tfrac{1}{\\csc\\theta}=-\\tfrac{7}{25}",
          "explanation": "Flip \\(-\\tfrac{25}{7}\\) to get \\(\\sin\\theta\\), keeping the negative sign. Sine being negative agrees with Q3.",
          "stepNumber": 12
        },
        {
          "description": "Write cosine using cot times sine.",
          "workingLatex": "\\cos\\theta=\\cot\\theta\\,\\sin\\theta=\\tfrac{24}{7}\\cdot\\left(-\\tfrac{7}{25}\\right)",
          "explanation": "Since \\(\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\), multiplying both sides by \\(\\sin\\theta\\) gives \\(\\cos\\theta=\\cot\\theta\\sin\\theta\\). Substitute the known values.",
          "stepNumber": 13
        },
        {
          "description": "Simplify to find cosine.",
          "workingLatex": "\\cos\\theta=-\\tfrac{24}{25}",
          "explanation": "The \\(7\\) in the numerator cancels the \\(7\\) in the denominator, leaving \\(-\\tfrac{24}{25}\\). This is correctly negative for Q3.",
          "stepNumber": 14
        },
        {
          "description": "Reciprocate cosine to get secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}=-\\tfrac{25}{24}",
          "explanation": "Secant is the reciprocal of cosine, so flip \\(-\\tfrac{24}{25}\\). The negative sign is preserved, matching \\(\\cos\\theta<0\\) in Q3. This is our second required answer.",
          "stepNumber": 15
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=-\\tfrac{25}{24},\\ \\csc\\theta=-\\tfrac{25}{7}\\).",
      "commonMistakes": [
        "Taking positive roots in Q3."
      ]
    }
  },
  {
    "id": "y2tf2-022",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 51",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\csc\\theta=\\tfrac{13}{12}\\) and \\(\\theta\\) is obtuse, find the exact values of \\(\\sec\\theta\\) and \\(\\cot\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact",
      "odd"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Reciprocate cosecant to find sine.",
          "workingLatex": "\\sin\\theta=\\tfrac{1}{\\csc\\theta}=\\tfrac{1}{13/12}",
          "explanation": "Cosecant is the reciprocal of sine, so \\(\\sin\\theta=1/\\csc\\theta\\). We will simplify the compound fraction next.",
          "stepNumber": 1
        },
        {
          "description": "Simplify the reciprocal.",
          "workingLatex": "\\sin\\theta=\\tfrac{12}{13}",
          "explanation": "Dividing \\(1\\) by \\(\\tfrac{13}{12}\\) flips the fraction to \\(\\tfrac{12}{13}\\). This is the well-known \\(5\\text{–}12\\text{–}13\\) triangle.",
          "stepNumber": 2
        },
        {
          "description": "Set up the Pythagorean identity for cosine.",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Rearrange \\(\\sin^2\\theta+\\cos^2\\theta=1\\) to isolate \\(\\cos^2\\theta\\). This gives the size of cosine; its sign comes from the quadrant later.",
          "stepNumber": 3
        },
        {
          "description": "Square the value of sine.",
          "workingLatex": "\\sin^2\\theta=\\left(\\tfrac{12}{13}\\right)^2=\\tfrac{144}{169}",
          "explanation": "Square top and bottom separately: \\(12^2=144\\) and \\(13^2=169\\). Keep this as a fraction to make the subtraction clean.",
          "stepNumber": 4
        },
        {
          "description": "Substitute into the identity.",
          "workingLatex": "\\cos^2\\theta=1-\\tfrac{144}{169}",
          "explanation": "Replace \\(\\sin^2\\theta\\) with \\(\\tfrac{144}{169}\\). Write \\(1\\) over \\(169\\) to subtract.",
          "stepNumber": 5
        },
        {
          "description": "Subtract over the common denominator.",
          "workingLatex": "\\cos^2\\theta=\\tfrac{169}{169}-\\tfrac{144}{169}=\\tfrac{25}{169}",
          "explanation": "Write \\(1=\\tfrac{169}{169}\\), then \\(169-144=25\\). Everything stays over \\(169\\).",
          "stepNumber": 6
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\cos\\theta=\\pm\\sqrt{\\tfrac{25}{169}}",
          "explanation": "Square-rooting a squared quantity introduces a \\(\\pm\\), since both signs square to the same value. Hold the sign undecided until the quadrant fixes it.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the surd.",
          "workingLatex": "\\cos\\theta=\\pm\\tfrac{5}{13}",
          "explanation": "Root top and bottom: \\(\\sqrt{25}=5\\) and \\(\\sqrt{169}=13\\). Do not drop the \\(\\pm\\) yet.",
          "stepNumber": 8
        },
        {
          "description": "Identify the quadrant from obtuse.",
          "workingLatex": "90^\\circ<\\theta<180^\\circ\\ \\Rightarrow\\ \\text{Q2}",
          "explanation": "Obtuse means the angle lies strictly between \\(90^\\circ\\) and \\(180^\\circ\\), which is the second quadrant.",
          "stepNumber": 9
        },
        {
          "description": "Fix cosine's sign in Q2.",
          "workingLatex": "\\cos\\theta=-\\tfrac{5}{13}",
          "explanation": "In the second quadrant cosine is negative (only sine is positive there), so we take the negative root. Forgetting this is the classic mistake.",
          "stepNumber": 10
        },
        {
          "description": "Reciprocate cosine to get secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}=-\\tfrac{13}{5}",
          "explanation": "Secant is the reciprocal of cosine, so flip \\(-\\tfrac{5}{13}\\). The negative sign carries through. This is our first answer.",
          "stepNumber": 11
        },
        {
          "description": "Form cot as cosine over sine.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{-5/13}{12/13}",
          "explanation": "Cotangent equals \\(\\cos\\theta/\\sin\\theta\\). Substitute the two values, keeping the negative on the cosine.",
          "stepNumber": 12
        },
        {
          "description": "Turn division into multiplication.",
          "workingLatex": "\\cot\\theta=-\\tfrac{5}{13}\\cdot\\tfrac{13}{12}",
          "explanation": "Dividing by \\(\\tfrac{12}{13}\\) is the same as multiplying by its reciprocal \\(\\tfrac{13}{12}\\). This is the standard way to handle a fraction over a fraction.",
          "stepNumber": 13
        },
        {
          "description": "Cancel and simplify.",
          "workingLatex": "\\cot\\theta=-\\tfrac{5}{12}",
          "explanation": "The \\(13\\)s cancel, leaving \\(-\\tfrac{5}{12}\\). In Q2 cotangent is negative, as expected. This is our second answer.",
          "stepNumber": 14
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=-\\tfrac{13}{5},\\ \\cot\\theta=-\\tfrac{5}{12}\\).",
      "commonMistakes": [
        "Forgetting cosine is negative for an obtuse angle."
      ]
    }
  },
  {
    "id": "y2tf2-023",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 17",
    "difficulty": "Standard",
    "questionText": "Find the exact value of \\(\\sec 30^\\circ\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Rewrite secant as one over cosine.",
          "workingLatex": "\\sec 30^\\circ=\\tfrac{1}{\\cos30^\\circ}",
          "explanation": "Secant is defined as the reciprocal of cosine. A common slip is to pair secant with sine instead — remember sec goes with cos.",
          "stepNumber": 1
        },
        {
          "description": "Insert the exact value of cos 30.",
          "workingLatex": "=\\tfrac{1}{\\sqrt3/2}",
          "explanation": "From the standard \\(30\\text{–}60\\text{–}90\\) triangle, \\(\\cos30^\\circ=\\tfrac{\\sqrt3}{2}\\). Substitute this into the denominator.",
          "stepNumber": 2
        },
        {
          "description": "Rewrite dividing as multiplying.",
          "workingLatex": "=1\\cdot\\tfrac{2}{\\sqrt3}",
          "explanation": "Dividing \\(1\\) by \\(\\tfrac{\\sqrt3}{2}\\) is the same as multiplying by its reciprocal \\(\\tfrac{2}{\\sqrt3}\\). Flipping the divisor is the safe way to handle a fraction-in-a-fraction.",
          "stepNumber": 3
        },
        {
          "description": "Simplify the product.",
          "workingLatex": "=\\tfrac{2}{\\sqrt3}",
          "explanation": "Multiplying by \\(1\\) leaves \\(\\tfrac{2}{\\sqrt3}\\). This is correct but still has a surd in the denominator.",
          "stepNumber": 4
        },
        {
          "description": "Multiply top and bottom by root 3.",
          "workingLatex": "=\\tfrac{2}{\\sqrt3}\\cdot\\tfrac{\\sqrt3}{\\sqrt3}",
          "explanation": "Multiplying by \\(\\tfrac{\\sqrt3}{\\sqrt3}=1\\) does not change the value but lets us clear the surd from the denominator. This is rationalising.",
          "stepNumber": 5
        },
        {
          "description": "Complete the rationalisation.",
          "workingLatex": "=\\tfrac{2\\sqrt3}{3}",
          "explanation": "The numerator becomes \\(2\\sqrt3\\) and the denominator becomes \\(\\sqrt3\\cdot\\sqrt3=3\\). Leaving a surd in the denominator usually loses the final accuracy mark.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\tfrac{2\\sqrt3}{3}\\).",
      "commonMistakes": [
        "Not rationalising."
      ]
    }
  },
  {
    "id": "y2tf2-024",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 18",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sec\\theta=3\\) and \\(\\theta\\) is acute, find the exact value of \\(\\cot\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose the identity linking sec and tan.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "We know \\(\\sec\\theta\\) and want \\(\\cot\\theta=1/\\tan\\theta\\). The identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\) lets us find \\(\\tan\\theta\\) directly, avoiding separate \\(\\sin\\) and \\(\\cos\\) work.",
          "stepNumber": 1
        },
        {
          "description": "Rearrange for tan-squared.",
          "workingLatex": "\\tan^2\\theta=\\sec^2\\theta-1",
          "explanation": "Subtract \\(1\\) from both sides to isolate \\(\\tan^2\\theta\\). The identity is now ready for substitution.",
          "stepNumber": 2
        },
        {
          "description": "Substitute the given secant.",
          "workingLatex": "\\tan^2\\theta=3^2-1",
          "explanation": "Here \\(\\sec\\theta=3\\), so replace \\(\\sec^2\\theta\\) with \\(3^2\\). Square the whole value \\(3\\), not just part of it.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the arithmetic.",
          "workingLatex": "\\tan^2\\theta=9-1=8",
          "explanation": "Compute \\(3^2=9\\), then \\(9-1=8\\). This is the value of \\(\\tan^2\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\tan\\theta=\\pm\\sqrt8",
          "explanation": "Square-rooting introduces a \\(\\pm\\); the quadrant will decide the sign. Keep both options for now.",
          "stepNumber": 5
        },
        {
          "description": "Choose the sign from the quadrant.",
          "workingLatex": "\\theta\\text{ acute}\\Rightarrow\\tan\\theta=\\sqrt8",
          "explanation": "An acute angle lies in the first quadrant, where tangent is positive, so we take the positive root.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the surd.",
          "workingLatex": "\\tan\\theta=\\sqrt{4\\cdot2}=2\\sqrt2",
          "explanation": "Factor out the largest square: \\(8=4\\cdot2\\), and \\(\\sqrt4=2\\), so \\(\\sqrt8=2\\sqrt2\\).",
          "stepNumber": 7
        },
        {
          "description": "Reciprocate tangent to get cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{\\tan\\theta}=\\tfrac{1}{2\\sqrt2}",
          "explanation": "Cotangent is the reciprocal of tangent. The question asks for \\(\\cot\\theta\\), so do not stop at \\(\\tan\\theta\\).",
          "stepNumber": 8
        },
        {
          "description": "Multiply top and bottom by root 2.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{2\\sqrt2}\\cdot\\tfrac{\\sqrt2}{\\sqrt2}",
          "explanation": "Multiplying by \\(\\tfrac{\\sqrt2}{\\sqrt2}=1\\) prepares to clear the surd from the denominator without changing the value.",
          "stepNumber": 9
        },
        {
          "description": "Complete the rationalisation.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\sqrt2}{4}",
          "explanation": "The numerator becomes \\(\\sqrt2\\) and the denominator becomes \\(2\\cdot\\sqrt2\\cdot\\sqrt2=2\\cdot2=4\\). This clears the surd from the bottom for the exact-form mark.",
          "stepNumber": 10
        }
      ],
      "finalAnswer": "\\(\\cot\\theta=\\tfrac{\\sqrt2}{4}\\).",
      "commonMistakes": [
        "Stopping at \\(\\tan\\theta\\) without reciprocating."
      ]
    }
  },
  {
    "id": "y2tf2-025",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 19",
    "difficulty": "Foundation",
    "questionText": "Find \\(\\cot 45^\\circ\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Rewrite cot as one over tan.",
          "workingLatex": "\\cot 45^\\circ=\\tfrac{1}{\\tan45^\\circ}",
          "explanation": "Cotangent is defined as the reciprocal of tangent. Do not confuse \\(\\cot\\) with \\(\\tan\\) itself.",
          "stepNumber": 1
        },
        {
          "description": "Insert the exact value of tan 45.",
          "workingLatex": "=\\tfrac{1}{1}",
          "explanation": "From the \\(45\\text{–}45\\text{–}90\\) triangle the two legs are equal, so \\(\\tan45^\\circ=1\\).",
          "stepNumber": 2
        },
        {
          "description": "Simplify.",
          "workingLatex": "=1",
          "explanation": "One divided by one is one, so \\(\\cot45^\\circ=1\\).",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Confusing \\(\\cot\\) with \\(\\tan\\) in general (here both are 1)."
      ]
    }
  },
  {
    "id": "y2tf2-026",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 52",
    "difficulty": "Standard",
    "questionText": "Find \\(\\sec 120^\\circ\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the definition of secant.",
          "workingLatex": "\\sec\\theta=\\frac{1}{\\cos\\theta}",
          "explanation": "Secant is not a button you read off directly; it is defined as the reciprocal of cosine. Writing the definition first reminds us that the real work is to evaluate a cosine.",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition at 120 degrees.",
          "workingLatex": "\\sec120^\\circ=\\frac{1}{\\cos120^\\circ}",
          "explanation": "Substitute \\(\\theta=120^\\circ\\) into the definition. The whole problem now reduces to finding \\(\\cos120^\\circ\\); do not try to reciprocate before you know that cosine.",
          "stepNumber": 2
        },
        {
          "description": "Locate the angle by quadrant.",
          "workingLatex": "90^\\circ<120^\\circ<180^\\circ",
          "explanation": "First compare \\(120^\\circ\\) against the quadrant boundaries \\(90^\\circ\\) and \\(180^\\circ\\). It lies strictly between them.",
          "stepNumber": 3
        },
        {
          "description": "Name the quadrant.",
          "workingLatex": "120^\\circ\\in\\text{Quadrant 2}",
          "explanation": "Angles between \\(90^\\circ\\) and \\(180^\\circ\\) sit in the second quadrant. Knowing the quadrant fixes the sign of cosine, which is the part students most often get wrong.",
          "stepNumber": 4
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "180^\\circ-120^\\circ=60^\\circ",
          "explanation": "The reference (acute) angle is the distance to the nearest part of the horizontal axis; for Q2 that is \\(180^\\circ-\\theta\\). This lets us use a known exact value.",
          "stepNumber": 5
        },
        {
          "description": "Write the exact cosine magnitude.",
          "workingLatex": "\\cos60^\\circ=\\tfrac12",
          "explanation": "This is a standard exact value worth memorising (from the 30-60-90 triangle). It gives the size of \\(\\cos120^\\circ\\); the sign is dealt with separately.",
          "stepNumber": 6
        },
        {
          "description": "State the sign of cosine in Q2.",
          "workingLatex": "\\text{Q2}:\\ \\cos\\theta<0",
          "explanation": "In Quadrant 2 only sine is positive (the CAST/ASTC rule); cosine and tangent are negative there. This tells us \\(\\cos120^\\circ\\) must carry a minus sign.",
          "stepNumber": 7
        },
        {
          "description": "Attach the correct sign.",
          "workingLatex": "\\cos120^\\circ=-\\tfrac12",
          "explanation": "Combine the magnitude \\(\\tfrac12\\) with the negative sign from Q2. A common slip is to leave it as \\(+\\tfrac12\\); keeping the minus sign is essential.",
          "stepNumber": 8
        },
        {
          "description": "Substitute the cosine back in.",
          "workingLatex": "\\sec120^\\circ=\\frac{1}{-\\tfrac12}",
          "explanation": "Replace \\(\\cos120^\\circ\\) in the reciprocal expression from step 2 with its exact value \\(-\\tfrac12\\). Now it is a pure fraction calculation.",
          "stepNumber": 9
        },
        {
          "description": "Reciprocate the fraction.",
          "workingLatex": "\\frac{1}{-\\tfrac12}=-2",
          "explanation": "Dividing \\(1\\) by \\(-\\tfrac12\\) is the same as multiplying by \\(-2\\); the reciprocal of a negative number stays negative. Carrying the sign through is the key check here.",
          "stepNumber": 10
        },
        {
          "description": "Conclude the value.",
          "workingLatex": "\\sec120^\\circ=-2",
          "explanation": "State the final exact value. Since cosine was negative the secant is negative too, as expected for a Q2 angle.",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "\\(-2\\).",
      "commonMistakes": [
        "Sign error."
      ]
    }
  },
  {
    "id": "y2tf2-027",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 53",
    "difficulty": "Standard",
    "questionText": "Find \\(\\csc 150^\\circ\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the definition of cosecant.",
          "workingLatex": "\\csc\\theta=\\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is defined as the reciprocal of sine. Writing this first makes clear that we must evaluate a sine before reciprocating.",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition at 150 degrees.",
          "workingLatex": "\\csc150^\\circ=\\frac{1}{\\sin150^\\circ}",
          "explanation": "Substitute \\(\\theta=150^\\circ\\). The task reduces to evaluating \\(\\sin150^\\circ\\) accurately, including its sign.",
          "stepNumber": 2
        },
        {
          "description": "Locate the angle by quadrant.",
          "workingLatex": "90^\\circ<150^\\circ<180^\\circ",
          "explanation": "Compare \\(150^\\circ\\) with the boundaries \\(90^\\circ\\) and \\(180^\\circ\\); it lies strictly between them.",
          "stepNumber": 3
        },
        {
          "description": "Name the quadrant.",
          "workingLatex": "150^\\circ\\in\\text{Quadrant 2}",
          "explanation": "An angle between \\(90^\\circ\\) and \\(180^\\circ\\) lies in the second quadrant. This determines the sign of sine before we compute its size.",
          "stepNumber": 4
        },
        {
          "description": "Find the reference angle.",
          "workingLatex": "180^\\circ-150^\\circ=30^\\circ",
          "explanation": "For a Q2 angle the reference angle is \\(180^\\circ-\\theta\\). This converts the problem to a familiar exact value at \\(30^\\circ\\).",
          "stepNumber": 5
        },
        {
          "description": "Write the exact sine magnitude.",
          "workingLatex": "\\sin30^\\circ=\\tfrac12",
          "explanation": "A standard exact value (from the 30-60-90 triangle). It gives the size of \\(\\sin150^\\circ\\); we now confirm the sign from the quadrant.",
          "stepNumber": 6
        },
        {
          "description": "State the sign of sine in Q2.",
          "workingLatex": "\\text{Q2}:\\ \\sin\\theta>0",
          "explanation": "By the CAST/ASTC rule, sine is positive in Quadrant 2. So no sign change is needed for \\(\\sin150^\\circ\\).",
          "stepNumber": 7
        },
        {
          "description": "Attach the correct sign.",
          "workingLatex": "\\sin150^\\circ=+\\tfrac12",
          "explanation": "Combine the magnitude with the positive Q2 sign. Students sometimes wrongly make it negative; here it genuinely stays positive.",
          "stepNumber": 8
        },
        {
          "description": "Substitute the sine back in.",
          "workingLatex": "\\csc150^\\circ=\\frac{1}{\\tfrac12}",
          "explanation": "Replace \\(\\sin150^\\circ\\) in the reciprocal expression from step 2 with its exact value \\(\\tfrac12\\). This leaves a simple fraction.",
          "stepNumber": 9
        },
        {
          "description": "Reciprocate the fraction.",
          "workingLatex": "\\frac{1}{\\tfrac12}=2",
          "explanation": "Dividing \\(1\\) by \\(\\tfrac12\\) is the same as multiplying by \\(2\\), giving \\(2\\). Since the sine was positive the answer is positive.",
          "stepNumber": 10
        },
        {
          "description": "Conclude the value.",
          "workingLatex": "\\csc150^\\circ=2",
          "explanation": "State the final exact value. This matches the Q2 expectation that cosecant is positive.",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "\\(2\\).",
      "commonMistakes": [
        "Sign error — Q2 sine is positive."
      ]
    }
  },
  {
    "id": "y2tf2-028",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 54",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\cot^2\\theta=3\\) and \\(\\theta\\) is obtuse, find the exact values of \\(\\csc\\theta\\) and \\(\\sec\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Quote the cotangent identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "This Pythagorean identity (obtained by dividing \\(\\sin^2+\\cos^2=1\\) by \\(\\sin^2\\)) links \\(\\cot^2\\) directly to \\(\\csc^2\\), so it is the fastest route to the cosecant from the given data.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the given value.",
          "workingLatex": "\\csc^2\\theta=1+3",
          "explanation": "Replace \\(\\cot^2\\theta\\) with the given \\(3\\). Working with the squared quantity avoids sign issues for now.",
          "stepNumber": 2
        },
        {
          "description": "Simplify the arithmetic.",
          "workingLatex": "\\csc^2\\theta=4",
          "explanation": "Add \\(1+3\\). We now have the square of the cosecant; the sign of the root comes from the quadrant.",
          "stepNumber": 3
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\csc\\theta=\\pm\\sqrt{4}",
          "explanation": "Square-rooting both sides undoes the square, but always introduces a \\(\\pm\\). Keep both signs for now.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the surd.",
          "workingLatex": "\\csc\\theta=\\pm2",
          "explanation": "Since \\(\\sqrt{4}=2\\), the two candidates are \\(+2\\) and \\(-2\\). We must not discard a sign until the quadrant is considered, which is the most common error here.",
          "stepNumber": 5
        },
        {
          "description": "Interpret obtuse as a quadrant.",
          "workingLatex": "90^\\circ<\\theta<180^\\circ\\ \\Rightarrow\\ \\theta\\in\\text{Q2}",
          "explanation": "Obtuse means strictly between \\(90^\\circ\\) and \\(180^\\circ\\), which is the second quadrant. This is what controls the sign.",
          "stepNumber": 6
        },
        {
          "description": "State the sign of sine in Q2.",
          "workingLatex": "\\text{Q2}:\\ \\sin\\theta>0\\ \\Rightarrow\\ \\csc\\theta>0",
          "explanation": "In Quadrant 2 sine is positive, and \\(\\csc\\theta=1/\\sin\\theta\\) has the same sign as sine, so cosecant is positive.",
          "stepNumber": 7
        },
        {
          "description": "Select the cosecant value.",
          "workingLatex": "\\csc\\theta=2",
          "explanation": "Take the positive root because cosecant is positive in Q2. This discards the \\(-2\\) candidate.",
          "stepNumber": 8
        },
        {
          "description": "Reciprocate to convert cotangent.",
          "workingLatex": "\\tan^2\\theta=\\frac{1}{\\cot^2\\theta}",
          "explanation": "Since \\(\\cot\\theta=1/\\tan\\theta\\), squaring gives \\(\\cot^2\\theta=1/\\tan^2\\theta\\), so \\(\\tan^2\\theta\\) is the reciprocal of \\(\\cot^2\\theta\\).",
          "stepNumber": 9
        },
        {
          "description": "Substitute the given cotangent.",
          "workingLatex": "\\tan^2\\theta=\\frac13",
          "explanation": "Put \\(\\cot^2\\theta=3\\) into the reciprocal to get \\(\\tfrac13\\). This prepares the second Pythagorean identity.",
          "stepNumber": 10
        },
        {
          "description": "Quote the tangent identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "This identity (from dividing \\(\\sin^2+\\cos^2=1\\) by \\(\\cos^2\\)) links \\(\\tan^2\\) to \\(\\sec^2\\), giving the secant from the value just found.",
          "stepNumber": 11
        },
        {
          "description": "Substitute the tangent value.",
          "workingLatex": "\\sec^2\\theta=1+\\tfrac13",
          "explanation": "Replace \\(\\tan^2\\theta\\) with \\(\\tfrac13\\). We now just add the constant to the fraction.",
          "stepNumber": 12
        },
        {
          "description": "Add over a common denominator.",
          "workingLatex": "\\sec^2\\theta=\\tfrac33+\\tfrac13=\\tfrac43",
          "explanation": "Write \\(1\\) as \\(\\tfrac33\\) so the fractions share a denominator, then add. We now have the square of the secant.",
          "stepNumber": 13
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\sec\\theta=\\pm\\sqrt{\\tfrac43}",
          "explanation": "Root both sides, keeping \\(\\pm\\) until the quadrant decides the sign.",
          "stepNumber": 14
        },
        {
          "description": "Split the root over the fraction.",
          "workingLatex": "\\sec\\theta=\\pm\\frac{\\sqrt4}{\\sqrt3}=\\pm\\frac{2}{\\sqrt3}",
          "explanation": "Use \\(\\sqrt{a/b}=\\sqrt a/\\sqrt b\\); with \\(\\sqrt4=2\\) this gives \\(\\pm\\tfrac{2}{\\sqrt3}\\).",
          "stepNumber": 15
        },
        {
          "description": "State the sign of cosine in Q2.",
          "workingLatex": "\\text{Q2}:\\ \\cos\\theta<0\\ \\Rightarrow\\ \\sec\\theta<0",
          "explanation": "In Quadrant 2 cosine is negative, so its reciprocal \\(\\sec\\theta\\) is negative too.",
          "stepNumber": 16
        },
        {
          "description": "Select the negative root.",
          "workingLatex": "\\sec\\theta=-\\frac{2}{\\sqrt3}",
          "explanation": "Take the negative value, discarding the positive candidate, because secant is negative in Q2.",
          "stepNumber": 17
        },
        {
          "description": "Rationalise the denominator.",
          "workingLatex": "\\sec\\theta=-\\frac{2}{\\sqrt3}\\times\\frac{\\sqrt3}{\\sqrt3}=-\\frac{2\\sqrt3}{3}",
          "explanation": "Multiply top and bottom by \\(\\sqrt3\\) to clear the surd from the denominator, giving the standard exact form.",
          "stepNumber": 18
        }
      ],
      "finalAnswer": "\\(\\csc\\theta=2,\\ \\sec\\theta=-\\tfrac{2\\sqrt3}{3}\\).",
      "commonMistakes": [
        "Sign errors for an obtuse angle."
      ]
    }
  },
  {
    "id": "y2tf2-029",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 55",
    "difficulty": "Challenge",
    "questionText": "The function is defined by \\(f(\\theta)=\\sec\\theta\\). State its range and explain why \\(f\\) takes no value strictly between \\(-1\\) and \\(1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "domain"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "f(\\theta)=\\sec\\theta=\\frac{1}{\\cos\\theta}",
          "explanation": "Everything about the range follows from the fact that secant is the reciprocal of cosine. It is defined exactly where \\(\\cos\\theta\\neq0\\).",
          "stepNumber": 1
        },
        {
          "description": "State the range of cosine.",
          "workingLatex": "-1\\le\\cos\\theta\\le1",
          "explanation": "Cosine of any real angle lies in \\([-1,1]\\). This is the bound we will reciprocate.",
          "stepNumber": 2
        },
        {
          "description": "Note where secant is undefined.",
          "workingLatex": "\\cos\\theta=0\\ \\Rightarrow\\ \\sec\\theta\\ \\text{undefined}",
          "explanation": "Division by zero is not allowed, so any \\(\\theta\\) with \\(\\cos\\theta=0\\) (such as \\(90^\\circ\\)) is excluded from the domain. We discard these from the range argument.",
          "stepNumber": 3
        },
        {
          "description": "Bound the nonzero magnitude of cosine.",
          "workingLatex": "0<|\\cos\\theta|\\le1",
          "explanation": "After removing the zeros, the magnitude of cosine is strictly positive but never exceeds \\(1\\). Taking magnitudes lets us handle both signs together.",
          "stepNumber": 4
        },
        {
          "description": "Reciprocate the magnitude inequality.",
          "workingLatex": "\\frac{1}{|\\cos\\theta|}\\ge\\frac{1}{1}=1",
          "explanation": "Reciprocating reverses an inequality between positive numbers: since \\(|\\cos\\theta|\\le1\\), its reciprocal is at least \\(1\\). This is the heart of why the gap appears.",
          "stepNumber": 5
        },
        {
          "description": "Identify the reciprocal as secant magnitude.",
          "workingLatex": "\\left|\\frac{1}{\\cos\\theta}\\right|=\\frac{1}{|\\cos\\theta|}\\ge1",
          "explanation": "Because \\(|1/x|=1/|x|\\), the left side is exactly \\(|\\sec\\theta|\\). So the magnitude of secant is at least \\(1\\).",
          "stepNumber": 6
        },
        {
          "description": "Unfold the magnitude bound.",
          "workingLatex": "|\\sec\\theta|\\ge1\\ \\Rightarrow\\ \\sec\\theta\\le-1\\ \\text{or}\\ \\sec\\theta\\ge1",
          "explanation": "A magnitude of at least \\(1\\) means the value is either \\(\\ge1\\) (where cosine is positive) or \\(\\le-1\\) (where cosine is negative), keeping the sign of cosine.",
          "stepNumber": 7
        },
        {
          "description": "Explain the forbidden band.",
          "workingLatex": "\\nexists\\,\\theta:\\ -1<\\sec\\theta<1",
          "explanation": "No output can have size below \\(1\\), so the open interval \\((-1,1)\\) is never reached. The gap is exactly the reciprocal image of \\(|\\cos\\theta|\\le1\\).",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "Range: \\(\\sec\\theta\\le-1\\) or \\(\\sec\\theta\\ge1\\).",
      "commonMistakes": [
        "Giving \\(-1\\le f\\le1\\) (that is the range of cosine, not its reciprocal)."
      ]
    }
  },
  {
    "id": "y2tf2-030",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 56",
    "difficulty": "Challenge",
    "questionText": "Find the range of \\(g(\\theta)=3+2\\csc\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of cosecant.",
          "workingLatex": "\\csc\\theta=\\frac{1}{\\sin\\theta}",
          "explanation": "The behaviour of \\(g\\) is driven by \\(\\csc\\theta\\), the reciprocal of sine. We first pin down its range before transforming.",
          "stepNumber": 1
        },
        {
          "description": "Bound the nonzero magnitude of sine.",
          "workingLatex": "0<|\\sin\\theta|\\le1",
          "explanation": "Sine lies in \\([-1,1]\\), and the zeros are excluded because cosecant is undefined there. So the magnitude is positive but at most \\(1\\).",
          "stepNumber": 2
        },
        {
          "description": "Reciprocate to bound cosecant magnitude.",
          "workingLatex": "|\\csc\\theta|=\\frac{1}{|\\sin\\theta|}\\ge1",
          "explanation": "Reciprocating a positive number that is at most \\(1\\) gives one that is at least \\(1\\). This is the same gap argument as for secant.",
          "stepNumber": 3
        },
        {
          "description": "State the range of cosecant.",
          "workingLatex": "\\csc\\theta\\le-1\\ \\text{or}\\ \\csc\\theta\\ge1",
          "explanation": "Magnitude at least \\(1\\) unfolds into the two branches, keeping the sign of sine. The forbidden band for \\(\\csc\\) is \\((-1,1)\\).",
          "stepNumber": 4
        },
        {
          "description": "Multiply both branches by 2.",
          "workingLatex": "2\\csc\\theta\\le-2\\ \\text{or}\\ 2\\csc\\theta\\ge2",
          "explanation": "Multiplying by the positive constant \\(2\\) preserves the inequality directions. Scaling stretches the forbidden band to \\((-2,2)\\).",
          "stepNumber": 5
        },
        {
          "description": "Add 3 to both branches.",
          "workingLatex": "3+2\\csc\\theta\\le3-2\\ \\text{or}\\ 3+2\\csc\\theta\\ge3+2",
          "explanation": "Adding the constant \\(3\\) to every part is allowed and does not change inequality directions. Keep the arithmetic unevaluated for one line so the shift is visible.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the constant bounds.",
          "workingLatex": "3+2\\csc\\theta\\le1\\ \\text{or}\\ 3+2\\csc\\theta\\ge5",
          "explanation": "Compute \\(3-2=1\\) and \\(3+2=5\\). The forbidden band has shifted up by \\(3\\) to become \\((1,5)\\).",
          "stepNumber": 7
        },
        {
          "description": "Rewrite in terms of g.",
          "workingLatex": "g(\\theta)\\le1\\ \\text{or}\\ g(\\theta)\\ge5",
          "explanation": "Since \\(g(\\theta)=3+2\\csc\\theta\\), the two branches give the range directly. The values strictly between \\(1\\) and \\(5\\) are never attained.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(g(\\theta)\\le1\\) or \\(g(\\theta)\\ge5\\).",
      "commonMistakes": [
        "Treating \\(\\csc\\theta\\) as if it ranged over all reals."
      ]
    }
  },
  {
    "id": "y2tf2-031",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 20",
    "difficulty": "Standard",
    "questionText": "State the sign of \\(\\sec\\theta\\) when \\(\\theta\\) is in the second quadrant.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "signs"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write secant as a reciprocal of cosine.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Start from the definition: secant is the reciprocal of cosine, not of sine. Getting this base relationship right is the whole question, so do not confuse it with cosecant (which is 1/sin).",
          "stepNumber": 1
        },
        {
          "description": "Note a reciprocal keeps the sign.",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\tfrac{1}{\\cos\\theta}\\right)=\\operatorname{sign}(\\cos\\theta)",
          "explanation": "Taking the reciprocal of a non-zero number never changes whether it is positive or negative, because 1 divided by a negative is negative and 1 divided by a positive is positive (e.g. 1/(-2)=-0.5 is still negative). So sec and cos always share the same sign.",
          "stepNumber": 2
        },
        {
          "description": "Identify cosine as the x-coordinate.",
          "workingLatex": "\\cos\\theta=x\\ \\text{on the unit circle}",
          "explanation": "On the unit circle the point at angle theta has coordinates (cos(theta), sin(theta)), so cosine is exactly the x-coordinate. This turns the question of the sign of cosine into a question about the sign of x.",
          "stepNumber": 3
        },
        {
          "description": "Locate the second quadrant.",
          "workingLatex": "\\text{Q2: } x<0,\\ y>0",
          "explanation": "The second quadrant is the top-left of the plane: points there have negative x and positive y. A common slip is mixing up Q2 (top-left) with Q4 (bottom-right).",
          "stepNumber": 4
        },
        {
          "description": "Recall the sign of cosine in Q2.",
          "workingLatex": "\\theta\\in\\text{Q2}\\ \\Rightarrow\\ \\cos\\theta=x<0",
          "explanation": "Since cosine equals the x-coordinate and x is negative in the second quadrant, cosine is negative there (only sine stays positive in Q2, per the CAST/'All Students' rule).",
          "stepNumber": 5
        },
        {
          "description": "Carry the sign over to secant.",
          "workingLatex": "\\cos\\theta<0\\ \\Rightarrow\\ \\sec\\theta=\\tfrac{1}{\\cos\\theta}<0",
          "explanation": "Since cosine is negative and secant shares its sign (from step 2), secant must also be negative in the second quadrant.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Negative.",
      "commonMistakes": [
        "Following the sign of sine instead of cosine for \\(\\sec\\)."
      ]
    }
  },
  {
    "id": "y2tf2-032",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 21",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(\\csc^2\\theta+\\cot\\theta=7\\). Give answers to 3 s.f.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "signs"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose a strategy: work in cot.",
          "workingLatex": "\\text{Aim: one trig function only, so target }\\cot\\theta",
          "explanation": "The equation mixes csc^2 and cot. Since there is an identity linking them, rewriting csc^2 in terms of cot leaves a single function and hence a solvable quadratic.",
          "stepNumber": 1
        },
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "This comes from dividing sin^2+cos^2=1 by sin^2. Use this exact form; a common slip is writing 1+tan^2=csc^2, which is wrong (that one gives sec^2).",
          "stepNumber": 2
        },
        {
          "description": "Substitute for csc^2(theta).",
          "workingLatex": "\\bigl(1+\\cot^2\\theta\\bigr)+\\cot\\theta=7",
          "explanation": "Replace csc^2(theta) by 1+cot^2(theta) so every term is now expressed through cot(theta). The brackets keep the substituted block intact.",
          "stepNumber": 3
        },
        {
          "description": "Drop the now-redundant brackets.",
          "workingLatex": "\\cot^2\\theta+\\cot\\theta+1=7",
          "explanation": "Because the bracket is only being added (no minus sign or factor outside it), it can simply be removed without changing any signs.",
          "stepNumber": 4
        },
        {
          "description": "Move the 7 to the left.",
          "workingLatex": "\\cot^2\\theta+\\cot\\theta+1-7=0",
          "explanation": "Subtract 7 from both sides so the equation is set to zero, ready to factorise. Quadratics are easiest to solve once one side is 0.",
          "stepNumber": 5
        },
        {
          "description": "Simplify the constant term.",
          "workingLatex": "\\cot^2\\theta+\\cot\\theta-6=0",
          "explanation": "Combine 1-7=-6. Treat cot(theta) as a single variable (say c) so this is just c^2+c-6=0.",
          "stepNumber": 6
        },
        {
          "description": "Find the factor pair.",
          "workingLatex": "(+3)\\times(-2)=-6,\\quad (+3)+(-2)=+1",
          "explanation": "For c^2+c-6 we need two numbers multiplying to -6 (the constant) and adding to +1 (the coefficient of c): these are +3 and -2.",
          "stepNumber": 7
        },
        {
          "description": "Factorise the quadratic.",
          "workingLatex": "(\\cot\\theta+3)(\\cot\\theta-2)=0",
          "explanation": "Use the pair from the previous step to write the factors. Expanding mentally should recover the middle term +cot(theta), confirming the factorisation.",
          "stepNumber": 8
        },
        {
          "description": "Read off the two cotangent values.",
          "workingLatex": "\\cot\\theta=-3\\quad\\text{or}\\quad\\cot\\theta=2",
          "explanation": "A product is zero only when a factor is zero, so set each bracket to zero to get the two cases to solve separately.",
          "stepNumber": 9
        },
        {
          "description": "Convert each to a tangent value.",
          "workingLatex": "\\tan\\theta=-\\tfrac13\\quad\\text{or}\\quad\\tan\\theta=\\tfrac12",
          "explanation": "Since cot(theta)=1/tan(theta), take the reciprocal of each value. This lets you use the calculator's arctan directly.",
          "stepNumber": 10
        },
        {
          "description": "Solve tan=1/2: principal value.",
          "workingLatex": "\\theta_1=\\arctan\\tfrac12=0.4636\\ldots",
          "explanation": "The arctangent gives the first-quadrant value in radians (tan is positive in Q1). Keep extra digits now and round only at the very end.",
          "stepNumber": 11
        },
        {
          "description": "Find the second tan=1/2 solution.",
          "workingLatex": "\\theta=0.4636+\\pi=3.605\\ldots",
          "explanation": "Tangent has period pi, so the next solution in [0,2pi) is the principal value plus pi. This lands in Q3, where tan is also positive.",
          "stepNumber": 12
        },
        {
          "description": "Solve tan=-1/3: principal value.",
          "workingLatex": "\\arctan\\!\\left(-\\tfrac13\\right)=-0.3217\\ldots",
          "explanation": "The calculator returns a negative angle for a negative tangent, which is outside [0,2pi), so it must be shifted into range next.",
          "stepNumber": 13
        },
        {
          "description": "Shift the negative root into range.",
          "workingLatex": "\\theta=-0.3217+\\pi=2.820\\ldots",
          "explanation": "Add pi to reach the Q2 solution inside the interval. Adding pi (not 2pi here) gives the smaller in-range angle where tangent is negative.",
          "stepNumber": 14
        },
        {
          "description": "Add another pi for the last solution.",
          "workingLatex": "\\theta=2.820+\\pi=5.961\\ldots",
          "explanation": "Using the period pi again gives the Q4 solution, still less than 2pi. A further +pi would exceed 2pi, so stop here.",
          "stepNumber": 15
        },
        {
          "description": "Round all four answers to 3 s.f.",
          "workingLatex": "\\theta\\approx0.464,\\ 2.82,\\ 3.61,\\ 5.96",
          "explanation": "Round each retained value to three significant figures. Listing them in increasing order makes it easy to confirm none of the four were missed.",
          "stepNumber": 16
        }
      ],
      "finalAnswer": "\\(\\theta\\approx0.464,\\ 2.82,\\ 3.61,\\ 5.96\\) rad.",
      "commonMistakes": [
        "Wrong Pythagorean form."
      ]
    }
  },
  {
    "id": "y2tf2-033",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 22",
    "difficulty": "Challenge",
    "questionText": "Solve, for \\(0\\le\\theta<2\\pi\\), \\(2\\sec^2\\theta-\\tan\\theta-3=0\\). Give answers to 3 s.f. where not exact.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "signs"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Choose a strategy: work in tan.",
          "workingLatex": "\\text{Target a single function: }\\tan\\theta",
          "explanation": "The equation contains sec^2 and tan. Rewriting sec^2 via the Pythagorean identity collapses everything into tan, giving a quadratic in one variable.",
          "stepNumber": 1
        },
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "\\sec^2\\theta=1+\\tan^2\\theta",
          "explanation": "This is sin^2+cos^2=1 divided through by cos^2. Use this exact form so sec turns cleanly into tan.",
          "stepNumber": 2
        },
        {
          "description": "Substitute, keeping the factor of 2.",
          "workingLatex": "2\\bigl(1+\\tan^2\\theta\\bigr)-\\tan\\theta-3=0",
          "explanation": "The whole bracket 1+tan^2(theta) is multiplied by 2. A frequent error is multiplying only the tan^2 term and forgetting the 2 also hits the 1.",
          "stepNumber": 3
        },
        {
          "description": "Distribute the 2 over the bracket.",
          "workingLatex": "2\\cdot 1+2\\tan^2\\theta-\\tan\\theta-3=0",
          "explanation": "Multiply each term inside the bracket by 2 separately, writing the 2*1 explicitly so the constant is not overlooked.",
          "stepNumber": 4
        },
        {
          "description": "Tidy the expanded term.",
          "workingLatex": "2+2\\tan^2\\theta-\\tan\\theta-3=0",
          "explanation": "Replace 2*1 with 2. The expression now has the two constants 2 and -3 ready to combine.",
          "stepNumber": 5
        },
        {
          "description": "Collect the constant terms.",
          "workingLatex": "2\\tan^2\\theta-\\tan\\theta-1=0",
          "explanation": "Combine 2-3=-1 and order the terms with the squared term first. Treat tan(theta) as a single variable so this reads as 2t^2-t-1=0.",
          "stepNumber": 6
        },
        {
          "description": "Split the middle term.",
          "workingLatex": "2\\tan^2\\theta-2\\tan\\theta+\\tan\\theta-1=0",
          "explanation": "For 2t^2-t-1, find factors of 2*(-1)=-2 that add to -1: these are -2 and +1, so split -t into -2t+t ready for grouping.",
          "stepNumber": 7
        },
        {
          "description": "Factorise by grouping.",
          "workingLatex": "(2\\tan\\theta+1)(\\tan\\theta-1)=0",
          "explanation": "Group 2t^2-2t=2t(t-1) and t-1=1(t-1), giving the common factor (t-1). Expanding mentally should recover -tan(theta) as the middle term.",
          "stepNumber": 8
        },
        {
          "description": "Read off the two tangent values.",
          "workingLatex": "\\tan\\theta=-\\tfrac12\\quad\\text{or}\\quad\\tan\\theta=1",
          "explanation": "Set each factor to zero. From 2tan+1=0 you get tan=-1/2; from tan-1=0 you get tan=1.",
          "stepNumber": 9
        },
        {
          "description": "Solve tan=1: first solution.",
          "workingLatex": "\\theta=\\arctan 1=\\tfrac{\\pi}{4}",
          "explanation": "tan(pi/4)=1 is an exact standard value, so give it exactly rather than as a decimal.",
          "stepNumber": 10
        },
        {
          "description": "Add pi for the second solution.",
          "workingLatex": "\\theta=\\tfrac{\\pi}{4}+\\pi=\\tfrac{5\\pi}{4}",
          "explanation": "Tangent has period pi, so the Q3 solution is pi/4+pi. Both pi/4 and 5pi/4 lie in [0,2pi).",
          "stepNumber": 11
        },
        {
          "description": "Solve tan=-1/2: principal value.",
          "workingLatex": "\\arctan\\!\\left(-\\tfrac12\\right)=-0.4636\\ldots",
          "explanation": "The calculator returns a negative angle for a negative tangent, which is outside the interval, so it must be shifted into range.",
          "stepNumber": 12
        },
        {
          "description": "Shift into range by adding pi.",
          "workingLatex": "\\theta=-0.4636+\\pi=2.678\\ldots",
          "explanation": "Adding pi gives the Q2 solution inside [0,2pi), where tangent is negative.",
          "stepNumber": 13
        },
        {
          "description": "Add another pi for the last solution.",
          "workingLatex": "\\theta=2.678+\\pi=5.820\\ldots",
          "explanation": "The period pi gives the Q4 solution, still below 2pi. A further +pi would leave the interval, so stop.",
          "stepNumber": 14
        },
        {
          "description": "Round the non-exact answers to 3 s.f.",
          "workingLatex": "\\theta\\approx2.68,\\ 5.82",
          "explanation": "The two pi/4-based answers stay exact; only these two decimal roots are rounded to three significant figures.",
          "stepNumber": 15
        }
      ],
      "finalAnswer": "\\(\\theta=\\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4}\\) and \\(\\theta\\approx2.68,\\ 5.82\\).",
      "commonMistakes": [
        "Forgetting the \\(2\\) when substituting \\(\\sec^2=1+\\tan^2\\)."
      ]
    }
  },
  {
    "id": "y2tf2-034",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 23",
    "difficulty": "Standard",
    "questionText": "In which quadrants is \\(\\sec\\theta>0\\)?",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "signs"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write secant as a reciprocal of cosine.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Begin from the definition so the sign question becomes one about cosine. Note it is cosine, not sine, for secant (cosecant is the one tied to sine).",
          "stepNumber": 1
        },
        {
          "description": "Recall a reciprocal preserves sign.",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\tfrac{1}{\\cos\\theta}\\right)=\\operatorname{sign}(\\cos\\theta)",
          "explanation": "One divided by a positive number is positive, and one divided by a negative number is negative, so a non-zero quantity and its reciprocal always carry the same sign.",
          "stepNumber": 2
        },
        {
          "description": "Relate the sign of sec to that of cos.",
          "workingLatex": "\\sec\\theta>0\\iff\\cos\\theta>0",
          "explanation": "Because they share a sign (step 2), secant is positive in exactly the same places where cosine is positive. So we just need to find where cosine is positive.",
          "stepNumber": 3
        },
        {
          "description": "Identify cosine as the x-coordinate.",
          "workingLatex": "\\cos\\theta=x\\ \\text{on the unit circle}",
          "explanation": "On the unit circle the point at angle theta is (cos(theta), sin(theta)), so cosine equals the x-coordinate. Asking where cosine is positive means asking where x is positive.",
          "stepNumber": 4
        },
        {
          "description": "State where x is positive.",
          "workingLatex": "x>0\\ \\text{on the right half-plane}",
          "explanation": "The x-coordinate is positive everywhere to the right of the vertical axis, i.e. on the right-hand half of the circle.",
          "stepNumber": 5
        },
        {
          "description": "Name the quadrants in the right half.",
          "workingLatex": "\\text{right half} = \\text{Q1}\\ (x>0,y>0)\\ \\text{and}\\ \\text{Q4}\\ (x>0,y<0)",
          "explanation": "The right half-plane consists of the first quadrant (top-right) and the fourth quadrant (bottom-right); both have positive x regardless of the sign of y.",
          "stepNumber": 6
        },
        {
          "description": "Conclude where secant is positive.",
          "workingLatex": "\\cos\\theta>0\\ \\text{in Q1, Q4}\\ \\Rightarrow\\ \\sec\\theta>0\\ \\text{in Q1, Q4}",
          "explanation": "Since cosine is positive in quadrants 1 and 4, and secant matches cosine's sign, secant is positive in those same two quadrants.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Q1 and Q4.",
      "commonMistakes": [
        "Listing where sine (not cosine) is positive."
      ]
    }
  },
  {
    "id": "y2tf2-035",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 24",
    "difficulty": "Standard",
    "questionText": "In which quadrants is \\(\\cot\\theta<0\\)?",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "signs"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write cotangent as cosine over sine.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Express cot as a ratio so its sign is decided by the signs of cosine and sine together. (Equivalently cot=1/tan, but the cos/sin form makes the quadrant signs clearer.)",
          "stepNumber": 1
        },
        {
          "description": "State when a quotient is negative.",
          "workingLatex": "\\tfrac{\\cos\\theta}{\\sin\\theta}<0\\iff\\operatorname{sign}(\\cos\\theta)\\ne\\operatorname{sign}(\\sin\\theta)",
          "explanation": "A fraction is negative exactly when its numerator and denominator have opposite signs (positive over negative, or negative over positive). So cot is negative precisely where cos and sin disagree in sign.",
          "stepNumber": 2
        },
        {
          "description": "Recall the quadrant signs of cos and sin.",
          "workingLatex": "\\text{Q1}(+,+)\\ \\text{Q2}(-,+)\\ \\text{Q3}(-,-)\\ \\text{Q4}(+,-)",
          "explanation": "Writing the signs as (cos, sin) per quadrant: cosine follows x (positive on the right), sine follows y (positive on top). This lets us spot where the two disagree.",
          "stepNumber": 3
        },
        {
          "description": "Check Q2 where cosine is negative.",
          "workingLatex": "\\text{Q2: }\\cos\\theta<0,\\ \\sin\\theta>0\\ \\Rightarrow\\ \\cot\\theta<0",
          "explanation": "In the second quadrant cosine is negative but sine is positive, so the ratio is a negative over a positive, which is negative.",
          "stepNumber": 4
        },
        {
          "description": "Check Q4 where sine is negative.",
          "workingLatex": "\\text{Q4: }\\cos\\theta>0,\\ \\sin\\theta<0\\ \\Rightarrow\\ \\cot\\theta<0",
          "explanation": "In the fourth quadrant cosine is positive but sine is negative, again giving opposite signs and a negative ratio.",
          "stepNumber": 5
        },
        {
          "description": "Confirm Q1 and Q3 give positive cot.",
          "workingLatex": "\\text{Q1}(+,+),\\ \\text{Q3}(-,-)\\ \\Rightarrow\\ \\cot\\theta>0",
          "explanation": "In the first quadrant both are positive and in the third both are negative; matching signs make the ratio positive, so these quadrants are excluded.",
          "stepNumber": 6
        },
        {
          "description": "Conclude the quadrants.",
          "workingLatex": "\\cot\\theta<0\\ \\text{in Q2 and Q4}",
          "explanation": "Only the quadrants where cos and sin disagree in sign give a negative cotangent, namely Q2 and Q4.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Q2 and Q4.",
      "commonMistakes": [
        "Forgetting \\(\\cot<0\\) where sin and cos have opposite signs."
      ]
    }
  },
  {
    "id": "y2tf2-036",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 25",
    "difficulty": "Standard",
    "questionText": "In a right triangle with sides 3, 4, 5 and angle \\(\\theta\\) opposite the side of length 3, find \\(\\sec\\theta\\), \\(\\csc\\theta\\), \\(\\cot\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "right triangle"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the hypotenuse.",
          "workingLatex": "\\text{hyp}=5",
          "explanation": "In any right triangle the hypotenuse is the longest side, lying opposite the right angle. Here that is 5, and it stays fixed no matter which acute angle we examine.",
          "stepNumber": 1
        },
        {
          "description": "Identify the opposite side.",
          "workingLatex": "\\text{opp}=3",
          "explanation": "The question states \\(\\theta\\) is opposite the side of length 3, so the opposite side is 3. A common slip is to grab the angle's adjacent side here instead.",
          "stepNumber": 2
        },
        {
          "description": "Identify the adjacent side.",
          "workingLatex": "\\text{adj}=4",
          "explanation": "The remaining leg, 4, touches the angle \\(\\theta\\) without being the hypotenuse, so it is the adjacent side. The three sides are now fully labelled.",
          "stepNumber": 3
        },
        {
          "description": "Recall the SOHCAHTOA ratios.",
          "workingLatex": "\\sin\\theta=\\tfrac{\\text{opp}}{\\text{hyp}},\\ \\cos\\theta=\\tfrac{\\text{adj}}{\\text{hyp}},\\ \\tan\\theta=\\tfrac{\\text{opp}}{\\text{adj}}",
          "explanation": "We build the reciprocal ratios from the standard ratios, so write SOHCAHTOA down first. SOH gives sine, CAH gives cosine, TOA gives tangent.",
          "stepNumber": 4
        },
        {
          "description": "Compute the three basic ratios.",
          "workingLatex": "\\sin\\theta=\\tfrac{3}{5},\\ \\cos\\theta=\\tfrac{4}{5},\\ \\tan\\theta=\\tfrac{3}{4}",
          "explanation": "Substitute opp = 3, adj = 4, hyp = 5 into each ratio. Having these explicit values makes the reciprocals a one-step flip.",
          "stepNumber": 5
        },
        {
          "description": "Define the reciprocal ratios.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta},\\ \\csc\\theta=\\tfrac{1}{\\sin\\theta},\\ \\cot\\theta=\\tfrac{1}{\\tan\\theta}",
          "explanation": "Secant is the reciprocal of cosine, cosecant of sine, cotangent of tangent. Remember the mismatch: \\(\\sec\\) pairs with \\(\\cos\\), not \\(\\sin\\).",
          "stepNumber": 6
        },
        {
          "description": "Rewrite reciprocals as side ratios.",
          "workingLatex": "\\sec\\theta=\\tfrac{\\text{hyp}}{\\text{adj}},\\ \\csc\\theta=\\tfrac{\\text{hyp}}{\\text{opp}},\\ \\cot\\theta=\\tfrac{\\text{adj}}{\\text{opp}}",
          "explanation": "Taking the reciprocal of each ratio simply flips the fraction, so opp/hyp becomes hyp/opp, adj/hyp becomes hyp/adj, and opp/adj becomes adj/opp.",
          "stepNumber": 7
        },
        {
          "description": "Substitute values for the secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{\\text{hyp}}{\\text{adj}}=\\tfrac{5}{4}",
          "explanation": "Put hyp = 5 and adj = 4 into hyp/adj. This is exactly the reciprocal of \\(\\cos\\theta=\\tfrac45\\), a quick sanity check.",
          "stepNumber": 8
        },
        {
          "description": "Substitute values for the cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{\\text{hyp}}{\\text{opp}}=\\tfrac{5}{3}",
          "explanation": "Put hyp = 5 and opp = 3 into hyp/opp. This is the reciprocal of \\(\\sin\\theta=\\tfrac35\\), confirming the flip.",
          "stepNumber": 9
        },
        {
          "description": "Substitute values for the cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\text{adj}}{\\text{opp}}=\\tfrac{4}{3}",
          "explanation": "Put adj = 4 and opp = 3 into adj/opp. This is the reciprocal of \\(\\tan\\theta=\\tfrac34\\), so all three results are consistent.",
          "stepNumber": 10
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=\\tfrac54,\\ \\csc\\theta=\\tfrac53,\\ \\cot\\theta=\\tfrac43\\).",
      "commonMistakes": [
        "Mixing up opposite/adjacent."
      ]
    }
  },
  {
    "id": "y2tf2-037",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 26",
    "difficulty": "Standard",
    "questionText": "In a right triangle 5-12-13 with \\(\\theta\\) opposite the side 5, find \\(\\sec\\theta\\), \\(\\csc\\theta\\), \\(\\cot\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "right triangle"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the hypotenuse.",
          "workingLatex": "\\text{hyp}=13",
          "explanation": "The hypotenuse is the longest side, lying opposite the right angle; here that is 13. It is independent of which acute angle we choose.",
          "stepNumber": 1
        },
        {
          "description": "Identify the opposite side.",
          "workingLatex": "\\text{opp}=5",
          "explanation": "We are told \\(\\theta\\) is opposite the side 5, so opp = 5. Do not confuse this with the side touching the angle.",
          "stepNumber": 2
        },
        {
          "description": "Identify the adjacent side.",
          "workingLatex": "\\text{adj}=12",
          "explanation": "The leftover leg, 12, touches \\(\\theta\\) without being the hypotenuse, so it is adjacent. All three sides are now labelled.",
          "stepNumber": 3
        },
        {
          "description": "Recall the SOHCAHTOA ratios.",
          "workingLatex": "\\sin\\theta=\\tfrac{\\text{opp}}{\\text{hyp}},\\ \\cos\\theta=\\tfrac{\\text{adj}}{\\text{hyp}},\\ \\tan\\theta=\\tfrac{\\text{opp}}{\\text{adj}}",
          "explanation": "These standard ratios are the foundation for the reciprocal ratios we want: SOH, CAH, TOA.",
          "stepNumber": 4
        },
        {
          "description": "Compute the three basic ratios.",
          "workingLatex": "\\sin\\theta=\\tfrac{5}{13},\\ \\cos\\theta=\\tfrac{12}{13},\\ \\tan\\theta=\\tfrac{5}{12}",
          "explanation": "Substitute opp = 5, adj = 12, hyp = 13 into each ratio. With these explicit, the reciprocals are a single flip.",
          "stepNumber": 5
        },
        {
          "description": "Define the reciprocal ratios.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta},\\ \\csc\\theta=\\tfrac{1}{\\sin\\theta},\\ \\cot\\theta=\\tfrac{1}{\\tan\\theta}",
          "explanation": "Secant pairs with cosine, cosecant with sine, cotangent with tangent. The sec/cos pairing is the one most often muddled.",
          "stepNumber": 6
        },
        {
          "description": "Flip each ratio into side form.",
          "workingLatex": "\\sec\\theta=\\tfrac{\\text{hyp}}{\\text{adj}},\\ \\csc\\theta=\\tfrac{\\text{hyp}}{\\text{opp}},\\ \\cot\\theta=\\tfrac{\\text{adj}}{\\text{opp}}",
          "explanation": "Taking a reciprocal just turns the fraction upside down, so adj/hyp becomes hyp/adj, opp/hyp becomes hyp/opp, and opp/adj becomes adj/opp.",
          "stepNumber": 7
        },
        {
          "description": "Substitute values for the secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{\\text{hyp}}{\\text{adj}}=\\tfrac{13}{12}",
          "explanation": "Put hyp = 13 and adj = 12 into hyp/adj. This is the reciprocal of \\(\\cos\\theta=\\tfrac{12}{13}\\).",
          "stepNumber": 8
        },
        {
          "description": "Substitute values for the cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{\\text{hyp}}{\\text{opp}}=\\tfrac{13}{5}",
          "explanation": "Put hyp = 13 and opp = 5 into hyp/opp. This is the reciprocal of \\(\\sin\\theta=\\tfrac{5}{13}\\).",
          "stepNumber": 9
        },
        {
          "description": "Substitute values for the cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\text{adj}}{\\text{opp}}=\\tfrac{12}{5}",
          "explanation": "Put adj = 12 and opp = 5 into adj/opp. This is the reciprocal of \\(\\tan\\theta=\\tfrac{5}{12}\\), so all three agree.",
          "stepNumber": 10
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=\\tfrac{13}{12},\\ \\csc\\theta=\\tfrac{13}{5},\\ \\cot\\theta=\\tfrac{12}{5}\\).",
      "commonMistakes": [
        "Mixing opp/adj."
      ]
    }
  },
  {
    "id": "y2tf2-038",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 57",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sec\\theta=\\tfrac{17}{8}\\) and \\(\\theta\\) lies in the fourth quadrant, find the exact values of \\(\\csc\\theta\\) and \\(\\cot\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "right triangle"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Convert the secant to a cosine.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{\\sec\\theta}=\\tfrac{1}{17/8}",
          "explanation": "Since \\(\\sec\\theta=1/\\cos\\theta\\), cosine is the reciprocal of secant. Take the reciprocal of the given value first.",
          "stepNumber": 1
        },
        {
          "description": "Simplify the cosine.",
          "workingLatex": "\\cos\\theta=\\tfrac{8}{17}",
          "explanation": "Reciprocating a fraction flips it: \\(1\\div\\tfrac{17}{8}=\\tfrac{8}{17}\\). Cosine is positive, which is consistent with a fourth-quadrant angle.",
          "stepNumber": 2
        },
        {
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This identity links sine and cosine for any angle. We will rearrange it to find sine from the known cosine, avoiding the triangle's third side.",
          "stepNumber": 3
        },
        {
          "description": "Rearrange to isolate sine squared.",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta=1-\\left(\\tfrac{8}{17}\\right)^2",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides, then substitute \\(\\cos\\theta=\\tfrac{8}{17}\\). Squaring will be done in the next line.",
          "stepNumber": 4
        },
        {
          "description": "Square the cosine fraction.",
          "workingLatex": "\\sin^2\\theta=1-\\tfrac{64}{289}",
          "explanation": "Square top and bottom separately: \\(8^2=64\\) and \\(17^2=289\\). A frequent slip is squaring only the numerator.",
          "stepNumber": 5
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "\\sin^2\\theta=\\tfrac{289}{289}-\\tfrac{64}{289}=\\tfrac{289-64}{289}=\\tfrac{225}{289}",
          "explanation": "Write 1 as \\(\\tfrac{289}{289}\\) so the subtraction shares a denominator. The numerator 225 turns out to be a perfect square.",
          "stepNumber": 6
        },
        {
          "description": "Square-root to find the magnitude of sine.",
          "workingLatex": "|\\sin\\theta|=\\sqrt{\\tfrac{225}{289}}=\\tfrac{15}{17}",
          "explanation": "\\(\\sqrt{225}=15\\) and \\(\\sqrt{289}=17\\). This confirms the 8-15-17 triangle. The square root only gives the size; the sign is decided next.",
          "stepNumber": 7
        },
        {
          "description": "Fix the sign of sine using the quadrant.",
          "workingLatex": "\\text{Q4}:\\ \\sin\\theta<0\\ \\Rightarrow\\ \\sin\\theta=-\\tfrac{15}{17}",
          "explanation": "In the fourth quadrant cosine is positive but sine is negative (CAST rule). Forgetting this minus sign is the classic mistake here.",
          "stepNumber": 8
        },
        {
          "description": "Reciprocate sine to get cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}=\\tfrac{1}{-15/17}",
          "explanation": "Cosecant is the reciprocal of sine, so substitute the signed value of sine before flipping.",
          "stepNumber": 9
        },
        {
          "description": "Simplify the cosecant.",
          "workingLatex": "\\csc\\theta=-\\tfrac{17}{15}",
          "explanation": "Flip the fraction \\(\\tfrac{15}{17}\\) to \\(\\tfrac{17}{15}\\) and carry the negative sign through. A negative cosecant is expected since sine is negative.",
          "stepNumber": 10
        },
        {
          "description": "Write cotangent as cosine over sine.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{8/17}{-15/17}",
          "explanation": "Using \\(\\cot\\theta=\\cos\\theta/\\sin\\theta\\) lets both signs feed in automatically, which is safer than memorising the sign separately.",
          "stepNumber": 11
        },
        {
          "description": "Cancel the common denominator.",
          "workingLatex": "\\cot\\theta=\\tfrac{8}{-15}",
          "explanation": "Dividing two fractions with the same denominator 17 cancels it, leaving \\(8\\div(-15)\\).",
          "stepNumber": 12
        },
        {
          "description": "Simplify the cotangent.",
          "workingLatex": "\\cot\\theta=-\\tfrac{8}{15}",
          "explanation": "A positive over a negative gives a negative result, as expected for a fourth-quadrant angle where only cosine and secant are positive.",
          "stepNumber": 13
        }
      ],
      "finalAnswer": "\\(\\csc\\theta=-\\tfrac{17}{15},\\ \\cot\\theta=-\\tfrac{8}{15}\\).",
      "commonMistakes": [
        "Taking \\(\\sin\\theta>0\\) in Q4."
      ]
    }
  },
  {
    "id": "y2tf2-039",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 58",
    "difficulty": "Standard",
    "questionText": "Given \\(\\sin\\theta=\\tfrac35\\) and \\(\\theta\\) is acute, find \\(\\sec\\theta\\), \\(\\csc\\theta\\), \\(\\cot\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "acute"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This identity holds for every angle and lets us find cosine once sine is known.",
          "stepNumber": 1
        },
        {
          "description": "Rearrange to isolate cosine squared.",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta=1-\\left(\\tfrac35\\right)^2",
          "explanation": "Subtract \\(\\sin^2\\theta\\) from both sides, then substitute the known \\(\\sin\\theta=\\tfrac35\\).",
          "stepNumber": 2
        },
        {
          "description": "Square the sine fraction.",
          "workingLatex": "\\cos^2\\theta=1-\\tfrac{9}{25}",
          "explanation": "Square numerator and denominator: \\(3^2=9\\) and \\(5^2=25\\). Squaring only the top is a common error.",
          "stepNumber": 3
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "\\cos^2\\theta=\\tfrac{25}{25}-\\tfrac{9}{25}=\\tfrac{25-9}{25}=\\tfrac{16}{25}",
          "explanation": "Write 1 as \\(\\tfrac{25}{25}\\) to subtract over a common denominator; 16 is a perfect square.",
          "stepNumber": 4
        },
        {
          "description": "Square-root, choosing the sign.",
          "workingLatex": "\\cos\\theta=+\\sqrt{\\tfrac{16}{25}}=\\tfrac45",
          "explanation": "\\(\\theta\\) is acute (first quadrant), so cosine is positive and we take the positive root. Taking the negative root here is the usual error.",
          "stepNumber": 5
        },
        {
          "description": "Reciprocate sine for cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}=\\tfrac{1}{3/5}=\\tfrac53",
          "explanation": "Cosecant is the reciprocal of sine, so flip \\(\\tfrac35\\) to \\(\\tfrac53\\).",
          "stepNumber": 6
        },
        {
          "description": "Reciprocate cosine for secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}=\\tfrac{1}{4/5}=\\tfrac54",
          "explanation": "Secant is the reciprocal of cosine, so flip \\(\\tfrac45\\) to \\(\\tfrac54\\).",
          "stepNumber": 7
        },
        {
          "description": "Form cotangent as cosine over sine.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{4/5}{3/5}",
          "explanation": "Cotangent equals cosine divided by sine, which is the reciprocal of \\(\\tan\\theta\\).",
          "stepNumber": 8
        },
        {
          "description": "Rewrite the division as multiplication.",
          "workingLatex": "\\cot\\theta=\\tfrac45\\times\\tfrac53",
          "explanation": "Dividing by \\(\\tfrac35\\) means multiplying by its reciprocal \\(\\tfrac53\\). This 'flip and multiply' step is where sign or order errors creep in.",
          "stepNumber": 9
        },
        {
          "description": "Simplify the cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{4\\times5}{5\\times3}=\\tfrac{20}{15}=\\tfrac43",
          "explanation": "The fives cancel (or divide the numerator and denominator by 5) to leave \\(\\tfrac43\\), all values being positive since \\(\\theta\\) is acute.",
          "stepNumber": 10
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=\\tfrac54,\\ \\csc\\theta=\\tfrac53,\\ \\cot\\theta=\\tfrac43\\).",
      "commonMistakes": [
        "Taking a negative root though \\(\\theta\\) is acute."
      ]
    }
  },
  {
    "id": "y2tf2-040",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 59",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\cos\\theta=-\\tfrac{7}{25}\\) and \\(\\theta\\) is in the second quadrant, find the exact values of \\(\\sec\\theta\\), \\(\\csc\\theta\\) and \\(\\cot\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadrant"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This identity connects sine and cosine for any angle; we rearrange it to find sine from the known cosine.",
          "stepNumber": 1
        },
        {
          "description": "Rearrange to isolate sine squared.",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta=1-\\left(-\\tfrac{7}{25}\\right)^2",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides and substitute the given cosine. Note the value is negative, but it is being squared.",
          "stepNumber": 2
        },
        {
          "description": "Square the cosine fraction.",
          "workingLatex": "\\sin^2\\theta=1-\\tfrac{49}{625}",
          "explanation": "Squaring removes the minus sign: \\((-7)^2=49\\) and \\(25^2=625\\). So the negative cosine does not change \\(\\sin^2\\theta\\).",
          "stepNumber": 3
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "\\sin^2\\theta=\\tfrac{625}{625}-\\tfrac{49}{625}=\\tfrac{625-49}{625}=\\tfrac{576}{625}",
          "explanation": "Write 1 as \\(\\tfrac{625}{625}\\) for a common denominator; the numerator 576 is a perfect square.",
          "stepNumber": 4
        },
        {
          "description": "Square-root to get the magnitude of sine.",
          "workingLatex": "|\\sin\\theta|=\\sqrt{\\tfrac{576}{625}}=\\tfrac{24}{25}",
          "explanation": "\\(\\sqrt{576}=24\\) and \\(\\sqrt{625}=25\\), confirming the 7-24-25 triangle. The square root gives only the size; the sign is decided next.",
          "stepNumber": 5
        },
        {
          "description": "Fix the sign of sine from the quadrant.",
          "workingLatex": "\\text{Q2}:\\ \\sin\\theta>0\\ \\Rightarrow\\ \\sin\\theta=+\\tfrac{24}{25}",
          "explanation": "In the second quadrant sine is positive while cosine is negative (CAST rule). Wrongly making sine negative here is the standard slip.",
          "stepNumber": 6
        },
        {
          "description": "Reciprocate cosine for secant.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}=\\tfrac{1}{-7/25}",
          "explanation": "Secant is the reciprocal of cosine, so substitute the signed cosine before flipping the fraction.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the secant.",
          "workingLatex": "\\sec\\theta=-\\tfrac{25}{7}",
          "explanation": "Flip \\(\\tfrac{7}{25}\\) to \\(\\tfrac{25}{7}\\) and keep the negative sign that cosine carries in Q2.",
          "stepNumber": 8
        },
        {
          "description": "Reciprocate sine for cosecant.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}=\\tfrac{1}{24/25}=\\tfrac{25}{24}",
          "explanation": "Cosecant is the reciprocal of sine; sine is positive, so cosecant is positive.",
          "stepNumber": 9
        },
        {
          "description": "Write cotangent as cosine over sine.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{-7/25}{24/25}",
          "explanation": "Using \\(\\cot\\theta=\\cos\\theta/\\sin\\theta\\) lets the signs combine automatically.",
          "stepNumber": 10
        },
        {
          "description": "Cancel the common denominator.",
          "workingLatex": "\\cot\\theta=\\tfrac{-7}{24}",
          "explanation": "Both fractions share the denominator 25, so it cancels, leaving \\(-7\\div24\\).",
          "stepNumber": 11
        },
        {
          "description": "Simplify the cotangent.",
          "workingLatex": "\\cot\\theta=-\\tfrac{7}{24}",
          "explanation": "Negative cosine over positive sine gives a negative cotangent, as expected in the second quadrant.",
          "stepNumber": 12
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=-\\tfrac{25}{7},\\ \\csc\\theta=\\tfrac{25}{24},\\ \\cot\\theta=-\\tfrac{7}{24}\\).",
      "commonMistakes": [
        "Sign of sine in Q2 (it is positive)."
      ]
    }
  },
  {
    "id": "y2tf2-041",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 60",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\tan\\theta=-\\tfrac34\\) and \\(\\theta\\) is in the fourth quadrant, find the exact values of \\(\\sec\\theta\\), \\(\\csc\\theta\\) and \\(\\cot\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadrant"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the Pythagorean identity to use.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "Because we know \\(\\tan\\theta\\) and want \\(\\sec\\theta\\), the identity linking exactly those two ratios is the natural starting point. It comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\). Avoid the slip of reaching for \\(1+\\cot^2\\theta=\\csc^2\\theta\\), which mixes the wrong pair of ratios here.",
          "stepNumber": 1
        },
        {
          "description": "Write the given tangent ready to square.",
          "workingLatex": "\\tan^2\\theta=\\left(-\\tfrac34\\right)^2",
          "explanation": "Substitute the given value \\(\\tan\\theta=-\\tfrac34\\) into \\(\\tan^2\\theta\\). Keep the brackets around the whole fraction, including its sign, so the squaring applies to everything.",
          "stepNumber": 2
        },
        {
          "description": "Square numerator and denominator.",
          "workingLatex": "\\tan^2\\theta=\\tfrac{(-3)^2}{4^2}=\\tfrac{9}{16}",
          "explanation": "Squaring a fraction squares the top and the bottom separately. Squaring removes the sign, so the negative tangent contributes a positive \\(\\tfrac{9}{16}\\); a common error is to write \\(-\\tfrac{9}{16}\\), but a square is never negative.",
          "stepNumber": 3
        },
        {
          "description": "Substitute into the identity.",
          "workingLatex": "\\sec^2\\theta=1+\\tfrac{9}{16}",
          "explanation": "Replace \\(\\tan^2\\theta\\) by \\(\\tfrac{9}{16}\\) in \\(1+\\tan^2\\theta=\\sec^2\\theta\\). The right-hand side is now just an arithmetic sum.",
          "stepNumber": 4
        },
        {
          "description": "Rewrite 1 with a common denominator.",
          "workingLatex": "\\sec^2\\theta=\\tfrac{16}{16}+\\tfrac{9}{16}",
          "explanation": "To add fractions we need a common denominator, so write \\(1=\\tfrac{16}{16}\\). Only then can the numerators be combined.",
          "stepNumber": 5
        },
        {
          "description": "Add the numerators.",
          "workingLatex": "\\sec^2\\theta=\\tfrac{25}{16}",
          "explanation": "Add \\(16+9=25\\) over the shared denominator \\(16\\). Both \\(25\\) and \\(16\\) are perfect squares, which makes the next root clean.",
          "stepNumber": 6
        },
        {
          "description": "Take the square root of both sides.",
          "workingLatex": "\\sec\\theta=\\pm\\sqrt{\\tfrac{25}{16}}",
          "explanation": "Square-rooting both sides undoes the square, but it introduces a \\(\\pm\\) because two numbers square to the same value. Do not drop the \\(\\pm\\) at this stage; the quadrant will decide the sign.",
          "stepNumber": 7
        },
        {
          "description": "Evaluate the root.",
          "workingLatex": "\\sec\\theta=\\pm\\tfrac54",
          "explanation": "Root the top and bottom: \\(\\sqrt{25}=5\\) and \\(\\sqrt{16}=4\\). This gives the two candidate values \\(+\\tfrac54\\) and \\(-\\tfrac54\\).",
          "stepNumber": 8
        },
        {
          "description": "Decide the sign of cosine in Q4.",
          "workingLatex": "\\theta\\text{ in Q4}\\Rightarrow\\cos\\theta>0",
          "explanation": "In the fourth quadrant the \\(x\\)-coordinate is positive, so cosine is positive there (the \"C\" in the CAST diagram). This fact will fix the sign of secant.",
          "stepNumber": 9
        },
        {
          "description": "Choose the secant sign.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}>0\\Rightarrow\\sec\\theta=\\tfrac54",
          "explanation": "Since \\(\\sec\\theta=\\tfrac{1}{\\cos\\theta}\\), secant shares cosine's sign, so we keep the positive root. Picking \\(-\\tfrac54\\) here is the classic Q4 mistake.",
          "stepNumber": 10
        },
        {
          "description": "Recover cosine by reciprocating.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{\\sec\\theta}=\\tfrac{1}{5/4}=\\tfrac45",
          "explanation": "Cosine is the reciprocal of secant, so flip \\(\\tfrac54\\) to get \\(\\tfrac45\\). This positive value is consistent with Q4.",
          "stepNumber": 11
        },
        {
          "description": "Set up sine from sin = tan times cos.",
          "workingLatex": "\\sin\\theta=\\tan\\theta\\cdot\\cos\\theta",
          "explanation": "Rearranging \\(\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}\\) gives \\(\\sin\\theta=\\tan\\theta\\cdot\\cos\\theta\\). This lets us find sine from the two quantities we already have.",
          "stepNumber": 12
        },
        {
          "description": "Substitute the known values.",
          "workingLatex": "\\sin\\theta=\\left(-\\tfrac34\\right)\\left(\\tfrac45\\right)",
          "explanation": "Insert \\(\\tan\\theta=-\\tfrac34\\) and \\(\\cos\\theta=\\tfrac45\\). A negative times a positive will give a negative, which we expect in Q4.",
          "stepNumber": 13
        },
        {
          "description": "Multiply the fractions.",
          "workingLatex": "\\sin\\theta=-\\tfrac{12}{20}=-\\tfrac35",
          "explanation": "Multiply tops \\(3\\times4=12\\) and bottoms \\(4\\times5=20\\), then cancel the factor \\(4\\). The negative result correctly matches Q4, where sine is negative.",
          "stepNumber": 14
        },
        {
          "description": "Compute cosecant by reciprocating sine.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}=\\tfrac{1}{-3/5}=-\\tfrac53",
          "explanation": "Cosecant is the reciprocal of sine; flipping \\(-\\tfrac35\\) gives \\(-\\tfrac53\\). The sign stays negative because the reciprocal keeps the sign.",
          "stepNumber": 15
        },
        {
          "description": "Compute cotangent by reciprocating tangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{\\tan\\theta}=\\tfrac{1}{-3/4}=-\\tfrac43",
          "explanation": "Cotangent is the reciprocal of tangent. Both tangent and cotangent are negative in Q4, which is a useful consistency check.",
          "stepNumber": 16
        }
      ],
      "finalAnswer": "\\(\\sec\\theta=\\tfrac54,\\ \\csc\\theta=-\\tfrac53,\\ \\cot\\theta=-\\tfrac43\\).",
      "commonMistakes": [
        "Choosing \\(\\sec\\theta<0\\) in Q4."
      ]
    }
  },
  {
    "id": "y2tf2-042",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 61",
    "difficulty": "Standard",
    "questionText": "Given \\(\\sec\\theta=3\\) and \\(\\theta\\) is acute, find \\(\\sin\\theta\\), \\(\\cos\\theta\\), \\(\\tan\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "acute"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall that cosine is the reciprocal of secant.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{\\sec\\theta}",
          "explanation": "Secant is defined as \\(\\sec\\theta=\\tfrac{1}{\\cos\\theta}\\), so inverting both sides recovers cosine. This is the quickest route from the given information.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the given secant value.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{3}",
          "explanation": "Putting \\(\\sec\\theta=3\\) into the reciprocal gives cosine directly. Forgetting this reciprocal step is the most common slip.",
          "stepNumber": 2
        },
        {
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "The fundamental Pythagorean identity links sine and cosine, so once cosine is known we can find sine. It holds for every angle \\(\\theta\\).",
          "stepNumber": 3
        },
        {
          "description": "Rearrange to isolate sine squared.",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides so that \\(\\sin^2\\theta\\) stands alone. Now we just substitute the cosine value.",
          "stepNumber": 4
        },
        {
          "description": "Substitute the cosine value.",
          "workingLatex": "\\sin^2\\theta=1-\\left(\\tfrac13\\right)^2",
          "explanation": "Replace \\(\\cos\\theta\\) by \\(\\tfrac13\\). Keep the bracket so the square applies to the whole fraction, not just part of it.",
          "stepNumber": 5
        },
        {
          "description": "Square the cosine.",
          "workingLatex": "\\sin^2\\theta=1-\\tfrac19",
          "explanation": "Squaring \\(\\tfrac13\\) squares top and bottom: \\(\\tfrac{1}{9}\\). Be careful to square only the cosine, not the leading \\(1\\).",
          "stepNumber": 6
        },
        {
          "description": "Use a common denominator.",
          "workingLatex": "\\sin^2\\theta=\\tfrac{9}{9}-\\tfrac19",
          "explanation": "Write \\(1=\\tfrac99\\) so both terms share the denominator \\(9\\). This prepares the subtraction.",
          "stepNumber": 7
        },
        {
          "description": "Subtract the fractions.",
          "workingLatex": "\\sin^2\\theta=\\tfrac{8}{9}",
          "explanation": "Subtract numerators: \\(9-1=8\\) over \\(9\\). We keep \\(\\tfrac89\\) ready for square-rooting.",
          "stepNumber": 8
        },
        {
          "description": "Take the positive square root (acute angle).",
          "workingLatex": "\\sin\\theta=\\sqrt{\\tfrac{8}{9}}",
          "explanation": "An acute angle lies in Q1 where sine is positive, so only the positive root is needed and no \\(\\pm\\) survives.",
          "stepNumber": 9
        },
        {
          "description": "Split the root over the fraction.",
          "workingLatex": "\\sin\\theta=\\tfrac{\\sqrt{8}}{\\sqrt{9}}=\\tfrac{\\sqrt{8}}{3}",
          "explanation": "The root of a fraction is the root of the top over the root of the bottom, and \\(\\sqrt9=3\\). The numerator surd is not yet simplified.",
          "stepNumber": 10
        },
        {
          "description": "Factor 8 to expose a square factor.",
          "workingLatex": "\\sin\\theta=\\tfrac{\\sqrt{4\\times2}}{3}=\\tfrac{\\sqrt4\\,\\sqrt2}{3}",
          "explanation": "Since \\(8=4\\times2\\) and \\(4\\) is a perfect square, split the surd using \\(\\sqrt{ab}=\\sqrt a\\,\\sqrt b\\). This lets us pull out the square factor.",
          "stepNumber": 11
        },
        {
          "description": "Simplify the surd.",
          "workingLatex": "\\sin\\theta=\\tfrac{2\\sqrt2}{3}",
          "explanation": "Replace \\(\\sqrt4\\) by \\(2\\). Leaving it as \\(\\tfrac{\\sqrt8}{3}\\) is not fully simplified and may cost a mark.",
          "stepNumber": 12
        },
        {
          "description": "Form tangent as sine over cosine.",
          "workingLatex": "\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}=\\dfrac{2\\sqrt2/3}{1/3}",
          "explanation": "Tangent is the quotient of sine by cosine. Substitute the two values just found.",
          "stepNumber": 13
        },
        {
          "description": "Turn division into multiplication.",
          "workingLatex": "\\tan\\theta=\\tfrac{2\\sqrt2}{3}\\times\\tfrac{3}{1}",
          "explanation": "Dividing by \\(\\tfrac13\\) is the same as multiplying by its reciprocal \\(\\tfrac31\\). Flipping the divisor is the key move here.",
          "stepNumber": 14
        },
        {
          "description": "Cancel and simplify.",
          "workingLatex": "\\tan\\theta=2\\sqrt2",
          "explanation": "The threes cancel, leaving \\(2\\sqrt2\\). The result is positive, as expected for an acute angle in Q1.",
          "stepNumber": 15
        }
      ],
      "finalAnswer": "\\(\\cos\\theta=\\tfrac13,\\ \\sin\\theta=\\tfrac{2\\sqrt2}{3},\\ \\tan\\theta=2\\sqrt2\\).",
      "commonMistakes": [
        "Forgetting \\(\\cos=1/\\sec\\)."
      ]
    }
  },
  {
    "id": "y2tf2-043",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 62",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\csc\\theta=\\tfrac53\\) and \\(\\theta\\) is obtuse, find the exact values of the other five trigonometric ratios.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "acute"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Reciprocate cosecant to get sine.",
          "workingLatex": "\\sin\\theta=\\tfrac{1}{\\csc\\theta}=\\tfrac{1}{5/3}=\\tfrac35",
          "explanation": "Cosecant is the reciprocal of sine, so sine is the reciprocal of cosecant; flipping \\(\\tfrac53\\) gives \\(\\tfrac35\\). Sine is positive for any obtuse angle (Q2), so the sign is correct.",
          "stepNumber": 1
        },
        {
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This identity links sine and cosine for every angle, letting us find cosine now that sine is known.",
          "stepNumber": 2
        },
        {
          "description": "Rearrange for cosine squared.",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Subtract \\(\\sin^2\\theta\\) from both sides to isolate \\(\\cos^2\\theta\\). This gives the magnitude of cosine before we decide its sign.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the sine value.",
          "workingLatex": "\\cos^2\\theta=1-\\left(\\tfrac35\\right)^2",
          "explanation": "Insert \\(\\sin\\theta=\\tfrac35\\). Keep the bracket so the square covers the whole fraction.",
          "stepNumber": 4
        },
        {
          "description": "Square the sine.",
          "workingLatex": "\\cos^2\\theta=1-\\tfrac{9}{25}",
          "explanation": "Squaring \\(\\tfrac35\\) squares top and bottom to give \\(\\tfrac{9}{25}\\).",
          "stepNumber": 5
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "\\cos^2\\theta=\\tfrac{25}{25}-\\tfrac{9}{25}=\\tfrac{16}{25}",
          "explanation": "Write \\(1=\\tfrac{25}{25}\\), then subtract numerators: \\(25-9=16\\). The perfect-square result points to a 3-4-5 triangle.",
          "stepNumber": 6
        },
        {
          "description": "Take the square root (magnitude).",
          "workingLatex": "\\cos\\theta=\\pm\\sqrt{\\tfrac{16}{25}}=\\pm\\tfrac45",
          "explanation": "Root the top and bottom: \\(\\sqrt{16}=4\\), \\(\\sqrt{25}=5\\). The \\(\\pm\\) reminds us the sign is still undecided.",
          "stepNumber": 7
        },
        {
          "description": "Pick the Q2 sign for cosine.",
          "workingLatex": "\\theta\\text{ obtuse}\\Rightarrow\\text{Q2}\\Rightarrow\\cos\\theta=-\\tfrac45",
          "explanation": "An obtuse angle lies in Q2 where the \\(x\\)-coordinate is negative, so cosine is negative. Choosing \\(+\\tfrac45\\) is the key error to avoid here.",
          "stepNumber": 8
        },
        {
          "description": "Form tangent as sine over cosine.",
          "workingLatex": "\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}=\\dfrac{3/5}{-4/5}",
          "explanation": "Substitute \\(\\sin\\theta=\\tfrac35\\) and \\(\\cos\\theta=-\\tfrac45\\) into the quotient definition of tangent.",
          "stepNumber": 9
        },
        {
          "description": "Simplify the quotient.",
          "workingLatex": "\\tan\\theta=-\\tfrac34",
          "explanation": "The denominators of \\(5\\) cancel, leaving \\(\\tfrac{3}{-4}=-\\tfrac34\\). Tangent is negative in Q2, consistent with one positive and one negative input.",
          "stepNumber": 10
        },
        {
          "description": "Find secant by reciprocating cosine.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}=\\tfrac{1}{-4/5}=-\\tfrac54",
          "explanation": "Secant inherits cosine's sign, so it is negative in Q2. Flip \\(-\\tfrac45\\) to \\(-\\tfrac54\\).",
          "stepNumber": 11
        },
        {
          "description": "Find cotangent by reciprocating tangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{\\tan\\theta}=\\tfrac{1}{-3/4}=-\\tfrac43",
          "explanation": "Cotangent is the reciprocal of tangent and shares its sign, so it is also negative. In Q2 only sine and cosecant stay positive, a useful final check.",
          "stepNumber": 12
        }
      ],
      "finalAnswer": "\\(\\sin\\theta=\\tfrac35,\\ \\cos\\theta=-\\tfrac45,\\ \\tan\\theta=-\\tfrac34,\\ \\sec\\theta=-\\tfrac54,\\ \\cot\\theta=-\\tfrac43\\).",
      "commonMistakes": [
        "Forgetting all four of cos/tan/sec/cot are negative in Q2."
      ]
    }
  },
  {
    "id": "y2tf2-044",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 69",
    "difficulty": "Challenge",
    "questionText": "Prove that \\((\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)\\equiv1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadrant"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS}=(\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)",
          "explanation": "In an identity proof, work on one side (here the LHS) and transform it into the other. State clearly what you are manipulating so the method mark is earned.",
          "stepNumber": 1
        },
        {
          "description": "Recognise the difference-of-squares pattern.",
          "workingLatex": "(a-b)(a+b)=a^2-b^2,\\quad a=\\sec\\theta,\\ b=\\tan\\theta",
          "explanation": "The two brackets are identical apart from the sign between the terms, which is exactly the difference-of-squares form. Spotting this avoids a messy four-term expansion.",
          "stepNumber": 2
        },
        {
          "description": "Expand fully to show the cross terms.",
          "workingLatex": "=\\sec^2\\theta+\\sec\\theta\\tan\\theta-\\tan\\theta\\sec\\theta-\\tan^2\\theta",
          "explanation": "Multiplying out every pair of terms produces two equal cross terms with opposite signs. Writing them explicitly makes the cancellation visible.",
          "stepNumber": 3
        },
        {
          "description": "Cancel the cross terms.",
          "workingLatex": "=\\sec^2\\theta-\\tan^2\\theta",
          "explanation": "The terms \\(+\\sec\\theta\\tan\\theta\\) and \\(-\\tan\\theta\\sec\\theta\\) are equal and opposite, so they cancel, leaving only the two squares. This confirms the difference-of-squares result.",
          "stepNumber": 4
        },
        {
          "description": "Quote the relevant Pythagorean identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "This is the identity obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\). We need it to handle the \\(\\sec^2-\\tan^2\\) expression.",
          "stepNumber": 5
        },
        {
          "description": "Rearrange the identity.",
          "workingLatex": "\\sec^2\\theta-\\tan^2\\theta=1",
          "explanation": "Subtracting \\(\\tan^2\\theta\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) isolates exactly the expression we have. Using the cosecant form by mistake would not match.",
          "stepNumber": 6
        },
        {
          "description": "Conclude the proof.",
          "workingLatex": "\\text{LHS}=\\sec^2\\theta-\\tan^2\\theta=1=\\text{RHS}\\quad\\blacksquare",
          "explanation": "The left-hand side has been reduced to \\(1\\), which equals the right-hand side, so the identity is proved for all valid \\(\\theta\\).",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Expanding incorrectly — it is a difference of squares."
      ]
    }
  },
  {
    "id": "y2tf2-045",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 70",
    "difficulty": "Challenge",
    "questionText": "Prove that \\((\\csc\\theta-\\cot\\theta)(\\csc\\theta+\\cot\\theta)\\equiv1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadrant"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS}=(\\csc\\theta-\\cot\\theta)(\\csc\\theta+\\cot\\theta)",
          "explanation": "Transform the LHS into the RHS. Writing down the side you are working on keeps the proof clear and earns the method mark.",
          "stepNumber": 1
        },
        {
          "description": "Recognise the difference-of-squares pattern.",
          "workingLatex": "(a-b)(a+b)=a^2-b^2,\\quad a=\\csc\\theta,\\ b=\\cot\\theta",
          "explanation": "The brackets differ only in the sign between the terms, the hallmark of a difference of squares. This shortcut beats expanding all four products.",
          "stepNumber": 2
        },
        {
          "description": "Expand fully to show the cross terms.",
          "workingLatex": "=\\csc^2\\theta+\\csc\\theta\\cot\\theta-\\cot\\theta\\csc\\theta-\\cot^2\\theta",
          "explanation": "Multiplying out each pair gives two equal cross terms with opposite signs. Writing them out makes the cancellation explicit.",
          "stepNumber": 3
        },
        {
          "description": "Cancel the cross terms.",
          "workingLatex": "=\\csc^2\\theta-\\cot^2\\theta",
          "explanation": "The terms \\(+\\csc\\theta\\cot\\theta\\) and \\(-\\cot\\theta\\csc\\theta\\) are equal and opposite, so they cancel, leaving the two squares. This confirms the difference-of-squares result.",
          "stepNumber": 4
        },
        {
          "description": "Quote the correct Pythagorean identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "This form comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\sin^2\\theta\\). Using the secant-tangent form instead is the usual mistake here.",
          "stepNumber": 5
        },
        {
          "description": "Rearrange the identity.",
          "workingLatex": "\\csc^2\\theta-\\cot^2\\theta=1",
          "explanation": "Subtracting \\(\\cot^2\\theta\\) from both sides isolates exactly the expression we produced when the cross terms cancelled.",
          "stepNumber": 6
        },
        {
          "description": "Conclude the proof.",
          "workingLatex": "\\text{LHS}=\\csc^2\\theta-\\cot^2\\theta=1=\\text{RHS}\\quad\\blacksquare",
          "explanation": "The left-hand side reduces to \\(1\\), matching the right-hand side, so the identity holds for all valid \\(\\theta\\).",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Using the wrong Pythagorean form."
      ]
    }
  },
  {
    "id": "y2tf2-046",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 27",
    "difficulty": "Standard",
    "questionText": "Write \\(\\sec x\\tan x\\) in terms of \\(\\sin x\\) and \\(\\cos x\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the expression to convert.",
          "workingLatex": "\\sec x\\tan x",
          "explanation": "Start by copying the product we must rewrite. Our goal is to replace every reciprocal trig function with \\(\\sin x\\) and \\(\\cos x\\) only.",
          "stepNumber": 1
        },
        {
          "description": "Replace sec x with its reciprocal form.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "By definition \\(\\sec x\\) is the reciprocal of \\(\\cos x\\), so \\(\\sec x=\\tfrac{1}{\\cos x}\\). A common slip is to confuse \\(\\sec\\) with \\(\\csc\\); remember \\(\\sec\\) pairs with \\(\\cos\\) (third letter rule: se-C with C).",
          "stepNumber": 2
        },
        {
          "description": "Replace tan x with its quotient form.",
          "workingLatex": "\\tan x=\\tfrac{\\sin x}{\\cos x}",
          "explanation": "By definition \\(\\tan x=\\tfrac{\\sin x}{\\cos x}\\), with \\(\\sin\\) on top. Writing it upside down as \\(\\tfrac{\\cos x}{\\sin x}\\) (that is \\(\\cot x\\)) is the usual mistake.",
          "stepNumber": 3
        },
        {
          "description": "Substitute both into the product.",
          "workingLatex": "\\sec x\\tan x=\\tfrac{1}{\\cos x}\\cdot\\tfrac{\\sin x}{\\cos x}",
          "explanation": "Put the two rewrites in place of \\(\\sec x\\) and \\(\\tan x\\) so everything is now expressed in \\(\\sin x\\) and \\(\\cos x\\). The product of the two functions becomes a product of two fractions.",
          "stepNumber": 4
        },
        {
          "description": "Multiply numerators; multiply denominators.",
          "workingLatex": "=\\tfrac{1\\cdot\\sin x}{\\cos x\\cdot\\cos x}",
          "explanation": "When multiplying fractions, multiply numerator by numerator and denominator by denominator: \\(\\tfrac{a}{b}\\cdot\\tfrac{c}{d}=\\tfrac{ac}{bd}\\). Do not add the denominators.",
          "stepNumber": 5
        },
        {
          "description": "Simplify the numerator.",
          "workingLatex": "=\\tfrac{\\sin x}{\\cos x\\cdot\\cos x}",
          "explanation": "The top is \\(1\\times\\sin x=\\sin x\\), since multiplying by \\(1\\) leaves a quantity unchanged.",
          "stepNumber": 6
        },
        {
          "description": "Combine the cosines in the denominator.",
          "workingLatex": "=\\tfrac{\\sin x}{\\cos^2 x}",
          "explanation": "The two factors of \\(\\cos x\\) multiply to \\(\\cos x\\cdot\\cos x=\\cos^2 x\\) (same base, add exponents \\(1+1=2\\)). This is the required form in \\(\\sin x\\) and \\(\\cos x\\).",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(\\tfrac{\\sin x}{\\cos^2 x}\\).",
      "commonMistakes": [
        "Writing \\(\\tan x\\) as \\(\\cos/\\sin\\) by mistake."
      ]
    }
  },
  {
    "id": "y2tf2-047",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 28",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\dfrac{\\sec\\theta-\\cos\\theta}{\\tan\\theta}\\equiv\\sin\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State which side we will work on.",
          "workingLatex": "\\dfrac{\\sec\\theta-\\cos\\theta}{\\tan\\theta}",
          "explanation": "For an identity proof we take one side and transform it into the other. We choose the LHS because the numerator can be simplified using a Pythagorean identity.",
          "stepNumber": 1
        },
        {
          "description": "Rewrite sec in the numerator.",
          "workingLatex": "\\sec\\theta-\\cos\\theta=\\tfrac{1}{\\cos\\theta}-\\cos\\theta",
          "explanation": "Replace \\(\\sec\\theta\\) by \\(\\tfrac{1}{\\cos\\theta}\\) so both terms in the numerator are in cosine only. This is the definition of secant.",
          "stepNumber": 2
        },
        {
          "description": "Write cos as a fraction over cos.",
          "workingLatex": "=\\tfrac{1}{\\cos\\theta}-\\tfrac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "To subtract we need a common denominator \\(\\cos\\theta\\). Multiply \\(\\cos\\theta\\) by \\(\\tfrac{\\cos\\theta}{\\cos\\theta}=1\\) to get \\(\\tfrac{\\cos^2\\theta}{\\cos\\theta}\\), which does not change its value.",
          "stepNumber": 3
        },
        {
          "description": "Subtract over the common denominator.",
          "workingLatex": "=\\tfrac{1-\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "With matching denominators, combine the numerators into a single fraction. Keep the order \\(1-\\cos^2\\theta\\) so the next identity applies cleanly.",
          "stepNumber": 4
        },
        {
          "description": "Apply 1 - cos^2 = sin^2.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Rearranging \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(1-\\cos^2\\theta=\\sin^2\\theta\\). A common slip is writing \\(\\cos^2\\theta-1\\), which has the wrong sign.",
          "stepNumber": 5
        },
        {
          "description": "Reinsert the tan theta denominator.",
          "workingLatex": "\\dfrac{\\sec\\theta-\\cos\\theta}{\\tan\\theta}=\\dfrac{\\sin^2\\theta/\\cos\\theta}{\\tan\\theta}",
          "explanation": "Bring back the denominator \\(\\tan\\theta\\) from the original expression, now that the numerator has been simplified to \\(\\tfrac{\\sin^2\\theta}{\\cos\\theta}\\).",
          "stepNumber": 6
        },
        {
          "description": "Write tan theta as sin/cos.",
          "workingLatex": "=\\dfrac{\\sin^2\\theta/\\cos\\theta}{\\sin\\theta/\\cos\\theta}",
          "explanation": "Express \\(\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}\\) so the whole expression is a fraction divided by a fraction.",
          "stepNumber": 7
        },
        {
          "description": "Turn the division into multiplication.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\cos\\theta}\\cdot\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so \\(\\div\\tfrac{\\sin\\theta}{\\cos\\theta}\\) becomes \\(\\times\\tfrac{\\cos\\theta}{\\sin\\theta}\\) (flip the bottom fraction).",
          "stepNumber": 8
        },
        {
          "description": "Multiply the two fractions together.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta\\cdot\\cos\\theta}{\\cos\\theta\\cdot\\sin\\theta}",
          "explanation": "Numerator times numerator and denominator times denominator gives a single fraction, ready for cancelling common factors.",
          "stepNumber": 9
        },
        {
          "description": "Cancel the cos theta factor.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "The \\(\\cos\\theta\\) on top cancels the \\(\\cos\\theta\\) on the bottom (their ratio is \\(1\\)), since \\(\\cos\\theta\\neq0\\) wherever the original is defined.",
          "stepNumber": 10
        },
        {
          "description": "Cancel one factor of sin theta.",
          "workingLatex": "=\\sin\\theta",
          "explanation": "Since \\(\\tfrac{\\sin^2\\theta}{\\sin\\theta}=\\tfrac{\\sin\\theta\\cdot\\sin\\theta}{\\sin\\theta}=\\sin\\theta\\). This matches the RHS, so the identity is proved. \\(\\blacksquare\\)",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not combining \\(\\sec\\theta-\\cos\\theta\\) over a common denominator first."
      ]
    }
  },
  {
    "id": "y2tf2-048",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 63",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\csc\\theta-\\sin\\theta\\equiv\\cos\\theta\\cot\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State which side we will work on.",
          "workingLatex": "\\csc\\theta-\\sin\\theta",
          "explanation": "We start from the LHS and aim to transform it into the RHS \\(\\cos\\theta\\cot\\theta\\). The LHS is easier to manipulate because it can be combined into one fraction.",
          "stepNumber": 1
        },
        {
          "description": "Rewrite csc as a reciprocal.",
          "workingLatex": "\\csc\\theta-\\sin\\theta=\\tfrac{1}{\\sin\\theta}-\\sin\\theta",
          "explanation": "Replace \\(\\csc\\theta\\) by \\(\\tfrac{1}{\\sin\\theta}\\); recall \\(\\csc\\) pairs with \\(\\sin\\), not \\(\\cos\\). This is the definition of cosecant.",
          "stepNumber": 2
        },
        {
          "description": "Write sin as a fraction over sin.",
          "workingLatex": "=\\tfrac{1}{\\sin\\theta}-\\tfrac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "To subtract we need the common denominator \\(\\sin\\theta\\). Multiply \\(\\sin\\theta\\) by \\(\\tfrac{\\sin\\theta}{\\sin\\theta}=1\\) to get \\(\\tfrac{\\sin^2\\theta}{\\sin\\theta}\\) without changing its value.",
          "stepNumber": 3
        },
        {
          "description": "Subtract over the common denominator.",
          "workingLatex": "=\\tfrac{1-\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Combine the numerators over the shared denominator \\(\\sin\\theta\\). Keep the order \\(1-\\sin^2\\theta\\) ready for the Pythagorean identity.",
          "stepNumber": 4
        },
        {
          "description": "Apply 1 - sin^2 = cos^2.",
          "workingLatex": "=\\tfrac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "Rearranging \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(1-\\sin^2\\theta=\\cos^2\\theta\\). Watch the sign: it is not \\(\\sin^2\\theta-1\\).",
          "stepNumber": 5
        },
        {
          "description": "Write cos^2 as a product of cosines.",
          "workingLatex": "=\\tfrac{\\cos\\theta\\cdot\\cos\\theta}{\\sin\\theta}",
          "explanation": "Expand \\(\\cos^2\\theta=\\cos\\theta\\cdot\\cos\\theta\\) so we can peel off one factor toward the target form on the right.",
          "stepNumber": 6
        },
        {
          "description": "Split off one factor of cos theta.",
          "workingLatex": "=\\cos\\theta\\cdot\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Keep one cosine outside and leave the other cosine over the \\(\\sin\\theta\\). This is valid because \\(\\tfrac{\\cos\\theta\\cdot\\cos\\theta}{\\sin\\theta}=\\cos\\theta\\cdot\\tfrac{\\cos\\theta}{\\sin\\theta}\\).",
          "stepNumber": 7
        },
        {
          "description": "Recognise cos/sin as cot theta.",
          "workingLatex": "=\\cos\\theta\\cot\\theta",
          "explanation": "Since \\(\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\), the expression equals \\(\\cos\\theta\\cot\\theta\\), which is the RHS. \\(\\blacksquare\\)",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not combining over a common denominator before splitting."
      ]
    }
  },
  {
    "id": "y2tf2-049",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 64",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\tan\\theta+\\cot\\theta\\equiv\\sec\\theta\\csc\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State which side we will work on.",
          "workingLatex": "\\tan\\theta+\\cot\\theta",
          "explanation": "Start from the LHS and transform it into the RHS \\(\\sec\\theta\\csc\\theta\\). Converting to \\(\\sin\\) and \\(\\cos\\) usually makes the algebra clearest.",
          "stepNumber": 1
        },
        {
          "description": "Rewrite tan theta in sin/cos.",
          "workingLatex": "\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Convert to the base functions; \\(\\tan\\theta\\) has \\(\\sin\\) on top of \\(\\cos\\).",
          "stepNumber": 2
        },
        {
          "description": "Rewrite cot theta in cos/sin.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "\\(\\cot\\theta\\) is the reciprocal of \\(\\tan\\theta\\), so it has \\(\\cos\\) on top of \\(\\sin\\) (the other way up from \\(\\tan\\)).",
          "stepNumber": 3
        },
        {
          "description": "Substitute both into the LHS.",
          "workingLatex": "\\tan\\theta+\\cot\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}+\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Replace each term so the left-hand side is now purely in \\(\\sin\\theta\\) and \\(\\cos\\theta\\).",
          "stepNumber": 4
        },
        {
          "description": "Identify the common denominator.",
          "workingLatex": "\\text{common denominator}=\\sin\\theta\\cos\\theta",
          "explanation": "To add two fractions we need one shared denominator. The denominators are \\(\\cos\\theta\\) and \\(\\sin\\theta\\), so the lowest common denominator is their product \\(\\sin\\theta\\cos\\theta\\).",
          "stepNumber": 5
        },
        {
          "description": "Rescale each fraction to that denominator.",
          "workingLatex": "=\\tfrac{\\sin\\theta\\cdot\\sin\\theta}{\\cos\\theta\\sin\\theta}+\\tfrac{\\cos\\theta\\cdot\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\), and the second by \\(\\cos\\theta\\). Each is multiplication by \\(1\\), so the values are unchanged.",
          "stepNumber": 6
        },
        {
          "description": "Simplify the two numerators.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}+\\tfrac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Write \\(\\sin\\theta\\cdot\\sin\\theta=\\sin^2\\theta\\) and \\(\\cos\\theta\\cdot\\cos\\theta=\\cos^2\\theta\\), and note both denominators are the same product \\(\\sin\\theta\\cos\\theta\\).",
          "stepNumber": 7
        },
        {
          "description": "Add the numerators.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta+\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With a common denominator, add the tops: \\(\\sin^2\\theta+\\cos^2\\theta\\). Do not cancel anything yet.",
          "stepNumber": 8
        },
        {
          "description": "Apply sin^2 + cos^2 = 1.",
          "workingLatex": "=\\tfrac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) collapses the numerator to \\(1\\), leaving a single tidy fraction.",
          "stepNumber": 9
        },
        {
          "description": "Split into the two reciprocals.",
          "workingLatex": "=\\tfrac{1}{\\cos\\theta}\\cdot\\tfrac{1}{\\sin\\theta}",
          "explanation": "Separate the single denominator into a product \\(\\tfrac{1}{\\cos\\theta}\\cdot\\tfrac{1}{\\sin\\theta}\\), since \\(\\tfrac{1}{ab}=\\tfrac{1}{a}\\cdot\\tfrac{1}{b}\\). This readies each factor to be named.",
          "stepNumber": 10
        },
        {
          "description": "Name the reciprocals as sec and csc.",
          "workingLatex": "=\\sec\\theta\\csc\\theta",
          "explanation": "Since \\(\\tfrac{1}{\\cos\\theta}=\\sec\\theta\\) and \\(\\tfrac{1}{\\sin\\theta}=\\csc\\theta\\), the LHS equals the RHS. \\(\\blacksquare\\)",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not using \\(\\sin^2+\\cos^2=1\\) after combining."
      ]
    }
  },
  {
    "id": "y2tf2-050",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 29",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\tan x\\cot x\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recognise the reciprocal pair.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\tan x}",
          "explanation": "Cotangent is defined as the reciprocal of tangent, so \\(\\cot x=\\tfrac{1}{\\tan x}\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute into the product.",
          "workingLatex": "\\tan x\\cot x=\\tan x\\cdot\\tfrac{1}{\\tan x}",
          "explanation": "Replace \\(\\cot x\\) by \\(\\tfrac{1}{\\tan x}\\) so the product shows the cancellation clearly.",
          "stepNumber": 2
        },
        {
          "description": "Cancel tan x with its reciprocal.",
          "workingLatex": "=1",
          "explanation": "Any quantity times its reciprocal is \\(1\\), since \\(\\tan x\\cdot\\tfrac{1}{\\tan x}=\\tfrac{\\tan x}{\\tan x}=1\\). This holds wherever both functions are defined (\\(\\tan x\\neq0\\) and finite). The product is not \\(\\tan^2 x\\).",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "\\(1\\) (where both are defined).",
      "commonMistakes": [
        "Thinking the product is \\(\\tan^2 x\\) rather than 1."
      ]
    }
  },
  {
    "id": "y2tf2-051",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 30",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\sec x\\cos x\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the expression.",
          "workingLatex": "\\sec x\\cos x",
          "explanation": "Start from exactly what is given so every later move is a clear consequence of the line above it.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine, not of sine. A common slip is to write \\(\\sec x=\\tfrac{1}{\\sin x}\\); fix it firmly as \\(1/\\cos x\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute that definition in.",
          "workingLatex": "\\sec x\\cos x=\\tfrac{1}{\\cos x}\\cdot\\cos x",
          "explanation": "Replace \\(\\sec x\\) by \\(1/\\cos x\\) and leave the \\(\\cos x\\) factor untouched. Nothing else has changed yet.",
          "stepNumber": 3
        },
        {
          "description": "Write the product as one fraction.",
          "workingLatex": "\\tfrac{1}{\\cos x}\\cdot\\cos x=\\tfrac{\\cos x}{\\cos x}",
          "explanation": "Multiplying \\(\\tfrac{1}{\\cos x}\\) by \\(\\cos x\\) puts \\(\\cos x\\) on top and keeps \\(\\cos x\\) on the bottom, since \\(\\tfrac{1}{\\cos x}\\cdot\\cos x=\\tfrac{1\\cdot\\cos x}{\\cos x}\\).",
          "stepNumber": 4
        },
        {
          "description": "Cancel the common \\(\\cos x\\).",
          "workingLatex": "\\tfrac{\\cos x}{\\cos x}=1",
          "explanation": "A nonzero quantity divided by itself is \\(1\\). This is valid wherever \\(\\cos x\\neq0\\), i.e. where \\(\\sec x\\) is defined in the first place.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Pairing \\(\\sec\\) with \\(\\sin\\) instead of \\(\\cos\\)."
      ]
    }
  },
  {
    "id": "y2tf2-052",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 31",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\csc x\\sin x\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the expression.",
          "workingLatex": "\\csc x\\sin x",
          "explanation": "Begin from the exact given product so each subsequent line follows directly.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of cosecant.",
          "workingLatex": "\\csc x=\\tfrac{1}{\\sin x}",
          "explanation": "Cosecant is the reciprocal of sine, not of cosine. Watch the classic mix-up: \\(\\csc\\) goes with \\(\\sin\\), \\(\\sec\\) goes with \\(\\cos\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute that definition in.",
          "workingLatex": "\\csc x\\sin x=\\tfrac{1}{\\sin x}\\cdot\\sin x",
          "explanation": "Replace \\(\\csc x\\) by \\(1/\\sin x\\) and keep the \\(\\sin x\\) factor as it is.",
          "stepNumber": 3
        },
        {
          "description": "Write the product as one fraction.",
          "workingLatex": "\\tfrac{1}{\\sin x}\\cdot\\sin x=\\tfrac{\\sin x}{\\sin x}",
          "explanation": "Multiplying \\(\\tfrac{1}{\\sin x}\\) by \\(\\sin x\\) places \\(\\sin x\\) on top over the same \\(\\sin x\\) on the bottom, since \\(\\tfrac{1}{\\sin x}\\cdot\\sin x=\\tfrac{1\\cdot\\sin x}{\\sin x}\\).",
          "stepNumber": 4
        },
        {
          "description": "Cancel the common \\(\\sin x\\).",
          "workingLatex": "\\tfrac{\\sin x}{\\sin x}=1",
          "explanation": "Any nonzero quantity over itself equals \\(1\\). This holds wherever \\(\\sin x\\neq0\\), i.e. where \\(\\csc x\\) is defined.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Pairing \\(\\csc\\) with \\(\\cos\\) instead of \\(\\sin\\)."
      ]
    }
  },
  {
    "id": "y2tf2-053",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 32",
    "difficulty": "Standard",
    "questionText": "Write \\(\\sin x\\cdot\\sec x\\) as a single trig ratio.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the expression.",
          "workingLatex": "\\sin x\\cdot\\sec x",
          "explanation": "Start from the given product. The plan is to rewrite \\(\\sec x\\) in terms of \\(\\cos x\\) so a recognisable ratio appears.",
          "stepNumber": 1
        },
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine. If you instead used \\(\\csc x=1/\\sin x\\) you would be answering a different question and would land on \\(\\cot x\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute \\(\\sec x=\\tfrac{1}{\\cos x}\\).",
          "workingLatex": "\\sin x\\cdot\\sec x=\\sin x\\cdot\\tfrac{1}{\\cos x}",
          "explanation": "Replace the secant factor by its reciprocal form, leaving \\(\\sin x\\) in place.",
          "stepNumber": 3
        },
        {
          "description": "Multiply the numerators together.",
          "workingLatex": "\\sin x\\cdot\\tfrac{1}{\\cos x}=\\tfrac{\\sin x\\cdot 1}{\\cos x}",
          "explanation": "Treat \\(\\sin x\\) as the fraction \\(\\tfrac{\\sin x}{1}\\); multiplying fractions means top times top over bottom times bottom, giving \\(\\tfrac{\\sin x\\cdot 1}{1\\cdot\\cos x}\\).",
          "stepNumber": 4
        },
        {
          "description": "Tidy the single fraction.",
          "workingLatex": "\\tfrac{\\sin x\\cdot 1}{\\cos x}=\\tfrac{\\sin x}{\\cos x}",
          "explanation": "Multiplying the numerator by \\(1\\) changes nothing, so the expression is simply \\(\\sin x\\) over \\(\\cos x\\).",
          "stepNumber": 5
        },
        {
          "description": "Recognise the ratio as tangent.",
          "workingLatex": "\\tfrac{\\sin x}{\\cos x}=\\tan x",
          "explanation": "By definition \\(\\tan x=\\sin x/\\cos x\\), so the expression collapses to a single ratio, \\(\\tan x\\).",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\tan x\\).",
      "commonMistakes": [
        "Using \\(\\csc\\) instead of \\(\\sec\\) (that would give \\(\\cot x\\))."
      ]
    }
  },
  {
    "id": "y2tf2-054",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 33",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\dfrac{\\csc\\theta}{\\cot\\theta}\\) to a single trigonometric ratio.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write down the expression.",
          "workingLatex": "\\dfrac{\\csc\\theta}{\\cot\\theta}",
          "explanation": "Start from the given quotient. The strategy is to convert every reciprocal ratio into \\(\\sin\\theta\\) and \\(\\cos\\theta\\), where cancellation is easy to see.",
          "stepNumber": 1
        },
        {
          "description": "Replace the cosecant in the numerator.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, so the top becomes \\(1/\\sin\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Replace the cotangent in the denominator.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent equals \\(\\cos\\theta/\\sin\\theta\\) (the reciprocal of \\(\\tan\\theta=\\sin\\theta/\\cos\\theta\\)).",
          "stepNumber": 3
        },
        {
          "description": "Substitute both into the quotient.",
          "workingLatex": "\\dfrac{\\csc\\theta}{\\cot\\theta}=\\dfrac{\\,1/\\sin\\theta\\,}{\\,\\cos\\theta/\\sin\\theta\\,}",
          "explanation": "Now we have a fraction divided by a fraction, which we will handle by multiplying by the reciprocal of the bottom.",
          "stepNumber": 4
        },
        {
          "description": "Flip the bottom fraction.",
          "workingLatex": "\\dfrac{\\,1/\\sin\\theta\\,}{\\,\\cos\\theta/\\sin\\theta\\,}=\\tfrac{1}{\\sin\\theta}\\cdot\\tfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so \\(\\cos\\theta/\\sin\\theta\\) is inverted to \\(\\sin\\theta/\\cos\\theta\\). Be careful which fraction gets flipped: invert the denominator, never the numerator.",
          "stepNumber": 5
        },
        {
          "description": "Multiply the two fractions.",
          "workingLatex": "\\tfrac{1}{\\sin\\theta}\\cdot\\tfrac{\\sin\\theta}{\\cos\\theta}=\\tfrac{1\\cdot\\sin\\theta}{\\sin\\theta\\cdot\\cos\\theta}=\\tfrac{\\sin\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply numerators together and denominators together: top gives \\(1\\cdot\\sin\\theta=\\sin\\theta\\), bottom gives \\(\\sin\\theta\\cdot\\cos\\theta\\).",
          "stepNumber": 6
        },
        {
          "description": "Cancel the common \\(\\sin\\theta\\).",
          "workingLatex": "\\tfrac{\\sin\\theta}{\\sin\\theta\\cos\\theta}=\\tfrac{1}{\\cos\\theta}",
          "explanation": "The \\(\\sin\\theta\\) in the numerator cancels one \\(\\sin\\theta\\) in the denominator, leaving \\(1/\\cos\\theta\\) (valid wherever \\(\\sin\\theta\\neq0\\)).",
          "stepNumber": 7
        },
        {
          "description": "Recognise the reciprocal ratio.",
          "workingLatex": "\\tfrac{1}{\\cos\\theta}=\\sec\\theta",
          "explanation": "\\(1/\\cos\\theta\\) is exactly \\(\\sec\\theta\\). If you had flipped the wrong fraction you would have got \\(\\cos\\theta\\); the correct single ratio is \\(\\sec\\theta\\).",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(\\sec\\theta\\).",
      "commonMistakes": [
        "Inverting the fraction and getting \\(\\cos\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-055",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 65",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\cot^2\\theta-\\cos^2\\theta\\equiv\\cot^2\\theta\\cos^2\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State which side you will work on.",
          "workingLatex": "\\text{LHS}=\\cot^2\\theta-\\cos^2\\theta",
          "explanation": "Start from the left-hand side, the more complicated expression, and transform it until it matches the right-hand side. In an identity proof you work on one side only.",
          "stepNumber": 1
        },
        {
          "description": "Write cotangent in sin and cos.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "By definition cotangent is cosine over sine. Rewriting reciprocal ratios in \\(\\sin\\) and \\(\\cos\\) is the standard first move in identity proofs.",
          "stepNumber": 2
        },
        {
          "description": "Square to get \\(\\cot^2\\theta\\).",
          "workingLatex": "\\cot^2\\theta=\\left(\\tfrac{\\cos\\theta}{\\sin\\theta}\\right)^2=\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Squaring a fraction squares the top and the bottom separately, giving \\(\\cos^2\\theta/\\sin^2\\theta\\). A common slip is to square only the numerator.",
          "stepNumber": 3
        },
        {
          "description": "Substitute into the LHS.",
          "workingLatex": "\\cot^2\\theta-\\cos^2\\theta=\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}-\\cos^2\\theta",
          "explanation": "Replace \\(\\cot^2\\theta\\) by its sin/cos form, keeping the \\(-\\cos^2\\theta\\) term unchanged.",
          "stepNumber": 4
        },
        {
          "description": "Show the common factor in each term.",
          "workingLatex": "=\\cos^2\\theta\\cdot\\tfrac{1}{\\sin^2\\theta}-\\cos^2\\theta\\cdot1",
          "explanation": "Both terms carry a factor of \\(\\cos^2\\theta\\): the first is \\(\\cos^2\\theta\\cdot\\tfrac{1}{\\sin^2\\theta}\\) and the second is \\(\\cos^2\\theta\\cdot1\\). Seeing this explicitly prepares the factorisation.",
          "stepNumber": 5
        },
        {
          "description": "Factor out the common \\(\\cos^2\\theta\\).",
          "workingLatex": "=\\cos^2\\theta\\!\\left(\\tfrac{1}{\\sin^2\\theta}-1\\right)",
          "explanation": "Taking the common \\(\\cos^2\\theta\\) outside the bracket leaves \\(\\tfrac{1}{\\sin^2\\theta}-1\\) inside. Factorising is valid because it is just the distributive law in reverse.",
          "stepNumber": 6
        },
        {
          "description": "Write \\(1\\) over a common denominator.",
          "workingLatex": "=\\cos^2\\theta\\!\\left(\\tfrac{1}{\\sin^2\\theta}-\\tfrac{\\sin^2\\theta}{\\sin^2\\theta}\\right)",
          "explanation": "To subtract inside the bracket we need a common denominator, so rewrite \\(1\\) as \\(\\sin^2\\theta/\\sin^2\\theta\\). The value is unchanged because we divided \\(\\sin^2\\theta\\) by itself.",
          "stepNumber": 7
        },
        {
          "description": "Combine the bracket into one fraction.",
          "workingLatex": "=\\cos^2\\theta\\cdot\\tfrac{1-\\sin^2\\theta}{\\sin^2\\theta}",
          "explanation": "With a shared denominator the numerators subtract directly to give \\(1-\\sin^2\\theta\\). This exposes a Pythagorean expression in the numerator.",
          "stepNumber": 8
        },
        {
          "description": "Apply \\(1-\\sin^2\\theta=\\cos^2\\theta\\).",
          "workingLatex": "=\\cos^2\\theta\\cdot\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Rearranging the Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(1-\\sin^2\\theta=\\cos^2\\theta\\), which we substitute into the numerator.",
          "stepNumber": 9
        },
        {
          "description": "Recognise \\(\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}=\\cot^2\\theta\\).",
          "workingLatex": "=\\cos^2\\theta\\cdot\\cot^2\\theta",
          "explanation": "The fraction \\(\\cos^2\\theta/\\sin^2\\theta\\) is just \\(\\cot^2\\theta\\), reversing the rewrite from step 3.",
          "stepNumber": 10
        },
        {
          "description": "Conclude the LHS equals the RHS.",
          "workingLatex": "\\cos^2\\theta\\cot^2\\theta=\\cot^2\\theta\\cos^2\\theta=\\text{RHS}\\quad\\blacksquare",
          "explanation": "Multiplication is commutative, so \\(\\cos^2\\theta\\cot^2\\theta\\) is the same as \\(\\cot^2\\theta\\cos^2\\theta\\), exactly the right-hand side. The identity is proved.",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Stopping before factoring out \\(\\cos^2\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-056",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 34",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\dfrac{1+\\tan^2\\theta}{1+\\cot^2\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the numerator identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "The top is exactly the left side of the Pythagorean identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\). This identity comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\). Note the whole numerator is a single quantity, so you must not try to cancel its \\(1\\) against the \\(1\\) in the denominator.",
          "stepNumber": 1
        },
        {
          "description": "Replace the numerator.",
          "workingLatex": "\\tfrac{1+\\tan^2\\theta}{1+\\cot^2\\theta}=\\tfrac{\\sec^2\\theta}{1+\\cot^2\\theta}",
          "explanation": "Substitute \\(\\sec^2\\theta\\) for the top, leaving the bottom untouched for now. Changing one part of a fraction to an equal quantity does not change the fraction's value.",
          "stepNumber": 2
        },
        {
          "description": "Recall the denominator identity.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "The bottom matches the companion identity \\(1+\\cot^2\\theta=\\csc^2\\theta\\), obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\). A common slip is mixing the two identities up and writing \\(\\sec^2\\theta\\) on the bottom as well.",
          "stepNumber": 3
        },
        {
          "description": "Replace the denominator.",
          "workingLatex": "=\\tfrac{\\sec^2\\theta}{\\csc^2\\theta}",
          "explanation": "Substitute \\(\\csc^2\\theta\\) for the bottom. The expression is now a clean ratio of two squared reciprocal functions.",
          "stepNumber": 4
        },
        {
          "description": "Write sec as a reciprocal of cos.",
          "workingLatex": "\\sec^2\\theta=\\tfrac{1}{\\cos^2\\theta}",
          "explanation": "Since \\(\\sec\\theta=\\tfrac{1}{\\cos\\theta}\\), squaring both sides gives \\(\\sec^2\\theta=\\tfrac{1}{\\cos^2\\theta}\\). Converting to sines and cosines is the safest route when unsure how reciprocal functions combine.",
          "stepNumber": 5
        },
        {
          "description": "Write csc as a reciprocal of sin.",
          "workingLatex": "\\csc^2\\theta=\\tfrac{1}{\\sin^2\\theta}",
          "explanation": "Similarly \\(\\csc\\theta=\\tfrac{1}{\\sin\\theta}\\), so squaring gives \\(\\csc^2\\theta=\\tfrac{1}{\\sin^2\\theta}\\). Pair cosecant with sine, never with cosine.",
          "stepNumber": 6
        },
        {
          "description": "Substitute both reciprocals.",
          "workingLatex": "=\\tfrac{1/\\cos^2\\theta}{1/\\sin^2\\theta}",
          "explanation": "Putting both rewrites into the fraction gives a fraction divided by a fraction. The next move handles this compound form safely.",
          "stepNumber": 7
        },
        {
          "description": "Turn division into multiplication.",
          "workingLatex": "=\\tfrac{1}{\\cos^2\\theta}\\times\\tfrac{\\sin^2\\theta}{1}",
          "explanation": "Dividing by \\(\\tfrac{1}{\\sin^2\\theta}\\) is the same as multiplying by its reciprocal \\(\\tfrac{\\sin^2\\theta}{1}\\). Flipping the bottom fraction and multiplying avoids the classic error of cancelling the \\(1\\)s.",
          "stepNumber": 8
        },
        {
          "description": "Multiply the two fractions.",
          "workingLatex": "=\\tfrac{1\\times\\sin^2\\theta}{\\cos^2\\theta\\times 1}=\\tfrac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Multiply numerators together and denominators together. This leaves \\(\\tfrac{\\sin^2\\theta}{\\cos^2\\theta}\\), which is the square of \\(\\tfrac{\\sin\\theta}{\\cos\\theta}\\).",
          "stepNumber": 9
        },
        {
          "description": "Recognise tan squared.",
          "workingLatex": "=\\left(\\tfrac{\\sin\\theta}{\\cos\\theta}\\right)^2=\\tan^2\\theta",
          "explanation": "Because \\(\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}\\), the ratio \\(\\tfrac{\\sin^2\\theta}{\\cos^2\\theta}\\) equals \\(\\tan^2\\theta\\). This is the simplest closed form.",
          "stepNumber": 10
        }
      ],
      "finalAnswer": "\\(\\tan^2\\theta\\).",
      "commonMistakes": [
        "Cancelling the \\(1\\)s term-by-term."
      ]
    }
  },
  {
    "id": "y2tf2-057",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 35",
    "difficulty": "Challenge",
    "questionText": "Prove that \\((\\cot\\theta+\\csc\\theta)^2\\equiv\\dfrac{1+\\cos\\theta}{1-\\cos\\theta}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the strategy and starting side.",
          "workingLatex": "\\text{LHS}=(\\cot\\theta+\\csc\\theta)^2",
          "explanation": "Start from the more complicated left-hand side and work towards the right-hand side. Working on one side only is the standard, clean way to present an identity proof.",
          "stepNumber": 1
        },
        {
          "description": "Write cot in terms of sin and cos.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Use the definition \\(\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\). Converting reciprocal ratios to sines and cosines is almost always the right first move in an identity proof.",
          "stepNumber": 2
        },
        {
          "description": "Write csc in terms of sin.",
          "workingLatex": "\\csc\\theta=\\tfrac{1}{\\sin\\theta}",
          "explanation": "Use the definition \\(\\csc\\theta=\\tfrac{1}{\\sin\\theta}\\). Both terms now share the denominator \\(\\sin\\theta\\), which makes adding them easy.",
          "stepNumber": 3
        },
        {
          "description": "Substitute inside the bracket.",
          "workingLatex": "\\cot\\theta+\\csc\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}+\\tfrac{1}{\\sin\\theta}",
          "explanation": "Replace both functions inside the bracket with their sine/cosine forms. We will simplify the sum before squaring, to keep the algebra manageable.",
          "stepNumber": 4
        },
        {
          "description": "Add the two fractions.",
          "workingLatex": "=\\tfrac{\\cos\\theta+1}{\\sin\\theta}",
          "explanation": "They already share the denominator \\(\\sin\\theta\\), so just add the numerators \\(\\cos\\theta\\) and \\(1\\). Do not change the single denominator when adding fractions that already match.",
          "stepNumber": 5
        },
        {
          "description": "Reorder the numerator.",
          "workingLatex": "=\\tfrac{1+\\cos\\theta}{\\sin\\theta}",
          "explanation": "Reordering \\(\\cos\\theta+1\\) as \\(1+\\cos\\theta\\) does not change its value (addition is commutative) but lines it up with the target form on the right-hand side.",
          "stepNumber": 6
        },
        {
          "description": "Square the simplified bracket.",
          "workingLatex": "(\\cot\\theta+\\csc\\theta)^2=\\left(\\tfrac{1+\\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "Now apply the outer square to the single combined fraction. Squaring the simplified form is far easier than squaring the original two-term sum.",
          "stepNumber": 7
        },
        {
          "description": "Square top and bottom separately.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)^2}{\\sin^2\\theta}",
          "explanation": "Squaring a fraction squares the numerator and denominator separately. Keep \\((1+\\cos\\theta)^2\\) as a single squared bracket rather than expanding it; it will cancel later.",
          "stepNumber": 8
        },
        {
          "description": "Replace sin^2 with 1-cos^2.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)^2}{1-\\cos^2\\theta}",
          "explanation": "Rearranging \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(\\sin^2\\theta=1-\\cos^2\\theta\\). This swaps the denominator into a form that can be factorised to match the right-hand side.",
          "stepNumber": 9
        },
        {
          "description": "Factor the denominator as a difference of squares.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)^2}{(1-\\cos\\theta)(1+\\cos\\theta)}",
          "explanation": "Since \\(1-\\cos^2\\theta=1^2-(\\cos\\theta)^2\\), it factors as \\((1-\\cos\\theta)(1+\\cos\\theta)\\). Spotting this difference of two squares is the key step; forgetting it is the most common reason this proof stalls.",
          "stepNumber": 10
        },
        {
          "description": "Write the top as a product to expose the common factor.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)(1+\\cos\\theta)}{(1-\\cos\\theta)(1+\\cos\\theta)}",
          "explanation": "Writing \\((1+\\cos\\theta)^2\\) as \\((1+\\cos\\theta)(1+\\cos\\theta)\\) makes the shared factor \\((1+\\cos\\theta)\\) on top and bottom obvious before cancelling.",
          "stepNumber": 11
        },
        {
          "description": "Cancel the common factor.",
          "workingLatex": "=\\tfrac{1+\\cos\\theta}{1-\\cos\\theta}",
          "explanation": "Cancel one \\((1+\\cos\\theta)\\) from top and bottom (valid since \\(1+\\cos\\theta\\neq 0\\) where the identity is defined). This equals the right-hand side, so the identity is proved. \\(\\blacksquare\\)",
          "stepNumber": 12
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not using the difference of two squares on \\(1-\\cos^2\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-058",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 36",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\dfrac{\\sec\\theta-1}{\\sec\\theta+1}\\equiv\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "State the starting side.",
          "workingLatex": "\\text{LHS}=\\tfrac{\\sec\\theta-1}{\\sec\\theta+1}",
          "explanation": "Start from the left-hand side, since the target on the right is written purely in cosine and the left still contains secant. Working one side towards the other is the standard proof layout.",
          "stepNumber": 1
        },
        {
          "description": "Recall the secant definition.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine. Stating this explicitly makes the substitution in the next line unambiguous.",
          "stepNumber": 2
        },
        {
          "description": "Substitute sec = 1/cos throughout.",
          "workingLatex": "=\\tfrac{\\tfrac{1}{\\cos\\theta}-1}{\\tfrac{1}{\\cos\\theta}+1}",
          "explanation": "Replace every \\(\\sec\\theta\\) with \\(\\tfrac{1}{\\cos\\theta}\\). This produces a compound (fraction-within-a-fraction) expression, which we clear in the next step.",
          "stepNumber": 3
        },
        {
          "description": "Multiply top and bottom by cos.",
          "workingLatex": "=\\tfrac{\\cos\\theta\\left(\\tfrac{1}{\\cos\\theta}-1\\right)}{\\cos\\theta\\left(\\tfrac{1}{\\cos\\theta}+1\\right)}",
          "explanation": "Multiplying the whole fraction's top and bottom by the same nonzero quantity \\(\\cos\\theta\\) does not change its value; it is the standard trick for clearing inner fractions. Be sure to multiply every term inside each bracket.",
          "stepNumber": 4
        },
        {
          "description": "Distribute cos in the numerator.",
          "workingLatex": "=\\tfrac{\\cos\\theta\\cdot\\tfrac{1}{\\cos\\theta}-\\cos\\theta\\cdot 1}{\\cos\\theta\\left(\\tfrac{1}{\\cos\\theta}+1\\right)}",
          "explanation": "Expand the top bracket using the distributive law, multiplying \\(\\cos\\theta\\) into both terms. Keeping each product separate prevents sign slips.",
          "stepNumber": 5
        },
        {
          "description": "Simplify the numerator.",
          "workingLatex": "=\\tfrac{1-\\cos\\theta}{\\cos\\theta\\left(\\tfrac{1}{\\cos\\theta}+1\\right)}",
          "explanation": "Here \\(\\cos\\theta\\cdot\\tfrac{1}{\\cos\\theta}=1\\) and \\(\\cos\\theta\\cdot 1=\\cos\\theta\\), giving \\(1-\\cos\\theta\\). The reciprocal term cancels to exactly \\(1\\) as intended.",
          "stepNumber": 6
        },
        {
          "description": "Distribute cos in the denominator.",
          "workingLatex": "=\\tfrac{1-\\cos\\theta}{\\cos\\theta\\cdot\\tfrac{1}{\\cos\\theta}+\\cos\\theta\\cdot 1}",
          "explanation": "Expand the bottom bracket the same way, multiplying \\(\\cos\\theta\\) into both terms.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the denominator.",
          "workingLatex": "=\\tfrac{1-\\cos\\theta}{1+\\cos\\theta}",
          "explanation": "On the bottom \\(\\cos\\theta\\cdot\\tfrac{1}{\\cos\\theta}=1\\) and \\(\\cos\\theta\\cdot 1=\\cos\\theta\\), giving \\(1+\\cos\\theta\\). This is exactly the right-hand side, so the identity holds. \\(\\blacksquare\\)",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not multiplying through by \\(\\cos\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-059",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 66",
    "difficulty": "Standard",
    "questionText": "Evaluate \\(\\sec\\tfrac{\\pi}{3}-\\csc\\tfrac{\\pi}{6}\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write sec in terms of cos.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{\\cos\\tfrac{\\pi}{3}}",
          "explanation": "Secant is the reciprocal of cosine, so \\(\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{\\cos(\\pi/3)}\\). Converting to cosine first stops you confusing secant with sine.",
          "stepNumber": 1
        },
        {
          "description": "State the exact value of cos(pi/3).",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12",
          "explanation": "From the standard exact values, \\(\\cos\\tfrac{\\pi}{3}=\\tfrac12\\) (note \\(\\tfrac{\\pi}{3}=60^\\circ\\)). This angle lies in the first quadrant, so the value is positive.",
          "stepNumber": 2
        },
        {
          "description": "Take the reciprocal.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{1/2}=2",
          "explanation": "The reciprocal of \\(\\tfrac12\\) is \\(2\\). Dividing \\(1\\) by a half doubles it, so \\(\\sec\\tfrac{\\pi}{3}=2\\).",
          "stepNumber": 3
        },
        {
          "description": "Write csc in terms of sin.",
          "workingLatex": "\\csc\\tfrac{\\pi}{6}=\\tfrac{1}{\\sin\\tfrac{\\pi}{6}}",
          "explanation": "Cosecant is the reciprocal of sine, so \\(\\csc\\tfrac{\\pi}{6}=\\tfrac{1}{\\sin(\\pi/6)}\\). Pair cosecant with sine, not cosine.",
          "stepNumber": 4
        },
        {
          "description": "State the exact value of sin(pi/6).",
          "workingLatex": "\\sin\\tfrac{\\pi}{6}=\\tfrac12",
          "explanation": "Here \\(\\sin\\tfrac{\\pi}{6}=\\tfrac12\\) (with \\(\\tfrac{\\pi}{6}=30^\\circ\\)). This angle is also in the first quadrant, so the value is positive.",
          "stepNumber": 5
        },
        {
          "description": "Take the reciprocal.",
          "workingLatex": "\\csc\\tfrac{\\pi}{6}=\\tfrac{1}{1/2}=2",
          "explanation": "The reciprocal of \\(\\tfrac12\\) is again \\(2\\), so \\(\\csc\\tfrac{\\pi}{6}=2\\).",
          "stepNumber": 6
        },
        {
          "description": "Subtract the two values.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}-\\csc\\tfrac{\\pi}{6}=2-2=0",
          "explanation": "Substitute the two results into the original expression. The two terms are equal, so their difference is \\(0\\). Watch the order of subtraction and the sign of each reciprocal.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(0\\).",
      "commonMistakes": [
        "A sign slip when evaluating either reciprocal."
      ]
    }
  },
  {
    "id": "y2tf2-060",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 37",
    "difficulty": "Standard",
    "questionText": "Evaluate \\(\\sec\\tfrac{\\pi}{4}+\\csc\\tfrac{\\pi}{4}\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write sec in terms of cos.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\cos\\tfrac{\\pi}{4}}",
          "explanation": "Secant is the reciprocal of cosine, so \\(\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\cos(\\pi/4)}\\). Rewriting in cosine keeps the reciprocal step explicit.",
          "stepNumber": 1
        },
        {
          "description": "State the exact value of cos(pi/4).",
          "workingLatex": "\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}",
          "explanation": "From the standard exact values, \\(\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}\\), which is the same as \\(\\tfrac{1}{\\sqrt2}\\) (since \\(\\tfrac{\\pi}{4}=45^\\circ\\)).",
          "stepNumber": 2
        },
        {
          "description": "Take the reciprocal.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2/2}=\\tfrac{2}{\\sqrt2}",
          "explanation": "Dividing \\(1\\) by \\(\\tfrac{\\sqrt2}{2}\\) flips the fraction to \\(\\tfrac{2}{\\sqrt2}\\). This is correct but not yet in simplest surd form.",
          "stepNumber": 3
        },
        {
          "description": "Rationalise the denominator.",
          "workingLatex": "=\\tfrac{2}{\\sqrt2}\\cdot\\tfrac{\\sqrt2}{\\sqrt2}=\\tfrac{2\\sqrt2}{2}=\\sqrt2",
          "explanation": "Multiply top and bottom by \\(\\sqrt2\\) to clear the surd from the denominator; \\(\\sqrt2\\cdot\\sqrt2=2\\) cancels the \\(2\\), giving \\(\\sqrt2\\). Leaving the answer as \\(\\tfrac{2}{\\sqrt2}\\) loses the simplification marks.",
          "stepNumber": 4
        },
        {
          "description": "Write csc in terms of sin.",
          "workingLatex": "\\csc\\tfrac{\\pi}{4}=\\tfrac{1}{\\sin\\tfrac{\\pi}{4}}",
          "explanation": "Cosecant is the reciprocal of sine, so \\(\\csc\\tfrac{\\pi}{4}=\\tfrac{1}{\\sin(\\pi/4)}\\). Pair cosecant with sine, not cosine.",
          "stepNumber": 5
        },
        {
          "description": "State the exact value of sin(pi/4).",
          "workingLatex": "\\sin\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}",
          "explanation": "At \\(45^\\circ\\) sine equals cosine, so \\(\\sin\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}\\) too. That is why the two terms in this question turn out equal.",
          "stepNumber": 6
        },
        {
          "description": "Take the reciprocal and simplify.",
          "workingLatex": "\\csc\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2/2}=\\tfrac{2}{\\sqrt2}=\\sqrt2",
          "explanation": "By the identical reciprocal-and-rationalise step as before, \\(\\csc\\tfrac{\\pi}{4}=\\sqrt2\\).",
          "stepNumber": 7
        },
        {
          "description": "Add the two like surds.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}+\\csc\\tfrac{\\pi}{4}=\\sqrt2+\\sqrt2=2\\sqrt2",
          "explanation": "Both terms are \\(\\sqrt2\\), so adding them gives \\(2\\sqrt2\\) (treat \\(\\sqrt2\\) like a single object: \\(1\\sqrt2+1\\sqrt2=2\\sqrt2\\)). Do not write \\(\\sqrt{2}+\\sqrt{2}=\\sqrt{4}=2\\); surds add as coefficients, not under the root.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(2\\sqrt2\\).",
      "commonMistakes": [
        "Dropping a \\(\\sqrt2\\) or not simplifying \\(\\sqrt2+\\sqrt2\\)."
      ]
    }
  },
  {
    "id": "y2tf2-061",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 67",
    "difficulty": "Challenge",
    "questionText": "Prove that \\((1-\\cos^2\\theta)(1+\\cot^2\\theta)\\equiv1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS}=(1-\\cos^2\\theta)(1+\\cot^2\\theta)",
          "explanation": "For an identity proof, work on one side only (here the LHS) and transform it until it equals the RHS. Never start by assuming the result you are trying to prove. We choose the LHS because it is the more complicated side, and simplifying down to a single number is easier than building one up.",
          "stepNumber": 1
        },
        {
          "description": "Quote the core Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "Everything here flows from the fundamental identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\). Writing it down first gives us a fixed starting point to rearrange for each bracket.",
          "stepNumber": 2
        },
        {
          "description": "Rearrange it for the first bracket.",
          "workingLatex": "1-\\cos^2\\theta=\\sin^2\\theta",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides of \\(\\sin^2\\theta+\\cos^2\\theta=1\\) to isolate \\(\\sin^2\\theta\\). A common slip is to write \\(1-\\cos^2\\theta=\\cos^2\\theta\\); make sure you remove the cosine term, leaving sine.",
          "stepNumber": 3
        },
        {
          "description": "Divide the core identity by \\(\\sin^2\\theta\\).",
          "workingLatex": "\\dfrac{\\sin^2\\theta}{\\sin^2\\theta}+\\dfrac{\\cos^2\\theta}{\\sin^2\\theta}=\\dfrac{1}{\\sin^2\\theta}",
          "explanation": "To turn the core identity into the cotangent form, divide every term by \\(\\sin^2\\theta\\) (valid wherever \\(\\sin\\theta\\neq0\\)). Dividing all three terms keeps the equation balanced.",
          "stepNumber": 4
        },
        {
          "description": "Simplify each quotient to standard ratios.",
          "workingLatex": "1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "The first quotient is \\(1\\); the second is \\(\\left(\\tfrac{\\cos\\theta}{\\sin\\theta}\\right)^2=\\cot^2\\theta\\); the right side is \\(\\csc^2\\theta\\). Do not confuse this with \\(1+\\tan^2\\theta=\\sec^2\\theta\\); the cotangent version pairs with cosecant.",
          "stepNumber": 5
        },
        {
          "description": "Substitute both simplified brackets in.",
          "workingLatex": "\\text{LHS}=\\sin^2\\theta\\cdot\\csc^2\\theta",
          "explanation": "Replace the first bracket by \\(\\sin^2\\theta\\) (Step 3) and the second by \\(\\csc^2\\theta\\) (Step 5). The product is now ready to collapse because cosecant is the reciprocal of sine.",
          "stepNumber": 6
        },
        {
          "description": "Write cosecant in terms of sine.",
          "workingLatex": "=\\sin^2\\theta\\cdot\\dfrac{1}{\\sin^2\\theta}",
          "explanation": "By definition \\(\\csc\\theta=\\tfrac{1}{\\sin\\theta}\\), so squaring gives \\(\\csc^2\\theta=\\tfrac{1}{\\sin^2\\theta}\\). Converting to sine makes the cancellation visible.",
          "stepNumber": 7
        },
        {
          "description": "Combine into a single fraction.",
          "workingLatex": "=\\dfrac{\\sin^2\\theta}{\\sin^2\\theta}",
          "explanation": "Multiplying \\(\\sin^2\\theta\\) by \\(\\tfrac{1}{\\sin^2\\theta}\\) puts the same factor on top and bottom of one fraction, ready to cancel.",
          "stepNumber": 8
        },
        {
          "description": "Cancel and conclude.",
          "workingLatex": "=1=\\text{RHS}\\quad\\blacksquare",
          "explanation": "The \\(\\sin^2\\theta\\) factors cancel (valid wherever \\(\\sin\\theta\\neq0\\), which is exactly where \\(\\cot\\) and \\(\\csc\\) are defined), leaving \\(1\\). The LHS now equals the RHS, so the identity is proved.",
          "stepNumber": 9
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Not recognising the two standard identities."
      ]
    }
  },
  {
    "id": "y2tf2-062",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 38",
    "difficulty": "Standard",
    "questionText": "State whether \\(\\sec x\\) is even or odd, and justify.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "parity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the even/odd test.",
          "workingLatex": "f\\text{ even}\\iff f(-x)=f(x),\\quad f\\text{ odd}\\iff f(-x)=-f(x)",
          "explanation": "Parity is decided by comparing \\(f(-x)\\) with \\(f(x)\\). A function need not be either; we must compute and check which rule, if any, it obeys.",
          "stepNumber": 1
        },
        {
          "description": "Set up the quantity to test.",
          "workingLatex": "f(x)=\\sec x,\\qquad f(-x)=\\sec(-x)",
          "explanation": "Name the function \\(f(x)=\\sec x\\) and write down the input we need to evaluate, \\(\\sec(-x)\\). Our whole task is to simplify this and compare it with \\(\\sec x\\).",
          "stepNumber": 2
        },
        {
          "description": "Write secant via its definition.",
          "workingLatex": "\\sec(-x)=\\dfrac{1}{\\cos(-x)}",
          "explanation": "Since \\(\\sec x=\\tfrac{1}{\\cos x}\\), the parity of secant is inherited from cosine. Replacing \\(x\\) by \\(-x\\) lets us use what we know about \\(\\cos\\).",
          "stepNumber": 3
        },
        {
          "description": "Apply the parity of cosine.",
          "workingLatex": "\\cos(-x)=\\cos x",
          "explanation": "Cosine is an even function (its graph is symmetric about the \\(y\\)-axis), so reflecting the input leaves it unchanged. This is the key fact that decides the answer.",
          "stepNumber": 4
        },
        {
          "description": "Substitute into the denominator.",
          "workingLatex": "\\sec(-x)=\\dfrac{1}{\\cos x}",
          "explanation": "Replace \\(\\cos(-x)\\) by \\(\\cos x\\) inside the reciprocal. Because the denominator is unchanged, the whole reciprocal is unchanged.",
          "stepNumber": 5
        },
        {
          "description": "Recognise the result as secant.",
          "workingLatex": "\\dfrac{1}{\\cos x}=\\sec x",
          "explanation": "The reciprocal of cosine is exactly \\(\\sec x\\) again, so \\(\\sec(-x)=\\sec x\\). The reciprocal of an even function is even.",
          "stepNumber": 6
        },
        {
          "description": "State the conclusion.",
          "workingLatex": "\\sec(-x)=\\sec x\\;\\Rightarrow\\;\\sec x\\text{ is even}",
          "explanation": "Since \\(\\sec(-x)=\\sec x\\), secant satisfies the even test. A common error is to call it odd by analogy with \\(\\csc\\); secant follows cosine, not sine.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Even: \\(\\sec(-x)=\\sec x\\).",
      "commonMistakes": [
        "Calling \\(\\sec\\) odd — it inherits even parity from \\(\\cos\\)."
      ]
    }
  },
  {
    "id": "y2tf2-063",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 39",
    "difficulty": "Standard",
    "questionText": "State whether \\(\\csc x\\) is even or odd, with justification.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "parity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the even/odd test.",
          "workingLatex": "f\\text{ even}\\iff f(-x)=f(x),\\quad f\\text{ odd}\\iff f(-x)=-f(x)",
          "explanation": "Parity is decided by evaluating \\(f(-x)\\) and comparing with \\(f(x)\\). A function may be even, odd, or neither, so we compute and read off which rule holds.",
          "stepNumber": 1
        },
        {
          "description": "Set up the quantity to test.",
          "workingLatex": "f(x)=\\csc x,\\qquad f(-x)=\\csc(-x)",
          "explanation": "Name the function \\(f(x)=\\csc x\\) and write the input we must evaluate, \\(\\csc(-x)\\). The task is to simplify this and compare it with \\(\\csc x\\).",
          "stepNumber": 2
        },
        {
          "description": "Write cosecant via its definition.",
          "workingLatex": "\\csc(-x)=\\dfrac{1}{\\sin(-x)}",
          "explanation": "Since \\(\\csc x=\\tfrac{1}{\\sin x}\\), the parity of cosecant is inherited from sine. Substituting \\(-x\\) lets us use the parity of \\(\\sin\\).",
          "stepNumber": 3
        },
        {
          "description": "Apply the parity of sine.",
          "workingLatex": "\\sin(-x)=-\\sin x",
          "explanation": "Sine is an odd function (its graph has rotational symmetry about the origin), so reflecting the input flips the sign. This sign change is what determines the result.",
          "stepNumber": 4
        },
        {
          "description": "Substitute into the denominator.",
          "workingLatex": "\\csc(-x)=\\dfrac{1}{-\\sin x}",
          "explanation": "Replace \\(\\sin(-x)\\) by \\(-\\sin x\\) inside the reciprocal. The minus sign now sits in the denominator, where we can pull it out.",
          "stepNumber": 5
        },
        {
          "description": "Pull the minus sign to the front.",
          "workingLatex": "\\dfrac{1}{-\\sin x}=-\\dfrac{1}{\\sin x}",
          "explanation": "A negative denominator equals a negative fraction: \\(\\tfrac{1}{-a}=-\\tfrac{1}{a}\\). Bringing the sign out front exposes the reciprocal of sine.",
          "stepNumber": 6
        },
        {
          "description": "Recognise the result as cosecant.",
          "workingLatex": "-\\dfrac{1}{\\sin x}=-\\csc x",
          "explanation": "The reciprocal of sine is \\(\\csc x\\), so the expression is \\(-\\csc x\\). The reciprocal of an odd function is odd.",
          "stepNumber": 7
        },
        {
          "description": "State the conclusion.",
          "workingLatex": "\\csc(-x)=-\\csc x\\;\\Rightarrow\\;\\csc x\\text{ is odd}",
          "explanation": "Since \\(\\csc(-x)=-\\csc x\\), cosecant satisfies the odd test. A common error is to call it even by analogy with \\(\\sec\\); cosecant follows sine, not cosine.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "Odd: \\(\\csc(-x)=-\\csc x\\).",
      "commonMistakes": [
        "Calling \\(\\csc\\) even — it inherits odd parity from \\(\\sin\\)."
      ]
    }
  },
  {
    "id": "y2tf2-064",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 40",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\sec^4\\theta-\\sec^2\\theta\\equiv\\tan^2\\theta+\\tan^4\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "parity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS}=\\sec^4\\theta-\\sec^2\\theta",
          "explanation": "We transform the LHS until it matches the RHS. The LHS is in terms of \\(\\sec\\) and the RHS in terms of \\(\\tan\\), so the plan is to convert secant to tangent using \\(\\sec^2\\theta-1=\\tan^2\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Rewrite the quartic as a square.",
          "workingLatex": "=(\\sec^2\\theta)^2-\\sec^2\\theta",
          "explanation": "Writing \\(\\sec^4\\theta=(\\sec^2\\theta)^2\\) shows that \\(\\sec^2\\theta\\) is the common building block of both terms. This makes the shared factor obvious before we extract it.",
          "stepNumber": 2
        },
        {
          "description": "Take out the common factor.",
          "workingLatex": "=\\sec^2\\theta(\\sec^2\\theta-1)",
          "explanation": "Both terms share a factor of \\(\\sec^2\\theta\\). Factorising (rather than expanding everything) is the efficient route and immediately exposes the bracket \\(\\sec^2\\theta-1\\), which is a known identity.",
          "stepNumber": 3
        },
        {
          "description": "Quote the relevant Pythagorean identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "Write down the identity that links \\(\\sec\\) and \\(\\tan\\). We will use it in two directions: once to simplify the bracket, and once to replace the leading factor.",
          "stepNumber": 4
        },
        {
          "description": "Rearrange it for the bracket.",
          "workingLatex": "\\sec^2\\theta-1=\\tan^2\\theta",
          "explanation": "Subtract \\(1\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) to get \\(\\sec^2\\theta-1=\\tan^2\\theta\\). Watch the sign: it is \\(\\sec^2\\theta-1\\), not \\(1-\\sec^2\\theta\\).",
          "stepNumber": 5
        },
        {
          "description": "Substitute the bracket.",
          "workingLatex": "=\\sec^2\\theta\\,\\tan^2\\theta",
          "explanation": "Replacing the bracket \\(\\sec^2\\theta-1\\) by \\(\\tan^2\\theta\\) leaves a product of \\(\\sec^2\\theta\\) and \\(\\tan^2\\theta\\). We still have one \\(\\sec^2\\theta\\) to convert before everything is in tangents.",
          "stepNumber": 6
        },
        {
          "description": "Replace the remaining secant.",
          "workingLatex": "=(1+\\tan^2\\theta)\\,\\tan^2\\theta",
          "explanation": "Use the identity the other way, \\(\\sec^2\\theta=1+\\tan^2\\theta\\), to eliminate the last secant. Now the whole expression is in tangents, matching the RHS variables.",
          "stepNumber": 7
        },
        {
          "description": "Multiply the bracket out.",
          "workingLatex": "=1\\cdot\\tan^2\\theta+\\tan^2\\theta\\cdot\\tan^2\\theta",
          "explanation": "Distribute \\(\\tan^2\\theta\\) across the two terms in the bracket. Keeping the multiplication explicit avoids index slips when combining the powers.",
          "stepNumber": 8
        },
        {
          "description": "Simplify and conclude.",
          "workingLatex": "=\\tan^2\\theta+\\tan^4\\theta=\\text{RHS}\\quad\\blacksquare",
          "explanation": "Add the indices in \\(\\tan^2\\theta\\cdot\\tan^2\\theta=\\tan^4\\theta\\); the first product is just \\(\\tan^2\\theta\\). This is exactly the RHS, so the identity is proved.",
          "stepNumber": 9
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Trying to expand both sides instead of factoring."
      ]
    }
  },
  {
    "id": "y2tf2-065",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 41",
    "difficulty": "Foundation",
    "questionText": "State the period of \\(\\sec x\\) and justify it.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "period"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Write secant in terms of cosine.",
          "workingLatex": "\\sec x=\\dfrac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine. A reciprocal repeats its values exactly when the function underneath repeats, so the period of \\(\\sec\\) is tied to the period of \\(\\cos\\).",
          "stepNumber": 1
        },
        {
          "description": "State the period of cosine.",
          "workingLatex": "\\cos(x+2\\pi)=\\cos x",
          "explanation": "Cosine completes one full cycle every \\(2\\pi\\) radians, so its period is \\(2\\pi\\). This is the smallest positive shift that returns every cosine value to where it started.",
          "stepNumber": 2
        },
        {
          "description": "Shift the input of secant by \\(2\\pi\\).",
          "workingLatex": "\\sec(x+2\\pi)=\\dfrac{1}{\\cos(x+2\\pi)}",
          "explanation": "Apply the definition from Step 1 with input \\(x+2\\pi\\). To test the period we check whether shifting by \\(2\\pi\\) leaves \\(\\sec\\) unchanged.",
          "stepNumber": 3
        },
        {
          "description": "Use the cosine period in the denominator.",
          "workingLatex": "=\\dfrac{1}{\\cos x}=\\sec x",
          "explanation": "Because the denominator repeats every \\(2\\pi\\) (Step 2), so does the reciprocal. Hence \\(\\sec(x+2\\pi)=\\sec x\\), confirming \\(\\sec\\) repeats every \\(2\\pi\\).",
          "stepNumber": 4
        },
        {
          "description": "State the period.",
          "workingLatex": "\\text{period of }\\sec x=2\\pi",
          "explanation": "The period is \\(2\\pi\\), the same as cosine. Do not say \\(\\pi\\): that is the period of \\(\\tan\\) and \\(\\cot\\), which arise from a quotient, not a reciprocal.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(2\\pi\\).",
      "commonMistakes": [
        "Saying \\(\\pi\\) (that is the period of \\(\\tan\\)/\\(\\cot\\))."
      ]
    }
  },
  {
    "id": "y2tf2-066",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 42",
    "difficulty": "Foundation",
    "questionText": "State the period of \\(\\cot x\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "period"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the meaning of period.",
          "workingLatex": "f(x+T)=f(x)\\ \\text{for the smallest }T>0",
          "explanation": "The period is the smallest positive shift \\(T\\) that maps the graph exactly onto itself. We are looking for that smallest \\(T\\) for cotangent.",
          "stepNumber": 1
        },
        {
          "description": "Write cotangent as one over tangent.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\tan x}",
          "explanation": "Cotangent is defined as the reciprocal of tangent. This connects cotangent's repeating behaviour directly to that of tangent.",
          "stepNumber": 2
        },
        {
          "description": "Also write it as cosine over sine.",
          "workingLatex": "\\cot x=\\tfrac{\\cos x}{\\sin x}",
          "explanation": "Using \\(\\tan x=\\sin x/\\cos x\\) and flipping gives the equivalent form \\(\\cos x/\\sin x\\). Either form leads to the same conclusion about the period.",
          "stepNumber": 3
        },
        {
          "description": "Recall the period of tangent.",
          "workingLatex": "\\tan(x+\\pi)=\\tan x",
          "explanation": "Tangent repeats every \\(\\pi\\), not every \\(2\\pi\\) like sine and cosine. This is the key fact a student must hold onto.",
          "stepNumber": 4
        },
        {
          "description": "Shift the input of cotangent by pi.",
          "workingLatex": "\\cot(x+\\pi)=\\tfrac{1}{\\tan(x+\\pi)}",
          "explanation": "Replace \\(x\\) by \\(x+\\pi\\) in the reciprocal definition. We now substitute the tangent fact from the previous step.",
          "stepNumber": 5
        },
        {
          "description": "Use the tangent period inside.",
          "workingLatex": "\\cot(x+\\pi)=\\tfrac{1}{\\tan x}=\\cot x",
          "explanation": "Because \\(\\tan(x+\\pi)=\\tan x\\), the value is unchanged. So \\(\\cot\\) returns to itself after a shift of \\(\\pi\\), meaning \\(\\pi\\) is a period.",
          "stepNumber": 6
        },
        {
          "description": "Confirm pi is the smallest such shift.",
          "workingLatex": "0<T<\\pi\\Rightarrow \\cot(x+T)\\neq\\cot x",
          "explanation": "No smaller positive shift works, because tangent itself has no smaller period. Hence \\(\\pi\\) is the genuine (fundamental) period, not just a period.",
          "stepNumber": 7
        },
        {
          "description": "State the period.",
          "workingLatex": "\\text{period}=\\pi",
          "explanation": "The smallest positive shift returning the graph to itself is \\(\\pi\\). A common slip is to answer \\(2\\pi\\) by mistaking it for the sine or cosine period.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(\\pi\\).",
      "commonMistakes": [
        "Saying \\(2\\pi\\)."
      ]
    }
  },
  {
    "id": "y2tf2-067",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 43",
    "difficulty": "Standard",
    "questionText": "Use a calculator to find \\(\\sec 1\\) (radians) to 3 decimal places.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "calculator"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "Secant is by definition the reciprocal of cosine. This is the rule we use because calculators do not have a dedicated secant key.",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition at x equals 1.",
          "workingLatex": "\\sec 1=\\tfrac{1}{\\cos 1}",
          "explanation": "Substitute \\(x=1\\) into the definition. The whole task now reduces to evaluating one cosine and then dividing.",
          "stepNumber": 2
        },
        {
          "description": "Set the calculator to radian mode.",
          "workingLatex": "\\text{mode}=\\text{RAD}",
          "explanation": "The \"1\" here means 1 radian, not 1 degree. Forgetting to switch out of degree mode is the single most common error and gives a completely wrong answer.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the cosine of 1 radian.",
          "workingLatex": "\\cos 1\\approx 0.5403023",
          "explanation": "Compute \\(\\cos\\) of 1 radian. Keep extra decimal places at this stage so rounding does not creep into the final digit.",
          "stepNumber": 4
        },
        {
          "description": "Set up the reciprocal division.",
          "workingLatex": "\\sec 1=\\tfrac{1}{0.5403023}",
          "explanation": "Substitute the cosine value into the reciprocal. Use the full stored value on your calculator rather than the rounded number shown here.",
          "stepNumber": 5
        },
        {
          "description": "Carry out the division.",
          "workingLatex": "\\sec 1\\approx 1.85082",
          "explanation": "Dividing 1 by the cosine gives this value. Carrying full precision here protects the third decimal place from rounding error.",
          "stepNumber": 6
        },
        {
          "description": "Identify the rounding digit.",
          "workingLatex": "1.850\\underline{8}2,\\ \\text{4th d.p.}=8\\ge 5",
          "explanation": "To round to 3 decimal places we inspect the fourth decimal, which is 8. Since 8 is 5 or more, we round the third decimal up.",
          "stepNumber": 7
        },
        {
          "description": "Round to 3 decimal places.",
          "workingLatex": "\\sec 1\\approx 1.851",
          "explanation": "The third decimal rounds up from 0 to 1, giving 1.851. Rounding down to 1.850 would be the slip to avoid.",
          "stepNumber": 8
        }
      ],
      "finalAnswer": "\\(\\approx 1.851\\).",
      "commonMistakes": [
        "Calculator in degree mode."
      ]
    }
  },
  {
    "id": "y2tf2-068",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 44",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\cot\\theta\\sec\\theta\\) to a single trigonometric ratio.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "calculator"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Rewrite cotangent in sin and cos.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Converting everything to sine and cosine is the safest strategy for simplifying reciprocal-ratio products, because it exposes cancellations.",
          "stepNumber": 1
        },
        {
          "description": "Rewrite secant as a reciprocal of cosine.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine. Now both factors are written in terms of \\(\\sin\\theta\\) and \\(\\cos\\theta\\) only.",
          "stepNumber": 2
        },
        {
          "description": "Write the product with both forms.",
          "workingLatex": "\\cot\\theta\\sec\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\cdot\\tfrac{1}{\\cos\\theta}",
          "explanation": "Substitute the two rewritten ratios into the original product. Nothing has been cancelled yet; we have only swapped in equivalent expressions.",
          "stepNumber": 3
        },
        {
          "description": "Multiply the two fractions.",
          "workingLatex": "=\\tfrac{\\cos\\theta\\cdot 1}{\\sin\\theta\\cdot\\cos\\theta}=\\tfrac{\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply numerators together and denominators together. This makes the shared \\(\\cos\\theta\\) factor visible in both top and bottom.",
          "stepNumber": 4
        },
        {
          "description": "Cancel the common cosine factor.",
          "workingLatex": "=\\tfrac{\\cos\\theta}{\\sin\\theta\\cos\\theta}=\\tfrac{1}{\\sin\\theta}",
          "explanation": "The \\(\\cos\\theta\\) in the numerator cancels with the \\(\\cos\\theta\\) in the denominator (valid where \\(\\cos\\theta\\neq 0\\)). A common slip is cancelling the \\(\\sin\\theta\\) instead; only matching factors cancel.",
          "stepNumber": 5
        },
        {
          "description": "Recognise the reciprocal ratio.",
          "workingLatex": "\\tfrac{1}{\\sin\\theta}=\\csc\\theta",
          "explanation": "One over sine is the definition of cosecant, so the product collapses to a single ratio.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\csc\\theta\\).",
      "commonMistakes": [
        "Cancelling sine instead of cosine."
      ]
    }
  },
  {
    "id": "y2tf2-069",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 45",
    "difficulty": "Challenge",
    "questionText": "Simplify \\((\\sec^2\\theta-1)\\cot^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "calculator"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "This is the identity that connects the bracket to tangent. It is derived by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Rearrange to isolate the bracket.",
          "workingLatex": "\\sec^2\\theta-1=\\tan^2\\theta",
          "explanation": "Subtract 1 from both sides so the bracket in the question is replaced exactly by \\(\\tan^2\\theta\\). Failing to spot this is the main barrier here.",
          "stepNumber": 2
        },
        {
          "description": "Substitute the bracket into the expression.",
          "workingLatex": "(\\sec^2\\theta-1)\\cot^2\\theta=\\tan^2\\theta\\cot^2\\theta",
          "explanation": "Replace the bracket with \\(\\tan^2\\theta\\). The expression is now a product of tangent squared and cotangent squared.",
          "stepNumber": 3
        },
        {
          "description": "Write cotangent as a reciprocal.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent. We state this first before squaring it, to keep each move to a single idea.",
          "stepNumber": 4
        },
        {
          "description": "Square the reciprocal relationship.",
          "workingLatex": "\\cot^2\\theta=\\tfrac{1}{\\tan^2\\theta}",
          "explanation": "Squaring both sides gives cotangent squared as one over tangent squared. This sets up the cancellation in the product.",
          "stepNumber": 5
        },
        {
          "description": "Substitute the reciprocal into the product.",
          "workingLatex": "\\tan^2\\theta\\cot^2\\theta=\\tan^2\\theta\\cdot\\tfrac{1}{\\tan^2\\theta}",
          "explanation": "Replace \\(\\cot^2\\theta\\) with \\(1/\\tan^2\\theta\\). Now the product is a quantity multiplied by its own reciprocal.",
          "stepNumber": 6
        },
        {
          "description": "Multiply and cancel to a constant.",
          "workingLatex": "\\tan^2\\theta\\cdot\\tfrac{1}{\\tan^2\\theta}=\\tfrac{\\tan^2\\theta}{\\tan^2\\theta}=1",
          "explanation": "A non-zero quantity times its reciprocal is 1 (valid wherever \\(\\tan\\theta\\) is defined and non-zero). The whole expression simplifies to a constant.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "\\(1\\).",
      "commonMistakes": [
        "Not recognising \\(\\sec^2\\theta-1=\\tan^2\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf2-070",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 71",
    "difficulty": "Challenge",
    "questionText": "Prove that \\(\\sec^2\\theta+\\csc^2\\theta\\equiv\\sec^2\\theta\\csc^2\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS}=\\sec^2\\theta+\\csc^2\\theta",
          "explanation": "For an identity proof, work on one side only (here the LHS) and transform it until it equals the other side. Mixing both sides is poor proof technique.",
          "stepNumber": 1
        },
        {
          "description": "Recall the reciprocal-squared definitions.",
          "workingLatex": "\\sec^2\\theta=\\tfrac{1}{\\cos^2\\theta},\\quad \\csc^2\\theta=\\tfrac{1}{\\sin^2\\theta}",
          "explanation": "Secant is one over cosine and cosecant is one over sine, so their squares are one over the squared functions. These definitions let us rewrite the LHS in sine and cosine.",
          "stepNumber": 2
        },
        {
          "description": "Write each term in sin and cos.",
          "workingLatex": "\\text{LHS}=\\tfrac{1}{\\cos^2\\theta}+\\tfrac{1}{\\sin^2\\theta}",
          "explanation": "Substitute the definitions into the LHS. This puts both terms in a form that can be combined over a common denominator.",
          "stepNumber": 3
        },
        {
          "description": "Identify the common denominator.",
          "workingLatex": "\\text{common denominator}=\\sin^2\\theta\\cos^2\\theta",
          "explanation": "The lowest common denominator of \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\) is their product. Using the wrong common denominator is the usual error here.",
          "stepNumber": 4
        },
        {
          "description": "Rewrite both fractions over it.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta}+\\tfrac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply each fraction top and bottom by the factor it is missing: the first by \\(\\sin^2\\theta\\), the second by \\(\\cos^2\\theta\\). The two fractions now share a denominator.",
          "stepNumber": 5
        },
        {
          "description": "Combine into one fraction.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta+\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "With a shared denominator the numerators add directly. Notice the numerator is exactly the Pythagorean expression.",
          "stepNumber": 6
        },
        {
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This is the fundamental identity, true for all \\(\\theta\\). We use it to collapse the numerator.",
          "stepNumber": 7
        },
        {
          "description": "Simplify the numerator to one.",
          "workingLatex": "=\\tfrac{1}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Replacing the numerator with 1 gives a single clean fraction. This is the crucial simplification of the proof.",
          "stepNumber": 8
        },
        {
          "description": "Split into a product of reciprocals.",
          "workingLatex": "=\\tfrac{1}{\\sin^2\\theta}\\cdot\\tfrac{1}{\\cos^2\\theta}",
          "explanation": "A single reciprocal of a product equals the product of the reciprocals. This separates the cosine and sine factors ready to be named.",
          "stepNumber": 9
        },
        {
          "description": "Name each reciprocal ratio.",
          "workingLatex": "\\tfrac{1}{\\sin^2\\theta}=\\csc^2\\theta,\\quad \\tfrac{1}{\\cos^2\\theta}=\\sec^2\\theta",
          "explanation": "Identify one over sine squared as cosecant squared and one over cosine squared as secant squared. These are the same reciprocal definitions read in reverse.",
          "stepNumber": 10
        },
        {
          "description": "Conclude the LHS equals the RHS.",
          "workingLatex": "=\\csc^2\\theta\\,\\sec^2\\theta=\\sec^2\\theta\\csc^2\\theta=\\text{RHS}",
          "explanation": "Multiplication is commutative, so the order can be swapped to match the RHS exactly. The LHS now equals the RHS, completing the proof. \\(\\blacksquare\\)",
          "stepNumber": 11
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": [
        "Adding the fractions with the wrong common denominator."
      ]
    }
  },
  {
    "id": "y2tf2-071",
    "topicRef": "y2tf2",
    "topicTitle": "Secant, Cosecant and Cotangent 68",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\sec(\\pi-\\theta)\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Recall the definition of secant.",
          "workingLatex": "\\sec x=\\frac{1}{\\cos x}",
          "explanation": "Secant is defined as the reciprocal of cosine. There is no addition formula for \\(\\sec\\) itself, so the only way forward is to convert to cosine first.",
          "stepNumber": 1
        },
        {
          "description": "Apply the definition to our angle.",
          "workingLatex": "\\sec(\\pi-\\theta)=\\frac{1}{\\cos(\\pi-\\theta)}",
          "explanation": "Substitute \\(x=\\pi-\\theta\\) into \\(\\sec x=\\tfrac{1}{\\cos x}\\). The whole problem now reduces to simplifying the denominator \\(\\cos(\\pi-\\theta)\\).",
          "stepNumber": 2
        },
        {
          "description": "Write down the cosine subtraction formula.",
          "workingLatex": "\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B",
          "explanation": "This is the standard compound-angle identity for cosine of a difference. Note the PLUS sign between the two products: for cosine of a difference the sign flips to positive.",
          "stepNumber": 3
        },
        {
          "description": "Substitute \\(A=\\pi\\) and \\(B=\\theta\\).",
          "workingLatex": "\\cos(\\pi-\\theta)=\\cos\\pi\\cos\\theta+\\sin\\pi\\sin\\theta",
          "explanation": "Match \\(\\pi-\\theta\\) to \\(A-B\\), giving \\(A=\\pi\\) and \\(B=\\theta\\). A common slip is to use a minus between the products; the difference formula keeps a plus.",
          "stepNumber": 4
        },
        {
          "description": "State the exact value of \\(\\cos\\pi\\).",
          "workingLatex": "\\cos\\pi=-1",
          "explanation": "On the unit circle the point at angle \\(\\pi\\) is \\((-1,0)\\), and the cosine is the \\(x\\)-coordinate, namely \\(-1\\).",
          "stepNumber": 5
        },
        {
          "description": "State the exact value of \\(\\sin\\pi\\).",
          "workingLatex": "\\sin\\pi=0",
          "explanation": "The sine is the \\(y\\)-coordinate of the point at angle \\(\\pi\\), which is \\((-1,0)\\), so \\(\\sin\\pi=0\\). Mixing up \\(\\cos\\pi\\) and \\(\\sin\\pi\\) is the usual error here.",
          "stepNumber": 6
        },
        {
          "description": "Substitute these exact values in.",
          "workingLatex": "\\cos(\\pi-\\theta)=(-1)\\cos\\theta+(0)\\sin\\theta",
          "explanation": "Replace \\(\\cos\\pi\\) with \\(-1\\) and \\(\\sin\\pi\\) with \\(0\\) in the expansion from Step 4. Keep the brackets so the signs stay clear.",
          "stepNumber": 7
        },
        {
          "description": "Eliminate the zero term.",
          "workingLatex": "\\cos(\\pi-\\theta)=(-1)\\cos\\theta+0",
          "explanation": "Anything multiplied by \\(0\\) is \\(0\\), so the \\((0)\\sin\\theta\\) term disappears completely. Only the first product survives.",
          "stepNumber": 8
        },
        {
          "description": "Simplify to a single cosine term.",
          "workingLatex": "\\cos(\\pi-\\theta)=-\\cos\\theta",
          "explanation": "Multiplying \\(\\cos\\theta\\) by \\(-1\\) gives \\(-\\cos\\theta\\). This matches the quadrant picture: for acute \\(\\theta\\), the angle \\(\\pi-\\theta\\) lies in quadrant 2 where cosine is negative.",
          "stepNumber": 9
        },
        {
          "description": "Put the result back into the reciprocal.",
          "workingLatex": "\\sec(\\pi-\\theta)=\\frac{1}{-\\cos\\theta}",
          "explanation": "Replace \\(\\cos(\\pi-\\theta)\\) in the denominator from Step 2 with the simplified \\(-\\cos\\theta\\). Keep the negative sign attached to the cosine inside the fraction.",
          "stepNumber": 10
        },
        {
          "description": "Move the negative sign to the front.",
          "workingLatex": "\\frac{1}{-\\cos\\theta}=-\\frac{1}{\\cos\\theta}",
          "explanation": "A negative sign in the denominator can be pulled out to the front of the fraction, since \\(\\tfrac{1}{-a}=-\\tfrac{1}{a}\\). Do not lose this minus: the answer really is negative for acute \\(\\theta\\).",
          "stepNumber": 11
        },
        {
          "description": "Rewrite the reciprocal as secant.",
          "workingLatex": "-\\frac{1}{\\cos\\theta}=-\\sec\\theta",
          "explanation": "Using \\(\\tfrac{1}{\\cos\\theta}=\\sec\\theta\\) from the definition in Step 1, the simplified expression is \\(-\\sec\\theta\\).",
          "stepNumber": 12
        }
      ],
      "finalAnswer": "\\(-\\sec\\theta\\).",
      "commonMistakes": [
        "Forgetting the sign change from \\(\\cos(\\pi-\\theta)=-\\cos\\theta\\)."
      ]
    }
  }
];
