// Topic: Means, Median and Mode — 10 questions
// Covers: mean from a list, mean from frequency table, weighted mean,
//         median, mode, comparing averages, effect of outliers
// All Foundation difficulty, ids s3-001 to s3-010
// Year 1 A-Level Maths AQA
import { Question } from "@/lib/types";

export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────────
    // Q1  Mean from a list
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-001',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The ages (in years) of 7 members of a quiz team are:\n\n\\( 18,\; 21,\; 19,\; 25,\; 22,\; 19,\; 20 \\)\n\nCalculate the mean age.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'average', 'list of data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the sum of the values.',
                    workingLatex: '18 + 21 + 19 + 25 + 22 + 19 + 20 = 144',
                    explanation: 'Add all seven ages together.',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by the number of values.',
                    workingLatex: '\\text{Mean} = \\dfrac{144}{7} = 20.57\\ldots \\approx 20.6',
                    explanation: 'Divide the total by 7 to get the mean.',
                },
            ],
            finalAnswer: '\\text{Mean} \\approx 20.6 \\text{ years}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q2  Median from an ordered list (odd n)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-002',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of goals scored by a football team in 9 matches were:\n\n\\( 3,\; 1,\; 0,\; 2,\; 4,\; 1,\; 3,\; 2,\; 1 \\)\n\nFind the median number of goals.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'odd number of values', 'ordering data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '0,\; 1,\; 1,\; 1,\; 2,\; 2,\; 3,\; 3,\; 4',
                    explanation: 'Arrange the values in ascending order.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the middle value.',
                    workingLatex: 'n = 9 \\quad \\Rightarrow \\quad \\text{median position} = \\dfrac{9+1}{2} = 5\\text{th value}',
                    explanation: 'With 9 values, the median is the 5th value. Counting along: the 5th value is 2.',
                },
            ],
            finalAnswer: '\\text{Median} = 2 \\text{ goals}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q3  Mode from a dataset
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-003',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A shop records the shoe sizes sold in one day:\n\n\\( 6,\; 7,\; 8,\; 7,\; 9,\; 6,\; 7,\; 10,\; 8,\; 7 \\)\n\na) State the mode.\n\nb) Give one reason why the mode is a useful average for shoe sizes.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'most common value', 'discrete data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the most frequent value.',
                    workingLatex: '\\text{Size 6: } 2, \\quad \\text{Size 7: } 4, \\quad \\text{Size 8: } 2, \\quad \\text{Size 9: } 1, \\quad \\text{Size 10: } 1',
                    explanation: 'Count the frequency of each size. Size 7 appears 4 times, more than any other.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Reason the mode is useful.',
                    workingLatex: '',
                    explanation: 'Shoe sizes are discrete and cannot be averaged meaningfully (e.g. size 7.4 is not a real shoe size). The mode tells the shop which size to stock the most of.',
                },
            ],
            finalAnswer: '\\text{Mode} = \\text{Size } 7',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q4  Mean from a frequency table
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-004',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The table shows the number of pets owned by students in a class.\n\n| Pets (\\(x\\)) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency (\\(f\\)) | 5 | 8 | 7 | 3 | 2 |\n\nCalculate the mean number of pets.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table', 'discrete data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate \\(fx\\) for each row.',
                    workingLatex: '\\begin{array}{c|c|c} x & f & fx \\\\ \\hline 0 & 5 & 0 \\\\ 1 & 8 & 8 \\\\ 2 & 7 & 14 \\\\ 3 & 3 & 9 \\\\ 4 & 2 & 8 \\end{array}',
                    explanation: 'Multiply each value of \\(x\\) by its frequency \\(f\\).',
                },
                {
                    stepNumber: 2,
                    description: 'Find \\(\\sum fx\\) and \\(\\sum f\\).',
                    workingLatex: '\\sum fx = 0 + 8 + 14 + 9 + 8 = 39, \\quad \\sum f = 5 + 8 + 7 + 3 + 2 = 25',
                    explanation: 'Sum all the \\(fx\\) values and all the frequencies.',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the mean.',
                    workingLatex: '\\bar{x} = \\dfrac{\\sum fx}{\\sum f} = \\dfrac{39}{25} = 1.56',
                    explanation: 'Divide the total of \\(fx\\) by the total frequency.',
                },
            ],
            finalAnswer: '\\bar{x} = 1.56 \\text{ pets}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q5  Median from a frequency table
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-005',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same data as Q4:\n\n| Pets (\\(x\\)) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency (\\(f\\)) | 5 | 8 | 7 | 3 | 2 |\n\nFind the median number of pets.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'frequency table', 'cumulative frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the median position.',
                    workingLatex: 'n = 25 \\quad \\Rightarrow \\quad \\text{median position} = \\dfrac{25+1}{2} = 13\\text{th value}',
                    explanation: 'There are 25 values in total; the median is the 13th.',
                },
                {
                    stepNumber: 2,
                    description: 'Use cumulative frequencies to locate the 13th value.',
                    workingLatex: '\\text{CF: } 5,\; 13,\; 20,\; 23,\; 25',
                    explanation: 'The cumulative frequency reaches 13 at \\(x = 1\\). So the 13th value is 1.',
                },
            ],
            finalAnswer: '\\text{Median} = 1 \\text{ pet}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q6  Median from an even-sized list
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-006',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The heights (in cm) of 8 plants are:\n\n\\( 12,\; 15,\; 9,\; 18,\; 14,\; 11,\; 16,\; 13 \\)\n\nFind the median height.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'even number of values', 'average of middle two'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '9,\; 11,\; 12,\; 13,\; 14,\; 15,\; 16,\; 18',
                    explanation: 'Arrange the values in ascending order.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the two middle values.',
                    workingLatex: 'n = 8 \\quad \\Rightarrow \\quad \\text{median position} = \\dfrac{8+1}{2} = 4.5',
                    explanation: 'With an even number of values, the median is the mean of the 4th and 5th values.',
                },
                {
                    stepNumber: 3,
                    description: 'Average the 4th and 5th values.',
                    workingLatex: '\\text{Median} = \\dfrac{13 + 14}{2} = 13.5',
                    explanation: 'The 4th value is 13 and the 5th value is 14.',
                },
            ],
            finalAnswer: '\\text{Median} = 13.5 \\text{ cm}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q7  Comparing mean, median and mode
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-007',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The daily wages (in £) of 6 workers in a small company are:\n\n\\( 80,\; 85,\; 80,\; 90,\; 85,\; 250 \\)\n\na) Calculate the mean, median and mode.\n\nb) Which average best represents the data? Give a reason.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'median', 'mode', 'comparing averages', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate the mean.',
                    workingLatex: '\\text{Mean} = \\dfrac{80 + 85 + 80 + 90 + 85 + 250}{6} = \\dfrac{670}{6} \\approx 111.67',
                    explanation: 'Sum the values and divide by 6.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the median.',
                    workingLatex: '\\text{Ordered: } 80,\; 80,\; 85,\; 85,\; 90,\; 250 \\quad \\Rightarrow \\quad \\text{Median} = \\dfrac{85 + 85}{2} = 85',
                    explanation: 'Order the data; the median is the average of the 3rd and 4th values.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the mode.',
                    workingLatex: '\\text{80 appears twice, 85 appears twice} \\quad \\Rightarrow \\quad \\text{bimodal: } 80 \\text{ and } 85',
                    explanation: 'Both 80 and 85 appear twice, so the data is bimodal.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Which average is best?',
                    workingLatex: '',
                    explanation: 'The median (£85) best represents the data. The mean is pulled up by the outlier £250, so it is not typical. The mode gives two values, which is less useful.',
                },
            ],
            finalAnswer: '\\text{Mean} \\approx £111.67, \\quad \\text{Median} = £85, \\quad \\text{Modes} = £80 \\text{ and } £85. \\text{ The median best represents the data.}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q8  Weighted mean
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-008',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A student scores 72 on Paper 1 (weighted 40%) and 85 on Paper 2 (weighted 60%).\n\nCalculate the student\'s overall weighted mean score.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['weighted mean', 'proportions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the weights.',
                    workingLatex: '\\text{Weighted mean} = 0.4 \\times 72 + 0.6 \\times 85 = 28.8 + 51 = 79.8',
                    explanation: 'Multiply each score by its weight and add the results.',
                },
            ],
            finalAnswer: '\\text{Weighted mean} = 79.8',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q9  Mean from a grouped frequency table (estimate)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-009',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The table shows the times (in minutes) taken by 30 students to complete a puzzle.\n\n| Time (\\(t\\) min) | \\(0 \\leq t < 5\\) | \\(5 \\leq t < 10\\) | \\(10 \\leq t < 15\\) | \\(15 \\leq t < 20\\) |\n|---|---|---|---|---|\n| Frequency | 4 | 12 | 10 | 4 |\n\nEstimate the mean time.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'grouped data', 'midpoints', 'estimate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the midpoints.',
                    workingLatex: '\\text{Midpoints: } 2.5,\; 7.5,\; 12.5,\; 17.5',
                    explanation: 'For each class, the midpoint is the average of the boundaries.',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate \\(fx\\) using midpoints.',
                    workingLatex: '\\sum fx = 4(2.5) + 12(7.5) + 10(12.5) + 4(17.5) = 10 + 90 + 125 + 70 = 295',
                    explanation: 'Multiply each midpoint by its frequency and sum.',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the estimated mean.',
                    workingLatex: '\\bar{x} = \\dfrac{295}{30} = 9.8\\overline{3}',
                    explanation: 'Divide by the total frequency.',
                },
            ],
            finalAnswer: '\\text{Estimated mean} \\approx 9.83 \\text{ minutes}',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // Q10  Effect of an outlier on the mean
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-010',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A dataset has 10 values with a mean of 15.\n\na) Calculate \\(\\sum x\\).\n\nb) An extra value of 48 is added. Calculate the new mean.\n\nc) Has the extra value had a large effect on the mean? Explain your answer.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'outlier', 'effect on mean', 'sum of values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find \\(\\sum x\\).',
                    workingLatex: '\\sum x = n \\times \\bar{x} = 10 \\times 15 = 150',
                    explanation: 'The sum of the values equals the number of values times the mean.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): New mean with 48 included.',
                    workingLatex: '\\text{New } \\sum x = 150 + 48 = 198, \\quad n = 11 \\quad \\Rightarrow \\quad \\bar{x} = \\dfrac{198}{11} = 18',
                    explanation: 'Add the new value to the sum and divide by 11.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Comment on the effect.',
                    workingLatex: '',
                    explanation: 'Yes, the mean increased from 15 to 18 (an increase of 3 or 20%). The value 48 is much larger than the rest of the data so it pulls the mean up significantly. This shows the mean is sensitive to outliers.',
                },
            ],
            finalAnswer: '\\text{(a) } \\sum x = 150, \\quad \\text{(b) New mean} = 18, \\quad \\text{(c) Yes, the outlier increased the mean by 20\\%.}',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q11–Q15)  Mean from raw data (varied contexts)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-011',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The test marks of 8 students are:\n\n\\( 65,\; 72,\; 58,\; 80,\; 74,\; 69,\; 85,\; 77 \\)\n\nCalculate the mean mark.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'raw data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add all values.',
                    workingLatex: '65 + 72 + 58 + 80 + 74 + 69 + 85 + 77 = 580',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by n = 8.',
                    workingLatex: '\\bar{x} = \\dfrac{580}{8} = 72.5',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 72.5',
        },
    },
    {
        id: 's3-012',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The weights (kg) of 6 parcels are:\n\n\\( 2.4,\; 3.1,\; 1.8,\; 2.7,\; 3.5,\; 2.9 \\)\n\nFind the mean weight, giving your answer to 3 s.f.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'decimals', 'raw data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add the values.',
                    workingLatex: '2.4 + 3.1 + 1.8 + 2.7 + 3.5 + 2.9 = 16.4',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 6.',
                    workingLatex: '\\bar{x} = \\dfrac{16.4}{6} \\approx 2.73 \\text{ kg}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} \\approx 2.73\\text{ kg}',
        },
    },
    {
        id: 's3-013',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The midday temperatures (°C) at 5 locations on one day are:\n\n\\( -3,\; 2,\; -1,\; 4,\; -2 \\)\n\nCalculate the mean temperature.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'negative values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sum the values carefully.',
                    workingLatex: '(-3) + 2 + (-1) + 4 + (-2) = 0',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 5.',
                    workingLatex: '\\bar{x} = \\dfrac{0}{5} = 0',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 0\\text{ °C}',
        },
    },
    {
        id: 's3-014',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A set of 12 values has a total of 156.\n\nFind the mean.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the formula.',
                    workingLatex: '\\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{156}{12} = 13',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 13',
        },
    },
    {
        id: 's3-015',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The mean of 15 numbers is 24.\n\nFind the total of the 15 numbers.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'reverse calculation', 'sum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the mean formula.',
                    workingLatex: '\\sum x = n \\times \\bar{x}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '\\sum x = 15 \\times 24 = 360',
                    explanation: '',
                },
            ],
            finalAnswer: '\\sum x = 360',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q16–Q20)  Median from raw data
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-016',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The reaction times (seconds) of 7 students are:\n\n\\( 0.24,\; 0.31,\; 0.22,\; 0.28,\; 0.35,\; 0.19,\; 0.26 \\)\n\nFind the median.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'odd count', 'ordering'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '0.19,\; 0.22,\; 0.24,\; 0.26,\; 0.28,\; 0.31,\; 0.35',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median position.',
                    workingLatex: '\\dfrac{7+1}{2} = 4 \\Rightarrow \\text{Median} = 4\\text{th value} = 0.26',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 0.26\\text{ s}',
        },
    },
    {
        id: 's3-017',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The ages of 10 members of a club are:\n\n\\( 18,\; 22,\; 25,\; 19,\; 21,\; 24,\; 20,\; 23,\; 26,\; 22 \\)\n\nFind the median age.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'even count', 'ordering'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '18,\; 19,\; 20,\; 21,\; 22,\; 22,\; 23,\; 24,\; 25,\; 26',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median position.',
                    workingLatex: '\\dfrac{10+1}{2} = 5.5 \\Rightarrow \\text{mean of 5th and 6th values}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Compute.',
                    workingLatex: '\\text{Median} = \\dfrac{22 + 22}{2} = 22',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 22\\text{ years}',
        },
    },
    {
        id: 's3-018',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The scores on a quiz were:\n\n\\( 8,\; 7,\; 9,\; 8,\; 6,\; 10,\; 8,\; 9 \\)\n\nFind the median score.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'repeated values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '6,\; 7,\; 8,\; 8,\; 8,\; 9,\; 9,\; 10',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median position.',
                    workingLatex: 'n = 8 \\Rightarrow \\text{mean of 4th and 5th values}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Compute.',
                    workingLatex: '\\text{Median} = \\dfrac{8 + 8}{2} = 8',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 8',
        },
    },
    {
        id: 's3-019',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A stem-and-leaf diagram shows the ages of 10 people.\n\n```\n2 | 3 5 7\n3 | 1 2 4 6 8\n4 | 0 3\n```\n\nKey: 2 | 3 means 23.\n\nFind the median age.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'stem and leaf'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'List the values.',
                    workingLatex: '23,\; 25,\; 27,\; 31,\; 32,\; 34,\; 36,\; 38,\; 40,\; 43',
                    explanation: 'Stem-and-leaf already gives ordered data.',
                },
                {
                    stepNumber: 2,
                    description: 'Median position.',
                    workingLatex: 'n = 10 \\Rightarrow \\text{mean of 5th and 6th values}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Compute.',
                    workingLatex: '\\text{Median} = \\dfrac{32 + 34}{2} = 33',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 33\\text{ years}',
        },
    },
    {
        id: 's3-020',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The heights (m) of 9 plants are:\n\n\\( 1.62,\; 1.58,\; 1.70,\; 1.65,\; 1.73,\; 1.68,\; 1.60,\; 1.64,\; 1.72 \\)\n\nFind the median height.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the values.',
                    workingLatex: '1.58,\; 1.60,\; 1.62,\; 1.64,\; 1.65,\; 1.68,\; 1.70,\; 1.72,\; 1.73',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median position.',
                    workingLatex: 'n = 9 \\Rightarrow \\text{5th value} = 1.65',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 1.65\\text{ m}',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q21–Q25)  Mode and modal value
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-021',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A survey asked 9 students their favourite colour:\n\nRed, Blue, Red, Green, Blue, Red, Yellow, Red, Blue.\n\nFind the mode.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'qualitative data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Count each colour.',
                    workingLatex: '\\text{Red: } 4,\; \\text{Blue: } 3,\; \\text{Green: } 1,\; \\text{Yellow: } 1',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Mode} = \\text{Red}',
        },
    },
    {
        id: 's3-022',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The shoe sizes sold in a shop one morning are:\n\n\\( 4,\; 5,\; 6,\; 5,\; 7,\; 6,\; 5,\; 6,\; 8,\; 7 \\)\n\nFind the mode(s).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'bimodal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Count the frequencies.',
                    workingLatex: '4\\!:\\!1,\; 5\\!:\\!3,\; 6\\!:\\!3,\; 7\\!:\\!2,\; 8\\!:\\!1',
                    explanation: 'Both 5 and 6 appear most often.',
                },
            ],
            finalAnswer: '\\text{Bimodal: } 5 \\text{ and } 6',
        },
    },
    {
        id: 's3-023',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Explain why the dataset \\(1,\; 2,\; 3,\; 4,\; 5,\; 6,\; 7\\) has no mode.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'no mode'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Explain.',
                    workingLatex: '',
                    explanation: 'Every value appears exactly once, so no value occurs more frequently than any other. The mode is undefined for this dataset.',
                },
            ],
            finalAnswer: 'No mode — every value has frequency 1.',
        },
    },
    {
        id: 's3-024',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of pets owned by 23 students is shown.\n\n| Pets | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 4 | 9 | 7 | 2 | 1 |\n\nState the mode.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the highest frequency.',
                    workingLatex: '\\max(f) = 9 \\text{ at } x = 1',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Mode} = 1 \\text{ pet}',
        },
    },
    {
        id: 's3-025',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A teacher tallies the number of siblings each of her 28 students has:\n\n\\( 0\\!:\\! \\cancel{|\\!\\!\\!\\!\\!|}\;||\\quad 1\\!:\\!\\cancel{|\\!\\!\\!\\!\\!|}\;\\cancel{|\\!\\!\\!\\!\\!|}\;|\\quad 2\\!:\\!\\cancel{|\\!\\!\\!\\!\\!|}\\quad 3\\!:\\!|||\\quad 4\\!:\\!|| \\)\n\nFrequencies: 0→7, 1→11, 2→5, 3→3, 4→2.\n\nState the mode.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'tally chart'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Pick the value with highest tally count.',
                    workingLatex: '\\max(f) = 11 \\text{ at } x = 1',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Mode} = 1 \\text{ sibling}',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q26–Q30)  Mean from frequency tables
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-026',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            '| \\(x\\) | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| \\(f\\) | 3 | 7 | 8 | 5 | 2 |\n\nCalculate the mean, giving your answer to 2 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table', 'discrete data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute Σf and Σfx.',
                    workingLatex: '\\sum f = 25,\\quad \\sum fx = 3 + 14 + 24 + 20 + 10 = 71',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\dfrac{71}{25} = 2.84',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 2.84',
        },
    },
    {
        id: 's3-027',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of children per household in a survey of 40 homes:\n\n| Children | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 8 | 15 | 12 | 4 | 1 |\n\nCalculate the mean number of children.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sums.',
                    workingLatex: '\\sum f = 40,\\quad \\sum fx = 0 + 15 + 24 + 12 + 4 = 55',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Mean.',
                    workingLatex: '\\bar{x} = \\dfrac{55}{40} = 1.375',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 1.375',
        },
    },
    {
        id: 's3-028',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The lengths (m) of ribbons cut for a project:\n\n| Length (\\(x\\)) | 0.5 | 1.0 | 1.5 | 2.0 |\n|---|---|---|---|---|\n| Frequency | 4 | 10 | 8 | 3 |\n\nCalculate the mean length.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table', 'decimals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute Σfx.',
                    workingLatex: '\\sum fx = 4(0.5) + 10(1.0) + 8(1.5) + 3(2.0) = 2 + 10 + 12 + 6 = 30',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by Σf = 25.',
                    workingLatex: '\\bar{x} = \\dfrac{30}{25} = 1.2 \\text{ m}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 1.2\\text{ m}',
        },
    },
    {
        id: 's3-029',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A frequency table contains an unknown frequency \\(k\\):\n\n| \\(x\\) | 10 | 20 | 30 |\n|---|---|---|---|\n| \\(f\\) | 5 | \\(k\\) | 3 |\n\nThe mean is 18. Find \\(k\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table', 'unknown frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express Σfx and Σf in terms of k.',
                    workingLatex: '\\sum fx = 50 + 20k + 90 = 140 + 20k,\\quad \\sum f = 8 + k',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Apply the mean = 18.',
                    workingLatex: '\\dfrac{140 + 20k}{8 + k} = 18 \\Rightarrow 140 + 20k = 144 + 18k',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Solve for k.',
                    workingLatex: '2k = 4 \\Rightarrow k = 2',
                    explanation: '',
                },
            ],
            finalAnswer: 'k = 2',
        },
    },
    {
        id: 's3-030',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of phone calls made per day by an office over 50 days:\n\n| Calls (\\(x\\)) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 10 | 15 | 12 | 8 | 5 |\n\nCalculate the mean number of calls per day.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute Σfx.',
                    workingLatex: '\\sum fx = 0 + 15 + 24 + 24 + 20 = 83',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Mean.',
                    workingLatex: '\\bar{x} = \\dfrac{83}{50} = 1.66',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} = 1.66',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q31–Q35)  Median and mode from frequency tables
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-031',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            '| \\(x\\) | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| \\(f\\) | 6 | 10 | 11 | 7 | 3 | 3 |\n\nFind the median.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'frequency table', 'cumulative frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Total frequency.',
                    workingLatex: '\\sum f = 40 \\Rightarrow \\text{median is mean of 20th and 21st values}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Cumulative frequencies.',
                    workingLatex: 'CF: 6,\; 16,\; 27,\; 34,\; 37,\; 40',
                    explanation: 'CF reaches 16 at x = 1 and 27 at x = 2, so positions 17–27 all take the value 2.',
                },
                {
                    stepNumber: 3,
                    description: 'Median.',
                    workingLatex: '\\text{20th and 21st values are both } 2 \\Rightarrow \\text{Median} = 2',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 2',
        },
    },
    {
        id: 's3-032',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same table as Q31:\n\n| \\(x\\) | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| \\(f\\) | 6 | 10 | 11 | 7 | 3 | 3 |\n\nState the mode.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mode', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Highest frequency.',
                    workingLatex: '\\max(f) = 11 \\text{ at } x = 2',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Mode} = 2',
        },
    },
    {
        id: 's3-033',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of goals scored by a football team in 30 matches:\n\n| Goals | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| Frequency | 5 | 9 | 8 | 5 | 2 | 1 |\n\nState the median, mode and mean.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'mode', 'mean', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Mode.',
                    workingLatex: '\\max(f) = 9 \\Rightarrow \\text{Mode} = 1',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median. CF = 5, 14, 22, 27, 29, 30.',
                    workingLatex: 'n = 30 \\Rightarrow \\text{mean of 15th and 16th values}',
                    explanation: 'CF reaches 14 at x = 1 and 22 at x = 2, so 15th and 16th values are 2.',
                },
                {
                    stepNumber: 3,
                    description: 'Mean.',
                    workingLatex: '\\sum fx = 0 + 9 + 16 + 15 + 8 + 5 = 53 \\Rightarrow \\bar{x} = \\dfrac{53}{30} \\approx 1.77',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Mode} = 1,\; \\text{Median} = 2,\; \\bar{x} \\approx 1.77',
        },
    },
    {
        id: 's3-034',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'In a frequency table, the cumulative frequencies so far are 3, 11, 18, 27, 36, 40. The median is the 20.5th value.\n\nWhich value of \\(x\\) contains the median, given \\(x\\) takes values 0, 1, 2, 3, 4, 5 (in order)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'cumulative frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate the median.',
                    workingLatex: '20.5 \\text{ lies between CF } 18 \\text{ (at } x=2) \\text{ and CF } 27 \\text{ (at } x=3)',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} = 3',
        },
    },
    {
        id: 's3-035',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The number of emails received per day by 100 workers one morning:\n\n| Emails (\\(x\\)) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|---|\n| Frequency | 8 | 14 | 22 | 25 | 17 | 9 | 5 |\n\nFind the median.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'frequency table', 'cumulative frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Median position.',
                    workingLatex: 'n = 100 \\Rightarrow \\text{mean of 50th and 51st values}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Cumulative frequencies.',
                    workingLatex: 'CF: 8,\; 22,\; 44,\; 69,\; 86,\; 95,\; 100',
                    explanation: '50th and 51st values fall where CF passes 50, i.e. at x = 3.',
                },
            ],
            finalAnswer: '\\text{Median} = 3',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 7  (Q36–Q40)  Estimated mean from grouped data
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-036',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The times (in minutes) taken to complete a task:\n\n| Time (\\(t\\)) | \\(0 \\leq t < 10\\) | \\(10 \\leq t < 20\\) | \\(20 \\leq t < 30\\) | \\(30 \\leq t < 40\\) |\n|---|---|---|---|---|\n| Frequency | 6 | 15 | 12 | 7 |\n\nEstimate the mean time.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['estimated mean', 'grouped data', 'midpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoints.',
                    workingLatex: '5,\; 15,\; 25,\; 35',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Σfx and Σf.',
                    workingLatex: '\\sum fx = 30 + 225 + 300 + 245 = 800,\\quad \\sum f = 40',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Estimated mean.',
                    workingLatex: '\\bar{x} = \\dfrac{800}{40} = 20',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x} \\approx 20\\text{ min}',
        },
    },
    {
        id: 's3-037',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The speeds (mph) of 60 cars passing a monitor:\n\n| Speed (\\(v\\)) | \\(20 \\leq v < 30\\) | \\(30 \\leq v < 40\\) | \\(40 \\leq v < 50\\) | \\(50 \\leq v < 60\\) | \\(60 \\leq v < 70\\) |\n|---|---|---|---|---|---|\n| Frequency | 5 | 18 | 22 | 10 | 5 |\n\nEstimate the mean speed, to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['estimated mean', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoints.',
                    workingLatex: '25,\; 35,\; 45,\; 55,\; 65',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Σfx.',
                    workingLatex: '125 + 630 + 990 + 550 + 325 = 2620',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Mean.',
                    workingLatex: '\\bar{v} = \\dfrac{2620}{60} \\approx 43.67\\text{ mph}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{v} \\approx 43.67\\text{ mph}',
        },
    },
    {
        id: 's3-038',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The ages of 60 attendees at a concert:\n\n| Age (\\(a\\)) | \\(0 \\leq a < 20\\) | \\(20 \\leq a < 40\\) | \\(40 \\leq a < 60\\) | \\(60 \\leq a < 80\\) |\n|---|---|---|---|---|\n| Frequency | 8 | 22 | 18 | 12 |\n\nEstimate the mean age, to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['estimated mean', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoints.',
                    workingLatex: '10,\; 30,\; 50,\; 70',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Σfx.',
                    workingLatex: '80 + 660 + 900 + 840 = 2480',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Mean.',
                    workingLatex: '\\bar{a} = \\dfrac{2480}{60} \\approx 41.33',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{a} \\approx 41.33\\text{ years}',
        },
    },
    {
        id: 's3-039',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A grouped table with unequal class widths:\n\n| Mass (\\(m\\), g) | \\(0 \\leq m < 50\\) | \\(50 \\leq m < 100\\) | \\(100 \\leq m < 200\\) | \\(200 \\leq m < 400\\) |\n|---|---|---|---|---|\n| Frequency | 12 | 20 | 15 | 3 |\n\nEstimate the mean mass.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['estimated mean', 'grouped data', 'unequal class widths'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoints.',
                    workingLatex: '25,\; 75,\; 150,\; 300',
                    explanation: 'Midpoints use the class boundaries regardless of class width.',
                },
                {
                    stepNumber: 2,
                    description: 'Σfx.',
                    workingLatex: '300 + 1500 + 2250 + 900 = 4950',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Mean.',
                    workingLatex: '\\bar{m} = \\dfrac{4950}{50} = 99 \\text{ g}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{m} \\approx 99\\text{ g}',
        },
    },
    {
        id: 's3-040',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Explain why the mean calculated from a grouped frequency table is only an estimate.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['estimated mean', 'grouped data', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reason.',
                    workingLatex: '',
                    explanation: 'Once data is grouped, the exact individual values are lost. To compute a mean, we assume every value in a class lies at the midpoint. This assumption is generally not exactly true, so the mean is an estimate.',
                },
            ],
            finalAnswer: 'Because midpoints are used in place of the true (unknown) individual values.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 8  (Q41–Q45)  Modal class and median by linear interpolation
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-041',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'From the table:\n\n| Length (\\(\\ell\\), cm) | \\(0\\leq\\ell<10\\) | \\(10\\leq\\ell<20\\) | \\(20\\leq\\ell<30\\) | \\(30\\leq\\ell<40\\) | \\(40\\leq\\ell<50\\) |\n|---|---|---|---|---|---|\n| Frequency | 5 | 12 | 25 | 20 | 18 |\n\nState the modal class.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['modal class', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify highest frequency.',
                    workingLatex: '\\max(f) = 25 \\text{ in } 20 \\leq \\ell < 30',
                    explanation: 'Note: with equal class widths we can identify the modal class directly by frequency.',
                },
            ],
            finalAnswer: '\\text{Modal class: } 20 \\leq \\ell < 30',
        },
    },
    {
        id: 's3-042',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same table as Q41, find the class containing the median.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median class', 'cumulative frequency', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Total frequency and CF.',
                    workingLatex: 'n = 80 \\Rightarrow \\tfrac{n}{2} = 40 \\\\ CF: 5,\; 17,\; 42,\; 62,\; 80',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Locate 40.',
                    workingLatex: '17 < 40 \\leq 42 \\Rightarrow \\text{class } 20 \\leq \\ell < 30',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median class: } 20 \\leq \\ell < 30',
        },
    },
    {
        id: 's3-043',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same grouped data as Q41:\n\n| Length (\\(\\ell\\), cm) | \\(0\\leq\\ell<10\\) | \\(10\\leq\\ell<20\\) | \\(20\\leq\\ell<30\\) | \\(30\\leq\\ell<40\\) | \\(40\\leq\\ell<50\\) |\n|---|---|---|---|---|---|\n| Frequency | 5 | 12 | 25 | 20 | 18 |\n\nUse linear interpolation to estimate the median.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'linear interpolation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Position of median.',
                    workingLatex: '\\tfrac{n}{2} = 40, \\quad \\text{lies in } 20 \\leq \\ell < 30 \\text{ (CF jumps from 17 to 42)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Interpolate.',
                    workingLatex: '\\text{Median} \\approx 20 + \\dfrac{40 - 17}{25} \\times 10 = 20 + \\dfrac{23}{25}\\times 10',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: '= 20 + 9.2 = 29.2',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} \\approx 29.2\\text{ cm}',
        },
    },
    {
        id: 's3-044',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same table as Q41, use linear interpolation to estimate Q₁.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quartile', 'linear interpolation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Q₁ position.',
                    workingLatex: '\\tfrac{n}{4} = 20, \\quad \\text{lies in } 20 \\leq \\ell < 30 \\text{ (CF 17 to 42)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Interpolate.',
                    workingLatex: 'Q_1 \\approx 20 + \\dfrac{20 - 17}{25} \\times 10 = 20 + 1.2 = 21.2',
                    explanation: '',
                },
            ],
            finalAnswer: 'Q_1 \\approx 21.2\\text{ cm}',
        },
    },
    {
        id: 's3-045',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Using the same table as Q41, use linear interpolation to estimate Q₃.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quartile', 'linear interpolation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Q₃ position.',
                    workingLatex: '\\tfrac{3n}{4} = 60, \\quad \\text{lies in } 30 \\leq \\ell < 40 \\text{ (CF 42 to 62)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Interpolate.',
                    workingLatex: 'Q_3 \\approx 30 + \\dfrac{60 - 42}{20} \\times 10 = 30 + 9 = 39',
                    explanation: '',
                },
            ],
            finalAnswer: 'Q_3 \\approx 39\\text{ cm}',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 9  (Q46–Q50)  Combined and weighted means
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-046',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Group A contains 20 students with mean score 15.\n\nGroup B contains 30 students with mean score 18.\n\nFind the combined mean.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['combined mean', 'weighted average'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Total of each group.',
                    workingLatex: '\\sum_A x = 20 \\times 15 = 300,\\quad \\sum_B x = 30 \\times 18 = 540',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Combine.',
                    workingLatex: '\\bar{x}_{\\text{combined}} = \\dfrac{300 + 540}{20 + 30} = \\dfrac{840}{50} = 16.8',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x}_{\\text{combined}} = 16.8',
        },
    },
    {
        id: 's3-047',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A student\'s final grade is weighted as:\n\n- Paper 1 (50%): 68\n- Paper 2 (30%): 72\n- Coursework (20%): 80\n\nCalculate the final weighted mean.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['weighted mean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply weights.',
                    workingLatex: '0.5(68) + 0.3(72) + 0.2(80) = 34 + 21.6 + 16 = 71.6',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Weighted mean} = 71.6',
        },
    },
    {
        id: 's3-048',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Class A has 25 students with mean 55.\nClass B has 15 students with mean 63.\n\nFind the combined mean for the 40 students.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['combined mean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Totals.',
                    workingLatex: '25 \\times 55 + 15 \\times 63 = 1375 + 945 = 2320',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by total count.',
                    workingLatex: '\\bar{x} = \\dfrac{2320}{40} = 58',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x}_{\\text{combined}} = 58',
        },
    },
    {
        id: 's3-049',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A course has three modules weighted 40%, 35%, 25%. A student scores 73, 68 and 85 respectively.\n\nFind the weighted mean.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['weighted mean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Weighted sum.',
                    workingLatex: '0.40(73) + 0.35(68) + 0.25(85) = 29.2 + 23.8 + 21.25 = 74.25',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Weighted mean} = 74.25',
        },
    },
    {
        id: 's3-050',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Three groups of students took a test:\n\n- Group 1: 10 students, mean 72\n- Group 2: 15 students, mean 68\n- Group 3: 25 students, mean 75\n\nFind the combined mean for all 50 students.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['combined mean', 'three groups'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Totals.',
                    workingLatex: '10 \\times 72 + 15 \\times 68 + 25 \\times 75 = 720 + 1020 + 1875 = 3615',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Combined mean.',
                    workingLatex: '\\bar{x} = \\dfrac{3615}{50} = 72.3',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{x}_{\\text{combined}} = 72.3',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 10  (Q51–Q55)  Missing values / reverse problems
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-051',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Six numbers are 7, 12, 9, \\(x\\), 14, 10. Their mean is 11.\n\nFind \\(x\\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'missing value', 'reverse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sum needed.',
                    workingLatex: '\\sum x = 6 \\times 11 = 66',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Solve for x.',
                    workingLatex: '7 + 12 + 9 + x + 14 + 10 = 66 \\Rightarrow 52 + x = 66 \\Rightarrow x = 14',
                    explanation: '',
                },
            ],
            finalAnswer: 'x = 14',
        },
    },
    {
        id: 's3-052',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Five values have a mean of 20. Four of the values are 15, 18, 22 and 25.\n\nFind the fifth value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'missing value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Total needed.',
                    workingLatex: '5 \\times 20 = 100',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Subtract the known values.',
                    workingLatex: '100 - (15 + 18 + 22 + 25) = 100 - 80 = 20',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Fifth value} = 20',
        },
    },
    {
        id: 's3-053',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Nine values have a mean of 25. A tenth value is added and the mean increases to 27.\n\nFind the tenth value.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'adding a value', 'reverse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Original sum.',
                    workingLatex: '\\sum_{9} x = 9 \\times 25 = 225',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'New sum.',
                    workingLatex: '\\sum_{10} x = 10 \\times 27 = 270',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Difference.',
                    workingLatex: '\\text{Added value} = 270 - 225 = 45',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Added value} = 45',
        },
    },
    {
        id: 's3-054',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The mean of 8 numbers is 18. One number is removed and the mean of the remaining 7 is 19.\n\nFind the number that was removed.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'removing a value', 'reverse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Original sum.',
                    workingLatex: '8 \\times 18 = 144',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'New sum.',
                    workingLatex: '7 \\times 19 = 133',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Removed value.',
                    workingLatex: '144 - 133 = 11',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Removed value} = 11',
        },
    },
    {
        id: 's3-055',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A frequency table contains an unknown frequency \\(k\\):\n\n| \\(x\\) | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| \\(f\\) | 3 | 5 | \\(k\\) | 4 | 2 |\n\nThe mean is 2.8. Find \\(k\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'frequency table', 'unknown frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express Σfx and Σf.',
                    workingLatex: '\\sum fx = 3 + 10 + 3k + 16 + 10 = 39 + 3k,\\quad \\sum f = 14 + k',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Apply mean = 2.8.',
                    workingLatex: '\\dfrac{39 + 3k}{14 + k} = 2.8 \\Rightarrow 39 + 3k = 2.8(14 + k)',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: '39 + 3k = 39.2 + 2.8k \\Rightarrow 0.2k = 0.2 \\Rightarrow k = 1',
                    explanation: '',
                },
            ],
            finalAnswer: 'k = 1',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 11  (Q56–Q60)  Outliers, comparisons, transformations
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's3-056',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Consider the dataset: \\(3,\; 4,\; 4,\; 5,\; 5,\; 5,\; 6,\; 7,\; 8,\; 50\\).\n\na) Calculate the mean and median.\n\nb) Which average best represents the data? Explain.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'median', 'outliers', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Mean.',
                    workingLatex: '\\bar{x} = \\dfrac{3+4+4+5+5+5+6+7+8+50}{10} = \\dfrac{97}{10} = 9.7',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Median.',
                    workingLatex: '\\text{Median} = \\dfrac{5 + 5}{2} = 5',
                    explanation: 'The 5th and 6th values are both 5.',
                },
                {
                    stepNumber: 3,
                    description: 'Interpretation.',
                    workingLatex: '',
                    explanation: 'The median (5) best represents the typical value. The value 50 is an outlier which inflates the mean well above any of the other 9 values.',
                },
            ],
            finalAnswer: '\\bar{x} = 9.7,\; \\text{Median} = 5. \\text{ The median is the better summary.}',
        },
    },
    {
        id: 's3-057',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'Consider the data: \\(10,\; 12,\; 14,\; 15,\; 16,\; 18,\; 100\\).\n\na) Calculate the mean and median with the outlier 100 included.\n\nb) Calculate the mean and median without the outlier.\n\nc) Compare how each measure changed.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'median', 'outliers', 'comparison'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): With outlier.',
                    workingLatex: '\\bar{x} = \\dfrac{185}{7} \\approx 26.4,\\quad \\text{Median} = 15',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Without outlier.',
                    workingLatex: '\\bar{x} = \\dfrac{85}{6} \\approx 14.2,\\quad \\text{Median} = \\dfrac{14+15}{2} = 14.5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Compare.',
                    workingLatex: '',
                    explanation: 'The mean changed significantly (26.4 → 14.2), but the median barely changed (15 → 14.5). The median is far less affected by outliers than the mean.',
                },
            ],
            finalAnswer: 'Mean changes a lot; median is resistant to outliers.',
        },
    },
    {
        id: 's3-058',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'A dataset \\(x\\) has mean 20 and mode 18. Each value is transformed using \\(y = x + 5\\).\n\nState the new mean and new mode.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'mode', 'linear transformation', 'adding constant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Effect on mean and mode.',
                    workingLatex: '\\bar{y} = \\bar{x} + 5 = 25,\\quad \\text{mode}(y) = \\text{mode}(x) + 5 = 23',
                    explanation: 'Adding a constant shifts every value (and therefore the mean and mode) by the same amount.',
                },
            ],
            finalAnswer: '\\bar{y} = 25,\; \\text{mode} = 23',
        },
    },
    {
        id: 's3-059',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The mean of a set of values \\(x\\) is 30. A new variable is defined as \\(y = x + 4\\).\n\nState \\(\\bar{y}\\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'linear transformation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the rule.',
                    workingLatex: '\\bar{y} = \\bar{x} + 4 = 34',
                    explanation: '',
                },
            ],
            finalAnswer: '\\bar{y} = 34',
        },
    },
    {
        id: 's3-060',
        topicRef: 's3',
        topicTitle: 'Means, Median and Mode',
        difficulty: 'Foundation',
        questionText:
            'The mean of a set of values \\(x\\) is 12. Let \\(y = 2x + 3\\).\n\nState \\(\\bar{y}\\), and explain.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'linear transformation', 'scaling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply rule for linear transformation.',
                    workingLatex: '\\bar{y} = 2\\bar{x} + 3 = 2(12) + 3 = 27',
                    explanation: 'If every value is doubled and then increased by 3, the mean follows the same transformation.',
                },
            ],
            finalAnswer: '\\bar{y} = 27',
        },
    },
];
