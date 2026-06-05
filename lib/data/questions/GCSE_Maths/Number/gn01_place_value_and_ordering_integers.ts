import { Question } from "@/lib/types";

/**
 * Topic: Place value and ordering integers
 * Ref:   gn01
 * Strand: Number (GCSE Maths)
 *
 * 70 fully-worked questions covering:
 *   - place value of digits in integers (units up to billions)
 *   - reading/writing large numbers in words and digits
 *   - identifying the value of a digit
 *   - ordering and comparing integers (positive and negative)
 *   - ascending / descending order
 *   - rounding integers to the nearest 10/100/1000/million
 *   - powers of ten; multiplying/dividing by 10/100/1000
 *   - comparing magnitudes; worded / contextual problems
 *
 * Difficulty split: 24 Foundation, 23 Standard, 23 Challenge.
 * ids: gn01-001 ... gn01-070
 *
 * LaTeX note: large numbers use thin spaces between groups of three digits,
 * e.g. '3\\,407' renders as 3 407. workingLatex is NOT wrapped in $...$.
 */
export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────
    // FOUNDATION  (24)  gn01-001 .. gn01-024
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'gn01-001',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write down the value of the digit 7 in the number 4 738.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'value of digit'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the column the 7 sits in.',
                    workingLatex: '4\\,738 = 4\\,000 + 700 + 30 + 8',
                    explanation: 'Reading the columns from the right: 8 units, 3 tens, 7 hundreds, 4 thousands. The 7 is in the hundreds column.',
                },
                {
                    stepNumber: 2,
                    description: 'State the value.',
                    workingLatex: '7 \\times 100 = 700',
                    explanation: 'A digit in the hundreds column is worth that digit multiplied by 100, so the 7 is worth 700.',
                },
            ],
            finalAnswer: 'The 7 has a value of 700.',
            canonicalAnswer: '700',
        },
    },
    {
        id: 'gn01-002',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write the number 6 052 in words.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into thousands and the rest.',
                    workingLatex: '6\\,052 = 6\\,000 + 52',
                    explanation: 'There are 6 thousands, 0 hundreds, 5 tens and 2 units. The zero hundreds means we skip straight from thousands to the fifty-two.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the words.',
                    workingLatex: '',
                    explanation: 'Six thousand and fifty-two.',
                },
            ],
            finalAnswer: 'Six thousand and fifty-two.',
        },
    },
    {
        id: 'gn01-003',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write the number "two thousand, three hundred and nine" in digits.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'digits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Place each part in its column.',
                    workingLatex: '2\\,000 + 300 + 0 + 9',
                    explanation: 'Two thousand gives a 2 in the thousands column, three hundred a 3 in the hundreds column, there are no tens (so a 0), and nine units.',
                },
                {
                    stepNumber: 2,
                    description: 'Combine the digits.',
                    workingLatex: '2\\,309',
                    explanation: 'Putting the columns together gives 2 309. The zero is essential to hold the tens place.',
                },
            ],
            finalAnswer: '2309',
            canonicalAnswer: '2309',
        },
    },
    {
        id: 'gn01-004',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Round 384 to the nearest 10.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 10'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Look at the units digit.',
                    workingLatex: '',
                    explanation: 'To round to the nearest 10 we look at the units digit, which is 4. Since 4 is less than 5 we round down.',
                },
                {
                    stepNumber: 2,
                    description: 'Round down.',
                    workingLatex: '384 \\to 380',
                    explanation: '384 lies between 380 and 390 and is closer to 380, so it rounds to 380.',
                },
            ],
            finalAnswer: '380',
            canonicalAnswer: '380',
        },
    },
    {
        id: 'gn01-005',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Round 2 651 to the nearest 100.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 100'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Look at the tens digit.',
                    workingLatex: '',
                    explanation: 'To round to the nearest 100 we look at the tens digit, which is 5. Since it is 5 or more we round up.',
                },
                {
                    stepNumber: 2,
                    description: 'Round up.',
                    workingLatex: '2\\,651 \\to 2\\,700',
                    explanation: '2 651 lies between 2 600 and 2 700; rounding up gives 2 700.',
                },
            ],
            finalAnswer: '2700',
            canonicalAnswer: '2700',
        },
    },
    {
        id: 'gn01-006',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Work out 36 \\times 100.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shift the digits two places.',
                    workingLatex: '36 \\times 100 = 3\\,600',
                    explanation: 'Multiplying by 100 moves every digit two columns to the left, which is the same as writing two zeros on the end of the whole number.',
                },
            ],
            finalAnswer: '3600',
            canonicalAnswer: '3600',
        },
    },
    {
        id: 'gn01-007',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Work out 4 500 \\div 10.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'dividing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shift the digits one place right.',
                    workingLatex: '4\\,500 \\div 10 = 450',
                    explanation: 'Dividing by 10 moves every digit one column to the right. The final zero is removed, leaving 450.',
                },
            ],
            finalAnswer: '450',
            canonicalAnswer: '450',
        },
    },
    {
        id: 'gn01-008',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Which is larger, 8 and -12? Write down the larger number.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare positive and negative.',
                    workingLatex: '8 > -12',
                    explanation: 'On a number line negative numbers lie to the left of zero and positive numbers to the right. Any positive number is greater than any negative number, so 8 is larger.',
                },
            ],
            finalAnswer: '8 is the larger number.',
            canonicalAnswer: '8',
        },
    },
    {
        id: 'gn01-009',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Put these numbers in ascending order: 47, 9, 162, 38.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'ascending'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare by number of digits, then by value.',
                    workingLatex: '',
                    explanation: '9 has one digit so is smallest. 47 and 38 are two-digit numbers; 38 is less than 47. 162 has three digits so is largest.',
                },
                {
                    stepNumber: 2,
                    description: 'List smallest to largest.',
                    workingLatex: '9 < 38 < 47 < 162',
                    explanation: 'Ascending order means smallest first.',
                },
            ],
            finalAnswer: '9, 38, 47, 162',
        },
    },
    {
        id: 'gn01-010',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Put these numbers in descending order: 503, 350, 530, 305.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'descending', 'place value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare hundreds, then tens, then units.',
                    workingLatex: '',
                    explanation: 'All four have the same digits but in different places. Compare the hundreds digit first: 530 and 503 have 5 hundreds, 350 and 305 have 3 hundreds. Among the 5-hundreds, 530 > 503; among the 3-hundreds, 350 > 305.',
                },
                {
                    stepNumber: 2,
                    description: 'List largest to smallest.',
                    workingLatex: '530 > 503 > 350 > 305',
                    explanation: 'Descending order means largest first.',
                },
            ],
            finalAnswer: '530, 503, 350, 305',
        },
    },
    {
        id: 'gn01-011',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write down the value of the digit 5 in the number 251 940.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'value of digit'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the column of the 5.',
                    workingLatex: '251\\,940',
                    explanation: 'From the right the columns are: 0 units, 4 tens, 9 hundreds, 1 thousand, 5 ten-thousands, 2 hundred-thousands. The 5 is in the ten-thousands column.',
                },
                {
                    stepNumber: 2,
                    description: 'State the value.',
                    workingLatex: '5 \\times 10\\,000 = 50\\,000',
                    explanation: 'A digit in the ten-thousands column is worth that digit times 10 000.',
                },
            ],
            finalAnswer: 'The 5 has a value of 50 000.',
            canonicalAnswer: '50000',
        },
    },
    {
        id: 'gn01-012',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Round 7 482 to the nearest 1000.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 1000'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Look at the hundreds digit.',
                    workingLatex: '',
                    explanation: 'To round to the nearest 1000 we look at the hundreds digit, which is 4. Since 4 is less than 5 we round down.',
                },
                {
                    stepNumber: 2,
                    description: 'Round down.',
                    workingLatex: '7\\,482 \\to 7\\,000',
                    explanation: '7 482 lies between 7 000 and 8 000 and is nearer 7 000.',
                },
            ],
            finalAnswer: '7000',
            canonicalAnswer: '7000',
        },
    },
    {
        id: 'gn01-013',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write the number 90 300 in words.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into thousands and hundreds.',
                    workingLatex: '90\\,300 = 90\\,000 + 300',
                    explanation: 'There are 90 thousands and 300, with no tens or units.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the words.',
                    workingLatex: '',
                    explanation: 'Ninety thousand, three hundred.',
                },
            ],
            finalAnswer: 'Ninety thousand, three hundred.',
        },
    },
    {
        id: 'gn01-014',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Work out 27 \\times 1000.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shift the digits three places left.',
                    workingLatex: '27 \\times 1000 = 27\\,000',
                    explanation: 'Multiplying by 1000 moves every digit three columns to the left, equivalent to writing three zeros after the whole number.',
                },
            ],
            finalAnswer: '27000',
            canonicalAnswer: '27000',
        },
    },
    {
        id: 'gn01-015',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Place the correct symbol, < or >, between the numbers: 4 309 ___ 4 390.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'place value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare digit by digit from the left.',
                    workingLatex: '',
                    explanation: 'Both have 4 thousands and 3 hundreds. In the tens column the first has 0 and the second has 9, so the first number is smaller.',
                },
                {
                    stepNumber: 2,
                    description: 'Insert the symbol.',
                    workingLatex: '4\\,309 < 4\\,390',
                    explanation: 'The "less than" sign points to the smaller number.',
                },
            ],
            finalAnswer: '4309 < 4390',
        },
    },
    {
        id: 'gn01-016',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'A football stadium holds 41 250 spectators. Round this number to the nearest 1000.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 1000', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Look at the hundreds digit.',
                    workingLatex: '',
                    explanation: 'To round to the nearest 1000 we look at the hundreds digit of 41 250, which is 2. Since 2 is less than 5 we round down.',
                },
                {
                    stepNumber: 2,
                    description: 'Round down.',
                    workingLatex: '41\\,250 \\to 41\\,000',
                    explanation: '41 250 is between 41 000 and 42 000 and is closer to 41 000.',
                },
            ],
            finalAnswer: '41 000 spectators.',
            canonicalAnswer: '41000',
        },
    },
    {
        id: 'gn01-017',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Put these temperatures in ascending order: 3°C, -5°C, 0°C, -1°C, 6°C.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers', 'ascending'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Place on a number line.',
                    workingLatex: '-5 < -1 < 0 < 3 < 6',
                    explanation: 'The most negative number is the smallest. -5 is further left than -1, then 0, then the positive temperatures 3 and 6.',
                },
                {
                    stepNumber: 2,
                    description: 'Write in ascending order.',
                    workingLatex: '',
                    explanation: 'Ascending means coldest (smallest) first.',
                },
            ],
            finalAnswer: '-5°C, -1°C, 0°C, 3°C, 6°C',
        },
    },
    {
        id: 'gn01-018',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Work out 8 \\times 10\\,000.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shift four places left.',
                    workingLatex: '8 \\times 10\\,000 = 80\\,000',
                    explanation: 'Multiplying by 10 000 (which is 10 to the power 4) moves the digit four columns to the left, giving 8 followed by four zeros.',
                },
            ],
            finalAnswer: '80000',
            canonicalAnswer: '80000',
        },
    },
    {
        id: 'gn01-019',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write the number 1 000 000 in words.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'millions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Count the place columns.',
                    workingLatex: '1\\,000\\,000 = 10^{6}',
                    explanation: 'A 1 followed by six zeros is one million.',
                },
            ],
            finalAnswer: 'One million.',
        },
    },
    {
        id: 'gn01-020',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Round 56 to the nearest 10.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 10'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Look at the units digit.',
                    workingLatex: '',
                    explanation: 'The units digit is 6, which is 5 or more, so we round up.',
                },
                {
                    stepNumber: 2,
                    description: 'Round up.',
                    workingLatex: '56 \\to 60',
                    explanation: '56 is between 50 and 60 and is closer to 60.',
                },
            ],
            finalAnswer: '60',
            canonicalAnswer: '60',
        },
    },
    {
        id: 'gn01-021',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write down the value of the digit 9 in the number 9 412 003.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'value of digit', 'millions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading column.',
                    workingLatex: '9\\,412\\,003',
                    explanation: 'The number has seven digits, so the leftmost digit is in the millions column. The 9 is in the millions column.',
                },
                {
                    stepNumber: 2,
                    description: 'State the value.',
                    workingLatex: '9 \\times 1\\,000\\,000 = 9\\,000\\,000',
                    explanation: 'A digit in the millions column is worth that digit times one million.',
                },
            ],
            finalAnswer: 'The 9 has a value of 9 000 000 (nine million).',
            canonicalAnswer: '9000000',
        },
    },
    {
        id: 'gn01-022',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Work out 6 200 \\div 100.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'dividing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shift two places right.',
                    workingLatex: '6\\,200 \\div 100 = 62',
                    explanation: 'Dividing by 100 moves every digit two columns to the right, removing the two trailing zeros.',
                },
            ],
            finalAnswer: '62',
            canonicalAnswer: '62',
        },
    },
    {
        id: 'gn01-023',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'From the list -7, -2, -9, -1, write down the smallest number.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare negative numbers.',
                    workingLatex: '-9 < -7 < -2 < -1',
                    explanation: 'For negative numbers, the one with the largest digits is actually the smallest because it is furthest left on the number line. -9 is the smallest.',
                },
            ],
            finalAnswer: '-9 is the smallest number.',
            canonicalAnswer: '-9',
        },
    },
    {
        id: 'gn01-024',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Foundation',
        questionText:
            'Write the number "forty thousand and seven" in digits.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'digits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Place each part in its column.',
                    workingLatex: '40\\,000 + 7',
                    explanation: 'Forty thousand gives a 4 in the ten-thousands column. There are no thousands, hundreds or tens, so zeros hold those places, and seven units at the end.',
                },
                {
                    stepNumber: 2,
                    description: 'Combine the digits.',
                    workingLatex: '40\\,007',
                    explanation: 'The three zeros are needed to keep the 4 in the ten-thousands place and the 7 in the units place.',
                },
            ],
            finalAnswer: '40007',
            canonicalAnswer: '40007',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // STANDARD  (23)  gn01-025 .. gn01-047
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'gn01-025',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'a) Write the number 308 274 in words.\n\nb) In the number 308 274, write down the value of the digit 8.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'value of digit'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): split off the thousands group.',
                    workingLatex: '308\\,274 = 308\\,000 + 274',
                    explanation: 'Six-digit numbers are read in two groups of three: the thousands group (the left three digits) and the units group (the right three). Splitting at the thousands comma keeps the place values clear and stops the groups blurring together.',
                },
                {
                    stepNumber: 2,
                    description: 'Read each group on its own.',
                    workingLatex: '308 \\to \\text{three hundred and eight},\\quad 274 \\to \\text{two hundred and seventy-four}',
                    explanation: 'Read the left group as an ordinary three-digit number then attach the word "thousand"; read the right group as it stands. Reading them separately avoids accidentally saying "thousand" in the wrong place.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (a): join the two groups.',
                    workingLatex: '',
                    explanation: 'Putting the two readings together gives "three hundred and eight thousand, two hundred and seventy-four". The comma after "thousand" marks where the groups meet.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): locate the column of the 8.',
                    workingLatex: '308\\,274',
                    explanation: 'Count columns from the right: 4 units, 7 tens, 2 hundreds, 8 thousands. The 8 is in the thousands column, not the hundred-thousands — count carefully from the right, never the left.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): state the value.',
                    workingLatex: '8 \\times 1\\,000 = 8\\,000',
                    explanation: 'A digit in the thousands column is worth that digit times 1 000, so the 8 is worth 8 000 (not just 8).',
                },
            ],
            finalAnswer: 'a) Three hundred and eight thousand, two hundred and seventy-four.  b) The 8 is worth 8 000.',
        },
    },
    {
        id: 'gn01-026',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Put these numbers in ascending order: 4 021, 4 210, 4 012, 4 201, 4 102.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'ascending', 'place value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check the thousands digit first.',
                    workingLatex: '4\\,021,\\ 4\\,210,\\ 4\\,012,\\ 4\\,201,\\ 4\\,102',
                    explanation: 'When comparing numbers of equal length, always start from the leftmost (highest) column. Every number here has a 4 in the thousands column, so that column cannot separate them — move on to the next column.',
                },
                {
                    stepNumber: 2,
                    description: 'Sort into groups by the hundreds digit.',
                    workingLatex: '\\underbrace{4\\,021,\\,4\\,012}_{0},\\ \\underbrace{4\\,102}_{1},\\ \\underbrace{4\\,210,\\,4\\,201}_{2}',
                    explanation: 'The hundreds digits are 0, 2, 0, 2, 1. Grouping by this digit puts the two 0-hundreds first, then the single 1-hundred, then the two 2-hundreds. This fixes the rough order before any tie-breaking.',
                },
                {
                    stepNumber: 3,
                    description: 'Break the 0-hundreds tie on tens/units.',
                    workingLatex: '4\\,012 < 4\\,021',
                    explanation: 'Within the 0-hundreds pair the tens digits are 1 and 2, so 4 012 comes before 4 021. Whenever a column ties you drop down to the next column to decide.',
                },
                {
                    stepNumber: 4,
                    description: 'Break the 2-hundreds tie on tens/units.',
                    workingLatex: '4\\,201 < 4\\,210',
                    explanation: 'Within the 2-hundreds pair the tens digits are 0 and 1, so 4 201 comes before 4 210.',
                },
                {
                    stepNumber: 5,
                    description: 'Assemble the full ascending order.',
                    workingLatex: '4\\,012 < 4\\,021 < 4\\,102 < 4\\,201 < 4\\,210',
                    explanation: 'Stitching the sorted groups together in order gives the complete ascending list. A quick check: each number is larger than the one before.',
                },
            ],
            finalAnswer: '4 012, 4 021, 4 102, 4 201, 4 210',
        },
    },
    {
        id: 'gn01-027',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'The population of a town is 47 638. \n\na) Round the population to the nearest 100.\n\nb) Round the population to the nearest 1000.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'context', 'population'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): pick the deciding digit for nearest 100.',
                    workingLatex: '47\\,6\\underline{3}8',
                    explanation: 'To round to the nearest 100, the answer keeps the hundreds column and zeros after it; the digit that decides up or down is the one just to the right — the tens digit, which is 3.',
                },
                {
                    stepNumber: 2,
                    description: 'Apply the rounding rule.',
                    workingLatex: '3 < 5 \\;\\Rightarrow\\; 47\\,638 \\to 47\\,600',
                    explanation: 'Since the tens digit 3 is below 5, we round down: the hundreds digit (6) stays the same and the tens and units become 0. So 47 638 rounds to 47 600.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): pick the deciding digit for nearest 1000.',
                    workingLatex: '47\\,\\underline{6}38',
                    explanation: 'To round to the nearest 1000 the deciding digit is the one just right of the thousands column — the hundreds digit, which is 6. (Notice it is a different digit from part (a).)',
                },
                {
                    stepNumber: 4,
                    description: 'Apply the rounding rule.',
                    workingLatex: '6 \\ge 5 \\;\\Rightarrow\\; 47\\,638 \\to 48\\,000',
                    explanation: 'Since the hundreds digit 6 is 5 or more, we round up: the thousands digit goes from 47 to 48 thousand and the rest become 0, giving 48 000.',
                },
            ],
            finalAnswer: 'a) 47 600   b) 48 000',
        },
    },
    {
        id: 'gn01-028',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Put these numbers in descending order: -3, 5, -8, 0, 2, -1.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'descending', 'negative numbers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sort the positives and zero.',
                    workingLatex: '5 > 2 > 0',
                    explanation: 'Every positive number beats zero, which beats every negative number. So the top of a descending list is the positives, biggest first (5 then 2), followed by 0.',
                },
                {
                    stepNumber: 2,
                    description: 'Sort the negatives by closeness to zero.',
                    workingLatex: '-1 > -3 > -8',
                    explanation: 'For negatives, the one closest to zero is the largest. -1 is nearest zero, then -3, then -8 furthest left. The common slip is to treat -8 as "biggest" because 8 is big — but a bigger digit makes a negative smaller.',
                },
                {
                    stepNumber: 3,
                    description: 'Join the two parts, largest first.',
                    workingLatex: '5 > 2 > 0 > -1 > -3 > -8',
                    explanation: 'Placing the positives/zero block in front of the negatives block gives the full descending order from greatest down to most negative.',
                },
            ],
            finalAnswer: '5, 2, 0, -1, -3, -8',
        },
    },
    {
        id: 'gn01-029',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'a) Work out 504 \\times 100.\n\nb) Work out 7 000 000 \\div 1000.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying', 'dividing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): shift every digit two places left.',
                    workingLatex: '504 \\times 100 = 504\\,00',
                    explanation: 'Multiplying by 100 moves each digit two columns to the left, which is the same as writing two zeros on the end. Note these zeros go after the whole 504, not inside it.',
                },
                {
                    stepNumber: 2,
                    description: 'Tidy the place spacing.',
                    workingLatex: '504\\,00 = 50\\,400',
                    explanation: 'Regrouping the digits into threes from the right gives 50 400. The internal 0 of 504 is kept, so the answer is 50 400, not 5 400.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): shift every digit three places right.',
                    workingLatex: '7\\,000\\,000 \\div 1000 = 7\\,000',
                    explanation: 'Dividing by 1000 moves each digit three columns to the right, removing exactly three of the trailing zeros. Six zeros minus three leaves three, giving 7 000.',
                },
            ],
            finalAnswer: 'a) 50 400   b) 7 000',
        },
    },
    {
        id: 'gn01-030',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Using each of the digits 7, 0, 4 and 9 exactly once, write down:\n\na) the largest possible four-digit number,\n\nb) the smallest possible four-digit number.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'ordering', 'largest smallest'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): rank the available digits.',
                    workingLatex: '9 > 7 > 4 > 0',
                    explanation: 'The four digits in decreasing order are 9, 7, 4, 0. The biggest digit has the most effect when it sits in the highest-value column, so this ranking tells us the order to place them.',
                },
                {
                    stepNumber: 2,
                    description: 'Place them biggest in the thousands column.',
                    workingLatex: '9\\,740',
                    explanation: 'For the largest number, fill from the thousands column down using the ranking: 9 (thousands), 7 (hundreds), 4 (tens), 0 (units). This gives 9 740.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): choose the leading digit, avoiding 0.',
                    workingLatex: '\\text{leading digit} = 4',
                    explanation: 'For the smallest number we want small digits high up, but the thousands digit cannot be 0 or it would only be a three-digit number. The smallest non-zero digit available is 4, so 4 leads.',
                },
                {
                    stepNumber: 4,
                    description: 'Fill the rest smallest first.',
                    workingLatex: '4\\,079',
                    explanation: 'The remaining digits 0, 7, 9 are placed in increasing order after the 4: 0 (hundreds), 7 (tens), 9 (units). This gives 4 079 — note the 0 is now allowed because it is no longer leading.',
                },
            ],
            finalAnswer: 'a) 9 740   b) 4 079',
        },
    },
    {
        id: 'gn01-031',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'The distance from London to Sydney is 16 994 km. Round this distance to the nearest 1000 km.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'context', 'distance'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the deciding digit.',
                    workingLatex: '16\\,\\underline{9}94',
                    explanation: 'Rounding to the nearest 1000 keeps the thousands column and zeros after it. The digit that decides is the one just to its right — the hundreds digit, which is 9.',
                },
                {
                    stepNumber: 2,
                    description: 'Apply the rounding rule.',
                    workingLatex: '9 \\ge 5 \\;\\Rightarrow\\; \\text{round up}',
                    explanation: 'Since 9 is 5 or more, we round up, meaning the thousands count increases by one. The hundreds, tens and units all become 0.',
                },
                {
                    stepNumber: 3,
                    description: 'Carry the thousands up by one.',
                    workingLatex: '16\\,994 \\to 17\\,000',
                    explanation: 'The thousands part goes from 16 to 17 thousand, giving 17 000 km. Watch the carry: it is 17 000, not 16 000.',
                },
            ],
            finalAnswer: '17 000 km',
            canonicalAnswer: '17000',
        },
    },
    {
        id: 'gn01-032',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Place the correct symbol (<, > or =) between each pair.\n\na) 60 000 ___ 6 \\times 10^{4}\n\nb) -15 ___ -9',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'powers of ten', 'negative numbers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): expand the power of ten.',
                    workingLatex: '10^{4} = 10\\,000',
                    explanation: '10 to the power 4 means four 10s multiplied, which is 1 followed by four zeros, i.e. 10 000. Get this base value right before multiplying.',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply, then compare with the left side.',
                    workingLatex: '6 \\times 10\\,000 = 60\\,000 \\;\\Rightarrow\\; 60\\,000 = 60\\,000',
                    explanation: '6 lots of 10 000 is 60 000, which is exactly the left-hand side, so the correct symbol is the equals sign.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): compare two negatives.',
                    workingLatex: '-15 < -9',
                    explanation: 'On the number line -15 lies further left than -9, so it is the smaller value. The "less than" sign points to the smaller number on the left.',
                },
            ],
            finalAnswer: 'a) =   b) <',
        },
    },
    {
        id: 'gn01-033',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'A number rounds to 5 300 when rounded to the nearest 100. Write down the smallest and the largest whole number it could have been.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reverse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate the two multiples of 100 on either side.',
                    workingLatex: '5\\,200 \\;\\big|\\; 5\\,300 \\;\\big|\\; 5\\,400',
                    explanation: 'A number rounding to 5 300 must sit between the neighbouring hundreds 5 200 and 5 400. The cut-offs are the halfway points to each neighbour, 5 250 and 5 350.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the lower limit (halfway point rounds up).',
                    workingLatex: '5\\,250 \\to 5\\,300',
                    explanation: 'The halfway value 5 250 rounds up to 5 300 by the "round a 5 up" convention, and everything above it up to 5 300 does too. Anything below 5 250 would round to 5 200. So the smallest whole number is 5 250.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the upper limit (just below the next halfway).',
                    workingLatex: '5\\,349 \\to 5\\,300,\\quad 5\\,350 \\to 5\\,400',
                    explanation: '5 349 has tens digit 4 so rounds down to 5 300, but 5 350 is the next halfway point and rounds up to 5 400. So the largest whole number that still rounds to 5 300 is 5 349, not 5 350.',
                },
            ],
            finalAnswer: 'Smallest 5 250, largest 5 349.',
        },
    },
    {
        id: 'gn01-034',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Put these heights of mountains (in metres) in ascending order: 4 478, 4 808, 4 411, 4 884, 4 478 is repeated? No — 4 478, 4 808, 4 411, 4 884, 4 184.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'ascending', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Thousands all equal; move to the hundreds.',
                    workingLatex: '4\\,478,\\ 4\\,808,\\ 4\\,411,\\ 4\\,884,\\ 4\\,184',
                    explanation: 'Every height has 4 in the thousands column, so that column cannot order them. Start comparing from the next column down, the hundreds.',
                },
                {
                    stepNumber: 2,
                    description: 'Group by the hundreds digit.',
                    workingLatex: '\\underbrace{4\\,184}_{1},\\ \\underbrace{4\\,478,\\,4\\,411}_{4},\\ \\underbrace{4\\,808,\\,4\\,884}_{8}',
                    explanation: 'Hundreds digits are 4, 8, 4, 8, 1. The single 1-hundred (4 184) is smallest, then the two 4-hundreds, then the two 8-hundreds. This sets the rough order.',
                },
                {
                    stepNumber: 3,
                    description: 'Break the 4-hundreds tie on the tens.',
                    workingLatex: '4\\,411 < 4\\,478',
                    explanation: 'The 4-hundreds pair has tens digits 1 and 7, so 4 411 comes before 4 478.',
                },
                {
                    stepNumber: 4,
                    description: 'Break the 8-hundreds tie on the tens.',
                    workingLatex: '4\\,808 < 4\\,884',
                    explanation: 'The 8-hundreds pair has tens digits 0 and 8, so 4 808 comes before 4 884.',
                },
                {
                    stepNumber: 5,
                    description: 'Assemble the ascending order.',
                    workingLatex: '4\\,184 < 4\\,411 < 4\\,478 < 4\\,808 < 4\\,884',
                    explanation: 'Combining the sorted groups gives the full list from shortest to tallest.',
                },
            ],
            finalAnswer: '4 184, 4 411, 4 478, 4 808, 4 884',
        },
    },
    {
        id: 'gn01-035',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Write the number 2 040 506 in words, and state the value of the digit 4.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'millions', 'value of digit'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into three-digit groups from the right.',
                    workingLatex: '2 \\,|\\, 040 \\,|\\, 506',
                    explanation: 'Large numbers are read in groups of three counted from the right: units group 506, thousands group 040, millions group 2. The leading group can be short.',
                },
                {
                    stepNumber: 2,
                    description: 'Attach the group names.',
                    workingLatex: '2\\,040\\,506 = 2\\,000\\,000 + 40\\,000 + 506',
                    explanation: 'The 2 means two million, 040 means forty thousand (the leading 0 just means no hundred-thousands), and 506 is five hundred and six.',
                },
                {
                    stepNumber: 3,
                    description: 'Write the full words.',
                    workingLatex: '',
                    explanation: 'Reading the groups in order: two million, forty thousand, five hundred and six.',
                },
                {
                    stepNumber: 4,
                    description: 'Locate the column of the 4.',
                    workingLatex: '2\\,0\\underline{4}0\\,506',
                    explanation: 'Counting from the right: units, tens, hundreds, thousands, ten-thousands — the 4 is in the ten-thousands column, not the thousands.',
                },
                {
                    stepNumber: 5,
                    description: 'State the value of the 4.',
                    workingLatex: '4 \\times 10\\,000 = 40\\,000',
                    explanation: 'A digit in the ten-thousands column is worth that digit times 10 000, so the 4 is worth 40 000.',
                },
            ],
            finalAnswer: 'Two million, forty thousand, five hundred and six. The 4 is worth 40 000.',
        },
    },
    {
        id: 'gn01-036',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Tom writes 3 \\times 1000 + 5 \\times 10 + 8. \n\na) What number has Tom written?\n\nb) Write your answer to part (a) in words.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'expanded form', 'words'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): evaluate each place-value term.',
                    workingLatex: '3 \\times 1000 = 3\\,000,\\quad 5 \\times 10 = 50,\\quad 8 = 8',
                    explanation: 'Work out each term separately so the column each digit belongs to is clear: 3 thousands, 5 tens, 8 units. There is no hundreds term written, which matters next.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the terms, inserting the missing column.',
                    workingLatex: '3\\,000 + 50 + 8 = 3\\,058',
                    explanation: 'Because no hundreds were given, a 0 must hold the hundreds column. Forgetting it would wrongly give 358, so the answer is 3 058.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): write 3 058 in words.',
                    workingLatex: '',
                    explanation: 'Read it as three thousand, then the remaining 58: three thousand and fifty-eight.',
                },
            ],
            finalAnswer: 'a) 3 058   b) Three thousand and fifty-eight.',
            canonicalAnswer: '3058',
        },
    },
    {
        id: 'gn01-037',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'In a quiz, five teams scored -200, 150, -50, 0 and 300 points. Write the scores in order from highest to lowest.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'descending', 'negative numbers', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Place the positive scores and zero first.',
                    workingLatex: '300 > 150 > 0',
                    explanation: 'Highest to lowest, the positive scores lead: 300 then 150, and 0 sits just below them since any positive beats zero.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the negative scores by closeness to zero.',
                    workingLatex: '-50 > -200',
                    explanation: '-50 is greater than -200 because it is closer to zero on the number line — a team that lost fewer points did better. Avoid reading -200 as "bigger" just because 200 is large.',
                },
                {
                    stepNumber: 3,
                    description: 'Combine into the full descending list.',
                    workingLatex: '300 > 150 > 0 > -50 > -200',
                    explanation: 'Joining the two parts gives the scores from highest to lowest.',
                },
            ],
            finalAnswer: '300, 150, 0, -50, -200',
        },
    },
    {
        id: 'gn01-038',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'a) Round 9 851 to the nearest 100.\n\nb) Round 9 851 to the nearest 1000.\n\nc) Explain why your two answers are different.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'nearest 100', 'nearest 1000'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): pick the deciding digit (nearest 100).',
                    workingLatex: '9\\,8\\underline{5}1',
                    explanation: 'For the nearest 100 the deciding digit is the tens digit, which is 5. A 5 rounds up by convention.',
                },
                {
                    stepNumber: 2,
                    description: 'Round to the nearest 100.',
                    workingLatex: '9\\,851 \\to 9\\,900',
                    explanation: 'Rounding up, the hundreds digit goes from 8 to 9 and the rest become 0, giving 9 900.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): pick the deciding digit (nearest 1000).',
                    workingLatex: '9\\,\\underline{8}51',
                    explanation: 'For the nearest 1000 the deciding digit is the hundreds digit, which is 8. Since 8 is 5 or more we round up.',
                },
                {
                    stepNumber: 4,
                    description: 'Round to the nearest 1000, watching the carry.',
                    workingLatex: '9\\,851 \\to 10\\,000',
                    explanation: 'Rounding the 9 thousand up adds one more thousand, which carries past 9 into 10 000 — a common slip is to write 9 000 and miss the carry.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): explain the difference.',
                    workingLatex: '9\\,900 \\ne 10\\,000',
                    explanation: 'Each rounding snaps the number to the nearest multiple of its place value. The nearest 100 keeps it close at 9 900, but the coarser nearest 1000 jumps it over to 10 000, so the two answers naturally differ.',
                },
            ],
            finalAnswer: 'a) 9 900   b) 10 000   c) Different because the two roundings snap to different-sized multiples.',
        },
    },
    {
        id: 'gn01-039',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'A shop sold 12 480 items in a year. Write this number correct to the nearest hundred, and then in words.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'context', 'words'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the deciding digit for nearest 100.',
                    workingLatex: '12\\,4\\underline{8}0',
                    explanation: 'Rounding to the nearest 100 looks at the tens digit, which is 8. The units (0) does not matter — only the digit immediately right of the rounding column decides.',
                },
                {
                    stepNumber: 2,
                    description: 'Round up to the next hundred.',
                    workingLatex: '12\\,480 \\to 12\\,500',
                    explanation: 'Since 8 is 5 or more we round up: the hundreds digit goes from 4 to 5 and the tens and units become 0, giving 12 500.',
                },
                {
                    stepNumber: 3,
                    description: 'Write 12 500 in words.',
                    workingLatex: '',
                    explanation: 'Read the thousands group (12) then the hundreds: twelve thousand, five hundred.',
                },
            ],
            finalAnswer: '12 500 — twelve thousand, five hundred.',
            canonicalAnswer: '12500',
        },
    },
    {
        id: 'gn01-040',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'A number n satisfies 30 \\le n < 40 and, when multiplied by 100, gives an answer between 3 200 and 3 600. List all the possible integer values of n.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'reasoning', 'inequalities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the "between" condition as an inequality.',
                    workingLatex: '3\\,200 < 100n < 3\\,600',
                    explanation: '"Between 3 200 and 3 600" means 100n is larger than 3 200 and smaller than 3 600. Capturing it as one double inequality lets us solve both ends at once.',
                },
                {
                    stepNumber: 2,
                    description: 'Divide every part by 100.',
                    workingLatex: '\\frac{3\\,200}{100} < n < \\frac{3\\,600}{100}',
                    explanation: 'To isolate n we divide all three parts by 100. Dividing each bound shifts its digits two places right.',
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the bounds.',
                    workingLatex: '32 < n < 36',
                    explanation: 'So n lies strictly between 32 and 36. "Strictly" matters: 32 and 36 themselves are excluded because the original inequality used < not ≤.',
                },
                {
                    stepNumber: 4,
                    description: 'List integers, checking the first condition too.',
                    workingLatex: 'n = 33,\\ 34,\\ 35',
                    explanation: 'The integers strictly between 32 and 36 are 33, 34, 35. Each also satisfies the given 30 ≤ n < 40, so none is ruled out and all three qualify.',
                },
            ],
            finalAnswer: 'n = 33, 34 or 35.',
        },
    },
    {
        id: 'gn01-041',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'The number 7□4 is greater than 754 but less than 794. Write down all the digits that could replace the box.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'comparing', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note which columns are fixed.',
                    workingLatex: '754 < 7\\square 4 < 794',
                    explanation: 'All three numbers have hundreds digit 7 and units digit 4. Since those columns are identical, whether 7□4 sits inside the range depends entirely on the tens digit (the box).',
                },
                {
                    stepNumber: 2,
                    description: 'Use the lower bound: greater than 754.',
                    workingLatex: '7\\square 4 > 754 \\;\\Rightarrow\\; \\square > 5',
                    explanation: 'To beat 754 with the same hundreds and units, the box must be larger than the 5 in 754. So the box is at least 6 (the units 4 = 4 ties, so equality alone is not enough).',
                },
                {
                    stepNumber: 3,
                    description: 'Use the upper bound: less than 794.',
                    workingLatex: '7\\square 4 < 794 \\;\\Rightarrow\\; \\square < 9',
                    explanation: 'To stay below 794 the box must be smaller than the 9 in 794, so the box is at most 8.',
                },
                {
                    stepNumber: 4,
                    description: 'List the allowed digits.',
                    workingLatex: '5 < \\square < 9 \\;\\Rightarrow\\; \\square \\in \\{6,7,8\\}',
                    explanation: 'Combining "more than 5" and "less than 9" leaves the tens digit as 6, 7 or 8.',
                },
            ],
            finalAnswer: 'The box can be 6, 7 or 8.',
        },
    },
    {
        id: 'gn01-042',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Four bank accounts have balances of £-340, £125, £-90 and £0. List the balances from the most in debt to the most in credit.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers', 'money', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Translate "most in debt" into smallest number.',
                    workingLatex: '\\text{most in debt} = \\text{most negative}',
                    explanation: 'Being in debt is a negative balance, and the deeper the debt the more negative the number. So "most in debt to most in credit" means listing from the smallest (most negative) value up to the largest.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the two negative balances.',
                    workingLatex: '-340 < -90',
                    explanation: '-£340 is further from zero than -£90, so it is the smaller number and the bigger debt. Do not let the larger digit 340 trick you into thinking -340 is greater.',
                },
                {
                    stepNumber: 3,
                    description: 'Place zero and the credit balance.',
                    workingLatex: '-340 < -90 < 0 < 125',
                    explanation: 'After the negatives comes £0 (no debt), then the positive £125 in credit at the top. This is the full order from most in debt to most in credit.',
                },
            ],
            finalAnswer: '£-340, £-90, £0, £125',
        },
    },
    {
        id: 'gn01-043',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'a) Work out 45 \\times 1000.\n\nb) Hence, or otherwise, work out 45 \\times 999. (Hint: 999 = 1000 - 1.)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): multiply by 1000.',
                    workingLatex: '45 \\times 1000 = 45\\,000',
                    explanation: 'Multiplying by 1000 shifts every digit three places left, the same as writing three zeros after 45. This gives 45 000.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): rewrite 999 using the hint.',
                    workingLatex: '45 \\times 999 = 45 \\times (1000 - 1)',
                    explanation: 'The hint 999 = 1000 - 1 turns an awkward multiplication into one we already know. We can multiply out the bracket next.',
                },
                {
                    stepNumber: 3,
                    description: 'Expand the bracket.',
                    workingLatex: '45 \\times 1000 - 45 \\times 1 = 45\\,000 - 45',
                    explanation: 'Distributing, 45 times 1000 is the 45 000 from part (a), and 45 times 1 is one extra lot of 45 to subtract. A common slip is to subtract 1 instead of 45 — it is one *lot of 45*.',
                },
                {
                    stepNumber: 4,
                    description: 'Complete the subtraction.',
                    workingLatex: '45\\,000 - 45 = 44\\,955',
                    explanation: 'Taking 45 off 45 000 drops it just below 45 000 to 44 955.',
                },
            ],
            finalAnswer: 'a) 45 000   b) 44 955',
            canonicalAnswer: '44955',
        },
    },
    {
        id: 'gn01-044',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'The number of seconds in a day is 86 400. Round this to the nearest ten thousand.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the deciding digit for nearest ten thousand.',
                    workingLatex: '8\\underline{6}\\,400',
                    explanation: 'Rounding to the nearest ten thousand keeps the ten-thousands column; the digit that decides is the one just to its right — the thousands digit, which is 6.',
                },
                {
                    stepNumber: 2,
                    description: 'Apply the rounding rule.',
                    workingLatex: '6 \\ge 5 \\;\\Rightarrow\\; \\text{round up}',
                    explanation: 'Since 6 is 5 or more, the ten-thousands digit rounds up by one and everything to its right becomes 0.',
                },
                {
                    stepNumber: 3,
                    description: 'Write the rounded number.',
                    workingLatex: '86\\,400 \\to 90\\,000',
                    explanation: 'The ten-thousands digit goes from 8 to 9, giving 90 000 seconds.',
                },
            ],
            finalAnswer: '90 000',
            canonicalAnswer: '90000',
        },
    },
    {
        id: 'gn01-045',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'A six-digit number reads 2□6□14, where the two boxes contain the same digit d. \n\na) Write the number when d = 0.\n\nb) Find the value of the number when d = 3, and write it in words.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'words', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Lay out the six digit positions.',
                    workingLatex: '2\\ \\square\\ 6\\ \\square\\ 1\\ 4',
                    explanation: 'The number is six digits long: a fixed 2, then a box, then 6, then a box, then 1, then 4. Both boxes hold the same digit d, so only one value needs choosing.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): substitute d = 0.',
                    workingLatex: '2\\,0\\,6\\,0\\,1\\,4 = 206\\,014',
                    explanation: 'Putting 0 in each box gives the digits 2, 0, 6, 0, 1, 4. Grouping into threes from the right reads 206 014.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): substitute d = 3.',
                    workingLatex: '2\\,3\\,6\\,3\\,1\\,4 = 236\\,314',
                    explanation: 'Putting 3 in each box gives 2, 3, 6, 3, 1, 4, which reads 236 314.',
                },
                {
                    stepNumber: 4,
                    description: 'Write 236 314 in words.',
                    workingLatex: '',
                    explanation: 'Read the thousands group 236 then the units group 314: two hundred and thirty-six thousand, three hundred and fourteen.',
                },
            ],
            finalAnswer: 'a) 206 014   b) 236 314 — two hundred and thirty-six thousand, three hundred and fourteen.',
        },
    },
    {
        id: 'gn01-046',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Two cities have populations of 1 250 000 and 1 205 000. \n\na) Which city has the larger population?\n\nb) Write the larger population in words.',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'millions', 'words', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): compare the millions column.',
                    workingLatex: '1\\,250\\,000 \\;\\text{vs}\\; 1\\,205\\,000',
                    explanation: 'Both numbers have a 1 in the millions column, so that column ties and cannot separate them. Move to the next group, the thousands.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare the thousands group.',
                    workingLatex: '250 > 205',
                    explanation: 'The thousands groups are 250 and 205. Comparing digit by digit, the hundreds match (2) but the tens are 5 versus 0, so 250 thousand beats 205 thousand. Therefore 1 250 000 is the larger population.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): write 1 250 000 in words.',
                    workingLatex: '',
                    explanation: 'Read the millions group (1) then the thousands group (250): one million, two hundred and fifty thousand. There are no further hundreds, tens or units.',
                },
            ],
            finalAnswer: 'a) The city with 1 250 000.   b) One million, two hundred and fifty thousand.',
        },
    },
    {
        id: 'gn01-047',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Standard',
        questionText:
            'Round 649 to the nearest 10 and to the nearest 100. Use your answers to explain why rounding 649 to the nearest 100 does NOT give the same result as rounding it to the nearest 10 first and then to the nearest 100.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'reasoning', 'double rounding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Round 649 directly to the nearest 100.',
                    workingLatex: '6\\underline{4}9 \\to 600',
                    explanation: 'For the nearest 100 the deciding digit is the tens digit, 4. Since 4 is less than 5, 649 rounds down to 600.',
                },
                {
                    stepNumber: 2,
                    description: 'Now round 649 to the nearest 10 instead.',
                    workingLatex: '64\\underline{9} \\to 650',
                    explanation: 'For the nearest 10 the deciding digit is the units, 9. Since 9 is 5 or more, 649 rounds up to 650.',
                },
                {
                    stepNumber: 3,
                    description: 'Round that result, 650, to the nearest 100.',
                    workingLatex: '6\\underline{5}0 \\to 700',
                    explanation: 'The tens digit of 650 is now 5, which rounds up, taking it to 700. The earlier rounding changed the tens digit from 4 to 5, which is what tips it over.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare the two results.',
                    workingLatex: '600 \\ne 700',
                    explanation: 'Rounding directly gives 600 but rounding in two stages gives 700 — a difference of a whole 100. The first rounding nudged 649 up to 650, pushing it across the 650 boundary it would never have crossed on its own.',
                },
                {
                    stepNumber: 5,
                    description: 'State the lesson.',
                    workingLatex: '',
                    explanation: 'Always round once, straight to the place value you are asked for. Rounding in steps ("double rounding") can accumulate error and give the wrong answer.',
                },
            ],
            finalAnswer: 'Direct: 600. Double rounding: 650 then 700. They differ, so always round in one step to the required place value.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CHALLENGE  (23)  gn01-048 .. gn01-070
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'gn01-048',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Using each of the digits 1, 3, 5, 6 and 8 exactly once, find the largest five-digit number and the smallest five-digit number, and work out the difference between them.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'ordering', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rank the five digits.',
                    workingLatex: '8 > 6 > 5 > 3 > 1',
                    explanation: 'Writing the digits in order, biggest to smallest, sets up both numbers at once: the largest uses this order, the smallest uses the reverse.',
                },
                {
                    stepNumber: 2,
                    description: 'Largest: biggest digit in the highest column.',
                    workingLatex: '86\\,531',
                    explanation: 'Fill from the ten-thousands column down using the ranking — 8, 6, 5, 3, 1 — giving 86 531.',
                },
                {
                    stepNumber: 3,
                    description: 'Smallest: smallest digit in the highest column.',
                    workingLatex: '13\\,568',
                    explanation: 'Reverse the ranking: 1, 3, 5, 6, 8, giving 13 568. There is no 0 among the digits, so the leading-zero rule never bites here.',
                },
                {
                    stepNumber: 4,
                    description: 'Subtract smallest from largest.',
                    workingLatex: '86\\,531 - 13\\,568',
                    explanation: 'The difference between the two extremes is found by column subtraction, borrowing where the top digit is smaller.',
                },
                {
                    stepNumber: 5,
                    description: 'Complete the subtraction.',
                    workingLatex: '86\\,531 - 13\\,568 = 72\\,963',
                    explanation: 'Working right to left with borrowing gives 72 963. A quick check: 13 568 + 72 963 = 86 531, confirming the result.',
                },
            ],
            finalAnswer: 'Largest 86 531, smallest 13 568, difference 72 963.',
            canonicalAnswer: '72963',
        },
    },
    {
        id: 'gn01-049',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A whole number rounds to 8 000 when rounded to the nearest 1000 AND rounds to 7 800 when rounded to the nearest 100. \n\na) Write down the smallest possible value of the number.\n\nb) Write down the largest possible value of the number.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Range for "rounds to 8 000 (nearest 1000)".',
                    workingLatex: '7\\,500 \\le n \\le 8\\,499',
                    explanation: 'A number rounds to 8 000 to the nearest thousand if it sits between the halfway points 7 500 and 8 500. The lower halfway 7 500 rounds up (included); 8 500 would round up to 9 000, so the top is 8 499.',
                },
                {
                    stepNumber: 2,
                    description: 'Range for "rounds to 7 800 (nearest 100)".',
                    workingLatex: '7\\,750 \\le n \\le 7\\,849',
                    explanation: 'For the nearest hundred the halfway points are 7 750 and 7 850. 7 750 rounds up (included), and 7 850 would round to 7 900, so the top is 7 849.',
                },
                {
                    stepNumber: 3,
                    description: 'Both conditions must hold — intersect.',
                    workingLatex: '[7\\,500,\\,8\\,499] \\cap [7\\,750,\\,7\\,849] = [7\\,750,\\,7\\,849]',
                    explanation: 'The number must satisfy both roundings, so it must lie in both ranges. Since 7 750 ≥ 7 500 and 7 849 ≤ 8 499, the second range sits entirely inside the first, and the overlap is just 7 750 to 7 849.',
                },
                {
                    stepNumber: 4,
                    description: 'Read off the smallest and largest.',
                    workingLatex: 'n_{\\min} = 7\\,750,\\quad n_{\\max} = 7\\,849',
                    explanation: 'The endpoints of the overlap give the answers: smallest 7 750, largest 7 849.',
                },
            ],
            finalAnswer: 'a) 7 750   b) 7 849',
        },
    },
    {
        id: 'gn01-050',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'The populations of five countries are 5 600 000, 5 060 000, 56 000 000, 5 006 000 and 6 500 000. Put them in ascending order and state how many times bigger the largest is than the smallest, to the nearest whole number.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'millions', 'comparing', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Count digits to spot the outlier.',
                    workingLatex: '56\\,000\\,000 \\;(8\\text{ digits})',
                    explanation: 'Before comparing values, count digits. 56 000 000 has eight digits (tens of millions) while the others have seven (single millions), so it is clearly the largest. The common slip is to read all the 5s as equal.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare the millions digit of the seven-digit numbers.',
                    workingLatex: '6\\,500\\,000 \\;(6\\text{M}) > 5\\,006\\,000,\\,5\\,060\\,000,\\,5\\,600\\,000 \\;(5\\text{M})',
                    explanation: 'Of the four seven-digit numbers, 6 500 000 has 6 in the millions column and the rest have 5, so 6 500 000 is the biggest of these four.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the three "5-million" numbers.',
                    workingLatex: '5\\,006\\,000 < 5\\,060\\,000 < 5\\,600\\,000',
                    explanation: 'All three have 5 million, so compare the hundred-thousands digit: 0, 0, 6 — wait, look further. They read 006, 060, 600 thousands, so in increasing order 5 006 000 < 5 060 000 < 5 600 000.',
                },
                {
                    stepNumber: 4,
                    description: 'Assemble the full ascending order.',
                    workingLatex: '5\\,006\\,000 < 5\\,060\\,000 < 5\\,600\\,000 < 6\\,500\\,000 < 56\\,000\\,000',
                    explanation: 'Append 6 500 000 then the eight-digit 56 000 000 to the sorted trio to get the complete list.',
                },
                {
                    stepNumber: 5,
                    description: 'Divide largest by smallest.',
                    workingLatex: '\\frac{56\\,000\\,000}{5\\,006\\,000} \\approx 11.19',
                    explanation: 'How many times bigger means largest ÷ smallest. This is about 11.19, which to the nearest whole number is 11. So the largest is about 11 times the smallest.',
                },
            ],
            finalAnswer: '5 006 000, 5 060 000, 5 600 000, 6 500 000, 56 000 000. The largest is about 11 times bigger than the smallest.',
        },
    },
    {
        id: 'gn01-051',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'I am thinking of a three-digit number. The hundreds digit is twice the units digit. The tens digit is the sum of the other two digits. The number is even. There are several possibilities; find the largest such number.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'reasoning', 'logic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Name the units digit and write the hundreds.',
                    workingLatex: 'h = 2u',
                    explanation: 'Let the units digit be u. The hundreds digit h is twice the units, so h = 2u. Using one letter for the whole number keeps the three conditions tied together.',
                },
                {
                    stepNumber: 2,
                    description: 'Restrict u so h stays a valid leading digit.',
                    workingLatex: '1 \\le u \\le 4',
                    explanation: 'h = 2u must be a single non-zero digit (it is the leading digit). So 2u must be between 1 and 9, i.e. u is 1, 2, 3 or 4. u = 0 is rejected since h would be 0.',
                },
                {
                    stepNumber: 3,
                    description: 'Write the tens digit in terms of u.',
                    workingLatex: 't = h + u = 2u + u = 3u',
                    explanation: 'The tens digit is the sum of the other two: t = h + u = 2u + u = 3u.',
                },
                {
                    stepNumber: 4,
                    description: 'Restrict u so t is a single digit.',
                    workingLatex: '3u \\le 9 \\;\\Rightarrow\\; u \\le 3',
                    explanation: 'For t = 3u to be a single digit it must be at most 9, forcing u ≤ 3. Combined with the earlier range, u is now 1, 2 or 3.',
                },
                {
                    stepNumber: 5,
                    description: 'Apply the "even" condition.',
                    workingLatex: 'u \\text{ even} \\;\\Rightarrow\\; u = 2',
                    explanation: 'A whole number is even exactly when its units digit is even. Among u = 1, 2, 3 the only even value is u = 2, so u is forced.',
                },
                {
                    stepNumber: 6,
                    description: 'Compute the three digits.',
                    workingLatex: 'h = 2(2) = 4,\\quad t = 3(2) = 6,\\quad u = 2',
                    explanation: 'Substituting u = 2 gives hundreds 4, tens 6, units 2.',
                },
                {
                    stepNumber: 7,
                    description: 'Assemble and check.',
                    workingLatex: '462',
                    explanation: 'The digits make 462. The conditions left only one option, so this is automatically the largest. Check: 4 = 2×2, 6 = 4+2, and 462 ends in 2 so is even.',
                },
            ],
            finalAnswer: '462',
            canonicalAnswer: '462',
        },
    },
    {
        id: 'gn01-052',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A number N is such that N \\times 100 = 4 \\times 10^{6}. \n\na) Find N.\n\nb) Write N \\div 1000 as an ordinary number.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'reasoning', 'dividing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate the right-hand side.',
                    workingLatex: '4 \\times 10^{6} = 4 \\times 1\\,000\\,000 = 4\\,000\\,000',
                    explanation: '10 to the power 6 is 1 followed by six zeros, one million. Four of them is 4 000 000. Turning the power into an ordinary number makes the next step a plain division.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): rearrange to make N the subject.',
                    workingLatex: 'N \\times 100 = 4\\,000\\,000 \\;\\Rightarrow\\; N = 4\\,000\\,000 \\div 100',
                    explanation: 'N is multiplied by 100, so to undo that we divide both sides by 100. The inverse of "times 100" is "divide by 100".',
                },
                {
                    stepNumber: 3,
                    description: 'Carry out the division.',
                    workingLatex: 'N = 40\\,000',
                    explanation: 'Dividing 4 000 000 by 100 removes two trailing zeros, giving N = 40 000.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): divide N by 1000.',
                    workingLatex: '40\\,000 \\div 1000 = 40',
                    explanation: 'Dividing 40 000 by 1000 removes three trailing zeros (four zeros minus three), leaving 40.',
                },
            ],
            finalAnswer: 'a) N = 40 000   b) 40',
        },
    },
    {
        id: 'gn01-053',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'When a positive whole number is rounded to the nearest 10 it becomes 250, and when the same number is rounded to the nearest 100 it becomes 200. Find all the possible values of the original number.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Range for "rounds to 250 (nearest 10)".',
                    workingLatex: '245 \\le n \\le 254',
                    explanation: 'The halfway points around 250 are 245 and 255. 245 rounds up to 250 (included), and 255 would round to 260, so the top whole number is 254.',
                },
                {
                    stepNumber: 2,
                    description: 'Range for "rounds to 200 (nearest 100)".',
                    workingLatex: '150 \\le n \\le 249',
                    explanation: 'The halfway points around 200 are 150 and 250. 150 rounds up to 200 (included), but 250 rounds up to 300, so the top whole number here is 249.',
                },
                {
                    stepNumber: 3,
                    description: 'Both must hold — intersect the ranges.',
                    workingLatex: '[245,\\,254] \\cap [150,\\,249] = [245,\\,249]',
                    explanation: 'The number must lie in both ranges. The higher lower-bound is 245 and the lower upper-bound is 249, so the overlap runs from 245 to 249.',
                },
                {
                    stepNumber: 4,
                    description: 'List every whole number in the overlap.',
                    workingLatex: 'n = 245,\\ 246,\\ 247,\\ 248,\\ 249',
                    explanation: 'These five whole numbers satisfy both rounding conditions simultaneously.',
                },
            ],
            finalAnswer: '245, 246, 247, 248 or 249.',
        },
    },
    {
        id: 'gn01-054',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'The temperatures at midnight on five nights were -6°C, -11°C, -2°C, -9°C and -4°C. \n\na) Order them from coldest to warmest.\n\nb) Find the difference in temperature between the coldest and warmest night.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): order by position on the number line.',
                    workingLatex: '-11 < -9 < -6 < -4 < -2',
                    explanation: 'Coldest means smallest, i.e. furthest left on the number line. For negatives the larger the digits the further left, so -11 is coldest and -2 (nearest zero) is warmest.',
                },
                {
                    stepNumber: 2,
                    description: 'Pick out the coldest and warmest.',
                    workingLatex: '\\text{coldest} = -11,\\quad \\text{warmest} = -2',
                    explanation: 'From the ordered list, the two ends are the coldest night (-11°C) and the warmest night (-2°C). These are what part (b) needs.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): subtract coldest from warmest.',
                    workingLatex: '-2 - (-11)',
                    explanation: 'The temperature difference is warmest minus coldest. Subtracting a negative is the slip to watch — it turns into an addition.',
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the double negative.',
                    workingLatex: '-2 - (-11) = -2 + 11 = 9',
                    explanation: 'Subtracting -11 is the same as adding 11, giving 9. So the coldest and warmest nights are 9°C apart.',
                },
            ],
            finalAnswer: 'a) -11°C, -9°C, -6°C, -4°C, -2°C   b) 9°C',
            canonicalAnswer: '9',
        },
    },
    {
        id: 'gn01-055',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A number reads 3 4□7 2□6 (a seven-digit number) where each box is the same digit d. The number, rounded to the nearest million, is 3 000 000. Find the largest possible value of d, and write the resulting number in words.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['place value', 'rounding', 'millions', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'List the seven columns of the number.',
                    workingLatex: '3\\,4d7\\,2d6',
                    explanation: 'From the millions column down the digits are 3, 4, d, 7, 2, d, 6. The two boxes share the same value d.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the digit that controls rounding to a million.',
                    workingLatex: '\\text{hundred-thousands digit} = 4',
                    explanation: 'Rounding to the nearest million is decided by the hundred-thousands digit (just right of the millions column). Here that digit is the fixed 4, not a box.',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the rounding rule.',
                    workingLatex: '4 < 5 \\;\\Rightarrow\\; 3\\,4d7\\,2d6 \\to 3\\,000\\,000',
                    explanation: 'Because the deciding digit is 4 (less than 5), the number always rounds DOWN to 3 000 000 — and this is true whatever d is, since d sits in lower columns that do not affect the rounding.',
                },
                {
                    stepNumber: 4,
                    description: 'Choose the largest allowed d.',
                    workingLatex: 'd = 9',
                    explanation: 'Since every digit d keeps the rounding at 3 000 000, there is no restriction on d. The largest single digit is 9.',
                },
                {
                    stepNumber: 5,
                    description: 'Substitute d = 9 into the number.',
                    workingLatex: '3\\,497\\,296',
                    explanation: 'Replacing both boxes with 9 gives the digits 3, 4, 9, 7, 2, 9, 6, that is 3 497 296.',
                },
                {
                    stepNumber: 6,
                    description: 'Write 3 497 296 in words.',
                    workingLatex: '',
                    explanation: 'Group as 3 | 497 | 296: three million, four hundred and ninety-seven thousand, two hundred and ninety-six.',
                },
            ],
            finalAnswer: 'd = 9, giving 3 497 296 — three million, four hundred and ninety-seven thousand, two hundred and ninety-six.',
        },
    },
    {
        id: 'gn01-056',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Three whole numbers are each rounded to the nearest 100, giving 400, 700 and 1000. The original three numbers add up to exactly 2 050. Find the smallest possible value of the number that rounded to 1000.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write each number\'s rounding range.',
                    workingLatex: '350 \\le a \\le 449,\\ 650 \\le b \\le 749,\\ 950 \\le c \\le 1049',
                    explanation: 'a rounds to 400, b to 700 and c to 1000 to the nearest hundred. Each range runs from the lower halfway point (included) up to 49 above the target.',
                },
                {
                    stepNumber: 2,
                    description: 'Express c using the fixed total.',
                    workingLatex: 'c = 2\\,050 - a - b',
                    explanation: 'Since the three add to 2 050, c equals 2 050 minus the other two. To make c small we therefore need a + b as large as possible.',
                },
                {
                    stepNumber: 3,
                    description: 'Maximise a + b at the top of their ranges.',
                    workingLatex: 'a + b \\le 449 + 749 = 1\\,198',
                    explanation: 'The biggest a is 449 and the biggest b is 749, so a + b is at most 1 198.',
                },
                {
                    stepNumber: 4,
                    description: 'Compute the smallest c this gives.',
                    workingLatex: 'c = 2\\,050 - 1\\,198 = 852',
                    explanation: 'Plugging the maximum a + b into the total suggests c could be as low as 852.',
                },
                {
                    stepNumber: 5,
                    description: 'Test 852 against c\'s own range.',
                    workingLatex: '852 < 950 \\;\\Rightarrow\\; \\text{not allowed}',
                    explanation: 'But c must be at least 950 to round to 1000. 852 is below that, so it is impossible — c cannot drop below its own lower bound no matter what a and b do.',
                },
                {
                    stepNumber: 6,
                    description: 'Take c at its lower bound and check feasibility.',
                    workingLatex: 'c = 950 \\;\\Rightarrow\\; a + b = 2\\,050 - 950 = 1\\,100',
                    explanation: 'The smallest c can be is 950. We must check a valid a, b exist: a + b = 1 100 with 350 ≤ a ≤ 449 and 650 ≤ b ≤ 749. For instance a = 400, b = 700 works, so c = 950 is genuinely achievable and is the answer.',
                },
            ],
            finalAnswer: 'The smallest possible value is 950.',
            canonicalAnswer: '950',
        },
    },
    {
        id: 'gn01-057',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Arrange the numbers 2^{10}, 10^{3}, 999 and 1 \\times 10^{3} - 50 in ascending order.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'powers of ten', 'comparing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert the two powers to ordinary numbers.',
                    workingLatex: '2^{10} = 1\\,024,\\qquad 10^{3} = 1\\,000',
                    explanation: 'You cannot compare powers safely by eye — work them out. 2 to the power 10 is 1 024 and 10 cubed is 1 000. (A common trap is assuming 2¹⁰ is small because the base 2 is small.)',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the remaining two terms.',
                    workingLatex: '999,\\qquad 1 \\times 10^{3} - 50 = 1\\,000 - 50 = 950',
                    explanation: '999 is already a plain number, and 1×10³ - 50 is 1000 minus 50, which is 950. Now all four are in the same ordinary form.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the four values.',
                    workingLatex: '950 < 999 < 1\\,000 < 1\\,024',
                    explanation: 'With every term as a whole number, listing them smallest first is straightforward.',
                },
                {
                    stepNumber: 4,
                    description: 'Translate back to the original expressions.',
                    workingLatex: '(1\\,000-50) < 999 < 10^{3} < 2^{10}',
                    explanation: 'Replace each value with the expression it came from, since the question gave them in that form: 1000-50, then 999, then 10³, then 2¹⁰.',
                },
            ],
            finalAnswer: '950 (=1000-50), 999, 1000 (=10³), 1024 (=2¹⁰)',
        },
    },
    {
        id: 'gn01-058',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A four-digit number has digits that add up to 20. The thousands digit is 3 times the units digit, and the number is a multiple of 1000 when rounded to the nearest 1000 gives 6000. Given the units digit is 2, find the number if the tens digit is as large as possible.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'reasoning', 'rounding', 'logic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the thousands digit from the units.',
                    workingLatex: 'u = 2,\\quad h = 3u = 3 \\times 2 = 6',
                    explanation: 'The units digit is given as 2, and the thousands digit is 3 times the units, so h = 6. This already agrees with the number rounding to 6000.',
                },
                {
                    stepNumber: 2,
                    description: 'Name the unknown middle digits.',
                    workingLatex: '\\text{number} = 6\\,H\\,T\\,2',
                    explanation: 'Let H be the hundreds digit and T the tens digit, so the number reads 6 H T 2. These two are what we still need to pin down.',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the digit-sum condition.',
                    workingLatex: '6 + H + T + 2 = 20 \\;\\Rightarrow\\; H + T = 12',
                    explanation: 'The four digits add to 20. Subtracting the known 6 and 2 leaves H + T = 12, linking the two unknowns.',
                },
                {
                    stepNumber: 4,
                    description: 'Use the rounding to bound H.',
                    workingLatex: '6\\,H\\,T\\,2 \\to 6\\,000 \\;\\Rightarrow\\; H \\le 4',
                    explanation: 'To round to 6000 to the nearest 1000, the deciding hundreds digit H must be less than 5 (so it rounds down). Hence H ≤ 4.',
                },
                {
                    stepNumber: 5,
                    description: 'Maximise T by minimising H.',
                    workingLatex: 'T = 12 - H \\le 9 \\;\\Rightarrow\\; H \\ge 3',
                    explanation: 'Since T = 12 - H, the largest T comes from the smallest H. But T cannot exceed 9, which forces H ≥ 3. Together with H ≤ 4, the smallest allowed H is 3.',
                },
                {
                    stepNumber: 6,
                    description: 'Compute the digits and assemble.',
                    workingLatex: 'H = 3,\\ T = 9 \\;\\Rightarrow\\; 6\\,392',
                    explanation: 'H = 3 gives T = 9, so the number is 6392. Check all conditions: digits 6+3+9+2 = 20; it rounds to 6000 (hundreds 3 < 5); and 6 = 3×2. All hold.',
                },
            ],
            finalAnswer: '6392',
            canonicalAnswer: '6392',
        },
    },
    {
        id: 'gn01-059',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'The number 4 200 000 can be written as 42 \\times 10^{n}. \n\na) Find n.\n\nb) Write 4 200 000 in the form a \\times 10^{6}, giving the value of a.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['powers of ten', 'place value', 'millions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): divide out the 42.',
                    workingLatex: '4\\,200\\,000 \\div 42 = 100\\,000',
                    explanation: 'We need 42 × (power of ten) = 4 200 000, so divide 4 200 000 by 42 to see what power of ten is left. 42 goes into 4 200 000 exactly 100 000 times.',
                },
                {
                    stepNumber: 2,
                    description: 'Write 100 000 as a power of ten.',
                    workingLatex: '100\\,000 = 10^{5} \\;\\Rightarrow\\; n = 5',
                    explanation: '100 000 is 1 followed by five zeros, which is 10⁵. Count the zeros to read off the power. So 4 200 000 = 42 × 10⁵ and n = 5.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): divide by 10⁶ = 1 000 000.',
                    workingLatex: '4\\,200\\,000 \\div 1\\,000\\,000 = 4.2',
                    explanation: 'Now the power is fixed at 10⁶ (one million), so a is found by dividing the number by one million. 4 200 000 ÷ 1 000 000 = 4.2.',
                },
                {
                    stepNumber: 4,
                    description: 'State a.',
                    workingLatex: '4\\,200\\,000 = 4.2 \\times 10^{6} \\;\\Rightarrow\\; a = 4.2',
                    explanation: 'So a = 4.2. Note a need not be a whole number here — the question fixed the power, not the form of a.',
                },
            ],
            finalAnswer: 'a) n = 5   b) a = 4.2, so 4 200 000 = 4.2 × 10⁶.',
        },
    },
    {
        id: 'gn01-060',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Five runners finished a race. Their finishing positions relative to the average were recorded as +3, -2, +1, -4 and 0 (where a negative number means finishing that many places below the middle). List the records from the best finish to the worst finish, given that a higher number means a better finish.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'negative numbers', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read the meaning of "best finish".',
                    workingLatex: '\\text{best} = \\text{highest number}',
                    explanation: 'The question states a higher number means a better finish, so best-to-worst is simply greatest-to-least value. Pin this down first so the negative signs are not misread.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the positives and zero.',
                    workingLatex: '+3 > +1 > 0',
                    explanation: 'The positive records lead, biggest first: +3 then +1, then 0 (an average finish) just below them.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the negatives by closeness to zero.',
                    workingLatex: '-2 > -4',
                    explanation: '-2 is closer to zero than -4, so -2 is the better of the two negative finishes. The bigger digit (4) makes -4 the worse, not the better.',
                },
                {
                    stepNumber: 4,
                    description: 'Combine into best-to-worst order.',
                    workingLatex: '+3 > +1 > 0 > -2 > -4',
                    explanation: 'Joining the blocks gives the full list from best finish to worst.',
                },
            ],
            finalAnswer: '+3, +1, 0, -2, -4',
        },
    },
    {
        id: 'gn01-061',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A whole number, when rounded to the nearest 1000, gives 23 000. When rounded to the nearest 10 000, it gives 20 000. Find the range of possible values of the number, and state how many whole numbers are in this range.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning', 'counting'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Range for "rounds to 23 000 (nearest 1000)".',
                    workingLatex: '22\\,500 \\le n \\le 23\\,499',
                    explanation: 'The halfway points either side of 23 000 are 22 500 and 23 500. 22 500 rounds up (included), and 23 500 would round to 24 000, so the top whole number is 23 499.',
                },
                {
                    stepNumber: 2,
                    description: 'Range for "rounds to 20 000 (nearest 10 000)".',
                    workingLatex: '15\\,000 \\le n \\le 24\\,999',
                    explanation: 'The halfway points either side of 20 000 are 15 000 and 25 000. 15 000 rounds up (included), and 25 000 would round to 30 000, so the top whole number is 24 999.',
                },
                {
                    stepNumber: 3,
                    description: 'Intersect the two ranges.',
                    workingLatex: '[22\\,500,\\,23\\,499] \\cap [15\\,000,\\,24\\,999] = [22\\,500,\\,23\\,499]',
                    explanation: 'Both conditions must hold. Since 22 500 ≥ 15 000 and 23 499 ≤ 24 999, the first range lies completely inside the second, so the overlap is just 22 500 to 23 499.',
                },
                {
                    stepNumber: 4,
                    description: 'Count the whole numbers inclusive.',
                    workingLatex: '23\\,499 - 22\\,500 + 1 = 1\\,000',
                    explanation: 'To count integers in an inclusive range, take the difference of the ends and add one (the "+1" counts both endpoints). This gives 1 000 numbers.',
                },
            ],
            finalAnswer: '22 500 ≤ n ≤ 23 499; there are 1 000 whole numbers in the range.',
            canonicalAnswer: '1000',
        },
    },
    {
        id: 'gn01-062',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Place these in descending order: -10^{3}, (-10)^{2}, -10^{2}, 10^{2} and 0.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'powers of ten', 'negative numbers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Handle the signs without brackets.',
                    workingLatex: '-10^{3} = -(10^{3}) = -1\\,000,\\qquad -10^{2} = -(10^{2}) = -100',
                    explanation: 'Without brackets, the power applies to 10 only and the minus sits in front. So -10³ = -(1000) = -1000 and -10² = -(100) = -100. The minus is NOT squared here — this is the key trap.',
                },
                {
                    stepNumber: 2,
                    description: 'Handle the bracketed and plain squares.',
                    workingLatex: '(-10)^{2} = (-10)\\times(-10) = 100,\\qquad 10^{2} = 100',
                    explanation: 'With brackets, the whole -10 is squared, and a negative times a negative is positive, so (-10)² = +100. The plain 10² is also 100. So these two are equal.',
                },
                {
                    stepNumber: 3,
                    description: 'List all five values.',
                    workingLatex: '100,\\ 100,\\ -100,\\ 100? \\to \\{100,\\,100,\\,0,\\,-100,\\,-1\\,000\\}',
                    explanation: 'Collecting the results: (-10)² = 100, 10² = 100, the given 0, -10² = -100, and -10³ = -1000. Two of them tie at 100.',
                },
                {
                    stepNumber: 4,
                    description: 'Write in descending order.',
                    workingLatex: '(-10)^{2} = 10^{2} > 0 > -10^{2} > -10^{3}',
                    explanation: 'Largest first: the two 100s share the top spot, then 0, then -100, then -1000 at the bottom.',
                },
            ],
            finalAnswer: '(-10)² and 10² (both 100), then 0, then -10² (=-100), then -10³ (=-1000).',
        },
    },
    {
        id: 'gn01-063',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A country has a population of 67 081 000. \n\na) Write this number in words.\n\nb) Round it to the nearest million.\n\nc) Round it to the nearest hundred thousand.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['place value', 'words', 'rounding', 'millions', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): split into groups of three.',
                    workingLatex: '67 \\,|\\, 081 \\,|\\, 000',
                    explanation: 'Counting from the right in threes gives the units group 000, thousands group 081, and millions group 67. The leading group 67 is two digits.',
                },
                {
                    stepNumber: 2,
                    description: 'Name each group to write the words.',
                    workingLatex: '67\\,081\\,000 = 67\\,000\\,000 + 81\\,000',
                    explanation: 'The 67 means sixty-seven million, 081 means eighty-one thousand (the leading 0 just means no hundred-thousands), and the units are zero. So: sixty-seven million, eighty-one thousand.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): find the deciding digit for nearest million.',
                    workingLatex: '67\\,\\underline{0}81\\,000',
                    explanation: 'Rounding to the nearest million is decided by the hundred-thousands digit, which is 0. Since 0 is less than 5, we round down.',
                },
                {
                    stepNumber: 4,
                    description: 'Round to the nearest million.',
                    workingLatex: '67\\,081\\,000 \\to 67\\,000\\,000',
                    explanation: 'The 67 million stays, and everything below the millions becomes 0, giving 67 000 000.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): find the deciding digit for nearest hundred thousand.',
                    workingLatex: '67\\,0\\underline{8}1\\,000',
                    explanation: 'Rounding to the nearest hundred thousand is decided by the ten-thousands digit, which is 8. Since 8 is 5 or more, we round up.',
                },
                {
                    stepNumber: 6,
                    description: 'Round to the nearest hundred thousand.',
                    workingLatex: '67\\,081\\,000 \\to 67\\,100\\,000',
                    explanation: 'The hundred-thousands digit rises from 0 to 1 and the lower columns become 0, giving 67 100 000.',
                },
            ],
            finalAnswer: 'a) Sixty-seven million, eighty-one thousand.   b) 67 000 000   c) 67 100 000',
        },
    },
    {
        id: 'gn01-064',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Using the digits 2, 0, 0, 5 and 9 exactly once each, write down the smallest possible five-digit number (it must not start with 0), and the largest possible five-digit number. Then round each to the nearest thousand.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'ordering', 'rounding', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Choose the smallest leading digit, avoiding 0.',
                    workingLatex: '\\text{available: } 0,0,2,5,9 \\;\\Rightarrow\\; \\text{lead with } 2',
                    explanation: 'For the smallest number we want small digits high up, but the leading digit cannot be 0 (or it becomes a four-digit number). The smallest non-zero digit available is 2.',
                },
                {
                    stepNumber: 2,
                    description: 'Fill the rest smallest first.',
                    workingLatex: '20\\,059',
                    explanation: 'After the leading 2, place the remaining 0, 0, 5, 9 in increasing order: 0, 0, 5, 9. The zeros are fine here as they are no longer leading. This gives 20 059.',
                },
                {
                    stepNumber: 3,
                    description: 'Build the largest: digits decreasing.',
                    workingLatex: '95\\,200',
                    explanation: 'For the largest number place the digits greatest first: 9, 5, 2, 0, 0, giving 95 200. The zeros naturally fall to the end.',
                },
                {
                    stepNumber: 4,
                    description: 'Round 20 059 to the nearest 1000.',
                    workingLatex: '20\\,\\underline{0}59 \\to 20\\,000',
                    explanation: 'The deciding hundreds digit is 0, which is less than 5, so it rounds down to 20 000.',
                },
                {
                    stepNumber: 5,
                    description: 'Round 95 200 to the nearest 1000.',
                    workingLatex: '95\\,\\underline{2}00 \\to 95\\,000',
                    explanation: 'The deciding hundreds digit is 2, less than 5, so it rounds down to 95 000.',
                },
            ],
            finalAnswer: 'Smallest 20 059 (→ 20 000), largest 95 200 (→ 95 000).',
        },
    },
    {
        id: 'gn01-065',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'The attendances at four football matches were reported, each rounded to the nearest 1000, as 24 000, 24 000, 25 000 and 23 000. \n\na) What is the smallest possible total of the actual attendances?\n\nb) What is the largest possible total?',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): write each attendance\'s lower bound.',
                    workingLatex: '23\\,500,\\ 23\\,500,\\ 24\\,500,\\ 22\\,500',
                    explanation: 'The smallest value rounding to a given thousand is the lower halfway point. Rounding to 24 000 → at least 23 500 (two of these); to 25 000 → at least 24 500; to 23 000 → at least 22 500.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the lower bounds for the minimum total.',
                    workingLatex: '23\\,500 + 23\\,500 + 24\\,500 + 22\\,500 = 94\\,000',
                    explanation: 'The total is smallest when every attendance is at its smallest, so add the four lower bounds. The two 23 500s give 47 000, plus 24 500 plus 22 500 gives 94 000.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): write each attendance\'s upper bound.',
                    workingLatex: '24\\,499,\\ 24\\,499,\\ 25\\,499,\\ 23\\,499',
                    explanation: 'The largest whole number rounding to a thousand is 499 above it (one less than the next halfway point). So 24 000 → 24 499, 25 000 → 25 499, 23 000 → 23 499.',
                },
                {
                    stepNumber: 4,
                    description: 'Add the upper bounds for the maximum total.',
                    workingLatex: '24\\,499 + 24\\,499 + 25\\,499 + 23\\,499 = 97\\,996',
                    explanation: 'The total is largest when every attendance is at its largest. The two 24 499s give 48 998, plus 25 499 gives 74 497, plus 23 499 gives 97 996.',
                },
            ],
            finalAnswer: 'a) 94 000   b) 97 996',
        },
    },
    {
        id: 'gn01-066',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A palindromic number reads the same forwards and backwards (for example 4 554). Find the largest five-digit palindromic number whose digits add up to 20.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'reasoning', 'logic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the palindrome structure.',
                    workingLatex: '\\overline{abcba}',
                    explanation: 'A five-digit palindrome reads the same both ways, so it has the form abcba: the first and last digits are equal (a), the second and fourth are equal (b), with a free middle digit c.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the digit-sum condition.',
                    workingLatex: 'a + b + c + b + a = 2a + 2b + c = 20',
                    explanation: 'Adding the five digits and grouping the repeats gives 2a + 2b + c = 20. This single equation links the three free digits.',
                },
                {
                    stepNumber: 3,
                    description: 'Maximise the leading digit a first.',
                    workingLatex: 'a = 9 \\;\\Rightarrow\\; 18 + 2b + c = 20 \\;\\Rightarrow\\; 2b + c = 2',
                    explanation: 'The leading digit affects the value most, so make a as large as possible. a = 9 uses up 18 of the sum, leaving 2b + c = 2 for the rest. (a = 9 is reachable since a small b, c can finish the sum.)',
                },
                {
                    stepNumber: 4,
                    description: 'Maximise the next digit b.',
                    workingLatex: 'b = 1 \\;\\Rightarrow\\; c = 2 - 2(1) = 0',
                    explanation: 'With 2b + c = 2, the second-most-significant digit is b, so maximise it next. b = 1 forces c = 0; b = 2 would need c = -2, which is impossible. So b = 1, c = 0.',
                },
                {
                    stepNumber: 5,
                    description: 'Assemble and check the palindrome.',
                    workingLatex: '91\\,019',
                    explanation: 'a = 9, b = 1, c = 0 gives the digits 9, 1, 0, 1, 9 = 91 019. Check: it reads the same backwards, and 9+1+0+1+9 = 20.',
                },
            ],
            finalAnswer: '91 019',
            canonicalAnswer: '91019',
        },
    },
    {
        id: 'gn01-067',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'a) Work out 380 \\times 1000 \\div 100.\n\nb) A factory makes 250 boxes, each containing 1000 nails. The nails are then repacked into bags of 100. How many bags are made?',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['powers of ten', 'multiplying', 'dividing', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): do the multiplication first.',
                    workingLatex: '380 \\times 1000 = 380\\,000',
                    explanation: 'Work left to right: multiplying by 1000 appends three zeros, giving 380 000. (Multiplying and then dividing happen in order from left to right.)',
                },
                {
                    stepNumber: 2,
                    description: 'Then divide by 100.',
                    workingLatex: '380\\,000 \\div 100 = 3\\,800',
                    explanation: 'Dividing by 100 removes two trailing zeros. Net effect of ×1000 then ÷100 is ×10, so 380 becomes 3 800 — a useful sanity check.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): find the total number of nails.',
                    workingLatex: '250 \\times 1000 = 250\\,000',
                    explanation: '250 boxes each holding 1000 nails is 250 × 1000 = 250 000 nails altogether.',
                },
                {
                    stepNumber: 4,
                    description: 'Divide into bags of 100.',
                    workingLatex: '250\\,000 \\div 100 = 2\\,500',
                    explanation: 'Sharing 250 000 nails into bags of 100 means dividing by 100, removing two zeros, giving 2 500 bags.',
                },
            ],
            finalAnswer: 'a) 3 800   b) 2 500 bags',
        },
    },
    {
        id: 'gn01-068',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'A number line is marked at every 50 000. A point P lies exactly halfway between the marks for 1 200 000 and 1 250 000. \n\na) What value is at P?\n\nb) Round the value at P to the nearest hundred thousand.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['number line', 'place value', 'rounding', 'millions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): set up the midpoint as a mean.',
                    workingLatex: '\\text{P} = \\frac{1\\,200\\,000 + 1\\,250\\,000}{2}',
                    explanation: 'A point exactly halfway between two values is their mean — add them and divide by 2. (The "marked every 50 000" detail just confirms the two marks are 50 000 apart.)',
                },
                {
                    stepNumber: 2,
                    description: 'Add the two end values.',
                    workingLatex: '1\\,200\\,000 + 1\\,250\\,000 = 2\\,450\\,000',
                    explanation: 'Adding the two marks gives 2 450 000, ready to be halved.',
                },
                {
                    stepNumber: 3,
                    description: 'Halve to find P.',
                    workingLatex: '\\frac{2\\,450\\,000}{2} = 1\\,225\\,000',
                    explanation: 'Dividing by 2 gives P = 1 225 000, which sits neatly between the two marks (25 000 above the lower one).',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): find the deciding digit, then round.',
                    workingLatex: '1\\,2\\underline{2}5\\,000 \\to 1\\,200\\,000',
                    explanation: 'Rounding to the nearest hundred thousand uses the ten-thousands digit, which is 2. Since 2 is less than 5 we round down to 1 200 000.',
                },
            ],
            finalAnswer: 'a) 1 225 000   b) 1 200 000',
            canonicalAnswer: '1225000',
        },
    },
    {
        id: 'gn01-069',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'In the number 5 837 162, each digit is moved one place to the left in value (so the units digit becomes the tens, etc.) by multiplying the whole number by 10. \n\na) Write down the new number.\n\nb) State the value of the digit 8 in the new number.\n\nc) By how much has the value of the digit 8 increased?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['place value', 'powers of ten', 'value of digit', 'reasoning'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): multiply the whole number by 10.',
                    workingLatex: '5\\,837\\,162 \\times 10 = 58\\,371\\,620',
                    explanation: 'Multiplying by 10 shifts every digit one column to the left, which is the same as writing a 0 on the end. So the new number is 58 371 620.',
                },
                {
                    stepNumber: 2,
                    description: 'Locate the 8 in the original number.',
                    workingLatex: '5\\,\\underline{8}37\\,162',
                    explanation: 'Counting columns from the right in 5 837 162, the 8 is in the hundred-thousands column. (This is the "before" value needed for part (c).)',
                },
                {
                    stepNumber: 3,
                    description: 'State the original value of the 8.',
                    workingLatex: '8 \\times 100\\,000 = 800\\,000',
                    explanation: 'A digit in the hundred-thousands column is worth that digit times 100 000, so originally the 8 is worth 800 000.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): locate and value the 8 in the new number.',
                    workingLatex: '5\\underline{8}\\,371\\,620 \\;\\Rightarrow\\; 8 \\times 1\\,000\\,000 = 8\\,000\\,000',
                    explanation: 'After the shift, the 8 has moved into the millions column of 58 371 620, so it is now worth 8 000 000.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): subtract to find the increase.',
                    workingLatex: '8\\,000\\,000 - 800\\,000 = 7\\,200\\,000',
                    explanation: 'The increase is new value minus old value. The 8 is now ten times bigger, and the rise is 7 200 000.',
                },
            ],
            finalAnswer: 'a) 58 371 620   b) 8 000 000   c) increased by 7 200 000',
        },
    },
    {
        id: 'gn01-070',
        topicRef: 'gn01',
        topicTitle: 'Place value and ordering integers',
        difficulty: 'Challenge',
        questionText:
            'Three friends report a charity total. Aisha says "about £40 000 to the nearest ten thousand". Ben says "about £44 000 to the nearest thousand". Carla says "about £43 600 to the nearest hundred". Assuming all three rounded the SAME exact whole-pound total, find the range of possible values for the actual total.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['rounding', 'bounds', 'reasoning', 'money', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Aisha's range (nearest ten thousand → 40 000).",
                    workingLatex: '35\\,000 \\le T \\le 44\\,999',
                    explanation: 'The halfway points around 40 000 are 35 000 and 45 000. 35 000 rounds up (included) and 45 000 would round to 50 000, so the top is 44 999. This is the widest of the three clues.',
                },
                {
                    stepNumber: 2,
                    description: "Ben's range (nearest thousand → 44 000).",
                    workingLatex: '43\\,500 \\le T \\le 44\\,499',
                    explanation: 'The halfway points around 44 000 are 43 500 and 44 500. 43 500 rounds up (included) and 44 500 would round to 45 000, so the top is 44 499.',
                },
                {
                    stepNumber: 3,
                    description: "Carla's range (nearest hundred → 43 600).",
                    workingLatex: '43\\,550 \\le T \\le 43\\,649',
                    explanation: 'The halfway points around 43 600 are 43 550 and 43 650. 43 550 rounds up (included) and 43 650 would round to 43 700, so the top is 43 649. This is the tightest clue.',
                },
                {
                    stepNumber: 4,
                    description: 'All three must hold — intersect.',
                    workingLatex: '\\max(35\\,000,43\\,500,43\\,550) \\le T \\le \\min(44\\,999,44\\,499,43\\,649)',
                    explanation: 'Since the same total was rounded three ways, it must lie in all three ranges at once. The overlap runs from the largest lower bound to the smallest upper bound.',
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the overlap.',
                    workingLatex: '43\\,550 \\le T \\le 43\\,649',
                    explanation: "The largest lower bound and smallest upper bound both come from Carla's clue, so the overlap is exactly Carla's range — it already sits inside Aisha's and Ben's. The total is a whole number of pounds from £43 550 to £43 649 inclusive.",
                },
            ],
            finalAnswer: 'The actual total lies between £43 550 and £43 649 inclusive.',
        },
    },
];
