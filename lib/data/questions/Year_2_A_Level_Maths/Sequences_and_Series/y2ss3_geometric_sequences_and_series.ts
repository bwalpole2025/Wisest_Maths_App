import { Question } from "@/lib/types";

/**
 * Year 2 — Sequences and Series § 3.3 Geometric Sequences and Series
 * Ref: y2ss3
 * 71 questions: nth term and sum of a GP, sum to infinity and convergence,
 * recurring decimals, and geometric growth/decay modelling.
 */
export const questions: Question[] = [
  {
    "id": "y2ss3-001",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 01",
    "difficulty": "Foundation",
    "questionText": "State the nth term formula for a geometric progression with first term \\(a\\) and common ratio \\(r\\).",
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
          "description": "Recall what makes a sequence geometric.",
          "workingLatex": "\\dfrac{u_{2}}{u_{1}} = \\dfrac{u_{3}}{u_{2}} = \\cdots = r",
          "explanation": "A GP multiplies by the same constant ratio \\(r\\) at every step, whereas an AP adds a constant. The two pieces of data that pin a GP down are the first term \\(a\\) and the ratio \\(r\\)."
        },
        {
          "stepNumber": 2,
          "description": "Build the terms one multiplication at a time.",
          "workingLatex": "u_{1} = a,\\ u_{2} = ar,\\ u_{3} = ar^{2},\\ u_{4} = ar^{3}",
          "explanation": "Building the terms by hand shows the structure: each term is the previous one multiplied by \\(r\\). Watch the exponent — the power of \\(r\\) is always one less than the term number."
        },
        {
          "stepNumber": 3,
          "description": "Generalise the pattern.",
          "workingLatex": "u_{n} = a r^{\\,n-1}",
          "explanation": "Generalising, reaching the \\(n\\)th term means multiplying \\(a\\) by \\(r\\) exactly \\(n-1\\) times, which gives the exponent \\(n-1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Note the common pitfall.",
          "workingLatex": "\\text{exponent is } n-1,\\ \\text{not } n",
          "explanation": "The single most common GP error is writing \\(ar^{n}\\): that exponent shifts every term one place along. Always check it against a known term such as \\(u_1=a\\) (which needs \\(r^{0}=1\\))."
        }
      ],
      "finalAnswer": "\\(u_{n} = a r^{n - 1}\\)."
    }
  },
  {
    "id": "y2ss3-002",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 02",
    "difficulty": "Foundation",
    "questionText": "State the sum formula for the first \\(n\\) terms of a geometric progression.",
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
          "description": "Set up the summing trick.",
          "workingLatex": "S_{n} = a + ar + ar^{2} + \\cdots + ar^{n-1}",
          "explanation": "Write out the sum you want in full first. The standard derivation multiplies this whole line by \\(r\\) and subtracts, which makes almost every term cancel."
        },
        {
          "stepNumber": 2,
          "description": "Multiply the whole sum by \\(r\\).",
          "workingLatex": "r S_{n} = ar + ar^{2} + \\cdots + ar^{n}",
          "explanation": "Multiplying every term by \\(r\\) shifts each up one power, so \\(rS_n\\) lines up underneath \\(S_n\\) offset by one term — exactly what makes the subtraction telescope."
        },
        {
          "stepNumber": 3,
          "description": "Subtract to telescope.",
          "workingLatex": "S_{n} - r S_{n} = a - a r^{n}",
          "explanation": "Subtracting kills all the matching middle terms, leaving only the first term of \\(S_n\\) and the last term of \\(rS_n\\). This telescoping is the heart of the proof."
        },
        {
          "stepNumber": 4,
          "description": "Factor and divide.",
          "workingLatex": "S_{n}(1 - r) = a(1 - r^{n}) \\Rightarrow S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "Factor both sides and divide by \\(1-r\\). This division is only legal when \\(r\\neq1\\) — flagging that exclusion now avoids a hidden divide-by-zero."
        },
        {
          "stepNumber": 5,
          "description": "State the excluded case.",
          "workingLatex": "r = 1:\\ S_{n} = na",
          "explanation": "When \\(r=1\\) every term equals \\(a\\), so the sum is just \\(na\\); the general formula breaks because its denominator \\(1-r\\) would be zero. Always treat \\(r=1\\) as a separate case."
        }
      ],
      "finalAnswer": "\\(S_{n} = \\tfrac{a(1 - r^{n})}{1 - r}\\)."
    }
  },
  {
    "id": "y2ss3-003",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 03",
    "difficulty": "Foundation",
    "questionText": "State the sum to infinity of a geometric progression, including the condition on \\(r\\).",
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
          "description": "Start from the finite sum.",
          "workingLatex": "S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "The sum to infinity is the limit of the partial sum \\(S_n\\) as \\(n\\to\\infty\\). Only the \\(r^{n}\\) term depends on \\(n\\), so the behaviour of \\(r^{n}\\) decides everything."
        },
        {
          "stepNumber": 2,
          "description": "Consider what \\(r^{n}\\) does.",
          "workingLatex": "|r| < 1 \\Rightarrow r^{n} \\to 0",
          "explanation": "A number smaller than \\(1\\) in magnitude, raised to ever-higher powers, shrinks towards \\(0\\). This is precisely why the convergence condition is on \\(|r|\\), not on \\(r\\) itself."
        },
        {
          "stepNumber": 3,
          "description": "Take the limit.",
          "workingLatex": "S_{\\infty} = \\dfrac{a(1 - 0)}{1 - r} = \\dfrac{a}{1 - r}",
          "explanation": "With \\(r^{n}\\to0\\) the numerator collapses to \\(a\\), leaving the compact formula \\(\\tfrac{a}{1-r}\\)."
        },
        {
          "stepNumber": 4,
          "description": "State the condition.",
          "workingLatex": "\\text{valid only for } |r| < 1",
          "explanation": "If \\(|r|\\ge1\\) the terms do not shrink, so the partial sums never settle and no finite sum exists. Quoting \\(S_\\infty\\) without first checking \\(|r|<1\\) is a frequent slip."
        }
      ],
      "finalAnswer": "\\(S_{\\infty} = \\tfrac{a}{1 - r}\\) for \\(|r| < 1\\)."
    }
  },
  {
    "id": "y2ss3-004",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 04",
    "difficulty": "Foundation",
    "questionText": "Find the common ratio of the geometric progression \\(3, 6, 12, 24, \\ldots\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "ratio"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the ratio.",
          "workingLatex": "r = \\dfrac{\\text{any term}}{\\text{previous term}}",
          "explanation": "The defining feature of a GP is a constant *ratio*, so you divide consecutive terms — never subtract (subtracting is for arithmetic sequences)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the first pair.",
          "workingLatex": "r = \\dfrac{6}{3} = 2",
          "explanation": "Using the first two terms is the natural choice. Always divide a term by the one *before* it, not after, or you get the reciprocal \\(\\tfrac1r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Verify with another pair.",
          "workingLatex": "\\dfrac{12}{6} = 2,\\ \\dfrac{24}{12} = 2",
          "explanation": "Checking a second and third pair confirms the ratio really is constant, so the sequence is genuinely geometric and \\(r=2\\)."
        }
      ],
      "finalAnswer": "\\(r = 2\\)."
    }
  },
  {
    "id": "y2ss3-005",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 05",
    "difficulty": "Foundation",
    "questionText": "Find the common ratio of the geometric progression \\(81, 27, 9, 3, \\ldots\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "ratio"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the ratio.",
          "workingLatex": "r = \\dfrac{\\text{term}}{\\text{previous term}}",
          "explanation": "Divide consecutive terms to get the ratio; here the terms are shrinking, so expect \\(|r|<1\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the first pair.",
          "workingLatex": "r = \\dfrac{27}{81}",
          "explanation": "Take the first two terms in order, newer over older, so the ratio describes how you move forward through the sequence."
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "r = \\tfrac{1}{3}",
          "explanation": "Cancelling the common factor \\(27\\) reduces \\(\\tfrac{27}{81}\\) to \\(\\tfrac13\\)."
        },
        {
          "stepNumber": 4,
          "description": "Verify and note the size.",
          "workingLatex": "\\dfrac{9}{27} = \\tfrac13;\\ |r| < 1",
          "explanation": "A consistent ratio confirms it is geometric, and because \\(|r|<1\\) the terms decrease — a useful sanity check against the listed values."
        }
      ],
      "finalAnswer": "\\(r = \\tfrac{1}{3}\\)."
    }
  },
  {
    "id": "y2ss3-006",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 06",
    "difficulty": "Foundation",
    "questionText": "Find the 5th term of a geometric progression with \\(a = 3\\) and \\(r = 2\\).",
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
          "workingLatex": "u_{n} = a r^{\\,n-1}",
          "explanation": "Start from the \\(n\\)th-term formula \\(u_n=ar^{\\,n-1}\\); it is the only tool you need here."
        },
        {
          "stepNumber": 2,
          "description": "Identify the exponent.",
          "workingLatex": "n = 5 \\Rightarrow n - 1 = 4",
          "explanation": "The 5th term needs the exponent \\(n-1=4\\), reflecting four multiplications by \\(r\\) after the first term. Using \\(n=5\\) as the exponent is the classic off-by-one error."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "u_{5} = 3 \\cdot 2^{4}",
          "explanation": "Substitute \\(a=3\\) and \\(r=2\\) carefully, keeping \\(a\\) outside the power — only \\(r\\) is raised to the exponent."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 3 \\cdot 16 = 48",
          "explanation": "Evaluate the power first (\\(2^4=16\\)), then multiply by \\(a=3\\), following the order of operations."
        }
      ],
      "finalAnswer": "48."
    }
  },
  {
    "id": "y2ss3-007",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 07",
    "difficulty": "Foundation",
    "questionText": "Find the 10th term of a geometric progression with \\(a = 2\\) and \\(r = 3\\).",
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
          "workingLatex": "u_{n} = a r^{\\,n-1}",
          "explanation": "Apply \\(u_n=ar^{\\,n-1}\\); the size of the numbers does not change the method."
        },
        {
          "stepNumber": 2,
          "description": "Identify the exponent.",
          "workingLatex": "n = 10 \\Rightarrow n - 1 = 9",
          "explanation": "The 10th term uses exponent \\(n-1=9\\) — nine multiplications by \\(r\\) after the first term. Don't write \\(3^{10}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "u_{10} = 2 \\cdot 3^{9}",
          "explanation": "Substitute \\(a=2\\), \\(r=3\\), keeping the base of the power as \\(r\\) alone."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 2 \\cdot 19683 = 39366",
          "explanation": "Compute \\(3^{9}=19683\\) first, then multiply by \\(2\\); doing the power before the multiplication avoids arithmetic slips."
        }
      ],
      "finalAnswer": "39366."
    }
  },
  {
    "id": "y2ss3-008",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 08",
    "difficulty": "Foundation",
    "questionText": "A geometric progression has first term 5 and common ratio \\(\\tfrac{1}{2}\\). Find the 6th term.",
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
          "workingLatex": "u_{n} = a r^{\\,n-1}",
          "explanation": "Use \\(u_n=ar^{\\,n-1}\\); a fractional ratio works exactly the same way."
        },
        {
          "stepNumber": 2,
          "description": "Identify the exponent.",
          "workingLatex": "n = 6 \\Rightarrow n - 1 = 5",
          "explanation": "The 6th term uses exponent \\(n-1=5\\). With \\(r=\\tfrac12\\) the terms shrink, so expect a small answer."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "u_{6} = 5\\left(\\tfrac12\\right)^{5}",
          "explanation": "Substitute \\(a=5\\); keep \\(a\\) outside the bracket so only \\(\\tfrac12\\) is raised to the fifth power."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 5 \\cdot \\tfrac{1}{32} = \\tfrac{5}{32}",
          "explanation": "Raising a fraction to a power raises both top and bottom: \\((\\tfrac12)^5=\\tfrac{1}{32}\\). Then multiply by \\(5\\)."
        }
      ],
      "finalAnswer": "\\(\\tfrac{5}{32}\\)."
    }
  },
  {
    "id": "y2ss3-009",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 09",
    "difficulty": "Foundation",
    "questionText": "Write down the nth term formula for the geometric progression \\(2, 6, 18, 54, \\ldots\\).",
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
          "description": "Find the first term.",
          "workingLatex": "a = 2",
          "explanation": "Read the first term straight off the list — it is the value of \\(a\\) in the formula."
        },
        {
          "stepNumber": 2,
          "description": "Find the common ratio.",
          "workingLatex": "r = \\dfrac{6}{2} = 3",
          "explanation": "Divide consecutive terms (newer over older) to get the ratio; each term triples, so \\(r=3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the \\(n\\)th-term formula.",
          "workingLatex": "u_{n} = a r^{\\,n-1} = 2 \\cdot 3^{\\,n-1}",
          "explanation": "Substitute \\(a=2\\), \\(r=3\\) into \\(u_n=ar^{\\,n-1}\\), leaving the answer in terms of \\(n\\)."
        },
        {
          "stepNumber": 4,
          "description": "Verify with a known term.",
          "workingLatex": "n = 3:\\ 2 \\cdot 3^{2} = 18",
          "explanation": "Always test the formula on a known term: \\(n=3\\) gives \\(2\\cdot3^{2}=18\\), matching the third listed term and confirming the exponent is right."
        }
      ],
      "finalAnswer": "\\(u_{n} = 2 \\cdot 3^{n - 1}\\)."
    }
  },
  {
    "id": "y2ss3-010",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 10",
    "difficulty": "Foundation",
    "questionText": "Find the sum of the first 5 terms of the geometric progression \\(3, 6, 12, 24, \\ldots\\).",
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
          "description": "Identify \\(a\\), \\(r\\) and \\(n\\).",
          "workingLatex": "a = 3,\\ r = \\tfrac63 = 2,\\ n = 5",
          "explanation": "First extract \\(a\\), \\(r\\) and \\(n\\) from the wording: \\(a=3\\), \\(r=\\tfrac63=2\\), and \"first 5 terms\" gives \\(n=5\\)."
        },
        {
          "stepNumber": 2,
          "description": "Choose the sum formula.",
          "workingLatex": "S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "Either form of the sum formula works; with \\(r>1\\) some prefer the \\(r-1\\) form, but the \\(1-r\\) form is fine as long as you handle the signs."
        },
        {
          "stepNumber": 3,
          "description": "Substitute.",
          "workingLatex": "S_{5} = \\dfrac{3(1 - 2^{5})}{1 - 2}",
          "explanation": "Substitute the values, computing the power \\(2^{5}=32\\) inside the bracket first."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= \\dfrac{3(-31)}{-1} = 93",
          "explanation": "The numerator and denominator are both negative, and the two negatives cancel to give a positive sum — a common place to drop a sign."
        }
      ],
      "finalAnswer": "93."
    }
  },
  {
    "id": "y2ss3-011",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 11",
    "difficulty": "Foundation",
    "questionText": "Find the sum of the first 8 terms of the geometric progression with \\(a = 1,\\ r = 2\\).",
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
          "description": "Identify \\(a\\), \\(r\\) and \\(n\\).",
          "workingLatex": "a = 1,\\ r = 2,\\ n = 8",
          "explanation": "Here \\(a\\), \\(r\\) and \\(n\\) are all given directly, so no extraction is needed — go straight to the formula."
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the sum formula.",
          "workingLatex": "S_{8} = \\dfrac{1(1 - 2^{8})}{1 - 2}",
          "explanation": "Substitute into the sum formula, evaluating \\(2^{8}=256\\) first."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "= \\dfrac{1 - 256}{-1} = 255",
          "explanation": "The two negative signs (numerator \\(1-256\\) and denominator \\(1-2\\)) cancel, leaving a positive \\(255\\)."
        }
      ],
      "finalAnswer": "255."
    }
  },
  {
    "id": "y2ss3-012",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 12",
    "difficulty": "Foundation",
    "questionText": "Find the sum to infinity of the geometric progression with \\(a = 10\\) and \\(r = 0.5\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that a sum to infinity exists.",
          "workingLatex": "|r| = 0.5 < 1",
          "explanation": "Before using any infinite-sum formula, confirm \\(|r|<1\\). Here \\(|r|=0.5\\), so the series converges and \\(S_\\infty\\) exists."
        },
        {
          "stepNumber": 2,
          "description": "Recall the formula.",
          "workingLatex": "S_{\\infty} = \\dfrac{a}{1 - r}",
          "explanation": "The formula \\(S_\\infty=\\tfrac{a}{1-r}\\) is only valid once that check passes, so state it explicitly."
        },
        {
          "stepNumber": 3,
          "description": "Substitute and evaluate.",
          "workingLatex": "S_{\\infty} = \\dfrac{10}{1 - 0.5} = \\dfrac{10}{0.5} = 20",
          "explanation": "Substituting gives \\(\\tfrac{10}{0.5}\\); dividing by \\(0.5\\) is the same as doubling, so the sum is \\(20\\)."
        }
      ],
      "finalAnswer": "20."
    }
  },
  {
    "id": "y2ss3-013",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 13",
    "difficulty": "Foundation",
    "questionText": "Find the sum to infinity of \\(12 + 4 + \\tfrac{4}{3} + \\tfrac{4}{9} + \\cdots\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(a\\) and \\(r\\).",
          "workingLatex": "a = 12,\\quad r = \\dfrac{4}{12} = \\tfrac13",
          "explanation": "Identify \\(a\\) as the first term and find \\(r\\) by dividing the second term by the first. The fractions confirm the terms are shrinking."
        },
        {
          "stepNumber": 2,
          "description": "Check convergence.",
          "workingLatex": "|r| = \\tfrac13 < 1",
          "explanation": "Check \\(|r|=\\tfrac13<1\\) so a sum to infinity exists before applying the formula."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula.",
          "workingLatex": "S_{\\infty} = \\dfrac{12}{1 - 1/3}",
          "explanation": "Substitute into \\(\\tfrac{a}{1-r}\\); simplify the denominator \\(1-\\tfrac13=\\tfrac23\\) first."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= \\dfrac{12}{2/3} = 12 \\cdot \\tfrac32 = 18",
          "explanation": "Dividing by \\(\\tfrac23\\) means multiplying by its reciprocal \\(\\tfrac32\\) — a standard fraction-division step that students often invert the wrong way."
        }
      ],
      "finalAnswer": "18."
    }
  },
  {
    "id": "y2ss3-014",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 14",
    "difficulty": "Foundation",
    "questionText": "Determine whether the geometric progression \\(a = 3,\\ r = \\tfrac{2}{3}\\) converges, and if so find its sum to infinity.",
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
          "description": "Apply the convergence test.",
          "workingLatex": "|r| = \\tfrac23 < 1 \\Rightarrow \\text{converges}",
          "explanation": "\"Converges\" for a GP means a finite sum to infinity exists, which happens exactly when \\(|r|<1\\). Here \\(\\tfrac23<1\\), so it converges."
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the formula.",
          "workingLatex": "S_{\\infty} = \\dfrac{3}{1 - 2/3}",
          "explanation": "Apply \\(S_\\infty=\\tfrac{a}{1-r}\\); simplify the denominator \\(1-\\tfrac23=\\tfrac13\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "= \\dfrac{3}{1/3} = 9",
          "explanation": "Dividing \\(3\\) by \\(\\tfrac13\\) multiplies by \\(3\\), giving \\(9\\)."
        }
      ],
      "finalAnswer": "Converges; \\(S_{\\infty} = 9\\)."
    }
  },
  {
    "id": "y2ss3-015",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 15",
    "difficulty": "Foundation",
    "questionText": "Does the geometric progression with \\(a = 2\\) and \\(r = 1.5\\) have a sum to infinity? Justify.",
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
          "description": "Recall the convergence condition.",
          "workingLatex": "S_{\\infty} \\text{ exists} \\iff |r| < 1",
          "explanation": "A sum to infinity exists if and only if \\(|r|<1\\); state this condition before testing."
        },
        {
          "stepNumber": 2,
          "description": "Test the given ratio.",
          "workingLatex": "|r| = 1.5 > 1",
          "explanation": "With \\(|r|=1.5>1\\) the ratio fails the condition outright."
        },
        {
          "stepNumber": 3,
          "description": "Conclude.",
          "workingLatex": "\\text{no sum to infinity}",
          "explanation": "Because \\(|r|>1\\) the terms grow without bound, so the partial sums never settle and the series diverges — there is no \\(S_\\infty\\). The mistake to avoid is plugging into the formula anyway and quoting a meaningless number."
        }
      ],
      "finalAnswer": "No — terms grow without bound."
    }
  },
  {
    "id": "y2ss3-016",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 16",
    "difficulty": "Foundation",
    "questionText": "A geometric progression has \\(u_{1} = 4\\) and \\(u_{4} = 32\\). Find the common ratio.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "ratio"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the 4th term with the formula.",
          "workingLatex": "u_{4} = a r^{3}",
          "explanation": "Express the known term with the \\(n\\)th-term formula: the 4th term is \\(ar^{3}\\) (exponent one less than the index)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "4 r^{3} = 32",
          "explanation": "Substitute \\(a=4\\) and \\(u_4=32\\) to get a single equation in \\(r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Isolate \\(r^{3}\\).",
          "workingLatex": "r^{3} = \\dfrac{32}{4} = 8",
          "explanation": "Divide both sides by \\(a=4\\) to isolate the power \\(r^{3}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Take the cube root.",
          "workingLatex": "r = \\sqrt[3]{8} = 2",
          "explanation": "Take the cube root; the real cube root of \\(8\\) is \\(2\\). (A cube root has just one real value, so no \\(\\pm\\) ambiguity here.)"
        }
      ],
      "finalAnswer": "\\(r = 2\\)."
    }
  },
  {
    "id": "y2ss3-017",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 17",
    "difficulty": "Foundation",
    "questionText": "A geometric progression has \\(u_{2} = 6\\) and \\(u_{5} = 162\\). Find the first term and common ratio.",
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
          "description": "Write both given terms.",
          "workingLatex": "u_{2} = ar = 6,\\quad u_{5} = a r^{4} = 162",
          "explanation": "Write each given term as \\(ar^{k}\\): \\(u_2=ar\\) and \\(u_5=ar^{4}\\). This sets up two equations in the two unknowns."
        },
        {
          "stepNumber": 2,
          "description": "Divide to eliminate \\(a\\).",
          "workingLatex": "\\dfrac{u_{5}}{u_{2}} = \\dfrac{ar^{4}}{ar} = r^{3}",
          "explanation": "Dividing the equations cancels \\(a\\), and the leftover exponent is the gap between the indices, \\(5-2=3\\). This 'divide to eliminate \\(a\\)' trick is the key move in almost all two-term GP problems."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r^{3} = \\dfrac{162}{6} = 27 \\Rightarrow r = 3",
          "explanation": "Solve \\(r^{3}=27\\) by cube-rooting to get \\(r=3\\)."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(a\\).",
          "workingLatex": "ar = 6 \\Rightarrow a = \\dfrac{6}{3} = 2",
          "explanation": "Back-substitute \\(r=3\\) into the simpler equation \\(ar=6\\) to recover \\(a=2\\)."
        }
      ],
      "finalAnswer": "\\(a = 2,\\ r = 3\\)."
    }
  },
  {
    "id": "y2ss3-018",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 18",
    "difficulty": "Foundation",
    "questionText": "A geometric progression has first term 81 and fourth term 3. Find the common ratio.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "ratio"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the 4th term with the formula.",
          "workingLatex": "u_{4} = a r^{3}",
          "explanation": "The 4th term is \\(ar^{3}\\) — the exponent is the index minus one."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "81 r^{3} = 3",
          "explanation": "Substitute \\(a=81\\) and \\(u_4=3\\) to form one equation in \\(r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Isolate \\(r^{3}\\).",
          "workingLatex": "r^{3} = \\dfrac{3}{81} = \\tfrac{1}{27}",
          "explanation": "Divide by \\(81\\) to isolate \\(r^{3}=\\tfrac{1}{27}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Take the cube root.",
          "workingLatex": "r = \\tfrac{1}{3}",
          "explanation": "Cube-root: \\(\\sqrt[3]{1/27}=\\tfrac13\\). The decreasing terms confirm \\(|r|<1\\), a good sanity check."
        }
      ],
      "finalAnswer": "\\(r = \\tfrac{1}{3}\\)."
    }
  },
  {
    "id": "y2ss3-019",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 19",
    "difficulty": "Foundation",
    "questionText": "Find the sum to infinity of the geometric progression \\(16 + 8 + 4 + 2 + \\cdots\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(a\\) and \\(r\\).",
          "workingLatex": "a = 16,\\quad r = \\dfrac{8}{16} = \\tfrac12",
          "explanation": "Read off \\(a=16\\) and find \\(r\\) by dividing consecutive terms; each term is half the previous, so \\(r=\\tfrac12\\)."
        },
        {
          "stepNumber": 2,
          "description": "Check convergence.",
          "workingLatex": "|r| = \\tfrac12 < 1",
          "explanation": "Check \\(|r|=\\tfrac12<1\\) so a sum to infinity exists."
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula and evaluate.",
          "workingLatex": "S_{\\infty} = \\dfrac{16}{1 - 1/2} = \\dfrac{16}{1/2} = 32",
          "explanation": "Substitute into \\(\\tfrac{a}{1-r}\\); the denominator is \\(\\tfrac12\\), and dividing by \\(\\tfrac12\\) doubles, giving \\(32\\)."
        }
      ],
      "finalAnswer": "32."
    }
  },
  {
    "id": "y2ss3-020",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 20",
    "difficulty": "Foundation",
    "questionText": "A geometric progression has \\(a = 2\\) and \\(r = -\\tfrac{1}{2}\\). Write out the first four terms and find the sum to infinity.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 2,\\quad r = -\\tfrac12",
          "explanation": "Note the ratio is negative, so the terms will alternate in sign — keep careful track of minus signs throughout."
        },
        {
          "stepNumber": 2,
          "description": "Generate the first four terms.",
          "workingLatex": "2,\\ 2(-\\tfrac12) = -1,\\ -1(-\\tfrac12) = \\tfrac12,\\ \\tfrac12(-\\tfrac12) = -\\tfrac14",
          "explanation": "Generate the terms by multiplying by \\(-\\tfrac12\\) each time; the signs flip term to term while the magnitudes halve."
        },
        {
          "stepNumber": 3,
          "description": "Check convergence.",
          "workingLatex": "|r| = \\tfrac12 < 1",
          "explanation": "Convergence depends on \\(|r|\\), not its sign: \\(|r|=\\tfrac12<1\\), so a sum to infinity exists despite the alternation."
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula, minding the double negative.",
          "workingLatex": "S_{\\infty} = \\dfrac{2}{1 - (-1/2)} = \\dfrac{2}{3/2} = \\tfrac{4}{3}",
          "explanation": "In the formula \\(1-(-\\tfrac12)=\\tfrac32\\); mishandling this double negative is the most common error with negative ratios."
        }
      ],
      "finalAnswer": "\\(\\tfrac{4}{3}\\)."
    }
  },
  {
    "id": "y2ss3-021",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 21",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(u_{3} = 12\\) and \\(u_{5} = 48\\). Find the first term and common ratio, taking \\(r > 0\\).",
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
          "description": "Write both given terms.",
          "workingLatex": "u_{3} = a r^{2} = 12,\\quad u_{5} = a r^{4} = 48",
          "explanation": "Write each given term as \\(ar^{k}\\): \\(u_3=ar^{2}\\), \\(u_5=ar^{4}\\). Two equations, two unknowns."
        },
        {
          "stepNumber": 2,
          "description": "Divide to eliminate \\(a\\).",
          "workingLatex": "\\dfrac{u_{5}}{u_{3}} = r^{2} = \\dfrac{48}{12} = 4",
          "explanation": "Divide the larger-index equation by the smaller; \\(a\\) cancels and the exponent is the index gap \\(5-3=2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(r\\) (positive root).",
          "workingLatex": "r = \\sqrt{4} = 2",
          "explanation": "\\(r^{2}=4\\) has roots \\(\\pm2\\), but the problem says \\(r>0\\), so take \\(r=2\\). Forgetting to apply the sign restriction is a typical slip."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(a\\).",
          "workingLatex": "a r^{2} = 4a = 12 \\Rightarrow a = 3",
          "explanation": "Back-substitute \\(r^{2}=4\\) into \\(ar^{2}=12\\) to find \\(a=3\\)."
        }
      ],
      "finalAnswer": "\\(a = 3,\\ r = 2\\)."
    }
  },
  {
    "id": "y2ss3-022",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 22",
    "difficulty": "Standard",
    "questionText": "A geometric progression has a first term of 4 and a sum to infinity of 16. Find the common ratio.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{a}{1 - r}",
          "explanation": "The sum to infinity links \\(a\\), \\(r\\) and \\(S_\\infty\\), so it is the equation to start from."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "16 = \\dfrac{4}{1 - r}",
          "explanation": "Substitute \\(a=4\\), \\(S_\\infty=16\\) to get one equation in \\(r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for \\(1 - r\\).",
          "workingLatex": "1 - r = \\dfrac{4}{16} = \\tfrac14",
          "explanation": "Multiply both sides by \\((1-r)\\) and divide by \\(16\\) to isolate \\(1-r=\\tfrac14\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r = 1 - \\tfrac14 = \\tfrac34",
          "explanation": "So \\(r=\\tfrac34\\); since \\(|r|<1\\) the answer is consistent with a convergent series — if it weren't, you'd suspect an error."
        }
      ],
      "finalAnswer": "\\(r = \\tfrac{3}{4}\\)."
    }
  },
  {
    "id": "y2ss3-023",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 23",
    "difficulty": "Standard",
    "questionText": "Find the number of terms of the geometric progression \\(3, 6, 12, \\ldots\\) that sum to 765.",
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
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 3,\\quad r = 2",
          "explanation": "Read off \\(a=3\\) and \\(r=2\\) from the listed terms."
        },
        {
          "stepNumber": 2,
          "description": "Set the sum equal to 765.",
          "workingLatex": "\\dfrac{3(2^{n} - 1)}{2 - 1} = 765",
          "explanation": "Set the sum of \\(n\\) terms equal to \\(765\\). With \\(r>1\\) the \\(r-1\\) form keeps the numbers positive and the denominator here is simply \\(1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "3(2^{n} - 1) = 765 \\Rightarrow 2^{n} - 1 = 255",
          "explanation": "Divide by \\(3\\) to simplify down to a clean power equation."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(n\\).",
          "workingLatex": "2^{n} = 256 = 2^{8} \\Rightarrow n = 8",
          "explanation": "Recognise \\(256=2^{8}\\), so matching powers gives \\(n=8\\). Spotting the power of \\(2\\) avoids needing logs."
        }
      ],
      "finalAnswer": "\\(n = 8\\)."
    }
  },
  {
    "id": "y2ss3-024",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 24",
    "difficulty": "Standard",
    "questionText": "Find the smallest positive integer \\(n\\) for which the sum of the first \\(n\\) terms of the geometric progression \\(1, 2, 4, 8, \\ldots\\) exceeds 1000.",
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
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 1,\\quad r = 2",
          "explanation": "Read off \\(a=1\\), \\(r=2\\) from the sequence."
        },
        {
          "stepNumber": 2,
          "description": "Write the sum-exceeds inequality.",
          "workingLatex": "\\dfrac{1(2^{n} - 1)}{2 - 1} > 1000",
          "explanation": "Translate \"exceeds 1000\" into the inequality \\(S_n>1000\\) using the sum formula."
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "2^{n} - 1 > 1000 \\Rightarrow 2^{n} > 1001",
          "explanation": "Simplify to \\(2^{n}>1001\\) by adding \\(1\\) to both sides."
        },
        {
          "stepNumber": 4,
          "description": "Find the smallest integer \\(n\\).",
          "workingLatex": "2^{9} = 512,\\ 2^{10} = 1024 \\Rightarrow n = 10",
          "explanation": "Compare powers of \\(2\\): \\(2^{9}=512\\) is too small and \\(2^{10}=1024\\) clears \\(1001\\), so the smallest \\(n\\) is \\(10\\). Always test the integer either side of the boundary."
        }
      ],
      "finalAnswer": "\\(n = 10\\) (since \\(2^{10} = 1024\\))."
    }
  },
  {
    "id": "y2ss3-025",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 25",
    "difficulty": "Standard",
    "questionText": "A geometric progression has sum to infinity 24 and first term 6. Find the common ratio and the 4th term.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity",
      "simultaneous"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(r\\) from the sum to infinity.",
          "workingLatex": "\\dfrac{6}{1 - r} = 24",
          "explanation": "Use the sum to infinity to find \\(r\\): substitute \\(a=6\\), \\(S_\\infty=24\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange and solve.",
          "workingLatex": "1 - r = \\tfrac{6}{24} = \\tfrac14 \\Rightarrow r = \\tfrac34",
          "explanation": "Rearranging gives \\(1-r=\\tfrac14\\), so \\(r=\\tfrac34\\); \\(|r|<1\\) confirms the infinite sum was valid."
        },
        {
          "stepNumber": 3,
          "description": "Write the 4th-term formula.",
          "workingLatex": "u_{4} = a r^{3} = 6(0.75)^{3}",
          "explanation": "For the 4th term use \\(u_4=ar^{3}\\) (exponent \\(n-1=3\\))."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 6(0.421875) = 2.53125",
          "explanation": "Evaluate \\(0.75^{3}=0.421875\\) first, then multiply by \\(6\\)."
        }
      ],
      "finalAnswer": "\\(r = 0.75,\\ u_{4} = 2.53125\\)."
    }
  },
  {
    "id": "y2ss3-026",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 26",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(u_{1} = 2\\) and \\(u_{6} = 64\\). Find the sum of the first 6 terms.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both given terms.",
          "workingLatex": "u_{1} = a = 2,\\quad u_{6} = a r^{5} = 64",
          "explanation": "Write the two given terms: \\(u_1=a=2\\) and \\(u_6=ar^{5}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide to find \\(r^{5}\\).",
          "workingLatex": "r^{5} = \\dfrac{64}{2} = 32",
          "explanation": "Dividing eliminates \\(a\\); the exponent is the index gap \\(6-1=5\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r = \\sqrt[5]{32} = 2",
          "explanation": "Take the fifth root of \\(32\\) to get \\(r=2\\) (\\(2^{5}=32\\))."
        },
        {
          "stepNumber": 4,
          "description": "Apply the sum formula.",
          "workingLatex": "S_{6} = \\dfrac{2(2^{6} - 1)}{2 - 1} = 2(63) = 126",
          "explanation": "Now apply the sum formula with \\(r-1\\) form since \\(r>1\\): \\(2^{6}=64\\), so the bracket is \\(63\\)."
        }
      ],
      "finalAnswer": "126."
    }
  },
  {
    "id": "y2ss3-027",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 27",
    "difficulty": "Standard",
    "questionText": "Express \\(0.\\overline{7} = 0.777\\ldots\\) as a geometric series and hence as a fraction.",
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
          "description": "Write the decimal as a sum.",
          "workingLatex": "0.\\overline{7} = 0.7 + 0.07 + 0.007 + \\cdots",
          "explanation": "A recurring decimal is literally an infinite geometric series — writing it as a sum of place-value pieces is the key insight."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 0.7,\\quad r = \\dfrac{0.07}{0.7} = 0.1",
          "explanation": "The first piece is \\(a=0.7\\); each subsequent piece is \\(\\tfrac{1}{10}\\) of the one before, so \\(r=0.1\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{0.7}{1 - 0.1} = \\dfrac{0.7}{0.9}",
          "explanation": "Since \\(|r|<1\\) apply \\(S_\\infty=\\tfrac{a}{1-r}=\\tfrac{0.7}{0.9}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Simplify to a fraction.",
          "workingLatex": "\\dfrac{0.7}{0.9} = \\dfrac{7}{9}",
          "explanation": "Multiply top and bottom by \\(10\\) to clear the decimals, giving the exact fraction \\(\\tfrac79\\)."
        }
      ],
      "finalAnswer": "\\(\\tfrac{7}{9}\\)."
    }
  },
  {
    "id": "y2ss3-028",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 28",
    "difficulty": "Standard",
    "questionText": "Show that the recurring decimal \\(0.\\overline{27}\\) can be written as \\(\\tfrac{3}{11}\\) using a geometric series.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the decimal as a sum.",
          "workingLatex": "0.\\overline{27} = 0.27 + 0.0027 + 0.000027 + \\cdots",
          "explanation": "Because two digits repeat, split the decimal into blocks of two: \\(0.27\\), \\(0.0027\\), and so on — an infinite GP."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 0.27,\\quad r = 0.01",
          "explanation": "The first block is \\(a=0.27\\); each block is shifted two places, so \\(r=10^{-2}=0.01\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{0.27}{1 - 0.01} = \\dfrac{0.27}{0.99}",
          "explanation": "With \\(|r|<1\\), sum to infinity: \\(\\tfrac{0.27}{0.99}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "\\dfrac{27}{99} = \\dfrac{3}{11}",
          "explanation": "Multiply by \\(\\tfrac{100}{100}\\) to get \\(\\tfrac{27}{99}\\), then cancel \\(9\\) to reach \\(\\tfrac{3}{11}\\) as required."
        }
      ],
      "finalAnswer": "Shown."
    }
  },
  {
    "id": "y2ss3-029",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 29",
    "difficulty": "Standard",
    "questionText": "A geometric progression has first term \\(a\\) and common ratio \\(r\\). Given \\(u_{4} = 40\\) and \\(u_{7} = 320\\), find \\(a\\) and \\(r\\).",
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
          "description": "Write both given terms.",
          "workingLatex": "u_{4} = a r^{3} = 40,\\quad u_{7} = a r^{6} = 320",
          "explanation": "Express each given term as \\(ar^{k}\\): \\(u_4=ar^{3}\\), \\(u_7=ar^{6}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide to find \\(r^{3}\\).",
          "workingLatex": "\\dfrac{u_{7}}{u_{4}} = r^{3} = \\dfrac{320}{40} = 8",
          "explanation": "Divide the equations; \\(a\\) cancels and the exponent equals the index gap \\(7-4=3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r = \\sqrt[3]{8} = 2",
          "explanation": "\\(r^{3}=8\\) cube-roots to \\(r=2\\) (one real root, no sign ambiguity)."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(a\\).",
          "workingLatex": "a r^{3} = 8a = 40 \\Rightarrow a = 5",
          "explanation": "Back-substitute \\(r^{3}=8\\) into \\(ar^{3}=40\\) to find \\(a=5\\)."
        }
      ],
      "finalAnswer": "\\(a = 5,\\ r = 2\\)."
    }
  },
  {
    "id": "y2ss3-030",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 30",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(a = 4\\) and \\(S_{\\infty} = 6\\). Find the common ratio and the third term.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(r\\) from the sum to infinity.",
          "workingLatex": "\\dfrac{4}{1 - r} = 6",
          "explanation": "The sum to infinity gives an equation in \\(r\\): substitute \\(a=4\\), \\(S_\\infty=6\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange and solve.",
          "workingLatex": "1 - r = \\tfrac{4}{6} = \\tfrac23 \\Rightarrow r = \\tfrac13",
          "explanation": "Rearrange to \\(1-r=\\tfrac23\\), so \\(r=\\tfrac13\\); \\(|r|<1\\) confirms convergence."
        },
        {
          "stepNumber": 3,
          "description": "Write the 3rd-term formula.",
          "workingLatex": "u_{3} = a r^{2} = 4\\left(\\tfrac13\\right)^{2}",
          "explanation": "For the third term use \\(u_3=ar^{2}\\) (exponent \\(n-1=2\\))."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 4 \\cdot \\tfrac19 = \\tfrac{4}{9}",
          "explanation": "Evaluate \\((\\tfrac13)^2=\\tfrac19\\) first, then multiply by \\(4\\)."
        }
      ],
      "finalAnswer": "\\(r = \\tfrac{1}{3},\\ u_{3} = \\tfrac{4}{9}\\)."
    }
  },
  {
    "id": "y2ss3-031",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 31",
    "difficulty": "Standard",
    "questionText": "A geometric progression has common ratio 1.2 and first term 1000. Find the 6th term and the sum of the first 6 terms.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the 6th term.",
          "workingLatex": "u_{6} = a r^{5} = 1000(1.2)^{5}",
          "explanation": "For the 6th term use exponent \\(n-1=5\\) in \\(ar^{\\,n-1}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the 6th term.",
          "workingLatex": "= 1000(2.48832) = 2488.32",
          "explanation": "Evaluate the power \\(1.2^{5}=2.48832\\), then scale by \\(a=1000\\)."
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum formula.",
          "workingLatex": "S_{6} = \\dfrac{1000(1.2^{6} - 1)}{1.2 - 1}",
          "explanation": "For the sum, the \\(r-1\\) form is tidiest when \\(r>1\\) because it keeps both numerator and denominator positive."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power.",
          "workingLatex": "1.2^{6} = 2.985984",
          "explanation": "Computing \\(1.2^{6}\\) is just one more factor of \\(1.2\\) than \\(1.2^{5}\\), so reuse the earlier value."
        },
        {
          "stepNumber": 5,
          "description": "Compute the sum.",
          "workingLatex": "S_{6} = \\dfrac{1000(1.985984)}{0.2} \\approx 9929.92",
          "explanation": "Subtract \\(1\\) from \\(1.2^{6}\\) and divide by \\(r-1=0.2\\); dividing by a number under \\(1\\) makes the sum large, as expected for growth."
        }
      ],
      "finalAnswer": "\\(u_{6} \\approx 2488.32,\\ S_{6} \\approx 9929.92\\)."
    }
  },
  {
    "id": "y2ss3-032",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 32",
    "difficulty": "Standard",
    "questionText": "Find the smallest \\(n\\) such that the sum of the first \\(n\\) terms of \\(5, 10, 20, 40, \\ldots\\) exceeds 10000.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 5,\\quad r = 2",
          "explanation": "Read off \\(a=5\\), \\(r=2\\) from the sequence."
        },
        {
          "stepNumber": 2,
          "description": "Write the sum-exceeds inequality.",
          "workingLatex": "\\dfrac{5(2^{n} - 1)}{2 - 1} > 10000",
          "explanation": "Write the requirement \"exceeds 10000\" as \\(S_n>10000\\) using the sum formula."
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "2^{n} - 1 > 2000 \\Rightarrow 2^{n} > 2001",
          "explanation": "Divide by \\(5\\) and add \\(1\\) to reduce to a clean power inequality \\(2^{n}>2001\\)."
        },
        {
          "stepNumber": 4,
          "description": "Find the smallest integer \\(n\\).",
          "workingLatex": "2^{10} = 1024,\\ 2^{11} = 2048 \\Rightarrow n = 11",
          "explanation": "Test powers of \\(2\\) either side: \\(2^{10}=1024\\) falls short, \\(2^{11}=2048\\) clears it, so the smallest \\(n\\) is \\(11\\)."
        }
      ],
      "finalAnswer": "\\(n = 11\\)."
    }
  },
  {
    "id": "y2ss3-033",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 33",
    "difficulty": "Standard",
    "questionText": "Three consecutive terms of a geometric progression are \\(x,\\ x + 4,\\ 2x + 3\\). Find \\(x\\) (take \\(x > 0\\)).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "consecutive terms"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the GP condition for three terms.",
          "workingLatex": "\\dfrac{\\text{2nd}}{\\text{1st}} = \\dfrac{\\text{3rd}}{\\text{2nd}}",
          "explanation": "Three terms are in GP exactly when consecutive ratios are equal; cross-multiplying that gives middle\\(^2=\\) product of the outer two."
        },
        {
          "stepNumber": 2,
          "description": "Apply it.",
          "workingLatex": "(x + 4)^{2} = x(2x + 3)",
          "explanation": "Apply it directly: \\((x+4)^2=x(2x+3)\\). Setting the middle squared equal to the product of its neighbours is the standard test."
        },
        {
          "stepNumber": 3,
          "description": "Expand both sides.",
          "workingLatex": "x^{2} + 8x + 16 = 2x^{2} + 3x",
          "explanation": "Expand both sides carefully — \\((x+4)^2=x^2+8x+16\\), not \\(x^2+16\\) (the middle term \\(8x\\) is the usual casualty)."
        },
        {
          "stepNumber": 4,
          "description": "Collect into a quadratic.",
          "workingLatex": "x^{2} - 5x - 16 = 0",
          "explanation": "Collect everything on one side to form the quadratic \\(x^2-5x-16=0\\)."
        },
        {
          "stepNumber": 5,
          "description": "Solve and choose the positive root.",
          "workingLatex": "x = \\dfrac{5 + \\sqrt{89}}{2} \\approx 7.22",
          "explanation": "The discriminant \\(25+64=89\\) isn't a perfect square, so the roots are surds; take the positive root as instructed."
        }
      ],
      "finalAnswer": "\\(x = \\tfrac{5 + \\sqrt{89}}{2}\\)."
    }
  },
  {
    "id": "y2ss3-034",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 34",
    "difficulty": "Standard",
    "questionText": "Three consecutive terms of a geometric progression are \\(k - 2,\\ k,\\ k + 6\\). Find the positive value of \\(k\\).",
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
          "description": "Recall the GP condition for three terms.",
          "workingLatex": "\\text{middle}^{2} = \\text{outer}_1 \\times \\text{outer}_2",
          "explanation": "Equal consecutive ratios give the relation middle\\(^2=\\) product of the outer terms."
        },
        {
          "stepNumber": 2,
          "description": "Apply it.",
          "workingLatex": "k^{2} = (k - 2)(k + 6)",
          "explanation": "Apply it: \\(k^2=(k-2)(k+6)\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand the right side.",
          "workingLatex": "k^{2} = k^{2} + 4k - 12",
          "explanation": "Expand the right side to \\(k^2+4k-12\\); take care with the signs of the cross terms."
        },
        {
          "stepNumber": 4,
          "description": "Solve.",
          "workingLatex": "0 = 4k - 12 \\Rightarrow k = 3",
          "explanation": "The \\(k^2\\) terms cancel, collapsing the equation to a linear one, \\(4k-12=0\\), so \\(k=3\\). When the quadratic terms vanish like this, expect a single solution."
        }
      ],
      "finalAnswer": "\\(k = 3\\)."
    }
  },
  {
    "id": "y2ss3-035",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 35",
    "difficulty": "Standard",
    "questionText": "Express the recurring decimal \\(0.\\overline{142857}\\) as a fraction, using a geometric series.",
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
          "description": "Write the decimal as a sum.",
          "workingLatex": "0.\\overline{142857} = 0.142857 + 0.142857(10^{-6}) + \\cdots",
          "explanation": "The six repeating digits form blocks: \\(0.142857\\), then the same shifted six places, and so on — an infinite GP."
        },
        {
          "stepNumber": 2,
          "description": "Identify \\(a\\) and \\(r\\).",
          "workingLatex": "a = 0.142857,\\quad r = 10^{-6}",
          "explanation": "The first block is \\(a=0.142857\\) and each is shifted six places, so \\(r=10^{-6}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{0.142857}{1 - 10^{-6}} = \\dfrac{142857}{999999}",
          "explanation": "Apply \\(S_\\infty=\\tfrac{a}{1-r}\\); multiplying top and bottom by \\(10^{6}\\) clears the decimals to \\(\\tfrac{142857}{999999}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "\\dfrac{142857}{999999} = \\tfrac{1}{7}",
          "explanation": "Since \\(7\\times142857=999999\\), the fraction simplifies exactly to \\(\\tfrac17\\) — a neat check that the arithmetic is right."
        }
      ],
      "finalAnswer": "\\(\\tfrac{1}{7}\\)."
    }
  },
  {
    "id": "y2ss3-036",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 36",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(a = 1\\) and \\(S_{3} = 21\\). Find the positive value of \\(r\\).",
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
          "description": "Write the sum of three terms.",
          "workingLatex": "S_{3} = a + ar + ar^{2}",
          "explanation": "With \\(a=1\\) the first three terms are \\(1,\\,r,\\,r^{2}\\), so their sum is \\(1+r+r^{2}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set equal to 21.",
          "workingLatex": "1 + r + r^{2} = 21",
          "explanation": "Set this equal to the given \\(S_3=21\\)."
        },
        {
          "stepNumber": 3,
          "description": "Form a quadratic.",
          "workingLatex": "r^{2} + r - 20 = 0",
          "explanation": "Subtract \\(21\\) to form the quadratic \\(r^{2}+r-20=0\\)."
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(r - 4)(r + 5) = 0",
          "explanation": "Factor by finding numbers multiplying to \\(-20\\) and adding to \\(+1\\): \\(+5\\) and \\(-4\\), giving \\((r-4)(r+5)\\)."
        },
        {
          "stepNumber": 5,
          "description": "Choose the positive root.",
          "workingLatex": "r = 4",
          "explanation": "The roots are \\(4\\) and \\(-5\\); the question asks for the positive value, so \\(r=4\\)."
        }
      ],
      "finalAnswer": "\\(r = 4\\)."
    }
  },
  {
    "id": "y2ss3-037",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 37",
    "difficulty": "Standard",
    "questionText": "A geometric series has sum to infinity 16 and third term 1. Find the first term and common ratio (take \\(r > 0\\)).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two conditions.",
          "workingLatex": "u_{3} = a r^{2} = 1,\\quad S_{\\infty} = \\dfrac{a}{1 - r} = 16",
          "explanation": "Translate the two facts into equations: \\(u_3=ar^{2}=1\\) and \\(S_\\infty=\\tfrac{a}{1-r}=16\\)."
        },
        {
          "stepNumber": 2,
          "description": "Make \\(a\\) the subject of the first.",
          "workingLatex": "a = \\dfrac{1}{r^{2}}",
          "explanation": "Make \\(a\\) the subject of the simpler equation: \\(a=\\tfrac{1}{r^{2}}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the second.",
          "workingLatex": "\\dfrac{1/r^{2}}{1 - r} = 16 \\Rightarrow \\dfrac{1}{r^{2}(1 - r)} = 16",
          "explanation": "Substitute into the sum-to-infinity equation to eliminate \\(a\\), leaving an equation in \\(r\\) alone."
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction.",
          "workingLatex": "16 r^{2}(1 - r) = 1 \\Rightarrow 16 r^{3} - 16 r^{2} + 1 = 0",
          "explanation": "Clearing the fraction produces the cubic \\(16r^{3}-16r^{2}+1=0\\); a cubic is expected because two conditions on a GP often combine to one."
        },
        {
          "stepNumber": 5,
          "description": "Solve numerically for the valid root.",
          "workingLatex": "r \\approx 0.9273",
          "explanation": "Only the root with \\(|r|<1\\) is admissible (the series must converge); the others are rejected, giving \\(r\\approx0.9273\\)."
        },
        {
          "stepNumber": 6,
          "description": "Find \\(a\\).",
          "workingLatex": "a = \\dfrac{1}{r^{2}} \\approx \\dfrac{1}{0.86} \\approx 1.163",
          "explanation": "Back-substitute into \\(a=\\tfrac{1}{r^{2}}\\) to recover \\(a\\approx1.163\\)."
        }
      ],
      "finalAnswer": "\\(r \\approx 0.9273,\\ a \\approx 1.163\\)."
    }
  },
  {
    "id": "y2ss3-038",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 38",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(a = 3\\). Given that its sum to infinity is 12, find the common ratio and the 5th term.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find \\(r\\) from the sum to infinity.",
          "workingLatex": "\\dfrac{3}{1 - r} = 12",
          "explanation": "Use the sum to infinity to find \\(r\\): substitute \\(a=3\\), \\(S_\\infty=12\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange and solve.",
          "workingLatex": "1 - r = \\tfrac{3}{12} = \\tfrac14 \\Rightarrow r = \\tfrac34",
          "explanation": "Rearranging gives \\(1-r=\\tfrac14\\), so \\(r=\\tfrac34\\); \\(|r|<1\\) confirms convergence."
        },
        {
          "stepNumber": 3,
          "description": "Write the 5th-term formula.",
          "workingLatex": "u_{5} = a r^{4} = 3(0.75)^{4}",
          "explanation": "For the 5th term use \\(u_5=ar^{4}\\) (exponent \\(n-1=4\\))."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate.",
          "workingLatex": "= 3(0.316406\\ldots) \\approx 0.9492",
          "explanation": "Evaluate \\(0.75^{4}=0.31640625\\) first, then multiply by \\(3\\)."
        }
      ],
      "finalAnswer": "\\(r = 0.75,\\ u_{5} \\approx 0.9492\\)."
    }
  },
  {
    "id": "y2ss3-039",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 39",
    "difficulty": "Standard",
    "questionText": "The second term of a geometric progression is 6 and the fifth term is \\(\\tfrac{3}{4}\\). Find \\(a,\\ r\\) and \\(S_{\\infty}\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both given terms.",
          "workingLatex": "u_{2} = ar = 6,\\quad u_{5} = a r^{4} = \\tfrac34",
          "explanation": "Write each given term as \\(ar^{k}\\): \\(u_2=ar\\), \\(u_5=ar^{4}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide to find \\(r^{3}\\).",
          "workingLatex": "\\dfrac{u_{5}}{u_{2}} = r^{3} = \\dfrac{3/4}{6} = \\tfrac18",
          "explanation": "Divide to eliminate \\(a\\); the exponent is the index gap \\(5-2=3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r = \\sqrt[3]{\\tfrac18} = \\tfrac12",
          "explanation": "\\(r^{3}=\\tfrac18\\) cube-roots to \\(r=\\tfrac12\\)."
        },
        {
          "stepNumber": 4,
          "description": "Find \\(a\\).",
          "workingLatex": "ar = 6 \\Rightarrow a = \\dfrac{6}{1/2} = 12",
          "explanation": "Back-substitute into \\(ar=6\\): dividing by \\(\\tfrac12\\) doubles, giving \\(a=12\\)."
        },
        {
          "stepNumber": 5,
          "description": "Find the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{12}{1 - 1/2} = 24",
          "explanation": "Finally \\(|r|<1\\), so \\(S_\\infty=\\tfrac{a}{1-r}\\) exists and equals \\(24\\)."
        }
      ],
      "finalAnswer": "\\(a = 12,\\ r = 0.5,\\ S_{\\infty} = 24\\)."
    }
  },
  {
    "id": "y2ss3-040",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 40",
    "difficulty": "Standard",
    "questionText": "Prove that the geometric progression \\(a, ar, ar^{2}, \\ldots\\) converges if and only if \\(|r| < 1\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what \"converges\" means here.",
          "workingLatex": "S_{n} \\to \\text{finite limit as } n \\to \\infty",
          "explanation": "Convergence here means the partial sums \\(S_n\\) approach a finite limit; since only \\(r^{n}\\) varies with \\(n\\), the proof hinges on it."
        },
        {
          "stepNumber": 2,
          "description": "Recall the finite sum.",
          "workingLatex": "S_{n} = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "Recall the finite-sum formula — every \\(n\\)-dependence sits in the single term \\(r^{n}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Case \\(|r| < 1\\).",
          "workingLatex": "r^{n} \\to 0 \\Rightarrow S_{n} \\to \\dfrac{a}{1 - r}",
          "explanation": "Case \\(|r|<1\\): powers of a number under \\(1\\) in size shrink to \\(0\\), so \\(S_n\\to\\tfrac{a}{1-r}\\), a finite limit."
        },
        {
          "stepNumber": 4,
          "description": "Case \\(|r| \\ge 1\\).",
          "workingLatex": "|r^{n}| \\not\\to 0 \\Rightarrow S_{n} \\text{ does not settle}",
          "explanation": "Case \\(|r|\\ge1\\): \\(r^{n}\\) does not tend to \\(0\\) (it stays at least as big or oscillates), so the partial sums fail to settle."
        },
        {
          "stepNumber": 5,
          "description": "Conclude.",
          "workingLatex": "\\text{converges} \\iff |r| < 1",
          "explanation": "The two cases together establish the 'if and only if': convergence is equivalent to \\(|r|<1\\)."
        }
      ],
      "finalAnswer": "Converges iff \\(|r| < 1\\)."
    }
  },
  {
    "id": "y2ss3-041",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 41",
    "difficulty": "Standard",
    "questionText": "A geometric progression satisfies \\(S_{3} = 14\\) and \\(S_{6} = 126\\). Find the common ratio.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both sums with the formula.",
          "workingLatex": "S_{3} = \\dfrac{a(1 - r^{3})}{1 - r},\\ S_{6} = \\dfrac{a(1 - r^{6})}{1 - r}",
          "explanation": "Write both sums with the formula; crucially they share the same prefactor \\(\\tfrac{a}{1-r}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Form the ratio.",
          "workingLatex": "\\dfrac{S_{6}}{S_{3}} = \\dfrac{1 - r^{6}}{1 - r^{3}}",
          "explanation": "Forming the ratio \\(S_6/S_3\\) cancels that shared prefactor, removing both \\(a\\) and the awkward \\(1-r\\) and leaving only powers of \\(r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Factor the numerator.",
          "workingLatex": "\\dfrac{(1 - r^{3})(1 + r^{3})}{1 - r^{3}} = 1 + r^{3}",
          "explanation": "\\(1-r^{6}\\) is a difference of squares in \\(r^{3}\\): \\((1-r^{3})(1+r^{3})\\), so it cancels with the \\(1-r^{3}\\) below to give \\(1+r^{3}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(r\\).",
          "workingLatex": "1 + r^{3} = \\dfrac{126}{14} = 9 \\Rightarrow r^{3} = 8 \\Rightarrow r = 2",
          "explanation": "Then \\(1+r^{3}=\\tfrac{126}{14}=9\\), so \\(r^{3}=8\\) and \\(r=2\\)."
        }
      ],
      "finalAnswer": "\\(r = 2\\)."
    }
  },
  {
    "id": "y2ss3-042",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 42",
    "difficulty": "Standard",
    "questionText": "An investment of £2000 earns compound interest at 4% per year. Write an expression for the value after \\(n\\) years and find the value after 10 years.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "compound interest"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the compound-growth model.",
          "workingLatex": "V_{n} = 2000(1.04)^{n}",
          "explanation": "Compound interest at a fixed percentage multiplies by the same factor each year, so the values form a GP. A 4% rise means multiplying by \\(1.04\\) (not adding \\(0.04\\))."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 10\\).",
          "workingLatex": "V_{10} = 2000(1.04)^{10}",
          "explanation": "Substitute \\(n=10\\) for ten years of growth."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the power.",
          "workingLatex": "(1.04)^{10} \\approx 1.480244",
          "explanation": "Evaluate \\((1.04)^{10}\\approx1.480244\\) — this is the cumulative growth factor over the decade."
        },
        {
          "stepNumber": 4,
          "description": "Compute the value.",
          "workingLatex": "\\approx 2000(1.480244) \\approx £2960.49",
          "explanation": "Multiply by the initial £2000; rounding only at the end keeps the money figure accurate."
        }
      ],
      "finalAnswer": "\\(V_{n} = 2000(1.04)^{n};\\ V_{10} \\approx £2960.49\\)."
    }
  },
  {
    "id": "y2ss3-043",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 43",
    "difficulty": "Standard",
    "questionText": "A car is bought for £18,000 and loses 20% of its value each year. Find its value after 5 years.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "depreciation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the loss to a multiplier.",
          "workingLatex": "\\text{retains } 100\\% - 20\\% = 80\\% = 0.8",
          "explanation": "Losing 20% each year means retaining 80%, so the multiplier is \\(0.8\\) — depreciation is geometric decay, not a fixed subtraction."
        },
        {
          "stepNumber": 2,
          "description": "Set up the decay model.",
          "workingLatex": "V_{5} = 18000(0.8)^{5}",
          "explanation": "After five years the factor is \\(0.8^{5}\\), giving \\(V_5=18000(0.8)^{5}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "= 18000(0.32768) \\approx £5898.24",
          "explanation": "Evaluate \\(0.8^{5}=0.32768\\), then scale by £18,000 to get the final value."
        }
      ],
      "finalAnswer": "\\(\\approx £5898.24\\)."
    }
  },
  {
    "id": "y2ss3-044",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 44",
    "difficulty": "Standard",
    "questionText": "A colony of bacteria doubles every hour. If there are 500 bacteria initially, find the population after 6 hours.",
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
          "description": "Set up the doubling model.",
          "workingLatex": "P_{n} = 500 \\cdot 2^{n}",
          "explanation": "Doubling each hour multiplies by \\(2\\), so after \\(n\\) hours the factor is \\(2^{n}\\) — a GP with the initial count as the leading coefficient."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 6\\).",
          "workingLatex": "P_{6} = 500 \\cdot 2^{6}",
          "explanation": "Substitute \\(n=6\\) for six hours of doubling."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate.",
          "workingLatex": "= 500 \\cdot 64 = 32000",
          "explanation": "Evaluate \\(2^{6}=64\\), then multiply by the initial \\(500\\)."
        }
      ],
      "finalAnswer": "32,000."
    }
  },
  {
    "id": "y2ss3-045",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 45",
    "difficulty": "Standard",
    "questionText": "A ball is dropped from a height of 3 m and bounces to \\(\\tfrac{2}{3}\\) of its previous height each time. Find the total vertical distance travelled before it comes to rest.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the first drop from the bounces.",
          "workingLatex": "\\text{drop } 3 \\text{ m, then bounces of height } 3(2/3)^{n}",
          "explanation": "Separate the very first drop (counted once) from the bounces. Each bounce both rises and falls, so its height contributes to the distance twice — the key modelling insight."
        },
        {
          "stepNumber": 2,
          "description": "Write the total distance.",
          "workingLatex": "D = 3 + 2\\sum_{n=1}^{\\infty} 3\\left(\\tfrac23\\right)^{n}",
          "explanation": "Hence the total is the \\(3\\) m drop plus twice the sum of all bounce heights."
        },
        {
          "stepNumber": 3,
          "description": "Identify the bounce series.",
          "workingLatex": "a = 3 \\cdot \\tfrac23 = 2,\\quad r = \\tfrac23",
          "explanation": "The first bounce reaches \\(3\\times\\tfrac23=2\\) m, and each later bounce is \\(\\tfrac23\\) of the previous, so \\(a=2\\), \\(r=\\tfrac23\\)."
        },
        {
          "stepNumber": 4,
          "description": "Sum the bounce series.",
          "workingLatex": "\\sum = \\dfrac{2}{1 - 2/3} = \\dfrac{2}{1/3} = 6",
          "explanation": "Since \\(|r|<1\\) the bounce heights sum to a finite \\(\\tfrac{2}{1/3}=6\\) m."
        },
        {
          "stepNumber": 5,
          "description": "Combine.",
          "workingLatex": "D = 3 + 2(6) = 15 \\text{ m}",
          "explanation": "Combine: \\(3+2(6)=15\\) m. Forgetting the factor of \\(2\\) on the bounces is the usual error here."
        }
      ],
      "finalAnswer": "15 m."
    }
  },
  {
    "id": "y2ss3-046",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 46",
    "difficulty": "Standard",
    "questionText": "A sheet of paper 0.1 mm thick is folded in half repeatedly. Find the thickness after 20 folds and comment.",
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
          "description": "Set up the doubling model.",
          "workingLatex": "T_{n} = 0.1 \\cdot 2^{n}\\ \\text{mm}",
          "explanation": "Each fold doubles the thickness, so the model is \\(T_n=0.1\\cdot2^{n}\\) mm — geometric growth from the starting thickness."
        },
        {
          "stepNumber": 2,
          "description": "Substitute \\(n = 20\\).",
          "workingLatex": "T_{20} = 0.1 \\cdot 2^{20}",
          "explanation": "Substitute \\(n=20\\) for twenty folds."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate in mm.",
          "workingLatex": "= 0.1 \\cdot 1048576 = 104857.6\\ \\text{mm}",
          "explanation": "Evaluate \\(2^{20}=1048576\\), then multiply by \\(0.1\\) mm."
        },
        {
          "stepNumber": 4,
          "description": "Convert and interpret.",
          "workingLatex": "\\approx 104.86\\ \\text{m}",
          "explanation": "Convert mm to m by dividing by \\(1000\\): about \\(104.86\\) m. The point is how explosively exponential growth compounds — just 20 folds beats a 30-storey building."
        }
      ],
      "finalAnswer": "\\(\\approx 104.86\\) m — larger than a 30-storey building."
    }
  },
  {
    "id": "y2ss3-047",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 47",
    "difficulty": "Standard",
    "questionText": "A geometric progression has \\(a = 2\\) and \\(r = \\tfrac{1}{3}\\). Find the difference between the sum of the first 5 terms and the sum to infinity.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute the finite sum \\(S_{5}\\).",
          "workingLatex": "S_{5} = \\dfrac{2(1 - (1/3)^{5})}{1 - 1/3}",
          "explanation": "Compute the finite sum first with \\(a=2\\), \\(r=\\tfrac13\\), \\(n=5\\)."
        },
        {
          "stepNumber": 2,
          "description": "Simplify \\(S_{5}\\).",
          "workingLatex": "= 3\\left(1 - \\tfrac{1}{243}\\right) = \\tfrac{242}{81}",
          "explanation": "Simplify: the prefactor \\(\\tfrac{2}{2/3}=3\\), and \\((\\tfrac13)^5=\\tfrac{1}{243}\\), giving \\(S_5=\\tfrac{242}{81}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Compute the sum to infinity.",
          "workingLatex": "S_{\\infty} = \\dfrac{2}{1 - 1/3} = 3",
          "explanation": "The sum to infinity uses the same prefactor but with \\(r^{n}\\to0\\), so \\(S_\\infty=3\\)."
        },
        {
          "stepNumber": 4,
          "description": "Subtract to find the difference.",
          "workingLatex": "S_{\\infty} - S_{5} = 3 - \\tfrac{242}{81} = \\tfrac{1}{81} \\approx 0.0123",
          "explanation": "The difference \\(S_\\infty-S_5=\\tfrac{1}{81}\\) is exactly the tail of the series beyond the fifth term — the part still 'missing' after five terms."
        }
      ],
      "finalAnswer": "\\(\\tfrac{1}{81} \\approx 0.0123\\)."
    }
  },
  {
    "id": "y2ss3-048",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 48",
    "difficulty": "Standard",
    "questionText": "A geometric progression has 5 terms with first term 4 and last term 324. Find the common ratio (take \\(r > 0\\)) and the sum.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the last term to find \\(r\\).",
          "workingLatex": "u_{5} = a r^{4} = 324",
          "explanation": "Five terms means the last is the 5th term \\(u_5=ar^{4}\\) (exponent one less than the count)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute and isolate \\(r^{4}\\).",
          "workingLatex": "4 r^{4} = 324 \\Rightarrow r^{4} = 81",
          "explanation": "Substitute \\(a=4\\) and \\(u_5=324\\), then divide by \\(4\\) to isolate \\(r^{4}=81\\)."
        },
        {
          "stepNumber": 3,
          "description": "Take the fourth root.",
          "workingLatex": "r = \\sqrt[4]{81} = 3",
          "explanation": "Take the positive fourth root (\\(r>0\\) is given): \\(\\sqrt[4]{81}=3\\)."
        },
        {
          "stepNumber": 4,
          "description": "Apply the sum formula.",
          "workingLatex": "S_{5} = \\dfrac{4(3^{5} - 1)}{3 - 1} = \\dfrac{4(242)}{2} = 484",
          "explanation": "Apply the \\(r-1\\) sum form since \\(r>1\\): \\(3^{5}=243\\), so the bracket is \\(242\\), and the sum is \\(484\\)."
        }
      ],
      "finalAnswer": "\\(r = 3,\\ S_{5} = 484\\)."
    }
  },
  {
    "id": "y2ss3-049",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 49",
    "difficulty": "Standard",
    "questionText": "The sum to infinity of a geometric series is 48 and the sum of the first two terms is 36. Find the first term and common ratio.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two conditions.",
          "workingLatex": "\\dfrac{a}{1 - r} = 48,\\quad a + ar = 36",
          "explanation": "Turn the two facts into equations: \\(\\tfrac{a}{1-r}=48\\) and \\(a+ar=36\\)."
        },
        {
          "stepNumber": 2,
          "description": "Factor the second.",
          "workingLatex": "a(1 + r) = 36",
          "explanation": "Factor the second as \\(a(1+r)=36\\) to expose the \\((1+r)\\) factor."
        },
        {
          "stepNumber": 3,
          "description": "Express \\(a\\) from the first.",
          "workingLatex": "a = 48(1 - r)",
          "explanation": "Rearrange the first to \\(a=48(1-r)\\) so you can substitute and eliminate \\(a\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute and use difference of squares.",
          "workingLatex": "48(1 - r)(1 + r) = 36 \\Rightarrow 1 - r^{2} = \\tfrac{36}{48} = 0.75",
          "explanation": "Substituting gives \\(48(1-r)(1+r)=36\\); recognising \\((1-r)(1+r)=1-r^{2}\\) turns it into \\(1-r^{2}=0.75\\)."
        },
        {
          "stepNumber": 5,
          "description": "Solve for \\(r\\) then \\(a\\).",
          "workingLatex": "r^{2} = 0.25 \\Rightarrow r = \\tfrac12,\\quad a = 48(\\tfrac12) = 24",
          "explanation": "So \\(r^{2}=0.25\\), \\(r=\\tfrac12\\) (take \\(|r|<1\\)), and back-substitution gives \\(a=24\\)."
        }
      ],
      "finalAnswer": "\\(a = 24,\\ r = \\tfrac{1}{2}\\)."
    }
  },
  {
    "id": "y2ss3-050",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 50",
    "difficulty": "Standard",
    "questionText": "Find \\(\\sum_{r = 1}^{\\infty} 5 \\cdot (0.6)^{r - 1}\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "sigma",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the GP from the general term.",
          "workingLatex": "5(0.6)^{r-1}:\\ a = 5,\\ r = 0.6",
          "explanation": "The general term \\(5(0.6)^{r-1}\\) is in the standard GP shape \\(ar^{\\,k-1}\\), so read off \\(a=5\\) and ratio \\(0.6\\) directly."
        },
        {
          "stepNumber": 2,
          "description": "Check convergence.",
          "workingLatex": "|r| = 0.6 < 1",
          "explanation": "Check \\(|0.6|<1\\) so the infinite sum converges."
        },
        {
          "stepNumber": 3,
          "description": "Apply the sum to infinity.",
          "workingLatex": "\\dfrac{5}{1 - 0.6} = \\dfrac{5}{0.4} = 12.5",
          "explanation": "Apply \\(\\tfrac{a}{1-r}=\\tfrac{5}{0.4}=12.5\\); dividing by \\(0.4\\) is the same as multiplying by \\(2.5\\)."
        }
      ],
      "finalAnswer": "12.5."
    }
  },
  {
    "id": "y2ss3-051",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 51",
    "difficulty": "Challenge",
    "questionText": "A patient is prescribed a drug that is taken every 8 hours. Each dose adds 100 mg of the drug to the bloodstream, but the body eliminates 30% of the total drug present every 8 hours. Let \\(m_{n}\\) denote the mass of drug in the bloodstream immediately after the \\(n\\)th dose. (a) Write a recurrence relation for \\(m_{n}\\). (b) Find \\(m_{4}\\) to 2 decimal places. (c) Find the long-term mass the body reaches.",
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
          "stepNumber": 1,
          "description": "(a) Convert the elimination to a multiplier.",
          "workingLatex": "\\text{eliminates } 30\\% \\Rightarrow \\text{retains } 70\\% = 0.7",
          "explanation": "Eliminating 30% leaves 70%, so the carry-over multiplier is \\(0.7\\) — convert the percentage to a factor before building the recurrence."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "m_{n+1} = 0.7 m_{n} + 100,\\quad m_{1} = 100",
          "explanation": "Each cycle the existing drug is scaled by \\(0.7\\) and then a fresh \\(100\\) mg dose is added, giving \\(m_{n+1}=0.7m_n+100\\) with \\(m_1=100\\)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Find \\(m_{2}\\) and \\(m_{3}\\).",
          "workingLatex": "m_{2} = 0.7(100) + 100 = 170,\\quad m_{3} = 0.7(170) + 100 = 219",
          "explanation": "Iterate one step at a time; rounding only at the end avoids accumulating error."
        },
        {
          "stepNumber": 4,
          "description": "(b) Find \\(m_{4}\\).",
          "workingLatex": "m_{4} = 0.7(219) + 100 = 253.30",
          "explanation": "One more application gives \\(m_4=0.7(219)+100=253.30\\) mg to 2 d.p."
        },
        {
          "stepNumber": 5,
          "description": "(c) Set up the equilibrium equation.",
          "workingLatex": "L = 0.7L + 100",
          "explanation": "At the long-term level the amount cleared each cycle balances the dose added, so consecutive terms are equal: set \\(m_{n+1}=m_n=L\\)."
        },
        {
          "stepNumber": 6,
          "description": "(c) Solve for \\(L\\).",
          "workingLatex": "0.3L = 100 \\Rightarrow L \\approx 333.33\\ \\text{mg}",
          "explanation": "Solving \\(0.3L=100\\) gives \\(L\\approx333.33\\) mg — the steady state the doses build towards but never quite reach."
        }
      ],
      "finalAnswer": "\\(m_{n + 1} = 0.7 m_{n} + 100\\); \\(m_{4} \\approx 253.30\\) mg; long-term \\(\\approx 333.33\\) mg."
    }
  },
  {
    "id": "y2ss3-052",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 52",
    "difficulty": "Challenge",
    "questionText": "Holly pays £250 a month into a pension scheme, which grows at 0.4% interest per month (paid at the end of each month). (a) Write an expression for the value \\(V_{n}\\) of the pension after \\(n\\) monthly payments, assuming deposits are made at the start of each month. (b) Find the value of the pension after 10 years to the nearest £100.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "compound interest",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Model how each deposit grows.",
          "workingLatex": "\\text{deposit in month } k \\text{ grows for } n - k + 1 \\text{ months}",
          "explanation": "Because deposits are made at the start of each month, the month-\\(k\\) deposit compounds for \\(n-k+1\\) months; summing all of them is a geometric series."
        },
        {
          "stepNumber": 2,
          "description": "(a) Identify the geometric series.",
          "workingLatex": "\\text{first} = 250(1.004),\\ \\text{ratio} = 1.004",
          "explanation": "The earliest deposit grows the most. The series starts at \\(250(1.004)\\) and has ratio \\(1.004\\) (the monthly growth factor)."
        },
        {
          "stepNumber": 3,
          "description": "(a) Write the closed form.",
          "workingLatex": "V_{n} = 250(1.004)\\dfrac{1.004^{n} - 1}{1.004 - 1} = 250(1.004)\\dfrac{1.004^{n} - 1}{0.004}",
          "explanation": "Apply the GP sum with \\(n\\) payments to get the closed form; keeping the \\(0.004\\) denominator exact avoids rounding drift."
        },
        {
          "stepNumber": 4,
          "description": "(b) Substitute \\(n = 120\\).",
          "workingLatex": "V_{120} = 250(1.004)\\dfrac{1.004^{120} - 1}{0.004}",
          "explanation": "Ten years is \\(120\\) monthly payments, so substitute \\(n=120\\)."
        },
        {
          "stepNumber": 5,
          "description": "(b) Evaluate.",
          "workingLatex": "1.004^{120} \\approx 1.6147 \\Rightarrow V_{120} \\approx £38{,}600",
          "explanation": "Evaluate \\(1.004^{120}\\approx1.6147\\); the total rounds to about £38,600 to the nearest £100."
        }
      ],
      "finalAnswer": "\\(V_{120} \\approx £38{,}600\\)."
    }
  },
  {
    "id": "y2ss3-053",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 53",
    "difficulty": "Challenge",
    "questionText": "A lottery tickets company pays out prizes according to a geometric progression. First prize is £50,000, second prize is £25,000, third prize is £12,500, and so on. In total there are 10 prizes. (a) Find the value of the 10th prize. (b) Find the total prize fund. (c) Suppose the company offers one single lump-sum prize equal to the total prize fund — would this attract more or fewer entrants? Justify in context.",
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
          "description": "(a) Identify the prize GP.",
          "workingLatex": "a = 50000,\\quad r = \\dfrac{25000}{50000} = 0.5",
          "explanation": "The prizes halve each time, so \\(a=50000\\) and \\(r=\\tfrac{25000}{50000}=0.5\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Find the 10th prize.",
          "workingLatex": "u_{10} = 50000(0.5)^{9}",
          "explanation": "The 10th prize is \\(u_{10}=ar^{9}\\) (exponent one less than the index)."
        },
        {
          "stepNumber": 3,
          "description": "(a) Evaluate.",
          "workingLatex": "= \\dfrac{50000}{512} \\approx £97.66",
          "explanation": "Evaluate \\(0.5^{9}=\\tfrac{1}{512}\\), giving about £97.66."
        },
        {
          "stepNumber": 4,
          "description": "(b) Sum the 10 prizes.",
          "workingLatex": "S_{10} = \\dfrac{50000(1 - 0.5^{10})}{1 - 0.5} = 100000(1 - 2^{-10})",
          "explanation": "For the fund, use the \\(1-r\\) sum form: \\(\\tfrac{50000}{0.5}=100000\\), times \\((1-2^{-10})\\)."
        },
        {
          "stepNumber": 5,
          "description": "(b) Evaluate the total.",
          "workingLatex": "\\approx £99{,}902.34",
          "explanation": "Since \\(2^{-10}=\\tfrac{1}{1024}\\) is tiny, the total is just under £100,000."
        },
        {
          "stepNumber": 6,
          "description": "(c) Interpret the lump-sum alternative.",
          "workingLatex": "\\text{draw vs. perceived chance}",
          "explanation": "Part (c) is a behavioural judgement, not a calculation: many small prizes feel more winnable, while one large prize has more allure but a lower perceived chance of winning."
        }
      ],
      "finalAnswer": "10th prize \\(\\approx £97.66\\); total \\(\\approx £99{,}902.34\\)."
    }
  },
  {
    "id": "y2ss3-054",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 54",
    "difficulty": "Challenge",
    "questionText": "A rumour spreads through a school. On day 1 one person knows the rumour. Each person who knows it tells exactly 2 new people on the next day. (a) Write an expression for \\(u_{n}\\), the number of new people who hear the rumour on day \\(n\\). (b) Find the total number of people who know the rumour by the end of day 8. (c) Give one reason why this unlimited growth model cannot hold indefinitely.",
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
          "description": "(a) Find the daily new-hearer count.",
          "workingLatex": "1,\\ 2,\\ 4,\\ 8,\\ \\ldots",
          "explanation": "Day 1 has one knower; each knower tells \\(2\\) new people, so the daily count of new hearers doubles: \\(1,2,4,8,\\ldots\\)"
        },
        {
          "stepNumber": 2,
          "description": "(a) Write the closed form.",
          "workingLatex": "u_{n} = 2^{\\,n-1}",
          "explanation": "That is a GP with \\(a=1\\), \\(r=2\\), so the new-hearers on day \\(n\\) is \\(u_n=2^{\\,n-1}\\)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Sum the total who know by day 8.",
          "workingLatex": "S_{8} = \\dfrac{1(2^{8} - 1)}{2 - 1} = 2^{8} - 1",
          "explanation": "The *total* who know is the sum of all daily new hearers — a geometric sum with \\(a=1\\), \\(r=2\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Evaluate.",
          "workingLatex": "= 256 - 1 = 255",
          "explanation": "Evaluate \\(2^{8}-1=255\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Why the model fails eventually.",
          "workingLatex": "\\text{finite population}",
          "explanation": "The model assumes an unlimited supply of new people; in a finite school the pool of people who haven't yet heard runs out, so unbounded doubling cannot continue."
        }
      ],
      "finalAnswer": "\\(u_{n} = 2^{n-1}\\); 255 people by end of day 8; finite population bounds growth."
    }
  },
  {
    "id": "y2ss3-055",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 55",
    "difficulty": "Challenge",
    "questionText": "A rubber ball is dropped from a height of 5 m and bounces to 60% of its previous height each time. Let \\(h_{n}\\) be the maximum height (m) reached after the nth bounce. (a) Write \\(h_{n}\\) in closed form. (b) Find the total vertical distance (up and down) the ball travels before it comes to rest. (c) Find the smallest \\(n\\) such that the bounce height is less than 1 cm.",
    "marks": 8,
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
          "stepNumber": 1,
          "description": "(a) Model the bounce heights.",
          "workingLatex": "h_{n} = 5(0.6)^{n}",
          "explanation": "Each bounce reaches 60% of the previous height, so \\(h_n=5(0.6)^{n}\\), with the initial \\(5\\) m being the drop (\\(h_0\\))."
        },
        {
          "stepNumber": 2,
          "description": "(b) Set up the total distance.",
          "workingLatex": "D = 5 + 2\\sum_{n=1}^{\\infty} 5(0.6)^{n}",
          "explanation": "Total distance = the initial \\(5\\) m fall plus twice every bounce height (each bounce goes up then down)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Sum the bounce series.",
          "workingLatex": "\\sum_{n=1}^{\\infty} 5(0.6)^{n} = \\dfrac{5(0.6)}{1 - 0.6} = \\dfrac{3}{0.4} = 7.5",
          "explanation": "The bounce heights form a GP with first term \\(5(0.6)=3\\) and ratio \\(0.6\\); since \\(|r|<1\\) they sum to \\(7.5\\) m."
        },
        {
          "stepNumber": 4,
          "description": "(b) Combine.",
          "workingLatex": "D = 5 + 2(7.5) = 20\\ \\text{m}",
          "explanation": "Combine: \\(5+2(7.5)=20\\) m. The factor of \\(2\\) on the bounces is the easy thing to forget."
        },
        {
          "stepNumber": 5,
          "description": "(c) Smallest \\(n\\) with height \\(< 1\\) cm.",
          "workingLatex": "5(0.6)^{n} < 0.01 \\Rightarrow (0.6)^{n} < 0.002",
          "explanation": "For part (c), set the bounce height below \\(1\\) cm \\(=0.01\\) m and divide by \\(5\\)."
        },
        {
          "stepNumber": 6,
          "description": "(c) Solve with logs.",
          "workingLatex": "n > \\dfrac{\\log 0.002}{\\log 0.6} \\approx 12.16 \\Rightarrow n = 13",
          "explanation": "Taking logs and dividing by \\(\\log0.6\\) (which is negative) flips the inequality, so round up to the first integer, \\(n=13\\)."
        }
      ],
      "finalAnswer": "\\(h_{n} = 5(0.6)^{n}\\); total 20 m; smallest \\(n = 13\\)."
    }
  },
  {
    "id": "y2ss3-056",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 56",
    "difficulty": "Challenge",
    "questionText": "A radioactive substance has a half-life of 4 years, meaning half the substance decays every 4 years. A laboratory sample starts with 80 g. (a) Write an expression for the mass remaining after \\(n\\) 4-year periods. (b) Find the mass remaining after 20 years. (c) Find to the nearest year when the mass first falls below 1 g.",
    "marks": 8,
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
          "stepNumber": 1,
          "description": "(a) Model the decay per half-life.",
          "workingLatex": "M_{n} = 80(0.5)^{n}\\ (n \\text{ in 4-year periods})",
          "explanation": "Each half-life multiplies the mass by \\(\\tfrac12\\), so \\(M_n=80(0.5)^{n}\\) with \\(n\\) counted in 4-year periods — be clear that \\(n\\) is periods, not years."
        },
        {
          "stepNumber": 2,
          "description": "(b) Convert 20 years to periods.",
          "workingLatex": "20 \\div 4 = 5 \\text{ periods}",
          "explanation": "Convert: \\(20\\) years is \\(20\\div4=5\\) periods."
        },
        {
          "stepNumber": 3,
          "description": "(b) Evaluate \\(M_{5}\\).",
          "workingLatex": "M_{5} = 80(0.5)^{5} = \\dfrac{80}{32} = 2.5\\ \\text{g}",
          "explanation": "Evaluate \\(M_5=80(0.5)^{5}=\\tfrac{80}{32}=2.5\\) g."
        },
        {
          "stepNumber": 4,
          "description": "(c) Set up the below-1-g inequality.",
          "workingLatex": "80(0.5)^{n} < 1 \\Rightarrow (0.5)^{n} < \\tfrac{1}{80}",
          "explanation": "For part (c) set \\(80(0.5)^{n}<1\\) and divide by \\(80\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Solve with logs and convert.",
          "workingLatex": "n > \\dfrac{\\log 80}{\\log 2} \\approx 6.32 \\Rightarrow n = 7 \\text{ periods} = 28\\ \\text{years}",
          "explanation": "Taking logs gives \\(n>6.32\\), so round up to \\(7\\) periods, then multiply by \\(4\\) to convert back to \\(28\\) years."
        }
      ],
      "finalAnswer": "\\(M_{n} = 80(0.5)^{n}\\); 2.5 g after 20 years; below 1 g after 28 years (7 periods)."
    }
  },
  {
    "id": "y2ss3-057",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 57",
    "difficulty": "Challenge",
    "questionText": "A biologist models an insect population as a geometric sequence. Each week the population doubles, but 200 insects are removed by predators at the end of each week. Starting with 500 insects, (a) write a recurrence for the population \\(P_{n}\\) at the end of week \\(n\\). (b) Find \\(P_{4}\\). (c) State the long-term behaviour and justify.",
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
          "stepNumber": 1,
          "description": "(a) Combine doubling and removal.",
          "workingLatex": "\\text{double } (\\times 2) \\text{ then remove } 200",
          "explanation": "The population doubles (\\(\\times2\\)) and predators remove a fixed \\(200\\); combining a multiplier with a constant gives a linear recurrence, not a pure GP."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "P_{n+1} = 2 P_{n} - 200,\\quad P_{0} = 500",
          "explanation": "Hence \\(P_{n+1}=2P_n-200\\) with \\(P_0=500\\): multiply first, then subtract."
        },
        {
          "stepNumber": 3,
          "description": "(b) Iterate to \\(P_{4}\\).",
          "workingLatex": "P_{1} = 800,\\ P_{2} = 1400,\\ P_{3} = 2600,\\ P_{4} = 5000",
          "explanation": "Iterate week by week; each step uses the previous result."
        },
        {
          "stepNumber": 4,
          "description": "(c) Find the equilibrium.",
          "workingLatex": "L = 2L - 200 \\Rightarrow L = 200",
          "explanation": "The equilibrium is where consecutive terms are equal: \\(L=2L-200\\) gives \\(L=200\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Judge stability.",
          "workingLatex": "P_{0} = 500 > 200,\\ \\text{factor } 2 > 1 \\Rightarrow \\text{grows}",
          "explanation": "Because the growth factor \\(2>1\\) and the start \\(500>200\\), the equilibrium is unstable and the population grows without bound — starting above an unstable equilibrium drives it upward."
        }
      ],
      "finalAnswer": "\\(P_{4} = 5000\\); population grows without bound (unstable equilibrium at 200)."
    }
  },
  {
    "id": "y2ss3-058",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 58",
    "difficulty": "Challenge",
    "questionText": "Show that the recurring decimal \\(0.3\\overline{45}\\) equals \\(\\tfrac{19}{55}\\) using a geometric series.",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split off the non-recurring digit.",
          "workingLatex": "0.3\\overline{45} = 0.3 + 0.045 + 0.00045 + \\cdots",
          "explanation": "Only the \\(45\\) block recurs, so peel off the non-recurring \\(0.3\\) first and treat the rest as a GP."
        },
        {
          "stepNumber": 2,
          "description": "Identify the recurring GP.",
          "workingLatex": "a = 0.045,\\quad r = 0.01",
          "explanation": "The recurring part starts at \\(a=0.045\\) and each block shifts two places, so \\(r=0.01\\)."
        },
        {
          "stepNumber": 3,
          "description": "Sum the recurring tail.",
          "workingLatex": "\\dfrac{0.045}{1 - 0.01} = \\dfrac{0.045}{0.99} = \\tfrac{45}{990}",
          "explanation": "Sum the recurring tail with \\(\\tfrac{a}{1-r}\\); multiplying through by \\(1000\\) gives \\(\\tfrac{45}{990}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Add the non-recurring part.",
          "workingLatex": "\\tfrac{3}{10} + \\tfrac{45}{990} = \\dfrac{297 + 45}{990} = \\tfrac{342}{990}",
          "explanation": "Add back the non-recurring \\(\\tfrac{3}{10}=\\tfrac{297}{990}\\) over the common denominator \\(990\\)."
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "\\tfrac{342}{990} = \\tfrac{19}{55}",
          "explanation": "Cancel the common factor \\(18\\) to reach \\(\\tfrac{19}{55}\\), as required."
        }
      ],
      "finalAnswer": "\\(\\tfrac{19}{55}\\)."
    }
  },
  {
    "id": "y2ss3-059",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 59",
    "difficulty": "Challenge",
    "questionText": "A coffee shop offers a loyalty scheme where each week a customer's spend doubles a bonus points balance and then 50 points are automatically redeemed for a gift. Let \\(B_{n}\\) denote the customer's bonus balance at the end of week \\(n\\), with \\(B_{0} = 60\\). (a) Write a recurrence for \\(B_{n}\\). (b) Find \\(B_{3}\\). (c) State and justify whether the balance grows indefinitely.",
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
          "stepNumber": 1,
          "description": "(a) Build the recurrence.",
          "workingLatex": "B_{n+1} = 2 B_{n} - 50",
          "explanation": "The balance doubles then \\(50\\) is redeemed, so \\(B_{n+1}=2B_n-50\\) — a multiplier plus a constant subtraction."
        },
        {
          "stepNumber": 2,
          "description": "(b) Iterate to \\(B_{3}\\).",
          "workingLatex": "B_{1} = 70,\\ B_{2} = 90,\\ B_{3} = 130",
          "explanation": "Iterate from \\(B_0=60\\): \\(2(60)-50=70\\), and so on up to \\(B_3\\)."
        },
        {
          "stepNumber": 3,
          "description": "(c) Find the equilibrium.",
          "workingLatex": "L = 2L - 50 \\Rightarrow L = 50",
          "explanation": "The equilibrium is where consecutive terms match: \\(L=2L-50\\) gives \\(L=50\\)."
        },
        {
          "stepNumber": 4,
          "description": "(c) Judge stability.",
          "workingLatex": "B_{0} = 60 > 50,\\ \\text{factor } 2 > 1 \\Rightarrow \\text{grows indefinitely}",
          "explanation": "Since the start \\(60\\) exceeds the unstable equilibrium \\(50\\) and the factor \\(2>1\\), the balance grows without bound."
        }
      ],
      "finalAnswer": "\\(B_{3} = 130\\); balance grows indefinitely."
    }
  },
  {
    "id": "y2ss3-060",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 60",
    "difficulty": "Challenge",
    "questionText": "A geometric progression of positive terms has first term \\(a\\) and common ratio \\(r\\). The sum of the first two terms is 6 and the sum to infinity is 24. Find the exact values of \\(a\\) and \\(r\\).",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two conditions.",
          "workingLatex": "a(1 + r) = 6,\\quad \\dfrac{a}{1 - r} = 24",
          "explanation": "Convert the two facts into equations: the first two terms give \\(a(1+r)=6\\), and the sum to infinity gives \\(\\tfrac{a}{1-r}=24\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide the equations to remove \\(a\\).",
          "workingLatex": "\\dfrac{a(1 + r)}{a/(1 - r)} = \\dfrac{6}{24}",
          "explanation": "Dividing one equation by the other cancels \\(a\\), leaving an equation purely in \\(r\\)."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the left side.",
          "workingLatex": "(1 + r)(1 - r) = 1 - r^{2} = \\tfrac14",
          "explanation": "The left side simplifies via difference of squares: \\((1+r)(1-r)=1-r^{2}=\\tfrac14\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve for \\(r\\).",
          "workingLatex": "r^{2} = \\tfrac34 \\Rightarrow r = \\tfrac{\\sqrt3}{2}",
          "explanation": "So \\(r^{2}=\\tfrac34\\); the terms are positive, so take the positive root \\(r=\\tfrac{\\sqrt3}{2}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Find \\(a\\).",
          "workingLatex": "a = \\dfrac{6}{1 + \\sqrt3/2} = \\dfrac{12}{2 + \\sqrt3}",
          "explanation": "Substitute back into \\(a(1+r)=6\\); multiplying through by \\(2\\) clears the inner fraction to give \\(a=\\tfrac{12}{2+\\sqrt3}\\)."
        }
      ],
      "finalAnswer": "\\(r = \\tfrac{\\sqrt{3}}{2},\\ a = \\tfrac{12}{2 + \\sqrt{3}}\\)."
    }
  },
  {
    "id": "y2ss3-061",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 61",
    "difficulty": "Challenge",
    "questionText": "A country's population is 2 million and grows by 1.5% each year. Find, to the nearest year, when the population will first exceed 3 million.",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "find-n"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the growth model.",
          "workingLatex": "P_{n} = 2(1.015)^{n}",
          "explanation": "A 1.5% annual rise multiplies by \\(1.015\\) each year, so \\(P_n=2(1.015)^{n}\\) with the population measured in millions."
        },
        {
          "stepNumber": 2,
          "description": "Write the inequality.",
          "workingLatex": "2(1.015)^{n} > 3",
          "explanation": "Translate \"exceed 3 million\" into the inequality \\(2(1.015)^{n}>3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Isolate the power.",
          "workingLatex": "(1.015)^{n} > 1.5",
          "explanation": "Divide by \\(2\\) to isolate the power: \\((1.015)^{n}>1.5\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve with logs.",
          "workingLatex": "n > \\dfrac{\\log 1.5}{\\log 1.015} \\approx 27.23 \\Rightarrow n = 28",
          "explanation": "Take logs: \\(n>\\tfrac{\\log1.5}{\\log1.015}\\approx27.23\\). Since \\(n\\) counts whole years, round up to \\(28\\)."
        }
      ],
      "finalAnswer": "28 years."
    }
  },
  {
    "id": "y2ss3-062",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 62",
    "difficulty": "Challenge",
    "questionText": "A small company's annual profit grows by 8% each year. In year 1 the profit is £40,000. (a) Find the profit in year 10. (b) Find the total profit over the first 10 years.",
    "marks": 6,
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
          "description": "(a) Identify the profit GP.",
          "workingLatex": "a = 40000,\\quad r = 1.08",
          "explanation": "An 8% annual rise gives ratio \\(1.08\\); the profits form a GP with \\(a=40000\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Find the year-10 profit.",
          "workingLatex": "u_{10} = 40000(1.08)^{9} \\approx £79{,}960.19",
          "explanation": "Year 10 is the 10th term \\(ar^{9}\\) (exponent one less than the year number) — using \\(1.08^{10}\\) here is the common off-by-one."
        },
        {
          "stepNumber": 3,
          "description": "(b) Set up the 10-year sum.",
          "workingLatex": "S_{10} = \\dfrac{40000(1.08^{10} - 1)}{1.08 - 1}",
          "explanation": "For the total, use the \\(r-1\\) sum form since \\(r>1\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Evaluate the power and sum.",
          "workingLatex": "1.08^{10} \\approx 2.158925 \\Rightarrow S_{10} \\approx £579{,}459",
          "explanation": "Evaluate \\(1.08^{10}\\approx2.158925\\); the bracket \\(1.158925\\) over \\(0.08\\) gives the 10-year total."
        }
      ],
      "finalAnswer": "Year 10: \\(\\approx £79{,}960\\); total \\(\\approx £579{,}459\\)."
    }
  },
  {
    "id": "y2ss3-063",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 63",
    "difficulty": "Challenge",
    "questionText": "A bacterial culture is treated with an antibiotic that kills 40% of the bacteria every 2 hours. However, the surviving bacteria reproduce so that the population doubles every 2 hours. Starting from 1,000 bacteria, (a) write a recurrence for the population \\(P_{n}\\) at the end of the \\(n\\)th 2-hour period. (b) Find \\(P_{3}\\). (c) State whether the population grows or shrinks, giving a reason.",
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
          "stepNumber": 1,
          "description": "(a) Combine the kill and the doubling.",
          "workingLatex": "60\\% \\text{ survive } (\\times 0.6),\\ \\text{then double } (\\times 2)",
          "explanation": "The antibiotic leaves 60% (\\(\\times0.6\\)) and the survivors then double (\\(\\times2\\)) — two multiplicative effects in one period."
        },
        {
          "stepNumber": 2,
          "description": "(a) Find the net factor and recurrence.",
          "workingLatex": "0.6 \\times 2 = 1.2 \\Rightarrow P_{n+1} = 1.2 P_{n}",
          "explanation": "Their net effect is a single factor \\(0.6\\times2=1.2\\), so the recurrence is pure geometric: \\(P_{n+1}=1.2P_n\\) with no constant added."
        },
        {
          "stepNumber": 3,
          "description": "(b) Evaluate \\(P_{3}\\).",
          "workingLatex": "P_{3} = 1000(1.2)^{3} = 1000(1.728) = 1728",
          "explanation": "Evaluate \\(P_3=1000(1.2)^{3}=1728\\)."
        },
        {
          "stepNumber": 4,
          "description": "(c) Decide growth or shrink.",
          "workingLatex": "r = 1.2 > 1 \\Rightarrow \\text{grows without bound}",
          "explanation": "Because the net ratio \\(1.2>1\\), the population grows without bound: the doubling outpaces the antibiotic."
        }
      ],
      "finalAnswer": "\\(P_{n+1} = 1.2 P_{n}\\); \\(P_{3} = 1728\\); grows without bound."
    }
  },
  {
    "id": "y2ss3-064",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 64",
    "difficulty": "Challenge",
    "questionText": "Find the smallest positive integer \\(n\\) such that \\(\\sum_{k = 1}^{n} 3 \\cdot (1.1)^{k - 1} > 100\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "find-n",
      "sum"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the sum inequality.",
          "workingLatex": "\\dfrac{3(1.1^{n} - 1)}{1.1 - 1} > 100",
          "explanation": "Set up the partial-sum inequality with \\(a=3\\), \\(r=1.1\\); the \\(r-1\\) form suits \\(r>1\\)."
        },
        {
          "stepNumber": 2,
          "description": "Isolate the power.",
          "workingLatex": "\\dfrac{1.1^{n} - 1}{0.1} > \\tfrac{100}{3} \\Rightarrow 1.1^{n} - 1 > \\tfrac{10}{3}",
          "explanation": "Divide by \\(3\\) and multiply through by \\(0.1\\) to isolate the power term."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange.",
          "workingLatex": "1.1^{n} > \\tfrac{13}{3} \\approx 4.33",
          "explanation": "Add \\(1\\) to both sides to get \\(1.1^{n}>\\tfrac{13}{3}\\approx4.33\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve with logs.",
          "workingLatex": "n > \\dfrac{\\log 4.33}{\\log 1.1} \\approx 15.38 \\Rightarrow n = 16",
          "explanation": "Take logs: \\(n>\\tfrac{\\log4.33}{\\log1.1}\\approx15.38\\), so the smallest integer \\(n\\) is \\(16\\)."
        }
      ],
      "finalAnswer": "\\(n = 16\\)."
    }
  },
  {
    "id": "y2ss3-065",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 65",
    "difficulty": "Challenge",
    "questionText": "A painter models the cost of oil paints as a geometric progression: year 1 the cost is £120, year 2 it's £126, year 3 it's £132.30, and so on. (a) Find the common ratio and explain what it represents. (b) Find the cost in year 20. (c) Find the total cost over the first 15 years.",
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
          "description": "(a) Find and interpret the ratio.",
          "workingLatex": "r = \\dfrac{126}{120} = 1.05",
          "explanation": "Dividing consecutive costs gives \\(r=\\tfrac{126}{120}=1.05\\), which represents a steady 5% annual price increase."
        },
        {
          "stepNumber": 2,
          "description": "(b) Set up the year-20 cost.",
          "workingLatex": "u_{20} = 120(1.05)^{19}",
          "explanation": "Year 20 is the 20th term \\(ar^{19}\\) (exponent one less than the year)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Evaluate.",
          "workingLatex": "\\approx 120(2.527) \\approx £303.23",
          "explanation": "Evaluate \\(1.05^{19}\\approx2.527\\), then scale by £120."
        },
        {
          "stepNumber": 4,
          "description": "(c) Set up the 15-year total.",
          "workingLatex": "S_{15} = \\dfrac{120(1.05^{15} - 1)}{1.05 - 1}",
          "explanation": "For the 15-year total use the \\(r-1\\) sum form since \\(r>1\\)."
        },
        {
          "stepNumber": 5,
          "description": "(c) Evaluate.",
          "workingLatex": "1.05^{15} \\approx 2.0789 \\Rightarrow S_{15} \\approx £2588",
          "explanation": "Evaluate \\(1.05^{15}\\approx2.0789\\); the bracket \\(1.0789\\) over \\(0.05\\) times £120 gives about £2588."
        }
      ],
      "finalAnswer": "\\(r = 1.05\\) (5% increase); year 20 \\(\\approx £303.23\\); 15-year total \\(\\approx £2588\\)."
    }
  },
  {
    "id": "y2ss3-066",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 66",
    "difficulty": "Challenge",
    "questionText": "The Koch snowflake is constructed by iteratively replacing each line segment with 4 segments each one-third the length. If the first stage has perimeter 3 units, find the perimeter at stage \\(n\\) and determine whether the perimeter converges.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "convergence"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the per-stage perimeter factor.",
          "workingLatex": "\\text{4 pieces} \\times \\tfrac13 \\text{ length} = \\times \\tfrac43",
          "explanation": "Each segment becomes 4 pieces of \\(\\tfrac13\\) the length, so the perimeter is multiplied by \\(4\\times\\tfrac13=\\tfrac43\\) per stage."
        },
        {
          "stepNumber": 2,
          "description": "Write the closed form.",
          "workingLatex": "P_{n} = 3\\left(\\tfrac43\\right)^{n-1}",
          "explanation": "That makes the perimeters a GP with first term \\(3\\) and ratio \\(\\tfrac43\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the convergence test.",
          "workingLatex": "r = \\tfrac43 > 1",
          "explanation": "Apply the convergence test: here \\(r=\\tfrac43>1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "\\text{perimeter} \\to \\infty",
          "explanation": "Because \\(|r|>1\\) the perimeter grows without bound — the famous result that the Koch snowflake has infinite perimeter while enclosing a finite area."
        }
      ],
      "finalAnswer": "\\(P_{n} = 3 (4/3)^{n-1}\\); diverges to \\(\\infty\\)."
    }
  },
  {
    "id": "y2ss3-067",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 67",
    "difficulty": "Challenge",
    "questionText": "Zoe invests £1000 each year at the beginning of the year in a scheme paying 5% compound interest per year. (a) Show that the total value at the end of year \\(n\\) is \\(V_{n} = \\tfrac{1050 (1.05^{n} - 1)}{0.05}\\). (b) Find the value of the investment at the end of year 15.",
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
          "description": "(a) Model each payment's growth.",
          "workingLatex": "\\text{payment in year } k \\text{ earns interest for } n - k + 1 \\text{ years}",
          "explanation": "Start-of-year deposits each compound to the end of year \\(n\\); the year-\\(k\\) payment earns interest for \\(n-k+1\\) years, so the totals form a GP."
        },
        {
          "stepNumber": 2,
          "description": "(a) Identify the geometric series.",
          "workingLatex": "\\text{first} = 1000(1.05),\\ \\text{ratio} = 1.05,\\ n \\text{ terms}",
          "explanation": "The earliest deposit grows most: the series starts at \\(1000(1.05)\\) with ratio \\(1.05\\) and has \\(n\\) terms."
        },
        {
          "stepNumber": 3,
          "description": "(a) Sum to the closed form.",
          "workingLatex": "V_{n} = 1000(1.05)\\dfrac{1.05^{n} - 1}{0.05} = 1050\\cdot\\dfrac{1.05^{n} - 1}{0.05}",
          "explanation": "Summing gives \\(V_n=1000(1.05)\\tfrac{1.05^{n}-1}{0.05}=1050\\cdot\\tfrac{1.05^{n}-1}{0.05}\\), since \\(1000\\times1.05=1050\\), as required."
        },
        {
          "stepNumber": 4,
          "description": "(b) Substitute \\(n = 15\\).",
          "workingLatex": "V_{15} = 1050\\cdot\\dfrac{1.05^{15} - 1}{0.05}",
          "explanation": "Substitute \\(n=15\\) for fifteen years of payments."
        },
        {
          "stepNumber": 5,
          "description": "(b) Evaluate.",
          "workingLatex": "1.05^{15} \\approx 2.0789 \\Rightarrow V_{15} \\approx £22{,}657",
          "explanation": "Evaluate \\(1.05^{15}\\approx2.0789\\); the bracket over \\(0.05\\) times \\(1050\\) gives about £22,657."
        }
      ],
      "finalAnswer": "\\(V_{15} \\approx £22{,}657\\)."
    }
  },
  {
    "id": "y2ss3-068",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 68",
    "difficulty": "Challenge",
    "questionText": "The first term of a geometric progression is 3 and the sum of the first two terms is \\(-3\\). Find the possible values of the common ratio and the sum to infinity (where it exists).",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sum of the first two terms.",
          "workingLatex": "u_{1} + u_{2} = a + ar = 3 + 3r",
          "explanation": "With \\(a=3\\), the first two terms sum to \\(a+ar=3+3r\\)."
        },
        {
          "stepNumber": 2,
          "description": "Set equal to \\(-3\\) and solve.",
          "workingLatex": "3 + 3r = -3 \\Rightarrow 3r = -6 \\Rightarrow r = -2",
          "explanation": "Set equal to \\(-3\\): subtract \\(3\\) then divide by \\(3\\) to get \\(r=-2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Test for a sum to infinity.",
          "workingLatex": "|r| = 2 > 1",
          "explanation": "Test for a sum to infinity: \\(|r|=2>1\\) fails the convergence condition \\(|r|<1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Conclude.",
          "workingLatex": "\\text{no sum to infinity}",
          "explanation": "Because \\(|r|>1\\) the series diverges, so no sum to infinity exists — a negative ratio doesn't help; what matters is its magnitude."
        }
      ],
      "finalAnswer": "\\(r = -2\\); no sum to infinity."
    }
  },
  {
    "id": "y2ss3-069",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 69",
    "difficulty": "Challenge",
    "questionText": "A geometric progression of positive terms has second term 6 and sum to infinity 27. Find the first term and common ratio.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simultaneous",
      "sum to infinity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two conditions.",
          "workingLatex": "u_{2} = ar = 6,\\quad \\dfrac{a}{1 - r} = 27",
          "explanation": "Set up the two conditions: \\(u_2=ar=6\\) and \\(\\tfrac{a}{1-r}=27\\)."
        },
        {
          "stepNumber": 2,
          "description": "Express \\(a\\) and substitute.",
          "workingLatex": "a = \\dfrac{6}{r} \\Rightarrow \\dfrac{6/r}{1 - r} = 27",
          "explanation": "Express \\(a=\\tfrac{6}{r}\\) from the second-term equation and substitute to eliminate \\(a\\)."
        },
        {
          "stepNumber": 3,
          "description": "Clear fractions to a quadratic.",
          "workingLatex": "6 = 27 r(1 - r) \\Rightarrow 27 r^{2} - 27 r + 6 = 0",
          "explanation": "Clear the fractions to get the quadratic \\(27r^{2}-27r+6=0\\)."
        },
        {
          "stepNumber": 4,
          "description": "Solve the quadratic.",
          "workingLatex": "r = \\dfrac{27 \\pm \\sqrt{729 - 648}}{54} = \\dfrac{27 \\pm 9}{54} = \\tfrac23 \\text{ or } \\tfrac13",
          "explanation": "The discriminant is \\(729-648=81\\), \\(\\sqrt{81}=9\\), giving \\(r=\\tfrac23\\) or \\(\\tfrac13\\); both satisfy \\(|r|<1\\), so both are valid."
        },
        {
          "stepNumber": 5,
          "description": "Find \\(a\\) for each root.",
          "workingLatex": "r = \\tfrac23 \\Rightarrow a = 9;\\quad r = \\tfrac13 \\Rightarrow a = 18",
          "explanation": "Each root gives its own \\(a\\) via \\(a=\\tfrac6r\\): \\((9,\\tfrac23)\\) and \\((18,\\tfrac13)\\). Don't discard the second solution — the problem genuinely has two."
        }
      ],
      "finalAnswer": "Two solutions: \\((a, r) = (9, \\tfrac{2}{3})\\) or \\((18, \\tfrac{1}{3})\\)."
    }
  },
  {
    "id": "y2ss3-070",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 70",
    "difficulty": "Challenge",
    "questionText": "A patient takes a dose of 20 mg of a drug at the beginning of each day. Each day, the body eliminates 60% of the total drug present. (a) Write a recurrence for the mass \\(m_{n}\\) of the drug in the body immediately after the \\(n\\)th dose (\\(m_{1} = 20\\)). (b) Find the long-term amount of the drug in the body. (c) If safety regulations forbid more than 40 mg of the drug in the body at any time, is the treatment plan safe? Justify.",
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
          "stepNumber": 1,
          "description": "(a) Convert the elimination to a multiplier.",
          "workingLatex": "\\text{eliminates } 60\\% \\Rightarrow \\text{retains } 40\\% = 0.4",
          "explanation": "Eliminating 60% leaves 40%, so the carry-over multiplier is \\(0.4\\) — convert the percentage before building the recurrence."
        },
        {
          "stepNumber": 2,
          "description": "(a) Build the recurrence.",
          "workingLatex": "m_{n+1} = 0.4 m_{n} + 20,\\quad m_{1} = 20",
          "explanation": "Each day the existing drug scales by \\(0.4\\) then a \\(20\\) mg dose is added: \\(m_{n+1}=0.4m_n+20\\), \\(m_1=20\\)."
        },
        {
          "stepNumber": 3,
          "description": "(b) Set up the equilibrium.",
          "workingLatex": "L = 0.4 L + 20",
          "explanation": "At the long-term level consecutive amounts are equal, so set \\(m_{n+1}=m_n=L\\)."
        },
        {
          "stepNumber": 4,
          "description": "(b) Solve for \\(L\\).",
          "workingLatex": "0.6 L = 20 \\Rightarrow L = \\tfrac{100}{3} \\approx 33.33\\ \\text{mg}",
          "explanation": "Solving \\(0.6L=20\\) gives \\(L=\\tfrac{100}{3}\\approx33.33\\) mg."
        },
        {
          "stepNumber": 5,
          "description": "(c) Check the safety limit.",
          "workingLatex": "33.33 < 40 \\Rightarrow \\text{safe}",
          "explanation": "Since the steady-state \\(33.33\\) mg stays below the \\(40\\) mg cap, the plan is safe — and because the level only rises towards \\(L\\), it never exceeds it."
        }
      ],
      "finalAnswer": "\\(m_{n+1} = 0.4 m_{n} + 20\\); long-term \\(\\approx 33.33\\) mg; treatment is safe."
    }
  },
  {
    "id": "y2ss3-071",
    "topicRef": "y2ss3",
    "topicTitle": "Geometric Sequences 71",
    "difficulty": "Challenge",
    "questionText": "A scientist models the length of a rare isotope-decay chain as a geometric progression. After each stage, 75% of the material converts to a stable isotope, and the remainder continues to decay. If the total mass converted to stable isotope after infinitely many stages is 4 kg, (a) find the initial mass of material and (b) find the mass remaining to decay after 5 stages.",
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
          "stepNumber": 1,
          "description": "(a) Set up the total-converted series.",
          "workingLatex": "\\text{stage } n \\text{ converts } 0.75\\,M_{0}(0.25)^{n}",
          "explanation": "Each stage converts 75% of what remains and carries the surviving 25% forward, so the amounts converted form a GP with ratio \\(0.25\\)."
        },
        {
          "stepNumber": 2,
          "description": "(a) Sum the series and set to 4.",
          "workingLatex": "\\sum_{n=0}^{\\infty} 0.75 M_{0}(0.25)^{n} = \\dfrac{0.75 M_{0}}{1 - 0.25} = \\dfrac{0.75 M_{0}}{0.75} = M_{0}",
          "explanation": "Summing that series gives \\(\\tfrac{0.75M_0}{1-0.25}=M_0\\): every bit of material is eventually converted, so the total converted equals the starting mass."
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve for the initial mass.",
          "workingLatex": "M_{0} = 4\\ \\text{kg}",
          "explanation": "Setting the total to \\(4\\) kg therefore gives \\(M_0=4\\) kg directly."
        },
        {
          "stepNumber": 4,
          "description": "(b) Find the mass remaining after 5 stages.",
          "workingLatex": "4(0.25)^{5} = \\dfrac{4}{1024} \\approx 0.0039\\ \\text{kg} \\approx 3.9\\ \\text{g}",
          "explanation": "Only 25% survives each stage, so after 5 stages \\(4(0.25)^{5}=\\tfrac{4}{1024}\\approx0.0039\\) kg \\(=3.9\\) g remains."
        }
      ],
      "finalAnswer": "Initial 4 kg; remaining after 5 stages \\(\\approx 3.9\\) g."
    }
  }
];
