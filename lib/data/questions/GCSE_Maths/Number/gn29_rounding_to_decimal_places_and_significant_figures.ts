import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Topic gn29: Rounding to decimal places and significant figures (DfE ref N15)
 *
 * 70 questions — 24 Foundation, 23 Standard, 23 Challenge.
 */

export const questions: Question[] = [
  {
    "id": "gn29-001",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 6471 \\) to the nearest hundred.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest hundred"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the tens digit to decide.",
          "workingLatex": "6471 \\to \\text{tens digit} = 7",
          "explanation": "The digit in the tens column decides whether we round up or down."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 7 \\ge 5 \\), round the hundreds up.",
          "workingLatex": "6471 \\approx 6500",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6500 \\)",
      "canonicalAnswer": "6500"
    }
  },
  {
    "id": "gn29-002",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 8.27 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "8.2\\,\\underline{7}",
          "explanation": "The hundredths digit decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 7 \\ge 5 \\), round the tenths up.",
          "workingLatex": "8.27 \\approx 8.3",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8.3 \\)",
      "canonicalAnswer": "8.3"
    }
  },
  {
    "id": "gn29-003",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.0638 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.0\\underline{6}38",
          "explanation": "The first non-zero digit is the first significant figure."
        },
        {
          "stepNumber": 2,
          "description": "The next digit is \\( 3 \\), so round down.",
          "workingLatex": "0.0638 \\approx 0.06",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.06 \\)",
      "canonicalAnswer": "0.06"
    }
  },
  {
    "id": "gn29-004",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 34\\,950 \\) to the nearest thousand.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest thousand"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the hundreds digit.",
          "workingLatex": "34\\,\\underline{9}50 \\to \\text{hundreds digit} = 9",
          "explanation": "The hundreds column decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 9 \\ge 5 \\), round the thousands up.",
          "workingLatex": "34\\,950 \\approx 35\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 35\\,000 \\)",
      "canonicalAnswer": "35000"
    }
  },
  {
    "id": "gn29-005",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Write down \\( 19.6 \\) rounded to the nearest whole number.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest whole"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the first decimal digit.",
          "workingLatex": "19.\\underline{6}",
          "explanation": "The tenths digit decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 6 \\ge 5 \\), round up.",
          "workingLatex": "19.6 \\approx 20",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 20 \\)",
      "canonicalAnswer": "20"
    }
  },
  {
    "id": "gn29-006",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 482 \\) to the nearest ten.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest ten"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the units digit.",
          "workingLatex": "48\\underline{2} \\to \\text{units digit} = 2",
          "explanation": "The units column decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 2 < 5 \\), round down.",
          "workingLatex": "482 \\approx 480",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 480 \\)",
      "canonicalAnswer": "480"
    }
  },
  {
    "id": "gn29-007",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 7.952 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "7.9\\,\\underline{5}2",
          "explanation": "The hundredths digit decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 5 \\ge 5 \\), round the tenths up, which carries.",
          "workingLatex": "7.952 \\approx 8.0",
          "explanation": "Rounding \\( 7.9 \\) up gives \\( 8.0 \\)."
        }
      ],
      "finalAnswer": "\\( 8.0 \\)",
      "canonicalAnswer": "8.0"
    }
  },
  {
    "id": "gn29-008",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 5283 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "\\underline{5}283",
          "explanation": "The first significant figure is the thousands digit."
        },
        {
          "stepNumber": 2,
          "description": "The next digit is \\( 2 \\), so round down and fill with zeros.",
          "workingLatex": "5283 \\approx 5000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 5000 \\)",
      "canonicalAnswer": "5000"
    }
  },
  {
    "id": "gn29-009",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.349 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "0.3\\,\\underline{4}9",
          "explanation": "The hundredths digit decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 4 < 5 \\), round down.",
          "workingLatex": "0.349 \\approx 0.3",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.3 \\)",
      "canonicalAnswer": "0.3"
    }
  },
  {
    "id": "gn29-010",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A village has a population of \\( 2649 \\) people. Round this to the nearest hundred.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest hundred"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the tens digit.",
          "workingLatex": "26\\underline{4}9 \\to \\text{tens digit} = 4",
          "explanation": "The tens column decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 4 < 5 \\), round down.",
          "workingLatex": "2649 \\approx 2600",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 2600 \\)",
      "canonicalAnswer": "2600"
    }
  },
  {
    "id": "gn29-011",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.6 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.\\underline{6}",
          "explanation": "The first non-zero digit is the first significant figure; there is no following digit, so the value is already to 1 s.f."
        },
        {
          "stepNumber": 2,
          "description": "State the result.",
          "workingLatex": "0.6 \\approx 0.6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.6 \\)",
      "canonicalAnswer": "0.6"
    }
  },
  {
    "id": "gn29-012",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 96 \\) to the nearest ten.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest ten"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the units digit.",
          "workingLatex": "9\\underline{6} \\to \\text{units digit} = 6",
          "explanation": "The units column decides the rounding."
        },
        {
          "stepNumber": 2,
          "description": "Since \\( 6 \\ge 5 \\), round up, which carries.",
          "workingLatex": "96 \\approx 100",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 100 \\)",
      "canonicalAnswer": "100"
    }
  },
  {
    "id": "gn29-013",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 8473 \\) to the nearest hundred.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest hundred"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the tens digit.",
          "workingLatex": "8473",
          "explanation": "The tens digit is \\( 7 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round up the hundreds.",
          "workingLatex": "8473 \\rightarrow 8500",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8500 \\)",
      "canonicalAnswer": "8500"
    }
  },
  {
    "id": "gn29-014",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 6.149 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "6.149",
          "explanation": "The second decimal is \\( 4 \\), so we round down."
        },
        {
          "stepNumber": 2,
          "description": "Round to 1 d.p.",
          "workingLatex": "6.149 \\rightarrow 6.1",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6.1 \\)",
      "canonicalAnswer": "6.1"
    }
  },
  {
    "id": "gn29-015",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 27\\,481 \\) to the nearest thousand.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest thousand"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the hundreds digit.",
          "workingLatex": "27481",
          "explanation": "The hundreds digit is \\( 4 \\), so we round down."
        },
        {
          "stepNumber": 2,
          "description": "Round to the nearest thousand.",
          "workingLatex": "27481 \\rightarrow 27000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 27\\,000 \\)",
      "canonicalAnswer": "27000"
    }
  },
  {
    "id": "gn29-016",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.0739 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "0.0739",
          "explanation": "The first significant figure is \\( 7 \\); the next digit is \\( 3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round down.",
          "workingLatex": "0.0739 \\rightarrow 0.07",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.07 \\)",
      "canonicalAnswer": "0.07"
    }
  },
  {
    "id": "gn29-017",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 349 \\) to the nearest ten.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest ten"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the units digit.",
          "workingLatex": "349",
          "explanation": "The units digit is \\( 9 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round to the nearest ten.",
          "workingLatex": "349 \\rightarrow 350",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 350 \\)",
      "canonicalAnswer": "350"
    }
  },
  {
    "id": "gn29-018",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Write down \\( 12.96 \\) rounded to the nearest whole number.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest whole number"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the first decimal digit.",
          "workingLatex": "12.96",
          "explanation": "The first decimal is \\( 9 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round to the nearest whole number.",
          "workingLatex": "12.96 \\rightarrow 13",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 13 \\)",
      "canonicalAnswer": "13"
    }
  },
  {
    "id": "gn29-019",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 5\\,950 \\) to the nearest hundred.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest hundred"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the tens digit.",
          "workingLatex": "5950",
          "explanation": "The tens digit is \\( 5 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round to the nearest hundred.",
          "workingLatex": "5950 \\rightarrow 6000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6000 \\)",
      "canonicalAnswer": "6000"
    }
  },
  {
    "id": "gn29-020",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.853 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "0.853",
          "explanation": "The second decimal is \\( 5 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round to 1 d.p.",
          "workingLatex": "0.853 \\rightarrow 0.9",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.9 \\)",
      "canonicalAnswer": "0.9"
    }
  },
  {
    "id": "gn29-021",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 4628 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "4628",
          "explanation": "The first significant figure is \\( 4 \\) (thousands); the next digit is \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round up.",
          "workingLatex": "4628 \\rightarrow 5000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 5000 \\)",
      "canonicalAnswer": "5000"
    }
  },
  {
    "id": "gn29-022",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A bag of flour has a mass of \\( 2.347\\,\\mathrm{kg} \\). Write this mass correct to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "2.347",
          "explanation": "The second decimal is \\( 4 \\), so we round down."
        },
        {
          "stepNumber": 2,
          "description": "Round to 1 d.p.",
          "workingLatex": "2.347 \\rightarrow 2.3",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 2.3\\,\\mathrm{kg} \\)",
      "canonicalAnswer": "2.3"
    }
  },
  {
    "id": "gn29-023",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 195 \\) to the nearest ten.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "nearest ten"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the units digit.",
          "workingLatex": "195",
          "explanation": "The units digit is \\( 5 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round to the nearest ten.",
          "workingLatex": "195 \\rightarrow 200",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 200 \\)",
      "canonicalAnswer": "200"
    }
  },
  {
    "id": "gn29-024",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Round \\( 0.0486 \\) to \\( 1 \\) significant figure.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "0.0486",
          "explanation": "The first significant figure is \\( 4 \\); the next digit is \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round up.",
          "workingLatex": "0.0486 \\rightarrow 0.05",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.05 \\)",
      "canonicalAnswer": "0.05"
    }
  },
  {
    "id": "gn29-025",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write down \\( 0.04617 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.0\\underline{4}617",
          "explanation": "Leading zeros are not significant, so the first significant figure is the \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "The second significant figure is \\( 6 \\); look at the next digit to decide rounding.",
          "workingLatex": "0.046|17 \\to 0.046",
          "explanation": "The next digit is \\( 1 \\), which is less than \\( 5 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( 0.046 \\)",
      "canonicalAnswer": "0.046"
    }
  },
  {
    "id": "gn29-026",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Round \\( 9.97 \\) correct to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "carrying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "9.9|7",
          "explanation": "The digit after the first decimal place is \\( 7 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Rounding the \\( 9 \\) up carries into the units.",
          "workingLatex": "9.9 + 0.1 = 10.0",
          "explanation": "The \\( 9 \\) becomes \\( 10 \\), so the answer carries to \\( 10.0 \\)."
        }
      ],
      "finalAnswer": "\\( 10.0 \\)",
      "canonicalAnswer": "10.0"
    }
  },
  {
    "id": "gn29-027",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 5.6829 \\) correct to \\( 2 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the third decimal digit.",
          "workingLatex": "5.68|29",
          "explanation": "The digit after the second decimal place is \\( 2 \\), which is less than \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round down, keeping two decimal places.",
          "workingLatex": "5.68",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 5.68 \\)",
      "canonicalAnswer": "5.68"
    }
  },
  {
    "id": "gn29-028",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A calculator displays \\( 0.0083471 \\). Write this number correct to \\( 3 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first three significant figures.",
          "workingLatex": "0.00\\underline{834}71",
          "explanation": "The leading zeros are not significant; the significant figures start at \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.00834|71 \\to 0.00835",
          "explanation": "The next digit is \\( 7 \\), which is \\( 5 \\) or more, so we round up."
        }
      ],
      "finalAnswer": "\\( 0.00835 \\)",
      "canonicalAnswer": "0.00835"
    }
  },
  {
    "id": "gn29-029",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A length is measured as \\( 12.3962\\,\\mathrm{m} \\). Write this length correct to \\( 3 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "carrying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the fourth decimal digit.",
          "workingLatex": "12.396|2",
          "explanation": "The digit after the third decimal place is \\( 2 \\), which is less than \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round down, keeping three decimal places.",
          "workingLatex": "12.396",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12.396\\,\\mathrm{m} \\)",
      "canonicalAnswer": "12.396"
    }
  },
  {
    "id": "gn29-030",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.59963 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "carrying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "0.\\underline{59}963",
          "explanation": "The first two significant figures are \\( 5 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "The next digit is \\( 9 \\), so round up; this carries.",
          "workingLatex": "0.59 + 0.01 = 0.60",
          "explanation": "Rounding \\( 59 \\) up gives \\( 60 \\), so the answer is \\( 0.60 \\)."
        }
      ],
      "finalAnswer": "\\( 0.60 \\)",
      "canonicalAnswer": "0.60"
    }
  },
  {
    "id": "gn29-031",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A shop divides a bill of \\( \\pounds 47 \\) equally between \\( 3 \\) people. Work out each share to the nearest penny.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "money",
      "nearest penny",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the total by \\( 3 \\).",
          "workingLatex": "47 \\div 3 = 15.6666\\ldots",
          "explanation": "Each share is \\( \\pounds 15.6666\\ldots \\)"
        },
        {
          "stepNumber": 2,
          "description": "Round to \\( 2 \\) decimal places for the nearest penny.",
          "workingLatex": "15.66|66 \\to 15.67",
          "explanation": "The third decimal digit is \\( 6 \\), so we round up to the nearest penny."
        }
      ],
      "finalAnswer": "\\( \\pounds 15.67 \\)",
      "canonicalAnswer": "15.67"
    }
  },
  {
    "id": "gn29-032",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.0019874 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "0.00\\underline{19}874",
          "explanation": "The first significant figure is \\( 1 \\), the second is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.0019|874 \\to 0.0020",
          "explanation": "The next digit is \\( 8 \\), so round up; \\( 19 \\) becomes \\( 20 \\)."
        }
      ],
      "finalAnswer": "\\( 0.0020 \\)",
      "canonicalAnswer": "0.0020"
    }
  },
  {
    "id": "gn29-033",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Work out \\( 8 \\div 7 \\) and give your answer correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "decimal division"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Carry out the division.",
          "workingLatex": "8 \\div 7 = 1.142857\\ldots",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Identify the first three significant figures and round.",
          "workingLatex": "1.14|2857 \\to 1.14",
          "explanation": "The fourth significant figure is \\( 2 \\), which is less than \\( 5 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( 1.14 \\)",
      "canonicalAnswer": "1.14"
    }
  },
  {
    "id": "gn29-034",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The price of \\( 1\\,\\mathrm{kg} \\) of apples is \\( \\pounds 1.79 \\). Work out the cost of \\( 2.5\\,\\mathrm{kg} \\), giving your answer to the nearest penny.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "money",
      "nearest penny"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the price per kilogram by the mass.",
          "workingLatex": "1.79 \\cdot 2.5 = 4.475",
          "explanation": "The exact cost is \\( \\pounds 4.475 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round to \\( 2 \\) decimal places for the nearest penny.",
          "workingLatex": "4.47|5 \\to 4.48",
          "explanation": "The third decimal digit is \\( 5 \\), so we round up."
        }
      ],
      "finalAnswer": "\\( \\pounds 4.48 \\)",
      "canonicalAnswer": "4.48"
    }
  },
  {
    "id": "gn29-035",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 14.96 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "carrying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "\\underline{14}.96",
          "explanation": "The first two significant figures are \\( 1 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "The next digit is \\( 9 \\), so round up; this carries.",
          "workingLatex": "14 + 1 = 15",
          "explanation": "Rounding \\( 14 \\) up gives \\( 15 \\)."
        }
      ],
      "finalAnswer": "\\( 15 \\)",
      "canonicalAnswer": "15"
    }
  },
  {
    "id": "gn29-036",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A reaction time is recorded as \\( 0.30752 \\) seconds. Write this correct to \\( 3 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the fourth decimal digit.",
          "workingLatex": "0.307|52",
          "explanation": "The digit after the third decimal place is \\( 5 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round up the third decimal place.",
          "workingLatex": "0.307 \\to 0.308",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.308 \\)",
      "canonicalAnswer": "0.308"
    }
  },
  {
    "id": "gn29-037",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.04617 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "0.0\\underline{4}617",
          "explanation": "Leading zeros do not count, so the first significant figure is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the digit after the second significant figure.",
          "workingLatex": "0.046\\underline{1}7 \\to 0.046",
          "explanation": "The next digit is \\( 1 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( 0.046 \\)",
      "canonicalAnswer": "0.046"
    }
  },
  {
    "id": "gn29-038",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 9.97 \\) correct to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the second decimal digit.",
          "workingLatex": "9.9\\underline{7}",
          "explanation": "The digit is \\( 7 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Rounding up carries through.",
          "workingLatex": "9.97 \\to 10.0",
          "explanation": "Rounding \\( 9.9 \\) up makes it \\( 10.0 \\)."
        }
      ],
      "finalAnswer": "\\( 10.0 \\)",
      "canonicalAnswer": "10.0"
    }
  },
  {
    "id": "gn29-039",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.0083942 \\) correct to \\( 3 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first three significant figures.",
          "workingLatex": "0.00\\underline{839}42",
          "explanation": "Leading zeros are ignored; the significant figures are \\( 8 \\), \\( 3 \\), \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00839\\underline{4}2 \\to 0.00839",
          "explanation": "The next digit is \\( 4 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( 0.00839 \\)",
      "canonicalAnswer": "0.00839"
    }
  },
  {
    "id": "gn29-040",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Work out \\( \\pounds 17.50 \\div 3 \\), giving your answer to the nearest penny.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "money",
      "nearest penny",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the amount.",
          "workingLatex": "17.50 \\div 3 = 5.8333\\ldots",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Round to \\( 2 \\) decimal places for pence.",
          "workingLatex": "5.83\\underline{3}\\ldots \\to 5.83",
          "explanation": "The third decimal digit is \\( 3 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( \\pounds 5.83 \\)",
      "canonicalAnswer": "5.83"
    }
  },
  {
    "id": "gn29-041",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 3.6952 \\) correct to \\( 2 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the third decimal digit.",
          "workingLatex": "3.69\\underline{5}2",
          "explanation": "The digit is \\( 5 \\), so we round up."
        },
        {
          "stepNumber": 2,
          "description": "Round up the second decimal place.",
          "workingLatex": "3.6952 \\to 3.70",
          "explanation": "Rounding \\( 9 \\) up carries to give \\( 70 \\)."
        }
      ],
      "finalAnswer": "\\( 3.70 \\)",
      "canonicalAnswer": "3.70"
    }
  },
  {
    "id": "gn29-042",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.005982 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first two significant figures.",
          "workingLatex": "0.00\\underline{59}82",
          "explanation": "The significant figures are \\( 5 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.0059\\underline{8}2 \\to 0.0060",
          "explanation": "The next digit is \\( 8 \\), so rounding up carries to give \\( 60 \\)."
        }
      ],
      "finalAnswer": "\\( 0.0060 \\)",
      "canonicalAnswer": "0.0060"
    }
  },
  {
    "id": "gn29-043",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A piece of string measures \\( 24.8 \\div 7 \\) metres. Write this length correct to \\( 3 \\) decimal places.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Carry out the division.",
          "workingLatex": "24.8 \\div 7 = 3.54285\\ldots",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Round to \\( 3 \\) decimal places.",
          "workingLatex": "3.542\\underline{8}5\\ldots \\to 3.543",
          "explanation": "The fourth decimal digit is \\( 8 \\), so we round up."
        }
      ],
      "finalAnswer": "\\( 3.543\\,\\mathrm{m} \\)",
      "canonicalAnswer": "3.543"
    }
  },
  {
    "id": "gn29-044",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.29981 \\) correct to \\( 3 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first three significant figures.",
          "workingLatex": "0.\\underline{299}81",
          "explanation": "The significant figures are \\( 2 \\), \\( 9 \\), \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.299\\underline{8}1 \\to 0.300",
          "explanation": "The next digit is \\( 8 \\), so rounding up carries to give \\( 0.300 \\)."
        }
      ],
      "finalAnswer": "\\( 0.300 \\)",
      "canonicalAnswer": "0.300"
    }
  },
  {
    "id": "gn29-045",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Five friends share a bill of \\( \\pounds 62.00 \\) equally. Work out how much each person pays, to the nearest penny.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "money",
      "nearest penny",
      "context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the bill between the friends.",
          "workingLatex": "62.00 \\div 5 = 12.40",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "State the amount in pounds and pence.",
          "workingLatex": "12.40 \\to \\pounds 12.40",
          "explanation": "This is already exact to the nearest penny."
        }
      ],
      "finalAnswer": "\\( \\pounds 12.40 \\)",
      "canonicalAnswer": "12.40"
    }
  },
  {
    "id": "gn29-046",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write \\( 0.0099614 \\) correct to \\( 2 \\) significant figures.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "leading zeros",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first two significant figures.",
          "workingLatex": "0.00\\underline{99}614",
          "explanation": "The significant figures are \\( 9 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.0099\\underline{6}14 \\to 0.010",
          "explanation": "The next digit is \\( 6 \\), so rounding up the \\( 99 \\) carries to give \\( 0.010 \\)."
        }
      ],
      "finalAnswer": "\\( 0.010 \\)",
      "canonicalAnswer": "0.010"
    }
  },
  {
    "id": "gn29-047",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Work out \\( 2.8 \\div 11 \\), giving your answer correct to \\( 2 \\) decimal places.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Carry out the division.",
          "workingLatex": "2.8 \\div 11 = 0.25454\\ldots",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Round to \\( 2 \\) decimal places.",
          "workingLatex": "0.25\\underline{4}54\\ldots \\to 0.25",
          "explanation": "The third decimal digit is \\( 4 \\), so we round down."
        }
      ],
      "finalAnswer": "\\( 0.25 \\)",
      "canonicalAnswer": "0.25"
    }
  },
  {
    "id": "gn29-048",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 0.0030649 \\) correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "0.00\\underline{3}0649",
          "explanation": "Leading zeros are not significant, so the first significant figure is \\( 3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Count three significant figures and look at the next digit.",
          "workingLatex": "0.00306\\,|\\,49",
          "explanation": "The three significant figures are \\( 3,0,6 \\); the next digit is \\( 4 \\), so round down."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded value.",
          "workingLatex": "0.00306",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00306 \\)",
      "canonicalAnswer": "0.00306"
    }
  },
  {
    "id": "gn29-049",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 84\\,962 \\) correct to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "large numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "\\underline{84}\\,962",
          "explanation": "The first two significant figures are \\( 8 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "84\\,|\\,962",
          "explanation": "The next digit is \\( 9 \\), so round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros to keep place value.",
          "workingLatex": "85\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 85\\,000 \\)",
      "canonicalAnswer": "85000"
    }
  },
  {
    "id": "gn29-050",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The mass of a grain of sand is \\( 0.0006734\\,\\mathrm{g} \\). Write this mass correct to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "measurement context",
      "units"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.000\\underline{6}734",
          "explanation": "Ignore the leading zeros; the first significant figure is \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Take two significant figures and check the following digit.",
          "workingLatex": "0.00067\\,|\\,34",
          "explanation": "The next digit is \\( 3 \\), so the \\( 7 \\) stays the same."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded mass.",
          "workingLatex": "0.00067\\,\\mathrm{g}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00067\\,\\mathrm{g} \\)",
      "canonicalAnswer": "0.00067"
    }
  },
  {
    "id": "gn29-051",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A rectangular field measures \\( 0.04951\\,\\mathrm{km} \\) by \\( 0.0382\\,\\mathrm{km} \\). Write each length correct to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "measurement context",
      "units"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round the first length to 2 s.f.",
          "workingLatex": "0.049\\,|\\,51 \\to 0.050",
          "explanation": "The first two significant figures are \\( 4,9 \\); the next digit is \\( 5 \\), so round up to give \\( 0.050 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round the second length to 2 s.f.",
          "workingLatex": "0.038\\,|\\,2 \\to 0.038",
          "explanation": "The first two significant figures are \\( 3,8 \\); the next digit is \\( 2 \\), so the value stays the same."
        }
      ],
      "finalAnswer": "\\( 0.050\\,\\mathrm{km} \\) and \\( 0.038\\,\\mathrm{km} \\)"
    }
  },
  {
    "id": "gn29-052",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A company reports a profit of \\( \\pounds 2\\,748\\,503 \\) for the year. Write this profit correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "money context",
      "large numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first three significant figures.",
          "workingLatex": "\\underline{274}\\,8503",
          "explanation": "The first three significant figures are \\( 2,7,4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "274\\,|\\,8503",
          "explanation": "The next digit is \\( 8 \\), so round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "2\\,750\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( \\pounds 2\\,750\\,000 \\)",
      "canonicalAnswer": "2750000"
    }
  },
  {
    "id": "gn29-053",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The diameter of a human hair is \\( 0.0000895\\,\\mathrm{m} \\). Write this diameter correct to \\( 1 \\) significant figure.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.0000\\underline{8}95",
          "explanation": "The first significant figure is \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.00008\\,|\\,95",
          "explanation": "The next digit is \\( 9 \\), so round the \\( 8 \\) up to \\( 9 \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded value.",
          "workingLatex": "0.00009\\,\\mathrm{m}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00009\\,\\mathrm{m} \\)",
      "canonicalAnswer": "0.00009"
    }
  },
  {
    "id": "gn29-054",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 0.0098516 \\) correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first three significant figures.",
          "workingLatex": "0.00\\underline{985}16",
          "explanation": "The first three significant figures are \\( 9,8,5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00985\\,|\\,16",
          "explanation": "The next digit is \\( 1 \\), so the \\( 5 \\) stays the same."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded value.",
          "workingLatex": "0.00985",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00985 \\)",
      "canonicalAnswer": "0.00985"
    }
  },
  {
    "id": "gn29-055",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 0.0049962 \\) correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "rounding carry"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first three significant figures.",
          "workingLatex": "0.00\\underline{499}62",
          "explanation": "The first three significant figures are \\( 4,9,9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00499\\,|\\,62",
          "explanation": "The next digit is \\( 6 \\), so round up; the \\( 99 \\) carries to give \\( 500 \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded value.",
          "workingLatex": "0.00500",
          "explanation": "The trailing zeros are kept to show three significant figures."
        }
      ],
      "finalAnswer": "\\( 0.00500 \\)",
      "canonicalAnswer": "0.00500"
    }
  },
  {
    "id": "gn29-056",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A measuring jug holds \\( 1.49625\\,\\mathrm{l} \\) of liquid. Write this volume correct to \\( 4 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "measurement context",
      "units"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first four significant figures.",
          "workingLatex": "\\underline{1.496}25",
          "explanation": "The first four significant figures are \\( 1,4,9,6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "1.496\\,|\\,25",
          "explanation": "The next digit is \\( 2 \\), so the \\( 6 \\) stays the same."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded volume.",
          "workingLatex": "1.496\\,\\mathrm{l}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 1.496\\,\\mathrm{l} \\)",
      "canonicalAnswer": "1.496"
    }
  },
  {
    "id": "gn29-057",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Toby measures the length of a table as \\( 187.4\\,\\mathrm{cm} \\). He wants to record the length to a sensible degree of accuracy. State, with a reason, an appropriate degree of accuracy for this measurement.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "appropriate accuracy",
      "justify",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Consider the precision a ruler or tape measure can realistically give.",
          "workingLatex": "187.4\\,\\mathrm{cm} \\approx 187\\,\\mathrm{cm}",
          "explanation": "A tape measure is reliable to about the nearest centimetre, so the figure after the decimal point is uncertain."
        },
        {
          "stepNumber": 2,
          "description": "Round to that level of accuracy.",
          "workingLatex": "187\\,\\mathrm{cm} \\;(\\text{nearest cm})",
          "explanation": "Recording \\( 187\\,\\mathrm{cm} \\) reflects the genuine precision of the measuring instrument."
        }
      ],
      "finalAnswer": "\\( 187\\,\\mathrm{cm} \\), to the nearest centimetre, because a tape measure cannot be read reliably beyond the nearest \\( \\mathrm{cm} \\)."
    }
  },
  {
    "id": "gn29-058",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A scientist records a reaction time of \\( 0.000204613 \\) seconds. Write this time correct to \\( 4 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.000\\underline{2}04613",
          "explanation": "The leading zeros are not significant, so the first significant figure is \\( 2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Take four significant figures and check the next digit.",
          "workingLatex": "0.0002046\\,|\\,13",
          "explanation": "The four significant figures are \\( 2,0,4,6 \\); the next digit is \\( 1 \\), so the \\( 6 \\) stays the same."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded time.",
          "workingLatex": "0.0002046",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.0002046 \\) seconds",
      "canonicalAnswer": "0.0002046"
    }
  },
  {
    "id": "gn29-059",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The population of a city is \\( 396\\,508 \\). A newspaper wants to quote the population to a suitable degree of accuracy. Round the population to \\( 2 \\) significant figures and explain why this is sensible for a newspaper headline.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "appropriate accuracy",
      "justify",
      "large numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "\\underline{39}\\,6508",
          "explanation": "The first two significant figures are \\( 3 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "39\\,|\\,6508",
          "explanation": "The next digit is \\( 6 \\), so round the \\( 9 \\) up; the \\( 39 \\) becomes \\( 40 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "400\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 400\\,000 \\); a rounded figure is easier to read and remember, and an exact population changes daily so extra digits give false precision."
    }
  },
  {
    "id": "gn29-060",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 4\\,096\\,500 \\) correct to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "large numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "\\underline{4}\\underline{0}96500",
          "explanation": "The first two significant figures are \\( 4 \\) and \\( 0 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit.",
          "workingLatex": "40\\,|\\,96500",
          "explanation": "The next digit is \\( 9 \\), so round up: \\( 40 \\to 41 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros to keep the place value.",
          "workingLatex": "4\\,100\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 4\\,100\\,000 \\)",
      "canonicalAnswer": "4100000"
    }
  },
  {
    "id": "gn29-061",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A bag of sugar has a mass of \\( 1.748\\,\\mathrm{kg} \\). Write this mass correct to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "\\underline{1}.\\underline{7}48",
          "explanation": "These are \\( 1 \\) and \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit.",
          "workingLatex": "1.7\\,|\\,48",
          "explanation": "The next digit is \\( 4 \\), so round down (keep the \\( 7 \\))."
        },
        {
          "stepNumber": 3,
          "description": "State the answer with units.",
          "workingLatex": "1.7\\,\\mathrm{kg}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 1.7\\,\\mathrm{kg} \\)",
      "canonicalAnswer": "1.7"
    }
  },
  {
    "id": "gn29-062",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The diameter of a human hair is \\( 0.000\\,0875\\,\\mathrm{m} \\). Write this length correct to \\( 1 \\) significant figure.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first significant figure.",
          "workingLatex": "0.0000\\underline{8}75",
          "explanation": "Leading zeros are not significant; the first significant figure is \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit.",
          "workingLatex": "0.00008\\,|\\,75",
          "explanation": "The next digit is \\( 7 \\), so round up: \\( 8 \\to 9 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded length with units.",
          "workingLatex": "0.00009\\,\\mathrm{m}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00009\\,\\mathrm{m} \\)",
      "canonicalAnswer": "0.00009"
    }
  },
  {
    "id": "gn29-063",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A till receipt shows a total of \\( \\pounds 47.836 \\) before rounding to the nearest penny. Write this amount correct to \\( 2 \\) decimal places.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "decimal places",
      "money context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the third decimal place.",
          "workingLatex": "47.83\\,|\\,6",
          "explanation": "The digit after the second decimal place is \\( 6 \\), so round up."
        },
        {
          "stepNumber": 2,
          "description": "Round the second decimal place up.",
          "workingLatex": "47.83 \\to 47.84",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the amount as money.",
          "workingLatex": "\\pounds 47.84",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( \\pounds 47.84 \\)",
      "canonicalAnswer": "47.84"
    }
  },
  {
    "id": "gn29-064",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Write \\( 0.040\\,950 \\) correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the significant figures.",
          "workingLatex": "0.0\\underline{4}\\underline{0}\\underline{9}50",
          "explanation": "The first significant figure is \\( 4 \\); the trapped zero is significant."
        },
        {
          "stepNumber": 2,
          "description": "Look at the digit after the third significant figure.",
          "workingLatex": "0.0409\\,|\\,50",
          "explanation": "The next digit is \\( 5 \\), so round up: \\( 9 \\to 10 \\), which carries."
        },
        {
          "stepNumber": 3,
          "description": "Apply the carry.",
          "workingLatex": "0.0409 \\to 0.0410",
          "explanation": "Rounding up the \\( 9 \\) gives \\( 0.0410 \\); the final zero is kept to show \\( 3 \\) s.f."
        }
      ],
      "finalAnswer": "\\( 0.0410 \\)",
      "canonicalAnswer": "0.0410"
    }
  },
  {
    "id": "gn29-065",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The population of a town is recorded as \\( 38\\,962 \\). Write this population correct to \\( 1 \\) significant figure.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "large numbers",
      "real context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first significant figure.",
          "workingLatex": "\\underline{3}8962",
          "explanation": "The first significant figure is \\( 3 \\) (ten-thousands)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit.",
          "workingLatex": "3\\,|\\,8962",
          "explanation": "The next digit is \\( 8 \\), so round up: \\( 3 \\to 4 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros.",
          "workingLatex": "40\\,000",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 40\\,000 \\)",
      "canonicalAnswer": "40000"
    }
  },
  {
    "id": "gn29-066",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A rectangular field measures \\( 84.6\\,\\mathrm{m} \\) by \\( 39.2\\,\\mathrm{m} \\). By rounding each length to \\( 1 \\) significant figure, estimate the area of the field in \\( \\mathrm{m^{2}} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "estimation",
      "one significant figure",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Round each length to 1 s.f.",
          "workingLatex": "84.6 \\approx 80, \\quad 39.2 \\approx 40",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded lengths.",
          "workingLatex": "80 \\cdot 40 = 3200",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the estimated area with units.",
          "workingLatex": "3200\\,\\mathrm{m^{2}}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 3200\\,\\mathrm{m^{2}} \\)",
      "canonicalAnswer": "3200"
    }
  },
  {
    "id": "gn29-067",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A length is measured as \\( 12.7\\,\\mathrm{cm} \\), correct to \\( 3 \\) significant figures. Write down the smallest possible value the true length could be.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "degree of accuracy",
      "bounds",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the size of the rounding interval.",
          "workingLatex": "12.7\\,\\mathrm{cm} \\text{ is rounded to } 1 \\text{ d.p.}",
          "explanation": "The half-unit is \\( 0.05\\,\\mathrm{cm} \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract the half-unit to find the lower bound.",
          "workingLatex": "12.7 - 0.05 = 12.65",
          "explanation": "Any value of \\( 12.65\\,\\mathrm{cm} \\) or more rounds up to \\( 12.7\\,\\mathrm{cm} \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the smallest possible value.",
          "workingLatex": "12.65\\,\\mathrm{cm}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12.65\\,\\mathrm{cm} \\)",
      "canonicalAnswer": "12.65"
    }
  },
  {
    "id": "gn29-068",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A scientist measures the mass of a sample as \\( 0.0089762\\,\\mathrm{g} \\). She needs to report it correct to \\( 2 \\) significant figures. Write down the value she should report.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "small numbers",
      "measurement context"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "0.00\\underline{8}\\underline{9}762",
          "explanation": "These are \\( 8 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit.",
          "workingLatex": "0.0089\\,|\\,762",
          "explanation": "The next digit is \\( 7 \\), so round up: \\( 89 \\to 90 \\), which carries."
        },
        {
          "stepNumber": 3,
          "description": "Apply the carry and write the result with units.",
          "workingLatex": "0.0089 \\to 0.0090",
          "explanation": "The final zero is kept to show \\( 2 \\) s.f."
        }
      ],
      "finalAnswer": "\\( 0.0090\\,\\mathrm{g} \\)",
      "canonicalAnswer": "0.0090"
    }
  },
  {
    "id": "gn29-069",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Jordan wants to estimate \\( 18.7 \\cdot 6.13 \\) to check his calculator answer of \\( 114.6 \\). State whether \\( 1 \\) significant figure or \\( 2 \\) significant figures gives a more useful estimate here, and justify your choice with a calculation.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "degree of accuracy",
      "estimation",
      "justify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Estimate using 1 s.f.",
          "workingLatex": "20 \\cdot 6 = 120",
          "explanation": "Rounding to \\( 1 \\) s.f. is quick but quite coarse."
        },
        {
          "stepNumber": 2,
          "description": "Estimate using 2 s.f.",
          "workingLatex": "19 \\cdot 6.1 = 115.9",
          "explanation": "Rounding to \\( 2 \\) s.f. is closer to the true value \\( 114.6 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Compare and justify.",
          "workingLatex": "|120 - 114.6| = 5.4, \\quad |115.9 - 114.6| = 1.3",
          "explanation": "The \\( 2 \\) s.f. estimate is far closer, so it is the more useful check."
        }
      ],
      "finalAnswer": "\\( 2 \\) significant figures (estimate \\( 115.9 \\), within \\( 1.3 \\) of \\( 114.6 \\))"
    }
  },
  {
    "id": "gn29-070",
    "topicRef": "gn29",
    "topicTitle": "Rounding to decimal places and significant figures",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The population of a town is \\( 48\\,617 \\). Round this population to 2 significant figures, giving your answer in standard form.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "significant figures",
      "standard form",
      "rounding"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first two significant figures.",
          "workingLatex": "4\\text{ and }8 \\text{ are the first two s.f.}",
          "explanation": "The first significant figure is the 4 (ten-thousands), the second is the 8 (thousands)."
        },
        {
          "stepNumber": 2,
          "description": "Use the next digit to round.",
          "workingLatex": "48\\,617 \\approx 49\\,000",
          "explanation": "The next digit is 6, so the 8 rounds up to 9."
        },
        {
          "stepNumber": 3,
          "description": "Write the result in standard form.",
          "workingLatex": "49\\,000 = 4.9 \\times 10^{4}",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 4.9 \\times 10^{4} \\)",
      "canonicalAnswer": "4.9*10^4"
    }
  }
];
