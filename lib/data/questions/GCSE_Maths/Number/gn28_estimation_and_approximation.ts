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
          "workingLatex": "38 \\approx 40, \\quad 0.21 \\approx 0.2",
          "explanation": "To estimate, we replace each value with its nearest 1 significant figure number. The first significant figure of \\( 38 \\) is the \\( 3 \\) in the tens, and the next digit \\( 8 \\) rounds it up to \\( 40 \\); for \\( 0.21 \\) the first significant figure is \\( 2 \\), giving \\( 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "40 \\cdot 0.2 = 8",
          "explanation": "Multiplying \\( 40 \\) by \\( 0.2 \\) is the same as finding two tenths of \\( 40 \\), which is \\( 8 \\). A common slip is to write \\( 80 \\); remember \\( 0.2 \\) is less than \\( 1 \\), so the answer must be smaller than \\( 40 \\)."
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
          "workingLatex": "612 \\approx 600, \\quad 2.9 \\approx 3",
          "explanation": "The first significant figure of \\( 612 \\) is the \\( 6 \\); the next digit \\( 1 \\) rounds down, giving \\( 600 \\). The number \\( 2.9 \\) rounds up to \\( 3 \\) because the next digit is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the rounded values.",
          "workingLatex": "\\frac{600}{3} = 200",
          "explanation": "Choosing \\( 600 \\) and \\( 3 \\) is deliberate: they divide exactly. Since \\( 6 \\div 3 = 2 \\), it follows that \\( 600 \\div 3 = 200 \\)."
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
          "explanation": "To estimate a square root, look for a perfect square close to the number. Since \\( 9^{2} = 81 \\) and \\( 83 \\) sits just above it, \\( 81 \\) is the nearest square below \\( 83 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{83} \\approx \\sqrt{81} = 9",
          "explanation": "Because \\( 83 \\) is very close to \\( 81 \\), its square root is very close to \\( \\sqrt{81} = 9 \\). The true value is a little more than \\( 9 \\), so \\( 9 \\) is a sensible estimate."
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
          "description": "Round the base to 1 s.f.",
          "workingLatex": "4.7 \\approx 5",
          "explanation": "The first significant figure of \\( 4.7 \\) is the \\( 4 \\); the next digit \\( 7 \\) rounds it up to \\( 5 \\). Squaring a rounded number is easier than squaring a decimal."
        },
        {
          "stepNumber": 2,
          "description": "Square the rounded value.",
          "workingLatex": "5^{2} = 25",
          "explanation": "Squaring means multiplying the number by itself, so \\( 5^{2} = 5 \\cdot 5 = 25 \\). The true value \\( 4.7^{2} = 22.09 \\) is a little less, so \\( 25 \\) is a reasonable estimate."
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
          "workingLatex": "1.89 \\approx 2, \\quad 32 \\approx 30",
          "explanation": "The price \\( \\pounds 1.89 \\) is almost \\( \\pounds 2 \\), so it rounds up to \\( 2 \\); the count \\( 32 \\) rounds down to \\( 30 \\) since the next digit is \\( 2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply price by quantity.",
          "workingLatex": "2 \\cdot 30 = 60",
          "explanation": "The total cost is price times quantity. With round numbers this is \\( 2 \\cdot 30 = 60 \\), so the estimated total is \\( \\pounds 60 \\)."
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
          "workingLatex": "19 \\approx 20, \\quad 41 \\approx 40, \\quad 7.8 \\approx 8",
          "explanation": "Each value is replaced by its nearest 1 significant figure number: \\( 19 \\to 20 \\), \\( 41 \\to 40 \\) and \\( 7.8 \\to 8 \\). These were chosen so the division works out neatly."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "20 \\cdot 40 = 800",
          "explanation": "Multiply the top of the fraction first: \\( 20 \\cdot 40 = 800 \\). It helps to handle the numerator before dividing."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{800}{8} = 100",
          "explanation": "Now divide the numerator by \\( 8 \\). Since \\( 8 \\cdot 100 = 800 \\), the result is \\( 100 \\)."
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
          "workingLatex": "287 \\approx 300, \\quad 411 \\approx 400, \\quad 92 \\approx 90",
          "explanation": "Rounding each value to one significant figure gives \\( 300 \\), \\( 400 \\) and \\( 90 \\) — note \\( 92 \\) rounds to \\( 90 \\), keeping just one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Add the rounded values.",
          "workingLatex": "300 + 400 + 90 = 790",
          "explanation": "Add the round numbers in turn: \\( 300 + 400 = 700 \\), then \\( 700 + 90 = 790 \\)."
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
          "explanation": "Look for a perfect square close to \\( 38 \\). Since \\( 6^{2} = 36 \\) and \\( 7^{2} = 49 \\), the nearest square is \\( 36 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{38} \\approx \\sqrt{36} = 6",
          "explanation": "Because \\( 38 \\) is very close to \\( 36 \\), its square root is close to \\( \\sqrt{36} = 6 \\). The true value is just over \\( 6 \\), so \\( 6 \\) is a good estimate."
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
          "workingLatex": "0.62 \\approx 0.6, \\quad 78 \\approx 80",
          "explanation": "The first significant figure of \\( 0.62 \\) is the \\( 6 \\), giving \\( 0.6 \\); and \\( 78 \\) rounds up to \\( 80 \\) because the next digit is \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "0.6 \\cdot 80 = 48",
          "explanation": "It helps to compute \\( 6 \\cdot 80 = 480 \\) first, then divide by \\( 10 \\) (because \\( 0.6 \\) is \\( 6 \\) tenths), giving \\( 48 \\)."
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
          "workingLatex": "4.9 \\approx 5, \\quad 7.2 \\approx 7, \\quad 11.8 \\approx 10",
          "explanation": "Each length is rounded to one significant figure: \\( 4.9 \\to 5 \\), \\( 7.2 \\to 7 \\) and \\( 11.8 \\to 10 \\). Notice \\( 11.8 \\) keeps only its first significant figure, so it becomes \\( 10 \\), not \\( 12 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Add the rounded lengths.",
          "workingLatex": "5 + 7 + 10 = 22",
          "explanation": "Adding the rounded lengths gives the estimated total: \\( 5 + 7 = 12 \\), then \\( 12 + 10 = 22 \\) metres."
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
          "workingLatex": "4920 \\approx 5000, \\quad 48 \\approx 50",
          "explanation": "The first significant figure of \\( 4920 \\) is the \\( 4 \\); the next digit \\( 9 \\) rounds it up to \\( 5000 \\). And \\( 48 \\) rounds up to \\( 50 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the rounded values.",
          "workingLatex": "\\frac{5000}{50} = 100",
          "explanation": "Dividing \\( 5000 \\) by \\( 50 \\): since \\( 50 \\cdot 100 = 5000 \\), the answer is \\( 100 \\)."
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
          "workingLatex": "6.1 \\approx 6, \\quad 18 \\approx 20",
          "explanation": "The value \\( 6.1 \\) rounds down to \\( 6 \\), and \\( 18 \\) rounds up to \\( 20 \\) since its first significant figure is the tens digit \\( 1 \\) and the next digit \\( 8 \\) rounds it up."
        },
        {
          "stepNumber": 2,
          "description": "Square the first term.",
          "workingLatex": "6^{2} = 36",
          "explanation": "Following the order of operations, deal with the power before subtracting: \\( 6^{2} = 36 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Subtract.",
          "workingLatex": "36 - 20 = 16",
          "explanation": "Now subtract the rounded \\( 18 \\): \\( 36 - 20 = 16 \\)."
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
          "workingLatex": "6.9 \\approx 7, \\quad 41 \\approx 40",
          "explanation": "The value \\( 6.9 \\) rounds up to \\( 7 \\), and \\( 41 \\) rounds down to \\( 40 \\). These round numbers are easy to multiply."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "7 \\cdot 40 = 280",
          "explanation": "Multiplying \\( 7 \\cdot 4 = 28 \\), then attaching the zero gives \\( 7 \\cdot 40 = 280 \\)."
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
          "workingLatex": "312 \\approx 300, \\quad 18.7 \\approx 20, \\quad 47 \\approx 50",
          "explanation": "Each value is rounded to one significant figure: \\( 312 \\to 300 \\), \\( 18.7 \\to 20 \\) and \\( 47 \\to 50 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract in order.",
          "workingLatex": "300 - 20 - 50 = 230",
          "explanation": "Work left to right: \\( 300 - 20 = 280 \\), then \\( 280 - 50 = 230 \\)."
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
          "workingLatex": "589 \\approx 600, \\quad 29 \\approx 30",
          "explanation": "The value \\( 589 \\) rounds up to \\( 600 \\) (the next digit after the \\( 5 \\) is \\( 8 \\)), and \\( 29 \\) rounds up to \\( 30 \\). These divide neatly."
        },
        {
          "stepNumber": 2,
          "description": "Divide the rounded values.",
          "workingLatex": "\\frac{600}{30} = 20",
          "explanation": "Since \\( 30 \\cdot 20 = 600 \\), the division gives \\( 20 \\)."
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
          "description": "Round the base to 1 s.f.",
          "workingLatex": "19 \\approx 20",
          "explanation": "The value \\( 19 \\) rounds up to \\( 20 \\) because the units digit \\( 9 \\) rounds the tens up. Squaring \\( 20 \\) is far easier than squaring \\( 19 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the rounded value.",
          "workingLatex": "20^{2} = 400",
          "explanation": "Squaring means \\( 20 \\cdot 20 = 400 \\). The true value \\( 19^{2} = 361 \\) is a little less, so \\( 400 \\) is a reasonable estimate."
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
          "workingLatex": "38 \\approx 40, \\quad 6.1 \\approx 6, \\quad 0.21 \\approx 0.2",
          "explanation": "Each value becomes its nearest 1 significant figure number: \\( 38 \\to 40 \\), \\( 6.1 \\to 6 \\) and \\( 0.21 \\to 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "40 \\cdot 6 = 240",
          "explanation": "Handle the top of the fraction first: \\( 40 \\cdot 6 = 240 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{240}{0.2} = 1200",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 240 \\cdot 5 = 1200 \\). A common slip is to make the answer smaller — dividing by a number below \\( 1 \\) makes it larger."
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
          "workingLatex": "1.95 \\approx 2, \\quad 4.10 \\approx 4",
          "explanation": "The pen at \\( \\pounds 1.95 \\) rounds up to \\( \\pounds 2 \\), and the notebook at \\( \\pounds 4.10 \\) rounds down to \\( \\pounds 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Add the rounded prices.",
          "workingLatex": "2 + 4 = 6",
          "explanation": "Adding the rounded prices gives the estimated total cost of \\( \\pounds 6 \\)."
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
          "workingLatex": "0.38 \\approx 0.4, \\quad 72 \\approx 70",
          "explanation": "The first significant figure of \\( 0.38 \\) is the \\( 3 \\); the next digit \\( 8 \\) rounds it up to \\( 0.4 \\). And \\( 72 \\) rounds down to \\( 70 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "0.4 \\cdot 70 = 28",
          "explanation": "Compute \\( 4 \\cdot 70 = 280 \\), then divide by \\( 10 \\) because \\( 0.4 \\) is four tenths, giving \\( 28 \\)."
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
          "workingLatex": "6^{2} = 36",
          "explanation": "Look for a perfect square near \\( 37 \\). Since \\( 6^{2} = 36 \\) and \\( 7^{2} = 49 \\), the closest square is \\( 36 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the root.",
          "workingLatex": "\\sqrt{37} \\approx \\sqrt{36} = 6",
          "explanation": "Because \\( 37 \\) is barely above \\( 36 \\), its square root is just above \\( \\sqrt{36} = 6 \\). So \\( 6 \\) is a good estimate."
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
          "workingLatex": "28 \\approx 30, \\quad 51 \\approx 50, \\quad 19 \\approx 20",
          "explanation": "Rounding each length to one significant figure: \\( 28 \\to 30 \\), \\( 51 \\to 50 \\) and \\( 19 \\to 20 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Add the rounded lengths.",
          "workingLatex": "30 + 50 + 20 = 100",
          "explanation": "Adding gives the estimated total: \\( 30 + 50 = 80 \\), then \\( 80 + 20 = 100 \\) centimetres."
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
          "workingLatex": "4.7 \\approx 5, \\quad 9.2 \\approx 9, \\quad 0.68 \\approx 0.7",
          "explanation": "Each value rounds to one significant figure: \\( 4.7 \\to 5 \\), \\( 9.2 \\to 9 \\) and \\( 0.68 \\to 0.7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "5 + 9 = 14",
          "explanation": "Add the top of the fraction first: \\( 5 + 9 = 14 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{14}{0.7} = 20",
          "explanation": "Dividing by \\( 0.7 \\) is the same as multiplying by \\( \\tfrac{10}{7} \\); since \\( 14 \\div 7 = 2 \\), we get \\( 2 \\cdot 10 = 20 \\)."
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
          "workingLatex": "4.8 \\approx 5, \\quad 7.2 \\approx 7, \\quad 2.1 \\approx 2",
          "explanation": "Each value rounds to one significant figure: \\( 4.8 \\to 5 \\), \\( 7.2 \\to 7 \\) and \\( 2.1 \\to 2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "5 \\cdot 7 \\cdot 2 = 70",
          "explanation": "Multiply in stages: \\( 5 \\cdot 7 = 35 \\), then \\( 35 \\cdot 2 = 70 \\)."
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
          "explanation": "The value \\( 8.7 \\) rounds up to \\( 9 \\) and \\( 19 \\) rounds up to \\( 20 \\). Rounding to one significant figure gives numbers that are easy to multiply mentally."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded values.",
          "workingLatex": "9 \\cdot 20 = 180",
          "explanation": "Multiplying \\( 9 \\cdot 2 = 18 \\), then attaching the zero gives \\( 9 \\cdot 20 = 180 \\)."
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
          "workingLatex": "6.2 \\approx 6, \\quad 0.38 \\approx 0.4, \\quad 0.197 \\approx 0.2",
          "explanation": "Rounding to one significant figure gives \\( 6.2 \\to 6 \\), \\( 0.38 \\to 0.4 \\) and \\( 0.197 \\to 0.2 \\). The denominator \\( 0.197 \\) rounds up because its second figure \\( 9 \\) carries."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "6 \\cdot 0.4 = 2.4",
          "explanation": "Handle the top first: \\( 6 \\cdot 0.4 = 2.4 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{2.4}{0.2} = 12",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 2.4 \\cdot 5 = 12 \\)."
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
          "workingLatex": "49.3 \\approx 50, \\quad 0.52 \\approx 0.5, \\quad 8.7 \\approx 9",
          "explanation": "Rounding gives \\( 49.3 \\to 50 \\), \\( 0.52 \\to 0.5 \\) and \\( 8.7 \\to 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the denominator.",
          "workingLatex": "0.5 \\cdot 9 = 4.5",
          "explanation": "Multiply the two values on the bottom first: \\( 0.5 \\cdot 9 = 4.5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide and round the result.",
          "workingLatex": "\\frac{50}{4.5} \\approx 11.1 \\approx 11",
          "explanation": "Now divide \\( 50 \\) by \\( 4.5 \\), which is about \\( 11.1 \\). As an estimate, this rounds to roughly \\( 11 \\)."
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
          "workingLatex": "3.9 \\approx 4, \\quad 0.21 \\approx 0.2",
          "explanation": "Rounding to one significant figure gives \\( 3.9 \\to 4 \\) and \\( 0.21 \\to 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the numerator.",
          "workingLatex": "4^{2} = 16",
          "explanation": "Deal with the power first: \\( 4^{2} = 16 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{16}{0.2} = 80",
          "explanation": "Dividing by \\( 0.2 \\) is multiplying by \\( 5 \\), so \\( 16 \\cdot 5 = 80 \\)."
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
          "workingLatex": "2.87 \\approx 3, \\quad 0.48 \\approx 0.5",
          "explanation": "Rounding to one significant figure gives \\( 2.87 \\to 3 \\) and \\( 0.48 \\to 0.5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Cube the numerator.",
          "workingLatex": "3^{3} = 27",
          "explanation": "Cubing means multiplying three times: \\( 3 \\cdot 3 \\cdot 3 = 27 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{27}{0.5} = 54",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\), so \\( 27 \\cdot 2 = 54 \\)."
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
          "workingLatex": "312 \\approx 300, \\quad 4.1 \\approx 4",
          "explanation": "Rounding gives \\( 312 \\to 300 \\) and \\( 4.1 \\to 4 \\), chosen so the division is exact."
        },
        {
          "stepNumber": 2,
          "description": "Divide distance by time.",
          "workingLatex": "\\frac{300}{4} = 75",
          "explanation": "Average speed equals distance divided by time, so \\( 300 \\div 4 = 75 \\) km/h."
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
          "workingLatex": "78.4 \\approx 80, \\quad 41.6 \\approx 40",
          "explanation": "Rounding gives \\( 78.4 \\to 80 \\) and \\( 41.6 \\to 40 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply length by width.",
          "workingLatex": "80 \\cdot 40 = 3200",
          "explanation": "Area of a rectangle is length times width: \\( 8 \\cdot 4 = 32 \\), then attach two zeros to get \\( 3200 \\) square metres."
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
          "workingLatex": "0.61 \\approx 0.6, \\quad 0.39 \\approx 0.4, \\quad 0.018 \\approx 0.02",
          "explanation": "Rounding gives \\( 0.61 \\to 0.6 \\), \\( 0.39 \\to 0.4 \\) and \\( 0.018 \\to 0.02 \\). For \\( 0.018 \\) the first significant figure is the \\( 1 \\), and the \\( 8 \\) rounds it up to \\( 0.02 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.6 \\cdot 0.4 = 0.24",
          "explanation": "Multiply the top: \\( 6 \\cdot 4 = 24 \\), and with two decimal places this gives \\( 0.24 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{0.24}{0.02} = 12",
          "explanation": "Dividing two decimals: \\( 0.24 \\div 0.02 \\) is the same as \\( 24 \\div 2 = 12 \\) after scaling both up by \\( 100 \\)."
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
          "description": "Convert to pence and round to 1 s.f.",
          "workingLatex": "\\pounds 61.20 = 6120\\,\\mathrm{p} \\approx 6000\\,\\mathrm{p}, \\quad 287 \\approx 300",
          "explanation": "The answer is wanted in pence, so first convert \\( \\pounds 61.20 \\) to \\( 6120 \\) pence, which rounds to \\( 6000 \\); and \\( 287 \\) pens rounds to \\( 300 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide total cost by number of pens.",
          "workingLatex": "\\frac{6000}{300} = 20",
          "explanation": "Cost per pen is the total divided by the count: \\( 6000 \\div 300 = 20 \\) pence."
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
          "workingLatex": "5.8 \\approx 6, \\quad 0.072 \\approx 0.07, \\quad 0.39 \\approx 0.4",
          "explanation": "Rounding gives \\( 5.8 \\to 6 \\), \\( 0.072 \\to 0.07 \\) and \\( 0.39 \\to 0.4 \\). For \\( 0.072 \\) the first significant figure is the \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "6 \\cdot 0.07 = 0.42",
          "explanation": "Multiply the top: \\( 6 \\cdot 7 = 42 \\), and with the decimal place this is \\( 0.42 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{0.42}{0.4} = 1.05",
          "explanation": "Scaling both by \\( 10 \\) gives \\( 4.2 \\div 4 = 1.05 \\). As an estimate this is roughly \\( 1 \\)."
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
          "workingLatex": "0.88 \\approx 0.9, \\quad 0.31 \\approx 0.3",
          "explanation": "Rounding gives \\( 0.88 \\to 0.9 \\) and \\( 0.31 \\to 0.3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the numerator.",
          "workingLatex": "0.9^{2} = 0.81",
          "explanation": "Squaring \\( 0.9 \\): since \\( 9^{2} = 81 \\), with two decimal places this is \\( 0.81 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{0.81}{0.3} = 2.7",
          "explanation": "Scaling by \\( 10 \\) gives \\( 8.1 \\div 3 = 2.7 \\)."
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
          "workingLatex": "4180 \\approx 4000, \\quad 19.6 \\approx 20",
          "explanation": "Rounding gives \\( 4180 \\to 4000 \\) and \\( 19.6 \\to 20 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide volume by the rate.",
          "workingLatex": "\\frac{4000}{20} = 200",
          "explanation": "Time equals total volume divided by the rate per minute: \\( 4000 \\div 20 = 200 \\) minutes."
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
          "workingLatex": "41.7 \\approx 40, \\quad 18.2 \\approx 20, \\quad 0.29 \\approx 0.3",
          "explanation": "Rounding gives \\( 41.7 \\to 40 \\), \\( 18.2 \\to 20 \\) and \\( 0.29 \\to 0.3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "40 + 20 = 60",
          "explanation": "Add the top of the fraction first: \\( 40 + 20 = 60 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{60}{0.3} = 200",
          "explanation": "Scaling both by \\( 10 \\) gives \\( 600 \\div 3 = 200 \\)."
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
          "workingLatex": "6.7 \\approx 7, \\quad 38 \\approx 40, \\quad 0.21 \\approx 0.2",
          "explanation": "Rounding each value to one significant figure gives \\( 7 \\), \\( 40 \\) and \\( 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "7 \\cdot 40 = 280",
          "explanation": "Handle the top of the fraction first: \\( 7 \\cdot 40 = 280 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{280}{0.2} = 1400",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 280 \\cdot 5 = 1400 \\)."
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
          "workingLatex": "0.62 \\approx 0.6, \\quad 78 \\approx 80, \\quad 0.39 \\approx 0.4",
          "explanation": "Each value is rounded to one significant figure: \\( 0.62 \\to 0.6 \\), \\( 78 \\to 80 \\) and \\( 0.39 \\to 0.4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.6 \\cdot 80 = 48",
          "explanation": "Multiply the top: \\( 6 \\cdot 80 = 480 \\), then divide by \\( 10 \\) to get \\( 48 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{48}{0.4} = 120",
          "explanation": "Scaling both by \\( 10 \\) gives \\( 480 \\div 4 = 120 \\)."
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
          "workingLatex": "82 \\approx 80, \\quad 4.9 \\approx 5, \\quad 0.18 \\approx 0.2",
          "explanation": "Rounding each value to one significant figure gives \\( 80 \\), \\( 5 \\) and \\( 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "80 \\cdot 5 = 400",
          "explanation": "Multiply the top first: \\( 80 \\cdot 5 = 400 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{400}{0.2} = 2000",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 400 \\cdot 5 = 2000 \\)."
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
          "workingLatex": "31 \\approx 30, \\quad 0.48 \\approx 0.5",
          "explanation": "Each value is rounded to one significant figure: \\( 31 \\to 30 \\) and \\( 0.48 \\to 0.5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the numerator.",
          "workingLatex": "30^{2} = 900",
          "explanation": "Deal with the power first: \\( 30^{2} = 900 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{900}{0.5} = 1800",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\), so \\( 900 \\cdot 2 = 1800 \\)."
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
          "workingLatex": "9.6 \\approx 10, \\quad 4.3 \\approx 4",
          "explanation": "Each value inside the root is rounded to one significant figure: \\( 9.6 \\to 10 \\) and \\( 4.3 \\to 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply inside the root.",
          "workingLatex": "\\sqrt{10 \\cdot 4} = \\sqrt{40}",
          "explanation": "Evaluate the product under the root first: \\( 10 \\cdot 4 = 40 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the square root.",
          "workingLatex": "\\sqrt{40} \\approx \\sqrt{36} = 6",
          "explanation": "There is no perfect square equal to \\( 40 \\), but the nearest is \\( 36 = 6^{2} \\), so \\( \\sqrt{40} \\approx 6 \\)."
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
          "workingLatex": "58 \\approx 60, \\quad 41 \\approx 40",
          "explanation": "Each measurement is rounded to one significant figure: \\( 58 \\to 60 \\) and \\( 41 \\to 40 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply length by width.",
          "workingLatex": "60 \\cdot 40 = 2400",
          "explanation": "Area of a rectangle is length times width: \\( 6 \\cdot 4 = 24 \\), then attach two zeros to get \\( 2400 \\) square metres."
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
          "workingLatex": "312 \\approx 300, \\quad 3.8 \\approx 4",
          "explanation": "Distance and time are each rounded to one significant figure: \\( 312 \\to 300 \\) and \\( 3.8 \\to 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide distance by time.",
          "workingLatex": "\\frac{300}{4} = 75",
          "explanation": "Speed equals distance divided by time, so \\( 300 \\div 4 = 75 \\) km/h."
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
          "workingLatex": "19 \\approx 20, \\quad 412 \\approx 400",
          "explanation": "Both numbers are rounded to one significant figure: \\( 19 \\to 20 \\) and \\( 412 \\to 400 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide total cost by number of books.",
          "workingLatex": "\\frac{400}{20} = 20",
          "explanation": "Cost per book is the total divided by the count: \\( 400 \\div 20 = 20 \\), so about \\( \\pounds 20 \\) each."
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
          "workingLatex": "4.9 \\approx 5, \\quad 6.1 \\approx 6, \\quad 0.52 \\approx 0.5",
          "explanation": "Each value is rounded to one significant figure: \\( 4.9 \\to 5 \\), \\( 6.1 \\to 6 \\) and \\( 0.52 \\to 0.5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "5 + 6 = 11",
          "explanation": "Add the top of the fraction first: \\( 5 + 6 = 11 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{11}{0.5} = 22",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\), so \\( 11 \\cdot 2 = 22 \\)."
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
          "workingLatex": "0.79 \\approx 0.8, \\quad 6.2 \\approx 6",
          "explanation": "Each value is rounded to one significant figure: \\( 0.79 \\to 0.8 \\) and \\( 6.2 \\to 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the second factor.",
          "workingLatex": "6^{2} = 36",
          "explanation": "Following the order of operations, deal with the power before multiplying: \\( 6^{2} = 36 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Multiply.",
          "workingLatex": "0.8 \\cdot 36 = 28.8",
          "explanation": "Multiply the remaining factors: \\( 8 \\cdot 36 = 288 \\), then divide by \\( 10 \\) to get \\( 28.8 \\)."
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
          "workingLatex": "0.071 \\approx 0.07, \\quad 412 \\approx 400, \\quad 1.9 \\approx 2",
          "explanation": "Each value is rounded to one significant figure: \\( 0.071 \\to 0.07 \\), \\( 412 \\to 400 \\) and \\( 1.9 \\to 2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "0.07 \\cdot 400 = 28",
          "explanation": "Multiply the top: \\( 7 \\cdot 400 = 2800 \\), then divide by \\( 100 \\) (since \\( 0.07 \\) is seven hundredths) to get \\( 28 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{28}{2} = 14",
          "explanation": "Now divide by the rounded denominator: \\( 28 \\div 2 = 14 \\)."
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
          "explanation": "Rounding to one significant figure: \\( 312 \\to 300 \\) (rounded down) and \\( 178 \\to 200 \\) (rounded up)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "300 \\cdot 200 = 60000\\,\\mathrm{m^2}",
          "explanation": "Area of a rectangle is length times width, so the estimated area is \\( 300 \\cdot 200 = 60000 \\) square metres."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the number of bags.",
          "workingLatex": "\\frac{60000}{50} = 1200",
          "explanation": "Each bag covers \\( 50\\,\\mathrm{m^2} \\), so divide the area by \\( 50 \\): \\( 60000 \\div 50 = 1200 \\) bags."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true area.",
          "workingLatex": "312 \\cdot 178 = 55536 < 60000",
          "explanation": "One length was rounded down and one up, so the direction is not obvious from the rounding alone. Comparing directly, the estimated area \\( 60000 \\) exceeds the true area \\( 55536 \\), so this is an over-estimate."
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
          "description": "Round each value to 1 s.f.",
          "workingLatex": "287 \\approx 300, \\quad 4.1 \\approx 4",
          "explanation": "Rounding each value to one significant figure: \\( 287 \\to 300 \\) (rounded up) and \\( 4.1 \\to 4 \\) (rounded down)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{300}{4} = 75\\,\\mathrm{km/h}",
          "explanation": "Speed equals distance divided by time, so the estimate is \\( 300 \\div 4 = 75 \\) km/h."
        },
        {
          "stepNumber": 3,
          "description": "Decide larger or smaller.",
          "workingLatex": "\\frac{287}{4.1} \\approx 70 < 75",
          "explanation": "The numerator was increased and the denominator decreased, and both changes push a fraction upward. So the estimate \\( 75 \\) is larger than the true value of about \\( 70 \\)."
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
          "description": "Round each value to 1 s.f.",
          "workingLatex": "4180 \\approx 4000, \\quad 521 \\approx 500",
          "explanation": "Rounding each value to one significant figure: \\( 4180 \\to 4000 \\) and \\( 521 \\to 500 \\), both rounded down."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the density.",
          "workingLatex": "\\frac{4000}{500} = 8\\,\\mathrm{g/cm^3}",
          "explanation": "Density is mass divided by volume, so the estimate is \\( 4000 \\div 500 = 8 \\) g/cm³."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the true value.",
          "workingLatex": "\\frac{4180}{521} \\approx 8.02 > 8",
          "explanation": "Both numerator and denominator were rounded down, so the rule of thumb does not settle the direction. Computing directly, the true value \\( 8.02 \\) is just above the estimate \\( 8 \\), so the estimate is a slight under-estimate."
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
          "description": "Round each value to 1 s.f.",
          "workingLatex": "38.75 \\approx 40, \\quad 196 \\approx 200",
          "explanation": "Rounding each value to one significant figure: \\( 38.75 \\to 40 \\) and \\( 196 \\to 200 \\), both rounded up."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the cost.",
          "workingLatex": "40 \\cdot 200 = 8000",
          "explanation": "The total cost is price times quantity, so the estimate is \\( 40 \\cdot 200 = 8000 \\) pounds."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the true value.",
          "workingLatex": "38.75 \\cdot 196 = 7595 < 8000",
          "explanation": "Both factors were rounded up, so the estimate must exceed the true cost. The true value \\( \\pounds 7595 \\) is below \\( \\pounds 8000 \\), so this is in fact an over-estimate, not an under-estimate as the question suggests."
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
          "explanation": "The radius \\( 5.8 \\) rounds up to \\( 6 \\) to one significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Square the rounded radius.",
          "workingLatex": "6^{2} = 36",
          "explanation": "The area formula \\( A = \\pi r^{2} \\) needs \\( r^{2} \\) first, so square the radius: \\( 6^{2} = 36 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the area with \\( \\pi \\approx 3 \\).",
          "workingLatex": "3 \\cdot 36 = 108\\,\\mathrm{m^2}",
          "explanation": "Using \\( \\pi \\approx 3 \\) gives \\( A \\approx 3 \\cdot 36 = 108 \\) square metres."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "\\pi \\cdot 5.8^{2} \\approx 105.7 < 108",
          "explanation": "Although \\( \\pi \\approx 3 \\) lowers the multiplier, rounding the radius up from \\( 5.8 \\) to \\( 6 \\) raises \\( r^{2} \\) more, so overall the estimate \\( 108 \\) slightly exceeds the true value \\( 105.7 \\): an over-estimate."
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
          "description": "Round each value to 1 s.f.",
          "workingLatex": "4920 \\approx 5000, \\quad 312 \\approx 300",
          "explanation": "Rounding each value to one significant figure: \\( 4920 \\to 5000 \\) (up) and \\( 312 \\to 300 \\) (down)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the annual total.",
          "workingLatex": "5000 \\cdot 300 = 1500000",
          "explanation": "Annual production is items per day times days per year: \\( 5000 \\cdot 300 = 1\\,500\\,000 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the true value.",
          "workingLatex": "4920 \\cdot 312 = 1535040 > 1500000",
          "explanation": "One factor rounded up and one down, so we compare directly. The true total \\( 1\\,535\\,040 \\) is larger than the estimate, so the estimate is smaller than the true total."
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
          "explanation": "Rounding each value to one significant figure: \\( 6.1 \\to 6 \\) (down), \\( 48 \\to 50 \\) (up) and \\( 0.21 \\to 0.2 \\) (down)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "6^{2} \\cdot 50 = 36 \\cdot 50 = 1800",
          "explanation": "Deal with the power first, then multiply: \\( 6^{2} = 36 \\) and \\( 36 \\cdot 50 = 1800 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{1800}{0.2} = 9000",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 1800 \\cdot 5 = 9000 \\)."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the calculator value.",
          "workingLatex": "\\frac{6.1^{2} \\cdot 48}{0.21} \\approx 8505 < 9000",
          "explanation": "The numerator factor \\( 48 \\) rounded up and the denominator \\( 0.21 \\) rounded down, both inflating the result. So the estimate \\( 9000 \\) over-estimates the true value of about \\( 8505 \\)."
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
          "explanation": "Rounding each value to one significant figure: \\( 1.9 \\to 2 \\) (up), \\( 0.78 \\to 0.8 \\) (up) and \\( 1.1 \\to 1 \\) (down)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the volume.",
          "workingLatex": "2 \\cdot 0.8 \\cdot 1 = 1.6\\,\\mathrm{m^3}",
          "explanation": "Volume of a cuboid is the product of its three dimensions: \\( 2 \\cdot 0.8 = 1.6 \\), then \\( 1.6 \\cdot 1 = 1.6 \\) cubic metres."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the true value.",
          "workingLatex": "1.9 \\cdot 0.78 \\cdot 1.1 \\approx 1.63 > 1.6",
          "explanation": "Two lengths rounded up and one down, so the direction is not obvious. Computing directly, the true volume \\( 1.63 \\) is just above the estimate \\( 1.6 \\), making it a slight under-estimate."
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
          "description": "Round each value to 1 s.f.",
          "workingLatex": "52 \\approx 50, \\quad 18.90 \\approx 20",
          "explanation": "Rounding each value to one significant figure: \\( 52 \\to 50 \\) (down) and \\( 18.90 \\to 20 \\) (up)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the takings.",
          "workingLatex": "50 \\cdot 20 = 1000",
          "explanation": "Total takings is passengers times price: \\( 50 \\cdot 20 = 1000 \\) pounds."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the true value.",
          "workingLatex": "52 \\cdot 18.90 = 982.80 < 1000",
          "explanation": "The price was rounded up by relatively more than the count was rounded down, so the estimate exceeds the true value. The true takings \\( \\pounds 982.80 \\) are less than the estimate \\( \\pounds 1000 \\)."
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
          "explanation": "Rather than blindly using 1 s.f., choose \\( 401 \\to 400 \\) because \\( 400 \\) is a perfect square, making the root exact. Then \\( 7.8 \\to 8 \\) and \\( 0.49 \\to 0.5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "\\sqrt{400} + 8 = 20 + 8 = 28",
          "explanation": "Take the square root first: \\( \\sqrt{400} = 20 \\), then add \\( 8 \\) to get \\( 28 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{28}{0.5} = 56",
          "explanation": "Dividing by \\( 0.5 \\) is the same as multiplying by \\( 2 \\), so \\( 28 \\cdot 2 = 56 \\)."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the calculator value.",
          "workingLatex": "\\frac{\\sqrt{401} + 7.8}{0.49} \\approx 56.8 > 56",
          "explanation": "Each rounding only nudged the value slightly, but overall the true value \\( 56.8 \\) is just above the estimate \\( 56 \\), so the estimate is a slight under-estimate."
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
          "explanation": "Rounding each value to one significant figure: \\( 4.2 \\to 4 \\), \\( 2.8 \\to 3 \\) and the coverage \\( 11 \\to 10 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area for two coats.",
          "workingLatex": "2 \\cdot (4 \\cdot 3) = 2 \\cdot 12 = 24\\,\\mathrm{m^2}",
          "explanation": "One coat covers the wall area \\( 4 \\cdot 3 = 12\\,\\mathrm{m^2} \\); two coats double this to \\( 24\\,\\mathrm{m^2} \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the litres needed.",
          "workingLatex": "\\frac{24}{10} = 2.4\\,\\mathrm{litres}",
          "explanation": "Each litre covers \\( 10\\,\\mathrm{m^2} \\), so divide the total area by \\( 10 \\): \\( 24 \\div 10 = 2.4 \\) litres."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "\\frac{2 \\cdot (4.2 \\cdot 2.8)}{11} \\approx 2.14 < 2.4",
          "explanation": "Rounding the coverage down from \\( 11 \\) to \\( 10 \\) inflates the litres needed, so the estimate \\( 2.4 \\) over-estimates the true requirement of about \\( 2.14 \\) litres."
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
          "description": "Convert the time to hours.",
          "workingLatex": "118\\,\\mathrm{min} = \\frac{118}{60}\\,\\mathrm{h} \\approx 2\\,\\mathrm{h}",
          "explanation": "Speed in km/h needs the time in hours. \\( 118 \\) minutes is just under \\( 2 \\) hours, so it rounds to \\( 2\\,\\mathrm{h} \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round the distance to 1 s.f.",
          "workingLatex": "21 \\approx 20",
          "explanation": "The distance \\( 21\\,\\mathrm{km} \\) rounds down to \\( 20\\,\\mathrm{km} \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{20}{2} = 10\\,\\mathrm{km/h}",
          "explanation": "Speed equals distance divided by time: \\( 20 \\div 2 = 10 \\) km/h."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "\\frac{21 \\cdot 60}{118} \\approx 10.7 > 10",
          "explanation": "The distance was rounded down and the time rounded up, and both changes lower the speed. So the estimate \\( 10 \\) is below the true value \\( 10.7 \\): an under-estimate."
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
          "explanation": "Rounding to one significant figure: \\( 312 \\to 300 \\) (down), \\( 197 \\to 200 \\) (up) and the price \\( 0.082 \\to 0.08 \\) (down)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area.",
          "workingLatex": "300 \\cdot 200 = 60000\\,\\mathrm{m^2}",
          "explanation": "Area of the field is length times width: \\( 300 \\cdot 200 = 60000 \\) square metres."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the cost.",
          "workingLatex": "60000 \\cdot 0.08 = 4800",
          "explanation": "Cost is area times price per square metre: \\( 60000 \\cdot 0.08 = 4800 \\) pounds."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "312 \\cdot 197 \\cdot 0.082 \\approx 5040 > 4800",
          "explanation": "Two of the three factors (the length and the price) were rounded down, so the estimate is below the true cost. The true value is about \\( \\pounds 5040 \\), so this is an under-estimate."
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
          "description": "Round the distance and time.",
          "workingLatex": "408 \\approx 400, \\quad 4\\,\\text{h}\\,52\\,\\text{min} \\approx 5\\,\\text{h}",
          "explanation": "The distance \\( 408 \\) rounds down to \\( 400 \\). The time \\( 4 \\) hours \\( 52 \\) minutes is nearly \\( 5 \\) hours, so it rounds up to \\( 5\\,\\text{h} \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the speed.",
          "workingLatex": "\\frac{400}{5} = 80",
          "explanation": "Speed equals distance divided by time: \\( 400 \\div 5 = 80 \\) km/h."
        },
        {
          "stepNumber": 3,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "\\text{numerator} \\downarrow,\\quad \\text{denominator} \\uparrow",
          "explanation": "Rounding the distance down and the time up both reduce the value of the fraction, so the estimate \\( 80 \\) is below the true speed: an under-estimate."
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
          "explanation": "Both quantities are rounded to one significant figure: \\( 588 \\to 600 \\) and \\( 31 \\to 30 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the density.",
          "workingLatex": "\\frac{600}{30} = 20",
          "explanation": "Density is mass divided by volume: \\( 600 \\div 30 = 20 \\) g/cm³."
        },
        {
          "stepNumber": 3,
          "description": "Compare with the calculator value.",
          "workingLatex": "20 - 18.97 = 1.03",
          "explanation": "The estimate \\( 20 \\) differs from the exact value \\( 18.97 \\) by only about \\( 1 \\), so it is a close and reasonable approximation."
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
          "explanation": "The number of pupils and seats are rounded to one significant figure: \\( 287 \\to 300 \\) and \\( 48 \\to 50 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the number of coaches.",
          "workingLatex": "\\frac{300}{50} = 6",
          "explanation": "Divide pupils by seats per coach: \\( 300 \\div 50 = 6 \\) coaches as a first estimate."
        },
        {
          "stepNumber": 3,
          "description": "Interpret the exact division.",
          "workingLatex": "\\frac{287}{48} = 5.97\\ldots \\;\\Rightarrow\\; 6\\;\\text{coaches}",
          "explanation": "The exact division gives \\( 5.97\\ldots \\) coaches. We cannot run a fraction of a coach, and any leftover pupils still need transport, so we must round up to \\( 6 \\) rather than to the nearest whole number."
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
          "description": "Round each value suitably.",
          "workingLatex": "96.4 \\approx 100, \\quad 7.8 \\approx 8, \\quad 0.213 \\approx 0.2",
          "explanation": "Choose \\( 96.4 \\to 100 \\) because \\( 100 \\) is a perfect square, making the root exact; then \\( 7.8 \\to 8 \\) and \\( 0.213 \\to 0.2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Work out the numerator.",
          "workingLatex": "\\sqrt{100} \\cdot 8 = 10 \\cdot 8 = 80",
          "explanation": "Take the root first: \\( \\sqrt{100} = 10 \\), then multiply by \\( 8 \\) to get \\( 80 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide by the denominator.",
          "workingLatex": "\\frac{80}{0.2} = 400",
          "explanation": "Dividing by \\( 0.2 \\) is the same as multiplying by \\( 5 \\), so \\( 80 \\cdot 5 = 400 \\)."
        },
        {
          "stepNumber": 4,
          "description": "Decide the direction.",
          "workingLatex": "\\sqrt{96.4} \\approx 9.82,\\; 0.213 > 0.2 \\Rightarrow \\text{estimate too big}",
          "explanation": "The root was rounded up (\\( 9.82 \\to 10 \\)) and the denominator rounded down (\\( 0.213 \\to 0.2 \\)), both inflating the estimate. So the true value (about \\( 360 \\)) is a little smaller than \\( 400 \\)."
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
          "explanation": "Rounding to one significant figure: \\( 5.7 \\to 6 \\) (up), \\( 2.9 \\to 3 \\) (up) and the coverage \\( 11 \\to 10 \\) (down)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the area for two coats.",
          "workingLatex": "6 \\cdot 3 \\cdot 2 = 36\\,\\mathrm{m^2}",
          "explanation": "One coat covers \\( 6 \\cdot 3 = 18\\,\\mathrm{m^2} \\); two coats double this to \\( 36\\,\\mathrm{m^2} \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the litres needed.",
          "workingLatex": "\\frac{36}{10} = 3.6 \\approx 4\\;\\text{litres}",
          "explanation": "Divide the area by the coverage: \\( 36 \\div 10 = 3.6 \\). Since paint is sold in whole litres, round up to \\( 4 \\) litres."
        },
        {
          "stepNumber": 4,
          "description": "Decide over- or under-estimate.",
          "workingLatex": "5.7 \\uparrow,\\; 2.9 \\uparrow,\\; 11 \\downarrow",
          "explanation": "Both dimensions were rounded up and the coverage rounded down, all of which inflate the litres required. So the estimated area, and hence the paint needed, is an over-estimate."
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
          "explanation": "The radius \\( 3.8 \\) rounds up to \\( 4 \\) to one significant figure, and \\( \\pi \\) is approximated as \\( 3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the rounded radius.",
          "workingLatex": "4^{2} = 16",
          "explanation": "The area formula \\( A = \\pi r^{2} \\) needs \\( r^{2} \\) first: \\( 4^{2} = 16 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the area with \\( \\pi \\approx 3 \\).",
          "workingLatex": "3 \\cdot 16 = 48\\,\\mathrm{m^2}",
          "explanation": "Using \\( \\pi \\approx 3 \\) gives \\( A \\approx 3 \\cdot 16 = 48 \\) square metres."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true area.",
          "workingLatex": "\\pi \\cdot 3.8^{2} \\approx 3.14 \\cdot 14.44 \\approx 45.4 < 48",
          "explanation": "The question expects an under-estimate from using \\( 3 < \\pi \\), but rounding the radius up from \\( 3.8 \\) to \\( 4 \\) raises \\( r^{2} \\) by more, and that effect dominates. Computing directly, the true area \\( 45.4 \\) is below the estimate \\( 48 \\), so it is actually an over-estimate."
        }
      ],
      "finalAnswer": "\\( 48\\,\\mathrm{m^2} \\); in fact an over-estimate, because rounding the radius up to \\( 4 \\) outweighs using \\( \\pi \\approx 3 \\).",
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
          "explanation": "Rounding to one significant figure: \\( 38 \\to 40 \\) (up), \\( 52 \\to 50 \\) (down) and \\( 19.50 \\to 20 \\) (up)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the total seats.",
          "workingLatex": "40 \\cdot 50 = 2000",
          "explanation": "Total seats is rows times seats per row: \\( 40 \\cdot 50 = 2000 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the revenue.",
          "workingLatex": "2000 \\cdot 20 = 40000",
          "explanation": "Revenue is total seats times ticket price: \\( 2000 \\cdot 20 = 40000 \\) pounds."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "38 \\cdot 52 \\cdot 19.50 = 38532 < 40000",
          "explanation": "Two factors were rounded up and only one down, pushing the estimate above the truth. The true revenue \\( \\pounds 38532 \\) does not exceed the estimate \\( \\pounds 40000 \\)."
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
          "explanation": "Each dimension is rounded to one significant figure: \\( 1.9 \\to 2 \\), \\( 0.78 \\to 0.8 \\) and \\( 1.1 \\to 1 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the volume.",
          "workingLatex": "2 \\cdot 0.8 \\cdot 1 = 1.6\\,\\mathrm{m^3}",
          "explanation": "Volume of a cuboid is the product of its three dimensions: \\( 2 \\cdot 0.8 \\cdot 1 = 1.6 \\) cubic metres."
        },
        {
          "stepNumber": 3,
          "description": "Convert to litres.",
          "workingLatex": "1.6 \\cdot 1000 = 1600",
          "explanation": "Since \\( 1\\,\\mathrm{m^3} = 1000 \\) litres, multiply the volume by \\( 1000 \\): \\( 1.6 \\cdot 1000 = 1600 \\) litres."
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
          "explanation": "Round the mantissas to one significant figure: \\( 2.1 \\to 2 \\) (down) and \\( 4.8 \\to 5 \\) (up). The powers of ten stay exact."
        },
        {
          "stepNumber": 2,
          "description": "Divide the numbers and the powers.",
          "workingLatex": "\\frac{2 \\times 10^{5}}{5 \\times 10^{2}} = 0.4 \\times 10^{3}",
          "explanation": "Divide the mantissas \\( 2 \\div 5 = 0.4 \\), and subtract the indices \\( 10^{5} \\div 10^{2} = 10^{3} \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write in standard form.",
          "workingLatex": "0.4 \\times 10^{3} = 4 \\times 10^{2}",
          "explanation": "Standard form needs the leading number between \\( 1 \\) and \\( 10 \\). Rewrite \\( 0.4 \\times 10^{3} \\) as \\( 4 \\times 10^{2} \\)."
        },
        {
          "stepNumber": 4,
          "description": "Decide the direction.",
          "workingLatex": "2.1 \\downarrow,\\; 4.8 \\uparrow \\Rightarrow \\text{estimate too small}",
          "explanation": "The numerator was rounded down and the denominator up, both of which shrink the fraction. So the estimate \\( 4 \\times 10^{2} \\) is below the calculator value of about \\( 4.4 \\times 10^{2} \\)."
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
          "explanation": "Rounding to one significant figure: \\( 9.7 \\to 10 \\) (up), \\( 62 \\to 60 \\) (down) and \\( 29 \\to 30 \\) (up)."
        },
        {
          "stepNumber": 2,
          "description": "Estimate the calories per day.",
          "workingLatex": "10 \\cdot 60 = 600",
          "explanation": "Calories per day is distance times calories per kilometre: \\( 10 \\cdot 60 = 600 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Estimate the total over all days.",
          "workingLatex": "600 \\cdot 30 = 18000",
          "explanation": "Multiply the daily figure by the number of days: \\( 600 \\cdot 30 = 18000 \\) calories."
        },
        {
          "stepNumber": 4,
          "description": "Compare with the true value.",
          "workingLatex": "9.7 \\cdot 62 \\cdot 29 \\approx 17441 < 18000",
          "explanation": "Two factors were rounded up and only one down, so the estimate sits above the truth. The true total is about \\( 17441 \\) calories, below the estimate, so this is an over-estimate."
        }
      ],
      "finalAnswer": "\\( 18000 \\) calories; an over-estimate (two factors rounded up, one down).",
      "canonicalAnswer": "18000"
    }
  }
];
