import { Question } from "@/lib/types";

/**
 * Year 2 — Sequences and Series § 3.4 Modelling Problems
 * Ref: y2ss4
 * 71 questions: arithmetic and geometric models for finance, growth/decay,
 * recurrence relations with equilibria, and AP-vs-GP comparison problems.
 */
export const questions: Question[] = [
  {
    "id": "y2ss4-001",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 01",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A salary starts at £24,000 per year and increases by £1,200 each year. Find the salary in year 5.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Decide arithmetic or geometric.",
          "workingLatex": "\\text{fixed }+£1200\\text{ each year} \\Rightarrow \\text{arithmetic}",
          "explanation": "The salary goes up by the same *amount* (not the same percentage) every year, so the yearly salaries form an arithmetic progression. If it rose by a fixed *percentage* you would use a geometric model instead.",
          "stepNumber": 1
        },
        {
          "description": "Write down the AP parameters.",
          "workingLatex": "a = 24000,\\quad d = 1200",
          "explanation": "The first term \\(a\\) is the year-1 salary and the common difference \\(d\\) is the annual raise.",
          "stepNumber": 2
        },
        {
          "description": "State the nth-term formula.",
          "workingLatex": "u_{n} = a + (n-1)d",
          "explanation": "The \\((n-1)\\) is the number of raises that have happened by year \\(n\\): year 1 has had none, year 2 one, and so on.",
          "stepNumber": 3
        },
        {
          "description": "Substitute, being careful with the index.",
          "workingLatex": "u_{5} = 24000 + (5-1)(1200) = 24000 + 4(1200)",
          "explanation": "Year 5 has had only 4 raises, so use \\(n-1 = 4\\), not 5. Multiplying by 5 here is the single most common slip.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 24000 + 4800 = 28800",
          "explanation": "Work out the \\(4 \\times 1200 = 4800\\) of raises first, then add to the base salary.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "£28,800.",
      "commonMistakes": [
        "Using \\(n=5\\) as the multiplier instead of \\(n-1=4\\), giving £30,000.",
        "Treating the £1,200 rise as a percentage and using a geometric model.",
        "Forgetting that year 1 already includes the base salary with no raise added."
      ]
    }
  },
  {
    "id": "y2ss4-002",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 02",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "An investment of £5,000 earns 4% compound interest per year. Find its value after 6 years.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{fixed }4\\%\\text{ per year} \\Rightarrow \\text{geometric (compound)}",
          "explanation": "A constant *percentage* increase compounds, so the value forms a geometric progression — each year multiplies the previous value by the same factor.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "4\\%\\text{ growth} \\Rightarrow 100\\% + 4\\% = 1.04",
          "explanation": "Add the growth to 100% and write it as a decimal. Never add 0.04 to the money each year — that would be simple, not compound, interest.",
          "stepNumber": 2
        },
        {
          "description": "Write the general model.",
          "workingLatex": "V_{n} = 5000(1.04)^{n}",
          "explanation": "The principal £5000 is multiplied by \\(1.04\\) once per year, so after \\(n\\) years the factor is \\(1.04^{n}\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "V_{6} = 5000(1.04)^{6}",
          "explanation": "Here \\(n=6\\) because we want the value after 6 whole years.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.04)^{6} \\approx 1.265319",
          "explanation": "Compute the growth factor over 6 years before multiplying; keep several decimals to avoid rounding error.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "5000 \\times 1.265319 \\approx £6{,}326.60",
          "explanation": "Round only at the end, and to the nearest penny for money.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £6{,}326.60\\).",
      "commonMistakes": [
        "Adding £200 (4% of £5000) each year — that is simple interest, not compound.",
        "Using a multiplier of \\(0.04\\) or \\(4\\) instead of \\(1.04\\).",
        "Rounding the power too early and losing pennies in the final figure."
      ]
    }
  },
  {
    "id": "y2ss4-003",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 03",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A car depreciates at 15% per year. It is bought for £12,000. Find its value after 4 years.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{fixed }15\\%\\text{ loss per year} \\Rightarrow \\text{geometric decay}",
          "explanation": "A constant percentage *loss* each year is geometric decay — the value is multiplied by the same factor (less than 1) annually.",
          "stepNumber": 1
        },
        {
          "description": "Convert depreciation to a multiplier.",
          "workingLatex": "100\\% - 15\\% = 85\\% = 0.85",
          "explanation": "Losing 15% means keeping 85%, so the multiplier is \\(0.85\\). Subtracting 15% of the *original* price each year would be the wrong, linear model.",
          "stepNumber": 2
        },
        {
          "description": "Write the general model.",
          "workingLatex": "V_{n} = 12000(0.85)^{n}",
          "explanation": "The price £12,000 is multiplied by \\(0.85\\) once per year.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "V_{4} = 12000(0.85)^{4}",
          "explanation": "We want the value after 4 years, so \\(n=4\\).",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(0.85)^{4} \\approx 0.522006",
          "explanation": "The cumulative retention factor over 4 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "12000 \\times 0.522006 \\approx £6{,}264",
          "explanation": "Multiply by the original price, then round to the nearest pound.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £6{,}264\\).",
      "commonMistakes": [
        "Using a multiplier of \\(0.15\\) (the loss) instead of \\(0.85\\) (the retention).",
        "Subtracting a flat 15% of £12,000 each year, treating depreciation as linear.",
        "Raising \\(0.85\\) to the power 5 (years counted inclusively) instead of 4."
      ]
    }
  },
  {
    "id": "y2ss4-004",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 04",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Maria saves £50 in the first month, £55 in the second month, £60 in the third month, and so on, in arithmetic progression. Find the total she has saved after 12 months.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+£5\\text{ each month} \\Rightarrow \\text{arithmetic}",
          "explanation": "Saving £5 more each month is a constant addition, so the monthly amounts form an AP. The question wants the *total* saved, so we need the sum of the AP, not a single term.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 50,\\quad d = 5,\\quad n = 12",
          "explanation": "First month £50, common difference £5, over 12 months.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "Use the \\(2a + (n-1)d\\) form because the final month's saving isn't given directly; this form needs only \\(a\\) and \\(d\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{12} = \\tfrac{12}{2}\\big(2(50) + 11(5)\\big)",
          "explanation": "\\(n=12\\), and \\((n-1) = 11\\) inside the bracket — not 12.",
          "stepNumber": 4
        },
        {
          "description": "Simplify the bracket.",
          "workingLatex": "= 6\\big(100 + 55\\big) = 6(155)",
          "explanation": "\\(2a = 100\\) and \\(11 \\times 5 = 55\\), giving \\(155\\).",
          "stepNumber": 5
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 930",
          "explanation": "\\(6 \\times 155 = 930\\), so she saves £930 in total.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "£930.",
      "commonMistakes": [
        "Using \\((n)d = 12 \\times 5\\) instead of \\((n-1)d = 11 \\times 5\\) in the bracket.",
        "Finding the 12th month's saving (£105) and quoting that as the total.",
        "Forgetting the \\(\\tfrac{n}{2}\\) factor and only summing inside the bracket."
      ]
    }
  },
  {
    "id": "y2ss4-005",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 05",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A bacterium reproduces so that the population doubles every hour. Starting with 200 bacteria, find the population after 5 hours.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{doubles each hour} \\Rightarrow \\text{geometric},\\ r = 2",
          "explanation": "Doubling is multiplying by a constant factor of 2, so the population is a GP.",
          "stepNumber": 1
        },
        {
          "description": "Write the general model.",
          "workingLatex": "P_{n} = 200 \\cdot 2^{n}",
          "explanation": "The starting 200 is multiplied by 2 once per hour, so after \\(n\\) hours the factor is \\(2^{n}\\).",
          "stepNumber": 2
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "P_{5} = 200 \\cdot 2^{5}",
          "explanation": "Five hours of doubling.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "2^{5} = 32",
          "explanation": "Compute the growth factor first.",
          "stepNumber": 4
        },
        {
          "description": "Compute.",
          "workingLatex": "200 \\times 32 = 6400",
          "explanation": "The population after 5 hours is 6400 bacteria.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "6400.",
      "commonMistakes": [
        "Multiplying 200 by \\(2 \\times 5 = 10\\) instead of \\(2^{5}\\) (linear vs exponential).",
        "Using \\(2^{4}\\) by treating the start as 'hour 1'.",
        "Adding 200 each hour instead of doubling."
      ]
    }
  },
  {
    "id": "y2ss4-006",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 06",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A theatre has 20 seats in the first row and each subsequent row has 2 more seats than the row in front. There are 15 rows. Find the total number of seats.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+2\\text{ seats each row} \\Rightarrow \\text{arithmetic}",
          "explanation": "Each row has a fixed 2 more seats, so the row sizes form an AP; the total seats is the sum of all rows.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 20,\\quad d = 2,\\quad n = 15",
          "explanation": "First row 20 seats, common difference 2, 15 rows.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "The last row's size isn't given, so use the form that needs only \\(a\\) and \\(d\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{15} = \\tfrac{15}{2}\\big(2(20) + 14(2)\\big)",
          "explanation": "\\(n=15\\), so \\((n-1) = 14\\).",
          "stepNumber": 4
        },
        {
          "description": "Simplify the bracket.",
          "workingLatex": "= \\tfrac{15}{2}\\big(40 + 28\\big) = \\tfrac{15}{2}(68)",
          "explanation": "\\(2a = 40\\) and \\(14 \\times 2 = 28\\), giving \\(68\\).",
          "stepNumber": 5
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 15 \\times 34 = 510",
          "explanation": "Halve \\(68\\) to \\(34\\) first, then multiply by 15: 510 seats.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "510 seats.",
      "commonMistakes": [
        "Using \\(15 \\times 2\\) instead of \\(14 \\times 2\\) for the seat increases.",
        "Finding only the last row's size (\\(20 + 14(2) = 48\\)) instead of the total.",
        "Mis-halving: computing \\(\\tfrac{15}{2}\\) of 68 as \\(7.5 \\times 68\\) incorrectly."
      ]
    }
  },
  {
    "id": "y2ss4-007",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 07",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A company's yearly revenue grows by 5% each year. If year 1 revenue is £100,000, find the revenue in year 10.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{fixed }5\\%\\text{ growth} \\Rightarrow \\text{geometric}",
          "explanation": "A constant percentage rise compounds, so revenue is a GP.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 5\\% = 1.05",
          "explanation": "5% growth means multiplying by \\(1.05\\) each year.",
          "stepNumber": 2
        },
        {
          "description": "Write the nth-term formula.",
          "workingLatex": "u_{n} = 100000(1.05)^{\\,n-1}",
          "explanation": "Year 1 is the first term with exponent 0, so year \\(n\\) uses exponent \\(n-1\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute, minding the index.",
          "workingLatex": "u_{10} = 100000(1.05)^{9}",
          "explanation": "Year 10 has had only 9 years of growth applied — exponent 9, not 10. Using \\(1.05^{10}\\) is the classic off-by-one error.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.05)^{9} \\approx 1.551328",
          "explanation": "The cumulative growth factor after 9 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "100000 \\times 1.551328 \\approx £155{,}133",
          "explanation": "Round to the nearest pound at the end.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £155{,}133\\).",
      "commonMistakes": [
        "Using exponent 10 instead of 9 for year 10 (off-by-one).",
        "Adding £5,000 each year instead of compounding at 5%.",
        "Using \\(1.5\\) or \\(0.05\\) as the multiplier instead of \\(1.05\\)."
      ]
    }
  },
  {
    "id": "y2ss4-008",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 08",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A ball bounces to 60% of its previous height. Dropped from 2 m, find the height reached after the 3rd bounce.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "60\\%\\text{ of previous height} \\Rightarrow \\text{geometric},\\ r = 0.6",
          "explanation": "Each bounce reaches a fixed fraction of the last, so the peak heights form a GP.",
          "stepNumber": 1
        },
        {
          "description": "Write the bounce-height formula.",
          "workingLatex": "h_{k} = 2(0.6)^{k}",
          "explanation": "After \\(k\\) bounces the 2 m drop has been multiplied by \\(0.6\\) exactly \\(k\\) times.",
          "stepNumber": 2
        },
        {
          "description": "Substitute the bounce number.",
          "workingLatex": "h_{3} = 2(0.6)^{3}",
          "explanation": "We want the height after the 3rd bounce, so \\(k=3\\).",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(0.6)^{3} = 0.216",
          "explanation": "\\(0.6 \\times 0.6 \\times 0.6 = 0.216\\).",
          "stepNumber": 4
        },
        {
          "description": "Compute.",
          "workingLatex": "2 \\times 0.216 = 0.432\\text{ m}",
          "explanation": "The peak after the 3rd bounce is 0.432 m.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "0.432 m.",
      "commonMistakes": [
        "Using exponent 2 (counting the drop as the first bounce).",
        "Multiplying \\(2 \\times 0.6 \\times 3\\) instead of raising to a power.",
        "Reading 60% as a 60% *loss* and using \\(0.4\\) as the ratio."
      ]
    }
  },
  {
    "id": "y2ss4-009",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 09",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A pile of logs has 12 on the bottom row, 11 on the next, and so on down to 1. Find the total number of logs.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "12, 11, 10, \\ldots, 1 \\Rightarrow \\text{arithmetic},\\ d = -1",
          "explanation": "Each row has one fewer log, a constant difference of \\(-1\\); the total logs is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 12,\\quad \\ell = 1,\\quad n = 12",
          "explanation": "First term 12, last term 1, and counting down by 1 there are 12 rows.",
          "stepNumber": 2
        },
        {
          "description": "Choose the first-plus-last sum form.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}(a + \\ell)",
          "explanation": "When both the first and last terms are known, this form is fastest — it's the number of terms times the average term.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{12} = \\tfrac{12}{2}(12 + 1)",
          "explanation": "\\(n=12\\) rows; the average of first and last is \\(\\tfrac{12+1}{2}\\).",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 6 \\times 13 = 78",
          "explanation": "78 logs in total.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "78 logs.",
      "commonMistakes": [
        "Miscounting the number of rows as 11 instead of 12.",
        "Adding 1 to 12 to get 13 rows by confusing the count with the term value.",
        "Using \\(\\tfrac{n}{2}(a+\\ell)\\) but forgetting to halve, giving 156."
      ]
    }
  },
  {
    "id": "y2ss4-010",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 10",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A population of fish decreases by 10% per year due to fishing. Starting from 5000, find the population after 4 years.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "10\\%\\text{ decrease per year} \\Rightarrow \\text{geometric decay}",
          "explanation": "A constant percentage fall is geometric, not linear.",
          "stepNumber": 1
        },
        {
          "description": "Convert the loss to a multiplier.",
          "workingLatex": "100\\% - 10\\% = 90\\% = 0.9",
          "explanation": "Losing 10% leaves 90%, so the factor is \\(0.9\\).",
          "stepNumber": 2
        },
        {
          "description": "Write the general model.",
          "workingLatex": "P_{n} = 5000(0.9)^{n}",
          "explanation": "The starting 5000 is multiplied by \\(0.9\\) each year.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "P_{4} = 5000(0.9)^{4}",
          "explanation": "Four years of decline.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(0.9)^{4} = 0.6561",
          "explanation": "The retention factor over 4 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round to whole fish.",
          "workingLatex": "5000 \\times 0.6561 = 3280.5 \\approx 3281",
          "explanation": "Populations are whole numbers, so round at the end.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx 3281\\) fish.",
      "commonMistakes": [
        "Using \\(0.1\\) as the multiplier instead of \\(0.9\\).",
        "Subtracting 500 (10% of 5000) each year — linear, not geometric.",
        "Forgetting to round to a whole number of fish."
      ]
    }
  },
  {
    "id": "y2ss4-011",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 11",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A doctor prescribes 500 mg of a medicine at 9 am each day. The body clears 50% of the medicine in 24 hours. Find the amount of medicine present just after the 3rd dose.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{clear }50\\%\\text{, then add }500 \\Rightarrow \\text{recurrence}",
          "explanation": "Each day half the drug clears and a new dose is added, so this is a 'multiply then add' recurrence, not pure decay or pure growth.",
          "stepNumber": 1
        },
        {
          "description": "Convert clearance to a multiplier.",
          "workingLatex": "\\text{clears }50\\% \\Rightarrow 50\\%\\text{ remains} = 0.5",
          "explanation": "Half remaining means the carry-over factor is \\(0.5\\).",
          "stepNumber": 2
        },
        {
          "description": "State the recurrence.",
          "workingLatex": "m_{k+1} = 0.5\\,m_{k} + 500,\\quad m_{1} = 500",
          "explanation": "Scale the current amount by 0.5, then add the fresh 500 mg dose.",
          "stepNumber": 3
        },
        {
          "description": "After the 1st dose.",
          "workingLatex": "m_{1} = 500",
          "explanation": "Immediately after the first dose only the new 500 mg is present.",
          "stepNumber": 4
        },
        {
          "description": "After the 2nd dose.",
          "workingLatex": "m_{2} = 0.5(500) + 500 = 250 + 500 = 750",
          "explanation": "Half of the previous 500 survives (250), plus the new dose.",
          "stepNumber": 5
        },
        {
          "description": "After the 3rd dose.",
          "workingLatex": "m_{3} = 0.5(750) + 500 = 375 + 500 = 875",
          "explanation": "Half of 750 (375) survives, plus 500 — the steady build-up of repeated dosing.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "875 mg.",
      "commonMistakes": [
        "Adding 500 three times (1500) and ignoring the clearance.",
        "Clearing 50% of the *dose* rather than of the *total* present.",
        "Applying the clearance to the dose just added instead of to the carried-over amount."
      ]
    }
  },
  {
    "id": "y2ss4-012",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 12",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A salary starts at £20,000 and increases by 4% each year. Find the total amount earned over 10 years.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{salary }\\times 1.04\\text{ each year} \\Rightarrow \\text{geometric series}",
          "explanation": "The yearly salaries form a GP; 'total earned over 10 years' is the sum of those salaries.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 4\\% = 1.04",
          "explanation": "4% raise means each year's salary is \\(1.04\\) times the last.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Use the \\(r-1\\) form because \\(r = 1.04 > 1\\), keeping numerator and denominator positive. Here \\(a = 20000\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{10} = \\dfrac{20000(1.04^{10} - 1)}{1.04 - 1} = \\dfrac{20000(1.04^{10} - 1)}{0.04}",
          "explanation": "The denominator is \\(0.04\\), not \\(4\\) — a frequent slip.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.04)^{10} \\approx 1.480244",
          "explanation": "Cumulative factor over 10 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "\\dfrac{20000(0.480244)}{0.04} \\approx £240{,}122",
          "explanation": "This is the sum of all ten yearly salaries, not the year-10 salary.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £240{,}122\\).",
      "commonMistakes": [
        "Dividing by 4 instead of 0.04.",
        "Reporting the 10th year's salary instead of the 10-year total.",
        "Using \\(a = 20000 \\times 1.04\\) (start-of-year compounding) when the first year is just £20,000."
      ]
    }
  },
  {
    "id": "y2ss4-013",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 13",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A savings account grows by £100 per month starting from £0. Find the total saved after 24 months.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+£100\\text{ monthly, no interest} \\Rightarrow \\text{linear}",
          "explanation": "A fixed amount with no compounding grows linearly — total is simply rate times time. No GP or AP-sum machinery is needed.",
          "stepNumber": 1
        },
        {
          "description": "Set up the total.",
          "workingLatex": "\\text{total} = 100 \\times 24",
          "explanation": "24 deposits of £100 each.",
          "stepNumber": 2
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 2400",
          "explanation": "The account holds £2,400 after 24 months.",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "£2,400.",
      "commonMistakes": [
        "Applying compound interest when the problem states none.",
        "Using an AP sum formula and getting a triangular number by mistake.",
        "Counting 23 or 25 months instead of 24."
      ]
    }
  },
  {
    "id": "y2ss4-014",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 14",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A runner runs 5 km on day 1 and increases by 0.5 km each day. Find the distance run on day 10.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+0.5\\text{ km each day} \\Rightarrow \\text{arithmetic}",
          "explanation": "A fixed daily increase is an AP.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 5,\\quad d = 0.5",
          "explanation": "Day 1 is 5 km; each day adds 0.5 km.",
          "stepNumber": 2
        },
        {
          "description": "State the nth-term formula.",
          "workingLatex": "u_{n} = a + (n-1)d",
          "explanation": "The \\((n-1)\\) counts how many daily increases have occurred.",
          "stepNumber": 3
        },
        {
          "description": "Substitute, minding the index.",
          "workingLatex": "u_{10} = 5 + (10-1)(0.5) = 5 + 9(0.5)",
          "explanation": "Day 10 has had 9 increases — use \\(n-1 = 9\\), not 10.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 5 + 4.5 = 9.5\\text{ km}",
          "explanation": "\\(9 \\times 0.5 = 4.5\\) added to the starting distance.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "9.5 km.",
      "commonMistakes": [
        "Using \\(10 \\times 0.5\\) instead of \\(9 \\times 0.5\\).",
        "Treating the 0.5 km increase as a percentage.",
        "Summing the distances (an AP sum) when only day 10's distance is wanted."
      ]
    }
  },
  {
    "id": "y2ss4-015",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 15",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A population of rabbits triples every year. Starting from 30 rabbits, find the population after 5 years.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{triples each year} \\Rightarrow \\text{geometric},\\ r = 3",
          "explanation": "Tripling is multiplying by a constant 3 — a GP.",
          "stepNumber": 1
        },
        {
          "description": "Write the general model.",
          "workingLatex": "P_{n} = 30 \\cdot 3^{n}",
          "explanation": "The starting 30 is multiplied by 3 once per year.",
          "stepNumber": 2
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "P_{5} = 30 \\cdot 3^{5}",
          "explanation": "Five years of tripling.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "3^{5} = 243",
          "explanation": "Compute the growth factor first.",
          "stepNumber": 4
        },
        {
          "description": "Compute.",
          "workingLatex": "30 \\times 243 = 7290",
          "explanation": "7,290 rabbits after 5 years.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "7,290 rabbits.",
      "commonMistakes": [
        "Multiplying by \\(3 \\times 5\\) instead of \\(3^{5}\\).",
        "Using \\(3^{4}\\) by treating the start as year 1.",
        "Adding 30 each year rather than tripling."
      ]
    }
  },
  {
    "id": "y2ss4-016",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 16",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A freelancer earns £200 in week 1, and this increases by 3% each week. Find the total earned in the first 20 weeks.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+3\\%\\text{ each week} \\Rightarrow \\text{geometric series}",
          "explanation": "Weekly earnings rise by a fixed percentage, so they form a GP; the total is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 3\\% = 1.03",
          "explanation": "3% growth means \\(\\times 1.03\\) weekly.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Use the \\(r-1\\) form for \\(r>1\\), with \\(a = 200\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{20} = \\dfrac{200(1.03^{20} - 1)}{0.03}",
          "explanation": "Denominator \\(0.03\\), not 3.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.03)^{20} \\approx 1.806111",
          "explanation": "Cumulative factor over 20 weeks.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "\\dfrac{200(0.806111)}{0.03} \\approx £5{,}374",
          "explanation": "Total earned over the first 20 weeks.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £5{,}374\\).",
      "commonMistakes": [
        "Dividing by 3 instead of 0.03.",
        "Reporting week 20's earnings rather than the running total.",
        "Using exponent 19 in the sum's power (the sum uses \\(r^{n}\\), not \\(r^{n-1}\\))."
      ]
    }
  },
  {
    "id": "y2ss4-017",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 17",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A deposit of £2,000 earns 3% compound interest. Find its value after 15 years.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "3\\%\\text{ compound per year} \\Rightarrow \\text{geometric}",
          "explanation": "Compound interest is geometric growth.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 3\\% = 1.03",
          "explanation": "3% interest means \\(\\times 1.03\\) each year.",
          "stepNumber": 2
        },
        {
          "description": "Write the general model.",
          "workingLatex": "V_{n} = 2000(1.03)^{n}",
          "explanation": "A single lump sum compounds, so the exponent is the number of years.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "V_{15} = 2000(1.03)^{15}",
          "explanation": "Fifteen years.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.03)^{15} \\approx 1.557967",
          "explanation": "Cumulative factor over 15 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "2000 \\times 1.557967 \\approx £3{,}116",
          "explanation": "Round to the nearest pound.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £3{,}116\\).",
      "commonMistakes": [
        "Using simple interest: \\(2000 + 15 \\times 60\\).",
        "Multiplier of \\(0.03\\) or \\(3\\) instead of \\(1.03\\).",
        "Rounding the power to 2 d.p. and losing accuracy."
      ]
    }
  },
  {
    "id": "y2ss4-018",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 18",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Every month, Yusuf deposits £100 into a biscuit-tin savings plan. Find the total after 36 months.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+£100\\text{ monthly, no interest} \\Rightarrow \\text{linear}",
          "explanation": "A biscuit-tin earns no interest, so nothing compounds — total is rate times time.",
          "stepNumber": 1
        },
        {
          "description": "Set up the total.",
          "workingLatex": "\\text{total} = 100 \\times 36",
          "explanation": "36 deposits of £100.",
          "stepNumber": 2
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 3600",
          "explanation": "£3,600 after 36 months.",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "£3,600.",
      "commonMistakes": [
        "Applying interest where the problem gives none.",
        "Using an AP sum and producing a triangular number.",
        "Miscounting 36 months as 35 or 37."
      ]
    }
  },
  {
    "id": "y2ss4-019",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 19",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "An exchange rate increases by 2% per year. £1 buys 120 yen in 2024. Find the number of yen £1 buys in 2030 (to nearest yen).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+2\\%\\text{ per year} \\Rightarrow \\text{geometric}",
          "explanation": "A fixed percentage rise compounds.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 2\\% = 1.02",
          "explanation": "2% per year means \\(\\times 1.02\\).",
          "stepNumber": 2
        },
        {
          "description": "Count the years carefully.",
          "workingLatex": "2030 - 2024 = 6",
          "explanation": "The growth runs over the 6-year gap; getting this span right is the crux of the problem.",
          "stepNumber": 3
        },
        {
          "description": "Write and substitute the model.",
          "workingLatex": "120(1.02)^{6}",
          "explanation": "Start from the 2024 value of 120 yen and apply 6 years of growth.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.02)^{6} \\approx 1.126162",
          "explanation": "Cumulative factor over 6 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round to whole yen.",
          "workingLatex": "120 \\times 1.126162 \\approx 135.15 \\Rightarrow 135",
          "explanation": "Round to the nearest yen as asked.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "135 yen.",
      "commonMistakes": [
        "Using 7 years (counting both endpoints) instead of 6.",
        "Multiplier \\(0.02\\) or \\(2\\) instead of \\(1.02\\).",
        "Rounding to 135.15 yen rather than the nearest whole yen."
      ]
    }
  },
  {
    "id": "y2ss4-020",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 20",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A bacterial culture loses 20% of its mass every day. Starting from 50 g, find the mass remaining after 1 week.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "20\\%\\text{ daily loss} \\Rightarrow \\text{geometric decay}",
          "explanation": "A constant percentage loss is geometric.",
          "stepNumber": 1
        },
        {
          "description": "Convert the loss to a multiplier.",
          "workingLatex": "100\\% - 20\\% = 80\\% = 0.8",
          "explanation": "Losing 20% leaves 80%.",
          "stepNumber": 2
        },
        {
          "description": "Convert the time to days.",
          "workingLatex": "1\\text{ week} = 7\\text{ days}",
          "explanation": "Match the time to the model's unit before substituting.",
          "stepNumber": 3
        },
        {
          "description": "Write and substitute the model.",
          "workingLatex": "50(0.8)^{7}",
          "explanation": "Starting mass 50 g, decayed over 7 days.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(0.8)^{7} \\approx 0.209715",
          "explanation": "Retention factor over a week.",
          "stepNumber": 5
        },
        {
          "description": "Compute.",
          "workingLatex": "50 \\times 0.209715 \\approx 10.49\\text{ g}",
          "explanation": "About 10.49 g remains.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx 10.49\\) g.",
      "commonMistakes": [
        "Forgetting to convert 1 week to 7 days.",
        "Using \\(0.2\\) instead of \\(0.8\\) as the multiplier.",
        "Subtracting 20% of 50 g (10 g) every day — linear decay."
      ]
    }
  },
  {
    "id": "y2ss4-021",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 21",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A salary starts at £22,000 per year and increases by £800 each year. (a) Find the salary in year 8. (b) Find the total earned over the first 10 years.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Identify the model.",
          "workingLatex": "+£800\\text{ each year} \\Rightarrow \\text{arithmetic}",
          "explanation": "A fixed annual rise is an AP.",
          "stepNumber": 1
        },
        {
          "description": "(a) Write the AP parameters.",
          "workingLatex": "a = 22000,\\quad d = 800",
          "explanation": "Year-1 salary and the annual raise.",
          "stepNumber": 2
        },
        {
          "description": "(a) Find the year-8 salary.",
          "workingLatex": "u_{8} = 22000 + (8-1)(800) = 22000 + 5600 = 27600",
          "explanation": "Year 8 has had 7 raises — use \\(n-1 = 7\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "Total over 10 years is the AP sum; use \\(2a + (n-1)d\\).",
          "stepNumber": 4
        },
        {
          "description": "(b) Substitute the values.",
          "workingLatex": "S_{10} = \\tfrac{10}{2}\\big(2(22000) + 9(800)\\big)",
          "explanation": "\\(n = 10\\), so \\((n-1) = 9\\).",
          "stepNumber": 5
        },
        {
          "description": "(b) Simplify and evaluate.",
          "workingLatex": "= 5\\big(44000 + 7200\\big) = 5(51200) = 256000",
          "explanation": "\\(2a = 44000\\), \\(9 \\times 800 = 7200\\); the 10-year total is £256,000.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Year 8: £27,600; total £256,000.",
      "commonMistakes": [
        "Using \\(n-1 = 8\\) for year 8's salary.",
        "Using \\(10 \\times 800\\) instead of \\(9 \\times 800\\) in the sum bracket.",
        "Reporting the year-10 salary as the 10-year total."
      ]
    }
  },
  {
    "id": "y2ss4-022",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 22",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A lump sum of £10,000 is invested at 5% compound interest per year. (a) Find the value after 5 years. (b) After how many complete years does the investment first exceed £15,000?",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Identify the model and multiplier.",
          "workingLatex": "5\\% \\Rightarrow \\times 1.05\\ \\text{(geometric)}",
          "explanation": "Compound interest multiplies by \\(1.05\\) yearly.",
          "stepNumber": 1
        },
        {
          "description": "(a) Write and substitute the model.",
          "workingLatex": "V_{5} = 10000(1.05)^{5}",
          "explanation": "A lump sum of £10,000 over 5 years.",
          "stepNumber": 2
        },
        {
          "description": "(a) Evaluate.",
          "workingLatex": "(1.05)^{5} \\approx 1.276282 \\Rightarrow £12{,}762.82",
          "explanation": "Compute the power, then multiply by the principal.",
          "stepNumber": 3
        },
        {
          "description": "(b) Set up the inequality.",
          "workingLatex": "10000(1.05)^{n} > 15000",
          "explanation": "We need the value to exceed £15,000.",
          "stepNumber": 4
        },
        {
          "description": "(b) Isolate the power.",
          "workingLatex": "(1.05)^{n} > 1.5",
          "explanation": "Divide both sides by the £10,000 principal.",
          "stepNumber": 5
        },
        {
          "description": "(b) Take logs.",
          "workingLatex": "n > \\dfrac{\\log 1.5}{\\log 1.05} \\approx 8.31",
          "explanation": "Logs bring the exponent down; both logs are positive so the inequality direction is unchanged.",
          "stepNumber": 6
        },
        {
          "description": "(b) Round up to a whole year.",
          "workingLatex": "n = 9",
          "explanation": "Interest is credited yearly and 'first exceeds' means round *up* — at year 8 it's still under £15,000.",
          "stepNumber": 7
        }
      ],
      "finalAnswer": "Year 5: £12,762.82; first exceeds £15,000 in year 9.",
      "commonMistakes": [
        "Rounding 8.31 down to 8 instead of up to 9.",
        "Dividing by 15000 instead of 10000 when isolating the power.",
        "Forgetting that the value is only credited at whole-year points."
      ]
    }
  },
  {
    "id": "y2ss4-023",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 23",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A printer's ink cartridge costs £40 when new. Each replacement costs 8% more than the previous one. Find the total cost of the first 10 cartridges.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+8\\%\\text{ each replacement} \\Rightarrow \\text{geometric series}",
          "explanation": "Each cartridge costs a fixed percentage more, so the costs form a GP; the total is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 8\\% = 1.08",
          "explanation": "8% more each time means \\(\\times 1.08\\).",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Use the \\(r-1\\) form for \\(r>1\\), with \\(a = 40\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{10} = \\dfrac{40(1.08^{10} - 1)}{0.08}",
          "explanation": "Denominator \\(0.08\\).",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.08)^{10} \\approx 2.158925",
          "explanation": "Cumulative factor over 10 cartridges.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "\\dfrac{40(1.158925)}{0.08} \\approx £579.46",
          "explanation": "Total cost of the first 10 cartridges.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx £579.46\\).",
      "commonMistakes": [
        "Dividing by 8 or 0.8 instead of 0.08.",
        "Using exponent 9 in the sum's power.",
        "Reporting the 10th cartridge's cost rather than the cumulative total."
      ]
    }
  },
  {
    "id": "y2ss4-024",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 24",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A car is bought for £20,000 and depreciates by 18% per year. After how many years does its value first fall below £5,000?",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model and multiplier.",
          "workingLatex": "18\\%\\text{ loss} \\Rightarrow \\times 0.82\\ \\text{(geometric decay)}",
          "explanation": "Losing 18% leaves 82%, so the factor is \\(0.82\\).",
          "stepNumber": 1
        },
        {
          "description": "Set up the inequality.",
          "workingLatex": "20000(0.82)^{n} < 5000",
          "explanation": "We want the value to fall below £5,000.",
          "stepNumber": 2
        },
        {
          "description": "Isolate the power.",
          "workingLatex": "(0.82)^{n} < 0.25",
          "explanation": "Divide both sides by the £20,000 starting price.",
          "stepNumber": 3
        },
        {
          "description": "Take logs, watching the sign.",
          "workingLatex": "n > \\dfrac{\\log 0.25}{\\log 0.82} \\approx 6.99",
          "explanation": "Dividing by \\(\\log 0.82\\) (negative) flips \\(<\\) to \\(>\\) — a critical step students often miss.",
          "stepNumber": 4
        },
        {
          "description": "Round up to a whole year.",
          "workingLatex": "n = 7",
          "explanation": "The value first drops below £5,000 in year 7; at year 6 it's still above.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Year 7.",
      "commonMistakes": [
        "Forgetting to flip the inequality when dividing by a negative log.",
        "Using \\(0.18\\) instead of \\(0.82\\) as the multiplier.",
        "Rounding 6.99 down to 6 — it must round up to the first year below the threshold."
      ]
    }
  },
  {
    "id": "y2ss4-025",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 25",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A train's speed increases in arithmetic progression: 10 km/h in minute 1, 15 km/h in minute 2, 20 km/h in minute 3, and so on. Find the train's speed in minute 20.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+5\\text{ km/h each minute} \\Rightarrow \\text{arithmetic}",
          "explanation": "A fixed increase per minute is an AP.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 10,\\quad d = 5",
          "explanation": "Minute 1 is 10 km/h; each minute adds 5 km/h.",
          "stepNumber": 2
        },
        {
          "description": "State the nth-term formula.",
          "workingLatex": "u_{n} = a + (n-1)d",
          "explanation": "The \\((n-1)\\) counts the increases applied by minute \\(n\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute, minding the index.",
          "workingLatex": "u_{20} = 10 + (20-1)(5) = 10 + 19(5)",
          "explanation": "Minute 20 has had 19 increases.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 10 + 95 = 105\\text{ km/h}",
          "explanation": "\\(19 \\times 5 = 95\\) added to the starting speed.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "105 km/h.",
      "commonMistakes": [
        "Using \\(20 \\times 5\\) instead of \\(19 \\times 5\\).",
        "Treating the 5 km/h rise as a percentage.",
        "Summing the speeds instead of finding the single 20th term."
      ]
    }
  },
  {
    "id": "y2ss4-026",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 26",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A woman plans to run a marathon. Her training plan starts with 3 km in week 1 and increases the weekly total by 20% each week. Find the total distance run over 10 weeks.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+20\\%\\text{ each week} \\Rightarrow \\text{geometric series}",
          "explanation": "Weekly totals rise by a fixed percentage (a GP); total distance is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Convert the rate to a multiplier.",
          "workingLatex": "100\\% + 20\\% = 1.2",
          "explanation": "20% increase means \\(\\times 1.2\\).",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Use the \\(r-1\\) form for \\(r>1\\), with \\(a = 3\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{10} = \\dfrac{3(1.2^{10} - 1)}{0.2}",
          "explanation": "Denominator \\(0.2\\).",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.2)^{10} \\approx 6.191736",
          "explanation": "Cumulative factor over 10 weeks.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "\\dfrac{3(5.191736)}{0.2} \\approx 77.88\\text{ km}",
          "explanation": "Total distance over the 10-week plan.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx 77.88\\) km.",
      "commonMistakes": [
        "Dividing by 20 or 2 instead of 0.2.",
        "Reporting week 10's distance instead of the cumulative total.",
        "Using \\(1.02\\) (2%) by misreading the rate."
      ]
    }
  },
  {
    "id": "y2ss4-027",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 27",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A salesman earns £1,500 in his first month plus a commission of £100 more each successive month. Find his total earnings after 2 years.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+£100\\text{ each month} \\Rightarrow \\text{arithmetic}",
          "explanation": "A fixed monthly increase is an AP; total earnings is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 1500,\\quad d = 100,\\quad n = 24",
          "explanation": "2 years is 24 months.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "Total over 24 months uses the AP sum.",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{24} = \\tfrac{24}{2}\\big(2(1500) + 23(100)\\big)",
          "explanation": "\\(n = 24\\), so \\((n-1) = 23\\).",
          "stepNumber": 4
        },
        {
          "description": "Simplify and evaluate.",
          "workingLatex": "= 12\\big(3000 + 2300\\big) = 12(5300) = 63600",
          "explanation": "\\(2a = 3000\\), \\(23 \\times 100 = 2300\\); total £63,600.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "£63,600.",
      "commonMistakes": [
        "Using 2 as \\(n\\) (years) instead of 24 (months).",
        "Using \\(24 \\times 100\\) instead of \\(23 \\times 100\\) in the bracket.",
        "Reporting the final month's pay rather than the total."
      ]
    }
  },
  {
    "id": "y2ss4-028",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 28",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A colony of bees grows by 8% per week. Starting from 1,500 bees, find the colony size after 12 weeks.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model and multiplier.",
          "workingLatex": "8\\%\\text{ weekly growth} \\Rightarrow \\times 1.08\\ \\text{(geometric)}",
          "explanation": "A constant percentage rise is a GP.",
          "stepNumber": 1
        },
        {
          "description": "Write the general model.",
          "workingLatex": "P_{n} = 1500(1.08)^{n}",
          "explanation": "The colony of 1500 multiplies by \\(1.08\\) each week.",
          "stepNumber": 2
        },
        {
          "description": "Substitute the time.",
          "workingLatex": "P_{12} = 1500(1.08)^{12}",
          "explanation": "Twelve weeks.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.08)^{12} \\approx 2.518170",
          "explanation": "Cumulative growth factor over 12 weeks.",
          "stepNumber": 4
        },
        {
          "description": "Compute and round to whole bees.",
          "workingLatex": "1500 \\times 2.518170 \\approx 3777",
          "explanation": "Round to a whole number at the end.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(\\approx 3777\\) bees.",
      "commonMistakes": [
        "Using exponent 11 (treating the start as week 1).",
        "Adding 8% of 1500 each week (linear).",
        "Multiplier \\(0.08\\) or \\(8\\) instead of \\(1.08\\)."
      ]
    }
  },
  {
    "id": "y2ss4-029",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 29",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A factory produces 1,200 units in year 1 and this decreases by 5% each subsequent year. Find the total production over 10 years.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "-5\\%\\text{ each year} \\Rightarrow \\text{decaying geometric series}",
          "explanation": "Production falls by a fixed percentage (a GP with \\(r<1\\)); total output is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Convert the decline to a multiplier.",
          "workingLatex": "100\\% - 5\\% = 95\\% = 0.95",
          "explanation": "Losing 5% leaves 95%.",
          "stepNumber": 2
        },
        {
          "description": "Choose the decreasing-sum form.",
          "workingLatex": "S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "When \\(r<1\\), the \\(1-r\\) form keeps both parts positive; \\(a = 1200\\).",
          "stepNumber": 3
        },
        {
          "description": "Substitute the values.",
          "workingLatex": "S_{10} = \\dfrac{1200(1 - 0.95^{10})}{0.05}",
          "explanation": "Denominator \\(1 - 0.95 = 0.05\\).",
          "stepNumber": 4
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(0.95)^{10} \\approx 0.598737",
          "explanation": "Retention factor over 10 years.",
          "stepNumber": 5
        },
        {
          "description": "Compute and round.",
          "workingLatex": "\\dfrac{1200(0.401263)}{0.05} \\approx 9{,}630\\text{ units}",
          "explanation": "Total production over 10 years.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(\\approx 9{,}630\\) units.",
      "commonMistakes": [
        "Using \\(0.05\\) as the ratio instead of \\(0.95\\).",
        "Using the \\(r-1\\) form and getting a negative intermediate.",
        "Reporting year-10 output rather than the cumulative total."
      ]
    }
  },
  {
    "id": "y2ss4-030",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 30",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sheet of paper is 0.1 mm thick. Each time the paper is folded in half, its thickness doubles. Find the thickness after 15 folds, and compare to the height of an adult human (\\(\\approx 1.8\\) m).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{each fold doubles thickness} \\Rightarrow \\text{geometric},\\ r = 2",
          "explanation": "Doubling per fold is a GP.",
          "stepNumber": 1
        },
        {
          "description": "Write and substitute the model.",
          "workingLatex": "T_{15} = 0.1 \\cdot 2^{15}\\ \\text{mm}",
          "explanation": "Start from 0.1 mm and double 15 times; keep units in mm for now.",
          "stepNumber": 2
        },
        {
          "description": "Evaluate the power and compute.",
          "workingLatex": "2^{15} = 32768 \\Rightarrow 0.1 \\times 32768 = 3276.8\\text{ mm}",
          "explanation": "\\(2^{15} = 32768\\).",
          "stepNumber": 3
        },
        {
          "description": "Convert to metres.",
          "workingLatex": "3276.8\\text{ mm} = 3.28\\text{ m}",
          "explanation": "Divide by 1000 to convert mm to m.",
          "stepNumber": 4
        },
        {
          "description": "Compare with human height.",
          "workingLatex": "3.28\\text{ m} > 1.8\\text{ m}",
          "explanation": "Just 15 folds beats adult height — a vivid illustration of how explosively exponential growth compounds.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "3.28 m — taller than an adult.",
      "commonMistakes": [
        "Multiplying \\(0.1 \\times 2 \\times 15\\) instead of \\(0.1 \\times 2^{15}\\).",
        "Forgetting the mm-to-m conversion and comparing 3276.8 to 1.8.",
        "Using \\(2^{14}\\) by miscounting the folds."
      ]
    }
  },
  {
    "id": "y2ss4-031",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 31",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A gym's membership increases by 12 members each month. The gym starts with 80 members and has a maximum capacity of 300. After how many months does it first reach capacity?",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+12\\text{ members each month} \\Rightarrow \\text{arithmetic}",
          "explanation": "A fixed monthly increase is an AP; we want when it reaches capacity.",
          "stepNumber": 1
        },
        {
          "description": "Write the membership expression.",
          "workingLatex": "M = 80 + 12n",
          "explanation": "After \\(n\\) months, \\(12n\\) members have been added to the starting 80.",
          "stepNumber": 2
        },
        {
          "description": "Set up the capacity inequality.",
          "workingLatex": "80 + 12n \\geq 300",
          "explanation": "Capacity 300 is reached when membership first hits or passes it.",
          "stepNumber": 3
        },
        {
          "description": "Solve for \\(n\\).",
          "workingLatex": "12n \\geq 220 \\Rightarrow n \\geq 18.33",
          "explanation": "Subtract 80, then divide by 12.",
          "stepNumber": 4
        },
        {
          "description": "Round up to a whole month.",
          "workingLatex": "n = 19",
          "explanation": "Capacity isn't reached until membership actually hits 300, so round *up*: month 18 is still short.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "19 months.",
      "commonMistakes": [
        "Rounding 18.33 down to 18 instead of up to 19.",
        "Using \\(80 + 12(n-1)\\) and shifting the answer by a month.",
        "Treating the 12-member rise as a percentage."
      ]
    }
  },
  {
    "id": "y2ss4-032",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 32",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A loaf of bread cost £1.20 in 2020 and prices rise by 6% each year due to inflation. Find the price in 2030, to the nearest penny.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model and multiplier.",
          "workingLatex": "6\\%\\text{ inflation} \\Rightarrow \\times 1.06\\ \\text{(geometric)}",
          "explanation": "A fixed percentage rise compounds.",
          "stepNumber": 1
        },
        {
          "description": "Count the years.",
          "workingLatex": "2030 - 2020 = 10",
          "explanation": "Ten years of inflation from the 2020 price.",
          "stepNumber": 2
        },
        {
          "description": "Write and substitute the model.",
          "workingLatex": "1.20(1.06)^{10}",
          "explanation": "Start from £1.20 and apply 10 years of growth.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.06)^{10} \\approx 1.790847",
          "explanation": "Cumulative factor over a decade.",
          "stepNumber": 4
        },
        {
          "description": "Compute and round to the penny.",
          "workingLatex": "1.20 \\times 1.790847 \\approx 2.149 \\Rightarrow £2.15",
          "explanation": "Round to the nearest penny as asked.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "£2.15.",
      "commonMistakes": [
        "Using 11 years (counting both endpoints).",
        "Multiplier \\(0.06\\) or \\(6\\) instead of \\(1.06\\).",
        "Rounding £2.149 to £2.14 instead of £2.15."
      ]
    }
  },
  {
    "id": "y2ss4-033",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 33",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A drug has a half-life of 6 hours. A patient is given an initial 400 mg dose. Find the amount remaining after 18 hours.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "decay"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "\\text{half-life} \\Rightarrow \\times 0.5\\text{ per }6\\text{ h (geometric)}",
          "explanation": "Each half-life period halves the mass — a GP with ratio \\(\\tfrac12\\).",
          "stepNumber": 1
        },
        {
          "description": "Count the half-lives.",
          "workingLatex": "18 \\div 6 = 3\\ \\text{periods}",
          "explanation": "Convert the elapsed 18 hours into whole half-life periods before applying the power.",
          "stepNumber": 2
        },
        {
          "description": "Write and substitute the model.",
          "workingLatex": "M = 400(0.5)^{3}",
          "explanation": "Start from 400 mg and halve three times.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate and compute.",
          "workingLatex": "(0.5)^{3} = \\tfrac18 \\Rightarrow 400 \\times \\tfrac18 = 50\\text{ mg}",
          "explanation": "Halving three times divides by 8.",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "50 mg.",
      "commonMistakes": [
        "Using 18 as the exponent instead of 3 (forgetting to divide by the half-life length).",
        "Subtracting 50% of 400 mg three times incorrectly (200, 100, ...) — actually equivalent, but students often miscompute.",
        "Halving only twice by miscounting the periods."
      ]
    }
  },
  {
    "id": "y2ss4-034",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 34",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Snowfall on day 1 is 3 cm and increases by 2 cm per day. Find the total snowfall over 7 days.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+2\\text{ cm each day} \\Rightarrow \\text{arithmetic}",
          "explanation": "Fixed daily increase is an AP; total snowfall is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 3,\\quad d = 2,\\quad n = 7",
          "explanation": "Day-1 snowfall, common difference, 7 days.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "Total over 7 days uses the AP sum.",
          "stepNumber": 3
        },
        {
          "description": "Substitute and simplify.",
          "workingLatex": "S_{7} = \\tfrac{7}{2}\\big(6 + 12\\big) = \\tfrac{7}{2}(18)",
          "explanation": "\\(2a = 6\\), \\(6 \\times 2 = 12\\); bracket 18.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 7 \\times 9 = 63\\text{ cm}",
          "explanation": "Halve 18 to 9 first, then times 7.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "63 cm.",
      "commonMistakes": [
        "Using \\(7 \\times 2\\) instead of \\(6 \\times 2\\) for the increases.",
        "Reporting day-7 snowfall (15 cm) instead of the total.",
        "Dropping the \\(\\tfrac{n}{2}\\) factor."
      ]
    }
  },
  {
    "id": "y2ss4-035",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 35",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A tap fills a tank 5 L in the first minute, 5.5 L in the second, 6 L in the third, and so on. How long does it take to fill a 110 L tank?",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+0.5\\text{ L each minute} \\Rightarrow \\text{arithmetic}",
          "explanation": "The per-minute amounts form an AP; the cumulative fill is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 5,\\quad d = 0.5",
          "explanation": "Minute 1 adds 5 L; each minute adds 0.5 L more.",
          "stepNumber": 2
        },
        {
          "description": "Set the cumulative sum at the target.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(5) + 0.5(n-1)\\big) \\geq 110",
          "explanation": "The tank fills when the AP sum first reaches 110 L.",
          "stepNumber": 3
        },
        {
          "description": "Expand to a quadratic.",
          "workingLatex": "\\tfrac{n}{2}\\big(10 + 0.5(n-1)\\big) \\geq 110 \\Rightarrow n^{2} + 19n - 440 \\geq 0",
          "explanation": "Multiply out and clear the half to get a quadratic in \\(n\\).",
          "stepNumber": 4
        },
        {
          "description": "Solve the quadratic.",
          "workingLatex": "n \\geq \\dfrac{-19 + \\sqrt{19^{2} + 4(440)}}{2} = \\dfrac{-19 + \\sqrt{2121}}{2} \\approx 13.53",
          "explanation": "Take the positive root; \\(\\sqrt{2121} \\approx 46.05\\).",
          "stepNumber": 5
        },
        {
          "description": "Round up and interpret.",
          "workingLatex": "n = 14\\text{ minutes}",
          "explanation": "The tank isn't full until the total reaches 110 L, so round up: 13 minutes falls short, 14 completes it.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "14 minutes.",
      "commonMistakes": [
        "Rounding 13.53 down to 13 instead of up to 14.",
        "Forgetting to clear the \\(\\tfrac12\\) when forming the quadratic.",
        "Taking the negative root of the quadratic."
      ]
    }
  },
  {
    "id": "y2ss4-036",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 36",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "An electricity bill is £60 in month 1 and increases by £2 each month. Find the total cost over 1 year.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+£2\\text{ each month} \\Rightarrow \\text{arithmetic}",
          "explanation": "Fixed monthly rise is an AP; total cost is the sum.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 60,\\quad d = 2,\\quad n = 12",
          "explanation": "Month-1 bill, common difference, 12 months.",
          "stepNumber": 2
        },
        {
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n-1)d\\big)",
          "explanation": "Annual total uses the AP sum.",
          "stepNumber": 3
        },
        {
          "description": "Substitute and simplify.",
          "workingLatex": "S_{12} = \\tfrac{12}{2}\\big(120 + 22\\big) = 6(142)",
          "explanation": "\\(2a = 120\\), \\(11 \\times 2 = 22\\); bracket 142.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 852",
          "explanation": "£852 over the year.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "£852.",
      "commonMistakes": [
        "Using \\(12 \\times 2\\) instead of \\(11 \\times 2\\).",
        "Reporting month-12's bill rather than the total.",
        "Treating the £2 rise as a percentage."
      ]
    }
  },
  {
    "id": "y2ss4-037",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 37",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A chicken farm has 300 hens and each year 10% are culled. After how many years are there fewer than 100 hens?",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model and multiplier.",
          "workingLatex": "10\\%\\text{ culled} \\Rightarrow \\times 0.9\\ \\text{(geometric decay)}",
          "explanation": "Culling 10% leaves 90%.",
          "stepNumber": 1
        },
        {
          "description": "Set up the inequality.",
          "workingLatex": "300(0.9)^{n} < 100",
          "explanation": "We need the herd to fall below 100.",
          "stepNumber": 2
        },
        {
          "description": "Isolate the power.",
          "workingLatex": "(0.9)^{n} < \\tfrac13",
          "explanation": "Divide both sides by the starting 300.",
          "stepNumber": 3
        },
        {
          "description": "Take logs, watching the sign.",
          "workingLatex": "n > \\dfrac{\\log(1/3)}{\\log 0.9} \\approx 10.42",
          "explanation": "Dividing by \\(\\log 0.9\\) (negative) flips the inequality.",
          "stepNumber": 4
        },
        {
          "description": "Round up to a whole year.",
          "workingLatex": "n = 11",
          "explanation": "The herd first drops below 100 in year 11.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Year 11.",
      "commonMistakes": [
        "Failing to flip the inequality at the log step.",
        "Using \\(0.1\\) as the multiplier.",
        "Rounding 10.42 down to 10."
      ]
    }
  },
  {
    "id": "y2ss4-038",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 38",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A cactus gains 0.2 cm each day. On day 1 it is 5 cm tall. Find its height on day 100.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model.",
          "workingLatex": "+0.2\\text{ cm each day} \\Rightarrow \\text{arithmetic}",
          "explanation": "Fixed daily growth is an AP.",
          "stepNumber": 1
        },
        {
          "description": "Write the AP parameters.",
          "workingLatex": "a = 5,\\quad d = 0.2",
          "explanation": "Day-1 height and daily growth.",
          "stepNumber": 2
        },
        {
          "description": "State the nth-term formula.",
          "workingLatex": "u_{n} = a + (n-1)d",
          "explanation": "The \\((n-1)\\) counts the daily increments.",
          "stepNumber": 3
        },
        {
          "description": "Substitute, minding the index.",
          "workingLatex": "u_{100} = 5 + (100-1)(0.2) = 5 + 99(0.2)",
          "explanation": "Day 100 has had 99 increments — not 100.",
          "stepNumber": 4
        },
        {
          "description": "Evaluate.",
          "workingLatex": "= 5 + 19.8 = 24.8\\text{ cm}",
          "explanation": "\\(99 \\times 0.2 = 19.8\\).",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "24.8 cm.",
      "commonMistakes": [
        "Using \\(100 \\times 0.2\\) instead of \\(99 \\times 0.2\\).",
        "Summing the heights instead of finding the 100th term.",
        "Treating the 0.2 cm growth as a percentage."
      ]
    }
  },
  {
    "id": "y2ss4-039",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 39",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "An adult height reaches 175 cm. The child grows by 8 cm in year 1 and each subsequent year they grow 2 cm less than the previous year. If they start at 50 cm, show that they reach the height of 175 cm in an arithmetic setting: find the year in which height first reaches 175 cm (interpret answer).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify what is arithmetic here.",
          "workingLatex": "\\text{yearly growth} = 8, 6, 4, 2, 0, \\ldots",
          "explanation": "It is the *growth amounts* that form an AP (decreasing by 2 cm a year), not the heights themselves. A child's growth cannot be negative, so growth stops at 0.",
          "stepNumber": 1
        },
        {
          "description": "List the growth amounts until they reach zero.",
          "workingLatex": "8,\\ 6,\\ 4,\\ 2,\\ 0",
          "explanation": "After 4 positive years the annual growth has fallen to 0; no further height is added.",
          "stepNumber": 2
        },
        {
          "description": "Accumulate the height from 50 cm.",
          "workingLatex": "50,\\ 58,\\ 64,\\ 68,\\ 70,\\ 70, \\ldots",
          "explanation": "Add each year's growth to the running total; once growth hits 0 the height plateaus at 70 cm.",
          "stepNumber": 3
        },
        {
          "description": "Find the maximum height.",
          "workingLatex": "50 + (8+6+4+2) = 50 + 20 = 70\\text{ cm}",
          "explanation": "The total growth is the sum of the positive amounts, 20 cm, giving a ceiling of 70 cm.",
          "stepNumber": 4
        },
        {
          "description": "Compare with the target and interpret.",
          "workingLatex": "70 < 175 \\Rightarrow \\text{never reached}",
          "explanation": "Because diminishing arithmetic growth has a finite total, the height can never reach 175 cm — the model is unrealistic for indefinite growth, so no year satisfies the condition.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Does not reach 175 cm under this model.",
      "commonMistakes": [
        "Treating the heights (not the growths) as the AP.",
        "Letting the growth go negative and the height shrink after year 5.",
        "Assuming the target is always reachable and solving for an impossible \\(n\\)."
      ]
    }
  },
  {
    "id": "y2ss4-040",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 40",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A zebra population grows geometrically at 12% per year. Starting with 500 zebras, find the smallest \\(n\\) for which the population exceeds 1000.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Identify the model and multiplier.",
          "workingLatex": "12\\%\\text{ growth} \\Rightarrow \\times 1.12\\ \\text{(geometric)}",
          "explanation": "A fixed percentage rise is a GP.",
          "stepNumber": 1
        },
        {
          "description": "Set up the inequality.",
          "workingLatex": "500(1.12)^{n} > 1000",
          "explanation": "We want the population to exceed 1000.",
          "stepNumber": 2
        },
        {
          "description": "Isolate the power.",
          "workingLatex": "(1.12)^{n} > 2",
          "explanation": "Divide both sides by the starting 500.",
          "stepNumber": 3
        },
        {
          "description": "Take logs.",
          "workingLatex": "n > \\dfrac{\\log 2}{\\log 1.12} \\approx 6.12",
          "explanation": "Both logs positive, so the direction is unchanged.",
          "stepNumber": 4
        },
        {
          "description": "Round up to a whole year.",
          "workingLatex": "n = 7",
          "explanation": "'Exceeds 1000' first happens in year 7; year 6 is still under.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Year 7.",
      "commonMistakes": [
        "Rounding 6.12 down to 6.",
        "Dividing by 1000 instead of 500.",
        "Using \\(0.12\\) or \\(12\\) as the multiplier."
      ]
    }
  },
  {
    "id": "y2ss4-041",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 41",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Edwin invests £1,000 at the start of each year in an account paying 5% compound interest per year. Find (a) the total value of the account immediately after the 10th deposit and (b) the value just before any future withdrawals at the start of year 20, assuming the deposits stop after year 10.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "annuity",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set up the model.",
          "workingLatex": "\\text{start-of-year deposits compound at }1.05",
          "explanation": "Each £1000 deposit earns 5% for the years remaining; summing them after the 10th deposit is a GP.",
          "stepNumber": 1
        },
        {
          "description": "(a) Write the geometric sum.",
          "workingLatex": "V = 1000\\sum_{k=0}^{9} 1.05^{k} = 1000\\cdot\\dfrac{1.05^{10} - 1}{1.05 - 1}",
          "explanation": "Ten deposits with growth factors \\(1.05^{0}\\) up to \\(1.05^{9}\\) form a GP of 10 terms.",
          "stepNumber": 2
        },
        {
          "description": "(a) Evaluate.",
          "workingLatex": "\\dfrac{1.05^{10} - 1}{0.05} \\approx 12.5779 \\Rightarrow V \\approx £12{,}577.89",
          "explanation": "This is the balance immediately after the 10th deposit.",
          "stepNumber": 3
        },
        {
          "description": "(b) Recognise the second phase.",
          "workingLatex": "\\text{no new deposits; lump sum compounds }10\\text{ more years}",
          "explanation": "After year 10 the accumulated balance simply grows at 5% with nothing added.",
          "stepNumber": 4
        },
        {
          "description": "(b) Grow the balance.",
          "workingLatex": "V_{20} = 12577.89(1.05)^{10}",
          "explanation": "Apply 10 further years of compounding to the year-10 balance.",
          "stepNumber": 5
        },
        {
          "description": "(b) Evaluate.",
          "workingLatex": "(1.05)^{10} \\approx 1.628895 \\Rightarrow V_{20} \\approx £20{,}488",
          "explanation": "Reusing the year-10 figure avoids re-summing the series.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "(a) \\(\\approx £12{,}578\\); (b) \\(\\approx £20{,}488\\).",
      "commonMistakes": [
        "Summing 11 terms (off-by-one) for the 10 deposits.",
        "Forgetting the second growth phase and stopping at £12,578.",
        "Treating deposits as end-of-year (one fewer year of interest)."
      ]
    }
  },
  {
    "id": "y2ss4-042",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 42",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A savings plan pays interest monthly at 0.4% per month on the balance at the start of the month. Olivia deposits £200 at the start of each month for 5 years. Show that the value at the end of the 5-year period is \\(V = 200 \\cdot 1.004 \\cdot \\tfrac{1.004^{60} - 1}{0.004}\\) and find this value to the nearest pound.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "annuity",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Set up the model.",
          "workingLatex": "\\text{deposit }k\\text{ grows for }60-k+1\\text{ months}",
          "explanation": "Start-of-month deposits each compound at \\(1.004\\) to the end of month 60; the earliest grows most.",
          "stepNumber": 1
        },
        {
          "description": "Write the sum as a GP.",
          "workingLatex": "V = 200\\sum_{k=1}^{60} 1.004^{60-k+1}",
          "explanation": "The offset powers run from \\(1.004^{1}\\) up to \\(1.004^{60}\\).",
          "stepNumber": 2
        },
        {
          "description": "Factor to the required closed form.",
          "workingLatex": "V = 200\\cdot 1.004\\cdot\\dfrac{1.004^{60} - 1}{0.004}",
          "explanation": "Summing the GP gives exactly the form the question asks you to show.",
          "stepNumber": 3
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.004)^{60} \\approx 1.270589",
          "explanation": "Keep the \\(0.004\\) denominator exact to avoid rounding drift.",
          "stepNumber": 4
        },
        {
          "description": "Compute and round.",
          "workingLatex": "200\\cdot 1.004\\cdot \\dfrac{0.270589}{0.004} \\approx £13{,}584",
          "explanation": "\\(\\tfrac{0.270589}{0.004} \\approx 67.65\\), then multiply through.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(\\approx £13{,}584\\).",
      "commonMistakes": [
        "Omitting the leading \\(1.004\\) factor (treating deposits as end-of-month).",
        "Dividing by 0.04 or 4 instead of 0.004.",
        "Using 59 or 61 terms by miscounting the months."
      ]
    }
  },
  {
    "id": "y2ss4-043",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 43",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A water reservoir loses 8% of its volume each week due to evaporation, but each week 1,000 m³ of water is added. Let \\(V_{n}\\) denote the volume (in m³) at the end of week \\(n\\), with \\(V_{0} = 20{,}000\\). (a) Write a recurrence for \\(V_{n}\\). (b) Find \\(V_{4}\\) to the nearest m³. (c) Find the long-term volume.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the loss to a multiplier.",
          "workingLatex": "8\\%\\text{ loss} \\Rightarrow 92\\%\\text{ remains} = 0.92",
          "explanation": "Evaporation removes 8%, leaving 92% before the inflow is added.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "V_{n+1} = 0.92 V_{n} + 1000,\\quad V_{0} = 20000",
          "explanation": "Scale the current volume by 0.92, then add the weekly 1000 m³ — a 'multiply then add' recurrence.",
          "stepNumber": 2
        },
        {
          "description": "(b) Iterate week by week.",
          "workingLatex": "V_{1} = 0.92(20000)+1000 = 19400,\\ V_{2} = 18848,\\ V_{3} \\approx 18340",
          "explanation": "Apply the rule one step at a time, carrying full precision.",
          "stepNumber": 3
        },
        {
          "description": "(b) Reach \\(V_4\\).",
          "workingLatex": "V_{4} = 0.92(18340.16)+1000 \\approx 17873\\text{ m}^{3}",
          "explanation": "Round to the nearest m³ only at the end.",
          "stepNumber": 4
        },
        {
          "description": "(c) Set up the equilibrium.",
          "workingLatex": "L = 0.92L + 1000",
          "explanation": "At the long-term level consecutive volumes are equal, so set \\(V_{n+1} = V_n = L\\).",
          "stepNumber": 5
        },
        {
          "description": "(c) Solve for the long-term volume.",
          "workingLatex": "0.08L = 1000 \\Rightarrow L = 12500\\text{ m}^{3}",
          "explanation": "The weekly loss balances the 1000 m³ inflow at 12,500 m³; since \\(V_0 > L\\), the volume falls towards this level.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(V_{4} \\approx 17{,}873\\) m³; long-term 12,500 m³.",
      "commonMistakes": [
        "Using 0.08 instead of 0.92 as the retention factor.",
        "Adding the 1000 m³ before scaling, or forgetting it entirely.",
        "Solving the equilibrium as \\(0.92L = 1000\\) instead of \\(0.08L = 1000\\)."
      ]
    }
  },
  {
    "id": "y2ss4-044",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 44",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A patient is prescribed a drug that decays naturally at a rate of 25% every 6 hours. A dose of 80 mg is taken every 6 hours. Let \\(m_{n}\\) be the mass (mg) immediately after the \\(n\\)th dose. (a) Write a recurrence. (b) Find \\(m_{5}\\) to 2 decimal places. (c) State the long-term level.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the decay to a multiplier.",
          "workingLatex": "25\\%\\text{ decay} \\Rightarrow 75\\%\\text{ remains} = 0.75",
          "explanation": "Decaying 25% leaves 75% before the next dose.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "m_{n+1} = 0.75 m_{n} + 80,\\quad m_{1} = 80",
          "explanation": "Scale by 0.75, then add the 80 mg dose.",
          "stepNumber": 2
        },
        {
          "description": "(b) Iterate dose by dose.",
          "workingLatex": "m_{2} = 140,\\ m_{3} = 185,\\ m_{4} = 218.75",
          "explanation": "\\(0.75(80)+80 = 140\\), and so on; carry full precision.",
          "stepNumber": 3
        },
        {
          "description": "(b) Reach \\(m_5\\).",
          "workingLatex": "m_{5} = 0.75(218.75) + 80 = 244.0625 \\approx 244.06\\text{ mg}",
          "explanation": "Quote to 2 d.p. as asked.",
          "stepNumber": 4
        },
        {
          "description": "(c) Set up and solve the equilibrium.",
          "workingLatex": "L = 0.75L + 80 \\Rightarrow 0.25L = 80 \\Rightarrow L = 320\\text{ mg}",
          "explanation": "At steady state the 25% cleared each cycle equals the 80 mg dose, levelling at 320 mg.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(m_{5} \\approx 244.06\\) mg; long-term 320 mg.",
      "commonMistakes": [
        "Using 0.25 instead of 0.75 as the carry-over factor.",
        "Starting the iteration from \\(m_0\\) and shifting all values.",
        "Solving \\(0.75L = 80\\) instead of \\(0.25L = 80\\) for the equilibrium."
      ]
    }
  },
  {
    "id": "y2ss4-045",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 45",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A ball is dropped from 2 m and bounces to 70% of its previous height. (a) Find the total distance travelled before the ball comes to rest. (b) Find the smallest \\(n\\) such that the bounce height is less than 1 cm.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum to infinity",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set up the total distance.",
          "workingLatex": "D = 2 + 2\\sum_{n=1}^{\\infty} 2(0.7)^{n}",
          "explanation": "The 2 m drop is counted once; every bounce travels up *and* down, so each bounce height counts twice.",
          "stepNumber": 1
        },
        {
          "description": "(a) Identify the bounce GP.",
          "workingLatex": "a = 2(0.7) = 1.4,\\quad r = 0.7",
          "explanation": "The first bounce rises to 1.4 m, and each later bounce is 70% of the last.",
          "stepNumber": 2
        },
        {
          "description": "(a) Sum the bounce series.",
          "workingLatex": "\\sum_{n=1}^{\\infty} 2(0.7)^{n} = \\dfrac{1.4}{1 - 0.7} = \\dfrac{1.4}{0.3}",
          "explanation": "Since \\(|r| < 1\\) the bounce heights sum to a finite limit.",
          "stepNumber": 3
        },
        {
          "description": "(a) Combine.",
          "workingLatex": "D = 2 + 2\\cdot\\dfrac{1.4}{0.3} = 2 + \\tfrac{28}{3} \\approx 11.33\\text{ m}",
          "explanation": "Add the single drop to twice the bounce total.",
          "stepNumber": 4
        },
        {
          "description": "(b) Set up the 'below 1 cm' inequality.",
          "workingLatex": "2(0.7)^{n} < 0.01 \\Rightarrow (0.7)^{n} < 0.005",
          "explanation": "Convert 1 cm to 0.01 m, then divide by the 2 m drop height.",
          "stepNumber": 5
        },
        {
          "description": "(b) Solve with logs and round up.",
          "workingLatex": "n > \\dfrac{\\log 0.005}{\\log 0.7} \\approx 14.86 \\Rightarrow n = 15",
          "explanation": "Dividing by \\(\\log 0.7\\) (negative) flips the inequality; the first bounce under 1 cm is the 15th.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Total \\(\\approx 11.33\\) m; smallest \\(n = 15\\).",
      "commonMistakes": [
        "Forgetting the factor of 2 on the bounces (counting only the upward trip).",
        "Including the initial 2 m drop inside the doubled bounce sum.",
        "Failing to flip the inequality at the log step in part (b)."
      ]
    }
  },
  {
    "id": "y2ss4-046",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 46",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A town's population is currently 50,000 and is expected to grow by 2% per year for the next 10 years, after which it is expected to stabilise. A nearby town has 80,000 people today and population decreases by 1% each year. (a) After how many years are the two populations equal? (b) What are the populations in that year?",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set the populations equal.",
          "workingLatex": "50000(1.02)^{n} = 80000(0.99)^{n}",
          "explanation": "Town A grows at \\(1.02\\), town B decays at \\(0.99\\); equality is where the two curves meet.",
          "stepNumber": 1
        },
        {
          "description": "(a) Gather the powers into one base.",
          "workingLatex": "\\left(\\dfrac{1.02}{0.99}\\right)^{n} = \\dfrac{80000}{50000} = 1.6",
          "explanation": "Divide both sides by \\(50000(0.99)^{n}\\) to combine the exponentials.",
          "stepNumber": 2
        },
        {
          "description": "(a) Simplify the base.",
          "workingLatex": "(1.030303\\ldots)^{n} = 1.6",
          "explanation": "\\(\\tfrac{1.02}{0.99} \\approx 1.0303\\).",
          "stepNumber": 3
        },
        {
          "description": "(a) Solve with logs.",
          "workingLatex": "n = \\dfrac{\\log 1.6}{\\log 1.0303} \\approx 15.74 \\Rightarrow n \\approx 16",
          "explanation": "Round to the nearest whole year for the populations to be closest to equal.",
          "stepNumber": 4
        },
        {
          "description": "(b) Find the common population.",
          "workingLatex": "50000(1.02)^{16} \\approx 68{,}640,\\ 80000(0.99)^{16} \\approx 68{,}120 \\Rightarrow \\approx £68{,}400",
          "explanation": "Both are about 68,400 at year 16 (they cross at \\(n \\approx 15.7\\)).",
          "stepNumber": 5
        },
        {
          "description": "(b) Note the modelling caveat.",
          "workingLatex": "\\text{if A stabilises after }10\\text{ yr},\\ A = 50000(1.02)^{10} \\approx 60{,}950",
          "explanation": "The stem says town A's growth stops after 10 years; under that stricter reading A is fixed at ≈60,950 and equality instead occurs around year 27. The numerical answer above uses the unbroken exponential model.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "\\(n \\approx 16\\) (unbroken exponential model); both \\(\\approx £68{,}400\\). Note: if town A's growth stops after 10 years as stated, equality instead occurs around year 27.",
      "commonMistakes": [
        "Subtracting the exponents instead of dividing the bases.",
        "Ignoring the 'stabilises after 10 years' clause without comment.",
        "Stopping at \\(n \\approx 15.7\\) without rounding to a whole year."
      ]
    }
  },
  {
    "id": "y2ss4-047",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 47",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "An employee contributes £200 per month to a pension that earns 0.5% interest per month. Contributions are made at the start of each month. Find the pension value after 20 years.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "annuity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Convert the term and rate.",
          "workingLatex": "20\\text{ years} = 240\\text{ months},\\ 0.5\\% \\Rightarrow 1.005",
          "explanation": "Work in months because interest is monthly; 0.5% per month is \\(\\times 1.005\\).",
          "stepNumber": 1
        },
        {
          "description": "Set up the annuity-due sum.",
          "workingLatex": "V = 200\\cdot 1.005\\cdot\\dfrac{1.005^{240} - 1}{0.005}",
          "explanation": "Start-of-month £200 deposits compounding at \\(1.005\\) form a GP; this is their sum.",
          "stepNumber": 2
        },
        {
          "description": "Evaluate the power.",
          "workingLatex": "(1.005)^{240} \\approx 3.310204",
          "explanation": "Cumulative factor over 240 months.",
          "stepNumber": 3
        },
        {
          "description": "Compute and round.",
          "workingLatex": "200\\cdot 1.005\\cdot\\dfrac{2.310204}{0.005} \\approx £92{,}870",
          "explanation": "\\(\\tfrac{2.310204}{0.005} \\approx 462.04\\), then multiply through.",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "\\(\\approx £92{,}870\\).",
      "commonMistakes": [
        "Using 20 (years) instead of 240 (months) as the exponent.",
        "Dividing by 0.05 or 5 instead of 0.005.",
        "Dropping the leading \\(1.005\\) (treating deposits as end-of-month)."
      ]
    }
  },
  {
    "id": "y2ss4-048",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 48",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A lake stocked with 1,000 trout grows at 20% per year, but each year 200 trout are caught at the end of the year. (a) Write a recurrence for the population \\(P_{n}\\). (b) Find \\(P_{4}\\). (c) State the long-term behaviour and justify.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert growth and catch.",
          "workingLatex": "+20\\% \\Rightarrow \\times 1.2,\\ \\text{then } -200",
          "explanation": "Grow by 20% (×1.2), then remove the 200 caught at year-end — a 'multiply then subtract' recurrence.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "P_{n+1} = 1.2 P_{n} - 200,\\quad P_{1} = 1000",
          "explanation": "The fixed catch is subtracted *after* the growth is applied.",
          "stepNumber": 2
        },
        {
          "description": "(b) Iterate.",
          "workingLatex": "P_{2} = 1.2(1000) - 200 = 1000,\\ P_{3} = 1000,\\ P_{4} = 1000",
          "explanation": "Since growth exactly replaces the catch, the population never moves.",
          "stepNumber": 3
        },
        {
          "description": "(c) Set up and solve the equilibrium.",
          "workingLatex": "L = 1.2L - 200 \\Rightarrow 0.2L = 200 \\Rightarrow L = 1000",
          "explanation": "The equilibrium is 1000 — exactly the starting value.",
          "stepNumber": 4
        },
        {
          "description": "(c) Justify the long-term behaviour.",
          "workingLatex": "P_{1} = L \\Rightarrow \\text{stays at }1000",
          "explanation": "Starting *at* the equilibrium means the population is stable: it neither grows nor shrinks.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(P_{4} = 1000\\); stable at equilibrium 1000.",
      "commonMistakes": [
        "Subtracting 200 before applying the growth.",
        "Assuming 20% growth must make the population rise, ignoring the catch.",
        "Solving \\(1.2L = 200\\) instead of \\(0.2L = 200\\)."
      ]
    }
  },
  {
    "id": "y2ss4-049",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 49",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A loan of £10,000 is taken out at 0.8% monthly interest. The borrower pays £250 at the end of each month. Let \\(D_{n}\\) be the debt at the end of month \\(n\\) (after payment). (a) Write a recurrence for \\(D_{n}\\). (b) After how many months is the debt first less than £5,000? (c) Will the loan ever be fully repaid?",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the interest to a multiplier.",
          "workingLatex": "0.8\\%\\text{ per month} \\Rightarrow \\times 1.008",
          "explanation": "Interest adds 0.8% to the debt each month before the payment.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "D_{n} = 1.008 D_{n-1} - 250,\\quad D_{0} = 10000",
          "explanation": "Apply the interest, then subtract the £250 payment.",
          "stepNumber": 2
        },
        {
          "description": "(b) Find the equilibrium and closed form.",
          "workingLatex": "L = \\dfrac{250}{0.008} = 31250,\\quad D_{n} = 31250 - 21250(1.008)^{n}",
          "explanation": "The closed form is \\(L + (D_0 - L)(1.008)^n\\), with \\(D_0 - L = -21250\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Solve \\(D_n < 5000\\).",
          "workingLatex": "31250 - 21250(1.008)^{n} < 5000 \\Rightarrow (1.008)^{n} > 1.2353",
          "explanation": "Rearrange to isolate the power: \\(26250 < 21250(1.008)^{n}\\).",
          "stepNumber": 4
        },
        {
          "description": "(b) Take logs and round up.",
          "workingLatex": "n > \\dfrac{\\log 1.2353}{\\log 1.008} \\approx 26.5 \\Rightarrow n = 27",
          "explanation": "The debt first drops below £5,000 at month 27.",
          "stepNumber": 5
        },
        {
          "description": "(c) Decide whether it's repaid.",
          "workingLatex": "D_{0} = 10000 < 31250 = L \\Rightarrow D_{n}\\downarrow 0",
          "explanation": "Because the starting debt is below the (unstable) equilibrium, the payment beats the interest and the debt falls to zero — the loan is repaid.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Month 27; yes, loan is fully repaid.",
      "commonMistakes": [
        "Computing the equilibrium as \\(0.008L = 250\\) but mis-dividing.",
        "Getting the sign of \\(D_0 - L\\) wrong in the closed form.",
        "Concluding the loan never clears despite \\(D_0 < L\\)."
      ]
    }
  },
  {
    "id": "y2ss4-050",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 50",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A particular radioactive isotope has a half-life of 5 years. A laboratory starts with 200 g of the isotope. Find (a) the mass remaining after 25 years and (b) the time required for the mass to fall below 5 g.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "decay",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Build the half-life model.",
          "workingLatex": "M(t) = 200(0.5)^{t/5}",
          "explanation": "Each 5-year half-life multiplies by \\(\\tfrac12\\); the exponent \\(t/5\\) counts half-lives and allows non-integer time.",
          "stepNumber": 1
        },
        {
          "description": "(a) Evaluate at 25 years.",
          "workingLatex": "M(25) = 200(0.5)^{25/5} = 200(0.5)^{5}",
          "explanation": "\\(25/5 = 5\\) half-lives.",
          "stepNumber": 2
        },
        {
          "description": "(a) Compute.",
          "workingLatex": "200 \\times \\tfrac{1}{32} = 6.25\\text{ g}",
          "explanation": "\\(0.5^{5} = \\tfrac{1}{32}\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Set up the 'below 5 g' inequality.",
          "workingLatex": "200(0.5)^{t/5} < 5 \\Rightarrow (0.5)^{t/5} < 0.025",
          "explanation": "Divide both sides by the starting 200 g.",
          "stepNumber": 4
        },
        {
          "description": "(b) Take logs and solve for \\(t\\).",
          "workingLatex": "\\tfrac{t}{5} > \\dfrac{\\log 0.025}{\\log 0.5} \\Rightarrow t > 5(5.3219) \\approx 26.58\\text{ years}",
          "explanation": "Solve for \\(t/5\\) first, then multiply by 5 to convert half-lives back to years (the sign flips since \\(\\log 0.5 < 0\\)).",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "25 yr: 6.25 g; below 5 g after \\(\\approx 26.58\\) years (\\(t > 27\\) if rounded to year).",
      "commonMistakes": [
        "Using \\(t\\) directly as the exponent instead of \\(t/5\\).",
        "Forgetting to multiply by 5 when converting back to years.",
        "Not flipping the inequality at the log step."
      ]
    }
  },
  {
    "id": "y2ss4-051",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 51",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A wound heals such that each day 20% of the remaining wound area closes. Starting from a wound of 40 cm², (a) find the area after 5 days. (b) After how many days does the wound first fall below 10 cm²? (c) Will the wound fully close under this model? Justify.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "decay"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert healing to a multiplier.",
          "workingLatex": "20\\%\\text{ closes} \\Rightarrow 80\\%\\text{ remains} = 0.8",
          "explanation": "Each day 20% of the *remaining* area closes, leaving 80% — geometric, not a fixed area per day.",
          "stepNumber": 1
        },
        {
          "description": "(a) Write the model and evaluate at day 5.",
          "workingLatex": "A_{n} = 40(0.8)^{n} \\Rightarrow A_{5} = 40(0.8)^{5} \\approx 13.11\\text{ cm}^{2}",
          "explanation": "\\(0.8^{5} \\approx 0.328\\), then scale by the initial 40 cm².",
          "stepNumber": 2
        },
        {
          "description": "(b) Set up the 'below 10 cm²' inequality.",
          "workingLatex": "40(0.8)^{n} < 10 \\Rightarrow (0.8)^{n} < 0.25",
          "explanation": "Divide both sides by 40.",
          "stepNumber": 3
        },
        {
          "description": "(b) Take logs and round up.",
          "workingLatex": "n > \\dfrac{\\log 0.25}{\\log 0.8} \\approx 6.21 \\Rightarrow n = 7",
          "explanation": "Dividing by \\(\\log 0.8\\) (negative) flips the inequality; day 7 is the first below 10 cm².",
          "stepNumber": 4
        },
        {
          "description": "(c) Judge whether it fully closes.",
          "workingLatex": "A_{n} = 40(0.8)^{n} \\to 0\\text{ as }n\\to\\infty,\\ \\text{but } \\neq 0",
          "explanation": "Geometric decay approaches zero asymptotically, so under this model the wound never closes exactly — a limitation, since real wounds do heal fully.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Day 5: \\(\\approx 13.11\\) cm²; day 7; approaches 0 but never exactly closes under model.",
      "commonMistakes": [
        "Using \\(0.2\\) instead of \\(0.8\\) as the retention factor.",
        "Subtracting a fixed 8 cm² (20% of 40) each day — linear decay.",
        "Claiming the wound closes at a finite day rather than asymptotically."
      ]
    }
  },
  {
    "id": "y2ss4-052",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 52",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A fisherman plans to save for a new boat. He deposits £500 at the start of each year in an account earning 4% compound interest per year. How many years must he save to accumulate at least £10,000?",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "annuity",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Set up the annuity-due sum.",
          "workingLatex": "V_{n} = 500\\cdot 1.04\\cdot\\dfrac{1.04^{n} - 1}{0.04}",
          "explanation": "Start-of-year £500 deposits compounding at \\(1.04\\) form a GP; this is the value after \\(n\\) years.",
          "stepNumber": 1
        },
        {
          "description": "Set up the target inequality.",
          "workingLatex": "500\\cdot 1.04\\cdot\\dfrac{1.04^{n} - 1}{0.04} \\geq 10000",
          "explanation": "We need at least £10,000.",
          "stepNumber": 2
        },
        {
          "description": "Isolate the power.",
          "workingLatex": "1.04^{n} - 1 \\geq \\dfrac{10000(0.04)}{500(1.04)} \\Rightarrow 1.04^{n} \\geq 1.7692",
          "explanation": "Rearrange step by step to free the exponential.",
          "stepNumber": 3
        },
        {
          "description": "Take logs.",
          "workingLatex": "n \\geq \\dfrac{\\log 1.7692}{\\log 1.04} \\approx 14.58",
          "explanation": "Both logs positive, so the direction is unchanged.",
          "stepNumber": 4
        },
        {
          "description": "Round up to a whole year.",
          "workingLatex": "n = 15",
          "explanation": "Saving must run a full year to credit interest, so round up — 14 years falls just short.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "15 years.",
      "commonMistakes": [
        "Rounding 14.58 down to 14.",
        "Dropping the leading \\(1.04\\) factor (end-of-year deposits).",
        "Dividing by 0.4 or 4 instead of 0.04."
      ]
    }
  },
  {
    "id": "y2ss4-053",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 53",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A pond contains 200 fish. Each month 15% of fish are caught by anglers, but 40 new fish are stocked at the end of each month. (a) Write a recurrence for the number of fish \\(F_{n}\\) after \\(n\\) months. (b) Find \\(F_{6}\\) to the nearest integer. (c) State the long-term fish population.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the catch to a multiplier.",
          "workingLatex": "15\\%\\text{ caught} \\Rightarrow 85\\%\\text{ remain} = 0.85",
          "explanation": "Removing 15% leaves 85%, then 40 fish are stocked.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "F_{n+1} = 0.85 F_{n} + 40,\\quad F_{0} = 200",
          "explanation": "Scale by 0.85, then add the 40 restocked fish.",
          "stepNumber": 2
        },
        {
          "description": "(b) Iterate month by month.",
          "workingLatex": "F_{1} = 210,\\ F_{2} = 218.5,\\ F_{3} \\approx 225.7,\\ \\ldots",
          "explanation": "\\(0.85(200)+40 = 210\\), and so on; keep full precision.",
          "stepNumber": 3
        },
        {
          "description": "(b) Reach \\(F_6\\).",
          "workingLatex": "F_{6} \\approx 242\\text{ fish}",
          "explanation": "Continue to month 6 and round to the nearest whole fish.",
          "stepNumber": 4
        },
        {
          "description": "(c) Set up and solve the equilibrium.",
          "workingLatex": "L = 0.85L + 40 \\Rightarrow 0.15L = 40 \\Rightarrow L \\approx 267",
          "explanation": "At equilibrium the catch balances the restocking, levelling near 267 fish.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(F_{6} \\approx 242\\); long-term \\(\\approx 267\\) fish.",
      "commonMistakes": [
        "Using 0.15 instead of 0.85 as the carry-over factor.",
        "Starting from \\(F_1 = 200\\) and shifting all later values.",
        "Solving \\(0.85L = 40\\) instead of \\(0.15L = 40\\)."
      ]
    }
  },
  {
    "id": "y2ss4-054",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 54",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A worker is paid an hourly rate that increases by 3% each year. In year 1 the rate is £12 per hour. (a) Find the hourly rate in year 10. (b) Find the total earned over 10 years, assuming 1800 working hours per year.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the rate to a multiplier.",
          "workingLatex": "+3\\%\\text{ each year} \\Rightarrow \\times 1.03",
          "explanation": "The hourly rate rises by a fixed percentage — a GP with \\(a = 12\\).",
          "stepNumber": 1
        },
        {
          "description": "(a) Find the year-10 rate.",
          "workingLatex": "u_{10} = 12(1.03)^{9} \\approx £15.66",
          "explanation": "Year 10 uses exponent \\(n-1 = 9\\); using \\(1.03^{10}\\) is the off-by-one trap.",
          "stepNumber": 2
        },
        {
          "description": "(b) Sum the yearly rates (GP).",
          "workingLatex": "\\sum_{1}^{10} = \\dfrac{12(1.03^{10} - 1)}{0.03}",
          "explanation": "Sum the ten yearly *rates* with the geometric sum formula.",
          "stepNumber": 3
        },
        {
          "description": "(b) Scale by hours and evaluate.",
          "workingLatex": "S_{10} = 1800\\cdot\\dfrac{12(1.03^{10} - 1)}{0.03} \\approx £247{,}620",
          "explanation": "Multiply the summed rates by 1800 hours per year; \\(1.03^{10} \\approx 1.3439\\).",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "Year 10: \\(\\approx £15.66\\)/hr; total \\(\\approx £247{,}620\\).",
      "commonMistakes": [
        "Using exponent 10 for year 10's rate.",
        "Scaling by 1800 before summing, or forgetting it entirely.",
        "Dividing by 3 instead of 0.03."
      ]
    }
  },
  {
    "id": "y2ss4-055",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 55",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A fire truck's water supply is 500 L. Each minute 15% of the current water is sprayed. (a) Write a recurrence for \\(W_{n}\\), the water remaining after \\(n\\) minutes. (b) Find \\(W_{10}\\) to 2 decimal places. (c) State whether the truck will ever run out of water and justify.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "decay"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Convert the spray to a multiplier.",
          "workingLatex": "15\\%\\text{ sprayed} \\Rightarrow 85\\%\\text{ remains} = 0.85",
          "explanation": "Each minute 15% of the *current* water is used — pure geometric decay, no inflow.",
          "stepNumber": 1
        },
        {
          "description": "(a) Build the recurrence.",
          "workingLatex": "W_{n+1} = 0.85 W_{n},\\quad W_{0} = 500",
          "explanation": "No constant is added, so this is a simple GP, not a 'multiply then add' recurrence.",
          "stepNumber": 2
        },
        {
          "description": "(b) Write the closed form and substitute.",
          "workingLatex": "W_{n} = 500(0.85)^{n} \\Rightarrow W_{10} = 500(0.85)^{10}",
          "explanation": "Ten minutes of spraying.",
          "stepNumber": 3
        },
        {
          "description": "(b) Evaluate.",
          "workingLatex": "(0.85)^{10} \\approx 0.196874 \\Rightarrow W_{10} \\approx 98.44\\text{ L}",
          "explanation": "Quote to 2 d.p. as asked.",
          "stepNumber": 4
        },
        {
          "description": "(c) Decide whether it empties.",
          "workingLatex": "0.85 < 1 \\Rightarrow W_{n} \\to 0\\text{ but never }= 0",
          "explanation": "Geometric decay shrinks towards zero without ever reaching it, so mathematically the truck never fully empties — though in practice it effectively runs dry.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(W_{10} \\approx 98.44\\) L; approaches 0 but never exactly empties.",
      "commonMistakes": [
        "Adding a constant inflow that isn't in the problem.",
        "Using 0.15 instead of 0.85.",
        "Claiming the truck empties at a finite minute rather than asymptotically."
      ]
    }
  },
  {
    "id": "y2ss4-056",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 56",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A small lake has a lily pad population that doubles each week until the entire lake is covered at week 30. At week 29, what fraction of the lake is covered?",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Reason backwards from 'full at week 30'.",
          "workingLatex": "\\text{doubles each week} \\Rightarrow \\text{week 29 is half of week 30}",
          "explanation": "If the area doubles every week and is full at week 30, the week before must have been exactly half full — the classic lily-pad insight.",
          "stepNumber": 1
        },
        {
          "description": "State the fraction.",
          "workingLatex": "\\text{fraction at week 29} = \\tfrac12",
          "explanation": "One doubling separates 'half full' from 'full', so no calculation is needed.",
          "stepNumber": 2
        }
      ],
      "finalAnswer": "Half.",
      "commonMistakes": [
        "Assuming week 29 is \\(\\tfrac{29}{30}\\) of the lake (linear thinking).",
        "Halving from week 30 the wrong number of times.",
        "Trying to compute an explicit area when the fraction is all that's needed."
      ]
    }
  },
  {
    "id": "y2ss4-057",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 57",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A builder lays bricks in an increasing pattern: 10 bricks on day 1, 13 on day 2, 16 on day 3, and so on in arithmetic progression. The builder has 5,000 bricks in total. (a) How many days of building can be completed? (b) How many bricks remain unused? (c) What is the total brick height on the last complete day, given each brick is 7 cm tall?",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set up the brick-supply inequality.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(10) + 3(n-1)\\big) \\leq 5000",
          "explanation": "Daily brick counts form an AP (\\(a=10,\\ d=3\\)); the cumulative total can't exceed 5000.",
          "stepNumber": 1
        },
        {
          "description": "(a) Expand to a quadratic.",
          "workingLatex": "\\tfrac{n}{2}(20 + 3(n-1)) \\leq 5000 \\Rightarrow 3n^{2} + 17n - 10000 \\leq 0",
          "explanation": "Multiply out and clear the half.",
          "stepNumber": 2
        },
        {
          "description": "(a) Solve the quadratic.",
          "workingLatex": "n \\leq \\dfrac{-17 + \\sqrt{17^{2} + 12(10000)}}{6} = \\dfrac{-17 + \\sqrt{120289}}{6} \\approx 54.96",
          "explanation": "Take the positive root; \\(\\sqrt{120289} \\approx 346.8\\).",
          "stepNumber": 3
        },
        {
          "description": "(a) Round down to complete days.",
          "workingLatex": "n = 54",
          "explanation": "Day 55 would overrun the supply, so only 54 complete days are possible — round *down* here, unlike 'first exceeds' problems.",
          "stepNumber": 4
        },
        {
          "description": "(b) Find the bricks used and left over.",
          "workingLatex": "S_{54} = \\tfrac{54}{2}(20 + 159) = 27(179) = 4833 \\Rightarrow 5000 - 4833 = 167",
          "explanation": "\\((n-1)d = 53 \\times 3 = 159\\); 167 bricks remain unused.",
          "stepNumber": 5
        },
        {
          "description": "(c) Find the height on the last day.",
          "workingLatex": "u_{54} = 10 + 53(3) = 169;\\ 169 \\times 7 = 1183\\text{ cm} = 11.83\\text{ m}",
          "explanation": "Day 54 lays 169 bricks; at 7 cm each they stack to 11.83 m.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "54 days; 167 bricks remain; 11.83 m on day 54.",
      "commonMistakes": [
        "Rounding 54.96 up to 55 (overrunning the brick supply).",
        "Using \\(54 \\times 3\\) instead of \\(53 \\times 3\\) for day 54's count.",
        "Forgetting to subtract the used bricks from 5000 for the leftover."
      ]
    }
  },
  {
    "id": "y2ss4-058",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 58",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A lecturer's yearly salary increases by £1,500 each year. In year 1 the salary is £30,000. A colleague's salary starts at £25,000 and increases by 4% each year. (a) In which year does the lecturer first earn more than £50,000? (b) Find the year in which the two salaries are equal (or closest to equal).",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "simultaneous",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set up the lecturer's threshold.",
          "workingLatex": "30000 + 1500(n-1) > 50000",
          "explanation": "The lecturer's salary is an AP (\\(a=30000,\\ d=1500\\)); find when it first beats £50,000.",
          "stepNumber": 1
        },
        {
          "description": "(a) Solve the inequality.",
          "workingLatex": "1500(n-1) > 20000 \\Rightarrow n - 1 > 13.33 \\Rightarrow n > 14.33",
          "explanation": "Subtract 30000, then divide by 1500.",
          "stepNumber": 2
        },
        {
          "description": "(a) Round up.",
          "workingLatex": "n = 15",
          "explanation": "'First earns more' rounds up: year 14 is £43,500, year 15 reaches £51,000.",
          "stepNumber": 3
        },
        {
          "description": "(b) Set the salaries equal.",
          "workingLatex": "30000 + 1500(n-1) = 25000(1.04)^{n-1}",
          "explanation": "The colleague's salary is a GP (\\(\\times 1.04\\)); equate the AP and GP — no closed-form solution, so test values.",
          "stepNumber": 4
        },
        {
          "description": "(b) Test values near the crossover.",
          "workingLatex": "n=26:\\ 67500\\text{ vs }66646;\\quad n=27:\\ 69000\\text{ vs }69312",
          "explanation": "The lecturer leads through year 26, but the faster-growing GP overtakes between year 26 and 27.",
          "stepNumber": 5
        },
        {
          "description": "(b) Conclude.",
          "workingLatex": "\\text{closest to equal around year }26/27",
          "explanation": "The geometric colleague eventually outpaces the arithmetic lecturer — the gap is smallest as they cross near year 26–27.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Lecturer exceeds £50,000 in year 15; the salaries are closest to equal around year 26/27 (the colleague overtakes between year 26 and 27).",
      "commonMistakes": [
        "Rounding 14.33 down to 14 in part (a).",
        "Using exponent \\(n\\) instead of \\(n-1\\) for the colleague's salary.",
        "Trying to solve the AP=GP equation algebraically instead of numerically."
      ]
    }
  },
  {
    "id": "y2ss4-059",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 59",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Holly's energy bill is £100 in month 1 and rises by 2% each month. Her neighbour's bill is £90 in month 1 but rises by £5 each month. (a) In which month do they first pay the same? (b) Over a 24-month period, who pays more in total and by how much?",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "simultaneous",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set the bills equal.",
          "workingLatex": "100(1.02)^{n-1} = 90 + 5(n-1)",
          "explanation": "Holly's bill is a GP (\\(\\times 1.02\\)); the neighbour's is an AP (\\(+£5\\)). Equate and test integer months — no closed form.",
          "stepNumber": 1
        },
        {
          "description": "(a) Test values near the crossover.",
          "workingLatex": "n=4:\\ 106.12\\text{ vs }105;\\quad n=5:\\ 108.24\\text{ vs }110",
          "explanation": "Holly is dearer at month 4 but the neighbour's bigger flat rise overtakes by month 5.",
          "stepNumber": 2
        },
        {
          "description": "(a) Conclude.",
          "workingLatex": "\\text{first equal around month }5",
          "explanation": "They are closest to equal as they cross between months 4 and 5.",
          "stepNumber": 3
        },
        {
          "description": "(b) Sum Holly's 24 months (GP).",
          "workingLatex": "\\dfrac{100(1.02^{24} - 1)}{0.02} \\approx £3042",
          "explanation": "Geometric sum with \\(a=100,\\ r=1.02\\).",
          "stepNumber": 4
        },
        {
          "description": "(b) Sum the neighbour's 24 months (AP).",
          "workingLatex": "\\tfrac{24}{2}(2(90) + 23(5)) = 12(295) = £3540",
          "explanation": "Arithmetic sum with \\(a=90,\\ d=5\\).",
          "stepNumber": 5
        },
        {
          "description": "(b) Compare the totals.",
          "workingLatex": "3540 - 3042 \\approx £498",
          "explanation": "Over 24 months the steady £5 rises outweigh Holly's 2% growth, so the neighbour pays about £498 more.",
          "stepNumber": 6
        }
      ],
      "finalAnswer": "Equal between months 4 and 5; neighbour pays \\(\\approx £498\\) more over 24 months.",
      "commonMistakes": [
        "Using exponent \\(n\\) instead of \\(n-1\\) for Holly's bill.",
        "Mixing up which person is the GP and which the AP.",
        "Comparing single-month bills rather than the 24-month totals in part (b)."
      ]
    }
  },
  {
    "id": "y2ss4-060",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 60",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A tree grows 50 cm in year 1, 40 cm in year 2, 32 cm in year 3, and so on, each year's growth being 80% of the previous year's growth. (a) Find the total height after 10 years of growth (starting from 0). (b) State the maximum possible height the tree could ever reach.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Identify the geometric growth.",
          "workingLatex": "\\text{each year} = 80\\%\\text{ of last} \\Rightarrow r = 0.8,\\ a = 50",
          "explanation": "The yearly *growths* form a decaying GP; total height is their sum.",
          "stepNumber": 1
        },
        {
          "description": "(a) Choose the decreasing-sum form.",
          "workingLatex": "S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "With \\(r<1\\), the \\(1-r\\) form keeps everything positive.",
          "stepNumber": 2
        },
        {
          "description": "(a) Substitute and evaluate.",
          "workingLatex": "S_{10} = \\dfrac{50(1 - 0.8^{10})}{0.2} \\approx 223.16\\text{ cm}",
          "explanation": "\\(0.8^{10} \\approx 0.107\\); the height after 10 years' growth.",
          "stepNumber": 3
        },
        {
          "description": "(b) Find the maximum height.",
          "workingLatex": "S_{\\infty} = \\dfrac{a}{1 - r} = \\dfrac{50}{0.2} = 250\\text{ cm}",
          "explanation": "Since \\(|r|<1\\) the growths sum to a finite limit, so the tree can never exceed 250 cm (2.5 m), however long it grows.",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "10 years: \\(\\approx 223.16\\) cm; maximum 250 cm (2.5 m).",
      "commonMistakes": [
        "Treating the heights (not the growths) as the GP.",
        "Using the \\(r-1\\) form and getting a negative result.",
        "Forgetting that \\(S_\\infty\\) is the absolute ceiling on height."
      ]
    }
  },
  {
    "id": "y2ss4-061",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 61",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Carlos invests £100 in a risky scheme. Each year the value grows by 20% or loses 10% (with equal likelihood — but assume it grows for the first 5 years and loses in years 6-10). Find the value after 10 years.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Set up the combined model.",
          "workingLatex": "V_{10} = 100(1.2)^{5}(0.9)^{5}",
          "explanation": "Five growth years multiply by \\(1.2\\); five loss years by \\(0.9\\). Multiplication is commutative, so the order of good and bad years doesn't change the result.",
          "stepNumber": 1
        },
        {
          "description": "Evaluate the two powers.",
          "workingLatex": "(1.2)^{5} \\approx 2.48832,\\quad (0.9)^{5} \\approx 0.59049",
          "explanation": "Compute each factor separately.",
          "stepNumber": 2
        },
        {
          "description": "Combine.",
          "workingLatex": "100 \\times 2.48832 \\times 0.59049 \\approx £146.93",
          "explanation": "The net effect is a modest gain despite alternating fortunes.",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "\\(\\approx £146.93\\).",
      "commonMistakes": [
        "Adding the percentages (e.g. net +10% per pair of years) instead of multiplying.",
        "Using \\(0.1\\) instead of \\(0.9\\) for a 10% loss.",
        "Assuming the order of gains and losses matters."
      ]
    }
  },
  {
    "id": "y2ss4-062",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 62",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A bouncing ball has a coefficient of restitution \\(k = 0.8\\). Dropped from 1.5 m, the ball loses energy with each bounce such that the height is multiplied by \\(k^{2}\\). (a) Find the height of the 5th bounce. (b) Find the total vertical distance travelled before rest.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Find the per-bounce factor.",
          "workingLatex": "\\text{height} \\times k^{2} = (0.8)^{2} = 0.64",
          "explanation": "With restitution \\(k\\), each bounce multiplies the height by \\(k^{2}\\) — note it is \\(k^2\\), not \\(k\\).",
          "stepNumber": 1
        },
        {
          "description": "(a) Write and evaluate the 5th bounce.",
          "workingLatex": "h_{5} = 1.5(0.64)^{5} \\approx 0.161\\text{ m}",
          "explanation": "\\(0.64^{5} \\approx 0.107\\), then scale by the 1.5 m drop.",
          "stepNumber": 2
        },
        {
          "description": "(b) Set up the total distance.",
          "workingLatex": "D = 1.5 + 2\\sum_{n=1}^{\\infty} 1.5(0.64)^{n}",
          "explanation": "The drop counts once; each bounce (up and down) counts twice. Bounce heights form a GP with ratio \\(0.64\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Sum and combine.",
          "workingLatex": "D = 1.5 + 2\\cdot\\dfrac{1.5(0.64)}{1 - 0.64} = 1.5 + \\tfrac{16}{3} \\approx 6.83\\text{ m}",
          "explanation": "\\(\\tfrac{1.5(0.64)}{0.36} = \\tfrac{0.96}{0.36} = \\tfrac{8}{3}\\); doubled gives \\(\\tfrac{16}{3}\\).",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "\\(h_{5} \\approx 0.161\\) m; total \\(\\approx 6.83\\) m.",
      "commonMistakes": [
        "Using \\(k = 0.8\\) as the height ratio instead of \\(k^{2} = 0.64\\).",
        "Forgetting the factor of 2 on the bounces.",
        "Including the 1.5 m drop inside the doubled bounce sum."
      ]
    }
  },
  {
    "id": "y2ss4-063",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 63",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A pension fund pays £500 in year 1, with £300 annual increases. Another plan pays a flat £1,200 per year. After how many years has the AP pension paid out more in total than the flat pension?",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Set up the comparison.",
          "workingLatex": "\\text{AP total} > \\text{flat total}",
          "explanation": "The AP pension (\\(a=500,\\ d=300\\)) summed must beat the flat \\(1200n\\); compare cumulative payouts, not single years.",
          "stepNumber": 1
        },
        {
          "description": "Write the inequality.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(500) + 300(n-1)\\big) > 1200n",
          "explanation": "AP sum on the left, flat total on the right.",
          "stepNumber": 2
        },
        {
          "description": "Simplify by dividing by \\(\\tfrac{n}{2}\\).",
          "workingLatex": "1000 + 300(n-1) > 2400",
          "explanation": "Since \\(\\tfrac{n}{2}\\) is positive, dividing both sides preserves the inequality and removes the quadratic.",
          "stepNumber": 3
        },
        {
          "description": "Solve for \\(n\\).",
          "workingLatex": "300(n-1) > 1400 \\Rightarrow n - 1 > 4.67 \\Rightarrow n > 5.67",
          "explanation": "Subtract 1000, divide by 300.",
          "stepNumber": 4
        },
        {
          "description": "Round up.",
          "workingLatex": "n = 6",
          "explanation": "The AP pension first overtakes in total in year 6.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "6 years.",
      "commonMistakes": [
        "Comparing single-year payments rather than cumulative totals.",
        "Keeping the quadratic and solving it the long way (still valid but error-prone).",
        "Rounding 5.67 down to 5."
      ]
    }
  },
  {
    "id": "y2ss4-064",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 64",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A small business makes 10 products in year 1 and production grows by 25% each year. Due to increasing sales, each year the selling price drops by £5 from a starting price of £200 in year 1. (a) Find the production in year 5. (b) Find the total revenue in year 5. (c) State a concern about this model for larger \\(n\\).",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "modelling"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Find year-5 production (GP).",
          "workingLatex": "P_{5} = 10(1.25)^{4} \\approx 24.41\\text{ units}",
          "explanation": "Production grows 25% per year, a GP; year 5 uses exponent \\(n-1 = 4\\).",
          "stepNumber": 1
        },
        {
          "description": "(b) Find the year-5 price (AP).",
          "workingLatex": "200 - (5-1)(5) = 200 - 20 = 180",
          "explanation": "Price falls a fixed £5 per year, an AP; year 5 has had 4 drops.",
          "stepNumber": 2
        },
        {
          "description": "(b) Compute the revenue.",
          "workingLatex": "24.41 \\times 180 \\approx £4394",
          "explanation": "Revenue is production times price.",
          "stepNumber": 3
        },
        {
          "description": "(c) State the modelling concern.",
          "workingLatex": "200 - 5(n-1) \\leq 0\\ \\text{at}\\ n = 41",
          "explanation": "The linearly falling price reaches zero (then negative) by year 41, which is impossible — so the model breaks down for large \\(n\\).",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "Year 5: \\(\\approx 24.41\\) units; revenue \\(\\approx £4394\\); price becomes non-positive eventually.",
      "commonMistakes": [
        "Using exponent 5 for year-5 production.",
        "Using \\(5 \\times 5\\) instead of \\(4 \\times 5\\) for the price drop.",
        "Mixing the models — applying the GP to price or the AP to production."
      ]
    }
  },
  {
    "id": "y2ss4-065",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 65",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A town's Parkrun event has 40 runners in week 1. Each week the number grows by 15% due to new joiners. (a) Find the number of runners in week 10. (b) Find the total number of runner-visits in the first 10 weeks. (c) Why must this growth slow down in practice?",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Find week-10 runners (GP).",
          "workingLatex": "u_{10} = 40(1.15)^{9} \\approx 141",
          "explanation": "15% weekly growth is a GP; week 10 uses exponent \\(n-1 = 9\\).",
          "stepNumber": 1
        },
        {
          "description": "(b) Sum the runner-visits.",
          "workingLatex": "S_{10} = \\dfrac{40(1.15^{10} - 1)}{0.15} \\approx 812",
          "explanation": "Total visits over 10 weeks is the geometric sum, not the week-10 count.",
          "stepNumber": 2
        },
        {
          "description": "(c) Explain why growth must slow.",
          "workingLatex": "\\text{park / town population is finite}",
          "explanation": "Unbounded 15% weekly growth is impossible: the park's capacity and the town's population cap the number of runners, so real growth must level off.",
          "stepNumber": 3
        }
      ],
      "finalAnswer": "Week 10: \\(\\approx 141\\); total \\(\\approx 812\\); growth limited by park/town capacity.",
      "commonMistakes": [
        "Using exponent 10 for week 10.",
        "Reporting the week-10 count as the total visits.",
        "Dividing by 0.15 incorrectly (e.g. by 15)."
      ]
    }
  },
  {
    "id": "y2ss4-066",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 66",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Anya contributes £50 per month to a savings account paying 0.3% interest per month. Contributions are made at the end of each month. (a) Show the value after \\(n\\) months is \\(V_{n} = 50 \\cdot \\tfrac{1.003^{n} - 1}{0.003}\\). (b) Find \\(V\\) after 3 years.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "annuity"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Model end-of-month deposits.",
          "workingLatex": "\\text{deposit }k\\text{ earns interest for }n-k\\text{ months}",
          "explanation": "End-of-month deposits earn interest only from the following month, so the last deposit earns none — this is why the closed form has no leading \\(1.003\\) factor.",
          "stepNumber": 1
        },
        {
          "description": "(a) Write the sum as a GP.",
          "workingLatex": "V_{n} = 50\\sum_{k=1}^{n} 1.003^{n-k}",
          "explanation": "The powers run from \\(1.003^{0}\\) (last deposit) up to \\(1.003^{n-1}\\) (first).",
          "stepNumber": 2
        },
        {
          "description": "(a) Factor to the required form.",
          "workingLatex": "V_{n} = 50\\cdot\\dfrac{1.003^{n} - 1}{0.003}",
          "explanation": "Summing the GP gives exactly the formula to be shown.",
          "stepNumber": 3
        },
        {
          "description": "(b) Substitute 3 years.",
          "workingLatex": "V_{36} = 50\\cdot\\dfrac{1.003^{36} - 1}{0.003}",
          "explanation": "3 years \\(= 36\\) months.",
          "stepNumber": 4
        },
        {
          "description": "(b) Evaluate.",
          "workingLatex": "(1.003)^{36} \\approx 1.113870 \\Rightarrow V_{36} \\approx £1897.79",
          "explanation": "\\(\\tfrac{0.11387}{0.003} \\approx 37.96\\), then times 50.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "\\(V_{36} \\approx £1897.79\\).",
      "commonMistakes": [
        "Including a leading \\(1.003\\) (start-of-month) factor.",
        "Dividing by 0.03 or 3 instead of 0.003.",
        "Using 3 (years) instead of 36 (months) as the exponent."
      ]
    }
  },
  {
    "id": "y2ss4-067",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 67",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A reservoir loses 100 L of water per day due to evaporation and receives a daily inflow of 80 L of rain. Starting from 10,000 L, find the amount in the reservoir after 20 days. State what assumption must hold for the model to be valid.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "Find the net daily change.",
          "workingLatex": "+80 - 100 = -20\\text{ L/day}",
          "explanation": "Inflow minus loss is a constant net change, so this is a linear model, not geometric.",
          "stepNumber": 1
        },
        {
          "description": "Write the linear model.",
          "workingLatex": "V_{n} = 10000 - 20n",
          "explanation": "Each day removes a net 20 L from the starting 10,000 L.",
          "stepNumber": 2
        },
        {
          "description": "Substitute and evaluate.",
          "workingLatex": "V_{20} = 10000 - 20(20) = 9600\\text{ L}",
          "explanation": "After 20 days, 400 L have been lost net.",
          "stepNumber": 3
        },
        {
          "description": "State the modelling assumption.",
          "workingLatex": "\\text{daily evaporation and rainfall stay constant}",
          "explanation": "The linear model only holds if both rates remain steady — a storm or drought would break it.",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "9,600 L; assume constant daily evaporation and rain.",
      "commonMistakes": [
        "Treating the loss as a percentage and using a GP.",
        "Subtracting 100 and adding 80 as separate large totals incorrectly.",
        "Forgetting to state the constant-rate assumption."
      ]
    }
  },
  {
    "id": "y2ss4-068",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 68",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A phone's value depreciates by 30% in year 1, then 20% in each subsequent year. The phone was bought for £800. Find the value (a) after 1 year, (b) after 5 years.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "depreciation"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Apply the first-year depreciation.",
          "workingLatex": "V_{1} = 800(0.7) = 560",
          "explanation": "Losing 30% in year 1 leaves 70%, so \\(\\times 0.7\\).",
          "stepNumber": 1
        },
        {
          "description": "(b) Identify the later multiplier.",
          "workingLatex": "20\\%\\text{ loss} \\Rightarrow \\times 0.8\\ \\text{(years 2 onward)}",
          "explanation": "From year 2 the rate changes to 20% loss, i.e. 80% retained.",
          "stepNumber": 2
        },
        {
          "description": "(b) Count the 20% years.",
          "workingLatex": "\\text{years }2,3,4,5 \\Rightarrow 4\\text{ years of }\\times 0.8",
          "explanation": "Years 2 through 5 are four applications of \\(0.8\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Combine and evaluate.",
          "workingLatex": "V_{5} = 800(0.7)(0.8)^{4} = 560(0.4096) \\approx £229.38",
          "explanation": "Using \\(0.8^{5}\\) would wrongly apply the second rate to year 1 as well.",
          "stepNumber": 4
        }
      ],
      "finalAnswer": "\\(V_{1} = £560;\\ V_{5} \\approx £229.38\\).",
      "commonMistakes": [
        "Using \\(0.8^{5}\\) instead of \\(0.7 \\times 0.8^{4}\\).",
        "Applying 30% loss every year.",
        "Using \\(0.3\\) and \\(0.2\\) as multipliers instead of \\(0.7\\) and \\(0.8\\)."
      ]
    }
  },
  {
    "id": "y2ss4-069",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 69",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A machine produces 100 widgets in week 1. Production grows arithmetically by 10 units per week until capacity (300 widgets per week) is reached, after which production stays constant. (a) Find the week capacity is first reached. (b) Find the total production over the first 30 weeks.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "arithmetic",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Find when capacity is reached (AP).",
          "workingLatex": "100 + 10(n-1) = 300",
          "explanation": "Production rises by a fixed 10 units (an AP) until it hits 300; solve for the exact week.",
          "stepNumber": 1
        },
        {
          "description": "(a) Solve.",
          "workingLatex": "10(n-1) = 200 \\Rightarrow n - 1 = 20 \\Rightarrow n = 21",
          "explanation": "Capacity is reached in week 21.",
          "stepNumber": 2
        },
        {
          "description": "(b) Sum the arithmetic phase.",
          "workingLatex": "S_{21} = \\tfrac{21}{2}\\big(2(100) + 20(10)\\big) = \\tfrac{21}{2}(400) = 4200",
          "explanation": "Weeks 1–21 follow the AP; sum with \\(2a + (n-1)d\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Sum the constant phase.",
          "workingLatex": "\\text{weeks }22\\text{–}30:\\ 9 \\times 300 = 2700",
          "explanation": "After capacity, production is flat at 300 for the remaining 9 weeks — a simple product, not an AP.",
          "stepNumber": 4
        },
        {
          "description": "(b) Combine.",
          "workingLatex": "4200 + 2700 = 6900\\text{ widgets}",
          "explanation": "Add the rising and capped phases; treating all 30 weeks as one AP would overcount.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Week 21; total 6,900 widgets.",
      "commonMistakes": [
        "Treating all 30 weeks as a single AP (ignoring the cap).",
        "Counting 8 or 10 weeks in the constant phase instead of 9.",
        "Using \\(n = 20\\) for capacity by an off-by-one slip."
      ]
    }
  },
  {
    "id": "y2ss4-070",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 70",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A charity campaign collects £100 on day 1, with daily collections increasing by 8% each day. The campaign runs for 30 days. (a) Find the total amount collected. (b) On which day does a single day's collection first exceed £500?",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "sum",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Sum the daily collections (GP).",
          "workingLatex": "S_{30} = \\dfrac{100(1.08^{30} - 1)}{0.08}",
          "explanation": "Daily collections grow 8% (a GP with \\(a=100\\)); the 30-day total is the geometric sum.",
          "stepNumber": 1
        },
        {
          "description": "(a) Evaluate.",
          "workingLatex": "(1.08)^{30} \\approx 10.0627 \\Rightarrow S_{30} \\approx £11{,}328",
          "explanation": "\\(\\tfrac{9.0627}{0.08} \\approx 113.28\\), times 100.",
          "stepNumber": 2
        },
        {
          "description": "(b) Set up the single-day inequality.",
          "workingLatex": "100(1.08)^{n-1} > 500",
          "explanation": "A single day's collection is the \\(n\\)th term \\(100(1.08)^{n-1}\\), so use exponent \\(n-1\\).",
          "stepNumber": 3
        },
        {
          "description": "(b) Isolate the power.",
          "workingLatex": "(1.08)^{n-1} > 5",
          "explanation": "Divide both sides by 100.",
          "stepNumber": 4
        },
        {
          "description": "(b) Take logs and round up.",
          "workingLatex": "n - 1 > \\dfrac{\\log 5}{\\log 1.08} \\approx 20.91 \\Rightarrow n = 22",
          "explanation": "Add 1 and round up: day 22 is the first whose collection tops £500.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "Total \\(\\approx £11{,}328\\); day 22.",
      "commonMistakes": [
        "Using exponent \\(n\\) instead of \\(n-1\\) for a single day's collection.",
        "Confusing the total (part a) with a single day (part b).",
        "Rounding 20.91 to give day 21 instead of 22."
      ]
    }
  },
  {
    "id": "y2ss4-071",
    "topicRef": "y2ss4",
    "topicTitle": "Modelling Problems 71",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A fund manager claims that £1,000 invested today at 6% compound interest will exceed £100,000 within 100 years. (a) Show whether this is true. (b) Find the smallest \\(n\\) for which £1,000 grown at 6% compound exceeds £1 million.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "geometric",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "description": "(a) Set up the 100-year value.",
          "workingLatex": "1000(1.06)^{100}",
          "explanation": "Compound at 6% over 100 years to test the claim.",
          "stepNumber": 1
        },
        {
          "description": "(a) Evaluate and judge.",
          "workingLatex": "(1.06)^{100} \\approx 339.30 \\Rightarrow \\approx £339{,}302 > £100{,}000",
          "explanation": "Far above £100,000, so the claim is true.",
          "stepNumber": 2
        },
        {
          "description": "(b) Set up the £1 million inequality.",
          "workingLatex": "1000(1.06)^{n} > 10^{6}",
          "explanation": "We need the balance to exceed one million pounds.",
          "stepNumber": 3
        },
        {
          "description": "(b) Isolate the power.",
          "workingLatex": "(1.06)^{n} > 1000",
          "explanation": "Divide both sides by the £1000 principal.",
          "stepNumber": 4
        },
        {
          "description": "(b) Take logs and round up.",
          "workingLatex": "n > \\dfrac{\\log 1000}{\\log 1.06} = \\dfrac{3}{\\log 1.06} \\approx 118.54 \\Rightarrow n = 119",
          "explanation": "\\(\\log 1000 = 3\\); round up since the balance must actually pass £1 million.",
          "stepNumber": 5
        }
      ],
      "finalAnswer": "(a) True (\\(\\approx £339{,}302\\)); (b) \\(n = 119\\) years.",
      "commonMistakes": [
        "Computing \\(1000 \\times 1.06 \\times 100\\) (simple interest) for part (a).",
        "Dividing by 10^6 incorrectly when isolating the power.",
        "Rounding 118.54 down to 118."
      ]
    }
  }
];
