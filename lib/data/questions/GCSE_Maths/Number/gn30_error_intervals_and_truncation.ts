import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Topic gn30: Error intervals and truncation (DfE ref N15/N16)
 *
 * 70 questions — 24 Foundation, 23 Standard, 23 Challenge.
 */

export const questions: Question[] = [
  {
    "id": "gn30-001",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A number \\( n \\) is given as \\( 350 \\) when rounded to the nearest \\( 10 \\). Write down the error interval for \\( n \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to nearest 10"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Half of \\( 10 \\) is \\( 5 \\), so the interval extends \\( 5 \\) either side of \\( 350 \\).",
          "workingLatex": "350 - 5 = 345 \\qquad 350 + 5 = 355",
          "explanation": "Rounding to the nearest 10 means values within 5 of 350 round to 350."
        },
        {
          "stepNumber": 2,
          "description": "Write the bounds as an inequality.",
          "workingLatex": "345 \\le n < 355",
          "explanation": "The lower bound is included; the upper bound rounds up to 360."
        }
      ],
      "finalAnswer": "\\( 345 \\le n < 355 \\)"
    }
  },
  {
    "id": "gn30-002",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The length of a rope is \\( 80\\,\\mathrm{cm} \\) correct to the nearest \\( 10\\,\\mathrm{cm} \\). Write down the error interval for the length \\( L\\,\\mathrm{cm} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to nearest 10",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The interval extends \\( 5 \\) either side of \\( 80 \\).",
          "workingLatex": "80 - 5 = 75 \\qquad 80 + 5 = 85",
          "explanation": "Half of the rounding unit 10 is 5."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "75 \\le L < 85",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 75 \\le L < 85 \\)"
    }
  },
  {
    "id": "gn30-003",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A value \\( x \\) has been rounded to the nearest whole number to give \\( 16 \\). Write down the error interval for \\( x \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to nearest whole"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Half of \\( 1 \\) is \\( 0.5 \\), so the interval extends \\( 0.5 \\) either side of \\( 16 \\).",
          "workingLatex": "16 - 0.5 = 15.5 \\qquad 16 + 0.5 = 16.5",
          "explanation": "Rounding to the nearest whole number uses a half-unit of 0.5."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "15.5 \\le x < 16.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 15.5 \\le x < 16.5 \\)"
    }
  },
  {
    "id": "gn30-004",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The mass of a parcel is \\( 9\\,\\mathrm{kg} \\) correct to the nearest kilogram. Write down the error interval for the mass \\( m\\,\\mathrm{kg} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to nearest whole",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The interval extends \\( 0.5 \\) either side of \\( 9 \\).",
          "workingLatex": "9 - 0.5 = 8.5 \\qquad 9 + 0.5 = 9.5",
          "explanation": "Half of the rounding unit 1 is 0.5."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "8.5 \\le m < 9.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8.5 \\le m < 9.5 \\)"
    }
  },
  {
    "id": "gn30-005",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A number \\( p \\) is given as \\( 4.7 \\) correct to \\( 1 \\) decimal place. Write down the error interval for \\( p \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to 1 decimal place"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "One decimal place uses a unit of \\( 0.1 \\); half of this is \\( 0.05 \\).",
          "workingLatex": "4.7 - 0.05 = 4.65 \\qquad 4.7 + 0.05 = 4.75",
          "explanation": "The interval extends 0.05 either side of 4.7."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "4.65 \\le p < 4.75",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 4.65 \\le p < 4.75 \\)"
    }
  },
  {
    "id": "gn30-006",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The height of a plant is \\( 12.3\\,\\mathrm{cm} \\) correct to \\( 1 \\) decimal place. Write down the error interval for the height \\( h\\,\\mathrm{cm} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to 1 decimal place",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Half of the rounding unit \\( 0.1 \\) is \\( 0.05 \\).",
          "workingLatex": "12.3 - 0.05 = 12.25 \\qquad 12.3 + 0.05 = 12.35",
          "explanation": "The interval extends 0.05 either side of 12.3."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "12.25 \\le h < 12.35",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12.25 \\le h < 12.35 \\)"
    }
  },
  {
    "id": "gn30-007",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 7.846 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "1 decimal place"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncation keeps the digits up to the place required and discards the rest without rounding.",
          "workingLatex": "7.\\underline{8}46 \\longrightarrow 7.8",
          "explanation": "Cut off after the first decimal digit; do not round up."
        }
      ],
      "finalAnswer": "\\( 7.8 \\)",
      "canonicalAnswer": "7.8"
    }
  },
  {
    "id": "gn30-008",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 5.392 \\) to \\( 2 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Keep the first two decimal digits and discard the rest.",
          "workingLatex": "5.39\\underline{2} \\longrightarrow 5.39",
          "explanation": "Truncation removes the trailing digit without rounding up."
        }
      ],
      "finalAnswer": "\\( 5.39 \\)",
      "canonicalAnswer": "5.39"
    }
  },
  {
    "id": "gn30-009",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 23.0975 \\) to \\( 3 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "3 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Keep the first three decimal digits and discard the rest.",
          "workingLatex": "23.097\\underline{5} \\longrightarrow 23.097",
          "explanation": "Even though the next digit is 5, truncation does not round up."
        }
      ],
      "finalAnswer": "\\( 23.097 \\)",
      "canonicalAnswer": "23.097"
    }
  },
  {
    "id": "gn30-010",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A measurement is recorded as \\( 130 \\) to the nearest \\( 10 \\). The error interval is written as \\( a \\le x < b \\). Work out the values of \\( a \\) and \\( b \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding to nearest 10"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The interval extends \\( 5 \\) either side of \\( 130 \\).",
          "workingLatex": "130 - 5 = 125 \\qquad 130 + 5 = 135",
          "explanation": "Half of the rounding unit 10 is 5."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\( a \\) and \\( b \\).",
          "workingLatex": "a = 125 \\qquad b = 135",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( a = 125 \\) and \\( b = 135 \\)"
    }
  },
  {
    "id": "gn30-011",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Daniel truncates the number \\( 0.6814 \\) to \\( 2 \\) decimal places. Write down his answer.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Keep the first two decimal digits and discard the rest.",
          "workingLatex": "0.68\\underline{1}4 \\longrightarrow 0.68",
          "explanation": "Truncation chops off the remaining digits without rounding."
        }
      ],
      "finalAnswer": "\\( 0.68 \\)",
      "canonicalAnswer": "0.68"
    }
  },
  {
    "id": "gn30-012",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The capacity of a jug is \\( 2.5 \\) litres correct to \\( 1 \\) decimal place. Write down the smallest possible capacity of the jug.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "lower bound",
      "rounding to 1 decimal place"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The smallest possible value is the lower bound, found by subtracting half the rounding unit.",
          "workingLatex": "2.5 - 0.05 = 2.45",
          "explanation": "Half of 0.1 is 0.05, so the least value that rounds to 2.5 is 2.45."
        }
      ],
      "finalAnswer": "\\( 2.45 \\) litres",
      "canonicalAnswer": "2.45"
    }
  },
  {
    "id": "gn30-013",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A length is measured as \\( 240\\,\\mathrm{cm} \\), correct to the nearest \\( 10\\,\\mathrm{cm} \\). Write down the error interval for the length \\( L \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest 10"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The value is rounded to the nearest \\( 10 \\), so the boundaries are half of \\( 10 \\) above and below.",
          "workingLatex": "\\tfrac{1}{2} \\cdot 10 = 5",
          "explanation": "Half of the rounding unit gives the gap to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "240 - 5 = 235 \\qquad 240 + 5 = 245",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "235 \\le L < 245",
          "explanation": "The lower bound is included; the upper bound is not."
        }
      ],
      "finalAnswer": "\\( 235 \\le L < 245 \\)"
    }
  },
  {
    "id": "gn30-014",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 8.5736 \\) to \\( 2 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating means cutting off the digits after the second decimal place without rounding.",
          "workingLatex": "8.57\\,|\\,36",
          "explanation": "Everything after the second decimal place is removed."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "8.57",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8.57 \\)",
      "canonicalAnswer": "8.57"
    }
  },
  {
    "id": "gn30-015",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The mass of a parcel is \\( 6.3\\,\\mathrm{kg} \\), correct to \\( 1 \\) decimal place. Write down the error interval for the mass \\( m \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "1 decimal place"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The value is rounded to \\( 1 \\) decimal place, so the boundaries are half of \\( 0.1 \\) above and below.",
          "workingLatex": "\\tfrac{1}{2} \\cdot 0.1 = 0.05",
          "explanation": "Half the rounding unit gives the distance to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "6.3 - 0.05 = 6.25 \\qquad 6.3 + 0.05 = 6.35",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "6.25 \\le m < 6.35",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6.25 \\le m < 6.35 \\)"
    }
  },
  {
    "id": "gn30-016",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A number \\( n \\) rounds to \\( 80 \\) when rounded to the nearest \\( 10 \\). Write down the smallest possible value of \\( n \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest 10",
      "lower bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The smallest value is the lower bound, which is half of \\( 10 \\) below \\( 80 \\).",
          "workingLatex": "80 - 5 = 75",
          "explanation": "Numbers from \\( 75 \\) up to (but not including) \\( 85 \\) round to \\( 80 \\)."
        }
      ],
      "finalAnswer": "\\( 75 \\)",
      "canonicalAnswer": "75"
    }
  },
  {
    "id": "gn30-017",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 41.928 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cut off all digits after the first decimal place without rounding.",
          "workingLatex": "41.9\\,|\\,28",
          "explanation": "The digits \\( 28 \\) are discarded, not rounded."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "41.9",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 41.9 \\)",
      "canonicalAnswer": "41.9"
    }
  },
  {
    "id": "gn30-018",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The capacity of a bottle is \\( 500\\,\\mathrm{ml} \\), correct to the nearest \\( 10\\,\\mathrm{ml} \\). Write down the upper bound of the capacity \\( c \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest 10",
      "upper bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The upper bound is half of \\( 10 \\) above \\( 500 \\).",
          "workingLatex": "500 + 5 = 505",
          "explanation": "Values below \\( 505 \\) round down to \\( 500 \\)."
        }
      ],
      "finalAnswer": "\\( 505\\,\\mathrm{ml} \\)",
      "canonicalAnswer": "505"
    }
  },
  {
    "id": "gn30-019",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A value \\( x \\) is \\( 17 \\), correct to the nearest whole number. Write down the error interval for \\( x \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest whole number"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The value is rounded to the nearest whole number, so the boundaries are half of \\( 1 \\) above and below.",
          "workingLatex": "\\tfrac{1}{2} \\cdot 1 = 0.5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "17 - 0.5 = 16.5 \\qquad 17 + 0.5 = 17.5",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "16.5 \\le x < 17.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 16.5 \\le x < 17.5 \\)"
    }
  },
  {
    "id": "gn30-020",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 0.4961 \\) to \\( 3 \\) decimal places.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cut off all digits after the third decimal place without rounding.",
          "workingLatex": "0.496\\,|\\,1",
          "explanation": "The final \\( 1 \\) is removed; the third digit stays as \\( 6 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "0.496",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.496 \\)",
      "canonicalAnswer": "0.496"
    }
  },
  {
    "id": "gn30-021",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The height of a tree is \\( 9.8\\,\\mathrm{m} \\), correct to \\( 1 \\) decimal place. Write down the lower bound of the height \\( h \\).",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "1 decimal place",
      "lower bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The lower bound is half of \\( 0.1 \\) below \\( 9.8 \\).",
          "workingLatex": "9.8 - 0.05 = 9.75",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 9.75\\,\\mathrm{m} \\)",
      "canonicalAnswer": "9.75"
    }
  },
  {
    "id": "gn30-022",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A crowd of \\( 3500 \\) people is reported, correct to the nearest \\( 10 \\). Write down the error interval for the number of people \\( p \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest 10"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The value is rounded to the nearest \\( 10 \\), so the boundaries are half of \\( 10 \\) above and below.",
          "workingLatex": "\\tfrac{1}{2} \\cdot 10 = 5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "3500 - 5 = 3495 \\qquad 3500 + 5 = 3505",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "3495 \\le p < 3505",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 3495 \\le p < 3505 \\)"
    }
  },
  {
    "id": "gn30-023",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Truncate \\( 12.07 \\) to \\( 1 \\) decimal place.",
    "marks": 1,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cut off all digits after the first decimal place without rounding.",
          "workingLatex": "12.0\\,|\\,7",
          "explanation": "Although the next digit is \\( 7 \\), truncation does not round up."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "12.0",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12.0 \\)",
      "canonicalAnswer": "12.0"
    }
  },
  {
    "id": "gn30-024",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A temperature is \\( 23\\,^{\\circ}\\mathrm{C} \\), correct to the nearest whole number. Write down the error interval for the temperature \\( t \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "nearest whole number"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The value is rounded to the nearest whole number, so the boundaries are half of \\( 1 \\) above and below.",
          "workingLatex": "\\tfrac{1}{2} \\cdot 1 = 0.5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "23 - 0.5 = 22.5 \\qquad 23 + 0.5 = 23.5",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "22.5 \\le t < 23.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 22.5 \\le t < 23.5 \\)"
    }
  },
  {
    "id": "gn30-025",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( y \\) is given as \\( 3.27 \\), correct to \\( 2 \\) decimal places. Write down the error interval for \\( y \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the smallest and largest possible values.",
          "workingLatex": "3.265 \\le y < 3.275",
          "explanation": "Half of the rounding unit \\( 0.01 \\) is \\( 0.005 \\), so the bounds are \\( 3.27 \\pm 0.005 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Write as an error interval.",
          "workingLatex": "3.265 \\le y < 3.275",
          "explanation": "The lower bound is included; the upper bound is not."
        }
      ],
      "finalAnswer": "\\( 3.265 \\le y < 3.275 \\)"
    }
  },
  {
    "id": "gn30-026",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A length \\( L \\) is measured as \\( 0.84\\,\\mathrm{m} \\), correct to \\( 2 \\) decimal places. Write down the error interval for \\( L \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "2 decimal places",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the rounding precision.",
          "workingLatex": "0.84 \\pm 0.005",
          "explanation": "Rounding to \\( 2 \\) d.p. means the half-unit is \\( 0.005 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "0.835 \\le L < 0.845",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.835 \\le L < 0.845 \\)"
    }
  },
  {
    "id": "gn30-027",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A value \\( n \\) is given as \\( 600 \\), correct to \\( 1 \\) significant figure. Write down the error interval for \\( n \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "1 significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The first significant figure is in the hundreds, so the rounding unit is \\( 100 \\).",
          "workingLatex": "600 \\pm 50",
          "explanation": "Half of \\( 100 \\) is \\( 50 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "550 \\le n < 650",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 550 \\le n < 650 \\)"
    }
  },
  {
    "id": "gn30-028",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( p \\) is given as \\( 0.07 \\), correct to \\( 1 \\) significant figure. Write down the error interval for \\( p \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "1 significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The significant figure is in the hundredths, so the rounding unit is \\( 0.01 \\).",
          "workingLatex": "0.07 \\pm 0.005",
          "explanation": "Half of \\( 0.01 \\) is \\( 0.005 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "0.065 \\le p < 0.075",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.065 \\le p < 0.075 \\)"
    }
  },
  {
    "id": "gn30-029",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A value \\( w \\) is given as \\( 4500 \\), correct to \\( 2 \\) significant figures. Write down the error interval for \\( w \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "2 significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The second significant figure is in the hundreds, so the rounding unit is \\( 100 \\).",
          "workingLatex": "4500 \\pm 50",
          "explanation": "Half of \\( 100 \\) is \\( 50 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "4450 \\le w < 4550",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 4450 \\le w < 4550 \\)"
    }
  },
  {
    "id": "gn30-030",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A quantity \\( m \\) is given as \\( 0.038 \\), correct to \\( 2 \\) significant figures. Write down the error interval for \\( m \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "2 significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The second significant figure is in the thousandths, so the rounding unit is \\( 0.001 \\).",
          "workingLatex": "0.038 \\pm 0.0005",
          "explanation": "Half of \\( 0.001 \\) is \\( 0.0005 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "0.0375 \\le m < 0.0385",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.0375 \\le m < 0.0385 \\)"
    }
  },
  {
    "id": "gn30-031",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The mass of a parcel is \\( 7\\,\\mathrm{kg} \\), measured to the nearest kilogram. Write down the error interval for the mass \\( M \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "measurement",
      "nearest unit"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measured to the nearest \\( 1\\,\\mathrm{kg} \\), so the half-unit is \\( 0.5 \\).",
          "workingLatex": "7 \\pm 0.5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "6.5 \\le M < 7.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6.5 \\le M < 7.5 \\)"
    }
  },
  {
    "id": "gn30-032",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The length of a table is \\( 140\\,\\mathrm{cm} \\), measured to the nearest \\( 10\\,\\mathrm{cm} \\). Write down the error interval for the length \\( d \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "measurement",
      "nearest 10"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measured to the nearest \\( 10\\,\\mathrm{cm} \\), so the half-unit is \\( 5 \\).",
          "workingLatex": "140 \\pm 5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "135 \\le d < 145",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 135 \\le d < 145 \\)"
    }
  },
  {
    "id": "gn30-033",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( t \\) is truncated to \\( 1 \\) decimal place, giving \\( 5.3 \\). Write down the error interval for \\( t \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating to \\( 1 \\) d.p. keeps every value from \\( 5.3 \\) up to (but not including) \\( 5.4 \\).",
          "workingLatex": "5.3 \\le t < 5.4",
          "explanation": "Truncation chops off later digits, so the value cannot be below \\( 5.3 \\)."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "5.3 \\le t < 5.4",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 5.3 \\le t < 5.4 \\)"
    }
  },
  {
    "id": "gn30-034",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( x \\) is truncated to the nearest whole number below, giving \\( 12 \\). Write down the error interval for \\( x \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating to a whole number keeps everything from \\( 12 \\) up to (but not including) \\( 13 \\).",
          "workingLatex": "12 \\le x < 13",
          "explanation": "Unlike rounding, truncation never raises the value, so the lower bound is the stated value itself."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "12 \\le x < 13",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12 \\le x < 13 \\)"
    }
  },
  {
    "id": "gn30-035",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number is \\( 8.6 \\) when truncated to \\( 1 \\) decimal place and \\( 8.6 \\) when rounded to \\( 1 \\) decimal place. State, with a reason, which method gives the larger upper bound for the original number.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "rounding",
      "contrast"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two intervals.",
          "workingLatex": "\\text{Truncation: } 8.6 \\le x < 8.7 \\qquad \\text{Rounding: } 8.55 \\le x < 8.65",
          "explanation": "Truncation keeps the value at or above \\( 8.6 \\); rounding allows values from \\( 8.55 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Identify the larger upper bound.",
          "workingLatex": "8.7 > 8.65",
          "explanation": "Truncation gives the larger upper bound."
        }
      ],
      "finalAnswer": "\\( \\text{Truncation, since its upper bound } 8.7 > 8.65 \\)"
    }
  },
  {
    "id": "gn30-036",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The capacity of a bottle is \\( 1.5 \\) litres, truncated to \\( 1 \\) decimal place. Write down the error interval for the capacity \\( c \\) litres.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating to \\( 1 \\) d.p. keeps every value from \\( 1.5 \\) up to (but not including) \\( 1.6 \\).",
          "workingLatex": "1.5 \\le c < 1.6",
          "explanation": "Truncation discards later digits without rounding up."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "1.5 \\le c < 1.6",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 1.5 \\le c < 1.6 \\)"
    }
  },
  {
    "id": "gn30-037",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( x \\) is rounded to \\( 2 \\) decimal places. The result is \\( 4.27 \\). Write down the error interval for \\( x \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The rounding is to \\( 2 \\) d.p., so the half-unit is half of \\( 0.01 \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 0.01 = 0.005",
          "explanation": "Each value rounds to the nearest hundredth."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.005 \\) to find the bounds.",
          "workingLatex": "4.27 - 0.005 = 4.265 \\qquad 4.27 + 0.005 = 4.275",
          "explanation": "The lower bound is included; the upper bound is not."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "4.265 \\le x < 4.275",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 4.265 \\le x < 4.275 \\)"
    }
  },
  {
    "id": "gn30-038",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A value \\( y \\) is rounded to \\( 1 \\) significant figure. The result is \\( 700 \\). Write down the error interval for \\( y \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rounding \\( 700 \\) to \\( 1 \\) s.f. means rounding to the nearest \\( 100 \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 100 = 50",
          "explanation": "The half-unit is half of \\( 100 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 50 \\).",
          "workingLatex": "700 - 50 = 650 \\qquad 700 + 50 = 750",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "650 \\le y < 750",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 650 \\le y < 750 \\)"
    }
  },
  {
    "id": "gn30-039",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( n \\) is rounded to \\( 2 \\) significant figures. The result is \\( 8.3 \\). Write down the error interval for \\( n \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "rounding",
      "two significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "For \\( 8.3 \\) to \\( 2 \\) s.f. the second figure is in the tenths, so the rounding is to the nearest \\( 0.1 \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 0.1 = 0.05",
          "explanation": "The half-unit is half of \\( 0.1 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.05 \\).",
          "workingLatex": "8.3 - 0.05 = 8.25 \\qquad 8.3 + 0.05 = 8.35",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "8.25 \\le n < 8.35",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 8.25 \\le n < 8.35 \\)"
    }
  },
  {
    "id": "gn30-040",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A decimal \\( p \\) is truncated to \\( 2 \\) decimal places, giving \\( 5.61 \\). Write down the error interval for \\( p \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "truncation",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncation chops off later digits, so \\( p \\) is at least \\( 5.61 \\).",
          "workingLatex": "5.61 \\le p",
          "explanation": "The truncated value is the lower bound."
        },
        {
          "stepNumber": 2,
          "description": "The largest value that still truncates to \\( 5.61 \\) is just below \\( 5.62 \\).",
          "workingLatex": "p < 5.62",
          "explanation": "Any value below \\( 5.62 \\) keeps the first two decimals as \\( 61 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "5.61 \\le p < 5.62",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 5.61 \\le p < 5.62 \\)"
    }
  },
  {
    "id": "gn30-041",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A whole-number count \\( N \\) is truncated to \\( 1 \\) significant figure, giving \\( 40 \\). Write down the error interval for \\( N \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "truncation",
      "one significant figure"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating to \\( 1 \\) s.f. keeps the tens digit, so \\( N \\) is at least \\( 40 \\).",
          "workingLatex": "40 \\le N",
          "explanation": "Truncation does not round up."
        },
        {
          "stepNumber": 2,
          "description": "The largest value that still truncates to \\( 40 \\) is just below \\( 50 \\).",
          "workingLatex": "N < 50",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "40 \\le N < 50",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 40 \\le N < 50 \\)"
    }
  },
  {
    "id": "gn30-042",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The length of a pencil is measured as \\( 13\\,\\mathrm{cm} \\) to the nearest centimetre. Write down the error interval for the length \\( L\\,\\mathrm{cm} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "measurement",
      "length"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measuring to the nearest \\( 1\\,\\mathrm{cm} \\) gives a half-unit of \\( 0.5\\,\\mathrm{cm} \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 1 = 0.5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.5 \\).",
          "workingLatex": "13 - 0.5 = 12.5 \\qquad 13 + 0.5 = 13.5",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "12.5 \\le L < 13.5",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 12.5 \\le L < 13.5 \\)"
    }
  },
  {
    "id": "gn30-043",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The mass of a parcel is recorded as \\( 850\\,\\mathrm{g} \\) to the nearest \\( 10\\,\\mathrm{g} \\). Write down the error interval for the mass \\( m\\,\\mathrm{g} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "measurement",
      "mass"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measuring to the nearest \\( 10\\,\\mathrm{g} \\) gives a half-unit of \\( 5\\,\\mathrm{g} \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 10 = 5",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 5 \\).",
          "workingLatex": "850 - 5 = 845 \\qquad 850 + 5 = 855",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "845 \\le m < 855",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 845 \\le m < 855 \\)"
    }
  },
  {
    "id": "gn30-044",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( t \\) is rounded to \\( 2 \\) decimal places, giving \\( 0.40 \\). Write down the smallest possible value of \\( t \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "lower bound",
      "2 decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rounding to \\( 2 \\) d.p. uses a half-unit of \\( 0.005 \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 0.01 = 0.005",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "The smallest value is the lower bound.",
          "workingLatex": "0.40 - 0.005 = 0.395",
          "explanation": "Any smaller value would round to \\( 0.39 \\)."
        }
      ],
      "finalAnswer": "\\( 0.395 \\)",
      "canonicalAnswer": "0.395"
    }
  },
  {
    "id": "gn30-045",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A measurement \\( d \\) is truncated to \\( 1 \\) decimal place, giving \\( 9.3 \\). Write down the upper bound of \\( d \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "truncation",
      "upper bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Truncating to \\( 1 \\) d.p. keeps the tenths digit, so values from \\( 9.3 \\) up to just below \\( 9.4 \\) truncate to \\( 9.3 \\).",
          "workingLatex": "9.3 \\le d < 9.4",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "The upper bound is the value \\( d \\) gets close to but never reaches.",
          "workingLatex": "d < 9.4",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 9.4 \\)",
      "canonicalAnswer": "9.4"
    }
  },
  {
    "id": "gn30-046",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A capacity \\( V \\) is rounded to \\( 2 \\) significant figures, giving \\( 0.045\\,\\mathrm{litres} \\). Write down the error interval for \\( V\\,\\mathrm{litres} \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "two significant figures",
      "measurement"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "For \\( 0.045 \\) to \\( 2 \\) s.f. the last figure is in the thousandths, so the rounding is to the nearest \\( 0.001 \\).",
          "workingLatex": "\\tfrac{1}{2} \\cdot 0.001 = 0.0005",
          "explanation": "The half-unit is half of \\( 0.001 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.0005 \\).",
          "workingLatex": "0.045 - 0.0005 = 0.0445 \\qquad 0.045 + 0.0005 = 0.0455",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "0.0445 \\le V < 0.0455",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.0445 \\le V < 0.0455 \\)"
    }
  },
  {
    "id": "gn30-047",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A number \\( w \\) is given as \\( 6.0 \\) when rounded to \\( 2 \\) significant figures, but as \\( 6.0 \\) when truncated to \\( 2 \\) significant figures gives a different interval. Write down the error interval for \\( w \\) when \\( 6.0 \\) is the result of truncation to \\( 2 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "truncation",
      "two significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "For \\( 6.0 \\) to \\( 2 \\) s.f. the second figure is in the tenths, so truncation keeps the value at \\( 6.0 \\) up to just below \\( 6.1 \\).",
          "workingLatex": "6.0 \\le w",
          "explanation": "Truncation never rounds up, so \\( 6.0 \\) is the lower bound."
        },
        {
          "stepNumber": 2,
          "description": "The largest value still truncating to \\( 6.0 \\) is just below \\( 6.1 \\).",
          "workingLatex": "w < 6.1",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "6.0 \\le w < 6.1",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 6.0 \\le w < 6.1 \\)"
    }
  },
  {
    "id": "gn30-048",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A number \\( x \\) has been rounded to \\( 1 \\) significant figure to give \\( 0.07 \\). Write down the error interval for \\( x \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the rounding unit. The \\( 7 \\) is in the hundredths place, so values are rounded to the nearest \\( 0.01 \\).",
          "workingLatex": "\\text{half of } 0.01 = 0.005",
          "explanation": "The first significant figure here sits in the hundredths column."
        },
        {
          "stepNumber": 2,
          "description": "Find the lower and upper bounds.",
          "workingLatex": "0.07 - 0.005 = 0.065 \\qquad 0.07 + 0.005 = 0.075",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write as an inequality.",
          "workingLatex": "0.065 \\le x < 0.075",
          "explanation": "The lower bound is included and the upper bound is excluded."
        }
      ],
      "finalAnswer": "\\( 0.065 \\le x < 0.075 \\)"
    }
  },
  {
    "id": "gn30-049",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The mass of a seed is \\( m\\,\\mathrm{g} \\). Correct to \\( 2 \\) significant figures, \\( m = 0.048 \\). Write down the error interval for \\( m \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The last significant figure (the \\( 8 \\)) is in the thousandths place, so the rounding unit is \\( 0.001 \\).",
          "workingLatex": "\\text{half of } 0.001 = 0.0005",
          "explanation": "Two significant figures of \\( 0.048 \\) end in the thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.048 - 0.0005 = 0.0475 \\qquad 0.048 + 0.0005 = 0.0485",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.0475 \\le m < 0.0485",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.0475 \\le m < 0.0485 \\)"
    }
  },
  {
    "id": "gn30-050",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A length \\( L \\) metres is measured as \\( 0.0030\\,\\mathrm{m} \\), correct to \\( 2 \\) significant figures. Write down the smallest possible value of \\( L \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "lower bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The trailing zero is significant, so the final significant figure is in the ten-thousandths place. The rounding unit is \\( 0.0001 \\).",
          "workingLatex": "\\text{half of } 0.0001 = 0.00005",
          "explanation": "Writing \\( 0.0030 \\) to \\( 2 \\) s.f. means the second figure lies in the \\( 0.0001 \\) column."
        },
        {
          "stepNumber": 2,
          "description": "Subtract half the rounding unit to get the smallest value.",
          "workingLatex": "0.0030 - 0.00005 = 0.00295",
          "explanation": "The smallest value is the lower bound, which is included."
        }
      ],
      "finalAnswer": "\\( 0.00295\\,\\mathrm{m} \\)",
      "canonicalAnswer": "0.00295"
    }
  },
  {
    "id": "gn30-051",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A scientist records a concentration as \\( 0.6\\,\\mathrm{mol/L} \\), correct to \\( 1 \\) significant figure. What is the largest value the concentration could take? Give your answer as an inequality together with the value.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "upper bound"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The single significant figure is in the tenths place, so the rounding unit is \\( 0.1 \\).",
          "workingLatex": "\\text{half of } 0.1 = 0.05",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Add half the rounding unit to find the upper bound.",
          "workingLatex": "0.6 + 0.05 = 0.65",
          "explanation": "Any value up to but not including \\( 0.65 \\) rounds to \\( 0.6 \\)."
        },
        {
          "stepNumber": 3,
          "description": "Express the largest possible value.",
          "workingLatex": "c < 0.65",
          "explanation": "The concentration can be arbitrarily close to \\( 0.65 \\) but cannot equal it."
        }
      ],
      "finalAnswer": "\\( c < 0.65 \\)"
    }
  },
  {
    "id": "gn30-052",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A coin has thickness \\( t\\,\\mathrm{mm} \\). Correct to \\( 2 \\) significant figures, \\( t = 0.0085 \\). Write down the error interval for \\( t \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The last significant figure (the \\( 5 \\)) is in the hundred-thousandths place, so the rounding unit is \\( 0.0001 \\).",
          "workingLatex": "\\text{half of } 0.0001 = 0.00005",
          "explanation": "The two significant figures \\( 8 \\) and \\( 5 \\) end in the \\( 0.0001 \\) column."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.0085 - 0.00005 = 0.00845 \\qquad 0.0085 + 0.00005 = 0.00855",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.00845 \\le t < 0.00855",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00845 \\le t < 0.00855 \\)"
    }
  },
  {
    "id": "gn30-053",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The radius of an atom is given as \\( 0.12\\,\\mathrm{nm} \\), correct to \\( 2 \\) significant figures. Tariq says the radius could be exactly \\( 0.125\\,\\mathrm{nm} \\). Explain why Tariq is wrong, and write the correct error interval.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "reasoning"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The last significant figure is in the thousandths place, giving a rounding unit of \\( 0.001 \\).",
          "workingLatex": "\\text{half of } 0.001 = 0.0005",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.12 - 0.0005 = 0.1195 \\qquad 0.12 + 0.0005 = 0.1205",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Explain Tariq's error and state the interval.",
          "workingLatex": "0.1195 \\le r < 0.1205",
          "explanation": "A value of \\( 0.125 \\) would round up to \\( 0.13 \\), so it lies outside the interval; the upper bound is \\( 0.1205 \\) and is not included."
        }
      ],
      "finalAnswer": "\\( 0.1195 \\le r < 0.1205 \\)"
    }
  },
  {
    "id": "gn30-054",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A wire has diameter \\( d\\,\\mathrm{mm} \\). When rounded to \\( 1 \\) significant figure, \\( d = 0.009 \\). A second wire has diameter rounded to \\( 1 \\) significant figure equal to \\( 0.01\\,\\mathrm{mm} \\). Could the two wires have the same true diameter? Justify using error intervals.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "reasoning"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interval for the first wire (\\( 0.009 \\) to \\( 1 \\) s.f., rounding unit \\( 0.001 \\)).",
          "workingLatex": "0.0085 \\le d_1 < 0.0095",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Interval for the second wire (\\( 0.01 \\) to \\( 1 \\) s.f., rounding unit \\( 0.001 \\)).",
          "workingLatex": "0.0095 \\le d_2 < 0.0105",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Compare the two intervals.",
          "workingLatex": "d_1 < 0.0095 \\le d_2",
          "explanation": "The intervals do not overlap, so the wires cannot share the same true diameter."
        }
      ],
      "finalAnswer": "\\( \\text{No — the intervals } 0.0085 \\le d_1 < 0.0095 \\text{ and } 0.0095 \\le d_2 < 0.0105 \\text{ do not overlap.} \\)"
    }
  },
  {
    "id": "gn30-055",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A reaction time is recorded as \\( 0.40\\,\\mathrm{s} \\), correct to \\( 2 \\) significant figures. Write down the error interval for the reaction time \\( T \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "trailing zero"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The trailing zero is significant, placing the last significant figure in the hundredths column. The rounding unit is \\( 0.01 \\).",
          "workingLatex": "\\text{half of } 0.01 = 0.005",
          "explanation": "\\( 0.40 \\) to \\( 2 \\) s.f. means the second figure lies in the \\( 0.01 \\) place."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.40 - 0.005 = 0.395 \\qquad 0.40 + 0.005 = 0.405",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.395 \\le T < 0.405",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.395 \\le T < 0.405 \\)"
    }
  },
  {
    "id": "gn30-056",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A capacitor's value is stated as \\( 0.0072\\,\\mu\\mathrm{F} \\), correct to \\( 2 \\) significant figures. Write down the largest and smallest possible values of the capacitance \\( C \\), using a single inequality.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The last significant figure (the \\( 2 \\)) is in the ten-thousandths place, so the rounding unit is \\( 0.0001 \\).",
          "workingLatex": "\\text{half of } 0.0001 = 0.00005",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the smallest and largest possible values.",
          "workingLatex": "0.0072 - 0.00005 = 0.00715 \\qquad 0.0072 + 0.00005 = 0.00725",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Write as one inequality.",
          "workingLatex": "0.00715 \\le C < 0.00725",
          "explanation": "The smallest value is included; the largest is the excluded upper bound."
        }
      ],
      "finalAnswer": "\\( 0.00715 \\le C < 0.00725 \\)"
    }
  },
  {
    "id": "gn30-057",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Correct to \\( 3 \\) significant figures, a measured pressure is \\( 0.105\\,\\mathrm{kPa} \\). Write down the error interval for the pressure \\( P \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "three sig figs"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The three significant figures are \\( 1 \\), \\( 0 \\) and \\( 5 \\); the last lies in the thousandths place, so the rounding unit is \\( 0.001 \\).",
          "workingLatex": "\\text{half of } 0.001 = 0.0005",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.105 - 0.0005 = 0.1045 \\qquad 0.105 + 0.0005 = 0.1055",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.1045 \\le P < 0.1055",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.1045 \\le P < 0.1055 \\)"
    }
  },
  {
    "id": "gn30-058",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The width of a microchip is \\( w\\,\\mathrm{mm} \\), where \\( 0.0235 \\le w < 0.0245 \\). To how many significant figures, and to what value, has the width been rounded?",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "reverse"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the midpoint of the interval — this is the rounded value.",
          "workingLatex": "\\frac{0.0235 + 0.0245}{2} = \\frac{0.0480}{2} = 0.024",
          "explanation": "The rounded value sits exactly between the two bounds."
        },
        {
          "stepNumber": 2,
          "description": "Count the significant figures of \\( 0.024 \\).",
          "workingLatex": "0.024 \\to 2,\\ 4 \\Rightarrow 2 \\text{ s.f.}",
          "explanation": "Leading zeros are not significant, so \\( 2 \\) and \\( 4 \\) are the two significant figures."
        }
      ],
      "finalAnswer": "\\( 0.024 \\), to \\( 2 \\) significant figures"
    }
  },
  {
    "id": "gn30-059",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A density is given as \\( 0.80\\,\\mathrm{g/cm^{3}} \\), correct to \\( 2 \\) significant figures. Priya writes the error interval as \\( 0.75 \\le \\rho < 0.85 \\). Identify her mistake and write the correct error interval for the density \\( \\rho \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "reasoning"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the correct rounding unit. The trailing zero is significant, so the last figure is in the hundredths place, giving a rounding unit of \\( 0.01 \\).",
          "workingLatex": "\\text{half of } 0.01 = 0.005",
          "explanation": "Priya used half of \\( 0.1 \\) instead of half of \\( 0.01 \\)."
        },
        {
          "stepNumber": 2,
          "description": "Find the correct bounds.",
          "workingLatex": "0.80 - 0.005 = 0.795 \\qquad 0.80 + 0.005 = 0.805",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the correct interval.",
          "workingLatex": "0.795 \\le \\rho < 0.805",
          "explanation": "Priya treated the value as if rounded to \\( 1 \\) s.f.; the trailing zero shows it is to \\( 2 \\) s.f."
        }
      ],
      "finalAnswer": "\\( 0.795 \\le \\rho < 0.805 \\)"
    }
  },
  {
    "id": "gn30-060",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A length \\( L \\) is measured as \\( 0.0480\\,\\mathrm{m} \\) correct to \\( 3 \\) significant figures. Write down the error interval for \\( L \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the rounding unit.",
          "workingLatex": "3\\text{ s.f. of }0.0480 \\Rightarrow \\text{last figure is the } 0.0001\\text{ place}",
          "explanation": "The third significant figure of \\( 0.0480 \\) is the final \\( 0 \\), in the ten-thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Find the half-unit.",
          "workingLatex": "\\tfrac{1}{2}\\times 0.0001 = 0.00005",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Form the bounds.",
          "workingLatex": "0.0480 - 0.00005 = 0.04795,\\qquad 0.0480 + 0.00005 = 0.04805",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.04795 \\le L < 0.04805 \\)"
    }
  },
  {
    "id": "gn30-061",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The mass of a coin is \\( m\\,\\mathrm{g} \\), where \\( m = 0.0072 \\) correct to \\( 2 \\) significant figures. Write down the error interval for \\( m \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the rounding unit.",
          "workingLatex": "2\\text{ s.f. of }0.0072 \\Rightarrow \\text{last figure is the }0.0001\\text{ place}",
          "explanation": "The two significant figures are the \\( 7 \\) and the \\( 2 \\); the \\( 2 \\) sits in the ten-thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Apply the half-unit either side.",
          "workingLatex": "0.0072 \\pm 0.00005",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.00715 \\le m < 0.00725",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00715 \\le m < 0.00725 \\)"
    }
  },
  {
    "id": "gn30-062",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A reaction time \\( t \\) is recorded as \\( 0.36\\,\\mathrm{s} \\) correct to \\( 2 \\) significant figures. Work out the largest possible value of \\( t \\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "upper bound",
      "significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the rounding unit.",
          "workingLatex": "2\\text{ s.f. of }0.36 \\Rightarrow \\text{last figure is the }0.01\\text{ place}",
          "explanation": "The figure \\( 6 \\) lies in the hundredths column."
        },
        {
          "stepNumber": 2,
          "description": "Add half a unit to get the upper bound.",
          "workingLatex": "0.36 + \\tfrac{1}{2}\\times 0.01 = 0.36 + 0.005 = 0.365",
          "explanation": "The largest possible value is the upper bound, which itself rounds down to \\( 0.36 \\)."
        }
      ],
      "finalAnswer": "\\( 0.365\\,\\mathrm{s} \\)",
      "canonicalAnswer": "0.365"
    }
  },
  {
    "id": "gn30-063",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The concentration of a solution is \\( 0.250\\,\\mathrm{mol/L} \\) correct to \\( 3 \\) significant figures. Write down the smallest possible value of the concentration.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "lower bound",
      "significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the rounding unit.",
          "workingLatex": "3\\text{ s.f. of }0.250 \\Rightarrow \\text{last figure is the }0.001\\text{ place}",
          "explanation": "The trailing \\( 0 \\) is significant and sits in the thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Subtract half a unit to get the lower bound.",
          "workingLatex": "0.250 - \\tfrac{1}{2}\\times 0.001 = 0.250 - 0.0005 = 0.2495",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.2495\\,\\mathrm{mol/L} \\)",
      "canonicalAnswer": "0.2495"
    }
  },
  {
    "id": "gn30-064",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A wire has diameter \\( d\\,\\mathrm{mm} \\). When truncated to \\( 2 \\) decimal places the diameter is given as \\( 0.08\\,\\mathrm{mm} \\). Write down the error interval for \\( d \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how truncation works.",
          "workingLatex": "\\text{Truncating to }2\\text{ d.p. discards digits after the }0.01\\text{ place}",
          "explanation": "Truncation chops off later digits without rounding, so the true value is at least the stated value."
        },
        {
          "stepNumber": 2,
          "description": "The truncated value is the lower bound.",
          "workingLatex": "d \\ge 0.08",
          "explanation": "Any value from \\( 0.08 \\) upwards truncates to \\( 0.08 \\)."
        },
        {
          "stepNumber": 3,
          "description": "The upper bound is the next truncation step.",
          "workingLatex": "d < 0.08 + 0.01 = 0.09",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.08 \\le d < 0.09 \\)"
    }
  },
  {
    "id": "gn30-065",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A digital balance truncates readings to \\( 3 \\) decimal places. It displays the mass of a sample as \\( 0.207\\,\\mathrm{g} \\). Write down the error interval for the true mass \\( M \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval",
      "decimal places"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the truncation rule.",
          "workingLatex": "\\text{Truncating to }3\\text{ d.p. keeps the }0.001\\text{ place and discards the rest}",
          "explanation": "Truncation removes the following digits without rounding."
        },
        {
          "stepNumber": 2,
          "description": "Lower bound equals the displayed value.",
          "workingLatex": "M \\ge 0.207",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Upper bound is the next step up.",
          "workingLatex": "M < 0.207 + 0.001 = 0.208",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.207 \\le M < 0.208 \\)"
    }
  },
  {
    "id": "gn30-066",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A capacitor is labelled \\( 0.0450\\,\\mu\\mathrm{F} \\) correct to \\( 3 \\) significant figures. Work out the difference between the largest and smallest possible values.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "bound difference"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the rounding unit.",
          "workingLatex": "3\\text{ s.f. of }0.0450 \\Rightarrow \\text{last figure is the }0.0001\\text{ place}",
          "explanation": "The final \\( 0 \\) is the third significant figure, in the ten-thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "The bounds lie half a unit either side.",
          "workingLatex": "0.04495 \\le C < 0.04505",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "The difference between the bounds is one full unit.",
          "workingLatex": "0.04505 - 0.04495 = 0.0001",
          "explanation": "The interval width equals the rounding unit."
        }
      ],
      "finalAnswer": "\\( 0.0001\\,\\mu\\mathrm{F} \\)",
      "canonicalAnswer": "0.0001"
    }
  },
  {
    "id": "gn30-067",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A scientist states that a measured volume \\( V\\,\\mathrm{mL} \\) satisfies \\( 0.0625 \\le V < 0.0635 \\). Write down \\( V \\) rounded correct to \\( 3 \\) significant figures.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "reverse",
      "significant figures"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the midpoint of the interval.",
          "workingLatex": "\\frac{0.0625 + 0.0635}{2} = \\frac{0.126}{2} = 0.063",
          "explanation": "The rounded value sits at the centre of its error interval."
        },
        {
          "stepNumber": 2,
          "description": "Check the precision.",
          "workingLatex": "0.063 \\Rightarrow 6,\\,3 \\text{ and a trailing }0 \\Rightarrow 0.0630",
          "explanation": "The half-unit of \\( 0.0005 \\) corresponds to rounding to the \\( 0.001 \\) place, i.e. \\( 3 \\) significant figures."
        }
      ],
      "finalAnswer": "\\( 0.0630\\,\\mathrm{mL} \\)",
      "canonicalAnswer": "0.063"
    }
  },
  {
    "id": "gn30-068",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The thickness of a sheet of foil is \\( 0.0019\\,\\mathrm{cm} \\) correct to \\( 2 \\) significant figures. Work out the largest possible thickness.",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "upper bound",
      "leading zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the rounding unit.",
          "workingLatex": "2\\text{ s.f. of }0.0019 \\Rightarrow \\text{last figure is the }0.0001\\text{ place}",
          "explanation": "The \\( 9 \\) lies in the ten-thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Add half a unit for the upper bound.",
          "workingLatex": "0.0019 + \\tfrac{1}{2}\\times 0.0001 = 0.0019 + 0.00005 = 0.00195",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.00195\\,\\mathrm{cm} \\)",
      "canonicalAnswer": "0.00195"
    }
  },
  {
    "id": "gn30-069",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A timer truncates to \\( 1 \\) decimal place and shows an interval of \\( 0.0\\,\\mathrm{s} \\). Explain why the true time \\( T \\) satisfies \\( 0 \\le T < 0.1 \\), and write down the smallest value \\( T \\) cannot reach.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "truncation",
      "error interval",
      "reasoning"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply truncation to 1 d.p.",
          "workingLatex": "\\text{Any }T\\text{ with }0 \\le T < 0.1\\text{ truncates to }0.0",
          "explanation": "Truncation discards everything after the tenths place without rounding up."
        },
        {
          "stepNumber": 2,
          "description": "Identify the bounds.",
          "workingLatex": "T_{\\min} = 0,\\qquad T < 0.1",
          "explanation": "The lower bound \\( 0 \\) is achievable, but \\( 0.1 \\) would display as \\( 0.1 \\), not \\( 0.0 \\)."
        }
      ],
      "finalAnswer": "\\( 0.1\\,\\mathrm{s} \\) (the excluded upper bound)",
      "canonicalAnswer": "0.1"
    }
  },
  {
    "id": "gn30-070",
    "topicRef": "gn30",
    "topicTitle": "Error intervals and truncation",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A resistor is measured as \\( 0.500\\,\\mathrm{k\\Omega} \\) correct to \\( 3 \\) significant figures. Write down the error interval, giving your bounds in \\( \\mathrm{k\\Omega} \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error interval",
      "significant figures",
      "trailing zeros"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the rounding unit.",
          "workingLatex": "3\\text{ s.f. of }0.500 \\Rightarrow \\text{last figure is the }0.001\\text{ place}",
          "explanation": "Both trailing zeros are significant, so the last significant figure is in the thousandths column."
        },
        {
          "stepNumber": 2,
          "description": "Apply the half-unit either side.",
          "workingLatex": "0.500 \\pm \\tfrac{1}{2}\\times 0.001 = 0.500 \\pm 0.0005",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.4995 \\le R < 0.5005",
          "explanation": ""
        }
      ],
      "finalAnswer": "\\( 0.4995 \\le R < 0.5005 \\)"
    }
  }
];
