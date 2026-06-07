import { Question } from "@/lib/types";

/**
 * Year 2 — Sequences and Series § 3.1 Sequences
 * Ref: y2ss1
 * 71 questions: nth-term rules, recurrence relations, increasing/decreasing/
 * periodic behaviour, limits of convergent sequences, and modelling.
 */
export const questions: Question[] = [
  {
    "id": "y2ss1-001",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 01",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(3, 7, 11, 15, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the difference between consecutive terms.",
          "workingLatex": "7 - 3 = 4,\\quad 11 - 7 = 4,\\quad 15 - 11 = 4",
          "explanation": "Subtract each term from the next. Because the gap is the same every time, the sequence is arithmetic — it changes by a fixed amount called the common difference."
        },
        {
          "stepNumber": 2,
          "description": "Write down \\(a\\) and \\(d\\).",
          "workingLatex": "a = 3,\\quad d = 4",
          "explanation": "\\(a\\) is the first term and \\(d\\) is that constant gap. These two numbers determine the whole sequence."
        },
        {
          "stepNumber": 3,
          "description": "Recall the arithmetic \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "To reach the \\(n\\)th term you start at \\(a\\) and add \\(d\\) one fewer time than the term number — there are \\(n-1\\) gaps before the \\(n\\)th term, not \\(n\\). Forgetting the \\(-1\\) is the most common slip here."
        },
        {
          "stepNumber": 4,
          "description": "Substitute \\(a = 3\\) and \\(d = 4\\).",
          "workingLatex": "u_{n} = 3 + 4(n - 1)",
          "explanation": "Put the values in, keeping the bracket so the expansion is clear."
        },
        {
          "stepNumber": 5,
          "description": "Expand and simplify.",
          "workingLatex": "u_{n} = 3 + 4n - 4 = 4n - 1",
          "explanation": "Distribute the \\(4\\), then collect the constants \\(3 - 4 = -1\\). Quick check: \\(n=1\\to 3\\), \\(n=4\\to 15\\), matching the list."
        }
      ],
      "finalAnswer": "\\(u_{n} = 4n - 1\\)."
    }
  },
  {
    "id": "y2ss1-002",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 02",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(2, 5, 8, 11, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference.",
          "workingLatex": "5 - 2 = 3,\\quad 8 - 5 = 3",
          "explanation": "The constant gap of \\(3\\) confirms an arithmetic sequence."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(d\\).",
          "workingLatex": "a = 2,\\quad d = 3",
          "explanation": "First term \\(2\\), common difference \\(3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a + (n - 1)d = 2 + 3(n - 1)",
          "explanation": "Use \\(u_n = a + (n-1)d\\); the \\(n-1\\) counts the gaps before the \\(n\\)th term."
        },
        {
          "stepNumber": 4,
          "description": "Expand and simplify.",
          "workingLatex": "u_{n} = 2 + 3n - 3 = 3n - 1",
          "explanation": "Collect constants \\(2 - 3 = -1\\). Check \\(n=3 \\to 8\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 3n - 1\\)."
    }
  },
  {
    "id": "y2ss1-003",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 03",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(10, 7, 4, 1, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference.",
          "workingLatex": "7 - 10 = -3,\\quad 4 - 7 = -3",
          "explanation": "The gap is negative because the terms are decreasing — \\(d\\) can be negative."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(d\\).",
          "workingLatex": "a = 10,\\quad d = -3",
          "explanation": "First term \\(10\\), common difference \\(-3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = 10 + (-3)(n - 1)",
          "explanation": "Substitute into \\(a + (n-1)d\\); keep the bracket to manage the sign carefully."
        },
        {
          "stepNumber": 4,
          "description": "Expand, watching the signs.",
          "workingLatex": "u_{n} = 10 - 3n + 3 = 13 - 3n",
          "explanation": "\\(-3 \\times (n-1) = -3n + 3\\); a sign error here is the usual mistake. Collect \\(10 + 3 = 13\\). Check \\(n=4 \\to 1\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 13 - 3n\\)."
    }
  },
  {
    "id": "y2ss1-004",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 04",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Write down the first four terms of the sequence defined by \\(u_{n} = 2n + 5\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n} = 2n + 5",
          "explanation": "This is a position-to-term rule: feed in the term number \\(n\\) and it returns that term directly, so no recursion is needed."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 1\\).",
          "workingLatex": "u_{1} = 2(1) + 5 = 7",
          "explanation": "Multiply first, then add (order of operations)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(n = 2\\) and \\(n = 3\\).",
          "workingLatex": "u_{2} = 2(2) + 5 = 9,\\quad u_{3} = 2(3) + 5 = 11",
          "explanation": "Repeat for each position."
        },
        {
          "stepNumber": 4,
          "description": "Substitute \\(n = 4\\).",
          "workingLatex": "u_{4} = 2(4) + 5 = 13",
          "explanation": "The terms rise by \\(2\\) each time, matching the coefficient of \\(n\\): \\(7, 9, 11, 13\\)."
        }
      ],
      "finalAnswer": "\\(7, 9, 11, 13\\)."
    }
  },
  {
    "id": "y2ss1-005",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 05",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Write down the first four terms of the sequence defined by \\(u_{n} = n^{2} - 1\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n} = n^{2} - 1",
          "explanation": "Square the term number, then subtract \\(1\\); indices are evaluated before the subtraction."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 1\\).",
          "workingLatex": "u_{1} = 1^{2} - 1 = 0",
          "explanation": "\\(1^2 = 1\\), then \\(1 - 1 = 0\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(n = 2\\) and \\(n = 3\\).",
          "workingLatex": "u_{2} = 4 - 1 = 3,\\quad u_{3} = 9 - 1 = 8",
          "explanation": "Square then subtract for each."
        },
        {
          "stepNumber": 4,
          "description": "Substitute \\(n = 4\\).",
          "workingLatex": "u_{4} = 16 - 1 = 15",
          "explanation": "Gives \\(0, 3, 8, 15\\). Note the gaps \\(3, 5, 7\\) grow — this is not arithmetic."
        }
      ],
      "finalAnswer": "\\(0, 3, 8, 15\\)."
    }
  },
  {
    "id": "y2ss1-006",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 06",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the 20th term of the sequence \\(u_{n} = 3n + 2\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the position-to-term rule.",
          "workingLatex": "u_{n} = 3n + 2",
          "explanation": "Because we have a formula in \\(n\\), we can jump straight to the 20th term without listing the first 19."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 20\\).",
          "workingLatex": "u_{20} = 3(20) + 2",
          "explanation": "Replace every \\(n\\) by \\(20\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{20} = 60 + 2 = 62",
          "explanation": "Multiply then add."
        }
      ],
      "finalAnswer": "62."
    }
  },
  {
    "id": "y2ss1-007",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 07",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the 15th term of the sequence \\(u_{n} = 100 - 5n\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the position-to-term rule.",
          "workingLatex": "u_{n} = 100 - 5n",
          "explanation": "The negative coefficient of \\(n\\) means the sequence decreases as \\(n\\) grows."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 15\\).",
          "workingLatex": "u_{15} = 100 - 5(15)",
          "explanation": "Replace \\(n\\) by \\(15\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{15} = 100 - 75 = 25",
          "explanation": "\\(5 \\times 15 = 75\\), then subtract."
        }
      ],
      "finalAnswer": "25."
    }
  },
  {
    "id": "y2ss1-008",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 08",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(1, 4, 9, 16, 25, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test whether it is arithmetic.",
          "workingLatex": "4-1=3,\\ 9-4=5,\\ 16-9=7",
          "explanation": "The differences are not constant, so it is not arithmetic — look instead for a non-linear pattern."
        },
        {
          "stepNumber": 2,
          "description": "Recognise the square numbers.",
          "workingLatex": "1 = 1^{2},\\ 4 = 2^{2},\\ 9 = 3^{2},\\ 16 = 4^{2},\\ 25 = 5^{2}",
          "explanation": "Each term is the square of its position."
        },
        {
          "stepNumber": 3,
          "description": "State the formula and check.",
          "workingLatex": "u_{n} = n^{2}",
          "explanation": "Verify at \\(n = 5\\): \\(5^{2} = 25\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = n^{2}\\)."
    }
  },
  {
    "id": "y2ss1-009",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 09",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(1, 8, 27, 64, 125, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test whether it is a familiar power pattern.",
          "workingLatex": "1,\\ 8,\\ 27,\\ 64,\\ 125",
          "explanation": "The terms grow fast and are recognisable special numbers."
        },
        {
          "stepNumber": 2,
          "description": "Recognise the cubes.",
          "workingLatex": "1 = 1^{3},\\ 8 = 2^{3},\\ 27 = 3^{3},\\ 64 = 4^{3},\\ 125 = 5^{3}",
          "explanation": "Each term is the cube of its position."
        },
        {
          "stepNumber": 3,
          "description": "State the formula and check.",
          "workingLatex": "u_{n} = n^{3}",
          "explanation": "Verify at \\(n = 4\\): \\(4^{3} = 64\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = n^{3}\\)."
    }
  },
  {
    "id": "y2ss1-010",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 10",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A sequence is given by the recurrence relation \\(u_{n+1} = u_{n} + 3\\) with \\(u_{1} = 5\\). Write the first four terms.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the recurrence.",
          "workingLatex": "u_{n+1} = u_{n} + 3,\\quad u_{1} = 5",
          "explanation": "A recurrence defines each term from the previous one, so you must build the sequence in order from the given start."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\).",
          "workingLatex": "u_{2} = u_{1} + 3 = 5 + 3 = 8",
          "explanation": "Add \\(3\\) to the first term."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{3}\\).",
          "workingLatex": "u_{3} = u_{2} + 3 = 8 + 3 = 11",
          "explanation": "Add \\(3\\) to the current term."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(u_{4}\\).",
          "workingLatex": "u_{4} = u_{3} + 3 = 11 + 3 = 14",
          "explanation": "Gives \\(5, 8, 11, 14\\) — the constant \\(+3\\) makes it arithmetic with \\(d = 3\\)."
        }
      ],
      "finalAnswer": "\\(5, 8, 11, 14\\)."
    }
  },
  {
    "id": "y2ss1-011",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 11",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A sequence is given by \\(u_{n+1} = 2u_{n}\\) with \\(u_{1} = 3\\). Write the first five terms.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the recurrence.",
          "workingLatex": "u_{n+1} = 2u_{n},\\quad u_{1} = 3",
          "explanation": "Each term is double the previous one — multiply (don't add)."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\) and \\(u_{3}\\).",
          "workingLatex": "u_{2} = 2(3) = 6,\\quad u_{3} = 2(6) = 12",
          "explanation": "Double repeatedly."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{4}\\) and \\(u_{5}\\).",
          "workingLatex": "u_{4} = 24,\\quad u_{5} = 48",
          "explanation": "Gives \\(3, 6, 12, 24, 48\\) — a constant multiplier makes it geometric with ratio \\(2\\)."
        }
      ],
      "finalAnswer": "\\(3, 6, 12, 24, 48\\)."
    }
  },
  {
    "id": "y2ss1-012",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 12",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = (-1)^{n}\\). Write the first six terms and describe its behaviour.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "periodic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how powers of \\(-1\\) behave.",
          "workingLatex": "(-1)^{\\text{even}} = 1,\\quad (-1)^{\\text{odd}} = -1",
          "explanation": "An even power of \\(-1\\) is \\(+1\\); an odd power is \\(-1\\). This is the key to the whole sequence."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the first six terms.",
          "workingLatex": "-1,\\ 1,\\ -1,\\ 1,\\ -1,\\ 1",
          "explanation": "Odd \\(n\\) gives \\(-1\\), even \\(n\\) gives \\(1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Describe the behaviour.",
          "workingLatex": "\\text{values repeat every 2 terms}",
          "explanation": "The block \\(-1, 1\\) repeats forever, so the sequence is periodic with period \\(2\\) (it neither increases nor decreases overall)."
        }
      ],
      "finalAnswer": "Periodic sequence with period 2."
    }
  },
  {
    "id": "y2ss1-013",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 13",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Classify the sequence \\(2, 5, 8, 11, 14, \\ldots\\) as increasing, decreasing, periodic or none of these.",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "classifying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which test to use.",
          "workingLatex": "\\text{compute } u_{n+1} - u_{n}",
          "explanation": "To classify, look at the difference between consecutive terms; its sign tells you increasing or decreasing."
        },
        {
          "stepNumber": 2,
          "description": "Compute the difference.",
          "workingLatex": "u_{n+1} - u_{n} = 3",
          "explanation": "Each term is \\(3\\) more than the previous, and this is the same throughout."
        },
        {
          "stepNumber": 3,
          "description": "Classify.",
          "workingLatex": "3 > 0 \\Rightarrow \\text{increasing}",
          "explanation": "A positive constant difference means every term exceeds the one before, so the sequence is increasing."
        }
      ],
      "finalAnswer": "Increasing."
    }
  },
  {
    "id": "y2ss1-014",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 14",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Classify the sequence \\(50, 45, 40, 35, \\ldots\\) as increasing, decreasing, periodic or none of these.",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "classifying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which test to use.",
          "workingLatex": "\\text{compute } u_{n+1} - u_{n}",
          "explanation": "Differences classify the trend."
        },
        {
          "stepNumber": 2,
          "description": "Compute the difference.",
          "workingLatex": "u_{n+1} - u_{n} = -5",
          "explanation": "The terms fall by \\(5\\) each step."
        },
        {
          "stepNumber": 3,
          "description": "Classify.",
          "workingLatex": "-5 < 0 \\Rightarrow \\text{decreasing}",
          "explanation": "A negative constant difference means each term is smaller than the last."
        }
      ],
      "finalAnswer": "Decreasing."
    }
  },
  {
    "id": "y2ss1-015",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 15",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Classify the sequence \\(3, -3, 3, -3, \\ldots\\) as increasing, decreasing, periodic or none of these.",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "classifying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the repeating block.",
          "workingLatex": "3,\\ -3,\\ 3,\\ -3,\\ \\ldots",
          "explanation": "The two values alternate; there is no overall rise or fall."
        },
        {
          "stepNumber": 2,
          "description": "Identify the period.",
          "workingLatex": "\\text{block } (3, -3) \\text{ repeats}",
          "explanation": "A sequence that cycles through a fixed block is periodic; the length of the smallest repeating block is the period."
        },
        {
          "stepNumber": 3,
          "description": "State the classification.",
          "workingLatex": "\\text{periodic, period } 2",
          "explanation": "The block has length \\(2\\)."
        }
      ],
      "finalAnswer": "Periodic with period 2."
    }
  },
  {
    "id": "y2ss1-016",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 16",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(5, 10, 20, 40, 80, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the type of sequence.",
          "workingLatex": "\\tfrac{10}{5} = 2,\\ \\tfrac{20}{10} = 2,\\ \\tfrac{40}{20} = 2",
          "explanation": "Divide consecutive terms. A constant ratio (not difference) means the sequence is geometric."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 5,\\quad r = 2",
          "explanation": "\\(a\\) is the first term and \\(r\\) is the common ratio."
        },
        {
          "stepNumber": 3,
          "description": "Recall the geometric \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a r^{\\,n-1}",
          "explanation": "Multiply the first term by the ratio \\(n-1\\) times to reach the \\(n\\)th term — again \\(n-1\\), not \\(n\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute and check.",
          "workingLatex": "u_{n} = 5 \\cdot 2^{\\,n-1}",
          "explanation": "Check \\(n=3\\): \\(5 \\cdot 2^{2} = 20\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = 5 \\cdot 2^{n-1}\\)."
    }
  },
  {
    "id": "y2ss1-017",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 17",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(81, 27, 9, 3, 1, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the type of sequence.",
          "workingLatex": "\\tfrac{27}{81} = \\tfrac{1}{3},\\ \\tfrac{9}{27} = \\tfrac{1}{3}",
          "explanation": "A constant ratio of \\(\\tfrac13\\) confirms geometric (the terms shrink)."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 81,\\quad r = \\tfrac{1}{3}",
          "explanation": "First term \\(81\\), common ratio \\(\\tfrac13\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the geometric formula.",
          "workingLatex": "u_{n} = 81\\!\\left(\\tfrac{1}{3}\\right)^{n-1}",
          "explanation": "Substitute into \\(ar^{n-1}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite with a base-3 power.",
          "workingLatex": "\\left(\\tfrac{1}{3}\\right)^{n-1} = 3^{-(n-1)} = 3^{1-n}",
          "explanation": "Use \\((\\tfrac13)^{k} = 3^{-k}\\) and simplify the index \\(-(n-1) = 1-n\\)."
        },
        {
          "stepNumber": 5,
          "description": "State the result and check.",
          "workingLatex": "u_{n} = 81 \\cdot 3^{1-n}",
          "explanation": "Check \\(n=1\\): \\(81 \\cdot 3^{0} = 81\\); \\(n=2\\): \\(81 \\cdot 3^{-1} = 27\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = 81 \\cdot 3^{1 - n}\\)."
    }
  },
  {
    "id": "y2ss1-018",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 18",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = \\sin\\!\\left(\\tfrac{n \\pi}{2}\\right)\\). Write the first six terms.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "periodic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See what the angle does as \\(n\\) increases.",
          "workingLatex": "\\tfrac{n\\pi}{2} = \\tfrac{\\pi}{2},\\ \\pi,\\ \\tfrac{3\\pi}{2},\\ 2\\pi,\\ \\ldots",
          "explanation": "Each step adds a quarter-turn (\\(\\tfrac{\\pi}{2}\\)), walking round the unit circle."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate \\(\\sin\\) at each.",
          "workingLatex": "\\sin\\tfrac{\\pi}{2}=1,\\ \\sin\\pi=0,\\ \\sin\\tfrac{3\\pi}{2}=-1,\\ \\sin 2\\pi=0",
          "explanation": "Read these from the standard sine values at quarter-turns."
        },
        {
          "stepNumber": 3,
          "description": "List six terms.",
          "workingLatex": "1,\\ 0,\\ -1,\\ 0,\\ 1,\\ 0",
          "explanation": "After four terms the pattern repeats, so this is periodic with period \\(4\\)."
        }
      ],
      "finalAnswer": "\\(1, 0, -1, 0, 1, 0\\)."
    }
  },
  {
    "id": "y2ss1-019",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 19",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "The Fibonacci sequence is defined by \\(u_{1} = 1,\\ u_{2} = 1,\\ u_{n+2} = u_{n+1} + u_{n}\\). Write the first eight terms.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the second-order recurrence.",
          "workingLatex": "u_{n+2} = u_{n+1} + u_{n},\\quad u_{1}=u_{2}=1",
          "explanation": "Each new term needs the previous two, so two starting values are given."
        },
        {
          "stepNumber": 2,
          "description": "Add the first pair.",
          "workingLatex": "u_{3} = u_{2} + u_{1} = 1 + 1 = 2",
          "explanation": "Sum the two terms before it."
        },
        {
          "stepNumber": 3,
          "description": "Continue.",
          "workingLatex": "u_{4} = 2 + 1 = 3,\\quad u_{5} = 3 + 2 = 5",
          "explanation": "Always add the latest two terms."
        },
        {
          "stepNumber": 4,
          "description": "Continue to the eighth term.",
          "workingLatex": "u_{6} = 8,\\ u_{7} = 13,\\ u_{8} = 21",
          "explanation": "Gives \\(1, 1, 2, 3, 5, 8, 13, 21\\) — the Fibonacci sequence."
        }
      ],
      "finalAnswer": "\\(1, 1, 2, 3, 5, 8, 13, 21\\)."
    }
  },
  {
    "id": "y2ss1-020",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 20",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(4, 9, 14, 19, 24, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference.",
          "workingLatex": "9 - 4 = 5",
          "explanation": "Constant gap of \\(5\\): arithmetic."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(d\\) and substitute.",
          "workingLatex": "a = 4,\\ d = 5 \\Rightarrow u_{n} = 4 + 5(n - 1)",
          "explanation": "Apply \\(a + (n-1)d\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify.",
          "workingLatex": "u_{n} = 4 + 5n - 5 = 5n - 1",
          "explanation": "Collect constants \\(4 - 5 = -1\\). Check \\(n=2 \\to 9\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 5n - 1\\)."
    }
  },
  {
    "id": "y2ss1-021",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 21",
    "difficulty": "Foundation",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(\\tfrac{1}{2}, \\tfrac{2}{3}, \\tfrac{3}{4}, \\tfrac{4}{5}, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at numerators and denominators separately.",
          "workingLatex": "\\text{numerators } 1,2,3,4;\\ \\text{denominators } 2,3,4,5",
          "explanation": "Splitting a fraction sequence into its top and bottom patterns is the standard approach."
        },
        {
          "stepNumber": 2,
          "description": "Express each in terms of \\(n\\).",
          "workingLatex": "\\text{numerator} = n,\\quad \\text{denominator} = n + 1",
          "explanation": "The numerator is the position \\(n\\); the denominator is one more."
        },
        {
          "stepNumber": 3,
          "description": "Combine and check.",
          "workingLatex": "u_{n} = \\tfrac{n}{n+1}",
          "explanation": "Check \\(n=3\\): \\(\\tfrac{3}{4}\\). Correct. Note \\(u_n \\to 1\\) as \\(n\\) grows."
        }
      ],
      "finalAnswer": "\\(u_{n} = \\tfrac{n}{n + 1}\\)."
    }
  },
  {
    "id": "y2ss1-022",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 22",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Determine which term of the sequence \\(u_{n} = 4n - 1\\) is equal to 99.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the question.",
          "workingLatex": "\\text{solve } u_{n} = 99",
          "explanation": "\"Which term equals 99?\" means find the position \\(n\\) for which the formula gives \\(99\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set up the equation.",
          "workingLatex": "4n - 1 = 99",
          "explanation": "Replace \\(u_n\\) by its formula and equate to \\(99\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "4n = 100 \\Rightarrow n = 25",
          "explanation": "Add \\(1\\), divide by \\(4\\)."
        },
        {
          "stepNumber": 4,
          "description": "Confirm \\(n\\) is a valid term number.",
          "workingLatex": "n = 25 \\in \\mathbb{Z}^{+}",
          "explanation": "Since \\(25\\) is a positive integer, \\(99\\) really is a term — the 25th."
        }
      ],
      "finalAnswer": "The 25th term."
    }
  },
  {
    "id": "y2ss1-023",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 23",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Determine which term of the sequence \\(u_{n} = 3n + 2\\) is equal to 47.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the question.",
          "workingLatex": "\\text{solve } u_{n} = 47",
          "explanation": "Find the position giving \\(47\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set up and solve.",
          "workingLatex": "3n + 2 = 47 \\Rightarrow 3n = 45 \\Rightarrow n = 15",
          "explanation": "Subtract \\(2\\), divide by \\(3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Confirm.",
          "workingLatex": "n = 15 \\in \\mathbb{Z}^{+}",
          "explanation": "A whole-number position, so \\(47\\) is the 15th term."
        }
      ],
      "finalAnswer": "The 15th term."
    }
  },
  {
    "id": "y2ss1-024",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 24",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Show that 150 is not a term of the sequence \\(u_{n} = 4n + 1\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the test.",
          "workingLatex": "4n + 1 = 150",
          "explanation": "If \\(150\\) were a term, solving this for \\(n\\) would give a positive integer."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(n\\).",
          "workingLatex": "4n = 149 \\Rightarrow n = 37.25",
          "explanation": "Subtract \\(1\\), divide by \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Interpret the non-integer result.",
          "workingLatex": "n = 37.25 \\notin \\mathbb{Z}^{+}",
          "explanation": "Term numbers must be whole; \\(150\\) falls between the 37th and 38th terms."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "\\therefore 150 \\text{ is not a term}",
          "explanation": "No position produces \\(150\\)."
        }
      ],
      "finalAnswer": "Not a term of the sequence."
    }
  },
  {
    "id": "y2ss1-025",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 25",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = n^{2} + 2n\\). Find \\(u_{6}\\) and \\(u_{10}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute \\(n = 6\\).",
          "workingLatex": "u_{6} = 6^{2} + 2(6)",
          "explanation": "Square first, then add twice the index."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate \\(u_{6}\\).",
          "workingLatex": "u_{6} = 36 + 12 = 48",
          "explanation": "\\(36\\) from the square, \\(12\\) from \\(2\\times 6\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(n = 10\\).",
          "workingLatex": "u_{10} = 10^{2} + 2(10)",
          "explanation": "Same rule with \\(n = 10\\)."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate \\(u_{10}\\).",
          "workingLatex": "u_{10} = 100 + 20 = 120",
          "explanation": "\\(100 + 20 = 120\\)."
        }
      ],
      "finalAnswer": "\\(u_{6} = 48,\\ u_{10} = 120\\)."
    }
  },
  {
    "id": "y2ss1-026",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 26",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(2, 6, 12, 20, 30, \\ldots\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute the first differences.",
          "workingLatex": "6-2=4,\\ 12-6=6,\\ 20-12=8,\\ 30-20=10",
          "explanation": "Not constant, so it is not arithmetic — go a level deeper."
        },
        {
          "stepNumber": 2,
          "description": "Compute the second differences.",
          "workingLatex": "6-4=2,\\ 8-6=2,\\ 10-8=2",
          "explanation": "Constant second differences signal a quadratic \\(n\\)th term."
        },
        {
          "stepNumber": 3,
          "description": "Spot the product pattern.",
          "workingLatex": "2=1\\cdot2,\\ 6=2\\cdot3,\\ 12=3\\cdot4,\\ 20=4\\cdot5",
          "explanation": "Each term is the position times the next integer, i.e. \\(n(n+1)\\)."
        },
        {
          "stepNumber": 4,
          "description": "State the formula and check.",
          "workingLatex": "u_{n} = n(n+1)",
          "explanation": "Equivalently \\(n^{2}+n\\). Check \\(n=5\\): \\(5\\cdot 6 = 30\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = n(n + 1)\\)."
    }
  },
  {
    "id": "y2ss1-027",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 27",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is given by \\(u_{n+1} = 3u_{n} - 4\\) with \\(u_{1} = 2\\). Find \\(u_{2},\\ u_{3}\\) and \\(u_{4}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the recurrence once.",
          "workingLatex": "u_{2} = 3u_{1} - 4 = 3(2) - 4",
          "explanation": "Substitute \\(u_1 = 2\\) into \\(3u_n - 4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate \\(u_{2}\\).",
          "workingLatex": "u_{2} = 6 - 4 = 2",
          "explanation": "The term has come back to \\(2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Recognise the fixed point.",
          "workingLatex": "g(x) = 3x - 4,\\ g(2) = 2",
          "explanation": "\\(2\\) is a fixed point of the map: feeding \\(2\\) in returns \\(2\\). Once a term equals a fixed point, it never moves."
        },
        {
          "stepNumber": 4,
          "description": "Conclude the sequence is constant.",
          "workingLatex": "u_{3} = u_{4} = 2",
          "explanation": "Every subsequent term repeats \\(2\\)."
        }
      ],
      "finalAnswer": "\\(u_{2} = u_{3} = u_{4} = 2\\)."
    }
  },
  {
    "id": "y2ss1-028",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 28",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is given by \\(u_{n+1} = u_{n} + 2n\\) with \\(u_{1} = 1\\). Find \\(u_{2}, u_{3}, u_{4}\\) and \\(u_{5}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the varying step.",
          "workingLatex": "u_{n+1} = u_{n} + 2n",
          "explanation": "The amount added is \\(2n\\), which uses the current index \\(n\\) and so grows each step."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\) and \\(u_{3}\\).",
          "workingLatex": "u_{2} = 1 + 2(1) = 3,\\quad u_{3} = 3 + 2(2) = 7",
          "explanation": "Use \\(n = 1\\) then \\(n = 2\\) for the added amount."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{4}\\) and \\(u_{5}\\).",
          "workingLatex": "u_{4} = 7 + 2(3) = 13,\\quad u_{5} = 13 + 2(4) = 21",
          "explanation": "The increments are \\(+2, +4, +6, +8\\): \\(3, 7, 13, 21\\)."
        }
      ],
      "finalAnswer": "\\(3, 7, 13, 21\\)."
    }
  },
  {
    "id": "y2ss1-029",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 29",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is given by \\(u_{n+1} = u_{n}^{2} - 1\\) with \\(u_{1} = 2\\). Find \\(u_{2},\\ u_{3}\\) and \\(u_{4}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n+1} = u_{n}^{2} - 1",
          "explanation": "Square the current term, then subtract \\(1\\); squaring makes the terms grow quickly."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\).",
          "workingLatex": "u_{2} = 2^{2} - 1 = 3",
          "explanation": "From \\(u_1 = 2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{3}\\) and \\(u_{4}\\).",
          "workingLatex": "u_{3} = 3^{2} - 1 = 8,\\quad u_{4} = 8^{2} - 1 = 63",
          "explanation": "Each square dominates: \\(3 \\to 8 \\to 63\\)."
        }
      ],
      "finalAnswer": "\\(u_{2} = 3,\\ u_{3} = 8,\\ u_{4} = 63\\)."
    }
  },
  {
    "id": "y2ss1-030",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 30",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Classify each of these sequences as increasing, decreasing, periodic or none of these: (a) \\(u_{n} = 2n\\); (b) \\(u_{n} = (-1)^{n}\\); (c) \\(u_{n} = 10 - n\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "classifying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify (a) \\(u_{n} = 2n\\).",
          "workingLatex": "u_{n+1} - u_{n} = 2 > 0 \\Rightarrow \\text{increasing}",
          "explanation": "Constant positive difference of \\(2\\)."
        },
        {
          "stepNumber": 2,
          "description": "Classify (b) \\(u_{n} = (-1)^{n}\\).",
          "workingLatex": "-1, 1, -1, 1, \\ldots \\Rightarrow \\text{periodic (period 2)}",
          "explanation": "Two values alternate forever."
        },
        {
          "stepNumber": 3,
          "description": "Classify (c) \\(u_{n} = 10 - n\\).",
          "workingLatex": "u_{n+1} - u_{n} = -1 < 0 \\Rightarrow \\text{decreasing}",
          "explanation": "Constant negative difference of \\(-1\\)."
        }
      ],
      "finalAnswer": "(a) increasing, (b) periodic, (c) decreasing."
    }
  },
  {
    "id": "y2ss1-031",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 31",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = 2n^{2} - 3n + 1\\). Find the first three terms and state whether the sequence is increasing.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute the first three terms.",
          "workingLatex": "u_{1}=0,\\ u_{2}=3,\\ u_{3}=10",
          "explanation": "Substitute \\(n=1,2,3\\) into \\(2n^{2}-3n+1\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set up the increasing test.",
          "workingLatex": "u_{n+1} - u_{n}",
          "explanation": "Compare consecutive terms; if this is positive for all \\(n \\ge 1\\) the sequence is increasing."
        },
        {
          "stepNumber": 3,
          "description": "Expand the difference.",
          "workingLatex": "2(n+1)^{2} - 3(n+1) + 1 - (2n^{2} - 3n + 1) = 4n - 1",
          "explanation": "The \\(n^2\\) terms cancel; \\(2(2n+1) - 3 = 4n - 1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "4n - 1 > 0 \\text{ for } n \\ge 1 \\Rightarrow \\text{increasing}",
          "explanation": "The smallest value (at \\(n=1\\)) is \\(3 > 0\\), so every gap is positive."
        }
      ],
      "finalAnswer": "\\(0, 3, 10\\); increasing."
    }
  },
  {
    "id": "y2ss1-032",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 32",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = an + b\\). Given \\(u_{3} = 11\\) and \\(u_{7} = 23\\), find \\(a\\) and \\(b\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the data into equations.",
          "workingLatex": "u_{3} = 3a + b = 11,\\quad u_{7} = 7a + b = 23",
          "explanation": "Substitute \\(n=3\\) and \\(n=7\\) into \\(u_n = an + b\\) to get simultaneous equations."
        },
        {
          "stepNumber": 2,
          "description": "Eliminate \\(b\\) by subtracting.",
          "workingLatex": "(7a + b) - (3a + b) = 23 - 11",
          "explanation": "Subtracting removes \\(b\\) because it is identical in both equations."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(a\\).",
          "workingLatex": "4a = 12 \\Rightarrow a = 3",
          "explanation": "Divide by \\(4\\)."
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute for \\(b\\).",
          "workingLatex": "3(3) + b = 11 \\Rightarrow b = 2",
          "explanation": "Put \\(a = 3\\) into the first equation."
        }
      ],
      "finalAnswer": "\\(a = 3,\\ b = 2\\)."
    }
  },
  {
    "id": "y2ss1-033",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 33",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = an^{2} + bn\\). Given \\(u_{1} = 3\\) and \\(u_{2} = 10\\), find \\(a\\) and \\(b\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the data into equations.",
          "workingLatex": "u_{1} = a + b = 3,\\quad u_{2} = 4a + 2b = 10",
          "explanation": "Substitute \\(n=1,2\\) into \\(an^{2}+bn\\); note \\(2^{2}=4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Scale to line up \\(b\\).",
          "workingLatex": "2(a + b) = 2a + 2b = 6",
          "explanation": "Doubling the first equation makes the \\(b\\)-coefficients match the second."
        },
        {
          "stepNumber": 3,
          "description": "Subtract to find \\(a\\).",
          "workingLatex": "(4a + 2b) - (2a + 2b) = 10 - 6 \\Rightarrow 2a = 4 \\Rightarrow a = 2",
          "explanation": "Eliminate \\(b\\)."
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute for \\(b\\).",
          "workingLatex": "2 + b = 3 \\Rightarrow b = 1",
          "explanation": "Put \\(a = 2\\) into \\(a + b = 3\\)."
        }
      ],
      "finalAnswer": "\\(a = 2,\\ b = 1\\)."
    }
  },
  {
    "id": "y2ss1-034",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 34",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = \\tfrac{1}{2}u_{n} + 1\\) with \\(u_{1} = 4\\). Find the first five terms.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n+1} = \\tfrac{1}{2}u_{n} + 1,\\quad u_{1} = 4",
          "explanation": "Halve the current term, then add \\(1\\); each step pulls the value towards a limit."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\).",
          "workingLatex": "u_{2} = \\tfrac{1}{2}(4) + 1 = 3",
          "explanation": "Halve \\(4\\) to \\(2\\), add \\(1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{3}\\) and \\(u_{4}\\).",
          "workingLatex": "u_{3} = \\tfrac{1}{2}(3) + 1 = 2.5,\\quad u_{4} = \\tfrac{1}{2}(2.5) + 1 = 2.25",
          "explanation": "Keep going; the terms shrink towards \\(2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(u_{5}\\).",
          "workingLatex": "u_{5} = \\tfrac{1}{2}(2.25) + 1 = 2.125",
          "explanation": "Gives \\(4, 3, 2.5, 2.25, 2.125\\)."
        }
      ],
      "finalAnswer": "\\(4, 3, 2.5, 2.25, 2.125\\)."
    }
  },
  {
    "id": "y2ss1-035",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 35",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = \\tfrac{1}{2}u_{n} + 1\\). Find its limit, assuming the sequence converges.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the convergence idea.",
          "workingLatex": "u_{n} \\to L \\Rightarrow u_{n+1} \\to L",
          "explanation": "If the sequence settles at a limit \\(L\\), then both \\(u_n\\) and \\(u_{n+1}\\) are essentially \\(L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Replace both terms by \\(L\\).",
          "workingLatex": "L = \\tfrac{1}{2}L + 1",
          "explanation": "Substitute \\(L\\) for each occurrence in the recurrence to get an equation in \\(L\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(L\\).",
          "workingLatex": "L - \\tfrac{1}{2}L = 1 \\Rightarrow \\tfrac{1}{2}L = 1 \\Rightarrow L = 2",
          "explanation": "Collect the \\(L\\) terms and double both sides."
        }
      ],
      "finalAnswer": "Converges to 2."
    }
  },
  {
    "id": "y2ss1-036",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 36",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the limit of the sequence defined by \\(u_{n+1} = \\tfrac{1}{3}u_{n} + 4\\), assuming the sequence converges.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the limit equation.",
          "workingLatex": "L = \\tfrac{1}{3}L + 4",
          "explanation": "At the limit, \\(u_{n+1} = u_{n} = L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Collect the \\(L\\) terms.",
          "workingLatex": "L - \\tfrac{1}{3}L = \\tfrac{2}{3}L = 4",
          "explanation": "\\(1 - \\tfrac13 = \\tfrac23\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(L\\).",
          "workingLatex": "L = 4 \\cdot \\tfrac{3}{2} = 6",
          "explanation": "Multiply by the reciprocal \\(\\tfrac32\\)."
        }
      ],
      "finalAnswer": "\\(L = 6\\)."
    }
  },
  {
    "id": "y2ss1-037",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 37",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = \\sqrt{u_{n} + 2}\\) with \\(u_{1} = 1\\). Find the first four terms to 2 decimal places.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n+1} = \\sqrt{u_{n} + 2},\\quad u_{1} = 1",
          "explanation": "Add \\(2\\) to the current term, then take the (positive) square root."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\).",
          "workingLatex": "u_{2} = \\sqrt{1 + 2} = \\sqrt{3} \\approx 1.73",
          "explanation": "Carry the exact value \\(\\sqrt3\\) and round only when reporting."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{3}\\).",
          "workingLatex": "u_{3} = \\sqrt{1.73 + 2} = \\sqrt{3.73} \\approx 1.93",
          "explanation": "Use the unrounded previous value where possible to avoid rounding build-up."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(u_{4}\\).",
          "workingLatex": "u_{4} = \\sqrt{1.93 + 2} \\approx 1.98",
          "explanation": "The terms edge towards \\(2\\): \\(1, 1.73, 1.93, 1.98\\)."
        }
      ],
      "finalAnswer": "\\(1, 1.73, 1.93, 1.98\\)."
    }
  },
  {
    "id": "y2ss1-038",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 38",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Using the iteration in Q37, find the limit of the sequence exactly.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the limit equation.",
          "workingLatex": "L = \\sqrt{L + 2}",
          "explanation": "At the limit \\(u_{n+1} = u_{n} = L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Square both sides.",
          "workingLatex": "L^{2} = L + 2",
          "explanation": "Squaring removes the root (valid since both sides are non-negative)."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "L^{2} - L - 2 = 0",
          "explanation": "Bring everything to one side."
        },
        {
          "stepNumber": 4,
          "description": "Factorise and select the root.",
          "workingLatex": "(L - 2)(L + 1) = 0 \\Rightarrow L = 2",
          "explanation": "Reject \\(L = -1\\): the terms are positive square roots, so the limit must be positive."
        }
      ],
      "finalAnswer": "\\(L = 2\\)."
    }
  },
  {
    "id": "y2ss1-039",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 39",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = -u_{n} + 6\\) with \\(u_{1} = 2\\). Find \\(u_{50}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "periodic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Generate a few terms.",
          "workingLatex": "u_{1} = 2,\\ u_{2} = -2 + 6 = 4,\\ u_{3} = -4 + 6 = 2",
          "explanation": "Apply \\(u_{n+1} = -u_n + 6\\); the values bounce between \\(2\\) and \\(4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Identify the pattern.",
          "workingLatex": "\\text{odd } n \\to 2,\\quad \\text{even } n \\to 4",
          "explanation": "The sequence is periodic with period \\(2\\): odd positions give \\(2\\), even positions give \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply to \\(n = 50\\).",
          "workingLatex": "50 \\text{ even} \\Rightarrow u_{50} = 4",
          "explanation": "Since \\(50\\) is even, the term is \\(4\\)."
        }
      ],
      "finalAnswer": "\\(u_{50} = 4\\)."
    }
  },
  {
    "id": "y2ss1-040",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 40",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the limit of the sequence \\(u_{n} = \\tfrac{n + 1}{2n}\\) as \\(n \\to \\infty\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on the method.",
          "workingLatex": "\\text{divide top and bottom by } n",
          "explanation": "For a limit as \\(n \\to \\infty\\), dividing by the highest power of \\(n\\) exposes which parts vanish."
        },
        {
          "stepNumber": 2,
          "description": "Divide by \\(n\\).",
          "workingLatex": "u_{n} = \\tfrac{n+1}{2n} = \\tfrac{1 + 1/n}{2}",
          "explanation": "Split \\(\\tfrac{n+1}{2n}\\) into \\(\\tfrac{n}{2n} + \\tfrac{1}{2n}\\) or divide each part by \\(n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Take the limit.",
          "workingLatex": "\\tfrac{1 + 0}{2} = \\tfrac{1}{2}",
          "explanation": "As \\(n \\to \\infty\\), \\(\\tfrac{1}{n} \\to 0\\)."
        }
      ],
      "finalAnswer": "\\(\\tfrac{1}{2}\\)."
    }
  },
  {
    "id": "y2ss1-041",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 41",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "State whether the sequence \\(u_{n} = \\tfrac{3n + 2}{n + 5}\\) converges. If it does, find its limit.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on the method.",
          "workingLatex": "\\text{divide top and bottom by } n",
          "explanation": "Expose the dominant terms for large \\(n\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide by \\(n\\).",
          "workingLatex": "u_{n} = \\tfrac{3n + 2}{n + 5} = \\tfrac{3 + 2/n}{1 + 5/n}",
          "explanation": "Divide each term by \\(n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Take the limit.",
          "workingLatex": "\\tfrac{3 + 0}{1 + 0} = 3",
          "explanation": "The \\(\\tfrac{2}{n}\\) and \\(\\tfrac{5}{n}\\) vanish, so the sequence converges to \\(3\\)."
        }
      ],
      "finalAnswer": "Converges to 3."
    }
  },
  {
    "id": "y2ss1-042",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 42",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = 2^{n} - 5\\). State whether the sequence converges or diverges.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the dominant behaviour.",
          "workingLatex": "u_{n} = 2^{n} - 5",
          "explanation": "Exponential growth \\(2^{n}\\) dwarfs the constant \\(-5\\)."
        },
        {
          "stepNumber": 2,
          "description": "Examine \\(2^{n}\\) as \\(n \\to \\infty\\).",
          "workingLatex": "2^{n} \\to \\infty",
          "explanation": "Doubling repeatedly grows without bound."
        },
        {
          "stepNumber": 3,
          "description": "Conclude.",
          "workingLatex": "u_{n} \\to \\infty \\Rightarrow \\text{diverges}",
          "explanation": "Subtracting a fixed \\(5\\) cannot stop unbounded growth, so the sequence diverges."
        }
      ],
      "finalAnswer": "Diverges."
    }
  },
  {
    "id": "y2ss1-043",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 43",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = \\tfrac{1}{u_{n}}\\) with \\(u_{1} = 4\\). Find the first five terms and describe the behaviour.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "periodic"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule.",
          "workingLatex": "u_{n+1} = \\tfrac{1}{u_{n}},\\quad u_{1} = 4",
          "explanation": "Each term is the reciprocal of the previous."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\) and \\(u_{3}\\).",
          "workingLatex": "u_{2} = \\tfrac{1}{4},\\quad u_{3} = \\tfrac{1}{1/4} = 4",
          "explanation": "Reciprocating \\(\\tfrac14\\) returns \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Spot the cycle and classify.",
          "workingLatex": "4,\\ \\tfrac14,\\ 4,\\ \\tfrac14,\\ \\ldots \\Rightarrow \\text{period } 2",
          "explanation": "Taking the reciprocal twice gives back the start, so the sequence is periodic with period \\(2\\)."
        }
      ],
      "finalAnswer": "Periodic with period 2."
    }
  },
  {
    "id": "y2ss1-044",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 44",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A car park starts with 120 cars. Each hour 10% leave and 20 new cars arrive. Write a recurrence relation for the number of cars \\(c_{n}\\) after \\(n\\) hours and find \\(c_{3}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence",
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate \"10% leave\" into a multiplier.",
          "workingLatex": "\\text{remaining} = 90\\% = 0.9",
          "explanation": "Losing 10% leaves 90% of the cars, which is a \\(\\times 0.9\\) factor — turning a percentage change into a multiplier is the key modelling move."
        },
        {
          "stepNumber": 2,
          "description": "Add the new arrivals and state the recurrence.",
          "workingLatex": "c_{n+1} = 0.9c_{n} + 20,\\quad c_{0} = 120",
          "explanation": "Multiply by \\(0.9\\), then add the \\(20\\) new cars."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(c_{1}\\) and \\(c_{2}\\).",
          "workingLatex": "c_{1} = 0.9(120) + 20 = 128,\\quad c_{2} = 0.9(128) + 20 = 135.2",
          "explanation": "Apply the rule once per hour."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(c_{3}\\).",
          "workingLatex": "c_{3} = 0.9(135.2) + 20 = 141.68 \\approx 142",
          "explanation": "Round to a whole number of cars."
        }
      ],
      "finalAnswer": "\\(c_{3} \\approx 142\\) cars."
    }
  },
  {
    "id": "y2ss1-045",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 45",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the long-term number of cars in the car park in Q44.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence",
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the equilibrium idea.",
          "workingLatex": "\\text{long-term} \\Rightarrow c_{n+1} = c_{n} = L",
          "explanation": "In the long run the count stops changing, so set consecutive terms equal."
        },
        {
          "stepNumber": 2,
          "description": "Form the equation.",
          "workingLatex": "L = 0.9L + 20",
          "explanation": "Substitute \\(L\\) into the recurrence."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(L\\).",
          "workingLatex": "0.1L = 20 \\Rightarrow L = 200",
          "explanation": "Subtract \\(0.9L\\), divide by \\(0.1\\). The car park settles at \\(200\\) cars."
        }
      ],
      "finalAnswer": "200 cars."
    }
  },
  {
    "id": "y2ss1-046",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 46",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = \\tfrac{(-1)^{n}}{n}\\). Find the first four terms and state the limit.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the two parts of the rule.",
          "workingLatex": "u_{n} = \\tfrac{(-1)^{n}}{n}",
          "explanation": "\\((-1)^{n}\\) controls the sign; \\(\\tfrac{1}{n}\\) controls the size."
        },
        {
          "stepNumber": 2,
          "description": "List the first four terms.",
          "workingLatex": "-1,\\ \\tfrac{1}{2},\\ -\\tfrac{1}{3},\\ \\tfrac{1}{4}",
          "explanation": "Signs alternate while the magnitudes \\(1, \\tfrac12, \\tfrac13, \\tfrac14\\) shrink."
        },
        {
          "stepNumber": 3,
          "description": "Take the limit of the size.",
          "workingLatex": "|u_{n}| = \\tfrac{1}{n} \\to 0",
          "explanation": "Even though the sign keeps flipping, the terms get arbitrarily close to \\(0\\)."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "u_{n} \\to 0",
          "explanation": "An alternating sequence whose size tends to \\(0\\) converges to \\(0\\)."
        }
      ],
      "finalAnswer": "Converges to 0."
    }
  },
  {
    "id": "y2ss1-047",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 47",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(3, 9, 27, 81, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the type.",
          "workingLatex": "\\tfrac{9}{3}=3,\\ \\tfrac{27}{9}=3",
          "explanation": "Constant ratio \\(3\\): geometric."
        },
        {
          "stepNumber": 2,
          "description": "Apply the geometric formula.",
          "workingLatex": "u_{n} = 3 \\cdot 3^{\\,n-1}",
          "explanation": "\\(a = 3\\), \\(r = 3\\) into \\(ar^{n-1}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the powers.",
          "workingLatex": "u_{n} = 3^{1}\\cdot 3^{n-1} = 3^{n}",
          "explanation": "Add the indices \\(1 + (n-1) = n\\). Check \\(n=2\\): \\(3^{2}=9\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 3^{n}\\)."
    }
  },
  {
    "id": "y2ss1-048",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 48",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(\\tfrac{1}{2}, \\tfrac{1}{4}, \\tfrac{1}{8}, \\tfrac{1}{16}, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the type.",
          "workingLatex": "\\tfrac{1/4}{1/2} = \\tfrac{1}{2}",
          "explanation": "Each term is half the previous: geometric with \\(r = \\tfrac12\\)."
        },
        {
          "stepNumber": 2,
          "description": "Apply the geometric formula.",
          "workingLatex": "u_{n} = \\tfrac{1}{2}\\!\\left(\\tfrac{1}{2}\\right)^{n-1} = \\left(\\tfrac{1}{2}\\right)^{n}",
          "explanation": "\\(a = \\tfrac12\\), \\(r = \\tfrac12\\); combine to \\((\\tfrac12)^n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite with a negative index.",
          "workingLatex": "u_{n} = 2^{-n}",
          "explanation": "\\((\\tfrac12)^{n} = 2^{-n}\\). Check \\(n=3\\): \\(2^{-3} = \\tfrac18\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 2^{-n}\\)."
    }
  },
  {
    "id": "y2ss1-049",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 49",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = 0.8 u_{n} + 5\\). Find its limit, assuming the sequence converges.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the limit equation.",
          "workingLatex": "L = 0.8L + 5",
          "explanation": "At the limit \\(u_{n+1} = u_{n} = L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Collect and solve.",
          "workingLatex": "0.2L = 5 \\Rightarrow L = 25",
          "explanation": "Subtract \\(0.8L\\), divide by \\(0.2\\)."
        }
      ],
      "finalAnswer": "\\(L = 25\\)."
    }
  },
  {
    "id": "y2ss1-050",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 50",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Write down the nth term of the sequence \\(-1, 4, -9, 16, -25, \\ldots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the size from the sign.",
          "workingLatex": "|u_{n}| = 1, 4, 9, 16, 25 = n^{2}",
          "explanation": "The magnitudes are the square numbers."
        },
        {
          "stepNumber": 2,
          "description": "Model the alternating sign.",
          "workingLatex": "\\text{signs } -, +, -, +, - = (-1)^{n}",
          "explanation": "Starting negative at \\(n=1\\) matches \\((-1)^{n}\\) (odd \\(\\to -1\\))."
        },
        {
          "stepNumber": 3,
          "description": "Combine and check.",
          "workingLatex": "u_{n} = (-1)^{n} n^{2}",
          "explanation": "Check \\(n=1\\): \\(-1\\); \\(n=2\\): \\(+4\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = (-1)^{n} n^{2}\\)."
    }
  },
  {
    "id": "y2ss1-051",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 51",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = u_{n} + (-1)^{n}\\) with \\(u_{1} = 10\\). Find the first five terms.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the alternating step.",
          "workingLatex": "u_{n+1} = u_{n} + (-1)^{n}",
          "explanation": "The amount added is \\(+1\\) or \\(-1\\) depending on the parity of the current index \\(n\\)."
        },
        {
          "stepNumber": 2,
          "description": "Find \\(u_{2}\\) and \\(u_{3}\\).",
          "workingLatex": "u_{2} = 10 + (-1)^{1} = 9,\\quad u_{3} = 9 + (-1)^{2} = 10",
          "explanation": "For \\(n=1\\) add \\(-1\\); for \\(n=2\\) add \\(+1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(u_{4}\\) and \\(u_{5}\\).",
          "workingLatex": "u_{4} = 10 - 1 = 9,\\quad u_{5} = 9 + 1 = 10",
          "explanation": "The terms bounce between \\(9\\) and \\(10\\): \\(10, 9, 10, 9, 10\\)."
        }
      ],
      "finalAnswer": "\\(10, 9, 10, 9, 10\\)."
    }
  },
  {
    "id": "y2ss1-052",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 52",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the first term of the sequence \\(u_{n} = 2n + k\\) given that \\(u_{5} = 19\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the given term to find \\(k\\).",
          "workingLatex": "u_{5} = 2(5) + k = 19",
          "explanation": "Substitute \\(n = 5\\) and set equal to the given value."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(k\\).",
          "workingLatex": "10 + k = 19 \\Rightarrow k = 9",
          "explanation": "Subtract \\(10\\)."
        },
        {
          "stepNumber": 3,
          "description": "Find the first term.",
          "workingLatex": "u_{1} = 2(1) + 9 = 11",
          "explanation": "Now substitute \\(n = 1\\) with \\(k = 9\\)."
        }
      ],
      "finalAnswer": "\\(u_{1} = 11\\)."
    }
  },
  {
    "id": "y2ss1-053",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 53",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "The nth term of a sequence is \\(u_{n} = n^{2} - 5n + 4\\). Find all values of \\(n\\) for which \\(u_{n} = 0\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the term equal to zero.",
          "workingLatex": "n^{2} - 5n + 4 = 0",
          "explanation": "We want the positions \\(n\\) where the term is \\(0\\)."
        },
        {
          "stepNumber": 2,
          "description": "Factorise.",
          "workingLatex": "(n - 1)(n - 4) = 0",
          "explanation": "Two numbers multiplying to \\(+4\\) and adding to \\(-5\\) are \\(-1\\) and \\(-4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve and validate.",
          "workingLatex": "n = 1 \\text{ or } n = 4",
          "explanation": "Both are positive integers, so both are genuine term numbers."
        }
      ],
      "finalAnswer": "\\(n = 1\\) or \\(n = 4\\)."
    }
  },
  {
    "id": "y2ss1-054",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 54",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = (-2)^{n}\\). Explain why this sequence does not converge.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Examine the magnitude.",
          "workingLatex": "|(-2)^{n}| = 2^{n}",
          "explanation": "The size of each term is \\(2^{n}\\), which grows without bound."
        },
        {
          "stepNumber": 2,
          "description": "Examine the sign.",
          "workingLatex": "(-2)^{n}:\\ -, +, -, + \\ldots",
          "explanation": "The sign alternates because the base is negative."
        },
        {
          "stepNumber": 3,
          "description": "Conclude.",
          "workingLatex": "\\text{unbounded and alternating} \\Rightarrow \\text{no limit}",
          "explanation": "The terms grow ever larger while flipping sign, so they never settle — the sequence does not converge."
        }
      ],
      "finalAnswer": "Unbounded and alternating."
    }
  },
  {
    "id": "y2ss1-055",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 55",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence \\(u_{n}\\) satisfies \\(u_{n+1} = 0.5u_{n} - 2\\). Find its limit, assuming the sequence converges.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the limit equation.",
          "workingLatex": "L = 0.5L - 2",
          "explanation": "At the limit \\(u_{n+1} = u_{n} = L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Collect and solve.",
          "workingLatex": "0.5L = -2 \\Rightarrow L = -4",
          "explanation": "\\(L - 0.5L = 0.5L\\); divide by \\(0.5\\). A negative limit is fine here."
        }
      ],
      "finalAnswer": "\\(L = -4\\)."
    }
  },
  {
    "id": "y2ss1-056",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 56",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = 3n^{2} - n\\). Show that the sequence is increasing for \\(n \\geq 1\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "classifying"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the increasing test.",
          "workingLatex": "\\text{show } u_{n+1} - u_{n} > 0",
          "explanation": "To prove a sequence increases for all \\(n \\ge 1\\), show the difference of consecutive terms is always positive."
        },
        {
          "stepNumber": 2,
          "description": "Write the difference.",
          "workingLatex": "u_{n+1} - u_{n} = [3(n+1)^{2} - (n+1)] - [3n^{2} - n]",
          "explanation": "Substitute \\(n+1\\) and \\(n\\) into \\(3n^{2} - n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify.",
          "workingLatex": "= 3(2n + 1) - 1 = 6n + 2",
          "explanation": "\\((n+1)^{2} - n^{2} = 2n+1\\) and \\(-(n+1) + n = -1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "6n + 2 > 0 \\text{ for all } n \\ge 1",
          "explanation": "Every difference is positive (the smallest, at \\(n=1\\), is \\(8\\)), so the sequence is increasing."
        }
      ],
      "finalAnswer": "Sequence is increasing."
    }
  },
  {
    "id": "y2ss1-057",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 57",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "Find the nth term formula for the sequence \\(0, 3, 8, 15, 24, \\ldots\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the square numbers.",
          "workingLatex": "1, 4, 9, 16, 25 \\to 0, 3, 8, 15, 24",
          "explanation": "Each given term is \\(1\\) less than a perfect square."
        },
        {
          "stepNumber": 2,
          "description": "State the formula and check.",
          "workingLatex": "u_{n} = n^{2} - 1",
          "explanation": "Check \\(n=3\\): \\(9 - 1 = 8\\). Correct."
        }
      ],
      "finalAnswer": "\\(u_{n} = n^{2} - 1\\)."
    }
  },
  {
    "id": "y2ss1-058",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 58",
    "difficulty": "Standard",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n} = 1 + \\tfrac{1}{n}\\). Determine the limit as \\(n \\to \\infty\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the vanishing part.",
          "workingLatex": "u_{n} = 1 + \\tfrac{1}{n}",
          "explanation": "As \\(n\\) grows, only the \\(\\tfrac{1}{n}\\) changes, and it shrinks."
        },
        {
          "stepNumber": 2,
          "description": "Take the limit.",
          "workingLatex": "\\tfrac{1}{n} \\to 0 \\Rightarrow u_{n} \\to 1",
          "explanation": "The sequence converges to \\(1\\), approaching it from above."
        }
      ],
      "finalAnswer": "Converges to 1."
    }
  },
  {
    "id": "y2ss1-059",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 59",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A sequence is defined by the recurrence \\(u_{n+1} = u_{n} + 2n + 1\\) with \\(u_{1} = 1\\). Show that \\(u_{n} = n^{2}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "recurrence",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what induction requires.",
          "workingLatex": "\\text{base case, then } P(k) \\Rightarrow P(k+1)",
          "explanation": "To prove \\(u_n = n^2\\) for all \\(n\\), verify it at the start and show it carries from one term to the next."
        },
        {
          "stepNumber": 2,
          "description": "Check the base case.",
          "workingLatex": "u_{1} = 1 = 1^{2}",
          "explanation": "The formula holds at \\(n = 1\\)."
        },
        {
          "stepNumber": 3,
          "description": "State the inductive hypothesis.",
          "workingLatex": "\\text{assume } u_{k} = k^{2}",
          "explanation": "Suppose the formula is true for some \\(k \\ge 1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Apply the recurrence.",
          "workingLatex": "u_{k+1} = u_{k} + 2k + 1 = k^{2} + 2k + 1",
          "explanation": "Use the hypothesis \\(u_k = k^2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Recognise the perfect square.",
          "workingLatex": "k^{2} + 2k + 1 = (k+1)^{2}",
          "explanation": "This is exactly the formula at \\(n = k+1\\), so the result carries over. By induction \\(u_n = n^2\\) for all \\(n \\ge 1\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = n^{2}\\)."
    }
  },
  {
    "id": "y2ss1-060",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 60",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A patient is prescribed a drug that is cleared by the body at a rate of 40% every 12 hours. Every 12 hours the patient takes a dose of 60 mg. Let \\(c_{n}\\) denote the concentration of the drug (in mg) immediately after the \\(n\\)th dose, with \\(c_{1} = 60\\). (a) Write down a recurrence relation for \\(c_{n}\\). (b) Find \\(c_{4}\\) to 2 decimal places. (c) Find the long-term concentration the patient's body reaches, assuming doses continue indefinitely.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "recurrence",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Convert \"40% cleared\" to a multiplier.",
          "workingLatex": "\\text{remaining} = 60\\% = 0.6",
          "explanation": "If 40% is cleared, 60% of the drug stays, giving a \\(\\times 0.6\\) factor."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "c_{n+1} = 0.6 c_{n} + 60,\\quad c_{1} = 60",
          "explanation": "Multiply the current concentration by \\(0.6\\), then add the fresh \\(60\\) mg dose."
        },
        {
          "stepNumber": 3,
          "description": "(b) Find \\(c_{2}\\) and \\(c_{3}\\).",
          "workingLatex": "c_{2} = 0.6(60) + 60 = 96,\\quad c_{3} = 0.6(96) + 60 = 117.6",
          "explanation": "Apply the rule once per dose."
        },
        {
          "stepNumber": 4,
          "description": "(b) Find \\(c_{4}\\).",
          "workingLatex": "c_{4} = 0.6(117.6) + 60 = 130.56",
          "explanation": "To 2 d.p., \\(c_{4} = 130.56\\) mg."
        },
        {
          "stepNumber": 5,
          "description": "(c) Set up the long-term equation.",
          "workingLatex": "L = 0.6L + 60",
          "explanation": "Long-term steady state: the amount cleared each cycle equals the dose added, so \\(c_{n+1} = c_n = L\\)."
        },
        {
          "stepNumber": 6,
          "description": "(c) Solve for \\(L\\).",
          "workingLatex": "0.4L = 60 \\Rightarrow L = 150",
          "explanation": "The concentration levels off at \\(150\\) mg."
        }
      ],
      "finalAnswer": "\\(c_{n+1} = 0.6c_{n} + 60\\); \\(c_{4} = 130.56\\) mg; long-term 150 mg."
    }
  },
  {
    "id": "y2ss1-061",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 61",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A sequence is defined by \\(u_{n+1} = \\tfrac{3 u_{n} + 2}{u_{n} + 2}\\) with \\(u_{1} = 1\\). Find the limit.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the limit equation.",
          "workingLatex": "L = \\tfrac{3L + 2}{L + 2}",
          "explanation": "At the limit \\(u_{n+1} = u_{n} = L\\)."
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction.",
          "workingLatex": "L(L + 2) = 3L + 2",
          "explanation": "Multiply both sides by \\(L + 2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "L^{2} + 2L - 3L - 2 = 0 \\Rightarrow L^{2} - L - 2 = 0",
          "explanation": "Expand and collect terms."
        },
        {
          "stepNumber": 4,
          "description": "Factorise and choose the root.",
          "workingLatex": "(L - 2)(L + 1) = 0 \\Rightarrow L = 2",
          "explanation": "Reject \\(L = -1\\): starting at \\(u_1 = 1\\) the terms stay positive, so the limit is \\(2\\)."
        }
      ],
      "finalAnswer": "\\(L = 2\\)."
    }
  },
  {
    "id": "y2ss1-062",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 62",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "The sequence \\(u_{n}\\) satisfies \\(u_{n+2} = u_{n+1} - u_{n}\\) with \\(u_{1} = 3\\) and \\(u_{2} = 5\\). Show that the sequence is periodic and state its period.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "periodic",
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the recurrence.",
          "workingLatex": "u_{n+2} = u_{n+1} - u_{n}",
          "explanation": "Each term is the previous term minus the one before that."
        },
        {
          "stepNumber": 2,
          "description": "Generate terms.",
          "workingLatex": "u_{3} = 5 - 3 = 2,\\ u_{4} = 2 - 5 = -3,\\ u_{5} = -3 - 2 = -5,\\ u_{6} = -5 - (-3) = -2",
          "explanation": "Work along carefully with the signs: \\(3, 5, 2, -3, -5, -2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Continue until the start reappears.",
          "workingLatex": "u_{7} = -2 - (-5) = 3,\\ u_{8} = 3 - (-2) = 5",
          "explanation": "The pair \\((3, 5)\\) returns at \\(u_7, u_8\\), so the block has length \\(6\\)."
        },
        {
          "stepNumber": 4,
          "description": "State the period.",
          "workingLatex": "\\text{periodic, period } 6",
          "explanation": "Because the sequence repeats every six terms, its period is \\(6\\)."
        }
      ],
      "finalAnswer": "Periodic with period 6."
    }
  },
  {
    "id": "y2ss1-063",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 63",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "Arran opens a savings account that pays 0.5% interest at the end of each month on the balance held through the month. Arran deposits £100 at the start of each month. Let \\(b_{n}\\) denote the balance (in £) at the end of month \\(n\\), after interest has been added. Assuming \\(b_{0} = 0\\), (a) write a recurrence for \\(b_{n}\\), (b) find \\(b_{6}\\) to 2 decimal places, and (c) explain why the account balance does not converge to a finite limit.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Order the monthly events.",
          "workingLatex": "\\text{deposit £100, then add 0.5\\% interest}",
          "explanation": "Each month £100 goes in first, then the whole balance earns interest — so the interest multiplier applies to the deposit too."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "b_{n} = 1.005(b_{n-1} + 100)",
          "explanation": "Add \\(100\\) to last month's balance, then multiply by \\(1.005\\) (0.5% interest)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Find \\(b_{1}\\) and \\(b_{2}\\).",
          "workingLatex": "b_{1} = 1.005(0 + 100) = 100.50,\\quad b_{2} = 1.005(100.50 + 100) = 201.50",
          "explanation": "Start from \\(b_0 = 0\\); add the deposit before multiplying."
        },
        {
          "stepNumber": 4,
          "description": "(b) Continue to \\(b_{6}\\).",
          "workingLatex": "b_{3}\\approx 303.01,\\ b_{4}\\approx 405.53,\\ b_{5}\\approx 508.55,\\ b_{6}\\approx 610.59",
          "explanation": "Carry full accuracy; to 2 d.p. \\(b_{6} \\approx \\pounds 610.59\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Test for a finite limit.",
          "workingLatex": "L = 1.005(L + 100) \\Rightarrow -0.005L = 100.5",
          "explanation": "A steady state would satisfy this equation."
        },
        {
          "stepNumber": 6,
          "description": "(c) Interpret the contradiction.",
          "workingLatex": "L = -20100 < 0 \\Rightarrow \\text{no finite limit}",
          "explanation": "A negative limit is impossible for a balance that only grows, so no steady state exists — the balance diverges to infinity (each month adds a deposit plus interest)."
        }
      ],
      "finalAnswer": "\\(b_{n} = 1.005(b_{n-1} + 100)\\); \\(b_{6} \\approx £610.59\\); diverges to infinity."
    }
  },
  {
    "id": "y2ss1-064",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 64",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A sequence has \\(u_{n} = an^{2} + bn + c\\). Given \\(u_{1} = 4\\), \\(u_{2} = 11\\) and \\(u_{3} = 22\\), find \\(a,\\ b\\) and \\(c\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "nth term"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form three equations.",
          "workingLatex": "a + b + c = 4,\\ 4a + 2b + c = 11,\\ 9a + 3b + c = 22",
          "explanation": "Substitute \\(n = 1, 2, 3\\) into \\(an^{2} + bn + c\\) (note \\(2^2=4\\), \\(3^2=9\\))."
        },
        {
          "stepNumber": 2,
          "description": "Eliminate \\(c\\) using differences.",
          "workingLatex": "3a + b = 7,\\quad 5a + b = 11",
          "explanation": "Subtract equation 1 from 2, and 2 from 3, to remove \\(c\\)."
        },
        {
          "stepNumber": 3,
          "description": "Subtract again for \\(a\\).",
          "workingLatex": "(5a + b) - (3a + b) = 11 - 7 \\Rightarrow 2a = 4 \\Rightarrow a = 2",
          "explanation": "Now \\(b\\) cancels too."
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute for \\(b\\) and \\(c\\).",
          "workingLatex": "b = 7 - 6 = 1,\\quad c = 4 - 2 - 1 = 1",
          "explanation": "Use \\(3a + b = 7\\) then \\(a + b + c = 4\\)."
        }
      ],
      "finalAnswer": "\\(a = 2,\\ b = 1,\\ c = 1\\)."
    }
  },
  {
    "id": "y2ss1-065",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 65",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A rubber ball is dropped from a height of 2 m. Each time it bounces, it rebounds to 75% of the height it reached before the bounce. Let \\(h_{n}\\) denote the maximum height (in m) reached after the \\(n\\)th bounce. (a) Write a formula for \\(h_{n}\\). (b) Find the smallest \\(n\\) for which \\(h_{n} < 0.1\\) m. (c) Does the ball ever stop bouncing? Justify your answer.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "applied",
      "geometric"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Recognise geometric decay.",
          "workingLatex": "\\text{each height} = 75\\% \\text{ of the last}",
          "explanation": "A constant 75% rebound means the heights form a geometric sequence with ratio \\(0.75\\), starting from the drop height \\(h_0 = 2\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Write the formula.",
          "workingLatex": "h_{n} = 2(0.75)^{n}",
          "explanation": "Multiply the initial \\(2\\) m by \\(0.75\\) once per bounce."
        },
        {
          "stepNumber": 3,
          "description": "(b) Set up the inequality.",
          "workingLatex": "2(0.75)^{n} < 0.1 \\Rightarrow (0.75)^{n} < 0.05",
          "explanation": "Divide both sides by \\(2\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Take logs.",
          "workingLatex": "n\\log 0.75 < \\log 0.05",
          "explanation": "Logs turn the power into a coefficient so we can solve for \\(n\\)."
        },
        {
          "stepNumber": 5,
          "description": "(b) Solve, flipping the inequality.",
          "workingLatex": "n > \\tfrac{\\log 0.05}{\\log 0.75} \\approx 10.41 \\Rightarrow n = 11",
          "explanation": "Dividing by \\(\\log 0.75\\) (negative) reverses the inequality; the smallest integer above \\(10.41\\) is \\(11\\)."
        },
        {
          "stepNumber": 6,
          "description": "(c) Address whether it stops.",
          "workingLatex": "\\text{infinitely many bounces, finite total time}",
          "explanation": "In this ideal model the height never reaches exactly zero, so there are infinitely many bounces — but the bounce durations shrink geometrically and sum to a finite total time."
        }
      ],
      "finalAnswer": "\\(h_{n} = 2(0.75)^{n}\\); smallest \\(n = 11\\); bounces infinitely (but total time is finite)."
    }
  },
  {
    "id": "y2ss1-066",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 66",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A fish population in a lake grows at 15% per year, but anglers remove 50 fish each year at the end of the year. Initially the lake contains 400 fish. Let \\(P_{n}\\) denote the population at the end of year \\(n\\). (a) Write a recurrence for \\(P_{n}\\). (b) Find \\(P_{3}\\). (c) State what happens to the population in the long term and interpret the result.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Convert growth and harvest.",
          "workingLatex": "\\text{growth } \\times 1.15,\\ \\text{remove } 50",
          "explanation": "15% growth multiplies by \\(1.15\\); the anglers then subtract a fixed \\(50\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "P_{n+1} = 1.15 P_{n} - 50,\\quad P_{0} = 400",
          "explanation": "Apply growth first, then removal."
        },
        {
          "stepNumber": 3,
          "description": "(b) Iterate to \\(P_{3}\\).",
          "workingLatex": "P_{1} = 410,\\ P_{2} = 421.5,\\ P_{3} = 1.15(421.5) - 50 \\approx 434.73",
          "explanation": "Year by year; \\(P_3 \\approx 435\\) fish."
        },
        {
          "stepNumber": 4,
          "description": "(c) Find the equilibrium.",
          "workingLatex": "L = 1.15L - 50 \\Rightarrow L = \\tfrac{50}{0.15} \\approx 333",
          "explanation": "Set consecutive terms equal and solve."
        },
        {
          "stepNumber": 5,
          "description": "(c) Interpret stability.",
          "workingLatex": "P_{0} = 400 > 333 \\Rightarrow \\text{grows without bound}",
          "explanation": "The equilibrium is unstable: starting above it, the 15% growth outpaces the fixed harvest and the population increases indefinitely."
        }
      ],
      "finalAnswer": "\\(P_{n+1} = 1.15 P_{n} - 50\\); \\(P_{3} \\approx 435\\) fish; population grows to infinity (the equilibrium \\(L \\approx 333\\) is unstable)."
    }
  },
  {
    "id": "y2ss1-067",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 67",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A borrower takes out a £5000 loan at 1% compound interest per month. At the end of each month, after interest is applied, the borrower repays £200. Let \\(D_{n}\\) denote the debt (£) at the end of month \\(n\\) after the repayment. (a) Write a recurrence for \\(D_{n}\\) with \\(D_{0} = 5000\\). (b) Find the smallest \\(n\\) for which \\(D_{n} < 3000\\). (c) Determine whether the loan will ever be fully repaid and justify your answer.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "applied",
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Convert interest and repayment.",
          "workingLatex": "\\text{interest } \\times 1.01,\\ \\text{repay } 200",
          "explanation": "1% monthly interest multiplies by \\(1.01\\); the £200 repayment is subtracted after."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "D_{n} = 1.01 D_{n-1} - 200,\\quad D_{0} = 5000",
          "explanation": "Interest is applied to the debt, then the repayment reduces it."
        },
        {
          "stepNumber": 3,
          "description": "(b) Iterate the debt.",
          "workingLatex": "D_{1} = 4850,\\ D_{2} = 4698.5,\\ \\ldots,\\ D_{12} \\approx 3097.6,\\ D_{13} \\approx 2928.6",
          "explanation": "Step through each month; the debt first drops below \\(3000\\) at \\(n = 13\\)."
        },
        {
          "stepNumber": 4,
          "description": "(c) Find the equilibrium.",
          "workingLatex": "L = 1.01L - 200 \\Rightarrow L = 20000",
          "explanation": "Set consecutive terms equal."
        },
        {
          "stepNumber": 5,
          "description": "(c) Interpret.",
          "workingLatex": "D_{0} = 5000 < 20000 \\Rightarrow \\text{debt decreases to 0}",
          "explanation": "Starting below the (unstable) equilibrium, the repayment beats the interest each month, so the debt falls and the loan is fully repaid."
        }
      ],
      "finalAnswer": "\\(D_{n} = 1.01 D_{n-1} - 200\\); smallest \\(n = 13\\); loan is fully repaid."
    }
  },
  {
    "id": "y2ss1-068",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 68",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A company's monthly profit is modelled by the recurrence \\(P_{n+1} = 0.9 P_{n} + 5000\\), where \\(P_{n}\\) is the profit (in £) in month \\(n\\). The company made £10,000 profit in month 1. (a) Find the profit in months 2, 3 and 4. (b) Show that the sequence converges and find its limit. (c) The marketing director says \"profit will level off at £50,000 per month.\" Is this claim correct? Justify.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Iterate from \\(P_{1} = 10000\\).",
          "workingLatex": "P_{2} = 0.9(10000) + 5000 = 14000",
          "explanation": "Apply \\(P_{n+1} = 0.9P_n + 5000\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Continue.",
          "workingLatex": "P_{3} = 0.9(14000) + 5000 = 17600,\\quad P_{4} = 0.9(17600) + 5000 = 20840",
          "explanation": "One month at a time."
        },
        {
          "stepNumber": 3,
          "description": "(b) Justify convergence.",
          "workingLatex": "|0.9| < 1",
          "explanation": "Because the multiplier has magnitude below \\(1\\), the influence of the start fades and the sequence converges."
        },
        {
          "stepNumber": 4,
          "description": "(b) Find the limit.",
          "workingLatex": "L = 0.9L + 5000 \\Rightarrow 0.1L = 5000 \\Rightarrow L = 50000",
          "explanation": "Solve the equilibrium equation."
        },
        {
          "stepNumber": 5,
          "description": "(c) Assess the claim.",
          "workingLatex": "\\text{director is correct}",
          "explanation": "The long-term profit is exactly £50,000 per month, so the claim that profit \"levels off at £50,000\" is justified."
        }
      ],
      "finalAnswer": "\\(P_{2} = 14000,\\ P_{3} = 17600,\\ P_{4} = 20840\\); limit £50,000 — director is correct."
    }
  },
  {
    "id": "y2ss1-069",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 69",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A retired person has £30,000 in savings. Each month the bank adds 0.5% interest on the balance, and then the person withdraws £100. Let \\(V_{n}\\) denote the balance (in £) at the end of month \\(n\\). (a) Write a recurrence for \\(V_{n}\\) with \\(V_{0} = 30000\\). (b) Find \\(V_{12}\\) to the nearest penny. (c) Determine whether the savings will ever run out and justify your answer.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "recurrence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Convert interest and withdrawal.",
          "workingLatex": "\\text{interest } \\times 1.005,\\ \\text{withdraw } 100",
          "explanation": "0.5% interest multiplies by \\(1.005\\); £100 is then taken out."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "V_{n} = 1.005 V_{n-1} - 100,\\quad V_{0} = 30000",
          "explanation": "Interest first, then withdrawal."
        },
        {
          "stepNumber": 3,
          "description": "(b) Iterate 12 months.",
          "workingLatex": "V_{1} = 30050,\\ V_{2} \\approx 30100.25,\\ \\ldots,\\ V_{12} \\approx 30616.78",
          "explanation": "Keep full accuracy throughout; \\(V_{12} \\approx \\pounds 30{,}616.78\\)."
        },
        {
          "stepNumber": 4,
          "description": "(c) Find the equilibrium.",
          "workingLatex": "L = 1.005L - 100 \\Rightarrow L = 20000",
          "explanation": "Set consecutive terms equal."
        },
        {
          "stepNumber": 5,
          "description": "(c) Interpret.",
          "workingLatex": "V_{0} = 30000 > 20000 \\Rightarrow \\text{balance grows}",
          "explanation": "Starting above the equilibrium, the interest exceeds the withdrawal, so the balance rises and the savings never run out."
        }
      ],
      "finalAnswer": "\\(V_{12} \\approx £30{,}616.78\\); savings never run out — balance grows to infinity."
    }
  },
  {
    "id": "y2ss1-070",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 70",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "A water tank is emptied and refilled each day. Each day, 20% of the water in the tank at the start of the day is drained and then 5 litres are added. Let \\(V_{n}\\) denote the volume (in litres) at the end of day \\(n\\). Initially the tank contains 100 litres. (a) Write a recurrence for \\(V_{n}\\). (b) Find \\(V_{3}\\) to 2 decimal places. (c) Find the long-term volume the tank approaches.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Convert \"20% drained\".",
          "workingLatex": "\\text{remaining} = 80\\% = 0.8",
          "explanation": "Draining 20% leaves 80% of the water, a \\(\\times 0.8\\) factor."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "V_{n} = 0.8 V_{n-1} + 5,\\quad V_{0} = 100",
          "explanation": "Multiply by \\(0.8\\), then add the \\(5\\) litres."
        },
        {
          "stepNumber": 3,
          "description": "(b) Iterate to \\(V_{3}\\).",
          "workingLatex": "V_{1} = 85,\\ V_{2} = 73,\\ V_{3} = 0.8(73) + 5 = 63.40",
          "explanation": "Day by day."
        },
        {
          "stepNumber": 4,
          "description": "(c) Find the long-term volume.",
          "workingLatex": "L = 0.8L + 5 \\Rightarrow 0.2L = 5 \\Rightarrow L = 25",
          "explanation": "Since \\(|0.8| < 1\\) the volume converges to \\(25\\) litres."
        }
      ],
      "finalAnswer": "\\(V_{n} = 0.8 V_{n-1} + 5\\); \\(V_{3} = 63.40\\) L; long-term 25 L."
    }
  },
  {
    "id": "y2ss1-071",
    "topicRef": "y2ss1",
    "topicTitle": "Sequences 71",
    "difficulty": "Challenge",
    "answerType": "expression",
    "questionText": "An office building has its temperature regulated so that each hour the temperature loses 10% of the difference between the current temperature and the outside temperature of 12°C. If the heating system then adds a fixed 2°C every hour, and the starting temperature is 20°C, model the temperature \\(T_{n}\\) at the end of hour \\(n\\) with a recurrence relation, find \\(T_{3}\\) to 2 decimal places and determine the long-term temperature.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "modelling",
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the two hourly effects.",
          "workingLatex": "\\text{loss} = 0.1(T_{n-1} - 12),\\ \\text{gain} = +2",
          "explanation": "Each hour the temperature loses 10% of its gap above the outside \\(12^{\\circ}\\)C, then a fixed \\(2^{\\circ}\\)C is added."
        },
        {
          "stepNumber": 2,
          "description": "Write the raw recurrence.",
          "workingLatex": "T_{n} = T_{n-1} - 0.1(T_{n-1} - 12) + 2",
          "explanation": "Subtract the loss and add the gain to the previous temperature."
        },
        {
          "stepNumber": 3,
          "description": "Simplify to linear form.",
          "workingLatex": "T_{n} = 0.9 T_{n-1} + 1.2 + 2 = 0.9 T_{n-1} + 3.2",
          "explanation": "Expand \\(-0.1(T_{n-1} - 12) = -0.1T_{n-1} + 1.2\\), then combine constants."
        },
        {
          "stepNumber": 4,
          "description": "Iterate from \\(T_{0} = 20\\).",
          "workingLatex": "T_{1} = 21.20,\\ T_{2} = 22.28,\\ T_{3} \\approx 23.25",
          "explanation": "Apply the rule hour by hour; \\(T_3 \\approx 23.25^{\\circ}\\)C."
        },
        {
          "stepNumber": 5,
          "description": "Find the long-term temperature.",
          "workingLatex": "L = 0.9L + 3.2 \\Rightarrow 0.1L = 3.2 \\Rightarrow L = 32",
          "explanation": "Set consecutive terms equal; the temperature settles at \\(32^{\\circ}\\)C."
        }
      ],
      "finalAnswer": "\\(T_{n} = 0.9 T_{n-1} + 3.2\\); \\(T_{3} \\approx 23.25\\)°C; long-term 32°C."
    }
  }
];
