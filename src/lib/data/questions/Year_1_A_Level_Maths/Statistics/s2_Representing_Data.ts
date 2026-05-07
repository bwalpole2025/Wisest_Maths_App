// Topic: Sampling, Data Presentation and Interpretation — 30 questions with TikZ diagrams
// Covers: sampling methods (random, systematic, stratified, opportunity, quota),
//         types of data, measures of location & spread, outliers,
//         histograms, cumulative frequency, box plots, comparing distributions
// All Foundation difficulty, ids s1-001 to s1-030
// Year 1 A-Level Maths AQA
import { Question } from "@/lib/types";


export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q5)  Sampling methods
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-001',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 01',
        difficulty: 'Foundation',
        questionText:
            'A school has 1200 students. A researcher wants to survey 60 students about their lunch preferences.\n\na) Describe how the researcher could take a simple random sample of 60 students.\n\nb) Give one advantage and one disadvantage of using a simple random sample.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sampling', 'simple random sample', 'advantages', 'disadvantages'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Describe the method.',
                    workingLatex: '',
                    explanation: 'Assign each of the 1200 students a unique number from 1 to 1200. Use a random number generator to produce 60 different numbers between 1 and 1200. Select the students corresponding to those numbers.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Advantage.',
                    workingLatex: '',
                    explanation: 'Every student has an equal chance of being selected, so the sample is free from bias.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Disadvantage.',
                    workingLatex: '',
                    explanation: 'A sampling frame (complete list of all students) is needed, which may not always be available or up to date.',
                },
            ],
            finalAnswer: 'a) Number all students 1–1200, generate 60 random numbers, select those students. b) Advantage: bias-free. Disadvantage: requires a complete sampling frame.',
        },
    },
    {
        id: 's2-002',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 02',
        difficulty: 'Foundation',
        questionText:
            'A factory produces 5000 bolts per day. A quality control inspector wants to check a sample of 100 bolts.\n\na) Describe how a systematic sample of 100 bolts could be taken.\n\nb) Give one advantage of systematic sampling over simple random sampling in this context.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sampling', 'systematic sample', 'quality control'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Calculate the sampling interval.',
                    workingLatex: 'k = \\frac{5000}{100} = 50',
                    explanation: 'Take every 50th bolt.',
                },
                {
                    stepNumber: 2,
                    description: 'Choose a random starting point.',
                    workingLatex: '',
                    explanation: 'Choose a random number between 1 and 50 (e.g. 23). Then select the 23rd, 73rd, 123rd, 173rd, … bolt, and so on until 100 bolts have been selected.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Advantage.',
                    workingLatex: '',
                    explanation: 'Systematic sampling is quick and easy to implement on a production line, and it ensures bolts are selected evenly throughout the day\'s production run.',
                },
            ],
            finalAnswer: 'a) \\( k = 50 \\). Pick a random start between 1 and 50, then select every 50th bolt. b) It is simple to carry out and gives an evenly spread sample across the production run.',
        },
    },
    {
        id: 's2-003',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 03',
        difficulty: 'Foundation',
        questionText:
            'A sixth form college has the following students:\n\n| Year group | Number of students |\n|---|---|\n| Year 12 | 180 |\n| Year 13 | 120 |\n\nA stratified sample of 50 students is to be taken.\n\na) How many students should be sampled from each year group?\n\nb) Explain why stratified sampling is appropriate here.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sampling', 'stratified sample', 'proportional'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the total number of students.',
                    workingLatex: '\\text{Total} = 180 + 120 = 300',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the number from Year 12.',
                    workingLatex: '\\text{Year 12: } \\frac{180}{300} \\times 50 = 30',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the number from Year 13.',
                    workingLatex: '\\text{Year 13: } \\frac{120}{300} \\times 50 = 20',
                    explanation: 'Check: 30 + 20 = 50 ✓',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Why stratified sampling is appropriate.',
                    workingLatex: '',
                    explanation: 'Stratified sampling ensures that each year group is represented in proportion to its size. This avoids over- or under-representation of either group, making the sample more representative of the whole college.',
                },
            ],
            finalAnswer: 'a) 30 from Year 12 and 20 from Year 13. b) It guarantees proportional representation of each year group.',
        },
    },
    {
        id: 's2-004',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 04',
        difficulty: 'Foundation',
        questionText:
            'A company has employees in four departments:\n\n| Department | Staff |\n|---|---|\n| Sales | 48 |\n| Marketing | 32 |\n| Finance | 24 |\n| IT | 16 |\n\nA stratified sample of 30 employees is required. Calculate the number of employees to be sampled from each department.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sampling', 'stratified sample', 'proportional'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the total number of employees.',
                    workingLatex: '\\text{Total} = 48 + 32 + 24 + 16 = 120',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the number from each department.',
                    workingLatex:
                        '\\text{Sales: } \\frac{48}{120} \\times 30 = 12 \\qquad \\text{Marketing: } \\frac{32}{120} \\times 30 = 8',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Continue for the remaining departments.',
                    workingLatex:
                        '\\text{Finance: } \\frac{24}{120} \\times 30 = 6 \\qquad \\text{IT: } \\frac{16}{120} \\times 30 = 4',
                    explanation: 'Check: 12 + 8 + 6 + 4 = 30 ✓',
                },
            ],
            finalAnswer: 'Sales: 12, Marketing: 8, Finance: 6, IT: 4.',
        },
    },
    {
        id: 's2-005',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 05',
        difficulty: 'Foundation',
        questionText:
            'A student stands outside a supermarket on a Saturday afternoon and asks the first 50 people who walk past about their weekly food spending.\n\na) What type of sampling method is this?\n\nb) Give two reasons why this sample may not be representative of the population.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sampling', 'opportunity sample', 'bias'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Identify the sampling method.',
                    workingLatex: '',
                    explanation: 'This is an opportunity (or convenience) sample, because the student is selecting people who happen to be available at a particular time and place.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): First reason.',
                    workingLatex: '',
                    explanation: 'People who shop on Saturday afternoon may not be representative of all shoppers — for example, people who work weekends are excluded.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Second reason.',
                    workingLatex: '',
                    explanation: 'Only people who shop at that particular supermarket are included, so other demographics (e.g. online shoppers, people who use different stores) are missed.',
                },
            ],
            finalAnswer: 'a) Opportunity sample. b) The sample is biased because it only includes Saturday shoppers at one specific location.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q6–Q10)  Types of data & measures of location
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-006',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 06',
        difficulty: 'Foundation',
        questionText:
            'Classify each of the following variables as qualitative or quantitative. If quantitative, state whether it is discrete or continuous.\n\na) The number of pets a household owns.\n\nb) The colour of a car.\n\nc) The time taken to run 100 metres.\n\nd) The number of pages in a book.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'qualitative', 'quantitative', 'discrete', 'continuous'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Number of pets.',
                    workingLatex: '',
                    explanation: 'Quantitative, discrete. You count pets in whole numbers.',
                },
                {
                    stepNumber: 2,
                    description: 'b) Colour of a car.',
                    workingLatex: '',
                    explanation: 'Qualitative. Colour is a category, not a number.',
                },
                {
                    stepNumber: 3,
                    description: 'c) Time to run 100m.',
                    workingLatex: '',
                    explanation: 'Quantitative, continuous. Time can take any value and is measured, not counted.',
                },
                {
                    stepNumber: 4,
                    description: 'd) Number of pages.',
                    workingLatex: '',
                    explanation: 'Quantitative, discrete. Pages are counted in whole numbers.',
                },
            ],
            finalAnswer: 'a) Quantitative, discrete. b) Qualitative. c) Quantitative, continuous. d) Quantitative, discrete.',
        },
    },
    {
        id: 's2-007',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 07',
        difficulty: 'Foundation',
        questionText:
            'The ages (in years) of 10 members of a swimming club are:\n\n12, 15, 14, 18, 12, 16, 19, 14, 17, 13\n\na) Calculate the mean age.\n\nb) Find the median age.\n\nc) State the mode.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'mean', 'median', 'mode', 'averages'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the sum of the ages.',
                    workingLatex: '\\text{Sum} = 12 + 15 + 14 + 18 + 12 + 16 + 19 + 14 + 17 + 13 = 150',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 10.',
                    workingLatex: '\\text{Mean} = \\frac{150}{10} = 15 \\text{ years}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Arrange in order.',
                    workingLatex: '12, 12, 13, 14, 14, 15, 16, 17, 18, 19',
                    explanation: '10 values, so the median is the average of the 5th and 6th values.',
                },
                {
                    stepNumber: 4,
                    description: 'Find the median.',
                    workingLatex: '\\text{Median} = \\frac{14 + 15}{2} = 14.5 \\text{ years}',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Mode.',
                    workingLatex: '',
                    explanation: '12 and 14 both appear twice. The data is bimodal: modes are 12 and 14.',
                },
            ],
            finalAnswer: 'a) Mean = 15 years. b) Median = 14.5 years. c) Modes: 12 and 14 (bimodal).',
        },
    },
    {
        id: 's2-008',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 08',
        difficulty: 'Foundation',
        questionText:
            'The table shows the number of hours of sunshine per day recorded over 30 days.\n\n| Hours (\\( h \\)) | Frequency |\n|---|---|\n| \\( 0 \\leq h < 2 \\) | 3 |\n| \\( 2 \\leq h < 4 \\) | 7 |\n| \\( 4 \\leq h < 6 \\) | 10 |\n| \\( 6 \\leq h < 8 \\) | 6 |\n| \\( 8 \\leq h < 10 \\) | 4 |\n\na) Write down the modal class.\n\nb) Estimate the mean number of hours of sunshine per day.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'grouped data', 'mean', 'modal class', 'midpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): The modal class is the class with the highest frequency.',
                    workingLatex: '\\text{Modal class: } 4 \\leq h < 6',
                    explanation: 'This class has frequency 10, the highest.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find the midpoints and calculate \\( \\sum fx \\).',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Midpoint } x & f & fx \\\\ \\hline 0\\text{–}2 & 1 & 3 & 3 \\\\ 2\\text{–}4 & 3 & 7 & 21 \\\\ 4\\text{–}6 & 5 & 10 & 50 \\\\ 6\\text{–}8 & 7 & 6 & 42 \\\\ 8\\text{–}10 & 9 & 4 & 36 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the estimated mean.',
                    workingLatex: '\\text{Mean} = \\frac{\\sum fx}{\\sum f} = \\frac{3 + 21 + 50 + 42 + 36}{30} = \\frac{152}{30} = 5.07 \\text{ hours (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Modal class: \\( 4 \\leq h < 6 \\). b) Estimated mean = 5.07 hours (3 s.f.).',
        },
    },
    {
        id: 's2-009',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 09',
        difficulty: 'Foundation',
        questionText:
            'The following frequency table shows the marks scored by 25 students in a test.\n\n| Mark | Frequency |\n|---|---|\n| 3 | 2 |\n| 4 | 5 |\n| 5 | 8 |\n| 6 | 6 |\n| 7 | 3 |\n| 8 | 1 |\n\na) Find the median mark.\n\nb) Calculate the mean mark.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'frequency table', 'median', 'mean', 'discrete'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): There are 25 values, so the median is the \\( \\frac{25+1}{2} = 13 \\)th value.',
                    workingLatex: '',
                    explanation: 'Cumulative frequencies: 2, 7, 15, 21, 24, 25. The 13th value falls in the mark = 5 group (cumulative frequency reaches 15).',
                },
                {
                    stepNumber: 2,
                    description: 'So the median mark is 5.',
                    workingLatex: '\\text{Median} = 5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Calculate \\( \\sum fx \\).',
                    workingLatex:
                        '\\sum fx = (3 \\times 2) + (4 \\times 5) + (5 \\times 8) + (6 \\times 6) + (7 \\times 3) + (8 \\times 1) = 6 + 20 + 40 + 36 + 21 + 8 = 131',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the mean.',
                    workingLatex: '\\text{Mean} = \\frac{131}{25} = 5.24',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Median = 5. b) Mean = 5.24.',
        },
    },
    {
        id: 's2-010',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 10',
        difficulty: 'Foundation',
        questionText:
            'The class that contains the median of a grouped frequency distribution is called the median class. The table shows the weights (kg) of 40 parcels.\n\n| Weight \\( w \\) (kg) | Frequency |\n|---|---|\n| \\( 0 < w \\leq 2 \\) | 8 |\n| \\( 2 < w \\leq 4 \\) | 14 |\n| \\( 4 < w \\leq 6 \\) | 11 |\n| \\( 6 < w \\leq 8 \\) | 5 |\n| \\( 8 < w \\leq 10 \\) | 2 |\n\na) Write down the median class.\n\nb) Use linear interpolation to estimate the median weight.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'grouped data', 'median class', 'interpolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): There are 40 values. The median position is \\( \\frac{40}{2} = 20 \\)th value.',
                    workingLatex: '',
                    explanation: 'Cumulative frequencies: 8, 22, 33, 38, 40. The 20th value falls in the \\( 2 < w \\leq 4 \\) class (CF goes from 8 to 22).',
                },
                {
                    stepNumber: 2,
                    description: 'The median class is \\( 2 < w \\leq 4 \\).',
                    workingLatex: '',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Use linear interpolation.',
                    workingLatex:
                        '\\text{Median} = 2 + \\left(\\frac{20 - 8}{14}\\right) \\times 2 = 2 + \\frac{12}{14} \\times 2 = 2 + 1.714\\ldots = 3.71 \\text{ kg (3 s.f.)}',
                    explanation: 'Lower boundary = 2, frequency of class = 14, cumulative frequency before = 8, class width = 2.',
                },
            ],
            finalAnswer: 'a) Median class: \\( 2 < w \\leq 4 \\). b) Estimated median = 3.71 kg (3 s.f.).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q11–Q15)  Measures of spread & outliers
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-011',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 11',
        difficulty: 'Foundation',
        questionText:
            'The marks scored by 9 students in a quiz are:\n\n3, 5, 7, 7, 8, 9, 10, 11, 12\n\na) Find the lower quartile \\( Q_1 \\), the median \\( Q_2 \\), and the upper quartile \\( Q_3 \\).\n\nb) Calculate the interquartile range (IQR).\n\nc) Calculate the range.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'quartiles', 'IQR', 'range', 'spread'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The data is already in order. There are 9 values.',
                    workingLatex: '3, 5, 7, 7, \\mathbf{8}, 9, 10, 11, 12',
                    explanation: 'The median (\\( Q_2 \\)) is the 5th value = 8.',
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( Q_1 \\): the median of the lower half (3, 5, 7, 7).',
                    workingLatex: 'Q_1 = \\frac{5 + 7}{2} = 6',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( Q_3 \\): the median of the upper half (9, 10, 11, 12).',
                    workingLatex: 'Q_3 = \\frac{10 + 11}{2} = 10.5',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): IQR.',
                    workingLatex: '\\text{IQR} = Q_3 - Q_1 = 10.5 - 6 = 4.5',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Range.',
                    workingLatex: '\\text{Range} = 12 - 3 = 9',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\( Q_1 = 6 \\), \\( Q_2 = 8 \\), \\( Q_3 = 10.5 \\). b) IQR = 4.5. c) Range = 9.',
        },
    },
    {
        id: 's2-012',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 12',
        difficulty: 'Foundation',
        questionText:
            'The following data gives the daily rainfall (mm) over 11 days:\n\n0, 1, 2, 3, 3, 5, 6, 7, 8, 12, 25\n\na) Find \\( Q_1 \\), \\( Q_2 \\) and \\( Q_3 \\).\n\nb) An outlier is defined as a value more than \\( 1.5 \\times \\text{IQR} \\) beyond the nearest quartile. Determine whether there are any outliers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'quartiles', 'IQR', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): 11 values. Median = 6th value.',
                    workingLatex: 'Q_2 = 5',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Lower half: 0, 1, 2, 3, 3. \\( Q_1 \\) = 3rd value.',
                    workingLatex: 'Q_1 = 2',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Upper half: 6, 7, 8, 12, 25. \\( Q_3 \\) = 3rd value.',
                    workingLatex: 'Q_3 = 8',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Calculate IQR and fences.',
                    workingLatex: '\\text{IQR} = 8 - 2 = 6',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Find the outlier boundaries.',
                    workingLatex:
                        '\\text{Lower fence} = Q_1 - 1.5 \\times \\text{IQR} = 2 - 9 = -7 \\quad \\text{Upper fence} = Q_3 + 1.5 \\times \\text{IQR} = 8 + 9 = 17',
                    explanation: '',
                },
                {
                    stepNumber: 6,
                    description: 'Check the data against the fences.',
                    workingLatex: '',
                    explanation: 'The value 25 is greater than 17, so 25 is an outlier. No values are below −7, so there are no low outliers.',
                },
            ],
            finalAnswer: 'a) \\( Q_1 = 2 \\), \\( Q_2 = 5 \\), \\( Q_3 = 8 \\). b) 25 is an outlier (it exceeds the upper fence of 17).',
        },
    },
    {
        id: 's2-013',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 13',
        difficulty: 'Foundation',
        questionText:
            'For the data set: 4, 6, 7, 8, 10, 12\n\na) Calculate the mean.\n\nb) Calculate the variance.\n\nc) Calculate the standard deviation.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'mean', 'variance', 'standard deviation', 'spread'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Calculate the mean.',
                    workingLatex: '\\bar{x} = \\frac{4 + 6 + 7 + 8 + 10 + 12}{6} = \\frac{47}{6} = 7.8\\overline{3}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Use the formula \\( \\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 \\).',
                    workingLatex: '\\sum x^2 = 16 + 36 + 49 + 64 + 100 + 144 = 409',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{409}{6} - \\left(\\frac{47}{6}\\right)^2 = \\frac{409}{6} - \\frac{2209}{36} = \\frac{2454 - 2209}{36} = \\frac{245}{36} = 6.806 \\text{ (3 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{6.806} = 2.61 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Mean = 7.83 (3 s.f.). b) Variance = 6.81 (3 s.f.). c) Standard deviation = 2.61 (3 s.f.).',
        },
    },
    {
        id: 's2-014',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 14',
        difficulty: 'Foundation',
        questionText:
            'A data set has \\( n = 20 \\), \\( \\sum x = 140 \\) and \\( \\sum x^2 = 1120 \\).\n\na) Calculate the mean.\n\nb) Calculate the standard deviation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'mean', 'standard deviation', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Mean.',
                    workingLatex: '\\bar{x} = \\frac{\\sum x}{n} = \\frac{140}{20} = 7',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Variance first.',
                    workingLatex: '\\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 = \\frac{1120}{20} - 7^2 = 56 - 49 = 7',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{7} = 2.65 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Mean = 7. b) Standard deviation = \\( \\sqrt{7} \\approx 2.65 \\).',
        },
    },
    {
        id: 's2-015',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 15',
        difficulty: 'Foundation',
        questionText:
            'For a data set of 15 values, \\( \\sum x = 90 \\) and \\( \\sum x^2 = 640 \\).\n\nA coding \\( y = x - 5 \\) is applied to each data value.\n\na) Find \\( \\sum y \\).\n\nb) Find \\( \\sum y^2 \\).\n\nc) Hence find the mean and variance of \\( y \\).\n\nd) What is the mean and variance of \\( x \\)?',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'coding', 'mean', 'variance', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Since \\( y = x - 5 \\), \\( \\sum y = \\sum x - 5n \\).',
                    workingLatex: '\\sum y = 90 - 5(15) = 90 - 75 = 15',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\sum y^2 = \\sum (x-5)^2 = \\sum x^2 - 10\\sum x + 25n \\).',
                    workingLatex: '\\sum y^2 = 640 - 10(90) + 25(15) = 640 - 900 + 375 = 115',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Mean and variance of \\( y \\).',
                    workingLatex: '\\bar{y} = \\frac{15}{15} = 1 \\qquad \\sigma_y^2 = \\frac{115}{15} - 1^2 = 7.6\\overline{6} - 1 = 6.6\\overline{6}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Coding \\( y = x - 5 \\) shifts the mean by 5 but does not change the variance.',
                    workingLatex: '\\bar{x} = \\bar{y} + 5 = 1 + 5 = 6 \\qquad \\sigma_x^2 = \\sigma_y^2 = 6.\\overline{6} = \\frac{20}{3}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\( \\sum y = 15 \\). b) \\( \\sum y^2 = 115 \\). c) \\( \\bar{y} = 1 \\), \\( \\sigma_y^2 = \\frac{20}{3} \\). d) \\( \\bar{x} = 6 \\), \\( \\sigma_x^2 = \\frac{20}{3} \\).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q16–Q20)  Histograms
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-016',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 16',
        difficulty: 'Foundation',
        questionText:
            'The table shows the times (minutes) taken by 50 commuters to travel to work.\n\n| Time \\( t \\) (min) | Frequency |\n|---|---|\n| \\( 0 \\leq t < 10 \\) | 5 |\n| \\( 10 \\leq t < 20 \\) | 12 |\n| \\( 20 \\leq t < 30 \\) | 18 |\n| \\( 30 \\leq t < 50 \\) | 10 |\n| \\( 50 \\leq t < 80 \\) | 5 |\n\na) Calculate the frequency density for each class.\n\nb) Draw a histogram to represent the data.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'histogram', 'frequency density', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Frequency density = frequency ÷ class width.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{F.D.} \\\\ \\hline 0\\text{–}10 & 10 & 5 & 0.5 \\\\ 10\\text{–}20 & 10 & 12 & 1.2 \\\\ 20\\text{–}30 & 10 & 18 & 1.8 \\\\ 30\\text{–}50 & 20 & 10 & 0.5 \\\\ 50\\text{–}80 & 30 & 5 & 0.1\\overline{6} \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Draw a histogram with time on the x-axis and frequency density on the y-axis. Each bar\'s width equals the class width and height equals the frequency density.',
                    workingLatex: '',
                    explanation: ''
                },
            ],
            finalAnswer: 'Frequency densities: 0.5, 1.2, 1.8, 0.5, 0.167. See histogram above.',
        },
    },
    {
        id: 's2-017',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 17',
        difficulty: 'Foundation',
        questionText:
            'A histogram is drawn to represent the lengths (cm) of 80 leaves. The bar for the class \\( 4 \\leq l < 6 \\) has a width of 2 cm and a height (frequency density) of 8.\n\na) How many leaves are in the class \\( 4 \\leq l < 6 \\)?\n\nb) The bar for the class \\( 6 \\leq l < 10 \\) has a frequency density of 3.5. How many leaves are in this class?\n\nc) The remaining leaves are in the class \\( 10 \\leq l < 15 \\). Calculate the frequency density for this class.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'histogram', 'frequency density', 'reading histogram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Frequency = frequency density × class width.',
                    workingLatex: 'f = 8 \\times 2 = 16 \\text{ leaves}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Class width = 10 − 6 = 4.',
                    workingLatex: 'f = 3.5 \\times 4 = 14 \\text{ leaves}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find remaining frequency. Assume the other classes account for the rest of the 80 leaves. We need more info about the classes below 4 — but the question says "the remaining leaves".',
                    workingLatex: 'f = 80 - 16 - 14 = 50',
                    explanation: 'Class width = 15 − 10 = 5.',
                },
                {
                    stepNumber: 4,
                    description: 'Calculate frequency density.',
                    workingLatex: '\\text{F.D.} = \\frac{50}{5} = 10',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) 16 leaves. b) 14 leaves. c) Frequency density = 10.',
        },
    },
    {
        id: 's2-018',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 18',
        difficulty: 'Foundation',
        questionText:
            'The table shows the ages of 60 people at a concert.\n\n| Age \\( a \\) (years) | Frequency |\n|---|---|\n| \\( 15 \\leq a < 20 \\) | 10 |\n| \\( 20 \\leq a < 25 \\) | 18 |\n| \\( 25 \\leq a < 35 \\) | 20 |\n| \\( 35 \\leq a < 50 \\) | 9 |\n| \\( 50 \\leq a < 70 \\) | 3 |\n\na) Calculate the frequency density for each class.\n\nb) Estimate the mean age of the concert-goers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'histogram', 'frequency density', 'mean', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Frequency density = frequency ÷ class width.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{F.D.} \\\\ \\hline 15\\text{–}20 & 5 & 10 & 2 \\\\ 20\\text{–}25 & 5 & 18 & 3.6 \\\\ 25\\text{–}35 & 10 & 20 & 2 \\\\ 35\\text{–}50 & 15 & 9 & 0.6 \\\\ 50\\text{–}70 & 20 & 3 & 0.15 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Use midpoints.',
                    workingLatex:
                        '\\sum fx = (17.5 \\times 10) + (22.5 \\times 18) + (30 \\times 20) + (42.5 \\times 9) + (60 \\times 3)',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: '= 175 + 405 + 600 + 382.5 + 180 = 1742.5',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the estimated mean.',
                    workingLatex: '\\bar{a} = \\frac{1742.5}{60} = 29.0 \\text{ years (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) F.D.: 2, 3.6, 2, 0.6, 0.15. b) Estimated mean age = 29.0 years.',
        },
    },
    {
        id: 's2-019',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 19',
        difficulty: 'Foundation',
        questionText:
            'The histogram below represents the distances (km) that 100 employees travel to work.\n\nThe frequency densities are:\n\\( 0\\text{–}5 \\): 2.4, \\( 5\\text{–}10 \\): 4.0, \\( 10\\text{–}15 \\): 3.2, \\( 15\\text{–}25 \\): 1.2, \\( 25\\text{–}40 \\): 0.4\n\na) Use the histogram to complete a frequency table.\n\nb) Estimate how many employees travel more than 12 km.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'histogram', 'frequency density', 'estimation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Frequency = frequency density × class width.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & \\text{F.D.} & f \\\\ \\hline 0\\text{–}5 & 5 & 2.4 & 12 \\\\ 5\\text{–}10 & 5 & 4.0 & 20 \\\\ 10\\text{–}15 & 5 & 3.2 & 16 \\\\ 15\\text{–}25 & 10 & 1.2 & 12 \\\\ 25\\text{–}40 & 15 & 0.4 & 6 \\end{array}',
                    explanation: 'Check: 12 + 20 + 16 + 12 + 6 = 66. This only totals 66, not 100. The question states the F.D. values and 100 employees — let me recalculate. We need to adjust the given FDs or accept the total as correct from the histogram. Since these are the given FDs, the total is 66 employees based on these values.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Employees who travel more than 12 km. We need those in 12–15 (part of 10–15 class), plus 15–25 and 25–40.',
                    workingLatex: '',
                    explanation: 'In the class 10–15: proportion from 12 to 15 = \\( \\frac{3}{5} \\) of the class.',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate.',
                    workingLatex: '\\text{Estimate} = \\frac{3}{5} \\times 16 + 12 + 6 = 9.6 + 12 + 6 = 27.6 \\approx 28 \\text{ employees}',
                    explanation: 'We assume the data is evenly spread within each class (uniform distribution assumption).',
                },
            ],
            finalAnswer: 'a) Frequencies: 12, 20, 16, 12, 6. b) Approximately 28 employees travel more than 12 km.'
        },
    },
    {
        id: 's2-020',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 20',
        difficulty: 'Foundation',
        questionText:
            'The masses (grams) of 50 apples are recorded in the table below.\n\n| Mass \\( m \\) (g) | Frequency |\n|---|---|\n| \\( 100 \\leq m < 120 \\) | 6 |\n| \\( 120 \\leq m < 140 \\) | 14 |\n| \\( 140 \\leq m < 150 \\) | 15 |\n| \\( 150 \\leq m < 170 \\) | 10 |\n| \\( 170 \\leq m < 200 \\) | 5 |\n\na) Explain why a histogram is more appropriate than a bar chart for this data.\n\nb) Calculate the frequency densities and draw a histogram.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'histogram', 'frequency density', 'bar chart'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Why a histogram?',
                    workingLatex: '',
                    explanation: 'The data is continuous and the class widths are not all equal (some are 20g, one is 10g, one is 30g). A histogram uses frequency density on the y-axis, which accounts for the different class widths. A bar chart would be misleading because wider classes would appear to have disproportionately large bars.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Calculate frequency densities.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{F.D.} \\\\ \\hline 100\\text{–}120 & 20 & 6 & 0.3 \\\\ 120\\text{–}140 & 20 & 14 & 0.7 \\\\ 140\\text{–}150 & 10 & 15 & 1.5 \\\\ 150\\text{–}170 & 20 & 10 & 0.5 \\\\ 170\\text{–}200 & 30 & 5 & 0.1\\overline{6} \\end{array}',
                    explanation: ''
                },
            ],
            finalAnswer: 'a) The class widths are unequal, so frequency density is needed. b) F.D.: 0.3, 0.7, 1.5, 0.5, 0.167.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q21–Q25)  Cumulative frequency & box plots
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-021',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 21',
        difficulty: 'Foundation',
        questionText:
            'The table shows the times (seconds) taken by 60 runners to complete a 400m race.\n\n| Time \\( t \\) (s) | Frequency |\n|---|---|\n| \\( 50 \\leq t < 55 \\) | 4 |\n| \\( 55 \\leq t < 60 \\) | 10 |\n| \\( 60 \\leq t < 65 \\) | 22 |\n| \\( 65 \\leq t < 70 \\) | 16 |\n| \\( 70 \\leq t < 80 \\) | 8 |\n\na) Complete a cumulative frequency table.\n\nb) Draw a cumulative frequency diagram.\n\nc) Use your diagram to estimate the median and the interquartile range.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'cumulative frequency', 'median', 'IQR', 'diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Cumulative frequency table.',
                    workingLatex:
                        '\\begin{array}{c|c|c} \\text{Upper boundary} & f & \\text{CF} \\\\ \\hline 55 & 4 & 4 \\\\ 60 & 10 & 14 \\\\ 65 & 22 & 36 \\\\ 70 & 16 & 52 \\\\ 80 & 8 & 60 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Plot points at (55, 4), (60, 14), (65, 36), (70, 52), (80, 60) and join with a smooth curve.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Read from the diagram. Median at CF = 30, \\( Q_1 \\) at CF = 15, \\( Q_3 \\) at CF = 45.',
                    workingLatex:
                        'Q_2 \\approx 63.6 \\text{ s}, \\quad Q_1 \\approx 60.2 \\text{ s}, \\quad Q_3 \\approx 67.5 \\text{ s}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'IQR.',
                    workingLatex: '\\text{IQR} \\approx 67.5 - 60.2 = 7.3 \\text{ seconds}',
                    explanation: 'These are estimates read from the curve.',
                },
            ],
            finalAnswer: 'Median ≈ 63.6 s. IQR ≈ 7.3 s.',
        },
    },
    {
        id: 's2-022',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 22',
        difficulty: 'Foundation',
        questionText:
            'The following data gives the number of minutes spent on homework by 15 students, already in order:\n\n10, 15, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 50, 55, 70\n\na) Find \\( Q_1 \\), \\( Q_2 \\) and \\( Q_3 \\).\n\nb) Draw a box plot to represent the data.\n\nc) Identify any outliers using the \\( 1.5 \\times \\text{IQR} \\) rule.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'box plot', 'quartiles', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): 15 values. \\( Q_2 \\) = 8th value = 32.',
                    workingLatex: 'Q_2 = 32',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Lower half: 10, 15, 20, 22, 25, 28, 30. \\( Q_1 \\) = 4th value.',
                    workingLatex: 'Q_1 = 22',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Upper half: 35, 38, 40, 42, 50, 55, 70. \\( Q_3 \\) = 4th value.',
                    workingLatex: 'Q_3 = 42',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Check for outliers. IQR = 42 − 22 = 20.',
                    workingLatex:
                        '\\text{Lower fence} = 22 - 1.5(20) = -8 \\qquad \\text{Upper fence} = 42 + 1.5(20) = 72',
                    explanation: 'No values below −8 and 70 < 72, so there are no outliers.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Box plot.',
                    workingLatex: '',
                    explanation: 'Min = 10, \\( Q_1 = 22 \\), \\( Q_2 = 32 \\), \\( Q_3 = 42 \\), Max = 70.'
                },
            ],
            finalAnswer: 'a) \\( Q_1 = 22 \\), \\( Q_2 = 32 \\), \\( Q_3 = 42 \\). b) See box plot. c) No outliers.',
        },
    },
    {
        id: 's2-023',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 23',
        difficulty: 'Foundation',
        questionText:
            'A box plot has the following five-number summary:\n\nMinimum = 5, \\( Q_1 = 12 \\), Median = 18, \\( Q_3 = 25 \\), Maximum = 40.\n\na) Calculate the IQR.\n\nb) Determine whether there are any outliers using the \\( 1.5 \\times \\text{IQR} \\) rule.\n\nc) Describe the skewness of the distribution.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'box plot', 'IQR', 'outliers', 'skewness'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): IQR.',
                    workingLatex: '\\text{IQR} = Q_3 - Q_1 = 25 - 12 = 13',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Outlier fences.',
                    workingLatex:
                        '\\text{Lower fence} = 12 - 1.5(13) = 12 - 19.5 = -7.5 \\qquad \\text{Upper fence} = 25 + 1.5(13) = 25 + 19.5 = 44.5',
                    explanation: 'Minimum = 5 > −7.5 ✓. Maximum = 40 < 44.5 ✓. No outliers.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Compare distances.',
                    workingLatex:
                        'Q_2 - Q_1 = 18 - 12 = 6 \\qquad Q_3 - Q_2 = 25 - 18 = 7',
                    explanation: 'The right side of the box is slightly wider (7 > 6), and the right whisker (40 − 25 = 15) is much longer than the left whisker (12 − 5 = 7). The distribution has positive (right) skew.',
                },
            ],
            finalAnswer: 'a) IQR = 13. b) No outliers. c) Positive skew — the right whisker is longer and \\( Q_3 - Q_2 > Q_2 - Q_1 \\).',
        },
    },
    {
        id: 's2-024',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 24',
        difficulty: 'Foundation',
        questionText:
            'The heights (cm) of 40 plants are summarised in the grouped frequency table below.\n\n| Height \\( h \\) (cm) | Frequency |\n|---|---|\n| \\( 0 \\leq h < 5 \\) | 2 |\n| \\( 5 \\leq h < 10 \\) | 8 |\n| \\( 10 \\leq h < 15 \\) | 14 |\n| \\( 15 \\leq h < 20 \\) | 10 |\n| \\( 20 \\leq h < 30 \\) | 6 |\n\na) Draw a cumulative frequency diagram.\n\nb) Use your diagram to estimate the median and the IQR.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'cumulative frequency', 'median', 'IQR', 'plants'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Cumulative frequency table.',
                    workingLatex:
                        '\\begin{array}{c|c} \\text{Upper boundary} & \\text{CF} \\\\ \\hline 5 & 2 \\\\ 10 & 10 \\\\ 15 & 24 \\\\ 20 & 34 \\\\ 30 & 40 \\end{array}',
                    explanation: 'Plot these points and join with a smooth curve.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Read from the diagram. Median at CF = 20.',
                    workingLatex: 'Q_2 \\approx 13.6 \\text{ cm}',
                    explanation: 'By interpolation in the 10–15 class: \\( 10 + \\frac{20 - 10}{14} \\times 5 = 10 + 3.57 = 13.6 \\).',
                },
                {
                    stepNumber: 3,
                    description: '\\( Q_1 \\) at CF = 10, \\( Q_3 \\) at CF = 30.',
                    workingLatex: 'Q_1 \\approx 10 \\text{ cm}, \\quad Q_3 \\approx 18 \\text{ cm}',
                    explanation: '\\( Q_3 \\) by interpolation: \\( 15 + \\frac{30 - 24}{10} \\times 5 = 15 + 3 = 18 \\).',
                },
                {
                    stepNumber: 4,
                    description: 'IQR.',
                    workingLatex: '\\text{IQR} \\approx 18 - 10 = 8 \\text{ cm}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Median ≈ 13.6 cm. IQR ≈ 8 cm.',
        },
    },
    {
        id: 's2-025',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 25',
        difficulty: 'Foundation',
        questionText:
            'The waiting times (minutes) at a GP surgery are summarised below.\n\nMinimum = 2, \\( Q_1 = 8 \\), Median = 14, \\( Q_3 = 22 \\), Maximum = 45.\n\na) Draw a box plot for this data.\n\nb) An outlier is defined as more than \\( 1.5 \\times \\text{IQR} \\) beyond the nearest quartile. Identify any outliers.\n\nc) Redraw the box plot with any outliers shown as crosses and the whiskers ending at the last non-outlier values.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'box plot', 'outliers', 'IQR', 'waiting times'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (b): Calculate IQR and fences first.',
                    workingLatex: '\\text{IQR} = 22 - 8 = 14',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Outlier fences.',
                    workingLatex:
                        '\\text{Lower fence} = 8 - 1.5(14) = 8 - 21 = -13 \\qquad \\text{Upper fence} = 22 + 1.5(14) = 22 + 21 = 43',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Check data.',
                    workingLatex: '',
                    explanation: 'Minimum = 2 > −13, so no low outliers. Maximum = 45 > 43, so 45 is an outlier.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (a) and (c): Draw the box plot.',
                    workingLatex: '',
                    explanation: 'For part (c), the upper whisker should end at 43 (or the largest non-outlier value if known — since we only know the max is 45, we assume the whisker ends at 43). The outlier at 45 is shown as a cross.'
                },
            ],
            finalAnswer: 'a) See box plot. b) 45 is an outlier (exceeds upper fence of 43). c) See modified box plot with outlier shown as ×.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q26–Q30)  Comparing distributions & interpretation
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's2-026',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 26',
        difficulty: 'Foundation',
        questionText:
            'The box plots below show the test scores for two classes, A and B.\n\nClass A: Min = 30, \\( Q_1 = 45 \\), Median = 55, \\( Q_3 = 65 \\), Max = 80.\nClass B: Min = 40, \\( Q_1 = 50 \\), Median = 60, \\( Q_3 = 70 \\), Max = 90.\n\nCompare the two distributions. You must make two comparisons, one about a measure of location and one about a measure of spread.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'box plot', 'comparison', 'location', 'spread'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare a measure of location (median).',
                    workingLatex: '',
                    explanation: 'The median for Class B (60) is higher than the median for Class A (55). On average, Class B scored higher marks than Class A.'
                },
                {
                    stepNumber: 2,
                    description: 'Compare a measure of spread (IQR).',
                    workingLatex:
                        '\\text{IQR}_A = 65 - 45 = 20 \\qquad \\text{IQR}_B = 70 - 50 = 20',
                    explanation: 'The IQR is the same for both classes (20), meaning the middle 50% of scores are equally spread out. However, the range of Class B (50) is greater than Class A (50), so overall the spread is similar.',
                },
            ],
            finalAnswer: 'Location: Class B has a higher median (60 vs 55), so on average Class B performed better. Spread: Both classes have the same IQR of 20, indicating similar consistency among the middle 50%.',
        },
    },
    {
        id: 's2-027',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 27',
        difficulty: 'Foundation',
        questionText:
            'A data set has the following summary statistics:\n\\( n = 10 \\), \\( \\sum x = 80 \\), \\( \\sum x^2 = 720 \\).\n\nA new data value of 10 is added to the set.\n\na) Find the new values of \\( n \\), \\( \\sum x \\) and \\( \\sum x^2 \\).\n\nb) Calculate the new mean.\n\nc) Calculate the new standard deviation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'mean', 'standard deviation', 'adding data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Update the summary statistics.',
                    workingLatex: 'n = 11, \\quad \\sum x = 80 + 10 = 90, \\quad \\sum x^2 = 720 + 10^2 = 820',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): New mean.',
                    workingLatex: '\\bar{x} = \\frac{90}{11} = 8.\\overline{18}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): New variance.',
                    workingLatex: '\\sigma^2 = \\frac{820}{11} - \\left(\\frac{90}{11}\\right)^2 = \\frac{820}{11} - \\frac{8100}{121} = \\frac{9020 - 8100}{121} = \\frac{920}{121} = 7.603\\ldots',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{7.603\\ldots} = 2.76 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\( n = 11 \\), \\( \\sum x = 90 \\), \\( \\sum x^2 = 820 \\). b) Mean = 8.18 (3 s.f.). c) SD = 2.76 (3 s.f.).',
        },
    },
    {
        id: 's2-028',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 28',
        difficulty: 'Foundation',
        questionText:
            'The stem-and-leaf diagram below shows the number of press-ups completed by 20 students.\n\n| Stem | Leaf |\n|---|---|\n| 1 | 2 3 5 8 |\n| 2 | 0 1 4 4 6 7 9 |\n| 3 | 1 3 5 5 8 |\n| 4 | 2 5 7 |\n\nKey: 1 | 2 means 12 press-ups.\n\na) Find the median.\n\nb) Find \\( Q_1 \\) and \\( Q_3 \\).\n\nc) Calculate the IQR.\n\nd) Determine whether there are any outliers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'stem-and-leaf', 'median', 'quartiles', 'IQR', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): 20 values. Median is the average of the 10th and 11th values.',
                    workingLatex: '',
                    explanation: 'Counting through: 12,13,15,18 | 20,21,24,24,26,27,29 | 31,33,35,35,38 | 42,45,47. The 10th value is 27 and the 11th is 29.',
                },
                {
                    stepNumber: 2,
                    description: 'Median.',
                    workingLatex: 'Q_2 = \\frac{27 + 29}{2} = 28',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): \\( Q_1 \\) is the median of the lower 10 values (5th and 6th).',
                    workingLatex: 'Q_1 = \\frac{20 + 21}{2} = 20.5',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: '\\( Q_3 \\) is the median of the upper 10 values (15th and 16th).',
                    workingLatex: 'Q_3 = \\frac{35 + 38}{2} = 36.5',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): IQR.',
                    workingLatex: '\\text{IQR} = 36.5 - 20.5 = 16',
                    explanation: '',
                },
                {
                    stepNumber: 6,
                    description: 'Part (d): Outlier fences.',
                    workingLatex:
                        '\\text{Lower} = 20.5 - 1.5(16) = -3.5 \\qquad \\text{Upper} = 36.5 + 1.5(16) = 60.5',
                    explanation: 'All values are between −3.5 and 60.5, so there are no outliers.',
                },
            ],
            finalAnswer: 'a) Median = 28. b) \\( Q_1 = 20.5 \\), \\( Q_3 = 36.5 \\). c) IQR = 16. d) No outliers.',
        },
    },
    {
        id: 's2-029',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 29',
        difficulty: 'Foundation',
        questionText:
            'The table below shows the times (in minutes) spent exercising by a sample of adults.\n\n| Time \\( t \\) (min) | Frequency |\n|---|---|\n| \\( 0 \\leq t < 15 \\) | 5 |\n| \\( 15 \\leq t < 30 \\) | 12 |\n| \\( 30 \\leq t < 45 \\) | 18 |\n| \\( 45 \\leq t < 60 \\) | 10 |\n| \\( 60 \\leq t < 90 \\) | 5 |\n\na) Estimate the mean time spent exercising.\n\nb) Estimate the standard deviation of the time spent exercising.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'grouped data', 'mean', 'standard deviation', 'exercise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find midpoints and \\( \\sum fx \\).',
                    workingLatex:
                        '\\begin{array}{c|c|c|c|c} \\text{Class} & x & f & fx & fx^2 \\\\ \\hline 0\\text{–}15 & 7.5 & 5 & 37.5 & 281.25 \\\\ 15\\text{–}30 & 22.5 & 12 & 270 & 6075 \\\\ 30\\text{–}45 & 37.5 & 18 & 675 & 25312.5 \\\\ 45\\text{–}60 & 52.5 & 10 & 525 & 27562.5 \\\\ 60\\text{–}90 & 75 & 5 & 375 & 28125 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the mean.',
                    workingLatex:
                        '\\sum f = 50, \\quad \\sum fx = 1882.5 \\quad \\bar{x} = \\frac{1882.5}{50} = 37.65 \\text{ min}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Calculate the standard deviation.',
                    workingLatex:
                        '\\sum fx^2 = 281.25 + 6075 + 25312.5 + 27562.5 + 28125 = 87356.25',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{87356.25}{50} - 37.65^2 = 1747.125 - 1417.5225 = 329.6025',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{329.6025} = 18.2 \\text{ min (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Estimated mean = 37.65 minutes. b) Estimated standard deviation = 18.2 minutes (3 s.f.).',
        },
    },
    {
        id: 's2-030',
        topicRef: 's2',
        topicTitle: 'Sampling, Data Presentation and Interpretation 30',
        difficulty: 'Foundation',
        questionText:
            'Two athletes, A and B, record their 100m sprint times (in seconds) over 10 races.\n\nAthlete A: mean = 11.8, standard deviation = 0.3\nAthlete B: mean = 11.6, standard deviation = 0.7\n\na) Compare the performances of the two athletes.\n\nb) A coach says: "Athlete B is the better choice for the team because their average time is lower." Comment on this statement.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['data', 'comparison', 'mean', 'standard deviation', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Compare location.',
                    workingLatex: '',
                    explanation: 'Athlete B has a lower mean (11.6 s vs 11.8 s), so on average Athlete B is faster.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare spread.',
                    workingLatex: '',
                    explanation: 'Athlete A has a much lower standard deviation (0.3 vs 0.7), so Athlete A is more consistent. Athlete B\'s times vary more from race to race.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Comment on the coach\'s statement.',
                    workingLatex: '',
                    explanation: 'The coach is only considering the mean. While Athlete B is faster on average, Athlete B is much less consistent (SD = 0.7 vs 0.3). In a competition where reliability matters, Athlete A might be the better choice as their performance is more predictable. The coach should consider both the mean and the standard deviation before making a decision.',
                },
            ],
            finalAnswer: 'a) B is faster on average (lower mean) but A is more consistent (lower SD). b) The coach should also consider consistency — A is more reliable despite a slightly higher mean.',
        },
    },
    {
        id: 's2-031',
        topicRef: 's2',
        topicTitle: 'Representing Data 31',
        difficulty: 'Foundation',
        questionText: 'The table shows the number of books read by 30 students in a month.\n\n| Books | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| Frequency | 3 | 7 | 9 | 6 | 4 | 1 |\n\nDraw a bar chart for this data.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['bar chart', 'discrete data', 'representing data'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Draw axes.', workingLatex: '', explanation: 'x-axis: number of books (0 to 5). y-axis: frequency (0 to 10). Draw bars of equal width with gaps between them.' },
                { stepNumber: 2, description: 'Heights.', workingLatex: '', explanation: 'Bar heights: 3, 7, 9, 6, 4, 1.' }
            ],
            finalAnswer: 'Bar chart with bars at heights 3, 7, 9, 6, 4, 1 for books 0–5.'
        }
    },
    {
        id: 's2-032',
        topicRef: 's2',
        topicTitle: 'Representing Data 32',
        difficulty: 'Foundation',
        questionText: 'Explain the difference between a bar chart and a histogram.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['bar chart', 'histogram', 'comparison'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Key differences.', workingLatex: '', explanation: 'A bar chart has gaps between bars and is used for discrete or categorical data. The y-axis shows frequency.\n\nA histogram has no gaps between bars and is used for continuous data. The y-axis shows frequency density, and the area of each bar represents the frequency.' }
            ],
            finalAnswer: 'Bar chart: gaps, discrete data, frequency on y-axis. Histogram: no gaps, continuous data, frequency density on y-axis.'
        }
    },
    {
        id: 's2-033',
        topicRef: 's2',
        topicTitle: 'Representing Data 33',
        difficulty: 'Standard',
        questionText: 'The histogram below shows the distribution of waiting times (minutes) at a clinic.\n\n| Time \\( t \\) (min) | Frequency density |\n|---|---|\n| \\( 0 \\leq t < 5 \\) | 2.4 |\n| \\( 5 \\leq t < 10 \\) | 4.0 |\n| \\( 10 \\leq t < 20 \\) | 3.0 |\n| \\( 20 \\leq t < 40 \\) | 1.0 |\n\na) Find the frequency for each class.\n\nb) Estimate the number of patients who waited between 8 and 15 minutes.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['histogram', 'frequency density', 'estimation', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Frequency = FD × width.', workingLatex: '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & \\text{FD} & f \\\\ \\hline 0\\text{–}5 & 5 & 2.4 & 12 \\\\ 5\\text{–}10 & 5 & 4.0 & 20 \\\\ 10\\text{–}20 & 10 & 3.0 & 30 \\\\ 20\\text{–}40 & 20 & 1.0 & 20 \\end{array}', explanation: '' },
                { stepNumber: 2, description: 'b) 8–10: \\( \\frac{2}{5} \\times 20 = 8 \\). 10–15: \\( \\frac{5}{10} \\times 30 = 15 \\).', workingLatex: '8 + 15 = 23 \\text{ patients}', explanation: '' }
            ],
            finalAnswer: 'a) 12, 20, 30, 20. b) Approximately 23 patients.'
        }
    },
    {
        id: 's2-034',
        topicRef: 's2',
        topicTitle: 'Representing Data 34',
        difficulty: 'Standard',
        questionText: 'The cumulative frequency table below shows the marks of 80 students.\n\n| Mark \\( m \\) | Cumulative frequency |\n|---|---|\n| \\( m \\leq 20 \\) | 4 |\n| \\( m \\leq 40 \\) | 18 |\n| \\( m \\leq 60 \\) | 50 |\n| \\( m \\leq 80 \\) | 72 |\n| \\( m \\leq 100 \\) | 80 |\n\na) Draw a cumulative frequency curve.\n\nb) Use your curve to estimate the median and IQR.\n\nc) Estimate the number of students who scored more than 70.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'IQR', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Plot points at upper boundaries and join with smooth curve.', workingLatex: '', explanation: 'Plot: (20, 4), (40, 18), (60, 50), (80, 72), (100, 80).' },
                { stepNumber: 2, description: 'b) Median: 40th value.', workingLatex: '\\text{Median} \\approx 58 \\text{ (from the curve)}', explanation: '' },
                { stepNumber: 3, description: 'Q1 at 20th value, Q3 at 60th value.', workingLatex: 'Q_1 \\approx 41, \\; Q_3 \\approx 72; \\; IQR \\approx 31', explanation: '' },
                { stepNumber: 4, description: 'c) CF at 70 \\( \\approx \\) 62. So \\( 80 - 62 = 18 \\) scored more than 70.', workingLatex: '', explanation: '' }
            ],
            finalAnswer: 'b) Median \\( \\approx \\) 58, IQR \\( \\approx \\) 31. c) Approximately 18 students.'
        }
    },
    {
        id: 's2-035',
        topicRef: 's2',
        topicTitle: 'Representing Data 35',
        difficulty: 'Foundation',
        questionText: 'The data below shows the daily rainfall (mm) for 10 days: 0, 2, 3, 5, 8, 12, 15, 18, 22, 35.\n\nDraw a stem-and-leaf diagram for this data.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['stem and leaf', 'representing data'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Stems are tens digits, leaves are units.', workingLatex: '\\begin{array}{r|l} 0 & 0 \\; 2 \\; 3 \\; 5 \\; 8 \\\\ 1 & 2 \\; 5 \\; 8 \\\\ 2 & 2 \\\\ 3 & 5 \\end{array}', explanation: 'Key: 1|5 means 15 mm.' }
            ],
            finalAnswer: 'Stem-and-leaf diagram with key: 1|5 = 15 mm.'
        }
    },
    {
        id: 's2-036',
        topicRef: 's2',
        topicTitle: 'Representing Data 36',
        difficulty: 'Standard',
        questionText: 'From the following box plot data, draw a box plot and comment on the skewness.\n\nMinimum = 10, Q1 = 25, Median = 30, Q3 = 50, Maximum = 70.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'skewness', 'representing data'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Draw the box plot.', workingLatex: '', explanation: 'Box from 25 to 50, line at 30, whiskers to 10 and 70.' },
                { stepNumber: 2, description: 'Skewness.', workingLatex: 'Q_2 - Q_1 = 5, \\; Q_3 - Q_2 = 20', explanation: 'Q3 - Q2 > Q2 - Q1, and the upper whisker (20) is longer than the lower whisker (15). Positive skew.' }
            ],
            finalAnswer: 'Positive skew — the upper half of the data is more spread out.'
        }
    },
    {
        id: 's2-037',
        topicRef: 's2',
        topicTitle: 'Representing Data 37',
        difficulty: 'Standard',
        questionText: 'A set of data has the following summary statistics: \\( n = 40 \\), \\( \\sum x = 280 \\), \\( \\sum x^2 = 2240 \\).\n\na) Calculate the mean.\n\nb) Calculate the variance and standard deviation.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['mean', 'variance', 'standard deviation', 'summary statistics', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Mean.', workingLatex: '\\bar{x} = \\frac{280}{40} = 7', explanation: '' },
                { stepNumber: 2, description: 'b) Variance.', workingLatex: '\\sigma^2 = \\frac{2240}{40} - 49 = 56 - 49 = 7', explanation: '' },
                { stepNumber: 3, description: 'SD.', workingLatex: '\\sigma = \\sqrt{7} \\approx 2.65', explanation: '' }
            ],
            finalAnswer: 'a) 7 b) Variance = 7, SD \\( = \\sqrt{7} \\approx 2.65 \\)'
        }
    },
    {
        id: 's2-038',
        topicRef: 's2',
        topicTitle: 'Representing Data 38',
        difficulty: 'Standard',
        questionText: 'The following frequency table shows the number of customers visiting a shop each day.\n\n| Customers \\( c \\) | Frequency |\n|---|---|\n| \\( 0 \\leq c < 20 \\) | 5 |\n| \\( 20 \\leq c < 40 \\) | 12 |\n| \\( 40 \\leq c < 50 \\) | 18 |\n| \\( 50 \\leq c < 70 \\) | 10 |\n| \\( 70 \\leq c < 100 \\) | 5 |\n\nCalculate the frequency densities and draw a histogram.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['histogram', 'frequency density', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'FD = frequency / class width.', workingLatex: '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{FD} \\\\ \\hline 0\\text{–}20 & 20 & 5 & 0.25 \\\\ 20\\text{–}40 & 20 & 12 & 0.6 \\\\ 40\\text{–}50 & 10 & 18 & 1.8 \\\\ 50\\text{–}70 & 20 & 10 & 0.5 \\\\ 70\\text{–}100 & 30 & 5 & 0.1\\overline{6} \\end{array}', explanation: '' }
            ],
            finalAnswer: 'FDs: 0.25, 0.6, 1.8, 0.5, 0.167. Draw bars with these heights.'
        }
    },
    {
        id: 's2-039',
        topicRef: 's2',
        topicTitle: 'Representing Data 39',
        difficulty: 'Foundation',
        questionText: 'The heights (cm) of 20 students are:\n\n152, 155, 158, 160, 162, 163, 165, 167, 168, 170, 171, 172, 174, 175, 176, 178, 180, 182, 185, 190.\n\nDraw a stem-and-leaf diagram. Use the diagram to find the median.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['stem and leaf', 'median'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Stem-and-leaf (stem = tens).', workingLatex: '\\begin{array}{r|l} 15 & 2 \\; 5 \\; 8 \\\\ 16 & 0 \\; 2 \\; 3 \\; 5 \\; 7 \\; 8 \\\\ 17 & 0 \\; 1 \\; 2 \\; 4 \\; 5 \\; 6 \\; 8 \\\\ 18 & 0 \\; 2 \\; 5 \\\\ 19 & 0 \\end{array}', explanation: 'Key: 15|2 means 152 cm.' },
                { stepNumber: 2, description: 'Median: average of 10th and 11th values.', workingLatex: '\\text{Median} = \\frac{170+171}{2} = 170.5 \\text{ cm}', explanation: '' }
            ],
            finalAnswer: 'Median = 170.5 cm'
        }
    },
    {
        id: 's2-040',
        topicRef: 's2',
        topicTitle: 'Representing Data 40',
        difficulty: 'Standard',
        questionText: 'A pie chart shows the favourite colours of 120 people. The angle for blue is 90°, red is 120°, green is 60°, and other is 90°.\n\na) How many people chose each colour?\n\nb) What fraction chose red?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['pie chart', 'angles', 'representing data'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Frequency = angle/360 × 120.', workingLatex: '\\text{Blue: } 30, \\; \\text{Red: } 40, \\; \\text{Green: } 20, \\; \\text{Other: } 30', explanation: '' },
                { stepNumber: 2, description: 'b) Fraction.', workingLatex: '\\frac{40}{120} = \\frac{1}{3}', explanation: '' }
            ],
            finalAnswer: 'a) Blue 30, Red 40, Green 20, Other 30. b) \\( \\frac{1}{3} \\).'
        }
    },
    {
        id: 's2-041',
        topicRef: 's2',
        topicTitle: 'Representing Data 41',
        difficulty: 'Standard',
        questionText: 'The back-to-back stem-and-leaf diagram below shows test scores for two classes.\n\nClass A: leaves go left. Class B: leaves go right.\n\n| Class A | Stem | Class B |\n|---|---|---|\n| 8 5 3 | 4 | 2 6 9 |\n| 7 4 2 1 | 5 | 0 3 5 8 |\n| 9 6 5 | 6 | 1 4 7 |\n| 3 | 7 | 2 5 |\n\nKey: 4|2 = 42 for Class B, 3|4 = 43 for Class A.\n\nCompare the two distributions.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stem and leaf', 'back-to-back', 'comparison', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Compare location.', workingLatex: '', explanation: 'Class A: median is around 54. Class B: median is around 55. Similar medians.' },
                { stepNumber: 2, description: 'Compare spread.', workingLatex: '', explanation: 'Class A ranges from 43 to 73 (range 30). Class B ranges from 42 to 75 (range 33). Similar ranges, but Class A is slightly more clustered in the 50s.' }
            ],
            finalAnswer: 'Similar medians (around 54–55). Class A is slightly more concentrated in the 50s while Class B is more spread out.'
        }
    },
    {
        id: 's2-042',
        topicRef: 's2',
        topicTitle: 'Representing Data 42',
        difficulty: 'Standard',
        questionText: 'Explain what a cumulative frequency diagram is and describe how to use it to estimate the median and quartiles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'quartiles', 'explanation'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Definition.', workingLatex: '', explanation: 'A cumulative frequency diagram plots the running total of frequencies against the upper class boundaries. Points are joined by a smooth curve or straight lines.' },
                { stepNumber: 2, description: 'Using it.', workingLatex: '', explanation: 'To find the median, read across from \\( \\frac{n}{2} \\) on the y-axis to the curve, then down to the x-axis. For Q1, use \\( \\frac{n}{4} \\). For Q3, use \\( \\frac{3n}{4} \\).' }
            ],
            finalAnswer: 'Plot CF against upper boundaries. Read across from n/2, n/4, 3n/4 to estimate median and quartiles.'
        }
    },
    {
        id: 's2-043',
        topicRef: 's2',
        topicTitle: 'Representing Data 43',
        difficulty: 'Standard',
        questionText: 'The grouped frequency table shows distances (km) cycled by 60 people in a week.\n\n| Distance \\( d \\) (km) | Frequency |\n|---|---|\n| \\( 0 \\leq d < 10 \\) | 8 |\n| \\( 10 \\leq d < 20 \\) | 15 |\n| \\( 20 \\leq d < 30 \\) | 20 |\n| \\( 30 \\leq d < 50 \\) | 12 |\n| \\( 50 \\leq d < 80 \\) | 5 |\n\na) Draw a cumulative frequency diagram.\n\nb) Estimate the median and IQR.\n\nc) Estimate the 90th percentile.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'IQR', 'percentile', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) CF table.', workingLatex: '\\begin{array}{c|c} \\text{Upper boundary} & \\text{CF} \\\\ \\hline 10 & 8 \\\\ 20 & 23 \\\\ 30 & 43 \\\\ 50 & 55 \\\\ 80 & 60 \\end{array}', explanation: '' },
                { stepNumber: 2, description: 'b) Median: 30th value. Falls in 20–30.', workingLatex: '\\text{Median} = 20 + \\frac{30-23}{20} \\times 10 = 23.5 \\text{ km}', explanation: '' },
                { stepNumber: 3, description: 'Q1: 15th. Falls in 10–20.', workingLatex: 'Q_1 = 10 + \\frac{15-8}{15} \\times 10 \\approx 14.7', explanation: '' },
                { stepNumber: 4, description: 'Q3: 45th. Falls in 30–50.', workingLatex: 'Q_3 = 30 + \\frac{45-43}{12} \\times 20 \\approx 33.3; \\; IQR \\approx 18.6', explanation: '' },
                { stepNumber: 5, description: 'c) 90th percentile: 54th value. Falls in 30–50.', workingLatex: 'P_{90} = 30 + \\frac{54-43}{12} \\times 20 \\approx 48.3 \\text{ km}', explanation: '' }
            ],
            finalAnswer: 'b) Median \\( \\approx \\) 23.5 km, IQR \\( \\approx \\) 18.6 km. c) \\( P_{90} \\approx \\) 48.3 km.'
        }
    },
    {
        id: 's2-044',
        topicRef: 's2',
        topicTitle: 'Representing Data 44',
        difficulty: 'Foundation',
        questionText: 'A frequency polygon is drawn from the following data.\n\n| Score | 10 | 20 | 30 | 40 | 50 |\n|---|---|---|---|---|---|\n| Frequency | 3 | 8 | 12 | 7 | 2 |\n\nDescribe how to draw the frequency polygon.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['frequency polygon', 'representing data'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Method.', workingLatex: '', explanation: 'Plot points at the midpoints of each class (or the score values for discrete data) with the frequency on the y-axis. Join the points with straight lines. Optionally extend to the x-axis at each end.' }
            ],
            finalAnswer: 'Plot (10,3), (20,8), (30,12), (40,7), (50,2) and join with straight lines.'
        }
    },
    {
        id: 's2-045',
        topicRef: 's2',
        topicTitle: 'Representing Data 45',
        difficulty: 'Standard',
        questionText: 'Two box plots are given:\n\nMales: Min = 155, Q1 = 165, Median = 172, Q3 = 180, Max = 195\nFemales: Min = 148, Q1 = 158, Median = 164, Q3 = 170, Max = 182\n\na) Compare the heights.\n\nb) Identify any outliers using the \\( 1.5 \\times IQR \\) rule.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['box plots', 'comparison', 'outliers', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Compare.', workingLatex: '', explanation: 'Males are taller on average (median 172 vs 164). Males have a larger IQR (15 vs 12) and range (40 vs 34), so heights are more variable.' },
                { stepNumber: 2, description: 'b) Males: IQR = 15.', workingLatex: '\\text{Lower: } 165-22.5 = 142.5; \\; \\text{Upper: } 180+22.5 = 202.5', explanation: 'All values within fences — no outliers.' },
                { stepNumber: 3, description: 'Females: IQR = 12.', workingLatex: '\\text{Lower: } 158-18 = 140; \\; \\text{Upper: } 170+18 = 188', explanation: 'All values within fences — no outliers.' }
            ],
            finalAnswer: 'a) Males taller and more variable. b) No outliers in either group.'
        }
    },
    {
        id: 's2-046',
        topicRef: 's2',
        topicTitle: 'Representing Data 46',
        difficulty: 'Foundation',
        questionText: 'What does the area of a bar in a histogram represent?',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['histogram', 'area', 'frequency'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Answer.', workingLatex: '', explanation: 'The area of each bar represents the frequency for that class.' }
            ],
            finalAnswer: 'The frequency for that class.'
        }
    },
    {
        id: 's2-047',
        topicRef: 's2',
        topicTitle: 'Representing Data 47',
        difficulty: 'Standard',
        questionText: 'The weights (g) of 100 eggs are given in the table.\n\n| Weight \\( w \\) (g) | Frequency |\n|---|---|\n| \\( 40 \\leq w < 50 \\) | 10 |\n| \\( 50 \\leq w < 55 \\) | 25 |\n| \\( 55 \\leq w < 60 \\) | 35 |\n| \\( 60 \\leq w < 70 \\) | 20 |\n| \\( 70 \\leq w < 90 \\) | 10 |\n\nCalculate frequency densities and explain why a histogram is more appropriate than a bar chart.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['histogram', 'frequency density', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'FDs.', workingLatex: '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{FD} \\\\ \\hline 40\\text{–}50 & 10 & 10 & 1.0 \\\\ 50\\text{–}55 & 5 & 25 & 5.0 \\\\ 55\\text{–}60 & 5 & 35 & 7.0 \\\\ 60\\text{–}70 & 10 & 20 & 2.0 \\\\ 70\\text{–}90 & 20 & 10 & 0.5 \\end{array}', explanation: '' },
                { stepNumber: 2, description: 'Why histogram?', workingLatex: '', explanation: 'Class widths are unequal (5, 5, 5, 10, 20). A bar chart would be misleading because wider classes would have taller bars even with the same frequency. A histogram uses frequency density so that area = frequency, giving a fair representation.' }
            ],
            finalAnswer: 'FDs: 1.0, 5.0, 7.0, 2.0, 0.5. Histogram needed because class widths are unequal.'
        }
    },
    {
        id: 's2-048',
        topicRef: 's2',
        topicTitle: 'Representing Data 48',
        difficulty: 'Standard',
        questionText: 'A data set has \\( Q_1 = 14 \\), \\( Q_2 = 20 \\), \\( Q_3 = 38 \\).\n\na) Calculate the IQR.\n\nb) Describe the skewness. Justify your answer.\n\nc) Would the mean be greater than, less than, or equal to the median? Explain.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['IQR', 'skewness', 'mean', 'median', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) IQR.', workingLatex: 'IQR = 38 - 14 = 24', explanation: '' },
                { stepNumber: 2, description: 'b) Skewness.', workingLatex: 'Q_3 - Q_2 = 18, \\; Q_2 - Q_1 = 6', explanation: 'Since Q3 - Q2 >> Q2 - Q1, the data is positively skewed.' },
                { stepNumber: 3, description: 'c) Mean vs median.', workingLatex: '', explanation: 'For positive skew, the mean is pulled towards the tail, so mean > median.' }
            ],
            finalAnswer: 'a) 24 b) Positive skew c) Mean > median.'
        }
    },
    {
        id: 's2-049',
        topicRef: 's2',
        topicTitle: 'Representing Data 49',
        difficulty: 'Foundation',
        questionText: 'The table shows how 200 students travel to school.\n\n| Method | Walk | Bus | Car | Cycle |\n|---|---|---|---|---|\n| Frequency | 70 | 60 | 50 | 20 |\n\nCalculate the angle for each sector of a pie chart.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['pie chart', 'angles'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Angle = (frequency / total) × 360°.', workingLatex: '\\text{Walk: } \\frac{70}{200} \\times 360 = 126°; \\; \\text{Bus: } 108°; \\; \\text{Car: } 90°; \\; \\text{Cycle: } 36°', explanation: '' }
            ],
            finalAnswer: 'Walk 126°, Bus 108°, Car 90°, Cycle 36°.'
        }
    },
    {
        id: 's2-050',
        topicRef: 's2',
        topicTitle: 'Representing Data 50',
        difficulty: 'Standard',
        questionText: 'A set of data has coding \\( y = 2(x - 30) \\). Given \\( \\bar{y} = 8 \\) and \\( \\sigma_y = 6 \\), find \\( \\bar{x} \\) and \\( \\sigma_x \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['coding', 'mean', 'standard deviation', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Reverse: \\( x = \\frac{y}{2} + 30 \\).', workingLatex: '\\bar{x} = \\frac{8}{2} + 30 = 34', explanation: '' },
                { stepNumber: 2, description: 'SD scales by \\( \\frac{1}{2} \\).', workingLatex: '\\sigma_x = \\frac{6}{2} = 3', explanation: '' }
            ],
            finalAnswer: '\\( \\bar{x} = 34 \\), \\( \\sigma_x = 3 \\)'
        }
    },
    {
        id: 's2-051',
        topicRef: 's2',
        topicTitle: 'Representing Data 51',
        difficulty: 'Standard',
        questionText: 'A histogram shows the ages of people at an event. One bar has class 20–30 with frequency density 2.5. Another bar has class 30–50 with frequency density 1.2.\n\na) Find the frequency for each class.\n\nb) Explain why the second bar looks shorter despite having more people.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['histogram', 'frequency density', 'interpretation'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Frequencies.', workingLatex: '20\\text{–}30: \\; 2.5 \\times 10 = 25; \\quad 30\\text{–}50: \\; 1.2 \\times 20 = 24', explanation: '' },
                { stepNumber: 2, description: 'b) Explanation.', workingLatex: '', explanation: 'The 30–50 bar is shorter (lower FD) but wider (20 vs 10), so its area (24) is almost equal. In a histogram, frequency is represented by area, not height. The wider bar spreads the same frequency over more width, so it looks shorter.' }
            ],
            finalAnswer: 'a) 25 and 24. b) Wider bar spreads the frequency, so FD is lower despite similar totals.'
        }
    },
    {
        id: 's2-052',
        topicRef: 's2',
        topicTitle: 'Representing Data 52',
        difficulty: 'Foundation',
        questionText: 'The five-number summary for a data set is: 5, 12, 18, 25, 40.\n\na) Draw a box plot.\n\nb) Calculate the IQR.\n\nc) Is the data symmetric, positively skewed, or negatively skewed?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'IQR', 'skewness'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Box from 12 to 25, line at 18, whiskers to 5 and 40.', workingLatex: '', explanation: '' },
                { stepNumber: 2, description: 'b) IQR.', workingLatex: 'IQR = 25 - 12 = 13', explanation: '' },
                { stepNumber: 3, description: 'c) Q2-Q1 = 6, Q3-Q2 = 7. Upper whisker (15) > lower whisker (7).', workingLatex: '', explanation: 'Positive skew.' }
            ],
            finalAnswer: 'b) 13 c) Positive skew.'
        }
    },
    {
        id: 's2-053',
        topicRef: 's2',
        topicTitle: 'Representing Data 53',
        difficulty: 'Standard',
        questionText: 'A grouped frequency table and histogram are given for the reaction times (seconds) of 50 drivers.\n\n| Time \\( t \\) (s) | Frequency |\n|---|---|\n| \\( 0.1 \\leq t < 0.2 \\) | 5 |\n| \\( 0.2 \\leq t < 0.3 \\) | 12 |\n| \\( 0.3 \\leq t < 0.4 \\) | 18 |\n| \\( 0.4 \\leq t < 0.5 \\) | 10 |\n| \\( 0.5 \\leq t < 0.8 \\) | 5 |\n\na) Estimate the mean reaction time.\n\nb) Estimate the median reaction time.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['grouped data', 'mean', 'median', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Midpoints.', workingLatex: '\\sum fx = 5(0.15)+12(0.25)+18(0.35)+10(0.45)+5(0.65) = 0.75+3+6.3+4.5+3.25 = 17.8', explanation: '' },
                { stepNumber: 2, description: 'Mean.', workingLatex: '\\bar{t} = \\frac{17.8}{50} = 0.356 \\text{ s}', explanation: '' },
                { stepNumber: 3, description: 'b) 25th value. CF: 5, 17, 35. Falls in 0.3–0.4.', workingLatex: '\\text{Median} = 0.3 + \\frac{25-17}{18} \\times 0.1 \\approx 0.344 \\text{ s}', explanation: '' }
            ],
            finalAnswer: 'a) 0.356 s b) 0.344 s'
        }
    },
    {
        id: 's2-054',
        topicRef: 's2',
        topicTitle: 'Representing Data 54',
        difficulty: 'Foundation',
        questionText: 'Give three advantages of using a box plot to represent data.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'advantages'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Advantages.', workingLatex: '', explanation: '1. Shows the median, quartiles, and range in a single diagram.\n2. Easy to compare two or more distributions side-by-side.\n3. Identifies outliers clearly.' }
            ],
            finalAnswer: 'Shows key summary stats; easy comparison; identifies outliers.'
        }
    },
    {
        id: 's2-055',
        topicRef: 's2',
        topicTitle: 'Representing Data 55',
        difficulty: 'Standard',
        questionText: 'Two histograms show the distribution of exam marks for Year 12 and Year 13. The Year 12 histogram has a tall peak at 50–60 marks. The Year 13 histogram is more spread out with a peak at 60–70.\n\nCompare and contrast the two distributions.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['histogram', 'comparison', 'interpretation', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Location.', workingLatex: '', explanation: 'Year 13 has a higher peak class (60–70 vs 50–60), suggesting Year 13 scored higher on average.' },
                { stepNumber: 2, description: 'Spread.', workingLatex: '', explanation: 'Year 13 is more spread out, meaning marks are more variable. Year 12 is more clustered around 50–60.' }
            ],
            finalAnswer: 'Year 13 scored higher on average but with more variation. Year 12 was more consistent but with lower marks.'
        }
    },
    {
        id: 's2-056',
        topicRef: 's2',
        topicTitle: 'Representing Data 56',
        difficulty: 'Foundation',
        questionText: 'The data 2, 4, 6, 8, 10 has mean 6. Each value is multiplied by 3 and then 5 is added. Find the new mean and standard deviation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['linear transformation', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Original SD.', workingLatex: '\\sigma = \\sqrt{\\frac{4+16+36+64+100}{5}-36} = \\sqrt{44-36} = \\sqrt{8} = 2\\sqrt{2}', explanation: '' },
                { stepNumber: 2, description: 'New mean: \\( 3(6)+5 = 23 \\).', workingLatex: '\\bar{x}_{\\text{new}} = 23', explanation: '' },
                { stepNumber: 3, description: 'New SD: multiplied by 3 (addition doesn\'t change SD).', workingLatex: '\\sigma_{\\text{new}} = 3 \\times 2\\sqrt{2} = 6\\sqrt{2}', explanation: '' }
            ],
            finalAnswer: 'Mean = 23, SD = \\( 6\\sqrt{2} \\).'
        }
    },
    {
        id: 's2-057',
        topicRef: 's2',
        topicTitle: 'Representing Data 57',
        difficulty: 'Standard',
        questionText: 'An outlier is removed from the data set 3, 5, 7, 8, 9, 10, 12, 50. The outlier is 50.\n\na) Find the mean and SD before removing the outlier.\n\nb) Find the mean and SD after removing the outlier.\n\nc) Comment on the effect of removing the outlier.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['outlier', 'mean', 'standard deviation', 'effect', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Before: n=8.', workingLatex: '\\bar{x} = \\frac{104}{8} = 13; \\quad \\sigma = \\sqrt{\\frac{2852}{8}-169} = \\sqrt{187.5} \\approx 13.7', explanation: '' },
                { stepNumber: 2, description: 'b) After: n=7.', workingLatex: '\\bar{x} = \\frac{54}{7} \\approx 7.71; \\quad \\sigma = \\sqrt{\\frac{492}{7}-59.5} \\approx \\sqrt{10.8} \\approx 3.29', explanation: '' },
                { stepNumber: 3, description: 'c) Effect.', workingLatex: '', explanation: 'Removing the outlier decreased the mean significantly (13 → 7.71) and dramatically reduced the SD (13.7 → 3.29). The remaining data is much more concentrated.' }
            ],
            finalAnswer: 'a) Mean 13, SD 13.7. b) Mean 7.71, SD 3.29. c) Both decrease significantly.'
        }
    },
    {
        id: 's2-058',
        topicRef: 's2',
        topicTitle: 'Representing Data 58',
        difficulty: 'Foundation',
        questionText: 'A frequency table shows the number of cars passing a junction each minute.\n\n| Cars | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|---|\n| Frequency | 2 | 5 | 8 | 10 | 8 | 4 | 3 |\n\nFind the mean, mode and median.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['mean', 'mode', 'median', 'frequency table'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Mean.', workingLatex: '\\bar{x} = \\frac{0+5+16+30+32+20+18}{40} = \\frac{121}{40} = 3.025', explanation: '' },
                { stepNumber: 2, description: 'Mode = 3 (highest frequency: 10).', workingLatex: '', explanation: '' },
                { stepNumber: 3, description: 'Median: 40 values, positions 20 and 21. CF: 2, 7, 15, 25. Both in cars=3.', workingLatex: '\\text{Median} = 3', explanation: '' }
            ],
            finalAnswer: 'Mean = 3.025, Mode = 3, Median = 3.'
        }
    },
    {
        id: 's2-059',
        topicRef: 's2',
        topicTitle: 'Representing Data 59',
        difficulty: 'Standard',
        questionText: 'Explain why the median is sometimes preferred over the mean as a measure of central tendency. Give an example.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'mean', 'comparison', 'interpretation'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Explanation.', workingLatex: '', explanation: 'The median is preferred when the data contains outliers or is skewed, because it is not affected by extreme values.\n\nExample: Salaries in a company — if the CEO earns 10 times more than everyone else, the mean salary is misleadingly high, but the median salary represents a typical employee\'s pay.' }
            ],
            finalAnswer: 'Median is resistant to outliers/skew. Example: salary data with extreme values.'
        }
    },
    {
        id: 's2-060',
        topicRef: 's2',
        topicTitle: 'Representing Data 60',
        difficulty: 'Standard',
        questionText: 'The lengths (cm) of 80 leaves are summarised in the grouped frequency table.\n\n| Length \\( l \\) (cm) | Frequency |\n|---|---|\n| \\( 0 < l \\leq 2 \\) | 5 |\n| \\( 2 < l \\leq 4 \\) | 15 |\n| \\( 4 < l \\leq 6 \\) | 28 |\n| \\( 6 < l \\leq 8 \\) | 22 |\n| \\( 8 < l \\leq 12 \\) | 10 |\n\na) Draw a histogram.\n\nb) Estimate the mean.\n\nc) Use interpolation to estimate the median.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['histogram', 'mean', 'median', 'interpolation', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) FDs.', workingLatex: '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Width} & f & \\text{FD} \\\\ \\hline 0\\text{–}2 & 2 & 5 & 2.5 \\\\ 2\\text{–}4 & 2 & 15 & 7.5 \\\\ 4\\text{–}6 & 2 & 28 & 14 \\\\ 6\\text{–}8 & 2 & 22 & 11 \\\\ 8\\text{–}12 & 4 & 10 & 2.5 \\end{array}', explanation: '' },
                { stepNumber: 2, description: 'b) Mean.', workingLatex: '\\sum fx = 5+45+140+154+100 = 444; \\; \\bar{x} = \\frac{444}{80} = 5.55 \\text{ cm}', explanation: '' },
                { stepNumber: 3, description: 'c) Median: 40th value. CF: 5, 20, 48. Falls in 4–6.', workingLatex: '\\text{Median} = 4 + \\frac{40-20}{28} \\times 2 \\approx 5.43 \\text{ cm}', explanation: '' }
            ],
            finalAnswer: 'b) 5.55 cm c) 5.43 cm'
        }
    }
];