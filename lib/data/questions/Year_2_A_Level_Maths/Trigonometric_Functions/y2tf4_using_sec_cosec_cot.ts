import { Question } from "@/lib/types";

/**
 * Year 2 — Trigonometry (Y2) § 6.4 Using sec, cosec and cot
 * Ref: y2tf4
 * 71 questions: Pythagorean identities (\\(1 + \\tan^2\\theta = \\sec^2\\theta\\),
 * \\(1 + \\cot^2\\theta = \\csc^2\\theta\\)), simplification, proving identities,
 * equations involving sec/csc/cot reducing to quadratics, exact values.
 */
export const questions: Question[] = [
  {
    "id": "y2tf4-001",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 16",
    "difficulty": "Challenge",
    "questionText": "Consider the equation \\(2\\tan^2\\theta + 5\\sec\\theta + 4 = 0\\) for \\(0^\\circ \\le \\theta < 360^\\circ\\).\n(a) Show that the equation can be written as \\(2\\sec^2\\theta + 5\\sec\\theta + 2 = 0\\).\n(b) Hence solve \\(2\\sec^2\\theta + 5\\sec\\theta + 2 = 0\\), explaining clearly why one of the values of \\(\\sec\\theta\\) must be rejected.\n(c) Find all solutions for \\(\\theta\\) in the given interval, giving your answers in degrees.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identities",
      "sec",
      "quadratic",
      "solving-equations",
      "rejected-root",
      "validity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the relevant Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Since the equation mixes \\(\\tan^2\\theta\\) with \\(\\sec\\theta\\), replace the \\(\\tan^2\\) term to get a single trig function. A common slip is reaching for \\(1+\\cot^2\\theta=\\csc^2\\theta\\) instead."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate tan squared.",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtracting \\(1\\) makes the identity ready for direct substitution. Keep the minus sign: writing \\(\\sec^2\\theta+1\\) here is the most frequent error."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the original equation.",
          "workingLatex": "2\\left(\\sec^2\\theta - 1\\right) + 5\\sec\\theta + 4 = 0",
          "explanation": "Replace \\(\\tan^2\\theta\\) with \\(\\sec^2\\theta-1\\) inside the bracket. The bracket is essential so the factor of \\(2\\) multiplies both terms."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "2\\sec^2\\theta - 2 + 5\\sec\\theta + 4 = 0",
          "explanation": "Distribute the \\(2\\) over both terms, giving \\(2\\sec^2\\theta\\) and \\(-2\\). Forgetting to multiply the \\(-1\\) by \\(2\\) is a typical mistake."
        },
        {
          "stepNumber": 5,
          "description": "Collect the constant terms.",
          "workingLatex": "2\\sec^2\\theta + 5\\sec\\theta + 2 = 0",
          "explanation": "Combine \\(-2+4=2\\) to reach the required quadratic form, completing part (a). This confirms the target identity."
        },
        {
          "stepNumber": 6,
          "description": "Treat as a quadratic in sec.",
          "workingLatex": "2u^2 + 5u + 2 = 0, \\quad u = \\sec\\theta",
          "explanation": "Letting \\(u=\\sec\\theta\\) makes the quadratic structure explicit and easier to factorise. This substitution is optional but reduces slips."
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "\\left(2u + 1\\right)\\left(u + 2\\right) = 0",
          "explanation": "Seek factors of \\(2\\times2=4\\) that add to \\(5\\), namely \\(4\\) and \\(1\\), splitting the middle term. Always re-expand mentally to check the cross terms give \\(5u\\)."
        },
        {
          "stepNumber": 8,
          "description": "Solve for each factor.",
          "workingLatex": "u = -\\frac{1}{2} \\quad \\text{or} \\quad u = -2",
          "explanation": "Set each bracket to zero. So \\(\\sec\\theta=-\\displaystyle\\frac{1}{2}\\) or \\(\\sec\\theta=-2\\)."
        },
        {
          "stepNumber": 9,
          "description": "Apply the validity range of sec.",
          "workingLatex": "\\left|\\sec\\theta\\right| \\ge 1",
          "explanation": "Because \\(-1\\le\\cos\\theta\\le1\\) with \\(\\cos\\theta\\ne0\\), its reciprocal \\(\\sec\\theta\\) always satisfies \\(|\\sec\\theta|\\ge1\\). This is the key Challenge insight."
        },
        {
          "stepNumber": 10,
          "description": "Reject the impossible root.",
          "workingLatex": "\\sec\\theta = -\\frac{1}{2} \\;\\Rightarrow\\; \\left|\\sec\\theta\\right| = \\frac{1}{2} < 1 \\;(\\text{reject})",
          "explanation": "Since \\(\\displaystyle\\frac{1}{2}<1\\) violates \\(|\\sec\\theta|\\ge1\\), no angle gives \\(\\sec\\theta=-\\displaystyle\\frac{1}{2}\\). Forgetting to reject this root loses the explanation marks."
        },
        {
          "stepNumber": 11,
          "description": "Convert the valid root to cosine.",
          "workingLatex": "\\sec\\theta = -2 \\;\\Rightarrow\\; \\cos\\theta = -\\frac{1}{2}",
          "explanation": "Take reciprocals since \\(\\cos\\theta=\\displaystyle\\frac{1}{\\sec\\theta}\\). Working in cosine makes finding the angles straightforward."
        },
        {
          "stepNumber": 12,
          "description": "Find the principal acute reference angle.",
          "workingLatex": "\\cos^{-1}\\left(\\frac{1}{2}\\right) = 60^\\circ",
          "explanation": "Use the magnitude to get the reference angle of \\(60^\\circ\\). The sign is handled by choosing the correct quadrants next."
        },
        {
          "stepNumber": 13,
          "description": "Identify the quadrants for negative cosine.",
          "workingLatex": "\\cos\\theta < 0 \\;\\Rightarrow\\; \\text{quadrants II and III}",
          "explanation": "Cosine is negative in the second and third quadrants. Reading off the CAST diagram avoids missing a solution."
        },
        {
          "stepNumber": 14,
          "description": "Compute the two angles.",
          "workingLatex": "\\theta = 180^\\circ - 60^\\circ = 120^\\circ, \\quad \\theta = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "The quadrant-II value is \\(180^\\circ-60^\\circ\\) and the quadrant-III value is \\(180^\\circ+60^\\circ\\). Both lie in \\(0^\\circ\\le\\theta<360^\\circ\\).",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    2.25,
                    0.999
                  ],
                  [
                    4.5,
                    0.997
                  ],
                  [
                    6.75,
                    0.993
                  ],
                  [
                    9,
                    0.988
                  ],
                  [
                    11.25,
                    0.981
                  ],
                  [
                    13.5,
                    0.972
                  ],
                  [
                    15.75,
                    0.962
                  ],
                  [
                    18,
                    0.951
                  ],
                  [
                    20.25,
                    0.938
                  ],
                  [
                    22.5,
                    0.924
                  ],
                  [
                    24.75,
                    0.908
                  ],
                  [
                    27,
                    0.891
                  ],
                  [
                    29.25,
                    0.872
                  ],
                  [
                    31.5,
                    0.853
                  ],
                  [
                    33.75,
                    0.831
                  ],
                  [
                    36,
                    0.809
                  ],
                  [
                    38.25,
                    0.785
                  ],
                  [
                    40.5,
                    0.76
                  ],
                  [
                    42.75,
                    0.734
                  ],
                  [
                    45,
                    0.707
                  ],
                  [
                    47.25,
                    0.679
                  ],
                  [
                    49.5,
                    0.649
                  ],
                  [
                    51.75,
                    0.619
                  ],
                  [
                    54,
                    0.588
                  ],
                  [
                    56.25,
                    0.556
                  ],
                  [
                    58.5,
                    0.522
                  ],
                  [
                    60.75,
                    0.489
                  ],
                  [
                    63,
                    0.454
                  ],
                  [
                    65.25,
                    0.419
                  ],
                  [
                    67.5,
                    0.383
                  ],
                  [
                    69.75,
                    0.346
                  ],
                  [
                    72,
                    0.309
                  ],
                  [
                    74.25,
                    0.271
                  ],
                  [
                    76.5,
                    0.233
                  ],
                  [
                    78.75,
                    0.195
                  ],
                  [
                    81,
                    0.156
                  ],
                  [
                    83.25,
                    0.118
                  ],
                  [
                    85.5,
                    0.078
                  ],
                  [
                    87.75,
                    0.039
                  ],
                  [
                    90,
                    0
                  ],
                  [
                    92.25,
                    -0.039
                  ],
                  [
                    94.5,
                    -0.078
                  ],
                  [
                    96.75,
                    -0.118
                  ],
                  [
                    99,
                    -0.156
                  ],
                  [
                    101.25,
                    -0.195
                  ],
                  [
                    103.5,
                    -0.233
                  ],
                  [
                    105.75,
                    -0.271
                  ],
                  [
                    108,
                    -0.309
                  ],
                  [
                    110.25,
                    -0.346
                  ],
                  [
                    112.5,
                    -0.383
                  ],
                  [
                    114.75,
                    -0.419
                  ],
                  [
                    117,
                    -0.454
                  ],
                  [
                    119.25,
                    -0.489
                  ],
                  [
                    121.5,
                    -0.522
                  ],
                  [
                    123.75,
                    -0.556
                  ],
                  [
                    126,
                    -0.588
                  ],
                  [
                    128.25,
                    -0.619
                  ],
                  [
                    130.5,
                    -0.649
                  ],
                  [
                    132.75,
                    -0.679
                  ],
                  [
                    135,
                    -0.707
                  ],
                  [
                    137.25,
                    -0.734
                  ],
                  [
                    139.5,
                    -0.76
                  ],
                  [
                    141.75,
                    -0.785
                  ],
                  [
                    144,
                    -0.809
                  ],
                  [
                    146.25,
                    -0.831
                  ],
                  [
                    148.5,
                    -0.853
                  ],
                  [
                    150.75,
                    -0.872
                  ],
                  [
                    153,
                    -0.891
                  ],
                  [
                    155.25,
                    -0.908
                  ],
                  [
                    157.5,
                    -0.924
                  ],
                  [
                    159.75,
                    -0.938
                  ],
                  [
                    162,
                    -0.951
                  ],
                  [
                    164.25,
                    -0.962
                  ],
                  [
                    166.5,
                    -0.972
                  ],
                  [
                    168.75,
                    -0.981
                  ],
                  [
                    171,
                    -0.988
                  ],
                  [
                    173.25,
                    -0.993
                  ],
                  [
                    175.5,
                    -0.997
                  ],
                  [
                    177.75,
                    -0.999
                  ],
                  [
                    180,
                    -1
                  ],
                  [
                    182.25,
                    -0.999
                  ],
                  [
                    184.5,
                    -0.997
                  ],
                  [
                    186.75,
                    -0.993
                  ],
                  [
                    189,
                    -0.988
                  ],
                  [
                    191.25,
                    -0.981
                  ],
                  [
                    193.5,
                    -0.972
                  ],
                  [
                    195.75,
                    -0.962
                  ],
                  [
                    198,
                    -0.951
                  ],
                  [
                    200.25,
                    -0.938
                  ],
                  [
                    202.5,
                    -0.924
                  ],
                  [
                    204.75,
                    -0.908
                  ],
                  [
                    207,
                    -0.891
                  ],
                  [
                    209.25,
                    -0.872
                  ],
                  [
                    211.5,
                    -0.853
                  ],
                  [
                    213.75,
                    -0.831
                  ],
                  [
                    216,
                    -0.809
                  ],
                  [
                    218.25,
                    -0.785
                  ],
                  [
                    220.5,
                    -0.76
                  ],
                  [
                    222.75,
                    -0.734
                  ],
                  [
                    225,
                    -0.707
                  ],
                  [
                    227.25,
                    -0.679
                  ],
                  [
                    229.5,
                    -0.649
                  ],
                  [
                    231.75,
                    -0.619
                  ],
                  [
                    234,
                    -0.588
                  ],
                  [
                    236.25,
                    -0.556
                  ],
                  [
                    238.5,
                    -0.522
                  ],
                  [
                    240.75,
                    -0.489
                  ],
                  [
                    243,
                    -0.454
                  ],
                  [
                    245.25,
                    -0.419
                  ],
                  [
                    247.5,
                    -0.383
                  ],
                  [
                    249.75,
                    -0.346
                  ],
                  [
                    252,
                    -0.309
                  ],
                  [
                    254.25,
                    -0.271
                  ],
                  [
                    256.5,
                    -0.233
                  ],
                  [
                    258.75,
                    -0.195
                  ],
                  [
                    261,
                    -0.156
                  ],
                  [
                    263.25,
                    -0.118
                  ],
                  [
                    265.5,
                    -0.078
                  ],
                  [
                    267.75,
                    -0.039
                  ],
                  [
                    270,
                    0
                  ],
                  [
                    272.25,
                    0.039
                  ],
                  [
                    274.5,
                    0.078
                  ],
                  [
                    276.75,
                    0.118
                  ],
                  [
                    279,
                    0.156
                  ],
                  [
                    281.25,
                    0.195
                  ],
                  [
                    283.5,
                    0.233
                  ],
                  [
                    285.75,
                    0.271
                  ],
                  [
                    288,
                    0.309
                  ],
                  [
                    290.25,
                    0.346
                  ],
                  [
                    292.5,
                    0.383
                  ],
                  [
                    294.75,
                    0.419
                  ],
                  [
                    297,
                    0.454
                  ],
                  [
                    299.25,
                    0.489
                  ],
                  [
                    301.5,
                    0.522
                  ],
                  [
                    303.75,
                    0.556
                  ],
                  [
                    306,
                    0.588
                  ],
                  [
                    308.25,
                    0.619
                  ],
                  [
                    310.5,
                    0.649
                  ],
                  [
                    312.75,
                    0.679
                  ],
                  [
                    315,
                    0.707
                  ],
                  [
                    317.25,
                    0.734
                  ],
                  [
                    319.5,
                    0.76
                  ],
                  [
                    321.75,
                    0.785
                  ],
                  [
                    324,
                    0.809
                  ],
                  [
                    326.25,
                    0.831
                  ],
                  [
                    328.5,
                    0.853
                  ],
                  [
                    330.75,
                    0.872
                  ],
                  [
                    333,
                    0.891
                  ],
                  [
                    335.25,
                    0.908
                  ],
                  [
                    337.5,
                    0.924
                  ],
                  [
                    339.75,
                    0.938
                  ],
                  [
                    342,
                    0.951
                  ],
                  [
                    344.25,
                    0.962
                  ],
                  [
                    346.5,
                    0.972
                  ],
                  [
                    348.75,
                    0.981
                  ],
                  [
                    351,
                    0.988
                  ],
                  [
                    353.25,
                    0.993
                  ],
                  [
                    355.5,
                    0.997
                  ],
                  [
                    357.75,
                    0.999
                  ],
                  [
                    360,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cos\\theta",
                "labelAt": [
                  40,
                  0.766
                ]
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  -0.5
                ],
                "to": [
                  360,
                  -0.5
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=-\\frac12",
                "labelAt": [
                  28.8,
                  -0.2
                ]
              }
            ],
            "points": [
              {
                "at": [
                  120,
                  -0.5
                ],
                "label": "120^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  240,
                  -0.5
                ],
                "label": "240^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 15,
          "description": "State the complete solution set.",
          "workingLatex": "\\theta = 120^\\circ, \\; 240^\\circ",
          "explanation": "These are all solutions in the interval; the rejected root contributes none. Check there are no others by confirming \\(360^\\circ\\) would repeat the cycle."
        }
      ],
      "finalAnswer": "(a) Proved: \\(2\\sec^2\\theta+5\\sec\\theta+2=0\\). (b) \\(\\sec\\theta=-\\displaystyle\\frac{1}{2}\\) (rejected as \\(|\\sec\\theta|\\ge1\\)) or \\(\\sec\\theta=-2\\). (c) \\(\\theta=120^\\circ,\\,240^\\circ\\).",
      "commonMistakes": [
        "Using \\(1+\\tan^2\\theta=\\sec^2\\theta\\) as \\(\\sec^2\\theta+1\\), giving the wrong constant.",
        "Failing to reject \\(\\sec\\theta=-\\displaystyle\\frac{1}{2}\\) despite \\(|\\sec\\theta|\\ge1\\).",
        "Finding only \\(\\theta=120^\\circ\\) and missing the quadrant-III solution \\(240^\\circ\\)."
      ]
    }
  },
  {
    "id": "y2tf4-002",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 01",
    "difficulty": "Foundation",
    "questionText": "Starting from \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), derive \\(1 + \\tan^2\\theta = \\sec^2\\theta\\).",
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
          "description": "State the starting identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for all \\(\\theta\\). Every term we need will come from rearranging it."
        },
        {
          "stepNumber": 2,
          "description": "Decide what to divide by.",
          "workingLatex": "\\text{divide every term by } \\cos^2\\theta",
          "explanation": "We want tan and sec, which both have cosine on the bottom. Dividing by \\(\\cos^2\\theta\\) is what creates those functions."
        },
        {
          "stepNumber": 3,
          "description": "Divide every term by cos squared.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Divide all three terms by \\(\\cos^2\\theta\\), not just some. A common slip is forgetting to divide the right-hand side 1 as well."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the first term as a squared quotient.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "A ratio of squares equals the square of the ratio. This sets up the term so the definition of tan can be used."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the first term to tan squared.",
          "workingLatex": "\\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta",
          "explanation": "Because \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), the squared quotient is \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the second term to 1.",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1",
          "explanation": "Any nonzero quantity divided by itself is 1. This is where the leading 1 of the identity comes from."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the right side as a squared reciprocal.",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = \\left(\\frac{1}{\\cos\\theta}\\right)^2",
          "explanation": "A reciprocal of a square equals the square of the reciprocal. This prepares the term for the definition of sec."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the right side to sec squared.",
          "workingLatex": "\\left(\\frac{1}{\\cos\\theta}\\right)^2 = \\sec^2\\theta",
          "explanation": "Since \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), its square is \\(\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Combine to state the result.",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "Putting the three simplified pieces together gives the required identity. Valid wherever \\(\\cos\\theta\\neq0\\)."
        }
      ],
      "finalAnswer": "\\(\\tan^2\\theta + 1 = \\sec^2\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-003",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 02",
    "difficulty": "Foundation",
    "questionText": "Derive the identity \\(1 + \\cot^2\\theta = \\csc^2\\theta\\).",
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
          "explanation": "Start from the fundamental identity. This time we will divide by \\(\\sin^2\\theta\\) because we want cosec and cot."
        },
        {
          "stepNumber": 2,
          "description": "Decide what to divide by.",
          "workingLatex": "\\text{divide every term by } \\sin^2\\theta",
          "explanation": "Both cot and cosec have sine on the bottom. Dividing by \\(\\sin^2\\theta\\) is what produces those functions."
        },
        {
          "stepNumber": 3,
          "description": "Divide every term by sin squared.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Divide all three terms by \\(\\sin^2\\theta\\). Remember to divide the right-hand 1 as well, not just the left side."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first term to 1.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1",
          "explanation": "A quantity over itself equals 1. This produces the leading 1 of the identity."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the second term as a squared quotient.",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "A ratio of squares equals the square of the ratio. This sets up the term so the definition of cot can be used."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the second term to cot squared.",
          "workingLatex": "\\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2 = \\cot^2\\theta",
          "explanation": "Because \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\), the squared quotient is \\(\\cot^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the right side as a squared reciprocal.",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = \\left(\\frac{1}{\\sin\\theta}\\right)^2",
          "explanation": "A reciprocal of a square equals the square of the reciprocal. This prepares the term for the definition of cosec."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the right side to cosec squared.",
          "workingLatex": "\\left(\\frac{1}{\\sin\\theta}\\right)^2 = \\csc^2\\theta",
          "explanation": "Since \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\), its square is \\(\\csc^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Combine to state the result.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Assembling the simplified terms gives the required identity. Valid wherever \\(\\sin\\theta\\neq0\\)."
        }
      ],
      "finalAnswer": "\\(\\cot^2\\theta + 1 = \\csc^2\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-004",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 17",
    "difficulty": "Standard",
    "questionText": "Find \\(\\tan\\theta\\) for \\(\\theta\\) acute given \\(\\sec\\theta = 3\\).",
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
          "description": "Write the relevant identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity links tan and sec, so it converts the given sec into tan. It comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note the given value of sec.",
          "workingLatex": "\\sec\\theta = 3",
          "explanation": "Record the given information. The identity needs \\(\\sec^2\\theta\\), so the next move is to square this value.",
          "diagram": {
            "xMin": -0.566,
            "xMax": 1.849,
            "yMin": -0.566,
            "yMax": 3.536,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  1,
                  0
                ],
                "color": "#0d9488",
                "label": "1",
                "labelAt": [
                  0.5,
                  -0.311
                ]
              },
              {
                "from": [
                  1,
                  0
                ],
                "to": [
                  1,
                  2.828
                ],
                "color": "#0d9488",
                "label": "2\\sqrt{2}",
                "labelAt": [
                  1.368,
                  1.414
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  1,
                  2.828
                ],
                "color": "#dc2626",
                "label": "3",
                "labelAt": [
                  0.161,
                  1.669
                ]
              },
              {
                "from": [
                  0.774,
                  0
                ],
                "to": [
                  0.774,
                  0.226
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  0.774,
                  0.226
                ],
                "to": [
                  1,
                  0.226
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  0.261,
                  0.185
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 3,
          "description": "Square the given value of sec.",
          "workingLatex": "\\sec^2\\theta = 3^2 = 9",
          "explanation": "Square the given \\(\\sec\\theta=3\\). Do not forget this step; using 3 instead of 9 is a common error."
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to make tan squared the subject.",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtract 1 from both sides of the identity to isolate \\(\\tan^2\\theta\\). This is the form we substitute into."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the value of sec squared.",
          "workingLatex": "\\tan^2\\theta = 9 - 1",
          "explanation": "Replace \\(\\sec^2\\theta\\) with 9. Keep the \\(-1\\) from the rearranged identity."
        },
        {
          "stepNumber": 6,
          "description": "Evaluate tan squared.",
          "workingLatex": "\\tan^2\\theta = 8",
          "explanation": "A simple subtraction. We now need the square root to get \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Take the square root.",
          "workingLatex": "\\tan\\theta = \\pm\\sqrt{8}",
          "explanation": "Square rooting gives a plus-or-minus sign; the sign is settled next using the range of \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Choose the positive root for acute angle.",
          "workingLatex": "\\tan\\theta = \\sqrt{8}",
          "explanation": "For acute \\(\\theta\\) both sine and cosine are positive, so \\(\\tan\\theta>0\\). Reject the negative root."
        },
        {
          "stepNumber": 9,
          "description": "Factor out the largest square.",
          "workingLatex": "\\tan\\theta = \\sqrt{4\\cdot2}",
          "explanation": "Write 8 as \\(4\\times2\\) where 4 is the largest perfect-square factor. This sets up the surd to be simplified."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the surd.",
          "workingLatex": "\\tan\\theta = \\sqrt{4}\\,\\sqrt{2} = 2\\sqrt{2}",
          "explanation": "Split the root over the product and use \\(\\sqrt{4}=2\\). Always simplify surds in the final answer."
        }
      ],
      "finalAnswer": "\\(\\tan\\theta = 2\\sqrt 2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-005",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 18",
    "difficulty": "Standard",
    "questionText": "Find \\(\\cot\\theta\\) given \\(\\csc\\theta = \\displaystyle\\frac{5}{3}\\) and \\(\\theta\\) acute.",
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
          "description": "Write the relevant identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity links cot and cosec, so it converts the given cosec into cot. It comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note the given value of cosec.",
          "workingLatex": "\\csc\\theta = \\frac{5}{3}",
          "explanation": "Record the given information. The identity needs \\(\\csc^2\\theta\\), so the next move is to square this value.",
          "diagram": {
            "xMin": -0.8,
            "xMax": 5.2,
            "yMin": -0.8,
            "yMax": 4,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  0
                ],
                "color": "#0d9488",
                "label": "4",
                "labelAt": [
                  2,
                  -0.44
                ]
              },
              {
                "from": [
                  4,
                  0
                ],
                "to": [
                  4,
                  3
                ],
                "color": "#0d9488",
                "label": "3",
                "labelAt": [
                  4.52,
                  1.5
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  3
                ],
                "color": "#dc2626",
                "label": "5",
                "labelAt": [
                  1.52,
                  1.86
                ]
              },
              {
                "from": [
                  3.68,
                  0
                ],
                "to": [
                  3.68,
                  0.32
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  3.68,
                  0.32
                ],
                "to": [
                  4,
                  0.32
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  1.214,
                  0.405
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 3,
          "description": "Set up the square of the fraction.",
          "workingLatex": "\\csc^2\\theta = \\left(\\frac{5}{3}\\right)^2 = \\frac{5^2}{3^2}",
          "explanation": "Squaring a fraction squares the top and the bottom separately. Writing \\(\\displaystyle\\frac{5^2}{3^2}\\) makes clear the 3 gets squared too."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squared fraction.",
          "workingLatex": "\\csc^2\\theta = \\frac{25}{9}",
          "explanation": "Compute \\(5^2=25\\) and \\(3^2=9\\). A common slip is squaring only the 5; the denominator must be squared as well."
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for cot squared.",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "Subtract 1 from both sides of the identity to isolate \\(\\cot^2\\theta\\). This is the form we substitute into."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the value of cosec squared.",
          "workingLatex": "\\cot^2\\theta = \\frac{25}{9} - 1",
          "explanation": "Replace \\(\\csc^2\\theta\\) with \\(\\displaystyle\\frac{25}{9}\\). Keep the \\(-1\\) from the rearranged identity."
        },
        {
          "stepNumber": 7,
          "description": "Write 1 with a denominator of 9.",
          "workingLatex": "\\cot^2\\theta = \\frac{25}{9} - \\frac{9}{9}",
          "explanation": "To subtract fractions the denominators must match. Since \\(1=\\displaystyle\\frac{9}{9}\\), rewrite the 1 in ninths first."
        },
        {
          "stepNumber": 8,
          "description": "Subtract the numerators.",
          "workingLatex": "\\cot^2\\theta = \\frac{16}{9}",
          "explanation": "With matching denominators, subtract the numerators \\(25-9=16\\) and keep the 9."
        },
        {
          "stepNumber": 9,
          "description": "Take the square root.",
          "workingLatex": "\\cot\\theta = \\pm\\sqrt{\\frac{16}{9}}",
          "explanation": "To get \\(\\cot\\theta\\) from \\(\\cot^2\\theta\\) take the square root. This introduces a plus-or-minus sign, resolved next."
        },
        {
          "stepNumber": 10,
          "description": "Split the root over the fraction.",
          "workingLatex": "\\cot\\theta = \\pm\\frac{\\sqrt{16}}{\\sqrt{9}} = \\pm\\frac{4}{3}",
          "explanation": "The root of a fraction is the root of the top over the root of the bottom: \\(\\sqrt{16}=4\\) and \\(\\sqrt{9}=3\\)."
        },
        {
          "stepNumber": 11,
          "description": "Choose the positive root.",
          "workingLatex": "\\cot\\theta = \\frac{4}{3}",
          "explanation": "For acute \\(\\theta\\), both \\(\\sin\\theta\\) and \\(\\cos\\theta\\) are positive, so \\(\\cot\\theta>0\\). Reject the negative root."
        }
      ],
      "finalAnswer": "\\(\\cot\\theta = \\displaystyle\\frac{4}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-006",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 48",
    "difficulty": "Challenge",
    "questionText": "\\(\\tan\\theta = -2\\), \\(90^\\circ < \\theta < 180^\\circ\\). Find \\(\\sec\\theta\\).",
    "marks": 4,
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
          "description": "Choose the linking identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "We are given \\(\\tan\\theta\\) and asked for \\(\\sec\\theta\\), so we need the identity that connects exactly those two functions. This is the Pythagorean identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note where the identity comes from",
          "workingLatex": "\\frac{\\sin^2\\theta+\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}",
          "explanation": "It is derived by dividing the core identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\). Knowing this means you can rebuild it if you forget it."
        },
        {
          "stepNumber": 3,
          "description": "Write the identity solved for sec",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Swap the sides so that \\(\\sec^2\\theta\\) is the subject. This is the form we will substitute into."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given value",
          "workingLatex": "\\sec^2\\theta = 1 + (-2)^2",
          "explanation": "Replace \\(\\tan\\theta\\) with \\(-2\\), keeping the brackets around \\(-2\\). A common slip is to write \\(-2^2\\); the brackets show the whole \\(-2\\) is squared, not just the \\(2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Square the negative value",
          "workingLatex": "(-2)^2 = 4",
          "explanation": "A negative number squared is positive, because \\((-2)\\times(-2)=+4\\). This is exactly the step the missing brackets would have got wrong."
        },
        {
          "stepNumber": 6,
          "description": "Add the terms",
          "workingLatex": "\\sec^2\\theta = 1 + 4 = 5",
          "explanation": "Adding gives \\(\\sec^2\\theta=5\\). We now have the square of the answer, not the answer itself."
        },
        {
          "stepNumber": 7,
          "description": "Take the square root of both sides",
          "workingLatex": "\\sec\\theta = \\pm\\sqrt{5}",
          "explanation": "Square-rooting always produces two possibilities, one positive and one negative. We must keep both for now and decide later."
        },
        {
          "stepNumber": 8,
          "description": "Link sec to cos in this quadrant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Since \\(\\sec\\theta\\) is the reciprocal of \\(\\cos\\theta\\), it carries the same sign as \\(\\cos\\theta\\). So the sign of \\(\\sec\\theta\\) is fixed by the sign of \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Determine the sign of cos in \\(90^\\circ < \\theta < 180^\\circ\\)",
          "workingLatex": "90^\\circ < \\theta < 180^\\circ \\Rightarrow \\cos\\theta < 0",
          "explanation": "In Quadrant 2 only sine is positive (CAST), so cosine is negative there. This is the key fact that selects the correct root.",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    2.25,
                    0.999
                  ],
                  [
                    4.5,
                    0.997
                  ],
                  [
                    6.75,
                    0.993
                  ],
                  [
                    9,
                    0.988
                  ],
                  [
                    11.25,
                    0.981
                  ],
                  [
                    13.5,
                    0.972
                  ],
                  [
                    15.75,
                    0.962
                  ],
                  [
                    18,
                    0.951
                  ],
                  [
                    20.25,
                    0.938
                  ],
                  [
                    22.5,
                    0.924
                  ],
                  [
                    24.75,
                    0.908
                  ],
                  [
                    27,
                    0.891
                  ],
                  [
                    29.25,
                    0.872
                  ],
                  [
                    31.5,
                    0.853
                  ],
                  [
                    33.75,
                    0.831
                  ],
                  [
                    36,
                    0.809
                  ],
                  [
                    38.25,
                    0.785
                  ],
                  [
                    40.5,
                    0.76
                  ],
                  [
                    42.75,
                    0.734
                  ],
                  [
                    45,
                    0.707
                  ],
                  [
                    47.25,
                    0.679
                  ],
                  [
                    49.5,
                    0.649
                  ],
                  [
                    51.75,
                    0.619
                  ],
                  [
                    54,
                    0.588
                  ],
                  [
                    56.25,
                    0.556
                  ],
                  [
                    58.5,
                    0.522
                  ],
                  [
                    60.75,
                    0.489
                  ],
                  [
                    63,
                    0.454
                  ],
                  [
                    65.25,
                    0.419
                  ],
                  [
                    67.5,
                    0.383
                  ],
                  [
                    69.75,
                    0.346
                  ],
                  [
                    72,
                    0.309
                  ],
                  [
                    74.25,
                    0.271
                  ],
                  [
                    76.5,
                    0.233
                  ],
                  [
                    78.75,
                    0.195
                  ],
                  [
                    81,
                    0.156
                  ],
                  [
                    83.25,
                    0.118
                  ],
                  [
                    85.5,
                    0.078
                  ],
                  [
                    87.75,
                    0.039
                  ],
                  [
                    90,
                    0
                  ],
                  [
                    92.25,
                    -0.039
                  ],
                  [
                    94.5,
                    -0.078
                  ],
                  [
                    96.75,
                    -0.118
                  ],
                  [
                    99,
                    -0.156
                  ],
                  [
                    101.25,
                    -0.195
                  ],
                  [
                    103.5,
                    -0.233
                  ],
                  [
                    105.75,
                    -0.271
                  ],
                  [
                    108,
                    -0.309
                  ],
                  [
                    110.25,
                    -0.346
                  ],
                  [
                    112.5,
                    -0.383
                  ],
                  [
                    114.75,
                    -0.419
                  ],
                  [
                    117,
                    -0.454
                  ],
                  [
                    119.25,
                    -0.489
                  ],
                  [
                    121.5,
                    -0.522
                  ],
                  [
                    123.75,
                    -0.556
                  ],
                  [
                    126,
                    -0.588
                  ],
                  [
                    128.25,
                    -0.619
                  ],
                  [
                    130.5,
                    -0.649
                  ],
                  [
                    132.75,
                    -0.679
                  ],
                  [
                    135,
                    -0.707
                  ],
                  [
                    137.25,
                    -0.734
                  ],
                  [
                    139.5,
                    -0.76
                  ],
                  [
                    141.75,
                    -0.785
                  ],
                  [
                    144,
                    -0.809
                  ],
                  [
                    146.25,
                    -0.831
                  ],
                  [
                    148.5,
                    -0.853
                  ],
                  [
                    150.75,
                    -0.872
                  ],
                  [
                    153,
                    -0.891
                  ],
                  [
                    155.25,
                    -0.908
                  ],
                  [
                    157.5,
                    -0.924
                  ],
                  [
                    159.75,
                    -0.938
                  ],
                  [
                    162,
                    -0.951
                  ],
                  [
                    164.25,
                    -0.962
                  ],
                  [
                    166.5,
                    -0.972
                  ],
                  [
                    168.75,
                    -0.981
                  ],
                  [
                    171,
                    -0.988
                  ],
                  [
                    173.25,
                    -0.993
                  ],
                  [
                    175.5,
                    -0.997
                  ],
                  [
                    177.75,
                    -0.999
                  ],
                  [
                    180,
                    -1
                  ],
                  [
                    182.25,
                    -0.999
                  ],
                  [
                    184.5,
                    -0.997
                  ],
                  [
                    186.75,
                    -0.993
                  ],
                  [
                    189,
                    -0.988
                  ],
                  [
                    191.25,
                    -0.981
                  ],
                  [
                    193.5,
                    -0.972
                  ],
                  [
                    195.75,
                    -0.962
                  ],
                  [
                    198,
                    -0.951
                  ],
                  [
                    200.25,
                    -0.938
                  ],
                  [
                    202.5,
                    -0.924
                  ],
                  [
                    204.75,
                    -0.908
                  ],
                  [
                    207,
                    -0.891
                  ],
                  [
                    209.25,
                    -0.872
                  ],
                  [
                    211.5,
                    -0.853
                  ],
                  [
                    213.75,
                    -0.831
                  ],
                  [
                    216,
                    -0.809
                  ],
                  [
                    218.25,
                    -0.785
                  ],
                  [
                    220.5,
                    -0.76
                  ],
                  [
                    222.75,
                    -0.734
                  ],
                  [
                    225,
                    -0.707
                  ],
                  [
                    227.25,
                    -0.679
                  ],
                  [
                    229.5,
                    -0.649
                  ],
                  [
                    231.75,
                    -0.619
                  ],
                  [
                    234,
                    -0.588
                  ],
                  [
                    236.25,
                    -0.556
                  ],
                  [
                    238.5,
                    -0.522
                  ],
                  [
                    240.75,
                    -0.489
                  ],
                  [
                    243,
                    -0.454
                  ],
                  [
                    245.25,
                    -0.419
                  ],
                  [
                    247.5,
                    -0.383
                  ],
                  [
                    249.75,
                    -0.346
                  ],
                  [
                    252,
                    -0.309
                  ],
                  [
                    254.25,
                    -0.271
                  ],
                  [
                    256.5,
                    -0.233
                  ],
                  [
                    258.75,
                    -0.195
                  ],
                  [
                    261,
                    -0.156
                  ],
                  [
                    263.25,
                    -0.118
                  ],
                  [
                    265.5,
                    -0.078
                  ],
                  [
                    267.75,
                    -0.039
                  ],
                  [
                    270,
                    0
                  ],
                  [
                    272.25,
                    0.039
                  ],
                  [
                    274.5,
                    0.078
                  ],
                  [
                    276.75,
                    0.118
                  ],
                  [
                    279,
                    0.156
                  ],
                  [
                    281.25,
                    0.195
                  ],
                  [
                    283.5,
                    0.233
                  ],
                  [
                    285.75,
                    0.271
                  ],
                  [
                    288,
                    0.309
                  ],
                  [
                    290.25,
                    0.346
                  ],
                  [
                    292.5,
                    0.383
                  ],
                  [
                    294.75,
                    0.419
                  ],
                  [
                    297,
                    0.454
                  ],
                  [
                    299.25,
                    0.489
                  ],
                  [
                    301.5,
                    0.522
                  ],
                  [
                    303.75,
                    0.556
                  ],
                  [
                    306,
                    0.588
                  ],
                  [
                    308.25,
                    0.619
                  ],
                  [
                    310.5,
                    0.649
                  ],
                  [
                    312.75,
                    0.679
                  ],
                  [
                    315,
                    0.707
                  ],
                  [
                    317.25,
                    0.734
                  ],
                  [
                    319.5,
                    0.76
                  ],
                  [
                    321.75,
                    0.785
                  ],
                  [
                    324,
                    0.809
                  ],
                  [
                    326.25,
                    0.831
                  ],
                  [
                    328.5,
                    0.853
                  ],
                  [
                    330.75,
                    0.872
                  ],
                  [
                    333,
                    0.891
                  ],
                  [
                    335.25,
                    0.908
                  ],
                  [
                    337.5,
                    0.924
                  ],
                  [
                    339.75,
                    0.938
                  ],
                  [
                    342,
                    0.951
                  ],
                  [
                    344.25,
                    0.962
                  ],
                  [
                    346.5,
                    0.972
                  ],
                  [
                    348.75,
                    0.981
                  ],
                  [
                    351,
                    0.988
                  ],
                  [
                    353.25,
                    0.993
                  ],
                  [
                    355.5,
                    0.997
                  ],
                  [
                    357.75,
                    0.999
                  ],
                  [
                    360,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cos\\theta",
                "labelAt": [
                  40,
                  0.766
                ]
              }
            ],
            "lines": [],
            "points": [
              {
                "at": [
                  116.57,
                  -0.447
                ],
                "label": "\\theta\\,(\\cos\\theta<0)",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 10,
          "description": "Deduce the sign of sec",
          "workingLatex": "\\cos\\theta < 0 \\Rightarrow \\sec\\theta < 0",
          "explanation": "As \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(\\cos\\theta\\) is negative, \\(\\sec\\theta\\) is negative too. Forgetting the quadrant and giving the positive root is the most common error here."
        },
        {
          "stepNumber": 11,
          "description": "State the chosen value",
          "workingLatex": "\\sec\\theta = -\\sqrt{5}",
          "explanation": "We discard \\(+\\sqrt{5}\\) and keep the negative root to match the sign required in \\(90^\\circ < \\theta < 180^\\circ\\). Note \\(\\sqrt{5}\\approx 2.24\\ge 1\\), consistent with the valid range \\(|\\sec\\theta|\\ge 1\\)."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta = -\\sqrt 5\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-007",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 49",
    "difficulty": "Challenge",
    "questionText": "\\(\\cot\\theta = \\displaystyle\\frac{3}{4}\\), \\(180^\\circ < \\theta < 270^\\circ\\). Find \\(\\csc\\theta\\).",
    "marks": 4,
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
          "description": "Choose the linking identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "We are given \\(\\cot\\theta\\) and asked for \\(\\csc\\theta\\), so we need the identity connecting exactly those two functions. This is the Pythagorean identity \\(1+\\cot^2\\theta=\\csc^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note where the identity comes from",
          "workingLatex": "\\frac{\\sin^2\\theta+\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "It is derived by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\). This is why \\(\\cot\\) and \\(\\csc\\) appear together."
        },
        {
          "stepNumber": 3,
          "description": "Write the identity solved for csc",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "Swap the sides so \\(\\csc^2\\theta\\) is the subject, ready for substitution."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given value",
          "workingLatex": "\\csc^2\\theta = 1 + \\left(\\frac{3}{4}\\right)^2",
          "explanation": "Replace \\(\\cot\\theta\\) with \\(\\displaystyle\\frac{3}{4}\\), keeping the bracket so the whole fraction is squared, not just the numerator.",
          "diagram": {
            "xMin": -0.8,
            "xMax": 4.2,
            "yMin": -0.8,
            "yMax": 5,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  3,
                  0
                ],
                "color": "#0d9488",
                "label": "3",
                "labelAt": [
                  1.5,
                  -0.44
                ]
              },
              {
                "from": [
                  3,
                  0
                ],
                "to": [
                  3,
                  4
                ],
                "color": "#0d9488",
                "label": "4",
                "labelAt": [
                  3.52,
                  2
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  3,
                  4
                ],
                "color": "#dc2626",
                "label": "5",
                "labelAt": [
                  1.02,
                  2.36
                ]
              },
              {
                "from": [
                  2.68,
                  0
                ],
                "to": [
                  2.68,
                  0.32
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  2.68,
                  0.32
                ],
                "to": [
                  3,
                  0.32
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  0.859,
                  0.429
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 5,
          "description": "Square numerator and denominator",
          "workingLatex": "\\left(\\frac{3}{4}\\right)^2 = \\frac{3^2}{4^2} = \\frac{9}{16}",
          "explanation": "Squaring a fraction means squaring the top and the bottom separately. So \\(\\displaystyle\\frac{3}{4}\\) squared is \\(\\displaystyle\\frac{9}{16}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write 1 as a matching fraction",
          "workingLatex": "1 = \\frac{16}{16}",
          "explanation": "To add \\(1\\) to \\(\\displaystyle\\frac{9}{16}\\) the denominators must match, so rewrite \\(1\\) as \\(\\displaystyle\\frac{16}{16}\\)."
        },
        {
          "stepNumber": 7,
          "description": "Add over the common denominator",
          "workingLatex": "\\csc^2\\theta = \\frac{16}{16} + \\frac{9}{16} = \\frac{25}{16}",
          "explanation": "Add the numerators over the shared denominator: \\(16+9=25\\). This gives \\(\\csc^2\\theta=\\displaystyle\\frac{25}{16}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Take the square root of both sides",
          "workingLatex": "\\csc\\theta = \\pm\\sqrt{\\frac{25}{16}}",
          "explanation": "Square-rooting gives a positive and a negative possibility. We keep both until the quadrant decides the sign."
        },
        {
          "stepNumber": 9,
          "description": "Root top and bottom separately",
          "workingLatex": "\\sqrt{\\frac{25}{16}} = \\frac{\\sqrt{25}}{\\sqrt{16}} = \\frac{5}{4}",
          "explanation": "The square root of a fraction is the root of the top over the root of the bottom: \\(\\sqrt{25}=5\\) and \\(\\sqrt{16}=4\\). So \\(\\csc\\theta=\\pm\\displaystyle\\frac{5}{4}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Link csc to sin",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Since \\(\\csc\\theta\\) is the reciprocal of \\(\\sin\\theta\\), it has the same sign as \\(\\sin\\theta\\). So the sign of \\(\\sin\\theta\\) fixes the sign of \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Determine the sign of sin in \\(180^\\circ < \\theta < 270^\\circ\\)",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\Rightarrow \\sin\\theta < 0",
          "explanation": "In Quadrant 3 only tangent is positive (CAST), so sine is negative there. This selects the correct root."
        },
        {
          "stepNumber": 12,
          "description": "Deduce the sign of csc",
          "workingLatex": "\\sin\\theta < 0 \\Rightarrow \\csc\\theta < 0",
          "explanation": "As \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\) and \\(\\sin\\theta\\) is negative, \\(\\csc\\theta\\) is negative too. A common slip is to keep the positive root and ignore the quadrant."
        },
        {
          "stepNumber": 13,
          "description": "State the chosen value",
          "workingLatex": "\\csc\\theta = -\\frac{5}{4}",
          "explanation": "We take the negative root to match \\(180^\\circ < \\theta < 270^\\circ\\). Note \\(\\left|\\csc\\theta\\right| = \\displaystyle\\frac{5}{4} \\ge 1\\), which is consistent with the valid range of \\(\\csc\\)."
        }
      ],
      "finalAnswer": "\\(\\csc\\theta = -\\displaystyle\\frac{5}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-008",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 19",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\sec^2\\theta - 1}{\\sec^2\\theta}\\).",
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
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "The numerator contains \\(\\sec^2\\theta-1\\), which looks like the identity rearranged, so start from \\(1+\\tan^2\\theta=\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to match the numerator",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Subtract \\(1\\) from both sides of the identity. This shows the numerator \\(\\sec^2\\theta-1\\) is exactly \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the numerator",
          "workingLatex": "\\frac{\\sec^2\\theta - 1}{\\sec^2\\theta} = \\frac{\\tan^2\\theta}{\\sec^2\\theta}",
          "explanation": "Swap \\(\\sec^2\\theta-1\\) for \\(\\tan^2\\theta\\) on the top, leaving the denominator unchanged."
        },
        {
          "stepNumber": 4,
          "description": "Write sec as a reciprocal",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Recall that \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), so \\(\\sec^2\\theta=\\displaystyle\\frac{1}{\\cos^2\\theta}\\). This lets us rewrite the division."
        },
        {
          "stepNumber": 5,
          "description": "Turn dividing into multiplying",
          "workingLatex": "\\frac{\\tan^2\\theta}{\\sec^2\\theta} = \\tan^2\\theta \\cdot \\cos^2\\theta",
          "explanation": "Dividing by \\(\\displaystyle\\frac{1}{\\cos^2\\theta}\\) is the same as multiplying by its reciprocal \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write tan in sin and cos",
          "workingLatex": "\\tan^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Use \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), so \\(\\tan^2\\theta=\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\). This exposes a \\(\\cos^2\\theta\\) we can cancel."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the expanded tangent",
          "workingLatex": "\\tan^2\\theta \\cdot \\cos^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cdot\\cos^2\\theta",
          "explanation": "Replace \\(\\tan^2\\theta\\) with its sin-cos form. Now the same \\(\\cos^2\\theta\\) appears top and bottom."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the cosines",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cdot\\cos^2\\theta = \\sin^2\\theta",
          "explanation": "The \\(\\cos^2\\theta\\) in the denominator cancels with the multiplying \\(\\cos^2\\theta\\), leaving \\(\\sin^2\\theta\\). Keep the square on the sine; the answer is not \\(\\sin\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\sin^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-009",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 20",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\csc^2\\theta - 1}{\\csc^2\\theta}\\).",
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
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "The numerator contains \\(\\csc^2\\theta-1\\), which matches the identity rearranged, so start from \\(1+\\cot^2\\theta=\\csc^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to match the numerator",
          "workingLatex": "\\csc^2\\theta - 1 = \\cot^2\\theta",
          "explanation": "Subtract \\(1\\) from both sides of the identity. This shows the numerator \\(\\csc^2\\theta-1\\) is exactly \\(\\cot^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the numerator",
          "workingLatex": "\\frac{\\csc^2\\theta - 1}{\\csc^2\\theta} = \\frac{\\cot^2\\theta}{\\csc^2\\theta}",
          "explanation": "Swap \\(\\csc^2\\theta-1\\) for \\(\\cot^2\\theta\\) on the top, leaving the denominator unchanged."
        },
        {
          "stepNumber": 4,
          "description": "Write csc as a reciprocal",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Recall that \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\), so \\(\\csc^2\\theta=\\displaystyle\\frac{1}{\\sin^2\\theta}\\). This lets us rewrite the division."
        },
        {
          "stepNumber": 5,
          "description": "Turn dividing into multiplying",
          "workingLatex": "\\frac{\\cot^2\\theta}{\\csc^2\\theta} = \\cot^2\\theta \\cdot \\sin^2\\theta",
          "explanation": "Dividing by \\(\\displaystyle\\frac{1}{\\sin^2\\theta}\\) is the same as multiplying by its reciprocal \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write cot in sin and cos",
          "workingLatex": "\\cot^2\\theta = \\frac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Use \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\), so \\(\\cot^2\\theta=\\displaystyle\\frac{\\cos^2\\theta}{\\sin^2\\theta}\\). This exposes a \\(\\sin^2\\theta\\) we can cancel."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the expanded cotangent",
          "workingLatex": "\\cot^2\\theta \\cdot \\sin^2\\theta = \\frac{\\cos^2\\theta}{\\sin^2\\theta}\\cdot\\sin^2\\theta",
          "explanation": "Replace \\(\\cot^2\\theta\\) with its sin-cos form. Now the same \\(\\sin^2\\theta\\) appears top and bottom."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the sines",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin^2\\theta}\\cdot\\sin^2\\theta = \\cos^2\\theta",
          "explanation": "The \\(\\sin^2\\theta\\) in the denominator cancels with the multiplying \\(\\sin^2\\theta\\), leaving \\(\\cos^2\\theta\\). Don't drop the square on the cosine; the answer is not \\(\\cos\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\cos^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-010",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 03",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\sec^2\\theta - \\tan^2\\theta\\).",
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
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the identity connecting \\(\\sec\\) and \\(\\tan\\), obtained by dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract tan-squared from both sides",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Take \\(\\tan^2\\theta\\) across to the left of \\(1+\\tan^2\\theta=\\sec^2\\theta\\). The left side is now exactly the expression we were asked to simplify."
        },
        {
          "stepNumber": 3,
          "description": "Read off the value",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "So the expression equals \\(1\\). A common slip is to write \\(0\\) by wrongly treating it as \\(\\sec^2\\theta-\\sec^2\\theta\\); the two terms are different, so they do not cancel to zero."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-011",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 04",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\csc^2\\theta - \\cot^2\\theta\\).",
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
          "description": "Start from the basic identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity. Every reciprocal version of it comes from dividing this one line by either \\(\\sin^2\\theta\\) or \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide every term by sin squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "To bring in \\(\\csc\\) and \\(\\cot\\) we divide each of the three terms by \\(\\sin^2\\theta\\). Dividing every term keeps the equation balanced."
        },
        {
          "stepNumber": 3,
          "description": "Simplify each divided term",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "The first term is \\(1\\), the middle is \\(\\left(\\cos\\theta/\\sin\\theta\\right)^2 = \\cot^2\\theta\\), and the right is \\(\\left(1/\\sin\\theta\\right)^2 = \\csc^2\\theta\\). This is the identity you may also quote directly."
        },
        {
          "stepNumber": 4,
          "description": "Subtract cot squared from both sides",
          "workingLatex": "1 + \\cot^2\\theta - \\cot^2\\theta = \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "Subtract \\(\\cot^2\\theta\\) from each side so that the right-hand side becomes exactly the expression we were asked to simplify."
        },
        {
          "stepNumber": 5,
          "description": "Tidy the left-hand side",
          "workingLatex": "1 = \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "On the left the two \\(\\cot^2\\theta\\) terms cancel, leaving just \\(1\\)."
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "The whole expression collapses to the constant \\(1\\). A common slip is to write \\(0\\); the identity says the difference equals \\(1\\), not that the two terms are equal."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-012",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 05",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\sin\\theta\\sec\\theta\\).",
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
          "description": "Write the expression to simplify",
          "workingLatex": "\\sin\\theta\\sec\\theta",
          "explanation": "We have a product of \\(\\sin\\theta\\) and \\(\\sec\\theta\\). With reciprocal functions the safest first move is to rewrite everything using only \\(\\sin\\) and \\(\\cos\\)."
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal definition of sec",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is defined as the reciprocal of cosine. This is the key conversion that lets us work in \\(\\sin\\) and \\(\\cos\\) only."
        },
        {
          "stepNumber": 3,
          "description": "Substitute that into the product",
          "workingLatex": "\\sin\\theta\\sec\\theta = \\sin\\theta \\cdot \\frac{1}{\\cos\\theta}",
          "explanation": "Replace \\(\\sec\\theta\\) with \\(1/\\cos\\theta\\), keeping the \\(\\sin\\theta\\) factor unchanged."
        },
        {
          "stepNumber": 4,
          "description": "Combine into a single fraction",
          "workingLatex": "\\sin\\theta \\cdot \\frac{1}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Multiplying a quantity by \\(1/\\cos\\theta\\) simply places that quantity over \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Apply the quotient identity for tan",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta",
          "explanation": "By definition \\(\\tan\\theta = \\sin\\theta/\\cos\\theta\\). A common slip is to leave the answer as a fraction; recognising the tangent form is what earns the mark."
        }
      ],
      "finalAnswer": "\\(\\tan\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-013",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 06",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\cos\\theta \\csc\\theta\\).",
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
          "description": "Write the expression to simplify",
          "workingLatex": "\\cos\\theta\\csc\\theta",
          "explanation": "We have a product of \\(\\cos\\theta\\) and \\(\\csc\\theta\\). As usual with reciprocal functions, rewrite everything in \\(\\sin\\) and \\(\\cos\\) first."
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal definition of csc",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is defined as the reciprocal of sine. This conversion is the standard opening move for reciprocal-trig simplification."
        },
        {
          "stepNumber": 3,
          "description": "Substitute that into the product",
          "workingLatex": "\\cos\\theta\\csc\\theta = \\cos\\theta \\cdot \\frac{1}{\\sin\\theta}",
          "explanation": "Replace \\(\\csc\\theta\\) with \\(1/\\sin\\theta\\), keeping the \\(\\cos\\theta\\) factor unchanged."
        },
        {
          "stepNumber": 4,
          "description": "Combine into a single fraction",
          "workingLatex": "\\cos\\theta \\cdot \\frac{1}{\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Multiplying by \\(1/\\sin\\theta\\) simply places \\(\\cos\\theta\\) over \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Apply the quotient identity for cot",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta",
          "explanation": "By definition \\(\\cot\\theta = \\cos\\theta/\\sin\\theta\\). Do not confuse this with \\(\\tan\\theta\\), which is \\(\\sin\\) over \\(\\cos\\), the other way up."
        }
      ],
      "finalAnswer": "\\(\\cot\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-014",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 50",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\displaystyle\\frac{1 - \\cos^2\\theta}{\\sec\\theta - \\cos\\theta}\\).",
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
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "We will use this in both the numerator and the denominator, so it helps to state it explicitly before rearranging."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides isolates \\(1 - \\cos^2\\theta\\) on the left, which equals \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Apply the rearranged identity to the top of the fraction, so the numerator becomes \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite sec in the denominator",
          "workingLatex": "\\sec\\theta - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\cos\\theta",
          "explanation": "Convert \\(\\sec\\theta\\) to \\(1/\\cos\\theta\\) so that both terms in the denominator involve cosine only."
        },
        {
          "stepNumber": 5,
          "description": "Express the second term over cos",
          "workingLatex": "\\frac{1}{\\cos\\theta} - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Write \\(\\cos\\theta\\) as \\(\\cos^2\\theta/\\cos\\theta\\). Showing this common-denominator step explicitly avoids errors when subtracting."
        },
        {
          "stepNumber": 6,
          "description": "Combine over the common denominator",
          "workingLatex": "\\frac{1}{\\cos\\theta} - \\frac{\\cos^2\\theta}{\\cos\\theta} = \\frac{1 - \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "With a shared denominator \\(\\cos\\theta\\), subtract the numerators to get a single fraction."
        },
        {
          "stepNumber": 7,
          "description": "Use the identity in the denominator",
          "workingLatex": "\\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Replace \\(1 - \\cos^2\\theta\\) with \\(\\sin^2\\theta\\) again, so the denominator of the original fraction is now \\(\\sin^2\\theta/\\cos\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the whole expression",
          "workingLatex": "\\frac{1 - \\cos^2\\theta}{\\sec\\theta - \\cos\\theta} = \\frac{\\sin^2\\theta}{\\;\\sin^2\\theta/\\cos\\theta\\;}",
          "explanation": "Substitute the simplified numerator \\(\\sin^2\\theta\\) and the simplified denominator \\(\\sin^2\\theta/\\cos\\theta\\) into the original fraction."
        },
        {
          "stepNumber": 9,
          "description": "Divide by flipping and multiplying",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\;\\sin^2\\theta/\\cos\\theta\\;} = \\sin^2\\theta \\cdot \\frac{\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so we invert \\(\\sin^2\\theta/\\cos\\theta\\) to \\(\\cos\\theta/\\sin^2\\theta\\). A common slip is to forget to invert the divisor."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common factor",
          "workingLatex": "\\sin^2\\theta \\cdot \\frac{\\cos\\theta}{\\sin^2\\theta} = \\cos\\theta",
          "explanation": "The \\(\\sin^2\\theta\\) in the numerator cancels the \\(\\sin^2\\theta\\) in the denominator, leaving \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "State the result and its validity",
          "workingLatex": "\\frac{1 - \\cos^2\\theta}{\\sec\\theta - \\cos\\theta} = \\cos\\theta",
          "explanation": "The expression simplifies to \\(\\cos\\theta\\). This is valid provided \\(\\sin\\theta \\neq 0\\) and \\(\\cos\\theta \\neq 0\\), since we divided by both during the working."
        }
      ],
      "finalAnswer": "\\(\\cos\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-015",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 21",
    "difficulty": "Challenge",
    "questionText": "(a) Prove that \\(\\displaystyle\\frac{1}{\\sec\\theta - 1} + \\displaystyle\\frac{1}{\\sec\\theta + 1} \\equiv \\displaystyle\\frac{2\\cos\\theta}{\\sin^2\\theta}\\).\n(b) Hence solve, for \\(0 \\le \\theta < 2\\pi\\), the equation \\(\\displaystyle\\frac{1}{\\sec\\theta - 1} + \\displaystyle\\frac{1}{\\sec\\theta + 1} = \\displaystyle\\frac{4}{3}\\), giving your answers as exact multiples of \\(\\pi\\).",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identities",
      "proof",
      "simplify",
      "solving-equations",
      "quadratic",
      "validity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine the two fractions",
          "workingLatex": "\\frac{1}{\\sec\\theta - 1} + \\frac{1}{\\sec\\theta + 1} = \\frac{\\left(\\sec\\theta + 1\\right) + \\left(\\sec\\theta - 1\\right)}{\\left(\\sec\\theta - 1\\right)\\left(\\sec\\theta + 1\\right)}",
          "explanation": "Use the common denominator, the product of the two brackets. A frequent slip is to add the numerators without using a single shared denominator."
        },
        {
          "stepNumber": 2,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{2\\sec\\theta}{\\left(\\sec\\theta - 1\\right)\\left(\\sec\\theta + 1\\right)}",
          "explanation": "The \\(+1\\) and \\(-1\\) cancel in the numerator, leaving \\(2\\sec\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand denominator as difference of squares",
          "workingLatex": "\\left(\\sec\\theta - 1\\right)\\left(\\sec\\theta + 1\\right) = \\sec^2\\theta - 1",
          "explanation": "This is \\((a-b)(a+b)=a^2-b^2\\) with \\(a=\\sec\\theta\\), \\(b=1\\). The cross terms cancel."
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta \\;\\Rightarrow\\; \\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Rearranging \\(1+\\tan^2\\theta=\\sec^2\\theta\\) converts the denominator to \\(\\tan^2\\theta\\). Do not confuse this with \\(1+\\cot^2\\theta=\\csc^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the expression",
          "workingLatex": "\\frac{2\\sec\\theta}{\\sec^2\\theta - 1} = \\frac{2\\sec\\theta}{\\tan^2\\theta}",
          "explanation": "Substitute \\(\\tan^2\\theta\\) for the denominator."
        },
        {
          "stepNumber": 6,
          "description": "Convert to sines and cosines",
          "workingLatex": "= 2 \\cdot \\frac{1}{\\cos\\theta} \\cdot \\frac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Use \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(\\tan^2\\theta=\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\); dividing by \\(\\tan^2\\theta\\) multiplies by its reciprocal."
        },
        {
          "stepNumber": 7,
          "description": "Cancel one power of cosine",
          "workingLatex": "= \\frac{2\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "One \\(\\cos\\theta\\) cancels with the \\(\\displaystyle\\frac{1}{\\cos\\theta}\\) factor, completing the proof. Hence the identity holds (where \\(\\sin\\theta\\neq0\\))."
        },
        {
          "stepNumber": 8,
          "description": "Form the equation in sec",
          "workingLatex": "\\frac{2\\sec\\theta}{\\sec^2\\theta - 1} = \\frac{4}{3}",
          "explanation": "From part (a) the left side equals \\(\\displaystyle\\frac{2\\sec\\theta}{\\sec^2\\theta-1}\\); working in \\(\\sec\\theta\\) keeps the algebra clean."
        },
        {
          "stepNumber": 9,
          "description": "Clear fractions by cross-multiplying",
          "workingLatex": "3 \\cdot 2\\sec\\theta = 4\\left(\\sec^2\\theta - 1\\right)",
          "explanation": "Multiply both sides by \\(3\\left(\\sec^2\\theta-1\\right)\\). Remember to multiply the whole right-hand bracket by \\(4\\)."
        },
        {
          "stepNumber": 10,
          "description": "Rearrange into a quadratic",
          "workingLatex": "4\\sec^2\\theta - 6\\sec\\theta - 4 = 0",
          "explanation": "Bring all terms to one side. This is a quadratic in \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Divide through and factorise",
          "workingLatex": "2\\sec^2\\theta - 3\\sec\\theta - 2 = 0 \\;\\Rightarrow\\; \\left(2\\sec\\theta + 1\\right)\\left(\\sec\\theta - 2\\right) = 0",
          "explanation": "Divide by \\(2\\), then factorise. Check by expanding: \\(2\\sec^2\\theta-4\\sec\\theta+\\sec\\theta-2\\)."
        },
        {
          "stepNumber": 12,
          "description": "Read off and test the roots",
          "workingLatex": "\\sec\\theta = -\\frac{1}{2} \\quad \\text{or} \\quad \\sec\\theta = 2",
          "explanation": "Set each factor to zero. Both must be checked against the range of secant."
        },
        {
          "stepNumber": 13,
          "description": "Reject the invalid root",
          "workingLatex": "\\left|\\sec\\theta\\right| \\ge 1 \\;\\Rightarrow\\; \\sec\\theta = -\\frac{1}{2}\\ \\text{rejected}",
          "explanation": "Since \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(\\left|\\cos\\theta\\right|\\le1\\), we always have \\(\\left|\\sec\\theta\\right|\\ge1\\); \\(-\\displaystyle\\frac{1}{2}\\) is impossible. Forgetting this gives spurious extra solutions."
        },
        {
          "stepNumber": 14,
          "description": "Convert the valid root to cosine",
          "workingLatex": "\\sec\\theta = 2 \\;\\Rightarrow\\; \\cos\\theta = \\frac{1}{2}",
          "explanation": "Take the reciprocal of the secant value."
        },
        {
          "stepNumber": 15,
          "description": "Solve over the given interval",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\; \\frac{5\\pi}{3} \\quad (0 \\le \\theta < 2\\pi)",
          "explanation": "Cosine is positive in quadrants 1 and 4, giving the principal value \\(\\displaystyle\\frac{\\pi}{3}\\) and \\(2\\pi-\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{5\\pi}{3}\\)."
        }
      ],
      "finalAnswer": "(a) Proved. \\quad (b)\\ \\(\\theta = \\displaystyle\\frac{\\pi}{3},\\ \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": [
        "Forgetting \\(\\left|\\sec\\theta\\right| \\ge 1\\) and keeping the root \\(\\sec\\theta = -\\displaystyle\\frac{1}{2}\\).",
        "Using \\(1+\\cot^2\\theta=\\csc^2\\theta\\) instead of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) on the denominator.",
        "Adding the two fractions without a common denominator."
      ]
    }
  },
  {
    "id": "y2tf4-016",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 07",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\tan\\theta}{\\sec\\theta}\\).",
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
          "description": "Plan to convert to sin and cos",
          "workingLatex": "\\frac{\\tan\\theta}{\\sec\\theta}",
          "explanation": "When an expression mixes sec, csc, cot or tan, the most reliable first move is to write everything in terms of sine and cosine. We will rewrite the top and the bottom separately before combining."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite tangent in sin and cos",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "By definition tan is sin divided by cos. A common slip is to write it upside down as cos over sin, so check carefully: sin is on top."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite secant in cos",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine. A frequent error is to confuse sec with csc, but remember sec pairs with cos (both contain no 'n')."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both into the fraction",
          "workingLatex": "\\frac{\\tan\\theta}{\\sec\\theta} = \\frac{\\sin\\theta/\\cos\\theta}{1/\\cos\\theta}",
          "explanation": "Replace the numerator with sin/cos and the denominator with 1/cos. We now have a fraction divided by another fraction, sometimes called a compound fraction."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite division as multiplication by reciprocal",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta} \\div \\frac{1}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} \\times \\frac{\\cos\\theta}{1}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so flip the bottom fraction 1/cos to become cos/1. Flipping then multiplying is the safe way to handle a fraction over a fraction."
        },
        {
          "stepNumber": 6,
          "description": "Write as a single product",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta} \\times \\cos\\theta",
          "explanation": "Since cos/1 is just cos, the calculation becomes sin/cos multiplied by cos. This makes the cancellation in the next step easy to see."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common cosine factor",
          "workingLatex": "= \\frac{\\sin\\theta \\times \\cos\\theta}{\\cos\\theta} = \\sin\\theta",
          "explanation": "The cos in the numerator cancels the cos in the denominator, leaving sin. This cancelling is valid because cos is non-zero wherever sec and tan are defined."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-017",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 08",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\cot\\theta}{\\csc\\theta}\\).",
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
          "description": "Plan to convert to sin and cos",
          "workingLatex": "\\frac{\\cot\\theta}{\\csc\\theta}",
          "explanation": "The reliable starting move for any cot/csc expression is to rewrite each term using sine and cosine. We will handle the numerator and denominator separately first."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite cotangent in sin and cos",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cot is the reciprocal of tan, so it is cos over sin (cos on top). Take care not to write it as sin over cos by mistake."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite cosecant in sin",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine. Mind the pairing: csc goes with sin, while sec goes with cos."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both into the fraction",
          "workingLatex": "\\frac{\\cot\\theta}{\\csc\\theta} = \\frac{\\cos\\theta/\\sin\\theta}{1/\\sin\\theta}",
          "explanation": "Replace the numerator with cos/sin and the denominator with 1/sin. This is now a fraction divided by a fraction."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite division as multiplication by reciprocal",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta} \\div \\frac{1}{\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} \\times \\frac{\\sin\\theta}{1}",
          "explanation": "Dividing by 1/sin means multiplying by its reciprocal sin/1. Flip the bottom fraction and multiply to avoid placement errors."
        },
        {
          "stepNumber": 6,
          "description": "Write as a single product",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta} \\times \\sin\\theta",
          "explanation": "Since sin/1 is just sin, the expression becomes cos/sin multiplied by sin. This sets up the cancellation cleanly."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common sine factor",
          "workingLatex": "= \\frac{\\cos\\theta \\times \\sin\\theta}{\\sin\\theta} = \\cos\\theta",
          "explanation": "The sin in the numerator cancels the sin in the denominator, leaving cos. This is valid because sin is non-zero wherever cot and csc are defined."
        }
      ],
      "finalAnswer": "\\(\\cos\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-018",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 22",
    "difficulty": "Standard",
    "questionText": "Show that \\(\\sec^2\\theta + \\csc^2\\theta = \\sec^2\\theta \\csc^2\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec^2\\theta + \\csc^2\\theta",
          "explanation": "Choose a side to work on; the left is the natural choice since it can be combined into a single fraction. State your starting point so the marker can follow the proof."
        },
        {
          "stepNumber": 2,
          "description": "Write each reciprocal function",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta},\\quad \\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Recall the basic definitions: sec is the reciprocal of cos and csc is the reciprocal of sin. We will square these in the next step."
        },
        {
          "stepNumber": 3,
          "description": "Square to convert each term",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta},\\quad \\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Squaring a reciprocal squares both top and bottom, so 1/cos becomes 1/cos^2. Converting to sin/cos is the standard route when an identity mixes sec and csc."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the left-hand side",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Replace sec^2 and csc^2 with their sin/cos forms. We now have a sum of two simple fractions to combine."
        },
        {
          "stepNumber": 5,
          "description": "Choose the common denominator",
          "workingLatex": "\\text{common denominator} = \\sin^2\\theta\\cos^2\\theta",
          "explanation": "The lowest common denominator of cos^2 and sin^2 is their product sin^2 cos^2. Identifying it before combining prevents mistakes."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over that denominator",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply the first fraction top and bottom by sin^2, and the second top and bottom by cos^2. Do not forget to scale the numerators, not just the denominators."
        },
        {
          "stepNumber": 7,
          "description": "Add the two fractions",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "With a shared denominator the numerators simply add. Keep the denominator as the single product sin^2 cos^2."
        },
        {
          "stepNumber": 8,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for all theta. It is exactly the numerator we have, so it lets us simplify the top."
        },
        {
          "stepNumber": 9,
          "description": "Apply the identity to the numerator",
          "workingLatex": "= \\frac{1}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Replacing sin^2 + cos^2 with 1 collapses the numerator to a single 1. The denominator is unchanged."
        },
        {
          "stepNumber": 10,
          "description": "Split into a product of reciprocals",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} \\times \\frac{1}{\\sin^2\\theta}",
          "explanation": "A single fraction whose denominator is a product equals the product of the separate reciprocals. This prepares the conversion back to sec and csc."
        },
        {
          "stepNumber": 11,
          "description": "Convert back to sec and csc",
          "workingLatex": "= \\sec^2\\theta \\csc^2\\theta = \\text{RHS}",
          "explanation": "Recognise 1/cos^2 as sec^2 and 1/sin^2 as csc^2. The left-hand side now equals the right-hand side, so the identity is shown."
        }
      ],
      "finalAnswer": "\\(= \\sec^2\\theta\\csc^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-019",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 23",
    "difficulty": "Standard",
    "questionText": "Prove that \\(\\sec^4\\theta - \\tan^4\\theta \\equiv \\sec^2\\theta + \\tan^2\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec^4\\theta - \\tan^4\\theta",
          "explanation": "Begin with the more complicated side, since it is easier to break it down than to build it up. State your starting point so the chain of reasoning is clear."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite fourth powers as squared squares",
          "workingLatex": "\\sec^4\\theta = \\left(\\sec^2\\theta\\right)^2,\\quad \\tan^4\\theta = \\left(\\tan^2\\theta\\right)^2",
          "explanation": "Each fourth power is the square of a square, since (x^2)^2 = x^4. Writing it this way exposes a hidden structure."
        },
        {
          "stepNumber": 3,
          "description": "Recognise a difference of two squares",
          "workingLatex": "\\sec^4\\theta - \\tan^4\\theta = \\left(\\sec^2\\theta\\right)^2 - \\left(\\tan^2\\theta\\right)^2",
          "explanation": "The expression now has the form a^2 - b^2 with a = sec^2 and b = tan^2. This is the difference of two squares pattern."
        },
        {
          "stepNumber": 4,
          "description": "Factorise the difference of squares",
          "workingLatex": "= \\left(\\sec^2\\theta - \\tan^2\\theta\\right)\\left(\\sec^2\\theta + \\tan^2\\theta\\right)",
          "explanation": "Apply a^2 - b^2 = (a-b)(a+b). A common slip is to keep only one bracket; both factors are needed."
        },
        {
          "stepNumber": 5,
          "description": "State the relevant Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity comes from dividing sin^2 + cos^2 = 1 through by cos^2. It is the tool that simplifies the first bracket."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to evaluate the first factor",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtract tan^2 from both sides of the identity above. The first bracket is therefore exactly 1."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the value of the first factor",
          "workingLatex": "= 1 \\cdot \\left(\\sec^2\\theta + \\tan^2\\theta\\right)",
          "explanation": "Replace the first bracket with its value 1. The second bracket is carried through unchanged."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the product",
          "workingLatex": "= \\sec^2\\theta + \\tan^2\\theta",
          "explanation": "Multiplying by 1 leaves the second bracket exactly as it is. The brackets are no longer needed."
        },
        {
          "stepNumber": 9,
          "description": "Conclude the proof",
          "workingLatex": "\\sec^4\\theta - \\tan^4\\theta = \\sec^2\\theta + \\tan^2\\theta = \\text{RHS}",
          "explanation": "The left-hand side now matches the right-hand side, so the identity holds for all valid theta. This completes the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-020",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 24",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\csc^4\\theta - \\cot^4\\theta \\equiv \\csc^2\\theta + \\cot^2\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\csc^4\\theta - \\cot^4\\theta",
          "explanation": "Begin with the more complicated side, as it is easier to factorise and reduce. State it explicitly so the proof is easy to follow."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite fourth powers as squared squares",
          "workingLatex": "\\csc^4\\theta = \\left(\\csc^2\\theta\\right)^2,\\quad \\cot^4\\theta = \\left(\\cot^2\\theta\\right)^2",
          "explanation": "Each fourth power equals the square of a square, since (x^2)^2 = x^4. This reveals a hidden structure."
        },
        {
          "stepNumber": 3,
          "description": "Recognise a difference of two squares",
          "workingLatex": "\\csc^4\\theta - \\cot^4\\theta = \\left(\\csc^2\\theta\\right)^2 - \\left(\\cot^2\\theta\\right)^2",
          "explanation": "The expression is now in the form a^2 - b^2 with a = csc^2 and b = cot^2, the difference of two squares pattern."
        },
        {
          "stepNumber": 4,
          "description": "Factorise the difference of squares",
          "workingLatex": "= \\left(\\csc^2\\theta - \\cot^2\\theta\\right)\\left(\\csc^2\\theta + \\cot^2\\theta\\right)",
          "explanation": "Apply a^2 - b^2 = (a-b)(a+b) with a = csc^2 and b = cot^2. Keep both factors; dropping one is a frequent error."
        },
        {
          "stepNumber": 5,
          "description": "State the relevant Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity comes from dividing sin^2 + cos^2 = 1 through by sin^2. It is what simplifies the first bracket."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to evaluate the first factor",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtract cot^2 from both sides of the identity above, so the first bracket equals exactly 1."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the value of the first factor",
          "workingLatex": "= 1 \\cdot \\left(\\csc^2\\theta + \\cot^2\\theta\\right)",
          "explanation": "Replace the first bracket with its value 1. The second bracket is carried through unchanged."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the product",
          "workingLatex": "= \\csc^2\\theta + \\cot^2\\theta",
          "explanation": "Multiplying by 1 leaves the second bracket exactly as it is, and the brackets can be dropped."
        },
        {
          "stepNumber": 9,
          "description": "Conclude the proof",
          "workingLatex": "\\csc^4\\theta - \\cot^4\\theta = \\csc^2\\theta + \\cot^2\\theta = \\text{RHS}",
          "explanation": "The left-hand side now equals the right-hand side, so the identity holds for all valid theta. This completes the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-021",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 09",
    "difficulty": "Foundation",
    "questionText": "Prove \\((\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) \\equiv 1\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = (\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta)",
          "explanation": "In a proof you must transform one side until it matches the other; never assume the result you are trying to show. Here we work on the left-hand side and aim to reach \\(1\\)."
        },
        {
          "stepNumber": 2,
          "description": "Name the two terms in each bracket",
          "workingLatex": "a = \\sec\\theta, \\qquad b = \\tan\\theta",
          "explanation": "Labelling the first term \\(a\\) and the second term \\(b\\) makes the pattern easier to see. Both brackets contain the same \\(a\\) and \\(b\\), only the sign between them differs."
        },
        {
          "stepNumber": 3,
          "description": "Recognise the difference of two squares",
          "workingLatex": "(a+b)(a-b) = a^2 - b^2",
          "explanation": "Two brackets with the same terms but opposite signs always give the difference of squares. A common slip is to expand all four products; the two cross terms cancel, so this shortcut is faster and safer."
        },
        {
          "stepNumber": 4,
          "description": "Substitute a and b back in",
          "workingLatex": "(\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) = (\\sec\\theta)^2 - (\\tan\\theta)^2",
          "explanation": "Replacing \\(a\\) with \\(\\sec\\theta\\) and \\(b\\) with \\(\\tan\\theta\\) in \\(a^2-b^2\\) gives the squares of each term."
        },
        {
          "stepNumber": 5,
          "description": "Tidy the squared notation",
          "workingLatex": "(\\sec\\theta)^2 - (\\tan\\theta)^2 = \\sec^2\\theta - \\tan^2\\theta",
          "explanation": "We write \\((\\sec\\theta)^2\\) as \\(\\sec^2\\theta\\) and \\((\\tan\\theta)^2\\) as \\(\\tan^2\\theta\\), which is the standard way to record these powers."
        },
        {
          "stepNumber": 6,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) through by \\(\\cos^2\\theta\\). It directly links \\(\\sec^2\\theta\\) and \\(\\tan^2\\theta\\), which is exactly what we have."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity for our expression",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting \\(\\tan^2\\theta\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) isolates \\(\\sec^2\\theta-\\tan^2\\theta\\) and shows it equals \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "\\text{LHS} = \\sec^2\\theta - \\tan^2\\theta = 1 = \\text{RHS}",
          "explanation": "The left-hand side simplifies to \\(1\\), which is the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "\\(= \\sec^2 - \\tan^2 = 1\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-022",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 25",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\displaystyle\\frac{1 + \\cot\\theta}{\\csc\\theta} \\equiv \\sin\\theta + \\cos\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{1 + \\cot\\theta}{\\csc\\theta}",
          "explanation": "We will convert everything into \\(\\sin\\theta\\) and \\(\\cos\\theta\\), the most reliable route for a proof, and aim to reach \\(\\sin\\theta+\\cos\\theta\\) on the right."
        },
        {
          "stepNumber": 2,
          "description": "Write cot in terms of sin and cos",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "By definition \\(\\cot\\theta\\) is cosine over sine. A common slip is to write it as \\(\\sin\\theta/\\cos\\theta\\) the wrong way up; remember it is the reciprocal of \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write cosec in terms of sin",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "By definition \\(\\csc\\theta\\) is the reciprocal of \\(\\sin\\theta\\). Keeping each definition on its own line reduces the chance of a copying error."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both into the expression",
          "workingLatex": "\\frac{1 + \\frac{\\cos\\theta}{\\sin\\theta}}{\\frac{1}{\\sin\\theta}}",
          "explanation": "Replace \\(\\cot\\theta\\) and \\(\\csc\\theta\\) with their sin/cos forms. We now have a compound fraction (a fraction inside a fraction) to simplify."
        },
        {
          "stepNumber": 5,
          "description": "Write 1 with a common denominator",
          "workingLatex": "1 = \\frac{\\sin\\theta}{\\sin\\theta}",
          "explanation": "To add the two terms in the numerator they must share a denominator. Writing \\(1\\) as \\(\\sin\\theta/\\sin\\theta\\) gives both terms the denominator \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerator into one fraction",
          "workingLatex": "1 + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{\\sin\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta}",
          "explanation": "With a shared denominator the numerators add directly, giving a single fraction for the top of the compound fraction."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the whole compound fraction",
          "workingLatex": "\\frac{\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta}}{\\frac{1}{\\sin\\theta}}",
          "explanation": "The numerator and denominator are now each single fractions, both with \\(\\sin\\theta\\) on the bottom, ready for dividing."
        },
        {
          "stepNumber": 8,
          "description": "Turn dividing into multiplying by the reciprocal",
          "workingLatex": "\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta} \\div \\frac{1}{\\sin\\theta} = \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta} \\times \\frac{\\sin\\theta}{1}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal: flip \\(\\displaystyle\\frac{1}{\\sin\\theta}\\) to get \\(\\displaystyle\\frac{\\sin\\theta}{1}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of sin",
          "workingLatex": "\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta} \\times \\sin\\theta = \\sin\\theta + \\cos\\theta",
          "explanation": "The \\(\\sin\\theta\\) in the denominator cancels with the \\(\\sin\\theta\\) we are multiplying by, leaving just the numerator."
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{LHS} = \\sin\\theta + \\cos\\theta = \\text{RHS}",
          "explanation": "The left-hand side now equals the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-023",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 51",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{\\sec\\theta}{\\sec\\theta - \\tan\\theta} \\equiv \\sec^2\\theta + \\sec\\theta\\tan\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\sec\\theta}{\\sec\\theta - \\tan\\theta}",
          "explanation": "We work on the left-hand side and aim to reach \\(\\sec^2\\theta+\\sec\\theta\\tan\\theta\\). The denominator \\(\\sec\\theta-\\tan\\theta\\) is the key feature to deal with."
        },
        {
          "stepNumber": 2,
          "description": "Spot why the conjugate helps",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = \\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Multiplying \\(\\sec\\theta-\\tan\\theta\\) by its conjugate \\(\\sec\\theta+\\tan\\theta\\) gives a difference of squares that collapses to \\(1\\) by the identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\). This motivates the next step."
        },
        {
          "stepNumber": 3,
          "description": "Choose the conjugate to multiply by",
          "workingLatex": "\\frac{\\sec\\theta + \\tan\\theta}{\\sec\\theta + \\tan\\theta} = 1",
          "explanation": "The conjugate over itself equals \\(1\\), so multiplying by it does not change the value of the fraction; it only changes its form."
        },
        {
          "stepNumber": 4,
          "description": "Multiply numerator and denominator by it",
          "workingLatex": "\\frac{\\sec\\theta}{\\sec\\theta - \\tan\\theta} \\times \\frac{\\sec\\theta + \\tan\\theta}{\\sec\\theta + \\tan\\theta} = \\frac{\\sec\\theta(\\sec\\theta + \\tan\\theta)}{(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta)}",
          "explanation": "Apply the same factor to top and bottom. A common slip is multiplying only the denominator, which would change the value of the expression."
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator as difference of squares",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = \\sec^2\\theta - \\tan^2\\theta",
          "explanation": "This is \\((a-b)(a+b)=a^2-b^2\\) with \\(a=\\sec\\theta\\) and \\(b=\\tan\\theta\\); the cross terms cancel."
        },
        {
          "stepNumber": 6,
          "description": "Use the Pythagorean identity on the denominator",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Rearranging \\(1+\\tan^2\\theta\\equiv\\sec^2\\theta\\) gives \\(\\sec^2\\theta-\\tan^2\\theta=1\\), so the denominator collapses neatly to \\(1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the simplified denominator",
          "workingLatex": "\\frac{\\sec\\theta(\\sec\\theta + \\tan\\theta)}{1}",
          "explanation": "Replacing the denominator with \\(1\\) leaves just the numerator over \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "Drop the division by 1",
          "workingLatex": "\\frac{\\sec\\theta(\\sec\\theta + \\tan\\theta)}{1} = \\sec\\theta(\\sec\\theta + \\tan\\theta)",
          "explanation": "Dividing by \\(1\\) leaves a quantity unchanged, so we may remove the denominator."
        },
        {
          "stepNumber": 9,
          "description": "Expand the numerator",
          "workingLatex": "\\sec\\theta(\\sec\\theta + \\tan\\theta) = \\sec^2\\theta + \\sec\\theta\\tan\\theta",
          "explanation": "Distribute \\(\\sec\\theta\\) over both terms inside the bracket: \\(\\sec\\theta\\times\\sec\\theta\\) gives \\(\\sec^2\\theta\\) and \\(\\sec\\theta\\times\\tan\\theta\\) gives \\(\\sec\\theta\\tan\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{LHS} = \\sec^2\\theta + \\sec\\theta\\tan\\theta = \\text{RHS}",
          "explanation": "The left-hand side equals the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-024",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 52",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{1}{\\sec\\theta - 1} - \\displaystyle\\frac{1}{\\sec\\theta + 1} \\equiv 2\\cot^2\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\sec\\theta - 1} - \\frac{1}{\\sec\\theta + 1}",
          "explanation": "We will combine these two fractions into a single fraction and then use a Pythagorean identity to reach the right-hand side."
        },
        {
          "stepNumber": 2,
          "description": "Identify the two denominators",
          "workingLatex": "\\sec\\theta - 1 \\quad \\text{and} \\quad \\sec\\theta + 1",
          "explanation": "Before combining fractions we list the denominators. They differ only in the sign of the \\(1\\), which hints at a difference of squares later."
        },
        {
          "stepNumber": 3,
          "description": "Form the common denominator",
          "workingLatex": "(\\sec\\theta - 1)(\\sec\\theta + 1)",
          "explanation": "The lowest common denominator is the product of the two distinct denominators. We keep it in factored form for now so we can write each numerator correctly."
        },
        {
          "stepNumber": 4,
          "description": "Write both fractions over that denominator",
          "workingLatex": "\\frac{\\sec\\theta + 1}{(\\sec\\theta - 1)(\\sec\\theta + 1)} - \\frac{\\sec\\theta - 1}{(\\sec\\theta - 1)(\\sec\\theta + 1)}",
          "explanation": "Each numerator is multiplied by the factor missing from its own denominator: the first by \\((\\sec\\theta+1)\\), the second by \\((\\sec\\theta-1)\\). Take care to attach the correct factor to each."
        },
        {
          "stepNumber": 5,
          "description": "Subtract over the common denominator",
          "workingLatex": "\\frac{(\\sec\\theta + 1) - (\\sec\\theta - 1)}{(\\sec\\theta - 1)(\\sec\\theta + 1)}",
          "explanation": "The denominators now match, so the numerators can be subtracted as a single bracket-minus-bracket on top."
        },
        {
          "stepNumber": 6,
          "description": "Distribute the minus sign",
          "workingLatex": "(\\sec\\theta + 1) - (\\sec\\theta - 1) = \\sec\\theta + 1 - \\sec\\theta + 1",
          "explanation": "The minus sign applies to both terms of the second bracket, so \\(-(-1)\\) becomes \\(+1\\). Forgetting to flip this sign is the most common error here."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numerator",
          "workingLatex": "\\sec\\theta + 1 - \\sec\\theta + 1 = 2",
          "explanation": "The \\(+\\sec\\theta\\) and \\(-\\sec\\theta\\) cancel, leaving \\(1+1=2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Expand the denominator",
          "workingLatex": "(\\sec\\theta - 1)(\\sec\\theta + 1) = \\sec^2\\theta - 1",
          "explanation": "Difference of two squares: \\((a-1)(a+1)=a^2-1\\) with \\(a=\\sec\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the combined fraction",
          "workingLatex": "\\frac{2}{\\sec^2\\theta - 1}",
          "explanation": "Putting the simplified numerator \\(2\\) over the expanded denominator gives a single tidy fraction."
        },
        {
          "stepNumber": 10,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "This identity, from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\), connects \\(\\sec^2\\theta\\) with \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Rearrange it for the denominator",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Subtracting \\(1\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) gives exactly the denominator we have."
        },
        {
          "stepNumber": 12,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{2}{\\sec^2\\theta - 1} = \\frac{2}{\\tan^2\\theta}",
          "explanation": "Replace \\(\\sec^2\\theta-1\\) with \\(\\tan^2\\theta\\) in the denominator."
        },
        {
          "stepNumber": 13,
          "description": "Split off the constant factor",
          "workingLatex": "\\frac{2}{\\tan^2\\theta} = 2\\cdot\\frac{1}{\\tan^2\\theta}",
          "explanation": "Separating the \\(2\\) makes the reciprocal \\(\\displaystyle\\frac{1}{\\tan^2\\theta}\\) stand out, ready to convert to cotangent."
        },
        {
          "stepNumber": 14,
          "description": "Convert to cotangent",
          "workingLatex": "2\\cdot\\frac{1}{\\tan^2\\theta} = 2\\cot^2\\theta",
          "explanation": "Since \\(\\cot\\theta=1/\\tan\\theta\\), squaring gives \\(\\cot^2\\theta=1/\\tan^2\\theta\\), so the expression becomes \\(2\\cot^2\\theta\\)."
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion",
          "workingLatex": "\\text{LHS} = 2\\cot^2\\theta = \\text{RHS}",
          "explanation": "The left-hand side equals the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-025",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 10",
    "difficulty": "Foundation",
    "questionText": "Prove \\((\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) \\equiv 1\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = (\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta)",
          "explanation": "In a proof we transform one side until it matches the other. Here we work on the left-hand side and aim to reach \\(1\\), the right-hand side."
        },
        {
          "stepNumber": 2,
          "description": "Name the two terms in each bracket",
          "workingLatex": "a = \\csc\\theta, \\qquad b = \\cot\\theta",
          "explanation": "Labelling the terms \\(a\\) and \\(b\\) makes the structure clear: both brackets contain the same \\(a\\) and \\(b\\), differing only by the sign between them."
        },
        {
          "stepNumber": 3,
          "description": "Recognise the difference of two squares",
          "workingLatex": "(a-b)(a+b) = a^2 - b^2",
          "explanation": "Same terms with opposite signs always give a difference of squares. A common slip is to expand all four products; the two cross terms cancel, so this shortcut is safer."
        },
        {
          "stepNumber": 4,
          "description": "Substitute a and b back in",
          "workingLatex": "(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) = (\\csc\\theta)^2 - (\\cot\\theta)^2",
          "explanation": "Replacing \\(a\\) with \\(\\csc\\theta\\) and \\(b\\) with \\(\\cot\\theta\\) in \\(a^2-b^2\\) gives the squares of each term."
        },
        {
          "stepNumber": 5,
          "description": "Tidy the squared notation",
          "workingLatex": "(\\csc\\theta)^2 - (\\cot\\theta)^2 = \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "We write \\((\\csc\\theta)^2\\) as \\(\\csc^2\\theta\\) and \\((\\cot\\theta)^2\\) as \\(\\cot^2\\theta\\), the standard way to record these powers."
        },
        {
          "stepNumber": 6,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta \\equiv \\csc^2\\theta",
          "explanation": "This comes from dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\). It directly links \\(\\csc^2\\theta\\) and \\(\\cot^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity for our expression",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtracting \\(\\cot^2\\theta\\) from both sides of \\(1+\\cot^2\\theta=\\csc^2\\theta\\) isolates \\(\\csc^2\\theta-\\cot^2\\theta\\) and shows it equals \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "\\text{LHS} = \\csc^2\\theta - \\cot^2\\theta = 1 = \\text{RHS}",
          "explanation": "The left-hand side simplifies to \\(1\\), the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-026",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 26",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sec^2\\theta + \\csc^2\\theta \\equiv \\sec^2\\theta \\csc^2\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec^2\\theta + \\csc^2\\theta",
          "explanation": "In an identity proof we manipulate one side until it matches the other. Pick the side with more structure to unfold; here the sum on the left is the natural starting point."
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal definitions",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "State the definitions before using them. Sec pairs with cos and csc pairs with sin; a very common slip is to swap these, so fix them in mind now."
        },
        {
          "stepNumber": 3,
          "description": "Square each reciprocal",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}, \\quad \\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Squaring a fraction squares both top and bottom, and \\(1\\) squared is still \\(1\\). So each squared reciprocal has a squared trig function on its denominator."
        },
        {
          "stepNumber": 4,
          "description": "Write the LHS in sin and cos",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Substitute the squared forms back into the sum. Converting everything into sines and cosines is the safest universal strategy for any identity proof."
        },
        {
          "stepNumber": 5,
          "description": "Identify the common denominator",
          "workingLatex": "\\text{common denominator} = \\sin^2\\theta\\cos^2\\theta",
          "explanation": "To add fractions we need one shared denominator. The smallest one containing both \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\) is their product \\(\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over it",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin^2\\theta\\) and the second by \\(\\cos^2\\theta\\). Multiplying by a value over itself equals multiplying by \\(1\\), so the expression is unchanged."
        },
        {
          "stepNumber": 7,
          "description": "Add the two fractions",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "With a common denominator the numerators simply add. Keep the denominator written as a product so we can split it apart again later."
        },
        {
          "stepNumber": 8,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for every angle. It is the key tool that lets the numerator collapse."
        },
        {
          "stepNumber": 9,
          "description": "Replace the numerator with 1",
          "workingLatex": "= \\frac{1}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Substitute \\(1\\) for \\(\\sin^2\\theta + \\cos^2\\theta\\). The fraction now has a single numerator over the product denominator."
        },
        {
          "stepNumber": 10,
          "description": "Split the single fraction",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} \\cdot \\frac{1}{\\sin^2\\theta}",
          "explanation": "A reciprocal of a product is the product of the reciprocals. Writing it as two factors lets each piece match a named function. Order does not matter as multiplication commutes."
        },
        {
          "stepNumber": 11,
          "description": "Convert back to sec and csc",
          "workingLatex": "= \\sec^2\\theta \\, \\csc^2\\theta = \\text{RHS} \\quad \\blacksquare",
          "explanation": "Since \\(\\displaystyle\\frac{1}{\\cos^2\\theta} = \\sec^2\\theta\\) and \\(\\displaystyle\\frac{1}{\\sin^2\\theta} = \\csc^2\\theta\\), the LHS now equals the RHS, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-027",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 27",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\displaystyle\\frac{\\tan\\theta + \\cot\\theta}{\\sec\\theta} \\equiv \\csc\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\tan\\theta + \\cot\\theta}{\\sec\\theta}",
          "explanation": "We manipulate the LHS until it matches the RHS. The plan is to rewrite every function in sin and cos, then simplify the compound fraction down to a single function."
        },
        {
          "stepNumber": 2,
          "description": "Recall the definitions of tan and cot",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "State the definitions before using them. Cot is cosine over sine; do not confuse it by writing sine over cosine, which is tan."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the numerator",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Replace tan and cot in the numerator with their sin and cos forms. We will combine these two fractions next."
        },
        {
          "stepNumber": 4,
          "description": "Identify the common denominator",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The smallest denominator containing both \\(\\cos\\theta\\) and \\(\\sin\\theta\\) is their product \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite each fraction over it",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} + \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\) and the second by \\(\\cos\\theta\\). Each numerator gains the factor it was missing."
        },
        {
          "stepNumber": 6,
          "description": "Add the numerators",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With the same denominator the numerators add directly."
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Use \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) to replace the numerator with \\(1\\). The numerator collapses neatly to \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "Write the dividing sec term",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Express the dividing factor in sin/cos form too, so the whole expression speaks one language before we simplify."
        },
        {
          "stepNumber": 9,
          "description": "Set up the division",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\sin\\theta\\cos\\theta} \\div \\frac{1}{\\cos\\theta}",
          "explanation": "Dividing by \\(\\sec\\theta\\) means dividing by \\(\\displaystyle\\frac{1}{\\cos\\theta}\\). The whole numerator is now divided by this single fraction."
        },
        {
          "stepNumber": 10,
          "description": "Multiply by the reciprocal",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta} \\times \\frac{\\cos\\theta}{1}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so flip \\(\\displaystyle\\frac{1}{\\cos\\theta}\\) to \\(\\displaystyle\\frac{\\cos\\theta}{1}\\). A common slip is forgetting to flip the second fraction."
        },
        {
          "stepNumber": 11,
          "description": "Write as one fraction",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply across: the numerators give \\(\\cos\\theta\\) and the denominators give \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 12,
          "description": "Cancel the cos factor",
          "workingLatex": "= \\frac{1}{\\sin\\theta}",
          "explanation": "The \\(\\cos\\theta\\) on top cancels one \\(\\cos\\theta\\) on the bottom, leaving \\(1\\) over \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 13,
          "description": "Convert back to csc",
          "workingLatex": "= \\csc\\theta = \\text{RHS} \\quad \\blacksquare",
          "explanation": "Since \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\), the LHS equals the RHS, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-028",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 28",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\tan\\theta + \\cot\\theta \\equiv \\sec\\theta\\csc\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\tan\\theta + \\cot\\theta",
          "explanation": "We manipulate the LHS until it matches the RHS. Begin with the side made of tan and cot, then rewrite in sin and cos to expose the Pythagorean identity."
        },
        {
          "stepNumber": 2,
          "description": "Recall the definitions of tan and cot",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "State the definitions before using them. Cot is cosine over sine, not sine over cosine; mixing these up is a frequent error."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the sum",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Replace tan and cot with their sin and cos forms. We now have two simple fractions to combine."
        },
        {
          "stepNumber": 4,
          "description": "Identify the common denominator",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The smallest denominator containing both \\(\\cos\\theta\\) and \\(\\sin\\theta\\) is their product \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite each fraction over it",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} + \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\) and the second by \\(\\cos\\theta\\). Each missing factor is supplied."
        },
        {
          "stepNumber": 6,
          "description": "Add the fractions",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Same denominator means numerators add directly. Keep the denominator as a product for the final split."
        },
        {
          "stepNumber": 7,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This fundamental identity holds for every angle and is the central tool of this chapter."
        },
        {
          "stepNumber": 8,
          "description": "Replace the numerator with 1",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Substitute \\(1\\) for the numerator. The fraction is now a single reciprocal of a product."
        },
        {
          "stepNumber": 9,
          "description": "Split into a product",
          "workingLatex": "= \\frac{1}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta}",
          "explanation": "A reciprocal of a product equals the product of the reciprocals. Separating it lets each factor match a named function."
        },
        {
          "stepNumber": 10,
          "description": "Convert back to sec and csc",
          "workingLatex": "= \\sec\\theta\\,\\csc\\theta = \\text{RHS} \\quad \\blacksquare",
          "explanation": "Since \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\) and \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\), the LHS equals the RHS, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-029",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 11",
    "difficulty": "Challenge",
    "questionText": "(a) Prove that \\(\\displaystyle\\frac{\\cot\\theta + \\tan\\theta}{\\csc\\theta} \\equiv \\sec\\theta\\).\n(b) Hence, or otherwise, solve the equation \\(2\\tan^2\\theta + 5 = 7\\left(\\cot\\theta + \\tan\\theta\\right)\\csc\\theta\\) for \\(0 \\le \\theta < 360^\\circ\\), giving your answers to one decimal place.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof",
      "identities",
      "quadratic-in-sec",
      "rejected-root",
      "solving-equations",
      "hence-solve"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start part (a) from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\cot\\theta + \\tan\\theta}{\\csc\\theta}",
          "explanation": "We work on the LHS of the identity and convert every function to sine and cosine. Keeping the whole quotient over one bar avoids dropping the division by \\(\\csc\\theta\\) later."
        },
        {
          "stepNumber": 2,
          "description": "Write cot and tan in sin and cos",
          "workingLatex": "\\cot\\theta + \\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Recall \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) and \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\). A common slip is to invert one of these the wrong way round."
        },
        {
          "stepNumber": 3,
          "description": "Combine the numerator over a common denominator",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The common denominator is \\(\\sin\\theta\\cos\\theta\\), so each fraction is rescaled accordingly. Take care that \\(\\cos\\theta\\) over \\(\\sin\\theta\\) becomes \\(\\cos^2\\theta\\) on top, not \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity to the top",
          "workingLatex": "\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Since \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the numerator collapses to \\(1\\). This is the key simplification of the proof."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the division by cosec as multiplication",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\sin\\theta\\cos\\theta} \\div \\csc\\theta = \\frac{1}{\\sin\\theta\\cos\\theta}\\cdot\\frac{1}{\\csc\\theta}",
          "explanation": "Dividing by \\(\\csc\\theta\\) means multiplying by its reciprocal. Since \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\), its reciprocal is \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Replace the reciprocal of cosec by sin",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}\\cdot \\sin\\theta",
          "explanation": "Substituting \\(\\displaystyle\\frac{1}{\\csc\\theta} = \\sin\\theta\\) prepares one factor of \\(\\sin\\theta\\) to cancel. Forgetting to invert \\(\\csc\\theta\\) is a frequent error here."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of sin",
          "workingLatex": "= \\frac{\\sin\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta = \\text{RHS} \\quad \\blacksquare",
          "explanation": "One \\(\\sin\\theta\\) cancels top and bottom, leaving \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\), which equals the RHS, so part (a) is proved."
        },
        {
          "stepNumber": 8,
          "description": "Use part (a) on the right of the equation",
          "workingLatex": "2\\tan^2\\theta + 5 = 7\\sec\\theta",
          "explanation": "By part (a) the bracket-times-cosec on the RHS equals \\(\\sec\\theta\\), turning the equation into one purely in \\(\\tan\\) and \\(\\sec\\). This is the point of the 'hence'."
        },
        {
          "stepNumber": 9,
          "description": "Replace tan-squared using the identity",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "From \\(1 + \\tan^2\\theta = \\sec^2\\theta\\) we get \\(\\tan^2\\theta = \\sec^2\\theta - 1\\), so everything can be written in \\(\\sec\\theta\\). A common slip is to write \\(\\sec^2\\theta + 1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Substitute to get an equation in sec only",
          "workingLatex": "2\\left(\\sec^2\\theta - 1\\right) + 5 = 7\\sec\\theta",
          "explanation": "Substitute the expression for \\(\\tan^2\\theta\\). Remember the factor \\(2\\) multiplies the whole bracket, including the \\(-1\\)."
        },
        {
          "stepNumber": 11,
          "description": "Expand and tidy the left-hand side",
          "workingLatex": "2\\sec^2\\theta + 3 = 7\\sec\\theta",
          "explanation": "Expanding gives \\(2\\sec^2\\theta - 2 + 5 = 2\\sec^2\\theta + 3\\). Keep the arithmetic of the constants accurate: \\(-2 + 5 = 3\\)."
        },
        {
          "stepNumber": 12,
          "description": "Rearrange into a quadratic in sec",
          "workingLatex": "2\\sec^2\\theta - 7\\sec\\theta + 3 = 0",
          "explanation": "Bring all terms to one side so the equation is a standard quadratic in \\(\\sec\\theta\\). Moving \\(7\\sec\\theta\\) across flips its sign."
        },
        {
          "stepNumber": 13,
          "description": "Factorise the quadratic",
          "workingLatex": "\\left(2\\sec\\theta - 1\\right)\\left(\\sec\\theta - 3\\right) = 0",
          "explanation": "The factors of \\(2\\cdot 3 = 6\\) that combine to \\(-7\\) give this factorisation; expanding back checks it. Treat \\(\\sec\\theta\\) as the single unknown."
        },
        {
          "stepNumber": 14,
          "description": "Read off the two values of sec",
          "workingLatex": "\\sec\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\sec\\theta = 3",
          "explanation": "Setting each factor to zero gives the two candidate values. They must now be tested for validity before solving for \\(\\theta\\)."
        },
        {
          "stepNumber": 15,
          "description": "Reject the root that breaks the range of sec",
          "workingLatex": "\\left|\\sec\\theta\\right| \\ge 1 \\;\\Rightarrow\\; \\sec\\theta = \\frac{1}{2} \\text{ rejected}",
          "explanation": "Since \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(|\\cos\\theta| \\le 1\\), we always have \\(|\\sec\\theta| \\ge 1\\), so \\(\\sec\\theta = \\displaystyle\\frac{1}{2}\\) is impossible. Discarding this is essential for full marks."
        },
        {
          "stepNumber": 16,
          "description": "Convert the valid root to cosine",
          "workingLatex": "\\sec\\theta = 3 \\;\\Rightarrow\\; \\cos\\theta = \\frac{1}{3}",
          "explanation": "Taking reciprocals, \\(\\cos\\theta = \\displaystyle\\frac{1}{\\sec\\theta} = \\displaystyle\\frac{1}{3}\\). Cosine is positive, so solutions lie in the first and fourth quadrants."
        },
        {
          "stepNumber": 17,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\cos^{-1}\\left(\\frac{1}{3}\\right) = 70.5^\\circ",
          "explanation": "The inverse cosine gives the first-quadrant angle, \\(70.53\\ldots^\\circ\\), which rounds to \\(70.5^\\circ\\). Keep extra digits until the final rounding."
        },
        {
          "stepNumber": 18,
          "description": "Find the second solution in range",
          "workingLatex": "\\theta = 360^\\circ - 70.5^\\circ = 289.5^\\circ",
          "explanation": "Because \\(\\cos\\) is positive in the fourth quadrant too, the other solution is \\(360^\\circ - 70.53\\ldots^\\circ = 289.47\\ldots^\\circ \\approx 289.5^\\circ\\). Both lie in \\(0 \\le \\theta < 360^\\circ\\).",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    2.25,
                    0.999
                  ],
                  [
                    4.5,
                    0.997
                  ],
                  [
                    6.75,
                    0.993
                  ],
                  [
                    9,
                    0.988
                  ],
                  [
                    11.25,
                    0.981
                  ],
                  [
                    13.5,
                    0.972
                  ],
                  [
                    15.75,
                    0.962
                  ],
                  [
                    18,
                    0.951
                  ],
                  [
                    20.25,
                    0.938
                  ],
                  [
                    22.5,
                    0.924
                  ],
                  [
                    24.75,
                    0.908
                  ],
                  [
                    27,
                    0.891
                  ],
                  [
                    29.25,
                    0.872
                  ],
                  [
                    31.5,
                    0.853
                  ],
                  [
                    33.75,
                    0.831
                  ],
                  [
                    36,
                    0.809
                  ],
                  [
                    38.25,
                    0.785
                  ],
                  [
                    40.5,
                    0.76
                  ],
                  [
                    42.75,
                    0.734
                  ],
                  [
                    45,
                    0.707
                  ],
                  [
                    47.25,
                    0.679
                  ],
                  [
                    49.5,
                    0.649
                  ],
                  [
                    51.75,
                    0.619
                  ],
                  [
                    54,
                    0.588
                  ],
                  [
                    56.25,
                    0.556
                  ],
                  [
                    58.5,
                    0.522
                  ],
                  [
                    60.75,
                    0.489
                  ],
                  [
                    63,
                    0.454
                  ],
                  [
                    65.25,
                    0.419
                  ],
                  [
                    67.5,
                    0.383
                  ],
                  [
                    69.75,
                    0.346
                  ],
                  [
                    72,
                    0.309
                  ],
                  [
                    74.25,
                    0.271
                  ],
                  [
                    76.5,
                    0.233
                  ],
                  [
                    78.75,
                    0.195
                  ],
                  [
                    81,
                    0.156
                  ],
                  [
                    83.25,
                    0.118
                  ],
                  [
                    85.5,
                    0.078
                  ],
                  [
                    87.75,
                    0.039
                  ],
                  [
                    90,
                    0
                  ],
                  [
                    92.25,
                    -0.039
                  ],
                  [
                    94.5,
                    -0.078
                  ],
                  [
                    96.75,
                    -0.118
                  ],
                  [
                    99,
                    -0.156
                  ],
                  [
                    101.25,
                    -0.195
                  ],
                  [
                    103.5,
                    -0.233
                  ],
                  [
                    105.75,
                    -0.271
                  ],
                  [
                    108,
                    -0.309
                  ],
                  [
                    110.25,
                    -0.346
                  ],
                  [
                    112.5,
                    -0.383
                  ],
                  [
                    114.75,
                    -0.419
                  ],
                  [
                    117,
                    -0.454
                  ],
                  [
                    119.25,
                    -0.489
                  ],
                  [
                    121.5,
                    -0.522
                  ],
                  [
                    123.75,
                    -0.556
                  ],
                  [
                    126,
                    -0.588
                  ],
                  [
                    128.25,
                    -0.619
                  ],
                  [
                    130.5,
                    -0.649
                  ],
                  [
                    132.75,
                    -0.679
                  ],
                  [
                    135,
                    -0.707
                  ],
                  [
                    137.25,
                    -0.734
                  ],
                  [
                    139.5,
                    -0.76
                  ],
                  [
                    141.75,
                    -0.785
                  ],
                  [
                    144,
                    -0.809
                  ],
                  [
                    146.25,
                    -0.831
                  ],
                  [
                    148.5,
                    -0.853
                  ],
                  [
                    150.75,
                    -0.872
                  ],
                  [
                    153,
                    -0.891
                  ],
                  [
                    155.25,
                    -0.908
                  ],
                  [
                    157.5,
                    -0.924
                  ],
                  [
                    159.75,
                    -0.938
                  ],
                  [
                    162,
                    -0.951
                  ],
                  [
                    164.25,
                    -0.962
                  ],
                  [
                    166.5,
                    -0.972
                  ],
                  [
                    168.75,
                    -0.981
                  ],
                  [
                    171,
                    -0.988
                  ],
                  [
                    173.25,
                    -0.993
                  ],
                  [
                    175.5,
                    -0.997
                  ],
                  [
                    177.75,
                    -0.999
                  ],
                  [
                    180,
                    -1
                  ],
                  [
                    182.25,
                    -0.999
                  ],
                  [
                    184.5,
                    -0.997
                  ],
                  [
                    186.75,
                    -0.993
                  ],
                  [
                    189,
                    -0.988
                  ],
                  [
                    191.25,
                    -0.981
                  ],
                  [
                    193.5,
                    -0.972
                  ],
                  [
                    195.75,
                    -0.962
                  ],
                  [
                    198,
                    -0.951
                  ],
                  [
                    200.25,
                    -0.938
                  ],
                  [
                    202.5,
                    -0.924
                  ],
                  [
                    204.75,
                    -0.908
                  ],
                  [
                    207,
                    -0.891
                  ],
                  [
                    209.25,
                    -0.872
                  ],
                  [
                    211.5,
                    -0.853
                  ],
                  [
                    213.75,
                    -0.831
                  ],
                  [
                    216,
                    -0.809
                  ],
                  [
                    218.25,
                    -0.785
                  ],
                  [
                    220.5,
                    -0.76
                  ],
                  [
                    222.75,
                    -0.734
                  ],
                  [
                    225,
                    -0.707
                  ],
                  [
                    227.25,
                    -0.679
                  ],
                  [
                    229.5,
                    -0.649
                  ],
                  [
                    231.75,
                    -0.619
                  ],
                  [
                    234,
                    -0.588
                  ],
                  [
                    236.25,
                    -0.556
                  ],
                  [
                    238.5,
                    -0.522
                  ],
                  [
                    240.75,
                    -0.489
                  ],
                  [
                    243,
                    -0.454
                  ],
                  [
                    245.25,
                    -0.419
                  ],
                  [
                    247.5,
                    -0.383
                  ],
                  [
                    249.75,
                    -0.346
                  ],
                  [
                    252,
                    -0.309
                  ],
                  [
                    254.25,
                    -0.271
                  ],
                  [
                    256.5,
                    -0.233
                  ],
                  [
                    258.75,
                    -0.195
                  ],
                  [
                    261,
                    -0.156
                  ],
                  [
                    263.25,
                    -0.118
                  ],
                  [
                    265.5,
                    -0.078
                  ],
                  [
                    267.75,
                    -0.039
                  ],
                  [
                    270,
                    0
                  ],
                  [
                    272.25,
                    0.039
                  ],
                  [
                    274.5,
                    0.078
                  ],
                  [
                    276.75,
                    0.118
                  ],
                  [
                    279,
                    0.156
                  ],
                  [
                    281.25,
                    0.195
                  ],
                  [
                    283.5,
                    0.233
                  ],
                  [
                    285.75,
                    0.271
                  ],
                  [
                    288,
                    0.309
                  ],
                  [
                    290.25,
                    0.346
                  ],
                  [
                    292.5,
                    0.383
                  ],
                  [
                    294.75,
                    0.419
                  ],
                  [
                    297,
                    0.454
                  ],
                  [
                    299.25,
                    0.489
                  ],
                  [
                    301.5,
                    0.522
                  ],
                  [
                    303.75,
                    0.556
                  ],
                  [
                    306,
                    0.588
                  ],
                  [
                    308.25,
                    0.619
                  ],
                  [
                    310.5,
                    0.649
                  ],
                  [
                    312.75,
                    0.679
                  ],
                  [
                    315,
                    0.707
                  ],
                  [
                    317.25,
                    0.734
                  ],
                  [
                    319.5,
                    0.76
                  ],
                  [
                    321.75,
                    0.785
                  ],
                  [
                    324,
                    0.809
                  ],
                  [
                    326.25,
                    0.831
                  ],
                  [
                    328.5,
                    0.853
                  ],
                  [
                    330.75,
                    0.872
                  ],
                  [
                    333,
                    0.891
                  ],
                  [
                    335.25,
                    0.908
                  ],
                  [
                    337.5,
                    0.924
                  ],
                  [
                    339.75,
                    0.938
                  ],
                  [
                    342,
                    0.951
                  ],
                  [
                    344.25,
                    0.962
                  ],
                  [
                    346.5,
                    0.972
                  ],
                  [
                    348.75,
                    0.981
                  ],
                  [
                    351,
                    0.988
                  ],
                  [
                    353.25,
                    0.993
                  ],
                  [
                    355.5,
                    0.997
                  ],
                  [
                    357.75,
                    0.999
                  ],
                  [
                    360,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cos\\theta",
                "labelAt": [
                  160,
                  -0.94
                ]
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.3333
                ],
                "to": [
                  360,
                  0.3333
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=\\frac13",
                "labelAt": [
                  28.8,
                  0.6333
                ]
              }
            ],
            "points": [
              {
                "at": [
                  70.5,
                  0.333
                ],
                "label": "70.5^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  289.5,
                  0.333
                ],
                "label": "289.5^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "(a) Proved. \\(\\blacksquare\\) \\quad (b) \\(\\theta = 70.5^\\circ\\) or \\(\\theta = 289.5^\\circ\\) (rejecting \\(\\sec\\theta = \\displaystyle\\frac12\\) since \\(\\left|\\sec\\theta\\right| \\ge 1\\)).",
      "commonMistakes": [
        "Forgetting that division by \\(\\csc\\theta\\) means multiplying by \\(\\sin\\theta\\) in part (a).",
        "Using \\(\\tan^2\\theta = \\sec^2\\theta + 1\\) instead of \\(\\sec^2\\theta - 1\\).",
        "Keeping \\(\\sec\\theta = \\displaystyle\\frac12\\) instead of rejecting it via \\(|\\sec\\theta| \\ge 1\\).",
        "Giving only the first-quadrant solution and missing \\(\\theta = 289.5^\\circ\\)."
      ]
    }
  },
  {
    "id": "y2tf4-030",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 12",
    "difficulty": "Foundation",
    "questionText": "Prove \\(\\sin\\theta\\tan\\theta + \\cos\\theta \\equiv \\sec\\theta\\).",
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
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sin\\theta\\tan\\theta + \\cos\\theta",
          "explanation": "Work on the LHS and convert \\(\\tan\\) into \\(\\sin\\) and \\(\\cos\\) so the two terms can be merged into one fraction."
        },
        {
          "stepNumber": 2,
          "description": "Replace tan with sin over cos",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Recall \\(\\tan\\theta = \\sin\\theta/\\cos\\theta\\). We will substitute this into the first term next."
        },
        {
          "stepNumber": 3,
          "description": "Substitute tan into the product",
          "workingLatex": "\\sin\\theta\\tan\\theta = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Put the \\(\\tan\\) replacement into the term \\(\\sin\\theta\\tan\\theta\\), ready to multiply the pieces together."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the sines on top",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Multiplying \\(\\sin\\theta\\) by \\(\\sin\\theta\\) gives \\(\\sin^2\\theta\\) over the denominator \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Write cos over a common denominator",
          "workingLatex": "\\cos\\theta = \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "To add to the first fraction we need denominator \\(\\cos\\theta\\). Multiplying \\(\\cos\\theta\\) top and bottom by \\(\\cos\\theta\\) gives \\(\\cos^2\\theta\\) on top without changing its value."
        },
        {
          "stepNumber": 6,
          "description": "Write both terms as fractions",
          "workingLatex": "\\text{LHS} = \\frac{\\sin^2\\theta}{\\cos\\theta} + \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Both terms now share the denominator \\(\\cos\\theta\\), so they are ready to add."
        },
        {
          "stepNumber": 7,
          "description": "Add the two fractions",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "With a common denominator the numerators add directly. Keep the denominator as \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\frac{1}{\\cos\\theta}",
          "explanation": "Replace \\(\\sin^2\\theta + \\cos^2\\theta\\) with \\(1\\), the key identity, simplifying the numerator to \\(1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Convert back to sec",
          "workingLatex": "= \\sec\\theta = \\text{RHS} \\quad \\blacksquare",
          "explanation": "Since \\(1/\\cos\\theta = \\sec\\theta\\), the LHS equals the RHS, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-031",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 29",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sec^2\\theta = 4\\) for \\(\\theta \\in [0, 2\\pi]\\).",
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
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so any equation in \\(\\sec\\) can be rewritten in \\(\\cos\\). A common slip is to treat \\(\\sec\\) as the reciprocal of sine."
        },
        {
          "stepNumber": 2,
          "description": "Square the definition",
          "workingLatex": "\\sec^2\\theta = \\left(\\frac{1}{\\cos\\theta}\\right)^2 = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Squaring a fraction squares both its numerator and denominator. Since the numerator is \\(1\\), squaring it leaves \\(1\\), giving one over cosine squared."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the given equation",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = 4",
          "explanation": "Replace \\(\\sec^2\\theta\\) in the original equation with one over cosine squared. This turns the unfamiliar \\(\\sec\\) equation into a familiar cosine equation."
        },
        {
          "stepNumber": 4,
          "description": "Cross-multiply to clear the fraction",
          "workingLatex": "1 = 4\\cos^2\\theta",
          "explanation": "Multiplying both sides by \\(\\cos^2\\theta\\) removes the denominator. This is a cleaner first move than inverting if you find reciprocals error-prone."
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 4",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{4}",
          "explanation": "Dividing by \\(4\\) isolates cosine squared on its own. Equivalently this is just the reciprocal of both sides of step 3."
        },
        {
          "stepNumber": 6,
          "description": "Square root both sides",
          "workingLatex": "\\cos\\theta = \\pm\\sqrt{\\frac{1}{4}} = \\pm\\frac{1}{2}",
          "explanation": "Taking a square root introduces both a positive and a negative value because both square to one quarter. Forgetting the negative root loses half of the solutions."
        },
        {
          "stepNumber": 7,
          "description": "Split into two separate cases",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\cos\\theta = -\\frac{1}{2}",
          "explanation": "The plus-or-minus produces two ordinary cosine equations to solve independently. We handle the positive case first, then the negative case."
        },
        {
          "stepNumber": 8,
          "description": "Find the reference angle (positive case)",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\frac{1}{2}",
          "explanation": "The acute angle whose cosine is one half is \\(\\displaystyle\\frac{\\pi}{3}\\). This reference angle locates the solutions in every quadrant."
        },
        {
          "stepNumber": 9,
          "description": "Identify quadrants for the positive case",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} > 0",
          "explanation": "Cosine is positive in the first and fourth quadrants. So the two solutions for this case sit there."
        },
        {
          "stepNumber": 10,
          "description": "First-quadrant solution (positive case)",
          "workingLatex": "\\theta = \\frac{\\pi}{3}",
          "explanation": "In the first quadrant the angle equals the reference angle directly. This value lies inside the interval."
        },
        {
          "stepNumber": 11,
          "description": "Fourth-quadrant solution (positive case)",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "The fourth-quadrant angle is \\(2\\pi\\) minus the reference angle. This also lies inside the interval."
        },
        {
          "stepNumber": 12,
          "description": "Identify quadrants for the negative case",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2} < 0",
          "explanation": "Cosine is negative in the second and third quadrants. We reuse the same reference angle \\(\\displaystyle\\frac{\\pi}{3}\\)."
        },
        {
          "stepNumber": 13,
          "description": "Second-quadrant solution (negative case)",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}",
          "explanation": "The second-quadrant angle is \\(\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{2\\pi}{3}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Third-quadrant solution (negative case)",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}",
          "explanation": "The third-quadrant angle is \\(\\pi\\) plus the reference angle. This gives \\(\\displaystyle\\frac{4\\pi}{3}\\)."
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions in the interval",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "All four values lie in the closed interval from \\(0\\) to \\(2\\pi\\). Check none are duplicated and all satisfy the original equation.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.039,
                    0.999
                  ],
                  [
                    0.079,
                    0.997
                  ],
                  [
                    0.118,
                    0.993
                  ],
                  [
                    0.157,
                    0.988
                  ],
                  [
                    0.196,
                    0.981
                  ],
                  [
                    0.236,
                    0.972
                  ],
                  [
                    0.275,
                    0.962
                  ],
                  [
                    0.314,
                    0.951
                  ],
                  [
                    0.353,
                    0.938
                  ],
                  [
                    0.393,
                    0.924
                  ],
                  [
                    0.432,
                    0.908
                  ],
                  [
                    0.471,
                    0.891
                  ],
                  [
                    0.511,
                    0.872
                  ],
                  [
                    0.55,
                    0.853
                  ],
                  [
                    0.589,
                    0.831
                  ],
                  [
                    0.628,
                    0.809
                  ],
                  [
                    0.668,
                    0.785
                  ],
                  [
                    0.707,
                    0.76
                  ],
                  [
                    0.746,
                    0.734
                  ],
                  [
                    0.785,
                    0.707
                  ],
                  [
                    0.825,
                    0.679
                  ],
                  [
                    0.864,
                    0.649
                  ],
                  [
                    0.903,
                    0.619
                  ],
                  [
                    0.942,
                    0.588
                  ],
                  [
                    0.982,
                    0.556
                  ],
                  [
                    1.021,
                    0.522
                  ],
                  [
                    1.06,
                    0.489
                  ],
                  [
                    1.1,
                    0.454
                  ],
                  [
                    1.139,
                    0.419
                  ],
                  [
                    1.178,
                    0.383
                  ],
                  [
                    1.217,
                    0.346
                  ],
                  [
                    1.257,
                    0.309
                  ],
                  [
                    1.296,
                    0.271
                  ],
                  [
                    1.335,
                    0.233
                  ],
                  [
                    1.374,
                    0.195
                  ],
                  [
                    1.414,
                    0.156
                  ],
                  [
                    1.453,
                    0.118
                  ],
                  [
                    1.492,
                    0.078
                  ],
                  [
                    1.532,
                    0.039
                  ],
                  [
                    1.571,
                    0
                  ],
                  [
                    1.61,
                    -0.039
                  ],
                  [
                    1.649,
                    -0.078
                  ],
                  [
                    1.689,
                    -0.118
                  ],
                  [
                    1.728,
                    -0.156
                  ],
                  [
                    1.767,
                    -0.195
                  ],
                  [
                    1.806,
                    -0.233
                  ],
                  [
                    1.846,
                    -0.271
                  ],
                  [
                    1.885,
                    -0.309
                  ],
                  [
                    1.924,
                    -0.346
                  ],
                  [
                    1.964,
                    -0.383
                  ],
                  [
                    2.003,
                    -0.419
                  ],
                  [
                    2.042,
                    -0.454
                  ],
                  [
                    2.081,
                    -0.489
                  ],
                  [
                    2.121,
                    -0.523
                  ],
                  [
                    2.16,
                    -0.556
                  ],
                  [
                    2.199,
                    -0.588
                  ],
                  [
                    2.238,
                    -0.619
                  ],
                  [
                    2.278,
                    -0.649
                  ],
                  [
                    2.317,
                    -0.679
                  ],
                  [
                    2.356,
                    -0.707
                  ],
                  [
                    2.395,
                    -0.734
                  ],
                  [
                    2.435,
                    -0.76
                  ],
                  [
                    2.474,
                    -0.785
                  ],
                  [
                    2.513,
                    -0.809
                  ],
                  [
                    2.553,
                    -0.831
                  ],
                  [
                    2.592,
                    -0.853
                  ],
                  [
                    2.631,
                    -0.872
                  ],
                  [
                    2.67,
                    -0.891
                  ],
                  [
                    2.71,
                    -0.908
                  ],
                  [
                    2.749,
                    -0.924
                  ],
                  [
                    2.788,
                    -0.938
                  ],
                  [
                    2.827,
                    -0.951
                  ],
                  [
                    2.867,
                    -0.962
                  ],
                  [
                    2.906,
                    -0.972
                  ],
                  [
                    2.945,
                    -0.981
                  ],
                  [
                    2.985,
                    -0.988
                  ],
                  [
                    3.024,
                    -0.993
                  ],
                  [
                    3.063,
                    -0.997
                  ],
                  [
                    3.102,
                    -0.999
                  ],
                  [
                    3.142,
                    -1
                  ],
                  [
                    3.181,
                    -0.999
                  ],
                  [
                    3.22,
                    -0.997
                  ],
                  [
                    3.259,
                    -0.993
                  ],
                  [
                    3.299,
                    -0.988
                  ],
                  [
                    3.338,
                    -0.981
                  ],
                  [
                    3.377,
                    -0.972
                  ],
                  [
                    3.416,
                    -0.962
                  ],
                  [
                    3.456,
                    -0.951
                  ],
                  [
                    3.495,
                    -0.938
                  ],
                  [
                    3.534,
                    -0.924
                  ],
                  [
                    3.574,
                    -0.908
                  ],
                  [
                    3.613,
                    -0.891
                  ],
                  [
                    3.652,
                    -0.872
                  ],
                  [
                    3.691,
                    -0.853
                  ],
                  [
                    3.731,
                    -0.831
                  ],
                  [
                    3.77,
                    -0.809
                  ],
                  [
                    3.809,
                    -0.785
                  ],
                  [
                    3.848,
                    -0.76
                  ],
                  [
                    3.888,
                    -0.734
                  ],
                  [
                    3.927,
                    -0.707
                  ],
                  [
                    3.966,
                    -0.679
                  ],
                  [
                    4.006,
                    -0.649
                  ],
                  [
                    4.045,
                    -0.619
                  ],
                  [
                    4.084,
                    -0.588
                  ],
                  [
                    4.123,
                    -0.556
                  ],
                  [
                    4.163,
                    -0.522
                  ],
                  [
                    4.202,
                    -0.489
                  ],
                  [
                    4.241,
                    -0.454
                  ],
                  [
                    4.28,
                    -0.419
                  ],
                  [
                    4.32,
                    -0.383
                  ],
                  [
                    4.359,
                    -0.346
                  ],
                  [
                    4.398,
                    -0.309
                  ],
                  [
                    4.438,
                    -0.271
                  ],
                  [
                    4.477,
                    -0.233
                  ],
                  [
                    4.516,
                    -0.195
                  ],
                  [
                    4.555,
                    -0.156
                  ],
                  [
                    4.595,
                    -0.118
                  ],
                  [
                    4.634,
                    -0.078
                  ],
                  [
                    4.673,
                    -0.039
                  ],
                  [
                    4.712,
                    0
                  ],
                  [
                    4.752,
                    0.039
                  ],
                  [
                    4.791,
                    0.078
                  ],
                  [
                    4.83,
                    0.118
                  ],
                  [
                    4.869,
                    0.156
                  ],
                  [
                    4.909,
                    0.195
                  ],
                  [
                    4.948,
                    0.233
                  ],
                  [
                    4.987,
                    0.271
                  ],
                  [
                    5.027,
                    0.309
                  ],
                  [
                    5.066,
                    0.346
                  ],
                  [
                    5.105,
                    0.383
                  ],
                  [
                    5.144,
                    0.419
                  ],
                  [
                    5.184,
                    0.454
                  ],
                  [
                    5.223,
                    0.489
                  ],
                  [
                    5.262,
                    0.523
                  ],
                  [
                    5.301,
                    0.556
                  ],
                  [
                    5.341,
                    0.588
                  ],
                  [
                    5.38,
                    0.619
                  ],
                  [
                    5.419,
                    0.649
                  ],
                  [
                    5.459,
                    0.679
                  ],
                  [
                    5.498,
                    0.707
                  ],
                  [
                    5.537,
                    0.734
                  ],
                  [
                    5.576,
                    0.76
                  ],
                  [
                    5.616,
                    0.785
                  ],
                  [
                    5.655,
                    0.809
                  ],
                  [
                    5.694,
                    0.831
                  ],
                  [
                    5.733,
                    0.853
                  ],
                  [
                    5.773,
                    0.873
                  ],
                  [
                    5.812,
                    0.891
                  ],
                  [
                    5.851,
                    0.908
                  ],
                  [
                    5.891,
                    0.924
                  ],
                  [
                    5.93,
                    0.938
                  ],
                  [
                    5.969,
                    0.951
                  ],
                  [
                    6.008,
                    0.962
                  ],
                  [
                    6.048,
                    0.972
                  ],
                  [
                    6.087,
                    0.981
                  ],
                  [
                    6.126,
                    0.988
                  ],
                  [
                    6.165,
                    0.993
                  ],
                  [
                    6.205,
                    0.997
                  ],
                  [
                    6.244,
                    0.999
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cos\\theta",
                "labelAt": [
                  0.6,
                  0.825
                ]
              }
            ],
            "lines": [],
            "points": [
              {
                "at": [
                  1.047,
                  0.5
                ],
                "label": "\\frac{\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  2.094,
                  -0.5
                ],
                "label": "\\frac{2\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  4.189,
                  -0.5
                ],
                "label": "\\frac{4\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.236,
                  0.5
                ],
                "label": "\\frac{5\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
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
    "id": "y2tf4-032",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 30",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\csc^2\\theta = 2\\) for \\(\\theta \\in [0, 2\\pi]\\).",
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
          "description": "Recall the definition of cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine. A frequent error is to confuse it with secant, which is the reciprocal of cosine."
        },
        {
          "stepNumber": 2,
          "description": "Square the definition",
          "workingLatex": "\\csc^2\\theta = \\left(\\frac{1}{\\sin\\theta}\\right)^2 = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Squaring the fraction squares numerator and denominator; the numerator stays \\(1\\). This gives one over sine squared."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the given equation",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = 2",
          "explanation": "Replace \\(\\csc^2\\theta\\) with one over sine squared in the original equation. This converts the \\(\\csc\\) equation into an ordinary sine equation."
        },
        {
          "stepNumber": 4,
          "description": "Cross-multiply to clear the fraction",
          "workingLatex": "1 = 2\\sin^2\\theta",
          "explanation": "Multiplying both sides by \\(\\sin^2\\theta\\) removes the denominator. This avoids any slip when inverting fractions."
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 2",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{2}",
          "explanation": "Dividing by \\(2\\) isolates sine squared. Equivalently this is the reciprocal of both sides of step 3."
        },
        {
          "stepNumber": 6,
          "description": "Square root both sides",
          "workingLatex": "\\sin\\theta = \\pm\\sqrt{\\frac{1}{2}} = \\pm\\frac{1}{\\sqrt{2}}",
          "explanation": "The square root yields a positive and a negative value, since both square to one half. Dropping the negative root would lose two solutions."
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the surd",
          "workingLatex": "\\sin\\theta = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt{2}}{2}",
          "explanation": "Multiply numerator and denominator by \\(\\sqrt{2}\\) to clear the surd from the denominator. This is the standard exact form for this value."
        },
        {
          "stepNumber": 8,
          "description": "Split into two separate cases",
          "workingLatex": "\\sin\\theta = \\frac{\\sqrt{2}}{2} \\quad \\text{or} \\quad \\sin\\theta = -\\frac{\\sqrt{2}}{2}",
          "explanation": "The plus-or-minus gives two ordinary sine equations to solve in turn. We take the positive case first."
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle (positive case)",
          "workingLatex": "\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "The acute angle whose sine is \\(\\displaystyle\\frac{\\sqrt{2}}{2}\\) is \\(\\displaystyle\\frac{\\pi}{4}\\). This reference angle is used in every quadrant."
        },
        {
          "stepNumber": 10,
          "description": "Identify quadrants for the positive case",
          "workingLatex": "\\sin\\theta = \\frac{\\sqrt{2}}{2} > 0",
          "explanation": "Sine is positive in the first and second quadrants. So both positive-case solutions sit there."
        },
        {
          "stepNumber": 11,
          "description": "First-quadrant solution (positive case)",
          "workingLatex": "\\theta = \\frac{\\pi}{4}",
          "explanation": "In the first quadrant the angle equals the reference angle directly. This lies inside the interval."
        },
        {
          "stepNumber": 12,
          "description": "Second-quadrant solution (positive case)",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}",
          "explanation": "The second-quadrant angle is \\(\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{3\\pi}{4}\\)."
        },
        {
          "stepNumber": 13,
          "description": "Identify quadrants for the negative case",
          "workingLatex": "\\sin\\theta = -\\frac{\\sqrt{2}}{2} < 0",
          "explanation": "Sine is negative in the third and fourth quadrants. Reuse the reference angle \\(\\displaystyle\\frac{\\pi}{4}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Third-quadrant solution (negative case)",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}",
          "explanation": "The third-quadrant angle is \\(\\pi\\) plus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{4}\\)."
        },
        {
          "stepNumber": 15,
          "description": "Fourth-quadrant solution (negative case)",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}",
          "explanation": "The fourth-quadrant angle is \\(2\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{7\\pi}{4}\\)."
        },
        {
          "stepNumber": 16,
          "description": "Collect all solutions in the interval",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}",
          "explanation": "All four angles lie in the closed interval from \\(0\\) to \\(2\\pi\\). Each satisfies the original cosecant equation.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.039,
                    0.039
                  ],
                  [
                    0.079,
                    0.078
                  ],
                  [
                    0.118,
                    0.118
                  ],
                  [
                    0.157,
                    0.156
                  ],
                  [
                    0.196,
                    0.195
                  ],
                  [
                    0.236,
                    0.233
                  ],
                  [
                    0.275,
                    0.271
                  ],
                  [
                    0.314,
                    0.309
                  ],
                  [
                    0.353,
                    0.346
                  ],
                  [
                    0.393,
                    0.383
                  ],
                  [
                    0.432,
                    0.419
                  ],
                  [
                    0.471,
                    0.454
                  ],
                  [
                    0.511,
                    0.489
                  ],
                  [
                    0.55,
                    0.522
                  ],
                  [
                    0.589,
                    0.556
                  ],
                  [
                    0.628,
                    0.588
                  ],
                  [
                    0.668,
                    0.619
                  ],
                  [
                    0.707,
                    0.649
                  ],
                  [
                    0.746,
                    0.679
                  ],
                  [
                    0.785,
                    0.707
                  ],
                  [
                    0.825,
                    0.734
                  ],
                  [
                    0.864,
                    0.76
                  ],
                  [
                    0.903,
                    0.785
                  ],
                  [
                    0.942,
                    0.809
                  ],
                  [
                    0.982,
                    0.831
                  ],
                  [
                    1.021,
                    0.853
                  ],
                  [
                    1.06,
                    0.872
                  ],
                  [
                    1.1,
                    0.891
                  ],
                  [
                    1.139,
                    0.908
                  ],
                  [
                    1.178,
                    0.924
                  ],
                  [
                    1.217,
                    0.938
                  ],
                  [
                    1.257,
                    0.951
                  ],
                  [
                    1.296,
                    0.962
                  ],
                  [
                    1.335,
                    0.972
                  ],
                  [
                    1.374,
                    0.981
                  ],
                  [
                    1.414,
                    0.988
                  ],
                  [
                    1.453,
                    0.993
                  ],
                  [
                    1.492,
                    0.997
                  ],
                  [
                    1.532,
                    0.999
                  ],
                  [
                    1.571,
                    1
                  ],
                  [
                    1.61,
                    0.999
                  ],
                  [
                    1.649,
                    0.997
                  ],
                  [
                    1.689,
                    0.993
                  ],
                  [
                    1.728,
                    0.988
                  ],
                  [
                    1.767,
                    0.981
                  ],
                  [
                    1.806,
                    0.972
                  ],
                  [
                    1.846,
                    0.962
                  ],
                  [
                    1.885,
                    0.951
                  ],
                  [
                    1.924,
                    0.938
                  ],
                  [
                    1.964,
                    0.924
                  ],
                  [
                    2.003,
                    0.908
                  ],
                  [
                    2.042,
                    0.891
                  ],
                  [
                    2.081,
                    0.872
                  ],
                  [
                    2.121,
                    0.853
                  ],
                  [
                    2.16,
                    0.831
                  ],
                  [
                    2.199,
                    0.809
                  ],
                  [
                    2.238,
                    0.785
                  ],
                  [
                    2.278,
                    0.76
                  ],
                  [
                    2.317,
                    0.734
                  ],
                  [
                    2.356,
                    0.707
                  ],
                  [
                    2.395,
                    0.679
                  ],
                  [
                    2.435,
                    0.649
                  ],
                  [
                    2.474,
                    0.619
                  ],
                  [
                    2.513,
                    0.588
                  ],
                  [
                    2.553,
                    0.556
                  ],
                  [
                    2.592,
                    0.522
                  ],
                  [
                    2.631,
                    0.489
                  ],
                  [
                    2.67,
                    0.454
                  ],
                  [
                    2.71,
                    0.419
                  ],
                  [
                    2.749,
                    0.383
                  ],
                  [
                    2.788,
                    0.346
                  ],
                  [
                    2.827,
                    0.309
                  ],
                  [
                    2.867,
                    0.271
                  ],
                  [
                    2.906,
                    0.233
                  ],
                  [
                    2.945,
                    0.195
                  ],
                  [
                    2.985,
                    0.156
                  ],
                  [
                    3.024,
                    0.118
                  ],
                  [
                    3.063,
                    0.078
                  ],
                  [
                    3.102,
                    0.039
                  ],
                  [
                    3.142,
                    0
                  ],
                  [
                    3.181,
                    -0.039
                  ],
                  [
                    3.22,
                    -0.078
                  ],
                  [
                    3.259,
                    -0.118
                  ],
                  [
                    3.299,
                    -0.156
                  ],
                  [
                    3.338,
                    -0.195
                  ],
                  [
                    3.377,
                    -0.233
                  ],
                  [
                    3.416,
                    -0.271
                  ],
                  [
                    3.456,
                    -0.309
                  ],
                  [
                    3.495,
                    -0.346
                  ],
                  [
                    3.534,
                    -0.383
                  ],
                  [
                    3.574,
                    -0.419
                  ],
                  [
                    3.613,
                    -0.454
                  ],
                  [
                    3.652,
                    -0.489
                  ],
                  [
                    3.691,
                    -0.523
                  ],
                  [
                    3.731,
                    -0.556
                  ],
                  [
                    3.77,
                    -0.588
                  ],
                  [
                    3.809,
                    -0.619
                  ],
                  [
                    3.848,
                    -0.649
                  ],
                  [
                    3.888,
                    -0.679
                  ],
                  [
                    3.927,
                    -0.707
                  ],
                  [
                    3.966,
                    -0.734
                  ],
                  [
                    4.006,
                    -0.76
                  ],
                  [
                    4.045,
                    -0.785
                  ],
                  [
                    4.084,
                    -0.809
                  ],
                  [
                    4.123,
                    -0.831
                  ],
                  [
                    4.163,
                    -0.853
                  ],
                  [
                    4.202,
                    -0.873
                  ],
                  [
                    4.241,
                    -0.891
                  ],
                  [
                    4.28,
                    -0.908
                  ],
                  [
                    4.32,
                    -0.924
                  ],
                  [
                    4.359,
                    -0.938
                  ],
                  [
                    4.398,
                    -0.951
                  ],
                  [
                    4.438,
                    -0.962
                  ],
                  [
                    4.477,
                    -0.972
                  ],
                  [
                    4.516,
                    -0.981
                  ],
                  [
                    4.555,
                    -0.988
                  ],
                  [
                    4.595,
                    -0.993
                  ],
                  [
                    4.634,
                    -0.997
                  ],
                  [
                    4.673,
                    -0.999
                  ],
                  [
                    4.712,
                    -1
                  ],
                  [
                    4.752,
                    -0.999
                  ],
                  [
                    4.791,
                    -0.997
                  ],
                  [
                    4.83,
                    -0.993
                  ],
                  [
                    4.869,
                    -0.988
                  ],
                  [
                    4.909,
                    -0.981
                  ],
                  [
                    4.948,
                    -0.972
                  ],
                  [
                    4.987,
                    -0.962
                  ],
                  [
                    5.027,
                    -0.951
                  ],
                  [
                    5.066,
                    -0.938
                  ],
                  [
                    5.105,
                    -0.924
                  ],
                  [
                    5.144,
                    -0.908
                  ],
                  [
                    5.184,
                    -0.891
                  ],
                  [
                    5.223,
                    -0.872
                  ],
                  [
                    5.262,
                    -0.853
                  ],
                  [
                    5.301,
                    -0.831
                  ],
                  [
                    5.341,
                    -0.809
                  ],
                  [
                    5.38,
                    -0.785
                  ],
                  [
                    5.419,
                    -0.76
                  ],
                  [
                    5.459,
                    -0.734
                  ],
                  [
                    5.498,
                    -0.707
                  ],
                  [
                    5.537,
                    -0.679
                  ],
                  [
                    5.576,
                    -0.649
                  ],
                  [
                    5.616,
                    -0.619
                  ],
                  [
                    5.655,
                    -0.588
                  ],
                  [
                    5.694,
                    -0.556
                  ],
                  [
                    5.733,
                    -0.522
                  ],
                  [
                    5.773,
                    -0.489
                  ],
                  [
                    5.812,
                    -0.454
                  ],
                  [
                    5.851,
                    -0.419
                  ],
                  [
                    5.891,
                    -0.383
                  ],
                  [
                    5.93,
                    -0.346
                  ],
                  [
                    5.969,
                    -0.309
                  ],
                  [
                    6.008,
                    -0.271
                  ],
                  [
                    6.048,
                    -0.233
                  ],
                  [
                    6.087,
                    -0.195
                  ],
                  [
                    6.126,
                    -0.156
                  ],
                  [
                    6.165,
                    -0.118
                  ],
                  [
                    6.205,
                    -0.078
                  ],
                  [
                    6.244,
                    -0.039
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\sin\\theta",
                "labelAt": [
                  1.571,
                  1
                ]
              }
            ],
            "lines": [],
            "points": [
              {
                "at": [
                  0.785,
                  0.707
                ],
                "label": "\\frac{\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  2.356,
                  0.707
                ],
                "label": "\\frac{3\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  3.927,
                  -0.707
                ],
                "label": "\\frac{5\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.498,
                  -0.707
                ],
                "label": "\\frac{7\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
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
    "id": "y2tf4-033",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 31",
    "difficulty": "Standard",
    "questionText": "Solve \\(3\\cot\\theta = \\sqrt 3\\) on \\([0, 2\\pi]\\).",
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
          "description": "Isolate the cotangent term",
          "workingLatex": "\\cot\\theta = \\frac{\\sqrt{3}}{3}",
          "explanation": "Divide both sides by 3 to get cot on its own. Keep the surd exact rather than converting to a decimal."
        },
        {
          "stepNumber": 2,
          "description": "Recall that cot is the reciprocal of tan",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent equals one over tangent, so we can rewrite the equation in terms of tan. This avoids needing a cot key on the calculator."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the isolated equation",
          "workingLatex": "\\frac{1}{\\tan\\theta} = \\frac{\\sqrt{3}}{3}",
          "explanation": "Replace cot with one over tan in the equation from step 1. Both sides are now written without cotangent."
        },
        {
          "stepNumber": 4,
          "description": "Take reciprocals of both sides",
          "workingLatex": "\\tan\\theta = \\frac{3}{\\sqrt{3}}",
          "explanation": "Inverting one over tan equals sqrt3 over 3 gives tan equals 3 over sqrt3. A slip here is to forget to invert the right-hand fraction too."
        },
        {
          "stepNumber": 5,
          "description": "Rationalise the denominator",
          "workingLatex": "\\tan\\theta = \\frac{3}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3}",
          "explanation": "Multiply top and bottom by sqrt3 to clear the surd from the denominator. The denominator becomes sqrt3 times sqrt3, which is 3."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\tan\\theta = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}",
          "explanation": "The factor of 3 cancels top and bottom, leaving sqrt3. This is a clean exact value to work with."
        },
        {
          "stepNumber": 7,
          "description": "Identify the reference angle",
          "workingLatex": "\\tan\\frac{\\pi}{3} = \\sqrt{3}",
          "explanation": "The standard exact value: tangent of pi over 3 is sqrt3. This is the first-quadrant solution."
        },
        {
          "stepNumber": 8,
          "description": "Note where tangent is positive",
          "workingLatex": "\\tan\\theta = \\sqrt{3} > 0",
          "explanation": "Tangent is positive in the first and third quadrants. So both solutions lie in those quadrants."
        },
        {
          "stepNumber": 9,
          "description": "Use the period of tangent for the second solution",
          "workingLatex": "\\theta = \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3}",
          "explanation": "Tangent has period pi, so solutions repeat every pi. Adding pi to pi over 3 gives 4pi over 3, the third-quadrant solution."
        },
        {
          "stepNumber": 10,
          "description": "Check no further solutions fit",
          "workingLatex": "\\frac{4\\pi}{3} + \\pi = \\frac{7\\pi}{3} > 2\\pi",
          "explanation": "Adding pi again exceeds 2pi, so it falls outside the interval. Hence there are exactly two solutions."
        },
        {
          "stepNumber": 11,
          "description": "State all solutions in the interval",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\frac{4\\pi}{3}",
          "explanation": "Both values lie in the closed interval from 0 to 2pi. These are the complete set of solutions.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0.249,
                    3.93
                  ],
                  [
                    0.268,
                    3.637
                  ],
                  [
                    0.287,
                    3.382
                  ],
                  [
                    0.307,
                    3.158
                  ],
                  [
                    0.326,
                    2.96
                  ],
                  [
                    0.345,
                    2.783
                  ],
                  [
                    0.364,
                    2.624
                  ],
                  [
                    0.383,
                    2.48
                  ],
                  [
                    0.402,
                    2.349
                  ],
                  [
                    0.422,
                    2.229
                  ],
                  [
                    0.441,
                    2.12
                  ],
                  [
                    0.46,
                    2.018
                  ],
                  [
                    0.479,
                    1.925
                  ],
                  [
                    0.498,
                    1.838
                  ],
                  [
                    0.517,
                    1.757
                  ],
                  [
                    0.537,
                    1.681
                  ],
                  [
                    0.556,
                    1.61
                  ],
                  [
                    0.575,
                    1.543
                  ],
                  [
                    0.594,
                    1.48
                  ],
                  [
                    0.613,
                    1.421
                  ],
                  [
                    0.632,
                    1.364
                  ],
                  [
                    0.652,
                    1.311
                  ],
                  [
                    0.671,
                    1.26
                  ],
                  [
                    0.69,
                    1.212
                  ],
                  [
                    0.709,
                    1.165
                  ],
                  [
                    0.728,
                    1.121
                  ],
                  [
                    0.747,
                    1.079
                  ],
                  [
                    0.767,
                    1.038
                  ],
                  [
                    0.786,
                    0.999
                  ],
                  [
                    0.805,
                    0.962
                  ],
                  [
                    0.824,
                    0.925
                  ],
                  [
                    0.843,
                    0.89
                  ],
                  [
                    0.862,
                    0.857
                  ],
                  [
                    0.882,
                    0.824
                  ],
                  [
                    0.901,
                    0.792
                  ],
                  [
                    0.92,
                    0.761
                  ],
                  [
                    0.939,
                    0.732
                  ],
                  [
                    0.958,
                    0.703
                  ],
                  [
                    0.977,
                    0.674
                  ],
                  [
                    0.997,
                    0.647
                  ],
                  [
                    1.016,
                    0.62
                  ],
                  [
                    1.035,
                    0.594
                  ],
                  [
                    1.054,
                    0.568
                  ],
                  [
                    1.073,
                    0.543
                  ],
                  [
                    1.092,
                    0.518
                  ],
                  [
                    1.112,
                    0.494
                  ],
                  [
                    1.131,
                    0.471
                  ],
                  [
                    1.15,
                    0.448
                  ],
                  [
                    1.169,
                    0.425
                  ],
                  [
                    1.188,
                    0.402
                  ],
                  [
                    1.207,
                    0.38
                  ],
                  [
                    1.227,
                    0.358
                  ],
                  [
                    1.246,
                    0.337
                  ],
                  [
                    1.265,
                    0.316
                  ],
                  [
                    1.284,
                    0.295
                  ],
                  [
                    1.303,
                    0.274
                  ],
                  [
                    1.322,
                    0.254
                  ],
                  [
                    1.342,
                    0.233
                  ],
                  [
                    1.361,
                    0.213
                  ],
                  [
                    1.38,
                    0.193
                  ],
                  [
                    1.399,
                    0.173
                  ],
                  [
                    1.418,
                    0.154
                  ],
                  [
                    1.437,
                    0.134
                  ],
                  [
                    1.457,
                    0.115
                  ],
                  [
                    1.476,
                    0.095
                  ],
                  [
                    1.495,
                    0.076
                  ],
                  [
                    1.514,
                    0.057
                  ],
                  [
                    1.533,
                    0.038
                  ],
                  [
                    1.552,
                    0.018
                  ],
                  [
                    1.572,
                    -0.001
                  ],
                  [
                    1.591,
                    -0.02
                  ],
                  [
                    1.61,
                    -0.039
                  ],
                  [
                    1.629,
                    -0.058
                  ],
                  [
                    1.648,
                    -0.078
                  ],
                  [
                    1.667,
                    -0.097
                  ],
                  [
                    1.687,
                    -0.116
                  ],
                  [
                    1.706,
                    -0.136
                  ],
                  [
                    1.725,
                    -0.155
                  ],
                  [
                    1.744,
                    -0.175
                  ],
                  [
                    1.763,
                    -0.195
                  ],
                  [
                    1.782,
                    -0.215
                  ],
                  [
                    1.802,
                    -0.235
                  ],
                  [
                    1.821,
                    -0.255
                  ],
                  [
                    1.84,
                    -0.276
                  ],
                  [
                    1.859,
                    -0.297
                  ],
                  [
                    1.878,
                    -0.318
                  ],
                  [
                    1.897,
                    -0.339
                  ],
                  [
                    1.917,
                    -0.36
                  ],
                  [
                    1.936,
                    -0.382
                  ],
                  [
                    1.955,
                    -0.404
                  ],
                  [
                    1.974,
                    -0.427
                  ],
                  [
                    1.993,
                    -0.45
                  ],
                  [
                    2.012,
                    -0.473
                  ],
                  [
                    2.032,
                    -0.496
                  ],
                  [
                    2.051,
                    -0.521
                  ],
                  [
                    2.07,
                    -0.545
                  ],
                  [
                    2.089,
                    -0.57
                  ],
                  [
                    2.108,
                    -0.596
                  ],
                  [
                    2.127,
                    -0.622
                  ],
                  [
                    2.147,
                    -0.649
                  ],
                  [
                    2.166,
                    -0.677
                  ],
                  [
                    2.185,
                    -0.705
                  ],
                  [
                    2.204,
                    -0.734
                  ],
                  [
                    2.223,
                    -0.764
                  ],
                  [
                    2.242,
                    -0.795
                  ],
                  [
                    2.262,
                    -0.827
                  ],
                  [
                    2.281,
                    -0.86
                  ],
                  [
                    2.3,
                    -0.893
                  ],
                  [
                    2.319,
                    -0.928
                  ],
                  [
                    2.338,
                    -0.965
                  ],
                  [
                    2.357,
                    -1.003
                  ],
                  [
                    2.377,
                    -1.042
                  ],
                  [
                    2.396,
                    -1.082
                  ],
                  [
                    2.415,
                    -1.125
                  ],
                  [
                    2.434,
                    -1.169
                  ],
                  [
                    2.453,
                    -1.216
                  ],
                  [
                    2.472,
                    -1.264
                  ],
                  [
                    2.492,
                    -1.315
                  ],
                  [
                    2.511,
                    -1.369
                  ],
                  [
                    2.53,
                    -1.426
                  ],
                  [
                    2.549,
                    -1.486
                  ],
                  [
                    2.568,
                    -1.549
                  ],
                  [
                    2.587,
                    -1.616
                  ],
                  [
                    2.607,
                    -1.687
                  ],
                  [
                    2.626,
                    -1.764
                  ],
                  [
                    2.645,
                    -1.845
                  ],
                  [
                    2.664,
                    -1.933
                  ],
                  [
                    2.683,
                    -2.027
                  ],
                  [
                    2.702,
                    -2.129
                  ],
                  [
                    2.722,
                    -2.239
                  ],
                  [
                    2.741,
                    -2.36
                  ],
                  [
                    2.76,
                    -2.492
                  ],
                  [
                    2.779,
                    -2.637
                  ],
                  [
                    2.798,
                    -2.797
                  ],
                  [
                    2.817,
                    -2.976
                  ],
                  [
                    2.837,
                    -3.177
                  ],
                  [
                    2.856,
                    -3.403
                  ],
                  [
                    2.875,
                    -3.661
                  ],
                  [
                    2.894,
                    -3.958
                  ]
                ],
                "color": "#64748b",
                "width": 2.5,
                "label": "y=\\cot\\theta",
                "labelAt": [
                  0.6,
                  1.5
                ]
              },
              {
                "points": [
                  [
                    3.404,
                    3.719
                  ],
                  [
                    3.423,
                    3.46
                  ],
                  [
                    3.442,
                    3.232
                  ],
                  [
                    3.46,
                    3.03
                  ],
                  [
                    3.479,
                    2.85
                  ],
                  [
                    3.498,
                    2.688
                  ],
                  [
                    3.516,
                    2.542
                  ],
                  [
                    3.535,
                    2.409
                  ],
                  [
                    3.554,
                    2.287
                  ],
                  [
                    3.572,
                    2.175
                  ],
                  [
                    3.591,
                    2.072
                  ],
                  [
                    3.61,
                    1.977
                  ],
                  [
                    3.629,
                    1.889
                  ],
                  [
                    3.647,
                    1.806
                  ],
                  [
                    3.666,
                    1.729
                  ],
                  [
                    3.685,
                    1.657
                  ],
                  [
                    3.703,
                    1.589
                  ],
                  [
                    3.722,
                    1.525
                  ],
                  [
                    3.741,
                    1.465
                  ],
                  [
                    3.759,
                    1.407
                  ],
                  [
                    3.778,
                    1.353
                  ],
                  [
                    3.797,
                    1.301
                  ],
                  [
                    3.815,
                    1.252
                  ],
                  [
                    3.834,
                    1.205
                  ],
                  [
                    3.853,
                    1.161
                  ],
                  [
                    3.872,
                    1.118
                  ],
                  [
                    3.89,
                    1.076
                  ],
                  [
                    3.909,
                    1.037
                  ],
                  [
                    3.928,
                    0.999
                  ],
                  [
                    3.946,
                    0.962
                  ],
                  [
                    3.965,
                    0.927
                  ],
                  [
                    3.984,
                    0.893
                  ],
                  [
                    4.002,
                    0.86
                  ],
                  [
                    4.021,
                    0.828
                  ],
                  [
                    4.04,
                    0.797
                  ],
                  [
                    4.058,
                    0.767
                  ],
                  [
                    4.077,
                    0.737
                  ],
                  [
                    4.096,
                    0.709
                  ],
                  [
                    4.114,
                    0.681
                  ],
                  [
                    4.133,
                    0.654
                  ],
                  [
                    4.152,
                    0.628
                  ],
                  [
                    4.171,
                    0.602
                  ],
                  [
                    4.189,
                    0.577
                  ],
                  [
                    4.208,
                    0.552
                  ],
                  [
                    4.227,
                    0.528
                  ],
                  [
                    4.245,
                    0.504
                  ],
                  [
                    4.264,
                    0.481
                  ],
                  [
                    4.283,
                    0.458
                  ],
                  [
                    4.301,
                    0.436
                  ],
                  [
                    4.32,
                    0.414
                  ],
                  [
                    4.339,
                    0.392
                  ],
                  [
                    4.357,
                    0.371
                  ],
                  [
                    4.376,
                    0.35
                  ],
                  [
                    4.395,
                    0.329
                  ],
                  [
                    4.413,
                    0.308
                  ],
                  [
                    4.432,
                    0.288
                  ],
                  [
                    4.451,
                    0.268
                  ],
                  [
                    4.47,
                    0.248
                  ],
                  [
                    4.488,
                    0.228
                  ],
                  [
                    4.507,
                    0.208
                  ],
                  [
                    4.526,
                    0.189
                  ],
                  [
                    4.544,
                    0.17
                  ],
                  [
                    4.563,
                    0.151
                  ],
                  [
                    4.582,
                    0.131
                  ],
                  [
                    4.6,
                    0.112
                  ],
                  [
                    4.619,
                    0.094
                  ],
                  [
                    4.638,
                    0.075
                  ],
                  [
                    4.656,
                    0.056
                  ],
                  [
                    4.675,
                    0.037
                  ],
                  [
                    4.694,
                    0.019
                  ],
                  [
                    4.713,
                    0
                  ],
                  [
                    4.731,
                    -0.019
                  ],
                  [
                    4.75,
                    -0.038
                  ],
                  [
                    4.769,
                    -0.056
                  ],
                  [
                    4.787,
                    -0.075
                  ],
                  [
                    4.806,
                    -0.094
                  ],
                  [
                    4.825,
                    -0.113
                  ],
                  [
                    4.843,
                    -0.132
                  ],
                  [
                    4.862,
                    -0.151
                  ],
                  [
                    4.881,
                    -0.17
                  ],
                  [
                    4.899,
                    -0.189
                  ],
                  [
                    4.918,
                    -0.209
                  ],
                  [
                    4.937,
                    -0.228
                  ],
                  [
                    4.955,
                    -0.248
                  ],
                  [
                    4.974,
                    -0.268
                  ],
                  [
                    4.993,
                    -0.288
                  ],
                  [
                    5.012,
                    -0.308
                  ],
                  [
                    5.03,
                    -0.329
                  ],
                  [
                    5.049,
                    -0.35
                  ],
                  [
                    5.068,
                    -0.371
                  ],
                  [
                    5.086,
                    -0.392
                  ],
                  [
                    5.105,
                    -0.414
                  ],
                  [
                    5.124,
                    -0.436
                  ],
                  [
                    5.142,
                    -0.459
                  ],
                  [
                    5.161,
                    -0.481
                  ],
                  [
                    5.18,
                    -0.505
                  ],
                  [
                    5.198,
                    -0.528
                  ],
                  [
                    5.217,
                    -0.552
                  ],
                  [
                    5.236,
                    -0.577
                  ],
                  [
                    5.254,
                    -0.602
                  ],
                  [
                    5.273,
                    -0.628
                  ],
                  [
                    5.292,
                    -0.654
                  ],
                  [
                    5.311,
                    -0.681
                  ],
                  [
                    5.329,
                    -0.709
                  ],
                  [
                    5.348,
                    -0.738
                  ],
                  [
                    5.367,
                    -0.767
                  ],
                  [
                    5.385,
                    -0.797
                  ],
                  [
                    5.404,
                    -0.828
                  ],
                  [
                    5.423,
                    -0.86
                  ],
                  [
                    5.441,
                    -0.893
                  ],
                  [
                    5.46,
                    -0.927
                  ],
                  [
                    5.479,
                    -0.963
                  ],
                  [
                    5.497,
                    -0.999
                  ],
                  [
                    5.516,
                    -1.037
                  ],
                  [
                    5.535,
                    -1.077
                  ],
                  [
                    5.553,
                    -1.118
                  ],
                  [
                    5.572,
                    -1.161
                  ],
                  [
                    5.591,
                    -1.206
                  ],
                  [
                    5.61,
                    -1.253
                  ],
                  [
                    5.628,
                    -1.302
                  ],
                  [
                    5.647,
                    -1.354
                  ],
                  [
                    5.666,
                    -1.408
                  ],
                  [
                    5.684,
                    -1.465
                  ],
                  [
                    5.703,
                    -1.526
                  ],
                  [
                    5.722,
                    -1.59
                  ],
                  [
                    5.74,
                    -1.658
                  ],
                  [
                    5.759,
                    -1.73
                  ],
                  [
                    5.778,
                    -1.807
                  ],
                  [
                    5.796,
                    -1.89
                  ],
                  [
                    5.815,
                    -1.978
                  ],
                  [
                    5.834,
                    -2.074
                  ],
                  [
                    5.853,
                    -2.177
                  ],
                  [
                    5.871,
                    -2.288
                  ],
                  [
                    5.89,
                    -2.41
                  ],
                  [
                    5.909,
                    -2.543
                  ],
                  [
                    5.927,
                    -2.69
                  ],
                  [
                    5.946,
                    -2.852
                  ],
                  [
                    5.965,
                    -3.032
                  ],
                  [
                    5.983,
                    -3.234
                  ],
                  [
                    6.002,
                    -3.462
                  ],
                  [
                    6.021,
                    -3.722
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  3.142,
                  -4
                ],
                "to": [
                  3.142,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  6.283,
                  -4
                ],
                "to": [
                  6.283,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  0.5774
                ],
                "to": [
                  6.283,
                  0.5774
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=\\frac{\\sqrt3}{3}",
                "labelAt": [
                  0.503,
                  0.8774
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  0.577
                ],
                "label": "\\frac{\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  4.189,
                  0.577
                ],
                "label": "\\frac{4\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{4\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-034",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 32",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sec\\theta + 2 = 0\\) on \\([0, 2\\pi]\\).",
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
          "description": "Isolate the secant term",
          "workingLatex": "\\sec\\theta = -2",
          "explanation": "Subtract 2 from both sides to leave sec on its own. The value is negative, which is allowed since secant can be any value with magnitude at least 1."
        },
        {
          "stepNumber": 2,
          "description": "Check the value is valid for secant",
          "workingLatex": "|\\sec\\theta| = 2 \\geq 1",
          "explanation": "Secant always has magnitude at least 1, so -2 is reachable. If the right side had magnitude under 1, there would be no solution."
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is one over cosine, so we can rewrite the equation in cosine. This makes it solvable on a standard calculator."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the isolated equation",
          "workingLatex": "\\frac{1}{\\cos\\theta} = -2",
          "explanation": "Replace sec with one over cosine in the equation from step 1. The equation is now expressed purely in cosine."
        },
        {
          "stepNumber": 5,
          "description": "Take reciprocals to find cosine",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2}",
          "explanation": "Inverting both sides gives cos equals minus one half. Remember the negative sign carries through the reciprocal."
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\frac{1}{2}",
          "explanation": "The acute angle whose cosine has magnitude one half is pi over 3. We use this to locate the actual solutions."
        },
        {
          "stepNumber": 7,
          "description": "Note where cosine is negative",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2} < 0",
          "explanation": "Cosine is negative in the second and third quadrants. So both solutions sit in those quadrants."
        },
        {
          "stepNumber": 8,
          "description": "Second-quadrant solution",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}",
          "explanation": "The second-quadrant angle is pi minus the reference angle. This gives 2pi over 3."
        },
        {
          "stepNumber": 9,
          "description": "Third-quadrant solution",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}",
          "explanation": "The third-quadrant angle is pi plus the reference angle. This gives 4pi over 3."
        },
        {
          "stepNumber": 10,
          "description": "State all solutions in the interval",
          "workingLatex": "\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}",
          "explanation": "Both values lie within 0 to 2pi. There are no first- or fourth-quadrant solutions because cosine is positive there.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.009,
                    1
                  ],
                  [
                    0.019,
                    1
                  ],
                  [
                    0.028,
                    1
                  ],
                  [
                    0.037,
                    1.001
                  ],
                  [
                    0.047,
                    1.001
                  ],
                  [
                    0.056,
                    1.002
                  ],
                  [
                    0.065,
                    1.002
                  ],
                  [
                    0.075,
                    1.003
                  ],
                  [
                    0.084,
                    1.004
                  ],
                  [
                    0.093,
                    1.004
                  ],
                  [
                    0.103,
                    1.005
                  ],
                  [
                    0.112,
                    1.006
                  ],
                  [
                    0.122,
                    1.007
                  ],
                  [
                    0.131,
                    1.009
                  ],
                  [
                    0.14,
                    1.01
                  ],
                  [
                    0.15,
                    1.011
                  ],
                  [
                    0.159,
                    1.013
                  ],
                  [
                    0.168,
                    1.014
                  ],
                  [
                    0.178,
                    1.016
                  ],
                  [
                    0.187,
                    1.018
                  ],
                  [
                    0.196,
                    1.02
                  ],
                  [
                    0.206,
                    1.022
                  ],
                  [
                    0.215,
                    1.024
                  ],
                  [
                    0.224,
                    1.026
                  ],
                  [
                    0.234,
                    1.028
                  ],
                  [
                    0.243,
                    1.03
                  ],
                  [
                    0.252,
                    1.033
                  ],
                  [
                    0.262,
                    1.035
                  ],
                  [
                    0.271,
                    1.038
                  ],
                  [
                    0.28,
                    1.041
                  ],
                  [
                    0.29,
                    1.044
                  ],
                  [
                    0.299,
                    1.046
                  ],
                  [
                    0.308,
                    1.05
                  ],
                  [
                    0.318,
                    1.053
                  ],
                  [
                    0.327,
                    1.056
                  ],
                  [
                    0.337,
                    1.059
                  ],
                  [
                    0.346,
                    1.063
                  ],
                  [
                    0.355,
                    1.067
                  ],
                  [
                    0.365,
                    1.07
                  ],
                  [
                    0.374,
                    1.074
                  ],
                  [
                    0.383,
                    1.078
                  ],
                  [
                    0.393,
                    1.082
                  ],
                  [
                    0.402,
                    1.087
                  ],
                  [
                    0.411,
                    1.091
                  ],
                  [
                    0.421,
                    1.095
                  ],
                  [
                    0.43,
                    1.1
                  ],
                  [
                    0.439,
                    1.105
                  ],
                  [
                    0.449,
                    1.11
                  ],
                  [
                    0.458,
                    1.115
                  ],
                  [
                    0.467,
                    1.12
                  ],
                  [
                    0.477,
                    1.125
                  ],
                  [
                    0.486,
                    1.131
                  ],
                  [
                    0.495,
                    1.137
                  ],
                  [
                    0.505,
                    1.142
                  ],
                  [
                    0.514,
                    1.148
                  ],
                  [
                    0.523,
                    1.155
                  ],
                  [
                    0.533,
                    1.161
                  ],
                  [
                    0.542,
                    1.167
                  ],
                  [
                    0.552,
                    1.174
                  ],
                  [
                    0.561,
                    1.181
                  ],
                  [
                    0.57,
                    1.188
                  ],
                  [
                    0.58,
                    1.195
                  ],
                  [
                    0.589,
                    1.203
                  ],
                  [
                    0.598,
                    1.21
                  ],
                  [
                    0.608,
                    1.218
                  ],
                  [
                    0.617,
                    1.226
                  ],
                  [
                    0.626,
                    1.234
                  ],
                  [
                    0.636,
                    1.243
                  ],
                  [
                    0.645,
                    1.251
                  ],
                  [
                    0.654,
                    1.26
                  ],
                  [
                    0.664,
                    1.269
                  ],
                  [
                    0.673,
                    1.279
                  ],
                  [
                    0.682,
                    1.289
                  ],
                  [
                    0.692,
                    1.298
                  ],
                  [
                    0.701,
                    1.309
                  ],
                  [
                    0.71,
                    1.319
                  ],
                  [
                    0.72,
                    1.33
                  ],
                  [
                    0.729,
                    1.341
                  ],
                  [
                    0.738,
                    1.352
                  ],
                  [
                    0.748,
                    1.364
                  ],
                  [
                    0.757,
                    1.376
                  ],
                  [
                    0.766,
                    1.388
                  ],
                  [
                    0.776,
                    1.401
                  ],
                  [
                    0.785,
                    1.414
                  ],
                  [
                    0.795,
                    1.427
                  ],
                  [
                    0.804,
                    1.441
                  ],
                  [
                    0.813,
                    1.455
                  ],
                  [
                    0.823,
                    1.47
                  ],
                  [
                    0.832,
                    1.485
                  ],
                  [
                    0.841,
                    1.5
                  ],
                  [
                    0.851,
                    1.516
                  ],
                  [
                    0.86,
                    1.533
                  ],
                  [
                    0.869,
                    1.55
                  ],
                  [
                    0.879,
                    1.567
                  ],
                  [
                    0.888,
                    1.585
                  ],
                  [
                    0.897,
                    1.603
                  ],
                  [
                    0.907,
                    1.622
                  ],
                  [
                    0.916,
                    1.642
                  ],
                  [
                    0.925,
                    1.662
                  ],
                  [
                    0.935,
                    1.683
                  ],
                  [
                    0.944,
                    1.705
                  ],
                  [
                    0.953,
                    1.727
                  ],
                  [
                    0.963,
                    1.751
                  ],
                  [
                    0.972,
                    1.775
                  ],
                  [
                    0.981,
                    1.799
                  ],
                  [
                    0.991,
                    1.825
                  ],
                  [
                    1,
                    1.851
                  ],
                  [
                    1.01,
                    1.879
                  ],
                  [
                    1.019,
                    1.907
                  ],
                  [
                    1.028,
                    1.937
                  ],
                  [
                    1.038,
                    1.967
                  ],
                  [
                    1.047,
                    1.999
                  ],
                  [
                    1.056,
                    2.032
                  ],
                  [
                    1.066,
                    2.066
                  ],
                  [
                    1.075,
                    2.102
                  ],
                  [
                    1.084,
                    2.139
                  ],
                  [
                    1.094,
                    2.178
                  ],
                  [
                    1.103,
                    2.218
                  ],
                  [
                    1.112,
                    2.26
                  ],
                  [
                    1.122,
                    2.303
                  ],
                  [
                    1.131,
                    2.349
                  ],
                  [
                    1.14,
                    2.397
                  ],
                  [
                    1.15,
                    2.447
                  ],
                  [
                    1.159,
                    2.499
                  ],
                  [
                    1.168,
                    2.554
                  ],
                  [
                    1.178,
                    2.611
                  ],
                  [
                    1.187,
                    2.672
                  ],
                  [
                    1.196,
                    2.735
                  ],
                  [
                    1.206,
                    2.802
                  ],
                  [
                    1.215,
                    2.872
                  ],
                  [
                    1.225,
                    2.946
                  ],
                  [
                    1.234,
                    3.025
                  ],
                  [
                    1.243,
                    3.108
                  ],
                  [
                    1.253,
                    3.196
                  ],
                  [
                    1.262,
                    3.29
                  ],
                  [
                    1.271,
                    3.389
                  ],
                  [
                    1.281,
                    3.495
                  ],
                  [
                    1.29,
                    3.608
                  ],
                  [
                    1.299,
                    3.729
                  ],
                  [
                    1.309,
                    3.859
                  ],
                  [
                    1.318,
                    3.998
                  ]
                ],
                "color": "#64748b",
                "width": 2.5,
                "label": "y=\\sec\\theta",
                "labelAt": [
                  0.5,
                  1.2
                ]
              },
              {
                "points": [
                  [
                    1.833,
                    -3.854
                  ],
                  [
                    1.852,
                    -3.604
                  ],
                  [
                    1.871,
                    -3.385
                  ],
                  [
                    1.889,
                    -3.193
                  ],
                  [
                    1.908,
                    -3.022
                  ],
                  [
                    1.927,
                    -2.87
                  ],
                  [
                    1.945,
                    -2.733
                  ],
                  [
                    1.964,
                    -2.609
                  ],
                  [
                    1.983,
                    -2.497
                  ],
                  [
                    2.001,
                    -2.395
                  ],
                  [
                    2.02,
                    -2.302
                  ],
                  [
                    2.039,
                    -2.217
                  ],
                  [
                    2.058,
                    -2.138
                  ],
                  [
                    2.076,
                    -2.065
                  ],
                  [
                    2.095,
                    -1.998
                  ],
                  [
                    2.114,
                    -1.936
                  ],
                  [
                    2.132,
                    -1.878
                  ],
                  [
                    2.151,
                    -1.824
                  ],
                  [
                    2.17,
                    -1.774
                  ],
                  [
                    2.188,
                    -1.727
                  ],
                  [
                    2.207,
                    -1.683
                  ],
                  [
                    2.226,
                    -1.642
                  ],
                  [
                    2.244,
                    -1.603
                  ],
                  [
                    2.263,
                    -1.567
                  ],
                  [
                    2.282,
                    -1.532
                  ],
                  [
                    2.301,
                    -1.5
                  ],
                  [
                    2.319,
                    -1.47
                  ],
                  [
                    2.338,
                    -1.441
                  ],
                  [
                    2.357,
                    -1.414
                  ],
                  [
                    2.375,
                    -1.388
                  ],
                  [
                    2.394,
                    -1.364
                  ],
                  [
                    2.413,
                    -1.341
                  ],
                  [
                    2.431,
                    -1.319
                  ],
                  [
                    2.45,
                    -1.298
                  ],
                  [
                    2.469,
                    -1.279
                  ],
                  [
                    2.487,
                    -1.26
                  ],
                  [
                    2.506,
                    -1.243
                  ],
                  [
                    2.525,
                    -1.226
                  ],
                  [
                    2.543,
                    -1.21
                  ],
                  [
                    2.562,
                    -1.195
                  ],
                  [
                    2.581,
                    -1.181
                  ],
                  [
                    2.6,
                    -1.167
                  ],
                  [
                    2.618,
                    -1.155
                  ],
                  [
                    2.637,
                    -1.142
                  ],
                  [
                    2.656,
                    -1.131
                  ],
                  [
                    2.674,
                    -1.12
                  ],
                  [
                    2.693,
                    -1.11
                  ],
                  [
                    2.712,
                    -1.1
                  ],
                  [
                    2.73,
                    -1.091
                  ],
                  [
                    2.749,
                    -1.082
                  ],
                  [
                    2.768,
                    -1.074
                  ],
                  [
                    2.786,
                    -1.067
                  ],
                  [
                    2.805,
                    -1.059
                  ],
                  [
                    2.824,
                    -1.053
                  ],
                  [
                    2.842,
                    -1.046
                  ],
                  [
                    2.861,
                    -1.041
                  ],
                  [
                    2.88,
                    -1.035
                  ],
                  [
                    2.899,
                    -1.03
                  ],
                  [
                    2.917,
                    -1.026
                  ],
                  [
                    2.936,
                    -1.022
                  ],
                  [
                    2.955,
                    -1.018
                  ],
                  [
                    2.973,
                    -1.014
                  ],
                  [
                    2.992,
                    -1.011
                  ],
                  [
                    3.011,
                    -1.009
                  ],
                  [
                    3.029,
                    -1.006
                  ],
                  [
                    3.048,
                    -1.004
                  ],
                  [
                    3.067,
                    -1.003
                  ],
                  [
                    3.085,
                    -1.002
                  ],
                  [
                    3.104,
                    -1.001
                  ],
                  [
                    3.123,
                    -1
                  ],
                  [
                    3.141,
                    -1
                  ],
                  [
                    3.16,
                    -1
                  ],
                  [
                    3.179,
                    -1.001
                  ],
                  [
                    3.198,
                    -1.002
                  ],
                  [
                    3.216,
                    -1.003
                  ],
                  [
                    3.235,
                    -1.004
                  ],
                  [
                    3.254,
                    -1.006
                  ],
                  [
                    3.272,
                    -1.009
                  ],
                  [
                    3.291,
                    -1.011
                  ],
                  [
                    3.31,
                    -1.014
                  ],
                  [
                    3.328,
                    -1.018
                  ],
                  [
                    3.347,
                    -1.021
                  ],
                  [
                    3.366,
                    -1.026
                  ],
                  [
                    3.384,
                    -1.03
                  ],
                  [
                    3.403,
                    -1.035
                  ],
                  [
                    3.422,
                    -1.041
                  ],
                  [
                    3.441,
                    -1.046
                  ],
                  [
                    3.459,
                    -1.053
                  ],
                  [
                    3.478,
                    -1.059
                  ],
                  [
                    3.497,
                    -1.066
                  ],
                  [
                    3.515,
                    -1.074
                  ],
                  [
                    3.534,
                    -1.082
                  ],
                  [
                    3.553,
                    -1.091
                  ],
                  [
                    3.571,
                    -1.1
                  ],
                  [
                    3.59,
                    -1.11
                  ],
                  [
                    3.609,
                    -1.12
                  ],
                  [
                    3.627,
                    -1.131
                  ],
                  [
                    3.646,
                    -1.142
                  ],
                  [
                    3.665,
                    -1.154
                  ],
                  [
                    3.683,
                    -1.167
                  ],
                  [
                    3.702,
                    -1.181
                  ],
                  [
                    3.721,
                    -1.195
                  ],
                  [
                    3.74,
                    -1.21
                  ],
                  [
                    3.758,
                    -1.226
                  ],
                  [
                    3.777,
                    -1.242
                  ],
                  [
                    3.796,
                    -1.26
                  ],
                  [
                    3.814,
                    -1.279
                  ],
                  [
                    3.833,
                    -1.298
                  ],
                  [
                    3.852,
                    -1.319
                  ],
                  [
                    3.87,
                    -1.34
                  ],
                  [
                    3.889,
                    -1.363
                  ],
                  [
                    3.908,
                    -1.388
                  ],
                  [
                    3.926,
                    -1.413
                  ],
                  [
                    3.945,
                    -1.441
                  ],
                  [
                    3.964,
                    -1.469
                  ],
                  [
                    3.982,
                    -1.5
                  ],
                  [
                    4.001,
                    -1.532
                  ],
                  [
                    4.02,
                    -1.566
                  ],
                  [
                    4.039,
                    -1.603
                  ],
                  [
                    4.057,
                    -1.641
                  ],
                  [
                    4.076,
                    -1.683
                  ],
                  [
                    4.095,
                    -1.726
                  ],
                  [
                    4.113,
                    -1.773
                  ],
                  [
                    4.132,
                    -1.824
                  ],
                  [
                    4.151,
                    -1.878
                  ],
                  [
                    4.169,
                    -1.935
                  ],
                  [
                    4.188,
                    -1.998
                  ],
                  [
                    4.207,
                    -2.065
                  ],
                  [
                    4.225,
                    -2.137
                  ],
                  [
                    4.244,
                    -2.216
                  ],
                  [
                    4.263,
                    -2.301
                  ],
                  [
                    4.282,
                    -2.394
                  ],
                  [
                    4.3,
                    -2.496
                  ],
                  [
                    4.319,
                    -2.608
                  ],
                  [
                    4.338,
                    -2.732
                  ],
                  [
                    4.356,
                    -2.868
                  ],
                  [
                    4.375,
                    -3.021
                  ],
                  [
                    4.394,
                    -3.191
                  ],
                  [
                    4.412,
                    -3.383
                  ],
                  [
                    4.431,
                    -3.601
                  ],
                  [
                    4.45,
                    -3.851
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              },
              {
                "points": [
                  [
                    4.974,
                    3.861
                  ],
                  [
                    4.984,
                    3.731
                  ],
                  [
                    4.993,
                    3.61
                  ],
                  [
                    5.002,
                    3.497
                  ],
                  [
                    5.012,
                    3.391
                  ],
                  [
                    5.021,
                    3.291
                  ],
                  [
                    5.03,
                    3.198
                  ],
                  [
                    5.04,
                    3.109
                  ],
                  [
                    5.049,
                    3.026
                  ],
                  [
                    5.059,
                    2.948
                  ],
                  [
                    5.068,
                    2.873
                  ],
                  [
                    5.077,
                    2.803
                  ],
                  [
                    5.087,
                    2.736
                  ],
                  [
                    5.096,
                    2.672
                  ],
                  [
                    5.105,
                    2.612
                  ],
                  [
                    5.115,
                    2.555
                  ],
                  [
                    5.124,
                    2.5
                  ],
                  [
                    5.133,
                    2.447
                  ],
                  [
                    5.143,
                    2.397
                  ],
                  [
                    5.152,
                    2.35
                  ],
                  [
                    5.161,
                    2.304
                  ],
                  [
                    5.171,
                    2.26
                  ],
                  [
                    5.18,
                    2.218
                  ],
                  [
                    5.189,
                    2.178
                  ],
                  [
                    5.199,
                    2.139
                  ],
                  [
                    5.208,
                    2.102
                  ],
                  [
                    5.217,
                    2.067
                  ],
                  [
                    5.227,
                    2.032
                  ],
                  [
                    5.236,
                    1.999
                  ],
                  [
                    5.245,
                    1.968
                  ],
                  [
                    5.255,
                    1.937
                  ],
                  [
                    5.264,
                    1.908
                  ],
                  [
                    5.274,
                    1.879
                  ],
                  [
                    5.283,
                    1.852
                  ],
                  [
                    5.292,
                    1.825
                  ],
                  [
                    5.302,
                    1.8
                  ],
                  [
                    5.311,
                    1.775
                  ],
                  [
                    5.32,
                    1.751
                  ],
                  [
                    5.33,
                    1.728
                  ],
                  [
                    5.339,
                    1.705
                  ],
                  [
                    5.348,
                    1.684
                  ],
                  [
                    5.358,
                    1.663
                  ],
                  [
                    5.367,
                    1.642
                  ],
                  [
                    5.376,
                    1.623
                  ],
                  [
                    5.386,
                    1.604
                  ],
                  [
                    5.395,
                    1.585
                  ],
                  [
                    5.404,
                    1.567
                  ],
                  [
                    5.414,
                    1.55
                  ],
                  [
                    5.423,
                    1.533
                  ],
                  [
                    5.432,
                    1.516
                  ],
                  [
                    5.442,
                    1.501
                  ],
                  [
                    5.451,
                    1.485
                  ],
                  [
                    5.461,
                    1.47
                  ],
                  [
                    5.47,
                    1.455
                  ],
                  [
                    5.479,
                    1.441
                  ],
                  [
                    5.489,
                    1.427
                  ],
                  [
                    5.498,
                    1.414
                  ],
                  [
                    5.507,
                    1.401
                  ],
                  [
                    5.517,
                    1.388
                  ],
                  [
                    5.526,
                    1.376
                  ],
                  [
                    5.535,
                    1.364
                  ],
                  [
                    5.545,
                    1.352
                  ],
                  [
                    5.554,
                    1.341
                  ],
                  [
                    5.563,
                    1.33
                  ],
                  [
                    5.573,
                    1.319
                  ],
                  [
                    5.582,
                    1.309
                  ],
                  [
                    5.591,
                    1.299
                  ],
                  [
                    5.601,
                    1.289
                  ],
                  [
                    5.61,
                    1.279
                  ],
                  [
                    5.619,
                    1.27
                  ],
                  [
                    5.629,
                    1.26
                  ],
                  [
                    5.638,
                    1.251
                  ],
                  [
                    5.647,
                    1.243
                  ],
                  [
                    5.657,
                    1.234
                  ],
                  [
                    5.666,
                    1.226
                  ],
                  [
                    5.676,
                    1.218
                  ],
                  [
                    5.685,
                    1.21
                  ],
                  [
                    5.694,
                    1.203
                  ],
                  [
                    5.704,
                    1.195
                  ],
                  [
                    5.713,
                    1.188
                  ],
                  [
                    5.722,
                    1.181
                  ],
                  [
                    5.732,
                    1.174
                  ],
                  [
                    5.741,
                    1.167
                  ],
                  [
                    5.75,
                    1.161
                  ],
                  [
                    5.76,
                    1.155
                  ],
                  [
                    5.769,
                    1.148
                  ],
                  [
                    5.778,
                    1.143
                  ],
                  [
                    5.788,
                    1.137
                  ],
                  [
                    5.797,
                    1.131
                  ],
                  [
                    5.806,
                    1.126
                  ],
                  [
                    5.816,
                    1.12
                  ],
                  [
                    5.825,
                    1.115
                  ],
                  [
                    5.834,
                    1.11
                  ],
                  [
                    5.844,
                    1.105
                  ],
                  [
                    5.853,
                    1.1
                  ],
                  [
                    5.863,
                    1.096
                  ],
                  [
                    5.872,
                    1.091
                  ],
                  [
                    5.881,
                    1.087
                  ],
                  [
                    5.891,
                    1.082
                  ],
                  [
                    5.9,
                    1.078
                  ],
                  [
                    5.909,
                    1.074
                  ],
                  [
                    5.919,
                    1.07
                  ],
                  [
                    5.928,
                    1.067
                  ],
                  [
                    5.937,
                    1.063
                  ],
                  [
                    5.947,
                    1.059
                  ],
                  [
                    5.956,
                    1.056
                  ],
                  [
                    5.965,
                    1.053
                  ],
                  [
                    5.975,
                    1.05
                  ],
                  [
                    5.984,
                    1.046
                  ],
                  [
                    5.993,
                    1.044
                  ],
                  [
                    6.003,
                    1.041
                  ],
                  [
                    6.012,
                    1.038
                  ],
                  [
                    6.021,
                    1.035
                  ],
                  [
                    6.031,
                    1.033
                  ],
                  [
                    6.04,
                    1.03
                  ],
                  [
                    6.049,
                    1.028
                  ],
                  [
                    6.059,
                    1.026
                  ],
                  [
                    6.068,
                    1.024
                  ],
                  [
                    6.078,
                    1.022
                  ],
                  [
                    6.087,
                    1.02
                  ],
                  [
                    6.096,
                    1.018
                  ],
                  [
                    6.106,
                    1.016
                  ],
                  [
                    6.115,
                    1.014
                  ],
                  [
                    6.124,
                    1.013
                  ],
                  [
                    6.134,
                    1.011
                  ],
                  [
                    6.143,
                    1.01
                  ],
                  [
                    6.152,
                    1.009
                  ],
                  [
                    6.162,
                    1.007
                  ],
                  [
                    6.171,
                    1.006
                  ],
                  [
                    6.18,
                    1.005
                  ],
                  [
                    6.19,
                    1.004
                  ],
                  [
                    6.199,
                    1.004
                  ],
                  [
                    6.208,
                    1.003
                  ],
                  [
                    6.218,
                    1.002
                  ],
                  [
                    6.227,
                    1.002
                  ],
                  [
                    6.236,
                    1.001
                  ],
                  [
                    6.246,
                    1.001
                  ],
                  [
                    6.255,
                    1
                  ],
                  [
                    6.265,
                    1
                  ],
                  [
                    6.274,
                    1
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  1.571,
                  -4
                ],
                "to": [
                  1.571,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  4.712,
                  -4
                ],
                "to": [
                  4.712,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  -2
                ],
                "to": [
                  6.283,
                  -2
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=-2",
                "labelAt": [
                  0.503,
                  -1.7
                ]
              }
            ],
            "points": [
              {
                "at": [
                  2.094,
                  -2
                ],
                "label": "\\frac{2\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  4.189,
                  -2
                ],
                "label": "\\frac{4\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{2\\pi}{3}, \\displaystyle\\frac{4\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-035",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 13",
    "difficulty": "Foundation",
    "questionText": "Solve \\(4\\csc\\theta = 8\\) on \\([0, 2\\pi]\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide both sides by 4",
          "workingLatex": "\\csc\\theta = \\frac{8}{4} = 2",
          "explanation": "Dividing 8 by 4 isolates cosec on its own. The result is 2."
        },
        {
          "stepNumber": 2,
          "description": "Check the value is valid",
          "workingLatex": "|\\csc\\theta| = 2 \\geq 1",
          "explanation": "Cosecant always has magnitude at least 1, so the value 2 is reachable. A solution therefore exists."
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine. Rewriting in sine lets us use a normal calculator or known values."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the equation",
          "workingLatex": "\\frac{1}{\\sin\\theta} = 2",
          "explanation": "Replace cosec with one over sine in the equation from step 1. The equation is now in sine."
        },
        {
          "stepNumber": 5,
          "description": "Take reciprocals to find sine",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "One over sin equals 2 means sin equals one half. Remember to invert the right-hand side as well."
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\frac{1}{2}",
          "explanation": "The standard exact value: sine of pi over 6 equals one half. This is the first-quadrant solution."
        },
        {
          "stepNumber": 7,
          "description": "Find the second-quadrant solution",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is also positive in the second quadrant, given by pi minus the reference angle. Forgetting this loses a solution."
        },
        {
          "stepNumber": 8,
          "description": "State all solutions in the interval",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}",
          "explanation": "Both lie in 0 to 2pi. There are no third- or fourth-quadrant solutions because sine is negative there.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0.268,
                    3.772
                  ],
                  [
                    0.287,
                    3.527
                  ],
                  [
                    0.307,
                    3.313
                  ],
                  [
                    0.326,
                    3.124
                  ],
                  [
                    0.345,
                    2.957
                  ],
                  [
                    0.364,
                    2.808
                  ],
                  [
                    0.383,
                    2.674
                  ],
                  [
                    0.402,
                    2.553
                  ],
                  [
                    0.422,
                    2.443
                  ],
                  [
                    0.441,
                    2.344
                  ],
                  [
                    0.46,
                    2.253
                  ],
                  [
                    0.479,
                    2.169
                  ],
                  [
                    0.498,
                    2.092
                  ],
                  [
                    0.517,
                    2.021
                  ],
                  [
                    0.537,
                    1.956
                  ],
                  [
                    0.556,
                    1.895
                  ],
                  [
                    0.575,
                    1.839
                  ],
                  [
                    0.594,
                    1.786
                  ],
                  [
                    0.613,
                    1.737
                  ],
                  [
                    0.632,
                    1.692
                  ],
                  [
                    0.652,
                    1.649
                  ],
                  [
                    0.671,
                    1.609
                  ],
                  [
                    0.69,
                    1.571
                  ],
                  [
                    0.709,
                    1.536
                  ],
                  [
                    0.728,
                    1.502
                  ],
                  [
                    0.747,
                    1.471
                  ],
                  [
                    0.767,
                    1.441
                  ],
                  [
                    0.786,
                    1.414
                  ],
                  [
                    0.805,
                    1.387
                  ],
                  [
                    0.824,
                    1.362
                  ],
                  [
                    0.843,
                    1.339
                  ],
                  [
                    0.862,
                    1.317
                  ],
                  [
                    0.882,
                    1.296
                  ],
                  [
                    0.901,
                    1.276
                  ],
                  [
                    0.92,
                    1.257
                  ],
                  [
                    0.939,
                    1.239
                  ],
                  [
                    0.958,
                    1.222
                  ],
                  [
                    0.977,
                    1.206
                  ],
                  [
                    0.997,
                    1.191
                  ],
                  [
                    1.016,
                    1.177
                  ],
                  [
                    1.035,
                    1.163
                  ],
                  [
                    1.054,
                    1.15
                  ],
                  [
                    1.073,
                    1.138
                  ],
                  [
                    1.092,
                    1.126
                  ],
                  [
                    1.112,
                    1.116
                  ],
                  [
                    1.131,
                    1.105
                  ],
                  [
                    1.15,
                    1.096
                  ],
                  [
                    1.169,
                    1.086
                  ],
                  [
                    1.188,
                    1.078
                  ],
                  [
                    1.207,
                    1.07
                  ],
                  [
                    1.227,
                    1.062
                  ],
                  [
                    1.246,
                    1.055
                  ],
                  [
                    1.265,
                    1.049
                  ],
                  [
                    1.284,
                    1.043
                  ],
                  [
                    1.303,
                    1.037
                  ],
                  [
                    1.322,
                    1.032
                  ],
                  [
                    1.342,
                    1.027
                  ],
                  [
                    1.361,
                    1.022
                  ],
                  [
                    1.38,
                    1.018
                  ],
                  [
                    1.399,
                    1.015
                  ],
                  [
                    1.418,
                    1.012
                  ],
                  [
                    1.437,
                    1.009
                  ],
                  [
                    1.457,
                    1.007
                  ],
                  [
                    1.476,
                    1.005
                  ],
                  [
                    1.495,
                    1.003
                  ],
                  [
                    1.514,
                    1.002
                  ],
                  [
                    1.533,
                    1.001
                  ],
                  [
                    1.552,
                    1
                  ],
                  [
                    1.572,
                    1
                  ],
                  [
                    1.591,
                    1
                  ],
                  [
                    1.61,
                    1.001
                  ],
                  [
                    1.629,
                    1.002
                  ],
                  [
                    1.648,
                    1.003
                  ],
                  [
                    1.667,
                    1.005
                  ],
                  [
                    1.687,
                    1.007
                  ],
                  [
                    1.706,
                    1.009
                  ],
                  [
                    1.725,
                    1.012
                  ],
                  [
                    1.744,
                    1.015
                  ],
                  [
                    1.763,
                    1.019
                  ],
                  [
                    1.782,
                    1.023
                  ],
                  [
                    1.802,
                    1.027
                  ],
                  [
                    1.821,
                    1.032
                  ],
                  [
                    1.84,
                    1.037
                  ],
                  [
                    1.859,
                    1.043
                  ],
                  [
                    1.878,
                    1.049
                  ],
                  [
                    1.897,
                    1.056
                  ],
                  [
                    1.917,
                    1.063
                  ],
                  [
                    1.936,
                    1.071
                  ],
                  [
                    1.955,
                    1.079
                  ],
                  [
                    1.974,
                    1.087
                  ],
                  [
                    1.993,
                    1.096
                  ],
                  [
                    2.012,
                    1.106
                  ],
                  [
                    2.032,
                    1.116
                  ],
                  [
                    2.051,
                    1.127
                  ],
                  [
                    2.07,
                    1.139
                  ],
                  [
                    2.089,
                    1.151
                  ],
                  [
                    2.108,
                    1.164
                  ],
                  [
                    2.127,
                    1.178
                  ],
                  [
                    2.147,
                    1.192
                  ],
                  [
                    2.166,
                    1.208
                  ],
                  [
                    2.185,
                    1.224
                  ],
                  [
                    2.204,
                    1.241
                  ],
                  [
                    2.223,
                    1.259
                  ],
                  [
                    2.242,
                    1.277
                  ],
                  [
                    2.262,
                    1.297
                  ],
                  [
                    2.281,
                    1.319
                  ],
                  [
                    2.3,
                    1.341
                  ],
                  [
                    2.319,
                    1.365
                  ],
                  [
                    2.338,
                    1.39
                  ],
                  [
                    2.357,
                    1.416
                  ],
                  [
                    2.377,
                    1.444
                  ],
                  [
                    2.396,
                    1.474
                  ],
                  [
                    2.415,
                    1.505
                  ],
                  [
                    2.434,
                    1.539
                  ],
                  [
                    2.453,
                    1.574
                  ],
                  [
                    2.472,
                    1.612
                  ],
                  [
                    2.492,
                    1.652
                  ],
                  [
                    2.511,
                    1.695
                  ],
                  [
                    2.53,
                    1.742
                  ],
                  [
                    2.549,
                    1.791
                  ],
                  [
                    2.568,
                    1.844
                  ],
                  [
                    2.587,
                    1.9
                  ],
                  [
                    2.607,
                    1.961
                  ],
                  [
                    2.626,
                    2.027
                  ],
                  [
                    2.645,
                    2.099
                  ],
                  [
                    2.664,
                    2.176
                  ],
                  [
                    2.683,
                    2.26
                  ],
                  [
                    2.702,
                    2.352
                  ],
                  [
                    2.722,
                    2.453
                  ],
                  [
                    2.741,
                    2.563
                  ],
                  [
                    2.76,
                    2.685
                  ],
                  [
                    2.779,
                    2.82
                  ],
                  [
                    2.798,
                    2.971
                  ],
                  [
                    2.817,
                    3.14
                  ],
                  [
                    2.837,
                    3.33
                  ],
                  [
                    2.856,
                    3.547
                  ],
                  [
                    2.875,
                    3.795
                  ]
                ],
                "color": "#64748b",
                "width": 2.5,
                "label": "y=\\csc\\theta",
                "labelAt": [
                  4.7,
                  -1.2
                ]
              },
              {
                "points": [
                  [
                    3.404,
                    -3.851
                  ],
                  [
                    3.423,
                    -3.601
                  ],
                  [
                    3.442,
                    -3.383
                  ],
                  [
                    3.46,
                    -3.191
                  ],
                  [
                    3.479,
                    -3.02
                  ],
                  [
                    3.498,
                    -2.868
                  ],
                  [
                    3.516,
                    -2.731
                  ],
                  [
                    3.535,
                    -2.608
                  ],
                  [
                    3.554,
                    -2.496
                  ],
                  [
                    3.572,
                    -2.394
                  ],
                  [
                    3.591,
                    -2.301
                  ],
                  [
                    3.61,
                    -2.216
                  ],
                  [
                    3.629,
                    -2.137
                  ],
                  [
                    3.647,
                    -2.065
                  ],
                  [
                    3.666,
                    -1.997
                  ],
                  [
                    3.685,
                    -1.935
                  ],
                  [
                    3.703,
                    -1.877
                  ],
                  [
                    3.722,
                    -1.824
                  ],
                  [
                    3.741,
                    -1.773
                  ],
                  [
                    3.759,
                    -1.726
                  ],
                  [
                    3.778,
                    -1.682
                  ],
                  [
                    3.797,
                    -1.641
                  ],
                  [
                    3.815,
                    -1.603
                  ],
                  [
                    3.834,
                    -1.566
                  ],
                  [
                    3.853,
                    -1.532
                  ],
                  [
                    3.872,
                    -1.5
                  ],
                  [
                    3.89,
                    -1.469
                  ],
                  [
                    3.909,
                    -1.441
                  ],
                  [
                    3.928,
                    -1.413
                  ],
                  [
                    3.946,
                    -1.388
                  ],
                  [
                    3.965,
                    -1.363
                  ],
                  [
                    3.984,
                    -1.34
                  ],
                  [
                    4.002,
                    -1.319
                  ],
                  [
                    4.021,
                    -1.298
                  ],
                  [
                    4.04,
                    -1.279
                  ],
                  [
                    4.058,
                    -1.26
                  ],
                  [
                    4.077,
                    -1.242
                  ],
                  [
                    4.096,
                    -1.226
                  ],
                  [
                    4.114,
                    -1.21
                  ],
                  [
                    4.133,
                    -1.195
                  ],
                  [
                    4.152,
                    -1.181
                  ],
                  [
                    4.171,
                    -1.167
                  ],
                  [
                    4.189,
                    -1.154
                  ],
                  [
                    4.208,
                    -1.142
                  ],
                  [
                    4.227,
                    -1.131
                  ],
                  [
                    4.245,
                    -1.12
                  ],
                  [
                    4.264,
                    -1.11
                  ],
                  [
                    4.283,
                    -1.1
                  ],
                  [
                    4.301,
                    -1.091
                  ],
                  [
                    4.32,
                    -1.082
                  ],
                  [
                    4.339,
                    -1.074
                  ],
                  [
                    4.357,
                    -1.066
                  ],
                  [
                    4.376,
                    -1.059
                  ],
                  [
                    4.395,
                    -1.053
                  ],
                  [
                    4.413,
                    -1.046
                  ],
                  [
                    4.432,
                    -1.041
                  ],
                  [
                    4.451,
                    -1.035
                  ],
                  [
                    4.47,
                    -1.03
                  ],
                  [
                    4.488,
                    -1.026
                  ],
                  [
                    4.507,
                    -1.021
                  ],
                  [
                    4.526,
                    -1.018
                  ],
                  [
                    4.544,
                    -1.014
                  ],
                  [
                    4.563,
                    -1.011
                  ],
                  [
                    4.582,
                    -1.009
                  ],
                  [
                    4.6,
                    -1.006
                  ],
                  [
                    4.619,
                    -1.004
                  ],
                  [
                    4.638,
                    -1.003
                  ],
                  [
                    4.656,
                    -1.002
                  ],
                  [
                    4.675,
                    -1.001
                  ],
                  [
                    4.694,
                    -1
                  ],
                  [
                    4.713,
                    -1
                  ],
                  [
                    4.731,
                    -1
                  ],
                  [
                    4.75,
                    -1.001
                  ],
                  [
                    4.769,
                    -1.002
                  ],
                  [
                    4.787,
                    -1.003
                  ],
                  [
                    4.806,
                    -1.004
                  ],
                  [
                    4.825,
                    -1.006
                  ],
                  [
                    4.843,
                    -1.009
                  ],
                  [
                    4.862,
                    -1.011
                  ],
                  [
                    4.881,
                    -1.014
                  ],
                  [
                    4.899,
                    -1.018
                  ],
                  [
                    4.918,
                    -1.022
                  ],
                  [
                    4.937,
                    -1.026
                  ],
                  [
                    4.955,
                    -1.03
                  ],
                  [
                    4.974,
                    -1.035
                  ],
                  [
                    4.993,
                    -1.041
                  ],
                  [
                    5.012,
                    -1.046
                  ],
                  [
                    5.03,
                    -1.053
                  ],
                  [
                    5.049,
                    -1.059
                  ],
                  [
                    5.068,
                    -1.067
                  ],
                  [
                    5.086,
                    -1.074
                  ],
                  [
                    5.105,
                    -1.082
                  ],
                  [
                    5.124,
                    -1.091
                  ],
                  [
                    5.142,
                    -1.1
                  ],
                  [
                    5.161,
                    -1.11
                  ],
                  [
                    5.18,
                    -1.12
                  ],
                  [
                    5.198,
                    -1.131
                  ],
                  [
                    5.217,
                    -1.142
                  ],
                  [
                    5.236,
                    -1.155
                  ],
                  [
                    5.254,
                    -1.167
                  ],
                  [
                    5.273,
                    -1.181
                  ],
                  [
                    5.292,
                    -1.195
                  ],
                  [
                    5.311,
                    -1.21
                  ],
                  [
                    5.329,
                    -1.226
                  ],
                  [
                    5.348,
                    -1.243
                  ],
                  [
                    5.367,
                    -1.26
                  ],
                  [
                    5.385,
                    -1.279
                  ],
                  [
                    5.404,
                    -1.298
                  ],
                  [
                    5.423,
                    -1.319
                  ],
                  [
                    5.441,
                    -1.341
                  ],
                  [
                    5.46,
                    -1.364
                  ],
                  [
                    5.479,
                    -1.388
                  ],
                  [
                    5.497,
                    -1.414
                  ],
                  [
                    5.516,
                    -1.441
                  ],
                  [
                    5.535,
                    -1.47
                  ],
                  [
                    5.553,
                    -1.5
                  ],
                  [
                    5.572,
                    -1.532
                  ],
                  [
                    5.591,
                    -1.567
                  ],
                  [
                    5.61,
                    -1.603
                  ],
                  [
                    5.628,
                    -1.642
                  ],
                  [
                    5.647,
                    -1.683
                  ],
                  [
                    5.666,
                    -1.727
                  ],
                  [
                    5.684,
                    -1.774
                  ],
                  [
                    5.703,
                    -1.824
                  ],
                  [
                    5.722,
                    -1.878
                  ],
                  [
                    5.74,
                    -1.936
                  ],
                  [
                    5.759,
                    -1.998
                  ],
                  [
                    5.778,
                    -2.065
                  ],
                  [
                    5.796,
                    -2.138
                  ],
                  [
                    5.815,
                    -2.217
                  ],
                  [
                    5.834,
                    -2.302
                  ],
                  [
                    5.853,
                    -2.395
                  ],
                  [
                    5.871,
                    -2.497
                  ],
                  [
                    5.89,
                    -2.609
                  ],
                  [
                    5.909,
                    -2.733
                  ],
                  [
                    5.927,
                    -2.87
                  ],
                  [
                    5.946,
                    -3.022
                  ],
                  [
                    5.965,
                    -3.193
                  ],
                  [
                    5.983,
                    -3.386
                  ],
                  [
                    6.002,
                    -3.604
                  ],
                  [
                    6.021,
                    -3.854
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  3.142,
                  -4
                ],
                "to": [
                  3.142,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  6.283,
                  -4
                ],
                "to": [
                  6.283,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  6.283,
                  2
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=2",
                "labelAt": [
                  0.503,
                  2.3
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.524,
                  2
                ],
                "label": "\\frac{\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  2.618,
                  2
                ],
                "label": "\\frac{5\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-036",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 53",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\sec^2\\theta - 3\\sec\\theta + 2 = 0\\) for \\(\\theta \\in [0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the hidden quadratic",
          "workingLatex": "\\sec^2\\theta - 3\\sec\\theta + 2 = 0",
          "explanation": "The equation contains only \\(\\sec\\theta\\) and its square \\(\\sec^2\\theta\\), so it is a quadratic in the single quantity \\(\\sec\\theta\\). A common slip is to expand into sines and cosines too early; keeping it in \\(\\sec\\theta\\) is far cleaner here."
        },
        {
          "stepNumber": 2,
          "description": "Name the variable to substitute",
          "workingLatex": "u = \\sec\\theta",
          "explanation": "Choose a single letter to stand in for the repeated quantity \\(\\sec\\theta\\). This is the standard \"hidden quadratic\" technique."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "u^2 - 3u + 2 = 0",
          "explanation": "Replacing every \\(\\sec\\theta\\) by \\(u\\) (and \\(\\sec^2\\theta\\) by \\(u^2\\)) exposes a plain quadratic. Doing the swap on its own line helps avoid losing the \\(\\theta\\) when factorising."
        },
        {
          "stepNumber": 4,
          "description": "Find the factor pair",
          "workingLatex": "(-1)\\times(-2) = 2,\\quad (-1)+(-2) = -3",
          "explanation": "For \\(u^2-3u+2\\) we need two numbers multiplying to the constant \\(+2\\) and adding to the middle coefficient \\(-3\\). These are \\(-1\\) and \\(-2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(u - 1)(u - 2) = 0",
          "explanation": "Use the pair to write the factors. Check by expanding: \\((u-1)(u-2)=u^2-2u-u+2=u^2-3u+2\\), which matches."
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule",
          "workingLatex": "u - 1 = 0 \\quad\\text{or}\\quad u - 2 = 0",
          "explanation": "A product equals zero only if one of its factors is zero, so set each bracket to zero separately."
        },
        {
          "stepNumber": 7,
          "description": "Read off the two roots",
          "workingLatex": "u = 1 \\quad\\text{or}\\quad u = 2",
          "explanation": "Solving each linear equation gives the two values of \\(u\\)."
        },
        {
          "stepNumber": 8,
          "description": "Translate back to sec",
          "workingLatex": "\\sec\\theta = 1 \\quad\\text{or}\\quad \\sec\\theta = 2",
          "explanation": "Undo the substitution \\(u=\\sec\\theta\\). Both values have \\(|\\sec\\theta|\\ge 1\\), so both are valid and no root is rejected on range grounds."
        },
        {
          "stepNumber": 9,
          "description": "Convert each to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{1} = 1 \\quad\\text{or}\\quad \\cos\\theta = \\frac{1}{2}",
          "explanation": "Since \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\), take reciprocals of both sides. Cosine is easier to work with because we know its exact values and its graph over \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 10,
          "description": "Solve cos = 1",
          "workingLatex": "\\cos\\theta = 1 \\;\\Rightarrow\\; \\theta = 0,\\; 2\\pi",
          "explanation": "Cosine equals 1 at the very ends of the interval. Both \\(0\\) and \\(2\\pi\\) lie in the closed interval \\([0,2\\pi]\\), so keep both."
        },
        {
          "stepNumber": 11,
          "description": "Find the principal value for cos = 1/2",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{3}",
          "explanation": "The inverse cosine of \\(\\displaystyle\\frac12\\) gives the first-quadrant angle \\(\\displaystyle\\frac{\\pi}{3}\\), a standard exact value."
        },
        {
          "stepNumber": 12,
          "description": "Find the second value for cos = 1/2",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant, so the second solution is \\(2\\pi-\\displaystyle\\frac{\\pi}{3}\\). Forgetting this fourth-quadrant solution is the most common error."
        },
        {
          "stepNumber": 13,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0,\\; \\frac{\\pi}{3},\\; \\frac{5\\pi}{3},\\; 2\\pi",
          "explanation": "List every value found, in increasing order, all lying inside \\([0,2\\pi]\\).",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.009,
                    1
                  ],
                  [
                    0.019,
                    1
                  ],
                  [
                    0.028,
                    1
                  ],
                  [
                    0.037,
                    1.001
                  ],
                  [
                    0.047,
                    1.001
                  ],
                  [
                    0.056,
                    1.002
                  ],
                  [
                    0.065,
                    1.002
                  ],
                  [
                    0.075,
                    1.003
                  ],
                  [
                    0.084,
                    1.004
                  ],
                  [
                    0.093,
                    1.004
                  ],
                  [
                    0.103,
                    1.005
                  ],
                  [
                    0.112,
                    1.006
                  ],
                  [
                    0.122,
                    1.007
                  ],
                  [
                    0.131,
                    1.009
                  ],
                  [
                    0.14,
                    1.01
                  ],
                  [
                    0.15,
                    1.011
                  ],
                  [
                    0.159,
                    1.013
                  ],
                  [
                    0.168,
                    1.014
                  ],
                  [
                    0.178,
                    1.016
                  ],
                  [
                    0.187,
                    1.018
                  ],
                  [
                    0.196,
                    1.02
                  ],
                  [
                    0.206,
                    1.022
                  ],
                  [
                    0.215,
                    1.024
                  ],
                  [
                    0.224,
                    1.026
                  ],
                  [
                    0.234,
                    1.028
                  ],
                  [
                    0.243,
                    1.03
                  ],
                  [
                    0.252,
                    1.033
                  ],
                  [
                    0.262,
                    1.035
                  ],
                  [
                    0.271,
                    1.038
                  ],
                  [
                    0.28,
                    1.041
                  ],
                  [
                    0.29,
                    1.044
                  ],
                  [
                    0.299,
                    1.046
                  ],
                  [
                    0.308,
                    1.05
                  ],
                  [
                    0.318,
                    1.053
                  ],
                  [
                    0.327,
                    1.056
                  ],
                  [
                    0.337,
                    1.059
                  ],
                  [
                    0.346,
                    1.063
                  ],
                  [
                    0.355,
                    1.067
                  ],
                  [
                    0.365,
                    1.07
                  ],
                  [
                    0.374,
                    1.074
                  ],
                  [
                    0.383,
                    1.078
                  ],
                  [
                    0.393,
                    1.082
                  ],
                  [
                    0.402,
                    1.087
                  ],
                  [
                    0.411,
                    1.091
                  ],
                  [
                    0.421,
                    1.095
                  ],
                  [
                    0.43,
                    1.1
                  ],
                  [
                    0.439,
                    1.105
                  ],
                  [
                    0.449,
                    1.11
                  ],
                  [
                    0.458,
                    1.115
                  ],
                  [
                    0.467,
                    1.12
                  ],
                  [
                    0.477,
                    1.125
                  ],
                  [
                    0.486,
                    1.131
                  ],
                  [
                    0.495,
                    1.137
                  ],
                  [
                    0.505,
                    1.142
                  ],
                  [
                    0.514,
                    1.148
                  ],
                  [
                    0.523,
                    1.155
                  ],
                  [
                    0.533,
                    1.161
                  ],
                  [
                    0.542,
                    1.167
                  ],
                  [
                    0.552,
                    1.174
                  ],
                  [
                    0.561,
                    1.181
                  ],
                  [
                    0.57,
                    1.188
                  ],
                  [
                    0.58,
                    1.195
                  ],
                  [
                    0.589,
                    1.203
                  ],
                  [
                    0.598,
                    1.21
                  ],
                  [
                    0.608,
                    1.218
                  ],
                  [
                    0.617,
                    1.226
                  ],
                  [
                    0.626,
                    1.234
                  ],
                  [
                    0.636,
                    1.243
                  ],
                  [
                    0.645,
                    1.251
                  ],
                  [
                    0.654,
                    1.26
                  ],
                  [
                    0.664,
                    1.269
                  ],
                  [
                    0.673,
                    1.279
                  ],
                  [
                    0.682,
                    1.289
                  ],
                  [
                    0.692,
                    1.298
                  ],
                  [
                    0.701,
                    1.309
                  ],
                  [
                    0.71,
                    1.319
                  ],
                  [
                    0.72,
                    1.33
                  ],
                  [
                    0.729,
                    1.341
                  ],
                  [
                    0.738,
                    1.352
                  ],
                  [
                    0.748,
                    1.364
                  ],
                  [
                    0.757,
                    1.376
                  ],
                  [
                    0.766,
                    1.388
                  ],
                  [
                    0.776,
                    1.401
                  ],
                  [
                    0.785,
                    1.414
                  ],
                  [
                    0.795,
                    1.427
                  ],
                  [
                    0.804,
                    1.441
                  ],
                  [
                    0.813,
                    1.455
                  ],
                  [
                    0.823,
                    1.47
                  ],
                  [
                    0.832,
                    1.485
                  ],
                  [
                    0.841,
                    1.5
                  ],
                  [
                    0.851,
                    1.516
                  ],
                  [
                    0.86,
                    1.533
                  ],
                  [
                    0.869,
                    1.55
                  ],
                  [
                    0.879,
                    1.567
                  ],
                  [
                    0.888,
                    1.585
                  ],
                  [
                    0.897,
                    1.603
                  ],
                  [
                    0.907,
                    1.622
                  ],
                  [
                    0.916,
                    1.642
                  ],
                  [
                    0.925,
                    1.662
                  ],
                  [
                    0.935,
                    1.683
                  ],
                  [
                    0.944,
                    1.705
                  ],
                  [
                    0.953,
                    1.727
                  ],
                  [
                    0.963,
                    1.751
                  ],
                  [
                    0.972,
                    1.775
                  ],
                  [
                    0.981,
                    1.799
                  ],
                  [
                    0.991,
                    1.825
                  ],
                  [
                    1,
                    1.851
                  ],
                  [
                    1.01,
                    1.879
                  ],
                  [
                    1.019,
                    1.907
                  ],
                  [
                    1.028,
                    1.937
                  ],
                  [
                    1.038,
                    1.967
                  ],
                  [
                    1.047,
                    1.999
                  ],
                  [
                    1.056,
                    2.032
                  ],
                  [
                    1.066,
                    2.066
                  ],
                  [
                    1.075,
                    2.102
                  ],
                  [
                    1.084,
                    2.139
                  ],
                  [
                    1.094,
                    2.178
                  ],
                  [
                    1.103,
                    2.218
                  ],
                  [
                    1.112,
                    2.26
                  ],
                  [
                    1.122,
                    2.303
                  ],
                  [
                    1.131,
                    2.349
                  ],
                  [
                    1.14,
                    2.397
                  ],
                  [
                    1.15,
                    2.447
                  ],
                  [
                    1.159,
                    2.499
                  ],
                  [
                    1.168,
                    2.554
                  ],
                  [
                    1.178,
                    2.611
                  ],
                  [
                    1.187,
                    2.672
                  ],
                  [
                    1.196,
                    2.735
                  ],
                  [
                    1.206,
                    2.802
                  ],
                  [
                    1.215,
                    2.872
                  ],
                  [
                    1.225,
                    2.946
                  ],
                  [
                    1.234,
                    3.025
                  ],
                  [
                    1.243,
                    3.108
                  ],
                  [
                    1.253,
                    3.196
                  ],
                  [
                    1.262,
                    3.29
                  ],
                  [
                    1.271,
                    3.389
                  ],
                  [
                    1.281,
                    3.495
                  ],
                  [
                    1.29,
                    3.608
                  ],
                  [
                    1.299,
                    3.729
                  ],
                  [
                    1.309,
                    3.859
                  ],
                  [
                    1.318,
                    3.998
                  ]
                ],
                "color": "#64748b",
                "width": 2.5,
                "label": "y=\\sec\\theta",
                "labelAt": [
                  1,
                  2.6
                ]
              },
              {
                "points": [
                  [
                    1.833,
                    -3.854
                  ],
                  [
                    1.852,
                    -3.604
                  ],
                  [
                    1.871,
                    -3.385
                  ],
                  [
                    1.889,
                    -3.193
                  ],
                  [
                    1.908,
                    -3.022
                  ],
                  [
                    1.927,
                    -2.87
                  ],
                  [
                    1.945,
                    -2.733
                  ],
                  [
                    1.964,
                    -2.609
                  ],
                  [
                    1.983,
                    -2.497
                  ],
                  [
                    2.001,
                    -2.395
                  ],
                  [
                    2.02,
                    -2.302
                  ],
                  [
                    2.039,
                    -2.217
                  ],
                  [
                    2.058,
                    -2.138
                  ],
                  [
                    2.076,
                    -2.065
                  ],
                  [
                    2.095,
                    -1.998
                  ],
                  [
                    2.114,
                    -1.936
                  ],
                  [
                    2.132,
                    -1.878
                  ],
                  [
                    2.151,
                    -1.824
                  ],
                  [
                    2.17,
                    -1.774
                  ],
                  [
                    2.188,
                    -1.727
                  ],
                  [
                    2.207,
                    -1.683
                  ],
                  [
                    2.226,
                    -1.642
                  ],
                  [
                    2.244,
                    -1.603
                  ],
                  [
                    2.263,
                    -1.567
                  ],
                  [
                    2.282,
                    -1.532
                  ],
                  [
                    2.301,
                    -1.5
                  ],
                  [
                    2.319,
                    -1.47
                  ],
                  [
                    2.338,
                    -1.441
                  ],
                  [
                    2.357,
                    -1.414
                  ],
                  [
                    2.375,
                    -1.388
                  ],
                  [
                    2.394,
                    -1.364
                  ],
                  [
                    2.413,
                    -1.341
                  ],
                  [
                    2.431,
                    -1.319
                  ],
                  [
                    2.45,
                    -1.298
                  ],
                  [
                    2.469,
                    -1.279
                  ],
                  [
                    2.487,
                    -1.26
                  ],
                  [
                    2.506,
                    -1.243
                  ],
                  [
                    2.525,
                    -1.226
                  ],
                  [
                    2.543,
                    -1.21
                  ],
                  [
                    2.562,
                    -1.195
                  ],
                  [
                    2.581,
                    -1.181
                  ],
                  [
                    2.6,
                    -1.167
                  ],
                  [
                    2.618,
                    -1.155
                  ],
                  [
                    2.637,
                    -1.142
                  ],
                  [
                    2.656,
                    -1.131
                  ],
                  [
                    2.674,
                    -1.12
                  ],
                  [
                    2.693,
                    -1.11
                  ],
                  [
                    2.712,
                    -1.1
                  ],
                  [
                    2.73,
                    -1.091
                  ],
                  [
                    2.749,
                    -1.082
                  ],
                  [
                    2.768,
                    -1.074
                  ],
                  [
                    2.786,
                    -1.067
                  ],
                  [
                    2.805,
                    -1.059
                  ],
                  [
                    2.824,
                    -1.053
                  ],
                  [
                    2.842,
                    -1.046
                  ],
                  [
                    2.861,
                    -1.041
                  ],
                  [
                    2.88,
                    -1.035
                  ],
                  [
                    2.899,
                    -1.03
                  ],
                  [
                    2.917,
                    -1.026
                  ],
                  [
                    2.936,
                    -1.022
                  ],
                  [
                    2.955,
                    -1.018
                  ],
                  [
                    2.973,
                    -1.014
                  ],
                  [
                    2.992,
                    -1.011
                  ],
                  [
                    3.011,
                    -1.009
                  ],
                  [
                    3.029,
                    -1.006
                  ],
                  [
                    3.048,
                    -1.004
                  ],
                  [
                    3.067,
                    -1.003
                  ],
                  [
                    3.085,
                    -1.002
                  ],
                  [
                    3.104,
                    -1.001
                  ],
                  [
                    3.123,
                    -1
                  ],
                  [
                    3.141,
                    -1
                  ],
                  [
                    3.16,
                    -1
                  ],
                  [
                    3.179,
                    -1.001
                  ],
                  [
                    3.198,
                    -1.002
                  ],
                  [
                    3.216,
                    -1.003
                  ],
                  [
                    3.235,
                    -1.004
                  ],
                  [
                    3.254,
                    -1.006
                  ],
                  [
                    3.272,
                    -1.009
                  ],
                  [
                    3.291,
                    -1.011
                  ],
                  [
                    3.31,
                    -1.014
                  ],
                  [
                    3.328,
                    -1.018
                  ],
                  [
                    3.347,
                    -1.021
                  ],
                  [
                    3.366,
                    -1.026
                  ],
                  [
                    3.384,
                    -1.03
                  ],
                  [
                    3.403,
                    -1.035
                  ],
                  [
                    3.422,
                    -1.041
                  ],
                  [
                    3.441,
                    -1.046
                  ],
                  [
                    3.459,
                    -1.053
                  ],
                  [
                    3.478,
                    -1.059
                  ],
                  [
                    3.497,
                    -1.066
                  ],
                  [
                    3.515,
                    -1.074
                  ],
                  [
                    3.534,
                    -1.082
                  ],
                  [
                    3.553,
                    -1.091
                  ],
                  [
                    3.571,
                    -1.1
                  ],
                  [
                    3.59,
                    -1.11
                  ],
                  [
                    3.609,
                    -1.12
                  ],
                  [
                    3.627,
                    -1.131
                  ],
                  [
                    3.646,
                    -1.142
                  ],
                  [
                    3.665,
                    -1.154
                  ],
                  [
                    3.683,
                    -1.167
                  ],
                  [
                    3.702,
                    -1.181
                  ],
                  [
                    3.721,
                    -1.195
                  ],
                  [
                    3.74,
                    -1.21
                  ],
                  [
                    3.758,
                    -1.226
                  ],
                  [
                    3.777,
                    -1.242
                  ],
                  [
                    3.796,
                    -1.26
                  ],
                  [
                    3.814,
                    -1.279
                  ],
                  [
                    3.833,
                    -1.298
                  ],
                  [
                    3.852,
                    -1.319
                  ],
                  [
                    3.87,
                    -1.34
                  ],
                  [
                    3.889,
                    -1.363
                  ],
                  [
                    3.908,
                    -1.388
                  ],
                  [
                    3.926,
                    -1.413
                  ],
                  [
                    3.945,
                    -1.441
                  ],
                  [
                    3.964,
                    -1.469
                  ],
                  [
                    3.982,
                    -1.5
                  ],
                  [
                    4.001,
                    -1.532
                  ],
                  [
                    4.02,
                    -1.566
                  ],
                  [
                    4.039,
                    -1.603
                  ],
                  [
                    4.057,
                    -1.641
                  ],
                  [
                    4.076,
                    -1.683
                  ],
                  [
                    4.095,
                    -1.726
                  ],
                  [
                    4.113,
                    -1.773
                  ],
                  [
                    4.132,
                    -1.824
                  ],
                  [
                    4.151,
                    -1.878
                  ],
                  [
                    4.169,
                    -1.935
                  ],
                  [
                    4.188,
                    -1.998
                  ],
                  [
                    4.207,
                    -2.065
                  ],
                  [
                    4.225,
                    -2.137
                  ],
                  [
                    4.244,
                    -2.216
                  ],
                  [
                    4.263,
                    -2.301
                  ],
                  [
                    4.282,
                    -2.394
                  ],
                  [
                    4.3,
                    -2.496
                  ],
                  [
                    4.319,
                    -2.608
                  ],
                  [
                    4.338,
                    -2.732
                  ],
                  [
                    4.356,
                    -2.868
                  ],
                  [
                    4.375,
                    -3.021
                  ],
                  [
                    4.394,
                    -3.191
                  ],
                  [
                    4.412,
                    -3.383
                  ],
                  [
                    4.431,
                    -3.601
                  ],
                  [
                    4.45,
                    -3.851
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              },
              {
                "points": [
                  [
                    4.974,
                    3.861
                  ],
                  [
                    4.984,
                    3.731
                  ],
                  [
                    4.993,
                    3.61
                  ],
                  [
                    5.002,
                    3.497
                  ],
                  [
                    5.012,
                    3.391
                  ],
                  [
                    5.021,
                    3.291
                  ],
                  [
                    5.03,
                    3.198
                  ],
                  [
                    5.04,
                    3.109
                  ],
                  [
                    5.049,
                    3.026
                  ],
                  [
                    5.059,
                    2.948
                  ],
                  [
                    5.068,
                    2.873
                  ],
                  [
                    5.077,
                    2.803
                  ],
                  [
                    5.087,
                    2.736
                  ],
                  [
                    5.096,
                    2.672
                  ],
                  [
                    5.105,
                    2.612
                  ],
                  [
                    5.115,
                    2.555
                  ],
                  [
                    5.124,
                    2.5
                  ],
                  [
                    5.133,
                    2.447
                  ],
                  [
                    5.143,
                    2.397
                  ],
                  [
                    5.152,
                    2.35
                  ],
                  [
                    5.161,
                    2.304
                  ],
                  [
                    5.171,
                    2.26
                  ],
                  [
                    5.18,
                    2.218
                  ],
                  [
                    5.189,
                    2.178
                  ],
                  [
                    5.199,
                    2.139
                  ],
                  [
                    5.208,
                    2.102
                  ],
                  [
                    5.217,
                    2.067
                  ],
                  [
                    5.227,
                    2.032
                  ],
                  [
                    5.236,
                    1.999
                  ],
                  [
                    5.245,
                    1.968
                  ],
                  [
                    5.255,
                    1.937
                  ],
                  [
                    5.264,
                    1.908
                  ],
                  [
                    5.274,
                    1.879
                  ],
                  [
                    5.283,
                    1.852
                  ],
                  [
                    5.292,
                    1.825
                  ],
                  [
                    5.302,
                    1.8
                  ],
                  [
                    5.311,
                    1.775
                  ],
                  [
                    5.32,
                    1.751
                  ],
                  [
                    5.33,
                    1.728
                  ],
                  [
                    5.339,
                    1.705
                  ],
                  [
                    5.348,
                    1.684
                  ],
                  [
                    5.358,
                    1.663
                  ],
                  [
                    5.367,
                    1.642
                  ],
                  [
                    5.376,
                    1.623
                  ],
                  [
                    5.386,
                    1.604
                  ],
                  [
                    5.395,
                    1.585
                  ],
                  [
                    5.404,
                    1.567
                  ],
                  [
                    5.414,
                    1.55
                  ],
                  [
                    5.423,
                    1.533
                  ],
                  [
                    5.432,
                    1.516
                  ],
                  [
                    5.442,
                    1.501
                  ],
                  [
                    5.451,
                    1.485
                  ],
                  [
                    5.461,
                    1.47
                  ],
                  [
                    5.47,
                    1.455
                  ],
                  [
                    5.479,
                    1.441
                  ],
                  [
                    5.489,
                    1.427
                  ],
                  [
                    5.498,
                    1.414
                  ],
                  [
                    5.507,
                    1.401
                  ],
                  [
                    5.517,
                    1.388
                  ],
                  [
                    5.526,
                    1.376
                  ],
                  [
                    5.535,
                    1.364
                  ],
                  [
                    5.545,
                    1.352
                  ],
                  [
                    5.554,
                    1.341
                  ],
                  [
                    5.563,
                    1.33
                  ],
                  [
                    5.573,
                    1.319
                  ],
                  [
                    5.582,
                    1.309
                  ],
                  [
                    5.591,
                    1.299
                  ],
                  [
                    5.601,
                    1.289
                  ],
                  [
                    5.61,
                    1.279
                  ],
                  [
                    5.619,
                    1.27
                  ],
                  [
                    5.629,
                    1.26
                  ],
                  [
                    5.638,
                    1.251
                  ],
                  [
                    5.647,
                    1.243
                  ],
                  [
                    5.657,
                    1.234
                  ],
                  [
                    5.666,
                    1.226
                  ],
                  [
                    5.676,
                    1.218
                  ],
                  [
                    5.685,
                    1.21
                  ],
                  [
                    5.694,
                    1.203
                  ],
                  [
                    5.704,
                    1.195
                  ],
                  [
                    5.713,
                    1.188
                  ],
                  [
                    5.722,
                    1.181
                  ],
                  [
                    5.732,
                    1.174
                  ],
                  [
                    5.741,
                    1.167
                  ],
                  [
                    5.75,
                    1.161
                  ],
                  [
                    5.76,
                    1.155
                  ],
                  [
                    5.769,
                    1.148
                  ],
                  [
                    5.778,
                    1.143
                  ],
                  [
                    5.788,
                    1.137
                  ],
                  [
                    5.797,
                    1.131
                  ],
                  [
                    5.806,
                    1.126
                  ],
                  [
                    5.816,
                    1.12
                  ],
                  [
                    5.825,
                    1.115
                  ],
                  [
                    5.834,
                    1.11
                  ],
                  [
                    5.844,
                    1.105
                  ],
                  [
                    5.853,
                    1.1
                  ],
                  [
                    5.863,
                    1.096
                  ],
                  [
                    5.872,
                    1.091
                  ],
                  [
                    5.881,
                    1.087
                  ],
                  [
                    5.891,
                    1.082
                  ],
                  [
                    5.9,
                    1.078
                  ],
                  [
                    5.909,
                    1.074
                  ],
                  [
                    5.919,
                    1.07
                  ],
                  [
                    5.928,
                    1.067
                  ],
                  [
                    5.937,
                    1.063
                  ],
                  [
                    5.947,
                    1.059
                  ],
                  [
                    5.956,
                    1.056
                  ],
                  [
                    5.965,
                    1.053
                  ],
                  [
                    5.975,
                    1.05
                  ],
                  [
                    5.984,
                    1.046
                  ],
                  [
                    5.993,
                    1.044
                  ],
                  [
                    6.003,
                    1.041
                  ],
                  [
                    6.012,
                    1.038
                  ],
                  [
                    6.021,
                    1.035
                  ],
                  [
                    6.031,
                    1.033
                  ],
                  [
                    6.04,
                    1.03
                  ],
                  [
                    6.049,
                    1.028
                  ],
                  [
                    6.059,
                    1.026
                  ],
                  [
                    6.068,
                    1.024
                  ],
                  [
                    6.078,
                    1.022
                  ],
                  [
                    6.087,
                    1.02
                  ],
                  [
                    6.096,
                    1.018
                  ],
                  [
                    6.106,
                    1.016
                  ],
                  [
                    6.115,
                    1.014
                  ],
                  [
                    6.124,
                    1.013
                  ],
                  [
                    6.134,
                    1.011
                  ],
                  [
                    6.143,
                    1.01
                  ],
                  [
                    6.152,
                    1.009
                  ],
                  [
                    6.162,
                    1.007
                  ],
                  [
                    6.171,
                    1.006
                  ],
                  [
                    6.18,
                    1.005
                  ],
                  [
                    6.19,
                    1.004
                  ],
                  [
                    6.199,
                    1.004
                  ],
                  [
                    6.208,
                    1.003
                  ],
                  [
                    6.218,
                    1.002
                  ],
                  [
                    6.227,
                    1.002
                  ],
                  [
                    6.236,
                    1.001
                  ],
                  [
                    6.246,
                    1.001
                  ],
                  [
                    6.255,
                    1
                  ],
                  [
                    6.265,
                    1
                  ],
                  [
                    6.274,
                    1
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  1.571,
                  -4
                ],
                "to": [
                  1.571,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  4.712,
                  -4
                ],
                "to": [
                  4.712,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  6.283,
                  2
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=2",
                "labelAt": [
                  0.503,
                  2.3
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0,
                  1
                ],
                "label": "0",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  1.047,
                  2
                ],
                "label": "\\frac{\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.236,
                  2
                ],
                "label": "\\frac{5\\pi}{3}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  6.283,
                  1
                ],
                "label": "2\\pi",
                "color": "#dc2626",
                "r": 3.5
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
    "id": "y2tf4-037",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 54",
    "difficulty": "Challenge",
    "questionText": "Solve \\(2\\csc^2\\theta - \\csc\\theta - 1 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the quadratic in cosec",
          "workingLatex": "2\\csc^2\\theta - \\csc\\theta - 1 = 0",
          "explanation": "Every term involves \\(\\csc\\theta\\) or its square, so treat \\(\\csc\\theta\\) as the variable of a quadratic. Resist converting to \\(\\sin\\theta\\) yet, as that would create fractions."
        },
        {
          "stepNumber": 2,
          "description": "Name the variable to substitute",
          "workingLatex": "u = \\csc\\theta",
          "explanation": "Let a single letter \\(u\\) stand for the repeated quantity \\(\\csc\\theta\\). This makes the quadratic structure plain."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "2u^2 - u - 1 = 0",
          "explanation": "Replacing \\(\\csc\\theta\\) by \\(u\\) and \\(\\csc^2\\theta\\) by \\(u^2\\) gives the standard quadratic \\(2u^2-u-1=0\\)."
        },
        {
          "stepNumber": 4,
          "description": "Split the middle term",
          "workingLatex": "2u^2 - 2u + u - 1 = 0",
          "explanation": "To factorise \\(2u^2-u-1\\), find two numbers multiplying to \\(2\\times(-1)=-2\\) and adding to \\(-1\\): these are \\(-2\\) and \\(+1\\). Split the \\(-u\\) accordingly."
        },
        {
          "stepNumber": 5,
          "description": "Factorise by grouping",
          "workingLatex": "2u(u - 1) + 1(u - 1) = 0",
          "explanation": "Group the first two and last two terms and take out common factors. Both groups now share the bracket \\((u-1)\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write as a product",
          "workingLatex": "(2u + 1)(u - 1) = 0",
          "explanation": "Factor out the common \\((u-1)\\). Check: expanding \\((2u+1)(u-1)=2u^2-2u+u-1=2u^2-u-1\\), which matches."
        },
        {
          "stepNumber": 7,
          "description": "Apply the zero-product rule",
          "workingLatex": "2u + 1 = 0 \\quad\\text{or}\\quad u - 1 = 0",
          "explanation": "A product is zero only when one factor is zero, so set each bracket to zero."
        },
        {
          "stepNumber": 8,
          "description": "Read off the two roots",
          "workingLatex": "u = -\\frac{1}{2} \\quad\\text{or}\\quad u = 1",
          "explanation": "Solving each linear equation gives the two values of \\(u\\)."
        },
        {
          "stepNumber": 9,
          "description": "Translate back to cosec",
          "workingLatex": "\\csc\\theta = -\\frac{1}{2} \\quad\\text{or}\\quad \\csc\\theta = 1",
          "explanation": "Undo the substitution \\(u=\\csc\\theta\\) to return to the original quantity."
        },
        {
          "stepNumber": 10,
          "description": "State the validity range of cosec",
          "workingLatex": "|\\csc\\theta| \\ge 1",
          "explanation": "Because \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\) and \\(|\\sin\\theta|\\le 1\\), the reciprocal always has magnitude at least 1. This is the key validity fact for cosec."
        },
        {
          "stepNumber": 11,
          "description": "Reject the out-of-range root",
          "workingLatex": "\\left|-\\frac{1}{2}\\right| = \\frac{1}{2} < 1 \\;\\Rightarrow\\; \\text{rejected}",
          "explanation": "The value \\(-\\displaystyle\\frac12\\) has magnitude less than 1, which breaks \\(|\\csc\\theta|\\ge1\\), so it yields no solutions."
        },
        {
          "stepNumber": 12,
          "description": "Confirm rejection via sine",
          "workingLatex": "\\csc\\theta = -\\frac{1}{2} \\;\\Rightarrow\\; \\sin\\theta = -2",
          "explanation": "Taking reciprocals gives \\(\\sin\\theta=-2\\), impossible since sine is bounded by \\([-1,1]\\). This is the same rejection seen from the sine side."
        },
        {
          "stepNumber": 13,
          "description": "Convert the valid root to sine",
          "workingLatex": "\\csc\\theta = 1 \\;\\Rightarrow\\; \\sin\\theta = 1",
          "explanation": "Reciprocate \\(\\csc\\theta=1\\) to get \\(\\sin\\theta=1\\), which is an attainable value of sine."
        },
        {
          "stepNumber": 14,
          "description": "Solve sin = 1",
          "workingLatex": "\\sin\\theta = 1 \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{2}",
          "explanation": "Sine reaches its maximum of 1 only at \\(\\displaystyle\\frac{\\pi}{2}\\) within \\([0,2\\pi]\\). There is just this one solution, so do not look for a second."
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-038",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 33",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\cot^2\\theta = 3\\) on \\([0, 2\\pi]\\).",
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
          "description": "Take the square root",
          "workingLatex": "\\cot\\theta = \\pm\\sqrt{3}",
          "explanation": "Square-rooting both sides must keep both signs, since both \\(\\left(+\\sqrt3\\right)^2\\) and \\(\\left(-\\sqrt3\\right)^2\\) equal 3. Dropping the negative root is the classic mistake and loses half the solutions."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite using tangent",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\cot\\theta} = \\pm\\frac{1}{\\sqrt{3}}",
          "explanation": "Since \\(\\cot\\theta=\\displaystyle\\frac{1}{\\tan\\theta}\\), reciprocating turns this into a tangent equation, whose solutions are easier to place on the standard angles."
        },
        {
          "stepNumber": 3,
          "description": "Principal value for positive tan",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt3} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{6}",
          "explanation": "The inverse tangent of \\(\\displaystyle\\frac{1}{\\sqrt3}\\) is the standard angle \\(\\displaystyle\\frac{\\pi}{6}\\) in the first quadrant."
        },
        {
          "stepNumber": 4,
          "description": "Second value for positive tan",
          "workingLatex": "\\theta = \\frac{\\pi}{6} + \\pi = \\frac{7\\pi}{6}",
          "explanation": "Tangent has period \\(\\pi\\), so add \\(\\pi\\) to the principal value to reach the next solution within \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 5,
          "description": "First value for negative tan",
          "workingLatex": "\\tan\\theta = -\\frac{1}{\\sqrt3} \\;\\Rightarrow\\; \\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "A negative tangent occurs in the second quadrant; using the reference angle \\(\\displaystyle\\frac{\\pi}{6}\\) gives \\(\\pi-\\displaystyle\\frac{\\pi}{6}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Second value for negative tan",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}",
          "explanation": "Tangent is also negative in the fourth quadrant; using the same reference angle gives \\(2\\pi-\\displaystyle\\frac{\\pi}{6}\\). Equivalently this is the period \\(\\pi\\) added to \\(\\displaystyle\\frac{5\\pi}{6}\\)."
        },
        {
          "stepNumber": 7,
          "description": "List all solutions in order",
          "workingLatex": "\\theta = \\frac{\\pi}{6},\\; \\frac{5\\pi}{6},\\; \\frac{7\\pi}{6},\\; \\frac{11\\pi}{6}",
          "explanation": "All four values lie in \\([0,2\\pi]\\). Squaring at the start is why we expect four solutions, not two.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0.249,
                    3.93
                  ],
                  [
                    0.268,
                    3.637
                  ],
                  [
                    0.287,
                    3.382
                  ],
                  [
                    0.307,
                    3.158
                  ],
                  [
                    0.326,
                    2.96
                  ],
                  [
                    0.345,
                    2.783
                  ],
                  [
                    0.364,
                    2.624
                  ],
                  [
                    0.383,
                    2.48
                  ],
                  [
                    0.402,
                    2.349
                  ],
                  [
                    0.422,
                    2.229
                  ],
                  [
                    0.441,
                    2.12
                  ],
                  [
                    0.46,
                    2.018
                  ],
                  [
                    0.479,
                    1.925
                  ],
                  [
                    0.498,
                    1.838
                  ],
                  [
                    0.517,
                    1.757
                  ],
                  [
                    0.537,
                    1.681
                  ],
                  [
                    0.556,
                    1.61
                  ],
                  [
                    0.575,
                    1.543
                  ],
                  [
                    0.594,
                    1.48
                  ],
                  [
                    0.613,
                    1.421
                  ],
                  [
                    0.632,
                    1.364
                  ],
                  [
                    0.652,
                    1.311
                  ],
                  [
                    0.671,
                    1.26
                  ],
                  [
                    0.69,
                    1.212
                  ],
                  [
                    0.709,
                    1.165
                  ],
                  [
                    0.728,
                    1.121
                  ],
                  [
                    0.747,
                    1.079
                  ],
                  [
                    0.767,
                    1.038
                  ],
                  [
                    0.786,
                    0.999
                  ],
                  [
                    0.805,
                    0.962
                  ],
                  [
                    0.824,
                    0.925
                  ],
                  [
                    0.843,
                    0.89
                  ],
                  [
                    0.862,
                    0.857
                  ],
                  [
                    0.882,
                    0.824
                  ],
                  [
                    0.901,
                    0.792
                  ],
                  [
                    0.92,
                    0.761
                  ],
                  [
                    0.939,
                    0.732
                  ],
                  [
                    0.958,
                    0.703
                  ],
                  [
                    0.977,
                    0.674
                  ],
                  [
                    0.997,
                    0.647
                  ],
                  [
                    1.016,
                    0.62
                  ],
                  [
                    1.035,
                    0.594
                  ],
                  [
                    1.054,
                    0.568
                  ],
                  [
                    1.073,
                    0.543
                  ],
                  [
                    1.092,
                    0.518
                  ],
                  [
                    1.112,
                    0.494
                  ],
                  [
                    1.131,
                    0.471
                  ],
                  [
                    1.15,
                    0.448
                  ],
                  [
                    1.169,
                    0.425
                  ],
                  [
                    1.188,
                    0.402
                  ],
                  [
                    1.207,
                    0.38
                  ],
                  [
                    1.227,
                    0.358
                  ],
                  [
                    1.246,
                    0.337
                  ],
                  [
                    1.265,
                    0.316
                  ],
                  [
                    1.284,
                    0.295
                  ],
                  [
                    1.303,
                    0.274
                  ],
                  [
                    1.322,
                    0.254
                  ],
                  [
                    1.342,
                    0.233
                  ],
                  [
                    1.361,
                    0.213
                  ],
                  [
                    1.38,
                    0.193
                  ],
                  [
                    1.399,
                    0.173
                  ],
                  [
                    1.418,
                    0.154
                  ],
                  [
                    1.437,
                    0.134
                  ],
                  [
                    1.457,
                    0.115
                  ],
                  [
                    1.476,
                    0.095
                  ],
                  [
                    1.495,
                    0.076
                  ],
                  [
                    1.514,
                    0.057
                  ],
                  [
                    1.533,
                    0.038
                  ],
                  [
                    1.552,
                    0.018
                  ],
                  [
                    1.572,
                    -0.001
                  ],
                  [
                    1.591,
                    -0.02
                  ],
                  [
                    1.61,
                    -0.039
                  ],
                  [
                    1.629,
                    -0.058
                  ],
                  [
                    1.648,
                    -0.078
                  ],
                  [
                    1.667,
                    -0.097
                  ],
                  [
                    1.687,
                    -0.116
                  ],
                  [
                    1.706,
                    -0.136
                  ],
                  [
                    1.725,
                    -0.155
                  ],
                  [
                    1.744,
                    -0.175
                  ],
                  [
                    1.763,
                    -0.195
                  ],
                  [
                    1.782,
                    -0.215
                  ],
                  [
                    1.802,
                    -0.235
                  ],
                  [
                    1.821,
                    -0.255
                  ],
                  [
                    1.84,
                    -0.276
                  ],
                  [
                    1.859,
                    -0.297
                  ],
                  [
                    1.878,
                    -0.318
                  ],
                  [
                    1.897,
                    -0.339
                  ],
                  [
                    1.917,
                    -0.36
                  ],
                  [
                    1.936,
                    -0.382
                  ],
                  [
                    1.955,
                    -0.404
                  ],
                  [
                    1.974,
                    -0.427
                  ],
                  [
                    1.993,
                    -0.45
                  ],
                  [
                    2.012,
                    -0.473
                  ],
                  [
                    2.032,
                    -0.496
                  ],
                  [
                    2.051,
                    -0.521
                  ],
                  [
                    2.07,
                    -0.545
                  ],
                  [
                    2.089,
                    -0.57
                  ],
                  [
                    2.108,
                    -0.596
                  ],
                  [
                    2.127,
                    -0.622
                  ],
                  [
                    2.147,
                    -0.649
                  ],
                  [
                    2.166,
                    -0.677
                  ],
                  [
                    2.185,
                    -0.705
                  ],
                  [
                    2.204,
                    -0.734
                  ],
                  [
                    2.223,
                    -0.764
                  ],
                  [
                    2.242,
                    -0.795
                  ],
                  [
                    2.262,
                    -0.827
                  ],
                  [
                    2.281,
                    -0.86
                  ],
                  [
                    2.3,
                    -0.893
                  ],
                  [
                    2.319,
                    -0.928
                  ],
                  [
                    2.338,
                    -0.965
                  ],
                  [
                    2.357,
                    -1.003
                  ],
                  [
                    2.377,
                    -1.042
                  ],
                  [
                    2.396,
                    -1.082
                  ],
                  [
                    2.415,
                    -1.125
                  ],
                  [
                    2.434,
                    -1.169
                  ],
                  [
                    2.453,
                    -1.216
                  ],
                  [
                    2.472,
                    -1.264
                  ],
                  [
                    2.492,
                    -1.315
                  ],
                  [
                    2.511,
                    -1.369
                  ],
                  [
                    2.53,
                    -1.426
                  ],
                  [
                    2.549,
                    -1.486
                  ],
                  [
                    2.568,
                    -1.549
                  ],
                  [
                    2.587,
                    -1.616
                  ],
                  [
                    2.607,
                    -1.687
                  ],
                  [
                    2.626,
                    -1.764
                  ],
                  [
                    2.645,
                    -1.845
                  ],
                  [
                    2.664,
                    -1.933
                  ],
                  [
                    2.683,
                    -2.027
                  ],
                  [
                    2.702,
                    -2.129
                  ],
                  [
                    2.722,
                    -2.239
                  ],
                  [
                    2.741,
                    -2.36
                  ],
                  [
                    2.76,
                    -2.492
                  ],
                  [
                    2.779,
                    -2.637
                  ],
                  [
                    2.798,
                    -2.797
                  ],
                  [
                    2.817,
                    -2.976
                  ],
                  [
                    2.837,
                    -3.177
                  ],
                  [
                    2.856,
                    -3.403
                  ],
                  [
                    2.875,
                    -3.661
                  ],
                  [
                    2.894,
                    -3.958
                  ]
                ],
                "color": "#64748b",
                "width": 2.5,
                "label": "y=\\cot\\theta",
                "labelAt": [
                  0.4,
                  2.5
                ]
              },
              {
                "points": [
                  [
                    3.404,
                    3.719
                  ],
                  [
                    3.423,
                    3.46
                  ],
                  [
                    3.442,
                    3.232
                  ],
                  [
                    3.46,
                    3.03
                  ],
                  [
                    3.479,
                    2.85
                  ],
                  [
                    3.498,
                    2.688
                  ],
                  [
                    3.516,
                    2.542
                  ],
                  [
                    3.535,
                    2.409
                  ],
                  [
                    3.554,
                    2.287
                  ],
                  [
                    3.572,
                    2.175
                  ],
                  [
                    3.591,
                    2.072
                  ],
                  [
                    3.61,
                    1.977
                  ],
                  [
                    3.629,
                    1.889
                  ],
                  [
                    3.647,
                    1.806
                  ],
                  [
                    3.666,
                    1.729
                  ],
                  [
                    3.685,
                    1.657
                  ],
                  [
                    3.703,
                    1.589
                  ],
                  [
                    3.722,
                    1.525
                  ],
                  [
                    3.741,
                    1.465
                  ],
                  [
                    3.759,
                    1.407
                  ],
                  [
                    3.778,
                    1.353
                  ],
                  [
                    3.797,
                    1.301
                  ],
                  [
                    3.815,
                    1.252
                  ],
                  [
                    3.834,
                    1.205
                  ],
                  [
                    3.853,
                    1.161
                  ],
                  [
                    3.872,
                    1.118
                  ],
                  [
                    3.89,
                    1.076
                  ],
                  [
                    3.909,
                    1.037
                  ],
                  [
                    3.928,
                    0.999
                  ],
                  [
                    3.946,
                    0.962
                  ],
                  [
                    3.965,
                    0.927
                  ],
                  [
                    3.984,
                    0.893
                  ],
                  [
                    4.002,
                    0.86
                  ],
                  [
                    4.021,
                    0.828
                  ],
                  [
                    4.04,
                    0.797
                  ],
                  [
                    4.058,
                    0.767
                  ],
                  [
                    4.077,
                    0.737
                  ],
                  [
                    4.096,
                    0.709
                  ],
                  [
                    4.114,
                    0.681
                  ],
                  [
                    4.133,
                    0.654
                  ],
                  [
                    4.152,
                    0.628
                  ],
                  [
                    4.171,
                    0.602
                  ],
                  [
                    4.189,
                    0.577
                  ],
                  [
                    4.208,
                    0.552
                  ],
                  [
                    4.227,
                    0.528
                  ],
                  [
                    4.245,
                    0.504
                  ],
                  [
                    4.264,
                    0.481
                  ],
                  [
                    4.283,
                    0.458
                  ],
                  [
                    4.301,
                    0.436
                  ],
                  [
                    4.32,
                    0.414
                  ],
                  [
                    4.339,
                    0.392
                  ],
                  [
                    4.357,
                    0.371
                  ],
                  [
                    4.376,
                    0.35
                  ],
                  [
                    4.395,
                    0.329
                  ],
                  [
                    4.413,
                    0.308
                  ],
                  [
                    4.432,
                    0.288
                  ],
                  [
                    4.451,
                    0.268
                  ],
                  [
                    4.47,
                    0.248
                  ],
                  [
                    4.488,
                    0.228
                  ],
                  [
                    4.507,
                    0.208
                  ],
                  [
                    4.526,
                    0.189
                  ],
                  [
                    4.544,
                    0.17
                  ],
                  [
                    4.563,
                    0.151
                  ],
                  [
                    4.582,
                    0.131
                  ],
                  [
                    4.6,
                    0.112
                  ],
                  [
                    4.619,
                    0.094
                  ],
                  [
                    4.638,
                    0.075
                  ],
                  [
                    4.656,
                    0.056
                  ],
                  [
                    4.675,
                    0.037
                  ],
                  [
                    4.694,
                    0.019
                  ],
                  [
                    4.713,
                    0
                  ],
                  [
                    4.731,
                    -0.019
                  ],
                  [
                    4.75,
                    -0.038
                  ],
                  [
                    4.769,
                    -0.056
                  ],
                  [
                    4.787,
                    -0.075
                  ],
                  [
                    4.806,
                    -0.094
                  ],
                  [
                    4.825,
                    -0.113
                  ],
                  [
                    4.843,
                    -0.132
                  ],
                  [
                    4.862,
                    -0.151
                  ],
                  [
                    4.881,
                    -0.17
                  ],
                  [
                    4.899,
                    -0.189
                  ],
                  [
                    4.918,
                    -0.209
                  ],
                  [
                    4.937,
                    -0.228
                  ],
                  [
                    4.955,
                    -0.248
                  ],
                  [
                    4.974,
                    -0.268
                  ],
                  [
                    4.993,
                    -0.288
                  ],
                  [
                    5.012,
                    -0.308
                  ],
                  [
                    5.03,
                    -0.329
                  ],
                  [
                    5.049,
                    -0.35
                  ],
                  [
                    5.068,
                    -0.371
                  ],
                  [
                    5.086,
                    -0.392
                  ],
                  [
                    5.105,
                    -0.414
                  ],
                  [
                    5.124,
                    -0.436
                  ],
                  [
                    5.142,
                    -0.459
                  ],
                  [
                    5.161,
                    -0.481
                  ],
                  [
                    5.18,
                    -0.505
                  ],
                  [
                    5.198,
                    -0.528
                  ],
                  [
                    5.217,
                    -0.552
                  ],
                  [
                    5.236,
                    -0.577
                  ],
                  [
                    5.254,
                    -0.602
                  ],
                  [
                    5.273,
                    -0.628
                  ],
                  [
                    5.292,
                    -0.654
                  ],
                  [
                    5.311,
                    -0.681
                  ],
                  [
                    5.329,
                    -0.709
                  ],
                  [
                    5.348,
                    -0.738
                  ],
                  [
                    5.367,
                    -0.767
                  ],
                  [
                    5.385,
                    -0.797
                  ],
                  [
                    5.404,
                    -0.828
                  ],
                  [
                    5.423,
                    -0.86
                  ],
                  [
                    5.441,
                    -0.893
                  ],
                  [
                    5.46,
                    -0.927
                  ],
                  [
                    5.479,
                    -0.963
                  ],
                  [
                    5.497,
                    -0.999
                  ],
                  [
                    5.516,
                    -1.037
                  ],
                  [
                    5.535,
                    -1.077
                  ],
                  [
                    5.553,
                    -1.118
                  ],
                  [
                    5.572,
                    -1.161
                  ],
                  [
                    5.591,
                    -1.206
                  ],
                  [
                    5.61,
                    -1.253
                  ],
                  [
                    5.628,
                    -1.302
                  ],
                  [
                    5.647,
                    -1.354
                  ],
                  [
                    5.666,
                    -1.408
                  ],
                  [
                    5.684,
                    -1.465
                  ],
                  [
                    5.703,
                    -1.526
                  ],
                  [
                    5.722,
                    -1.59
                  ],
                  [
                    5.74,
                    -1.658
                  ],
                  [
                    5.759,
                    -1.73
                  ],
                  [
                    5.778,
                    -1.807
                  ],
                  [
                    5.796,
                    -1.89
                  ],
                  [
                    5.815,
                    -1.978
                  ],
                  [
                    5.834,
                    -2.074
                  ],
                  [
                    5.853,
                    -2.177
                  ],
                  [
                    5.871,
                    -2.288
                  ],
                  [
                    5.89,
                    -2.41
                  ],
                  [
                    5.909,
                    -2.543
                  ],
                  [
                    5.927,
                    -2.69
                  ],
                  [
                    5.946,
                    -2.852
                  ],
                  [
                    5.965,
                    -3.032
                  ],
                  [
                    5.983,
                    -3.234
                  ],
                  [
                    6.002,
                    -3.462
                  ],
                  [
                    6.021,
                    -3.722
                  ]
                ],
                "color": "#64748b",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  3.142,
                  -4
                ],
                "to": [
                  3.142,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  6.283,
                  -4
                ],
                "to": [
                  6.283,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  1.732
                ],
                "to": [
                  6.283,
                  1.732
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=\\sqrt3",
                "labelAt": [
                  0.503,
                  2.032
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.524,
                  1.732
                ],
                "label": "\\frac{\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  2.618,
                  -1.732
                ],
                "label": "\\frac{5\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  3.665,
                  1.732
                ],
                "label": "\\frac{7\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.76,
                  -1.732
                ],
                "label": "\\frac{11\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
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
    "id": "y2tf4-039",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 55",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\tan^2\\theta + \\sec\\theta = 1\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "We want everything in a single trig function. The identity \\(1+\\tan^2\\theta=\\sec^2\\theta\\) links the two functions in the equation."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity for tan-squared",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtract 1 from both sides so \\(\\tan^2\\theta\\) is expressed purely in terms of \\(\\sec\\theta\\), ready to substitute."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation",
          "workingLatex": "\\left(\\sec^2\\theta - 1\\right) + \\sec\\theta = 1",
          "explanation": "Replace \\(\\tan^2\\theta\\) in the original equation. A common slip is to use \\(\\tan^2\\theta=\\sec^2\\theta+1\\) with the wrong sign, so double-check the \\(-1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Move the constant across",
          "workingLatex": "\\sec^2\\theta + \\sec\\theta - 1 - 1 = 0",
          "explanation": "Bring the \\(1\\) on the right to the left side, turning it into \\(-1\\), so the equation equals zero."
        },
        {
          "stepNumber": 5,
          "description": "Simplify to standard form",
          "workingLatex": "\\sec^2\\theta + \\sec\\theta - 2 = 0",
          "explanation": "Combine the constants \\(-1-1=-2\\). This is now a quadratic in \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Find the factor pair",
          "workingLatex": "(+2)\\times(-1) = -2,\\quad (+2)+(-1) = +1",
          "explanation": "We need two numbers multiplying to the constant \\(-2\\) and adding to the middle coefficient \\(+1\\): these are \\(+2\\) and \\(-1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(\\sec\\theta - 1)(\\sec\\theta + 2) = 0",
          "explanation": "Use the pair to write the brackets. Check: \\(\\sec^2\\theta+2\\sec\\theta-\\sec\\theta-2=\\sec^2\\theta+\\sec\\theta-2\\), which matches."
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule",
          "workingLatex": "\\sec\\theta - 1 = 0 \\quad\\text{or}\\quad \\sec\\theta + 2 = 0",
          "explanation": "Set each factor to zero, since a product is zero only when a factor is zero."
        },
        {
          "stepNumber": 9,
          "description": "Read off the roots",
          "workingLatex": "\\sec\\theta = 1 \\quad\\text{or}\\quad \\sec\\theta = -2",
          "explanation": "Solving each linear equation gives the two values. Both satisfy \\(|\\sec\\theta|\\ge1\\), so neither is rejected on range grounds."
        },
        {
          "stepNumber": 10,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = 1 \\quad\\text{or}\\quad \\cos\\theta = -\\frac{1}{2}",
          "explanation": "Reciprocate each, using \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\): \\(\\sec\\theta=1\\Rightarrow\\cos\\theta=1\\); \\(\\sec\\theta=-2\\Rightarrow\\cos\\theta=-\\displaystyle\\frac12\\)."
        },
        {
          "stepNumber": 11,
          "description": "Solve cos = 1",
          "workingLatex": "\\cos\\theta = 1 \\;\\Rightarrow\\; \\theta = 0,\\; 2\\pi",
          "explanation": "Cosine equals 1 at both ends of the closed interval \\([0,2\\pi]\\), so keep both."
        },
        {
          "stepNumber": 12,
          "description": "Reference angle for cos = -1/2",
          "workingLatex": "\\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}",
          "explanation": "The reference (acute) angle whose cosine has magnitude \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{3}\\). We use this to locate the actual solutions."
        },
        {
          "stepNumber": 13,
          "description": "Second-quadrant solution",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}",
          "explanation": "Cosine is negative in the second quadrant, giving \\(\\pi\\) minus the reference angle."
        },
        {
          "stepNumber": 14,
          "description": "Third-quadrant solution",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}",
          "explanation": "Cosine is also negative in the third quadrant, giving \\(\\pi\\) plus the reference angle. Missing one of these two quadrants is the usual error."
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0,\\; \\frac{2\\pi}{3},\\; \\frac{4\\pi}{3},\\; 2\\pi",
          "explanation": "All four lie in \\([0,2\\pi]\\). List them in increasing order."
        }
      ],
      "finalAnswer": "\\(\\theta = 0, \\displaystyle\\frac{2\\pi}{3}, \\displaystyle\\frac{4\\pi}{3}, 2\\pi\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-040",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 56",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\cot^2\\theta + 3\\csc\\theta + 3 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "To reduce to a single function we use the identity \\(1+\\cot^2\\theta=\\csc^2\\theta\\), which links cot and cosec."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity for cot-squared",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "Subtract 1 from both sides so \\(\\cot^2\\theta\\) is written purely in terms of \\(\\csc\\theta\\), ready to substitute."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation",
          "workingLatex": "\\left(\\csc^2\\theta - 1\\right) + 3\\csc\\theta + 3 = 0",
          "explanation": "Replace \\(\\cot^2\\theta\\) so everything is in \\(\\csc\\theta\\). Watch the sign: it is \\(\\csc^2\\theta-1\\), not \\(+1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Combine the constants",
          "workingLatex": "\\csc^2\\theta + 3\\csc\\theta + (-1 + 3) = 0",
          "explanation": "Gather the loose numbers \\(-1\\) and \\(+3\\) before simplifying, to keep the arithmetic visible."
        },
        {
          "stepNumber": 5,
          "description": "Simplify to standard form",
          "workingLatex": "\\csc^2\\theta + 3\\csc\\theta + 2 = 0",
          "explanation": "Since \\(-1+3=+2\\), the equation becomes a quadratic in \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Find the factor pair",
          "workingLatex": "(+1)\\times(+2) = 2,\\quad (+1)+(+2) = 3",
          "explanation": "We need two numbers multiplying to the constant \\(+2\\) and adding to the middle coefficient \\(+3\\): these are \\(+1\\) and \\(+2\\)."
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(\\csc\\theta + 1)(\\csc\\theta + 2) = 0",
          "explanation": "Use the pair to write the brackets. Check: \\(\\csc^2\\theta+2\\csc\\theta+\\csc\\theta+2=\\csc^2\\theta+3\\csc\\theta+2\\), which matches."
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule",
          "workingLatex": "\\csc\\theta + 1 = 0 \\quad\\text{or}\\quad \\csc\\theta + 2 = 0",
          "explanation": "Set each factor to zero, since a product is zero only when one factor is zero."
        },
        {
          "stepNumber": 9,
          "description": "Read off the roots",
          "workingLatex": "\\csc\\theta = -1 \\quad\\text{or}\\quad \\csc\\theta = -2",
          "explanation": "Solving each linear equation gives the two values. Both satisfy \\(|\\csc\\theta|\\ge1\\), so neither is rejected on range grounds."
        },
        {
          "stepNumber": 10,
          "description": "Convert to sine",
          "workingLatex": "\\sin\\theta = -1 \\quad\\text{or}\\quad \\sin\\theta = -\\frac{1}{2}",
          "explanation": "Reciprocate each, using \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\): \\(\\csc\\theta=-1\\Rightarrow\\sin\\theta=-1\\); \\(\\csc\\theta=-2\\Rightarrow\\sin\\theta=-\\displaystyle\\frac12\\). Both are attainable values of sine."
        },
        {
          "stepNumber": 11,
          "description": "Solve sin = -1",
          "workingLatex": "\\sin\\theta = -1 \\;\\Rightarrow\\; \\theta = \\frac{3\\pi}{2}",
          "explanation": "Sine reaches its minimum of \\(-1\\) only at \\(\\displaystyle\\frac{3\\pi}{2}\\) in \\([0,2\\pi]\\); there is a single solution here."
        },
        {
          "stepNumber": 12,
          "description": "Reference angle for sin = -1/2",
          "workingLatex": "\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "The reference (acute) angle whose sine has magnitude \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{6}\\). We use it to place the negative-sine solutions."
        },
        {
          "stepNumber": 13,
          "description": "Third-quadrant solution",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}",
          "explanation": "Sine is negative in the third quadrant, giving \\(\\pi\\) plus the reference angle."
        },
        {
          "stepNumber": 14,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}",
          "explanation": "Sine is also negative in the fourth quadrant, giving \\(2\\pi\\) minus the reference angle. Forgetting this fourth-quadrant value is the common slip."
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = \\frac{7\\pi}{6},\\; \\frac{3\\pi}{2},\\; \\frac{11\\pi}{6}",
          "explanation": "List in increasing order; all three lie in \\([0,2\\pi]\\).",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.039,
                    0.039
                  ],
                  [
                    0.079,
                    0.078
                  ],
                  [
                    0.118,
                    0.118
                  ],
                  [
                    0.157,
                    0.156
                  ],
                  [
                    0.196,
                    0.195
                  ],
                  [
                    0.236,
                    0.233
                  ],
                  [
                    0.275,
                    0.271
                  ],
                  [
                    0.314,
                    0.309
                  ],
                  [
                    0.353,
                    0.346
                  ],
                  [
                    0.393,
                    0.383
                  ],
                  [
                    0.432,
                    0.419
                  ],
                  [
                    0.471,
                    0.454
                  ],
                  [
                    0.511,
                    0.489
                  ],
                  [
                    0.55,
                    0.522
                  ],
                  [
                    0.589,
                    0.556
                  ],
                  [
                    0.628,
                    0.588
                  ],
                  [
                    0.668,
                    0.619
                  ],
                  [
                    0.707,
                    0.649
                  ],
                  [
                    0.746,
                    0.679
                  ],
                  [
                    0.785,
                    0.707
                  ],
                  [
                    0.825,
                    0.734
                  ],
                  [
                    0.864,
                    0.76
                  ],
                  [
                    0.903,
                    0.785
                  ],
                  [
                    0.942,
                    0.809
                  ],
                  [
                    0.982,
                    0.831
                  ],
                  [
                    1.021,
                    0.853
                  ],
                  [
                    1.06,
                    0.872
                  ],
                  [
                    1.1,
                    0.891
                  ],
                  [
                    1.139,
                    0.908
                  ],
                  [
                    1.178,
                    0.924
                  ],
                  [
                    1.217,
                    0.938
                  ],
                  [
                    1.257,
                    0.951
                  ],
                  [
                    1.296,
                    0.962
                  ],
                  [
                    1.335,
                    0.972
                  ],
                  [
                    1.374,
                    0.981
                  ],
                  [
                    1.414,
                    0.988
                  ],
                  [
                    1.453,
                    0.993
                  ],
                  [
                    1.492,
                    0.997
                  ],
                  [
                    1.532,
                    0.999
                  ],
                  [
                    1.571,
                    1
                  ],
                  [
                    1.61,
                    0.999
                  ],
                  [
                    1.649,
                    0.997
                  ],
                  [
                    1.689,
                    0.993
                  ],
                  [
                    1.728,
                    0.988
                  ],
                  [
                    1.767,
                    0.981
                  ],
                  [
                    1.806,
                    0.972
                  ],
                  [
                    1.846,
                    0.962
                  ],
                  [
                    1.885,
                    0.951
                  ],
                  [
                    1.924,
                    0.938
                  ],
                  [
                    1.964,
                    0.924
                  ],
                  [
                    2.003,
                    0.908
                  ],
                  [
                    2.042,
                    0.891
                  ],
                  [
                    2.081,
                    0.872
                  ],
                  [
                    2.121,
                    0.853
                  ],
                  [
                    2.16,
                    0.831
                  ],
                  [
                    2.199,
                    0.809
                  ],
                  [
                    2.238,
                    0.785
                  ],
                  [
                    2.278,
                    0.76
                  ],
                  [
                    2.317,
                    0.734
                  ],
                  [
                    2.356,
                    0.707
                  ],
                  [
                    2.395,
                    0.679
                  ],
                  [
                    2.435,
                    0.649
                  ],
                  [
                    2.474,
                    0.619
                  ],
                  [
                    2.513,
                    0.588
                  ],
                  [
                    2.553,
                    0.556
                  ],
                  [
                    2.592,
                    0.522
                  ],
                  [
                    2.631,
                    0.489
                  ],
                  [
                    2.67,
                    0.454
                  ],
                  [
                    2.71,
                    0.419
                  ],
                  [
                    2.749,
                    0.383
                  ],
                  [
                    2.788,
                    0.346
                  ],
                  [
                    2.827,
                    0.309
                  ],
                  [
                    2.867,
                    0.271
                  ],
                  [
                    2.906,
                    0.233
                  ],
                  [
                    2.945,
                    0.195
                  ],
                  [
                    2.985,
                    0.156
                  ],
                  [
                    3.024,
                    0.118
                  ],
                  [
                    3.063,
                    0.078
                  ],
                  [
                    3.102,
                    0.039
                  ],
                  [
                    3.142,
                    0
                  ],
                  [
                    3.181,
                    -0.039
                  ],
                  [
                    3.22,
                    -0.078
                  ],
                  [
                    3.259,
                    -0.118
                  ],
                  [
                    3.299,
                    -0.156
                  ],
                  [
                    3.338,
                    -0.195
                  ],
                  [
                    3.377,
                    -0.233
                  ],
                  [
                    3.416,
                    -0.271
                  ],
                  [
                    3.456,
                    -0.309
                  ],
                  [
                    3.495,
                    -0.346
                  ],
                  [
                    3.534,
                    -0.383
                  ],
                  [
                    3.574,
                    -0.419
                  ],
                  [
                    3.613,
                    -0.454
                  ],
                  [
                    3.652,
                    -0.489
                  ],
                  [
                    3.691,
                    -0.523
                  ],
                  [
                    3.731,
                    -0.556
                  ],
                  [
                    3.77,
                    -0.588
                  ],
                  [
                    3.809,
                    -0.619
                  ],
                  [
                    3.848,
                    -0.649
                  ],
                  [
                    3.888,
                    -0.679
                  ],
                  [
                    3.927,
                    -0.707
                  ],
                  [
                    3.966,
                    -0.734
                  ],
                  [
                    4.006,
                    -0.76
                  ],
                  [
                    4.045,
                    -0.785
                  ],
                  [
                    4.084,
                    -0.809
                  ],
                  [
                    4.123,
                    -0.831
                  ],
                  [
                    4.163,
                    -0.853
                  ],
                  [
                    4.202,
                    -0.873
                  ],
                  [
                    4.241,
                    -0.891
                  ],
                  [
                    4.28,
                    -0.908
                  ],
                  [
                    4.32,
                    -0.924
                  ],
                  [
                    4.359,
                    -0.938
                  ],
                  [
                    4.398,
                    -0.951
                  ],
                  [
                    4.438,
                    -0.962
                  ],
                  [
                    4.477,
                    -0.972
                  ],
                  [
                    4.516,
                    -0.981
                  ],
                  [
                    4.555,
                    -0.988
                  ],
                  [
                    4.595,
                    -0.993
                  ],
                  [
                    4.634,
                    -0.997
                  ],
                  [
                    4.673,
                    -0.999
                  ],
                  [
                    4.712,
                    -1
                  ],
                  [
                    4.752,
                    -0.999
                  ],
                  [
                    4.791,
                    -0.997
                  ],
                  [
                    4.83,
                    -0.993
                  ],
                  [
                    4.869,
                    -0.988
                  ],
                  [
                    4.909,
                    -0.981
                  ],
                  [
                    4.948,
                    -0.972
                  ],
                  [
                    4.987,
                    -0.962
                  ],
                  [
                    5.027,
                    -0.951
                  ],
                  [
                    5.066,
                    -0.938
                  ],
                  [
                    5.105,
                    -0.924
                  ],
                  [
                    5.144,
                    -0.908
                  ],
                  [
                    5.184,
                    -0.891
                  ],
                  [
                    5.223,
                    -0.872
                  ],
                  [
                    5.262,
                    -0.853
                  ],
                  [
                    5.301,
                    -0.831
                  ],
                  [
                    5.341,
                    -0.809
                  ],
                  [
                    5.38,
                    -0.785
                  ],
                  [
                    5.419,
                    -0.76
                  ],
                  [
                    5.459,
                    -0.734
                  ],
                  [
                    5.498,
                    -0.707
                  ],
                  [
                    5.537,
                    -0.679
                  ],
                  [
                    5.576,
                    -0.649
                  ],
                  [
                    5.616,
                    -0.619
                  ],
                  [
                    5.655,
                    -0.588
                  ],
                  [
                    5.694,
                    -0.556
                  ],
                  [
                    5.733,
                    -0.522
                  ],
                  [
                    5.773,
                    -0.489
                  ],
                  [
                    5.812,
                    -0.454
                  ],
                  [
                    5.851,
                    -0.419
                  ],
                  [
                    5.891,
                    -0.383
                  ],
                  [
                    5.93,
                    -0.346
                  ],
                  [
                    5.969,
                    -0.309
                  ],
                  [
                    6.008,
                    -0.271
                  ],
                  [
                    6.048,
                    -0.233
                  ],
                  [
                    6.087,
                    -0.195
                  ],
                  [
                    6.126,
                    -0.156
                  ],
                  [
                    6.165,
                    -0.118
                  ],
                  [
                    6.205,
                    -0.078
                  ],
                  [
                    6.244,
                    -0.039
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\sin\\theta",
                "labelAt": [
                  0.6,
                  0.9
                ]
              }
            ],
            "lines": [],
            "points": [
              {
                "at": [
                  3.665,
                  -0.5
                ],
                "label": "\\frac{7\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  4.712,
                  -1
                ],
                "label": "\\frac{3\\pi}{2}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.76,
                  -0.5
                ],
                "label": "\\frac{11\\pi}{6}",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{7\\pi}{6}, \\displaystyle\\frac{3\\pi}{2}, \\displaystyle\\frac{11\\pi}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-041",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 34",
    "difficulty": "Standard",
    "questionText": "Solve \\(3\\tan^2\\theta - \\sec^2\\theta = 1\\) on \\([0, 2\\pi]\\).",
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
          "description": "Identify the mixed functions",
          "workingLatex": "3\\tan^2\\theta - \\sec^2\\theta = 1",
          "explanation": "The equation contains both \\(\\tan\\) and \\(\\sec\\), so we cannot read off solutions directly. We must first rewrite it in terms of a single trig function."
        },
        {
          "stepNumber": 2,
          "description": "Decide which function to keep",
          "workingLatex": "\\text{keep } \\tan\\theta, \\text{ replace } \\sec^2\\theta",
          "explanation": "There are two \\(\\tan\\) terms and only one \\(\\sec\\) term, so it is least work to convert \\(\\sec^2\\theta\\) into \\(\\tan\\). This leaves a quadratic purely in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\). A common slip is writing \\(\\sec^2\\theta = \\tan^2\\theta - 1\\); the \\(+1\\) is essential."
        },
        {
          "stepNumber": 4,
          "description": "Substitute for sec squared",
          "workingLatex": "3\\tan^2\\theta - \\left(1 + \\tan^2\\theta\\right) = 1",
          "explanation": "Replace \\(\\sec^2\\theta\\) with \\(1 + \\tan^2\\theta\\). Keep the bracket so that the minus sign in front is applied to BOTH terms inside."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the negative sign",
          "workingLatex": "3\\tan^2\\theta - 1 - \\tan^2\\theta = 1",
          "explanation": "Multiplying out, \\(-(1 + \\tan^2\\theta) = -1 - \\tan^2\\theta\\). Forgetting to negate the \\(\\tan^2\\theta\\) term is the most common error here."
        },
        {
          "stepNumber": 6,
          "description": "Group the tan-squared terms",
          "workingLatex": "\\left(3\\tan^2\\theta - \\tan^2\\theta\\right) - 1 = 1",
          "explanation": "Bring the two \\(\\tan^2\\theta\\) terms together so they can be combined. The constant \\(-1\\) is left untouched for now."
        },
        {
          "stepNumber": 7,
          "description": "Combine the tan-squared terms",
          "workingLatex": "2\\tan^2\\theta - 1 = 1",
          "explanation": "Since \\(3\\tan^2\\theta - \\tan^2\\theta = 2\\tan^2\\theta\\), the left side simplifies. The equation is now a quadratic in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Add the constant to both sides",
          "workingLatex": "2\\tan^2\\theta = 1 + 1",
          "explanation": "Add \\(1\\) to each side to start isolating the \\(\\tan^2\\theta\\) term. Keep the right side unsimplified for one line so the move is clear."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the right-hand side",
          "workingLatex": "2\\tan^2\\theta = 2",
          "explanation": "Adding \\(1 + 1\\) gives \\(2\\). The constant has now been moved fully across."
        },
        {
          "stepNumber": 10,
          "description": "Divide to isolate tan squared",
          "workingLatex": "\\tan^2\\theta = 1",
          "explanation": "Divide both sides by \\(2\\). We now have the simplest possible quadratic form in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Take the square root of both sides",
          "workingLatex": "\\tan\\theta = \\pm 1",
          "explanation": "Taking a square root gives BOTH a positive and a negative root. Dropping the negative root would lose half the solutions."
        },
        {
          "stepNumber": 12,
          "description": "Find the base angle",
          "workingLatex": "\\tan^{-1}(1) = \\frac{\\pi}{4}",
          "explanation": "Ignoring sign, the acute angle whose tangent is \\(1\\) is \\(\\displaystyle\\frac{\\pi}{4}\\). This base angle is reused for both signs."
        },
        {
          "stepNumber": 13,
          "description": "Solve the positive case",
          "workingLatex": "\\tan\\theta = 1 \\Rightarrow \\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}",
          "explanation": "\\(\\tan\\) is positive in quadrants 1 and 3. The first-quadrant value is \\(\\displaystyle\\frac{\\pi}{4}\\); add \\(\\pi\\) to reach the third-quadrant value \\(\\displaystyle\\frac{5\\pi}{4}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Solve the negative case",
          "workingLatex": "\\tan\\theta = -1 \\Rightarrow \\theta = \\frac{3\\pi}{4}, \\frac{7\\pi}{4}",
          "explanation": "\\(\\tan\\) is negative in quadrants 2 and 4. From base angle \\(\\displaystyle\\frac{\\pi}{4}\\) these are \\(\\pi - \\displaystyle\\frac{\\pi}{4} = \\displaystyle\\frac{3\\pi}{4}\\) and \\(2\\pi - \\displaystyle\\frac{\\pi}{4} = \\displaystyle\\frac{7\\pi}{4}\\)."
        },
        {
          "stepNumber": 15,
          "description": "List all solutions in order",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}",
          "explanation": "Collect the four values in increasing order and check each lies inside the closed interval \\([0, 2\\pi]\\). All four are valid.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.009,
                    0.009
                  ],
                  [
                    0.019,
                    0.019
                  ],
                  [
                    0.028,
                    0.028
                  ],
                  [
                    0.037,
                    0.037
                  ],
                  [
                    0.047,
                    0.047
                  ],
                  [
                    0.056,
                    0.056
                  ],
                  [
                    0.065,
                    0.066
                  ],
                  [
                    0.075,
                    0.075
                  ],
                  [
                    0.084,
                    0.084
                  ],
                  [
                    0.093,
                    0.094
                  ],
                  [
                    0.103,
                    0.103
                  ],
                  [
                    0.112,
                    0.113
                  ],
                  [
                    0.122,
                    0.122
                  ],
                  [
                    0.131,
                    0.132
                  ],
                  [
                    0.14,
                    0.141
                  ],
                  [
                    0.15,
                    0.151
                  ],
                  [
                    0.159,
                    0.16
                  ],
                  [
                    0.168,
                    0.17
                  ],
                  [
                    0.178,
                    0.179
                  ],
                  [
                    0.187,
                    0.189
                  ],
                  [
                    0.196,
                    0.199
                  ],
                  [
                    0.206,
                    0.209
                  ],
                  [
                    0.215,
                    0.218
                  ],
                  [
                    0.224,
                    0.228
                  ],
                  [
                    0.234,
                    0.238
                  ],
                  [
                    0.243,
                    0.248
                  ],
                  [
                    0.252,
                    0.258
                  ],
                  [
                    0.262,
                    0.268
                  ],
                  [
                    0.271,
                    0.278
                  ],
                  [
                    0.28,
                    0.288
                  ],
                  [
                    0.29,
                    0.298
                  ],
                  [
                    0.299,
                    0.308
                  ],
                  [
                    0.308,
                    0.319
                  ],
                  [
                    0.318,
                    0.329
                  ],
                  [
                    0.327,
                    0.339
                  ],
                  [
                    0.337,
                    0.35
                  ],
                  [
                    0.346,
                    0.36
                  ],
                  [
                    0.355,
                    0.371
                  ],
                  [
                    0.365,
                    0.382
                  ],
                  [
                    0.374,
                    0.392
                  ],
                  [
                    0.383,
                    0.403
                  ],
                  [
                    0.393,
                    0.414
                  ],
                  [
                    0.402,
                    0.425
                  ],
                  [
                    0.411,
                    0.436
                  ],
                  [
                    0.421,
                    0.447
                  ],
                  [
                    0.43,
                    0.459
                  ],
                  [
                    0.439,
                    0.47
                  ],
                  [
                    0.449,
                    0.481
                  ],
                  [
                    0.458,
                    0.493
                  ],
                  [
                    0.467,
                    0.505
                  ],
                  [
                    0.477,
                    0.516
                  ],
                  [
                    0.486,
                    0.528
                  ],
                  [
                    0.495,
                    0.54
                  ],
                  [
                    0.505,
                    0.553
                  ],
                  [
                    0.514,
                    0.565
                  ],
                  [
                    0.523,
                    0.577
                  ],
                  [
                    0.533,
                    0.59
                  ],
                  [
                    0.542,
                    0.602
                  ],
                  [
                    0.552,
                    0.615
                  ],
                  [
                    0.561,
                    0.628
                  ],
                  [
                    0.57,
                    0.641
                  ],
                  [
                    0.58,
                    0.655
                  ],
                  [
                    0.589,
                    0.668
                  ],
                  [
                    0.598,
                    0.682
                  ],
                  [
                    0.608,
                    0.695
                  ],
                  [
                    0.617,
                    0.709
                  ],
                  [
                    0.626,
                    0.723
                  ],
                  [
                    0.636,
                    0.738
                  ],
                  [
                    0.645,
                    0.752
                  ],
                  [
                    0.654,
                    0.767
                  ],
                  [
                    0.664,
                    0.782
                  ],
                  [
                    0.673,
                    0.797
                  ],
                  [
                    0.682,
                    0.813
                  ],
                  [
                    0.692,
                    0.828
                  ],
                  [
                    0.701,
                    0.844
                  ],
                  [
                    0.71,
                    0.86
                  ],
                  [
                    0.72,
                    0.877
                  ],
                  [
                    0.729,
                    0.893
                  ],
                  [
                    0.738,
                    0.91
                  ],
                  [
                    0.748,
                    0.927
                  ],
                  [
                    0.757,
                    0.945
                  ],
                  [
                    0.766,
                    0.963
                  ],
                  [
                    0.776,
                    0.981
                  ],
                  [
                    0.785,
                    1
                  ],
                  [
                    0.795,
                    1.018
                  ],
                  [
                    0.804,
                    1.038
                  ],
                  [
                    0.813,
                    1.057
                  ],
                  [
                    0.823,
                    1.077
                  ],
                  [
                    0.832,
                    1.098
                  ],
                  [
                    0.841,
                    1.119
                  ],
                  [
                    0.851,
                    1.14
                  ],
                  [
                    0.86,
                    1.161
                  ],
                  [
                    0.869,
                    1.184
                  ],
                  [
                    0.879,
                    1.206
                  ],
                  [
                    0.888,
                    1.23
                  ],
                  [
                    0.897,
                    1.253
                  ],
                  [
                    0.907,
                    1.278
                  ],
                  [
                    0.916,
                    1.303
                  ],
                  [
                    0.925,
                    1.328
                  ],
                  [
                    0.935,
                    1.354
                  ],
                  [
                    0.944,
                    1.381
                  ],
                  [
                    0.953,
                    1.409
                  ],
                  [
                    0.963,
                    1.437
                  ],
                  [
                    0.972,
                    1.466
                  ],
                  [
                    0.981,
                    1.496
                  ],
                  [
                    0.991,
                    1.526
                  ],
                  [
                    1,
                    1.558
                  ],
                  [
                    1.01,
                    1.591
                  ],
                  [
                    1.019,
                    1.624
                  ],
                  [
                    1.028,
                    1.659
                  ],
                  [
                    1.038,
                    1.694
                  ],
                  [
                    1.047,
                    1.731
                  ],
                  [
                    1.056,
                    1.769
                  ],
                  [
                    1.066,
                    1.808
                  ],
                  [
                    1.075,
                    1.849
                  ],
                  [
                    1.084,
                    1.891
                  ],
                  [
                    1.094,
                    1.934
                  ],
                  [
                    1.103,
                    1.979
                  ],
                  [
                    1.112,
                    2.026
                  ],
                  [
                    1.122,
                    2.075
                  ],
                  [
                    1.131,
                    2.126
                  ],
                  [
                    1.14,
                    2.178
                  ],
                  [
                    1.15,
                    2.233
                  ],
                  [
                    1.159,
                    2.29
                  ],
                  [
                    1.168,
                    2.35
                  ],
                  [
                    1.178,
                    2.412
                  ],
                  [
                    1.187,
                    2.477
                  ],
                  [
                    1.196,
                    2.546
                  ],
                  [
                    1.206,
                    2.617
                  ],
                  [
                    1.215,
                    2.692
                  ],
                  [
                    1.225,
                    2.772
                  ],
                  [
                    1.234,
                    2.855
                  ],
                  [
                    1.243,
                    2.943
                  ],
                  [
                    1.253,
                    3.036
                  ],
                  [
                    1.262,
                    3.134
                  ],
                  [
                    1.271,
                    3.238
                  ],
                  [
                    1.281,
                    3.349
                  ],
                  [
                    1.29,
                    3.467
                  ],
                  [
                    1.299,
                    3.592
                  ],
                  [
                    1.309,
                    3.727
                  ],
                  [
                    1.318,
                    3.871
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\tan\\theta",
                "labelAt": [
                  0.5,
                  0.55
                ]
              },
              {
                "points": [
                  [
                    1.833,
                    -3.722
                  ],
                  [
                    1.852,
                    -3.462
                  ],
                  [
                    1.871,
                    -3.234
                  ],
                  [
                    1.889,
                    -3.032
                  ],
                  [
                    1.908,
                    -2.852
                  ],
                  [
                    1.927,
                    -2.69
                  ],
                  [
                    1.945,
                    -2.543
                  ],
                  [
                    1.964,
                    -2.41
                  ],
                  [
                    1.983,
                    -2.288
                  ],
                  [
                    2.001,
                    -2.176
                  ],
                  [
                    2.02,
                    -2.073
                  ],
                  [
                    2.039,
                    -1.978
                  ],
                  [
                    2.058,
                    -1.89
                  ],
                  [
                    2.076,
                    -1.807
                  ],
                  [
                    2.095,
                    -1.73
                  ],
                  [
                    2.114,
                    -1.658
                  ],
                  [
                    2.132,
                    -1.59
                  ],
                  [
                    2.151,
                    -1.526
                  ],
                  [
                    2.17,
                    -1.465
                  ],
                  [
                    2.188,
                    -1.408
                  ],
                  [
                    2.207,
                    -1.354
                  ],
                  [
                    2.226,
                    -1.302
                  ],
                  [
                    2.244,
                    -1.253
                  ],
                  [
                    2.263,
                    -1.206
                  ],
                  [
                    2.282,
                    -1.161
                  ],
                  [
                    2.301,
                    -1.118
                  ],
                  [
                    2.319,
                    -1.077
                  ],
                  [
                    2.338,
                    -1.037
                  ],
                  [
                    2.357,
                    -0.999
                  ],
                  [
                    2.375,
                    -0.963
                  ],
                  [
                    2.394,
                    -0.927
                  ],
                  [
                    2.413,
                    -0.893
                  ],
                  [
                    2.431,
                    -0.86
                  ],
                  [
                    2.45,
                    -0.828
                  ],
                  [
                    2.469,
                    -0.797
                  ],
                  [
                    2.487,
                    -0.767
                  ],
                  [
                    2.506,
                    -0.738
                  ],
                  [
                    2.525,
                    -0.709
                  ],
                  [
                    2.543,
                    -0.681
                  ],
                  [
                    2.562,
                    -0.654
                  ],
                  [
                    2.581,
                    -0.628
                  ],
                  [
                    2.6,
                    -0.602
                  ],
                  [
                    2.618,
                    -0.577
                  ],
                  [
                    2.637,
                    -0.552
                  ],
                  [
                    2.656,
                    -0.528
                  ],
                  [
                    2.674,
                    -0.505
                  ],
                  [
                    2.693,
                    -0.481
                  ],
                  [
                    2.712,
                    -0.459
                  ],
                  [
                    2.73,
                    -0.436
                  ],
                  [
                    2.749,
                    -0.414
                  ],
                  [
                    2.768,
                    -0.392
                  ],
                  [
                    2.786,
                    -0.371
                  ],
                  [
                    2.805,
                    -0.35
                  ],
                  [
                    2.824,
                    -0.329
                  ],
                  [
                    2.842,
                    -0.308
                  ],
                  [
                    2.861,
                    -0.288
                  ],
                  [
                    2.88,
                    -0.268
                  ],
                  [
                    2.899,
                    -0.248
                  ],
                  [
                    2.917,
                    -0.228
                  ],
                  [
                    2.936,
                    -0.209
                  ],
                  [
                    2.955,
                    -0.189
                  ],
                  [
                    2.973,
                    -0.17
                  ],
                  [
                    2.992,
                    -0.151
                  ],
                  [
                    3.011,
                    -0.132
                  ],
                  [
                    3.029,
                    -0.113
                  ],
                  [
                    3.048,
                    -0.094
                  ],
                  [
                    3.067,
                    -0.075
                  ],
                  [
                    3.085,
                    -0.056
                  ],
                  [
                    3.104,
                    -0.037
                  ],
                  [
                    3.123,
                    -0.019
                  ],
                  [
                    3.141,
                    0
                  ],
                  [
                    3.16,
                    0.019
                  ],
                  [
                    3.179,
                    0.037
                  ],
                  [
                    3.198,
                    0.056
                  ],
                  [
                    3.216,
                    0.075
                  ],
                  [
                    3.235,
                    0.094
                  ],
                  [
                    3.254,
                    0.113
                  ],
                  [
                    3.272,
                    0.131
                  ],
                  [
                    3.291,
                    0.151
                  ],
                  [
                    3.31,
                    0.17
                  ],
                  [
                    3.328,
                    0.189
                  ],
                  [
                    3.347,
                    0.208
                  ],
                  [
                    3.366,
                    0.228
                  ],
                  [
                    3.384,
                    0.248
                  ],
                  [
                    3.403,
                    0.268
                  ],
                  [
                    3.422,
                    0.288
                  ],
                  [
                    3.441,
                    0.308
                  ],
                  [
                    3.459,
                    0.329
                  ],
                  [
                    3.478,
                    0.35
                  ],
                  [
                    3.497,
                    0.371
                  ],
                  [
                    3.515,
                    0.392
                  ],
                  [
                    3.534,
                    0.414
                  ],
                  [
                    3.553,
                    0.436
                  ],
                  [
                    3.571,
                    0.458
                  ],
                  [
                    3.59,
                    0.481
                  ],
                  [
                    3.609,
                    0.504
                  ],
                  [
                    3.627,
                    0.528
                  ],
                  [
                    3.646,
                    0.552
                  ],
                  [
                    3.665,
                    0.577
                  ],
                  [
                    3.683,
                    0.602
                  ],
                  [
                    3.702,
                    0.628
                  ],
                  [
                    3.721,
                    0.654
                  ],
                  [
                    3.74,
                    0.681
                  ],
                  [
                    3.758,
                    0.709
                  ],
                  [
                    3.777,
                    0.737
                  ],
                  [
                    3.796,
                    0.767
                  ],
                  [
                    3.814,
                    0.797
                  ],
                  [
                    3.833,
                    0.828
                  ],
                  [
                    3.852,
                    0.86
                  ],
                  [
                    3.87,
                    0.893
                  ],
                  [
                    3.889,
                    0.927
                  ],
                  [
                    3.908,
                    0.962
                  ],
                  [
                    3.926,
                    0.999
                  ],
                  [
                    3.945,
                    1.037
                  ],
                  [
                    3.964,
                    1.076
                  ],
                  [
                    3.982,
                    1.118
                  ],
                  [
                    4.001,
                    1.161
                  ],
                  [
                    4.02,
                    1.205
                  ],
                  [
                    4.039,
                    1.252
                  ],
                  [
                    4.057,
                    1.301
                  ],
                  [
                    4.076,
                    1.353
                  ],
                  [
                    4.095,
                    1.407
                  ],
                  [
                    4.113,
                    1.465
                  ],
                  [
                    4.132,
                    1.525
                  ],
                  [
                    4.151,
                    1.589
                  ],
                  [
                    4.169,
                    1.657
                  ],
                  [
                    4.188,
                    1.729
                  ],
                  [
                    4.207,
                    1.806
                  ],
                  [
                    4.225,
                    1.889
                  ],
                  [
                    4.244,
                    1.977
                  ],
                  [
                    4.263,
                    2.072
                  ],
                  [
                    4.282,
                    2.175
                  ],
                  [
                    4.3,
                    2.287
                  ],
                  [
                    4.319,
                    2.409
                  ],
                  [
                    4.338,
                    2.542
                  ],
                  [
                    4.356,
                    2.688
                  ],
                  [
                    4.375,
                    2.85
                  ],
                  [
                    4.394,
                    3.03
                  ],
                  [
                    4.412,
                    3.232
                  ],
                  [
                    4.431,
                    3.46
                  ],
                  [
                    4.45,
                    3.719
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              },
              {
                "points": [
                  [
                    4.965,
                    -3.874
                  ],
                  [
                    4.974,
                    -3.729
                  ],
                  [
                    4.984,
                    -3.595
                  ],
                  [
                    4.993,
                    -3.469
                  ],
                  [
                    5.002,
                    -3.351
                  ],
                  [
                    5.012,
                    -3.24
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.03,
                    -3.037
                  ],
                  [
                    5.04,
                    -2.944
                  ],
                  [
                    5.049,
                    -2.856
                  ],
                  [
                    5.059,
                    -2.773
                  ],
                  [
                    5.068,
                    -2.694
                  ],
                  [
                    5.077,
                    -2.618
                  ],
                  [
                    5.087,
                    -2.547
                  ],
                  [
                    5.096,
                    -2.478
                  ],
                  [
                    5.105,
                    -2.413
                  ],
                  [
                    5.115,
                    -2.351
                  ],
                  [
                    5.124,
                    -2.291
                  ],
                  [
                    5.133,
                    -2.234
                  ],
                  [
                    5.143,
                    -2.179
                  ],
                  [
                    5.152,
                    -2.126
                  ],
                  [
                    5.161,
                    -2.076
                  ],
                  [
                    5.171,
                    -2.027
                  ],
                  [
                    5.18,
                    -1.98
                  ],
                  [
                    5.189,
                    -1.935
                  ],
                  [
                    5.199,
                    -1.891
                  ],
                  [
                    5.208,
                    -1.849
                  ],
                  [
                    5.217,
                    -1.809
                  ],
                  [
                    5.227,
                    -1.769
                  ],
                  [
                    5.236,
                    -1.731
                  ],
                  [
                    5.245,
                    -1.695
                  ],
                  [
                    5.255,
                    -1.659
                  ],
                  [
                    5.264,
                    -1.624
                  ],
                  [
                    5.274,
                    -1.591
                  ],
                  [
                    5.283,
                    -1.558
                  ],
                  [
                    5.292,
                    -1.527
                  ],
                  [
                    5.302,
                    -1.496
                  ],
                  [
                    5.311,
                    -1.466
                  ],
                  [
                    5.32,
                    -1.437
                  ],
                  [
                    5.33,
                    -1.409
                  ],
                  [
                    5.339,
                    -1.381
                  ],
                  [
                    5.348,
                    -1.355
                  ],
                  [
                    5.358,
                    -1.328
                  ],
                  [
                    5.367,
                    -1.303
                  ],
                  [
                    5.376,
                    -1.278
                  ],
                  [
                    5.386,
                    -1.254
                  ],
                  [
                    5.395,
                    -1.23
                  ],
                  [
                    5.404,
                    -1.207
                  ],
                  [
                    5.414,
                    -1.184
                  ],
                  [
                    5.423,
                    -1.162
                  ],
                  [
                    5.432,
                    -1.14
                  ],
                  [
                    5.442,
                    -1.119
                  ],
                  [
                    5.451,
                    -1.098
                  ],
                  [
                    5.461,
                    -1.077
                  ],
                  [
                    5.47,
                    -1.057
                  ],
                  [
                    5.479,
                    -1.038
                  ],
                  [
                    5.489,
                    -1.019
                  ],
                  [
                    5.498,
                    -1
                  ],
                  [
                    5.507,
                    -0.981
                  ],
                  [
                    5.517,
                    -0.963
                  ],
                  [
                    5.526,
                    -0.945
                  ],
                  [
                    5.535,
                    -0.928
                  ],
                  [
                    5.545,
                    -0.91
                  ],
                  [
                    5.554,
                    -0.893
                  ],
                  [
                    5.563,
                    -0.877
                  ],
                  [
                    5.573,
                    -0.86
                  ],
                  [
                    5.582,
                    -0.844
                  ],
                  [
                    5.591,
                    -0.828
                  ],
                  [
                    5.601,
                    -0.813
                  ],
                  [
                    5.61,
                    -0.797
                  ],
                  [
                    5.619,
                    -0.782
                  ],
                  [
                    5.629,
                    -0.767
                  ],
                  [
                    5.638,
                    -0.752
                  ],
                  [
                    5.647,
                    -0.738
                  ],
                  [
                    5.657,
                    -0.724
                  ],
                  [
                    5.666,
                    -0.709
                  ],
                  [
                    5.676,
                    -0.695
                  ],
                  [
                    5.685,
                    -0.682
                  ],
                  [
                    5.694,
                    -0.668
                  ],
                  [
                    5.704,
                    -0.655
                  ],
                  [
                    5.713,
                    -0.641
                  ],
                  [
                    5.722,
                    -0.628
                  ],
                  [
                    5.732,
                    -0.615
                  ],
                  [
                    5.741,
                    -0.602
                  ],
                  [
                    5.75,
                    -0.59
                  ],
                  [
                    5.76,
                    -0.577
                  ],
                  [
                    5.769,
                    -0.565
                  ],
                  [
                    5.778,
                    -0.553
                  ],
                  [
                    5.788,
                    -0.54
                  ],
                  [
                    5.797,
                    -0.528
                  ],
                  [
                    5.806,
                    -0.517
                  ],
                  [
                    5.816,
                    -0.505
                  ],
                  [
                    5.825,
                    -0.493
                  ],
                  [
                    5.834,
                    -0.481
                  ],
                  [
                    5.844,
                    -0.47
                  ],
                  [
                    5.853,
                    -0.459
                  ],
                  [
                    5.863,
                    -0.447
                  ],
                  [
                    5.872,
                    -0.436
                  ],
                  [
                    5.881,
                    -0.425
                  ],
                  [
                    5.891,
                    -0.414
                  ],
                  [
                    5.9,
                    -0.403
                  ],
                  [
                    5.909,
                    -0.392
                  ],
                  [
                    5.919,
                    -0.382
                  ],
                  [
                    5.928,
                    -0.371
                  ],
                  [
                    5.937,
                    -0.36
                  ],
                  [
                    5.947,
                    -0.35
                  ],
                  [
                    5.956,
                    -0.339
                  ],
                  [
                    5.965,
                    -0.329
                  ],
                  [
                    5.975,
                    -0.319
                  ],
                  [
                    5.984,
                    -0.308
                  ],
                  [
                    5.993,
                    -0.298
                  ],
                  [
                    6.003,
                    -0.288
                  ],
                  [
                    6.012,
                    -0.278
                  ],
                  [
                    6.021,
                    -0.268
                  ],
                  [
                    6.031,
                    -0.258
                  ],
                  [
                    6.04,
                    -0.248
                  ],
                  [
                    6.049,
                    -0.238
                  ],
                  [
                    6.059,
                    -0.228
                  ],
                  [
                    6.068,
                    -0.218
                  ],
                  [
                    6.078,
                    -0.209
                  ],
                  [
                    6.087,
                    -0.199
                  ],
                  [
                    6.096,
                    -0.189
                  ],
                  [
                    6.106,
                    -0.18
                  ],
                  [
                    6.115,
                    -0.17
                  ],
                  [
                    6.124,
                    -0.16
                  ],
                  [
                    6.134,
                    -0.151
                  ],
                  [
                    6.143,
                    -0.141
                  ],
                  [
                    6.152,
                    -0.132
                  ],
                  [
                    6.162,
                    -0.122
                  ],
                  [
                    6.171,
                    -0.113
                  ],
                  [
                    6.18,
                    -0.103
                  ],
                  [
                    6.19,
                    -0.094
                  ],
                  [
                    6.199,
                    -0.084
                  ],
                  [
                    6.208,
                    -0.075
                  ],
                  [
                    6.218,
                    -0.066
                  ],
                  [
                    6.227,
                    -0.056
                  ],
                  [
                    6.236,
                    -0.047
                  ],
                  [
                    6.246,
                    -0.037
                  ],
                  [
                    6.255,
                    -0.028
                  ],
                  [
                    6.265,
                    -0.019
                  ],
                  [
                    6.274,
                    -0.009
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  1.571,
                  -4
                ],
                "to": [
                  1.571,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  4.712,
                  -4
                ],
                "to": [
                  4.712,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              }
            ],
            "points": [
              {
                "at": [
                  0.785,
                  1
                ],
                "label": "\\frac{\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  2.356,
                  -1
                ],
                "label": "\\frac{3\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  3.927,
                  1
                ],
                "label": "\\frac{5\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  5.498,
                  -1
                ],
                "label": "\\frac{7\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
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
    "id": "y2tf4-042",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 57",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\csc^2\\theta = 1 + \\cot\\theta\\) on \\([0, 2\\pi]\\).",
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
          "description": "Spot the mixed functions",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot\\theta",
          "explanation": "The left side is \\(\\csc^2\\theta\\) while the right contains \\(\\cot\\theta\\). To solve we need everything written in a single trig function."
        },
        {
          "stepNumber": 2,
          "description": "Choose which function to keep",
          "workingLatex": "\\text{convert } \\csc^2\\theta \\text{ into } \\cot",
          "explanation": "The right side already uses \\(\\cot\\theta\\), so converting \\(\\csc^2\\theta\\) into \\(\\cot\\) gives an equation purely in \\(\\cot\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "State the cosec identity",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "This comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\sin^2\\theta\\). Be careful not to confuse it with the \\(\\sec/\\tan\\) version \\(1 + \\tan^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute for cosec squared",
          "workingLatex": "1 + \\cot^2\\theta = 1 + \\cot\\theta",
          "explanation": "Replace \\(\\csc^2\\theta\\) with \\(1 + \\cot^2\\theta\\). Now both sides are expressed purely in \\(\\cot\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Subtract 1 from both sides",
          "workingLatex": "1 + \\cot^2\\theta - 1 = 1 + \\cot\\theta - 1",
          "explanation": "Show the subtraction explicitly on each side. The \\(+1\\) appears on both sides, so it will cancel."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the constant terms",
          "workingLatex": "\\cot^2\\theta = \\cot\\theta",
          "explanation": "After cancelling the \\(+1\\) from each side we are left with a quadratic relationship in \\(\\cot\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Move everything to one side",
          "workingLatex": "\\cot^2\\theta - \\cot\\theta = 0",
          "explanation": "Bring all terms to the left to set the quadratic equal to zero. Never divide both sides by \\(\\cot\\theta\\) here: that would erase the \\(\\cot\\theta = 0\\) solutions."
        },
        {
          "stepNumber": 8,
          "description": "Factorise out the common factor",
          "workingLatex": "\\cot\\theta(\\cot\\theta - 1) = 0",
          "explanation": "Both terms share a factor of \\(\\cot\\theta\\). Taking it out gives a product of two factors set equal to zero."
        },
        {
          "stepNumber": 9,
          "description": "Apply the zero-product rule",
          "workingLatex": "\\cot\\theta = 0 \\quad \\text{or} \\quad \\cot\\theta - 1 = 0",
          "explanation": "A product is zero only when at least one factor is zero. Set each factor equal to zero separately."
        },
        {
          "stepNumber": 10,
          "description": "Rearrange the second factor",
          "workingLatex": "\\cot\\theta = 0 \\quad \\text{or} \\quad \\cot\\theta = 1",
          "explanation": "Add \\(1\\) to the second equation to make it \\(\\cot\\theta = 1\\). We now have two simple equations to solve over \\([0, 2\\pi]\\)."
        },
        {
          "stepNumber": 11,
          "description": "Rewrite cot = 0 using sin and cos",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = 0",
          "explanation": "A fraction equals zero only when its numerator is zero, so we examine \\(\\cos\\theta\\). Avoid writing \\(\\tan\\theta = 0\\), which is the wrong reciprocal."
        },
        {
          "stepNumber": 12,
          "description": "Solve cos = 0",
          "workingLatex": "\\cos\\theta = 0 \\;(\\sin\\theta \\ne 0)",
          "explanation": "\\(\\cot\\theta = 0\\) needs \\(\\cos\\theta = 0\\) while \\(\\sin\\theta \\ne 0\\), so that \\(\\cot\\) is defined. Both required points satisfy \\(\\sin\\theta \\ne 0\\)."
        },
        {
          "stepNumber": 13,
          "description": "Read off the cot = 0 solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}",
          "explanation": "\\(\\cos\\theta = 0\\) at \\(\\displaystyle\\frac{\\pi}{2}\\) and \\(\\displaystyle\\frac{3\\pi}{2}\\), where \\(\\sin\\theta = \\pm 1 \\ne 0\\), so \\(\\cot\\) is defined and equal to \\(0\\)."
        },
        {
          "stepNumber": 14,
          "description": "Convert cot = 1 to tan",
          "workingLatex": "\\cot\\theta = 1 \\Rightarrow \\tan\\theta = 1",
          "explanation": "Since \\(\\cot\\theta = \\displaystyle\\frac{1}{\\tan\\theta}\\), \\(\\cot\\theta = 1\\) gives \\(\\tan\\theta = 1\\). Taking reciprocals is safe because neither side is zero."
        },
        {
          "stepNumber": 15,
          "description": "Find the base angle",
          "workingLatex": "\\tan^{-1}(1) = \\frac{\\pi}{4}",
          "explanation": "The acute angle whose tangent is \\(1\\) is \\(\\displaystyle\\frac{\\pi}{4}\\). This is the base angle for placing solutions in the correct quadrants."
        },
        {
          "stepNumber": 16,
          "description": "Read off the cot = 1 solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}",
          "explanation": "\\(\\tan\\) is positive in quadrants 1 and 3. The first-quadrant value is \\(\\displaystyle\\frac{\\pi}{4}\\); add \\(\\pi\\) to get \\(\\displaystyle\\frac{5\\pi}{4}\\)."
        },
        {
          "stepNumber": 17,
          "description": "Combine and order all solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{5\\pi}{4}, \\frac{3\\pi}{2}",
          "explanation": "Collect all four solutions in increasing order. Every value lies in \\([0, 2\\pi]\\), so none are rejected."
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{4}, \\displaystyle\\frac{\\pi}{2}, \\displaystyle\\frac{5\\pi}{4}, \\displaystyle\\frac{3\\pi}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-043",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 35",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sec\\theta = \\sqrt 2\\) for \\(0 \\le \\theta \\le 360°\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation",
      "degrees"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of sec",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "\\(\\sec\\) is the reciprocal of \\(\\cos\\). To solve, we convert the equation into one involving \\(\\cos\\theta\\), which standard values and the calculator handle directly."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation using cos",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\sqrt 2",
          "explanation": "Substitute the definition into \\(\\sec\\theta = \\sqrt 2\\). This makes the reciprocal structure visible before we invert."
        },
        {
          "stepNumber": 3,
          "description": "Take reciprocals of both sides",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt 2}",
          "explanation": "If \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sqrt 2\\) then \\(\\cos\\theta = \\displaystyle\\frac{1}{\\sqrt 2}\\). A common slip is leaving the answer as \\(\\sqrt 2\\); you must invert."
        },
        {
          "stepNumber": 4,
          "description": "Rationalise to a known exact value",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt 2} = \\frac{\\sqrt 2}{2}",
          "explanation": "Multiplying top and bottom by \\(\\sqrt 2\\) gives the standard form \\(\\displaystyle\\frac{\\sqrt 2}{2}\\). This is recognisable as an exact value."
        },
        {
          "stepNumber": 5,
          "description": "Check validity of sec",
          "workingLatex": "|\\sec\\theta| = \\sqrt 2 \\ge 1",
          "explanation": "Since \\(\\sec\\) only takes values with \\(|\\sec\\theta| \\ge 1\\), a value of \\(\\sqrt 2\\) is allowed, so solutions exist."
        },
        {
          "stepNumber": 6,
          "description": "Find the base (acute) angle",
          "workingLatex": "\\cos^{-1}\\!\\left(\\frac{1}{\\sqrt 2}\\right) = 45°",
          "explanation": "The inverse cosine of \\(\\displaystyle\\frac{1}{\\sqrt 2}\\) is the first-quadrant angle \\(45°\\). This base angle is used to locate all solutions."
        },
        {
          "stepNumber": 7,
          "description": "Identify the correct quadrants",
          "workingLatex": "\\cos\\theta > 0 \\Rightarrow \\text{quadrants 1 and 4}",
          "explanation": "\\(\\cos\\) is positive in quadrants 1 and 4, so we expect one solution in each of those quadrants.",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.536,
                    1
                  ],
                  [
                    1.071,
                    1
                  ],
                  [
                    1.607,
                    1
                  ],
                  [
                    2.142,
                    1.001
                  ],
                  [
                    2.678,
                    1.001
                  ],
                  [
                    3.213,
                    1.002
                  ],
                  [
                    3.749,
                    1.002
                  ],
                  [
                    4.284,
                    1.003
                  ],
                  [
                    4.82,
                    1.004
                  ],
                  [
                    5.355,
                    1.004
                  ],
                  [
                    5.891,
                    1.005
                  ],
                  [
                    6.426,
                    1.006
                  ],
                  [
                    6.962,
                    1.007
                  ],
                  [
                    7.497,
                    1.009
                  ],
                  [
                    8.033,
                    1.01
                  ],
                  [
                    8.568,
                    1.011
                  ],
                  [
                    9.104,
                    1.013
                  ],
                  [
                    9.639,
                    1.014
                  ],
                  [
                    10.175,
                    1.016
                  ],
                  [
                    10.71,
                    1.018
                  ],
                  [
                    11.246,
                    1.02
                  ],
                  [
                    11.781,
                    1.022
                  ],
                  [
                    12.317,
                    1.024
                  ],
                  [
                    12.852,
                    1.026
                  ],
                  [
                    13.388,
                    1.028
                  ],
                  [
                    13.923,
                    1.03
                  ],
                  [
                    14.459,
                    1.033
                  ],
                  [
                    14.994,
                    1.035
                  ],
                  [
                    15.53,
                    1.038
                  ],
                  [
                    16.065,
                    1.041
                  ],
                  [
                    16.601,
                    1.043
                  ],
                  [
                    17.136,
                    1.046
                  ],
                  [
                    17.672,
                    1.05
                  ],
                  [
                    18.207,
                    1.053
                  ],
                  [
                    18.743,
                    1.056
                  ],
                  [
                    19.278,
                    1.059
                  ],
                  [
                    19.814,
                    1.063
                  ],
                  [
                    20.349,
                    1.067
                  ],
                  [
                    20.885,
                    1.07
                  ],
                  [
                    21.42,
                    1.074
                  ],
                  [
                    21.956,
                    1.078
                  ],
                  [
                    22.491,
                    1.082
                  ],
                  [
                    23.027,
                    1.087
                  ],
                  [
                    23.562,
                    1.091
                  ],
                  [
                    24.098,
                    1.095
                  ],
                  [
                    24.633,
                    1.1
                  ],
                  [
                    25.169,
                    1.105
                  ],
                  [
                    25.704,
                    1.11
                  ],
                  [
                    26.24,
                    1.115
                  ],
                  [
                    26.775,
                    1.12
                  ],
                  [
                    27.311,
                    1.125
                  ],
                  [
                    27.846,
                    1.131
                  ],
                  [
                    28.382,
                    1.137
                  ],
                  [
                    28.917,
                    1.142
                  ],
                  [
                    29.453,
                    1.148
                  ],
                  [
                    29.988,
                    1.155
                  ],
                  [
                    30.524,
                    1.161
                  ],
                  [
                    31.059,
                    1.167
                  ],
                  [
                    31.595,
                    1.174
                  ],
                  [
                    32.13,
                    1.181
                  ],
                  [
                    32.666,
                    1.188
                  ],
                  [
                    33.201,
                    1.195
                  ],
                  [
                    33.737,
                    1.203
                  ],
                  [
                    34.272,
                    1.21
                  ],
                  [
                    34.808,
                    1.218
                  ],
                  [
                    35.343,
                    1.226
                  ],
                  [
                    35.879,
                    1.234
                  ],
                  [
                    36.414,
                    1.243
                  ],
                  [
                    36.95,
                    1.251
                  ],
                  [
                    37.485,
                    1.26
                  ],
                  [
                    38.021,
                    1.269
                  ],
                  [
                    38.556,
                    1.279
                  ],
                  [
                    39.092,
                    1.288
                  ],
                  [
                    39.627,
                    1.298
                  ],
                  [
                    40.163,
                    1.309
                  ],
                  [
                    40.698,
                    1.319
                  ],
                  [
                    41.234,
                    1.33
                  ],
                  [
                    41.769,
                    1.341
                  ],
                  [
                    42.305,
                    1.352
                  ],
                  [
                    42.84,
                    1.364
                  ],
                  [
                    43.376,
                    1.376
                  ],
                  [
                    43.911,
                    1.388
                  ],
                  [
                    44.447,
                    1.401
                  ],
                  [
                    44.982,
                    1.414
                  ],
                  [
                    45.518,
                    1.427
                  ],
                  [
                    46.053,
                    1.441
                  ],
                  [
                    46.589,
                    1.455
                  ],
                  [
                    47.124,
                    1.47
                  ],
                  [
                    47.66,
                    1.485
                  ],
                  [
                    48.195,
                    1.5
                  ],
                  [
                    48.731,
                    1.516
                  ],
                  [
                    49.266,
                    1.532
                  ],
                  [
                    49.802,
                    1.549
                  ],
                  [
                    50.337,
                    1.567
                  ],
                  [
                    50.873,
                    1.585
                  ],
                  [
                    51.408,
                    1.603
                  ],
                  [
                    51.944,
                    1.622
                  ],
                  [
                    52.479,
                    1.642
                  ],
                  [
                    53.015,
                    1.662
                  ],
                  [
                    53.55,
                    1.683
                  ],
                  [
                    54.086,
                    1.705
                  ],
                  [
                    54.621,
                    1.727
                  ],
                  [
                    55.157,
                    1.75
                  ],
                  [
                    55.692,
                    1.774
                  ],
                  [
                    56.228,
                    1.799
                  ],
                  [
                    56.763,
                    1.824
                  ],
                  [
                    57.299,
                    1.851
                  ],
                  [
                    57.834,
                    1.878
                  ],
                  [
                    58.37,
                    1.907
                  ],
                  [
                    58.905,
                    1.936
                  ],
                  [
                    59.441,
                    1.967
                  ],
                  [
                    59.976,
                    1.999
                  ],
                  [
                    60.512,
                    2.031
                  ],
                  [
                    61.047,
                    2.066
                  ],
                  [
                    61.583,
                    2.101
                  ],
                  [
                    62.118,
                    2.138
                  ],
                  [
                    62.654,
                    2.177
                  ],
                  [
                    63.189,
                    2.217
                  ],
                  [
                    63.725,
                    2.259
                  ],
                  [
                    64.26,
                    2.303
                  ],
                  [
                    64.796,
                    2.348
                  ],
                  [
                    65.331,
                    2.396
                  ],
                  [
                    65.867,
                    2.446
                  ],
                  [
                    66.402,
                    2.498
                  ],
                  [
                    66.938,
                    2.553
                  ],
                  [
                    67.473,
                    2.61
                  ],
                  [
                    68.009,
                    2.67
                  ],
                  [
                    68.544,
                    2.734
                  ],
                  [
                    69.08,
                    2.801
                  ],
                  [
                    69.615,
                    2.871
                  ],
                  [
                    70.151,
                    2.945
                  ],
                  [
                    70.686,
                    3.023
                  ],
                  [
                    71.222,
                    3.106
                  ],
                  [
                    71.757,
                    3.194
                  ],
                  [
                    72.293,
                    3.288
                  ],
                  [
                    72.828,
                    3.387
                  ],
                  [
                    73.364,
                    3.493
                  ],
                  [
                    73.899,
                    3.606
                  ],
                  [
                    74.435,
                    3.727
                  ],
                  [
                    74.97,
                    3.856
                  ],
                  [
                    75.506,
                    3.995
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\sec\\theta",
                "labelAt": [
                  25,
                  1.5
                ]
              },
              {
                "points": [
                  [
                    105.03,
                    -3.856
                  ],
                  [
                    106.101,
                    -3.606
                  ],
                  [
                    107.172,
                    -3.387
                  ],
                  [
                    108.243,
                    -3.194
                  ],
                  [
                    109.314,
                    -3.023
                  ],
                  [
                    110.385,
                    -2.871
                  ],
                  [
                    111.456,
                    -2.734
                  ],
                  [
                    112.527,
                    -2.61
                  ],
                  [
                    113.598,
                    -2.498
                  ],
                  [
                    114.669,
                    -2.396
                  ],
                  [
                    115.74,
                    -2.303
                  ],
                  [
                    116.811,
                    -2.217
                  ],
                  [
                    117.882,
                    -2.138
                  ],
                  [
                    118.953,
                    -2.066
                  ],
                  [
                    120.024,
                    -1.999
                  ],
                  [
                    121.095,
                    -1.936
                  ],
                  [
                    122.166,
                    -1.878
                  ],
                  [
                    123.237,
                    -1.824
                  ],
                  [
                    124.308,
                    -1.774
                  ],
                  [
                    125.379,
                    -1.727
                  ],
                  [
                    126.45,
                    -1.683
                  ],
                  [
                    127.521,
                    -1.642
                  ],
                  [
                    128.592,
                    -1.603
                  ],
                  [
                    129.663,
                    -1.567
                  ],
                  [
                    130.734,
                    -1.532
                  ],
                  [
                    131.805,
                    -1.5
                  ],
                  [
                    132.876,
                    -1.47
                  ],
                  [
                    133.947,
                    -1.441
                  ],
                  [
                    135.018,
                    -1.414
                  ],
                  [
                    136.089,
                    -1.388
                  ],
                  [
                    137.16,
                    -1.364
                  ],
                  [
                    138.231,
                    -1.341
                  ],
                  [
                    139.302,
                    -1.319
                  ],
                  [
                    140.373,
                    -1.298
                  ],
                  [
                    141.444,
                    -1.279
                  ],
                  [
                    142.515,
                    -1.26
                  ],
                  [
                    143.586,
                    -1.243
                  ],
                  [
                    144.657,
                    -1.226
                  ],
                  [
                    145.728,
                    -1.21
                  ],
                  [
                    146.799,
                    -1.195
                  ],
                  [
                    147.87,
                    -1.181
                  ],
                  [
                    148.941,
                    -1.167
                  ],
                  [
                    150.012,
                    -1.155
                  ],
                  [
                    151.083,
                    -1.142
                  ],
                  [
                    152.154,
                    -1.131
                  ],
                  [
                    153.225,
                    -1.12
                  ],
                  [
                    154.296,
                    -1.11
                  ],
                  [
                    155.367,
                    -1.1
                  ],
                  [
                    156.438,
                    -1.091
                  ],
                  [
                    157.509,
                    -1.082
                  ],
                  [
                    158.58,
                    -1.074
                  ],
                  [
                    159.651,
                    -1.067
                  ],
                  [
                    160.722,
                    -1.059
                  ],
                  [
                    161.793,
                    -1.053
                  ],
                  [
                    162.864,
                    -1.046
                  ],
                  [
                    163.935,
                    -1.041
                  ],
                  [
                    165.006,
                    -1.035
                  ],
                  [
                    166.077,
                    -1.03
                  ],
                  [
                    167.148,
                    -1.026
                  ],
                  [
                    168.219,
                    -1.022
                  ],
                  [
                    169.29,
                    -1.018
                  ],
                  [
                    170.361,
                    -1.014
                  ],
                  [
                    171.432,
                    -1.011
                  ],
                  [
                    172.503,
                    -1.009
                  ],
                  [
                    173.574,
                    -1.006
                  ],
                  [
                    174.645,
                    -1.004
                  ],
                  [
                    175.716,
                    -1.003
                  ],
                  [
                    176.787,
                    -1.002
                  ],
                  [
                    177.858,
                    -1.001
                  ],
                  [
                    178.929,
                    -1
                  ],
                  [
                    180,
                    -1
                  ],
                  [
                    181.071,
                    -1
                  ],
                  [
                    182.142,
                    -1.001
                  ],
                  [
                    183.213,
                    -1.002
                  ],
                  [
                    184.284,
                    -1.003
                  ],
                  [
                    185.355,
                    -1.004
                  ],
                  [
                    186.426,
                    -1.006
                  ],
                  [
                    187.497,
                    -1.009
                  ],
                  [
                    188.568,
                    -1.011
                  ],
                  [
                    189.639,
                    -1.014
                  ],
                  [
                    190.71,
                    -1.018
                  ],
                  [
                    191.781,
                    -1.022
                  ],
                  [
                    192.852,
                    -1.026
                  ],
                  [
                    193.923,
                    -1.03
                  ],
                  [
                    194.994,
                    -1.035
                  ],
                  [
                    196.065,
                    -1.041
                  ],
                  [
                    197.136,
                    -1.046
                  ],
                  [
                    198.207,
                    -1.053
                  ],
                  [
                    199.278,
                    -1.059
                  ],
                  [
                    200.349,
                    -1.067
                  ],
                  [
                    201.42,
                    -1.074
                  ],
                  [
                    202.491,
                    -1.082
                  ],
                  [
                    203.562,
                    -1.091
                  ],
                  [
                    204.633,
                    -1.1
                  ],
                  [
                    205.704,
                    -1.11
                  ],
                  [
                    206.775,
                    -1.12
                  ],
                  [
                    207.846,
                    -1.131
                  ],
                  [
                    208.917,
                    -1.142
                  ],
                  [
                    209.988,
                    -1.155
                  ],
                  [
                    211.059,
                    -1.167
                  ],
                  [
                    212.13,
                    -1.181
                  ],
                  [
                    213.201,
                    -1.195
                  ],
                  [
                    214.272,
                    -1.21
                  ],
                  [
                    215.343,
                    -1.226
                  ],
                  [
                    216.414,
                    -1.243
                  ],
                  [
                    217.485,
                    -1.26
                  ],
                  [
                    218.556,
                    -1.279
                  ],
                  [
                    219.627,
                    -1.298
                  ],
                  [
                    220.698,
                    -1.319
                  ],
                  [
                    221.769,
                    -1.341
                  ],
                  [
                    222.84,
                    -1.364
                  ],
                  [
                    223.911,
                    -1.388
                  ],
                  [
                    224.982,
                    -1.414
                  ],
                  [
                    226.053,
                    -1.441
                  ],
                  [
                    227.124,
                    -1.47
                  ],
                  [
                    228.195,
                    -1.5
                  ],
                  [
                    229.266,
                    -1.532
                  ],
                  [
                    230.337,
                    -1.567
                  ],
                  [
                    231.408,
                    -1.603
                  ],
                  [
                    232.479,
                    -1.642
                  ],
                  [
                    233.55,
                    -1.683
                  ],
                  [
                    234.621,
                    -1.727
                  ],
                  [
                    235.692,
                    -1.774
                  ],
                  [
                    236.763,
                    -1.824
                  ],
                  [
                    237.834,
                    -1.878
                  ],
                  [
                    238.905,
                    -1.936
                  ],
                  [
                    239.976,
                    -1.999
                  ],
                  [
                    241.047,
                    -2.066
                  ],
                  [
                    242.118,
                    -2.138
                  ],
                  [
                    243.189,
                    -2.217
                  ],
                  [
                    244.26,
                    -2.303
                  ],
                  [
                    245.331,
                    -2.396
                  ],
                  [
                    246.402,
                    -2.498
                  ],
                  [
                    247.473,
                    -2.61
                  ],
                  [
                    248.544,
                    -2.734
                  ],
                  [
                    249.615,
                    -2.871
                  ],
                  [
                    250.686,
                    -3.023
                  ],
                  [
                    251.757,
                    -3.194
                  ],
                  [
                    252.828,
                    -3.387
                  ],
                  [
                    253.899,
                    -3.606
                  ],
                  [
                    254.97,
                    -3.856
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              },
              {
                "points": [
                  [
                    284.495,
                    3.995
                  ],
                  [
                    285.03,
                    3.856
                  ],
                  [
                    285.566,
                    3.727
                  ],
                  [
                    286.101,
                    3.606
                  ],
                  [
                    286.637,
                    3.493
                  ],
                  [
                    287.172,
                    3.387
                  ],
                  [
                    287.708,
                    3.288
                  ],
                  [
                    288.243,
                    3.194
                  ],
                  [
                    288.779,
                    3.106
                  ],
                  [
                    289.314,
                    3.023
                  ],
                  [
                    289.85,
                    2.945
                  ],
                  [
                    290.385,
                    2.871
                  ],
                  [
                    290.921,
                    2.801
                  ],
                  [
                    291.456,
                    2.734
                  ],
                  [
                    291.992,
                    2.67
                  ],
                  [
                    292.527,
                    2.61
                  ],
                  [
                    293.063,
                    2.553
                  ],
                  [
                    293.598,
                    2.498
                  ],
                  [
                    294.133,
                    2.446
                  ],
                  [
                    294.669,
                    2.396
                  ],
                  [
                    295.205,
                    2.348
                  ],
                  [
                    295.74,
                    2.303
                  ],
                  [
                    296.275,
                    2.259
                  ],
                  [
                    296.811,
                    2.217
                  ],
                  [
                    297.347,
                    2.177
                  ],
                  [
                    297.882,
                    2.138
                  ],
                  [
                    298.418,
                    2.101
                  ],
                  [
                    298.953,
                    2.066
                  ],
                  [
                    299.489,
                    2.031
                  ],
                  [
                    300.024,
                    1.999
                  ],
                  [
                    300.56,
                    1.967
                  ],
                  [
                    301.095,
                    1.936
                  ],
                  [
                    301.631,
                    1.907
                  ],
                  [
                    302.166,
                    1.878
                  ],
                  [
                    302.702,
                    1.851
                  ],
                  [
                    303.237,
                    1.824
                  ],
                  [
                    303.773,
                    1.799
                  ],
                  [
                    304.308,
                    1.774
                  ],
                  [
                    304.844,
                    1.75
                  ],
                  [
                    305.379,
                    1.727
                  ],
                  [
                    305.915,
                    1.705
                  ],
                  [
                    306.45,
                    1.683
                  ],
                  [
                    306.986,
                    1.662
                  ],
                  [
                    307.521,
                    1.642
                  ],
                  [
                    308.057,
                    1.622
                  ],
                  [
                    308.592,
                    1.603
                  ],
                  [
                    309.128,
                    1.585
                  ],
                  [
                    309.663,
                    1.567
                  ],
                  [
                    310.198,
                    1.549
                  ],
                  [
                    310.734,
                    1.532
                  ],
                  [
                    311.27,
                    1.516
                  ],
                  [
                    311.805,
                    1.5
                  ],
                  [
                    312.341,
                    1.485
                  ],
                  [
                    312.876,
                    1.47
                  ],
                  [
                    313.412,
                    1.455
                  ],
                  [
                    313.947,
                    1.441
                  ],
                  [
                    314.483,
                    1.427
                  ],
                  [
                    315.018,
                    1.414
                  ],
                  [
                    315.554,
                    1.401
                  ],
                  [
                    316.089,
                    1.388
                  ],
                  [
                    316.625,
                    1.376
                  ],
                  [
                    317.16,
                    1.364
                  ],
                  [
                    317.696,
                    1.352
                  ],
                  [
                    318.231,
                    1.341
                  ],
                  [
                    318.767,
                    1.33
                  ],
                  [
                    319.302,
                    1.319
                  ],
                  [
                    319.838,
                    1.309
                  ],
                  [
                    320.373,
                    1.298
                  ],
                  [
                    320.909,
                    1.288
                  ],
                  [
                    321.444,
                    1.279
                  ],
                  [
                    321.98,
                    1.269
                  ],
                  [
                    322.515,
                    1.26
                  ],
                  [
                    323.051,
                    1.251
                  ],
                  [
                    323.586,
                    1.243
                  ],
                  [
                    324.121,
                    1.234
                  ],
                  [
                    324.657,
                    1.226
                  ],
                  [
                    325.193,
                    1.218
                  ],
                  [
                    325.728,
                    1.21
                  ],
                  [
                    326.264,
                    1.203
                  ],
                  [
                    326.799,
                    1.195
                  ],
                  [
                    327.335,
                    1.188
                  ],
                  [
                    327.87,
                    1.181
                  ],
                  [
                    328.406,
                    1.174
                  ],
                  [
                    328.941,
                    1.167
                  ],
                  [
                    329.477,
                    1.161
                  ],
                  [
                    330.012,
                    1.155
                  ],
                  [
                    330.548,
                    1.148
                  ],
                  [
                    331.083,
                    1.142
                  ],
                  [
                    331.619,
                    1.137
                  ],
                  [
                    332.154,
                    1.131
                  ],
                  [
                    332.69,
                    1.125
                  ],
                  [
                    333.225,
                    1.12
                  ],
                  [
                    333.761,
                    1.115
                  ],
                  [
                    334.296,
                    1.11
                  ],
                  [
                    334.832,
                    1.105
                  ],
                  [
                    335.367,
                    1.1
                  ],
                  [
                    335.903,
                    1.095
                  ],
                  [
                    336.438,
                    1.091
                  ],
                  [
                    336.974,
                    1.087
                  ],
                  [
                    337.509,
                    1.082
                  ],
                  [
                    338.045,
                    1.078
                  ],
                  [
                    338.58,
                    1.074
                  ],
                  [
                    339.116,
                    1.07
                  ],
                  [
                    339.651,
                    1.067
                  ],
                  [
                    340.187,
                    1.063
                  ],
                  [
                    340.722,
                    1.059
                  ],
                  [
                    341.258,
                    1.056
                  ],
                  [
                    341.793,
                    1.053
                  ],
                  [
                    342.328,
                    1.05
                  ],
                  [
                    342.864,
                    1.046
                  ],
                  [
                    343.4,
                    1.043
                  ],
                  [
                    343.935,
                    1.041
                  ],
                  [
                    344.471,
                    1.038
                  ],
                  [
                    345.006,
                    1.035
                  ],
                  [
                    345.542,
                    1.033
                  ],
                  [
                    346.077,
                    1.03
                  ],
                  [
                    346.613,
                    1.028
                  ],
                  [
                    347.148,
                    1.026
                  ],
                  [
                    347.684,
                    1.024
                  ],
                  [
                    348.219,
                    1.022
                  ],
                  [
                    348.755,
                    1.02
                  ],
                  [
                    349.29,
                    1.018
                  ],
                  [
                    349.826,
                    1.016
                  ],
                  [
                    350.361,
                    1.014
                  ],
                  [
                    350.897,
                    1.013
                  ],
                  [
                    351.432,
                    1.011
                  ],
                  [
                    351.968,
                    1.01
                  ],
                  [
                    352.503,
                    1.009
                  ],
                  [
                    353.039,
                    1.007
                  ],
                  [
                    353.574,
                    1.006
                  ],
                  [
                    354.11,
                    1.005
                  ],
                  [
                    354.645,
                    1.004
                  ],
                  [
                    355.181,
                    1.004
                  ],
                  [
                    355.716,
                    1.003
                  ],
                  [
                    356.252,
                    1.002
                  ],
                  [
                    356.787,
                    1.002
                  ],
                  [
                    357.323,
                    1.001
                  ],
                  [
                    357.858,
                    1.001
                  ],
                  [
                    358.394,
                    1
                  ],
                  [
                    358.929,
                    1
                  ],
                  [
                    359.465,
                    1
                  ],
                  [
                    360,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  90,
                  -4
                ],
                "to": [
                  90,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  270,
                  -4
                ],
                "to": [
                  270,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  1.4142
                ],
                "to": [
                  360,
                  1.4142
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=\\sqrt{2}",
                "labelAt": [
                  28.8,
                  1.7142
                ]
              }
            ],
            "points": [
              {
                "at": [
                  45,
                  1.414
                ],
                "label": "45^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  315,
                  1.414
                ],
                "label": "315^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 8,
          "description": "First-quadrant solution",
          "workingLatex": "\\theta = 45°",
          "explanation": "The base angle itself is the quadrant-1 solution and lies in \\([0°, 360°]\\)."
        },
        {
          "stepNumber": 9,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 360° - 45° = 315°",
          "explanation": "In quadrant 4 the angle is \\(360°\\) minus the base angle, giving \\(315°\\), which is also within range."
        },
        {
          "stepNumber": 10,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45°, 315°",
          "explanation": "Both values lie within \\([0°, 360°]\\), so these are the complete set of solutions."
        }
      ],
      "finalAnswer": "\\(\\theta = 45°, 315°\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-044",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 36",
    "difficulty": "Standard",
    "questionText": "Solve \\(2\\csc\\theta = 4\\) for \\(0 \\le \\theta \\le 360°\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation",
      "degrees"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide both sides by 2",
          "workingLatex": "\\frac{2\\csc\\theta}{2} = \\frac{4}{2}",
          "explanation": "Divide each side by \\(2\\) to begin isolating \\(\\csc\\theta\\). Showing the division explicitly keeps the move transparent."
        },
        {
          "stepNumber": 2,
          "description": "Simplify to isolate cosec",
          "workingLatex": "\\csc\\theta = 2",
          "explanation": "After dividing, \\(\\csc\\theta\\) stands alone. The equation is now ready to be converted into \\(\\sin\\)."
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of cosec",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "\\(\\csc\\) is the reciprocal of \\(\\sin\\). Converting to \\(\\sin\\theta\\) lets us use standard exact values and the calculator."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation using sin",
          "workingLatex": "\\frac{1}{\\sin\\theta} = 2",
          "explanation": "Substitute the definition into \\(\\csc\\theta = 2\\) so the reciprocal is visible before inverting."
        },
        {
          "stepNumber": 5,
          "description": "Take reciprocals of both sides",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "From \\(\\displaystyle\\frac{1}{\\sin\\theta} = 2\\) we get \\(\\sin\\theta = \\displaystyle\\frac{1}{2}\\). Don't forget to invert; leaving \\(\\sin\\theta = 2\\) is impossible since \\(|\\sin\\theta| \\le 1\\)."
        },
        {
          "stepNumber": 6,
          "description": "Check validity of cosec",
          "workingLatex": "|\\csc\\theta| = 2 \\ge 1",
          "explanation": "\\(\\csc\\) only takes values with \\(|\\csc\\theta| \\ge 1\\), so the value \\(2\\) is allowed and solutions exist."
        },
        {
          "stepNumber": 7,
          "description": "Find the base (acute) angle",
          "workingLatex": "\\sin^{-1}\\!\\left(\\frac{1}{2}\\right) = 30°",
          "explanation": "\\(\\sin 30° = \\displaystyle\\frac{1}{2}\\) is a standard exact value, giving the base angle \\(30°\\)."
        },
        {
          "stepNumber": 8,
          "description": "Identify the correct quadrants",
          "workingLatex": "\\sin\\theta > 0 \\Rightarrow \\text{quadrants 1 and 2}",
          "explanation": "\\(\\sin\\) is positive in quadrants 1 and 2, so we expect one solution in each of those quadrants.",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    15.372,
                    3.772
                  ],
                  [
                    16.47,
                    3.527
                  ],
                  [
                    17.568,
                    3.313
                  ],
                  [
                    18.666,
                    3.125
                  ],
                  [
                    19.764,
                    2.957
                  ],
                  [
                    20.862,
                    2.808
                  ],
                  [
                    21.96,
                    2.674
                  ],
                  [
                    23.058,
                    2.553
                  ],
                  [
                    24.156,
                    2.444
                  ],
                  [
                    25.254,
                    2.344
                  ],
                  [
                    26.352,
                    2.253
                  ],
                  [
                    27.45,
                    2.169
                  ],
                  [
                    28.548,
                    2.093
                  ],
                  [
                    29.646,
                    2.022
                  ],
                  [
                    30.744,
                    1.956
                  ],
                  [
                    31.842,
                    1.895
                  ],
                  [
                    32.94,
                    1.839
                  ],
                  [
                    34.038,
                    1.787
                  ],
                  [
                    35.136,
                    1.738
                  ],
                  [
                    36.234,
                    1.692
                  ],
                  [
                    37.332,
                    1.649
                  ],
                  [
                    38.43,
                    1.609
                  ],
                  [
                    39.528,
                    1.571
                  ],
                  [
                    40.626,
                    1.536
                  ],
                  [
                    41.724,
                    1.503
                  ],
                  [
                    42.822,
                    1.471
                  ],
                  [
                    43.92,
                    1.442
                  ],
                  [
                    45.018,
                    1.414
                  ],
                  [
                    46.116,
                    1.387
                  ],
                  [
                    47.214,
                    1.363
                  ],
                  [
                    48.312,
                    1.339
                  ],
                  [
                    49.41,
                    1.317
                  ],
                  [
                    50.508,
                    1.296
                  ],
                  [
                    51.606,
                    1.276
                  ],
                  [
                    52.704,
                    1.257
                  ],
                  [
                    53.802,
                    1.239
                  ],
                  [
                    54.9,
                    1.222
                  ],
                  [
                    55.998,
                    1.206
                  ],
                  [
                    57.096,
                    1.191
                  ],
                  [
                    58.194,
                    1.177
                  ],
                  [
                    59.292,
                    1.163
                  ],
                  [
                    60.39,
                    1.15
                  ],
                  [
                    61.488,
                    1.138
                  ],
                  [
                    62.586,
                    1.127
                  ],
                  [
                    63.684,
                    1.116
                  ],
                  [
                    64.782,
                    1.105
                  ],
                  [
                    65.88,
                    1.096
                  ],
                  [
                    66.978,
                    1.087
                  ],
                  [
                    68.076,
                    1.078
                  ],
                  [
                    69.174,
                    1.07
                  ],
                  [
                    70.272,
                    1.062
                  ],
                  [
                    71.37,
                    1.055
                  ],
                  [
                    72.468,
                    1.049
                  ],
                  [
                    73.566,
                    1.043
                  ],
                  [
                    74.664,
                    1.037
                  ],
                  [
                    75.762,
                    1.032
                  ],
                  [
                    76.86,
                    1.027
                  ],
                  [
                    77.958,
                    1.023
                  ],
                  [
                    79.056,
                    1.019
                  ],
                  [
                    80.154,
                    1.015
                  ],
                  [
                    81.252,
                    1.012
                  ],
                  [
                    82.35,
                    1.009
                  ],
                  [
                    83.448,
                    1.007
                  ],
                  [
                    84.546,
                    1.005
                  ],
                  [
                    85.644,
                    1.003
                  ],
                  [
                    86.742,
                    1.002
                  ],
                  [
                    87.84,
                    1.001
                  ],
                  [
                    88.938,
                    1
                  ],
                  [
                    90.036,
                    1
                  ],
                  [
                    91.134,
                    1
                  ],
                  [
                    92.232,
                    1.001
                  ],
                  [
                    93.33,
                    1.002
                  ],
                  [
                    94.428,
                    1.003
                  ],
                  [
                    95.526,
                    1.005
                  ],
                  [
                    96.624,
                    1.007
                  ],
                  [
                    97.722,
                    1.009
                  ],
                  [
                    98.82,
                    1.012
                  ],
                  [
                    99.918,
                    1.015
                  ],
                  [
                    101.016,
                    1.019
                  ],
                  [
                    102.114,
                    1.023
                  ],
                  [
                    103.212,
                    1.027
                  ],
                  [
                    104.31,
                    1.032
                  ],
                  [
                    105.408,
                    1.037
                  ],
                  [
                    106.506,
                    1.043
                  ],
                  [
                    107.604,
                    1.049
                  ],
                  [
                    108.702,
                    1.056
                  ],
                  [
                    109.8,
                    1.063
                  ],
                  [
                    110.898,
                    1.07
                  ],
                  [
                    111.996,
                    1.079
                  ],
                  [
                    113.094,
                    1.087
                  ],
                  [
                    114.192,
                    1.096
                  ],
                  [
                    115.29,
                    1.106
                  ],
                  [
                    116.388,
                    1.116
                  ],
                  [
                    117.486,
                    1.127
                  ],
                  [
                    118.584,
                    1.139
                  ],
                  [
                    119.682,
                    1.151
                  ],
                  [
                    120.78,
                    1.164
                  ],
                  [
                    121.878,
                    1.178
                  ],
                  [
                    122.976,
                    1.192
                  ],
                  [
                    124.074,
                    1.207
                  ],
                  [
                    125.172,
                    1.223
                  ],
                  [
                    126.27,
                    1.24
                  ],
                  [
                    127.368,
                    1.258
                  ],
                  [
                    128.466,
                    1.277
                  ],
                  [
                    129.564,
                    1.297
                  ],
                  [
                    130.662,
                    1.318
                  ],
                  [
                    131.76,
                    1.341
                  ],
                  [
                    132.858,
                    1.364
                  ],
                  [
                    133.956,
                    1.389
                  ],
                  [
                    135.054,
                    1.416
                  ],
                  [
                    136.152,
                    1.444
                  ],
                  [
                    137.25,
                    1.473
                  ],
                  [
                    138.348,
                    1.505
                  ],
                  [
                    139.446,
                    1.538
                  ],
                  [
                    140.544,
                    1.574
                  ],
                  [
                    141.642,
                    1.611
                  ],
                  [
                    142.74,
                    1.652
                  ],
                  [
                    143.838,
                    1.695
                  ],
                  [
                    144.936,
                    1.741
                  ],
                  [
                    146.034,
                    1.79
                  ],
                  [
                    147.132,
                    1.843
                  ],
                  [
                    148.23,
                    1.899
                  ],
                  [
                    149.328,
                    1.96
                  ],
                  [
                    150.426,
                    2.026
                  ],
                  [
                    151.524,
                    2.097
                  ],
                  [
                    152.622,
                    2.175
                  ],
                  [
                    153.72,
                    2.259
                  ],
                  [
                    154.818,
                    2.35
                  ],
                  [
                    155.916,
                    2.451
                  ],
                  [
                    157.014,
                    2.561
                  ],
                  [
                    158.112,
                    2.682
                  ],
                  [
                    159.21,
                    2.817
                  ],
                  [
                    160.308,
                    2.968
                  ],
                  [
                    161.406,
                    3.136
                  ],
                  [
                    162.504,
                    3.326
                  ],
                  [
                    163.602,
                    3.542
                  ],
                  [
                    164.7,
                    3.79
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\csc\\theta",
                "labelAt": [
                  95,
                  1.4
                ]
              },
              {
                "points": [
                  [
                    195.3,
                    -3.79
                  ],
                  [
                    196.398,
                    -3.542
                  ],
                  [
                    197.496,
                    -3.326
                  ],
                  [
                    198.594,
                    -3.136
                  ],
                  [
                    199.692,
                    -2.968
                  ],
                  [
                    200.79,
                    -2.817
                  ],
                  [
                    201.888,
                    -2.682
                  ],
                  [
                    202.986,
                    -2.561
                  ],
                  [
                    204.084,
                    -2.451
                  ],
                  [
                    205.182,
                    -2.35
                  ],
                  [
                    206.28,
                    -2.259
                  ],
                  [
                    207.378,
                    -2.175
                  ],
                  [
                    208.476,
                    -2.097
                  ],
                  [
                    209.574,
                    -2.026
                  ],
                  [
                    210.672,
                    -1.96
                  ],
                  [
                    211.77,
                    -1.899
                  ],
                  [
                    212.868,
                    -1.843
                  ],
                  [
                    213.966,
                    -1.79
                  ],
                  [
                    215.064,
                    -1.741
                  ],
                  [
                    216.162,
                    -1.695
                  ],
                  [
                    217.26,
                    -1.652
                  ],
                  [
                    218.358,
                    -1.611
                  ],
                  [
                    219.456,
                    -1.574
                  ],
                  [
                    220.554,
                    -1.538
                  ],
                  [
                    221.652,
                    -1.505
                  ],
                  [
                    222.75,
                    -1.473
                  ],
                  [
                    223.848,
                    -1.444
                  ],
                  [
                    224.946,
                    -1.416
                  ],
                  [
                    226.044,
                    -1.389
                  ],
                  [
                    227.142,
                    -1.364
                  ],
                  [
                    228.24,
                    -1.341
                  ],
                  [
                    229.338,
                    -1.318
                  ],
                  [
                    230.436,
                    -1.297
                  ],
                  [
                    231.534,
                    -1.277
                  ],
                  [
                    232.632,
                    -1.258
                  ],
                  [
                    233.73,
                    -1.24
                  ],
                  [
                    234.828,
                    -1.223
                  ],
                  [
                    235.926,
                    -1.207
                  ],
                  [
                    237.024,
                    -1.192
                  ],
                  [
                    238.122,
                    -1.178
                  ],
                  [
                    239.22,
                    -1.164
                  ],
                  [
                    240.318,
                    -1.151
                  ],
                  [
                    241.416,
                    -1.139
                  ],
                  [
                    242.514,
                    -1.127
                  ],
                  [
                    243.612,
                    -1.116
                  ],
                  [
                    244.71,
                    -1.106
                  ],
                  [
                    245.808,
                    -1.096
                  ],
                  [
                    246.906,
                    -1.087
                  ],
                  [
                    248.004,
                    -1.079
                  ],
                  [
                    249.102,
                    -1.07
                  ],
                  [
                    250.2,
                    -1.063
                  ],
                  [
                    251.298,
                    -1.056
                  ],
                  [
                    252.396,
                    -1.049
                  ],
                  [
                    253.494,
                    -1.043
                  ],
                  [
                    254.592,
                    -1.037
                  ],
                  [
                    255.69,
                    -1.032
                  ],
                  [
                    256.788,
                    -1.027
                  ],
                  [
                    257.886,
                    -1.023
                  ],
                  [
                    258.984,
                    -1.019
                  ],
                  [
                    260.082,
                    -1.015
                  ],
                  [
                    261.18,
                    -1.012
                  ],
                  [
                    262.278,
                    -1.009
                  ],
                  [
                    263.376,
                    -1.007
                  ],
                  [
                    264.474,
                    -1.005
                  ],
                  [
                    265.572,
                    -1.003
                  ],
                  [
                    266.67,
                    -1.002
                  ],
                  [
                    267.768,
                    -1.001
                  ],
                  [
                    268.866,
                    -1
                  ],
                  [
                    269.964,
                    -1
                  ],
                  [
                    271.062,
                    -1
                  ],
                  [
                    272.16,
                    -1.001
                  ],
                  [
                    273.258,
                    -1.002
                  ],
                  [
                    274.356,
                    -1.003
                  ],
                  [
                    275.454,
                    -1.005
                  ],
                  [
                    276.552,
                    -1.007
                  ],
                  [
                    277.65,
                    -1.009
                  ],
                  [
                    278.748,
                    -1.012
                  ],
                  [
                    279.846,
                    -1.015
                  ],
                  [
                    280.944,
                    -1.019
                  ],
                  [
                    282.042,
                    -1.023
                  ],
                  [
                    283.14,
                    -1.027
                  ],
                  [
                    284.238,
                    -1.032
                  ],
                  [
                    285.336,
                    -1.037
                  ],
                  [
                    286.434,
                    -1.043
                  ],
                  [
                    287.532,
                    -1.049
                  ],
                  [
                    288.63,
                    -1.055
                  ],
                  [
                    289.728,
                    -1.062
                  ],
                  [
                    290.826,
                    -1.07
                  ],
                  [
                    291.924,
                    -1.078
                  ],
                  [
                    293.022,
                    -1.087
                  ],
                  [
                    294.12,
                    -1.096
                  ],
                  [
                    295.218,
                    -1.105
                  ],
                  [
                    296.316,
                    -1.116
                  ],
                  [
                    297.414,
                    -1.127
                  ],
                  [
                    298.512,
                    -1.138
                  ],
                  [
                    299.61,
                    -1.15
                  ],
                  [
                    300.708,
                    -1.163
                  ],
                  [
                    301.806,
                    -1.177
                  ],
                  [
                    302.904,
                    -1.191
                  ],
                  [
                    304.002,
                    -1.206
                  ],
                  [
                    305.1,
                    -1.222
                  ],
                  [
                    306.198,
                    -1.239
                  ],
                  [
                    307.296,
                    -1.257
                  ],
                  [
                    308.394,
                    -1.276
                  ],
                  [
                    309.492,
                    -1.296
                  ],
                  [
                    310.59,
                    -1.317
                  ],
                  [
                    311.688,
                    -1.339
                  ],
                  [
                    312.786,
                    -1.363
                  ],
                  [
                    313.884,
                    -1.387
                  ],
                  [
                    314.982,
                    -1.414
                  ],
                  [
                    316.08,
                    -1.442
                  ],
                  [
                    317.178,
                    -1.471
                  ],
                  [
                    318.276,
                    -1.503
                  ],
                  [
                    319.374,
                    -1.536
                  ],
                  [
                    320.472,
                    -1.571
                  ],
                  [
                    321.57,
                    -1.609
                  ],
                  [
                    322.668,
                    -1.649
                  ],
                  [
                    323.766,
                    -1.692
                  ],
                  [
                    324.864,
                    -1.738
                  ],
                  [
                    325.962,
                    -1.787
                  ],
                  [
                    327.06,
                    -1.839
                  ],
                  [
                    328.158,
                    -1.895
                  ],
                  [
                    329.256,
                    -1.956
                  ],
                  [
                    330.354,
                    -2.022
                  ],
                  [
                    331.452,
                    -2.093
                  ],
                  [
                    332.55,
                    -2.169
                  ],
                  [
                    333.648,
                    -2.253
                  ],
                  [
                    334.746,
                    -2.344
                  ],
                  [
                    335.844,
                    -2.444
                  ],
                  [
                    336.942,
                    -2.553
                  ],
                  [
                    338.04,
                    -2.674
                  ],
                  [
                    339.138,
                    -2.808
                  ],
                  [
                    340.236,
                    -2.957
                  ],
                  [
                    341.334,
                    -3.125
                  ],
                  [
                    342.432,
                    -3.313
                  ],
                  [
                    343.53,
                    -3.527
                  ],
                  [
                    344.628,
                    -3.772
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  180,
                  -4
                ],
                "to": [
                  180,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  360,
                  2
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=2",
                "labelAt": [
                  28.8,
                  2.3
                ]
              }
            ],
            "points": [
              {
                "at": [
                  30,
                  2
                ],
                "label": "30^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  150,
                  2
                ],
                "label": "150^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 9,
          "description": "First-quadrant solution",
          "workingLatex": "\\theta = 30°",
          "explanation": "The base angle itself is the quadrant-1 solution and lies in \\([0°, 360°]\\)."
        },
        {
          "stepNumber": 10,
          "description": "Second-quadrant solution",
          "workingLatex": "\\theta = 180° - 30° = 150°",
          "explanation": "In quadrant 2 the angle is \\(180°\\) minus the base angle. A common slip is using \\(360° - 30°\\), which applies to \\(\\cos\\), not \\(\\sin\\)."
        },
        {
          "stepNumber": 11,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30°, 150°",
          "explanation": "Both values lie within \\([0°, 360°]\\), so these are the complete set of solutions."
        }
      ],
      "finalAnswer": "\\(\\theta = 30°, 150°\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-045",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 37",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\cot\\theta = -\\sqrt 3\\) for \\(0 \\le \\theta \\le 360°\\).",
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
          "description": "Recall the definition of cot",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "\\(\\cot\\) is the reciprocal of \\(\\tan\\). We convert to \\(\\tan\\theta\\) so we can use the standard inverse-tangent approach."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation using tan",
          "workingLatex": "\\frac{1}{\\tan\\theta} = -\\sqrt 3",
          "explanation": "Substitute the definition into \\(\\cot\\theta = -\\sqrt 3\\) so the reciprocal is visible before we invert."
        },
        {
          "stepNumber": 3,
          "description": "Take reciprocals of both sides",
          "workingLatex": "\\tan\\theta = -\\frac{1}{\\sqrt 3}",
          "explanation": "The reciprocal of \\(-\\sqrt 3\\) is \\(-\\displaystyle\\frac{1}{\\sqrt 3}\\), keeping the negative sign. The sign must be carried through carefully."
        },
        {
          "stepNumber": 4,
          "description": "Find the base (acute) angle",
          "workingLatex": "\\tan^{-1}\\!\\left(\\frac{1}{\\sqrt 3}\\right) = 30°",
          "explanation": "Ignore the sign first and find the acute angle whose tangent is \\(\\displaystyle\\frac{1}{\\sqrt 3}\\); that is \\(30°\\). The sign will tell us which quadrants to use."
        },
        {
          "stepNumber": 5,
          "description": "Identify the correct quadrants",
          "workingLatex": "\\tan\\theta < 0 \\Rightarrow \\text{quadrants 2 and 4}",
          "explanation": "\\(\\tan\\) is negative in quadrants 2 and 4. We place the base angle \\(30°\\) into each of these quadrants.",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    14.274,
                    3.931
                  ],
                  [
                    15.372,
                    3.637
                  ],
                  [
                    16.47,
                    3.382
                  ],
                  [
                    17.568,
                    3.159
                  ],
                  [
                    18.666,
                    2.96
                  ],
                  [
                    19.764,
                    2.783
                  ],
                  [
                    20.862,
                    2.624
                  ],
                  [
                    21.96,
                    2.48
                  ],
                  [
                    23.058,
                    2.349
                  ],
                  [
                    24.156,
                    2.23
                  ],
                  [
                    25.254,
                    2.12
                  ],
                  [
                    26.352,
                    2.019
                  ],
                  [
                    27.45,
                    1.925
                  ],
                  [
                    28.548,
                    1.838
                  ],
                  [
                    29.646,
                    1.757
                  ],
                  [
                    30.744,
                    1.681
                  ],
                  [
                    31.842,
                    1.61
                  ],
                  [
                    32.94,
                    1.543
                  ],
                  [
                    34.038,
                    1.48
                  ],
                  [
                    35.136,
                    1.421
                  ],
                  [
                    36.234,
                    1.365
                  ],
                  [
                    37.332,
                    1.311
                  ],
                  [
                    38.43,
                    1.26
                  ],
                  [
                    39.528,
                    1.212
                  ],
                  [
                    40.626,
                    1.166
                  ],
                  [
                    41.724,
                    1.121
                  ],
                  [
                    42.822,
                    1.079
                  ],
                  [
                    43.92,
                    1.038
                  ],
                  [
                    45.018,
                    0.999
                  ],
                  [
                    46.116,
                    0.962
                  ],
                  [
                    47.214,
                    0.926
                  ],
                  [
                    48.312,
                    0.891
                  ],
                  [
                    49.41,
                    0.857
                  ],
                  [
                    50.508,
                    0.824
                  ],
                  [
                    51.606,
                    0.792
                  ],
                  [
                    52.704,
                    0.762
                  ],
                  [
                    53.802,
                    0.732
                  ],
                  [
                    54.9,
                    0.703
                  ],
                  [
                    55.998,
                    0.675
                  ],
                  [
                    57.096,
                    0.647
                  ],
                  [
                    58.194,
                    0.62
                  ],
                  [
                    59.292,
                    0.594
                  ],
                  [
                    60.39,
                    0.568
                  ],
                  [
                    61.488,
                    0.543
                  ],
                  [
                    62.586,
                    0.519
                  ],
                  [
                    63.684,
                    0.495
                  ],
                  [
                    64.782,
                    0.471
                  ],
                  [
                    65.88,
                    0.448
                  ],
                  [
                    66.978,
                    0.425
                  ],
                  [
                    68.076,
                    0.402
                  ],
                  [
                    69.174,
                    0.38
                  ],
                  [
                    70.272,
                    0.359
                  ],
                  [
                    71.37,
                    0.337
                  ],
                  [
                    72.468,
                    0.316
                  ],
                  [
                    73.566,
                    0.295
                  ],
                  [
                    74.664,
                    0.274
                  ],
                  [
                    75.762,
                    0.254
                  ],
                  [
                    76.86,
                    0.233
                  ],
                  [
                    77.958,
                    0.213
                  ],
                  [
                    79.056,
                    0.193
                  ],
                  [
                    80.154,
                    0.174
                  ],
                  [
                    81.252,
                    0.154
                  ],
                  [
                    82.35,
                    0.134
                  ],
                  [
                    83.448,
                    0.115
                  ],
                  [
                    84.546,
                    0.095
                  ],
                  [
                    85.644,
                    0.076
                  ],
                  [
                    86.742,
                    0.057
                  ],
                  [
                    87.84,
                    0.038
                  ],
                  [
                    88.938,
                    0.019
                  ],
                  [
                    90.036,
                    -0.001
                  ],
                  [
                    91.134,
                    -0.02
                  ],
                  [
                    92.232,
                    -0.039
                  ],
                  [
                    93.33,
                    -0.058
                  ],
                  [
                    94.428,
                    -0.077
                  ],
                  [
                    95.526,
                    -0.097
                  ],
                  [
                    96.624,
                    -0.116
                  ],
                  [
                    97.722,
                    -0.136
                  ],
                  [
                    98.82,
                    -0.155
                  ],
                  [
                    99.918,
                    -0.175
                  ],
                  [
                    101.016,
                    -0.195
                  ],
                  [
                    102.114,
                    -0.215
                  ],
                  [
                    103.212,
                    -0.235
                  ],
                  [
                    104.31,
                    -0.255
                  ],
                  [
                    105.408,
                    -0.276
                  ],
                  [
                    106.506,
                    -0.296
                  ],
                  [
                    107.604,
                    -0.317
                  ],
                  [
                    108.702,
                    -0.339
                  ],
                  [
                    109.8,
                    -0.36
                  ],
                  [
                    110.898,
                    -0.382
                  ],
                  [
                    111.996,
                    -0.404
                  ],
                  [
                    113.094,
                    -0.426
                  ],
                  [
                    114.192,
                    -0.449
                  ],
                  [
                    115.29,
                    -0.472
                  ],
                  [
                    116.388,
                    -0.496
                  ],
                  [
                    117.486,
                    -0.52
                  ],
                  [
                    118.584,
                    -0.545
                  ],
                  [
                    119.682,
                    -0.57
                  ],
                  [
                    120.78,
                    -0.596
                  ],
                  [
                    121.878,
                    -0.622
                  ],
                  [
                    122.976,
                    -0.649
                  ],
                  [
                    124.074,
                    -0.676
                  ],
                  [
                    125.172,
                    -0.705
                  ],
                  [
                    126.27,
                    -0.734
                  ],
                  [
                    127.368,
                    -0.764
                  ],
                  [
                    128.466,
                    -0.794
                  ],
                  [
                    129.564,
                    -0.826
                  ],
                  [
                    130.662,
                    -0.859
                  ],
                  [
                    131.76,
                    -0.893
                  ],
                  [
                    132.858,
                    -0.928
                  ],
                  [
                    133.956,
                    -0.964
                  ],
                  [
                    135.054,
                    -1.002
                  ],
                  [
                    136.152,
                    -1.041
                  ],
                  [
                    137.25,
                    -1.082
                  ],
                  [
                    138.348,
                    -1.124
                  ],
                  [
                    139.446,
                    -1.169
                  ],
                  [
                    140.544,
                    -1.215
                  ],
                  [
                    141.642,
                    -1.264
                  ],
                  [
                    142.74,
                    -1.315
                  ],
                  [
                    143.838,
                    -1.368
                  ],
                  [
                    144.936,
                    -1.425
                  ],
                  [
                    146.034,
                    -1.484
                  ],
                  [
                    147.132,
                    -1.548
                  ],
                  [
                    148.23,
                    -1.615
                  ],
                  [
                    149.328,
                    -1.686
                  ],
                  [
                    150.426,
                    -1.762
                  ],
                  [
                    151.524,
                    -1.844
                  ],
                  [
                    152.622,
                    -1.931
                  ],
                  [
                    153.72,
                    -2.025
                  ],
                  [
                    154.818,
                    -2.127
                  ],
                  [
                    155.916,
                    -2.237
                  ],
                  [
                    157.014,
                    -2.357
                  ],
                  [
                    158.112,
                    -2.489
                  ],
                  [
                    159.21,
                    -2.634
                  ],
                  [
                    160.308,
                    -2.794
                  ],
                  [
                    161.406,
                    -2.972
                  ],
                  [
                    162.504,
                    -3.172
                  ],
                  [
                    163.602,
                    -3.398
                  ],
                  [
                    164.7,
                    -3.655
                  ],
                  [
                    165.798,
                    -3.951
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cot\\theta",
                "labelAt": [
                  55,
                  1.2
                ]
              },
              {
                "points": [
                  [
                    194.202,
                    3.951
                  ],
                  [
                    195.3,
                    3.655
                  ],
                  [
                    196.398,
                    3.398
                  ],
                  [
                    197.496,
                    3.172
                  ],
                  [
                    198.594,
                    2.972
                  ],
                  [
                    199.692,
                    2.794
                  ],
                  [
                    200.79,
                    2.634
                  ],
                  [
                    201.888,
                    2.489
                  ],
                  [
                    202.986,
                    2.357
                  ],
                  [
                    204.084,
                    2.237
                  ],
                  [
                    205.182,
                    2.127
                  ],
                  [
                    206.28,
                    2.025
                  ],
                  [
                    207.378,
                    1.931
                  ],
                  [
                    208.476,
                    1.844
                  ],
                  [
                    209.574,
                    1.762
                  ],
                  [
                    210.672,
                    1.686
                  ],
                  [
                    211.77,
                    1.615
                  ],
                  [
                    212.868,
                    1.548
                  ],
                  [
                    213.966,
                    1.484
                  ],
                  [
                    215.064,
                    1.425
                  ],
                  [
                    216.162,
                    1.368
                  ],
                  [
                    217.26,
                    1.315
                  ],
                  [
                    218.358,
                    1.264
                  ],
                  [
                    219.456,
                    1.215
                  ],
                  [
                    220.554,
                    1.169
                  ],
                  [
                    221.652,
                    1.124
                  ],
                  [
                    222.75,
                    1.082
                  ],
                  [
                    223.848,
                    1.041
                  ],
                  [
                    224.946,
                    1.002
                  ],
                  [
                    226.044,
                    0.964
                  ],
                  [
                    227.142,
                    0.928
                  ],
                  [
                    228.24,
                    0.893
                  ],
                  [
                    229.338,
                    0.859
                  ],
                  [
                    230.436,
                    0.826
                  ],
                  [
                    231.534,
                    0.794
                  ],
                  [
                    232.632,
                    0.764
                  ],
                  [
                    233.73,
                    0.734
                  ],
                  [
                    234.828,
                    0.705
                  ],
                  [
                    235.926,
                    0.676
                  ],
                  [
                    237.024,
                    0.649
                  ],
                  [
                    238.122,
                    0.622
                  ],
                  [
                    239.22,
                    0.596
                  ],
                  [
                    240.318,
                    0.57
                  ],
                  [
                    241.416,
                    0.545
                  ],
                  [
                    242.514,
                    0.52
                  ],
                  [
                    243.612,
                    0.496
                  ],
                  [
                    244.71,
                    0.472
                  ],
                  [
                    245.808,
                    0.449
                  ],
                  [
                    246.906,
                    0.426
                  ],
                  [
                    248.004,
                    0.404
                  ],
                  [
                    249.102,
                    0.382
                  ],
                  [
                    250.2,
                    0.36
                  ],
                  [
                    251.298,
                    0.339
                  ],
                  [
                    252.396,
                    0.317
                  ],
                  [
                    253.494,
                    0.296
                  ],
                  [
                    254.592,
                    0.276
                  ],
                  [
                    255.69,
                    0.255
                  ],
                  [
                    256.788,
                    0.235
                  ],
                  [
                    257.886,
                    0.215
                  ],
                  [
                    258.984,
                    0.195
                  ],
                  [
                    260.082,
                    0.175
                  ],
                  [
                    261.18,
                    0.155
                  ],
                  [
                    262.278,
                    0.136
                  ],
                  [
                    263.376,
                    0.116
                  ],
                  [
                    264.474,
                    0.097
                  ],
                  [
                    265.572,
                    0.077
                  ],
                  [
                    266.67,
                    0.058
                  ],
                  [
                    267.768,
                    0.039
                  ],
                  [
                    268.866,
                    0.02
                  ],
                  [
                    269.964,
                    0.001
                  ],
                  [
                    271.062,
                    -0.019
                  ],
                  [
                    272.16,
                    -0.038
                  ],
                  [
                    273.258,
                    -0.057
                  ],
                  [
                    274.356,
                    -0.076
                  ],
                  [
                    275.454,
                    -0.095
                  ],
                  [
                    276.552,
                    -0.115
                  ],
                  [
                    277.65,
                    -0.134
                  ],
                  [
                    278.748,
                    -0.154
                  ],
                  [
                    279.846,
                    -0.174
                  ],
                  [
                    280.944,
                    -0.193
                  ],
                  [
                    282.042,
                    -0.213
                  ],
                  [
                    283.14,
                    -0.233
                  ],
                  [
                    284.238,
                    -0.254
                  ],
                  [
                    285.336,
                    -0.274
                  ],
                  [
                    286.434,
                    -0.295
                  ],
                  [
                    287.532,
                    -0.316
                  ],
                  [
                    288.63,
                    -0.337
                  ],
                  [
                    289.728,
                    -0.359
                  ],
                  [
                    290.826,
                    -0.38
                  ],
                  [
                    291.924,
                    -0.402
                  ],
                  [
                    293.022,
                    -0.425
                  ],
                  [
                    294.12,
                    -0.448
                  ],
                  [
                    295.218,
                    -0.471
                  ],
                  [
                    296.316,
                    -0.495
                  ],
                  [
                    297.414,
                    -0.519
                  ],
                  [
                    298.512,
                    -0.543
                  ],
                  [
                    299.61,
                    -0.568
                  ],
                  [
                    300.708,
                    -0.594
                  ],
                  [
                    301.806,
                    -0.62
                  ],
                  [
                    302.904,
                    -0.647
                  ],
                  [
                    304.002,
                    -0.675
                  ],
                  [
                    305.1,
                    -0.703
                  ],
                  [
                    306.198,
                    -0.732
                  ],
                  [
                    307.296,
                    -0.762
                  ],
                  [
                    308.394,
                    -0.792
                  ],
                  [
                    309.492,
                    -0.824
                  ],
                  [
                    310.59,
                    -0.857
                  ],
                  [
                    311.688,
                    -0.891
                  ],
                  [
                    312.786,
                    -0.926
                  ],
                  [
                    313.884,
                    -0.962
                  ],
                  [
                    314.982,
                    -0.999
                  ],
                  [
                    316.08,
                    -1.038
                  ],
                  [
                    317.178,
                    -1.079
                  ],
                  [
                    318.276,
                    -1.121
                  ],
                  [
                    319.374,
                    -1.166
                  ],
                  [
                    320.472,
                    -1.212
                  ],
                  [
                    321.57,
                    -1.26
                  ],
                  [
                    322.668,
                    -1.311
                  ],
                  [
                    323.766,
                    -1.365
                  ],
                  [
                    324.864,
                    -1.421
                  ],
                  [
                    325.962,
                    -1.48
                  ],
                  [
                    327.06,
                    -1.543
                  ],
                  [
                    328.158,
                    -1.61
                  ],
                  [
                    329.256,
                    -1.681
                  ],
                  [
                    330.354,
                    -1.757
                  ],
                  [
                    331.452,
                    -1.838
                  ],
                  [
                    332.55,
                    -1.925
                  ],
                  [
                    333.648,
                    -2.019
                  ],
                  [
                    334.746,
                    -2.12
                  ],
                  [
                    335.844,
                    -2.23
                  ],
                  [
                    336.942,
                    -2.349
                  ],
                  [
                    338.04,
                    -2.48
                  ],
                  [
                    339.138,
                    -2.624
                  ],
                  [
                    340.236,
                    -2.783
                  ],
                  [
                    341.334,
                    -2.96
                  ],
                  [
                    342.432,
                    -3.159
                  ],
                  [
                    343.53,
                    -3.382
                  ],
                  [
                    344.628,
                    -3.637
                  ],
                  [
                    345.726,
                    -3.931
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  180,
                  -4
                ],
                "to": [
                  180,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  0,
                  -1.7321
                ],
                "to": [
                  360,
                  -1.7321
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=-\\sqrt{3}",
                "labelAt": [
                  28.8,
                  -1.4321
                ]
              }
            ],
            "points": [
              {
                "at": [
                  150,
                  -1.732
                ],
                "label": "150^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  330,
                  -1.732
                ],
                "label": "330^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 6,
          "description": "Second-quadrant solution",
          "workingLatex": "\\theta = 180° - 30° = 150°",
          "explanation": "In quadrant 2 the angle is \\(180°\\) minus the base angle, giving \\(150°\\), which lies in \\([0°, 360°]\\)."
        },
        {
          "stepNumber": 7,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 360° - 30° = 330°",
          "explanation": "In quadrant 4 the angle is \\(360°\\) minus the base angle, giving \\(330°\\), which also lies in \\([0°, 360°]\\)."
        },
        {
          "stepNumber": 8,
          "description": "State the solutions",
          "workingLatex": "\\theta = 150°, 330°",
          "explanation": "These are the two solutions in range. A common slip is giving \\(30°\\) and \\(210°\\) (the \\(\\tan = +\\displaystyle\\frac{1}{\\sqrt 3}\\) answers) and forgetting the negative sign."
        }
      ],
      "finalAnswer": "\\(\\theta = 150°, 330°\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-046",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 58",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\sec 2\\theta = 2\\) for \\(\\theta \\in [0, 2\\pi]\\).",
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
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is not a brand-new function: it is just the reciprocal of cosine. Writing this definition down first stops the common slip of treating \\(\\sec\\) as if it had its own separate graph or rules."
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition to the equation",
          "workingLatex": "\\sec 2\\theta = \\frac{1}{\\cos 2\\theta} = 2",
          "explanation": "Here the angle inside is \\(2\\theta\\), so \\(\\sec 2\\theta = \\displaystyle\\frac{1}{\\cos 2\\theta}\\). The whole equation now says that the reciprocal of \\(\\cos 2\\theta\\) equals \\(2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Cross-multiply by the cosine",
          "workingLatex": "1 = 2\\cos 2\\theta",
          "explanation": "Multiplying both sides of \\(\\displaystyle\\frac{1}{\\cos 2\\theta} = 2\\) by \\(\\cos 2\\theta\\) clears the fraction. This intermediate line makes the next rearrangement obvious."
        },
        {
          "stepNumber": 4,
          "description": "Isolate the cosine term",
          "workingLatex": "\\cos 2\\theta = \\frac{1}{2}",
          "explanation": "Dividing both sides by \\(2\\) leaves \\(\\cos 2\\theta\\) alone. Converting a \\(\\sec\\) equation into a \\(\\cos\\) equation is the standard first goal for every problem of this type."
        },
        {
          "stepNumber": 5,
          "description": "Convert the interval for the double angle",
          "workingLatex": "\\theta \\in [0, 2\\pi] \\implies 2\\theta \\in [0, 4\\pi]",
          "explanation": "Because the equation is written in \\(2\\theta\\), we must work in a range for \\(2\\theta\\), found by multiplying both endpoints of the \\(\\theta\\)-interval by \\(2\\). Forgetting to widen the interval is the single most common cause of lost solutions here."
        },
        {
          "stepNumber": 6,
          "description": "Find the principal value",
          "workingLatex": "2\\theta = \\arccos\\frac{1}{2} = \\frac{\\pi}{3}",
          "explanation": "The first-quadrant angle whose cosine is \\(\\displaystyle\\frac{1}{2}\\) is \\(\\displaystyle\\frac{\\pi}{3}\\) (that is \\(60^{\\circ}\\)). This is the base solution from which all the others are generated."
        },
        {
          "stepNumber": 7,
          "description": "Use cosine symmetry for the second value",
          "workingLatex": "2\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{6\\pi}{3} - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant, where \\(\\cos(2\\pi - x) = \\cos x\\). Writing \\(2\\pi\\) as \\(\\displaystyle\\frac{6\\pi}{3}\\) first makes the subtraction of thirds clean. Students often forget this symmetric solution."
        },
        {
          "stepNumber": 8,
          "description": "Add a full turn to the first base value",
          "workingLatex": "2\\theta = \\frac{\\pi}{3} + 2\\pi = \\frac{\\pi}{3} + \\frac{6\\pi}{3} = \\frac{7\\pi}{3}",
          "explanation": "Cosine repeats every \\(2\\pi\\), so adding \\(2\\pi\\) to a solution gives another. Since \\(2\\theta\\) reaches up to \\(4\\pi = \\displaystyle\\frac{12\\pi}{3}\\), this new value \\(\\displaystyle\\frac{7\\pi}{3}\\) is still in range."
        },
        {
          "stepNumber": 9,
          "description": "Add a full turn to the second base value",
          "workingLatex": "2\\theta = \\frac{5\\pi}{3} + 2\\pi = \\frac{5\\pi}{3} + \\frac{6\\pi}{3} = \\frac{11\\pi}{3}",
          "explanation": "Repeating the \\(+2\\pi\\) step on the fourth-quadrant value gives \\(\\displaystyle\\frac{11\\pi}{3}\\). As \\(\\displaystyle\\frac{11\\pi}{3} < \\displaystyle\\frac{12\\pi}{3} = 4\\pi\\), it too lies inside the allowed range."
        },
        {
          "stepNumber": 10,
          "description": "Confirm no further values fit",
          "workingLatex": "\\frac{\\pi}{3} + 4\\pi = \\frac{13\\pi}{3} > \\frac{12\\pi}{3} = 4\\pi",
          "explanation": "The next candidate after \\(\\displaystyle\\frac{7\\pi}{3}\\) would be \\(\\displaystyle\\frac{13\\pi}{3}\\), which exceeds \\(4\\pi\\), so we stop adding turns. Checking the next value explicitly guards against both missing and inventing solutions."
        },
        {
          "stepNumber": 11,
          "description": "List all values of \\(2\\theta\\) in range",
          "workingLatex": "2\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}, \\frac{11\\pi}{3}",
          "explanation": "These are every solution of \\(\\cos 2\\theta = \\displaystyle\\frac{1}{2}\\) within \\([0, 4\\pi]\\). We now have four candidates ready to be turned back into \\(\\theta\\)."
        },
        {
          "stepNumber": 12,
          "description": "Divide each value by 2 for theta",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}",
          "explanation": "Halving each \\(2\\theta\\) value recovers \\(\\theta\\). Dividing a fraction by \\(2\\) doubles its denominator, so \\(\\displaystyle\\frac{\\pi}{3}\\) becomes \\(\\displaystyle\\frac{\\pi}{6}\\), and so on."
        },
        {
          "stepNumber": 13,
          "description": "Check all answers lie in the interval",
          "workingLatex": "0 \\le \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6} \\le 2\\pi",
          "explanation": "Each of the four values sits inside the original interval \\([0, 2\\pi]\\), so all are accepted. A final range check is a cheap way to catch any value that drifted outside."
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}, \\displaystyle\\frac{7\\pi}{6}, \\displaystyle\\frac{11\\pi}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-047",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 59",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\csc\\left(\\theta + \\displaystyle\\frac{\\pi}{6}\\right) = 2\\) on \\([0, 2\\pi]\\).",
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
          "description": "Recall the definition of cosecant",
          "workingLatex": "\\csc x = \\frac{1}{\\sin x}",
          "explanation": "Cosecant is the reciprocal of sine, not of cosine. Pinning this down first prevents the frequent mix-up with \\(\\sec\\), which is \\(\\displaystyle\\frac{1}{\\cos}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition to the equation",
          "workingLatex": "\\csc\\left(\\theta+\\frac{\\pi}{6}\\right) = \\frac{1}{\\sin\\left(\\theta+\\frac{\\pi}{6}\\right)} = 2",
          "explanation": "The angle inside is \\(\\theta + \\displaystyle\\frac{\\pi}{6}\\), so the equation states that the reciprocal of \\(\\sin\\left(\\theta + \\displaystyle\\frac{\\pi}{6}\\right)\\) equals \\(2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Cross-multiply by the sine",
          "workingLatex": "1 = 2\\sin\\left(\\theta+\\frac{\\pi}{6}\\right)",
          "explanation": "Multiplying both sides by \\(\\sin\\left(\\theta + \\displaystyle\\frac{\\pi}{6}\\right)\\) clears the fraction, giving a tidy linear equation in the sine. This intermediate line makes the next step routine."
        },
        {
          "stepNumber": 4,
          "description": "Isolate the sine term",
          "workingLatex": "\\sin\\left(\\theta+\\frac{\\pi}{6}\\right) = \\frac{1}{2}",
          "explanation": "Dividing both sides by \\(2\\) leaves the sine alone. We have now converted the cosec equation into a sine equation, which we can solve with standard methods."
        },
        {
          "stepNumber": 5,
          "description": "Substitute to simplify the argument",
          "workingLatex": "\\text{let } \\varphi = \\theta + \\frac{\\pi}{6}, \\quad \\text{so} \\quad \\sin\\varphi = \\frac{1}{2}",
          "explanation": "Naming the shifted angle \\(\\varphi\\) turns the problem into the familiar \\(\\sin\\varphi = \\displaystyle\\frac{1}{2}\\). The price of the substitution is that we must also shift the interval, where many marks are lost."
        },
        {
          "stepNumber": 6,
          "description": "Shift both endpoints of the interval",
          "workingLatex": "\\theta \\in [0,2\\pi] \\implies \\varphi \\in \\left[0+\\frac{\\pi}{6},\\; 2\\pi+\\frac{\\pi}{6}\\right]",
          "explanation": "Since \\(\\varphi = \\theta + \\displaystyle\\frac{\\pi}{6}\\), add \\(\\displaystyle\\frac{\\pi}{6}\\) to each endpoint of the \\(\\theta\\)-range. Showing the addition on both ends before simplifying prevents arithmetic slips."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the shifted interval",
          "workingLatex": "\\varphi \\in \\left[\\frac{\\pi}{6},\\; \\frac{13\\pi}{6}\\right]",
          "explanation": "Writing \\(2\\pi\\) as \\(\\displaystyle\\frac{12\\pi}{6}\\) gives the upper endpoint \\(\\displaystyle\\frac{12\\pi}{6} + \\displaystyle\\frac{\\pi}{6} = \\displaystyle\\frac{13\\pi}{6}\\). Solutions must be found in this window, not in \\([0, 2\\pi]\\)."
        },
        {
          "stepNumber": 8,
          "description": "Find the principal value",
          "workingLatex": "\\varphi = \\arcsin\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "The first-quadrant angle with sine \\(\\displaystyle\\frac{1}{2}\\) is \\(\\displaystyle\\frac{\\pi}{6}\\). This base solution sits exactly at the lower edge of the window, so it just qualifies."
        },
        {
          "stepNumber": 9,
          "description": "Use sine symmetry for the second value",
          "workingLatex": "\\varphi = \\pi - \\frac{\\pi}{6} = \\frac{6\\pi}{6} - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is also positive in the second quadrant, where \\(\\sin(\\pi - x) = \\sin x\\). Writing \\(\\pi\\) as \\(\\displaystyle\\frac{6\\pi}{6}\\) keeps the subtraction of sixths clean. Omitting this supplementary solution is a frequent error."
        },
        {
          "stepNumber": 10,
          "description": "Add a full turn to the base value",
          "workingLatex": "\\varphi = \\frac{\\pi}{6} + 2\\pi = \\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{13\\pi}{6}",
          "explanation": "Sine repeats every \\(2\\pi\\), so adding a full turn to \\(\\displaystyle\\frac{\\pi}{6}\\) gives \\(\\displaystyle\\frac{13\\pi}{6}\\). This equals the upper endpoint of the window, so it is included."
        },
        {
          "stepNumber": 11,
          "description": "Test adding a turn to the second value",
          "workingLatex": "\\frac{5\\pi}{6} + 2\\pi = \\frac{17\\pi}{6} > \\frac{13\\pi}{6}",
          "explanation": "Adding \\(2\\pi\\) to \\(\\displaystyle\\frac{5\\pi}{6}\\) gives \\(\\displaystyle\\frac{17\\pi}{6}\\), which exceeds the window's upper limit \\(\\displaystyle\\frac{13\\pi}{6}\\), so this candidate is rejected. Checking it explicitly shows nothing valid is missed."
        },
        {
          "stepNumber": 12,
          "description": "List the valid phi values",
          "workingLatex": "\\varphi = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}",
          "explanation": "These are all the solutions of \\(\\sin\\varphi = \\displaystyle\\frac{1}{2}\\) lying within \\(\\left[\\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{13\\pi}{6}\\right]\\). We now reverse the substitution to recover \\(\\theta\\)."
        },
        {
          "stepNumber": 13,
          "description": "Subtract pi over 6 from each value",
          "workingLatex": "\\theta = \\varphi - \\frac{\\pi}{6} = \\frac{\\pi}{6}-\\frac{\\pi}{6},\\; \\frac{5\\pi}{6}-\\frac{\\pi}{6},\\; \\frac{13\\pi}{6}-\\frac{\\pi}{6}",
          "explanation": "Undo the substitution by subtracting \\(\\displaystyle\\frac{\\pi}{6}\\) from each \\(\\varphi\\). Showing the subtractions lined up makes the final simplification transparent."
        },
        {
          "stepNumber": 14,
          "description": "Simplify to the final theta values",
          "workingLatex": "\\theta = 0, \\frac{4\\pi}{6}, \\frac{12\\pi}{6} = 0, \\frac{2\\pi}{3}, 2\\pi",
          "explanation": "The three results \\(0\\), \\(\\displaystyle\\frac{2\\pi}{3}\\) and \\(2\\pi\\) all lie in \\([0, 2\\pi]\\), so all are accepted. The endpoints \\(0\\) and \\(2\\pi\\) are genuine solutions here, which is easy to overlook."
        }
      ],
      "finalAnswer": "\\(\\theta = 0, \\displaystyle\\frac{2\\pi}{3}, 2\\pi\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-048",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 60",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sec 15° = \\sqrt 6 - \\sqrt 2 + \\text{something}\\)... use \\(\\tan^2\\theta = \\sec^2\\theta - 1\\) to find \\(\\tan^2 60°\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the core identity for this topic, obtained by dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) through by \\(\\cos^2\\theta\\). Stating it in full first makes the rearrangement clear."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make tan squared the subject",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtracting \\(1\\) from both sides isolates \\(\\tan^2\\theta\\). This is the exact form the question asks us to use, and it lets us find \\(\\tan^2\\) from \\(\\sec\\)."
        },
        {
          "stepNumber": 3,
          "description": "Set theta equal to 60 degrees",
          "workingLatex": "\\tan^2 60^{\\circ} = \\sec^2 60^{\\circ} - 1",
          "explanation": "Substituting \\(\\theta = 60^{\\circ}\\) targets the specific value we want. We now just need \\(\\sec^2 60^{\\circ}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write secant as reciprocal cosine",
          "workingLatex": "\\sec 60^{\\circ} = \\frac{1}{\\cos 60^{\\circ}}",
          "explanation": "Secant is the reciprocal of cosine, so we first find \\(\\cos 60^{\\circ}\\) and then invert it."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the exact cosine value",
          "workingLatex": "\\cos 60^{\\circ} = \\frac{1}{2}",
          "explanation": "The exact value \\(\\cos 60^{\\circ} = \\displaystyle\\frac{1}{2}\\) comes from the standard 30-60-90 triangle and should be memorised."
        },
        {
          "stepNumber": 6,
          "description": "Invert to find the secant",
          "workingLatex": "\\sec 60^{\\circ} = \\frac{1}{\\frac{1}{2}} = 2",
          "explanation": "Dividing \\(1\\) by \\(\\displaystyle\\frac{1}{2}\\) gives \\(2\\). A common slip is to write \\(\\sec 60^{\\circ} = \\displaystyle\\frac{1}{2}\\) by forgetting to invert the cosine."
        },
        {
          "stepNumber": 7,
          "description": "Square the secant value",
          "workingLatex": "\\sec^2 60^{\\circ} = 2^2 = 4",
          "explanation": "The identity needs \\(\\sec^2\\), so we square the value \\(2\\). Keep \\(\\sec^2\\) distinct from \\(\\sec\\) to avoid an off-by-a-square error."
        },
        {
          "stepNumber": 8,
          "description": "Apply the identity to finish",
          "workingLatex": "\\tan^2 60^{\\circ} = 4 - 1 = 3",
          "explanation": "Subtracting \\(1\\) from \\(\\sec^2 60^{\\circ} = 4\\) gives \\(\\tan^2 60^{\\circ} = 3\\). This checks out since \\(\\tan 60^{\\circ} = \\sqrt 3\\) and \\((\\sqrt 3)^2 = 3\\)."
        }
      ],
      "finalAnswer": "\\(\\tan^2 60° = 3\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-049",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 38",
    "difficulty": "Challenge",
    "questionText": "Consider the equation \\(2\\tan^2\\theta + 3\\sec\\theta = 0\\) for \\(0 \\le \\theta < 360^\\circ\\). (a) Using a suitable identity, show that the equation may be written as \\(2\\sec^2\\theta + 3\\sec\\theta - 2 = 0\\). (b) Hence solve the equation for \\(0 \\le \\theta < 360^\\circ\\), giving your answers in degrees and explaining clearly why one solution of the quadratic must be rejected.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "quadratic",
      "solving-equations",
      "validity",
      "show-that"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity needed",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\) gives this identity, which converts the \\(\\tan^2\\theta\\) term into \\(\\sec\\) terms. A common slip is to write \\(1 - \\tan^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity for tan squared",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtracting \\(1\\) from both sides isolates \\(\\tan^2\\theta\\) so it can be substituted directly into the equation. Keep the \\(\\sec^2\\theta\\) and \\(-1\\) the correct way round."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the given equation",
          "workingLatex": "2\\left(\\sec^2\\theta - 1\\right) + 3\\sec\\theta = 0",
          "explanation": "Replacing \\(\\tan^2\\theta\\) turns the whole equation into one variable, \\(\\sec\\theta\\). Remember the bracket so the factor \\(2\\) multiplies both terms."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2\\sec^2\\theta - 2 + 3\\sec\\theta = 0",
          "explanation": "Multiplying out gives \\(2\\sec^2\\theta\\) and \\(-2\\). Forgetting to multiply the \\(-1\\) by \\(2\\) is a frequent error here."
        },
        {
          "stepNumber": 5,
          "description": "Write in standard quadratic order",
          "workingLatex": "2\\sec^2\\theta + 3\\sec\\theta - 2 = 0",
          "explanation": "Reordering into descending powers of \\(\\sec\\theta\\) matches the required form, completing part (a)."
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic in sec",
          "workingLatex": "\\left(2\\sec\\theta - 1\\right)\\left(\\sec\\theta + 2\\right) = 0",
          "explanation": "Treating \\(\\sec\\theta\\) as the unknown, the factors multiply back to \\(2\\sec^2\\theta + 3\\sec\\theta - 2\\). Check the cross term: \\(4\\sec\\theta - \\sec\\theta = 3\\sec\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Read off the two possible values",
          "workingLatex": "\\sec\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\sec\\theta = -2",
          "explanation": "Setting each factor to zero gives the two candidate values of \\(\\sec\\theta\\). Both must now be tested for validity."
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid secant value",
          "workingLatex": "\\left|\\sec\\theta\\right| \\ge 1 \\;\\Rightarrow\\; \\sec\\theta = \\frac{1}{2}\\ \\text{rejected}",
          "explanation": "Since \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(-1 \\le \\cos\\theta \\le 1\\), we always have \\(|\\sec\\theta| \\ge 1\\), so \\(\\displaystyle\\frac{1}{2}\\) is impossible. Forgetting this validity check is the classic mistake."
        },
        {
          "stepNumber": 9,
          "description": "Convert the valid value to cosine",
          "workingLatex": "\\sec\\theta = -2 \\;\\Rightarrow\\; \\cos\\theta = -\\frac{1}{2}",
          "explanation": "Taking the reciprocal of \\(\\sec\\theta\\) gives \\(\\cos\\theta\\), which is easier to solve. Note \\(\\cos\\theta\\) is negative, so \\(\\theta\\) lies in quadrants 2 and 3."
        },
        {
          "stepNumber": 10,
          "description": "Find the related acute angle",
          "workingLatex": "\\cos^{-1}\\left(\\frac{1}{2}\\right) = 60^\\circ",
          "explanation": "The acute reference angle comes from the positive value \\(\\displaystyle\\frac{1}{2}\\). This anchors the solutions in each relevant quadrant."
        },
        {
          "stepNumber": 11,
          "description": "Locate solutions in the range",
          "workingLatex": "\\theta = 180^\\circ - 60^\\circ,\\; 180^\\circ + 60^\\circ",
          "explanation": "For negative cosine the solutions are \\(180^\\circ \\mp 60^\\circ\\). Both lie within \\(0 \\le \\theta < 360^\\circ\\).",
          "diagram": {
            "xMin": 0,
            "xMax": 360,
            "yMin": -1.5,
            "yMax": 1.5,
            "xTicks": [
              0,
              90,
              180,
              270,
              360
            ],
            "xTickLabels": [
              "0",
              "90^\\circ",
              "180^\\circ",
              "270^\\circ",
              "360^\\circ"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    2.25,
                    0.999
                  ],
                  [
                    4.5,
                    0.997
                  ],
                  [
                    6.75,
                    0.993
                  ],
                  [
                    9,
                    0.988
                  ],
                  [
                    11.25,
                    0.981
                  ],
                  [
                    13.5,
                    0.972
                  ],
                  [
                    15.75,
                    0.962
                  ],
                  [
                    18,
                    0.951
                  ],
                  [
                    20.25,
                    0.938
                  ],
                  [
                    22.5,
                    0.924
                  ],
                  [
                    24.75,
                    0.908
                  ],
                  [
                    27,
                    0.891
                  ],
                  [
                    29.25,
                    0.872
                  ],
                  [
                    31.5,
                    0.853
                  ],
                  [
                    33.75,
                    0.831
                  ],
                  [
                    36,
                    0.809
                  ],
                  [
                    38.25,
                    0.785
                  ],
                  [
                    40.5,
                    0.76
                  ],
                  [
                    42.75,
                    0.734
                  ],
                  [
                    45,
                    0.707
                  ],
                  [
                    47.25,
                    0.679
                  ],
                  [
                    49.5,
                    0.649
                  ],
                  [
                    51.75,
                    0.619
                  ],
                  [
                    54,
                    0.588
                  ],
                  [
                    56.25,
                    0.556
                  ],
                  [
                    58.5,
                    0.522
                  ],
                  [
                    60.75,
                    0.489
                  ],
                  [
                    63,
                    0.454
                  ],
                  [
                    65.25,
                    0.419
                  ],
                  [
                    67.5,
                    0.383
                  ],
                  [
                    69.75,
                    0.346
                  ],
                  [
                    72,
                    0.309
                  ],
                  [
                    74.25,
                    0.271
                  ],
                  [
                    76.5,
                    0.233
                  ],
                  [
                    78.75,
                    0.195
                  ],
                  [
                    81,
                    0.156
                  ],
                  [
                    83.25,
                    0.118
                  ],
                  [
                    85.5,
                    0.078
                  ],
                  [
                    87.75,
                    0.039
                  ],
                  [
                    90,
                    0
                  ],
                  [
                    92.25,
                    -0.039
                  ],
                  [
                    94.5,
                    -0.078
                  ],
                  [
                    96.75,
                    -0.118
                  ],
                  [
                    99,
                    -0.156
                  ],
                  [
                    101.25,
                    -0.195
                  ],
                  [
                    103.5,
                    -0.233
                  ],
                  [
                    105.75,
                    -0.271
                  ],
                  [
                    108,
                    -0.309
                  ],
                  [
                    110.25,
                    -0.346
                  ],
                  [
                    112.5,
                    -0.383
                  ],
                  [
                    114.75,
                    -0.419
                  ],
                  [
                    117,
                    -0.454
                  ],
                  [
                    119.25,
                    -0.489
                  ],
                  [
                    121.5,
                    -0.522
                  ],
                  [
                    123.75,
                    -0.556
                  ],
                  [
                    126,
                    -0.588
                  ],
                  [
                    128.25,
                    -0.619
                  ],
                  [
                    130.5,
                    -0.649
                  ],
                  [
                    132.75,
                    -0.679
                  ],
                  [
                    135,
                    -0.707
                  ],
                  [
                    137.25,
                    -0.734
                  ],
                  [
                    139.5,
                    -0.76
                  ],
                  [
                    141.75,
                    -0.785
                  ],
                  [
                    144,
                    -0.809
                  ],
                  [
                    146.25,
                    -0.831
                  ],
                  [
                    148.5,
                    -0.853
                  ],
                  [
                    150.75,
                    -0.872
                  ],
                  [
                    153,
                    -0.891
                  ],
                  [
                    155.25,
                    -0.908
                  ],
                  [
                    157.5,
                    -0.924
                  ],
                  [
                    159.75,
                    -0.938
                  ],
                  [
                    162,
                    -0.951
                  ],
                  [
                    164.25,
                    -0.962
                  ],
                  [
                    166.5,
                    -0.972
                  ],
                  [
                    168.75,
                    -0.981
                  ],
                  [
                    171,
                    -0.988
                  ],
                  [
                    173.25,
                    -0.993
                  ],
                  [
                    175.5,
                    -0.997
                  ],
                  [
                    177.75,
                    -0.999
                  ],
                  [
                    180,
                    -1
                  ],
                  [
                    182.25,
                    -0.999
                  ],
                  [
                    184.5,
                    -0.997
                  ],
                  [
                    186.75,
                    -0.993
                  ],
                  [
                    189,
                    -0.988
                  ],
                  [
                    191.25,
                    -0.981
                  ],
                  [
                    193.5,
                    -0.972
                  ],
                  [
                    195.75,
                    -0.962
                  ],
                  [
                    198,
                    -0.951
                  ],
                  [
                    200.25,
                    -0.938
                  ],
                  [
                    202.5,
                    -0.924
                  ],
                  [
                    204.75,
                    -0.908
                  ],
                  [
                    207,
                    -0.891
                  ],
                  [
                    209.25,
                    -0.872
                  ],
                  [
                    211.5,
                    -0.853
                  ],
                  [
                    213.75,
                    -0.831
                  ],
                  [
                    216,
                    -0.809
                  ],
                  [
                    218.25,
                    -0.785
                  ],
                  [
                    220.5,
                    -0.76
                  ],
                  [
                    222.75,
                    -0.734
                  ],
                  [
                    225,
                    -0.707
                  ],
                  [
                    227.25,
                    -0.679
                  ],
                  [
                    229.5,
                    -0.649
                  ],
                  [
                    231.75,
                    -0.619
                  ],
                  [
                    234,
                    -0.588
                  ],
                  [
                    236.25,
                    -0.556
                  ],
                  [
                    238.5,
                    -0.522
                  ],
                  [
                    240.75,
                    -0.489
                  ],
                  [
                    243,
                    -0.454
                  ],
                  [
                    245.25,
                    -0.419
                  ],
                  [
                    247.5,
                    -0.383
                  ],
                  [
                    249.75,
                    -0.346
                  ],
                  [
                    252,
                    -0.309
                  ],
                  [
                    254.25,
                    -0.271
                  ],
                  [
                    256.5,
                    -0.233
                  ],
                  [
                    258.75,
                    -0.195
                  ],
                  [
                    261,
                    -0.156
                  ],
                  [
                    263.25,
                    -0.118
                  ],
                  [
                    265.5,
                    -0.078
                  ],
                  [
                    267.75,
                    -0.039
                  ],
                  [
                    270,
                    0
                  ],
                  [
                    272.25,
                    0.039
                  ],
                  [
                    274.5,
                    0.078
                  ],
                  [
                    276.75,
                    0.118
                  ],
                  [
                    279,
                    0.156
                  ],
                  [
                    281.25,
                    0.195
                  ],
                  [
                    283.5,
                    0.233
                  ],
                  [
                    285.75,
                    0.271
                  ],
                  [
                    288,
                    0.309
                  ],
                  [
                    290.25,
                    0.346
                  ],
                  [
                    292.5,
                    0.383
                  ],
                  [
                    294.75,
                    0.419
                  ],
                  [
                    297,
                    0.454
                  ],
                  [
                    299.25,
                    0.489
                  ],
                  [
                    301.5,
                    0.522
                  ],
                  [
                    303.75,
                    0.556
                  ],
                  [
                    306,
                    0.588
                  ],
                  [
                    308.25,
                    0.619
                  ],
                  [
                    310.5,
                    0.649
                  ],
                  [
                    312.75,
                    0.679
                  ],
                  [
                    315,
                    0.707
                  ],
                  [
                    317.25,
                    0.734
                  ],
                  [
                    319.5,
                    0.76
                  ],
                  [
                    321.75,
                    0.785
                  ],
                  [
                    324,
                    0.809
                  ],
                  [
                    326.25,
                    0.831
                  ],
                  [
                    328.5,
                    0.853
                  ],
                  [
                    330.75,
                    0.872
                  ],
                  [
                    333,
                    0.891
                  ],
                  [
                    335.25,
                    0.908
                  ],
                  [
                    337.5,
                    0.924
                  ],
                  [
                    339.75,
                    0.938
                  ],
                  [
                    342,
                    0.951
                  ],
                  [
                    344.25,
                    0.962
                  ],
                  [
                    346.5,
                    0.972
                  ],
                  [
                    348.75,
                    0.981
                  ],
                  [
                    351,
                    0.988
                  ],
                  [
                    353.25,
                    0.993
                  ],
                  [
                    355.5,
                    0.997
                  ],
                  [
                    357.75,
                    0.999
                  ],
                  [
                    360,
                    1
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\cos\\theta",
                "labelAt": [
                  40,
                  0.77
                ]
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  -0.5
                ],
                "to": [
                  360,
                  -0.5
                ],
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=-\\frac12",
                "labelAt": [
                  28.8,
                  -0.2
                ]
              }
            ],
            "points": [
              {
                "at": [
                  120,
                  -0.5
                ],
                "label": "120^\\circ",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  240,
                  -0.5
                ],
                "label": "240^\\circ",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        },
        {
          "stepNumber": 12,
          "description": "State the final solutions",
          "workingLatex": "\\theta = 120^\\circ,\\; 240^\\circ",
          "explanation": "These are the only valid solutions. A quick check: \\(\\sec 120^\\circ = -2\\) and \\(\\tan^2 120^\\circ = 3\\), giving \\(2(3) + 3(-2) = 0\\) as required."
        }
      ],
      "finalAnswer": "\\(\\theta = 120^\\circ,\\ 240^\\circ\\) (the root \\(\\sec\\theta = \\displaystyle\\frac{1}{2}\\) is rejected since \\(\\left|\\sec\\theta\\right| \\ge 1\\)).",
      "commonMistakes": [
        "Substituting \\(\\tan^2\\theta = 1 - \\sec^2\\theta\\) with the signs reversed.",
        "Accepting \\(\\sec\\theta = \\displaystyle\\frac{1}{2}\\) instead of rejecting it via \\(\\left|\\sec\\theta\\right| \\ge 1\\).",
        "Finding only \\(\\theta = 120^\\circ\\) and missing the second-quadrant/third-quadrant partner \\(240^\\circ\\)."
      ]
    }
  },
  {
    "id": "y2tf4-050",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 39",
    "difficulty": "Standard",
    "questionText": "Given \\(\\cot\\theta = 2\\), find \\(\\csc^2\\theta + \\cot^2\\theta\\).",
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
          "description": "Square the given cotangent value",
          "workingLatex": "\\cot^2\\theta = 2^2",
          "explanation": "We are given \\(\\cot\\theta = 2\\), and the expression needs \\(\\cot^2\\theta\\), so we square the given value."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the square",
          "workingLatex": "\\cot^2\\theta = 4",
          "explanation": "Squaring \\(2\\) gives \\(4\\). We work with \\(\\cot^2\\) because the relevant identity uses it directly."
        },
        {
          "stepNumber": 3,
          "description": "State the Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity links cotangent and cosecant, so \\(\\theta\\) itself is never needed. It comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the cot squared value",
          "workingLatex": "\\csc^2\\theta = 1 + 4",
          "explanation": "Replacing \\(\\cot^2\\theta\\) with \\(4\\) in the identity sets up a simple addition to find \\(\\csc^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Add to find cosec squared",
          "workingLatex": "\\csc^2\\theta = 5",
          "explanation": "Adding gives \\(\\csc^2\\theta = 5\\). Note \\(\\csc^2\\theta \\ge 1\\) always, and \\(5\\) comfortably satisfies that validity check."
        },
        {
          "stepNumber": 6,
          "description": "Write out the required expression",
          "workingLatex": "\\csc^2\\theta + \\cot^2\\theta = 5 + 4",
          "explanation": "Substitute both squared values into the expression the question asks for. Keep the cosec and cot terms separate to avoid mixing them up."
        },
        {
          "stepNumber": 7,
          "description": "Compute the final total",
          "workingLatex": "5 + 4 = 9",
          "explanation": "The sum is \\(9\\). As a sanity check, \\(\\csc^2\\) is always one more than \\(\\cot^2\\), consistent with \\(5 = 4 + 1\\) here."
        }
      ],
      "finalAnswer": "\\(5 + 4 = 9\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-051",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 40",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\sec\\theta - \\tan\\theta\\sin\\theta\\).",
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
          "description": "State the plan",
          "workingLatex": "\\sec\\theta - \\tan\\theta\\sin\\theta",
          "explanation": "When an expression mixes reciprocal and quotient functions, the safest strategy is to convert everything to sine and cosine first. Write the original expression so each term is clearly visible before changing anything."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite sec in terms of cos",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "By definition the secant is the reciprocal of cosine. This is the first of two definitions we will substitute."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite tan in terms of sin and cos",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The tangent is sine divided by cosine. A common slip is to forget that tan also carries a cosine in its denominator, which matters when the product is formed."
        },
        {
          "stepNumber": 4,
          "description": "Substitute sec into the expression",
          "workingLatex": "\\sec\\theta - \\tan\\theta\\sin\\theta = \\frac{1}{\\cos\\theta} - \\tan\\theta\\sin\\theta",
          "explanation": "Replace only the secant term first. Doing one substitution at a time reduces the chance of dropping a term."
        },
        {
          "stepNumber": 5,
          "description": "Substitute tan into the expression",
          "workingLatex": "\\frac{1}{\\cos\\theta} - \\tan\\theta\\sin\\theta = \\frac{1}{\\cos\\theta} - \\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\sin\\theta",
          "explanation": "Now replace tan theta with its sine-cosine form. Keep the second term written as a product so the next multiplication is clear."
        },
        {
          "stepNumber": 6,
          "description": "Write the product as one fraction",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\sin\\theta = \\frac{\\sin\\theta\\cdot\\sin\\theta}{\\cos\\theta}",
          "explanation": "Multiplying a fraction by sin theta multiplies only the numerator. The denominator cos theta is untouched."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numerator to a square",
          "workingLatex": "\\frac{\\sin\\theta\\cdot\\sin\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Sin theta times sin theta is sin squared theta. Do not accidentally square the cosine in the denominator; only the top was multiplied."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the full expression",
          "workingLatex": "\\sec\\theta - \\tan\\theta\\sin\\theta = \\frac{1}{\\cos\\theta} - \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Put the simplified second term back. Both terms now have the same denominator cos theta, ready to combine."
        },
        {
          "stepNumber": 9,
          "description": "Subtract over the common denominator",
          "workingLatex": "\\frac{1}{\\cos\\theta} - \\frac{\\sin^2\\theta}{\\cos\\theta} = \\frac{1 - \\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Because the denominators are identical, subtract the numerators directly and keep the single denominator. Do not subtract the denominators."
        },
        {
          "stepNumber": 10,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for every value of theta. We will rearrange it to handle the numerator."
        },
        {
          "stepNumber": 11,
          "description": "Rearrange the identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Subtracting sin squared theta from both sides isolates the expression that matches our numerator. Recognising this is the key step."
        },
        {
          "stepNumber": 12,
          "description": "Substitute into the numerator",
          "workingLatex": "\\frac{1 - \\sin^2\\theta}{\\cos\\theta} = \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Replace 1 minus sin squared theta with cos squared theta. The fraction is now cos squared theta over cos theta."
        },
        {
          "stepNumber": 13,
          "description": "Cancel one factor of cos",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\cos\\theta} = \\cos\\theta",
          "explanation": "Cos squared theta is cos theta times cos theta, so one factor cancels with the denominator. A single cosine remains."
        }
      ],
      "finalAnswer": "\\(\\cos\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-052",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 14",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\left(1 + \\cot^2\\theta\\right)\\sin^2\\theta\\).",
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
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This is one of the standard identities, found by dividing sin^2 theta plus cos^2 theta equals 1 through by sin^2 theta. Spotting it lets you replace the whole bracket at once."
        },
        {
          "stepNumber": 2,
          "description": "Replace the bracket",
          "workingLatex": "\\left(1 + \\cot^2\\theta\\right)\\sin^2\\theta = \\csc^2\\theta\\,\\sin^2\\theta",
          "explanation": "Substitute csc^2 theta for the bracket. The expression is now a product of cosec squared and sine squared."
        },
        {
          "stepNumber": 3,
          "description": "Write cosec as a reciprocal",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosec is the reciprocal of sine, by definition. A common slip is to confuse cosec with sec; cosec pairs with sine."
        },
        {
          "stepNumber": 4,
          "description": "Square the reciprocal",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Squaring one over sin theta gives one over sin squared theta. Both the top and bottom are squared."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the reciprocal form",
          "workingLatex": "\\csc^2\\theta\\,\\sin^2\\theta = \\frac{1}{\\sin^2\\theta}\\cdot\\sin^2\\theta",
          "explanation": "Replace cosec squared theta with one over sin squared theta. The product is now ready to cancel."
        },
        {
          "stepNumber": 6,
          "description": "Cancel sine squared",
          "workingLatex": "\\frac{1}{\\sin^2\\theta}\\cdot\\sin^2\\theta = 1",
          "explanation": "The sin^2 theta in the numerator cancels the sin^2 theta in the denominator, leaving 1."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-053",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 15",
    "difficulty": "Foundation",
    "questionText": "Simplify \\(\\sec^2\\theta \\cos^2\\theta\\).",
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
          "description": "Write sec as a reciprocal",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, by definition. A common slip is to think sec relates to sine; sec pairs with cosine."
        },
        {
          "stepNumber": 2,
          "description": "Square the reciprocal",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Squaring one over cos theta gives one over cos squared theta. Both numerator and denominator are squared."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the expression",
          "workingLatex": "\\sec^2\\theta\\,\\cos^2\\theta = \\frac{1}{\\cos^2\\theta}\\cdot\\cos^2\\theta",
          "explanation": "Replace sec squared theta with one over cos squared theta. The expression is now a fraction times cos squared theta."
        },
        {
          "stepNumber": 4,
          "description": "Cancel cosine squared",
          "workingLatex": "\\frac{1}{\\cos^2\\theta}\\cdot\\cos^2\\theta = 1",
          "explanation": "The cos^2 theta in the numerator cancels the cos^2 theta in the denominator, leaving 1."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-054",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 61",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\sec^2\\theta}{\\tan\\theta} - \\displaystyle\\frac{1}{\\tan\\theta}\\).",
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
          "description": "Note the common denominator",
          "workingLatex": "\\frac{\\sec^2\\theta}{\\tan\\theta} - \\frac{1}{\\tan\\theta}",
          "explanation": "Both fractions already share the denominator tan theta, so they can be combined into a single fraction without finding a new common denominator."
        },
        {
          "stepNumber": 2,
          "description": "Combine over one denominator",
          "workingLatex": "\\frac{\\sec^2\\theta}{\\tan\\theta} - \\frac{1}{\\tan\\theta} = \\frac{\\sec^2\\theta - 1}{\\tan\\theta}",
          "explanation": "Subtract the numerators while keeping the shared denominator. A common slip is to also subtract the denominators, which is not allowed."
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity comes from dividing sin^2 theta plus cos^2 theta equals 1 through by cos^2 theta. It links sec squared directly to tan squared."
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the numerator",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Subtracting 1 from both sides of the identity gives exactly the numerator we have. This is the heart of the simplification."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{\\sec^2\\theta - 1}{\\tan\\theta} = \\frac{\\tan^2\\theta}{\\tan\\theta}",
          "explanation": "Replace the numerator with tan squared theta. The fraction is now tan squared theta over tan theta."
        },
        {
          "stepNumber": 6,
          "description": "Write tan squared as a product",
          "workingLatex": "\\frac{\\tan^2\\theta}{\\tan\\theta} = \\frac{\\tan\\theta\\cdot\\tan\\theta}{\\tan\\theta}",
          "explanation": "Writing tan squared theta as tan theta times tan theta makes the cancellation explicit and harder to get wrong."
        },
        {
          "stepNumber": 7,
          "description": "Cancel a factor of tan",
          "workingLatex": "\\frac{\\tan\\theta\\cdot\\tan\\theta}{\\tan\\theta} = \\tan\\theta",
          "explanation": "One factor of tan theta in the numerator cancels with the tan theta in the denominator, leaving a single tan theta."
        }
      ],
      "finalAnswer": "\\(\\tan\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-055",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 41",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{1 + \\tan^2\\theta}{1 + \\cot^2\\theta}\\).",
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
          "description": "Recall the numerator identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity is obtained by dividing sin^2 theta plus cos^2 theta equals 1 through by cos^2 theta. It converts the top of the fraction into a single function."
        },
        {
          "stepNumber": 2,
          "description": "Recall the denominator identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Dividing sin^2 theta plus cos^2 theta equals 1 through by sin^2 theta gives this identity. A common slip is to mix up which identity gives sec versus cosec."
        },
        {
          "stepNumber": 3,
          "description": "Substitute both identities",
          "workingLatex": "\\frac{1 + \\tan^2\\theta}{1 + \\cot^2\\theta} = \\frac{\\sec^2\\theta}{\\csc^2\\theta}",
          "explanation": "Replace the numerator and denominator with their reciprocal-function forms. The fraction is now sec squared over cosec squared."
        },
        {
          "stepNumber": 4,
          "description": "Write sec squared as a reciprocal",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Sec squared theta is one over cos squared theta, since secant is the reciprocal of cosine. Converting to sine and cosine will make the division clear."
        },
        {
          "stepNumber": 5,
          "description": "Write cosec squared as a reciprocal",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Cosec squared theta is one over sin squared theta, since cosec is the reciprocal of sine."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the reciprocal forms",
          "workingLatex": "\\frac{\\sec^2\\theta}{\\csc^2\\theta} = \\frac{1/\\cos^2\\theta}{1/\\sin^2\\theta}",
          "explanation": "Replace both functions with their sine-cosine forms. We now have a fraction divided by a fraction."
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the reciprocal",
          "workingLatex": "\\frac{1/\\cos^2\\theta}{1/\\sin^2\\theta} = \\frac{1}{\\cos^2\\theta}\\cdot\\sin^2\\theta",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so dividing by one over sin squared theta becomes multiplying by sin squared theta."
        },
        {
          "stepNumber": 8,
          "description": "Combine into one fraction",
          "workingLatex": "\\frac{1}{\\cos^2\\theta}\\cdot\\sin^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Multiplying moves the sin squared theta up into the numerator, leaving sin squared over cos squared."
        },
        {
          "stepNumber": 9,
          "description": "Recognise tan squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta",
          "explanation": "Sine over cosine is tan, so sin squared over cos squared is tan squared. The expression simplifies to tan squared theta."
        }
      ],
      "finalAnswer": "\\(\\tan^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-056",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 42",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\csc\\theta - \\csc\\theta\\cos^2\\theta\\).",
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
          "description": "Write out the starting expression.",
          "workingLatex": "\\csc\\theta - \\csc\\theta\\cos^2\\theta",
          "explanation": "This is the expression we are asked to simplify. Look at it as two separate terms joined by a minus sign before doing anything."
        },
        {
          "stepNumber": 2,
          "description": "Identify the common factor.",
          "workingLatex": "\\csc\\theta - \\csc\\theta\\cos^2\\theta",
          "explanation": "Both terms contain a factor of \\(\\csc\\theta\\), so this is the quantity we can take outside a bracket. Spotting the common factor first is the key move; do not try to expand \\(\\csc\\) into \\(\\displaystyle\\frac{1}{\\sin\\theta}\\) yet."
        },
        {
          "stepNumber": 3,
          "description": "Note what each term leaves behind.",
          "workingLatex": "\\csc\\theta = \\csc\\theta\\cdot 1, \\quad \\csc\\theta\\cos^2\\theta = \\csc\\theta\\cdot\\cos^2\\theta",
          "explanation": "Dividing the first term by \\(\\csc\\theta\\) leaves \\(1\\), and dividing the second by \\(\\csc\\theta\\) leaves \\(\\cos^2\\theta\\). Writing this out makes the bracket contents obvious."
        },
        {
          "stepNumber": 4,
          "description": "Factor out cosec theta.",
          "workingLatex": "\\csc\\theta\\left(1 - \\cos^2\\theta\\right)",
          "explanation": "Taking \\(\\csc\\theta\\) out of each term leaves \\(1\\) from the first term and \\(\\cos^2\\theta\\) from the second. A common slip is to drop the leading \\(1\\), but \\(\\csc\\theta\\) divided by \\(\\csc\\theta\\) is \\(1\\), not \\(0\\)."
        },
        {
          "stepNumber": 5,
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental identity relating sine and cosine. We will rearrange it to deal with the bracket \\(1 - \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to match the bracket.",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides of \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) gives \\(1 - \\cos^2\\theta = \\sin^2\\theta\\). Be careful with the direction: it is sine squared that is left, not cosine squared."
        },
        {
          "stepNumber": 7,
          "description": "Substitute back into the bracket.",
          "workingLatex": "\\csc\\theta\\sin^2\\theta",
          "explanation": "Replacing \\(1 - \\cos^2\\theta\\) with \\(\\sin^2\\theta\\) gives a product of \\(\\csc\\theta\\) and \\(\\sin^2\\theta\\), which can now be combined."
        },
        {
          "stepNumber": 8,
          "description": "Write cosec as one over sine.",
          "workingLatex": "\\frac{1}{\\sin\\theta}\\cdot\\sin^2\\theta",
          "explanation": "By definition \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\). Converting to sine here lets us cancel against the \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Write the product as one fraction.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Multiplying \\(\\displaystyle\\frac{1}{\\sin\\theta}\\) by \\(\\sin^2\\theta\\) places \\(\\sin^2\\theta\\) over \\(\\sin\\theta\\). Seeing it as a single fraction makes the cancelling step clear."
        },
        {
          "stepNumber": 10,
          "description": "Cancel one factor of sine.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta\\) by \\(\\sin\\theta\\) leaves a single \\(\\sin\\theta\\). A common mistake is to cancel to \\(1\\); remember \\(\\sin^2\\theta\\) means \\(\\sin\\theta\\times\\sin\\theta\\), so one factor survives."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-057",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 43",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sec\\theta\\csc\\theta \\equiv \\tan\\theta + \\cot\\theta\\).",
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
          "description": "Choose to work the right side.",
          "workingLatex": "\\mathrm{RHS} = \\tan\\theta + \\cot\\theta",
          "explanation": "The right-hand side is the busier expression, so reducing it to sin/cos is the cleaner route. State clearly which side you are starting from so the proof is easy to follow."
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of tan.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent is sine over cosine. Converting to sin/cos is the standard first move when proving identities involving mixed trig functions."
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of cot.",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent is cosine over sine, the reciprocal of tangent. Watch the order here: it is cosine on top, not sine, which is a frequent slip."
        },
        {
          "stepNumber": 4,
          "description": "Write the sum of the two fractions.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Substituting both definitions gives a sum of two fractions with different denominators, which we must combine over a common denominator."
        },
        {
          "stepNumber": 5,
          "description": "Choose the common denominator.",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The lowest common denominator of \\(\\cos\\theta\\) and \\(\\sin\\theta\\) is their product \\(\\sin\\theta\\cos\\theta\\). Identifying it before combining prevents arithmetic mistakes."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over it.",
          "workingLatex": "\\frac{\\sin\\theta\\cdot\\sin\\theta}{\\cos\\theta\\sin\\theta} + \\frac{\\cos\\theta\\cdot\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\) and the second by \\(\\cos\\theta\\) so both share \\(\\sin\\theta\\cos\\theta\\). A frequent error is forgetting to square the numerators when the denominator changes."
        },
        {
          "stepNumber": 7,
          "description": "Combine over the single denominator.",
          "workingLatex": "\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With matching denominators the numerators add, giving \\(\\sin^2\\theta + \\cos^2\\theta\\) on top. Now a Pythagorean identity is in sight."
        },
        {
          "stepNumber": 8,
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Since \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the numerator collapses to \\(1\\). This is the central identity that makes the proof work."
        },
        {
          "stepNumber": 9,
          "description": "Split into a product of reciprocals.",
          "workingLatex": "\\frac{1}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta}\\cdot\\frac{1}{\\cos\\theta}",
          "explanation": "A single fraction with a product on the bottom can be written as the product of two reciprocals. This sets up the conversion back to \\(\\csc\\) and \\(\\sec\\)."
        },
        {
          "stepNumber": 10,
          "description": "Rewrite as cosec and sec.",
          "workingLatex": "\\frac{1}{\\sin\\theta}\\cdot\\frac{1}{\\cos\\theta} = \\csc\\theta\\sec\\theta",
          "explanation": "Using \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\) and \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\) turns the product back into reciprocal trig functions."
        },
        {
          "stepNumber": 11,
          "description": "Match to the left side.",
          "workingLatex": "\\csc\\theta\\sec\\theta = \\sec\\theta\\csc\\theta = \\mathrm{LHS}",
          "explanation": "Multiplication is commutative, so \\(\\csc\\theta\\sec\\theta\\) is the same as \\(\\sec\\theta\\csc\\theta\\), completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-058",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 62",
    "difficulty": "Challenge",
    "questionText": "Show \\(\\csc^2\\theta - \\sec^2\\theta = (\\cot\\theta - \\tan\\theta)(\\cot\\theta + \\tan\\theta)\\).",
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
          "description": "Start from the left side.",
          "workingLatex": "\\mathrm{LHS} = \\csc^2\\theta - \\sec^2\\theta",
          "explanation": "We will transform the left-hand side using the two Pythagorean identities so it matches the factored right-hand side."
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosec-cot identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) through by \\(\\sin^2\\theta\\). It links \\(\\csc^2\\) with \\(\\cot^2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace cosec squared.",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "Writing the identity this way around lets us substitute for the first term of the LHS in the next step."
        },
        {
          "stepNumber": 4,
          "description": "Recall the sec-tan identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This one comes from dividing the Pythagorean identity by \\(\\cos^2\\theta\\). Keep track of which identity uses cot and which uses tan."
        },
        {
          "stepNumber": 5,
          "description": "Replace sec squared.",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Rearranged this way, it is ready to substitute for the second term of the LHS."
        },
        {
          "stepNumber": 6,
          "description": "Substitute both into the LHS.",
          "workingLatex": "\\left(1 + \\cot^2\\theta\\right) - \\left(1 + \\tan^2\\theta\\right)",
          "explanation": "Putting both replacements in turns the expression into a difference of two brackets. The bracket on the subtracted term is essential to handle the signs correctly."
        },
        {
          "stepNumber": 7,
          "description": "Distribute the minus sign.",
          "workingLatex": "1 + \\cot^2\\theta - 1 - \\tan^2\\theta",
          "explanation": "The minus in front of the second bracket flips the sign of both terms inside it, giving \\(-1\\) and \\(-\\tan^2\\theta\\). Forgetting to distribute it is a very common slip that would wrongly leave \\(+\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the ones.",
          "workingLatex": "\\cot^2\\theta - \\tan^2\\theta",
          "explanation": "The \\(+1\\) and \\(-1\\) cancel, leaving the difference \\(\\cot^2\\theta - \\tan^2\\theta\\). This is now a difference of two squares."
        },
        {
          "stepNumber": 9,
          "description": "Recognise a difference of two squares.",
          "workingLatex": "\\cot^2\\theta - \\tan^2\\theta = (\\cot\\theta)^2 - (\\tan\\theta)^2",
          "explanation": "This has the form \\(a^2 - b^2\\) with \\(a = \\cot\\theta\\) and \\(b = \\tan\\theta\\), which factorises using \\(a^2 - b^2 = (a-b)(a+b)\\)."
        },
        {
          "stepNumber": 10,
          "description": "Factor and match the RHS.",
          "workingLatex": "(\\cot\\theta - \\tan\\theta)(\\cot\\theta + \\tan\\theta) = \\mathrm{RHS}",
          "explanation": "The factorised form is exactly the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-059",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 44",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\tan^2\\theta\\sec^2\\theta \\equiv \\sec^4\\theta - \\sec^2\\theta\\).",
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
          "description": "Start from the right side.",
          "workingLatex": "\\mathrm{RHS} = \\sec^4\\theta - \\sec^2\\theta",
          "explanation": "The right-hand side has a common factor we can pull out, so it is the natural side to work from towards the left."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the fourth power as a product.",
          "workingLatex": "\\sec^4\\theta = \\sec^2\\theta\\cdot\\sec^2\\theta",
          "explanation": "Writing \\(\\sec^4\\theta\\) as \\(\\sec^2\\theta\\) times \\(\\sec^2\\theta\\) makes the shared factor of \\(\\sec^2\\theta\\) in both terms visible."
        },
        {
          "stepNumber": 3,
          "description": "Show what each term leaves.",
          "workingLatex": "\\sec^4\\theta = \\sec^2\\theta\\cdot\\sec^2\\theta, \\quad \\sec^2\\theta = \\sec^2\\theta\\cdot 1",
          "explanation": "Dividing the first term by \\(\\sec^2\\theta\\) leaves \\(\\sec^2\\theta\\), and the second leaves \\(1\\). This makes the bracket contents clear before factoring."
        },
        {
          "stepNumber": 4,
          "description": "Factor out sec squared.",
          "workingLatex": "\\sec^2\\theta\\left(\\sec^2\\theta - 1\\right)",
          "explanation": "Taking \\(\\sec^2\\theta\\) out of both terms leaves \\(\\sec^2\\theta - 1\\) inside the bracket. Remember the second term contributes a \\(1\\), not a \\(0\\), after dividing by \\(\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Recall the sec-tan identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity, from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\), is the key tool for sec-tan problems."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to match the bracket.",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Subtracting \\(1\\) from both sides of \\(1 + \\tan^2\\theta = \\sec^2\\theta\\) gives exactly the bracket \\(\\sec^2\\theta - 1\\) in terms of \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute back into the bracket.",
          "workingLatex": "\\sec^2\\theta\\cdot\\tan^2\\theta",
          "explanation": "Replacing \\(\\sec^2\\theta - 1\\) with \\(\\tan^2\\theta\\) gives a product of \\(\\sec^2\\theta\\) and \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Match to the left side.",
          "workingLatex": "\\sec^2\\theta\\tan^2\\theta = \\tan^2\\theta\\sec^2\\theta = \\mathrm{LHS}",
          "explanation": "Reordering the product gives exactly the left-hand side, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-060",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 63",
    "difficulty": "Challenge",
    "questionText": "Solve \\(2\\sec^2\\theta = 3\\tan\\theta + 2\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sec-tan identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "To get a single trig function we use the identity that links \\(\\sec^2\\) to \\(\\tan^2\\), obtained by dividing the Pythagorean identity by \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Write it ready to substitute.",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Arranged this way it directly replaces the \\(\\sec^2\\theta\\) term, turning the equation into one purely in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation.",
          "workingLatex": "2\\left(1 + \\tan^2\\theta\\right) = 3\\tan\\theta + 2",
          "explanation": "Replacing \\(\\sec^2\\theta\\) gives an equation only in \\(\\tan\\theta\\). Keep the factor \\(2\\) multiplying the whole bracket."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "2 + 2\\tan^2\\theta = 3\\tan\\theta + 2",
          "explanation": "Distributing the \\(2\\) gives \\(2 + 2\\tan^2\\theta\\). Do not forget to multiply both terms inside the bracket."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the right-hand side.",
          "workingLatex": "2 + 2\\tan^2\\theta - 3\\tan\\theta - 2 = 0",
          "explanation": "Bringing every term to the left sets the equation equal to zero, which is required before factorising a quadratic."
        },
        {
          "stepNumber": 6,
          "description": "Simplify by cancelling the twos.",
          "workingLatex": "2\\tan^2\\theta - 3\\tan\\theta = 0",
          "explanation": "The \\(+2\\) and \\(-2\\) cancel, leaving a quadratic in \\(\\tan\\theta\\) with no constant term. The absence of a constant term is a strong hint to factor rather than use the formula."
        },
        {
          "stepNumber": 7,
          "description": "Factor out tan theta.",
          "workingLatex": "\\tan\\theta\\left(2\\tan\\theta - 3\\right) = 0",
          "explanation": "Because there is no constant term, \\(\\tan\\theta\\) is a common factor. Avoid dividing through by \\(\\tan\\theta\\), as that would lose the \\(\\tan\\theta = 0\\) solutions."
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero product rule.",
          "workingLatex": "\\tan\\theta = 0 \\quad \\text{or} \\quad 2\\tan\\theta - 3 = 0",
          "explanation": "A product is zero only when at least one factor is zero, so we split into two separate equations to solve."
        },
        {
          "stepNumber": 9,
          "description": "Solve the second factor.",
          "workingLatex": "2\\tan\\theta - 3 = 0 \\;\\Rightarrow\\; \\tan\\theta = \\frac{3}{2}",
          "explanation": "Adding \\(3\\) and dividing by \\(2\\) isolates \\(\\tan\\theta\\). This gives the second value of the tangent we must solve for."
        },
        {
          "stepNumber": 10,
          "description": "Solve tan theta equals zero.",
          "workingLatex": "\\theta = 0,\\ \\pi,\\ 2\\pi",
          "explanation": "Tangent is zero at integer multiples of \\(\\pi\\). On the closed interval \\([0, 2\\pi]\\) both endpoints and the midpoint are included."
        },
        {
          "stepNumber": 11,
          "description": "Find the principal value for tan = 3/2.",
          "workingLatex": "\\theta = \\arctan\\frac{3}{2} \\approx 0.983",
          "explanation": "Taking the inverse tangent gives the first-quadrant solution. Since \\(\\displaystyle\\frac{3}{2}\\) is positive, this angle lies between \\(0\\) and \\(\\displaystyle\\frac{\\pi}{2}\\)."
        },
        {
          "stepNumber": 12,
          "description": "Add pi for the second solution.",
          "workingLatex": "\\theta = \\pi + \\arctan\\frac{3}{2} \\approx 4.124",
          "explanation": "Tangent has period \\(\\pi\\), so the next solution in range is the principal value plus \\(\\pi\\) (the third-quadrant angle where tan is again positive)."
        },
        {
          "stepNumber": 13,
          "description": "Collect all solutions in the interval.",
          "workingLatex": "\\theta = 0,\\ \\arctan\\frac{3}{2},\\ \\pi,\\ \\pi + \\arctan\\frac{3}{2},\\ 2\\pi",
          "explanation": "These five values all lie in \\([0, 2\\pi]\\). No validity restriction from sec is needed here because we solved for tan, which can take any real value.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.009,
                    0.009
                  ],
                  [
                    0.019,
                    0.019
                  ],
                  [
                    0.028,
                    0.028
                  ],
                  [
                    0.037,
                    0.037
                  ],
                  [
                    0.047,
                    0.047
                  ],
                  [
                    0.056,
                    0.056
                  ],
                  [
                    0.065,
                    0.066
                  ],
                  [
                    0.075,
                    0.075
                  ],
                  [
                    0.084,
                    0.084
                  ],
                  [
                    0.093,
                    0.094
                  ],
                  [
                    0.103,
                    0.103
                  ],
                  [
                    0.112,
                    0.113
                  ],
                  [
                    0.122,
                    0.122
                  ],
                  [
                    0.131,
                    0.132
                  ],
                  [
                    0.14,
                    0.141
                  ],
                  [
                    0.15,
                    0.151
                  ],
                  [
                    0.159,
                    0.16
                  ],
                  [
                    0.168,
                    0.17
                  ],
                  [
                    0.178,
                    0.179
                  ],
                  [
                    0.187,
                    0.189
                  ],
                  [
                    0.196,
                    0.199
                  ],
                  [
                    0.206,
                    0.209
                  ],
                  [
                    0.215,
                    0.218
                  ],
                  [
                    0.224,
                    0.228
                  ],
                  [
                    0.234,
                    0.238
                  ],
                  [
                    0.243,
                    0.248
                  ],
                  [
                    0.252,
                    0.258
                  ],
                  [
                    0.262,
                    0.268
                  ],
                  [
                    0.271,
                    0.278
                  ],
                  [
                    0.28,
                    0.288
                  ],
                  [
                    0.29,
                    0.298
                  ],
                  [
                    0.299,
                    0.308
                  ],
                  [
                    0.308,
                    0.319
                  ],
                  [
                    0.318,
                    0.329
                  ],
                  [
                    0.327,
                    0.339
                  ],
                  [
                    0.337,
                    0.35
                  ],
                  [
                    0.346,
                    0.36
                  ],
                  [
                    0.355,
                    0.371
                  ],
                  [
                    0.365,
                    0.382
                  ],
                  [
                    0.374,
                    0.392
                  ],
                  [
                    0.383,
                    0.403
                  ],
                  [
                    0.393,
                    0.414
                  ],
                  [
                    0.402,
                    0.425
                  ],
                  [
                    0.411,
                    0.436
                  ],
                  [
                    0.421,
                    0.447
                  ],
                  [
                    0.43,
                    0.459
                  ],
                  [
                    0.439,
                    0.47
                  ],
                  [
                    0.449,
                    0.481
                  ],
                  [
                    0.458,
                    0.493
                  ],
                  [
                    0.467,
                    0.505
                  ],
                  [
                    0.477,
                    0.516
                  ],
                  [
                    0.486,
                    0.528
                  ],
                  [
                    0.495,
                    0.54
                  ],
                  [
                    0.505,
                    0.553
                  ],
                  [
                    0.514,
                    0.565
                  ],
                  [
                    0.523,
                    0.577
                  ],
                  [
                    0.533,
                    0.59
                  ],
                  [
                    0.542,
                    0.602
                  ],
                  [
                    0.552,
                    0.615
                  ],
                  [
                    0.561,
                    0.628
                  ],
                  [
                    0.57,
                    0.641
                  ],
                  [
                    0.58,
                    0.655
                  ],
                  [
                    0.589,
                    0.668
                  ],
                  [
                    0.598,
                    0.682
                  ],
                  [
                    0.608,
                    0.695
                  ],
                  [
                    0.617,
                    0.709
                  ],
                  [
                    0.626,
                    0.723
                  ],
                  [
                    0.636,
                    0.738
                  ],
                  [
                    0.645,
                    0.752
                  ],
                  [
                    0.654,
                    0.767
                  ],
                  [
                    0.664,
                    0.782
                  ],
                  [
                    0.673,
                    0.797
                  ],
                  [
                    0.682,
                    0.813
                  ],
                  [
                    0.692,
                    0.828
                  ],
                  [
                    0.701,
                    0.844
                  ],
                  [
                    0.71,
                    0.86
                  ],
                  [
                    0.72,
                    0.877
                  ],
                  [
                    0.729,
                    0.893
                  ],
                  [
                    0.738,
                    0.91
                  ],
                  [
                    0.748,
                    0.927
                  ],
                  [
                    0.757,
                    0.945
                  ],
                  [
                    0.766,
                    0.963
                  ],
                  [
                    0.776,
                    0.981
                  ],
                  [
                    0.785,
                    1
                  ],
                  [
                    0.795,
                    1.018
                  ],
                  [
                    0.804,
                    1.038
                  ],
                  [
                    0.813,
                    1.057
                  ],
                  [
                    0.823,
                    1.077
                  ],
                  [
                    0.832,
                    1.098
                  ],
                  [
                    0.841,
                    1.119
                  ],
                  [
                    0.851,
                    1.14
                  ],
                  [
                    0.86,
                    1.161
                  ],
                  [
                    0.869,
                    1.184
                  ],
                  [
                    0.879,
                    1.206
                  ],
                  [
                    0.888,
                    1.23
                  ],
                  [
                    0.897,
                    1.253
                  ],
                  [
                    0.907,
                    1.278
                  ],
                  [
                    0.916,
                    1.303
                  ],
                  [
                    0.925,
                    1.328
                  ],
                  [
                    0.935,
                    1.354
                  ],
                  [
                    0.944,
                    1.381
                  ],
                  [
                    0.953,
                    1.409
                  ],
                  [
                    0.963,
                    1.437
                  ],
                  [
                    0.972,
                    1.466
                  ],
                  [
                    0.981,
                    1.496
                  ],
                  [
                    0.991,
                    1.526
                  ],
                  [
                    1,
                    1.558
                  ],
                  [
                    1.01,
                    1.591
                  ],
                  [
                    1.019,
                    1.624
                  ],
                  [
                    1.028,
                    1.659
                  ],
                  [
                    1.038,
                    1.694
                  ],
                  [
                    1.047,
                    1.731
                  ],
                  [
                    1.056,
                    1.769
                  ],
                  [
                    1.066,
                    1.808
                  ],
                  [
                    1.075,
                    1.849
                  ],
                  [
                    1.084,
                    1.891
                  ],
                  [
                    1.094,
                    1.934
                  ],
                  [
                    1.103,
                    1.979
                  ],
                  [
                    1.112,
                    2.026
                  ],
                  [
                    1.122,
                    2.075
                  ],
                  [
                    1.131,
                    2.126
                  ],
                  [
                    1.14,
                    2.178
                  ],
                  [
                    1.15,
                    2.233
                  ],
                  [
                    1.159,
                    2.29
                  ],
                  [
                    1.168,
                    2.35
                  ],
                  [
                    1.178,
                    2.412
                  ],
                  [
                    1.187,
                    2.477
                  ],
                  [
                    1.196,
                    2.546
                  ],
                  [
                    1.206,
                    2.617
                  ],
                  [
                    1.215,
                    2.692
                  ],
                  [
                    1.225,
                    2.772
                  ],
                  [
                    1.234,
                    2.855
                  ],
                  [
                    1.243,
                    2.943
                  ],
                  [
                    1.253,
                    3.036
                  ],
                  [
                    1.262,
                    3.134
                  ],
                  [
                    1.271,
                    3.238
                  ],
                  [
                    1.281,
                    3.349
                  ],
                  [
                    1.29,
                    3.467
                  ],
                  [
                    1.299,
                    3.592
                  ],
                  [
                    1.309,
                    3.727
                  ],
                  [
                    1.318,
                    3.871
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\tan\\theta",
                "labelAt": [
                  0.5,
                  0.55
                ]
              },
              {
                "points": [
                  [
                    1.833,
                    -3.722
                  ],
                  [
                    1.852,
                    -3.462
                  ],
                  [
                    1.871,
                    -3.234
                  ],
                  [
                    1.889,
                    -3.032
                  ],
                  [
                    1.908,
                    -2.852
                  ],
                  [
                    1.927,
                    -2.69
                  ],
                  [
                    1.945,
                    -2.543
                  ],
                  [
                    1.964,
                    -2.41
                  ],
                  [
                    1.983,
                    -2.288
                  ],
                  [
                    2.001,
                    -2.176
                  ],
                  [
                    2.02,
                    -2.073
                  ],
                  [
                    2.039,
                    -1.978
                  ],
                  [
                    2.058,
                    -1.89
                  ],
                  [
                    2.076,
                    -1.807
                  ],
                  [
                    2.095,
                    -1.73
                  ],
                  [
                    2.114,
                    -1.658
                  ],
                  [
                    2.132,
                    -1.59
                  ],
                  [
                    2.151,
                    -1.526
                  ],
                  [
                    2.17,
                    -1.465
                  ],
                  [
                    2.188,
                    -1.408
                  ],
                  [
                    2.207,
                    -1.354
                  ],
                  [
                    2.226,
                    -1.302
                  ],
                  [
                    2.244,
                    -1.253
                  ],
                  [
                    2.263,
                    -1.206
                  ],
                  [
                    2.282,
                    -1.161
                  ],
                  [
                    2.301,
                    -1.118
                  ],
                  [
                    2.319,
                    -1.077
                  ],
                  [
                    2.338,
                    -1.037
                  ],
                  [
                    2.357,
                    -0.999
                  ],
                  [
                    2.375,
                    -0.963
                  ],
                  [
                    2.394,
                    -0.927
                  ],
                  [
                    2.413,
                    -0.893
                  ],
                  [
                    2.431,
                    -0.86
                  ],
                  [
                    2.45,
                    -0.828
                  ],
                  [
                    2.469,
                    -0.797
                  ],
                  [
                    2.487,
                    -0.767
                  ],
                  [
                    2.506,
                    -0.738
                  ],
                  [
                    2.525,
                    -0.709
                  ],
                  [
                    2.543,
                    -0.681
                  ],
                  [
                    2.562,
                    -0.654
                  ],
                  [
                    2.581,
                    -0.628
                  ],
                  [
                    2.6,
                    -0.602
                  ],
                  [
                    2.618,
                    -0.577
                  ],
                  [
                    2.637,
                    -0.552
                  ],
                  [
                    2.656,
                    -0.528
                  ],
                  [
                    2.674,
                    -0.505
                  ],
                  [
                    2.693,
                    -0.481
                  ],
                  [
                    2.712,
                    -0.459
                  ],
                  [
                    2.73,
                    -0.436
                  ],
                  [
                    2.749,
                    -0.414
                  ],
                  [
                    2.768,
                    -0.392
                  ],
                  [
                    2.786,
                    -0.371
                  ],
                  [
                    2.805,
                    -0.35
                  ],
                  [
                    2.824,
                    -0.329
                  ],
                  [
                    2.842,
                    -0.308
                  ],
                  [
                    2.861,
                    -0.288
                  ],
                  [
                    2.88,
                    -0.268
                  ],
                  [
                    2.899,
                    -0.248
                  ],
                  [
                    2.917,
                    -0.228
                  ],
                  [
                    2.936,
                    -0.209
                  ],
                  [
                    2.955,
                    -0.189
                  ],
                  [
                    2.973,
                    -0.17
                  ],
                  [
                    2.992,
                    -0.151
                  ],
                  [
                    3.011,
                    -0.132
                  ],
                  [
                    3.029,
                    -0.113
                  ],
                  [
                    3.048,
                    -0.094
                  ],
                  [
                    3.067,
                    -0.075
                  ],
                  [
                    3.085,
                    -0.056
                  ],
                  [
                    3.104,
                    -0.037
                  ],
                  [
                    3.123,
                    -0.019
                  ],
                  [
                    3.141,
                    0
                  ],
                  [
                    3.16,
                    0.019
                  ],
                  [
                    3.179,
                    0.037
                  ],
                  [
                    3.198,
                    0.056
                  ],
                  [
                    3.216,
                    0.075
                  ],
                  [
                    3.235,
                    0.094
                  ],
                  [
                    3.254,
                    0.113
                  ],
                  [
                    3.272,
                    0.131
                  ],
                  [
                    3.291,
                    0.151
                  ],
                  [
                    3.31,
                    0.17
                  ],
                  [
                    3.328,
                    0.189
                  ],
                  [
                    3.347,
                    0.208
                  ],
                  [
                    3.366,
                    0.228
                  ],
                  [
                    3.384,
                    0.248
                  ],
                  [
                    3.403,
                    0.268
                  ],
                  [
                    3.422,
                    0.288
                  ],
                  [
                    3.441,
                    0.308
                  ],
                  [
                    3.459,
                    0.329
                  ],
                  [
                    3.478,
                    0.35
                  ],
                  [
                    3.497,
                    0.371
                  ],
                  [
                    3.515,
                    0.392
                  ],
                  [
                    3.534,
                    0.414
                  ],
                  [
                    3.553,
                    0.436
                  ],
                  [
                    3.571,
                    0.458
                  ],
                  [
                    3.59,
                    0.481
                  ],
                  [
                    3.609,
                    0.504
                  ],
                  [
                    3.627,
                    0.528
                  ],
                  [
                    3.646,
                    0.552
                  ],
                  [
                    3.665,
                    0.577
                  ],
                  [
                    3.683,
                    0.602
                  ],
                  [
                    3.702,
                    0.628
                  ],
                  [
                    3.721,
                    0.654
                  ],
                  [
                    3.74,
                    0.681
                  ],
                  [
                    3.758,
                    0.709
                  ],
                  [
                    3.777,
                    0.737
                  ],
                  [
                    3.796,
                    0.767
                  ],
                  [
                    3.814,
                    0.797
                  ],
                  [
                    3.833,
                    0.828
                  ],
                  [
                    3.852,
                    0.86
                  ],
                  [
                    3.87,
                    0.893
                  ],
                  [
                    3.889,
                    0.927
                  ],
                  [
                    3.908,
                    0.962
                  ],
                  [
                    3.926,
                    0.999
                  ],
                  [
                    3.945,
                    1.037
                  ],
                  [
                    3.964,
                    1.076
                  ],
                  [
                    3.982,
                    1.118
                  ],
                  [
                    4.001,
                    1.161
                  ],
                  [
                    4.02,
                    1.205
                  ],
                  [
                    4.039,
                    1.252
                  ],
                  [
                    4.057,
                    1.301
                  ],
                  [
                    4.076,
                    1.353
                  ],
                  [
                    4.095,
                    1.407
                  ],
                  [
                    4.113,
                    1.465
                  ],
                  [
                    4.132,
                    1.525
                  ],
                  [
                    4.151,
                    1.589
                  ],
                  [
                    4.169,
                    1.657
                  ],
                  [
                    4.188,
                    1.729
                  ],
                  [
                    4.207,
                    1.806
                  ],
                  [
                    4.225,
                    1.889
                  ],
                  [
                    4.244,
                    1.977
                  ],
                  [
                    4.263,
                    2.072
                  ],
                  [
                    4.282,
                    2.175
                  ],
                  [
                    4.3,
                    2.287
                  ],
                  [
                    4.319,
                    2.409
                  ],
                  [
                    4.338,
                    2.542
                  ],
                  [
                    4.356,
                    2.688
                  ],
                  [
                    4.375,
                    2.85
                  ],
                  [
                    4.394,
                    3.03
                  ],
                  [
                    4.412,
                    3.232
                  ],
                  [
                    4.431,
                    3.46
                  ],
                  [
                    4.45,
                    3.719
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              },
              {
                "points": [
                  [
                    4.965,
                    -3.874
                  ],
                  [
                    4.974,
                    -3.729
                  ],
                  [
                    4.984,
                    -3.595
                  ],
                  [
                    4.993,
                    -3.469
                  ],
                  [
                    5.002,
                    -3.351
                  ],
                  [
                    5.012,
                    -3.24
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.03,
                    -3.037
                  ],
                  [
                    5.04,
                    -2.944
                  ],
                  [
                    5.049,
                    -2.856
                  ],
                  [
                    5.059,
                    -2.773
                  ],
                  [
                    5.068,
                    -2.694
                  ],
                  [
                    5.077,
                    -2.618
                  ],
                  [
                    5.087,
                    -2.547
                  ],
                  [
                    5.096,
                    -2.478
                  ],
                  [
                    5.105,
                    -2.413
                  ],
                  [
                    5.115,
                    -2.351
                  ],
                  [
                    5.124,
                    -2.291
                  ],
                  [
                    5.133,
                    -2.234
                  ],
                  [
                    5.143,
                    -2.179
                  ],
                  [
                    5.152,
                    -2.126
                  ],
                  [
                    5.161,
                    -2.076
                  ],
                  [
                    5.171,
                    -2.027
                  ],
                  [
                    5.18,
                    -1.98
                  ],
                  [
                    5.189,
                    -1.935
                  ],
                  [
                    5.199,
                    -1.891
                  ],
                  [
                    5.208,
                    -1.849
                  ],
                  [
                    5.217,
                    -1.809
                  ],
                  [
                    5.227,
                    -1.769
                  ],
                  [
                    5.236,
                    -1.731
                  ],
                  [
                    5.245,
                    -1.695
                  ],
                  [
                    5.255,
                    -1.659
                  ],
                  [
                    5.264,
                    -1.624
                  ],
                  [
                    5.274,
                    -1.591
                  ],
                  [
                    5.283,
                    -1.558
                  ],
                  [
                    5.292,
                    -1.527
                  ],
                  [
                    5.302,
                    -1.496
                  ],
                  [
                    5.311,
                    -1.466
                  ],
                  [
                    5.32,
                    -1.437
                  ],
                  [
                    5.33,
                    -1.409
                  ],
                  [
                    5.339,
                    -1.381
                  ],
                  [
                    5.348,
                    -1.355
                  ],
                  [
                    5.358,
                    -1.328
                  ],
                  [
                    5.367,
                    -1.303
                  ],
                  [
                    5.376,
                    -1.278
                  ],
                  [
                    5.386,
                    -1.254
                  ],
                  [
                    5.395,
                    -1.23
                  ],
                  [
                    5.404,
                    -1.207
                  ],
                  [
                    5.414,
                    -1.184
                  ],
                  [
                    5.423,
                    -1.162
                  ],
                  [
                    5.432,
                    -1.14
                  ],
                  [
                    5.442,
                    -1.119
                  ],
                  [
                    5.451,
                    -1.098
                  ],
                  [
                    5.461,
                    -1.077
                  ],
                  [
                    5.47,
                    -1.057
                  ],
                  [
                    5.479,
                    -1.038
                  ],
                  [
                    5.489,
                    -1.019
                  ],
                  [
                    5.498,
                    -1
                  ],
                  [
                    5.507,
                    -0.981
                  ],
                  [
                    5.517,
                    -0.963
                  ],
                  [
                    5.526,
                    -0.945
                  ],
                  [
                    5.535,
                    -0.928
                  ],
                  [
                    5.545,
                    -0.91
                  ],
                  [
                    5.554,
                    -0.893
                  ],
                  [
                    5.563,
                    -0.877
                  ],
                  [
                    5.573,
                    -0.86
                  ],
                  [
                    5.582,
                    -0.844
                  ],
                  [
                    5.591,
                    -0.828
                  ],
                  [
                    5.601,
                    -0.813
                  ],
                  [
                    5.61,
                    -0.797
                  ],
                  [
                    5.619,
                    -0.782
                  ],
                  [
                    5.629,
                    -0.767
                  ],
                  [
                    5.638,
                    -0.752
                  ],
                  [
                    5.647,
                    -0.738
                  ],
                  [
                    5.657,
                    -0.724
                  ],
                  [
                    5.666,
                    -0.709
                  ],
                  [
                    5.676,
                    -0.695
                  ],
                  [
                    5.685,
                    -0.682
                  ],
                  [
                    5.694,
                    -0.668
                  ],
                  [
                    5.704,
                    -0.655
                  ],
                  [
                    5.713,
                    -0.641
                  ],
                  [
                    5.722,
                    -0.628
                  ],
                  [
                    5.732,
                    -0.615
                  ],
                  [
                    5.741,
                    -0.602
                  ],
                  [
                    5.75,
                    -0.59
                  ],
                  [
                    5.76,
                    -0.577
                  ],
                  [
                    5.769,
                    -0.565
                  ],
                  [
                    5.778,
                    -0.553
                  ],
                  [
                    5.788,
                    -0.54
                  ],
                  [
                    5.797,
                    -0.528
                  ],
                  [
                    5.806,
                    -0.517
                  ],
                  [
                    5.816,
                    -0.505
                  ],
                  [
                    5.825,
                    -0.493
                  ],
                  [
                    5.834,
                    -0.481
                  ],
                  [
                    5.844,
                    -0.47
                  ],
                  [
                    5.853,
                    -0.459
                  ],
                  [
                    5.863,
                    -0.447
                  ],
                  [
                    5.872,
                    -0.436
                  ],
                  [
                    5.881,
                    -0.425
                  ],
                  [
                    5.891,
                    -0.414
                  ],
                  [
                    5.9,
                    -0.403
                  ],
                  [
                    5.909,
                    -0.392
                  ],
                  [
                    5.919,
                    -0.382
                  ],
                  [
                    5.928,
                    -0.371
                  ],
                  [
                    5.937,
                    -0.36
                  ],
                  [
                    5.947,
                    -0.35
                  ],
                  [
                    5.956,
                    -0.339
                  ],
                  [
                    5.965,
                    -0.329
                  ],
                  [
                    5.975,
                    -0.319
                  ],
                  [
                    5.984,
                    -0.308
                  ],
                  [
                    5.993,
                    -0.298
                  ],
                  [
                    6.003,
                    -0.288
                  ],
                  [
                    6.012,
                    -0.278
                  ],
                  [
                    6.021,
                    -0.268
                  ],
                  [
                    6.031,
                    -0.258
                  ],
                  [
                    6.04,
                    -0.248
                  ],
                  [
                    6.049,
                    -0.238
                  ],
                  [
                    6.059,
                    -0.228
                  ],
                  [
                    6.068,
                    -0.218
                  ],
                  [
                    6.078,
                    -0.209
                  ],
                  [
                    6.087,
                    -0.199
                  ],
                  [
                    6.096,
                    -0.189
                  ],
                  [
                    6.106,
                    -0.18
                  ],
                  [
                    6.115,
                    -0.17
                  ],
                  [
                    6.124,
                    -0.16
                  ],
                  [
                    6.134,
                    -0.151
                  ],
                  [
                    6.143,
                    -0.141
                  ],
                  [
                    6.152,
                    -0.132
                  ],
                  [
                    6.162,
                    -0.122
                  ],
                  [
                    6.171,
                    -0.113
                  ],
                  [
                    6.18,
                    -0.103
                  ],
                  [
                    6.19,
                    -0.094
                  ],
                  [
                    6.199,
                    -0.084
                  ],
                  [
                    6.208,
                    -0.075
                  ],
                  [
                    6.218,
                    -0.066
                  ],
                  [
                    6.227,
                    -0.056
                  ],
                  [
                    6.236,
                    -0.047
                  ],
                  [
                    6.246,
                    -0.037
                  ],
                  [
                    6.255,
                    -0.028
                  ],
                  [
                    6.265,
                    -0.019
                  ],
                  [
                    6.274,
                    -0.009
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  1.571,
                  -4
                ],
                "to": [
                  1.571,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  4.712,
                  -4
                ],
                "to": [
                  4.712,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              }
            ],
            "points": [
              {
                "at": [
                  0,
                  0
                ],
                "label": "0",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  0.983,
                  1.5
                ],
                "label": "\\arctan\\frac{3}{2}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  3.142,
                  0
                ],
                "label": "\\pi",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  4.124,
                  1.5
                ],
                "label": "\\pi+\\arctan\\frac{3}{2}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  6.283,
                  0
                ],
                "label": "2\\pi",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = 0, \\pi, 2\\pi,\\; \\arctan\\displaystyle\\frac{3}{2},\\; \\pi + \\arctan\\displaystyle\\frac{3}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-061",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 64",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\cot^2\\theta = \\csc\\theta + 1\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "quadratic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This is the standard identity linking \\(\\cot\\theta\\) and \\(\\csc\\theta\\). We need it because the equation mixes \\(\\cot^2\\theta\\) and \\(\\csc\\theta\\), and we want everything in a single function."
        },
        {
          "stepNumber": 2,
          "description": "Show where the identity comes from.",
          "workingLatex": "\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta} = \\frac{\\cos^2\\theta}{\\sin^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\sin^2\\theta\\) gives \\(1 + \\cot^2\\theta = \\csc^2\\theta\\). Seeing the derivation makes the identity easier to recall under pressure."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the identity for cot squared.",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "Subtract 1 from both sides of the identity. A common slip is writing \\(\\cot^2\\theta = 1 - \\csc^2\\theta\\); keep the \\(\\csc^2\\theta\\) positive."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the equation.",
          "workingLatex": "\\csc^2\\theta - 1 = \\csc\\theta + 1",
          "explanation": "Replace \\(\\cot^2\\theta\\) on the left of the original equation with \\(\\csc^2\\theta - 1\\). Now every term is written in \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the right-hand terms across.",
          "workingLatex": "\\csc^2\\theta - 1 - \\csc\\theta - 1 = 0",
          "explanation": "Move \\(\\csc\\theta\\) and \\(1\\) to the left by subtracting both. Writing this line before collecting helps avoid sign errors with the two constants."
        },
        {
          "stepNumber": 6,
          "description": "Collect into a standard quadratic.",
          "workingLatex": "\\csc^2\\theta - \\csc\\theta - 2 = 0",
          "explanation": "Combine the constants \\(-1 - 1 = -2\\). This is a quadratic in \\(\\csc\\theta\\); putting it in the form \\(=0\\) is essential before factorising."
        },
        {
          "stepNumber": 7,
          "description": "Rename the variable to factorise.",
          "workingLatex": "x = \\csc\\theta, \\quad x^2 - x - 2 = 0",
          "explanation": "Temporarily writing \\(x = \\csc\\theta\\) makes the quadratic look familiar and reduces careless errors while factorising."
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x - 2)(x + 1) = 0",
          "explanation": "We need two numbers multiplying to \\(-2\\) and adding to \\(-1\\): these are \\(-2\\) and \\(+1\\). Check the middle term: \\(-2 + 1 = -1\\). Correct."
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the factors in cosec.",
          "workingLatex": "(\\csc\\theta - 2)(\\csc\\theta + 1) = 0",
          "explanation": "Replace \\(x\\) by \\(\\csc\\theta\\) again. We are now back to the trig variable, ready to read off values."
        },
        {
          "stepNumber": 10,
          "description": "Set each factor to zero.",
          "workingLatex": "\\csc\\theta = 2 \\quad \\text{or} \\quad \\csc\\theta = -1",
          "explanation": "A product is zero exactly when one factor is zero. Both values satisfy \\(|\\csc\\theta| \\ge 1\\), so neither is rejected on validity grounds."
        },
        {
          "stepNumber": 11,
          "description": "Convert to sine values.",
          "workingLatex": "\\sin\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\sin\\theta = -1",
          "explanation": "Since \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\), take the reciprocal of each value. Remember to flip, not negate: the reciprocal of \\(2\\) is \\(\\displaystyle\\frac{1}{2}\\)."
        },
        {
          "stepNumber": 12,
          "description": "Find the principal solution of sin = 1/2.",
          "workingLatex": "\\theta = \\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "The inverse sine of \\(\\displaystyle\\frac{1}{2}\\) is \\(\\displaystyle\\frac{\\pi}{6}\\), a standard exact value. This is the first quadrant solution."
        },
        {
          "stepNumber": 13,
          "description": "Find the second solution of sin = 1/2.",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is positive in quadrants 1 and 2, so the second solution in \\([0,2\\pi]\\) is \\(\\pi - \\displaystyle\\frac{\\pi}{6} = \\displaystyle\\frac{5\\pi}{6}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Solve sin = -1 on the interval.",
          "workingLatex": "\\theta = \\frac{3\\pi}{2}",
          "explanation": "Sine reaches its minimum of \\(-1\\) only at \\(\\displaystyle\\frac{3\\pi}{2}\\) in \\([0,2\\pi]\\). It is easy to forget this lone solution, so flag it."
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions.",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\ \\frac{5\\pi}{6}, \\ \\frac{3\\pi}{2}",
          "explanation": "These are all values in the closed interval \\([0,2\\pi]\\). Each makes \\(\\sin\\theta \\ne 0\\), so \\(\\cot\\theta\\) and \\(\\csc\\theta\\) are both defined and the answers are valid."
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}, \\displaystyle\\frac{3\\pi}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-062",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 65",
    "difficulty": "Challenge",
    "questionText": "If \\(\\cos\\theta + \\sec\\theta = \\displaystyle\\frac{5}{2}\\), find \\(\\sec\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write sec in terms of cos.",
          "workingLatex": "\\cos\\theta + \\frac{1}{\\cos\\theta} = \\frac{5}{2}",
          "explanation": "Use \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\) so the equation involves only \\(\\cos\\theta\\). Reducing to one function is the key first move."
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "c = \\cos\\theta",
          "explanation": "Letting \\(c = \\cos\\theta\\) keeps the algebra clean and less error-prone. Note \\(c \\ne 0\\), since \\(\\sec\\theta\\) must be defined."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in c.",
          "workingLatex": "c + \\frac{1}{c} = \\frac{5}{2}",
          "explanation": "Substituting \\(c\\) for \\(\\cos\\theta\\) gives a clean equation with a single fraction \\(\\displaystyle\\frac{1}{c}\\) to clear."
        },
        {
          "stepNumber": 4,
          "description": "Multiply every term by c.",
          "workingLatex": "c \\cdot c + c \\cdot \\frac{1}{c} = \\frac{5}{2}\\,c",
          "explanation": "Multiplying through by \\(c\\) clears the fraction. Writing each product explicitly avoids forgetting to multiply the right-hand side."
        },
        {
          "stepNumber": 5,
          "description": "Simplify each product.",
          "workingLatex": "c^2 + 1 = \\frac{5}{2}c",
          "explanation": "Here \\(c \\cdot c = c^2\\) and \\(c \\cdot \\displaystyle\\frac{1}{c} = 1\\). The fraction on the left is now gone."
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by 2.",
          "workingLatex": "2c^2 + 2 = 5c",
          "explanation": "Multiplying every term by 2 removes the remaining fraction \\(\\displaystyle\\frac{5}{2}\\). A common slip is dropping the factor of 2 on the constant term, giving \\(2c^2 + 1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Collect into a standard quadratic.",
          "workingLatex": "2c^2 - 5c + 2 = 0",
          "explanation": "Subtract \\(5c\\) from both sides so everything sits on one side equal to zero. This is the form needed for factorising."
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "(2c - 1)(c - 2) = 0",
          "explanation": "Look for factors of \\(2c^2 + 2\\) giving a middle term \\(-5c\\). Expand to check: \\(2c^2 - 4c - c + 2 = 2c^2 - 5c + 2\\). Correct."
        },
        {
          "stepNumber": 9,
          "description": "Find the two roots.",
          "workingLatex": "c = \\frac{1}{2} \\quad \\text{or} \\quad c = 2",
          "explanation": "Set each factor to zero: \\(2c - 1 = 0\\) gives \\(c = \\displaystyle\\frac{1}{2}\\) and \\(c - 2 = 0\\) gives \\(c = 2\\). We now check which is a valid cosine."
        },
        {
          "stepNumber": 10,
          "description": "Reject the invalid root.",
          "workingLatex": "|\\cos\\theta| \\le 1 \\Rightarrow c = 2 \\text{ rejected}",
          "explanation": "Cosine can never exceed 1, so \\(c = 2\\) is impossible. Only \\(\\cos\\theta = \\displaystyle\\frac{1}{2}\\) survives this validity check."
        },
        {
          "stepNumber": 11,
          "description": "State the surviving cosine value.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "This is the only admissible value, so it is the cosine we use to find \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 12,
          "description": "Take the reciprocal for sec.",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{1/2} = 2",
          "explanation": "Since \\(\\cos\\theta = \\displaystyle\\frac{1}{2}\\), dividing 1 by \\(\\displaystyle\\frac{1}{2}\\) gives 2. Note \\(|\\sec\\theta| = 2 \\ge 1\\), so the answer is valid."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta = 2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-063",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 66",
    "difficulty": "Challenge",
    "questionText": "Show that for all \\(\\theta\\) (where defined), \\(\\sec^2\\theta + \\csc^2\\theta \\ge 4\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert both terms to sin and cos.",
          "workingLatex": "\\sec^2\\theta + \\csc^2\\theta = \\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Use \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\) and \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\), then square. Working in sin/cos is the safest route for a proof."
        },
        {
          "stepNumber": 2,
          "description": "Write each fraction over the common denominator.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin^2\\theta\\,\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta\\,\\cos^2\\theta}",
          "explanation": "The common denominator is \\(\\sin^2\\theta\\cos^2\\theta\\). Multiply the first fraction top and bottom by \\(\\sin^2\\theta\\) and the second by \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Combine into a single fraction.",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta\\,\\cos^2\\theta}",
          "explanation": "With a shared denominator, add the numerators. This sets up the Pythagorean identity in the numerator."
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity to the numerator.",
          "workingLatex": "= \\frac{1}{\\sin^2\\theta\\,\\cos^2\\theta}",
          "explanation": "Since \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the numerator is just 1. This is the central simplification."
        },
        {
          "stepNumber": 5,
          "description": "Recall the double-angle form of sine.",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The double-angle identity expresses the product \\(\\sin\\theta\\cos\\theta\\) in a single function whose range we know exactly."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the product.",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{1}{2}\\sin 2\\theta",
          "explanation": "Divide both sides by 2. This is the form we substitute into the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Square the product.",
          "workingLatex": "\\sin^2\\theta\\,\\cos^2\\theta = \\left(\\frac{1}{2}\\sin 2\\theta\\right)^2 = \\frac{1}{4}\\sin^2 2\\theta",
          "explanation": "Square both sides. Remember to square the \\(\\displaystyle\\frac{1}{2}\\) as well, giving \\(\\displaystyle\\frac{1}{4}\\); forgetting this is a common slip."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the squared denominator.",
          "workingLatex": "\\sec^2\\theta + \\csc^2\\theta = \\frac{1}{\\frac{1}{4}\\sin^2 2\\theta}",
          "explanation": "Replace \\(\\sin^2\\theta\\cos^2\\theta\\) in the denominator by \\(\\displaystyle\\frac{1}{4}\\sin^2 2\\theta\\). The expression now depends only on \\(\\sin^2 2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the compound fraction.",
          "workingLatex": "= \\frac{4}{\\sin^2 2\\theta}",
          "explanation": "Dividing 1 by \\(\\displaystyle\\frac{1}{4}\\sin^2 2\\theta\\) is the same as multiplying by 4, giving \\(\\displaystyle\\frac{4}{\\sin^2 2\\theta}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Bound the denominator.",
          "workingLatex": "0 < \\sin^2 2\\theta \\le 1",
          "explanation": "Where the expression is defined, \\(\\sin 2\\theta \\ne 0\\) (so the denominator is positive), and a squared sine never exceeds 1. The upper bound drives the inequality."
        },
        {
          "stepNumber": 11,
          "description": "Turn the bound into a fraction inequality.",
          "workingLatex": "\\frac{4}{\\sin^2 2\\theta} \\ge \\frac{4}{1} = 4",
          "explanation": "For a positive numerator, a smaller denominator makes a larger fraction. Since \\(\\sin^2 2\\theta \\le 1\\), the quotient is at least 4."
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion and equality case.",
          "workingLatex": "\\sec^2\\theta + \\csc^2\\theta \\ge 4 \\quad \\blacksquare",
          "explanation": "The inequality is proved. Equality holds exactly when \\(\\sin^2 2\\theta = 1\\), i.e. \\(\\sin 2\\theta = \\pm 1\\) (at \\(\\theta = \\displaystyle\\frac{\\pi}{4}, \\displaystyle\\frac{3\\pi}{4}, \\dots\\))."
        }
      ],
      "finalAnswer": "Equality when \\(\\sin 2\\theta = \\pm 1\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-064",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 67",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sec\\theta - \\tan\\theta = 3\\), find \\(\\sec\\theta + \\tan\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the relevant identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the Pythagorean identity obtained by dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\). It links \\(\\sec^2\\theta\\) and \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a difference of squares.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtract \\(\\tan^2\\theta\\) from both sides. The left side is now a difference of two squares, which factorises neatly."
        },
        {
          "stepNumber": 3,
          "description": "Recall the difference-of-squares rule.",
          "workingLatex": "a^2 - b^2 = (a - b)(a + b)",
          "explanation": "This standard factorisation is the tool that connects the given expression to the wanted one. Here \\(a = \\sec\\theta\\) and \\(b = \\tan\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Factorise the left-hand side.",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1",
          "explanation": "Apply the rule with \\(a = \\sec\\theta\\), \\(b = \\tan\\theta\\). One bracket is exactly the quantity we were given, the other is what we want."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the given value.",
          "workingLatex": "3 \\cdot (\\sec\\theta + \\tan\\theta) = 1",
          "explanation": "Replace \\(\\sec\\theta - \\tan\\theta\\) with 3. This leaves a simple linear equation for the wanted expression."
        },
        {
          "stepNumber": 6,
          "description": "Solve for the required sum.",
          "workingLatex": "\\sec\\theta + \\tan\\theta = \\frac{1}{3}",
          "explanation": "Divide both sides by 3. Note the product of the two conjugate expressions is always 1, so they are reciprocals of each other."
        }
      ],
      "finalAnswer": "\\(\\displaystyle\\frac{1}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-065",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 68",
    "difficulty": "Challenge",
    "questionText": "Using the previous result, find \\(\\sec\\theta\\) and \\(\\tan\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "algebra"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both equations.",
          "workingLatex": "\\sec\\theta - \\tan\\theta = 3, \\quad \\sec\\theta + \\tan\\theta = \\frac{1}{3}",
          "explanation": "The first is given; the second came from the previous part. Together they form a pair of simultaneous equations in \\(\\sec\\theta\\) and \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Add the two equations.",
          "workingLatex": "(\\sec\\theta - \\tan\\theta) + (\\sec\\theta + \\tan\\theta) = 3 + \\frac{1}{3}",
          "explanation": "Adding eliminates \\(\\tan\\theta\\) because \\(-\\tan\\theta + \\tan\\theta = 0\\). Line up the left sides and the right sides before simplifying."
        },
        {
          "stepNumber": 3,
          "description": "Simplify both sides.",
          "workingLatex": "2\\sec\\theta = \\frac{9}{3} + \\frac{1}{3} = \\frac{10}{3}",
          "explanation": "On the left the \\(\\sec\\theta\\) terms add to \\(2\\sec\\theta\\). On the right write \\(3 = \\displaystyle\\frac{9}{3}\\) so the fractions share a denominator."
        },
        {
          "stepNumber": 4,
          "description": "Solve for sec.",
          "workingLatex": "\\sec\\theta = \\frac{5}{3}",
          "explanation": "Divide \\(\\displaystyle\\frac{10}{3}\\) by 2. Note \\(|\\sec\\theta| = \\displaystyle\\frac{5}{3} \\ge 1\\), which is a valid value for secant."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the equations.",
          "workingLatex": "(\\sec\\theta + \\tan\\theta) - (\\sec\\theta - \\tan\\theta) = \\frac{1}{3} - 3",
          "explanation": "Subtracting the first equation from the second eliminates \\(\\sec\\theta\\). Keep the order consistent so the signs are correct."
        },
        {
          "stepNumber": 6,
          "description": "Simplify both sides.",
          "workingLatex": "2\\tan\\theta = \\frac{1}{3} - \\frac{9}{3} = -\\frac{8}{3}",
          "explanation": "On the left \\(\\tan\\theta + \\tan\\theta = 2\\tan\\theta\\). On the right \\(\\displaystyle\\frac{1}{3} - \\displaystyle\\frac{9}{3} = -\\displaystyle\\frac{8}{3}\\); mind the negative sign."
        },
        {
          "stepNumber": 7,
          "description": "Solve for tan.",
          "workingLatex": "\\tan\\theta = -\\frac{4}{3}",
          "explanation": "Divide \\(-\\displaystyle\\frac{8}{3}\\) by 2. The negative sign is easy to drop accidentally, so carry it through carefully."
        },
        {
          "stepNumber": 8,
          "description": "Check with the identity.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = \\frac{25}{9} - \\frac{16}{9} = \\frac{9}{9} = 1",
          "explanation": "Verifying \\(\\sec^2\\theta - \\tan^2\\theta = 1\\) confirms the values are consistent with the Pythagorean identity. This is a quick, reassuring final check."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta = \\displaystyle\\frac{5}{3}, \\tan\\theta = -\\displaystyle\\frac{4}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-066",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 69",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\sec\\theta + \\tan\\theta = 2\\) on \\([0, 2\\pi]\\).",
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
          "description": "State the given equation.",
          "workingLatex": "\\sec\\theta + \\tan\\theta = 2",
          "explanation": "We will exploit a standard identity linking sec and tan rather than substituting straight away, since a direct substitution leads to a messier quadratic."
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the identity for sec and tan, obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\). A common slip is to misremember it as \\(1+\\sec^2=\\tan^2\\); keep sec on the larger side."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a difference of squares.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting \\(\\tan^2\\theta\\) from both sides isolates the difference of two squares on the left, which factorises neatly."
        },
        {
          "stepNumber": 4,
          "description": "Recall the difference-of-squares rule.",
          "workingLatex": "a^2 - b^2 = (a-b)(a+b)",
          "explanation": "We will apply this with \\(a=\\sec\\theta\\) and \\(b=\\tan\\theta\\). Naming the rule first makes the next factorisation transparent."
        },
        {
          "stepNumber": 5,
          "description": "Factorise the difference of squares.",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1",
          "explanation": "Applying \\(a^2-b^2=(a-b)(a+b)\\). The second bracket is exactly the left-hand side of our original equation, which is the key to the trick."
        },
        {
          "stepNumber": 6,
          "description": "Identify the known bracket.",
          "workingLatex": "\\sec\\theta + \\tan\\theta = 2",
          "explanation": "The original equation tells us the value of the second factor, so we can replace it by 2."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known sum.",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(2) = 1",
          "explanation": "Replace \\(\\sec\\theta+\\tan\\theta\\) by \\(2\\). This is valid because \\(2 \\neq 0\\), so the factor can safely be divided out next."
        },
        {
          "stepNumber": 8,
          "description": "Solve for the difference.",
          "workingLatex": "\\sec\\theta - \\tan\\theta = \\frac{1}{2}",
          "explanation": "Dividing both sides by \\(2\\) gives a second linear equation in sec and tan to pair with the original."
        },
        {
          "stepNumber": 9,
          "description": "Write the two simultaneous equations.",
          "workingLatex": "\\sec\\theta + \\tan\\theta = 2, \\quad \\sec\\theta - \\tan\\theta = \\frac{1}{2}",
          "explanation": "Treat \\(\\sec\\theta\\) and \\(\\tan\\theta\\) as two unknowns; adding and subtracting these will separate them."
        },
        {
          "stepNumber": 10,
          "description": "Add the two equations.",
          "workingLatex": "(\\sec\\theta + \\tan\\theta) + (\\sec\\theta - \\tan\\theta) = 2 + \\frac{1}{2}",
          "explanation": "Adding left sides and right sides keeps the equation balanced; the \\(\\tan\\theta\\) terms will cancel on the left."
        },
        {
          "stepNumber": 11,
          "description": "Simplify the sum.",
          "workingLatex": "2\\sec\\theta = \\frac{5}{2}",
          "explanation": "On the left \\(+\\tan\\theta\\) and \\(-\\tan\\theta\\) cancel. Be careful adding the fractions on the right: \\(2+\\displaystyle\\frac{1}{2} = \\displaystyle\\frac{5}{2}\\), not \\(\\displaystyle\\frac{5}{4}\\)."
        },
        {
          "stepNumber": 12,
          "description": "Isolate sec.",
          "workingLatex": "\\sec\\theta = \\frac{5}{4}",
          "explanation": "Divide both sides by \\(2\\). Note \\(|\\sec\\theta|=\\displaystyle\\frac{5}{4} \\ge 1\\), so this value is valid for sec."
        },
        {
          "stepNumber": 13,
          "description": "Subtract the two equations.",
          "workingLatex": "(\\sec\\theta + \\tan\\theta) - (\\sec\\theta - \\tan\\theta) = 2 - \\frac{1}{2}",
          "explanation": "Subtracting instead cancels the sec terms; mind the bracket so both terms of the second equation change sign."
        },
        {
          "stepNumber": 14,
          "description": "Simplify the difference.",
          "workingLatex": "2\\tan\\theta = \\frac{3}{2}",
          "explanation": "On the left \\(\\sec\\theta-\\sec\\theta=0\\) and \\(\\tan\\theta-(-\\tan\\theta)=2\\tan\\theta\\). On the right \\(2-\\displaystyle\\frac{1}{2}=\\displaystyle\\frac{3}{2}\\)."
        },
        {
          "stepNumber": 15,
          "description": "Isolate tan.",
          "workingLatex": "\\tan\\theta = \\frac{3}{4}",
          "explanation": "Divide both sides by \\(2\\). We now have both sec and tan, which will fix the quadrant uniquely."
        },
        {
          "stepNumber": 16,
          "description": "Convert sec to cos.",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{4}{5}",
          "explanation": "Cosine is the reciprocal of secant. Since \\(\\cos\\theta>0\\), \\(\\theta\\) lies in quadrant 1 or quadrant 4."
        },
        {
          "stepNumber": 17,
          "description": "Find sin from tan and cos.",
          "workingLatex": "\\sin\\theta = \\tan\\theta\\cos\\theta = \\frac{3}{4}\\cdot\\frac{4}{5} = \\frac{3}{5}",
          "explanation": "Rearranging \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) gives \\(\\sin\\theta=\\tan\\theta\\cos\\theta\\). Since \\(\\sin\\theta>0\\) and \\(\\cos\\theta>0\\), \\(\\theta\\) is in quadrant 1.",
          "diagram": {
            "xMin": -0.8,
            "xMax": 5.2,
            "yMin": -0.8,
            "yMax": 4,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  0
                ],
                "color": "#0d9488",
                "label": "4",
                "labelAt": [
                  2,
                  -0.44
                ]
              },
              {
                "from": [
                  4,
                  0
                ],
                "to": [
                  4,
                  3
                ],
                "color": "#0d9488",
                "label": "3",
                "labelAt": [
                  4.52,
                  1.5
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  3
                ],
                "color": "#dc2626",
                "label": "5",
                "labelAt": [
                  1.52,
                  1.86
                ]
              },
              {
                "from": [
                  3.68,
                  0
                ],
                "to": [
                  3.68,
                  0.32
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  3.68,
                  0.32
                ],
                "to": [
                  4,
                  0.32
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  1.214,
                  0.405
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 18,
          "description": "Solve for the principal angle.",
          "workingLatex": "\\theta = \\arctan\\frac{3}{4} = \\arcsin\\frac{3}{5} \\approx 0.6435",
          "explanation": "All of cos, sin, tan are positive, so the only quadrant is the first; there is no second solution in \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 19,
          "description": "Check the rejected quadrant-4 case.",
          "workingLatex": "\\cos\\theta=\\frac{4}{5},\\ \\sin\\theta=-\\frac{3}{5}\\Rightarrow \\sec\\theta+\\tan\\theta=\\frac{5}{4}-\\frac{3}{4}=\\frac{1}{2}\\neq 2",
          "explanation": "The quadrant-4 angle with the same cosine but negative sine fails the original equation, confirming a single solution."
        }
      ],
      "finalAnswer": "\\(\\theta = \\arcsin\\left(\\displaystyle\\frac{3}{5}\\right) \\approx 0.6435\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-067",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 45",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\displaystyle\\frac{\\cot\\theta - 1}{\\cot\\theta + 1} \\equiv \\displaystyle\\frac{1 - \\tan\\theta}{1 + \\tan\\theta}\\).",
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
          "description": "Start from the left-hand side.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\cot\\theta - 1}{\\cot\\theta + 1}",
          "explanation": "We will manipulate the LHS until it matches the RHS, the cleaner direction here because cot will turn into 1/tan."
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal identity.",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent. This lets us express everything in terms of tan to compare with the RHS."
        },
        {
          "stepNumber": 3,
          "description": "Substitute cot as 1/tan.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\frac{1}{\\tan\\theta} - 1}{\\frac{1}{\\tan\\theta} + 1}",
          "explanation": "Replace both occurrences of cot. The expression now has fractions inside a fraction, which we will clear next."
        },
        {
          "stepNumber": 4,
          "description": "Decide what to multiply by.",
          "workingLatex": "\\frac{1}{\\tan\\theta}\\cdot\\tan\\theta = 1",
          "explanation": "Multiplying any term by \\(\\tan\\theta\\) clears the inner denominator, so \\(\\tan\\theta\\) is the right multiplier for both top and bottom."
        },
        {
          "stepNumber": 5,
          "description": "Multiply top and bottom by tan.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\left(\\frac{1}{\\tan\\theta} - 1\\right)\\tan\\theta}{\\left(\\frac{1}{\\tan\\theta} + 1\\right)\\tan\\theta}",
          "explanation": "Multiplying numerator and denominator by the same nonzero quantity \\(\\tan\\theta\\) does not change the value of the fraction."
        },
        {
          "stepNumber": 6,
          "description": "Distribute tan in the numerator.",
          "workingLatex": "\\left(\\frac{1}{\\tan\\theta} - 1\\right)\\tan\\theta = \\frac{1}{\\tan\\theta}\\cdot\\tan\\theta - 1\\cdot\\tan\\theta",
          "explanation": "Expand the bracket term by term. A common slip is forgetting to multiply the \\(-1\\) by \\(\\tan\\theta\\) as well."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numerator.",
          "workingLatex": "= 1 - \\tan\\theta",
          "explanation": "The first product is \\(\\left(\\displaystyle\\frac{1}{\\tan\\theta}\\right)\\cdot\\tan\\theta=1\\); the second is \\(-\\tan\\theta\\), giving \\(1-\\tan\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Distribute tan in the denominator.",
          "workingLatex": "\\left(\\frac{1}{\\tan\\theta} + 1\\right)\\tan\\theta = \\frac{1}{\\tan\\theta}\\cdot\\tan\\theta + 1\\cdot\\tan\\theta",
          "explanation": "Same distribution as the numerator; each term inside the bracket is multiplied by \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the denominator.",
          "workingLatex": "= 1 + \\tan\\theta",
          "explanation": "The first product is again \\(1\\), and the second is \\(+\\tan\\theta\\), giving \\(1+\\tan\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Combine to reach the RHS.",
          "workingLatex": "\\mathrm{LHS} = \\frac{1 - \\tan\\theta}{1 + \\tan\\theta} = \\mathrm{RHS}",
          "explanation": "The simplified LHS equals the RHS, completing the proof. The identity holds wherever \\(\\tan\\theta\\) is defined and nonzero (and \\(1+\\tan\\theta\\neq0\\))."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-068",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 46",
    "difficulty": "Standard",
    "questionText": "Find \\(\\sin\\theta\\) and \\(\\cos\\theta\\) if \\(\\sec\\theta = 2\\) and \\(\\cot\\theta = \\displaystyle\\frac{1}{\\sqrt 3}\\) (with \\(\\theta\\) acute).",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "exact"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reciprocal identity for sec.",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so an equation in sec converts directly into one in cos."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given value.",
          "workingLatex": "\\frac{1}{\\cos\\theta} = 2",
          "explanation": "Replace \\(\\sec\\theta\\) by its given value \\(2\\). Now we can solve for cos."
        },
        {
          "stepNumber": 3,
          "description": "Solve for cos.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Take the reciprocal of both sides. Since \\(\\theta\\) is acute, \\(\\cos\\theta\\) is positive, which matches the value \\(\\displaystyle\\frac{1}{2}\\).",
          "diagram": {
            "xMin": -0.346,
            "xMax": 1.52,
            "yMin": -0.346,
            "yMax": 2.165,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  1,
                  0
                ],
                "color": "#0d9488",
                "label": "1",
                "labelAt": [
                  0.5,
                  -0.191
                ]
              },
              {
                "from": [
                  1,
                  0
                ],
                "to": [
                  1,
                  1.732
                ],
                "color": "#0d9488",
                "label": "\\sqrt{3}",
                "labelAt": [
                  1.225,
                  0.866
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  1,
                  1.732
                ],
                "color": "#dc2626",
                "label": "2",
                "labelAt": [
                  0.292,
                  1.022
                ]
              },
              {
                "from": [
                  0.861,
                  0
                ],
                "to": [
                  0.861,
                  0.139
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  0.861,
                  0.139
                ],
                "to": [
                  1,
                  0.139
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  0.277,
                  0.16
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This standard identity lets us find sin once cos is known. We will substitute \\(\\cos\\theta=\\displaystyle\\frac{1}{2}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for sin squared.",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides to isolate \\(\\sin^2\\theta\\) before substituting the number."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the value of cos.",
          "workingLatex": "\\sin^2\\theta = 1 - \\left(\\frac{1}{2}\\right)^2",
          "explanation": "Put \\(\\cos\\theta=\\displaystyle\\frac{1}{2}\\) into the expression. The squaring must be done before subtracting."
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the square.",
          "workingLatex": "\\sin^2\\theta = 1 - \\frac{1}{4} = \\frac{3}{4}",
          "explanation": "\\(\\left(\\displaystyle\\frac{1}{2}\\right)^2=\\displaystyle\\frac{1}{4}\\). A frequent error is computing \\(1-\\displaystyle\\frac{1}{2}\\) instead of \\(1-\\displaystyle\\frac{1}{4}\\), so square first."
        },
        {
          "stepNumber": 8,
          "description": "Take the positive square root.",
          "workingLatex": "\\sin\\theta = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}",
          "explanation": "Because \\(\\theta\\) is acute, \\(\\sin\\theta>0\\), so we discard the negative root."
        },
        {
          "stepNumber": 9,
          "description": "Recall cot in terms of cos and sin.",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent equals cosine over sine; we use this to verify the second given condition is consistent."
        },
        {
          "stepNumber": 10,
          "description": "Check against the cot condition.",
          "workingLatex": "\\cot\\theta = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}",
          "explanation": "The \\(2\\)'s cancel, leaving \\(\\displaystyle\\frac{1}{\\sqrt{3}}\\), which matches the given value and confirms \\(\\theta=\\displaystyle\\frac{\\pi}{3}\\). This cross-check guards against the wrong quadrant."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta = \\displaystyle\\frac{\\sqrt 3}{2}, \\cos\\theta = \\displaystyle\\frac{1}{2}\\) (i.e. \\(\\theta = \\displaystyle\\frac{\\pi}{3}\\)).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-069",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 47",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sec\\theta = \\csc\\theta\\) on \\([0, 2\\pi]\\).",
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
          "description": "Recall the reciprocal identities.",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Secant and cosecant are the reciprocals of cosine and sine, so rewriting them turns the equation into something elementary."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation.",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\frac{1}{\\sin\\theta}",
          "explanation": "Substitute both reciprocal forms into \\(\\sec\\theta=\\csc\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Take reciprocals of both sides.",
          "workingLatex": "\\cos\\theta = \\sin\\theta",
          "explanation": "Two equal reciprocals must come from equal quantities. This is valid since neither \\(\\cos\\theta\\) nor \\(\\sin\\theta\\) is zero where sec and csc are defined."
        },
        {
          "stepNumber": 4,
          "description": "Note dividing by cos is allowed.",
          "workingLatex": "\\cos\\theta \\neq 0",
          "explanation": "If \\(\\cos\\theta\\) were \\(0\\) then \\(\\sec\\theta\\) would be undefined, so on the domain of the equation we may safely divide by \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Divide through by cos.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = 1",
          "explanation": "Dividing both sides of \\(\\sin\\theta=\\cos\\theta\\) by \\(\\cos\\theta\\) puts the equation in terms of the ratio \\(\\displaystyle\\frac{\\sin}{\\cos}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Recognise the tan ratio.",
          "workingLatex": "\\tan\\theta = 1",
          "explanation": "Since \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), the equation reduces to a simple tangent equation."
        },
        {
          "stepNumber": 7,
          "description": "Find the principal solution.",
          "workingLatex": "\\theta = \\arctan 1 = \\frac{\\pi}{4}",
          "explanation": "The first-quadrant solution where \\(\\tan=1\\). Both sin and cos are positive here, so \\(\\sec\\theta=\\csc\\theta\\) holds."
        },
        {
          "stepNumber": 8,
          "description": "Use the period of tan.",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}",
          "explanation": "Tangent has period \\(\\pi\\), so adding \\(\\pi\\) gives the next solution. A common slip is to use period \\(2\\pi\\) and miss this root."
        },
        {
          "stepNumber": 9,
          "description": "Test the next period.",
          "workingLatex": "\\frac{\\pi}{4} + 2\\pi = \\frac{9\\pi}{4} > 2\\pi",
          "explanation": "Adding another \\(\\pi\\) (or \\(2\\pi\\) to the first root) exceeds \\(2\\pi\\), so it lies outside the interval and is rejected."
        },
        {
          "stepNumber": 10,
          "description": "List all solutions in the interval.",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}",
          "explanation": "Only these two values lie in \\([0,2\\pi]\\), so they are the complete solution set.",
          "diagram": {
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -4,
            "yMax": 4,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\frac{\\pi}{2}",
              "\\pi",
              "\\frac{3\\pi}{2}",
              "2\\pi"
            ],
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.009,
                    0.009
                  ],
                  [
                    0.019,
                    0.019
                  ],
                  [
                    0.028,
                    0.028
                  ],
                  [
                    0.037,
                    0.037
                  ],
                  [
                    0.047,
                    0.047
                  ],
                  [
                    0.056,
                    0.056
                  ],
                  [
                    0.065,
                    0.066
                  ],
                  [
                    0.075,
                    0.075
                  ],
                  [
                    0.084,
                    0.084
                  ],
                  [
                    0.093,
                    0.094
                  ],
                  [
                    0.103,
                    0.103
                  ],
                  [
                    0.112,
                    0.113
                  ],
                  [
                    0.122,
                    0.122
                  ],
                  [
                    0.131,
                    0.132
                  ],
                  [
                    0.14,
                    0.141
                  ],
                  [
                    0.15,
                    0.151
                  ],
                  [
                    0.159,
                    0.16
                  ],
                  [
                    0.168,
                    0.17
                  ],
                  [
                    0.178,
                    0.179
                  ],
                  [
                    0.187,
                    0.189
                  ],
                  [
                    0.196,
                    0.199
                  ],
                  [
                    0.206,
                    0.209
                  ],
                  [
                    0.215,
                    0.218
                  ],
                  [
                    0.224,
                    0.228
                  ],
                  [
                    0.234,
                    0.238
                  ],
                  [
                    0.243,
                    0.248
                  ],
                  [
                    0.252,
                    0.258
                  ],
                  [
                    0.262,
                    0.268
                  ],
                  [
                    0.271,
                    0.278
                  ],
                  [
                    0.28,
                    0.288
                  ],
                  [
                    0.29,
                    0.298
                  ],
                  [
                    0.299,
                    0.308
                  ],
                  [
                    0.308,
                    0.319
                  ],
                  [
                    0.318,
                    0.329
                  ],
                  [
                    0.327,
                    0.339
                  ],
                  [
                    0.337,
                    0.35
                  ],
                  [
                    0.346,
                    0.36
                  ],
                  [
                    0.355,
                    0.371
                  ],
                  [
                    0.365,
                    0.382
                  ],
                  [
                    0.374,
                    0.392
                  ],
                  [
                    0.383,
                    0.403
                  ],
                  [
                    0.393,
                    0.414
                  ],
                  [
                    0.402,
                    0.425
                  ],
                  [
                    0.411,
                    0.436
                  ],
                  [
                    0.421,
                    0.447
                  ],
                  [
                    0.43,
                    0.459
                  ],
                  [
                    0.439,
                    0.47
                  ],
                  [
                    0.449,
                    0.481
                  ],
                  [
                    0.458,
                    0.493
                  ],
                  [
                    0.467,
                    0.505
                  ],
                  [
                    0.477,
                    0.516
                  ],
                  [
                    0.486,
                    0.528
                  ],
                  [
                    0.495,
                    0.54
                  ],
                  [
                    0.505,
                    0.553
                  ],
                  [
                    0.514,
                    0.565
                  ],
                  [
                    0.523,
                    0.577
                  ],
                  [
                    0.533,
                    0.59
                  ],
                  [
                    0.542,
                    0.602
                  ],
                  [
                    0.552,
                    0.615
                  ],
                  [
                    0.561,
                    0.628
                  ],
                  [
                    0.57,
                    0.641
                  ],
                  [
                    0.58,
                    0.655
                  ],
                  [
                    0.589,
                    0.668
                  ],
                  [
                    0.598,
                    0.682
                  ],
                  [
                    0.608,
                    0.695
                  ],
                  [
                    0.617,
                    0.709
                  ],
                  [
                    0.626,
                    0.723
                  ],
                  [
                    0.636,
                    0.738
                  ],
                  [
                    0.645,
                    0.752
                  ],
                  [
                    0.654,
                    0.767
                  ],
                  [
                    0.664,
                    0.782
                  ],
                  [
                    0.673,
                    0.797
                  ],
                  [
                    0.682,
                    0.813
                  ],
                  [
                    0.692,
                    0.828
                  ],
                  [
                    0.701,
                    0.844
                  ],
                  [
                    0.71,
                    0.86
                  ],
                  [
                    0.72,
                    0.877
                  ],
                  [
                    0.729,
                    0.893
                  ],
                  [
                    0.738,
                    0.91
                  ],
                  [
                    0.748,
                    0.927
                  ],
                  [
                    0.757,
                    0.945
                  ],
                  [
                    0.766,
                    0.963
                  ],
                  [
                    0.776,
                    0.981
                  ],
                  [
                    0.785,
                    1
                  ],
                  [
                    0.795,
                    1.018
                  ],
                  [
                    0.804,
                    1.038
                  ],
                  [
                    0.813,
                    1.057
                  ],
                  [
                    0.823,
                    1.077
                  ],
                  [
                    0.832,
                    1.098
                  ],
                  [
                    0.841,
                    1.119
                  ],
                  [
                    0.851,
                    1.14
                  ],
                  [
                    0.86,
                    1.161
                  ],
                  [
                    0.869,
                    1.184
                  ],
                  [
                    0.879,
                    1.206
                  ],
                  [
                    0.888,
                    1.23
                  ],
                  [
                    0.897,
                    1.253
                  ],
                  [
                    0.907,
                    1.278
                  ],
                  [
                    0.916,
                    1.303
                  ],
                  [
                    0.925,
                    1.328
                  ],
                  [
                    0.935,
                    1.354
                  ],
                  [
                    0.944,
                    1.381
                  ],
                  [
                    0.953,
                    1.409
                  ],
                  [
                    0.963,
                    1.437
                  ],
                  [
                    0.972,
                    1.466
                  ],
                  [
                    0.981,
                    1.496
                  ],
                  [
                    0.991,
                    1.526
                  ],
                  [
                    1,
                    1.558
                  ],
                  [
                    1.01,
                    1.591
                  ],
                  [
                    1.019,
                    1.624
                  ],
                  [
                    1.028,
                    1.659
                  ],
                  [
                    1.038,
                    1.694
                  ],
                  [
                    1.047,
                    1.731
                  ],
                  [
                    1.056,
                    1.769
                  ],
                  [
                    1.066,
                    1.808
                  ],
                  [
                    1.075,
                    1.849
                  ],
                  [
                    1.084,
                    1.891
                  ],
                  [
                    1.094,
                    1.934
                  ],
                  [
                    1.103,
                    1.979
                  ],
                  [
                    1.112,
                    2.026
                  ],
                  [
                    1.122,
                    2.075
                  ],
                  [
                    1.131,
                    2.126
                  ],
                  [
                    1.14,
                    2.178
                  ],
                  [
                    1.15,
                    2.233
                  ],
                  [
                    1.159,
                    2.29
                  ],
                  [
                    1.168,
                    2.35
                  ],
                  [
                    1.178,
                    2.412
                  ],
                  [
                    1.187,
                    2.477
                  ],
                  [
                    1.196,
                    2.546
                  ],
                  [
                    1.206,
                    2.617
                  ],
                  [
                    1.215,
                    2.692
                  ],
                  [
                    1.225,
                    2.772
                  ],
                  [
                    1.234,
                    2.855
                  ],
                  [
                    1.243,
                    2.943
                  ],
                  [
                    1.253,
                    3.036
                  ],
                  [
                    1.262,
                    3.134
                  ],
                  [
                    1.271,
                    3.238
                  ],
                  [
                    1.281,
                    3.349
                  ],
                  [
                    1.29,
                    3.467
                  ],
                  [
                    1.299,
                    3.592
                  ],
                  [
                    1.309,
                    3.727
                  ],
                  [
                    1.318,
                    3.871
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5,
                "label": "y=\\tan\\theta",
                "labelAt": [
                  0.45,
                  0.48
                ]
              },
              {
                "points": [
                  [
                    1.833,
                    -3.722
                  ],
                  [
                    1.852,
                    -3.462
                  ],
                  [
                    1.871,
                    -3.234
                  ],
                  [
                    1.889,
                    -3.032
                  ],
                  [
                    1.908,
                    -2.852
                  ],
                  [
                    1.927,
                    -2.69
                  ],
                  [
                    1.945,
                    -2.543
                  ],
                  [
                    1.964,
                    -2.41
                  ],
                  [
                    1.983,
                    -2.288
                  ],
                  [
                    2.001,
                    -2.176
                  ],
                  [
                    2.02,
                    -2.073
                  ],
                  [
                    2.039,
                    -1.978
                  ],
                  [
                    2.058,
                    -1.89
                  ],
                  [
                    2.076,
                    -1.807
                  ],
                  [
                    2.095,
                    -1.73
                  ],
                  [
                    2.114,
                    -1.658
                  ],
                  [
                    2.132,
                    -1.59
                  ],
                  [
                    2.151,
                    -1.526
                  ],
                  [
                    2.17,
                    -1.465
                  ],
                  [
                    2.188,
                    -1.408
                  ],
                  [
                    2.207,
                    -1.354
                  ],
                  [
                    2.226,
                    -1.302
                  ],
                  [
                    2.244,
                    -1.253
                  ],
                  [
                    2.263,
                    -1.206
                  ],
                  [
                    2.282,
                    -1.161
                  ],
                  [
                    2.301,
                    -1.118
                  ],
                  [
                    2.319,
                    -1.077
                  ],
                  [
                    2.338,
                    -1.037
                  ],
                  [
                    2.357,
                    -0.999
                  ],
                  [
                    2.375,
                    -0.963
                  ],
                  [
                    2.394,
                    -0.927
                  ],
                  [
                    2.413,
                    -0.893
                  ],
                  [
                    2.431,
                    -0.86
                  ],
                  [
                    2.45,
                    -0.828
                  ],
                  [
                    2.469,
                    -0.797
                  ],
                  [
                    2.487,
                    -0.767
                  ],
                  [
                    2.506,
                    -0.738
                  ],
                  [
                    2.525,
                    -0.709
                  ],
                  [
                    2.543,
                    -0.681
                  ],
                  [
                    2.562,
                    -0.654
                  ],
                  [
                    2.581,
                    -0.628
                  ],
                  [
                    2.6,
                    -0.602
                  ],
                  [
                    2.618,
                    -0.577
                  ],
                  [
                    2.637,
                    -0.552
                  ],
                  [
                    2.656,
                    -0.528
                  ],
                  [
                    2.674,
                    -0.505
                  ],
                  [
                    2.693,
                    -0.481
                  ],
                  [
                    2.712,
                    -0.459
                  ],
                  [
                    2.73,
                    -0.436
                  ],
                  [
                    2.749,
                    -0.414
                  ],
                  [
                    2.768,
                    -0.392
                  ],
                  [
                    2.786,
                    -0.371
                  ],
                  [
                    2.805,
                    -0.35
                  ],
                  [
                    2.824,
                    -0.329
                  ],
                  [
                    2.842,
                    -0.308
                  ],
                  [
                    2.861,
                    -0.288
                  ],
                  [
                    2.88,
                    -0.268
                  ],
                  [
                    2.899,
                    -0.248
                  ],
                  [
                    2.917,
                    -0.228
                  ],
                  [
                    2.936,
                    -0.209
                  ],
                  [
                    2.955,
                    -0.189
                  ],
                  [
                    2.973,
                    -0.17
                  ],
                  [
                    2.992,
                    -0.151
                  ],
                  [
                    3.011,
                    -0.132
                  ],
                  [
                    3.029,
                    -0.113
                  ],
                  [
                    3.048,
                    -0.094
                  ],
                  [
                    3.067,
                    -0.075
                  ],
                  [
                    3.085,
                    -0.056
                  ],
                  [
                    3.104,
                    -0.037
                  ],
                  [
                    3.123,
                    -0.019
                  ],
                  [
                    3.141,
                    0
                  ],
                  [
                    3.16,
                    0.019
                  ],
                  [
                    3.179,
                    0.037
                  ],
                  [
                    3.198,
                    0.056
                  ],
                  [
                    3.216,
                    0.075
                  ],
                  [
                    3.235,
                    0.094
                  ],
                  [
                    3.254,
                    0.113
                  ],
                  [
                    3.272,
                    0.131
                  ],
                  [
                    3.291,
                    0.151
                  ],
                  [
                    3.31,
                    0.17
                  ],
                  [
                    3.328,
                    0.189
                  ],
                  [
                    3.347,
                    0.208
                  ],
                  [
                    3.366,
                    0.228
                  ],
                  [
                    3.384,
                    0.248
                  ],
                  [
                    3.403,
                    0.268
                  ],
                  [
                    3.422,
                    0.288
                  ],
                  [
                    3.441,
                    0.308
                  ],
                  [
                    3.459,
                    0.329
                  ],
                  [
                    3.478,
                    0.35
                  ],
                  [
                    3.497,
                    0.371
                  ],
                  [
                    3.515,
                    0.392
                  ],
                  [
                    3.534,
                    0.414
                  ],
                  [
                    3.553,
                    0.436
                  ],
                  [
                    3.571,
                    0.458
                  ],
                  [
                    3.59,
                    0.481
                  ],
                  [
                    3.609,
                    0.504
                  ],
                  [
                    3.627,
                    0.528
                  ],
                  [
                    3.646,
                    0.552
                  ],
                  [
                    3.665,
                    0.577
                  ],
                  [
                    3.683,
                    0.602
                  ],
                  [
                    3.702,
                    0.628
                  ],
                  [
                    3.721,
                    0.654
                  ],
                  [
                    3.74,
                    0.681
                  ],
                  [
                    3.758,
                    0.709
                  ],
                  [
                    3.777,
                    0.737
                  ],
                  [
                    3.796,
                    0.767
                  ],
                  [
                    3.814,
                    0.797
                  ],
                  [
                    3.833,
                    0.828
                  ],
                  [
                    3.852,
                    0.86
                  ],
                  [
                    3.87,
                    0.893
                  ],
                  [
                    3.889,
                    0.927
                  ],
                  [
                    3.908,
                    0.962
                  ],
                  [
                    3.926,
                    0.999
                  ],
                  [
                    3.945,
                    1.037
                  ],
                  [
                    3.964,
                    1.076
                  ],
                  [
                    3.982,
                    1.118
                  ],
                  [
                    4.001,
                    1.161
                  ],
                  [
                    4.02,
                    1.205
                  ],
                  [
                    4.039,
                    1.252
                  ],
                  [
                    4.057,
                    1.301
                  ],
                  [
                    4.076,
                    1.353
                  ],
                  [
                    4.095,
                    1.407
                  ],
                  [
                    4.113,
                    1.465
                  ],
                  [
                    4.132,
                    1.525
                  ],
                  [
                    4.151,
                    1.589
                  ],
                  [
                    4.169,
                    1.657
                  ],
                  [
                    4.188,
                    1.729
                  ],
                  [
                    4.207,
                    1.806
                  ],
                  [
                    4.225,
                    1.889
                  ],
                  [
                    4.244,
                    1.977
                  ],
                  [
                    4.263,
                    2.072
                  ],
                  [
                    4.282,
                    2.175
                  ],
                  [
                    4.3,
                    2.287
                  ],
                  [
                    4.319,
                    2.409
                  ],
                  [
                    4.338,
                    2.542
                  ],
                  [
                    4.356,
                    2.688
                  ],
                  [
                    4.375,
                    2.85
                  ],
                  [
                    4.394,
                    3.03
                  ],
                  [
                    4.412,
                    3.232
                  ],
                  [
                    4.431,
                    3.46
                  ],
                  [
                    4.45,
                    3.719
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              },
              {
                "points": [
                  [
                    4.965,
                    -3.874
                  ],
                  [
                    4.974,
                    -3.729
                  ],
                  [
                    4.984,
                    -3.595
                  ],
                  [
                    4.993,
                    -3.469
                  ],
                  [
                    5.002,
                    -3.351
                  ],
                  [
                    5.012,
                    -3.24
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.03,
                    -3.037
                  ],
                  [
                    5.04,
                    -2.944
                  ],
                  [
                    5.049,
                    -2.856
                  ],
                  [
                    5.059,
                    -2.773
                  ],
                  [
                    5.068,
                    -2.694
                  ],
                  [
                    5.077,
                    -2.618
                  ],
                  [
                    5.087,
                    -2.547
                  ],
                  [
                    5.096,
                    -2.478
                  ],
                  [
                    5.105,
                    -2.413
                  ],
                  [
                    5.115,
                    -2.351
                  ],
                  [
                    5.124,
                    -2.291
                  ],
                  [
                    5.133,
                    -2.234
                  ],
                  [
                    5.143,
                    -2.179
                  ],
                  [
                    5.152,
                    -2.126
                  ],
                  [
                    5.161,
                    -2.076
                  ],
                  [
                    5.171,
                    -2.027
                  ],
                  [
                    5.18,
                    -1.98
                  ],
                  [
                    5.189,
                    -1.935
                  ],
                  [
                    5.199,
                    -1.891
                  ],
                  [
                    5.208,
                    -1.849
                  ],
                  [
                    5.217,
                    -1.809
                  ],
                  [
                    5.227,
                    -1.769
                  ],
                  [
                    5.236,
                    -1.731
                  ],
                  [
                    5.245,
                    -1.695
                  ],
                  [
                    5.255,
                    -1.659
                  ],
                  [
                    5.264,
                    -1.624
                  ],
                  [
                    5.274,
                    -1.591
                  ],
                  [
                    5.283,
                    -1.558
                  ],
                  [
                    5.292,
                    -1.527
                  ],
                  [
                    5.302,
                    -1.496
                  ],
                  [
                    5.311,
                    -1.466
                  ],
                  [
                    5.32,
                    -1.437
                  ],
                  [
                    5.33,
                    -1.409
                  ],
                  [
                    5.339,
                    -1.381
                  ],
                  [
                    5.348,
                    -1.355
                  ],
                  [
                    5.358,
                    -1.328
                  ],
                  [
                    5.367,
                    -1.303
                  ],
                  [
                    5.376,
                    -1.278
                  ],
                  [
                    5.386,
                    -1.254
                  ],
                  [
                    5.395,
                    -1.23
                  ],
                  [
                    5.404,
                    -1.207
                  ],
                  [
                    5.414,
                    -1.184
                  ],
                  [
                    5.423,
                    -1.162
                  ],
                  [
                    5.432,
                    -1.14
                  ],
                  [
                    5.442,
                    -1.119
                  ],
                  [
                    5.451,
                    -1.098
                  ],
                  [
                    5.461,
                    -1.077
                  ],
                  [
                    5.47,
                    -1.057
                  ],
                  [
                    5.479,
                    -1.038
                  ],
                  [
                    5.489,
                    -1.019
                  ],
                  [
                    5.498,
                    -1
                  ],
                  [
                    5.507,
                    -0.981
                  ],
                  [
                    5.517,
                    -0.963
                  ],
                  [
                    5.526,
                    -0.945
                  ],
                  [
                    5.535,
                    -0.928
                  ],
                  [
                    5.545,
                    -0.91
                  ],
                  [
                    5.554,
                    -0.893
                  ],
                  [
                    5.563,
                    -0.877
                  ],
                  [
                    5.573,
                    -0.86
                  ],
                  [
                    5.582,
                    -0.844
                  ],
                  [
                    5.591,
                    -0.828
                  ],
                  [
                    5.601,
                    -0.813
                  ],
                  [
                    5.61,
                    -0.797
                  ],
                  [
                    5.619,
                    -0.782
                  ],
                  [
                    5.629,
                    -0.767
                  ],
                  [
                    5.638,
                    -0.752
                  ],
                  [
                    5.647,
                    -0.738
                  ],
                  [
                    5.657,
                    -0.724
                  ],
                  [
                    5.666,
                    -0.709
                  ],
                  [
                    5.676,
                    -0.695
                  ],
                  [
                    5.685,
                    -0.682
                  ],
                  [
                    5.694,
                    -0.668
                  ],
                  [
                    5.704,
                    -0.655
                  ],
                  [
                    5.713,
                    -0.641
                  ],
                  [
                    5.722,
                    -0.628
                  ],
                  [
                    5.732,
                    -0.615
                  ],
                  [
                    5.741,
                    -0.602
                  ],
                  [
                    5.75,
                    -0.59
                  ],
                  [
                    5.76,
                    -0.577
                  ],
                  [
                    5.769,
                    -0.565
                  ],
                  [
                    5.778,
                    -0.553
                  ],
                  [
                    5.788,
                    -0.54
                  ],
                  [
                    5.797,
                    -0.528
                  ],
                  [
                    5.806,
                    -0.517
                  ],
                  [
                    5.816,
                    -0.505
                  ],
                  [
                    5.825,
                    -0.493
                  ],
                  [
                    5.834,
                    -0.481
                  ],
                  [
                    5.844,
                    -0.47
                  ],
                  [
                    5.853,
                    -0.459
                  ],
                  [
                    5.863,
                    -0.447
                  ],
                  [
                    5.872,
                    -0.436
                  ],
                  [
                    5.881,
                    -0.425
                  ],
                  [
                    5.891,
                    -0.414
                  ],
                  [
                    5.9,
                    -0.403
                  ],
                  [
                    5.909,
                    -0.392
                  ],
                  [
                    5.919,
                    -0.382
                  ],
                  [
                    5.928,
                    -0.371
                  ],
                  [
                    5.937,
                    -0.36
                  ],
                  [
                    5.947,
                    -0.35
                  ],
                  [
                    5.956,
                    -0.339
                  ],
                  [
                    5.965,
                    -0.329
                  ],
                  [
                    5.975,
                    -0.319
                  ],
                  [
                    5.984,
                    -0.308
                  ],
                  [
                    5.993,
                    -0.298
                  ],
                  [
                    6.003,
                    -0.288
                  ],
                  [
                    6.012,
                    -0.278
                  ],
                  [
                    6.021,
                    -0.268
                  ],
                  [
                    6.031,
                    -0.258
                  ],
                  [
                    6.04,
                    -0.248
                  ],
                  [
                    6.049,
                    -0.238
                  ],
                  [
                    6.059,
                    -0.228
                  ],
                  [
                    6.068,
                    -0.218
                  ],
                  [
                    6.078,
                    -0.209
                  ],
                  [
                    6.087,
                    -0.199
                  ],
                  [
                    6.096,
                    -0.189
                  ],
                  [
                    6.106,
                    -0.18
                  ],
                  [
                    6.115,
                    -0.17
                  ],
                  [
                    6.124,
                    -0.16
                  ],
                  [
                    6.134,
                    -0.151
                  ],
                  [
                    6.143,
                    -0.141
                  ],
                  [
                    6.152,
                    -0.132
                  ],
                  [
                    6.162,
                    -0.122
                  ],
                  [
                    6.171,
                    -0.113
                  ],
                  [
                    6.18,
                    -0.103
                  ],
                  [
                    6.19,
                    -0.094
                  ],
                  [
                    6.199,
                    -0.084
                  ],
                  [
                    6.208,
                    -0.075
                  ],
                  [
                    6.218,
                    -0.066
                  ],
                  [
                    6.227,
                    -0.056
                  ],
                  [
                    6.236,
                    -0.047
                  ],
                  [
                    6.246,
                    -0.037
                  ],
                  [
                    6.255,
                    -0.028
                  ],
                  [
                    6.265,
                    -0.019
                  ],
                  [
                    6.274,
                    -0.009
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#2563eb",
                "width": 2.5
              }
            ],
            "lines": [
              {
                "from": [
                  1.571,
                  -4
                ],
                "to": [
                  1.571,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
              },
              {
                "from": [
                  4.712,
                  -4
                ],
                "to": [
                  4.712,
                  4
                ],
                "color": "#94a3b8",
                "dashed": true
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
                "color": "#f59e0b",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  0.503,
                  1.3
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.785,
                  1
                ],
                "label": "\\frac{\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              },
              {
                "at": [
                  3.927,
                  1
                ],
                "label": "\\frac{5\\pi}{4}",
                "color": "#dc2626",
                "r": 3.5
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{4}, \\displaystyle\\frac{5\\pi}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-070",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 70",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sec\\theta\\tan\\theta - \\csc\\theta\\cot\\theta \\equiv \\displaystyle\\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\mathrm{LHS} = \\sec\\theta\\tan\\theta - \\csc\\theta\\cot\\theta",
          "explanation": "We convert everything to sin and cos, the most reliable route for an identity that ends in sin/cos on the RHS."
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal and ratio forms.",
          "workingLatex": "\\sec\\theta=\\frac{1}{\\cos\\theta},\\ \\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta},\\ \\csc\\theta=\\frac{1}{\\sin\\theta},\\ \\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Listing all four definitions first means each product can be assembled without re-deriving them mid-step."
        },
        {
          "stepNumber": 3,
          "description": "Write the first product as fractions.",
          "workingLatex": "\\sec\\theta\\tan\\theta = \\frac{1}{\\cos\\theta}\\cdot\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Substitute the definitions of sec and tan as a product of two fractions, ready to multiply."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first product.",
          "workingLatex": "\\sec\\theta\\tan\\theta = \\frac{\\sin\\theta}{\\cos^2\\theta}",
          "explanation": "Multiplying numerators and denominators gives \\(\\sin\\theta\\) on top and \\(\\cos\\theta\\cdot\\cos\\theta=\\cos^2\\theta\\) below."
        },
        {
          "stepNumber": 5,
          "description": "Write the second product as fractions.",
          "workingLatex": "\\csc\\theta\\cot\\theta = \\frac{1}{\\sin\\theta}\\cdot\\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Substitute the definitions of csc and cot. Watch the swap of sin and cos compared with the first product."
        },
        {
          "stepNumber": 6,
          "description": "Multiply the second product.",
          "workingLatex": "\\csc\\theta\\cot\\theta = \\frac{\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "Multiplying gives \\(\\cos\\theta\\) on top and \\(\\sin\\theta\\cdot\\sin\\theta=\\sin^2\\theta\\) below."
        },
        {
          "stepNumber": 7,
          "description": "Write the difference.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\sin\\theta}{\\cos^2\\theta} - \\frac{\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "Now we have two single fractions to combine over a common denominator."
        },
        {
          "stepNumber": 8,
          "description": "Form the common denominator.",
          "workingLatex": "\\text{common denominator} = \\sin^2\\theta\\cos^2\\theta",
          "explanation": "The lowest common denominator of \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\) is their product, \\(\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Rescale the first fraction.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos^2\\theta} = \\frac{\\sin\\theta\\cdot\\sin^2\\theta}{\\cos^2\\theta\\cdot\\sin^2\\theta}",
          "explanation": "Multiply top and bottom by \\(\\sin^2\\theta\\) so the denominator becomes the common one."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the first numerator.",
          "workingLatex": "= \\frac{\\sin^3\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "\\(\\sin\\theta\\cdot\\sin^2\\theta=\\sin^3\\theta\\) using the index law \\(a\\cdot a^2=a^3\\)."
        },
        {
          "stepNumber": 11,
          "description": "Rescale the second fraction.",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin^2\\theta} = \\frac{\\cos\\theta\\cdot\\cos^2\\theta}{\\sin^2\\theta\\cdot\\cos^2\\theta}",
          "explanation": "Multiply top and bottom by \\(\\cos^2\\theta\\) so the denominator matches the common one."
        },
        {
          "stepNumber": 12,
          "description": "Simplify the second numerator.",
          "workingLatex": "= \\frac{\\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "\\(\\cos\\theta\\cdot\\cos^2\\theta=\\cos^3\\theta\\) by the same index law."
        },
        {
          "stepNumber": 13,
          "description": "Subtract over the common denominator.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "With equal denominators, subtract the numerators. Keep the subtraction in the same order to avoid a sign error."
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof.",
          "workingLatex": "\\mathrm{LHS} = \\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta} = \\mathrm{RHS}",
          "explanation": "The combined fraction is exactly the RHS, so the identity is proved for all \\(\\theta\\) where sin and cos are nonzero."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf4-071",
    "topicRef": "y2tf4",
    "topicTitle": "Using sec, cosec and cot 71",
    "difficulty": "Challenge",
    "questionText": "In a right triangle with angle \\(\\theta\\) (acute), the opposite side is 7 and the hypotenuse is 25. Find \\(\\sec\\theta, \\csc\\theta, \\cot\\theta\\) and verify \\(1 + \\tan^2\\theta = \\sec^2\\theta\\).",
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
          "description": "Label the known sides",
          "workingLatex": "\\text{opp} = 7, \\quad \\text{hyp} = 25",
          "explanation": "The side opposite the angle \\(\\theta\\) is 7 and the longest side (the hypotenuse, always opposite the right angle) is 25. These are the two pieces of information given in the question.",
          "diagram": {
            "xMin": -4.8,
            "xMax": 31.2,
            "yMin": -4.8,
            "yMax": 13,
            "hideAxes": true,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  24,
                  0
                ],
                "color": "#0d9488",
                "label": "24",
                "labelAt": [
                  12,
                  -2.64
                ]
              },
              {
                "from": [
                  24,
                  0
                ],
                "to": [
                  24,
                  7
                ],
                "color": "#0d9488",
                "label": "7",
                "labelAt": [
                  27.12,
                  3.5
                ]
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  24,
                  7
                ],
                "color": "#dc2626",
                "label": "25",
                "labelAt": [
                  9.12,
                  5.66
                ]
              },
              {
                "from": [
                  22.08,
                  0
                ],
                "to": [
                  22.08,
                  1.92
                ],
                "color": "#94a3b8"
              },
              {
                "from": [
                  22.08,
                  1.92
                ],
                "to": [
                  24,
                  1.92
                ],
                "color": "#94a3b8"
              }
            ],
            "points": [
              {
                "at": [
                  7.603,
                  1.086
                ],
                "label": "\\theta",
                "labelAnchor": "center",
                "r": 0,
                "color": "#0f766e"
              }
            ]
          }
        },
        {
          "stepNumber": 2,
          "description": "Note the adjacent is unknown",
          "workingLatex": "\\text{adj} = \\;?",
          "explanation": "We have only two of the three sides. Before we can write ratios involving the adjacent side (such as \\(\\cos\\theta\\) and \\(\\tan\\theta\\)) we must find it first."
        },
        {
          "stepNumber": 3,
          "description": "State Pythagoras' theorem",
          "workingLatex": "\\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2",
          "explanation": "In any right triangle the squares of the two shorter sides add up to the square of the hypotenuse. This is the relationship we will rearrange to find the adjacent."
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the adjacent squared",
          "workingLatex": "\\text{adj}^2 = \\text{hyp}^2 - \\text{opp}^2",
          "explanation": "Subtract \\(\\text{opp}^2\\) from both sides to isolate \\(\\text{adj}^2\\). Note this is a subtraction: the adjacent is one of the shorter sides, so it must be smaller than the hypotenuse."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values",
          "workingLatex": "\\text{adj}^2 = 25^2 - 7^2",
          "explanation": "Put in \\(\\text{hyp} = 25\\) and \\(\\text{opp} = 7\\). A common slip is to write \\(25^2 + 7^2\\); always subtract when finding a shorter side from the hypotenuse."
        },
        {
          "stepNumber": 6,
          "description": "Square each term",
          "workingLatex": "\\text{adj}^2 = 625 - 49",
          "explanation": "Compute \\(25^2 = 625\\) and \\(7^2 = 49\\) separately before combining them. Squaring means multiplying the number by itself, not by 2."
        },
        {
          "stepNumber": 7,
          "description": "Subtract to get the adjacent squared",
          "workingLatex": "\\text{adj}^2 = 576",
          "explanation": "Carry out the subtraction \\(625 - 49 = 576\\). This is the square of the adjacent side, not the side itself yet."
        },
        {
          "stepNumber": 8,
          "description": "Take the positive square root",
          "workingLatex": "\\text{adj} = \\sqrt{576} = 24",
          "explanation": "A side length must be positive, so we take only the positive root. Note that \\((7,24,25)\\) is a well-known Pythagorean triple, which confirms the value 24."
        },
        {
          "stepNumber": 9,
          "description": "Write sine from SOHCAHTOA",
          "workingLatex": "\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{7}{25}",
          "explanation": "Sine is opposite over hypotenuse (the SOH in SOHCAHTOA). Here that is \\(\\displaystyle\\frac{7}{25}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Write cosine from SOHCAHTOA",
          "workingLatex": "\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{24}{25}",
          "explanation": "Cosine is adjacent over hypotenuse (the CAH). Use the adjacent 24 we just found, giving \\(\\displaystyle\\frac{24}{25}\\)."
        },
        {
          "stepNumber": 11,
          "description": "Write tangent from SOHCAHTOA",
          "workingLatex": "\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{7}{24}",
          "explanation": "Tangent is opposite over adjacent (the TOA). Keep the hypotenuse out of \\(\\tan\\theta\\): it uses only the two shorter sides, \\(\\displaystyle\\frac{7}{24}\\)."
        },
        {
          "stepNumber": 12,
          "description": "State that secant reciprocates cosine",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "By definition secant is the reciprocal of cosine. So we will flip the cosine fraction."
        },
        {
          "stepNumber": 13,
          "description": "Substitute and flip for secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{24/25} = \\frac{25}{24}",
          "explanation": "Dividing 1 by \\(\\displaystyle\\frac{24}{25}\\) turns the fraction upside down to give \\(\\displaystyle\\frac{25}{24}\\). Since \\(\\displaystyle\\frac{25}{24} \\ge 1\\), this passes the validity check \\(|\\sec\\theta| \\ge 1\\)."
        },
        {
          "stepNumber": 14,
          "description": "State that cosecant reciprocates sine",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "By definition cosecant is the reciprocal of sine. So we will flip the sine fraction next."
        },
        {
          "stepNumber": 15,
          "description": "Substitute and flip for cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{7/25} = \\frac{25}{7}",
          "explanation": "Dividing 1 by \\(\\displaystyle\\frac{7}{25}\\) flips it to \\(\\displaystyle\\frac{25}{7}\\). Again \\(\\displaystyle\\frac{25}{7} \\ge 1\\), consistent with \\(|\\csc\\theta| \\ge 1\\)."
        },
        {
          "stepNumber": 16,
          "description": "State that cotangent reciprocates tangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "By definition cotangent is the reciprocal of tangent. So we will flip the tangent fraction."
        },
        {
          "stepNumber": 17,
          "description": "Substitute and flip for cotangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{7/24} = \\frac{24}{7}",
          "explanation": "Dividing 1 by \\(\\displaystyle\\frac{7}{24}\\) flips it to \\(\\displaystyle\\frac{24}{7}\\). Equivalently \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta} = \\displaystyle\\frac{\\text{adj}}{\\text{opp}}\\), which gives the same answer."
        },
        {
          "stepNumber": 18,
          "description": "Begin the check with the left side",
          "workingLatex": "\\text{LHS} = 1 + \\tan^2\\theta",
          "explanation": "To verify \\(1 + \\tan^2\\theta = \\sec^2\\theta\\) we evaluate each side separately. Start with the left-hand side using the tangent found earlier."
        },
        {
          "stepNumber": 19,
          "description": "Square the tangent fraction",
          "workingLatex": "\\tan^2\\theta = \\left(\\frac{7}{24}\\right)^2 = \\frac{49}{576}",
          "explanation": "Square the numerator and denominator separately: \\(7^2 = 49\\) and \\(24^2 = 576\\). Do not square only the top."
        },
        {
          "stepNumber": 20,
          "description": "Write 1 with the same denominator",
          "workingLatex": "1 + \\tan^2\\theta = \\frac{576}{576} + \\frac{49}{576}",
          "explanation": "Rewrite \\(1\\) as \\(\\displaystyle\\frac{576}{576}\\) so both terms share the denominator 576. This is the step needed before fractions can be added."
        },
        {
          "stepNumber": 21,
          "description": "Add the numerators",
          "workingLatex": "1 + \\tan^2\\theta = \\frac{625}{576}",
          "explanation": "Add the numerators over the common denominator: \\(576 + 49 = 625\\). A frequent error is adding 1 only to the numerator instead of using a common denominator."
        },
        {
          "stepNumber": 22,
          "description": "Begin the right side",
          "workingLatex": "\\text{RHS} = \\sec^2\\theta = \\left(\\frac{25}{24}\\right)^2",
          "explanation": "Now evaluate the right-hand side by squaring the secant value \\(\\displaystyle\\frac{25}{24}\\) found in step 13."
        },
        {
          "stepNumber": 23,
          "description": "Square the secant fraction",
          "workingLatex": "\\sec^2\\theta = \\frac{625}{576}",
          "explanation": "Square top and bottom: \\(25^2 = 625\\) and \\(24^2 = 576\\). This gives the right-hand side."
        },
        {
          "stepNumber": 24,
          "description": "Compare both sides",
          "workingLatex": "1 + \\tan^2\\theta = \\frac{625}{576} = \\sec^2\\theta",
          "explanation": "Both sides equal \\(\\displaystyle\\frac{625}{576}\\), so the Pythagorean identity \\(1 + \\tan^2\\theta = \\sec^2\\theta\\) holds for these values, confirming the result."
        }
      ],
      "finalAnswer": "Identity confirmed.",
      "commonMistakes": []
    }
  }
];
