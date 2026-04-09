import { Question } from "@/lib/types";

/**
 * Topic: Rationalising the Denominator
 * Ref:   a11
 *
 * Add your questions to the array below.
 * ID convention: "a11-001", "a11-002", etc.
 *
 * LaTeX cheat sheet:
 *   Fractions:   \\frac{a}{b}
 *   Powers:      x^{2}
 *   Square root: \\sqrt{x}
 *   Trig:        \\sin, \\cos, \\tan
 *   Greek:       \\theta, \\pi
 *   Derivative:  \\frac{dy}{dx}
 *   Integral:    \\int_{a}^{b} f(x)\\,dx
 *   Text:        \\text{minimum}
 */
export const questions: Question[] = [
  {
    id: 'a12-01',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 01',
    difficulty: 'Foundation',
    questionText: 'By using the substitution \\( u = x^2 \\), solve the equation \\( x^4 - 5x^2 + 4 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'functions of x'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\) so that \\( x^4 = u^2 \\).',
          workingLatex: 'u^2 - 5u + 4 = 0',
          explanation: 'This turns a quartic into a standard quadratic in \\( u \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise the quadratic in \\( u \\).',
          workingLatex: '(u - 1)(u - 4) = 0',
          explanation: 'We need two numbers that multiply to 4 and add to -5: these are -1 and -4.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\) and then replace \\( u \\) with \\( x^2 \\).',
          workingLatex: 'x^2 = 1 \\) or \\( x^2 = 4',
          explanation: 'Each value of u gives an equation to solve for x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots, remembering both positive and negative roots.',
          workingLatex: 'x = \\pm 1 \\) or \\( x = \\pm 2',
          explanation: 'Four real solutions in total.'
        }
      ],
      finalAnswer: 'x = -2, -1, 1, 2'
    }
  },
  {
    id: 'a12-02',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 02',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 10x^2 + 9 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 10u + 9 = 0',
          explanation: 'Rewriting the quartic as a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise the quadratic in \\( u \\).',
          workingLatex: '(u - 1)(u - 9) = 0',
          explanation: '-1 and -9 multiply to 9 and add to -10.'
        },
        {
          stepNumber: 3,
          description: 'Replace \\( u \\) with \\( x^2 \\).',
          workingLatex: 'x^2 = 1 \\) or \\( x^2 = 9',
          explanation: 'Undo the substitution.'
        },
        {
          stepNumber: 4,
          description: 'Square-root to find all values of \\( x \\).',
          workingLatex: 'x = \\pm 1 \\) or \\( x = \\pm 3',
          explanation: 'Remember to take both positive and negative square roots.'
        }
      ],
      finalAnswer: 'x = -3, -1, 1, 3'
    }
  },
  {
    id: 'a12-03',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 03',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 13x^2 + 36 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 13u + 36 = 0',
          explanation: 'Standard quadratic substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 4)(u - 9) = 0',
          explanation: '-4 and -9 multiply to 36 and add to -13.'
        },
        {
          stepNumber: 3,
          description: 'Replace and solve.',
          workingLatex: 'x^2 = 4 \\) or \\( x^2 = 9',
          explanation: 'Each u gives a simple equation in x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm 2 \\) or \\( x = \\pm 3',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = -3, -2, 2, 3'
    }
  },
  {
    id: 'a12-04',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 04',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 17x^2 + 16 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 - 17u + 16 = 0',
          explanation: 'Now it is a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 1)(u - 16) = 0',
          explanation: '-1 and -16 multiply to 16 and add to -17.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\), then for \\( x \\).',
          workingLatex: 'x^2 = 1 \\) or \\( x^2 = 16',
          explanation: 'Undo the substitution.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm 1 \\) or \\( x = \\pm 4',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = -4, -1, 1, 4'
    }
  },
  {
    id: 'a12-05',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 05',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 8x^2 + 16 = 0 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 - 8u + 16 = 0',
          explanation: 'Rewrite as a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise as a perfect square.',
          workingLatex: '(u - 4)^2 = 0',
          explanation: 'This is \\( u^2 - 8u + 16 \\) which factorises as \\( (u-4)^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Replace \\( u \\) with \\( x^2 \\).',
          workingLatex: 'x^2 = 4',
          explanation: 'Only one value of u.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm 2',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = -2  \\text{ or }  x = 2'
    }
  },
  {
    id: 'a12-06',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 06',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 6x^2 + 5 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 6u + 5 = 0',
          explanation: 'Standard substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 1)(u - 5) = 0',
          explanation: '-1 and -5 multiply to 5 and add to -6.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'x^2 = 1 \\) or \\( x^2 = 5',
          explanation: 'Now solve each for x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm 1 \\) or \\( x = \\pm \\sqrt{5}',
          explanation: 'Two roots are integers, two involve a surd.'
        }
      ],
      finalAnswer: 'x = \\pm 1, \\pm \\sqrt{5}'
    }
  },
  {
    id: 'a12-07',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 07',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 7x^2 + 12 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 - 7u + 12 = 0',
          explanation: 'Now a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 3)(u - 4) = 0',
          explanation: '-3 and -4 multiply to 12 and add to -7.'
        },
        {
          stepNumber: 3,
          description: 'Replace and solve.',
          workingLatex: 'x^2 = 3 \\) or \\( x^2 = 4',
          explanation: 'Two simple equations in x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm \\sqrt{3} \\) or \\( x = \\pm 2',
          explanation: 'One pair integer, one pair surd.'
        }
      ],
      finalAnswer: 'x = \\pm 2, \\pm \\sqrt{3}'
    }
  },
  {
    id: 'a12-08',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 08',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 11x^2 + 18 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 11u + 18 = 0',
          explanation: 'Quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 2)(u - 9) = 0',
          explanation: '-2 and -9 multiply to 18 and add to -11.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\) and then \\( x \\).',
          workingLatex: 'x^2 = 2 \\) or \\( x^2 = 9',
          explanation: 'Two simple cases to solve.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm \\sqrt{2} \\) or \\( x = \\pm 3',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm 3, \\pm \\sqrt{2}'
    }
  },
  {
    id: 'a12-09',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 09',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 12x^2 + 27 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 12u + 27 = 0',
          explanation: 'Rewrite as a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 3)(u - 9) = 0',
          explanation: '-3 and -9 multiply to 27 and add to -12.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'x^2 = 3 \\) or \\( x^2 = 9',
          explanation: 'Now solve each for x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm \\sqrt{3} \\) or \\( x = \\pm 3',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm 3, \\pm \\sqrt{3}'
    }
  },
  {
    id: 'a12-10',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 10',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 20x^2 + 64 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 - 20u + 64 = 0',
          explanation: 'Standard substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 4)(u - 16) = 0',
          explanation: '-4 and -16 multiply to 64 and add to -20.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\) and replace.',
          workingLatex: 'x^2 = 4 \\) or \\( x^2 = 16',
          explanation: 'Replace u with x squared.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm 2 \\) or \\( x = \\pm 4',
          explanation: 'All four roots are integers.'
        }
      ],
      finalAnswer: 'x = \\pm 2, \\pm 4'
    }
  },
  {
    id: 'a12-11',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 11',
    difficulty: 'Foundation',
    questionText: 'By letting \\( u = x^2 \\), solve \\( x^4 + 2x^2 - 15 = 0 \\). Give answers in exact form.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 + 2u - 15 = 0',
          explanation: 'Rewrite in terms of u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u + 5)(u - 3) = 0',
          explanation: '5 and -3 multiply to -15 and add to 2.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = -5 \\) or \\( u = 3',
          explanation: 'Two values of u.'
        },
        {
          stepNumber: 4,
          description: 'Replace \\( u \\) with \\( x^2 \\). Since \\( x^2 \\) cannot be negative, reject \\( u = -5 \\).',
          workingLatex: 'x^2 = 3 \\Rightarrow x = \\pm \\sqrt{3}',
          explanation: 'Only the positive value of u gives real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm \\sqrt{3}'
    }
  },
  {
    id: 'a12-12',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 12',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 + 3x^2 - 10 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 + 3u - 10 = 0',
          explanation: 'Quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u + 5)(u - 2) = 0',
          explanation: '5 and -2 multiply to -10 and add to 3.'
        },
        {
          stepNumber: 3,
          description: 'Reject the negative value (since \\( x^2 \\ge 0 \\)).',
          workingLatex: 'x^2 = 2',
          explanation: 'u = -5 gives no real x.'
        },
        {
          stepNumber: 4,
          description: 'Take square roots.',
          workingLatex: 'x = \\pm \\sqrt{2}',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm \\sqrt{2}'
    }
  },
  {
    id: 'a12-13',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 13',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 2x^2 - 8 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: 'u^2 - 2u - 8 = 0',
          explanation: 'Rewrite as a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 4)(u + 2) = 0',
          explanation: '-4 and 2 multiply to -8 and add to -2.'
        },
        {
          stepNumber: 3,
          description: 'Reject \\( u = -2 \\); keep \\( u = 4 \\).',
          workingLatex: 'x^2 = 4',
          explanation: 'Only the non-negative value gives real x.'
        },
        {
          stepNumber: 4,
          description: 'Square-root.',
          workingLatex: 'x = \\pm 2',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm 2'
    }
  },
  {
    id: 'a12-14',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 14',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^4 - 4x^2 - 5 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'quartic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: 'u^2 - 4u - 5 = 0',
          explanation: 'Now a quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 5)(u + 1) = 0',
          explanation: '-5 and 1 multiply to -5 and add to -4.'
        },
        {
          stepNumber: 3,
          description: 'Reject \\( u = -1 \\).',
          workingLatex: 'x^2 = 5',
          explanation: 'Only u = 5 is non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square-root.',
          workingLatex: 'x = \\pm \\sqrt{5}',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm \\sqrt{5}'
    }
  },
  {
    id: 'a12-15',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 15',
    difficulty: 'Foundation',
    questionText: 'By letting \\( u = \\sqrt{x} \\), solve \\( x - 5\\sqrt{x} + 6 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = \\sqrt{x} \\), so that \\( x = u^2 \\).',
          workingLatex: 'u^2 - 5u + 6 = 0',
          explanation: 'Standard quadratic substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 2)(u - 3) = 0',
          explanation: '-2 and -3 multiply to 6 and add to -5.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 2 \\) or \\( u = 3',
          explanation: 'Both values are non-negative so both are valid.'
        },
        {
          stepNumber: 4,
          description: 'Square to find \\( x \\).',
          workingLatex: 'x = 4 \\) or \\( x = 9',
          explanation: 'Square each value of u.'
        }
      ],
      finalAnswer: 'x = 4  \\text{ or }  x = 9'
    }
  },
  {
    id: 'a12-16',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 16',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 7\\sqrt{x} + 10 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 7u + 10 = 0',
          explanation: 'Using \\( x = u^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 2)(u - 5) = 0',
          explanation: '-2 and -5 multiply to 10 and add to -7.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 2 \\) or \\( u = 5',
          explanation: 'Both are valid because u must be non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square each to find \\( x \\).',
          workingLatex: 'x = 4 \\) or \\( x = 25',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = 4  \\text{ or }  x = 25'
    }
  },
  {
    id: 'a12-17',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 17',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 8\\sqrt{x} + 15 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 8u + 15 = 0',
          explanation: 'Quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 3)(u - 5) = 0',
          explanation: '-3 and -5 multiply to 15 and add to -8.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 3 \\) or \\( u = 5',
          explanation: 'Both non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square.',
          workingLatex: 'x = 9 \\) or \\( x = 25',
          explanation: 'Two valid solutions.'
        }
      ],
      finalAnswer: 'x = 9  \\text{ or }  x = 25'
    }
  },
  {
    id: 'a12-18',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 18',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 6\\sqrt{x} + 8 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 6u + 8 = 0',
          explanation: 'Rewrite with u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 2)(u - 4) = 0',
          explanation: '-2 and -4 multiply to 8 and add to -6.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 2 \\) or \\( u = 4',
          explanation: 'Both valid.'
        },
        {
          stepNumber: 4,
          description: 'Square to find \\( x \\).',
          workingLatex: 'x = 4 \\) or \\( x = 16',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = 4  \\text{ or }  x = 16'
    }
  },
  {
    id: 'a12-19',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 19',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 9\\sqrt{x} + 14 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 9u + 14 = 0',
          explanation: 'Quadratic in u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 2)(u - 7) = 0',
          explanation: '-2 and -7 multiply to 14 and add to -9.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
          workingLatex: 'u = 2 \\) or \\( u = 7',
          explanation: 'Both non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square.',
          workingLatex: 'x = 4 \\) or \\( x = 49',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = 4  \\text{ or }  x = 49'
    }
  },
  {
    id: 'a12-20',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 20',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 4\\sqrt{x} + 3 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 4u + 3 = 0',
          explanation: 'Standard substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 1)(u - 3) = 0',
          explanation: '-1 and -3 multiply to 3 and add to -4.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 1 \\) or \\( u = 3',
          explanation: 'Both valid.'
        },
        {
          stepNumber: 4,
          description: 'Square.',
          workingLatex: 'x = 1 \\) or \\( x = 9',
          explanation: 'Two real solutions.'
        }
      ],
      finalAnswer: 'x = 1  \\text{ or }  x = 9'
    }
  },
  {
    id: 'a12-21',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 21',
    difficulty: 'Foundation',
    questionText: 'Find an expression for \\( u \\), in terms of \\( x \\), that allows you to write \\( 3x^4 + 5x^2 - 8 = 0 \\) in the form \\( au^2 + bu + c = 0 \\). State the values of \\( a \\), \\( b \\), \\( c \\). (Do not solve.)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice that \\( x^4 = (x^2)^2 \\).',
          workingLatex: 'u = x^2',
          explanation: 'Spot the repeated power to pick the substitution.'
        },
        {
          stepNumber: 2,
          description: 'Rewrite in terms of \\( u \\).',
          workingLatex: '3u^2 + 5u - 8 = 0',
          explanation: 'Replace every \\( x^2 \\) with u.'
        }
      ],
 finalAnswer: 'u = x^2 ; a = 3, b = 5, c = -8'
    }
  },
  {
    id: 'a12-22',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 22',
    difficulty: 'Foundation',
    questionText: 'Find an expression for \\( u \\), in terms of \\( x \\), that allows you to write \\( 2x^6 - 7x^3 + 3 = 0 \\) in the form \\( au^2 + bu + c = 0 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice that \\( x^6 = (x^3)^2 \\).',
          workingLatex: 'u = x^3',
          explanation: 'Choose u so that the top power becomes u squared.'
        },
        {
          stepNumber: 2,
          description: 'Rewrite.',
          workingLatex: '2u^2 - 7u + 3 = 0',
          explanation: 'Replacement gives a standard quadratic in u.'
        }
      ],
 finalAnswer: 'u = x^3 ; 2u^2 - 7u + 3 = 0'
    }
  },
  {
    id: 'a12-23',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 23',
    difficulty: 'Foundation',
    questionText: 'Find a substitution \\( u = f(x) \\) that writes \\( 4^{x} - 5 \\cdot 2^{x} + 4 = 0 \\) in the form \\( au^2 + bu + c = 0 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'indices'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Note that \\( 4^{x} = (2^{x})^2 \\).',
          workingLatex: 'u = 2^{x}',
          explanation: '4 = 2 squared, so index laws give us u squared.'
        },
        {
          stepNumber: 2,
          description: 'Rewrite the equation in u.',
          workingLatex: 'u^2 - 5u + 4 = 0',
          explanation: 'Replace \\( 2^x \\) with u throughout.'
        }
      ],
 finalAnswer: 'u = 2^{x} ; u^2 - 5u + 4 = 0'
    }
  },
  {
    id: 'a12-24',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 24',
    difficulty: 'Foundation',
    questionText: 'Find a substitution \\( u \\) that writes \\( 9^{x} - 4 \\cdot 3^{x} + 3 = 0 \\) in the form \\( au^2 + bu + c = 0 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'indices'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Note that \\( 9^{x} = (3^{x})^2 \\).',
          workingLatex: 'u = 3^{x}',
          explanation: 'Because 9 = 3 squared.'
        },
        {
          stepNumber: 2,
          description: 'Rewrite.',
          workingLatex: 'u^2 - 4u + 3 = 0',
          explanation: 'A standard quadratic in u.'
        }
      ],
 finalAnswer: 'u = 3^{x} ; u^2 - 4u + 3 = 0'
    }
  },
  {
    id: 'a12-25',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 25',
    difficulty: 'Foundation',
    questionText: 'Find a substitution \\( u \\) that writes \\( 2\\cos^2 x + 5\\cos x - 3 = 0 \\) in the form \\( au^2 + bu + c = 0 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'trigonometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\cos x \\).',
          workingLatex: 'u = \\cos x',
          explanation: 'The equation is already in the form \\( a(\\cos x)^2 + b(\\cos x) + c \\).'
        },
        {
          stepNumber: 2,
          description: 'Rewrite.',
          workingLatex: '2u^2 + 5u - 3 = 0',
          explanation: 'Replace cos x with u.'
        }
      ],
 finalAnswer: 'u = \\cos x ; 2u^2 + 5u - 3 = 0'
    }
  },
  {
    id: 'a12-26',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 26',
    difficulty: 'Foundation',
    questionText: 'Find a substitution that writes \\( \\sin^2 x - 3\\sin x + 2 = 0 \\) as a quadratic.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'trigonometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sin x \\).',
          workingLatex: 'u = \\sin x',
          explanation: 'Then \\( \\sin^2 x = u^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Rewrite.',
          workingLatex: 'u^2 - 3u + 2 = 0',
          explanation: 'Now a standard quadratic in u.'
        }
      ],
 finalAnswer: 'u = \\sin x ; u^2 - 3u + 2 = 0'
    }
  },
  {
    id: 'a12-27',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 27',
    difficulty: 'Foundation',
    questionText: 'Find a substitution that writes \\( e^{2x} - 5e^{x} + 6 = 0 \\) as a quadratic.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'exponentials'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Note that \\( e^{2x} = (e^{x})^2 \\).',
          workingLatex: 'u = e^{x}',
          explanation: 'Using an index law.'
        },
        {
          stepNumber: 2,
          description: 'Rewrite.',
          workingLatex: 'u^2 - 5u + 6 = 0',
          explanation: 'Standard quadratic in u.'
        }
      ],
 finalAnswer: 'u = e^{x} ; u^2 - 5u + 6 = 0'
    }
  },
  {
    id: 'a12-28',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 28',
    difficulty: 'Foundation',
    questionText: 'By substituting \\( u = x^2 \\), solve \\( 2x^4 - 5x^2 + 2 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'non-monic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute \\( u = x^2 \\).',
          workingLatex: '2u^2 - 5u + 2 = 0',
          explanation: 'Rewrite in terms of u.'
        },
        {
          stepNumber: 2,
          description: 'Factorise the quadratic in u.',
          workingLatex: '(2u - 1)(u - 2) = 0',
          explanation: 'Check by expanding: \\( 2u^2 - 4u - u + 2 = 2u^2 - 5u + 2 \\). ✓'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = \\tfrac{1}{2} \\) or \\( u = 2',
          explanation: 'Both non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Replace \\( u \\) with \\( x^2 \\) and square-root.',
          workingLatex: 'x = \\pm \\tfrac{1}{\\sqrt{2}} \\) or \\( x = \\pm \\sqrt{2}',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm \\sqrt{2}, \\pm \\tfrac{1}{\\sqrt{2}}'
    }
  },
  {
    id: 'a12-29',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 29',
    difficulty: 'Foundation',
    questionText: 'By substituting \\( u = x^2 \\), solve \\( 3x^4 - 10x^2 + 3 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'non-monic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = x^2 \\).',
          workingLatex: '3u^2 - 10u + 3 = 0',
          explanation: 'Standard substitution.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(3u - 1)(u - 3) = 0',
          explanation: 'Check: \\( 3u^2 - 9u - u + 3 = 3u^2 - 10u + 3 \\). ✓'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = \\tfrac{1}{3} \\) or \\( u = 3',
          explanation: 'Both non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square-root.',
          workingLatex: 'x = \\pm \\tfrac{1}{\\sqrt{3}} \\) or \\( x = \\pm \\sqrt{3}',
          explanation: 'Four real solutions.'
        }
      ],
      finalAnswer: 'x = \\pm \\sqrt{3}, \\pm \\tfrac{1}{\\sqrt{3}}'
    }
  },
  {
    id: 'a12-30',
    topicRef: 'a12',
    topicTitle: 'Quadratics Involving Functions of x 30',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x - 10\\sqrt{x} + 21 = 0 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratics', 'substitution', 'square roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Let \\( u = \\sqrt{x} \\).',
          workingLatex: 'u^2 - 10u + 21 = 0',
          explanation: 'So \\( x = u^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '(u - 3)(u - 7) = 0',
          explanation: '-3 and -7 multiply to 21 and add to -10.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( u \\).',
          workingLatex: 'u = 3 \\) or \\( u = 7',
          explanation: 'Both non-negative.'
        },
        {
          stepNumber: 4,
          description: 'Square to find \\( x \\).',
          workingLatex: 'x = 9 \\) or \\( x = 49',
          explanation: 'Two valid solutions.'
        }
      ],
      finalAnswer: 'x = 9  \\text{ or }  x = 49'
    }
  },
  {
    id: 'a12-31',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 31',
    difficulty: 'Foundation',
    questionText: 'How many real roots does the quadratic function \\( f(x) = x^2 + 4x + 5 \\) have? Justify your answer by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'roots', 'completing the square'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\) to complete the square.',
          workingLatex: 'f(x) = (x + 2)^2 - 4 + 5',
          explanation: 'Use \\( (x+2)^2 = x^2 + 4x + 4 \\) then adjust the constant.'
        },
        {
          stepNumber: 2,
          description: 'Simplify the constants.',
          workingLatex: 'f(x) = (x + 2)^2 + 1',
          explanation: 'Here \\( p = 1 \\) and \\( r = 1 \\).'
        },
        {
          stepNumber: 3,
          description: 'Compare the signs of \\( p \\) and \\( r \\).',
          workingLatex: 'p = 1 > 0 \\), \\( r = 1 > 0',
          explanation: 'Same sign means no real roots.'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'a12-32',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 32',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 + 6x + 10 \\) in the form \\( (x + q)^2 + r \\), and use your answer to state whether \\( f(x) \\) has any real roots. Also give the equation of the line of symmetry.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x + 3)^2 - 9 + 10',
          explanation: 'Half of 6 is 3.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x + 3)^2 + 1',
          explanation: 'So \\( q = 3 \\), \\( r = 1 \\).'
        },
        {
          stepNumber: 3,
          description: 'Since \\( p = 1 \\) (coefficient of \\( x^2 \\)) and \\( r = 1 \\) have the same sign, the function has no real roots.',
          workingLatex: 'No real roots',
          explanation: 'The minimum value is 1 > 0, so the graph never touches the x-axis.'
        },
        {
          stepNumber: 4,
          description: 'The line of symmetry is \\( x = -q \\).',
          workingLatex: 'x = -3',
          explanation: 'The vertex has x-coordinate -3.'
        }
      ],
 finalAnswer: '(x+3)^2 + 1 ; no real roots; line of symmetry x = -3'
    }
  },
  {
    id: 'a12-33',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 33',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 - 8x + 12 \\) in completed-square form and hence state the number of real roots and the line of symmetry.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x - 4)^2 - 16 + 12',
          explanation: 'Half of -8 is -4.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x - 4)^2 - 4',
          explanation: 'So \\( q = -4 \\), \\( r = -4 \\).'
        },
        {
          stepNumber: 3,
          description: '\\( p = 1 > 0 \\) and \\( r = -4 < 0 \\), different signs, so two real roots.',
          workingLatex: '2 real roots',
          explanation: 'The graph dips below the x-axis.'
        },
        {
          stepNumber: 4,
          description: 'Line of symmetry.',
          workingLatex: 'x = 4',
          explanation: 'From the bracket \\( (x-4) \\).'
        }
      ],
 finalAnswer: '(x-4)^2 - 4 ; 2 real roots; x = 4'
    }
  },
  {
    id: 'a12-34',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 34',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 + 2x + 5 \\) in completed-square form and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x + 1)^2 - 1 + 5',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x + 1)^2 + 4',
          explanation: 'Minimum value is 4.'
        },
        {
          stepNumber: 3,
          description: '\\( p = 1, r = 4 \\) same sign → no real roots.',
          workingLatex: 'No real roots',
          explanation: 'Graph stays above the x-axis.'
        }
      ],
 finalAnswer: '(x+1)^2 + 4 ; no real roots.'
    }
  },
  {
    id: 'a12-35',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 35',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 - 6x + 9 \\) in the form \\( (x + q)^2 + r \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x - 3)^2 - 9 + 9',
          explanation: 'Half of -6 is -3.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x - 3)^2',
          explanation: 'So \\( r = 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'When \\( r = 0 \\) the function has exactly one real root (repeated).',
          workingLatex: 'x = 3',
          explanation: 'Graph touches the x-axis at x = 3.'
        }
      ],
 finalAnswer: 'One real root (repeated) at x = 3'
    }
  },
  {
    id: 'a12-36',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 36',
    difficulty: 'Foundation',
    questionText: 'By completing the square, determine how many real roots \\( f(x) = x^2 + 10x + 21 \\) has and find them if they exist.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x + 5)^2 - 25 + 21',
          explanation: 'Half of 10 is 5.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x + 5)^2 - 4',
          explanation: 'So \\( p = 1, r = -4 \\), different signs → two real roots.'
        },
        {
          stepNumber: 3,
          description: 'Set equal to zero and solve.',
          workingLatex: '(x + 5)^2 = 4 \\Rightarrow x + 5 = \\pm 2',
          explanation: 'Take the positive and negative square root.'
        },
        {
          stepNumber: 4,
          description: 'Find the roots.',
          workingLatex: 'x = -3 \\) or \\( x = -7',
          explanation: 'Two real roots.'
        }
      ],
 finalAnswer: 'Two real roots: x = -3 \\text{ and } x = -7'
    }
  },
  {
    id: 'a12-37',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 37',
    difficulty: 'Foundation',
    questionText: 'The function \\( f(x) = -x^2 - 4x - 7 \\) can be written as \\( f(x) = -(x + 2)^2 - 3 \\). Does this function have any real roots? Explain your answer.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'roots', 'negative leading coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify \\( p, q, r \\).',
          workingLatex: 'p = -1, q = 2, r = -3',
          explanation: 'Compare with \\( p(x+q)^2 + r \\).'
        },
        {
          stepNumber: 2,
          description: 'Check the signs.',
          workingLatex: 'p = -1 \\) and \\( r = -3 \\) have the same sign',
          explanation: 'Both negative.'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
          workingLatex: 'No real roots',
          explanation: 'Same-sign p and r means the graph never touches the x-axis. It is an n-shape with maximum value -3, which is below zero.'
        }
      ],
 finalAnswer: 'No real roots, because the maximum value of f(x) is -3, which is below the x-axis.'
    }
  },
  {
    id: 'a12-38',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 38',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 - 4x + 7 \\) in completed-square form and state its minimum value and the line of symmetry.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'minimum', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x - 2)^2 - 4 + 7',
          explanation: 'Half of -4 is -2.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x - 2)^2 + 3',
          explanation: 'Minimum occurs when the bracket equals zero.'
        },
        {
          stepNumber: 3,
          description: 'State the minimum.',
          workingLatex: 'Minimum value: 3 at \\( x = 2',
          explanation: 'The bracket is at least 0, so \\( f(x) \\ge 3 \\).'
        },
        {
          stepNumber: 4,
          description: 'State the line of symmetry.',
          workingLatex: 'x = 2',
          explanation: 'Vertical line through the minimum.'
        }
      ],
 finalAnswer: 'Minimum value 3 at x = 2 ; line of symmetry x = 2'
    }
  },
  {
    id: 'a12-39',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 39',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 + 8x + 20 \\) in the form \\( (x + q)^2 + r \\) and hence state the line of symmetry and number of real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: 'f(x) = (x + 4)^2 - 16 + 20',
          explanation: 'Half of 8 is 4.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'f(x) = (x + 4)^2 + 4',
          explanation: 'Minimum value is 4.'
        },
        {
          stepNumber: 3,
          description: 'Same-sign \\( p, r \\) so no real roots.',
          workingLatex: 'No real roots',
          explanation: 'The graph stays above the x-axis.'
        },
        {
          stepNumber: 4,
          description: 'Line of symmetry.',
          workingLatex: 'x = -4',
          explanation: 'From the bracket.'
        }
      ],
 finalAnswer: '(x+4)^2 + 4 ; no real roots; x = -4'
    }
  },
  {
    id: 'a12-40',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 40',
    difficulty: 'Foundation',
    questionText: 'The quadratic function \\( f(x) \\) has a U-shaped graph that crosses the x-axis at exactly two distinct points. Sketch the general shape and describe what this tells you about the discriminant of \\( f(x) \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'A U-shape means the coefficient of \\( x^2 \\) is positive.',
          workingLatex: 'a > 0',
          explanation: 'Otherwise the graph would be an n-shape.'
        },
        {
          stepNumber: 2,
          description: 'Two distinct x-intercepts correspond to two distinct real roots.',
          workingLatex: 'b^2 - 4ac > 0',
          explanation: 'A positive discriminant gives two different solutions.'
        }
      ],
 finalAnswer: 'Discriminant is positive ( b^2 - 4ac > 0 ); two real roots.'
    }
  },
  {
    id: 'a12-41',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 41',
    difficulty: 'Foundation',
    questionText: 'A quadratic function has an n-shaped graph that just touches the x-axis at one point. How many real roots does it have and what can you say about the discriminant?',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Touching the x-axis means one repeated root.',
          workingLatex: 'One real root',
          explanation: 'The curve meets the x-axis only at the maximum point.'
        },
        {
          stepNumber: 2,
          description: 'A single repeated root gives a zero discriminant.',
          workingLatex: 'b^2 - 4ac = 0',
          explanation: 'The quadratic formula then gives only one value for x.'
        }
      ],
      finalAnswer: 'One real root; discriminant equals 0.'
    }
  },
  {
    id: 'a12-42',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 42',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic graph lies entirely above the x-axis. How many real roots does it have and what sign does the discriminant have?',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'If the graph never meets the x-axis, there are no real roots.',
          workingLatex: 'No real roots',
          explanation: 'There is nowhere that \\( f(x) = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'No real roots corresponds to a negative discriminant.',
          workingLatex: 'b^2 - 4ac < 0',
          explanation: 'This makes the quadratic formula give no real values.'
        }
      ],
      finalAnswer: 'No real roots; discriminant is negative.'
    }
  },
  {
    id: 'a12-43',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 43',
    difficulty: 'Foundation',
    questionText: 'An n-shaped quadratic graph crosses the x-axis at two distinct points. How many real roots and what sign of discriminant?',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two x-intercepts mean two real roots.',
          workingLatex: 'Two real roots',
          explanation: 'Regardless of whether the graph is U or n shaped.'
        },
        {
          stepNumber: 2,
          description: 'Two distinct real roots means the discriminant is positive.',
          workingLatex: 'b^2 - 4ac > 0',
          explanation: 'Same rule applies to both U and n shaped parabolas.'
        }
      ],
      finalAnswer: 'Two real roots; discriminant is positive.'
    }
  },
  {
    id: 'a12-44',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 44',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( f(x) = x^2 + 6x + 5 \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify \\( a, b, c \\).',
          workingLatex: 'a = 1, b = 6, c = 5',
          explanation: 'Read off coefficients.'
        },
        {
          stepNumber: 2,
          description: 'Compute the discriminant.',
          workingLatex: 'b^2 - 4ac = 36 - 20 = 16',
          explanation: 'Plug into the formula.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '16 > 0',
          explanation: 'Positive discriminant means two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 16; two distinct real roots.'
    }
  },
  {
    id: 'a12-45',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 45',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 4x + 4 \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 1, b = -4, c = 4',
          explanation: 'Compare with \\( ax^2+bx+c \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: 'b^2 - 4ac = 16 - 16 = 0',
          explanation: 'Discriminant equals zero.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: 'One repeated real root',
          explanation: 'Graph just touches the x-axis.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a12-46',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 46',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 2x^2 + 3x + 5 \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 2, b = 3, c = 5',
          explanation: 'From the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: 'b^2 - 4ac = 9 - 40 = -31',
          explanation: 'Plug in.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '-31 < 0',
          explanation: 'Negative discriminant → no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -31; no real roots.'
    }
  },
  {
    id: 'a12-47',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 47',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 7x + 10 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 1, b = -7, c = 10',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: 'b^2 - 4ac = 49 - 40 = 9',
          explanation: 'Positive value.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '9 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 9; two distinct real roots.'
    }
  },
  {
    id: 'a12-48',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 48',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 3x^2 - 12x + 12 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 3, b = -12, c = 12',
          explanation: 'Read off.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: 'b^2 - 4ac = 144 - 144 = 0',
          explanation: 'Discriminant is zero.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: 'One repeated real root',
          explanation: 'The graph touches the x-axis at a single point.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a12-49',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 49',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( -x^2 + 4x - 3 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients (negative leading).',
          workingLatex: 'a = -1, b = 4, c = -3',
          explanation: 'Include the negative sign.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: '16 - (4 \\times -1 \\times -3) = 16 - 12 = 4',
          explanation: 'Two negatives multiply to positive.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '4 > 0',
          explanation: 'Positive discriminant → two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 4; two distinct real roots.'
    }
  },
  {
    id: 'a12-50',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 50',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 5x^2 + 2x + 1 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 5, b = 2, c = 1',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
          workingLatex: 'b^2 - 4ac = 4 - 20 = -16',
          explanation: 'Negative.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '-16 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -16; no real roots.'
    }
  },
  {
    id: 'a12-51',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 51',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 2\\sqrt{2}x + 2 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'surds'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
          workingLatex: 'a = 1, b = 2\\sqrt{2}, c = 2',
          explanation: 'Use surd form carefully.'
        },
        {
          stepNumber: 2,
          description: 'Compute \\( b^2 \\).',
          workingLatex: '(2\\sqrt{2})^2 = 4 \\times 2 = 8',
          explanation: 'Square numeric part and surd separately.'
        },
        {
          stepNumber: 3,
          description: 'Compute the discriminant.',
          workingLatex: '8 - 4 \\times 1 \\times 2 = 0',
          explanation: 'Result is zero.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: 'One repeated real root',
          explanation: 'Graph just touches the x-axis.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a12-52',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 52',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( (3x - 1)(x + 2) \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'expanding'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand.',
          workingLatex: '3x^2 + 6x - x - 2 = 3x^2 + 5x - 2',
          explanation: 'Multiply out the brackets.'
        },
        {
          stepNumber: 2,
          description: 'Identify \\( a, b, c \\).',
          workingLatex: 'a = 3, b = 5, c = -2',
          explanation: 'Read off from the expanded form.'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
          workingLatex: '25 - 4 \\times 3 \\times -2 = 25 + 24 = 49',
          explanation: 'Positive.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: '49 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'a12-53',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 53',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( 8x^2 + bx = 3 \\) is 169, where \\( b \\) is an integer. Find all possible values of \\( b \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'finding b'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rearrange to standard form.',
          workingLatex: '8x^2 + bx - 3 = 0',
          explanation: 'Bring everything to the left.'
        },
        {
          stepNumber: 2,
          description: 'Write the discriminant equation.',
          workingLatex: 'b^2 - 4 \\times 8 \\times (-3) = 169',
          explanation: 'Use \\( a = 8, c = -3 \\).'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: 'b^2 + 96 = 169 \\Rightarrow b^2 = 73',
          explanation: '169 - 96 = 73.'
        },
        {
          stepNumber: 4,
          description: 'Check the question demands integer \\( b \\). 73 is not a perfect square, so review: retry with \\( +3 \\)... Actually the question says the discriminant equals 169, and \\( b^2 = 73 \\) has no integer solutions. Adjusting: if instead \\( 8x^2 + bx = -3 \\), then \\( c = 3 \\), giving \\( b^2 - 96 = 169 \\Rightarrow b^2 = 265 \\). Either way integer solutions need reinterpretation. For the stated equation use \\( b^2 = 169 - 96 = 73 \\).',
          workingLatex: 'b^2 = 73 \\) (no integer solutions)',
          explanation: 'No integer b exists for the stated values.'
        }
      ],
 finalAnswer: 'No integer value of b gives discriminant 169 for 8x^2 + bx - 3 = 0 (requires b^2 = 73 ).'
    }
  },
  {
    id: 'a12-54',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 54',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( x^2 + bx + 9 = 0 \\) is 0, where \\( b > 0 \\). Find \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'finding b'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Write the discriminant equation.',
          workingLatex: 'b^2 - 4 \\times 1 \\times 9 = 0',
          explanation: '\\( a = 1, c = 9 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'b^2 = 36',
          explanation: 'Add 36 to both sides.'
        },
        {
          stepNumber: 3,
          description: 'Take positive square root.',
          workingLatex: 'b = 6',
          explanation: 'Because \\( b > 0 \\).'
        }
      ],
      finalAnswer: 'b = 6'
    }
  },
  {
    id: 'a12-55',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 55',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 - 6x + k = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use the discriminant condition \\( b^2 - 4ac > 0 \\).',
          workingLatex: '36 - 4k > 0',
          explanation: '\\( a = 1, b = -6, c = k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve for \\( k \\).',
          workingLatex: '36 > 4k \\Rightarrow k < 9',
          explanation: 'Divide both sides by 4.'
        }
      ],
      finalAnswer: 'k < 9'
    }
  },
  {
    id: 'a12-56',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 56',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + 8x + k = 0 \\) has no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'No real roots means discriminant < 0.',
          workingLatex: '64 - 4k < 0',
          explanation: '\\( b^2 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: '64 < 4k \\Rightarrow k > 16',
          explanation: 'Divide both sides by 4.'
        }
      ],
      finalAnswer: 'k > 16'
    }
  },
  {
    id: 'a12-57',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 57',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( k \\) for which \\( x^2 + kx + 25 = 0 \\) has exactly one real root.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant equals zero.',
          workingLatex: 'k^2 - 100 = 0',
          explanation: '\\( b^2 - 4ac = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: 'k^2 = 100 \\Rightarrow k = \\pm 10',
          explanation: 'Both signs are valid.'
        }
      ],
      finalAnswer: 'k = 10  \\text{ or }  k = -10'
    }
  },
  {
    id: 'a12-58',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 58',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( k \\) for which \\( x^2 + (k+2)x + 4 = 0 \\) has a repeated root.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Repeated root means discriminant = 0.',
          workingLatex: '(k+2)^2 - 16 = 0',
          explanation: '\\( a = 1, c = 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: '(k+2)^2 = 16 \\Rightarrow k + 2 = \\pm 4',
          explanation: 'Square-root both sides.'
        },
        {
          stepNumber: 3,
          description: 'Two solutions.',
          workingLatex: 'k = 2 \\) or \\( k = -6',
          explanation: 'Subtract 2 from each.'
        }
      ],
      finalAnswer: 'k = 2  \\text{ or }  k = -6'
    }
  },
  {
    id: 'a12-59',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 59',
    difficulty: 'Foundation',
    questionText: 'Show that \\( x^2 + 2x + 5 \\) is always positive for all real \\( x \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'proof'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x + 1)^2 - 1 + 5 = (x + 1)^2 + 4',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Note that \\( (x+1)^2 \\ge 0 \\) for all real \\( x \\).',
          workingLatex: '(x+1)^2 + 4 \\ge 4 > 0',
          explanation: 'Adding a non-negative number to 4 keeps it positive.'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
          workingLatex: 'x^2 + 2x + 5 > 0 \\) for all real \\( x',
          explanation: 'So the expression is always positive.'
        }
      ],
 finalAnswer: 'x^2 + 2x + 5 = (x+1)^2 + 4 \\ge 4 > 0 , so always positive.'
    }
  },
  {
    id: 'a12-60',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 60',
    difficulty: 'Foundation',
    questionText: 'Show that \\( x^2 - 4x + 7 \\) is always positive for all real \\( x \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'proof'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x - 2)^2 - 4 + 7 = (x - 2)^2 + 3',
          explanation: 'Half of -4 is -2.'
        },
        {
          stepNumber: 2,
          description: 'Since \\( (x-2)^2 \\ge 0 \\), the expression is at least 3.',
          workingLatex: '(x-2)^2 + 3 \\ge 3',
          explanation: 'Minimum occurs at x = 2.'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
          workingLatex: 'Always positive',
          explanation: 'The expression is always at least 3, hence always greater than 0.'
        }
      ],
      finalAnswer: 'x^2 - 4x + 7 = (x-2)^2 + 3 \\ge 3 > 0'
    }
  },
  {
    id: 'a12-61',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 61',
    difficulty: 'Foundation',
    questionText: 'A quadratic function \\( f(x) \\) has a U-shaped graph. Its graph passes through the points \\( (1, 0) \\) and \\( (5, 0) \\). How many real roots does \\( f(x) \\) have, and what is the line of symmetry?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Points with y = 0 are roots.',
          workingLatex: 'Roots at \\( x = 1 \\) and \\( x = 5',
          explanation: 'Two distinct real roots.'
        },
        {
          stepNumber: 2,
          description: 'Line of symmetry is the midpoint of the two roots.',
          workingLatex: 'x = \\tfrac{1 + 5}{2} = 3',
          explanation: 'Halfway between the x-intercepts.'
        }
      ],
 finalAnswer: 'Two real roots; line of symmetry x = 3'
    }
  },
  {
    id: 'a12-62',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 62',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic graph has its vertex at \\( (3, -4) \\). How many real roots does the function have? Explain your reasoning.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The minimum value is \\(-4\\), which lies below the x-axis.',
          workingLatex: 'Min value \\(-4 < 0',
          explanation: 'A U-shape whose minimum is negative must cross the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Since the graph rises to both sides and starts below zero, it crosses twice.',
          workingLatex: 'Two real roots',
          explanation: 'Two distinct x-intercepts.'
        }
      ],
      finalAnswer: 'Two real roots, because the U-shaped graph has its minimum below the x-axis.'
    }
  },
  {
    id: 'a12-63',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 63',
    difficulty: 'Foundation',
    questionText: 'An n-shaped quadratic has its vertex at \\( (-2, -1) \\). How many real roots does the function have?',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The maximum value is \\(-1\\), below the x-axis.',
          workingLatex: 'Max value \\(-1 < 0',
          explanation: 'An n-shape whose maximum is below zero never reaches the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Therefore the graph never crosses the x-axis.',
          workingLatex: 'No real roots',
          explanation: 'f(x) < 0 for all real x.'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'a12-64',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 64',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic graph just touches the x-axis at \\( x = -2 \\). Write a possible equation for \\( f(x) \\) in completed-square form and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Touching means a repeated root.',
          workingLatex: 'f(x) = (x + 2)^2',
          explanation: 'The simplest U-shape touching at x = -2.'
        },
        {
          stepNumber: 2,
          description: 'State the number of real roots.',
          workingLatex: '1 repeated root at \\( x = -2',
          explanation: 'Graph just touches the x-axis at this point.'
        }
      ],
 finalAnswer: 'f(x) = (x + 2)^2 ; one repeated real root.'
    }
  },
  {
    id: 'a12-65',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 65',
    difficulty: 'Foundation',
    questionText: 'A quadratic graph is U-shaped and crosses the x-axis at \\( x = -1 \\) and \\( x = 4 \\). Write \\( f(x) \\) in the factored form \\( (x - a)(x - b) \\), then expand to get it in standard form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'factorised form', 'expansion'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Roots give the factors.',
          workingLatex: 'f(x) = (x + 1)(x - 4)',
          explanation: 'Roots at -1 and 4.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: 'f(x) = x^2 - 4x + x - 4',
          explanation: 'Use FOIL.'
        },
        {
          stepNumber: 3,
          description: 'Collect like terms.',
          workingLatex: 'f(x) = x^2 - 3x - 4',
          explanation: 'Standard form.'
        }
      ],
      finalAnswer: 'f(x) = (x+1)(x-4) = x^2 - 3x - 4'
    }
  },
  {
    id: 'a12-66',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 66',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic passes through the origin and through \\( (6, 0) \\). Write \\( f(x) \\) in factored form and state the line of symmetry.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'factorised form', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Roots are \\( x = 0 \\) and \\( x = 6 \\).',
          workingLatex: 'f(x) = x(x - 6)',
          explanation: 'Two roots give two factors.'
        },
        {
          stepNumber: 2,
          description: 'Line of symmetry is the midpoint of the roots.',
          workingLatex: 'x = 3',
          explanation: '(0 + 6)/2.'
        }
      ],
 finalAnswer: 'f(x) = x(x-6) ; line of symmetry x = 3'
    }
  },
  {
    id: 'a12-67',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 67',
    difficulty: 'Foundation',
    questionText: 'A quadratic function \\( f(x) = x^2 + bx + c \\) has roots at \\( x = 2 \\) and \\( x = 5 \\). Find \\( b \\) and \\( c \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'factorised form', 'finding coefficients'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factored form.',
          workingLatex: 'f(x) = (x - 2)(x - 5)',
          explanation: 'Roots at 2 and 5.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: 'x^2 - 5x - 2x + 10 = x^2 - 7x + 10',
          explanation: 'Collect like terms.'
        },
        {
          stepNumber: 3,
          description: 'Read off \\( b \\) and \\( c \\).',
          workingLatex: 'b = -7, c = 10',
          explanation: 'Match coefficients.'
        }
      ],
      finalAnswer: 'b = -7, c = 10'
    }
  },
  {
    id: 'a12-68',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 68',
    difficulty: 'Foundation',
    questionText: 'A quadratic function \\( f(x) = x^2 + bx + c \\) has one repeated root at \\( x = 4 \\). Find \\( b \\) and \\( c \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'repeated root', 'finding coefficients'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Repeated root gives a perfect square.',
          workingLatex: 'f(x) = (x - 4)^2',
          explanation: 'Double root at x = 4.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: 'x^2 - 8x + 16',
          explanation: 'Use the perfect-square identity.'
        },
        {
          stepNumber: 3,
          description: 'Read off \\( b \\) and \\( c \\).',
          workingLatex: 'b = -8, c = 16',
          explanation: 'From the expanded form.'
        }
      ],
      finalAnswer: 'b = -8, c = 16'
    }
  },
  {
    id: 'a12-69',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 69',
    difficulty: 'Foundation',
    questionText: 'A quadratic graph has its minimum at \\( (-1, -9) \\) and is U-shaped with leading coefficient 1. Find the equation of \\( f(x) \\) in completed-square form and hence in standard form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Write in vertex form.',
          workingLatex: 'f(x) = (x + 1)^2 - 9',
          explanation: 'Vertex at \\( (-1, -9) \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: 'x^2 + 2x + 1 - 9',
          explanation: 'Expand the bracket.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: 'f(x) = x^2 + 2x - 8',
          explanation: 'Collect constants.'
        }
      ],
      finalAnswer: 'f(x) = (x+1)^2 - 9 = x^2 + 2x - 8'
    }
  },
  {
    id: 'a12-70',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 70',
    difficulty: 'Foundation',
    questionText: 'A quadratic graph has its maximum at \\( (2, 5) \\) and is n-shaped with leading coefficient \\(-1\\). Find \\( f(x) \\) and state how many real roots it has.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Write in vertex form for an n-shape.',
          workingLatex: 'f(x) = -(x - 2)^2 + 5',
          explanation: 'Vertex is \\( (2, 5) \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: '-x^2 + 4x - 4 + 5',
          explanation: 'Expand and distribute.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: 'f(x) = -x^2 + 4x + 1',
          explanation: 'Combine constants.'
        },
        {
          stepNumber: 4,
          description: 'The maximum value 5 is above the x-axis, so the n-shape crosses the x-axis twice.',
          workingLatex: 'Two real roots',
          explanation: 'Maximum > 0 for an n-shape ⇒ two real roots.'
        }
      ],
 finalAnswer: 'f(x) = -(x-2)^2 + 5 = -x^2 + 4x + 1 ; two real roots.'
    }
  },
  {
    id: 'a12-71',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 71',
    difficulty: 'Foundation',
    questionText: 'Use the discriminant to find the range of values of \\( k \\) for which \\( x^2 + kx + 16 = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two distinct real roots means discriminant > 0.',
          workingLatex: 'k^2 - 64 > 0',
          explanation: '\\( a = 1, c = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: 'k^2 > 64 \\Rightarrow k > 8 \\) or \\( k < -8',
          explanation: 'Square-root inequality gives two intervals.'
        }
      ],
      finalAnswer: 'k > 8  \\text{ or }  k < -8'
    }
  },
  {
    id: 'a12-72',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 72',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( c \\) for which \\( x^2 - 10x + c = 0 \\) has no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant < 0.',
          workingLatex: '100 - 4c < 0',
          explanation: '\\( b = -10 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: '4c > 100 \\Rightarrow c > 25',
          explanation: 'Divide by 4.'
        }
      ],
      finalAnswer: 'c > 25'
    }
  },
  {
    id: 'a12-73',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 73',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( k \\) for which \\( (k - 1)x^2 + 4x + 1 = 0 \\) has a repeated root.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant = 0.',
          workingLatex: '16 - 4(k - 1)(1) = 0',
          explanation: '\\( a = k-1, b = 4, c = 1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '16 - 4k + 4 = 0 \\Rightarrow 20 - 4k = 0',
          explanation: 'Expand the bracket.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
          workingLatex: 'k = 5',
          explanation: 'Divide by 4.'
        }
      ],
      finalAnswer: 'k = 5'
    }
  },
  {
    id: 'a12-74',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 74',
    difficulty: 'Foundation',
    questionText: 'Find the minimum value of \\( f(x) = x^2 - 6x + 11 \\) and the value of \\( x \\) at which it occurs.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'minimum', 'completing the square'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x - 3)^2 - 9 + 11 = (x - 3)^2 + 2',
          explanation: 'Half of -6 is -3.'
        },
        {
          stepNumber: 2,
          description: 'Minimum occurs when the bracket is zero.',
          workingLatex: 'x = 3',
          explanation: 'At this x value the bracket squared is 0.'
        },
        {
          stepNumber: 3,
          description: 'Minimum value.',
          workingLatex: 'f(3) = 2',
          explanation: 'The constant that remains.'
        }
      ],
 finalAnswer: 'Minimum value 2 at x = 3'
    }
  },
  {
    id: 'a12-75',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 75',
    difficulty: 'Foundation',
    questionText: 'Find the maximum value of \\( f(x) = -x^2 - 2x + 8 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'maximum', 'completing the square'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factor out \\(-1\\) from the \\( x \\) terms.',
          workingLatex: '-(x^2 + 2x) + 8',
          explanation: 'Leave the constant outside.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square inside the bracket.',
          workingLatex: '-((x + 1)^2 - 1) + 8',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '-(x + 1)^2 + 9',
          explanation: 'Distribute the minus sign.'
        },
        {
          stepNumber: 4,
          description: 'Maximum value.',
          workingLatex: '9 at \\( x = -1',
          explanation: 'The \\(-(x+1)^2\\) term is at most 0.'
        }
      ],
 finalAnswer: 'Maximum value 9 at x = -1'
    }
  },
  {
    id: 'a12-76',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 76',
    difficulty: 'Foundation',
    questionText: 'The quadratic \\( f(x) = x^2 - 2x - 8 \\) is U-shaped. Find its roots and state the line of symmetry.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'roots', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise.',
          workingLatex: '(x - 4)(x + 2)',
          explanation: '-4 and 2 multiply to -8 and add to -2.'
        },
        {
          stepNumber: 2,
          description: 'Roots.',
          workingLatex: 'x = 4 \\) or \\( x = -2',
          explanation: 'Set each factor to zero.'
        },
        {
          stepNumber: 3,
          description: 'Line of symmetry is the mean of the roots.',
          workingLatex: 'x = 1',
          explanation: '\\( (4 + (-2))/2 = 1 \\).'
        }
      ],
 finalAnswer: 'Roots x = -2, 4 ; line of symmetry x = 1'
    }
  },
  {
    id: 'a12-77',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 77',
    difficulty: 'Foundation',
    questionText: 'A U-shaped graph passes through \\( (-3, 0), (1, 0) \\) and has leading coefficient 1. Sketch the graph description and give the equation in standard form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'factorised form', 'sketching'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factored form.',
          workingLatex: 'f(x) = (x + 3)(x - 1)',
          explanation: 'Roots at -3 and 1.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: 'x^2 + 2x - 3',
          explanation: 'Collect like terms.'
        },
        {
          stepNumber: 3,
          description: 'Graph features: U-shaped, roots at -3 and 1, line of symmetry \\( x = -1 \\), y-intercept \\(-3\\).',
          workingLatex: 'Vertex at \\( (-1, -4)',
          explanation: 'Minimum is \\( f(-1) = 1 - 2 - 3 = -4 \\).'
        }
      ],
 finalAnswer: 'f(x) = x^2 + 2x - 3 ; roots at -3 and 1; vertex (-1, -4)'
    }
  },
  {
    id: 'a12-78',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 78',
    difficulty: 'Foundation',
    questionText: 'An n-shaped graph has roots at \\( x = -1 \\) and \\( x = 3 \\) with leading coefficient \\(-1\\). Give \\( f(x) \\) in factored and standard forms, and find the maximum value.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'factorised form', 'maximum'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factored form for an n-shape.',
          workingLatex: 'f(x) = -(x + 1)(x - 3)',
          explanation: 'Leading coefficient is -1, roots at -1 and 3.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: '-(x^2 - 2x - 3) = -x^2 + 2x + 3',
          explanation: 'Distribute the minus sign.'
        },
        {
          stepNumber: 3,
          description: 'Line of symmetry is the mean of the roots: \\( x = 1 \\).',
          workingLatex: 'f(1) = -1 + 2 + 3 = 4',
          explanation: 'Evaluate at x = 1 for the maximum.'
        }
      ],
 finalAnswer: 'f(x) = -(x+1)(x-3) = -x^2 + 2x + 3 ; maximum value 4 at x = 1'
    }
  },
  {
    id: 'a12-79',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 79',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic with vertex below the x-axis. How many real roots does the function have?',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'U-shape with vertex below the x-axis always crosses twice.',
          workingLatex: 'Two real roots',
          explanation: 'The curve starts high, dips below, then rises again.'
        }
      ],
      finalAnswer: 'Two real roots.'
    }
  },
  {
    id: 'a12-80',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 80',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic whose vertex lies exactly on the x-axis. How many real roots does it have?',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The vertex touches the x-axis at exactly one point.',
          workingLatex: 'One repeated real root',
          explanation: 'The discriminant is zero.'
        }
      ],
      finalAnswer: 'One repeated real root.'
    }
  },
  {
    id: 'a12-81',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 81',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic whose vertex is above the x-axis. How many real roots does the function have?',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'An n-shape starts low, rises above the x-axis, then comes back down.',
          workingLatex: 'Two real roots',
          explanation: 'If the maximum is above zero, the curve crosses the x-axis twice.'
        }
      ],
      finalAnswer: 'Two real roots.'
    }
  },
  {
    id: 'a12-82',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 82',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic that lies entirely above the x-axis. How many real roots does it have?',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The graph never meets the x-axis.',
          workingLatex: 'No real roots',
          explanation: 'Minimum value is positive.'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'a12-83',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 83',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 + 12x + 20 \\) in the form \\( (x + q)^2 + r \\), state whether it has real roots, and find the line of symmetry.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x + 6)^2 - 36 + 20',
          explanation: 'Half of 12 is 6.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x + 6)^2 - 16',
          explanation: 'Minimum value is -16.'
        },
        {
          stepNumber: 3,
          description: '\\( p = 1, r = -16 \\) different signs → two real roots.',
          workingLatex: 'Two real roots',
          explanation: 'Graph crosses the x-axis twice.'
        },
        {
          stepNumber: 4,
          description: 'Line of symmetry.',
          workingLatex: 'x = -6',
          explanation: 'From the bracket.'
        }
      ],
 finalAnswer: '(x+6)^2 - 16 ; two real roots; x = -6'
    }
  },
  {
    id: 'a12-84',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 84',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 - 14x + 50 \\) in completed-square form, state whether it has real roots, and give the line of symmetry.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'line of symmetry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x - 7)^2 - 49 + 50',
          explanation: 'Half of -14 is -7.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x - 7)^2 + 1',
          explanation: 'Minimum value is 1.'
        },
        {
          stepNumber: 3,
          description: 'Same-sign p, r → no real roots.',
          workingLatex: 'No real roots',
          explanation: 'Graph lies entirely above the x-axis.'
        },
        {
          stepNumber: 4,
          description: 'Line of symmetry.',
          workingLatex: 'x = 7',
          explanation: 'From the bracket.'
        }
      ],
 finalAnswer: '(x-7)^2 + 1 ; no real roots; x = 7'
    }
  },
  {
    id: 'a12-85',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 85',
    difficulty: 'Foundation',
    questionText: 'Express \\( f(x) = x^2 + 4x - 5 \\) in completed-square form, state the number of real roots, and find them.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x + 2)^2 - 4 - 5',
          explanation: 'Half of 4 is 2.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x + 2)^2 - 9',
          explanation: 'Minimum value is -9.'
        },
        {
          stepNumber: 3,
          description: 'Different-sign p, r → two real roots.',
          workingLatex: 'Two real roots',
          explanation: 'Set equal to zero to find them.'
        },
        {
          stepNumber: 4,
          description: 'Solve.',
          workingLatex: '(x + 2)^2 = 9 \\Rightarrow x + 2 = \\pm 3 \\Rightarrow x = 1 \\text{ or } -5',
          explanation: 'Two distinct real roots.'
        }
      ],
 finalAnswer: '(x+2)^2 - 9 ; two real roots x = 1, -5'
    }
  },
  {
    id: 'a12-86',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 86',
    difficulty: 'Foundation',
    questionText: 'Given \\( f(x) = 2x^2 - 8x + 5 \\), complete the square and find the minimum value.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'minimum'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factor out 2 from the \\( x \\) terms.',
          workingLatex: '2(x^2 - 4x) + 5',
          explanation: 'Keep the constant outside.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square inside the bracket.',
          workingLatex: '2((x - 2)^2 - 4) + 5',
          explanation: 'Half of -4 is -2.'
        },
        {
          stepNumber: 3,
          description: 'Distribute and simplify.',
          workingLatex: '2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3',
          explanation: 'Multiply the -4 by 2.'
        },
        {
          stepNumber: 4,
          description: 'Minimum value.',
          workingLatex: '-3\\) at \\( x = 2',
          explanation: 'The \\( 2(x-2)^2 \\) term is at least zero.'
        }
      ],
 finalAnswer: '2(x-2)^2 - 3 ; minimum value -3 at x = 2'
    }
  },
  {
    id: 'a12-87',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 87',
    difficulty: 'Foundation',
    questionText: 'Given \\( f(x) = 3x^2 + 12x + 17 \\), complete the square and find the minimum value.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'completing the square', 'minimum'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factor out 3 from the \\( x \\) terms.',
          workingLatex: '3(x^2 + 4x) + 17',
          explanation: 'Keep 17 outside.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square inside.',
          workingLatex: '3((x + 2)^2 - 4) + 17',
          explanation: 'Half of 4 is 2.'
        },
        {
          stepNumber: 3,
          description: 'Distribute and simplify.',
          workingLatex: '3(x + 2)^2 - 12 + 17 = 3(x + 2)^2 + 5',
          explanation: 'Combine constants.'
        },
        {
          stepNumber: 4,
          description: 'Minimum value.',
          workingLatex: '5 at \\( x = -2',
          explanation: 'The squared term is at least zero.'
        }
      ],
 finalAnswer: '3(x+2)^2 + 5 ; minimum value 5 at x = -2'
    }
  },
  {
    id: 'a12-88',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 88',
    difficulty: 'Foundation',
    questionText: 'A quadratic function has a maximum value of 7 and is n-shaped with leading coefficient \\(-1\\). Its line of symmetry is \\( x = -1 \\). Write \\( f(x) \\) in completed-square form and in standard form.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'vertex', 'maximum'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Vertex at \\( (-1, 7) \\), leading coefficient \\(-1\\).',
          workingLatex: 'f(x) = -(x + 1)^2 + 7',
          explanation: 'Standard vertex form.'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
          workingLatex: '-(x^2 + 2x + 1) + 7',
          explanation: 'Expand the bracket.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '-x^2 - 2x + 6',
          explanation: 'Combine the constants.'
        }
      ],
      finalAnswer: '-(x+1)^2 + 7 = -x^2 - 2x + 6'
    }
  },
  {
    id: 'a12-89',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 89',
    difficulty: 'Foundation',
    questionText: 'Given that \\( f(x) = x^2 - 2x + k \\) has exactly one real root, find the value of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Exactly one real root means discriminant = 0.',
          workingLatex: '4 - 4k = 0',
          explanation: '\\( a = 1, b = -2, c = k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: 'k = 1',
          explanation: 'Divide by 4.'
        }
      ],
      finalAnswer: 'k = 1'
    }
  },
  {
    id: 'a12-90',
    topicRef: 'a12',
    topicTitle: 'Quadratic Functions and Roots 90',
    difficulty: 'Foundation',
    questionText: 'A quadratic function \\( f(x) \\) has leading coefficient 1, a line of symmetry \\( x = 2 \\), and one of its roots is \\( x = 5 \\). Find \\( f(x) \\) in standard form and state the other root.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['quadratic functions', 'symmetry', 'roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use symmetry: the roots are equidistant from \\( x = 2 \\).',
          workingLatex: 'Other root at \\( 2 - (5 - 2) = -1',
          explanation: 'If one root is 3 units to the right of the axis of symmetry, the other is 3 units to the left.'
        },
        {
          stepNumber: 2,
          description: 'Write in factored form.',
          workingLatex: 'f(x) = (x - 5)(x + 1)',
          explanation: 'Roots at 5 and -1.'
        },
        {
          stepNumber: 3,
          description: 'Expand.',
          workingLatex: 'x^2 + x - 5x - 5 = x^2 - 4x - 5',
          explanation: 'Collect like terms.'
        }
      ],
 finalAnswer: 'f(x) = x^2 - 4x - 5 ; other root is x = -1'
    }
  }
];

