import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Topic gn28: Estimation and approximation (DfE ref N14)
 *
 * 70 questions — 24 Foundation, 23 Standard, 23 Challenge.
 */

export const questions: Question[] = [
  {
    "id": "gn28-001",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 38 \\cdot 0.21 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "40 \\cdot 0.2",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "40 \\cdot 0.2 = 8",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8 \\)",
      "canonicalAnswer": "8"
    }
  },
  {
    "id": "gn28-002",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{612}{2.9} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{600}{3}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{600}{3} = 200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 200 \\)",
      "canonicalAnswer": "200"
    }
  },
  {
    "id": "gn28-003",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\sqrt{83} \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "square root"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the nearest square number.",
          "workingLatex": "9^{2} = 81",
          "explanation": "\\( 83 \\) is very close to \\( 81 \\), which is a square number."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{83} \\approx \\sqrt{81} = 9",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 9 \\)",
      "canonicalAnswer": "9"
    }
  },
  {
    "id": "gn28-004",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 4.7^{2} \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "5^{2}",
          "explanation": "Rounding \\( 4.7 \\) to one significant figure gives \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "5^{2} = 25",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 25 \\)",
      "canonicalAnswer": "25"
    }
  },
  {
    "id": "gn28-005",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A pen costs \\( \\pounds 1.89 \\). Estimate the cost of \\( 32 \\) of these pens.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "money"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each amount to 1 s.f.",
          "workingLatex": "\\pounds 2 \\cdot 30",
          "explanation": "Round the price to \\( \\pounds 2 \\) and the number of pens to \\( 30 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "2 \\cdot 30 = 60",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( \\pounds 60 \\)",
      "canonicalAnswer": "60"
    }
  },
  {
    "id": "gn28-006",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{19 \\cdot 41}{7.8} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{20 \\cdot 40}{8}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{800}{8} = 100",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 100 \\)",
      "canonicalAnswer": "100"
    }
  },
  {
    "id": "gn28-007",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 287 + 411 + 92 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "300 + 400 + 90",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "300 + 400 + 90 = 790",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 790 \\)",
      "canonicalAnswer": "790"
    }
  },
  {
    "id": "gn28-008",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\sqrt{38} \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "square root"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the nearest square number.",
          "workingLatex": "6^{2} = 36",
          "explanation": "\\( 38 \\) is very close to \\( 36 \\), which is a square number."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{38} \\approx \\sqrt{36} = 6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6 \\)",
      "canonicalAnswer": "6"
    }
  },
  {
    "id": "gn28-009",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 0.62 \\cdot 78 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "0.6 \\cdot 80",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "0.6 \\cdot 80 = 48",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 48 \\)",
      "canonicalAnswer": "48"
    }
  },
  {
    "id": "gn28-010",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Three pieces of rope have lengths \\( 4.9\\,\\mathrm{m} \\), \\( 7.2\\,\\mathrm{m} \\) and \\( 11.8\\,\\mathrm{m} \\). Estimate the total length.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "length"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "5 + 7 + 10",
          "explanation": "Rounding each length to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "5 + 7 + 10 = 22",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 22\\,\\mathrm{m} \\)",
      "canonicalAnswer": "22"
    }
  },
  {
    "id": "gn28-011",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{4920}{48} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{5000}{50}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{5000}{50} = 100",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 100 \\)",
      "canonicalAnswer": "100"
    }
  },
  {
    "id": "gn28-012",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 6.1^{2} - 18 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "6^{2} - 20",
          "explanation": "Round \\( 6.1 \\) to \\( 6 \\) and \\( 18 \\) to \\( 20 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "36 - 20 = 16",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 16 \\)",
      "canonicalAnswer": "16"
    }
  },
  {
    "id": "gn28-013",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 6.9 \\cdot 41 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "7 \\cdot 40",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "7 \\cdot 40 = 280",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 280 \\)",
      "canonicalAnswer": "280"
    }
  },
  {
    "id": "gn28-014",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 312 - 18.7 - 47 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "300 - 20 - 50",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "300 - 20 - 50 = 230",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 230 \\)",
      "canonicalAnswer": "230"
    }
  },
  {
    "id": "gn28-015",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{589}{29} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{600}{30}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{600}{30} = 20",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 20 \\)",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn28-016",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 19^{2} \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "19 \\approx 20",
          "explanation": "Rounding to one significant figure gives an easy number."
        },
        {
          "stepNumber": 2,
          "description": "Square it.",
          "workingLatex": "20^{2} = 400",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 400 \\)",
      "canonicalAnswer": "400"
    }
  },
  {
    "id": "gn28-017",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{38 \\cdot 6.1}{0.21} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{40 \\cdot 6}{0.2}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{240}{0.2} = 1200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 1200 \\)",
      "canonicalAnswer": "1200"
    }
  },
  {
    "id": "gn28-018",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A pen costs \\( \\pounds 1.95 \\) and a notebook costs \\( \\pounds 4.10 \\). Estimate the total cost of one pen and one notebook.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "money"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each price to 1 s.f.",
          "workingLatex": "\\pounds 2 + \\pounds 4",
          "explanation": "Rounding each price to the nearest pound gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Add.",
          "workingLatex": "\\pounds 2 + \\pounds 4 = \\pounds 6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( \\pounds 6 \\)",
      "canonicalAnswer": "6"
    }
  },
  {
    "id": "gn28-019",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 0.38 \\cdot 72 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "0.4 \\cdot 70",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "0.4 \\cdot 70 = 28",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 28 \\)",
      "canonicalAnswer": "28"
    }
  },
  {
    "id": "gn28-020",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\sqrt{37} \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "square root"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the nearest square number.",
          "workingLatex": "36 = 6^{2}",
          "explanation": "\\( 37 \\) is close to \\( 36 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{37} \\approx \\sqrt{36} = 6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6 \\)",
      "canonicalAnswer": "6"
    }
  },
  {
    "id": "gn28-021",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Three pieces of ribbon have lengths \\( 28\\,\\mathrm{cm} \\), \\( 51\\,\\mathrm{cm} \\) and \\( 19\\,\\mathrm{cm} \\). Estimate the total length.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "length"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "30 + 50 + 20",
          "explanation": "Rounding each length to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Add.",
          "workingLatex": "30 + 50 + 20 = 100",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 100\\,\\mathrm{cm} \\)",
      "canonicalAnswer": "100"
    }
  },
  {
    "id": "gn28-022",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{4.7 + 9.2}{0.68} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{5 + 9}{0.7}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "\\frac{14}{0.7} = 20",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 20 \\)",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn28-023",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 4.8 \\cdot 7.2 \\cdot 2.1 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "5 \\cdot 7 \\cdot 2",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "5 \\cdot 7 \\cdot 2 = 70",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 70 \\)",
      "canonicalAnswer": "70"
    }
  },
  {
    "id": "gn28-024",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 8.7 \\times 19 \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "multiplication"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 significant figure.",
          "workingLatex": "8.7 \\approx 9, \\quad 19 \\approx 20",
          "explanation": "Rounding to one significant figure gives numbers that are easy to multiply."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "9 \\cdot 20 = 180",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 180 \\)",
      "canonicalAnswer": "180"
    }
  },
  {
    "id": "gn28-025",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{6.2 \\cdot 0.38}{0.197} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{6 \\cdot 0.4}{0.2}",
          "explanation": "Rounding to one significant figure gives \\( 6.2 \\to 6 \\), \\( 0.38 \\to 0.4 \\) and \\( 0.197 \\to 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "6 \\cdot 0.4 = 2.4",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{2.4}{0.2} = 12",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12 \\)",
      "canonicalAnswer": "12"
    }
  },
  {
    "id": "gn28-026",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{49.3}{0.52 \\cdot 8.7} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{50}{0.5 \\cdot 9}",
          "explanation": "Rounding gives \\( 49.3 \\to 50 \\), \\( 0.52 \\to 0.5 \\) and \\( 8.7 \\to 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the denominator.",
          "workingLatex": "0.5 \\cdot 9 = 4.5",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{50}{4.5} \\approx 11.1",
          "explanation": "This rounds to roughly \\( 11 \\)."
        }
      ],
      "finalAnswer": "\\( 11 \\)",
      "canonicalAnswer": "11"
    }
  },
  {
    "id": "gn28-027",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{3.9^{2}}{0.21} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{4^{2}}{0.2}",
          "explanation": "Rounding gives \\( 3.9 \\to 4 \\) and \\( 0.21 \\to 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the numerator.",
          "workingLatex": "4^{2} = 16",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{16}{0.2} = 80",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 80 \\)",
      "canonicalAnswer": "80"
    }
  },
  {
    "id": "gn28-028",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{2.87^{3}}{0.48} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "cubes"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{3^{3}}{0.5}",
          "explanation": "Rounding gives \\( 2.87 \\to 3 \\) and \\( 0.48 \\to 0.5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Cube the numerator.",
          "workingLatex": "3^{3} = 27",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{27}{0.5} = 54",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 54 \\)",
      "canonicalAnswer": "54"
    }
  },
  {
    "id": "gn28-029",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A car travels \\( 312\\,\\mathrm{km} \\) in \\( 4.1 \\) hours. By rounding each value to 1 significant figure, estimate the average speed of the car in \\( \\mathrm{km/h} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "speed"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{300}{4}",
          "explanation": "Rounding gives \\( 312 \\to 300 \\) and \\( 4.1 \\to 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide distance by time.",
          "workingLatex": "\\frac{300}{4} = 75",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 75\\,\\mathrm{km/h} \\)",
      "canonicalAnswer": "75"
    }
  },
  {
    "id": "gn28-030",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A rectangular field measures \\( 78.4\\,\\mathrm{m} \\) by \\( 41.6\\,\\mathrm{m} \\). By rounding each length to 1 significant figure, estimate the area of the field.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "area"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "80 \\cdot 40",
          "explanation": "Rounding gives \\( 78.4 \\to 80 \\) and \\( 41.6 \\to 40 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply to find the area.",
          "workingLatex": "80 \\cdot 40 = 3200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 3200\\,\\mathrm{m^{2}} \\)",
      "canonicalAnswer": "3200"
    }
  },
  {
    "id": "gn28-031",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{0.61 \\cdot 0.39}{0.018} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{0.6 \\cdot 0.4}{0.02}",
          "explanation": "Rounding gives \\( 0.61 \\to 0.6 \\), \\( 0.39 \\to 0.4 \\) and \\( 0.018 \\to 0.02 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.6 \\cdot 0.4 = 0.24",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{0.24}{0.02} = 12",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12 \\)",
      "canonicalAnswer": "12"
    }
  },
  {
    "id": "gn28-032",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A box of \\( 287 \\) pens costs \\( \\pounds 61.20 \\). By rounding each value to 1 significant figure, estimate the cost of one pen in pence.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "cost"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "\\frac{6000}{300}",
          "explanation": "Rounding gives \\( \\pounds 61.20 \\to \\pounds 60 = 6000\\,\\mathrm{p} \\) and \\( 287 \\to 300 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the total cost by the number of pens.",
          "workingLatex": "\\frac{6000}{300} = 20",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 20\\,\\mathrm{p} \\)",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn28-033",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{5.8 \\cdot 0.072}{0.39} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{6 \\cdot 0.07}{0.4}",
          "explanation": "Rounding gives \\( 5.8 \\to 6 \\), \\( 0.072 \\to 0.07 \\) and \\( 0.39 \\to 0.4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "6 \\cdot 0.07 = 0.42",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{0.42}{0.4} = 1.05",
          "explanation": "This rounds to roughly \\( 1.1 \\)."
        }
      ],
      "finalAnswer": "\\( 1.05 \\)",
      "canonicalAnswer": "1.05"
    }
  },
  {
    "id": "gn28-034",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{0.88^{2}}{0.31} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{0.9^{2}}{0.3}",
          "explanation": "Rounding gives \\( 0.88 \\to 0.9 \\) and \\( 0.31 \\to 0.3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the numerator.",
          "workingLatex": "0.9^{2} = 0.81",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{0.81}{0.3} = 2.7",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 2.7 \\)",
      "canonicalAnswer": "2.7"
    }
  },
  {
    "id": "gn28-035",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A water tank holds \\( 4180 \\) litres and is emptied at a rate of \\( 19.6 \\) litres per minute. By rounding each value to 1 significant figure, estimate the number of minutes it takes to empty the tank.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "\\frac{4000}{20}",
          "explanation": "Rounding gives \\( 4180 \\to 4000 \\) and \\( 19.6 \\to 20 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the volume by the rate.",
          "workingLatex": "\\frac{4000}{20} = 200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 200 \\) minutes",
      "canonicalAnswer": "200"
    }
  },
  {
    "id": "gn28-036",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{41.7 + 18.2}{0.29} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{40 + 20}{0.3}",
          "explanation": "Rounding gives \\( 41.7 \\to 40 \\), \\( 18.2 \\to 20 \\) and \\( 0.29 \\to 0.3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "40 + 20 = 60",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide.",
          "workingLatex": "\\frac{60}{0.3} = 200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 200 \\)",
      "canonicalAnswer": "200"
    }
  },
  {
    "id": "gn28-037",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{6.7 \\cdot 38}{0.21} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{7 \\cdot 40}{0.2}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "7 \\cdot 40 = 280",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{280}{0.2} = 1400",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\)."
        }
      ],
      "finalAnswer": "\\( 1400 \\)",
      "canonicalAnswer": "1400"
    }
  },
  {
    "id": "gn28-038",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{0.62 \\cdot 78}{0.39} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "decimals"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{0.6 \\cdot 80}{0.4}",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.6 \\cdot 80 = 48",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{48}{0.4} = 120",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 120 \\)",
      "canonicalAnswer": "120"
    }
  },
  {
    "id": "gn28-039",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{82 \\cdot 4.9}{0.18} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{80 \\cdot 5}{0.2}",
          "explanation": "Rounding each value to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "80 \\cdot 5 = 400",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{400}{0.2} = 2000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 2000 \\)",
      "canonicalAnswer": "2000"
    }
  },
  {
    "id": "gn28-040",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{31^{2}}{0.48} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{30^{2}}{0.5}",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Work out the square.",
          "workingLatex": "30^{2} = 900",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{900}{0.5} = 1800",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\)."
        }
      ],
      "finalAnswer": "\\( 1800 \\)",
      "canonicalAnswer": "1800"
    }
  },
  {
    "id": "gn28-041",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\sqrt{ 9.6 \\cdot 4.3 } \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "square root"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\sqrt{ 10 \\cdot 4 }",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate inside the root, then take the square root.",
          "workingLatex": "\\sqrt{40} \\approx \\sqrt{36} = 6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6 \\)",
      "canonicalAnswer": "6"
    }
  },
  {
    "id": "gn28-042",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A rectangular field is \\( 58\\,\\mathrm{m} \\) long and \\( 41\\,\\mathrm{m} \\) wide. Estimate the area of the field.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "area"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "60 \\cdot 40",
          "explanation": "Each measurement is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Multiply to find the estimated area.",
          "workingLatex": "60 \\cdot 40 = 2400",
          "explanation": "Area of a rectangle is length times width."
        }
      ],
      "finalAnswer": "\\( 2400\\,\\mathrm{m^{2}} \\)",
      "canonicalAnswer": "2400"
    }
  },
  {
    "id": "gn28-043",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A car travels \\( 312\\,\\mathrm{km} \\) in \\( 3.8 \\) hours. Estimate the average speed of the car in \\( \\mathrm{km/h} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "speed"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "\\frac{300}{4}",
          "explanation": "Distance and time are each rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Divide to find the estimated speed.",
          "workingLatex": "\\frac{300}{4} = 75",
          "explanation": "Speed equals distance divided by time."
        }
      ],
      "finalAnswer": "\\( 75\\,\\mathrm{km/h} \\)",
      "canonicalAnswer": "75"
    }
  },
  {
    "id": "gn28-044",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A box of \\( 19 \\) books costs \\( \\pounds 412 \\). Estimate the cost of one book.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "cost"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "\\frac{400}{20}",
          "explanation": "Both numbers are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Divide to estimate the cost of one book.",
          "workingLatex": "\\frac{400}{20} = 20",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( \\pounds 20 \\)",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn28-045",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{4.9 + 6.1}{0.52} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "decimals"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{5 + 6}{0.5}",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "5 + 6 = 11",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{11}{0.5} = 22",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\)."
        }
      ],
      "finalAnswer": "\\( 22 \\)",
      "canonicalAnswer": "22"
    }
  },
  {
    "id": "gn28-046",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( 0.79 \\cdot 6.2^{2} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "squares"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "0.8 \\cdot 6^{2}",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Work out the square.",
          "workingLatex": "6^{2} = 36",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Multiply.",
          "workingLatex": "0.8 \\cdot 36 = 28.8",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 28.8 \\)",
      "canonicalAnswer": "28.8"
    }
  },
  {
    "id": "gn28-047",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{0.071 \\cdot 412}{1.9} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "decimals"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "\\frac{0.07 \\cdot 400}{2}",
          "explanation": "Each value is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.07 \\cdot 400 = 28",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{28}{2} = 14",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 14 \\)",
      "canonicalAnswer": "14"
    }
  },
  {
    "id": "gn28-048",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A field is a rectangle measuring \\( 312\\,\\mathrm{m} \\) by \\( 178\\,\\mathrm{m} \\). Grass seed covers \\( 50\\,\\mathrm{m^2} \\) per bag. By rounding each length to 1 significant figure, estimate the number of bags needed, and state whether your estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "area",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "312 \\approx 300, \\quad 178 \\approx 200",
          "explanation": "Rounding to one significant figure gives easy numbers."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "300 \\cdot 200 = 60000\\,\\mathrm{m^2}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate the number of bags.",
          "workingLatex": "\\frac{60000}{50} = 1200",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Decide over or under.",
          "workingLatex": "300 > 312? \\text{ No}; \\quad 200 > 178? \\text{ Yes}",
          "explanation": "One length was rounded up and one down, but \\( 60000 \\) exceeds the true area \\( 312 \\cdot 178 = 55536 \\), so this is an over-estimate."
        }
      ],
      "finalAnswer": "\\( 1200 \\) bags; an over-estimate",
      "canonicalAnswer": "1200"
    }
  },
  {
    "id": "gn28-049",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A car travels \\( 287\\,\\mathrm{km} \\) in \\( 4.1 \\) hours. Estimate the average speed in \\( \\mathrm{km/h} \\) by rounding to 1 significant figure, and state whether your estimate is larger or smaller than the true value.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "speed",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "287 \\approx 300, \\quad 4.1 \\approx 4",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{300}{4} = 75\\,\\mathrm{km/h}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Decide larger or smaller.",
          "workingLatex": "\\frac{287}{4.1} \\approx 70",
          "explanation": "The numerator was increased and the denominator decreased, so the estimate is larger than the true value."
        }
      ],
      "finalAnswer": "\\( 75\\,\\mathrm{km/h} \\); larger than the true value",
      "canonicalAnswer": "75"
    }
  },
  {
    "id": "gn28-050",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A metal block has mass \\( 4180\\,\\mathrm{g} \\) and volume \\( 521\\,\\mathrm{cm^3} \\). Estimate its density in \\( \\mathrm{g/cm^3} \\) using 1 significant figure rounding, and state whether the estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "density",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "4180 \\approx 4000, \\quad 521 \\approx 500",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the density.",
          "workingLatex": "\\frac{4000}{500} = 8\\,\\mathrm{g/cm^3}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Decide over or under.",
          "workingLatex": "\\frac{4180}{521} \\approx 8.02",
          "explanation": "Both numerator and denominator were rounded down, so the direction is unclear from rules alone; comparing to the true value \\( 8.02 \\), the estimate is a slight under-estimate."
        }
      ],
      "finalAnswer": "\\( 8\\,\\mathrm{g/cm^3} \\); a slight under-estimate",
      "canonicalAnswer": "8"
    }
  },
  {
    "id": "gn28-051",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Tickets to a concert cost \\( \\pounds 38.75 \\) each. A school orders \\( 196 \\) tickets. Estimate the total cost by rounding to 1 significant figure, and explain why this is an under-estimate.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "cost",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "38.75 \\approx 40, \\quad 196 \\approx 200",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the cost.",
          "workingLatex": "40 \\cdot 200 = 8000",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "38.75 \\cdot 196 = 7595",
          "explanation": "Both values were rounded up, so the product \\( 8000 \\) exceeds the true cost \\( \\pounds 7595 \\) — it is an over-estimate, not under."
        }
      ],
      "finalAnswer": "\\( \\pounds 8000 \\); it is in fact an over-estimate since both factors were rounded up",
      "canonicalAnswer": "8000"
    }
  },
  {
    "id": "gn28-052",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A circular pond has radius \\( 5.8\\,\\mathrm{m} \\). Using \\( \\pi \\approx 3 \\) and rounding the radius to 1 significant figure, estimate the area of the pond, and state whether the estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "area",
      "circle",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round the radius to 1 s.f.",
          "workingLatex": "5.8 \\approx 6",
          "explanation": "Rounding to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "3 \\cdot 6^{2} = 3 \\cdot 36 = 108\\,\\mathrm{m^2}",
          "explanation": "Using \\( \\pi \\approx 3 \\) and \\( A = \\pi r^{2} \\)."
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "\\pi \\cdot 5.8^{2} \\approx 105.7",
          "explanation": "Although the radius was rounded up, using \\( \\pi \\approx 3 \\) reduces the factor; overall the estimate \\( 108 \\) slightly exceeds the true value, so it is an over-estimate."
        }
      ],
      "finalAnswer": "\\( 108\\,\\mathrm{m^2} \\); an over-estimate",
      "canonicalAnswer": "108"
    }
  },
  {
    "id": "gn28-053",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A factory produces \\( 4920 \\) items each day and operates for \\( 312 \\) days a year. Estimate the annual production by rounding to 1 significant figure, and state whether the estimate is larger or smaller than the true total.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "worded",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "4920 \\approx 5000, \\quad 312 \\approx 300",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the total.",
          "workingLatex": "5000 \\cdot 300 = 1500000",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "4920 \\cdot 312 = 1535040",
          "explanation": "Both factors were rounded down, so the estimate is smaller than the true total."
        }
      ],
      "finalAnswer": "\\( 1\\,500\\,000 \\); smaller than the true total",
      "canonicalAnswer": "1500000"
    }
  },
  {
    "id": "gn28-054",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{6.1^{2} \\cdot 48}{0.21} \\) by rounding each number to 1 significant figure, then state whether your estimate is an over- or under-estimate of the calculator value.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to 1 s.f.",
          "workingLatex": "6.1 \\approx 6, \\quad 48 \\approx 50, \\quad 0.21 \\approx 0.2",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the estimate.",
          "workingLatex": "\\frac{6^{2} \\cdot 50}{0.2} = \\frac{36 \\cdot 50}{0.2} = \\frac{1800}{0.2} = 9000",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to calculator value.",
          "workingLatex": "\\frac{6.1^{2} \\cdot 48}{0.21} \\approx 8505",
          "explanation": "The numerator rounded up and the denominator down inflate the result, so the estimate over-estimates the true value \\( \\approx 8505 \\)."
        }
      ],
      "finalAnswer": "\\( 9000 \\); an over-estimate",
      "canonicalAnswer": "9000"
    }
  },
  {
    "id": "gn28-055",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A water tank is a cuboid measuring \\( 1.9\\,\\mathrm{m} \\) by \\( 0.78\\,\\mathrm{m} \\) by \\( 1.1\\,\\mathrm{m} \\). Estimate its volume in \\( \\mathrm{m^3} \\) using 1 significant figure rounding, and state whether the estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "volume",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "1.9 \\approx 2, \\quad 0.78 \\approx 0.8, \\quad 1.1 \\approx 1",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the volume.",
          "workingLatex": "2 \\cdot 0.8 \\cdot 1 = 1.6\\,\\mathrm{m^3}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "1.9 \\cdot 0.78 \\cdot 1.1 \\approx 1.63",
          "explanation": "Two lengths rounded up and one rounded down; the estimate \\( 1.6 \\) is just below the true value, so it is a slight under-estimate."
        }
      ],
      "finalAnswer": "\\( 1.6\\,\\mathrm{m^3} \\); a slight under-estimate",
      "canonicalAnswer": "1.6"
    }
  },
  {
    "id": "gn28-056",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A coach holds \\( 52 \\) passengers and each pays \\( \\pounds 18.90 \\) for a trip. Estimate the total takings when the coach is full by rounding to 1 significant figure, and explain whether the true value is more or less than your estimate.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "cost",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to 1 s.f.",
          "workingLatex": "52 \\approx 50, \\quad 18.90 \\approx 20",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the takings.",
          "workingLatex": "50 \\cdot 20 = 1000",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "52 \\cdot 18.90 = 982.80",
          "explanation": "The price was rounded up by more than the count was rounded down, so the estimate exceeds the true value \\( \\pounds 982.80 \\)."
        }
      ],
      "finalAnswer": "\\( \\pounds 1000 \\); the true value is less than the estimate",
      "canonicalAnswer": "1000"
    }
  },
  {
    "id": "gn28-057",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{\\sqrt{401} + 7.8}{0.49} \\) by rounding each number suitably, and state whether your estimate is larger or smaller than the calculator value.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "square root",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each number to convenient values.",
          "workingLatex": "401 \\approx 400, \\quad 7.8 \\approx 8, \\quad 0.49 \\approx 0.5",
          "explanation": "Choosing \\( 400 \\) makes the square root exact."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the estimate.",
          "workingLatex": "\\frac{\\sqrt{400} + 8}{0.5} = \\frac{20 + 8}{0.5} = \\frac{28}{0.5} = 56",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to calculator value.",
          "workingLatex": "\\frac{\\sqrt{401} + 7.8}{0.49} \\approx 56.7",
          "explanation": "The numerator was rounded up slightly while the denominator rounded up, giving an estimate just below the true value, so it is a slight under-estimate."
        }
      ],
      "finalAnswer": "\\( 56 \\); slightly smaller than the calculator value",
      "canonicalAnswer": "56"
    }
  },
  {
    "id": "gn28-058",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Paint covers \\( 11\\,\\mathrm{m^2} \\) per litre. A wall measures \\( 4.2\\,\\mathrm{m} \\) by \\( 2.8\\,\\mathrm{m} \\) and needs two coats. Estimate the number of litres required by rounding to 1 significant figure, and state whether the estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "area",
      "worded",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "4.2 \\approx 4, \\quad 2.8 \\approx 3, \\quad 11 \\approx 10",
          "explanation": "Rounding each value to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area for two coats.",
          "workingLatex": "2 \\cdot (4 \\cdot 3) = 2 \\cdot 12 = 24\\,\\mathrm{m^2}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate the litres needed.",
          "workingLatex": "\\frac{24}{10} = 2.4\\,\\mathrm{litres}",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Compare to true value.",
          "workingLatex": "\\frac{2 \\cdot (4.2 \\cdot 2.8)}{11} \\approx 2.14",
          "explanation": "The coverage was rounded down, inflating the litres needed, so the estimate is an over-estimate."
        }
      ],
      "finalAnswer": "\\( 2.4 \\) litres; an over-estimate",
      "canonicalAnswer": "2.4"
    }
  },
  {
    "id": "gn28-059",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A runner completes \\( 21\\,\\mathrm{km} \\) in \\( 118 \\) minutes. Estimate the average speed in \\( \\mathrm{km/h} \\) by rounding to 1 significant figure, and state whether your estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "speed",
      "over or under estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert and round to 1 s.f.",
          "workingLatex": "118\\,\\mathrm{min} = \\frac{118}{60}\\,\\mathrm{h} \\approx 2\\,\\mathrm{h}, \\quad 21 \\approx 20",
          "explanation": "Rounding \\( 118 \\) minutes to about \\( 2 \\) hours and \\( 21\\,\\mathrm{km} \\) to \\( 20\\,\\mathrm{km} \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{20}{2} = 10\\,\\mathrm{km/h}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare to true value.",
          "workingLatex": "\\frac{21}{118/60} = \\frac{21 \\cdot 60}{118} \\approx 10.7",
          "explanation": "The distance was rounded down and the time rounded up, both lowering the result, so the estimate is an under-estimate."
        }
      ],
      "finalAnswer": "\\( 10\\,\\mathrm{km/h} \\); an under-estimate",
      "canonicalAnswer": "10"
    }
  },
  {
    "id": "gn28-060",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A field is a rectangle measuring \\( 312\\,\\mathrm{m} \\) by \\( 197\\,\\mathrm{m} \\). Grass seed costs \\( \\pounds 0.0\\,\\!82 \\) per square metre. By rounding each value to 1 significant figure, estimate the cost of seeding the field, and state whether your estimate is larger or smaller than the true cost.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "over-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "312 \\approx 300, \\quad 197 \\approx 200, \\quad 0.082 \\approx 0.08",
          "explanation": "Each measurement and the price are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "300 \\cdot 200 = 60000\\,\\mathrm{m^2}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate the cost.",
          "workingLatex": "60000 \\cdot 0.08 = 4800",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "300 > 312\\;\\text{is false},\\; 200 > 197,\\; 0.08 < 0.082",
          "explanation": "Two factors were rounded down (\\( 312\\to 300 \\), \\( 0.082\\to 0.08 \\)) so the estimate is an under-estimate."
        }
      ],
      "finalAnswer": "\\( \\pounds 4800 \\); an under-estimate (the length and price were both rounded down).",
      "canonicalAnswer": "4800"
    }
  },
  {
    "id": "gn28-061",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A car travels \\( 408\\,\\mathrm{km} \\) in \\( 4\\,\\mathrm{hours}\\;52\\,\\mathrm{minutes} \\). Estimate the average speed in \\( \\mathrm{km/h} \\), and state whether your estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "speed",
      "under-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round the values to convenient figures.",
          "workingLatex": "408 \\approx 400, \\quad 4\\,\\text{h}\\,52\\,\\text{min} \\approx 5\\,\\text{h}",
          "explanation": "Distance is rounded down to 1 s.f. and the time rounded up to a whole number of hours."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{400}{5} = 80",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "\\text{numerator} \\downarrow,\\quad \\text{denominator} \\uparrow",
          "explanation": "Rounding the distance down and the time up both reduce the result, so the estimate is an under-estimate."
        }
      ],
      "finalAnswer": "\\( 80\\,\\mathrm{km/h} \\); an under-estimate (distance rounded down, time rounded up).",
      "canonicalAnswer": "80"
    }
  },
  {
    "id": "gn28-062",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A metal block has mass \\( 588\\,\\mathrm{g} \\) and volume \\( 31\\,\\mathrm{cm^3} \\). Estimate its density in \\( \\mathrm{g/cm^3} \\). The exact value from a calculator is \\( 18.97 \\). Comment on how close your estimate is.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "density",
      "calculator comparison"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "588 \\approx 600, \\quad 31 \\approx 30",
          "explanation": "Both quantities are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the density.",
          "workingLatex": "\\frac{600}{30} = 20",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare with the calculator value.",
          "workingLatex": "20 - 18.97 = 1.03",
          "explanation": "The estimate \\( 20 \\) is close to the exact \\( 18.97 \\), differing by about \\( 1 \\), so it is a reasonable approximation."
        }
      ],
      "finalAnswer": "\\( 20\\,\\mathrm{g/cm^3} \\); close to the calculator value \\( 18.97 \\) (difference \\( \\approx 1 \\)).",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn28-063",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A coach holds \\( 48 \\) passengers. A school needs to transport \\( 287 \\) pupils on a trip. Estimate the number of coaches required, and explain why a calculation must be rounded up rather than to the nearest whole number.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "rounding up",
      "real-life"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round to convenient figures.",
          "workingLatex": "287 \\approx 300, \\quad 48 \\approx 50",
          "explanation": "The number of pupils and seats are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the number of coaches.",
          "workingLatex": "\\frac{300}{50} = 6",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Interpret the answer.",
          "workingLatex": "\\frac{287}{48} = 5.97\\ldots \\;\\Rightarrow\\; 6\\;\\text{coaches}",
          "explanation": "Any remaining pupils still need a coach, so the result must be rounded up to ensure every pupil has a seat."
        }
      ],
      "finalAnswer": "\\( 6 \\) coaches (must round up so all pupils are seated).",
      "canonicalAnswer": "6"
    }
  },
  {
    "id": "gn28-064",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{\\sqrt{96.4} \\cdot 7.8}{0.213} \\), and state whether the true value is larger or smaller than your estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "square root",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value.",
          "workingLatex": "\\sqrt{96.4} \\approx \\sqrt{100} = 10, \\quad 7.8 \\approx 8, \\quad 0.213 \\approx 0.2",
          "explanation": "The radicand is rounded to a perfect square and the other values to 1 s.f."
        },
        {
          "stepNumber": 2,
          "description": "Substitute and evaluate.",
          "workingLatex": "\\frac{10 \\cdot 8}{0.2} = \\frac{80}{0.2} = 400",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Decide direction.",
          "workingLatex": "\\sqrt{96.4} \\downarrow,\\; 7.8 \\uparrow,\\; 0.213 \\downarrow \\Rightarrow \\text{denominator} \\downarrow",
          "explanation": "Rounding the denominator down inflates the estimate, so the true value is a little smaller than \\( 400 \\)."
        }
      ],
      "finalAnswer": "\\( 400 \\); the true value is slightly smaller.",
      "canonicalAnswer": "400"
    }
  },
  {
    "id": "gn28-065",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Paint covers \\( 11\\,\\mathrm{m^2} \\) per litre. A wall measures \\( 5.7\\,\\mathrm{m} \\) by \\( 2.9\\,\\mathrm{m} \\) and needs two coats. Estimate how many litres of paint are needed, and state whether your estimate is an over- or under-estimate of the true requirement.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "area",
      "over-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "5.7 \\approx 6, \\quad 2.9 \\approx 3, \\quad 11 \\approx 10",
          "explanation": "Dimensions and coverage are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area for two coats.",
          "workingLatex": "6 \\cdot 3 \\cdot 2 = 36\\,\\mathrm{m^2}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate the litres needed.",
          "workingLatex": "\\frac{36}{10} = 3.6 \\approx 4\\;\\text{litres}",
          "explanation": "Paint is sold in whole litres, so round up to \\( 4 \\)."
        },
        {
          "stepNumber": 4,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "5.7\\uparrow,\\; 2.9\\uparrow,\\; 11\\downarrow",
          "explanation": "The dimensions were rounded up and the coverage down, so the estimated area (and litres) is an over-estimate."
        }
      ],
      "finalAnswer": "About \\( 4 \\) litres; an over-estimate (dimensions rounded up, coverage rounded down).",
      "canonicalAnswer": "4"
    }
  },
  {
    "id": "gn28-066",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A circular pond has radius \\( 3.8\\,\\mathrm{m} \\). Using \\( \\pi \\approx 3 \\), estimate its area in \\( \\mathrm{m^2} \\), and explain why this estimate is smaller than the true area.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "circle area",
      "under-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round the radius and \\( \\pi \\).",
          "workingLatex": "3.8 \\approx 4, \\quad \\pi \\approx 3",
          "explanation": "The radius is rounded to 1 s.f. and \\( \\pi \\) approximated as \\( 3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "\\pi r^2 \\approx 3 \\cdot 4^2 = 3 \\cdot 16 = 48",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Explain the direction.",
          "workingLatex": "3 < \\pi = 3.14159\\ldots",
          "explanation": "Using \\( 3 \\) instead of \\( \\pi \\) makes the multiplier too small, so the estimate is an under-estimate of the true area."
        }
      ],
      "finalAnswer": "\\( 48\\,\\mathrm{m^2} \\); an under-estimate because \\( 3 < \\pi \\).",
      "canonicalAnswer": "48"
    }
  },
  {
    "id": "gn28-067",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "At a concert there are \\( 38 \\) rows of seats with \\( 52 \\) seats in each row, and tickets cost \\( \\pounds 19.50 \\) each. Estimate the total ticket revenue if every seat is sold, and state whether the true revenue exceeds your estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "money",
      "under-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "38 \\approx 40, \\quad 52 \\approx 50, \\quad 19.50 \\approx 20",
          "explanation": "Rows, seats and price are each rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate total seats.",
          "workingLatex": "40 \\cdot 50 = 2000",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate revenue.",
          "workingLatex": "2000 \\cdot 20 = 40000",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Decide direction.",
          "workingLatex": "38\\uparrow,\\; 52\\downarrow,\\; 19.50\\uparrow",
          "explanation": "More factors were rounded up than down, so the estimate is likely larger than the true revenue, meaning the true revenue does not exceed it."
        }
      ],
      "finalAnswer": "\\( \\pounds 40000 \\); the true revenue does not exceed this (rounding was mostly upward).",
      "canonicalAnswer": "40000"
    }
  },
  {
    "id": "gn28-068",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A water tank is a cuboid measuring \\( 1.9\\,\\mathrm{m} \\) by \\( 0.78\\,\\mathrm{m} \\) by \\( 1.1\\,\\mathrm{m} \\). Given that \\( 1\\,\\mathrm{m^3} = 1000\\,\\mathrm{litres} \\), estimate the capacity of the tank in litres.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "volume",
      "capacity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each dimension to 1 s.f.",
          "workingLatex": "1.9 \\approx 2, \\quad 0.78 \\approx 0.8, \\quad 1.1 \\approx 1",
          "explanation": "Each dimension is rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the volume.",
          "workingLatex": "2 \\cdot 0.8 \\cdot 1 = 1.6\\,\\mathrm{m^3}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Convert to litres.",
          "workingLatex": "1.6 \\cdot 1000 = 1600",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 1600 \\) litres.",
      "canonicalAnswer": "1600"
    }
  },
  {
    "id": "gn28-069",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Estimate the value of \\( \\dfrac{2.1 \\cdot 10^{5}}{4.8 \\cdot 10^{2}} \\), giving your answer in standard form, and state whether the calculator value is larger or smaller than your estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "standard form",
      "under-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round the leading numbers to 1 s.f.",
          "workingLatex": "2.1 \\approx 2, \\quad 4.8 \\approx 5",
          "explanation": "The mantissas are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Divide the numbers and the powers.",
          "workingLatex": "\\frac{2 \\times 10^{5}}{5 \\times 10^{2}} = 0.4 \\times 10^{3}",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write in standard form.",
          "workingLatex": "0.4 \\times 10^{3} = 4 \\times 10^{2}",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Decide direction.",
          "workingLatex": "2.1\\downarrow,\\; 4.8\\uparrow",
          "explanation": "The numerator was rounded down and the denominator up, so the estimate is smaller than the calculator value."
        }
      ],
      "finalAnswer": "\\( 4 \\times 10^{2} \\); the calculator value is larger.",
      "canonicalAnswer": "400"
    }
  },
  {
    "id": "gn28-070",
    "topicRef": "gn28",
    "topicTitle": "Estimation and approximation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A runner completes \\( 9.7\\,\\mathrm{km} \\) and burns about \\( 62 \\) calories per kilometre. After training every day for \\( 29 \\) days, estimate the total calories burned, and state whether your estimate is an over- or under-estimate.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "multi-step",
      "over-estimate"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each value to 1 s.f.",
          "workingLatex": "9.7 \\approx 10, \\quad 62 \\approx 60, \\quad 29 \\approx 30",
          "explanation": "Distance, calorie rate and number of days are rounded to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Estimate calories per day.",
          "workingLatex": "10 \\cdot 60 = 600",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Estimate the total.",
          "workingLatex": "600 \\cdot 30 = 18000",
          "explanation": ""
        },
        {
          "stepNumber": 4,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "9.7\\uparrow,\\; 62\\downarrow,\\; 29\\uparrow",
          "explanation": "Two factors were rounded up and only one down, so the estimate is likely an over-estimate of the true total."
        }
      ],
      "finalAnswer": "\\( 18000 \\) calories; an over-estimate (two factors rounded up, one down).",
      "canonicalAnswer": "18000"
    }
  }
];
