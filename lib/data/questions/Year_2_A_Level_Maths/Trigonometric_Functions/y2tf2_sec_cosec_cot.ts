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
          "description": "Recall the reciprocal definitions.",
          "workingLatex": "\\sec=\\tfrac{1}{\\cos},\\quad \\csc=\\tfrac{1}{\\sin},\\quad \\cot=\\tfrac{1}{\\tan}",
          "explanation": "Each new ratio is the reciprocal of one of the familiar three. The classic slip is pairing \\(\\sec\\) with sine — it goes with cosine.",
          "stepNumber": 1
        },
        {
          "description": "Write down the exact values you need.",
          "workingLatex": "\\cos\\tfrac{\\pi}{3}=\\tfrac12,\\ \\sin\\tfrac{\\pi}{6}=\\tfrac12,\\ \\tan\\tfrac{\\pi}{4}=1",
          "explanation": "These come from the 30–60–90 and 45–45–90 triangles.",
          "stepNumber": 2
        },
        {
          "description": "Reciprocate each.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{1/2}=2,\\ \\csc\\tfrac{\\pi}{6}=2,\\ \\cot\\tfrac{\\pi}{4}=1",
          "explanation": "Dividing 1 by a half doubles; the reciprocal of 1 is 1.",
          "stepNumber": 3
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
          "description": "Pair each with its base function.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x},\\quad \\csc x=\\tfrac{1}{\\sin x}",
          "explanation": "Secant–cosine and cosecant–sine; the mismatch (sec with sin) is the most common error.",
          "stepNumber": 1
        },
        {
          "description": "Give cotangent two equivalent forms.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\tan x}=\\tfrac{\\cos x}{\\sin x}",
          "explanation": "It is both the reciprocal of \\(\\tan\\) and the ratio \\(\\cos/\\sin\\) — note it is \\(\\cos/\\sin\\), not \\(\\sin/\\cos\\).",
          "stepNumber": 2
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
          "workingLatex": "\\sec=\\tfrac{1}{\\cos},\\ \\csc=\\tfrac{1}{\\sin},\\ \\cot=\\tfrac{\\cos}{\\sin}",
          "explanation": "So look at which have \\(\\sin x\\) on the bottom.",
          "stepNumber": 1
        },
        {
          "description": "Evaluate the denominators at \\(x=0\\).",
          "workingLatex": "\\sin 0=0,\\quad \\cos 0=1",
          "explanation": "Anything divided by \\(\\sin 0=0\\) is undefined.",
          "stepNumber": 2
        },
        {
          "description": "Conclude.",
          "workingLatex": "\\csc 0,\\ \\cot 0\\ \\text{undefined};\\ \\sec 0=1",
          "explanation": "Both \\(\\csc\\) and \\(\\cot\\) have sine in the denominator, so both fail at \\(x=0\\).",
          "stepNumber": 3
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
          "description": "Choose a strategy: get one function only.",
          "workingLatex": "\\text{use }1+\\tan^2\\theta=\\sec^2\\theta",
          "explanation": "The equation mixes \\(\\sec^2\\) and \\(\\tan\\); replacing \\(\\sec^2\\) by \\(1+\\tan^2\\) leaves everything in \\(\\tan\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute the identity.",
          "workingLatex": "1+\\tan^2\\theta-2\\tan\\theta=4",
          "explanation": "Use \\(\\sec^2\\theta=1+\\tan^2\\theta\\), not \\(1-\\tan^2\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Rearrange to a quadratic.",
          "workingLatex": "\\tan^2\\theta-2\\tan\\theta-3=0",
          "explanation": "Bring all terms to one side so it reads \\(=0\\).",
          "stepNumber": 3
        },
        {
          "description": "Factorise.",
          "workingLatex": "(\\tan\\theta-3)(\\tan\\theta+1)=0",
          "explanation": "Two numbers multiplying to \\(-3\\), adding to \\(-2\\): \\(-3\\) and \\(+1\\).",
          "stepNumber": 4
        },
        {
          "description": "Solve \\(\\tan\\theta=3\\).",
          "workingLatex": "\\theta=\\arctan 3\\approx1.25,\\ 1.25+\\pi\\approx4.39",
          "explanation": "Tangent has period \\(\\pi\\), so add \\(\\pi\\) for the second solution in \\([0,2\\pi)\\).",
          "stepNumber": 5
        },
        {
          "description": "Solve \\(\\tan\\theta=-1\\).",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "Negative tangent lies in Q2 and Q4.",
          "stepNumber": 6
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
          "explanation": "Secant pairs with cosine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute \\(\\cos 0=1\\).",
          "workingLatex": "=\\tfrac{1}{1}=1",
          "explanation": "The cosine of 0 is 1, so its reciprocal is 1.",
          "stepNumber": 2
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
          "description": "Use the reciprocal of sine.",
          "workingLatex": "\\csc\\tfrac{\\pi}{2}=\\tfrac{1}{\\sin(\\pi/2)}",
          "explanation": "Cosecant pairs with sine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute \\(\\sin\\tfrac{\\pi}{2}=1\\).",
          "workingLatex": "=\\tfrac{1}{1}=1",
          "explanation": "Sine peaks at 1 here, so the reciprocal is 1.",
          "stepNumber": 2
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
          "description": "Use \\(\\cot=\\cos/\\sin\\).",
          "workingLatex": "\\cot\\tfrac{\\pi}{2}=\\tfrac{\\cos(\\pi/2)}{\\sin(\\pi/2)}",
          "explanation": "Cotangent is cosine over sine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute and evaluate.",
          "workingLatex": "=\\tfrac{0}{1}=0",
          "explanation": "The numerator \\(\\cos\\tfrac{\\pi}{2}=0\\), so the value is 0 — not undefined (the denominator is fine).",
          "stepNumber": 2
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
          "description": "Choose a strategy: work in \\(\\csc\\theta\\).",
          "workingLatex": "\\text{use }\\cot^2\\theta=\\csc^2\\theta-1",
          "explanation": "The equation has \\(\\cot^2\\) and \\(\\csc\\); converting \\(\\cot^2\\) leaves only \\(\\csc\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute the identity.",
          "workingLatex": "2(\\csc^2\\theta-1)+3\\csc\\theta=0",
          "explanation": "From \\(1+\\cot^2\\theta=\\csc^2\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Form the quadratic and factorise.",
          "workingLatex": "2\\csc^2\\theta+3\\csc\\theta-2=0\\Rightarrow(2\\csc\\theta-1)(\\csc\\theta+2)=0",
          "explanation": "So \\(\\csc\\theta=\\tfrac12\\) or \\(\\csc\\theta=-2\\).",
          "stepNumber": 3
        },
        {
          "description": "Reject the impossible root.",
          "workingLatex": "|\\csc\\theta|\\ge1\\Rightarrow\\csc\\theta=-2",
          "explanation": "\\(\\csc\\theta=\\tfrac12\\) would need \\(\\sin\\theta=2\\), which is impossible.",
          "stepNumber": 4
        },
        {
          "description": "Solve \\(\\sin\\theta=-\\tfrac12\\).",
          "workingLatex": "\\theta=\\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}",
          "explanation": "Negative sine: third and fourth quadrants, reference angle \\(\\tfrac{\\pi}{6}\\).",
          "stepNumber": 5
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
          "description": "Choose a strategy: work in \\(\\cot\\theta\\).",
          "workingLatex": "\\text{use }\\csc^2\\theta=1+\\cot^2\\theta",
          "explanation": "Convert the \\(\\csc^2\\) term so the equation is purely in \\(\\cot\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute and rearrange.",
          "workingLatex": "3(1+\\cot^2\\theta)-5\\cot\\theta=5\\Rightarrow 3\\cot^2\\theta-5\\cot\\theta-2=0",
          "explanation": "Watch the sign: \\(\\csc^2=1+\\cot^2\\), not \\(\\cot^2-1\\).",
          "stepNumber": 2
        },
        {
          "description": "Factorise.",
          "workingLatex": "(3\\cot\\theta+1)(\\cot\\theta-2)=0",
          "explanation": "\\(\\cot\\theta=-\\tfrac13\\) or \\(\\cot\\theta=2\\).",
          "stepNumber": 3
        },
        {
          "description": "Convert to \\(\\tan\\theta\\).",
          "workingLatex": "\\tan\\theta=\\tfrac12\\ \\text{or}\\ \\tan\\theta=-3",
          "explanation": "\\(\\cot\\theta=k\\Rightarrow\\tan\\theta=\\tfrac1k\\).",
          "stepNumber": 4
        },
        {
          "description": "Solve each over \\([0,2\\pi)\\).",
          "workingLatex": "\\tan\\theta=\\tfrac12\\Rightarrow0.464,\\,3.61;\\ \\tan\\theta=-3\\Rightarrow1.89,\\,5.03",
          "explanation": "Add \\(\\pi\\) to the principal value for the second solution of each.",
          "stepNumber": 5
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
          "description": "Choose a strategy: work in \\(\\sec\\theta\\).",
          "workingLatex": "\\text{use }\\tan^2\\theta=\\sec^2\\theta-1",
          "explanation": "The equation has \\(\\tan^2\\) and \\(\\sec\\); converting \\(\\tan^2\\) leaves only \\(\\sec\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute.",
          "workingLatex": "\\sec^2\\theta-1=\\sec\\theta+1",
          "explanation": "Everything is now in \\(\\sec\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Form the quadratic and factorise.",
          "workingLatex": "\\sec^2\\theta-\\sec\\theta-2=0\\Rightarrow(\\sec\\theta-2)(\\sec\\theta+1)=0",
          "explanation": "\\(\\sec\\theta=2\\) or \\(\\sec\\theta=-1\\).",
          "stepNumber": 3
        },
        {
          "description": "Convert to cosine and solve.",
          "workingLatex": "\\cos\\theta=\\tfrac12\\Rightarrow\\tfrac{\\pi}{3},\\tfrac{5\\pi}{3};\\ \\cos\\theta=-1\\Rightarrow\\pi",
          "explanation": "\\(\\cos\\theta=1/\\sec\\theta\\); collect all solutions in the range.",
          "stepNumber": 4
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
          "description": "Use the reciprocal of cosine.",
          "workingLatex": "\\sec\\tfrac{\\pi}{6}=\\tfrac{1}{\\cos(\\pi/6)}",
          "explanation": "Secant pairs with cosine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute the exact value.",
          "workingLatex": "=\\tfrac{1}{\\sqrt3/2}=\\tfrac{2}{\\sqrt3}",
          "explanation": "\\(\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}\\); dividing by a fraction flips it.",
          "stepNumber": 2
        },
        {
          "description": "Rationalise the denominator.",
          "workingLatex": "\\tfrac{2}{\\sqrt3}=\\tfrac{2\\sqrt3}{3}",
          "explanation": "Multiply top and bottom by \\(\\sqrt3\\) to clear the surd from the denominator.",
          "stepNumber": 3
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
          "description": "Use the reciprocal of cosine.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\tfrac{1}{\\cos(\\pi/4)}",
          "explanation": "Not \\(1/\\sin\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute and simplify.",
          "workingLatex": "=\\tfrac{1}{\\sqrt2/2}=\\tfrac{2}{\\sqrt2}=\\sqrt2",
          "explanation": "\\(\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}\\); \\(\\tfrac{2}{\\sqrt2}=\\sqrt2\\).",
          "stepNumber": 2
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
          "description": "Choose a strategy: work in \\(\\tan\\theta\\).",
          "workingLatex": "\\text{use }\\sec^2\\theta=1+\\tan^2\\theta",
          "explanation": "Replace \\(\\sec^2\\) to leave a quadratic in \\(\\tan\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute.",
          "workingLatex": "1+\\tan^2\\theta=3+\\tan\\theta",
          "explanation": "Now in \\(\\tan\\theta\\) only.",
          "stepNumber": 2
        },
        {
          "description": "Form the quadratic and factorise.",
          "workingLatex": "\\tan^2\\theta-\\tan\\theta-2=0\\Rightarrow(\\tan\\theta-2)(\\tan\\theta+1)=0",
          "explanation": "\\(\\tan\\theta=2\\) or \\(-1\\).",
          "stepNumber": 3
        },
        {
          "description": "Solve \\(\\tan\\theta=2\\).",
          "workingLatex": "\\theta=\\arctan2\\approx1.11,\\ 4.25",
          "explanation": "Principal value plus \\(\\pi\\).",
          "stepNumber": 4
        },
        {
          "description": "Solve \\(\\tan\\theta=-1\\).",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "Q2 and Q4.",
          "stepNumber": 5
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
          "description": "Convert to cosine.",
          "workingLatex": "\\sec\\theta=-2\\Rightarrow\\cos\\theta=-\\tfrac12",
          "explanation": "\\(\\cos\\theta=1/\\sec\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Identify the quadrants.",
          "workingLatex": "\\cos\\theta<0\\ \\text{in Q2, Q3}",
          "explanation": "Reference angle \\(\\tfrac{\\pi}{3}\\) (since \\(\\cos\\tfrac{\\pi}{3}=\\tfrac12\\)).",
          "stepNumber": 2
        },
        {
          "description": "Write all solutions in range.",
          "workingLatex": "\\theta=\\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3}",
          "explanation": "Both, not just one.",
          "stepNumber": 3
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
          "description": "Use the reciprocal of tangent.",
          "workingLatex": "\\cot\\tfrac{\\pi}{3}=\\tfrac{1}{\\tan(\\pi/3)}",
          "explanation": "Cotangent is \\(1/\\tan\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute and rationalise.",
          "workingLatex": "=\\tfrac{1}{\\sqrt3}=\\tfrac{\\sqrt3}{3}",
          "explanation": "\\(\\tan\\tfrac{\\pi}{3}=\\sqrt3\\); rationalise the surd.",
          "stepNumber": 2
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
          "description": "Convert to tangent.",
          "workingLatex": "\\cot\\theta=-1\\Rightarrow\\tan\\theta=-1",
          "explanation": "\\(\\tan\\theta=1/\\cot\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Identify the quadrants.",
          "workingLatex": "\\tan\\theta<0\\ \\text{in Q2, Q4}",
          "explanation": "Reference angle \\(\\tfrac{\\pi}{4}\\).",
          "stepNumber": 2
        },
        {
          "description": "Write all solutions.",
          "workingLatex": "\\theta=\\tfrac{3\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "Negative tangent puts the solutions in Q2 and Q4.",
          "stepNumber": 3
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
          "description": "Locate the angle.",
          "workingLatex": "\\tfrac{2\\pi}{3}=120^\\circ\\ (\\text{Q2})",
          "explanation": "Cosine is negative in the second quadrant; reference angle \\(\\tfrac{\\pi}{3}\\).",
          "stepNumber": 1
        },
        {
          "description": "Find the cosine.",
          "workingLatex": "\\cos\\tfrac{2\\pi}{3}=-\\tfrac12",
          "explanation": "Magnitude from \\(\\cos\\tfrac{\\pi}{3}\\), made negative by the quadrant.",
          "stepNumber": 2
        },
        {
          "description": "Reciprocate.",
          "workingLatex": "\\sec\\tfrac{2\\pi}{3}=\\tfrac{1}{-1/2}=-2",
          "explanation": "Keep the negative sign.",
          "stepNumber": 3
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
          "description": "Convert to tangent.",
          "workingLatex": "\\cot\\theta=\\sqrt3\\Rightarrow\\tan\\theta=\\tfrac{1}{\\sqrt3}",
          "explanation": "Reciprocal — not \\(\\tan\\theta=\\sqrt3\\).",
          "stepNumber": 1
        },
        {
          "description": "Identify the quadrants.",
          "workingLatex": "\\tan\\theta>0\\ \\text{in Q1, Q3}",
          "explanation": "Reference angle \\(\\tfrac{\\pi}{6}\\).",
          "stepNumber": 2
        },
        {
          "description": "Write all solutions.",
          "workingLatex": "\\theta=\\tfrac{\\pi}{6},\\ \\tfrac{7\\pi}{6}",
          "explanation": "Positive tangent puts the solutions in Q1 and Q3.",
          "stepNumber": 3
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
          "description": "Convert to sine.",
          "workingLatex": "\\csc\\theta=-\\sqrt2\\Rightarrow\\sin\\theta=-\\tfrac{1}{\\sqrt2}=-\\tfrac{\\sqrt2}{2}",
          "explanation": "\\(\\sin\\theta=1/\\csc\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Identify the quadrants.",
          "workingLatex": "\\sin\\theta<0\\ \\text{in Q3, Q4}",
          "explanation": "Reference angle \\(\\tfrac{\\pi}{4}\\).",
          "stepNumber": 2
        },
        {
          "description": "Write all solutions.",
          "workingLatex": "\\theta=\\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}",
          "explanation": "Negative sine puts the solutions in Q3 and Q4.",
          "stepNumber": 3
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
          "description": "Use the even symmetry of secant.",
          "workingLatex": "\\sec(-\\theta)=\\tfrac{1}{\\cos(-\\theta)}=\\tfrac{1}{\\cos\\theta}=\\sec\\theta",
          "explanation": "Cosine is even, so its reciprocal is even — the negative angle gives the same value.",
          "stepNumber": 1
        },
        {
          "description": "Evaluate.",
          "workingLatex": "\\sec(-\\tfrac{\\pi}{3})=\\sec\\tfrac{\\pi}{3}=2",
          "explanation": "No sign change (unlike \\(\\csc\\) or \\(\\cot\\), which are odd).",
          "stepNumber": 2
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
          "description": "Set up using \\(\\csc^2\\theta=1+\\cot^2\\theta\\).",
          "workingLatex": "\\csc^2\\theta=1+\\tfrac{576}{49}=\\tfrac{625}{49}",
          "explanation": "This is the 7–24–25 triangle (\\(\\cot=\\tfrac{24}{7}\\)).",
          "stepNumber": 1
        },
        {
          "description": "Decide the signs from the quadrant.",
          "workingLatex": "\\text{Q3: }\\sin\\theta<0,\\ \\cos\\theta<0",
          "explanation": "Both are negative in the third quadrant, so \\(\\csc\\theta<0\\) and \\(\\sec\\theta<0\\).",
          "stepNumber": 2
        },
        {
          "description": "Take the negative roots.",
          "workingLatex": "\\csc\\theta=-\\tfrac{25}{7}",
          "explanation": "Choose the sign that matches Q3.",
          "stepNumber": 3
        },
        {
          "description": "Find \\(\\sec\\theta\\).",
          "workingLatex": "\\cos\\theta=-\\tfrac{24}{25}\\Rightarrow\\sec\\theta=-\\tfrac{25}{24}",
          "explanation": "\\(\\cot=\\cos/\\sin>0\\) needs both negative, consistent with Q3.",
          "stepNumber": 4
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
          "description": "Find sine from the cosecant.",
          "workingLatex": "\\sin\\theta=\\tfrac{1}{\\csc\\theta}=\\tfrac{12}{13}",
          "explanation": "Reciprocate; this is the 5–12–13 triangle.",
          "stepNumber": 1
        },
        {
          "description": "Use the quadrant for cosine's sign.",
          "workingLatex": "\\theta\\ \\text{obtuse (Q2)}\\Rightarrow\\cos\\theta=-\\tfrac{5}{13}",
          "explanation": "Obtuse angles lie in Q2, where cosine is negative.",
          "stepNumber": 2
        },
        {
          "description": "Take the required reciprocal and quotient.",
          "workingLatex": "\\sec\\theta=-\\tfrac{13}{5},\\ \\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=-\\tfrac{5}{12}",
          "explanation": "Reciprocate cosine for \\\\(\\\\sec\\\\theta\\\\); \\\\(\\\\cot\\\\theta=\\\\cos\\\\theta/\\\\sin\\\\theta\\\\), both negative as required in Q2 except sine.",
          "stepNumber": 3
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
          "description": "Use the reciprocal of cosine.",
          "workingLatex": "\\sec 30^\\circ=\\tfrac{1}{\\cos30^\\circ}",
          "explanation": "Secant pairs with cosine.",
          "stepNumber": 1
        },
        {
          "description": "Substitute and rationalise.",
          "workingLatex": "=\\tfrac{1}{\\sqrt3/2}=\\tfrac{2}{\\sqrt3}=\\tfrac{2\\sqrt3}{3}",
          "explanation": "\\(\\cos30^\\circ=\\tfrac{\\sqrt3}{2}\\); rationalise.",
          "stepNumber": 2
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
          "description": "Use \\(\\sec^2\\theta=1+\\tan^2\\theta\\).",
          "workingLatex": "\\tan^2\\theta=\\sec^2\\theta-1=9-1=8",
          "explanation": "From \\(\\sec\\theta=3\\); this avoids finding \\(\\sin,\\cos\\) separately.",
          "stepNumber": 1
        },
        {
          "description": "Take the root (acute).",
          "workingLatex": "\\tan\\theta=\\sqrt8=2\\sqrt2",
          "explanation": "Acute angle, so positive root.",
          "stepNumber": 2
        },
        {
          "description": "Reciprocate and rationalise.",
          "workingLatex": "\\cot\\theta=\\tfrac{1}{2\\sqrt2}=\\tfrac{\\sqrt2}{4}",
          "explanation": "The question wants \\(\\cot\\), so reciprocate \\(\\tan\\) and rationalise.",
          "stepNumber": 3
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
          "description": "Use the reciprocal of tangent.",
          "workingLatex": "\\cot 45^\\circ=\\tfrac{1}{\\tan45^\\circ}=\\tfrac{1}{1}=1",
          "explanation": "\\(\\tan45^\\circ=1\\), so its reciprocal is 1.",
          "stepNumber": 1
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
          "description": "Locate the angle.",
          "workingLatex": "120^\\circ\\ (\\text{Q2})",
          "explanation": "Cosine negative in Q2; reference angle \\(60^\\circ\\).",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate the cosine.",
          "workingLatex": "\\cos120^\\circ=-\\tfrac12\\Rightarrow\\sec120^\\circ=-2",
          "explanation": "Keep the sign.",
          "stepNumber": 2
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
          "description": "Locate the angle.",
          "workingLatex": "150^\\circ\\ (\\text{Q2})",
          "explanation": "Sine is positive in Q2; reference angle \\(30^\\circ\\).",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate the sine.",
          "workingLatex": "\\sin150^\\circ=\\tfrac12\\Rightarrow\\csc150^\\circ=2",
          "explanation": "Positive, since sine is positive in Q2.",
          "stepNumber": 2
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
          "description": "Find \\(\\csc^2\\theta\\) from the identity.",
          "workingLatex": "\\csc^2\\theta=1+\\cot^2\\theta=1+3=4",
          "explanation": "Using \\(1+\\cot^2\\theta=\\csc^2\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Choose the sign for \\(\\csc\\theta\\).",
          "workingLatex": "\\text{obtuse (Q2): }\\sin\\theta>0\\Rightarrow\\csc\\theta=2",
          "explanation": "Sine is positive in Q2, so take the positive root.",
          "stepNumber": 2
        },
        {
          "description": "Find \\(\\sec^2\\theta\\).",
          "workingLatex": "\\tan^2\\theta=\\tfrac{1}{\\cot^2\\theta}=\\tfrac13\\Rightarrow\\sec^2\\theta=1+\\tfrac13=\\tfrac43",
          "explanation": "Convert \\(\\cot^2\\) to \\(\\tan^2\\), then use \\(1+\\tan^2=\\sec^2\\).",
          "stepNumber": 3
        },
        {
          "description": "Choose the sign for \\(\\sec\\theta\\).",
          "workingLatex": "\\text{Q2: }\\cos\\theta<0\\Rightarrow\\sec\\theta=-\\tfrac{2}{\\sqrt3}=-\\tfrac{2\\sqrt3}{3}",
          "explanation": "Negative root; rationalise.",
          "stepNumber": 4
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
          "description": "Start from the range of cosine.",
          "workingLatex": "-1\\le\\cos\\theta\\le1\\ (\\cos\\theta\\neq0)",
          "explanation": "Secant is \\(1/\\cos\\theta\\), defined wherever \\(\\cos\\theta\\neq0\\).",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate the size.",
          "workingLatex": "0<|\\cos\\theta|\\le1\\Rightarrow\\left|\\tfrac{1}{\\cos\\theta}\\right|\\ge1",
          "explanation": "Reciprocating a number with size \\(\\le1\\) gives size \\(\\ge1\\).",
          "stepNumber": 2
        },
        {
          "description": "State the range and the gap.",
          "workingLatex": "\\sec\\theta\\le-1\\ \\text{or}\\ \\sec\\theta\\ge1",
          "explanation": "No output can have size below 1, so \\((-1,1)\\) is excluded — the gap is exactly the reciprocal of \\(|\\cos|\\le1\\).",
          "stepNumber": 3
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
          "description": "Start from the range of cosecant.",
          "workingLatex": "\\csc\\theta\\le-1\\ \\text{or}\\ \\csc\\theta\\ge1",
          "explanation": "Same reciprocal argument as for \\(\\sec\\): \\(|\\csc\\theta|\\ge1\\).",
          "stepNumber": 1
        },
        {
          "description": "Scale by 2.",
          "workingLatex": "2\\csc\\theta\\le-2\\ \\text{or}\\ 2\\csc\\theta\\ge2",
          "explanation": "Multiplying both bounds by the positive 2 keeps the inequality directions.",
          "stepNumber": 2
        },
        {
          "description": "Shift by 3.",
          "workingLatex": "g(\\theta)\\le1\\ \\text{or}\\ g(\\theta)\\ge5",
          "explanation": "Add 3 to each bound; the forbidden band becomes \\((1,5)\\).",
          "stepNumber": 3
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
          "description": "Match the sign to cosine.",
          "workingLatex": "\\sec\\theta=\\tfrac{1}{\\cos\\theta}",
          "explanation": "A reciprocal has the same sign as the original.",
          "stepNumber": 1
        },
        {
          "description": "Use the Q2 sign of cosine.",
          "workingLatex": "\\text{Q2: }\\cos\\theta<0\\Rightarrow\\sec\\theta<0",
          "explanation": "Cosine is negative in the second quadrant, so secant is negative.",
          "stepNumber": 2
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
          "description": "Choose a strategy: work in \\(\\cot\\theta\\).",
          "workingLatex": "\\text{use }\\csc^2\\theta=1+\\cot^2\\theta",
          "explanation": "Convert the \\(\\csc^2\\) so the equation is in \\(\\cot\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute and rearrange.",
          "workingLatex": "1+\\cot^2\\theta+\\cot\\theta=7\\Rightarrow\\cot^2\\theta+\\cot\\theta-6=0",
          "explanation": "Bring to \\(=0\\).",
          "stepNumber": 2
        },
        {
          "description": "Factorise.",
          "workingLatex": "(\\cot\\theta+3)(\\cot\\theta-2)=0",
          "explanation": "\\(\\cot\\theta=-3\\) or \\(\\cot\\theta=2\\).",
          "stepNumber": 3
        },
        {
          "description": "Convert to \\(\\tan\\theta\\).",
          "workingLatex": "\\tan\\theta=-\\tfrac13\\ \\text{or}\\ \\tan\\theta=\\tfrac12",
          "explanation": "\\(\\cot\\theta=k\\Rightarrow\\tan\\theta=1/k\\).",
          "stepNumber": 4
        },
        {
          "description": "Solve each over \\([0,2\\pi)\\).",
          "workingLatex": "\\tan\\theta=\\tfrac12\\Rightarrow0.464,3.61;\\ \\tan\\theta=-\\tfrac13\\Rightarrow2.82,5.96",
          "explanation": "Principal value plus \\(\\pi\\) for each.",
          "stepNumber": 5
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
          "description": "Choose a strategy: work in \\(\\tan\\theta\\).",
          "workingLatex": "\\text{use }\\sec^2\\theta=1+\\tan^2\\theta",
          "explanation": "Replace \\(\\sec^2\\) to get a quadratic in \\(\\tan\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Substitute carefully (keep the factor of 2).",
          "workingLatex": "2(1+\\tan^2\\theta)-\\tan\\theta-3=0",
          "explanation": "The whole \\(1+\\tan^2\\theta\\) is multiplied by 2.",
          "stepNumber": 2
        },
        {
          "description": "Form and factorise.",
          "workingLatex": "2\\tan^2\\theta-\\tan\\theta-1=0\\Rightarrow(2\\tan\\theta+1)(\\tan\\theta-1)=0",
          "explanation": "\\(\\tan\\theta=1\\) or \\(\\tan\\theta=-\\tfrac12\\).",
          "stepNumber": 3
        },
        {
          "description": "Solve \\(\\tan\\theta=1\\).",
          "workingLatex": "\\theta=\\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4}",
          "explanation": "Q1 and Q3.",
          "stepNumber": 4
        },
        {
          "description": "Solve \\(\\tan\\theta=-\\tfrac12\\).",
          "workingLatex": "\\theta\\approx2.68,\\ 5.82",
          "explanation": "Principal value \\(-0.4636\\) shifted into the range (add \\(\\pi\\), then \\(2\\pi\\)).",
          "stepNumber": 5
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
          "description": "Relate the sign to cosine.",
          "workingLatex": "\\sec\\theta>0\\iff\\cos\\theta>0",
          "explanation": "Reciprocals share signs.",
          "stepNumber": 1
        },
        {
          "description": "State the quadrants.",
          "workingLatex": "\\cos\\theta>0\\ \\text{in Q1 and Q4}",
          "explanation": "Cosine (the \\(x\\)-coordinate) is positive on the right half.",
          "stepNumber": 2
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
          "description": "Write the sign of \\(\\cot\\) in terms of sin, cos.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "It is negative when numerator and denominator have opposite signs.",
          "stepNumber": 1
        },
        {
          "description": "Find where the signs differ.",
          "workingLatex": "\\text{Q2 }(-/+)\\ \\text{and Q4 }(+/-)",
          "explanation": "So \\(\\cot\\theta<0\\) in Q2 and Q4.",
          "stepNumber": 2
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
          "description": "Label the triangle.",
          "workingLatex": "\\text{opp}=3,\\ \\text{adj}=4,\\ \\text{hyp}=5",
          "explanation": "Opposite the given angle is 3; the other leg, 4, is adjacent.",
          "stepNumber": 1
        },
        {
          "description": "Recall the reciprocal ratios.",
          "workingLatex": "\\sec=\\tfrac{\\text{hyp}}{\\text{adj}},\\ \\csc=\\tfrac{\\text{hyp}}{\\text{opp}},\\ \\cot=\\tfrac{\\text{adj}}{\\text{opp}}",
          "explanation": "These invert \\(\\cos,\\sin,\\tan\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute.",
          "workingLatex": "\\sec=\\tfrac54,\\ \\csc=\\tfrac53,\\ \\cot=\\tfrac43",
          "explanation": "Read the reciprocal ratios straight off the side lengths.",
          "stepNumber": 3
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
          "description": "Label the triangle.",
          "workingLatex": "\\text{opp}=5,\\ \\text{adj}=12,\\ \\text{hyp}=13",
          "explanation": "Opposite the angle is 5.",
          "stepNumber": 1
        },
        {
          "description": "Apply the reciprocal ratios.",
          "workingLatex": "\\sec=\\tfrac{13}{12},\\ \\csc=\\tfrac{13}{5},\\ \\cot=\\tfrac{12}{5}",
          "explanation": "Hyp/adj, hyp/opp, adj/opp.",
          "stepNumber": 2
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
          "description": "Find cosine from the secant.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{\\sec\\theta}=\\tfrac{8}{17}",
          "explanation": "This is the 8–15–17 triangle.",
          "stepNumber": 1
        },
        {
          "description": "Use the quadrant for sine's sign.",
          "workingLatex": "\\text{Q4: }\\sin\\theta<0\\Rightarrow\\sin\\theta=-\\tfrac{15}{17}",
          "explanation": "In Q4 cosine is positive but sine is negative.",
          "stepNumber": 2
        },
        {
          "description": "Take the required reciprocal and quotient.",
          "workingLatex": "\\csc\\theta=-\\tfrac{17}{15},\\ \\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=-\\tfrac{8}{15}",
          "explanation": "Reciprocate sine for \\\\(\\\\csc\\\\theta\\\\); \\\\(\\\\cot\\\\theta=\\\\cos\\\\theta/\\\\sin\\\\theta\\\\) carries the Q4 signs.",
          "stepNumber": 3
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
          "description": "Find cosine (acute).",
          "workingLatex": "\\cos\\theta=\\sqrt{1-\\tfrac{9}{25}}=\\tfrac45",
          "explanation": "Use \\(\\sin^2+\\cos^2=1\\); acute, so the positive root.",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate sine and cosine.",
          "workingLatex": "\\csc\\theta=\\tfrac53,\\ \\sec\\theta=\\tfrac54",
          "explanation": "Reciprocals of \\(\\tfrac35\\) and \\(\\tfrac45\\).",
          "stepNumber": 2
        },
        {
          "description": "Form the cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{4/5}{3/5}=\\tfrac43",
          "explanation": "Divide cosine by sine; the fifths cancel.",
          "stepNumber": 3
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
          "description": "Find sine using the identity (Q2 sign).",
          "workingLatex": "\\sin\\theta=\\sqrt{1-\\tfrac{49}{625}}=\\tfrac{24}{25}",
          "explanation": "7–24–25 triangle; sine is positive in Q2.",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate for sec and csc.",
          "workingLatex": "\\sec\\theta=-\\tfrac{25}{7},\\ \\csc\\theta=\\tfrac{25}{24}",
          "explanation": "Secant follows cosine's negative sign; cosecant follows sine's positive sign.",
          "stepNumber": 2
        },
        {
          "description": "Form the cotangent.",
          "workingLatex": "\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}=\\tfrac{-7/25}{24/25}=-\\tfrac{7}{24}",
          "explanation": "Negative, as expected in Q2.",
          "stepNumber": 3
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
          "description": "Find \\(\\sec\\theta\\) from \\(\\sec^2=1+\\tan^2\\).",
          "workingLatex": "\\sec^2\\theta=1+\\tfrac{9}{16}=\\tfrac{25}{16}",
          "explanation": "From \\\\(\\\\tan\\\\theta=-\\\\tfrac34\\\\): square it and add 1.",
          "stepNumber": 1
        },
        {
          "description": "Choose the sign (Q4).",
          "workingLatex": "\\sec\\theta=\\tfrac54",
          "explanation": "In Q4 cosine is positive, so \\(\\sec\\theta>0\\).",
          "stepNumber": 2
        },
        {
          "description": "Recover cos, sin, then the rest.",
          "workingLatex": "\\cos\\theta=\\tfrac45,\\ \\sin\\theta=-\\tfrac35\\Rightarrow\\csc\\theta=-\\tfrac53,\\ \\cot\\theta=\\tfrac{1}{\\tan\\theta}=-\\tfrac43",
          "explanation": "\\(\\sin=\\tan\\cdot\\cos\\) gives the negative sine of Q4.",
          "stepNumber": 3
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
          "description": "Invert to get cosine.",
          "workingLatex": "\\cos\\theta=\\tfrac{1}{\\sec\\theta}=\\tfrac13",
          "explanation": "Cosine is the reciprocal of secant.",
          "stepNumber": 1
        },
        {
          "description": "Find sine (acute).",
          "workingLatex": "\\sin\\theta=\\sqrt{1-\\tfrac19}=\\tfrac{2\\sqrt2}{3}",
          "explanation": "Positive root; \\(\\sqrt{8/9}=\\tfrac{2\\sqrt2}{3}\\).",
          "stepNumber": 2
        },
        {
          "description": "Find tangent.",
          "workingLatex": "\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}=\\tfrac{2\\sqrt2/3}{1/3}=2\\sqrt2",
          "explanation": "Divide; the thirds cancel.",
          "stepNumber": 3
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
          "description": "Find sine and cosine.",
          "workingLatex": "\\sin\\theta=\\tfrac35,\\ \\cos\\theta=-\\tfrac45",
          "explanation": "Reciprocate the cosecant; obtuse (Q2) makes cosine negative (3–4–5 triangle).",
          "stepNumber": 1
        },
        {
          "description": "Derive tan, sec, cot.",
          "workingLatex": "\\tan\\theta=-\\tfrac34,\\ \\sec\\theta=-\\tfrac54,\\ \\cot\\theta=-\\tfrac43",
          "explanation": "All four of cos/tan/sec/cot are negative in Q2; only sin and csc stay positive.",
          "stepNumber": 2
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
          "description": "Spot the difference of squares.",
          "workingLatex": "(\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=\\sec^2\\theta-\\tan^2\\theta",
          "explanation": "\\((a-b)(a+b)=a^2-b^2\\) with \\(a=\\sec\\theta,\\ b=\\tan\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sec^2\\theta-\\tan^2\\theta=1",
          "explanation": "Rearranging \\(1+\\tan^2\\theta=\\sec^2\\theta\\) gives \\(\\sec^2\\theta-\\tan^2\\theta=1\\). \\(\\blacksquare\\)",
          "stepNumber": 2
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
          "description": "Spot the difference of squares.",
          "workingLatex": "(\\csc\\theta-\\cot\\theta)(\\csc\\theta+\\cot\\theta)=\\csc^2\\theta-\\cot^2\\theta",
          "explanation": "Same pattern with \\(a=\\csc\\theta,\\ b=\\cot\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Apply the identity.",
          "workingLatex": "\\csc^2\\theta-\\cot^2\\theta=1",
          "explanation": "From \\(1+\\cot^2\\theta=\\csc^2\\theta\\). \\(\\blacksquare\\)",
          "stepNumber": 2
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
          "description": "Rewrite each factor in sin/cos.",
          "workingLatex": "\\sec x\\tan x=\\tfrac{1}{\\cos x}\\cdot\\tfrac{\\sin x}{\\cos x}",
          "explanation": "Reciprocal form of \\(\\sec\\), quotient form of \\(\\tan\\).",
          "stepNumber": 1
        },
        {
          "description": "Multiply.",
          "workingLatex": "=\\tfrac{\\sin x}{\\cos^2 x}",
          "explanation": "The two cosines multiply to \\(\\cos^2 x\\).",
          "stepNumber": 2
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
          "description": "Pick a side and combine over a common denominator.",
          "workingLatex": "\\sec\\theta-\\cos\\theta=\\tfrac{1}{\\cos\\theta}-\\cos\\theta=\\tfrac{1-\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Work on the numerator of the LHS first; common denominator \\(\\cos\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Use \\(1-\\cos^2\\theta=\\sin^2\\theta\\).",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Pythagorean identity.",
          "stepNumber": 2
        },
        {
          "description": "Divide by \\(\\tan\\theta\\).",
          "workingLatex": "\\tfrac{\\sin^2\\theta/\\cos\\theta}{\\sin\\theta/\\cos\\theta}=\\tfrac{\\sin^2\\theta}{\\cos\\theta}\\cdot\\tfrac{\\cos\\theta}{\\sin\\theta}=\\sin\\theta",
          "explanation": "Dividing flips the \\(\\tan\\); the \\(\\cos\\theta\\) cancels and one \\(\\sin\\theta\\) cancels. \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "description": "Combine the left side.",
          "workingLatex": "\\csc\\theta-\\sin\\theta=\\tfrac{1}{\\sin\\theta}-\\sin\\theta=\\tfrac{1-\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Common denominator \\(\\sin\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Use \\(1-\\sin^2\\theta=\\cos^2\\theta\\).",
          "workingLatex": "=\\tfrac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "Pythagorean identity.",
          "stepNumber": 2
        },
        {
          "description": "Split into the target form.",
          "workingLatex": "=\\cos\\theta\\cdot\\tfrac{\\cos\\theta}{\\sin\\theta}=\\cos\\theta\\cot\\theta",
          "explanation": "Peel off one \\(\\cos\\theta\\); the rest is \\(\\cot\\theta\\). \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "description": "Write both terms in sin/cos.",
          "workingLatex": "\\tan\\theta+\\cot\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}+\\tfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Convert to the base functions.",
          "stepNumber": 1
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta+\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Common denominator \\(\\sin\\theta\\cos\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Use \\(\\sin^2+\\cos^2=1\\).",
          "workingLatex": "=\\tfrac{1}{\\sin\\theta\\cos\\theta}=\\sec\\theta\\csc\\theta",
          "explanation": "The numerator is 1; split the single fraction into the two reciprocals. \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "explanation": "Cotangent is the reciprocal of tangent.",
          "stepNumber": 1
        },
        {
          "description": "Multiply.",
          "workingLatex": "\\tan x\\cot x=\\tan x\\cdot\\tfrac{1}{\\tan x}=1",
          "explanation": "Valid wherever both are defined.",
          "stepNumber": 2
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
          "description": "Recognise the reciprocal pair.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine.",
          "stepNumber": 1
        },
        {
          "description": "Multiply.",
          "workingLatex": "\\sec x\\cos x=\\tfrac{1}{\\cos x}\\cdot\\cos x=1",
          "explanation": "A reciprocal pair multiplies to 1.",
          "stepNumber": 2
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
          "description": "Recognise the reciprocal pair.",
          "workingLatex": "\\csc x=\\tfrac{1}{\\sin x}",
          "explanation": "Cosecant is the reciprocal of sine.",
          "stepNumber": 1
        },
        {
          "description": "Multiply.",
          "workingLatex": "\\csc x\\sin x=\\tfrac{1}{\\sin x}\\cdot\\sin x=1",
          "explanation": "A reciprocal pair multiplies to 1.",
          "stepNumber": 2
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
          "description": "Substitute \\(\\sec x=\\tfrac{1}{\\cos x}\\).",
          "workingLatex": "\\sin x\\cdot\\tfrac{1}{\\cos x}=\\tfrac{\\sin x}{\\cos x}",
          "explanation": "Use the reciprocal definition.",
          "stepNumber": 1
        },
        {
          "description": "Recognise the ratio.",
          "workingLatex": "=\\tan x",
          "explanation": "\\(\\sin/\\cos\\) is the definition of tangent.",
          "stepNumber": 2
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
          "description": "Write both in sin/cos.",
          "workingLatex": "\\tfrac{\\csc\\theta}{\\cot\\theta}=\\tfrac{1/\\sin\\theta}{\\cos\\theta/\\sin\\theta}",
          "explanation": "Reciprocal over quotient.",
          "stepNumber": 1
        },
        {
          "description": "Divide the fractions.",
          "workingLatex": "=\\tfrac{1}{\\sin\\theta}\\cdot\\tfrac{\\sin\\theta}{\\cos\\theta}=\\tfrac{1}{\\cos\\theta}=\\sec\\theta",
          "explanation": "Multiply by the reciprocal; the \\(\\sin\\theta\\) cancels (don't invert the wrong way and get \\(\\cos\\theta\\)).",
          "stepNumber": 2
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
          "description": "Choose the harder side and convert \\(\\cot^2\\).",
          "workingLatex": "\\cot^2\\theta-\\cos^2\\theta=\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}-\\cos^2\\theta",
          "explanation": "Work on the LHS; \\(\\cot^2=\\cos^2/\\sin^2\\).",
          "stepNumber": 1
        },
        {
          "description": "Factor out \\(\\cos^2\\theta\\).",
          "workingLatex": "=\\cos^2\\theta\\!\\left(\\tfrac{1}{\\sin^2\\theta}-1\\right)=\\cos^2\\theta\\cdot\\tfrac{1-\\sin^2\\theta}{\\sin^2\\theta}",
          "explanation": "Common factor \\(\\cos^2\\theta\\); combine the bracket over \\(\\sin^2\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Use \\(1-\\sin^2\\theta=\\cos^2\\theta\\).",
          "workingLatex": "=\\cos^2\\theta\\cdot\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}=\\cos^2\\theta\\cot^2\\theta",
          "explanation": "This is the RHS. \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "description": "Apply both Pythagorean identities.",
          "workingLatex": "\\tfrac{1+\\tan^2\\theta}{1+\\cot^2\\theta}=\\tfrac{\\sec^2\\theta}{\\csc^2\\theta}",
          "explanation": "Numerator \\(=\\sec^2\\theta\\), denominator \\(=\\csc^2\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Convert to sin/cos.",
          "workingLatex": "=\\tfrac{1/\\cos^2\\theta}{1/\\sin^2\\theta}",
          "explanation": "Write each reciprocal squared.",
          "stepNumber": 2
        },
        {
          "description": "Simplify the compound fraction.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta}{\\cos^2\\theta}=\\tan^2\\theta",
          "explanation": "Multiply by the reciprocal of the denominator.",
          "stepNumber": 3
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
          "description": "Combine inside the bracket.",
          "workingLatex": "\\cot\\theta+\\csc\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}+\\tfrac{1}{\\sin\\theta}=\\tfrac{\\cos\\theta+1}{\\sin\\theta}",
          "explanation": "Common denominator \\(\\sin\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Square it.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)^2}{\\sin^2\\theta}",
          "explanation": "Square numerator and denominator.",
          "stepNumber": 2
        },
        {
          "description": "Replace \\(\\sin^2\\theta=1-\\cos^2\\theta\\) and factor.",
          "workingLatex": "=\\tfrac{(1+\\cos\\theta)^2}{(1-\\cos\\theta)(1+\\cos\\theta)}",
          "explanation": "Difference of two squares in the denominator.",
          "stepNumber": 3
        },
        {
          "description": "Cancel a common factor.",
          "workingLatex": "=\\tfrac{1+\\cos\\theta}{1-\\cos\\theta}",
          "explanation": "One \\((1+\\cos\\theta)\\) cancels. \\(\\blacksquare\\)",
          "stepNumber": 4
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
          "description": "Substitute \\(\\sec\\theta=\\tfrac{1}{\\cos\\theta}\\).",
          "workingLatex": "\\tfrac{\\sec\\theta-1}{\\sec\\theta+1}=\\tfrac{1/\\cos\\theta-1}{1/\\cos\\theta+1}",
          "explanation": "Express the whole fraction in cosine.",
          "stepNumber": 1
        },
        {
          "description": "Multiply top and bottom by \\(\\cos\\theta\\).",
          "workingLatex": "=\\tfrac{1-\\cos\\theta}{1+\\cos\\theta}",
          "explanation": "Clearing the inner fractions removes the \\(1/\\cos\\theta\\) terms. \\(\\blacksquare\\)",
          "stepNumber": 2
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
          "description": "Evaluate each reciprocal.",
          "workingLatex": "\\sec\\tfrac{\\pi}{3}=\\tfrac{1}{1/2}=2,\\quad \\csc\\tfrac{\\pi}{6}=\\tfrac{1}{1/2}=2",
          "explanation": "Both reduce to 2.",
          "stepNumber": 1
        },
        {
          "description": "Subtract.",
          "workingLatex": "2-2=0",
          "explanation": "The two terms are equal, so the difference is 0.",
          "stepNumber": 2
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
          "description": "Evaluate each reciprocal.",
          "workingLatex": "\\sec\\tfrac{\\pi}{4}=\\sqrt2,\\quad \\csc\\tfrac{\\pi}{4}=\\sqrt2",
          "explanation": "Both equal \\(\\sqrt2\\) (reciprocal of \\(\\tfrac{\\sqrt2}{2}\\)).",
          "stepNumber": 1
        },
        {
          "description": "Add.",
          "workingLatex": "\\sqrt2+\\sqrt2=2\\sqrt2",
          "explanation": "Add like surds.",
          "stepNumber": 2
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
          "description": "Rewrite each bracket with an identity.",
          "workingLatex": "1-\\cos^2\\theta=\\sin^2\\theta,\\quad 1+\\cot^2\\theta=\\csc^2\\theta",
          "explanation": "Two standard Pythagorean forms.",
          "stepNumber": 1
        },
        {
          "description": "Multiply.",
          "workingLatex": "\\sin^2\\theta\\cdot\\csc^2\\theta=\\sin^2\\theta\\cdot\\tfrac{1}{\\sin^2\\theta}=1",
          "explanation": "\\(\\csc^2=1/\\sin^2\\), so the \\(\\sin^2\\theta\\) cancels. \\(\\blacksquare\\)",
          "stepNumber": 2
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
          "description": "Test \\(f(-x)\\) using cosine's parity.",
          "workingLatex": "\\cos(-x)=\\cos x",
          "explanation": "Cosine is an even function.",
          "stepNumber": 1
        },
        {
          "description": "Conclude.",
          "workingLatex": "\\sec(-x)=\\tfrac{1}{\\cos(-x)}=\\tfrac{1}{\\cos x}=\\sec x\\Rightarrow\\text{even}",
          "explanation": "The reciprocal of an even function is even.",
          "stepNumber": 2
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
          "description": "Test \\(f(-x)\\) using sine's parity.",
          "workingLatex": "\\sin(-x)=-\\sin x",
          "explanation": "Sine is an odd function.",
          "stepNumber": 1
        },
        {
          "description": "Conclude.",
          "workingLatex": "\\csc(-x)=\\tfrac{1}{-\\sin x}=-\\csc x\\Rightarrow\\text{odd}",
          "explanation": "The reciprocal of an odd function is odd.",
          "stepNumber": 2
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
          "description": "Factor the left side.",
          "workingLatex": "\\sec^4\\theta-\\sec^2\\theta=\\sec^2\\theta(\\sec^2\\theta-1)",
          "explanation": "Common factor \\(\\sec^2\\theta\\) — factor rather than expand.",
          "stepNumber": 1
        },
        {
          "description": "Use \\(\\sec^2\\theta-1=\\tan^2\\theta\\).",
          "workingLatex": "=\\sec^2\\theta\\tan^2\\theta",
          "explanation": "Pythagorean identity on the bracket.",
          "stepNumber": 2
        },
        {
          "description": "Replace the remaining \\(\\sec^2\\theta\\) and expand.",
          "workingLatex": "=(1+\\tan^2\\theta)\\tan^2\\theta=\\tan^2\\theta+\\tan^4\\theta",
          "explanation": "This is the RHS. \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "description": "Relate secant to cosine.",
          "workingLatex": "\\sec x=\\tfrac{1}{\\cos x}",
          "explanation": "A reciprocal repeats exactly when the base function repeats.",
          "stepNumber": 1
        },
        {
          "description": "Use the period of cosine.",
          "workingLatex": "\\cos(x+2\\pi)=\\cos x\\Rightarrow\\sec(x+2\\pi)=\\sec x",
          "explanation": "Cosine has period \\(2\\pi\\), so the period of \\(\\sec\\) is \\(2\\pi\\) (not \\(\\pi\\)).",
          "stepNumber": 2
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
          "description": "Relate cotangent to tangent.",
          "workingLatex": "\\cot x=\\tfrac{1}{\\tan x}",
          "explanation": "Tangent and cotangent share a period.",
          "stepNumber": 1
        },
        {
          "description": "State the period.",
          "workingLatex": "\\text{period}=\\pi",
          "explanation": "Like \\(\\tan\\), \\(\\cot\\) repeats every \\(\\pi\\).",
          "stepNumber": 2
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
          "description": "Set the calculator to radians.",
          "workingLatex": "\\sec 1=\\tfrac{1}{\\cos 1}",
          "explanation": "\"1\" means 1 radian — degree mode gives the wrong value.",
          "stepNumber": 1
        },
        {
          "description": "Evaluate to 3 d.p.",
          "workingLatex": "=\\tfrac{1}{0.5403}\\approx1.851",
          "explanation": "\\(\\cos 1\\approx0.5403\\).",
          "stepNumber": 2
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
          "description": "Write both in sin/cos.",
          "workingLatex": "\\cot\\theta\\sec\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}\\cdot\\tfrac{1}{\\cos\\theta}",
          "explanation": "Quotient form of \\(\\cot\\), reciprocal form of \\(\\sec\\).",
          "stepNumber": 1
        },
        {
          "description": "Cancel cosine.",
          "workingLatex": "=\\tfrac{1}{\\sin\\theta}=\\csc\\theta",
          "explanation": "The \\(\\cos\\theta\\) cancels (not the \\(\\sin\\theta\\)), leaving cosecant.",
          "stepNumber": 2
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
          "description": "Use \\(\\sec^2\\theta-1=\\tan^2\\theta\\).",
          "workingLatex": "(\\sec^2\\theta-1)\\cot^2\\theta=\\tan^2\\theta\\cot^2\\theta",
          "explanation": "Recognise the bracket as \\(\\tan^2\\theta\\).",
          "stepNumber": 1
        },
        {
          "description": "Cancel with the reciprocal.",
          "workingLatex": "=\\tan^2\\theta\\cdot\\tfrac{1}{\\tan^2\\theta}=1",
          "explanation": "\\(\\cot^2\\theta=1/\\tan^2\\theta\\).",
          "stepNumber": 2
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
          "description": "Write the left side in sin/cos.",
          "workingLatex": "\\sec^2\\theta+\\csc^2\\theta=\\tfrac{1}{\\cos^2\\theta}+\\tfrac{1}{\\sin^2\\theta}",
          "explanation": "Use the reciprocal-squared forms.",
          "stepNumber": 1
        },
        {
          "description": "Combine over a common denominator.",
          "workingLatex": "=\\tfrac{\\sin^2\\theta+\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Common denominator \\(\\sin^2\\theta\\cos^2\\theta\\).",
          "stepNumber": 2
        },
        {
          "description": "Apply \\(\\sin^2+\\cos^2=1\\) and split.",
          "workingLatex": "=\\tfrac{1}{\\sin^2\\theta\\cos^2\\theta}=\\sec^2\\theta\\csc^2\\theta",
          "explanation": "Numerator is 1; split into the two reciprocal squares — the RHS. \\(\\blacksquare\\)",
          "stepNumber": 3
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
          "description": "Use the related angle for cosine.",
          "workingLatex": "\\cos(\\pi-\\theta)=-\\cos\\theta",
          "explanation": "Reflecting through \\(\\pi\\) negates cosine (Q2 cosine is negative).",
          "stepNumber": 1
        },
        {
          "description": "Reciprocate.",
          "workingLatex": "\\sec(\\pi-\\theta)=\\tfrac{1}{-\\cos\\theta}=-\\sec\\theta",
          "explanation": "Keep the negative sign through the reciprocal.",
          "stepNumber": 2
        }
      ],
      "finalAnswer": "\\(-\\sec\\theta\\).",
      "commonMistakes": [
        "Forgetting the sign change from \\(\\cos(\\pi-\\theta)=-\\cos\\theta\\)."
      ]
    }
  }
];
