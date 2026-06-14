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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "When a value is rounded to the nearest 10, anything within 5 of 350 rounds to it. So we need the half-unit, which is half of 10."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 5 \\) for the lower bound.",
          "workingLatex": "350 - 5 = 345",
          "explanation": "The smallest number that still rounds up to 350 is 345. Anything below 345 would round to 340 instead."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 5 \\) for the upper bound.",
          "workingLatex": "350 + 5 = 355",
          "explanation": "The boundary above is 355. Numbers from 355 onwards round up to 360, so 355 itself is excluded."
        },
        {
          "stepNumber": 4,
          "description": "Write the bounds as an inequality.",
          "workingLatex": "345 \\le n < 355",
          "explanation": "The lower bound is included (it rounds up to 350), but the upper bound is not (it rounds up to 360). This is why we use \\( \\le \\) on the left and \\( < \\) on the right."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "The rope is measured to the nearest 10 cm, so the true length can sit up to 5 cm either side of 80 cm. Half of the rounding unit 10 is 5."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 5 \\) for the lower bound.",
          "workingLatex": "80 - 5 = 75",
          "explanation": "75 cm is the least length that rounds to 80 cm. Anything shorter would round to 70 cm."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 5 \\) for the upper bound.",
          "workingLatex": "80 + 5 = 85",
          "explanation": "85 cm is the upper boundary; a length of exactly 85 cm would round up to 90 cm, so it is excluded."
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality.",
          "workingLatex": "75 \\le L < 85",
          "explanation": "The lower bound is included and the upper bound is not, so we use \\( \\le \\) then \\( < \\)."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Rounding to the nearest whole number uses a rounding unit of 1, so the bounds lie half a unit — 0.5 — either side of 16."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.5 \\) for the lower bound.",
          "workingLatex": "16 - 0.5 = 15.5",
          "explanation": "15.5 is the smallest value that rounds up to 16; below it the value rounds to 15."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.5 \\) for the upper bound.",
          "workingLatex": "16 + 0.5 = 16.5",
          "explanation": "16.5 rounds up to 17, so it sits just outside the interval as the excluded upper bound."
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality.",
          "workingLatex": "15.5 \\le x < 16.5",
          "explanation": "Include the lower bound with \\( \\le \\) and exclude the upper bound with \\( < \\)."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Measured to the nearest kilogram, the rounding unit is 1 kg, so the true mass lies within 0.5 kg of 9 kg."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.5 \\) for the lower bound.",
          "workingLatex": "9 - 0.5 = 8.5",
          "explanation": "8.5 kg is the lightest mass that still rounds to 9 kg."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.5 \\) for the upper bound.",
          "workingLatex": "9 + 0.5 = 9.5",
          "explanation": "9.5 kg would round up to 10 kg, so it is the excluded upper boundary."
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality.",
          "workingLatex": "8.5 \\le m < 9.5",
          "explanation": "The lower bound is included and the upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.1 = 0.05",
          "explanation": "One decimal place means rounding to the nearest 0.1, so the half-unit that sets each boundary is 0.05."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.05 \\) for the lower bound.",
          "workingLatex": "4.7 - 0.05 = 4.65",
          "explanation": "4.65 is the smallest number that rounds to 4.7; below it the value rounds down to 4.6."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.05 \\) for the upper bound.",
          "workingLatex": "4.7 + 0.05 = 4.75",
          "explanation": "4.75 rounds up to 4.8, so it is the excluded upper bound."
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality.",
          "workingLatex": "4.65 \\le p < 4.75",
          "explanation": "Include the lower bound, exclude the upper bound."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.1 = 0.05",
          "explanation": "Rounding to 1 decimal place is rounding to the nearest 0.1, so each boundary lies 0.05 from 12.3."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.05 \\) for the lower bound.",
          "workingLatex": "12.3 - 0.05 = 12.25",
          "explanation": "12.25 is the shortest height that still rounds to 12.3 cm."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.05 \\) for the upper bound.",
          "workingLatex": "12.3 + 0.05 = 12.35",
          "explanation": "12.35 cm rounds up to 12.4 cm, so it is excluded from the interval."
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality.",
          "workingLatex": "12.25 \\le h < 12.35",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Locate the first decimal place.",
          "workingLatex": "7.\\underline{8}\\,46",
          "explanation": "Truncating to 1 decimal place means we keep everything up to and including the first digit after the point — the underlined 8 — and discard the rest."
        },
        {
          "stepNumber": 2,
          "description": "Discard later digits without rounding.",
          "workingLatex": "7.\\underline{8}46 \\longrightarrow 7.8",
          "explanation": "We simply cut off the 4 and 6; truncation never rounds up, so even though the next digit is 4 the kept digit stays as 8."
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
          "description": "Locate the second decimal place.",
          "workingLatex": "5.3\\underline{9}\\,2",
          "explanation": "Keep the digits up to the second decimal place — the underlined 9 — and mark the rest for removal."
        },
        {
          "stepNumber": 2,
          "description": "Discard later digits without rounding.",
          "workingLatex": "5.39\\underline{2} \\longrightarrow 5.39",
          "explanation": "The trailing 2 is simply chopped off. Truncation does not round up, so 5.39 stays as it is."
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
          "description": "Locate the third decimal place.",
          "workingLatex": "23.09\\underline{7}\\,5",
          "explanation": "Keep the digits up to the third decimal place — the underlined 7 — and mark the trailing 5 for removal."
        },
        {
          "stepNumber": 2,
          "description": "Discard the trailing digit without rounding.",
          "workingLatex": "23.097\\underline{5} \\longrightarrow 23.097",
          "explanation": "The common slip here is to round the 7 up to 8 because the next digit is 5. Truncation never rounds, so the 7 stays."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "To the nearest 10, the boundaries lie 5 either side of 130. This 5 is half of the rounding unit."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 5 \\) to find \\( a \\).",
          "workingLatex": "130 - 5 = 125",
          "explanation": "\\( a \\) is the lower bound, the smallest value that rounds to 130."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 5 \\) to find \\( b \\).",
          "workingLatex": "130 + 5 = 135",
          "explanation": "\\( b \\) is the upper bound; 135 itself would round up to 140, so it is excluded by the \\( < \\) sign."
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
          "description": "Locate the second decimal place.",
          "workingLatex": "0.6\\underline{8}\\,14",
          "explanation": "Keep the digits up to the second decimal place — the underlined 8 — and discard the 1 and 4 that follow."
        },
        {
          "stepNumber": 2,
          "description": "Discard later digits without rounding.",
          "workingLatex": "0.68\\underline{1}4 \\longrightarrow 0.68",
          "explanation": "Chop off the trailing 14. Truncation keeps the 8 as it is rather than rounding it up."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.1 = 0.05",
          "explanation": "Rounded to 1 decimal place, the half-unit is 0.05. The smallest possible value is found by subtracting this from 2.5."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to get the lower bound.",
          "workingLatex": "2.5 - 0.05 = 2.45",
          "explanation": "2.45 litres is the least capacity that still rounds to 2.5; anything smaller would round to 2.4."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "The length is rounded to the nearest 10, so the boundaries lie half of 10 above and below 240."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 5 \\) for the lower bound.",
          "workingLatex": "240 - 5 = 235",
          "explanation": "235 cm is the shortest length that rounds to 240 cm."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 5 \\) for the upper bound.",
          "workingLatex": "240 + 5 = 245",
          "explanation": "245 cm would round up to 250 cm, so it is the excluded upper boundary."
        },
        {
          "stepNumber": 4,
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
          "description": "Mark the cut after the second decimal place.",
          "workingLatex": "8.57\\,|\\,36",
          "explanation": "Truncating to 2 decimal places means everything after the second decimal digit is removed, so we draw the cut between the 7 and the 3."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "8.57",
          "explanation": "The discarded digits 36 do not cause any rounding — truncation simply drops them, leaving 8.57."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.1 = 0.05",
          "explanation": "Rounded to 1 decimal place, the rounding unit is 0.1, so the boundaries sit 0.05 either side of 6.3."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.05 \\) for the lower bound.",
          "workingLatex": "6.3 - 0.05 = 6.25",
          "explanation": "6.25 kg is the lightest mass that rounds to 6.3 kg."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.05 \\) for the upper bound.",
          "workingLatex": "6.3 + 0.05 = 6.35",
          "explanation": "6.35 kg rounds up to 6.4 kg, so it is excluded."
        },
        {
          "stepNumber": 4,
          "description": "Write the error interval.",
          "workingLatex": "6.25 \\le m < 6.35",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "To the nearest 10, the lower boundary lies 5 below 80. The smallest possible value is this lower bound."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to get the smallest value.",
          "workingLatex": "80 - 5 = 75",
          "explanation": "Numbers from 75 up to (but not including) 85 round to 80, so the smallest is 75 — which is included because it rounds up."
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
          "description": "Mark the cut after the first decimal place.",
          "workingLatex": "41.9\\,|\\,28",
          "explanation": "Truncating to 1 decimal place removes everything after the first decimal digit, so the cut falls between the 9 and the 2."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "41.9",
          "explanation": "The digits 28 are discarded, not rounded — even though 28 is close to a half, truncation never rounds up."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "To the nearest 10 ml, the upper boundary lies 5 ml above 500 ml."
        },
        {
          "stepNumber": 2,
          "description": "Add to get the upper bound.",
          "workingLatex": "500 + 5 = 505",
          "explanation": "Values below 505 ml round down to 500 ml. 505 ml is the upper bound — the value the capacity approaches but does not reach."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Rounded to the nearest whole number, the rounding unit is 1, so the boundaries lie 0.5 either side of 17."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.5 \\) for the lower bound.",
          "workingLatex": "17 - 0.5 = 16.5",
          "explanation": "16.5 is the smallest value that rounds up to 17."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.5 \\) for the upper bound.",
          "workingLatex": "17 + 0.5 = 17.5",
          "explanation": "17.5 rounds up to 18, so it is the excluded upper boundary."
        },
        {
          "stepNumber": 4,
          "description": "Write the error interval.",
          "workingLatex": "16.5 \\le x < 17.5",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Mark the cut after the third decimal place.",
          "workingLatex": "0.496\\,|\\,1",
          "explanation": "Truncating to 3 decimal places keeps the first three decimal digits, so the cut falls between the 6 and the final 1."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "0.496",
          "explanation": "The trailing 1 is removed and the third digit stays as 6 — truncation does not round it up to 7."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.1 = 0.05",
          "explanation": "Rounded to 1 decimal place, the lower boundary lies 0.05 below 9.8."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to get the lower bound.",
          "workingLatex": "9.8 - 0.05 = 9.75",
          "explanation": "9.75 m is the shortest height that still rounds to 9.8 m, so it is the lower bound."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "Reported to the nearest 10, the boundaries lie 5 either side of 3500."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 5 \\) for the lower bound.",
          "workingLatex": "3500 - 5 = 3495",
          "explanation": "3495 is the smallest count that rounds to 3500."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 5 \\) for the upper bound.",
          "workingLatex": "3500 + 5 = 3505",
          "explanation": "3505 would round up to 3510, so it is excluded."
        },
        {
          "stepNumber": 4,
          "description": "Write the error interval.",
          "workingLatex": "3495 \\le p < 3505",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Mark the cut after the first decimal place.",
          "workingLatex": "12.0\\,|\\,7",
          "explanation": "Truncating to 1 decimal place keeps the tenths digit (here a 0) and discards everything after it."
        },
        {
          "stepNumber": 2,
          "description": "Write the truncated value.",
          "workingLatex": "12.0",
          "explanation": "Although the next digit is 7, truncation does not round up, so the tenths digit stays as 0 and the answer is 12.0."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Rounded to the nearest whole number, the boundaries lie 0.5 either side of 23."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\( 0.5 \\) for the lower bound.",
          "workingLatex": "23 - 0.5 = 22.5",
          "explanation": "22.5 °C is the lowest temperature that rounds to 23 °C."
        },
        {
          "stepNumber": 3,
          "description": "Add \\( 0.5 \\) for the upper bound.",
          "workingLatex": "23 + 0.5 = 23.5",
          "explanation": "23.5 °C rounds up to 24 °C, so it is the excluded upper boundary."
        },
        {
          "stepNumber": 4,
          "description": "Write the error interval.",
          "workingLatex": "22.5 \\le t < 23.5",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.01 = 0.005",
          "explanation": "Rounding to 2 decimal places means rounding to the nearest 0.01, so each boundary lies 0.005 from 3.27."
        },
        {
          "stepNumber": 2,
          "description": "Find both bounds, then write the interval.",
          "workingLatex": "3.27 - 0.005 = 3.265 \\qquad 3.27 + 0.005 = 3.275",
          "explanation": "Subtract for the lower bound and add for the upper bound. The lower value rounds up to 3.27 and the upper value rounds up to 3.28, so the upper bound is excluded."
        },
        {
          "stepNumber": 3,
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
          "description": "Identify the half-unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.01 = 0.005",
          "explanation": "Rounding to 2 decimal places uses a rounding unit of 0.01, so the bounds lie 0.005 either side of 0.84."
        },
        {
          "stepNumber": 2,
          "description": "Apply the half-unit and state the bounds.",
          "workingLatex": "0.84 - 0.005 = 0.835 \\qquad 0.84 + 0.005 = 0.845",
          "explanation": "Subtract for the lower bound and add for the upper bound. The upper value 0.845 rounds up to 0.85, so it is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "0.835 \\le L < 0.845",
          "explanation": "Include the lower bound and exclude the upper bound."
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
          "description": "Identify the place of the significant figure.",
          "workingLatex": "600 \\Rightarrow \\text{first s.f. is the } 6 \\text{ in the hundreds}",
          "explanation": "The only significant figure is the 6, which sits in the hundreds column, so the value has been rounded to the nearest 100."
        },
        {
          "stepNumber": 2,
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 100 = 50",
          "explanation": "Half of the rounding unit 100 is 50, which is the distance from 600 to each boundary."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "600 - 50 = 550 \\qquad 600 + 50 = 650",
          "explanation": "550 rounds up to 600 (included), while 650 rounds up to 700 (excluded), giving \\( 550 \\le n < 650 \\)."
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
          "description": "Identify the place of the significant figure.",
          "workingLatex": "0.07 \\Rightarrow \\text{first s.f. is the } 7 \\text{ in the hundredths}",
          "explanation": "Leading zeros are not significant, so the first significant figure is the 7 in the hundredths column. The rounding unit is therefore 0.01."
        },
        {
          "stepNumber": 2,
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.01 = 0.005",
          "explanation": "Half of 0.01 is 0.005, the distance from 0.07 to each boundary."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.07 - 0.005 = 0.065 \\qquad 0.07 + 0.005 = 0.075",
          "explanation": "0.065 rounds up to 0.07 (included) and 0.075 rounds up to 0.08 (excluded), giving \\( 0.065 \\le p < 0.075 \\)."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "4500 \\Rightarrow \\text{2nd s.f. is the } 5 \\text{ in the hundreds}",
          "explanation": "The two significant figures are 4 and 5; the last of these sits in the hundreds column, so the value is rounded to the nearest 100."
        },
        {
          "stepNumber": 2,
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 100 = 50",
          "explanation": "Half of the rounding unit 100 is 50."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "4500 - 50 = 4450 \\qquad 4500 + 50 = 4550",
          "explanation": "4450 is included and 4550 is excluded, giving \\( 4450 \\le w < 4550 \\)."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.038 \\Rightarrow \\text{2nd s.f. is the } 8 \\text{ in the thousandths}",
          "explanation": "The two significant figures are 3 and 8; the last, the 8, lies in the thousandths column, so the rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.001 = 0.0005",
          "explanation": "Half of 0.001 is 0.0005, the distance from 0.038 to each boundary."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.038 - 0.0005 = 0.0375 \\qquad 0.038 + 0.0005 = 0.0385",
          "explanation": "0.0375 is included and 0.0385 is excluded, giving \\( 0.0375 \\le m < 0.0385 \\)."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Measured to the nearest 1 kg, the half-unit is 0.5, so the true mass lies within 0.5 kg of 7 kg."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "7 - 0.5 = 6.5 \\qquad 7 + 0.5 = 7.5",
          "explanation": "6.5 kg is included (it rounds up to 7) and 7.5 kg is excluded (it rounds up to 8), giving \\( 6.5 \\le M < 7.5 \\)."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "Measured to the nearest 10 cm, the half-unit is 5 cm, the distance from 140 to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "State the bounds.",
          "workingLatex": "140 - 5 = 135 \\qquad 140 + 5 = 145",
          "explanation": "135 cm is included and 145 cm is excluded, giving \\( 135 \\le d < 145 \\)."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "t \\ge 5.3",
          "explanation": "Truncation chops off later digits without rounding up, so the true value can never be less than the displayed 5.3. This is the key difference from rounding, where the lower bound would be 5.25."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound.",
          "workingLatex": "t < 5.3 + 0.1 = 5.4",
          "explanation": "Any value from 5.3 up to (but not including) 5.4 keeps its tenths digit as 3 when truncated. At 5.4 the tenths digit becomes 4, so 5.4 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "5.3 \\le t < 5.4",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "x \\ge 12",
          "explanation": "Unlike rounding, truncation never raises the value, so the lower bound is the stated value itself: \\( x \\) cannot be below 12."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound.",
          "workingLatex": "x < 12 + 1 = 13",
          "explanation": "Everything from 12 up to (but not including) 13 truncates to a whole number of 12. At 13 the whole-number part changes, so 13 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "12 \\le x < 13",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Write the truncation interval.",
          "workingLatex": "\\text{Truncation: } 8.6 \\le x < 8.7",
          "explanation": "Truncation keeps the value at or above 8.6 and below the next tenths step 8.7, since it never rounds up."
        },
        {
          "stepNumber": 2,
          "description": "Write the rounding interval.",
          "workingLatex": "\\text{Rounding: } 8.55 \\le x < 8.65",
          "explanation": "Rounding to 1 d.p. uses a half-unit of 0.05, so the interval is centred on 8.6 and runs from 8.55 to 8.65."
        },
        {
          "stepNumber": 3,
          "description": "Compare the upper bounds.",
          "workingLatex": "8.7 > 8.65",
          "explanation": "Truncation's upper bound 8.7 is larger than rounding's upper bound 8.65, so truncation gives the larger upper bound."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "c \\ge 1.5",
          "explanation": "Truncation discards later digits without rounding up, so the true capacity is at least the displayed 1.5 litres."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound.",
          "workingLatex": "c < 1.5 + 0.1 = 1.6",
          "explanation": "Any value from 1.5 up to just below 1.6 truncates to 1.5; at 1.6 the tenths digit changes, so 1.6 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "1.5 \\le c < 1.6",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.01 = 0.005",
          "explanation": "Rounding to 2 decimal places is rounding to the nearest hundredth, so each value rounds to within 0.005 of 4.27."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.005 \\) to find the bounds.",
          "workingLatex": "4.27 - 0.005 = 4.265 \\qquad 4.27 + 0.005 = 4.275",
          "explanation": "The lower bound 4.265 rounds up to 4.27 and is included; the upper bound 4.275 rounds up to 4.28 and is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "4.265 \\le x < 4.275",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 100 = 50",
          "explanation": "Rounding 700 to 1 s.f. is rounding to the nearest 100, so the half-unit is 50 — the distance from 700 to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 50 \\) to find the bounds.",
          "workingLatex": "700 - 50 = 650 \\qquad 700 + 50 = 750",
          "explanation": "650 rounds up to 700 and is included; 750 rounds up to 800 and is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "650 \\le y < 750",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "8.3 \\Rightarrow \\text{2nd s.f. is the } 3 \\text{ in the tenths}",
          "explanation": "For 8.3 to 2 s.f., the second figure is in the tenths place, so the value is rounded to the nearest 0.1."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add the half-unit \\( 0.05 \\).",
          "workingLatex": "8.3 - 0.05 = 8.25 \\qquad 8.3 + 0.05 = 8.35",
          "explanation": "Half of 0.1 is 0.05. The lower bound 8.25 is included; the upper bound 8.35 rounds up to 8.4 and is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "8.25 \\le n < 8.35",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "5.61 \\le p",
          "explanation": "Truncation chops off later digits without rounding, so \\( p \\) is at least the displayed 5.61."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound one unit up.",
          "workingLatex": "p < 5.61 + 0.01 = 5.62",
          "explanation": "Any value from 5.61 up to just below 5.62 keeps its first two decimals as 61. At 5.62 the hundredths digit changes, so 5.62 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "5.61 \\le p < 5.62",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "40 \\le N",
          "explanation": "Truncating to 1 s.f. keeps the tens digit and zeroes the rest without rounding up, so \\( N \\) is at least 40."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound one ten up.",
          "workingLatex": "N < 40 + 10 = 50",
          "explanation": "Everything from 40 up to just below 50 truncates to 40. At 50 the tens digit changes to 5, so 50 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "40 \\le N < 50",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 1 = 0.5",
          "explanation": "Measured to the nearest 1 cm, the half-unit is 0.5 cm, the distance from 13 to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 0.5 \\) for the bounds.",
          "workingLatex": "13 - 0.5 = 12.5 \\qquad 13 + 0.5 = 13.5",
          "explanation": "12.5 cm is included (rounds up to 13) and 13.5 cm is excluded (rounds up to 14)."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "12.5 \\le L < 13.5",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 10 = 5",
          "explanation": "Recorded to the nearest 10 g, the half-unit is 5 g, the distance from 850 to each boundary."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add \\( 5 \\) for the bounds.",
          "workingLatex": "850 - 5 = 845 \\qquad 850 + 5 = 855",
          "explanation": "845 g is included and 855 g is excluded (it would round up to 860 g)."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "845 \\le m < 855",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find half the rounding unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.01 = 0.005",
          "explanation": "Rounding to 2 d.p. uses a half-unit of 0.005. The smallest possible value is the lower bound, found by subtracting this from 0.40."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to get the lower bound.",
          "workingLatex": "0.40 - 0.005 = 0.395",
          "explanation": "0.395 is the smallest value that rounds to 0.40; anything smaller would round down to 0.39."
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
          "description": "Describe the truncation interval.",
          "workingLatex": "9.3 \\le d < 9.4",
          "explanation": "Truncating to 1 d.p. keeps the tenths digit without rounding, so values from 9.3 up to just below 9.4 all truncate to 9.3."
        },
        {
          "stepNumber": 2,
          "description": "State the upper bound.",
          "workingLatex": "d < 9.4",
          "explanation": "The upper bound is 9.4 — the value \\( d \\) gets arbitrarily close to but can never reach, since 9.4 would truncate to 9.4, not 9.3."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.045 \\Rightarrow \\text{2nd s.f. is the } 5 \\text{ in the thousandths}",
          "explanation": "For 0.045 to 2 s.f., the significant figures are 4 and 5; the last sits in the thousandths column, so the rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Subtract and add the half-unit \\( 0.0005 \\).",
          "workingLatex": "0.045 - 0.0005 = 0.0445 \\qquad 0.045 + 0.0005 = 0.0455",
          "explanation": "Half of 0.001 is 0.0005. The lower bound 0.0445 is included; the upper bound 0.0455 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "0.0445 \\le V < 0.0455",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "The truncated value is the lower bound.",
          "workingLatex": "6.0 \\le w",
          "explanation": "For 6.0 to 2 s.f., the second figure is in the tenths. Truncation never rounds up, so 6.0 is the lower bound of the true value."
        },
        {
          "stepNumber": 2,
          "description": "Find the upper bound one tenth up.",
          "workingLatex": "w < 6.0 + 0.1 = 6.1",
          "explanation": "Any value from 6.0 up to just below 6.1 still truncates to 6.0; at 6.1 the tenths digit changes, so 6.1 is excluded."
        },
        {
          "stepNumber": 3,
          "description": "Write the error interval.",
          "workingLatex": "6.0 \\le w < 6.1",
          "explanation": "Lower bound included, upper bound excluded. Note this differs from the rounding interval \\( 5.95 \\le w < 6.05 \\)."
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
          "description": "Identify the place of the significant figure.",
          "workingLatex": "0.07 \\Rightarrow \\text{1st s.f. is the } 7 \\text{ in the hundredths}",
          "explanation": "Leading zeros are not significant, so the first significant figure is the 7 in the hundredths column. Values are therefore rounded to the nearest 0.01."
        },
        {
          "stepNumber": 2,
          "description": "Find the half-unit and the bounds.",
          "workingLatex": "0.07 - 0.005 = 0.065 \\qquad 0.07 + 0.005 = 0.075",
          "explanation": "Half of 0.01 is 0.005. Subtract for the lower bound and add for the upper bound."
        },
        {
          "stepNumber": 3,
          "description": "Write as an inequality.",
          "workingLatex": "0.065 \\le x < 0.075",
          "explanation": "The lower bound is included (it rounds up to 0.07) and the upper bound is excluded (it rounds up to 0.08)."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.048 \\Rightarrow \\text{2nd s.f. is the } 8 \\text{ in the thousandths}",
          "explanation": "The two significant figures of 0.048 are the 4 and the 8; the last, the 8, sits in the thousandths column, so the rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Find the half-unit and the bounds.",
          "workingLatex": "0.048 - 0.0005 = 0.0475 \\qquad 0.048 + 0.0005 = 0.0485",
          "explanation": "Half of 0.001 is 0.0005. Subtract for the lower bound and add for the upper bound."
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.0475 \\le m < 0.0485",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.0030 \\Rightarrow \\text{2nd s.f. is the } 0 \\text{ in the ten-thousandths}",
          "explanation": "The trailing zero is significant, so the two significant figures are 3 and 0, with the last in the ten-thousandths column. The rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Subtract the half-unit for the smallest value.",
          "workingLatex": "0.0030 - 0.00005 = 0.00295",
          "explanation": "Half of 0.0001 is 0.00005. The smallest value is the lower bound, which is included — it rounds up to 0.0030."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.6 \\Rightarrow \\text{1st s.f. is the } 6 \\text{ in the tenths}",
          "explanation": "The single significant figure is in the tenths column, so the value is rounded to the nearest 0.1."
        },
        {
          "stepNumber": 2,
          "description": "Add the half-unit for the upper bound.",
          "workingLatex": "0.6 + 0.05 = 0.65",
          "explanation": "Half of 0.1 is 0.05. Any value up to but not including 0.65 rounds to 0.6."
        },
        {
          "stepNumber": 3,
          "description": "Express the largest possible value.",
          "workingLatex": "c < 0.65",
          "explanation": "The concentration can be arbitrarily close to 0.65 but cannot equal it, since 0.65 would round up to 0.7."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.0085 \\Rightarrow \\text{2nd s.f. is the } 5 \\text{ in the hundred-thousandths}",
          "explanation": "The two significant figures are 8 and 5; the last, the 5, sits in the hundred-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Find the half-unit and the bounds.",
          "workingLatex": "0.0085 - 0.00005 = 0.00845 \\qquad 0.0085 + 0.00005 = 0.00855",
          "explanation": "Half of 0.0001 is 0.00005. Subtract for the lower bound and add for the upper bound."
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.00845 \\le t < 0.00855",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.12 \\Rightarrow \\text{2nd s.f. is the } 2 \\text{ in the thousandths}",
          "explanation": "The two significant figures are 1 and 2; the last is in the thousandths column, so the rounding unit is 0.001 and the half-unit is 0.0005."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.12 - 0.0005 = 0.1195 \\qquad 0.12 + 0.0005 = 0.1205",
          "explanation": "Subtract and add 0.0005 to 0.12 to get the lower and upper bounds."
        },
        {
          "stepNumber": 3,
          "description": "Explain Tariq's error and state the interval.",
          "workingLatex": "0.1195 \\le r < 0.1205",
          "explanation": "A value of 0.125 would round up to 0.13, not 0.12, so it lies outside the interval. The true upper bound is 0.1205 and is excluded."
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
          "description": "Interval for the first wire.",
          "workingLatex": "0.009 \\pm 0.0005 \\Rightarrow 0.0085 \\le d_1 < 0.0095",
          "explanation": "For 0.009 to 1 s.f. the figure is in the thousandths, so the half-unit is 0.0005. This gives the first wire's interval."
        },
        {
          "stepNumber": 2,
          "description": "Interval for the second wire.",
          "workingLatex": "0.01 \\pm 0.0005 \\Rightarrow 0.0095 \\le d_2 < 0.0105",
          "explanation": "For 0.01 to 1 s.f. the figure is also in the thousandths, so again the half-unit is 0.0005, giving the second wire's interval."
        },
        {
          "stepNumber": 3,
          "description": "Compare the two intervals.",
          "workingLatex": "d_1 < 0.0095 \\le d_2",
          "explanation": "The first wire's values all lie below 0.0095, while the second wire's values are all at least 0.0095. The intervals do not overlap, so the wires cannot share the same true diameter."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.40 \\Rightarrow \\text{2nd s.f. is the } 0 \\text{ in the hundredths}",
          "explanation": "The trailing zero is significant, so the second figure lies in the hundredths column. The rounding unit is 0.01 and the half-unit is 0.005."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.40 - 0.005 = 0.395 \\qquad 0.40 + 0.005 = 0.405",
          "explanation": "Subtract and add 0.005 to 0.40. A common slip is to treat 0.40 as 1 s.f. and use 0.05 — the trailing zero shows it is to 2 s.f."
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.395 \\le T < 0.405",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.0072 \\Rightarrow \\text{2nd s.f. is the } 2 \\text{ in the ten-thousandths}",
          "explanation": "The two significant figures are 7 and 2; the last sits in the ten-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Find the smallest and largest possible values.",
          "workingLatex": "0.0072 - 0.00005 = 0.00715 \\qquad 0.0072 + 0.00005 = 0.00725",
          "explanation": "Half of 0.0001 is 0.00005. Subtract for the smallest value and add for the largest."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.105 \\Rightarrow \\text{3rd s.f. is the } 5 \\text{ in the thousandths}",
          "explanation": "The three significant figures are 1, 0 and 5 (the embedded 0 counts). The last lies in the thousandths column, so the rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds.",
          "workingLatex": "0.105 - 0.0005 = 0.1045 \\qquad 0.105 + 0.0005 = 0.1055",
          "explanation": "Half of 0.001 is 0.0005. Subtract for the lower bound and add for the upper bound."
        },
        {
          "stepNumber": 3,
          "description": "State the interval.",
          "workingLatex": "0.1045 \\le P < 0.1055",
          "explanation": "Lower bound included, upper bound excluded."
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
          "description": "Find the midpoint of the interval.",
          "workingLatex": "\\frac{0.0235 + 0.0245}{2} = \\frac{0.0480}{2} = 0.024",
          "explanation": "The rounded value sits exactly halfway between the two bounds, so the midpoint recovers it. Add the bounds and halve."
        },
        {
          "stepNumber": 2,
          "description": "Count the significant figures of \\( 0.024 \\).",
          "workingLatex": "0.024 \\to 2,\\ 4 \\Rightarrow 2 \\text{ s.f.}",
          "explanation": "Leading zeros are not significant, so the significant figures are 2 and 4 — two of them. The interval width 0.001 confirms rounding to the thousandths place, i.e. 2 s.f. here."
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
          "description": "Identify the correct rounding unit.",
          "workingLatex": "0.80 \\Rightarrow \\text{2nd s.f. is the } 0 \\text{ in the hundredths}",
          "explanation": "The trailing zero is significant, so the last figure is in the hundredths column and the rounding unit is 0.01, giving a half-unit of 0.005. Priya used half of 0.1 instead."
        },
        {
          "stepNumber": 2,
          "description": "Find the correct bounds.",
          "workingLatex": "0.80 - 0.005 = 0.795 \\qquad 0.80 + 0.005 = 0.805",
          "explanation": "Subtract and add 0.005 to 0.80 to obtain the correct bounds."
        },
        {
          "stepNumber": 3,
          "description": "State the correct interval.",
          "workingLatex": "0.795 \\le \\rho < 0.805",
          "explanation": "Priya treated the value as if rounded to 1 s.f.; the trailing zero shows it is to 2 s.f., so her interval is ten times too wide."
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
          "workingLatex": "0.0480 \\Rightarrow \\text{3rd s.f. is the final } 0 \\text{ in the ten-thousandths}",
          "explanation": "The three significant figures are 4, 8 and the trailing 0; that final 0 lies in the ten-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Find the half-unit.",
          "workingLatex": "\\tfrac{1}{2} \\times 0.0001 = 0.00005",
          "explanation": "Half of the rounding unit 0.0001 is 0.00005, the distance to each boundary."
        },
        {
          "stepNumber": 3,
          "description": "Form the bounds.",
          "workingLatex": "0.0480 - 0.00005 = 0.04795 \\qquad 0.0480 + 0.00005 = 0.04805",
          "explanation": "Subtract for the lower bound (included) and add for the upper bound (excluded), giving \\( 0.04795 \\le L < 0.04805 \\)."
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
          "description": "Identify the place of the last significant figure.",
          "workingLatex": "0.0072 \\Rightarrow \\text{2nd s.f. is the } 2 \\text{ in the ten-thousandths}",
          "explanation": "The two significant figures are 7 and 2; the 2 sits in the ten-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Apply the half-unit either side.",
          "workingLatex": "0.0072 \\pm 0.00005",
          "explanation": "Half of 0.0001 is 0.00005, so the bounds lie this distance from 0.0072."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.00715 \\le m < 0.00725",
          "explanation": "The lower bound is included and the upper bound excluded."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.36 \\Rightarrow \\text{2nd s.f. is the } 6 \\text{ in the hundredths}",
          "explanation": "The two significant figures are 3 and 6; the 6 lies in the hundredths column, so the rounding unit is 0.01."
        },
        {
          "stepNumber": 2,
          "description": "Add half a unit for the upper bound.",
          "workingLatex": "0.36 + \\tfrac{1}{2} \\times 0.01 = 0.36 + 0.005 = 0.365",
          "explanation": "The largest possible value is the upper bound. It is 0.005 above 0.36 and is the value the time approaches but does not reach, since 0.365 itself would round up to 0.37."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.250 \\Rightarrow \\text{3rd s.f. is the trailing } 0 \\text{ in the thousandths}",
          "explanation": "The trailing 0 is significant, so the three significant figures are 2, 5 and 0, with the last in the thousandths column. The rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Subtract half a unit for the lower bound.",
          "workingLatex": "0.250 - \\tfrac{1}{2} \\times 0.001 = 0.250 - 0.0005 = 0.2495",
          "explanation": "The smallest possible value is the lower bound, 0.0005 below 0.250. It is included because it rounds up to 0.250."
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
          "workingLatex": "\\text{Truncating to } 2 \\text{ d.p. discards digits after the } 0.01 \\text{ place}",
          "explanation": "Truncation chops off later digits without rounding, so the true value is at least the stated value and never less."
        },
        {
          "stepNumber": 2,
          "description": "The truncated value is the lower bound.",
          "workingLatex": "d \\ge 0.08",
          "explanation": "Any value from 0.08 upwards truncates to 0.08, so 0.08 is the included lower bound."
        },
        {
          "stepNumber": 3,
          "description": "Find the upper bound one unit up.",
          "workingLatex": "d < 0.08 + 0.01 = 0.09",
          "explanation": "At 0.09 the second decimal digit changes from 8 to 9, so 0.09 is the excluded upper bound."
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
          "workingLatex": "\\text{Truncating to } 3 \\text{ d.p. keeps the } 0.001 \\text{ place and discards the rest}",
          "explanation": "Truncation removes the following digits without rounding, so the displayed reading is the lower bound of the true mass."
        },
        {
          "stepNumber": 2,
          "description": "The displayed value is the lower bound.",
          "workingLatex": "M \\ge 0.207",
          "explanation": "Any true mass from 0.207 g upwards truncates to 0.207 g, so 0.207 is included."
        },
        {
          "stepNumber": 3,
          "description": "Find the upper bound one unit up.",
          "workingLatex": "M < 0.207 + 0.001 = 0.208",
          "explanation": "At 0.208 the third decimal digit changes, so 0.208 is the excluded upper bound."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.0450 \\Rightarrow \\text{3rd s.f. is the final } 0 \\text{ in the ten-thousandths}",
          "explanation": "The three significant figures are 4, 5 and the trailing 0; that 0 sits in the ten-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Find the bounds half a unit either side.",
          "workingLatex": "0.0450 \\pm 0.00005 \\Rightarrow 0.04495 \\le C < 0.04505",
          "explanation": "Half of 0.0001 is 0.00005, giving the lower bound 0.04495 (included) and the upper bound 0.04505 (excluded)."
        },
        {
          "stepNumber": 3,
          "description": "Subtract the bounds for the difference.",
          "workingLatex": "0.04505 - 0.04495 = 0.0001",
          "explanation": "The width of an error interval always equals one full rounding unit, here 0.0001."
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
          "explanation": "The rounded value sits at the centre of its error interval, so adding the bounds and halving recovers it."
        },
        {
          "stepNumber": 2,
          "description": "Check the precision and write to 3 s.f.",
          "workingLatex": "\\text{half-unit } 0.0005 \\Rightarrow \\text{rounded to } 0.001 \\Rightarrow 0.0630",
          "explanation": "The half-unit of 0.0005 corresponds to a rounding unit of 0.001, i.e. the thousandths place, which is 3 significant figures here. Writing the trailing zero gives 0.0630."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.0019 \\Rightarrow \\text{2nd s.f. is the } 9 \\text{ in the ten-thousandths}",
          "explanation": "The two significant figures are 1 and 9; the 9 lies in the ten-thousandths column, so the rounding unit is 0.0001."
        },
        {
          "stepNumber": 2,
          "description": "Add half a unit for the upper bound.",
          "workingLatex": "0.0019 + \\tfrac{1}{2} \\times 0.0001 = 0.0019 + 0.00005 = 0.00195",
          "explanation": "The largest possible thickness is the upper bound, 0.00005 above 0.0019. It is the value the thickness approaches but cannot reach, since 0.00195 would round up to 0.0020."
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
          "workingLatex": "\\text{Any } T \\text{ with } 0 \\le T < 0.1 \\text{ truncates to } 0.0",
          "explanation": "Truncation discards everything after the tenths place without rounding up, so any value whose tenths digit is 0 displays as 0.0."
        },
        {
          "stepNumber": 2,
          "description": "Identify the lower bound.",
          "workingLatex": "T_{\\min} = 0",
          "explanation": "The lower bound 0 is achievable, since a true time of exactly 0 truncates to 0.0."
        },
        {
          "stepNumber": 3,
          "description": "Identify the excluded upper bound.",
          "workingLatex": "T < 0.1",
          "explanation": "A true time of 0.1 would display as 0.1, not 0.0, so 0.1 is the smallest value \\( T \\) cannot reach — the excluded upper bound."
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
          "description": "Identify the rounding unit.",
          "workingLatex": "0.500 \\Rightarrow \\text{3rd s.f. is the final } 0 \\text{ in the thousandths}",
          "explanation": "Both trailing zeros are significant, so the three significant figures are 5, 0 and 0, with the last in the thousandths column. The rounding unit is 0.001."
        },
        {
          "stepNumber": 2,
          "description": "Apply the half-unit either side.",
          "workingLatex": "0.500 \\pm \\tfrac{1}{2} \\times 0.001 = 0.500 \\pm 0.0005",
          "explanation": "Half of the rounding unit 0.001 is 0.0005, the distance from 0.500 to each boundary."
        },
        {
          "stepNumber": 3,
          "description": "State the bounds.",
          "workingLatex": "0.4995 \\le R < 0.5005",
          "explanation": "The lower bound 0.4995 is included and the upper bound 0.5005 is excluded."
        }
      ],
      "finalAnswer": "\\( 0.4995 \\le R < 0.5005 \\)"
    }
  }
];
