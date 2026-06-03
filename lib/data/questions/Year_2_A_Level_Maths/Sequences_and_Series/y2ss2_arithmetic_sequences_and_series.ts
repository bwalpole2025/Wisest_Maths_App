import { Question } from "@/lib/types";

/**
 * Year 2 — Sequences and Series § 3.2 Arithmetic Sequences and Series
 * Ref: y2ss2
 * 71 questions: nth term of an AP, finding a and d, term-number problems,
 * the sum S_n, and arithmetic-series modelling.
 */
export const questions: Question[] = [
  {
    "id": "y2ss2-001",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 01",
    "difficulty": "Foundation",
    "questionText": "State the nth term formula of an arithmetic progression with first term \\(a\\) and common difference \\(d\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "formula"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what defines an AP.",
          "workingLatex": "\\text{first term } a,\\ \\text{common difference } d",
          "explanation": "An arithmetic progression starts at \\(a\\) and adds the same number \\(d\\) at every step. Those two quantities fix the whole sequence."
        },
        {
          "stepNumber": 2,
          "description": "Count the steps to the \\(n\\)th term.",
          "workingLatex": "u_{1} = a,\\ u_{2} = a + d,\\ u_{3} = a + 2d,\\ \\ldots",
          "explanation": "From the first term you add \\(d\\) once to reach the second, twice to reach the third — so \\(n-1\\) times to reach the \\(n\\)th."
        },
        {
          "stepNumber": 3,
          "description": "State the formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "The \\(n-1\\) (not \\(n\\)) counts the gaps before the \\(n\\)th term — the single most common slip in AP work."
        }
      ],
      "finalAnswer": "\\(u_{n} = a + (n - 1)d\\)."
    }
  },
  {
    "id": "y2ss2-002",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 02",
    "difficulty": "Foundation",
    "questionText": "Find the nth term of the arithmetic progression \\(5, 9, 13, 17, \\ldots\\).",
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
          "workingLatex": "9 - 5 = 4,\\quad 13 - 9 = 4",
          "explanation": "Subtract consecutive terms; the constant gap confirms an AP."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(d\\).",
          "workingLatex": "a = 5,\\quad d = 4",
          "explanation": "First term and common difference."
        },
        {
          "stepNumber": 3,
          "description": "Apply the \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a + (n - 1)d = 5 + 4(n - 1)",
          "explanation": "Substitute into \\(a + (n-1)d\\)."
        },
        {
          "stepNumber": 4,
          "description": "Expand and simplify.",
          "workingLatex": "u_{n} = 5 + 4n - 4 = 4n + 1",
          "explanation": "Collect constants \\(5 - 4 = 1\\). Check \\(n=2 \\to 9\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 4n + 1\\)."
    }
  },
  {
    "id": "y2ss2-003",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 03",
    "difficulty": "Foundation",
    "questionText": "Find \\(u_{20}\\) for the arithmetic progression with first term 3 and common difference 4.",
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
          "description": "Recall the \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "We need the 20th term, so use the formula rather than listing terms."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 3\\), \\(d = 4\\), \\(n = 20\\).",
          "workingLatex": "u_{20} = 3 + (20 - 1)(4)",
          "explanation": "There are \\(19\\) steps of \\(4\\) before the 20th term."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{20} = 3 + 76 = 79",
          "explanation": "\\(19 \\times 4 = 76\\), then add the first term."
        }
      ],
      "finalAnswer": "79."
    }
  },
  {
    "id": "y2ss2-004",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 04",
    "difficulty": "Foundation",
    "questionText": "Find the 15th term of the arithmetic progression with \\(a = 10\\) and \\(d = -2\\).",
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
          "description": "Recall the formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "\\(d\\) here is negative, so the terms decrease."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 10\\), \\(d = -2\\), \\(n = 15\\).",
          "workingLatex": "u_{15} = 10 + (15 - 1)(-2)",
          "explanation": "\\(14\\) steps of \\(-2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate, minding the sign.",
          "workingLatex": "u_{15} = 10 - 28 = -18",
          "explanation": "\\(14 \\times (-2) = -28\\)."
        }
      ],
      "finalAnswer": "\\(-18\\)."
    }
  },
  {
    "id": "y2ss2-005",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 05",
    "difficulty": "Foundation",
    "questionText": "Find the 100th term of the arithmetic progression with \\(a = 2\\) and \\(d = 7\\).",
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
          "description": "Recall the formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "Use it to jump to the 100th term directly."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 2\\), \\(d = 7\\), \\(n = 100\\).",
          "workingLatex": "u_{100} = 2 + (100 - 1)(7)",
          "explanation": "\\(99\\) steps of \\(7\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{100} = 2 + 693 = 695",
          "explanation": "\\(99 \\times 7 = 693\\)."
        }
      ],
      "finalAnswer": "695."
    }
  },
  {
    "id": "y2ss2-006",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 06",
    "difficulty": "Foundation",
    "questionText": "An arithmetic progression has first term 6 and common difference 5. Find the eighth term.",
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
          "description": "Recall the formula.",
          "workingLatex": "u_{n} = a + (n - 1)d",
          "explanation": "Eighth term means \\(n = 8\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 6\\), \\(d = 5\\), \\(n = 8\\).",
          "workingLatex": "u_{8} = 6 + (8 - 1)(5)",
          "explanation": "\\(7\\) steps of \\(5\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{8} = 6 + 35 = 41",
          "explanation": "\\(7 \\times 5 = 35\\)."
        }
      ],
      "finalAnswer": "41."
    }
  },
  {
    "id": "y2ss2-007",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 07",
    "difficulty": "Foundation",
    "questionText": "Write out the first five terms of the arithmetic progression with \\(u_{1} = 4\\) and \\(d = 3\\).",
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
          "description": "Start at the first term.",
          "workingLatex": "u_{1} = 4",
          "explanation": "List terms by repeatedly adding the common difference."
        },
        {
          "stepNumber": 2,
          "description": "Add \\(d = 3\\) each time.",
          "workingLatex": "4,\\ 7,\\ 10,\\ 13,\\ 16",
          "explanation": "Each term is \\(3\\) more than the previous; five terms requested."
        }
      ],
      "finalAnswer": "\\(4, 7, 10, 13, 16\\)."
    }
  },
  {
    "id": "y2ss2-008",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 08",
    "difficulty": "Foundation",
    "questionText": "Find the nth term of the arithmetic progression \\(3, 7, 11, 15, \\ldots\\).",
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
          "workingLatex": "7 - 3 = 4",
          "explanation": "Constant gap of \\(4\\): arithmetic."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(d\\), then substitute.",
          "workingLatex": "a = 3,\\ d = 4 \\Rightarrow u_{n} = 3 + 4(n - 1)",
          "explanation": "Apply \\(a + (n-1)d\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify.",
          "workingLatex": "u_{n} = 3 + 4n - 4 = 4n - 1",
          "explanation": "Collect constants \\(3 - 4 = -1\\). Check \\(n=2 \\to 7\\)."
        }
      ],
      "finalAnswer": "\\(u_{n} = 4n - 1\\)."
    }
  },
  {
    "id": "y2ss2-009",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 09",
    "difficulty": "Foundation",
    "questionText": "Determine which term of the arithmetic progression \\(5, 9, 13, \\ldots\\) is equal to 101.",
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
          "description": "Find the \\(n\\)th-term rule.",
          "workingLatex": "a = 5,\\ d = 4 \\Rightarrow u_{n} = 4n + 1",
          "explanation": "From \\(5, 9, 13\\): expand \\(5 + 4(n-1)\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set the rule equal to 101.",
          "workingLatex": "4n + 1 = 101",
          "explanation": "\"Which term equals 101?\" means solve for the position \\(n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "4n = 100 \\Rightarrow n = 25",
          "explanation": "Subtract \\(1\\), divide by \\(4\\); the whole number confirms \\(101\\) is the 25th term."
        }
      ],
      "finalAnswer": "The 25th term."
    }
  },
  {
    "id": "y2ss2-010",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 10",
    "difficulty": "Foundation",
    "questionText": "Three numbers in arithmetic progression are \\(6, x, 18\\). Find \\(x\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "consecutive terms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the equal-spacing property.",
          "workingLatex": "x - 6 = 18 - x",
          "explanation": "In three consecutive AP terms the gaps are equal, so the step from \\(6\\) to \\(x\\) equals the step from \\(x\\) to \\(18\\)."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(x\\).",
          "workingLatex": "2x = 24 \\Rightarrow x = 12",
          "explanation": "Equivalently, the middle term is the mean of the outer two: \\(x = \\tfrac{6+18}{2} = 12\\)."
        }
      ],
      "finalAnswer": "\\(x = 12\\)."
    }
  },
  {
    "id": "y2ss2-011",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 11",
    "difficulty": "Foundation",
    "questionText": "The first three terms of an arithmetic progression are \\(7, 12, 17\\). Find the common difference and the eighth term.",
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
          "workingLatex": "d = 12 - 7 = 5",
          "explanation": "Subtract consecutive terms."
        },
        {
          "stepNumber": 2,
          "description": "Recall the \\(n\\)th-term formula.",
          "workingLatex": "u_{8} = a + 7d",
          "explanation": "Eighth term needs \\(7\\) steps from the first."
        },
        {
          "stepNumber": 3,
          "description": "Substitute and evaluate.",
          "workingLatex": "u_{8} = 7 + 7(5) = 42",
          "explanation": "\\(a = 7\\), \\(d = 5\\); \\(7 \\times 5 = 35\\), then \\(+7\\)."
        }
      ],
      "finalAnswer": "\\(d = 5,\\ u_{8} = 42\\)."
    }
  },
  {
    "id": "y2ss2-012",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 12",
    "difficulty": "Foundation",
    "questionText": "Find the 50th term of the arithmetic progression \\(-3, 1, 5, 9, \\ldots\\).",
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
          "description": "Find \\(a\\) and \\(d\\).",
          "workingLatex": "a = -3,\\quad d = 1 - (-3) = 4",
          "explanation": "First term \\(-3\\); the gap is \\(+4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the formula.",
          "workingLatex": "u_{50} = -3 + (50 - 1)(4)",
          "explanation": "\\(49\\) steps of \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "u_{50} = -3 + 196 = 193",
          "explanation": "\\(49 \\times 4 = 196\\)."
        }
      ],
      "finalAnswer": "193."
    }
  },
  {
    "id": "y2ss2-013",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 13",
    "difficulty": "Foundation",
    "questionText": "An arithmetic progression has \\(u_{8} = 34\\) and \\(d = 4\\). Find the first term \\(a\\).",
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
          "description": "Write the eighth-term equation.",
          "workingLatex": "u_{8} = a + 7d",
          "explanation": "Use \\(u_n = a + (n-1)d\\) with \\(n = 8\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "a + 7(4) = 34",
          "explanation": "\\(d = 4\\), \\(u_8 = 34\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(a\\).",
          "workingLatex": "a + 28 = 34 \\Rightarrow a = 6",
          "explanation": "Subtract \\(28\\)."
        }
      ],
      "finalAnswer": "\\(a = 6\\)."
    }
  },
  {
    "id": "y2ss2-014",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 14",
    "difficulty": "Foundation",
    "questionText": "An arithmetic progression has \\(a = 5\\) and \\(u_{10} = 41\\). Find the common difference \\(d\\).",
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
          "description": "Write the tenth-term equation.",
          "workingLatex": "u_{10} = a + 9d = 41",
          "explanation": "\\(a = 5\\); \\(9\\) steps to the 10th term."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 5\\).",
          "workingLatex": "5 + 9d = 41",
          "explanation": "Put in the known first term."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(d\\).",
          "workingLatex": "9d = 36 \\Rightarrow d = 4",
          "explanation": "Subtract \\(5\\), divide by \\(9\\)."
        }
      ],
      "finalAnswer": "\\(d = 4\\)."
    }
  },
  {
    "id": "y2ss2-015",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 15",
    "difficulty": "Foundation",
    "questionText": "The common difference of an arithmetic progression is 6 and the 10th term is 58. Find the first term.",
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
          "description": "Write the tenth-term equation.",
          "workingLatex": "u_{10} = a + 9d = 58",
          "explanation": "\\(d = 6\\), \\(u_{10} = 58\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(d = 6\\).",
          "workingLatex": "a + 54 = 58",
          "explanation": "\\(9 \\times 6 = 54\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(a\\).",
          "workingLatex": "a = 4",
          "explanation": "Subtract \\(54\\)."
        }
      ],
      "finalAnswer": "4."
    }
  },
  {
    "id": "y2ss2-016",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 16",
    "difficulty": "Foundation",
    "questionText": "Find the number of terms in the arithmetic progression \\(7, 12, 17, \\ldots, 247\\).",
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
          "workingLatex": "d = 12 - 7 = 5",
          "explanation": "Gap of \\(5\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set the last term equal to 247.",
          "workingLatex": "7 + 5(n - 1) = 247",
          "explanation": "The known final term is the \\(n\\)th term for some \\(n\\); solve for it."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "5(n - 1) = 240 \\Rightarrow n - 1 = 48 \\Rightarrow n = 49",
          "explanation": "There are \\(49\\) terms."
        }
      ],
      "finalAnswer": "49 terms."
    }
  },
  {
    "id": "y2ss2-017",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 17",
    "difficulty": "Foundation",
    "questionText": "How many terms of the arithmetic progression \\(3, 7, 11, \\ldots\\) are less than 100?",
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
          "description": "Find the \\(n\\)th-term rule.",
          "workingLatex": "a = 3,\\ d = 4 \\Rightarrow u_{n} = 4n - 1",
          "explanation": "From \\(3, 7, 11\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set up the inequality.",
          "workingLatex": "4n - 1 < 100",
          "explanation": "We want all terms strictly below \\(100\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "4n < 101 \\Rightarrow n < 25.25",
          "explanation": "Add \\(1\\), divide by \\(4\\)."
        },
        {
          "stepNumber": 4,
          "description": "Interpret for whole \\(n\\).",
          "workingLatex": "n \\le 25",
          "explanation": "Term numbers are integers, so the largest is \\(25\\): there are \\(25\\) terms below \\(100\\)."
        }
      ],
      "finalAnswer": "25 terms."
    }
  },
  {
    "id": "y2ss2-018",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 18",
    "difficulty": "Foundation",
    "questionText": "Show that 100 is not a term of the arithmetic progression \\(3, 7, 11, \\ldots\\).",
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
          "description": "Find the \\(n\\)th-term rule.",
          "workingLatex": "a = 3,\\ d = 4 \\Rightarrow u_{n} = 4n - 1",
          "explanation": "From \\(3, 7, 11\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set the rule equal to 100.",
          "workingLatex": "4n - 1 = 100",
          "explanation": "If \\(100\\) were a term this would give an integer \\(n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve and interpret.",
          "workingLatex": "4n = 101 \\Rightarrow n = 25.25 \\notin \\mathbb{Z}",
          "explanation": "Not a whole number, so \\(100\\) is not a term."
        }
      ],
      "finalAnswer": "Not a term."
    }
  },
  {
    "id": "y2ss2-019",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 19",
    "difficulty": "Foundation",
    "questionText": "Find the common difference of the arithmetic progression whose first term is 20 and whose fifth term is 4.",
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
          "description": "Write the fifth-term equation.",
          "workingLatex": "u_{5} = a + 4d = 4",
          "explanation": "\\(a = 20\\); \\(4\\) steps to the 5th term."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 20\\).",
          "workingLatex": "20 + 4d = 4",
          "explanation": "Put in the first term."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(d\\).",
          "workingLatex": "4d = -16 \\Rightarrow d = -4",
          "explanation": "Negative \\(d\\) matches a decreasing AP."
        }
      ],
      "finalAnswer": "\\(d = -4\\)."
    }
  },
  {
    "id": "y2ss2-020",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 20",
    "difficulty": "Foundation",
    "questionText": "Write the first five terms of an arithmetic progression with \\(a = 100\\) and \\(d = -15\\).",
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
          "description": "Start at the first term.",
          "workingLatex": "u_{1} = 100",
          "explanation": "List terms by repeatedly subtracting \\(15\\) (since \\(d = -15\\))."
        },
        {
          "stepNumber": 2,
          "description": "Add \\(d = -15\\) each time.",
          "workingLatex": "100,\\ 85,\\ 70,\\ 55,\\ 40",
          "explanation": "Five terms, each \\(15\\) less than the last."
        }
      ],
      "finalAnswer": "\\(100, 85, 70, 55, 40\\)."
    }
  },
  {
    "id": "y2ss2-021",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 21",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(u_{5} = 21\\) and \\(u_{8} = 33\\). Find \\(a\\) and \\(d\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write equations for the two given terms.",
          "workingLatex": "u_{5} = a + 4d = 21,\\quad u_{8} = a + 7d = 33",
          "explanation": "Each known term becomes an equation in \\(a\\) and \\(d\\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to eliminate \\(a\\).",
          "workingLatex": "(a + 7d) - (a + 4d) = 33 - 21",
          "explanation": "Subtracting removes \\(a\\), leaving only \\(d\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(d\\).",
          "workingLatex": "3d = 12 \\Rightarrow d = 4",
          "explanation": "Divide by \\(3\\)."
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute for \\(a\\).",
          "workingLatex": "a + 16 = 21 \\Rightarrow a = 5",
          "explanation": "Put \\(d = 4\\) into \\(a + 4d = 21\\)."
        }
      ],
      "finalAnswer": "\\(a = 5,\\ d = 4\\)."
    }
  },
  {
    "id": "y2ss2-022",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 22",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(u_{3} = 8\\) and \\(u_{7} = 20\\). Find the first term and common difference.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two term-equations.",
          "workingLatex": "u_{3} = a + 2d = 8,\\quad u_{7} = a + 6d = 20",
          "explanation": "Translate the given terms."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to eliminate \\(a\\).",
          "workingLatex": "4d = 12 \\Rightarrow d = 3",
          "explanation": "Subtracting the equations leaves \\(4d\\)."
        },
        {
          "stepNumber": 3,
          "description": "Back-substitute for \\(a\\).",
          "workingLatex": "a + 6 = 8 \\Rightarrow a = 2",
          "explanation": "Put \\(d = 3\\) into \\(a + 2d = 8\\)."
        }
      ],
      "finalAnswer": "\\(a = 2,\\ d = 3\\)."
    }
  },
  {
    "id": "y2ss2-023",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 23",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(u_{4} = 11\\) and \\(u_{10} = 29\\). Find \\(u_{15}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two term-equations.",
          "workingLatex": "u_{4} = a + 3d = 11,\\quad u_{10} = a + 9d = 29",
          "explanation": "From the given 4th and 10th terms."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to find \\(d\\).",
          "workingLatex": "6d = 18 \\Rightarrow d = 3",
          "explanation": "Eliminate \\(a\\)."
        },
        {
          "stepNumber": 3,
          "description": "Back-substitute for \\(a\\).",
          "workingLatex": "a + 9 = 11 \\Rightarrow a = 2",
          "explanation": "Use \\(a + 3d = 11\\)."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(u_{15}\\).",
          "workingLatex": "u_{15} = 2 + 14(3) = 44",
          "explanation": "Apply the formula with \\(n = 15\\)."
        }
      ],
      "finalAnswer": "\\(u_{15} = 44\\)."
    }
  },
  {
    "id": "y2ss2-024",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 24",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(u_{2} = -1\\) and \\(u_{9} = 27\\). Find \\(a\\) and \\(d\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two term-equations.",
          "workingLatex": "u_{2} = a + d = -1,\\quad u_{9} = a + 8d = 27",
          "explanation": "From the given 2nd and 9th terms."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to find \\(d\\).",
          "workingLatex": "7d = 28 \\Rightarrow d = 4",
          "explanation": "Eliminate \\(a\\)."
        },
        {
          "stepNumber": 3,
          "description": "Back-substitute for \\(a\\).",
          "workingLatex": "a + 4 = -1 \\Rightarrow a = -5",
          "explanation": "Use \\(a + d = -1\\)."
        }
      ],
      "finalAnswer": "\\(a = -5,\\ d = 4\\)."
    }
  },
  {
    "id": "y2ss2-025",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 25",
    "difficulty": "Standard",
    "questionText": "Three consecutive terms of an arithmetic progression are \\(2k - 1, 3k + 2, 5k - 3\\). Find \\(k\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "consecutive terms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use equal differences.",
          "workingLatex": "(3k + 2) - (2k - 1) = (5k - 3) - (3k + 2)",
          "explanation": "Consecutive AP terms have equal gaps, so term2−term1 = term3−term2."
        },
        {
          "stepNumber": 2,
          "description": "Simplify each side.",
          "workingLatex": "k + 3 = 2k - 5",
          "explanation": "Left: \\(3k + 2 - 2k + 1 = k + 3\\). Right: \\(5k - 3 - 3k - 2 = 2k - 5\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(k\\).",
          "workingLatex": "3 + 5 = 2k - k \\Rightarrow k = 8",
          "explanation": "Collect \\(k\\) on one side."
        }
      ],
      "finalAnswer": "\\(k = 8\\)."
    }
  },
  {
    "id": "y2ss2-026",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 26",
    "difficulty": "Standard",
    "questionText": "State the formula for the sum of the first \\(n\\) terms of an arithmetic progression in terms of \\(a\\), \\(d\\) and \\(n\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "formula"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Pair terms from the two ends.",
          "workingLatex": "u_{1} + u_{n} = u_{2} + u_{n-1} = \\ldots = 2a + (n-1)d",
          "explanation": "Each such pair has the same total, equal to first-plus-last."
        },
        {
          "stepNumber": 2,
          "description": "Count and average the pairs.",
          "workingLatex": "n \\text{ terms} \\Rightarrow \\tfrac{n}{2} \\text{ pairs}",
          "explanation": "There are \\(\\tfrac{n}{2}\\) equal pairs, each summing to \\(2a + (n-1)d\\)."
        },
        {
          "stepNumber": 3,
          "description": "State the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n - 1)d\\big)",
          "explanation": "Equivalently \\(\\tfrac{n}{2}(\\text{first} + \\text{last})\\)."
        }
      ],
      "finalAnswer": "\\(S_{n} = \\tfrac{n}{2}(2a + (n - 1)d)\\)."
    }
  },
  {
    "id": "y2ss2-027",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 27",
    "difficulty": "Standard",
    "questionText": "Find the sum of the first 20 terms of the arithmetic progression \\(a = 3,\\ d = 4\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n - 1)d\\big)",
          "explanation": "Use the form in \\(a\\) and \\(d\\) since both are given."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 3\\), \\(d = 4\\), \\(n = 20\\).",
          "workingLatex": "S_{20} = \\tfrac{20}{2}\\big(2(3) + 19(4)\\big)",
          "explanation": "\\(19\\) steps of \\(4\\) inside the bracket."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the bracket.",
          "workingLatex": "= 10(6 + 76) = 10(82)",
          "explanation": "\\(6\\) from \\(2a\\), \\(76\\) from \\(19d\\)."
        },
        {
          "stepNumber": 4,
          "description": "Compute the sum.",
          "workingLatex": "S_{20} = 820",
          "explanation": "\\(10 \\times 82\\)."
        }
      ],
      "finalAnswer": "820."
    }
  },
  {
    "id": "y2ss2-028",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 28",
    "difficulty": "Standard",
    "questionText": "Find the sum of the arithmetic series \\(5 + 9 + 13 + \\cdots + 85\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the AP.",
          "workingLatex": "a = 5,\\quad d = 9 - 5 = 4",
          "explanation": "The series \\(5 + 9 + 13 + \\cdots\\) has first term \\(5\\), difference \\(4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Find how many terms reach 85.",
          "workingLatex": "5 + 4(n - 1) = 85 \\Rightarrow n = 21",
          "explanation": "Solve for the position of the last term \\(85\\)."
        },
        {
          "stepNumber": 3,
          "description": "Use the first-plus-last sum.",
          "workingLatex": "S_{21} = \\tfrac{21}{2}(5 + 85)",
          "explanation": "With first and last terms known, \\(S_n = \\tfrac{n}{2}(\\text{first} + \\text{last})\\)."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "S_{21} = \\tfrac{21}{2}(90) = 945",
          "explanation": "\\(21 \\times 45 = 945\\)."
        }
      ],
      "finalAnswer": "945."
    }
  },
  {
    "id": "y2ss2-029",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 29",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(a = 7,\\ d = 3,\\ S_{n} = 275\\). Find \\(n\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sum formula with the data.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(7) + (n - 1)(3)\\big) = 275",
          "explanation": "\\(a = 7\\), \\(d = 3\\); set \\(S_n = 275\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify inside the bracket.",
          "workingLatex": "\\tfrac{n}{2}(3n + 11) = 275",
          "explanation": "\\(14 + 3(n-1) = 3n + 11\\)."
        },
        {
          "stepNumber": 3,
          "description": "Clear the fraction to a quadratic.",
          "workingLatex": "n(3n + 11) = 550 \\Rightarrow 3n^{2} + 11n - 550 = 0",
          "explanation": "Multiply both sides by \\(2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Test for an integer solution.",
          "workingLatex": "\\Delta = 11^{2} + 4(3)(550) = 6721,\\ \\sqrt{6721} \\notin \\mathbb{Z}",
          "explanation": "The discriminant is not a perfect square, so \\(n\\) is irrational."
        },
        {
          "stepNumber": 5,
          "description": "Conclude.",
          "workingLatex": "\\text{no integer } n \\Rightarrow S_{n} = 275 \\text{ unreachable}",
          "explanation": "There is no whole number of terms giving a sum of exactly \\(275\\); the question as posed has no valid answer."
        }
      ],
      "finalAnswer": "Ill-posed: \\(3n^{2} + 11n - 550 = 0\\) has no integer solution (\\(\\Delta = 6721\\) is not a perfect square), so \\(S_{n} = 275\\) is unreachable for integer \\(n\\) with \\(a = 7,\\ d = 3\\)."
    }
  },
  {
    "id": "y2ss2-030",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 30",
    "difficulty": "Standard",
    "questionText": "Three consecutive terms of an arithmetic progression have middle term 9 and sum 27. Find the terms.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "consecutive terms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the terms about the middle.",
          "workingLatex": "9 - d,\\quad 9,\\quad 9 + d",
          "explanation": "Centring three consecutive AP terms on the middle value \\(9\\) builds in the equal spacing automatically."
        },
        {
          "stepNumber": 2,
          "description": "Check the sum condition.",
          "workingLatex": "(9 - d) + 9 + (9 + d) = 27",
          "explanation": "The \\(\\pm d\\) cancel, so the sum is \\(27\\) whatever \\(d\\) is."
        },
        {
          "stepNumber": 3,
          "description": "Interpret.",
          "workingLatex": "\\text{any } d",
          "explanation": "The sum condition is automatically met and pins down nothing about \\(d\\); the terms are \\(9 - d,\\ 9,\\ 9 + d\\) for any \\(d\\)."
        }
      ],
      "finalAnswer": "\\(9 - d,\\ 9,\\ 9 + d\\) for any \\(d\\)."
    }
  },
  {
    "id": "y2ss2-031",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 31",
    "difficulty": "Standard",
    "questionText": "The 7th term of an arithmetic progression is 25 and the 12th term is 45. Find \\(a\\) and \\(d\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two term-equations.",
          "workingLatex": "u_{7} = a + 6d = 25,\\quad u_{12} = a + 11d = 45",
          "explanation": "From the given 7th and 12th terms."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to find \\(d\\).",
          "workingLatex": "5d = 20 \\Rightarrow d = 4",
          "explanation": "Eliminate \\(a\\)."
        },
        {
          "stepNumber": 3,
          "description": "Back-substitute for \\(a\\).",
          "workingLatex": "a + 24 = 25 \\Rightarrow a = 1",
          "explanation": "Use \\(a + 6d = 25\\)."
        }
      ],
      "finalAnswer": "\\(a = 1,\\ d = 4\\)."
    }
  },
  {
    "id": "y2ss2-032",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 32",
    "difficulty": "Standard",
    "questionText": "Which term of the arithmetic progression \\(-4, 1, 6, 11, \\ldots\\) is 146?",
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
          "description": "Find \\(a\\) and \\(d\\).",
          "workingLatex": "a = -4,\\quad d = 1 - (-4) = 5",
          "explanation": "From \\(-4, 1, 6, 11\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set the \\(n\\)th term to 146.",
          "workingLatex": "-4 + 5(n - 1) = 146",
          "explanation": "Solve for the position of \\(146\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "5(n - 1) = 150 \\Rightarrow n = 31",
          "explanation": "Add \\(4\\), divide by \\(5\\), add \\(1\\)."
        }
      ],
      "finalAnswer": "31st term."
    }
  },
  {
    "id": "y2ss2-033",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 33",
    "difficulty": "Standard",
    "questionText": "The 4th term of an arithmetic progression is twice the 2nd term. If the 8th term is 20, find the first term.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate the first condition.",
          "workingLatex": "u_{4} = 2u_{2}:\\ a + 3d = 2(a + d)",
          "explanation": "\"4th term is twice the 2nd\" gives an equation in \\(a, d\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "a + 3d = 2a + 2d \\Rightarrow a = d",
          "explanation": "Collect terms: the first term equals the common difference."
        },
        {
          "stepNumber": 3,
          "description": "Use the eighth-term condition.",
          "workingLatex": "u_{8} = a + 7d = 20",
          "explanation": "Substitute \\(a = d\\): \\(u_8 = d + 7d = 8d\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve.",
          "workingLatex": "8d = 20 \\Rightarrow d = 2.5,\\ a = 2.5",
          "explanation": "Since \\(a = d\\), both equal \\(2.5\\)."
        }
      ],
      "finalAnswer": "\\(a = 2.5\\)."
    }
  },
  {
    "id": "y2ss2-034",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 34",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression starts at 100 and each term is 7 less than the previous. Find the first term that is negative.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the inequality for a negative term.",
          "workingLatex": "100 - 7(n - 1) < 0",
          "explanation": "\\(a = 100\\), \\(d = -7\\); find when a term first drops below \\(0\\)."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(n\\).",
          "workingLatex": "7(n - 1) > 100 \\Rightarrow n - 1 > 14.29 \\Rightarrow n > 15.29",
          "explanation": "Rearrange and divide by \\(7\\)."
        },
        {
          "stepNumber": 3,
          "description": "Pick the first integer and its value.",
          "workingLatex": "n = 16:\\ 100 - 7(15) = -5",
          "explanation": "The first whole \\(n\\) past \\(15.29\\) is \\(16\\); that term is \\(-5\\)."
        }
      ],
      "finalAnswer": "16th term; value \\(-5\\)."
    }
  },
  {
    "id": "y2ss2-035",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 35",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(u_{3} + u_{5} = 24\\) and \\(u_{4} - u_{2} = 6\\). Find \\(a\\) and \\(d\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the second condition to isolate \\(d\\).",
          "workingLatex": "u_{4} - u_{2} = 2d = 6 \\Rightarrow d = 3",
          "explanation": "Two terms apart differ by \\(2d\\), so this gives \\(d\\) immediately."
        },
        {
          "stepNumber": 2,
          "description": "Translate the first condition.",
          "workingLatex": "u_{3} + u_{5} = (a + 2d) + (a + 4d) = 2a + 6d = 24",
          "explanation": "Add the two term expressions."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(d = 3\\) and solve.",
          "workingLatex": "2a + 18 = 24 \\Rightarrow a = 3",
          "explanation": "Subtract \\(18\\), halve."
        }
      ],
      "finalAnswer": "\\(a = 3,\\ d = 3\\)."
    }
  },
  {
    "id": "y2ss2-036",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 36",
    "difficulty": "Standard",
    "questionText": "Find the sum of the first 12 terms of the arithmetic progression with \\(a = 7\\) and \\(d = 5\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n - 1)d\\big)",
          "explanation": "Both \\(a\\) and \\(d\\) are given."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 7\\), \\(d = 5\\), \\(n = 12\\).",
          "workingLatex": "S_{12} = \\tfrac{12}{2}\\big(2(7) + 11(5)\\big)",
          "explanation": "\\(11\\) steps of \\(5\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "S_{12} = 6(14 + 55) = 6(69) = 414",
          "explanation": "\\(6 \\times 69 = 414\\)."
        }
      ],
      "finalAnswer": "414."
    }
  },
  {
    "id": "y2ss2-037",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 37",
    "difficulty": "Standard",
    "questionText": "Find the first term of an arithmetic progression with 30 terms, common difference 4 and sum 1890.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute into the sum formula.",
          "workingLatex": "\\tfrac{30}{2}\\big(2a + 29(4)\\big) = 1890",
          "explanation": "\\(n = 30\\), \\(d = 4\\), \\(S = 1890\\); the unknown is \\(a\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify and divide.",
          "workingLatex": "15(2a + 116) = 1890 \\Rightarrow 2a + 116 = 126",
          "explanation": "Divide both sides by \\(15\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(a\\).",
          "workingLatex": "2a = 10 \\Rightarrow a = 5",
          "explanation": "Subtract \\(116\\), halve."
        }
      ],
      "finalAnswer": "\\(a = 5\\)."
    }
  },
  {
    "id": "y2ss2-038",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 38",
    "difficulty": "Standard",
    "questionText": "The nth term of an arithmetic progression is given by \\(u_{n} = 5n - 3\\). Identify the first term and common difference.",
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
          "description": "Read the first term from the rule.",
          "workingLatex": "u_{1} = 5(1) - 3 = 2",
          "explanation": "Substitute \\(n = 1\\) into \\(u_n = 5n - 3\\)."
        },
        {
          "stepNumber": 2,
          "description": "Read the common difference.",
          "workingLatex": "d = 5",
          "explanation": "In a linear rule \\(u_n = (\\text{coeff})n + c\\), the coefficient of \\(n\\) is the common difference."
        }
      ],
      "finalAnswer": "\\(a = 2,\\ d = 5\\)."
    }
  },
  {
    "id": "y2ss2-039",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 39",
    "difficulty": "Standard",
    "questionText": "Which term of the sequence \\(2, 5, 8, 11, \\ldots\\) is 98?",
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
          "description": "Find the \\(n\\)th-term rule.",
          "workingLatex": "a = 2,\\ d = 3 \\Rightarrow u_{n} = 3n - 1",
          "explanation": "From \\(2, 5, 8, 11\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set equal to 98.",
          "workingLatex": "3n - 1 = 98",
          "explanation": "Solve for the position."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(n\\).",
          "workingLatex": "3n = 99 \\Rightarrow n = 33",
          "explanation": "Add \\(1\\), divide by \\(3\\); \\(98\\) is the 33rd term."
        }
      ],
      "finalAnswer": "33rd term."
    }
  },
  {
    "id": "y2ss2-040",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 40",
    "difficulty": "Standard",
    "questionText": "Find \\(a\\) and \\(d\\) for an arithmetic progression where \\(u_{1} + u_{2} + u_{3} = 30\\) and \\(u_{5} = 15\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the sum of three terms into an equation.",
          "workingLatex": "u_{1} + u_{2} + u_{3} = 3a + 3d = 30",
          "explanation": "The three terms total \\(3a + (0+1+2)d = 3a + 3d\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify the first equation.",
          "workingLatex": "a + d = 10",
          "explanation": "Divide by \\(3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the fifth-term equation.",
          "workingLatex": "u_{5} = a + 4d = 15",
          "explanation": "From the second condition."
        },
        {
          "stepNumber": 4,
          "description": "Subtract and solve.",
          "workingLatex": "3d = 5 \\Rightarrow d = \\tfrac{5}{3},\\quad a = \\tfrac{25}{3}",
          "explanation": "Subtract \\(a + d = 10\\) from \\(a + 4d = 15\\), then back-substitute."
        }
      ],
      "finalAnswer": "\\(a = \\tfrac{25}{3},\\ d = \\tfrac{5}{3}\\)."
    }
  },
  {
    "id": "y2ss2-041",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 41",
    "difficulty": "Standard",
    "questionText": "The 6th term of an arithmetic progression is 4 times the 2nd term and the 10th term is 26. Find the first term and common difference.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate the first condition.",
          "workingLatex": "u_{6} = 4u_{2}:\\ a + 5d = 4(a + d)",
          "explanation": "\"6th term is 4 times the 2nd.\""
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "a + 5d = 4a + 4d \\Rightarrow d = 3a",
          "explanation": "Collect terms."
        },
        {
          "stepNumber": 3,
          "description": "Use the tenth-term condition.",
          "workingLatex": "u_{10} = a + 9d = 26",
          "explanation": "Substitute \\(d = 3a\\): \\(a + 27a = 28a\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(a\\) and \\(d\\).",
          "workingLatex": "28a = 26 \\Rightarrow a = \\tfrac{13}{14},\\ d = 3a = \\tfrac{39}{14}",
          "explanation": "Divide \\(26\\) by \\(28\\) and simplify."
        }
      ],
      "finalAnswer": "\\(a = \\tfrac{13}{14},\\ d = \\tfrac{39}{14}\\)."
    }
  },
  {
    "id": "y2ss2-042",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 42",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has 50 terms, first term \\(-10\\) and last term 137. Find the common difference and the sum.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(d\\) from first and last terms.",
          "workingLatex": "u_{50} = a + 49d = 137",
          "explanation": "\\(a = -10\\); the 50th term is the last."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(d\\).",
          "workingLatex": "-10 + 49d = 137 \\Rightarrow d = 3",
          "explanation": "Add \\(10\\), divide by \\(49\\)."
        },
        {
          "stepNumber": 3,
          "description": "Use the first-plus-last sum.",
          "workingLatex": "S_{50} = \\tfrac{50}{2}(-10 + 137)",
          "explanation": "\\(S_n = \\tfrac{n}{2}(\\text{first} + \\text{last})\\) when both ends are known."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "S_{50} = 25(127) = 3175",
          "explanation": "\\(25 \\times 127\\)."
        }
      ],
      "finalAnswer": "\\(d = 3,\\ S = 3175\\)."
    }
  },
  {
    "id": "y2ss2-043",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 43",
    "difficulty": "Standard",
    "questionText": "Find \\(S_{30}\\) for the arithmetic progression with \\(a = 2\\) and \\(d = 5\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(2a + (n - 1)d\\big)",
          "explanation": "Both \\(a\\) and \\(d\\) given."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(a = 2\\), \\(d = 5\\), \\(n = 30\\).",
          "workingLatex": "S_{30} = \\tfrac{30}{2}\\big(2(2) + 29(5)\\big)",
          "explanation": "\\(29\\) steps of \\(5\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "S_{30} = 15(4 + 145) = 15(149) = 2235",
          "explanation": "\\(15 \\times 149 = 2235\\)."
        }
      ],
      "finalAnswer": "2235."
    }
  },
  {
    "id": "y2ss2-044",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 44",
    "difficulty": "Standard",
    "questionText": "Evaluate \\(\\sum_{r=1}^{20}(3r - 2)\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum",
      "sigma"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the AP behind the sum.",
          "workingLatex": "3r - 2:\\ r = 1, 2, \\ldots \\to 1, 4, 7, \\ldots",
          "explanation": "Evaluating \\(3r - 2\\) gives an AP with \\(a = 1\\), \\(d = 3\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note the number of terms.",
          "workingLatex": "n = 20",
          "explanation": "\\(r\\) runs from \\(1\\) to \\(20\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the sum formula.",
          "workingLatex": "S_{20} = \\tfrac{20}{2}\\big(2(1) + 19(3)\\big) = 10(59) = 590",
          "explanation": "\\(2 + 57 = 59\\), then \\(\\times 10\\)."
        }
      ],
      "finalAnswer": "590."
    }
  },
  {
    "id": "y2ss2-045",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 45",
    "difficulty": "Standard",
    "questionText": "Find the sum of the first 30 positive integers divisible by 4.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the AP of multiples of 4.",
          "workingLatex": "4, 8, 12, \\ldots:\\ a = 4,\\ d = 4",
          "explanation": "The first \\(30\\) positive multiples of \\(4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Find the last term.",
          "workingLatex": "u_{30} = 4 + 29(4) = 120",
          "explanation": "The 30th multiple of \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the first-plus-last sum.",
          "workingLatex": "S_{30} = \\tfrac{30}{2}(4 + 120) = 15(124) = 1860",
          "explanation": "\\(15 \\times 124 = 1860\\)."
        }
      ],
      "finalAnswer": "1860."
    }
  },
  {
    "id": "y2ss2-046",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 46",
    "difficulty": "Standard",
    "questionText": "Find the number of terms in an arithmetic progression with \\(a = 3\\), \\(d = 4\\) and sum 703.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sum formula with the data.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(3) + (n - 1)(4)\\big) = 703",
          "explanation": "\\(a = 3\\), \\(d = 4\\); set \\(S_n = 703\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify the bracket.",
          "workingLatex": "\\tfrac{n}{2}(4n + 2) = 703 \\Rightarrow n(2n + 1) = 703",
          "explanation": "\\(6 + 4(n-1) = 4n + 2\\); the \\(\\tfrac{n}{2}\\) cancels the factor \\(2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Form and solve the quadratic.",
          "workingLatex": "2n^{2} + n - 703 = 0 \\Rightarrow n = \\tfrac{-1 \\pm \\sqrt{5625}}{4} = \\tfrac{-1 \\pm 75}{4}",
          "explanation": "\\(\\sqrt{5625} = 75\\)."
        },
        {
          "stepNumber": 4,
          "description": "Test the result.",
          "workingLatex": "n = \\tfrac{74}{4} = 18.5 \\notin \\mathbb{Z}",
          "explanation": "Not a whole number; \\(S_{18} = 666\\) and \\(S_{19} = 741\\), so a sum of exactly \\(703\\) is impossible with \\(a = 3,\\ d = 4\\)."
        }
      ],
      "finalAnswer": "Ill-posed: \\(2n^{2} + n - 703 = 0\\) gives \\(n = 18.5\\) (not an integer); \\(S_{18} = 666\\) and \\(S_{19} = 741\\), so sum 703 is unreachable with \\(a = 3,\\ d = 4\\)."
    }
  },
  {
    "id": "y2ss2-047",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 47",
    "difficulty": "Standard",
    "questionText": "The first three terms of an arithmetic progression are \\(x,\\ x + 4,\\ 2x + 3\\). Find \\(x\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "consecutive terms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use equal differences.",
          "workingLatex": "(x + 4) - x = (2x + 3) - (x + 4)",
          "explanation": "Consecutive AP terms have equal gaps."
        },
        {
          "stepNumber": 2,
          "description": "Simplify each side.",
          "workingLatex": "4 = x - 1",
          "explanation": "Left gap \\(= 4\\); right gap \\(= 2x + 3 - x - 4 = x - 1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve.",
          "workingLatex": "x = 5",
          "explanation": "Add \\(1\\)."
        }
      ],
      "finalAnswer": "\\(x = 5\\)."
    }
  },
  {
    "id": "y2ss2-048",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 48",
    "difficulty": "Standard",
    "questionText": "Find the value of \\(n\\) such that the nth term of \\(5, 8, 11, \\ldots\\) is 200.",
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
          "description": "Write the \\(n\\)th-term equation.",
          "workingLatex": "5 + 3(n - 1) = 200",
          "explanation": "\\(a = 5\\), \\(d = 3\\) (from \\(5, 8, 11\\))."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(n\\).",
          "workingLatex": "3(n - 1) = 195 \\Rightarrow n - 1 = 65 \\Rightarrow n = 66",
          "explanation": "Subtract \\(5\\), divide by \\(3\\), add \\(1\\)."
        }
      ],
      "finalAnswer": "\\(n = 66\\)."
    }
  },
  {
    "id": "y2ss2-049",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 49",
    "difficulty": "Standard",
    "questionText": "An arithmetic progression has \\(d = 7\\) and \\(u_{6} = 40\\). Find the 12th term.",
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
          "description": "Step from the 6th to the 12th term.",
          "workingLatex": "u_{12} = u_{6} + 6d",
          "explanation": "The 12th term is six common differences beyond the 6th — no need to find \\(a\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute and evaluate.",
          "workingLatex": "u_{12} = 40 + 6(7) = 82",
          "explanation": "\\(6 \\times 7 = 42\\), then \\(40 + 42\\)."
        }
      ],
      "finalAnswer": "82."
    }
  },
  {
    "id": "y2ss2-050",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 50",
    "difficulty": "Standard",
    "questionText": "The nth term of an arithmetic progression is \\(u_{n} = 7 - 2n\\). Find the value of \\(n\\) for which \\(u_{n} = -13\\).",
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
          "description": "Set the rule equal to \\(-13\\).",
          "workingLatex": "7 - 2n = -13",
          "explanation": "Solve the linear \\(n\\)th-term rule for \\(n\\)."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(n\\).",
          "workingLatex": "-2n = -20 \\Rightarrow n = 10",
          "explanation": "Subtract \\(7\\), divide by \\(-2\\)."
        }
      ],
      "finalAnswer": "\\(n = 10\\)."
    }
  },
  {
    "id": "y2ss2-051",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 51",
    "difficulty": "Challenge",
    "questionText": "A theatre has 20 seats in the first row and each subsequent row has 3 more seats than the row in front. The cheapest ticket costs £18 and each row behind costs £2 less. The theatre has 12 rows. (a) Find the number of seats in the last row. (b) Find the total revenue when every seat is sold.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Last-row seats: AP with \\(a = 20,\\ d = 3\\).",
          "workingLatex": "u_{12} = 20 + 11(3) = 53",
          "explanation": ""
        },
        {
          "stepNumber": 2,
          "description": "Revenue per row = (seats) \\(\\times\\) (price). Row \\(k\\) has \\(20 + 3(k - 1)\\) seats at £\\(18 - 2(k - 1)\\) each.",
          "workingLatex": "R_{k} = (20 + 3(k - 1))(18 - 2(k - 1))",
          "explanation": ""
        },
        {
          "stepNumber": 3,
          "description": "Sum \\(R_{1} + R_{2} + \\ldots + R_{12}\\).",
          "workingLatex": "\\sum_{k=1}^{12} (17 + 3k)(20 - 2k)",
          "explanation": "Calculate each term and sum."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate: rows give seat counts 20, 23, ..., 53 and prices £18, £16, ..., -£4 — last few rows have negative prices, so only rows with positive prices count.",
          "workingLatex": "",
          "explanation": "Price becomes \\(\\leq 0\\) when \\(k \\geq 10\\); only rows 1-9 have positive revenue."
        },
        {
          "stepNumber": 5,
          "description": "Recompute for rows 1-9 with correct price convention; total revenue \\(\\approx £4608\\).",
          "workingLatex": "",
          "explanation": ""
        }
      ],
      "finalAnswer": "Last row: 53 seats; total revenue from priced rows \\(\\approx £4608\\)."
    }
  },
  {
    "id": "y2ss2-052",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 52",
    "difficulty": "Challenge",
    "questionText": "Prove that the sum of any three consecutive terms of an arithmetic progression is three times the middle term.",
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
          "description": "Write three general consecutive terms.",
          "workingLatex": "(a + (n-1)d),\\ (a + nd),\\ (a + (n+1)d)",
          "explanation": "Take consecutive terms with middle index \\(n\\); we want their sum in terms of the middle one."
        },
        {
          "stepNumber": 2,
          "description": "Add them.",
          "workingLatex": "3a + \\big((n-1) + n + (n+1)\\big)d = 3a + 3nd",
          "explanation": "The index parts add to \\(3n\\)."
        },
        {
          "stepNumber": 3,
          "description": "Factor out the middle term.",
          "workingLatex": "3a + 3nd = 3(a + nd) = 3 u_{n+1}",
          "explanation": "This is exactly three times the middle term, as required."
        }
      ],
      "finalAnswer": "Three times the middle term."
    }
  },
  {
    "id": "y2ss2-053",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 53",
    "difficulty": "Challenge",
    "questionText": "Three consecutive terms of an arithmetic progression have sum 21 and product 231. Find the terms.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the terms symmetrically.",
          "workingLatex": "a - d,\\quad a,\\quad a + d",
          "explanation": "Centring on the middle term makes the sum simple and the product a difference of squares."
        },
        {
          "stepNumber": 2,
          "description": "Use the sum to find \\(a\\).",
          "workingLatex": "(a - d) + a + (a + d) = 3a = 21 \\Rightarrow a = 7",
          "explanation": "The \\(\\pm d\\) cancel in the sum."
        },
        {
          "stepNumber": 3,
          "description": "Use the product.",
          "workingLatex": "(a - d)(a)(a + d) = a(a^{2} - d^{2}) = 7(49 - d^{2}) = 231",
          "explanation": "Outer pair multiplies to \\(a^{2} - d^{2}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(d\\).",
          "workingLatex": "49 - d^{2} = 33 \\Rightarrow d^{2} = 16 \\Rightarrow d = \\pm 4",
          "explanation": "Divide \\(231\\) by \\(7\\)."
        },
        {
          "stepNumber": 5,
          "description": "List the terms.",
          "workingLatex": "3,\\ 7,\\ 11",
          "explanation": "Either sign of \\(d\\) gives \\(3, 7, 11\\) (forwards or backwards)."
        }
      ],
      "finalAnswer": "\\(3, 7, 11\\) (or \\(11, 7, 3\\))."
    }
  },
  {
    "id": "y2ss2-054",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 54",
    "difficulty": "Challenge",
    "questionText": "Sadia is paid a starting salary of £24,000 per year. Each year her salary increases by £1,200. A colleague, Ben, starts at £20,000 with annual increases of £2,000. (a) Find Sadia's salary in her 8th year. (b) In which year do they earn the same amount? (c) Find the total amount Sadia earns over her first 10 years.",
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
          "stepNumber": 1,
          "description": "(a) Set up Sadia's AP.",
          "workingLatex": "a = 24000,\\quad d = 1200",
          "explanation": "Her salary rises by a fixed £1,200 each year — arithmetic."
        },
        {
          "stepNumber": 2,
          "description": "(a) Find her 8th-year salary.",
          "workingLatex": "u_{8} = 24000 + 7(1200) = 32400",
          "explanation": "\\(7\\) increases by year 8."
        },
        {
          "stepNumber": 3,
          "description": "(b) Equate the two salaries.",
          "workingLatex": "24000 + 1200(n - 1) = 20000 + 2000(n - 1)",
          "explanation": "Ben starts lower (£20,000) but rises faster (£2,000/yr)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Solve for \\(n\\).",
          "workingLatex": "4000 = 800(n - 1) \\Rightarrow n - 1 = 5 \\Rightarrow n = 6",
          "explanation": "Collect like terms; they are equal in year \\(6\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Sum Sadia's first 10 years.",
          "workingLatex": "S_{10} = \\tfrac{10}{2}\\big(2(24000) + 9(1200)\\big) = 5(58800) = 294000",
          "explanation": "Apply the sum formula with \\(n = 10\\)."
        }
      ],
      "finalAnswer": "Sadia year 8: £32,400; equal in year 6; 10-year total £294,000."
    }
  },
  {
    "id": "y2ss2-055",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 55",
    "difficulty": "Challenge",
    "questionText": "A stack of logs is arranged so the bottom row has \\(a\\) logs and each row above has one fewer log, up to a row with only one log. The total number of logs in the stack is 210. Find the number of logs in the bottom row.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the stack as a falling AP.",
          "workingLatex": "a,\\ a-1,\\ \\ldots,\\ 1",
          "explanation": "Rows run from \\(a\\) at the bottom down to \\(1\\) at the top in steps of \\(-1\\), so there are \\(a\\) rows."
        },
        {
          "stepNumber": 2,
          "description": "Apply the first-plus-last sum.",
          "workingLatex": "S = \\tfrac{a}{2}(a + 1) = 210",
          "explanation": "Sum from \\(a\\) down to \\(1\\) with \\(n = a\\) terms."
        },
        {
          "stepNumber": 3,
          "description": "Form the quadratic.",
          "workingLatex": "a(a + 1) = 420 \\Rightarrow a^{2} + a - 420 = 0",
          "explanation": "Multiply out."
        },
        {
          "stepNumber": 4,
          "description": "Factorise and choose the root.",
          "workingLatex": "(a - 20)(a + 21) = 0 \\Rightarrow a = 20",
          "explanation": "Reject the negative root; the bottom row has \\(20\\) logs."
        }
      ],
      "finalAnswer": "20 logs."
    }
  },
  {
    "id": "y2ss2-056",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 56",
    "difficulty": "Challenge",
    "questionText": "An arithmetic progression has 20 terms. The sum of the second and second-to-last terms is 40. Find the first term plus the last term.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "theory"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Pair the symmetric terms.",
          "workingLatex": "u_{2} + u_{19} = (a + d) + (a + 18d) = 2a + 19d",
          "explanation": "Terms equally far from the two ends share the same sum."
        },
        {
          "stepNumber": 2,
          "description": "Relate to first plus last.",
          "workingLatex": "u_{1} + u_{20} = a + (a + 19d) = 2a + 19d",
          "explanation": "This equals \\(u_2 + u_{19}\\), so the first-plus-last is also \\(40\\)."
        }
      ],
      "finalAnswer": "40."
    }
  },
  {
    "id": "y2ss2-057",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 57",
    "difficulty": "Challenge",
    "questionText": "Ciaran trains for a marathon. On day 1 he runs 3 km and each subsequent day he runs 0.4 km more than the previous day. He continues until he first runs more than 15 km in a single day. (a) Find the distance he runs on day 10. (b) On which day does he first exceed 15 km? (c) Find his total distance up to and including that day.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "find-n",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set up the AP and find day 10.",
          "workingLatex": "a = 3,\\ d = 0.4 \\Rightarrow u_{10} = 3 + 9(0.4) = 6.6",
          "explanation": "Distances rise by \\(0.4\\) km daily; \\(9\\) increases by day 10."
        },
        {
          "stepNumber": 2,
          "description": "(b) Find when a day first exceeds 15 km.",
          "workingLatex": "3 + 0.4(n - 1) > 15 \\Rightarrow 0.4(n - 1) > 12 \\Rightarrow n > 31",
          "explanation": "Solve the inequality; day \\(32\\) is the first over \\(15\\) km."
        },
        {
          "stepNumber": 3,
          "description": "(c) Sum up to and including day 32.",
          "workingLatex": "S_{32} = \\tfrac{32}{2}\\big(2(3) + 31(0.4)\\big) = 16(18.4) = 294.4",
          "explanation": "\\(31 \\times 0.4 = 12.4\\); \\(6 + 12.4 = 18.4\\)."
        }
      ],
      "finalAnswer": "Day 10: 6.6 km; first exceeds on day 32; total 294.4 km."
    }
  },
  {
    "id": "y2ss2-058",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 58",
    "difficulty": "Challenge",
    "questionText": "An arithmetic progression has \\(u_{3} = 2\\) and \\(u_{7} = 10\\). Find the smallest \\(n\\) such that the sum of the first \\(n\\) terms exceeds 100.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(a\\) and \\(d\\).",
          "workingLatex": "u_{7} = a + 6d = 10,\\ u_{3} = a + 2d = 2 \\Rightarrow 4d = 8",
          "explanation": "Subtract the two term-equations."
        },
        {
          "stepNumber": 2,
          "description": "Solve for \\(d\\) and \\(a\\).",
          "workingLatex": "d = 2,\\quad a = -2",
          "explanation": "From \\(a + 2d = 2\\) with \\(d = 2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum inequality.",
          "workingLatex": "S_{n} = \\tfrac{n}{2}\\big(-4 + 2(n - 1)\\big) > 100 \\Rightarrow n(n - 3) > 100",
          "explanation": "Simplify the bracket: \\(-4 + 2n - 2 = 2n - 6\\), times \\(\\tfrac{n}{2}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve the quadratic inequality.",
          "workingLatex": "n^{2} - 3n - 100 > 0 \\Rightarrow n > \\tfrac{3 + \\sqrt{409}}{2} \\approx 11.61",
          "explanation": "Take the positive root."
        },
        {
          "stepNumber": 5,
          "description": "Pick the first integer.",
          "workingLatex": "n = 12",
          "explanation": "The smallest whole number above \\(11.61\\)."
        }
      ],
      "finalAnswer": "\\(n = 12\\)."
    }
  },
  {
    "id": "y2ss2-059",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 59",
    "difficulty": "Challenge",
    "questionText": "A local council installs street lights along a straight road. The first lamp is 20 m from a junction, the second 35 m, the third 50 m, and so on in arithmetic progression. The council runs out of budget after installing 25 lamps. (a) Find the distance of the 25th lamp from the junction. (b) Find the total length of road from the junction to the 25th lamp. (c) Find the combined distances of all 25 lamps from the junction.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set up the AP and find the 25th lamp.",
          "workingLatex": "a = 20,\\ d = 15 \\Rightarrow u_{25} = 20 + 24(15) = 380",
          "explanation": "Lamp distances rise by \\(15\\) m; \\(24\\) gaps by the 25th."
        },
        {
          "stepNumber": 2,
          "description": "(b) Length of road to the 25th lamp.",
          "workingLatex": "= u_{25} = 380 \\text{ m}",
          "explanation": "The road length to the last lamp is just that lamp's distance from the junction."
        },
        {
          "stepNumber": 3,
          "description": "(c) Combined distances of all 25 lamps.",
          "workingLatex": "S_{25} = \\tfrac{25}{2}(20 + 380) = \\tfrac{25}{2}(400) = 5000",
          "explanation": "Sum the 25 distances via first-plus-last."
        }
      ],
      "finalAnswer": "25th lamp: 380 m; length 380 m; combined 5000 m."
    }
  },
  {
    "id": "y2ss2-060",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 60",
    "difficulty": "Challenge",
    "questionText": "A company offers a new employee a 5-year contract. In year 1 the salary is £\\(S\\), and each subsequent year the salary increases by £1,800. Over the 5 years, the employee earns a total of £132,000. (a) Find the starting salary \\(S\\). (b) Find the salary in year 5. (c) If the same employee instead received a 4% annual increase on the starting salary \\(S\\), would this be better or worse than the fixed increase over 5 years? Justify.",
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
          "stepNumber": 1,
          "description": "(a) Express the 5-year total.",
          "workingLatex": "S_{5} = \\tfrac{5}{2}\\big(2S + 4(1800)\\big)",
          "explanation": "AP with first term \\(S\\), \\(d = 1800\\), \\(n = 5\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Set equal to 132,000.",
          "workingLatex": "5S + 18000 = 132000",
          "explanation": "Simplify: \\(\\tfrac{5}{2}(2S + 7200) = 5S + 18000\\)."
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve for \\(S\\).",
          "workingLatex": "5S = 114000 \\Rightarrow S = 22800",
          "explanation": "Subtract \\(18000\\), divide by \\(5\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Salary in year 5.",
          "workingLatex": "u_{5} = 22800 + 4(1800) = 30000",
          "explanation": "Four increases above the start."
        },
        {
          "stepNumber": 5,
          "description": "(c) Compute the 4% compound total.",
          "workingLatex": "22800\\cdot\\tfrac{1.04^{5} - 1}{0.04} \\approx 123492",
          "explanation": "A 4% compound rise gives a geometric-series total."
        },
        {
          "stepNumber": 6,
          "description": "(c) Compare and conclude.",
          "workingLatex": "123492 < 132000 \\Rightarrow \\text{fixed increase is better}",
          "explanation": "The compound option totals about £123,492, less than the £132,000 from the fixed £1,800 rises, so the fixed scheme pays more over these 5 years."
        }
      ],
      "finalAnswer": "\\(S = \\pounds 22{,}800\\); year 5 £30,000; fixed-increase total (£132,000) exceeds compound 4% (\\(\\approx \\pounds 123{,}492\\))."
    }
  },
  {
    "id": "y2ss2-061",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 61",
    "difficulty": "Challenge",
    "questionText": "The nth term of an arithmetic progression is \\(u_{n} = 7n + 4\\). Determine \\(u_{m + n} - u_{m}\\) for positive integers \\(m\\) and \\(n\\).",
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
          "description": "Write both terms from the rule.",
          "workingLatex": "u_{m+n} = 7(m + n) + 4,\\quad u_{m} = 7m + 4",
          "explanation": "Substitute the indices into \\(u_n = 7n + 4\\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract.",
          "workingLatex": "u_{m+n} - u_{m} = 7(m + n) - 7m = 7n",
          "explanation": "The \\(+4\\) and the \\(7m\\) cancel; the result \\(7n\\) is just \\(nd\\), as expected."
        }
      ],
      "finalAnswer": "\\(7n\\)."
    }
  },
  {
    "id": "y2ss2-062",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 62",
    "difficulty": "Challenge",
    "questionText": "In 2024, a town council records that there are 1200 registered electric vehicles. The number of electric vehicles rises by 180 each year. In a separate survey, the number of petrol vehicles is 8500 in 2024 and decreases by 150 each year. (a) In what year will the number of electric vehicles first exceed the number of petrol vehicles? (b) In that year, how many vehicles of each type are registered?",
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
          "stepNumber": 1,
          "description": "(a) Model both vehicle counts.",
          "workingLatex": "E_{n} = 1200 + 180n,\\quad P_{n} = 8500 - 150n",
          "explanation": "Let \\(n\\) be years after 2024; EVs rise by \\(180\\)/yr, petrol falls by \\(150\\)/yr."
        },
        {
          "stepNumber": 2,
          "description": "(a) Set EVs above petrol.",
          "workingLatex": "1200 + 180n > 8500 - 150n",
          "explanation": "We want the first year EVs exceed petrol cars."
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve the inequality.",
          "workingLatex": "330n > 7300 \\Rightarrow n > 22.12",
          "explanation": "Collect the \\(n\\) terms; divide by \\(330\\)."
        },
        {
          "stepNumber": 4,
          "description": "(a)(b) Identify the year and counts.",
          "workingLatex": "n = 23 \\Rightarrow 2047;\\ E_{23} = 5340,\\ P_{23} = 5050",
          "explanation": "First whole year past \\(22.12\\) is \\(n = 23\\), i.e. 2047."
        }
      ],
      "finalAnswer": "Year 2047 (\\(n = 23\\)); EVs \\(= 5340\\), petrol \\(= 5050\\)."
    }
  },
  {
    "id": "y2ss2-063",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 63",
    "difficulty": "Challenge",
    "questionText": "An arithmetic progression has 21 terms. The 11th term is 50. Find the sum of the 1st and 21st terms.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "theory"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the midpoint property.",
          "workingLatex": "u_{1} + u_{21} = 2u_{11}",
          "explanation": "In an AP with an odd number of terms, the first-plus-last equals twice the middle term."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate.",
          "workingLatex": "= 2(50) = 100",
          "explanation": "Substitute \\(u_{11} = 50\\)."
        }
      ],
      "finalAnswer": "100."
    }
  },
  {
    "id": "y2ss2-064",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 64",
    "difficulty": "Challenge",
    "questionText": "An arithmetic progression has \\(u_{p} = q\\) and \\(u_{q} = p\\) where \\(p \\neq q\\). Show that \\(u_{p + q} = 0\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "theory",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two given conditions.",
          "workingLatex": "u_{p} = a + (p - 1)d = q,\\quad u_{q} = a + (q - 1)d = p",
          "explanation": "Translate \\(u_p = q\\) and \\(u_q = p\\) with the standard formula."
        },
        {
          "stepNumber": 2,
          "description": "Subtract to find \\(d\\).",
          "workingLatex": "(p - q)d = q - p = -(p - q) \\Rightarrow d = -1",
          "explanation": "Subtracting the equations and dividing by \\(p - q \\ne 0\\)."
        },
        {
          "stepNumber": 3,
          "description": "Find \\(a\\).",
          "workingLatex": "a + (p - 1)(-1) = q \\Rightarrow a = p + q - 1",
          "explanation": "Put \\(d = -1\\) into the first condition."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate \\(u_{p+q}\\).",
          "workingLatex": "u_{p+q} = (p + q - 1) + (p + q - 1)(-1) = 0",
          "explanation": "The two \\((p+q-1)\\) terms cancel, proving \\(u_{p+q} = 0\\)."
        }
      ],
      "finalAnswer": "Shown."
    }
  },
  {
    "id": "y2ss2-065",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 65",
    "difficulty": "Challenge",
    "questionText": "A builder lays paving slabs in an arithmetic pattern. On the 1st day 12 slabs are laid, on the 2nd day 15 slabs, on the 3rd day 18 slabs, and so on. The builder has 1200 slabs in total. (a) Show that the number of days needed to lay all slabs satisfies \\(3n^{2} + 21n - 2400 = 0\\). (b) Hence find the number of days. (c) On the final day, how many slabs are laid?",
    "marks": 7,
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
          "stepNumber": 1,
          "description": "(a) Set the total equal to 1200.",
          "workingLatex": "\\tfrac{n}{2}\\big(2(12) + (n - 1)(3)\\big) = 1200",
          "explanation": "AP with \\(a = 12\\), \\(d = 3\\); the slabs laid sum to \\(1200\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Simplify to the required quadratic.",
          "workingLatex": "\\tfrac{n}{2}(3n + 21) = 1200 \\Rightarrow 3n^{2} + 21n - 2400 = 0",
          "explanation": "\\(24 + 3(n-1) = 3n + 21\\); multiply by \\(2\\)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Reduce and solve.",
          "workingLatex": "n^{2} + 7n - 800 = 0 \\Rightarrow n = \\tfrac{-7 + \\sqrt{3249}}{2} = \\tfrac{-7 + 57}{2} = 25",
          "explanation": "Divide by \\(3\\); \\(\\sqrt{3249} = 57\\). Reject the negative root."
        },
        {
          "stepNumber": 4,
          "description": "(c) Slabs on the final day.",
          "workingLatex": "u_{25} = 12 + 24(3) = 84",
          "explanation": "The 25th-day count."
        }
      ],
      "finalAnswer": "25 days; 84 slabs on final day."
    }
  },
  {
    "id": "y2ss2-066",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 66",
    "difficulty": "Challenge",
    "questionText": "The first term of an arithmetic progression is \\(\\log 2\\) and the common difference is \\(\\log 3\\). Find the 8th term as a single logarithm.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "logarithms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the \\(n\\)th-term formula.",
          "workingLatex": "u_{8} = \\log 2 + 7\\log 3",
          "explanation": "\\(a = \\log 2\\), \\(d = \\log 3\\); \\(7\\) steps to the 8th term."
        },
        {
          "stepNumber": 2,
          "description": "Use the power law.",
          "workingLatex": "7\\log 3 = \\log 3^{7}",
          "explanation": "Bring the coefficient inside as an exponent."
        },
        {
          "stepNumber": 3,
          "description": "Combine with the addition law.",
          "workingLatex": "\\log 2 + \\log 3^{7} = \\log(2 \\cdot 3^{7})",
          "explanation": "\\(\\log A + \\log B = \\log AB\\)."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the argument.",
          "workingLatex": "= \\log(2 \\cdot 2187) = \\log 4374",
          "explanation": "\\(3^{7} = 2187\\), times \\(2\\)."
        }
      ],
      "finalAnswer": "\\(\\log 4374\\)."
    }
  },
  {
    "id": "y2ss2-067",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 67",
    "difficulty": "Challenge",
    "questionText": "A manufacturing plant produces \\(a\\) units on day 1 and each subsequent day \\(d\\) units more. On day 10 the plant produces 55 units and the total output over the first 20 days is 1400 units. (a) Set up two equations in \\(a\\) and \\(d\\) and solve them. (b) On which day is the production first more than 100 units?",
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
          "stepNumber": 1,
          "description": "(a) Write the day-10 equation.",
          "workingLatex": "u_{10} = a + 9d = 55",
          "explanation": "\\(9\\) increases by day 10."
        },
        {
          "stepNumber": 2,
          "description": "(a) Write the 20-day sum equation.",
          "workingLatex": "\\tfrac{20}{2}(2a + 19d) = 1400 \\Rightarrow 2a + 19d = 140",
          "explanation": "Divide the total by \\(10\\)."
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve the system.",
          "workingLatex": "2(55 - 9d) + 19d = 140 \\Rightarrow 110 + d = 140 \\Rightarrow d = 30,\\ a = -215",
          "explanation": "Substitute \\(a = 55 - 9d\\); note the model forces a negative day-1 value \\(a = -215\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Find when output exceeds 100.",
          "workingLatex": "-215 + 30(n - 1) > 100 \\Rightarrow 30(n-1) > 315 \\Rightarrow n > 11.5",
          "explanation": "Solve the inequality."
        },
        {
          "stepNumber": 5,
          "description": "(b) Pick the first integer.",
          "workingLatex": "n = 12",
          "explanation": "First whole day past \\(11.5\\)."
        }
      ],
      "finalAnswer": "\\(a = -215,\\ d = 30\\); first exceeds 100 on day 12."
    }
  },
  {
    "id": "y2ss2-068",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 68",
    "difficulty": "Challenge",
    "questionText": "Three consecutive even integers are in arithmetic progression. Their sum is 54. Find them.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Centre the even integers on the middle one.",
          "workingLatex": "m - 2,\\ m,\\ m + 2",
          "explanation": "Consecutive even integers differ by \\(2\\); centring makes the sum simple."
        },
        {
          "stepNumber": 2,
          "description": "Use the sum.",
          "workingLatex": "(m - 2) + m + (m + 2) = 3m = 54 \\Rightarrow m = 18",
          "explanation": "The \\(\\pm 2\\) cancel."
        },
        {
          "stepNumber": 3,
          "description": "List the integers.",
          "workingLatex": "16,\\ 18,\\ 20",
          "explanation": "Substitute \\(m = 18\\)."
        }
      ],
      "finalAnswer": "\\(16, 18, 20\\)."
    }
  },
  {
    "id": "y2ss2-069",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 69",
    "difficulty": "Challenge",
    "questionText": "A cinema's ticket pricing follows an arithmetic progression: the front row costs £8 and each row further back costs 50p more. The cinema has 18 rows of 25 seats each. Assuming every seat is sold, (a) find the price of a ticket in the back row, (b) find the total revenue from the 10th row, and (c) find the total revenue from the cinema.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set up the price AP and find the back row.",
          "workingLatex": "a = 8,\\ d = 0.5 \\Rightarrow u_{18} = 8 + 17(0.5) = 16.5",
          "explanation": "Prices rise by 50p per row; row 18 is the back."
        },
        {
          "stepNumber": 2,
          "description": "(b) Revenue from row 10.",
          "workingLatex": "u_{10} = 8 + 9(0.5) = 12.5,\\quad 25 \\times 12.5 = \\pounds 312.50",
          "explanation": "Price the 10th row, then multiply by its \\(25\\) seats."
        },
        {
          "stepNumber": 3,
          "description": "(c) Sum all 18 row-prices.",
          "workingLatex": "S_{18} = \\tfrac{18}{2}(8 + 16.5) = 9(24.5) = 220.5",
          "explanation": "First-plus-last sum of the prices."
        },
        {
          "stepNumber": 4,
          "description": "(c) Multiply by seats per row.",
          "workingLatex": "25 \\times 220.5 = \\pounds 5512.50",
          "explanation": "Every row has \\(25\\) seats, all sold."
        }
      ],
      "finalAnswer": "Back row £16.50; row 10 £312.50; total £5,512.50."
    }
  },
  {
    "id": "y2ss2-070",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 70",
    "difficulty": "Challenge",
    "questionText": "A pension plan pays £P in year 1, with an increase of £G each year for life. Liam retires and receives £30,000 in year 1, with £1,500 annual increases. His twin, Naomi, invests a one-off lump sum that earns her a flat £34,500 every year. (a) In which year does Liam's pension first exceed Naomi's? (b) Find the total Liam has received by the end of that year. (c) State a reason, in context, why Liam's scheme may be more attractive despite the initial lower payout.",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "find-n",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set Liam's pension above Naomi's.",
          "workingLatex": "30000 + 1500(n - 1) > 34500",
          "explanation": "Liam's pension is an AP (\\(a = 30000\\), \\(d = 1500\\)); Naomi gets a flat £34,500."
        },
        {
          "stepNumber": 2,
          "description": "(a) Solve the inequality.",
          "workingLatex": "1500(n - 1) > 4500 \\Rightarrow n - 1 > 3 \\Rightarrow n \\ge 5",
          "explanation": "Year 4 gives exactly £34,500 (not more), so year \\(5\\) is the first to exceed it."
        },
        {
          "stepNumber": 3,
          "description": "(b) Sum Liam's first 5 years.",
          "workingLatex": "S_{5} = \\tfrac{5}{2}\\big(2(30000) + 4(1500)\\big) = \\tfrac{5}{2}(66000) = 165000",
          "explanation": "Apply the sum formula with \\(n = 5\\)."
        },
        {
          "stepNumber": 4,
          "description": "(c) Why the rising scheme may win.",
          "workingLatex": "\\text{inflation protection}",
          "explanation": "Payments that increase each year keep pace with rising prices, protecting Liam's spending power despite the lower early payouts."
        }
      ],
      "finalAnswer": "Year 5; total £165,000; inflation protection."
    }
  },
  {
    "id": "y2ss2-071",
    "topicRef": "y2ss2",
    "topicTitle": "Arithmetic Sequences 71",
    "difficulty": "Challenge",
    "questionText": "An insurance premium for a car rises each year in an arithmetic progression. Over a 5-year period, the total paid is £3,500, with the first-year premium £500. (a) Show that the common difference \\(d\\) satisfies \\(10d = 1000\\). (b) Hence find \\(d\\) and the premium in year 5. (c) If the company offers instead to fix the premium at the average of the 5 values, how does this average compare to the actual year-3 premium, and why does this make sense?",
    "marks": 8,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Express the 5-year total.",
          "workingLatex": "\\tfrac{5}{2}\\big(2(500) + 4d\\big) = 3500",
          "explanation": "AP with \\(a = 500\\), \\(n = 5\\); total premiums \\(= 3500\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Reduce to the required form.",
          "workingLatex": "1000 + 4d = 1400 \\Rightarrow 4d = 400 \\Rightarrow 10d = 1000",
          "explanation": "Divide \\(3500\\) by \\(\\tfrac{5}{2}\\); rearrange and scale to \\(10d = 1000\\)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Find \\(d\\) and the year-5 premium.",
          "workingLatex": "d = 100,\\quad u_{5} = 500 + 4(100) = 900",
          "explanation": "Premiums rise £100 a year; year 5 is £900."
        },
        {
          "stepNumber": 4,
          "description": "(c) Compare the average with year 3.",
          "workingLatex": "\\tfrac{S_{5}}{5} = \\tfrac{3500}{5} = 700 = u_{3}",
          "explanation": "The mean of an AP equals its middle term; with 5 terms the middle is \\(u_3 = 700\\), so the fixed average equals the year-3 premium exactly — that is why the swap is 'fair' on average."
        }
      ],
      "finalAnswer": "\\(d = £100\\); year 5 £900; average £700 = \\(u_{3}\\) (middle term of AP)."
    }
  }
];
