import { Question } from "@/lib/types";

/**
 * Topic: Quadratic Inequalities
 * Ref:   a8
 *
 * Add your questions to the array below.
 * ID convention: "a8-001", "a8-002", etc.
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
    id: 'a6-001',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 01',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{1}{\\sqrt{2}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom of the fraction by \\( \\sqrt{2} \\).',
          workingLatex: '\\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}',
          explanation: 'Multiplying by \\( \\frac{\\sqrt{2}}{\\sqrt{2}} \\) does not change the value of the fraction (it equals 1), but it removes the surd from the denominator.'
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{2}}{2}\\)',
    }
  },
  {
    id: 'a6-002',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 02',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{1}{\\sqrt{5}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{5} \\).',
          workingLatex: '\\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{5}}{5}\\)',
    }
  },
  {
    id: 'a6-003',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 03',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{8}{\\sqrt{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{2} \\).',
          workingLatex: '\\frac{8}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-004',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 04',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{6}{\\sqrt{3}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{3} \\).',
          workingLatex: '\\frac{6}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-005',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 05',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{14}{\\sqrt{7}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{7} \\).',
          workingLatex: '\\frac{14}{\\sqrt{7}} \\times \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{14\\sqrt{7}}{7}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{14\\sqrt{7}}{7} = 2\\sqrt{7}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2\\sqrt{7}\\)',
    }
  },
  {
    id: 'a6-006',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 06',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{20}{\\sqrt{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{5} \\).',
          workingLatex: '\\frac{20}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{20\\sqrt{5}}{5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{20\\sqrt{5}}{5} = 4\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-007',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 07',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{9}{\\sqrt{3}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{3} \\).',
          workingLatex: '\\frac{9}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-008',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 08',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{10}{\\sqrt{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{2} \\).',
          workingLatex: '\\frac{10}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '5\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-009',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 09',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{24}{\\sqrt{6}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{6} \\).',
          workingLatex: '\\frac{24\\sqrt{6}}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '4\\sqrt{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\sqrt{6}\\)',
    }
  },
  {
    id: 'a6-010',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 10',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{15}{\\sqrt{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{5} \\).',
          workingLatex: '\\frac{15\\sqrt{5}}{5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '3\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-011',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 11',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\sqrt{32} + \\frac{10}{\\sqrt{2}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify \\( \\sqrt{32} \\).',
          workingLatex: '\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Rationalise the second term.',
          workingLatex: '\\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Add the like surds.',
          workingLatex: '4\\sqrt{2} + 5\\sqrt{2} = 9\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(9\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-012',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 12',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\sqrt{75} - \\frac{6}{\\sqrt{3}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify \\( \\sqrt{75} \\).',
          workingLatex: '\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Rationalise the second term.',
          workingLatex: '\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Subtract the like surds.',
          workingLatex: '5\\sqrt{3} - 2\\sqrt{3} = 3\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-013',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 13',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{3}{\\sqrt{6}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{6} \\).',
          workingLatex: '\\frac{3}{\\sqrt{6}} \\times \\frac{\\sqrt{6}}{\\sqrt{6}} = \\frac{3\\sqrt{6}}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the fraction.',
          workingLatex: '\\frac{\\sqrt{6}}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{6}}{2}\\)',
    }
  },
  {
    id: 'a6-014',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 14',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{4}{\\sqrt{10}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{10} \\).',
          workingLatex: '\\frac{4\\sqrt{10}}{10}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify by dividing top and bottom by 2.',
          workingLatex: '\\frac{2\\sqrt{10}}{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{2\\sqrt{10}}{5}\\)',
    }
  },
  {
    id: 'a6-015',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 15',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{\\sqrt{3}}{\\sqrt{8}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify \\( \\sqrt{8} \\) first.',
          workingLatex: '\\frac{\\sqrt{3}}{\\sqrt{8}} = \\frac{\\sqrt{3}}{2\\sqrt{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the top and bottom by \\( \\sqrt{2} \\).',
          workingLatex: '\\frac{\\sqrt{3} \\times \\sqrt{2}}{2\\sqrt{2} \\times \\sqrt{2}} = \\frac{\\sqrt{6}}{4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{6}}{4}\\)',
    }
  },
  {
    id: 'a6-016',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 16',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{5}{2\\sqrt{3}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{3} \\).',
          workingLatex: '\\frac{5}{2\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{2 \\times 3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Write the final answer.',
          workingLatex: '\\frac{5\\sqrt{3}}{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{5\\sqrt{3}}{6}\\)',
    }
  },
  {
    id: 'a6-017',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 17',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator and simplify: \\( \\frac{\\sqrt{18}}{\\sqrt{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use the rule \\( \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}} \\).',
          workingLatex: '\\sqrt{\\frac{18}{2}} = \\sqrt{9}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\)',
    }
  },
  {
    id: 'a6-018',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 18',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{2}{1 + \\sqrt{3}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 1 - \\sqrt{3} \\).',
          workingLatex: '\\frac{2}{1 + \\sqrt{3}} \\times \\frac{1 - \\sqrt{3}}{1 - \\sqrt{3}} = \\frac{2(1 - \\sqrt{3})}{(1 + \\sqrt{3})(1 - \\sqrt{3})}',
          explanation: 'The conjugate has the opposite sign between the terms. Multiplying by it removes the surd from the denominator.'
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator using the difference of two squares.',
          workingLatex: '\\frac{2(1 - \\sqrt{3})}{1 - 3} = \\frac{2(1 - \\sqrt{3})}{-2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel and simplify.',
          workingLatex: '-(1 - \\sqrt{3}) = -1 + \\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(-1 + \\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-019',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 19',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{8}{\\sqrt{5} - 1} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( \\sqrt{5} + 1 \\).',
          workingLatex: '\\frac{8(\\sqrt{5} + 1)}{(\\sqrt{5} - 1)(\\sqrt{5} + 1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator using the difference of two squares.',
          workingLatex: '\\frac{8(\\sqrt{5} + 1)}{5 - 1} = \\frac{8(\\sqrt{5} + 1)}{4}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Divide the numerator by 4.',
          workingLatex: '2(\\sqrt{5} + 1) = 2 + 2\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2 + 2\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-020',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 20',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{7}{3 - \\sqrt{2}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 3 + \\sqrt{2} \\).',
          workingLatex: '\\frac{7(3 + \\sqrt{2})}{(3 - \\sqrt{2})(3 + \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{7(3 + \\sqrt{2})}{9 - 2} = \\frac{7(3 + \\sqrt{2})}{7}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of 7.',
          workingLatex: '3 + \\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3 + \\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-021',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 21',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{4}{\\sqrt{6} - 2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( \\sqrt{6} + 2 \\).',
          workingLatex: '\\frac{4(\\sqrt{6} + 2)}{(\\sqrt{6} - 2)(\\sqrt{6} + 2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator using the difference of two squares.',
          workingLatex: '\\frac{4(\\sqrt{6} + 2)}{6 - 4} = \\frac{4(\\sqrt{6} + 2)}{2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Divide and expand.',
          workingLatex: '2(\\sqrt{6} + 2) = 4 + 2\\sqrt{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4 + 2\\sqrt{6}\\)',
    }
  },
  {
    id: 'a6-022',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 22',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{14}{4 + \\sqrt{2}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 4 - \\sqrt{2} \\).',
          workingLatex: '\\frac{14(4 - \\sqrt{2})}{(4 + \\sqrt{2})(4 - \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{14(4 - \\sqrt{2})}{16 - 2} = \\frac{14(4 - \\sqrt{2})}{14}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the 14.',
          workingLatex: '4 - \\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4 - \\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-023',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 23',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{12}{5 - \\sqrt{13}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 5 + \\sqrt{13} \\).',
          workingLatex: '\\frac{12(5 + \\sqrt{13})}{(5 - \\sqrt{13})(5 + \\sqrt{13})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{12(5 + \\sqrt{13})}{25 - 13} = \\frac{12(5 + \\sqrt{13})}{12}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the 12.',
          workingLatex: '5 + \\sqrt{13}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5 + \\sqrt{13}\\)',
    }
  },
  {
    id: 'a6-024',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 24',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{8}{3 + \\sqrt{5}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 3 - \\sqrt{5} \\).',
          workingLatex: '\\frac{8(3 - \\sqrt{5})}{(3 + \\sqrt{5})(3 - \\sqrt{5})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{8(3 - \\sqrt{5})}{9 - 5} = \\frac{8(3 - \\sqrt{5})}{4}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel and expand.',
          workingLatex: '2(3 - \\sqrt{5}) = 6 - 2\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(6 - 2\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-025',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 25',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{25}{6 - \\sqrt{11}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 6 + \\sqrt{11} \\).',
          workingLatex: '\\frac{25(6 + \\sqrt{11})}{(6 - \\sqrt{11})(6 + \\sqrt{11})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{25(6 + \\sqrt{11})}{36 - 11} = \\frac{25(6 + \\sqrt{11})}{25}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of 25.',
          workingLatex: '6 + \\sqrt{11}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(6 + \\sqrt{11}\\)',
    }
  },
  {
    id: 'a6-026',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 26',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( \\sqrt{3} + 1 \\).',
          workingLatex: '\\frac{(\\sqrt{3} + 1)(\\sqrt{3} + 1)}{(\\sqrt{3} - 1)(\\sqrt{3} + 1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator using \\( (a+b)^2 = a^2 + 2ab + b^2 \\).',
          workingLatex: '\\frac{3 + 2\\sqrt{3} + 1}{3 - 1} = \\frac{4 + 2\\sqrt{3}}{2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify by dividing each term by 2.',
          workingLatex: '2 + \\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2 + \\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-027',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 27',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{\\sqrt{7} + 2}{\\sqrt{7} - 3} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( \\sqrt{7} + 3 \\).',
          workingLatex: '\\frac{(\\sqrt{7} + 2)(\\sqrt{7} + 3)}{(\\sqrt{7} - 3)(\\sqrt{7} + 3)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator using FOIL.',
          workingLatex: '\\frac{7 + 3\\sqrt{7} + 2\\sqrt{7} + 6}{7 - 9} = \\frac{13 + 5\\sqrt{7}}{-2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Split the fraction to get the required form.',
          workingLatex: '-\\frac{13}{2} - \\frac{5}{2}\\sqrt{7}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(-\\frac{13}{2} - \\frac{5}{2}\\sqrt{7}\\)',
    }
  },
  {
    id: 'a6-028',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 28',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{5 - \\sqrt{2}}{3 + \\sqrt{2}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by the conjugate \\( 3 - \\sqrt{2} \\).',
          workingLatex: '\\frac{(5 - \\sqrt{2})(3 - \\sqrt{2})}{(3 + \\sqrt{2})(3 - \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{15 - 5\\sqrt{2} - 3\\sqrt{2} + 2}{9 - 2} = \\frac{17 - 8\\sqrt{2}}{7}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Split into the required form.',
          workingLatex: '\\frac{17}{7} - \\frac{8}{7}\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{17}{7} - \\frac{8}{7}\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-029',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 29',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{2\\sqrt{5} + 1}{3\\sqrt{5} - 2} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 3\\sqrt{5} + 2 \\).',
          workingLatex: '\\frac{(2\\sqrt{5} + 1)(3\\sqrt{5} + 2)}{(3\\sqrt{5} - 2)(3\\sqrt{5} + 2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{6 \\times 5 + 4\\sqrt{5} + 3\\sqrt{5} + 2}{9 \\times 5 - 4} = \\frac{30 + 7\\sqrt{5} + 2}{45 - 4} = \\frac{32 + 7\\sqrt{5}}{41}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Split into the required form.',
          workingLatex: '\\frac{32}{41} + \\frac{7}{41}\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{32}{41} + \\frac{7}{41}\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-030',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 30',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{\\sqrt{2} + 3}{2\\sqrt{2} - 1} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 2\\sqrt{2} + 1 \\).',
          workingLatex: '\\frac{(\\sqrt{2} + 3)(2\\sqrt{2} + 1)}{(2\\sqrt{2} - 1)(2\\sqrt{2} + 1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{2 \\times 2 + \\sqrt{2} + 6\\sqrt{2} + 3}{4 \\times 2 - 1} = \\frac{4 + 7\\sqrt{2} + 3}{8 - 1} = \\frac{7 + 7\\sqrt{2}}{7}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '1 + \\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(1 + \\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-031',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 31',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{4 - \\sqrt{3}}{2 + \\sqrt{3}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 2 - \\sqrt{3} \\).',
          workingLatex: '\\frac{(4 - \\sqrt{3})(2 - \\sqrt{3})}{(2 + \\sqrt{3})(2 - \\sqrt{3})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{8 - 4\\sqrt{3} - 2\\sqrt{3} + 3}{4 - 3} = \\frac{11 - 6\\sqrt{3}}{1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Write final answer.',
          workingLatex: '11 - 6\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(11 - 6\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-032',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 32',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( k(\\sqrt{x} \\pm \\sqrt{y}) \\), where \\( x \\) and \\( y \\) are integers and \\( k \\) is an integer or fraction: \\( \\frac{6}{\\sqrt{5} - \\sqrt{2}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{5} + \\sqrt{2} \\).',
          workingLatex: '\\frac{6(\\sqrt{5} + \\sqrt{2})}{(\\sqrt{5} - \\sqrt{2})(\\sqrt{5} + \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{6(\\sqrt{5} + \\sqrt{2})}{5 - 2} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{3}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify by dividing by 3.',
          workingLatex: '2(\\sqrt{5} + \\sqrt{2})',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2(\\sqrt{5} + \\sqrt{2})\\)',
    }
  },
  {
    id: 'a6-033',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 33',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( k(\\sqrt{x} \\pm \\sqrt{y}) \\), where \\( x \\) and \\( y \\) are integers and \\( k \\) is an integer or fraction: \\( \\frac{10}{\\sqrt{7} + \\sqrt{2}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{7} - \\sqrt{2} \\).',
          workingLatex: '\\frac{10(\\sqrt{7} - \\sqrt{2})}{(\\sqrt{7} + \\sqrt{2})(\\sqrt{7} - \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{10(\\sqrt{7} - \\sqrt{2})}{7 - 2} = \\frac{10(\\sqrt{7} - \\sqrt{2})}{5}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '2(\\sqrt{7} - \\sqrt{2})',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2(\\sqrt{7} - \\sqrt{2})\\)',
    }
  },
  {
    id: 'a6-034',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 34',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( k(\\sqrt{x} \\pm \\sqrt{y}) \\), where \\( x \\) and \\( y \\) are integers and \\( k \\) is an integer or fraction: \\( \\frac{3}{\\sqrt{10} - \\sqrt{7}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{10} + \\sqrt{7} \\).',
          workingLatex: '\\frac{3(\\sqrt{10} + \\sqrt{7})}{(\\sqrt{10} - \\sqrt{7})(\\sqrt{10} + \\sqrt{7})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{3(\\sqrt{10} + \\sqrt{7})}{10 - 7} = \\frac{3(\\sqrt{10} + \\sqrt{7})}{3}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel.',
          workingLatex: '\\sqrt{10} + \\sqrt{7}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\sqrt{10} + \\sqrt{7}\\)',
    }
  },
  {
    id: 'a6-035',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 35',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( k(\\sqrt{x} \\pm \\sqrt{y}) \\), where \\( x \\) and \\( y \\) are integers and \\( k \\) is an integer or fraction: \\( \\frac{8}{\\sqrt{11} + \\sqrt{3}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{11} - \\sqrt{3} \\).',
          workingLatex: '\\frac{8(\\sqrt{11} - \\sqrt{3})}{(\\sqrt{11} + \\sqrt{3})(\\sqrt{11} - \\sqrt{3})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{8(\\sqrt{11} - \\sqrt{3})}{11 - 3} = \\frac{8(\\sqrt{11} - \\sqrt{3})}{8}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel.',
          workingLatex: '\\sqrt{11} - \\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\sqrt{11} - \\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-036',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 36',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise and simplify: \\( \\frac{7}{\\sqrt{11}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{11} \\).',
          workingLatex: '\\frac{7\\sqrt{11}}{11}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7\\sqrt{11}}{11}\\)',
    }
  },
  {
    id: 'a6-037',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 37',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise and simplify: \\( \\frac{\\sqrt{5}}{\\sqrt{12}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify \\( \\sqrt{12} \\).',
          workingLatex: '\\frac{\\sqrt{5}}{\\sqrt{12}} = \\frac{\\sqrt{5}}{2\\sqrt{3}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the top and bottom by \\( \\sqrt{3} \\).',
          workingLatex: '\\frac{\\sqrt{5} \\times \\sqrt{3}}{2\\sqrt{3} \\times \\sqrt{3}} = \\frac{\\sqrt{15}}{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{15}}{6}\\)',
    }
  },
  {
    id: 'a6-038',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 38',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{\\sqrt{200}}{5} + \\frac{30}{\\sqrt{50}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify the first fraction.',
          workingLatex: '\\frac{\\sqrt{200}}{5} = \\frac{10\\sqrt{2}}{5} = 2\\sqrt{2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Rationalise and simplify the second fraction.',
          workingLatex: '\\frac{30}{\\sqrt{50}} = \\frac{30}{5\\sqrt{2}} = \\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Add the like surds.',
          workingLatex: '2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-039',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 39',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{2}{3\\sqrt{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{5} \\).',
          workingLatex: '\\frac{2\\sqrt{5}}{3 \\times 5} = \\frac{2\\sqrt{5}}{15}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{2\\sqrt{5}}{15}\\)',
    }
  },
  {
    id: 'a6-040',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 40',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator and simplify: \\( \\frac{\\sqrt{45}}{\\sqrt{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Combine the surds under a single root.',
          workingLatex: '\\sqrt{\\frac{45}{5}} = \\sqrt{9}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\)',
    }
  },
  {
    id: 'a6-041',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 41',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{6}{4 - \\sqrt{10}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 4 + \\sqrt{10} \\).',
          workingLatex: '\\frac{6(4 + \\sqrt{10})}{(4 - \\sqrt{10})(4 + \\sqrt{10})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{6(4 + \\sqrt{10})}{16 - 10} = \\frac{6(4 + \\sqrt{10})}{6}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel.',
          workingLatex: '4 + \\sqrt{10}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4 + \\sqrt{10}\\)',
    }
  },
  {
    id: 'a6-042',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 42',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{32}{7 - \\sqrt{17}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 7 + \\sqrt{17} \\).',
          workingLatex: '\\frac{32(7 + \\sqrt{17})}{(7 - \\sqrt{17})(7 + \\sqrt{17})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{32(7 + \\sqrt{17})}{49 - 17} = \\frac{32(7 + \\sqrt{17})}{32}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of 32.',
          workingLatex: '7 + \\sqrt{17}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(7 + \\sqrt{17}\\)',
    }
  },
  {
    id: 'a6-043',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 43',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator and simplify: \\( \\frac{12}{\\sqrt{8}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify \\( \\sqrt{8} \\).',
          workingLatex: '\\frac{12}{\\sqrt{8}} = \\frac{12}{2\\sqrt{2}} = \\frac{6}{\\sqrt{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the top and bottom by \\( \\sqrt{2} \\).',
          workingLatex: '\\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-044',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 44',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Solve the equation \\( 10 = (\\sqrt{3} - 1)x \\), giving your answer in the form \\( a + b\\sqrt{3} \\) where \\( a \\) and \\( b \\) are integers.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Divide both sides by \\( \\sqrt{3} - 1 \\).',
          workingLatex: 'x = \\frac{10}{\\sqrt{3} - 1}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{3} + 1 \\).',
          workingLatex: 'x = \\frac{10(\\sqrt{3} + 1)}{(\\sqrt{3} - 1)(\\sqrt{3} + 1)} = \\frac{10(\\sqrt{3} + 1)}{3 - 1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: 'x = \\frac{10(\\sqrt{3} + 1)}{2} = 5(\\sqrt{3} + 1) = 5 + 5\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x = 5 + 5\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-045',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 45',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Solve the equation \\( 4 + \\sqrt{5} = (2 - \\sqrt{5})y \\), giving your answer in the form \\( p + q\\sqrt{5} \\) where \\( p \\) and \\( q \\) are integers.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Divide both sides by \\( 2 - \\sqrt{5} \\).',
          workingLatex: 'y = \\frac{4 + \\sqrt{5}}{2 - \\sqrt{5}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply top and bottom by the conjugate \\( 2 + \\sqrt{5} \\).',
          workingLatex: 'y = \\frac{(4 + \\sqrt{5})(2 + \\sqrt{5})}{(2 - \\sqrt{5})(2 + \\sqrt{5})}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the numerator and denominator.',
          workingLatex: 'y = \\frac{8 + 4\\sqrt{5} + 2\\sqrt{5} + 5}{4 - 5} = \\frac{13 + 6\\sqrt{5}}{-1}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: 'y = -13 - 6\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(y = -13 - 6\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-046',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 46',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'A rectangle has an area of \\( (3 + \\sqrt{5}) \\) cm\\(^2\\) and a width of \\( (\\sqrt{5} - 1) \\) cm. Find the length of the rectangle. Give your answer in the form \\( a + b\\sqrt{5} \\), where \\( a \\) and \\( b \\) are integers.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use the formula \\( \\text{length} = \\frac{\\text{area}}{\\text{width}} \\).',
          workingLatex: '\\text{length} = \\frac{3 + \\sqrt{5}}{\\sqrt{5} - 1}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{5} + 1 \\).',
          workingLatex: '\\frac{(3 + \\sqrt{5})(\\sqrt{5} + 1)}{(\\sqrt{5} - 1)(\\sqrt{5} + 1)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{3\\sqrt{5} + 3 + 5 + \\sqrt{5}}{5 - 1} = \\frac{8 + 4\\sqrt{5}}{4}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '2 + \\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\((2 + \\sqrt{5})\\) cm',
    }
  },
  {
    id: 'a6-047',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 47',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{1}{\\sqrt{2} + \\sqrt{3}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{2} - \\sqrt{3} \\).',
          workingLatex: '\\frac{\\sqrt{2} - \\sqrt{3}}{(\\sqrt{2} + \\sqrt{3})(\\sqrt{2} - \\sqrt{3})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{\\sqrt{2} - \\sqrt{3}}{2 - 3} = \\frac{\\sqrt{2} - \\sqrt{3}}{-1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify by multiplying through by \\( -1 \\).',
          workingLatex: '\\sqrt{3} - \\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\sqrt{3} - \\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-048',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 48',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( p + q\\sqrt{r} \\) where \\( r \\) is an integer, and \\( p \\) and \\( q \\) are integers or fractions: \\( \\frac{\\sqrt{6} + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{6} + \\sqrt{2} \\).',
          workingLatex: '\\frac{(\\sqrt{6} + \\sqrt{2})(\\sqrt{6} + \\sqrt{2})}{(\\sqrt{6} - \\sqrt{2})(\\sqrt{6} + \\sqrt{2})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{6 + 2\\sqrt{12} + 2}{6 - 2} = \\frac{8 + 2\\sqrt{12}}{4}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify \\( \\sqrt{12} = 2\\sqrt{3} \\).',
          workingLatex: '\\frac{8 + 4\\sqrt{3}}{4} = 2 + \\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2 + \\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-049',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 49',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{\\sqrt{2}}{3\\sqrt{2} + 1} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 3\\sqrt{2} - 1 \\).',
          workingLatex: '\\frac{\\sqrt{2}(3\\sqrt{2} - 1)}{(3\\sqrt{2} + 1)(3\\sqrt{2} - 1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator and denominator.',
          workingLatex: '\\frac{3 \\times 2 - \\sqrt{2}}{9 \\times 2 - 1} = \\frac{6 - \\sqrt{2}}{17}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{6 - \\sqrt{2}}{17}\\)',
    }
  },
  {
    id: 'a6-050',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 50',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Show that \\( \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{3} \\).',
          workingLatex: '\\frac{12}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '\\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\sqrt{3} ( shown )\\)',
    }
  },
  {
    id: 'a6-051',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 51',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise and simplify: \\( \\frac{\\sqrt{27}}{\\sqrt{3}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Combine under a single root.',
          workingLatex: '\\sqrt{\\frac{27}{3}} = \\sqrt{9}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\)',
    }
  },
  {
    id: 'a6-052',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 52',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{11}{2\\sqrt{3} - 1} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 2\\sqrt{3} + 1 \\).',
          workingLatex: '\\frac{11(2\\sqrt{3} + 1)}{(2\\sqrt{3} - 1)(2\\sqrt{3} + 1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{11(2\\sqrt{3} + 1)}{12 - 1} = \\frac{11(2\\sqrt{3} + 1)}{11}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of 11.',
          workingLatex: '2\\sqrt{3} + 1 = 1 + 2\\sqrt{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(1 + 2\\sqrt{3}\\)',
    }
  },
  {
    id: 'a6-053',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 53',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{11}{2\\sqrt{5} + 3} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 2\\sqrt{5} - 3 \\).',
          workingLatex: '\\frac{11(2\\sqrt{5} - 3)}{(2\\sqrt{5} + 3)(2\\sqrt{5} - 3)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{11(2\\sqrt{5} - 3)}{20 - 9} = \\frac{11(2\\sqrt{5} - 3)}{11}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of 11.',
          workingLatex: '2\\sqrt{5} - 3 = -3 + 2\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(-3 + 2\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-054',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 54',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{25}{\\sqrt{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{5} \\).',
          workingLatex: '\\frac{25\\sqrt{5}}{5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '5\\sqrt{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5\\sqrt{5}\\)',
    }
  },
  {
    id: 'a6-055',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 55',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, giving your answer in the form \\( p\\sqrt{q} \\) where \\( p \\) and \\( q \\) are integers: \\( \\frac{18}{\\sqrt{6}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the top and bottom by \\( \\sqrt{6} \\).',
          workingLatex: '\\frac{18\\sqrt{6}}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '3\\sqrt{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\sqrt{6}\\)',
    }
  },
  {
    id: 'a6-056',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 56',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise and simplify: \\( \\frac{\\sqrt{48}}{\\sqrt{6}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Combine the surds under a single root.',
          workingLatex: '\\sqrt{\\frac{48}{6}} = \\sqrt{8}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify \\( \\sqrt{8} \\).',
          workingLatex: '\\sqrt{4 \\times 2} = 2\\sqrt{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2\\sqrt{2}\\)',
    }
  },
  {
    id: 'a6-057',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 57',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( a + b\\sqrt{k} \\) where \\( a \\), \\( b \\) and \\( k \\) are integers: \\( \\frac{2}{3 - \\sqrt{7}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( 3 + \\sqrt{7} \\).',
          workingLatex: '\\frac{2(3 + \\sqrt{7})}{(3 - \\sqrt{7})(3 + \\sqrt{7})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{2(3 + \\sqrt{7})}{9 - 7} = \\frac{2(3 + \\sqrt{7})}{2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel.',
          workingLatex: '3 + \\sqrt{7}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3 + \\sqrt{7}\\)',
    }
  },
  {
    id: 'a6-058',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 58',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express in the form \\( k(\\sqrt{x} \\pm \\sqrt{y}) \\), where \\( x \\) and \\( y \\) are integers and \\( k \\) is an integer or fraction: \\( \\frac{15}{\\sqrt{6} + \\sqrt{3}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{6} - \\sqrt{3} \\).',
          workingLatex: '\\frac{15(\\sqrt{6} - \\sqrt{3})}{(\\sqrt{6} + \\sqrt{3})(\\sqrt{6} - \\sqrt{3})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{15(\\sqrt{6} - \\sqrt{3})}{6 - 3} = \\frac{15(\\sqrt{6} - \\sqrt{3})}{3}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '5(\\sqrt{6} - \\sqrt{3})',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5(\\sqrt{6} - \\sqrt{3})\\)',
    }
  },
  {
    id: 'a6-059',
    topicRef: 'a6',
    topicTitle: 'Rationalising the Denominator 59',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Rationalise the denominator: \\( \\frac{\\sqrt{3}}{\\sqrt{15} - \\sqrt{6}} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply top and bottom by the conjugate \\( \\sqrt{15} + \\sqrt{6} \\).',
          workingLatex: '\\frac{\\sqrt{3}(\\sqrt{15} + \\sqrt{6})}{(\\sqrt{15} - \\sqrt{6})(\\sqrt{15} + \\sqrt{6})}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the denominator.',
          workingLatex: '\\frac{\\sqrt{3}(\\sqrt{15} + \\sqrt{6})}{15 - 6} = \\frac{\\sqrt{3}(\\sqrt{15} + \\sqrt{6})}{9}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the numerator using \\( \\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab} \\).',
          workingLatex: '\\frac{\\sqrt{45} + \\sqrt{18}}{9} = \\frac{3\\sqrt{5} + 3\\sqrt{2}}{9}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Simplify by dividing by 3.',
          workingLatex: '\\frac{\\sqrt{5} + \\sqrt{2}}{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{\\sqrt{5} + \\sqrt{2}}{3}\\)',
    }
  },

];



