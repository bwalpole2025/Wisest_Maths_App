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
          "description": "Identify the rounding digit and its decider.",
          "workingLatex": "64\\underline{7}1 \\to \\text{hundreds} = 4,\\ \\text{tens} = 7",
          "explanation": "When rounding to the nearest hundred, the hundreds digit is the one that may change, and the digit immediately to its right — the tens digit — decides which way. Here the tens digit is \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rounding rule with \\( 7 \\ge 5 \\).",
          "workingLatex": "7 \\ge 5 \\implies \\text{round the hundreds up}",
          "explanation": "The rule is: if the deciding digit is \\( 5 \\) or more, round up; otherwise round down. Since \\( 7 \\ge 5 \\), the hundreds digit \\( 4 \\) goes up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "6471 \\approx 6500",
          "explanation": "The hundreds become \\( 5 \\) and the tens and units are replaced by zeros to keep the place value. A common slip is to write \\( 65 \\) instead of \\( 6500 \\)."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "8.2\\,\\underline{7}",
          "explanation": "Rounding to \\( 1 \\) decimal place means we keep one digit after the point. The digit just beyond it — the hundredths digit — decides the rounding, and here that is \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rounding rule with \\( 7 \\ge 5 \\).",
          "workingLatex": "7 \\ge 5 \\implies \\text{round the tenths up}",
          "explanation": "Because \\( 7 \\) is \\( 5 \\) or more, we round the tenths digit up from \\( 2 \\) to \\( 3 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "8.27 \\approx 8.3",
          "explanation": "We stop at one decimal place, giving \\( 8.3 \\). The trailing \\( 7 \\) is dropped, not kept."
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
          "explanation": "Leading zeros only hold place value and are not significant. The first non-zero digit, \\( 6 \\), is therefore the first significant figure."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.06\\underline{3}8 \\to 3 < 5",
          "explanation": "The digit after the first significant figure is \\( 3 \\). Since \\( 3 \\) is less than \\( 5 \\), we round down and leave the \\( 6 \\) unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.0638 \\approx 0.06",
          "explanation": "Keeping the place-holding zeros, the value to \\( 1 \\) significant figure is \\( 0.06 \\)."
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
          "description": "Identify the deciding hundreds digit.",
          "workingLatex": "34\\,\\underline{9}50 \\to \\text{hundreds digit} = 9",
          "explanation": "Rounding to the nearest thousand, the thousands digit may change, and the hundreds digit immediately to its right decides. Here the hundreds digit is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rounding rule with \\( 9 \\ge 5 \\).",
          "workingLatex": "9 \\ge 5 \\implies \\text{round the thousands up}",
          "explanation": "Since \\( 9 \\) is \\( 5 \\) or more, the thousands digit \\( 4 \\) rounds up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "34\\,950 \\approx 35\\,000",
          "explanation": "The thousands become \\( 5 \\) and the lower place values are filled with zeros, giving \\( 35\\,000 \\)."
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
          "explanation": "Rounding to the nearest whole number, the deciding digit is the first one after the decimal point — the tenths digit, which is \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rounding rule with \\( 6 \\ge 5 \\).",
          "workingLatex": "6 \\ge 5 \\implies \\text{round up}",
          "explanation": "Because \\( 6 \\) is \\( 5 \\) or more, the units digit \\( 9 \\) rounds up to \\( 20 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded whole number.",
          "workingLatex": "19.6 \\approx 20",
          "explanation": "Rounding \\( 19 \\) up gives \\( 20 \\); the decimal part is dropped entirely."
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
          "description": "Identify the deciding units digit.",
          "workingLatex": "48\\underline{2} \\to \\text{units digit} = 2",
          "explanation": "Rounding to the nearest ten, the tens digit may change and the units digit to its right decides. Here the units digit is \\( 2 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rounding rule with \\( 2 < 5 \\).",
          "workingLatex": "2 < 5 \\implies \\text{round down}",
          "explanation": "Since \\( 2 \\) is less than \\( 5 \\), we round down and leave the tens digit \\( 8 \\) unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "482 \\approx 480",
          "explanation": "The tens stay as \\( 8 \\) and the units become \\( 0 \\), giving \\( 480 \\)."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "7.9\\,\\underline{5}2",
          "explanation": "Keeping one decimal place, the hundredths digit decides the rounding. Here it is exactly \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 5 \\ge 5 \\).",
          "workingLatex": "5 \\ge 5 \\implies \\text{round the tenths up}",
          "explanation": "A deciding digit of exactly \\( 5 \\) still rounds up, so the tenths digit \\( 9 \\) must increase by one."
        },
        {
          "stepNumber": 3,
          "description": "Carry the \\( 9 \\) up.",
          "workingLatex": "7.9 + 0.1 = 8.0",
          "explanation": "Rounding the \\( 9 \\) in the tenths up carries into the units, turning \\( 7.9 \\) into \\( 8.0 \\). The trailing zero is kept to show the answer is given to \\( 1 \\) decimal place."
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
          "explanation": "For a whole number, the first significant figure is the leftmost digit — here the thousands digit \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "5\\underline{2}83 \\to 2 < 5",
          "explanation": "The digit after the first significant figure is \\( 2 \\). Since \\( 2 \\) is less than \\( 5 \\), we round down and leave the \\( 5 \\) unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "5283 \\approx 5000",
          "explanation": "The lower digits become zeros to hold the place value, giving \\( 5000 \\). Dropping them entirely to get \\( 5 \\) would change the size of the number."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "0.3\\,\\underline{4}9",
          "explanation": "Keeping one decimal place, the hundredths digit decides the rounding, and here that is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 4 < 5 \\).",
          "workingLatex": "4 < 5 \\implies \\text{round down}",
          "explanation": "Since \\( 4 \\) is less than \\( 5 \\), we round down and the tenths digit stays as \\( 3 \\). The \\( 9 \\) further along does not matter — only the digit immediately after the cut-off counts."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.349 \\approx 0.3",
          "explanation": "Stopping at one decimal place gives \\( 0.3 \\)."
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
          "description": "Identify the deciding tens digit.",
          "workingLatex": "26\\underline{4}9 \\to \\text{tens digit} = 4",
          "explanation": "Rounding to the nearest hundred, the hundreds digit may change and the tens digit decides. Here the tens digit is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 4 < 5 \\).",
          "workingLatex": "4 < 5 \\implies \\text{round down}",
          "explanation": "Because \\( 4 \\) is less than \\( 5 \\), the hundreds digit \\( 6 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "2649 \\approx 2600",
          "explanation": "The hundreds stay as \\( 6 \\) and the lower digits become zeros, giving a population of about \\( 2600 \\)."
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
          "explanation": "The leading zero before the point is not significant, so the first significant figure is the \\( 6 \\) in the tenths place."
        },
        {
          "stepNumber": 2,
          "description": "Check for any deciding digit.",
          "workingLatex": "0.6\\underline{\\ } \\to \\text{no further digit}",
          "explanation": "There is no digit after the \\( 6 \\), so there is nothing to round and the value is already given to \\( 1 \\) significant figure."
        },
        {
          "stepNumber": 3,
          "description": "State the result.",
          "workingLatex": "0.6 \\approx 0.6",
          "explanation": "The number is unchanged: \\( 0.6 \\) to \\( 1 \\) significant figure is just \\( 0.6 \\)."
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
          "description": "Identify the deciding units digit.",
          "workingLatex": "9\\underline{6} \\to \\text{units digit} = 6",
          "explanation": "Rounding to the nearest ten, the units digit decides. Here it is \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 6 \\ge 5 \\).",
          "workingLatex": "6 \\ge 5 \\implies \\text{round up}",
          "explanation": "Since \\( 6 \\) is \\( 5 \\) or more, the tens digit \\( 9 \\) must increase by one."
        },
        {
          "stepNumber": 3,
          "description": "Carry the \\( 9 \\) up.",
          "workingLatex": "96 \\approx 100",
          "explanation": "Rounding the \\( 9 \\) tens up carries into the hundreds, so \\( 96 \\) rounds to \\( 100 \\), not \\( 90 \\)."
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
          "description": "Identify the deciding tens digit.",
          "workingLatex": "84\\underline{7}3 \\to \\text{tens digit} = 7",
          "explanation": "Rounding to the nearest hundred, the hundreds digit may change and the tens digit decides. Here the tens digit is \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 7 \\ge 5 \\).",
          "workingLatex": "7 \\ge 5 \\implies \\text{round up}",
          "explanation": "Since \\( 7 \\) is \\( 5 \\) or more, the hundreds digit \\( 4 \\) rounds up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "8473 \\approx 8500",
          "explanation": "The hundreds become \\( 5 \\) and the tens and units are replaced by zeros, giving \\( 8500 \\)."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "6.1\\,\\underline{4}9",
          "explanation": "Keeping one decimal place, the hundredths digit decides, and here that is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 4 < 5 \\).",
          "workingLatex": "4 < 5 \\implies \\text{round down}",
          "explanation": "Since \\( 4 \\) is less than \\( 5 \\), the tenths digit stays as \\( 1 \\). The \\( 9 \\) further to the right does not matter — only the digit immediately after the cut-off counts."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "6.149 \\approx 6.1",
          "explanation": "Stopping at one decimal place gives \\( 6.1 \\)."
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
          "description": "Identify the deciding hundreds digit.",
          "workingLatex": "27\\,\\underline{4}81 \\to \\text{hundreds digit} = 4",
          "explanation": "Rounding to the nearest thousand, the thousands digit may change and the hundreds digit decides. Here the hundreds digit is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 4 < 5 \\).",
          "workingLatex": "4 < 5 \\implies \\text{round down}",
          "explanation": "Since \\( 4 \\) is less than \\( 5 \\), the thousands digit \\( 7 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "27\\,481 \\approx 27\\,000",
          "explanation": "The thousands stay as \\( 27 \\) and the lower place values become zeros, giving \\( 27\\,000 \\)."
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
          "description": "Find the first significant figure.",
          "workingLatex": "0.0\\underline{7}39",
          "explanation": "Leading zeros are not significant, so the first significant figure is the first non-zero digit, \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.07\\underline{3}9 \\to 3 < 5",
          "explanation": "The digit after the \\( 7 \\) is \\( 3 \\). Since \\( 3 \\) is less than \\( 5 \\), we round down and the \\( 7 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.0739 \\approx 0.07",
          "explanation": "Keeping the place-holding zeros, the value to \\( 1 \\) significant figure is \\( 0.07 \\)."
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
          "description": "Identify the deciding units digit.",
          "workingLatex": "34\\underline{9} \\to \\text{units digit} = 9",
          "explanation": "Rounding to the nearest ten, the units digit decides. Here it is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 9 \\ge 5 \\).",
          "workingLatex": "9 \\ge 5 \\implies \\text{round up}",
          "explanation": "Since \\( 9 \\) is \\( 5 \\) or more, the tens digit \\( 4 \\) rounds up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "349 \\approx 350",
          "explanation": "The tens become \\( 5 \\) and the units become \\( 0 \\), giving \\( 350 \\)."
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
          "workingLatex": "12.\\underline{9}6",
          "explanation": "Rounding to the nearest whole number, the deciding digit is the tenths digit, which is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 9 \\ge 5 \\).",
          "workingLatex": "9 \\ge 5 \\implies \\text{round up}",
          "explanation": "Since \\( 9 \\) is \\( 5 \\) or more, the units digit \\( 2 \\) rounds up to \\( 3 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded whole number.",
          "workingLatex": "12.96 \\approx 13",
          "explanation": "Rounding \\( 12 \\) up gives \\( 13 \\), and the decimal part is dropped."
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
          "description": "Identify the deciding tens digit.",
          "workingLatex": "59\\underline{5}0 \\to \\text{tens digit} = 5",
          "explanation": "Rounding to the nearest hundred, the tens digit decides. Here it is exactly \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 5 \\ge 5 \\).",
          "workingLatex": "5 \\ge 5 \\implies \\text{round up}",
          "explanation": "A deciding digit of exactly \\( 5 \\) still rounds up, so the hundreds digit \\( 9 \\) must increase by one."
        },
        {
          "stepNumber": 3,
          "description": "Carry the \\( 9 \\) up.",
          "workingLatex": "5\\,950 \\approx 6\\,000",
          "explanation": "Rounding the \\( 9 \\) hundreds up carries into the thousands, so \\( 5\\,950 \\) rounds to \\( 6\\,000 \\)."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "0.8\\,\\underline{5}3",
          "explanation": "Keeping one decimal place, the hundredths digit decides, and here that is exactly \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 5 \\ge 5 \\).",
          "workingLatex": "5 \\ge 5 \\implies \\text{round up}",
          "explanation": "A deciding digit of \\( 5 \\) rounds up, so the tenths digit \\( 8 \\) increases to \\( 9 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.853 \\approx 0.9",
          "explanation": "Stopping at one decimal place gives \\( 0.9 \\)."
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
          "description": "Find the first significant figure.",
          "workingLatex": "\\underline{4}628",
          "explanation": "For this whole number the first significant figure is the leftmost digit, the thousands digit \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "4\\underline{6}28 \\to 6 \\ge 5",
          "explanation": "The digit after the \\( 4 \\) is \\( 6 \\). Since \\( 6 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "4628 \\approx 5000",
          "explanation": "The lower digits become zeros to hold place value, giving \\( 5000 \\)."
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
          "description": "Locate the deciding digit.",
          "workingLatex": "2.3\\,\\underline{4}7",
          "explanation": "Keeping one decimal place, the hundredths digit decides, and here that is \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 4 < 5 \\).",
          "workingLatex": "4 < 5 \\implies \\text{round down}",
          "explanation": "Since \\( 4 \\) is less than \\( 5 \\), the tenths digit stays as \\( 3 \\); the \\( 7 \\) further along does not matter."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded mass with units.",
          "workingLatex": "2.347 \\approx 2.3\\,\\mathrm{kg}",
          "explanation": "The mass to \\( 1 \\) decimal place is \\( 2.3\\,\\mathrm{kg} \\); remember to keep the units in a worded question."
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
          "description": "Identify the deciding units digit.",
          "workingLatex": "19\\underline{5} \\to \\text{units digit} = 5",
          "explanation": "Rounding to the nearest ten, the units digit decides. Here it is exactly \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule with \\( 5 \\ge 5 \\).",
          "workingLatex": "5 \\ge 5 \\implies \\text{round up}",
          "explanation": "A deciding digit of \\( 5 \\) rounds up, so the tens digit \\( 9 \\) must increase by one."
        },
        {
          "stepNumber": 3,
          "description": "Carry the \\( 9 \\) up.",
          "workingLatex": "195 \\approx 200",
          "explanation": "Rounding the \\( 9 \\) tens up carries into the hundreds, so \\( 195 \\) rounds to \\( 200 \\)."
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
          "description": "Find the first significant figure.",
          "workingLatex": "0.0\\underline{4}86",
          "explanation": "Leading zeros are not significant, so the first significant figure is the first non-zero digit, \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.04\\underline{8}6 \\to 8 \\ge 5",
          "explanation": "The digit after the \\( 4 \\) is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.0486 \\approx 0.05",
          "explanation": "Keeping the place-holding zero, the value to \\( 1 \\) significant figure is \\( 0.05 \\)."
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
          "description": "Find the first two significant figures.",
          "workingLatex": "0.0\\underline{4}\\underline{6}17",
          "explanation": "Leading zeros are not significant, so the first significant figure is the \\( 4 \\) and the second is the \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.046\\,|\\,17 \\to 1 < 5",
          "explanation": "The digit just after the second significant figure is \\( 1 \\). Since \\( 1 \\) is less than \\( 5 \\), we round down and the \\( 6 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.04617 \\approx 0.046",
          "explanation": "Keeping the place-holding zeros, the value to \\( 2 \\) significant figures is \\( 0.046 \\)."
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
          "workingLatex": "9.9\\,|\\,7 \\to 7 \\ge 5",
          "explanation": "Keeping one decimal place, the hundredths digit \\( 7 \\) decides. Since \\( 7 \\) is \\( 5 \\) or more, we round the tenths up."
        },
        {
          "stepNumber": 2,
          "description": "Round the tenths up; the \\( 9 \\) carries.",
          "workingLatex": "9.9 + 0.1 = 10.0",
          "explanation": "Increasing the \\( 9 \\) in the tenths makes it \\( 10 \\) tenths, which carries into the units. So \\( 9.9 \\) becomes \\( 10.0 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the answer to \\( 1 \\) decimal place.",
          "workingLatex": "9.97 \\approx 10.0",
          "explanation": "The trailing zero is kept to show the answer is given to \\( 1 \\) decimal place; writing \\( 10 \\) alone would not."
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
          "workingLatex": "5.68\\,|\\,29 \\to 2 < 5",
          "explanation": "Keeping two decimal places, the third decimal digit decides. Here it is \\( 2 \\), which is less than \\( 5 \\), so we round down."
        },
        {
          "stepNumber": 2,
          "description": "Round down, keeping two decimal places.",
          "workingLatex": "5.6829 \\approx 5.68",
          "explanation": "Rounding down leaves the second decimal digit unchanged, giving \\( 5.68 \\). The remaining \\( 29 \\) is dropped."
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
          "explanation": "Leading zeros are not significant; counting from the first non-zero digit, the three significant figures are \\( 8 \\), \\( 3 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.00834\\,|\\,71 \\to 7 \\ge 5",
          "explanation": "The digit after the third significant figure is \\( 7 \\). Since \\( 7 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.0083471 \\approx 0.00835",
          "explanation": "Keeping the place-holding zeros, the value to \\( 3 \\) significant figures is \\( 0.00835 \\)."
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
          "workingLatex": "12.396\\,|\\,2 \\to 2 < 5",
          "explanation": "Keeping three decimal places, the fourth decimal digit decides. Here it is \\( 2 \\), which is less than \\( 5 \\), so we round down."
        },
        {
          "stepNumber": 2,
          "description": "Round down and keep the units.",
          "workingLatex": "12.3962 \\approx 12.396\\,\\mathrm{m}",
          "explanation": "Rounding down leaves the third decimal digit unchanged, giving \\( 12.396\\,\\mathrm{m} \\)."
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
          "explanation": "The leading zero is not significant, so the first two significant figures are \\( 5 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.59\\,|\\,963 \\to 9 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 9 \\). Since \\( 9 \\) is \\( 5 \\) or more, we round up; this will carry."
        },
        {
          "stepNumber": 3,
          "description": "Round up, carrying through the \\( 9 \\).",
          "workingLatex": "0.59 + 0.01 = 0.60",
          "explanation": "Rounding the \\( 59 \\) up gives \\( 60 \\), so the answer is \\( 0.60 \\). The trailing zero is kept to show \\( 2 \\) significant figures."
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
          "explanation": "Sharing equally means dividing. The result is a recurring decimal, so each share is \\( \\pounds 15.6666\\ldots \\)"
        },
        {
          "stepNumber": 2,
          "description": "Look at the third decimal digit.",
          "workingLatex": "15.66\\,|\\,66\\ldots \\to 6 \\ge 5",
          "explanation": "The nearest penny means \\( 2 \\) decimal places, so the third decimal digit decides. It is \\( 6 \\), which is \\( 5 \\) or more, so we round up."
        },
        {
          "stepNumber": 3,
          "description": "Round to the nearest penny.",
          "workingLatex": "15.6666\\ldots \\approx \\pounds 15.67",
          "explanation": "Rounding up the second decimal place gives \\( \\pounds 15.67 \\) per person."
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
          "explanation": "Leading zeros are not significant, so the first significant figure is \\( 1 \\) and the second is \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.0019\\,|\\,874 \\to 8 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round up; this carries."
        },
        {
          "stepNumber": 3,
          "description": "Round up, carrying \\( 19 \\) to \\( 20 \\).",
          "workingLatex": "0.0019874 \\approx 0.0020",
          "explanation": "Rounding the \\( 19 \\) up makes it \\( 20 \\), so the value is \\( 0.0020 \\). The trailing zero is kept to show \\( 2 \\) significant figures."
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
          "explanation": "Dividing gives a recurring decimal. We need a few extra digits so we can round confidently."
        },
        {
          "stepNumber": 2,
          "description": "Identify the first three significant figures.",
          "workingLatex": "\\underline{1.14}2857\\ldots",
          "explanation": "Since the leading digit is non-zero, the three significant figures are \\( 1 \\), \\( 1 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Look at the next digit and round.",
          "workingLatex": "1.14\\,|\\,2857 \\to 2 < 5 \\implies 1.14",
          "explanation": "The fourth significant figure is \\( 2 \\), which is less than \\( 5 \\), so we round down and keep \\( 1.14 \\)."
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
          "explanation": "Cost equals price per kilogram times the number of kilograms, giving an exact cost of \\( \\pounds 4.475 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the third decimal digit.",
          "workingLatex": "4.47\\,|\\,5 \\to 5 \\ge 5",
          "explanation": "The nearest penny means \\( 2 \\) decimal places. The third decimal digit is \\( 5 \\), which rounds up."
        },
        {
          "stepNumber": 3,
          "description": "Round to the nearest penny.",
          "workingLatex": "4.475 \\approx \\pounds 4.48",
          "explanation": "Rounding the second decimal place up gives \\( \\pounds 4.48 \\)."
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
          "explanation": "The first two significant figures are the \\( 1 \\) (tens) and the \\( 4 \\) (units)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "14\\,|\\,.96 \\to 9 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 9 \\). Since \\( 9 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up; this carries."
        },
        {
          "stepNumber": 3,
          "description": "Round up to the nearest whole.",
          "workingLatex": "14 + 1 = 15",
          "explanation": "Rounding \\( 14 \\) up gives \\( 15 \\). To \\( 2 \\) significant figures the value is \\( 15 \\); no decimal places are needed."
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
          "workingLatex": "0.307\\,|\\,52 \\to 5 \\ge 5",
          "explanation": "Keeping three decimal places, the fourth decimal digit decides. Here it is \\( 5 \\), which rounds up."
        },
        {
          "stepNumber": 2,
          "description": "Round up the third decimal place.",
          "workingLatex": "0.30752 \\approx 0.308",
          "explanation": "Rounding the third decimal digit \\( 7 \\) up gives \\( 8 \\), so the answer is \\( 0.308 \\)."
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
          "description": "Identify the first two significant figures.",
          "workingLatex": "0.0\\underline{4}\\underline{6}17",
          "explanation": "Leading zeros do not count, so the first significant figure is \\( 4 \\) and the second is \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the digit after the second significant figure.",
          "workingLatex": "0.046\\,|\\,17 \\to 1 < 5",
          "explanation": "The next digit is \\( 1 \\), which is less than \\( 5 \\), so we round down and the \\( 6 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.04617 \\approx 0.046",
          "explanation": "Keeping the place-holding zeros, the value to \\( 2 \\) significant figures is \\( 0.046 \\)."
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
          "workingLatex": "9.9\\,|\\,7 \\to 7 \\ge 5",
          "explanation": "Keeping one decimal place, the hundredths digit \\( 7 \\) decides. Since \\( 7 \\) is \\( 5 \\) or more, we round the tenths up."
        },
        {
          "stepNumber": 2,
          "description": "Round the tenths up; the \\( 9 \\) carries.",
          "workingLatex": "9.9 + 0.1 = 10.0",
          "explanation": "Increasing the \\( 9 \\) tenths makes it \\( 10 \\) tenths, which carries into the units, giving \\( 10.0 \\). The trailing zero is kept to show \\( 1 \\) decimal place."
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
          "explanation": "Leading zeros are ignored, so counting from the first non-zero digit, the significant figures are \\( 8 \\), \\( 3 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00839\\,|\\,42 \\to 4 < 5",
          "explanation": "The digit after the third significant figure is \\( 4 \\), which is less than \\( 5 \\), so we round down and the \\( 9 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded number.",
          "workingLatex": "0.0083942 \\approx 0.00839",
          "explanation": "Keeping the place-holding zeros, the value to \\( 3 \\) significant figures is \\( 0.00839 \\)."
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
          "explanation": "Dividing the money gives a recurring decimal, \\( \\pounds 5.8333\\ldots \\)"
        },
        {
          "stepNumber": 2,
          "description": "Look at the third decimal digit.",
          "workingLatex": "5.83\\,|\\,33\\ldots \\to 3 < 5",
          "explanation": "The nearest penny means \\( 2 \\) decimal places. The third decimal digit is \\( 3 \\), which is less than \\( 5 \\), so we round down."
        },
        {
          "stepNumber": 3,
          "description": "Round to the nearest penny.",
          "workingLatex": "5.8333\\ldots \\approx \\pounds 5.83",
          "explanation": "Rounding down keeps the second decimal place unchanged, giving \\( \\pounds 5.83 \\)."
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
          "workingLatex": "3.69\\,|\\,52 \\to 5 \\ge 5",
          "explanation": "Keeping two decimal places, the third decimal digit decides. Here it is \\( 5 \\), which rounds up."
        },
        {
          "stepNumber": 2,
          "description": "Round up; the \\( 9 \\) carries.",
          "workingLatex": "3.69 + 0.01 = 3.70",
          "explanation": "Rounding the second decimal place \\( 9 \\) up carries into the tenths, turning \\( 3.69 \\) into \\( 3.70 \\). The trailing zero is kept to show \\( 2 \\) decimal places."
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
          "explanation": "Leading zeros are not significant, so the first two significant figures are \\( 5 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.0059\\,|\\,82 \\to 8 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round up; this carries."
        },
        {
          "stepNumber": 3,
          "description": "Round up, carrying \\( 59 \\) to \\( 60 \\).",
          "workingLatex": "0.005982 \\approx 0.0060",
          "explanation": "Rounding the \\( 59 \\) up gives \\( 60 \\), so the value is \\( 0.0060 \\). The trailing zero is kept to show \\( 2 \\) significant figures."
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
          "explanation": "Dividing gives a non-terminating decimal; we keep enough digits to round to three decimal places."
        },
        {
          "stepNumber": 2,
          "description": "Look at the fourth decimal digit.",
          "workingLatex": "3.542\\,|\\,85\\ldots \\to 8 \\ge 5",
          "explanation": "Keeping three decimal places, the fourth decimal digit \\( 8 \\) decides. Since \\( 8 \\) is \\( 5 \\) or more, we round up."
        },
        {
          "stepNumber": 3,
          "description": "Round up the third decimal place.",
          "workingLatex": "3.54285\\ldots \\approx 3.543\\,\\mathrm{m}",
          "explanation": "Rounding the third decimal digit \\( 2 \\) up gives \\( 3 \\), so the length is \\( 3.543\\,\\mathrm{m} \\)."
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
          "explanation": "The leading zero is not significant, so the three significant figures are \\( 2 \\), \\( 9 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.299\\,|\\,81 \\to 8 \\ge 5",
          "explanation": "The digit after the third significant figure is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round up; the two \\( 9 \\)s will carry."
        },
        {
          "stepNumber": 3,
          "description": "Round up, carrying through the \\( 99 \\).",
          "workingLatex": "0.29981 \\approx 0.300",
          "explanation": "Rounding \\( 299 \\) up gives \\( 300 \\), so the value is \\( 0.300 \\). The trailing zeros are kept to show \\( 3 \\) significant figures."
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
          "explanation": "Sharing equally means dividing by \\( 5 \\). This division terminates exactly."
        },
        {
          "stepNumber": 2,
          "description": "Check the rounding and state the share.",
          "workingLatex": "12.40 \\to \\pounds 12.40",
          "explanation": "The result already has exactly two decimal places, so it is exact to the nearest penny — no rounding is needed."
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
          "explanation": "Leading zeros are not significant, so the first two significant figures are \\( 9 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.0099\\,|\\,614 \\to 6 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 6 \\). Since \\( 6 \\) is \\( 5 \\) or more, we round up; the two \\( 9 \\)s will carry."
        },
        {
          "stepNumber": 3,
          "description": "Round up, carrying \\( 99 \\) to \\( 100 \\).",
          "workingLatex": "0.0099614 \\approx 0.010",
          "explanation": "Rounding \\( 99 \\) up carries all the way to give \\( 0.010 \\). The trailing zero is kept so that two significant figures are shown."
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
          "explanation": "Dividing gives a recurring decimal; we keep a few digits beyond the second decimal place to round."
        },
        {
          "stepNumber": 2,
          "description": "Look at the third decimal digit.",
          "workingLatex": "0.25\\,|\\,454\\ldots \\to 4 < 5",
          "explanation": "Keeping two decimal places, the third decimal digit decides. Here it is \\( 4 \\), which is less than \\( 5 \\), so we round down."
        },
        {
          "stepNumber": 3,
          "description": "Round to two decimal places.",
          "workingLatex": "0.25454\\ldots \\approx 0.25",
          "explanation": "Rounding down keeps the second decimal place unchanged, giving \\( 0.25 \\)."
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
          "explanation": "Leading zeros are not significant, so the first significant figure is \\( 3 \\). Note that the zero right after the \\( 3 \\) is a trapped zero and does count."
        },
        {
          "stepNumber": 2,
          "description": "Count three significant figures.",
          "workingLatex": "0.00\\underline{306}49 \\to 3,0,6",
          "explanation": "Counting on from the \\( 3 \\), the three significant figures are \\( 3 \\), \\( 0 \\) and \\( 6 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Look at the next digit and round.",
          "workingLatex": "0.00306\\,|\\,49 \\to 4 < 5 \\implies 0.00306",
          "explanation": "The digit after the third significant figure is \\( 4 \\), which is less than \\( 5 \\), so we round down and keep \\( 0.00306 \\)."
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
          "explanation": "For a whole number we count significant figures from the left, so the first two are \\( 8 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "84\\,|\\,962 \\to 9 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 9 \\). Since \\( 9 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros.",
          "workingLatex": "84\\,962 \\approx 85\\,000",
          "explanation": "The lower place values are filled with zeros to keep the size of the number, giving \\( 85\\,000 \\)."
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
          "description": "Find the first two significant figures.",
          "workingLatex": "0.000\\underline{6}\\underline{7}34",
          "explanation": "Ignore the leading zeros; the first significant figure is \\( 6 \\) and the second is \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide.",
          "workingLatex": "0.00067\\,|\\,34 \\to 3 < 5",
          "explanation": "The digit after the second significant figure is \\( 3 \\), which is less than \\( 5 \\), so we round down and the \\( 7 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded mass with units.",
          "workingLatex": "0.0006734 \\approx 0.00067\\,\\mathrm{g}",
          "explanation": "Keeping the place-holding zeros, the mass to \\( 2 \\) significant figures is \\( 0.00067\\,\\mathrm{g} \\)."
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
          "description": "Identify the first two s.f. of the first length.",
          "workingLatex": "0.0\\underline{4}\\underline{9}51 \\to 4,9",
          "explanation": "Leading zeros do not count, so the first two significant figures of \\( 0.04951 \\) are \\( 4 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Round the first length, carrying the \\( 9 \\).",
          "workingLatex": "0.049\\,|\\,51 \\to 5 \\ge 5 \\implies 0.050",
          "explanation": "The next digit is \\( 5 \\), so we round up; the \\( 49 \\) becomes \\( 50 \\), giving \\( 0.050\\,\\mathrm{km} \\). The trailing zero is kept to show \\( 2 \\) s.f."
        },
        {
          "stepNumber": 3,
          "description": "Round the second length to 2 s.f.",
          "workingLatex": "0.038\\,|\\,2 \\to 2 < 5 \\implies 0.038",
          "explanation": "For \\( 0.0382 \\) the first two significant figures are \\( 3 \\) and \\( 8 \\); the next digit is \\( 2 \\), which is less than \\( 5 \\), so it rounds down to \\( 0.038\\,\\mathrm{km} \\)."
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
          "explanation": "Counting from the left, the first three significant figures are \\( 2 \\), \\( 7 \\) and \\( 4 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "274\\,|\\,8503 \\to 8 \\ge 5",
          "explanation": "The digit after the third significant figure is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round the \\( 4 \\) up to \\( 5 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "2\\,748\\,503 \\approx \\pounds 2\\,750\\,000",
          "explanation": "The lower place values become zeros to keep the size, giving \\( \\pounds 2\\,750\\,000 \\)."
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
          "explanation": "Leading zeros are not significant, so the first significant figure is the first non-zero digit, \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to decide rounding.",
          "workingLatex": "0.00008\\,|\\,95 \\to 9 \\ge 5",
          "explanation": "The digit after the first significant figure is \\( 9 \\). Since \\( 9 \\) is \\( 5 \\) or more, we round the \\( 8 \\) up to \\( 9 \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded value with units.",
          "workingLatex": "0.0000895 \\approx 0.00009\\,\\mathrm{m}",
          "explanation": "Keeping the place-holding zeros, the diameter to \\( 1 \\) significant figure is \\( 0.00009\\,\\mathrm{m} \\)."
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
          "explanation": "Leading zeros do not count, so the three significant figures are \\( 9 \\), \\( 8 \\) and \\( 5 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00985\\,|\\,16 \\to 1 < 5",
          "explanation": "The digit after the third significant figure is \\( 1 \\), which is less than \\( 5 \\), so we round down and the \\( 5 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded value.",
          "workingLatex": "0.0098516 \\approx 0.00985",
          "explanation": "Keeping the place-holding zeros, the value to \\( 3 \\) significant figures is \\( 0.00985 \\)."
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
          "explanation": "Leading zeros are not significant, so the three significant figures are \\( 4 \\), \\( 9 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00499\\,|\\,62 \\to 6 \\ge 5",
          "explanation": "The digit after the third significant figure is \\( 6 \\). Since \\( 6 \\) is \\( 5 \\) or more, we round up; the two \\( 9 \\)s will carry."
        },
        {
          "stepNumber": 3,
          "description": "Carry through and write the value.",
          "workingLatex": "0.0049962 \\approx 0.00500",
          "explanation": "Rounding \\( 499 \\) up gives \\( 500 \\), so the value is \\( 0.00500 \\). The trailing zeros are kept to show three significant figures."
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
          "explanation": "The leading digit is non-zero, so the four significant figures are \\( 1 \\), \\( 4 \\), \\( 9 \\) and \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "1.496\\,|\\,25 \\to 2 < 5",
          "explanation": "The digit after the fourth significant figure is \\( 2 \\), which is less than \\( 5 \\), so we round down and the \\( 6 \\) stays unchanged."
        },
        {
          "stepNumber": 3,
          "description": "State the rounded volume with units.",
          "workingLatex": "1.49625 \\approx 1.496\\,\\mathrm{l}",
          "explanation": "The volume to \\( 4 \\) significant figures is \\( 1.496\\,\\mathrm{l} \\)."
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
          "description": "Consider the precision the instrument can give.",
          "workingLatex": "\\text{tape measure} \\approx \\text{nearest } 1\\,\\mathrm{cm}",
          "explanation": "A tape measure or ruler can realistically be read to about the nearest centimetre, so the digit after the decimal point is uncertain and should not be quoted as if it were reliable."
        },
        {
          "stepNumber": 2,
          "description": "Round to that level of accuracy.",
          "workingLatex": "187.4\\,\\mathrm{cm} \\approx 187\\,\\mathrm{cm}",
          "explanation": "The tenths digit is \\( 4 \\), so rounding to the nearest centimetre gives \\( 187\\,\\mathrm{cm} \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the accuracy with a reason.",
          "workingLatex": "187\\,\\mathrm{cm}\\;(\\text{nearest cm})",
          "explanation": "Recording \\( 187\\,\\mathrm{cm} \\) reflects the genuine precision of the instrument; quoting the \\( .4 \\) would suggest false accuracy the tape cannot support."
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
          "explanation": "Leading zeros are not significant, so the first significant figure is \\( 2 \\). The zero straight after the \\( 2 \\) is a trapped zero and does count."
        },
        {
          "stepNumber": 2,
          "description": "Count four significant figures.",
          "workingLatex": "0.000\\underline{2046}13 \\to 2,0,4,6",
          "explanation": "Counting on from the \\( 2 \\), the four significant figures are \\( 2 \\), \\( 0 \\), \\( 4 \\) and \\( 6 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Look at the next digit and round.",
          "workingLatex": "0.0002046\\,|\\,13 \\to 1 < 5 \\implies 0.0002046",
          "explanation": "The digit after the fourth significant figure is \\( 1 \\), which is less than \\( 5 \\), so we round down and keep \\( 0.0002046 \\) seconds."
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
          "explanation": "Counting from the left, the first two significant figures are \\( 3 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "39\\,|\\,6508 \\to 6 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 6 \\). Since \\( 6 \\) is \\( 5 \\) or more, we round up; the \\( 39 \\) carries to \\( 40 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Fill the remaining places with zeros.",
          "workingLatex": "396\\,508 \\approx 400\\,000",
          "explanation": "Rounding \\( 39 \\) up to \\( 40 \\) and filling with zeros gives \\( 400\\,000 \\)."
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
          "workingLatex": "\\underline{40}96500",
          "explanation": "Counting from the left, the first significant figure is \\( 4 \\) and the second is \\( 0 \\). A zero between significant digits still counts."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "40\\,|\\,96500 \\to 9 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 9 \\). Since \\( 9 \\) is \\( 5 \\) or more, we round up: \\( 40 \\) becomes \\( 41 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros.",
          "workingLatex": "4\\,096\\,500 \\approx 4\\,100\\,000",
          "explanation": "Keeping the place value with zeros gives \\( 4\\,100\\,000 \\)."
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
          "explanation": "The leading digit is non-zero, so the first two significant figures are \\( 1 \\) and \\( 7 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "1.7\\,|\\,48 \\to 4 < 5",
          "explanation": "The digit after the second significant figure is \\( 4 \\), which is less than \\( 5 \\), so we round down and keep the \\( 7 \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the answer with units.",
          "workingLatex": "1.748 \\approx 1.7\\,\\mathrm{kg}",
          "explanation": "The mass to \\( 2 \\) significant figures is \\( 1.7\\,\\mathrm{kg} \\)."
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
          "explanation": "Leading zeros are not significant, so the first significant figure is the first non-zero digit, \\( 8 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.00008\\,|\\,75 \\to 7 \\ge 5",
          "explanation": "The digit after the first significant figure is \\( 7 \\). Since \\( 7 \\) is \\( 5 \\) or more, we round the \\( 8 \\) up to \\( 9 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the rounded length with units.",
          "workingLatex": "0.0000875 \\approx 0.00009\\,\\mathrm{m}",
          "explanation": "Keeping the place-holding zeros, the length to \\( 1 \\) significant figure is \\( 0.00009\\,\\mathrm{m} \\)."
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
          "workingLatex": "47.83\\,|\\,6 \\to 6 \\ge 5",
          "explanation": "The nearest penny means \\( 2 \\) decimal places, so the third decimal digit decides. Here it is \\( 6 \\), which rounds up."
        },
        {
          "stepNumber": 2,
          "description": "Round the second decimal place up.",
          "workingLatex": "47.83 \\to 47.84",
          "explanation": "Rounding the second decimal digit \\( 3 \\) up gives \\( 4 \\), so the amount becomes \\( 47.84 \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the amount as money.",
          "workingLatex": "47.836 \\approx \\pounds 47.84",
          "explanation": "Written as money to the nearest penny, the total is \\( \\pounds 47.84 \\)."
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
          "description": "Identify the three significant figures.",
          "workingLatex": "0.0\\underline{4}\\underline{0}\\underline{9}50",
          "explanation": "The first significant figure is \\( 4 \\); the zero immediately after it is a trapped zero and counts, so the three significant figures are \\( 4 \\), \\( 0 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the digit after the third s.f.",
          "workingLatex": "0.0409\\,|\\,50 \\to 5 \\ge 5",
          "explanation": "The next digit is \\( 5 \\), so we round up; this turns the \\( 9 \\) into \\( 10 \\) and carries."
        },
        {
          "stepNumber": 3,
          "description": "Apply the carry.",
          "workingLatex": "0.0409 \\to 0.0410",
          "explanation": "Rounding the \\( 9 \\) up carries into the next column, giving \\( 0.0410 \\). The final zero is kept to show \\( 3 \\) significant figures."
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
          "explanation": "For a whole number the first significant figure is the leftmost digit, here the \\( 3 \\) in the ten-thousands place."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "3\\,|\\,8962 \\to 8 \\ge 5",
          "explanation": "The digit after the first significant figure is \\( 8 \\). Since \\( 8 \\) is \\( 5 \\) or more, we round the \\( 3 \\) up to \\( 4 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Replace the remaining digits with zeros.",
          "workingLatex": "38\\,962 \\approx 40\\,000",
          "explanation": "Filling the lower places with zeros to hold the place value gives \\( 40\\,000 \\)."
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
          "explanation": "For \\( 84.6 \\) the second digit is \\( 4 \\), so it rounds down to \\( 80 \\); for \\( 39.2 \\) the second digit is \\( 9 \\), so it rounds up to \\( 40 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the rounded lengths.",
          "workingLatex": "80 \\cdot 40 = 3200",
          "explanation": "The area of a rectangle is length times width, so multiplying the rounded values estimates the area."
        },
        {
          "stepNumber": 3,
          "description": "State the estimated area with units.",
          "workingLatex": "\\approx 3200\\,\\mathrm{m^{2}}",
          "explanation": "The estimated area is \\( 3200\\,\\mathrm{m^{2}} \\); remember the units are squared because two lengths were multiplied."
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
          "description": "Find the size of the rounding unit.",
          "workingLatex": "12.7\\,\\mathrm{cm}\\ \\text{is to the nearest } 0.1\\,\\mathrm{cm}",
          "explanation": "To \\( 3 \\) significant figures this value is rounded to \\( 1 \\) decimal place, so the rounding unit is \\( 0.1\\,\\mathrm{cm} \\) and the half-unit is \\( 0.05\\,\\mathrm{cm} \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract the half-unit to find the lower bound.",
          "workingLatex": "12.7 - 0.05 = 12.65",
          "explanation": "The lower bound is half a unit below the stated value, because any value of \\( 12.65\\,\\mathrm{cm} \\) or more rounds up to \\( 12.7\\,\\mathrm{cm} \\)."
        },
        {
          "stepNumber": 3,
          "description": "State the smallest possible value.",
          "workingLatex": "12.65\\,\\mathrm{cm}",
          "explanation": "The smallest possible true length is \\( 12.65\\,\\mathrm{cm} \\). By convention this lower bound is included, even though it sits exactly on the boundary."
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
          "explanation": "Leading zeros are not significant, so the first two significant figures are \\( 8 \\) and \\( 9 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Look at the next digit to round.",
          "workingLatex": "0.0089\\,|\\,762 \\to 7 \\ge 5",
          "explanation": "The digit after the second significant figure is \\( 7 \\). Since \\( 7 \\) is \\( 5 \\) or more, we round up; the \\( 89 \\) will carry."
        },
        {
          "stepNumber": 3,
          "description": "Apply the carry and state the result with units.",
          "workingLatex": "0.0089762 \\approx 0.0090\\,\\mathrm{g}",
          "explanation": "Rounding \\( 89 \\) up gives \\( 90 \\), so the value is \\( 0.0090\\,\\mathrm{g} \\). The final zero is kept to show \\( 2 \\) significant figures."
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
          "workingLatex": "18.7 \\approx 20,\\ 6.13 \\approx 6 \\implies 20 \\cdot 6 = 120",
          "explanation": "Rounding each number to \\( 1 \\) significant figure gives \\( 20 \\) and \\( 6 \\); their product \\( 120 \\) is quick to find but quite coarse."
        },
        {
          "stepNumber": 2,
          "description": "Estimate using 2 s.f.",
          "workingLatex": "18.7 \\approx 19,\\ 6.13 \\approx 6.1 \\implies 19 \\cdot 6.1 = 115.9",
          "explanation": "Rounding to \\( 2 \\) significant figures gives \\( 19 \\) and \\( 6.1 \\); their product \\( 115.9 \\) is closer to the true value \\( 114.6 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Compare the errors and justify.",
          "workingLatex": "|120 - 114.6| = 5.4, \\quad |115.9 - 114.6| = 1.3",
          "explanation": "The \\( 2 \\) s.f. estimate is out by only \\( 1.3 \\) compared with \\( 5.4 \\) for \\( 1 \\) s.f., so it is the more useful check on the calculator answer."
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
          "workingLatex": "\\underline{48}617",
          "explanation": "Counting from the left, the first significant figure is \\( 4 \\) (ten-thousands) and the second is \\( 8 \\) (thousands)."
        },
        {
          "stepNumber": 2,
          "description": "Use the next digit to round.",
          "workingLatex": "48\\,|\\,617 \\to 6 \\ge 5 \\implies 49\\,000",
          "explanation": "The digit after the second significant figure is \\( 6 \\), so the \\( 8 \\) rounds up to \\( 9 \\), giving \\( 49\\,000 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the result in standard form.",
          "workingLatex": "49\\,000 = 4.9 \\times 10^{4}",
          "explanation": "Standard form needs a number between \\( 1 \\) and \\( 10 \\) times a power of ten. Moving the decimal point four places gives \\( 4.9 \\times 10^{4} \\)."
        }
      ],
      "finalAnswer": "\\( 4.9 \\times 10^{4} \\)",
      "canonicalAnswer": "4.9*10^4"
    }
  }
];
