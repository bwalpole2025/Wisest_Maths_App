import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Topic gn02: Ordering decimals and fractions
 *
 * Comparing and ordering decimals, fractions, percentages (and mixed sets),
 * placing values on a number line, common-denominator and cross-multiplication
 * comparisons, fraction↔decimal conversions, negatives and recurring decimals.
 *
 * 70 questions — 24 Foundation, 23 Standard, 23 Challenge.
 */

export const questions: Question[] = [
    /* ───────────────────────────── FOUNDATION (24) ───────────────────────────── */
    {
        id: 'gn02-001',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in ascending order: \\(0.3\\), \\(0.7\\), \\(0.1\\), \\(0.5\\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall what "ascending" means.',
                    workingLatex: '\\text{ascending: smallest} \\rightarrow \\text{largest}',
                    explanation:
                        'Ascending order means going up, from the smallest value to the largest. Getting this direction right is the first thing to fix in your head before you start comparing.',
                },
                {
                    stepNumber: 2,
                    description: 'Notice every number has one decimal place.',
                    workingLatex: '0.3, \\ 0.7, \\ 0.1, \\ 0.5',
                    explanation:
                        'Each value is written as a single digit after the decimal point — a number of tenths. Because the decimal parts are the same length, you can compare them just by their tenths digit.',
                },
                {
                    stepNumber: 3,
                    description: 'Read off and order the tenths digits.',
                    workingLatex: '1 < 3 < 5 < 7',
                    explanation:
                        'The tenths digits are 3, 7, 1 and 5. Putting these single digits in increasing order gives 1, 3, 5, 7.',
                },
                {
                    stepNumber: 4,
                    description: 'Write the decimals in that order.',
                    workingLatex: '0.1 < 0.3 < 0.5 < 0.7',
                    explanation:
                        'Translate the ordered digits back into the original decimals. Smallest first gives 0.1, then 0.3, then 0.5, then 0.7.',
                },
            ],
            finalAnswer: '0.1, 0.3, 0.5, 0.7',
        },
    },
    {
        id: 'gn02-002',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in descending order: \\(0.6\\), \\(0.2\\), \\(0.9\\), \\(0.4\\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall what "descending" means.',
                    workingLatex: '\\text{descending: largest} \\rightarrow \\text{smallest}',
                    explanation:
                        'Descending order means going down, from the largest value to the smallest. This is the opposite of ascending, so decide the direction before you compare anything.',
                },
                {
                    stepNumber: 2,
                    description: 'Read off the tenths digits.',
                    workingLatex: '\\text{tenths: } 6, \\ 2, \\ 9, \\ 4',
                    explanation:
                        'Each number has one decimal place, so it is just a number of tenths. The tenths digits are 6, 2, 9 and 4.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the digits, largest first.',
                    workingLatex: '9 > 6 > 4 > 2',
                    explanation:
                        'Put the single digits in decreasing order: 9, then 6, then 4, then 2.',
                },
                {
                    stepNumber: 4,
                    description: 'Write the decimals in that order.',
                    workingLatex: '0.9 > 0.6 > 0.4 > 0.2',
                    explanation:
                        'Turn the ordered digits back into the original decimals, largest first.',
                },
            ],
            finalAnswer: '0.9, 0.6, 0.4, 0.2',
        },
    },
    {
        id: 'gn02-003',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which is larger, \\(0.4\\) or \\(0.36\\)? Write the correct symbol (\\(<\\) or \\(>\\)) between them.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Notice the numbers have different lengths.',
                    workingLatex: '0.4 \\text{ has 1 d.p.}, \\quad 0.36 \\text{ has 2 d.p.}',
                    explanation:
                        '0.4 has one digit after the point and 0.36 has two. You cannot just compare "4" with "36" — that is the trap that makes people wrongly say 0.36 is bigger. Make the lengths match first.',
                },
                {
                    stepNumber: 2,
                    description: 'Add a trailing zero so both have 2 d.p.',
                    workingLatex: '0.4 = 0.40',
                    explanation:
                        'A zero on the end of a decimal does not change its value: 0.4 and 0.40 are the same amount. Now both numbers are written as hundredths.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare them as hundredths.',
                    workingLatex: '40 \\text{ hundredths} > 36 \\text{ hundredths}',
                    explanation:
                        'With equal lengths you can read them as whole numbers of hundredths: 40 against 36. Since 40 is more than 36, 0.40 is the larger value.',
                },
                {
                    stepNumber: 4,
                    description: 'Write the correct symbol.',
                    workingLatex: '0.4 > 0.36',
                    explanation:
                        'The ">" sign opens towards the larger number, so it points at 0.4. This reads "0.4 is greater than 0.36".',
                },
            ],
            finalAnswer: '0.4 > 0.36',
            canonicalAnswer: '0.4 > 0.36',
        },
    },
    {
        id: 'gn02-004',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in ascending order: \\(0.25\\), \\(0.5\\), \\(0.05\\), \\(0.55\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the longest decimal.',
                    workingLatex: '0.25, \\ 0.05, \\ 0.55 \\text{ have 2 d.p.}',
                    explanation:
                        'Three of the numbers already have two decimal places, so two decimal places is the length to match everything to. This lets us compare digit-for-digit.',
                },
                {
                    stepNumber: 2,
                    description: 'Write every value to two decimal places.',
                    workingLatex: '0.5 = 0.50',
                    explanation:
                        'Only 0.5 is short, so add a trailing zero to get 0.50. The full lined-up list is 0.25, 0.50, 0.05, 0.55.',
                },
                {
                    stepNumber: 3,
                    description: 'Read each as a number of hundredths.',
                    workingLatex: '25, \\ 50, \\ 5, \\ 55 \\text{ hundredths}',
                    explanation:
                        'With equal lengths, the part after the point is a count of hundredths: 25, 50, 5 and 55. Now it is just ordering whole numbers.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.05 < 0.25 < 0.50 < 0.55',
                    explanation:
                        'Putting 5, 25, 50, 55 hundredths in increasing order gives 0.05, 0.25, 0.50, 0.55. Drop the helper zero on 0.50 to write the answer as 0.5.',
                },
            ],
            finalAnswer: '0.05, 0.25, 0.5, 0.55',
        },
    },
    {
        id: 'gn02-005',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in ascending order: \\(1.2\\), \\(1.02\\), \\(1.22\\), \\(1.2\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check the whole-number parts.',
                    workingLatex: '1.2, \\ 1.02, \\ 1.22, \\ 1.2 \\rightarrow \\text{all start } 1',
                    explanation:
                        'Every value has a whole-number part of 1, so the ones column cannot separate them. The ordering will be decided entirely by the decimal parts.',
                },
                {
                    stepNumber: 2,
                    description: 'Write every value to two decimal places.',
                    workingLatex: '1.2 = 1.20',
                    explanation:
                        'Add a trailing zero to each "1.2" so all four have two decimal places: 1.20, 1.02, 1.22, 1.20. The two copies of 1.2 become 1.20 and are equal.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the decimal parts as hundredths.',
                    workingLatex: '02, \\ 20, \\ 22 \\text{ hundredths}',
                    explanation:
                        'The parts after the point are 02, 20, 20 and 22 hundredths. Ordering these gives 02 < 20 = 20 < 22.',
                },
                {
                    stepNumber: 4,
                    description: 'Write the values in order.',
                    workingLatex: '1.02 < 1.20 = 1.20 < 1.22',
                    explanation:
                        'Smallest first gives 1.02, then the two equal 1.2s, then 1.22.',
                },
            ],
            finalAnswer: '1.02, 1.2, 1.2, 1.22',
        },
    },
    {
        id: 'gn02-006',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Write these fractions in ascending order: \\(\\frac{1}{4}, \\frac{3}{4}, \\frac{1}{2}\\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Spot that the denominators differ.',
                    workingLatex: '\\frac{1}{4}, \\ \\frac{3}{4}, \\ \\frac{1}{2}',
                    explanation:
                        'Two fractions are quarters but one is a half. You can only compare fractions directly when they share a denominator, so the bottoms need to match first.',
                },
                {
                    stepNumber: 2,
                    description: 'Choose a common denominator of 4.',
                    workingLatex: '2 \\rightarrow 4 \\ (\\text{since } 2 \\times 2 = 4)',
                    explanation:
                        'The quarters already have denominator 4, and 2 divides into 4, so 4 works as a common denominator for all three.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert the half into quarters.',
                    workingLatex: '\\frac{1}{2} = \\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4}',
                    explanation:
                        'Multiply top and bottom by 2. Remember to multiply the numerator too, not just the denominator — that keeps the value unchanged.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare the numerators.',
                    workingLatex: '\\frac{1}{4} < \\frac{2}{4} < \\frac{3}{4}',
                    explanation:
                        'Now all three are quarters, so the one with the smallest top is smallest. Ordering 1, 2, 3 gives the order shown.',
                },
                {
                    stepNumber: 5,
                    description: 'Translate back to the originals.',
                    workingLatex: '\\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4}',
                    explanation:
                        'Since 2/4 is really 1/2, the ascending order of the original fractions is 1/4, 1/2, 3/4.',
                },
            ],
            finalAnswer: '1/4, 1/2, 3/4',
        },
    },
    {
        id: 'gn02-007',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which is larger, \\(\\frac{2}{5}\\) or \\(\\frac{3}{5}\\)?',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Notice the denominators are equal.',
                    workingLatex: '\\frac{2}{5} \\ \\text{and} \\ \\frac{3}{5} \\ \\text{both over } 5',
                    explanation:
                        'Both fractions are fifths, so each piece is the same size. That means you can compare them just by counting how many fifths each one has.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare the numerators.',
                    workingLatex: '3 > 2 \\Rightarrow \\frac{3}{5} > \\frac{2}{5}',
                    explanation:
                        'Three fifths is more pieces than two fifths, so 3/5 is the larger fraction.',
                },
            ],
            finalAnswer: '3/5 is larger',
        },
    },
    {
        id: 'gn02-008',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Convert \\(\\frac{3}{4}\\) to a decimal.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Aim for a denominator of 100.',
                    workingLatex: '\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100}',
                    explanation:
                        'Tenths and hundredths turn into decimals easily. Since 4 × 25 = 100, multiply top and bottom by 25 to rewrite 3/4 as 75 hundredths.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the hundredths as a decimal.',
                    workingLatex: '\\frac{75}{100} = 0.75',
                    explanation:
                        '75 hundredths is written 0.75. (You can check by dividing instead: 3 ÷ 4 = 0.75.)',
                },
            ],
            finalAnswer: '0.75',
            canonicalAnswer: '0.75',
        },
    },
    {
        id: 'gn02-009',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Convert \\(\\frac{1}{5}\\) to a decimal.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Make an equivalent fraction over 10.',
                    workingLatex: '\\frac{1}{5} = \\frac{1 \\times 2}{5 \\times 2} = \\frac{2}{10}',
                    explanation:
                        'A denominator of 10 converts straight into a decimal. Since 5 × 2 = 10, multiply top and bottom by 2 to get two tenths.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the tenths as a decimal.',
                    workingLatex: '\\frac{2}{10} = 0.2',
                    explanation:
                        'Two tenths sits in the first decimal place, so it is written 0.2.',
                },
            ],
            finalAnswer: '0.2',
            canonicalAnswer: '0.2',
        },
    },
    {
        id: 'gn02-010',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Convert \\(0.6\\) to a fraction in its simplest form.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'decimals', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the place value of the last digit.',
                    workingLatex: '0.6 \\rightarrow 6 \\text{ in the tenths column}',
                    explanation:
                        'The single digit 6 sits in the first decimal place, which is tenths. So 0.6 means six tenths.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the decimal as a fraction over 10.',
                    workingLatex: '0.6 = \\frac{6}{10}',
                    explanation:
                        'Six tenths written as a fraction is 6 over 10. This is correct but not yet in simplest form.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the common factor of top and bottom.',
                    workingLatex: '\\gcd(6, 10) = 2',
                    explanation:
                        'To simplify, look for the largest number that divides both 6 and 10. Both are even, so 2 is the common factor.',
                },
                {
                    stepNumber: 4,
                    description: 'Divide top and bottom by 2.',
                    workingLatex: '\\frac{6}{10} = \\frac{6 \\div 2}{10 \\div 2} = \\frac{3}{5}',
                    explanation:
                        'Dividing both parts by 2 gives three fifths. As 3 and 5 share no further factor, this is the simplest form.',
                },
            ],
            finalAnswer: '3/5',
            canonicalAnswer: '3/5',
        },
    },
    {
        id: 'gn02-011',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in descending order: \\(3.14\\), \\(3.4\\), \\(3.04\\), \\(3.41\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check the whole-number parts.',
                    workingLatex: '3.14, \\ 3.4, \\ 3.04, \\ 3.41 \\rightarrow \\text{all start } 3',
                    explanation:
                        'Every value is 3-point-something, so the whole parts are tied. The order will be decided by the decimal parts alone.',
                },
                {
                    stepNumber: 2,
                    description: 'Write each value to two decimal places.',
                    workingLatex: '3.4 = 3.40',
                    explanation:
                        'Only 3.4 is short, so add a trailing zero to get 3.40. The lined-up list is 3.14, 3.40, 3.04, 3.41.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the decimal parts as hundredths.',
                    workingLatex: '14, \\ 40, \\ 04, \\ 41 \\text{ hundredths}',
                    explanation:
                        'The parts after the point are 14, 40, 04 and 41 hundredths. Descending order of these is 41 > 40 > 14 > 04.',
                },
                {
                    stepNumber: 4,
                    description: 'Write the decimals, largest first.',
                    workingLatex: '3.41 > 3.40 > 3.14 > 3.04',
                    explanation:
                        'Translate the ordered hundredths back to the originals, then drop the helper zero to write 3.40 as 3.4.',
                },
            ],
            finalAnswer: '3.41, 3.4, 3.14, 3.04',
        },
    },
    {
        id: 'gn02-012',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which decimal does the arrow point to if it is halfway between \\(0.2\\) and \\(0.3\\) on a number line?',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['number-line', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise "halfway" means the midpoint.',
                    workingLatex: '\\text{halfway} = \\text{mean of the two ends}',
                    explanation:
                        'The value exactly halfway between two numbers is their mean: add them together and divide by 2.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the two endpoints.',
                    workingLatex: '0.2 + 0.3 = 0.5',
                    explanation:
                        'Adding the ends gives 0.5. This total will be split into two equal halves next.',
                },
                {
                    stepNumber: 3,
                    description: 'Divide the total by 2.',
                    workingLatex: '0.5 \\div 2 = 0.25',
                    explanation:
                        'Halving 0.5 gives 0.25, which sits exactly between 0.2 and 0.3 on the number line.',
                },
            ],
            finalAnswer: '0.25',
            canonicalAnswer: '0.25',
        },
    },
    {
        id: 'gn02-013',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these fractions in ascending order: \\(\\frac{1}{3}, \\frac{1}{6}, \\frac{1}{2}\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Choose a common denominator.',
                    workingLatex: '\\text{LCM}(3, 6, 2) = 6',
                    explanation:
                        'The denominators are 3, 6 and 2. The smallest number they all divide into is 6, so rewrite every fraction over 6.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 1/3 to sixths.',
                    workingLatex: '\\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}',
                    explanation:
                        'Since 3 × 2 = 6, multiply top and bottom by 2 to get two sixths.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 1/2 to sixths.',
                    workingLatex: '\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}',
                    explanation:
                        'Since 2 × 3 = 6, multiply top and bottom by 3 to get three sixths. The fraction 1/6 already has denominator 6, so it is unchanged.',
                },
                {
                    stepNumber: 4,
                    description: 'Order the numerators.',
                    workingLatex: '\\frac{1}{6} < \\frac{2}{6} < \\frac{3}{6}',
                    explanation:
                        'All three are now sixths, so the smallest top is the smallest fraction: 1 < 2 < 3.',
                },
                {
                    stepNumber: 5,
                    description: 'Translate back to the originals.',
                    workingLatex: '\\frac{1}{6} < \\frac{1}{3} < \\frac{1}{2}',
                    explanation:
                        'Since 2/6 = 1/3 and 3/6 = 1/2, the ascending order is 1/6, 1/3, 1/2.',
                },
            ],
            finalAnswer: '1/6, 1/3, 1/2',
        },
    },
    {
        id: 'gn02-014',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which is larger, \\(\\frac{1}{2}\\) or \\(0.4\\)?',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Put both into the same form.',
                    workingLatex: '\\tfrac{1}{2} \\ \\text{(fraction)} \\ \\text{vs} \\ 0.4 \\ \\text{(decimal)}',
                    explanation:
                        'You cannot compare a fraction with a decimal directly. Convert one to match the other — turning the fraction into a decimal is easiest here.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert the fraction to a decimal.',
                    workingLatex: '\\frac{1}{2} = 0.5',
                    explanation:
                        'One half is 0.5. Now both values are decimals and can be compared.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the decimals.',
                    workingLatex: '0.5 > 0.4',
                    explanation:
                        'In the tenths column, 5 beats 4, so 0.5 is larger. Therefore the fraction one half is the larger value.',
                },
            ],
            finalAnswer: '1/2 is larger',
        },
    },
    {
        id: 'gn02-015',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Write \\(25\\%\\), \\(0.5\\) and \\(\\frac{1}{10}\\) in ascending order.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Pick one common form: decimals.',
                    workingLatex: '25\\%, \\ 0.5, \\ \\tfrac{1}{10} \\rightarrow \\text{decimals}',
                    explanation:
                        'The three values are a percentage, a decimal and a fraction. To compare fairly, rewrite them all in one form — decimals are the simplest choice since 0.5 is already one.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert the percentage.',
                    workingLatex: '25\\% = 25 \\div 100 = 0.25',
                    explanation:
                        'A percentage is a number out of 100, so divide by 100 (move the point two places left): 25% becomes 0.25.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert the fraction.',
                    workingLatex: '\\frac{1}{10} = 0.1',
                    explanation:
                        'One tenth sits in the first decimal place, so it is 0.1. The three values are now 0.25, 0.5 and 0.1.',
                },
                {
                    stepNumber: 4,
                    description: 'Order the decimals.',
                    workingLatex: '0.1 < 0.25 < 0.5',
                    explanation:
                        'Smallest to largest gives 0.1, then 0.25, then 0.5 — that is 1/10, then 25%, then 0.5.',
                },
            ],
            finalAnswer: '1/10, 25%, 0.5',
        },
    },
    {
        id: 'gn02-016',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these decimals in ascending order: \\(0.8\\), \\(0.08\\), \\(0.88\\), \\(0.808\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the longest decimal.',
                    workingLatex: '0.808 \\text{ has 3 d.p.}',
                    explanation:
                        '0.808 has three digits after the point, the most of any here. Match every value to three decimal places so the columns line up.',
                },
                {
                    stepNumber: 2,
                    description: 'Write each value to three decimal places.',
                    workingLatex: '0.8 = 0.800, \\ 0.08 = 0.080, \\ 0.88 = 0.880',
                    explanation:
                        'Add trailing zeros so all four have three decimal places: 0.800, 0.080, 0.880, 0.808.',
                },
                {
                    stepNumber: 3,
                    description: 'Read each as a number of thousandths.',
                    workingLatex: '800, \\ 080, \\ 880, \\ 808 \\text{ thousandths}',
                    explanation:
                        'With equal lengths the part after the point is a count of thousandths, so ordering is now just comparing whole numbers.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.080 < 0.800 < 0.808 < 0.880',
                    explanation:
                        'Putting 080, 800, 808, 880 in increasing order gives the answer; drop the helper zeros to write 0.08, 0.8, 0.808, 0.88.',
                },
            ],
            finalAnswer: '0.08, 0.8, 0.808, 0.88',
        },
    },
    {
        id: 'gn02-017',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Convert \\(\\frac{7}{10}\\) to a decimal and \\(\\frac{3}{4}\\) to a decimal, then state which is larger.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'comparing', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 7/10 to a decimal.',
                    workingLatex: '\\frac{7}{10} = 0.7',
                    explanation:
                        'Seven tenths sits in the first decimal place, so it is written 0.7.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 3/4 to a decimal.',
                    workingLatex: '\\frac{3}{4} = \\frac{75}{100} = 0.75',
                    explanation:
                        'Scaling to hundredths (multiply top and bottom by 25) gives 75/100, which is 0.75.',
                },
                {
                    stepNumber: 3,
                    description: 'Match the decimal places.',
                    workingLatex: '0.7 = 0.70',
                    explanation:
                        'Write 0.7 as 0.70 so both decimals have two places and can be compared column by column.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare the decimals.',
                    workingLatex: '0.75 > 0.70',
                    explanation:
                        'The tenths match (7), but in the hundredths 5 beats 0, so 0.75 is greater. Therefore three quarters is the larger fraction.',
                },
            ],
            finalAnswer: '7/10 = 0.7, 3/4 = 0.75; 3/4 is larger',
        },
    },
    {
        id: 'gn02-018',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these temperatures in ascending order (\\(^{\\circ}\\mathrm{C}\\)): \\(-0.5\\), \\(0.2\\), \\(-0.8\\), \\(0.1\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into negatives and positives.',
                    workingLatex: '\\text{negative: } -0.5, -0.8 \\quad \\text{positive: } 0.2, 0.1',
                    explanation:
                        'On a number line every negative number lies to the left of every positive number, so all the negatives are smaller than all the positives. Sort the two groups separately.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the negatives.',
                    workingLatex: '-0.8 < -0.5',
                    explanation:
                        'For negatives, the bigger the size the smaller the number. 0.8 is a bigger size than 0.5, so -0.8 is the smaller (more negative) value.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the positives.',
                    workingLatex: '0.1 < 0.2',
                    explanation:
                        'For positives it is the usual way round: 0.1 is less than 0.2.',
                },
                {
                    stepNumber: 4,
                    description: 'Combine into one list.',
                    workingLatex: '-0.8 < -0.5 < 0.1 < 0.2',
                    explanation:
                        'Place the ordered negatives first, then the ordered positives, to get the full ascending order.',
                },
            ],
            finalAnswer: '-0.8, -0.5, 0.1, 0.2',
        },
    },
    {
        id: 'gn02-019',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which is larger, \\(\\frac{3}{8}\\) or \\(\\frac{1}{4}\\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Choose a common denominator.',
                    workingLatex: '4 \\rightarrow 8 \\ (\\text{since } 4 \\times 2 = 8)',
                    explanation:
                        'The denominators are 8 and 4. Since 4 divides into 8, use 8 as the common denominator — only the quarter needs changing.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 1/4 to eighths.',
                    workingLatex: '\\frac{1}{4} = \\frac{1 \\times 2}{4 \\times 2} = \\frac{2}{8}',
                    explanation:
                        'Multiply top and bottom by 2 to rewrite one quarter as two eighths.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the numerators.',
                    workingLatex: '\\frac{3}{8} > \\frac{2}{8}',
                    explanation:
                        'Both are eighths, so the larger top wins: three eighths beats two eighths. Therefore 3/8 is larger than 1/4.',
                },
            ],
            finalAnswer: '3/8 is larger',
        },
    },
    {
        id: 'gn02-020',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Convert \\(0.35\\) to a fraction in its simplest form.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'decimals', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the place value of the last digit.',
                    workingLatex: '0.35 \\rightarrow 5 \\text{ in the hundredths column}',
                    explanation:
                        'The final digit of 0.35 is in the second decimal place, which is hundredths. So the decimal is 35 hundredths.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the decimal as a fraction over 100.',
                    workingLatex: '0.35 = \\frac{35}{100}',
                    explanation:
                        '35 hundredths written as a fraction is 35 over 100. This still needs simplifying.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the common factor.',
                    workingLatex: '\\gcd(35, 100) = 5',
                    explanation:
                        'Both 35 and 100 end in a 0 or 5, so they share the factor 5 — the largest number dividing both.',
                },
                {
                    stepNumber: 4,
                    description: 'Divide top and bottom by 5.',
                    workingLatex: '\\frac{35}{100} = \\frac{35 \\div 5}{100 \\div 5} = \\frac{7}{20}',
                    explanation:
                        'Dividing both parts by 5 gives seven twentieths. Since 7 is prime and does not divide 20, this is the simplest form.',
                },
            ],
            finalAnswer: '7/20',
            canonicalAnswer: '7/20',
        },
    },
    {
        id: 'gn02-021',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these in descending order: \\(\\frac{2}{10}, \\frac{5}{10}, \\frac{1}{10}, \\frac{9}{10}\\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Notice all denominators are the same.',
                    workingLatex: '\\tfrac{2}{10}, \\ \\tfrac{5}{10}, \\ \\tfrac{1}{10}, \\ \\tfrac{9}{10} \\ \\text{all over } 10',
                    explanation:
                        'Every fraction is a number of tenths, so the pieces are equal in size. That means you can order them just by their numerators — no converting needed.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the numerators, largest first.',
                    workingLatex: '9 > 5 > 2 > 1',
                    explanation:
                        'Descending means biggest first, so put the tops 2, 5, 1, 9 into the order 9, 5, 2, 1.',
                },
                {
                    stepNumber: 3,
                    description: 'Write the fractions in that order.',
                    workingLatex: '\\frac{9}{10} > \\frac{5}{10} > \\frac{2}{10} > \\frac{1}{10}',
                    explanation:
                        'Keep the denominator 10 throughout and list the fractions from largest to smallest.',
                },
            ],
            finalAnswer: '9/10, 5/10, 2/10, 1/10',
        },
    },
    {
        id: 'gn02-022',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Which value should go in the box to make this true: \\(0.45 < \\square < 0.55\\)? Choose from \\(0.4\\), \\(0.5\\), \\(0.6\\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'decimals', 'number-line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State what the box must satisfy.',
                    workingLatex: '0.45 < \\square < 0.55',
                    explanation:
                        'The chosen value has to be bigger than 0.45 and smaller than 0.55 at the same time. Test each option against both conditions.',
                },
                {
                    stepNumber: 2,
                    description: 'Test 0.4.',
                    workingLatex: '0.4 < 0.45 \\ \\text{✗}',
                    explanation:
                        '0.4 is below the lower limit 0.45, so it is too small.',
                },
                {
                    stepNumber: 3,
                    description: 'Test 0.6.',
                    workingLatex: '0.6 > 0.55 \\ \\text{✗}',
                    explanation:
                        '0.6 is above the upper limit 0.55, so it is too large.',
                },
                {
                    stepNumber: 4,
                    description: 'Test 0.5.',
                    workingLatex: '0.45 < 0.5 < 0.55 \\ \\text{✓}',
                    explanation:
                        '0.5 is above 0.45 and below 0.55, so it satisfies both parts. Only 0.5 works.',
                },
            ],
            finalAnswer: '0.5',
            canonicalAnswer: '0.5',
        },
    },
    {
        id: 'gn02-023',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Anna jumps \\(1.45\\,\\mathrm{m}\\) and Ben jumps \\(1.5\\,\\mathrm{m}\\). Who jumps further?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'decimals', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note the jumps have different lengths.',
                    workingLatex: '1.45 \\text{ has 2 d.p.}, \\quad 1.5 \\text{ has 1 d.p.}',
                    explanation:
                        '"Who jumps further" means whose distance is the larger number. The decimals are different lengths, so make them match before comparing.',
                },
                {
                    stepNumber: 2,
                    description: 'Write both to two decimal places.',
                    workingLatex: '1.5 = 1.50',
                    explanation:
                        'Add a trailing zero so Ben’s jump is 1.50 m, lining up the hundredths with Anna’s 1.45 m.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the distances.',
                    workingLatex: '1.50 > 1.45',
                    explanation:
                        'The whole parts match (1) and the tenths give 5 against 4, so 1.50 m is greater. Ben jumps further.',
                },
            ],
            finalAnswer: 'Ben (1.5 m > 1.45 m)',
        },
    },
    {
        id: 'gn02-024',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(0.5\\), \\(\\frac{1}{4}\\), \\(0.3\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Pick a common form: decimals.',
                    workingLatex: '0.5, \\ \\tfrac{1}{4}, \\ 0.3 \\rightarrow \\text{decimals}',
                    explanation:
                        'Two values are decimals and one is a fraction. Convert the fraction to a decimal so all three can be compared in the same form.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert the fraction to a decimal.',
                    workingLatex: '\\frac{1}{4} = 0.25',
                    explanation:
                        'One quarter is 0.25. The three values are now 0.5, 0.25 and 0.3.',
                },
                {
                    stepNumber: 3,
                    description: 'Write to two decimal places and order.',
                    workingLatex: '0.25 < 0.30 < 0.50',
                    explanation:
                        'Writing 0.3 as 0.30 and 0.5 as 0.50, compare the hundredths: 25 < 30 < 50. So the order is 1/4, then 0.3, then 0.5.',
                },
            ],
            finalAnswer: '1/4, 0.3, 0.5',
        },
    },

    /* ───────────────────────────── STANDARD (23) ───────────────────────────── */
    {
        id: 'gn02-025',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these fractions in ascending order: \\(\\frac{2}{3}, \\frac{3}{5}, \\frac{7}{10}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions', 'common-denominator'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the lowest common denominator.',
                    workingLatex: '\\text{LCM}(3, 5, 10) = 30',
                    explanation:
                        'To compare fractions fairly they must share one denominator. The smallest number that 3, 5 and 10 all divide into is 30.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 2/3 to thirtieths.',
                    workingLatex: '\\frac{2}{3} = \\frac{2 \\times 10}{3 \\times 10} = \\frac{20}{30}',
                    explanation:
                        'Multiply top and bottom by 10 (since 3 × 10 = 30). Remember to multiply the numerator too, not just the denominator.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 3/5 to thirtieths.',
                    workingLatex: '\\frac{3}{5} = \\frac{3 \\times 6}{5 \\times 6} = \\frac{18}{30}',
                    explanation:
                        'Multiply top and bottom by 6, because 5 × 6 = 30.',
                },
                {
                    stepNumber: 4,
                    description: 'Convert 7/10 to thirtieths.',
                    workingLatex: '\\frac{7}{10} = \\frac{7 \\times 3}{10 \\times 3} = \\frac{21}{30}',
                    explanation:
                        'Multiply top and bottom by 3, because 10 × 3 = 30.',
                },
                {
                    stepNumber: 5,
                    description: 'Order by numerator, smallest first.',
                    workingLatex: '\\frac{18}{30} < \\frac{20}{30} < \\frac{21}{30}',
                    explanation:
                        'Now the denominators match, so just compare the numerators 18, 20, 21 in order.',
                },
                {
                    stepNumber: 6,
                    description: 'Translate back to the originals.',
                    workingLatex: '\\frac{3}{5} < \\frac{2}{3} < \\frac{7}{10}',
                    explanation:
                        '18/30 is 3/5, 20/30 is 2/3 and 21/30 is 7/10, giving the final ascending order.',
                },
            ],
            finalAnswer: '3/5, 2/3, 7/10',
        },
    },
    {
        id: 'gn02-026',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Use cross-multiplication to decide which is larger, \\(\\frac{4}{7}\\) or \\(\\frac{5}{9}\\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'cross-multiplication'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply 4/7 numerator by 5/9 denominator.',
                    workingLatex: '4 \\times 9 = 36',
                    explanation:
                        'Cross-multiplying compares fractions without finding a common denominator. Take the numerator of the first fraction (4) and multiply by the denominator of the second (9).',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply 5/9 numerator by 4/7 denominator.',
                    workingLatex: '5 \\times 7 = 35',
                    explanation:
                        'Now take the numerator of the second fraction (5) and multiply by the denominator of the first (7). Keep each product on the side of the fraction whose numerator you used.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the two products.',
                    workingLatex: '36 > 35',
                    explanation:
                        'The product 36 came from the numerator of 4/7, and 35 from the numerator of 5/9. The bigger product flags the bigger fraction.',
                },
                {
                    stepNumber: 4,
                    description: 'State which fraction is larger.',
                    workingLatex: '\\frac{4}{7} > \\frac{5}{9}',
                    explanation:
                        'Since 36 belongs to 4/7 and is the larger product, 4/7 is the larger fraction. A common slip is matching the product to the wrong fraction — always keep track of which numerator made it.',
                },
            ],
            finalAnswer: '4/7 is larger',
        },
    },
    {
        id: 'gn02-027',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(\\frac{3}{8}\\), \\(0.4\\), \\(35\\%\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert the fraction 3/8 to a decimal.',
                    workingLatex: '\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375',
                    explanation:
                        'Decimals are the easiest common form for mixing fractions, decimals and percentages. Since 8 × 125 = 1000, scale top and bottom by 125; 375 thousandths is 0.375 — no calculator needed.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert the percentage 35% to a decimal.',
                    workingLatex: '35\\% = 35 \\div 100 = 0.35',
                    explanation:
                        'A percentage is a number out of 100, so divide by 100 (move the decimal point two places left).',
                },
                {
                    stepNumber: 3,
                    description: 'Line up all three as decimals.',
                    workingLatex: '0.375, \\ 0.400, \\ 0.350',
                    explanation:
                        'Writing 0.4 as 0.400 and 0.35 as 0.350 gives every value three decimal places, so the columns line up for comparison.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.350 < 0.375 < 0.400',
                    explanation:
                        'Comparing thousandths gives 350 < 375 < 400, so the order is 35%, then 3/8, then 0.4.',
                },
            ],
            finalAnswer: '35%, 3/8, 0.4',
        },
    },
    {
        id: 'gn02-028',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these fractions in descending order: \\(\\frac{5}{6}, \\frac{7}{8}, \\frac{11}{12}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions', 'common-denominator'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the lowest common denominator.',
                    workingLatex: '\\text{LCM}(6, 8, 12) = 24',
                    explanation:
                        'The smallest number that 6, 8 and 12 all divide into is 24, so rewrite every fraction over 24.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 5/6 to twenty-fourths.',
                    workingLatex: '\\frac{5}{6} = \\frac{5 \\times 4}{6 \\times 4} = \\frac{20}{24}',
                    explanation:
                        'Since 6 × 4 = 24, multiply top and bottom by 4.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 7/8 to twenty-fourths.',
                    workingLatex: '\\frac{7}{8} = \\frac{7 \\times 3}{8 \\times 3} = \\frac{21}{24}',
                    explanation:
                        'Since 8 × 3 = 24, multiply top and bottom by 3.',
                },
                {
                    stepNumber: 4,
                    description: 'Convert 11/12 to twenty-fourths.',
                    workingLatex: '\\frac{11}{12} = \\frac{11 \\times 2}{12 \\times 2} = \\frac{22}{24}',
                    explanation:
                        'Since 12 × 2 = 24, multiply top and bottom by 2.',
                },
                {
                    stepNumber: 5,
                    description: 'Order by numerator, largest first.',
                    workingLatex: '\\frac{22}{24} > \\frac{21}{24} > \\frac{20}{24}',
                    explanation:
                        'Descending means biggest first, so order the numerators 22, 21, 20 from large to small.',
                },
                {
                    stepNumber: 6,
                    description: 'Translate back to the originals.',
                    workingLatex: '\\frac{11}{12} > \\frac{7}{8} > \\frac{5}{6}',
                    explanation:
                        '22/24 is 11/12, 21/24 is 7/8 and 20/24 is 5/6, giving the final descending order.',
                },
            ],
            finalAnswer: '11/12, 7/8, 5/6',
        },
    },
    {
        id: 'gn02-029',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'In a test, Sam scored \\(\\frac{17}{20}\\) and Priya scored \\(83\\%\\). Who scored higher, and by how many percentage points?',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'percentages', 'fractions', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Choose a percentage for the common form.',
                    workingLatex: '\\frac{17}{20} = \\frac{?}{100}',
                    explanation:
                        'Priya’s score is already a percentage, so convert Sam’s fraction to a percentage too. A percentage is just a fraction over 100.',
                },
                {
                    stepNumber: 2,
                    description: 'Scale 17/20 to a denominator of 100.',
                    workingLatex: '\\frac{17}{20} = \\frac{17 \\times 5}{20 \\times 5} = \\frac{85}{100}',
                    explanation:
                        'Since 20 × 5 = 100, multiply top and bottom by 5. A common slip is multiplying only the bottom — the top must be scaled too.',
                },
                {
                    stepNumber: 3,
                    description: 'Write Sam’s score as a percentage.',
                    workingLatex: '\\frac{85}{100} = 85\\%',
                    explanation:
                        '85 out of 100 means 85%.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare the two percentages.',
                    workingLatex: '85\\% > 83\\%',
                    explanation:
                        'Sam’s 85% is greater than Priya’s 83%, so Sam scored higher.',
                },
                {
                    stepNumber: 5,
                    description: 'Find the difference in percentage points.',
                    workingLatex: '85 - 83 = 2',
                    explanation:
                        'Subtract the smaller percentage from the larger to find that Sam is 2 percentage points ahead.',
                },
            ],
            finalAnswer: 'Sam scored higher, by 2 percentage points',
        },
    },
    {
        id: 'gn02-030',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these negative decimals in ascending order: \\(-1.2\\), \\(-1.25\\), \\(-1.05\\), \\(-1.5\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'decimals', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write each value to two decimal places.',
                    workingLatex: '-1.2 = -1.20, \\ -1.5 = -1.50',
                    explanation:
                        'Adding trailing zeros so every value has two decimal places makes the digits line up: 1.20, 1.25, 1.05, 1.50.',
                },
                {
                    stepNumber: 2,
                    description: 'Order the sizes, ignoring the signs.',
                    workingLatex: '1.05 < 1.20 < 1.25 < 1.50',
                    explanation:
                        'First compare how big each number is without its minus sign. The sizes increase 1.05, 1.20, 1.25, 1.50.',
                },
                {
                    stepNumber: 3,
                    description: 'Reverse the order for negatives.',
                    workingLatex: '-1.50 < -1.25 < -1.20 < -1.05',
                    explanation:
                        'For negatives, the bigger the size the smaller the number. So the largest size (-1.5) is smallest, which reverses the order from step 2. A common slip is leaving the order the same as the sizes.',
                },
            ],
            finalAnswer: '-1.5, -1.25, -1.2, -1.05',
        },
    },
    {
        id: 'gn02-031',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from smallest to largest: \\(\\frac{5}{8}\\), \\(0.6\\), \\(\\frac{2}{3}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 5/8 to a decimal.',
                    workingLatex: '\\frac{5}{8} = \\frac{5 \\times 125}{8 \\times 125} = \\frac{625}{1000} = 0.625',
                    explanation:
                        'Decimals are the easiest form for mixing fractions with a decimal. Since 8 × 125 = 1000, scale top and bottom by 125 to get 625 thousandths = 0.625.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 2/3 to a decimal.',
                    workingLatex: '\\frac{2}{3} = 2\\div3:\\ 20\\div3{=}6\\,\\mathrm{r}2,\\ \\mathrm{r}2\\text{ repeats} \\Rightarrow 0.\\overline{6} = 0.6666\\ldots',
                    explanation:
                        'Bring down a zero and divide: 20 ÷ 3 = 6 remainder 2. That same remainder 2 returns every step, so the 6 repeats forever and the division never terminates — giving 0.6666... (about 0.667).',
                },
                {
                    stepNumber: 3,
                    description: 'List all three as decimals.',
                    workingLatex: '0.6, \\ 0.625, \\ 0.6666\\ldots',
                    explanation:
                        'The three values are 0.6 (already a decimal), 0.625 and 0.6666...',
                },
                {
                    stepNumber: 4,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.6 < 0.625 < 0.6\\overline{6}',
                    explanation:
                        '0.6 is 0.600, which is less than 0.625, which is less than 0.666... So the order is 0.6, then 5/8, then 2/3.',
                },
            ],
            finalAnswer: '0.6, 5/8, 2/3',
        },
    },
    {
        id: 'gn02-032',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'a) Convert \\(\\frac{9}{16}\\) to a decimal.\\n\\nb) Hence state whether \\(\\frac{9}{16}\\) or \\(0.56\\) is larger.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'comparing', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Scale 9/16 to ten-thousandths (part a).',
                    workingLatex: '\\frac{9}{16} = \\frac{9 \\times 625}{16 \\times 625} = \\frac{5625}{10000} = 0.5625',
                    explanation:
                        'Rather than long division, note 16 × 625 = 10000. Scaling top and bottom by 625 gives 5625 ten-thousandths, which terminates exactly at 0.5625.',
                },
                {
                    stepNumber: 2,
                    description: 'Write 0.56 to four decimal places.',
                    workingLatex: '0.56 = 0.5600',
                    explanation:
                        'To compare with 0.5625, give 0.56 the same number of decimal places by adding trailing zeros. This does not change its value.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the two decimals (part b).',
                    workingLatex: '0.5625 > 0.5600',
                    explanation:
                        'Reading left to right, the first three digits match (0.56) but then 25 ten-thousandths beats 00, so 0.5625 is larger and therefore 9/16 is larger.',
                },
            ],
            finalAnswer: 'a) 0.5625  b) 9/16 is larger',
        },
    },
    {
        id: 'gn02-033',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from largest to smallest: \\(0.45\\), \\(\\frac{4}{9}\\), \\(44\\%\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 4/9 to a decimal.',
                    workingLatex: '\\frac{4}{9} = 4\\div9:\\ 40\\div9{=}4\\,\\mathrm{r}4,\\ \\mathrm{r}4\\text{ repeats} \\Rightarrow 0.\\overline{4} = 0.4444\\ldots',
                    explanation:
                        'Long division: 40 ÷ 9 = 4 remainder 4, and that same remainder 4 returns each step, so the 4 repeats. Ninths always recur with a single repeating digit, here 0.4444...',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 44% to a decimal.',
                    workingLatex: '44\\% = 44 \\div 100 = 0.44',
                    explanation:
                        'Divide a percentage by 100 to get its decimal: 44% becomes 0.44.',
                },
                {
                    stepNumber: 3,
                    description: 'List all three as decimals.',
                    workingLatex: '0.45, \\ 0.4444\\ldots, \\ 0.44',
                    explanation:
                        'The three values are 0.45 (already a decimal), 0.4444... and 0.44.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from largest to smallest.',
                    workingLatex: '0.45 > 0.4\\overline{4} > 0.44',
                    explanation:
                        'Comparing the hundredths, 0.450 > 0.444... > 0.440. A common slip is thinking 0.4444... beats 0.45 because it has more digits — but 0.45 is larger. So the order is 0.45, then 4/9, then 44%.',
                },
            ],
            finalAnswer: '0.45, 4/9, 44%',
        },
    },
    {
        id: 'gn02-034',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Two pieces of wood measure \\(\\frac{7}{8}\\) m and \\(0.88\\,\\mathrm{m}\\). Which piece is longer?',
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'decimals', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 7/8 m to a decimal.',
                    workingLatex: '\\frac{7}{8} = \\frac{7 \\times 125}{8 \\times 125} = \\frac{875}{1000} = 0.875',
                    explanation:
                        'Since 8 × 125 = 1000, scale top and bottom by 125: 875 thousandths is 0.875, so the first piece is 0.875 m — found without a calculator.',
                },
                {
                    stepNumber: 2,
                    description: 'Write both to three decimal places.',
                    workingLatex: '0.88 = 0.880',
                    explanation:
                        'Adding a trailing zero gives 0.880 m, matching the three decimal places of 0.875 m for a fair column-by-column comparison.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the two lengths.',
                    workingLatex: '0.880 > 0.875',
                    explanation:
                        'The tenths are equal (both 8), but in the hundredths 8 beats 7, so 0.880 is greater. The 0.88 m piece is longer.',
                },
            ],
            finalAnswer: 'The 0.88 m piece is longer',
        },
    },
    {
        id: 'gn02-035',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these fractions in ascending order: \\(\\frac{3}{4}, \\frac{5}{7}, \\frac{8}{11}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions', 'converting'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 3/4 to a decimal.',
                    workingLatex: '\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 0.75',
                    explanation:
                        'These denominators have no neat common multiple, so converting to decimals is the quickest fair comparison. Since 4 × 25 = 100, scale by 25: 75 hundredths = 0.75.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 5/7 to a decimal.',
                    workingLatex: '\\frac{5}{7} = 5\\div7:\\ 50\\div7{=}7\\,\\mathrm{r}1,\\ 10\\div7{=}1\\,\\mathrm{r}3,\\ 30\\div7{=}4\\,\\mathrm{r}2,\\ \\ldots = 0.7142\\ldots',
                    explanation:
                        'Long division, bringing down a zero each time: 50 ÷ 7 = 7 r1, 10 ÷ 7 = 1 r3, 30 ÷ 7 = 4 r2, and so on. Reading off the quotient digits gives 0.714285..., roughly 0.714.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 8/11 to a decimal.',
                    workingLatex: '\\frac{8}{11} = 8\\div11:\\ 80\\div11{=}7\\,\\mathrm{r}3,\\ 30\\div11{=}2\\,\\mathrm{r}8,\\ \\mathrm{r}3\\text{ returns} \\Rightarrow 0.\\overline{72} = 0.7272\\ldots',
                    explanation:
                        'Long division: 80 ÷ 11 = 7 r3, 30 ÷ 11 = 2 r8, then the remainder 3 comes back, so the block 72 repeats: 0.7272..., roughly 0.727.',
                },
                {
                    stepNumber: 4,
                    description: 'List all three as decimals.',
                    workingLatex: '0.714\\ldots, \\ 0.727\\ldots, \\ 0.750',
                    explanation:
                        'The three values are about 0.714, 0.727 and 0.750.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.714\\ldots < 0.727\\ldots < 0.75',
                    explanation:
                        'The tenths all equal 7, so compare the hundredths: 1 < 2 < 5. The order is 5/7, then 8/11, then 3/4.',
                },
            ],
            finalAnswer: '5/7, 8/11, 3/4',
        },
    },
    {
        id: 'gn02-036',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from smallest to largest: \\(-0.3\\), \\(-\\frac{1}{4}\\), \\(-0.35\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert -1/4 to a decimal.',
                    workingLatex: '-\\frac{1}{4} = -\\frac{1 \\times 25}{4 \\times 25} = -\\frac{25}{100} = -0.25',
                    explanation:
                        'Since 4 × 25 = 100, one quarter scales to 25 hundredths = 0.25, so negative one quarter is -0.25. Keep the minus sign throughout.',
                },
                {
                    stepNumber: 2,
                    description: 'List all three as decimals.',
                    workingLatex: '-0.30, \\ -0.25, \\ -0.35',
                    explanation:
                        'Writing each to two decimal places gives -0.30, -0.25 and -0.35.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the sizes, ignoring signs.',
                    workingLatex: '0.25 < 0.30 < 0.35',
                    explanation:
                        'First compare how big each is without the minus: the sizes increase 0.25, 0.30, 0.35.',
                },
                {
                    stepNumber: 4,
                    description: 'Reverse for negatives, smallest first.',
                    workingLatex: '-0.35 < -0.30 < -0.25',
                    explanation:
                        'For negatives the largest size is the smallest number, so -0.35 comes first, then -0.3, then -1/4. A common slip is keeping the size order.',
                },
            ],
            finalAnswer: '-0.35, -0.3, -1/4',
        },
    },
    {
        id: 'gn02-037',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Which is the better mark: \\(\\frac{19}{25}\\) or \\(\\frac{31}{40}\\)? Show your working.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Scale 19/25 to a denominator of 100.',
                    workingLatex: '\\frac{19}{25} = \\frac{19 \\times 4}{25 \\times 4} = \\frac{76}{100}',
                    explanation:
                        'Percentages are out of 100, so rewrite each fraction over 100. Since 25 × 4 = 100, multiply top and bottom by 4.',
                },
                {
                    stepNumber: 2,
                    description: 'Write 19/25 as a percentage.',
                    workingLatex: '\\frac{76}{100} = 76\\%',
                    explanation:
                        '76 out of 100 is 76%.',
                },
                {
                    stepNumber: 3,
                    description: 'Scale 31/40 to a denominator of 100.',
                    workingLatex: '\\frac{31}{40} = \\frac{31 \\times 2.5}{40 \\times 2.5} = \\frac{77.5}{100}',
                    explanation:
                        'Since 40 × 2.5 = 100, multiply top and bottom by 2.5. It is fine for the numerator to come out as a decimal here.',
                },
                {
                    stepNumber: 4,
                    description: 'Write 31/40 as a percentage.',
                    workingLatex: '\\frac{77.5}{100} = 77.5\\%',
                    explanation:
                        '77.5 out of 100 is 77.5%.',
                },
                {
                    stepNumber: 5,
                    description: 'Compare the two percentages.',
                    workingLatex: '77.5\\% > 76\\%',
                    explanation:
                        'Since 77.5% is greater than 76%, 31/40 is the better mark.',
                },
            ],
            finalAnswer: '31/40 is the better mark (77.5% > 76%)',
        },
    },
    {
        id: 'gn02-038',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from smallest to largest: \\(0.7\\), \\(\\frac{5}{8}\\), \\(68\\%\\), \\(\\frac{2}{3}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 5/8 to a decimal.',
                    workingLatex: '\\frac{5}{8} = \\frac{5 \\times 125}{8 \\times 125} = \\frac{625}{1000} = 0.625',
                    explanation:
                        'Decimals make the mixed set easy to compare. Since 8 × 125 = 1000, scale top and bottom by 125 to get 625 thousandths = 0.625.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 68% to a decimal.',
                    workingLatex: '68\\% = 68 \\div 100 = 0.68',
                    explanation:
                        'Divide the percentage by 100 to get 0.68.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 2/3 to a decimal.',
                    workingLatex: '\\frac{2}{3} = 2\\div3:\\ 20\\div3{=}6\\,\\mathrm{r}2,\\ \\mathrm{r}2\\text{ repeats} \\Rightarrow 0.\\overline{6} = 0.6666\\ldots',
                    explanation:
                        'Long division gives 20 ÷ 3 = 6 remainder 2, and the remainder 2 keeps returning, so the digit 6 recurs: 0.6666..., about 0.667.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four as decimals.',
                    workingLatex: '0.700, \\ 0.625, \\ 0.680, \\ 0.6666\\ldots',
                    explanation:
                        'The four values are 0.7, 0.625, 0.68 and 0.6666...',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.625 < 0.6\\overline{6} < 0.68 < 0.7',
                    explanation:
                        'Comparing carefully, 0.625 < 0.666... < 0.68 < 0.7. Note 0.666... is less than 0.68 because at the hundredths 6 < 8. The order is 5/8, 2/3, 68%, then 0.7.',
                },
            ],
            finalAnswer: '5/8, 2/3, 68%, 0.7',
        },
    },
    {
        id: 'gn02-039',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Place \\(\\frac{3}{8}\\), \\(0.5\\) and \\(\\frac{2}{5}\\) on a number line from \\(0\\) to \\(1\\), then list them in order.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['number-line', 'ordering', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 3/8 to a decimal.',
                    workingLatex: '\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375',
                    explanation:
                        'To plot the fractions accurately, turn them into decimals first. Since 8 × 125 = 1000, scale top and bottom by 125: 375 thousandths = 0.375.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 2/5 to a decimal.',
                    workingLatex: '\\frac{2}{5} = \\frac{4}{10} = 0.4',
                    explanation:
                        'Scaling 2/5 to tenths (multiply top and bottom by 2) gives 4/10, which is 0.4.',
                },
                {
                    stepNumber: 3,
                    description: 'Mark the positions on 0 to 1.',
                    workingLatex: '0.375, \\ 0.5, \\ 0.4',
                    explanation:
                        '3/8 sits at 0.375, the decimal 0.5 at the halfway mark, and 2/5 at 0.4, just past the middle of 0.3 and 0.5.',
                },
                {
                    stepNumber: 4,
                    description: 'Read the order left to right.',
                    workingLatex: '0.375 < 0.4 < 0.5',
                    explanation:
                        'On a number line, left is smaller. So the order is 3/8, then 2/5, then 0.5.',
                },
            ],
            finalAnswer: '3/8 (0.375), 2/5 (0.4), 0.5',
        },
    },
    {
        id: 'gn02-040',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Use cross-multiplication to put \\(\\frac{5}{11}\\) and \\(\\frac{7}{15}\\) in order.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'cross-multiplication'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply 5/11 numerator by 7/15 denominator.',
                    workingLatex: '5 \\times 15 = 75',
                    explanation:
                        'Cross-multiplying avoids finding a common denominator. Take the numerator of the first fraction (5) times the denominator of the second (15).',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply 7/15 numerator by 5/11 denominator.',
                    workingLatex: '7 \\times 11 = 77',
                    explanation:
                        'Now the numerator of the second fraction (7) times the denominator of the first (11). Keep each product on its own fraction’s side.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the two products.',
                    workingLatex: '75 < 77',
                    explanation:
                        '75 came from 5/11 and 77 from 7/15. The smaller product flags the smaller fraction.',
                },
                {
                    stepNumber: 4,
                    description: 'State the order.',
                    workingLatex: '\\frac{5}{11} < \\frac{7}{15}',
                    explanation:
                        'Since 75 belongs to 5/11 and is the smaller product, 5/11 is the smaller fraction. A common slip is reading the products onto the wrong fractions.',
                },
            ],
            finalAnswer: '5/11 < 7/15',
        },
    },
    {
        id: 'gn02-041',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Runner A completes a lap in \\(62.4\\,\\mathrm{s}\\), runner B in \\(62.35\\,\\mathrm{s}\\) and runner C in \\(62.5\\,\\mathrm{s}\\). List them from fastest to slowest.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'decimals', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write all times to two decimal places.',
                    workingLatex: '62.4 = 62.40, \\ 62.5 = 62.50',
                    explanation:
                        'Adding trailing zeros lines up the hundredths so the times can be compared digit by digit: 62.40 s, 62.35 s, 62.50 s.',
                },
                {
                    stepNumber: 2,
                    description: 'Decide what "fastest" means here.',
                    workingLatex: '\\text{fastest} = \\text{smallest time}',
                    explanation:
                        'A faster lap takes less time, so fastest is the smallest number of seconds. A common slip is ordering largest-first by habit.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the times, smallest first.',
                    workingLatex: '62.35 < 62.40 < 62.50',
                    explanation:
                        'The whole parts all equal 62, so compare the decimals: 35 < 40 < 50 hundredths.',
                },
                {
                    stepNumber: 4,
                    description: 'Name the runners in order.',
                    workingLatex: 'B \\to A \\to C',
                    explanation:
                        'The smallest time 62.35 s is B, then 62.40 s is A, then 62.50 s is C, giving fastest to slowest.',
                },
            ],
            finalAnswer: 'B (62.35 s), A (62.4 s), C (62.5 s)',
        },
    },
    {
        id: 'gn02-042',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Put these fractions in ascending order: \\(\\frac{7}{12}, \\frac{5}{8}, \\frac{3}{5}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'fractions', 'common-denominator'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the lowest common denominator.',
                    workingLatex: '\\text{LCM}(12, 8, 5) = 120',
                    explanation:
                        'The smallest number that 12, 8 and 5 all divide into is 120, so rewrite each fraction over 120.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 7/12 to hundred-twentieths.',
                    workingLatex: '\\frac{7}{12} = \\frac{7 \\times 10}{12 \\times 10} = \\frac{70}{120}',
                    explanation:
                        'Since 12 × 10 = 120, multiply top and bottom by 10.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 5/8 to hundred-twentieths.',
                    workingLatex: '\\frac{5}{8} = \\frac{5 \\times 15}{8 \\times 15} = \\frac{75}{120}',
                    explanation:
                        'Since 8 × 15 = 120, multiply top and bottom by 15.',
                },
                {
                    stepNumber: 4,
                    description: 'Convert 3/5 to hundred-twentieths.',
                    workingLatex: '\\frac{3}{5} = \\frac{3 \\times 24}{5 \\times 24} = \\frac{72}{120}',
                    explanation:
                        'Since 5 × 24 = 120, multiply top and bottom by 24.',
                },
                {
                    stepNumber: 5,
                    description: 'Order by numerator, smallest first.',
                    workingLatex: '\\frac{70}{120} < \\frac{72}{120} < \\frac{75}{120}',
                    explanation:
                        'With a shared denominator, just compare numerators 70, 72, 75.',
                },
                {
                    stepNumber: 6,
                    description: 'Translate back to the originals.',
                    workingLatex: '\\frac{7}{12} < \\frac{3}{5} < \\frac{5}{8}',
                    explanation:
                        '70/120 is 7/12, 72/120 is 3/5 and 75/120 is 5/8, giving the ascending order.',
                },
            ],
            finalAnswer: '7/12, 3/5, 5/8',
        },
    },
    {
        id: 'gn02-043',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from largest to smallest: \\(\\frac{9}{20}\\), \\(0.46\\), \\(45.5\\%\\), \\(\\frac{11}{25}\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 9/20 to a decimal.',
                    workingLatex: '\\frac{9}{20} = \\frac{45}{100} = 0.45',
                    explanation:
                        'Scaling 9/20 to hundredths (multiply top and bottom by 5) gives 45/100, which is 0.45.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 45.5% to a decimal.',
                    workingLatex: '45.5\\% = 45.5 \\div 100 = 0.455',
                    explanation:
                        'Divide the percentage by 100 (move two places left) to get 0.455.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 11/25 to a decimal.',
                    workingLatex: '\\frac{11}{25} = \\frac{44}{100} = 0.44',
                    explanation:
                        'Scaling 11/25 to hundredths (multiply top and bottom by 4) gives 44/100, which is 0.44.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four as decimals.',
                    workingLatex: '0.450, \\ 0.460, \\ 0.455, \\ 0.440',
                    explanation:
                        'Writing each to three decimal places gives 0.450, 0.460, 0.455 and 0.440.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from largest to smallest.',
                    workingLatex: '0.460 > 0.455 > 0.450 > 0.440',
                    explanation:
                        'Comparing the thousandths gives 460 > 455 > 450 > 440, so the order is 0.46, then 45.5%, then 9/20, then 11/25.',
                },
            ],
            finalAnswer: '0.46, 45.5%, 9/20, 11/25',
        },
    },
    {
        id: 'gn02-044',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'a) Convert \\(\\frac{5}{6}\\) to a recurring decimal.\\n\\nb) State whether \\(\\frac{5}{6}\\) or \\(0.84\\) is larger.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'recurring', 'comparing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide 5 by 6 (part a).',
                    workingLatex: '\\frac{5}{6} = 5\\div6:\\ 50\\div6{=}8\\,\\mathrm{r}2,\\ 20\\div6{=}3\\,\\mathrm{r}2,\\ \\mathrm{r}2\\text{ repeats} \\Rightarrow 0.8\\overline{3} = 0.8333\\ldots',
                    explanation:
                        'Long division: 50 ÷ 6 = 8 remainder 2, then 20 ÷ 6 = 3 remainder 2, and that remainder 2 repeats. So only the 3 recurs after the first digit, giving 0.8333...',
                },
                {
                    stepNumber: 2,
                    description: 'Write the recurring-decimal notation.',
                    workingLatex: '0.8333\\ldots = 0.8\\overline{3}',
                    explanation:
                        'A dot (or bar) over the 3 shows it recurs. Only the 3 repeats, so the bar sits over the 3 alone, not the 8.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare with 0.84 (part b).',
                    workingLatex: '0.8\\overline{3} = 0.8333\\ldots < 0.84',
                    explanation:
                        'The tenths match (8), but in the hundredths 3 < 4, so 0.8333... is less than 0.84. Therefore 0.84 is larger.',
                },
            ],
            finalAnswer: 'a) 0.8333... (0.8 recurring 3)  b) 0.84 is larger',
        },
    },
    {
        id: 'gn02-045',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'A recipe needs more than \\(0.6\\,\\mathrm{kg}\\) but less than \\(\\frac{3}{4}\\) kg of flour. Which of these amounts is valid: \\(0.55\\,\\mathrm{kg}\\), \\(0.7\\,\\mathrm{kg}\\), \\(0.8\\,\\mathrm{kg}\\)?',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'mixed', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert the upper bound 3/4 to a decimal.',
                    workingLatex: '\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 0.75',
                    explanation:
                        'Turn the fraction into a decimal so both limits are the same form. Since 4 × 25 = 100, scale by 25: three quarters is 75 hundredths = 0.75 kg.',
                },
                {
                    stepNumber: 2,
                    description: 'Write the condition as an inequality.',
                    workingLatex: '0.6 < \\text{amount} < 0.75',
                    explanation:
                        '"More than 0.6 but less than 0.75" means the amount must lie strictly between these two values.',
                },
                {
                    stepNumber: 3,
                    description: 'Test 0.55 kg.',
                    workingLatex: '0.55 < 0.6 \\ \\text{✗}',
                    explanation:
                        '0.55 is below the lower limit 0.6, so it is too small.',
                },
                {
                    stepNumber: 4,
                    description: 'Test 0.7 kg.',
                    workingLatex: '0.6 < 0.7 < 0.75 \\ \\text{✓}',
                    explanation:
                        '0.7 is above 0.6 and below 0.75, so it satisfies both parts of the condition.',
                },
                {
                    stepNumber: 5,
                    description: 'Test 0.8 kg.',
                    workingLatex: '0.8 > 0.75 \\ \\text{✗}',
                    explanation:
                        '0.8 is above the upper limit 0.75, so it is too large. Only 0.7 kg works.',
                },
            ],
            finalAnswer: '0.7 kg',
            canonicalAnswer: '0.7',
        },
    },
    {
        id: 'gn02-046',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Order these from smallest to largest: \\(\\frac{13}{20}\\), \\(0.65\\), \\(\\frac{2}{3}\\), \\(64\\%\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 13/20 to a decimal.',
                    workingLatex: '\\frac{13}{20} = \\frac{65}{100} = 0.65',
                    explanation:
                        'Scaling 13/20 to hundredths (multiply top and bottom by 5) gives 65/100, which is 0.65 — equal to the listed 0.65.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 2/3 to a decimal.',
                    workingLatex: '\\frac{2}{3} = 2\\div3:\\ 20\\div3{=}6\\,\\mathrm{r}2,\\ \\mathrm{r}2\\text{ repeats} \\Rightarrow 0.\\overline{6} = 0.6666\\ldots',
                    explanation:
                        'Long division: 20 ÷ 3 = 6 remainder 2, and the remainder 2 repeats, so the digit 6 recurs forever, giving 0.6666...',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 64% to a decimal.',
                    workingLatex: '64\\% = 64 \\div 100 = 0.64',
                    explanation:
                        'Divide the percentage by 100 to get 0.64.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four as decimals.',
                    workingLatex: '0.65, \\ 0.65, \\ 0.6666\\ldots, \\ 0.64',
                    explanation:
                        'The values are 0.65 (= 13/20), 0.65, 0.6666... and 0.64. Note 13/20 and the listed 0.65 are equal.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.64 < 0.65 = 0.65 < 0.6\\overline{6}',
                    explanation:
                        'Smallest is 0.64, then the two equal 0.65 values, then 0.666... So the order is 64%, then 13/20 = 0.65, then 2/3.',
                },
            ],
            finalAnswer: '64%, 13/20 = 0.65, 2/3',
        },
    },
    {
        id: 'gn02-047',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText:
            'Find a fraction with denominator \\(8\\) that lies between \\(0.3\\) and \\(0.45\\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'number-line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 2/8 to a decimal.',
                    workingLatex: '\\frac{2}{8} = \\frac{2 \\times 125}{8 \\times 125} = \\frac{250}{1000} = 0.25',
                    explanation:
                        'List the eighths near the range and turn them into decimals. Since 8 × 125 = 1000, scale by 125: two eighths is 250 thousandths = 0.25.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 3/8 to a decimal.',
                    workingLatex: '\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375',
                    explanation:
                        'Scaling by 125 again (8 × 125 = 1000) gives 375 thousandths = 0.375, the next eighth up from 0.25.',
                },
                {
                    stepNumber: 3,
                    description: 'Test which eighth lies in the interval.',
                    workingLatex: '0.3 < 0.375 < 0.45',
                    explanation:
                        '0.25 is below 0.3 so it is too small, but 0.375 sits strictly between 0.3 and 0.45. So 3/8 works.',
                },
            ],
            finalAnswer: '3/8 (= 0.375)',
            canonicalAnswer: '3/8',
        },
    },

    /* ───────────────────────────── CHALLENGE (23) ───────────────────────────── */
    {
        id: 'gn02-048',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(\\frac{5}{8}\\), \\(0.62\\), \\(63\\%\\), \\(\\frac{7}{11}\\), \\(0.6\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 5/8 to a decimal.',
                    workingLatex: '\\frac{5}{8} = \\frac{5 \\times 125}{8 \\times 125} = \\frac{625}{1000} = 0.625',
                    explanation:
                        'Decimals are the common form for this mixed set. Since 8 × 125 = 1000, scale top and bottom by 125 to get 625 thousandths = 0.625.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 63% to a decimal.',
                    workingLatex: '63\\% = 63 \\div 100 = 0.63',
                    explanation:
                        'Divide the percentage by 100 to get 0.63.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 7/11 to a decimal.',
                    workingLatex: '\\frac{7}{11} = 7\\div11:\\ 70\\div11{=}6\\,\\mathrm{r}4,\\ 40\\div11{=}3\\,\\mathrm{r}7,\\ \\mathrm{r}4\\text{ returns} \\Rightarrow 0.\\overline{63} = 0.6363\\ldots',
                    explanation:
                        'Long division: 70 ÷ 11 = 6 r4, 40 ÷ 11 = 3 r7, then the remainder 4 comes back, so the block of digits repeats, giving the recurring decimal 0.6363...',
                },
                {
                    stepNumber: 4,
                    description: 'List all five as decimals.',
                    workingLatex: '0.600, \\ 0.620, \\ 0.625, \\ 0.630, \\ 0.6363\\ldots',
                    explanation:
                        'The five values are 0.6 and 0.62 (already decimals), plus 0.625, 0.63 and 0.6363...',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.6 < 0.62 < 0.625 < 0.63 < 0.6\\overline{36}',
                    explanation:
                        'A common slip is putting 0.625 before 0.62 — but 0.625 (= 0.6250) is larger. Also 0.6363... beats 0.63, so 7/11 is largest. The order is 0.6, 0.62, 5/8, 63%, 7/11.',
                },
            ],
            finalAnswer: '0.6, 0.62, 5/8, 63%, 7/11',
        },
    },
    {
        id: 'gn02-049',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(0.\\overline{3}\\), \\(\\frac{1}{3}\\), \\(0.34\\), \\(\\frac{17}{50}\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'recurring', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 1/3 to a decimal.',
                    workingLatex: '\\frac{1}{3} = 1\\div3:\\ 10\\div3{=}3\\,\\mathrm{r}1,\\ \\mathrm{r}1\\text{ repeats} \\Rightarrow 0.\\overline{3} = 0.3333\\ldots',
                    explanation:
                        'Long division: 10 ÷ 3 = 3 remainder 1, and the remainder 1 returns each time, so the 3 repeats forever, giving 0.3333...',
                },
                {
                    stepNumber: 2,
                    description: 'Recognise 0.3 recurring equals 1/3.',
                    workingLatex: '0.\\overline{3} = 0.3333\\ldots = \\frac{1}{3}',
                    explanation:
                        'The bar over the 3 means it recurs, so 0.3 recurring is exactly 0.3333... — the same value as 1/3. These two are equal.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 17/50 to a decimal.',
                    workingLatex: '\\frac{17}{50} = \\frac{34}{100} = 0.34',
                    explanation:
                        'Scaling 17/50 to hundredths (multiply top and bottom by 2) gives 34/100, which is 0.34 — equal to the listed 0.34.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare 0.3333... with 0.34.',
                    workingLatex: '0.3333\\ldots < 0.34',
                    explanation:
                        'The tenths match (3), but in the hundredths 3 < 4, so 0.333... is the smaller value.',
                },
                {
                    stepNumber: 5,
                    description: 'Write the full ascending order.',
                    workingLatex: '0.\\overline{3} = \\frac{1}{3} < 0.34 = \\frac{17}{50}',
                    explanation:
                        'The two equal smaller values (0.3 recurring and 1/3) come first, then the two equal larger values (0.34 and 17/50).',
                },
            ],
            finalAnswer: '0.3 recurring = 1/3, then 0.34 = 17/50',
        },
    },
    {
        id: 'gn02-050',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from smallest to largest: \\(-\\frac{2}{3}\\), \\(-0.6\\), \\(-\\frac{5}{8}\\), \\(-0.7\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative', 'mixed', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert -2/3 to a decimal.',
                    workingLatex: '-\\frac{2}{3} = -(2\\div3):\\ 20\\div3{=}6\\,\\mathrm{r}2,\\ \\mathrm{r}2\\text{ repeats} \\Rightarrow -0.\\overline{6} = -0.6666\\ldots',
                    explanation:
                        'Long division of 2 by 3: 20 ÷ 3 = 6 remainder 2, with the remainder repeating, so 2/3 = 0.6666... Keep the minus sign, giving -0.6666...',
                },
                {
                    stepNumber: 2,
                    description: 'Convert -5/8 to a decimal.',
                    workingLatex: '-\\frac{5}{8} = -\\frac{5 \\times 125}{8 \\times 125} = -\\frac{625}{1000} = -0.625',
                    explanation:
                        'Since 8 × 125 = 1000, five eighths scales to 625 thousandths = 0.625, so negative five eighths is -0.625.',
                },
                {
                    stepNumber: 3,
                    description: 'List all four as decimals.',
                    workingLatex: '-0.7, \\ -0.6666\\ldots, \\ -0.625, \\ -0.6',
                    explanation:
                        'The four values are -0.7, -0.6666..., -0.625 and -0.6.',
                },
                {
                    stepNumber: 4,
                    description: 'Order the sizes, ignoring signs.',
                    workingLatex: '0.6 < 0.625 < 0.6\\overline{6} < 0.7',
                    explanation:
                        'Without the minus signs the sizes increase 0.6, 0.625, 0.666..., 0.7.',
                },
                {
                    stepNumber: 5,
                    description: 'Reverse for negatives, smallest first.',
                    workingLatex: '-0.7 < -0.6\\overline{6} < -0.625 < -0.6',
                    explanation:
                        'The largest size (0.7) gives the most negative, hence smallest, number. So the order is -0.7, -2/3, -5/8, then -0.6.',
                },
            ],
            finalAnswer: '-0.7, -2/3, -5/8, -0.6',
        },
    },
    {
        id: 'gn02-051',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Which is larger, \\(0.\\overline{45}\\) or \\(\\frac{5}{11}\\)? Justify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'recurring', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let x equal the recurring decimal.',
                    workingLatex: 'x = 0.\\overline{45} = 0.454545\\ldots',
                    explanation:
                        'Naming the value x turns the recurring decimal into an algebra problem, which is what lets us prove the "over 99" shortcut rather than just quoting it.',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 100 to shift two digits.',
                    workingLatex: '100x = 45.454545\\ldots',
                    explanation:
                        'The recurring block "45" is two digits long, so multiply by 100 (one factor of 10 per recurring digit). This lines the recurring tail .4545... up exactly with the tail of x.',
                },
                {
                    stepNumber: 3,
                    description: 'Subtract x from 100x.',
                    workingLatex: '100x - x = 45.4545\\ldots - 0.4545\\ldots = 45',
                    explanation:
                        'The matching recurring tails cancel exactly, leaving the whole number 45. The left side is 100x - x = 99x — and that 99 is precisely the "two nines": it comes from 100 - 1, i.e. one less than the 100 we multiplied by.',
                },
                {
                    stepNumber: 4,
                    description: 'Solve for x.',
                    workingLatex: '99x = 45 \\Rightarrow x = \\frac{45}{99}',
                    explanation:
                        'Dividing both sides by 99 gives x = 45/99. This is why a two-digit recurring block sits over 99 — not by a rule to memorise, but because 100x - x = 99x. (A one-digit block would give 10x - x = 9x, hence over 9.)',
                },
                {
                    stepNumber: 5,
                    description: 'Simplify 45/99.',
                    workingLatex: '\\frac{45}{99} = \\frac{45 \\div 9}{99 \\div 9} = \\frac{5}{11}',
                    explanation:
                        'Both 45 and 99 share the factor 9, so dividing top and bottom by 9 gives 5/11.',
                },
                {
                    stepNumber: 6,
                    description: 'Compare with 5/11.',
                    workingLatex: '0.\\overline{45} = \\frac{5}{11}',
                    explanation:
                        'The recurring decimal simplifies to exactly 5/11, so the two values are equal — neither is larger.',
                },
            ],
            finalAnswer: 'They are equal (0.45 recurring = 5/11)',
        },
    },
    {
        id: 'gn02-052',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Three athletes ran: Aisha \\(\\frac{17}{20}\\) of the distance, Bo \\(0.83\\) of the distance, Cai \\(85.5\\%\\). List who ran furthest to least.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert Aisha’s 17/20 to a decimal.',
                    workingLatex: '\\frac{17}{20} = \\frac{85}{100} = 0.85',
                    explanation:
                        'Scaling 17/20 to hundredths (multiply top and bottom by 5) gives 85/100, which is 0.85.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert Cai’s 85.5% to a decimal.',
                    workingLatex: '85.5\\% = 85.5 \\div 100 = 0.855',
                    explanation:
                        'Divide the percentage by 100 (move two places left) to get 0.855.',
                },
                {
                    stepNumber: 3,
                    description: 'List all three as decimals.',
                    workingLatex: '0.850, \\ 0.830, \\ 0.855',
                    explanation:
                        'Aisha 0.85, Bo 0.83 (already a decimal) and Cai 0.855, all written to three decimal places.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from largest to smallest.',
                    workingLatex: '0.855 > 0.850 > 0.830',
                    explanation:
                        'Furthest run is the biggest fraction of the distance: 0.855 (Cai), then 0.85 (Aisha), then 0.83 (Bo).',
                },
            ],
            finalAnswer: 'Cai (85.5%), Aisha (17/20), Bo (0.83)',
        },
    },
    {
        id: 'gn02-053',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(\\frac{7}{9}\\), \\(0.78\\), \\(0.\\overline{7}\\), \\(\\frac{4}{5}\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'recurring', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 7/9 to a decimal.',
                    workingLatex: '\\frac{7}{9} = 7\\div9:\\ 70\\div9{=}7\\,\\mathrm{r}7,\\ \\mathrm{r}7\\text{ repeats} \\Rightarrow 0.\\overline{7} = 0.7777\\ldots',
                    explanation:
                        'Long division: 70 ÷ 9 = 7 remainder 7, and that remainder repeats, so the 7 recurs — exactly the recurring decimal 0.7 recurring. So 7/9 and 0.7 recurring are equal.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 4/5 to a decimal.',
                    workingLatex: '\\frac{4}{5} = \\frac{8}{10} = 0.8',
                    explanation:
                        'Scaling 4/5 to tenths (multiply top and bottom by 2) gives 8/10, which is 0.8.',
                },
                {
                    stepNumber: 3,
                    description: 'List all four as decimals.',
                    workingLatex: '0.7777\\ldots, \\ 0.78, \\ 0.7777\\ldots, \\ 0.8',
                    explanation:
                        '7/9 and 0.7 recurring are both 0.7777..., 0.78 stands alone, and 4/5 is 0.8.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare 0.7777... with 0.78.',
                    workingLatex: '0.7777\\ldots < 0.780',
                    explanation:
                        'Write 0.78 as 0.7800. The tenths match (7), but in the hundredths 0.777... has a 7 while 0.78 has an 8, so 0.777... is smaller. A common slip is assuming the recurring decimal is bigger just because it has more digits.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.7777\\ldots < 0.78 < 0.8',
                    explanation:
                        'So the order is 7/9 (= 0.7 recurring), then 0.78, then 4/5.',
                },
            ],
            finalAnswer: '7/9 = 0.7 recurring, 0.78, 4/5',
        },
    },
    {
        id: 'gn02-054',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'a) Convert \\(\\frac{5}{7}\\) to a decimal (4 d.p.).\\n\\nb) Hence order \\(\\frac{5}{7}\\), \\(0.714\\) and \\(\\frac{12}{17}\\) from smallest to largest.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['converting', 'ordering', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide 5 by 7 (part a).',
                    workingLatex: '\\frac{5}{7} = 5\\div7:\\ 50{=}7\\,\\mathrm{r}1,\\ 10{=}1\\,\\mathrm{r}3,\\ 30{=}4\\,\\mathrm{r}2,\\ 20{=}2\\,\\mathrm{r}6,\\ 60{=}8\\,\\mathrm{r}4,\\ 40{=}5\\,\\mathrm{r}5 \\Rightarrow 0.\\overline{714285}',
                    explanation:
                        'Dividing 5 by 7 and bringing down a zero each time, the six remainders 1, 3, 2, 6, 4, 5 occur before 5 returns and the cycle restarts. So the block 714285 repeats: 0.714285714285...',
                },
                {
                    stepNumber: 2,
                    description: 'Round to four decimal places.',
                    workingLatex: '0.714285\\ldots \\approx 0.7143',
                    explanation:
                        'The fifth decimal digit is 8 (5 or more), so round the fourth digit up from 2 to 3, giving 0.7143.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 12/17 to a decimal.',
                    workingLatex: '\\frac{12}{17} = 12\\div17:\\ 120{=}7\\,\\mathrm{r}1,\\ 10{=}0\\,\\mathrm{r}10,\\ 100{=}5\\,\\mathrm{r}15,\\ 150{=}8\\,\\mathrm{r}14,\\ \\ldots = 0.7058\\ldots \\approx 0.7059',
                    explanation:
                        'Long division: 120 ÷ 17 = 7 r1, 10 ÷ 17 = 0 r10, 100 ÷ 17 = 5 r15, 150 ÷ 17 = 8 r14. This gives 0.70588..., about 0.7059 to four decimal places — far enough to use in the ordering.',
                },
                {
                    stepNumber: 4,
                    description: 'List the three values to compare (part b).',
                    workingLatex: '0.7059, \\ 0.7140, \\ 0.7143',
                    explanation:
                        'The values are 12/17 ≈ 0.7059, the given 0.714 (= 0.7140), and 5/7 ≈ 0.7143.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.7059 < 0.714 < 0.7143',
                    explanation:
                        'Comparing digit by digit, 12/17 is smallest, then 0.714, then 5/7. A common slip is treating 0.714 and 5/7 as equal — but 5/7 = 0.71428... is slightly larger.',
                },
            ],
            finalAnswer: 'a) 0.7143  b) 12/17, 0.714, 5/7',
        },
    },
    {
        id: 'gn02-055',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from largest to smallest: \\(-\\frac{3}{8}\\), \\(-0.4\\), \\(-\\frac{5}{16}\\), \\(-0.35\\), \\(-\\frac{2}{5}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative', 'mixed', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert -3/8 to a decimal.',
                    workingLatex: '-\\frac{3}{8} = -\\frac{3 \\times 125}{8 \\times 125} = -\\frac{375}{1000} = -0.375',
                    explanation:
                        'Since 8 × 125 = 1000, three eighths scales to 375 thousandths = 0.375, so negative three eighths is -0.375.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert -5/16 to a decimal.',
                    workingLatex: '-\\frac{5}{16} = -\\frac{5 \\times 625}{16 \\times 625} = -\\frac{3125}{10000} = -0.3125',
                    explanation:
                        'Since 16 × 625 = 10000, five sixteenths scales to 3125 ten-thousandths = 0.3125, so negative five sixteenths is -0.3125.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert -2/5 to a decimal.',
                    workingLatex: '-\\frac{2}{5} = -\\frac{4}{10} = -0.4',
                    explanation:
                        'Two fifths is 4/10 = 0.4, so negative two fifths is -0.4 — equal to the listed -0.4.',
                },
                {
                    stepNumber: 4,
                    description: 'List all five as decimals.',
                    workingLatex: '-0.375, \\ -0.4, \\ -0.3125, \\ -0.35, \\ -0.4',
                    explanation:
                        'The five values are -0.375, -0.4, -0.3125, -0.35 and -0.4. Note -2/5 and -0.4 are equal.',
                },
                {
                    stepNumber: 5,
                    description: 'Order the sizes, ignoring signs.',
                    workingLatex: '0.3125 < 0.35 < 0.375 < 0.4 = 0.4',
                    explanation:
                        'Without the minus signs the sizes increase 0.3125, 0.35, 0.375, then the two equal 0.4 values.',
                },
                {
                    stepNumber: 6,
                    description: 'Reverse for negatives, largest first.',
                    workingLatex: '-0.3125 > -0.35 > -0.375 > -0.4 = -0.4',
                    explanation:
                        'Largest (least negative) is -0.3125; the two equal -0.4 values are smallest. So the order is -5/16, -0.35, -3/8, then -0.4 = -2/5.',
                },
            ],
            finalAnswer: '-5/16, -0.35, -3/8, -0.4 = -2/5',
        },
    },
    {
        id: 'gn02-056',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Find a fraction in its simplest form that lies exactly halfway between \\(\\frac{1}{3}\\) and \\(\\frac{1}{2}\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'number-line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write both fractions over 6.',
                    workingLatex: '\\frac{1}{3} = \\frac{2}{6}, \\ \\frac{1}{2} = \\frac{3}{6}',
                    explanation:
                        'The halfway value is the mean, which needs a common denominator. The LCM of 3 and 2 is 6, giving 2/6 and 3/6.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the two fractions.',
                    workingLatex: '\\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6}',
                    explanation:
                        'With the same denominator, add the numerators: 2 + 3 = 5, keeping the denominator 6.',
                },
                {
                    stepNumber: 3,
                    description: 'Halve the sum to get the midpoint.',
                    workingLatex: '\\frac{1}{2} \\times \\frac{5}{6} = \\frac{5}{12}',
                    explanation:
                        'The mean is half the sum. Multiplying by 1/2 doubles the denominator: 5/6 becomes 5/12.',
                },
                {
                    stepNumber: 4,
                    description: 'Check it lies between the two.',
                    workingLatex: '\\frac{1}{3} = 0.333\\ldots, \\ \\frac{5}{12} = 0.4166\\ldots, \\ \\frac{1}{2} = 0.5',
                    explanation:
                        '0.4166... sits exactly between 0.333... and 0.5. Since 5 and 12 share no common factor, 5/12 is already in simplest form.',
                },
            ],
            finalAnswer: '5/12',
            canonicalAnswer: '5/12',
        },
    },
    {
        id: 'gn02-057',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from smallest to largest: \\(\\frac{2}{7}\\), \\(0.29\\), \\(0.\\overline{28}\\), \\(\\frac{9}{31}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'recurring', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 2/7 to a decimal.',
                    workingLatex: '\\frac{2}{7} = 2\\div7:\\ 20{=}2\\,\\mathrm{r}6,\\ 60{=}8\\,\\mathrm{r}4,\\ 40{=}5\\,\\mathrm{r}5,\\ \\ldots \\Rightarrow 0.\\overline{285714}',
                    explanation:
                        'Long division: 20 ÷ 7 = 2 r6, 60 ÷ 7 = 8 r4, 40 ÷ 7 = 5 r5, and so on; the block 285714 repeats, so 2/7 = 0.285714..., about 0.2857.',
                },
                {
                    stepNumber: 2,
                    description: 'Write out the recurring decimal 0.28 recurring.',
                    workingLatex: '0.\\overline{28} = 0.282828\\ldots',
                    explanation:
                        'The bar covers both digits, so the block 28 repeats: 0.282828...',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 9/31 to a decimal.',
                    workingLatex: '\\frac{9}{31} = 9\\div31:\\ 90{=}2\\,\\mathrm{r}28,\\ 280{=}9\\,\\mathrm{r}1,\\ 10{=}0\\,\\mathrm{r}10,\\ 100{=}3\\,\\mathrm{r}7,\\ \\ldots = 0.29032\\ldots',
                    explanation:
                        'Long division: 90 ÷ 31 = 2 r28, 280 ÷ 31 = 9 r1, 10 ÷ 31 = 0 r10, 100 ÷ 31 = 3 r7. This gives 0.290322..., about 0.2903 — enough digits for the comparison.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four to four decimal places.',
                    workingLatex: '0.2828\\ldots, \\ 0.2857\\ldots, \\ 0.2900, \\ 0.2903\\ldots',
                    explanation:
                        'The four values are 0.2828... (0.28 recurring), 0.2857... (2/7), 0.29, and 0.2903... (9/31).',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.2828\\ldots < 0.2857\\ldots < 0.2900 < 0.2903\\ldots',
                    explanation:
                        'All share 0.28 at the start, so compare the third and fourth digits carefully: 28 < 57 < 90 < 903. A common slip is putting 0.29 above 9/31 — but 9/31 = 0.2903... is the larger. The order is 0.28 recurring, 2/7, 0.29, 9/31.',
                },
            ],
            finalAnswer: '0.28 recurring, 2/7, 0.29, 9/31',
        },
    },
    {
        id: 'gn02-058',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Shop A sells juice at \\(\\pounds 1.20\\) for \\(0.75\\,\\mathrm{L}\\). Shop B sells the same juice at \\(\\pounds 1.50\\) for \\(\\frac{9}{10}\\) L. Which shop is cheaper per litre?',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'mixed', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert Shop B’s volume to a decimal.',
                    workingLatex: '\\frac{9}{10} = 0.9 \\text{ L}',
                    explanation:
                        'Nine tenths of a litre is 0.9 L, so both volumes are now decimals ready for dividing.',
                },
                {
                    stepNumber: 2,
                    description: 'Find Shop A’s price per litre.',
                    workingLatex: '1.20 \\div 0.75 = 1.60',
                    explanation:
                        'Price per litre is total price divided by volume: £1.20 ÷ 0.75 L = £1.60 per litre.',
                },
                {
                    stepNumber: 3,
                    description: 'Find Shop B’s price per litre.',
                    workingLatex: '1.50 \\div 0.9 = 1.6\\overline{6}',
                    explanation:
                        'Likewise £1.50 ÷ 0.9 L = £1.666... per litre, about £1.67.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare the two unit prices.',
                    workingLatex: '1.60 < 1.6\\overline{6}',
                    explanation:
                        'The cheaper shop has the smaller price per litre. £1.60 < £1.67, so Shop A is cheaper. A common slip is comparing the headline prices (£1.20 vs £1.50) instead of price per litre.',
                },
            ],
            finalAnswer: 'Shop A is cheaper (£1.60/L vs £1.67/L)',
        },
    },
    {
        id: 'gn02-059',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Put these in ascending order: \\(\\frac{11}{13}\\), \\(0.85\\), \\(84\\%\\), \\(\\frac{6}{7}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 11/13 to a decimal.',
                    workingLatex: '\\frac{11}{13} = 11\\div13:\\ 110{=}8\\,\\mathrm{r}6,\\ 60{=}4\\,\\mathrm{r}8,\\ 80{=}6\\,\\mathrm{r}2,\\ \\ldots = 0.84615\\ldots',
                    explanation:
                        'Long division: 110 ÷ 13 = 8 r6, 60 ÷ 13 = 4 r8, 80 ÷ 13 = 6 r2, and so on. This gives 0.846153..., about 0.8462.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 84% to a decimal.',
                    workingLatex: '84\\% = 84 \\div 100 = 0.84',
                    explanation:
                        'Divide the percentage by 100 to get 0.84.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 6/7 to a decimal.',
                    workingLatex: '\\frac{6}{7} = 6\\div7:\\ 60{=}8\\,\\mathrm{r}4,\\ 40{=}5\\,\\mathrm{r}5,\\ 50{=}7\\,\\mathrm{r}1,\\ \\ldots \\Rightarrow 0.\\overline{857142}',
                    explanation:
                        'Long division: 60 ÷ 7 = 8 r4, 40 ÷ 7 = 5 r5, 50 ÷ 7 = 7 r1, and so on; the block 857142 repeats, so 6/7 = 0.857142..., about 0.8571.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four to four decimal places.',
                    workingLatex: '0.8400, \\ 0.8500, \\ 0.8461\\ldots, \\ 0.8571\\ldots',
                    explanation:
                        'The four values are 0.84, 0.85 (already a decimal), 0.8461... and 0.8571...',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.84 < 0.8461\\ldots < 0.85 < 0.8571\\ldots',
                    explanation:
                        'Compare carefully: 0.8461... sits between 0.84 and 0.85. So the order is 84%, then 11/13, then 0.85, then 6/7.',
                },
            ],
            finalAnswer: '84%, 11/13, 0.85, 6/7',
        },
    },
    {
        id: 'gn02-060',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Show that \\(0.\\overline{6} = \\frac{2}{3}\\), then state which is larger: \\(0.\\overline{6}\\) or \\(0.667\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['recurring', 'comparing', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let x equal the recurring decimal.',
                    workingLatex: 'x = 0.\\overline{6} = 0.6666\\ldots',
                    explanation:
                        'Naming the value x lets us turn the recurring decimal into an algebra problem.',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 10 to shift one digit.',
                    workingLatex: '10x = 6.6666\\ldots',
                    explanation:
                        'One digit recurs, so multiply by 10. This lines up the recurring tail .6666... with that of x.',
                },
                {
                    stepNumber: 3,
                    description: 'Subtract x from 10x.',
                    workingLatex: '10x - x = 6.6666\\ldots - 0.6666\\ldots = 6',
                    explanation:
                        'The matching recurring tails cancel, leaving a whole number 6 and giving 9x = 6.',
                },
                {
                    stepNumber: 4,
                    description: 'Solve and simplify.',
                    workingLatex: 'x = \\frac{6}{9} = \\frac{2}{3}',
                    explanation:
                        'Dividing both sides by 9 gives 6/9, which simplifies (dividing by 3) to 2/3. This shows 0.6 recurring = 2/3.',
                },
                {
                    stepNumber: 5,
                    description: 'Compare 0.6666... with 0.667.',
                    workingLatex: '0.6666\\ldots < 0.667',
                    explanation:
                        'The digits match until the thousandths: 0.666 vs 0.667, where 6 < 7. So 0.667 is larger. A common slip is thinking 0.6 recurring (with endless 6s) must exceed 0.667 — it does not.',
                },
            ],
            finalAnswer: '0.6 recurring = 2/3; 0.667 is larger',
        },
    },
    {
        id: 'gn02-061',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from smallest to largest: \\(-\\frac{7}{10}\\), \\(-0.\\overline{7}\\), -0.72, \\(-\\frac{3}{4}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'negative', 'recurring', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert -7/10 to a decimal.',
                    workingLatex: '-\\frac{7}{10} = -0.7',
                    explanation:
                        'Seven tenths is 0.7, so negative seven tenths is -0.7.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert -3/4 to a decimal.',
                    workingLatex: '-\\frac{3}{4} = -\\frac{3 \\times 25}{4 \\times 25} = -\\frac{75}{100} = -0.75',
                    explanation:
                        'Since 4 × 25 = 100, three quarters scales to 75 hundredths = 0.75, so negative three quarters is -0.75.',
                },
                {
                    stepNumber: 3,
                    description: 'Write out -0.7 recurring.',
                    workingLatex: '-0.\\overline{7} = -0.7777\\ldots',
                    explanation:
                        'The bar means the 7 repeats forever, giving -0.7777...',
                },
                {
                    stepNumber: 4,
                    description: 'Order the sizes, ignoring signs.',
                    workingLatex: '0.7 < 0.72 < 0.75 < 0.7777\\ldots',
                    explanation:
                        'Without the minus signs the sizes increase 0.7, 0.72, 0.75, then 0.7777...',
                },
                {
                    stepNumber: 5,
                    description: 'Reverse for negatives, smallest first.',
                    workingLatex: '-0.7777\\ldots < -0.75 < -0.72 < -0.7',
                    explanation:
                        'The largest size (0.7777...) gives the most negative, hence smallest, number. So the order is -0.7 recurring, -3/4, -0.72, then -7/10.',
                },
            ],
            finalAnswer: '-0.7 recurring, -3/4, -0.72, -7/10',
        },
    },
    {
        id: 'gn02-062',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'a) Write \\(\\frac{3}{8}\\), \\(\\frac{2}{5}\\) and \\(0.39\\) in ascending order.\\n\\nb) Find a decimal that lies between the smallest two of these.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'number-line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 3/8 to a decimal (part a).',
                    workingLatex: '\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375',
                    explanation:
                        'Since 8 × 125 = 1000, scale top and bottom by 125: 375 thousandths is exactly 0.375.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 2/5 to a decimal.',
                    workingLatex: '\\frac{2}{5} = \\frac{4}{10} = 0.4',
                    explanation:
                        'Scaling 2/5 to tenths (multiply top and bottom by 2) gives 4/10 = 0.4.',
                },
                {
                    stepNumber: 3,
                    description: 'Order the three values.',
                    workingLatex: '0.375 < 0.39 < 0.4',
                    explanation:
                        'Writing 0.4 as 0.400, the order is 0.375 < 0.390 < 0.400, so 3/8, then 0.39, then 2/5.',
                },
                {
                    stepNumber: 4,
                    description: 'Identify the two smallest values (part b).',
                    workingLatex: '0.375 \\ \\text{and} \\ 0.39',
                    explanation:
                        'The two smallest are 3/8 (0.375) and 0.39, so we need a decimal strictly between these.',
                },
                {
                    stepNumber: 5,
                    description: 'Choose a decimal in that gap.',
                    workingLatex: '0.375 < 0.38 < 0.39',
                    explanation:
                        'Any value strictly between 0.375 and 0.39 works; 0.38 is a simple choice.',
                },
            ],
            finalAnswer: 'a) 3/8, 0.39, 2/5  b) e.g. 0.38',
        },
    },
    {
        id: 'gn02-063',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Three measurements of a length are recorded as \\(\\frac{15}{16}\\) m, \\(0.94\\,\\mathrm{m}\\) and \\(93.5\\%\\) of \\(1\\,\\mathrm{m}\\). Order them from shortest to longest.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 15/16 m to a decimal.',
                    workingLatex: '\\frac{15}{16} = \\frac{15 \\times 625}{16 \\times 625} = \\frac{9375}{10000} = 0.9375',
                    explanation:
                        'Since 16 × 625 = 10000, scale top and bottom by 625: 9375 ten-thousandths is exactly 0.9375 m.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 93.5% of 1 m to a decimal.',
                    workingLatex: '93.5\\% \\text{ of } 1 = 0.935 \\text{ m}',
                    explanation:
                        '93.5% means 0.935, and 0.935 of 1 m is 0.935 m.',
                },
                {
                    stepNumber: 3,
                    description: 'List all three to four decimal places.',
                    workingLatex: '0.9350, \\ 0.9375, \\ 0.9400',
                    explanation:
                        'The three lengths in metres are 0.935, 0.9375 and 0.94, written to four decimal places.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from shortest to longest.',
                    workingLatex: '0.9350 < 0.9375 < 0.9400',
                    explanation:
                        'The first three digits 0.93 match, so compare the thousandths and beyond: 350 < 375 < 400. So 93.5%, then 15/16, then 0.94 m.',
                },
            ],
            finalAnswer: '93.5% (0.935 m), 15/16 m (0.9375 m), 0.94 m',
        },
    },
    {
        id: 'gn02-064',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'By converting to fractions, decide which is larger: \\(0.\\overline{36}\\) or \\(\\frac{4}{11}\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'recurring', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let x equal the recurring decimal.',
                    workingLatex: 'x = 0.\\overline{36} = 0.363636\\ldots',
                    explanation:
                        'Naming the value x turns the recurring decimal into an algebra problem, so the "over 99" denominator is derived rather than just stated.',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 100 to shift two digits.',
                    workingLatex: '100x = 36.363636\\ldots',
                    explanation:
                        'The recurring block "36" is two digits long, so multiply by 100 (one factor of 10 per recurring digit). This lines the tail .3636... up exactly with the tail of x.',
                },
                {
                    stepNumber: 3,
                    description: 'Subtract x from 100x.',
                    workingLatex: '100x - x = 36.3636\\ldots - 0.3636\\ldots = 36',
                    explanation:
                        'The matching recurring tails cancel, leaving the whole number 36. The left side is 100x - x = 99x — and that 99 is the "two nines", coming straight from 100 - 1.',
                },
                {
                    stepNumber: 4,
                    description: 'Solve for x.',
                    workingLatex: '99x = 36 \\Rightarrow x = \\frac{36}{99}',
                    explanation:
                        'Dividing both sides by 99 gives x = 36/99. So a two-digit recurring block sits over 99 because 100x - x = 99x — there is no rule to memorise.',
                },
                {
                    stepNumber: 5,
                    description: 'Simplify 36/99.',
                    workingLatex: '\\frac{36}{99} = \\frac{36 \\div 9}{99 \\div 9} = \\frac{4}{11}',
                    explanation:
                        'Both 36 and 99 share the factor 9, so dividing top and bottom by 9 gives 4/11.',
                },
                {
                    stepNumber: 6,
                    description: 'Compare with 4/11.',
                    workingLatex: '0.\\overline{36} = \\frac{4}{11}',
                    explanation:
                        'The recurring decimal simplifies to exactly 4/11, so the two values are equal — neither is larger.',
                },
            ],
            finalAnswer: 'They are equal (0.36 recurring = 4/11)',
        },
    },
    {
        id: 'gn02-065',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Put these in descending order: \\(\\frac{17}{24}\\), \\(0.71\\), \\(\\frac{5}{7}\\), \\(70.5\\%\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'mixed', 'percentages', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 17/24 to a decimal.',
                    workingLatex: '\\frac{17}{24} = 17\\div24:\\ 170{=}7\\,\\mathrm{r}2,\\ 20{=}0\\,\\mathrm{r}20,\\ 200{=}8\\,\\mathrm{r}8,\\ 80{=}3\\,\\mathrm{r}8,\\ \\mathrm{r}8\\text{ repeats} \\Rightarrow 0.708\\overline{3}',
                    explanation:
                        'Long division: 170 ÷ 24 = 7 r2, 20 ÷ 24 = 0 r20, 200 ÷ 24 = 8 r8, 80 ÷ 24 = 3 r8; the remainder 8 now repeats, so only the 3 recurs: 0.70833..., about 0.7083.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 5/7 to a decimal.',
                    workingLatex: '\\frac{5}{7} = 5\\div7:\\ 50{=}7\\,\\mathrm{r}1,\\ 10{=}1\\,\\mathrm{r}3,\\ 30{=}4\\,\\mathrm{r}2,\\ \\ldots = 0.71428\\ldots',
                    explanation:
                        'Long division: 50 ÷ 7 = 7 r1, 10 ÷ 7 = 1 r3, 30 ÷ 7 = 4 r2, and so on. This gives 0.714285..., about 0.7143.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 70.5% to a decimal.',
                    workingLatex: '70.5\\% = 70.5 \\div 100 = 0.705',
                    explanation:
                        'Divide the percentage by 100 (move two places left) to get 0.705.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four to four decimal places.',
                    workingLatex: '0.7083\\ldots, \\ 0.7100, \\ 0.7142\\ldots, \\ 0.7050',
                    explanation:
                        'The four values are 0.7083... (17/24), 0.71 (already a decimal), 0.7142... (5/7) and 0.705 (70.5%).',
                },
                {
                    stepNumber: 5,
                    description: 'Order from largest to smallest.',
                    workingLatex: '0.7142\\ldots > 0.71 > 0.7083\\ldots > 0.705',
                    explanation:
                        'Descending: 5/7 (0.7143), then 0.71, then 17/24 (0.7083), then 70.5% (0.705). A common slip is putting 70.5% above 17/24, but 0.705 < 0.7083.',
                },
            ],
            finalAnswer: '5/7, 0.71, 17/24, 70.5%',
        },
    },
    {
        id: 'gn02-066',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'The fraction \\(\\frac{n}{12}\\) lies between \\(0.4\\) and \\(0.6\\). Find all possible integer values of \\(n\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing', 'fractions', 'number-line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the inequality through by 12.',
                    workingLatex: '0.4 < \\frac{n}{12} < 0.6 \\Rightarrow 0.4 \\times 12 < n < 0.6 \\times 12',
                    explanation:
                        'To isolate n, multiply all three parts of the inequality by 12. The fraction n/12 becomes just n.',
                },
                {
                    stepNumber: 2,
                    description: 'Work out the numerical bounds.',
                    workingLatex: '4.8 < n < 7.2',
                    explanation:
                        '0.4 × 12 = 4.8 and 0.6 × 12 = 7.2, so n lies strictly between 4.8 and 7.2.',
                },
                {
                    stepNumber: 3,
                    description: 'List the integers in that range.',
                    workingLatex: 'n = 5, \\ 6, \\ 7',
                    explanation:
                        'The whole numbers strictly between 4.8 and 7.2 are 5, 6 and 7. A common slip is including 4 or 8, which lie outside the range.',
                },
                {
                    stepNumber: 4,
                    description: 'Check each value converts into range.',
                    workingLatex: '\\frac{5}{12} = 0.417, \\ \\frac{6}{12} = 0.5, \\ \\frac{7}{12} = 0.583',
                    explanation:
                        'All three decimals lie between 0.4 and 0.6, confirming n = 5, 6, 7.',
                },
            ],
            finalAnswer: 'n = 5, 6, 7',
        },
    },
    {
        id: 'gn02-067',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from smallest to largest: \\(\\frac{1}{7}\\), \\(0.\\overline{14}\\), \\(0.143\\), \\(\\frac{1}{8}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'recurring', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 1/7 to a decimal.',
                    workingLatex: '\\frac{1}{7} = 1\\div7:\\ 10{=}1\\,\\mathrm{r}3,\\ 30{=}4\\,\\mathrm{r}2,\\ 20{=}2\\,\\mathrm{r}6,\\ \\ldots \\Rightarrow 0.\\overline{142857}',
                    explanation:
                        'Long division: 10 ÷ 7 = 1 r3, 30 ÷ 7 = 4 r2, 20 ÷ 7 = 2 r6, and so on; the block 142857 repeats, so 1/7 = 0.142857142857...',
                },
                {
                    stepNumber: 2,
                    description: 'Write out 0.14 recurring.',
                    workingLatex: '0.\\overline{14} = 0.141414\\ldots',
                    explanation:
                        'The bar covers both digits, so the block 14 repeats: 0.141414...',
                },
                {
                    stepNumber: 3,
                    description: 'Convert 1/8 to a decimal.',
                    workingLatex: '\\frac{1}{8} = \\frac{1 \\times 125}{8 \\times 125} = \\frac{125}{1000} = 0.125',
                    explanation:
                        'Since 8 × 125 = 1000, scale top and bottom by 125: 125 thousandths is exactly 0.125.',
                },
                {
                    stepNumber: 4,
                    description: 'List all four to six decimal places.',
                    workingLatex: '0.125000, \\ 0.141414\\ldots, \\ 0.142857\\ldots, \\ 0.143000',
                    explanation:
                        'The four values are 0.125 (1/8), 0.141414... (0.14 recurring), 0.142857... (1/7) and 0.143.',
                },
                {
                    stepNumber: 5,
                    description: 'Order from smallest to largest.',
                    workingLatex: '0.125 < 0.1414\\ldots < 0.1428\\ldots < 0.143',
                    explanation:
                        '1/8 is clearly smallest. Then comparing the third digit, 0.1414... < 0.1428... < 0.1430. So the order is 1/8, 0.14 recurring, 1/7, then 0.143. A common slip is putting 1/7 above 0.143 — but 1/7 = 0.14285... is just below 0.143.',
                },
            ],
            finalAnswer: '1/8, 0.14 recurring, 1/7, 0.143',
        },
    },
    {
        id: 'gn02-068',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Two batteries are charged to \\(\\frac{7}{8}\\) and \\(88\\%\\) of capacity. a) Which is more charged? b) Express the difference as a percentage.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['comparing', 'percentages', 'fractions', 'worded'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 7/8 to a decimal (part a).',
                    workingLatex: '\\frac{7}{8} = \\frac{7 \\times 125}{8 \\times 125} = \\frac{875}{1000} = 0.875',
                    explanation:
                        'Since 8 × 125 = 1000, scale top and bottom by 125: 875 thousandths is exactly 0.875.',
                },
                {
                    stepNumber: 2,
                    description: 'Write 0.875 as a percentage.',
                    workingLatex: '0.875 = 87.5\\%',
                    explanation:
                        'Multiply a decimal by 100 to get a percentage (move two places right): 0.875 becomes 87.5%.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare the two charges.',
                    workingLatex: '88\\% > 87.5\\%',
                    explanation:
                        'The 88% battery is more charged than the 7/8 (= 87.5%) battery.',
                },
                {
                    stepNumber: 4,
                    description: 'Find the difference (part b).',
                    workingLatex: '88\\% - 87.5\\% = 0.5\\%',
                    explanation:
                        'Subtract the smaller percentage from the larger: the difference in charge is 0.5 percentage points.',
                },
            ],
            finalAnswer: 'a) the 88% battery  b) 0.5%',
        },
    },
    {
        id: 'gn02-069',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'Order from largest to smallest: \\(\\frac{5}{9}\\), \\(0.\\overline{5}\\), \\(0.56\\), \\(\\frac{9}{16}\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['ordering', 'recurring', 'fractions', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert 5/9 to a decimal.',
                    workingLatex: '\\frac{5}{9} = 5\\div9:\\ 50\\div9{=}5\\,\\mathrm{r}5,\\ \\mathrm{r}5\\text{ repeats} \\Rightarrow 0.\\overline{5} = 0.5555\\ldots',
                    explanation:
                        'Long division: 50 ÷ 9 = 5 remainder 5, and that remainder repeats, so the 5 recurs — exactly the recurring decimal 0.5 recurring. So 5/9 and 0.5 recurring are equal.',
                },
                {
                    stepNumber: 2,
                    description: 'Convert 9/16 to a decimal.',
                    workingLatex: '\\frac{9}{16} = \\frac{9 \\times 625}{16 \\times 625} = \\frac{5625}{10000} = 0.5625',
                    explanation:
                        'Since 16 × 625 = 10000, scale top and bottom by 625: 5625 ten-thousandths is exactly 0.5625.',
                },
                {
                    stepNumber: 3,
                    description: 'List all four as decimals.',
                    workingLatex: '0.5555\\ldots, \\ 0.5555\\ldots, \\ 0.5600, \\ 0.5625',
                    explanation:
                        '5/9 and 0.5 recurring are both 0.5555...; the others are 0.56 and 0.5625.',
                },
                {
                    stepNumber: 4,
                    description: 'Order from largest to smallest.',
                    workingLatex: '0.5625 > 0.56 > 0.5555\\ldots = 0.5555\\ldots',
                    explanation:
                        'Largest is 0.5625, then 0.56, then the two equal 0.5555... values. So the order is 9/16, 0.56, then 5/9 = 0.5 recurring.',
                },
            ],
            finalAnswer: '9/16, 0.56, 5/9 = 0.5 recurring',
        },
    },
    {
        id: 'gn02-070',
        topicRef: 'gn02',
        topicTitle: 'Ordering decimals and fractions',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText:
            'a) Convert \\(0.\\overline{72}\\) to a fraction in its simplest form.\\n\\nb) Hence state whether \\(0.\\overline{72}\\) or \\(\\frac{8}{11}\\) is larger.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['recurring', 'converting', 'comparing', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let x equal the recurring decimal (part a).',
                    workingLatex: 'x = 0.\\overline{72} = 0.727272\\ldots',
                    explanation:
                        'Naming the value x turns the recurring decimal into an algebra problem.',
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 100 to shift two digits.',
                    workingLatex: '100x = 72.727272\\ldots',
                    explanation:
                        'Two digits recur, so multiply by 100 (one factor of 10 per recurring digit). This lines up the recurring tail with that of x.',
                },
                {
                    stepNumber: 3,
                    description: 'Subtract x from 100x.',
                    workingLatex: '100x - x = 72.7272\\ldots - 0.7272\\ldots = 72',
                    explanation:
                        'The matching recurring tails cancel, leaving 99x = 72.',
                },
                {
                    stepNumber: 4,
                    description: 'Solve and simplify.',
                    workingLatex: 'x = \\frac{72}{99} = \\frac{8}{11}',
                    explanation:
                        'Dividing both sides by 99 gives 72/99, which simplifies (dividing by 9) to 8/11.',
                },
                {
                    stepNumber: 5,
                    description: 'Compare with 8/11 (part b).',
                    workingLatex: '0.\\overline{72} = \\frac{8}{11}',
                    explanation:
                        'The recurring decimal equals 8/11 exactly, so neither is larger; they are equal.',
                },
            ],
            finalAnswer: 'a) 8/11  b) they are equal',
        },
    },
];
