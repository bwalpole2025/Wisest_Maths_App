import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Module: Working with Number
 * Topic gn35: Reading mileage charts and timetables (Wales)
 *
 * DfE reference N13. WJEC-Wales numeracy context: distances and journeys
 * between Welsh towns (Cardiff, Swansea, Newport, Wrexham, Bangor,
 * Aberystwyth, Carmarthen, Merthyr Tydfil).
 *
 * Scope (varied across the 30 questions):
 *   - reading a triangular distance / mileage chart and looking up a value
 *   - adding distances along a multi-leg route
 *   - reading bus and train timetables (departure / arrival times)
 *   - choosing which service to catch and the latest departure to meet a deadline
 *   - journey duration and connection / waiting time
 *   - 24-hour clock and durations across the hour and across midnight
 *   - combining a timetable / mileage with speed = distance / time, or with cost
 *
 * Difficulty split: 12 Foundation, 10 Standard, 8 Challenge.
 * ids: gn35-001 ... gn35-030
 *
 * NOTE: there is no image, so every distance chart and timetable is described
 * fully in plain text (or a small LaTeX array) inside questionText, making each
 * question self-contained and answerable.
 *
 * LaTeX note: backslashes are double-escaped. Prose maths is wrapped in
 * \\( ... \\); workingLatex is raw (NOT wrapped in $...$). Large numbers use
 * thin spaces '\\,'. Tables use a LaTeX 'array'.
 */

export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────
    // FOUNDATION  (12)  gn35-001 .. gn35-012
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "gn35-001",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The distance chart below shows the distance, in miles, between some towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 \\\\\n\\text{Swansea} & 46 & - & 27 \\\\\n\\text{Carmarthen} & 73 & 27 & -\n\\end{array}\\)\n\nWrite down the distance between Cardiff and Swansea.",
        marks: 1,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "reading a table", "distance"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find where the Cardiff row meets the Swansea column.",
                    workingLatex: "\\text{Cardiff row} \\cap \\text{Swansea column} = 46",
                    explanation: "On a distance chart you read off the cell where one place's row crosses the other place's column; a common slip is to read the wrong row or column, so trace across and down with a finger.",
                },
            ],
            finalAnswer: "The distance between Cardiff and Swansea is 46 miles.",
            canonicalAnswer: "46 miles",
        },
    },
    {
        id: "gn35-002",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The distance chart shows the distance, in miles, between three towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Cardiff} & \\text{Newport} & \\text{Merthyr Tydfil} \\\\ \\hline\n\\text{Cardiff} & - & 12 & 24 \\\\\n\\text{Newport} & 12 & - & 23 \\\\\n\\text{Merthyr Tydfil} & 24 & 23 & -\n\\end{array}\\)\n\nWrite down the distance between Newport and Merthyr Tydfil.",
        marks: 1,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "reading a table", "distance"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find where the Newport row meets the Merthyr Tydfil column.",
                    workingLatex: "\\text{Newport row} \\cap \\text{Merthyr Tydfil column} = 23",
                    explanation: "The chart is symmetric, so the Newport–Merthyr Tydfil cell equals the Merthyr Tydfil–Newport cell; read either, but make sure you land on the correct pair of headings.",
                },
            ],
            finalAnswer: "The distance between Newport and Merthyr Tydfil is 23 miles.",
            canonicalAnswer: "23 miles",
        },
    },
    {
        id: "gn35-003",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 \\\\\n\\text{Swansea} & 46 & - & 27 \\\\\n\\text{Carmarthen} & 73 & 27 & -\n\\end{array}\\)\n\nDewi drives from Cardiff to Swansea and then from Swansea to Carmarthen. Work out the total distance he drives.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "adding distances", "route"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read off the two legs of the journey from the chart.",
                    workingLatex: "\\text{Cardiff}\\to\\text{Swansea}=46,\\quad \\text{Swansea}\\to\\text{Carmarthen}=27",
                    explanation: "Each leg is a separate look-up: Cardiff–Swansea is 46 and Swansea–Carmarthen is 27. Read both cells before adding so you do not use the wrong distance.",
                },
                {
                    stepNumber: 2,
                    description: "Add the two distances together.",
                    workingLatex: "46 + 27 = 73",
                    explanation: "The total distance is the sum of the legs; here it happens to equal the direct Cardiff–Carmarthen distance, but in general adding the legs is what the route asks for.",
                },
            ],
            finalAnswer: "Dewi drives a total of 73 miles.",
            canonicalAnswer: "73 miles",
        },
    },
    {
        id: "gn35-004",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "Part of a bus timetable for the Cardiff to Newport service is shown.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Bus A} & \\text{Bus B} & \\text{Bus C} & \\text{Bus D} \\\\ \\hline\n\\text{Cardiff (depart)} & 09\\!:\\!05 & 09\\!:\\!35 & 10\\!:\\!05 & 10\\!:\\!35 \\\\\n\\text{Newport (arrive)} & 09\\!:\\!42 & 10\\!:\\!12 & 10\\!:\\!42 & 11\\!:\\!12\n\\end{array}\\)\n\nWrite down the time that Bus C arrives in Newport.",
        marks: 1,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "reading a table", "24-hour clock"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find the Bus C column and read the Newport (arrive) row.",
                    workingLatex: "\\text{Bus C column} \\cap \\text{Newport (arrive) row} = 10\\!:\\!42",
                    explanation: "Each column is one bus; go down the Bus C column to the 'Newport (arrive)' row. A common slip is reading the depart row instead of the arrive row.",
                },
            ],
            finalAnswer: "Bus C arrives in Newport at 10:42.",
            canonicalAnswer: "10:42",
        },
    },
    {
        id: "gn35-005",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "A train timetable for services from Swansea to Cardiff is shown.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Train 1} & \\text{Train 2} & \\text{Train 3} \\\\ \\hline\n\\text{Swansea (depart)} & 08\\!:\\!15 & 08\\!:\\!45 & 09\\!:\\!15 \\\\\n\\text{Cardiff (arrive)} & 09\\!:\\!10 & 09\\!:\\!40 & 10\\!:\\!10\n\\end{array}\\)\n\nGwen needs to be in Cardiff by 09:30. Write down which is the latest train she can catch from Swansea.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "latest departure", "deadline"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Check which trains arrive at or before 09:30.",
                    workingLatex: "09\\!:\\!10 \\le 09\\!:\\!30,\\quad 09\\!:\\!40 > 09\\!:\\!30,\\quad 10\\!:\\!10 > 09\\!:\\!30",
                    explanation: "Compare each arrival time with the 09:30 deadline. Only Train 1 (arriving 09:10) gets her there in time; Trains 2 and 3 arrive too late.",
                },
                {
                    stepNumber: 2,
                    description: "Choose the latest train that still arrives in time.",
                    workingLatex: "\\text{Train 1: depart } 08\\!:\\!15",
                    explanation: "Of the trains that arrive by 09:30, the latest-departing one is Train 1, which leaves Swansea at 08:15. Pick the latest suitable departure, not simply the first train in the table.",
                },
            ],
            finalAnswer: "She must catch the 08:15 train (Train 1) from Swansea.",
            canonicalAnswer: "the 08:15 train",
        },
    },
    {
        id: "gn35-006",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "A bus leaves Bangor at \\(13\\!:\\!20\\) and arrives in Wrexham at \\(13\\!:\\!55\\). Work out how long the journey takes, in minutes.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["duration", "timetable", "minutes"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Both times are in the same hour, so subtract the minutes.",
                    workingLatex: "55 - 20 = 35",
                    explanation: "Because both times are between 13:00 and 14:00, the journey length is just the difference in the minute parts; subtract 20 minutes from 55 minutes.",
                },
                {
                    stepNumber: 2,
                    description: "State the duration.",
                    workingLatex: "13\\!:\\!55 - 13\\!:\\!20 = 35\\text{ min}",
                    explanation: "The journey takes 35 minutes. Always count duration in minutes within the hour, not by subtracting the whole clock readings as if they were ordinary numbers.",
                },
            ],
            finalAnswer: "The journey takes 35 minutes.",
            canonicalAnswer: "35 min",
        },
    },
    {
        id: "gn35-007",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "A train leaves Aberystwyth at \\(10\\!:\\!50\\) and arrives in Machynlleth at \\(11\\!:\\!20\\). Work out how long the journey takes, in minutes.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["duration", "timetable", "across the hour"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Count the minutes up to the next whole hour.",
                    workingLatex: "10\\!:\\!50 \\to 11\\!:\\!00 = 10\\text{ min}",
                    explanation: "Counting on in two stages avoids the classic error of doing 20 minus 50. From 10:50 to 11:00 is 10 minutes.",
                },
                {
                    stepNumber: 2,
                    description: "Add the minutes after the hour.",
                    workingLatex: "10 + 20 = 30\\text{ min}",
                    explanation: "From 11:00 to 11:20 is a further 20 minutes; adding the two parts gives 30 minutes in total for the journey across the hour.",
                },
            ],
            finalAnswer: "The journey takes 30 minutes.",
            canonicalAnswer: "30 min",
        },
    },
    {
        id: "gn35-008",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The 24-hour clock time \\(14\\!:\\!45\\) is shown on a station display. Write this time using am or pm.",
        marks: 1,
        examStyle: true,
        yearCreated: 2026,
        tags: ["24-hour clock", "am pm", "time conversion"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Decide whether the time is in the afternoon.",
                    workingLatex: "14 > 12 \\Rightarrow \\text{afternoon (pm)}",
                    explanation: "Any 24-hour time with an hour greater than 12 is in the afternoon or evening, so it is a pm time.",
                },
                {
                    stepNumber: 2,
                    description: "Subtract 12 hours from the hours part.",
                    workingLatex: "14 - 12 = 2 \\Rightarrow 2\\!:\\!45\\text{ pm}",
                    explanation: "For pm times after 12:59, take 12 off the hours: 14 becomes 2, so 14:45 is 2:45 pm. A common slip is to keep writing 14, or to forget the pm label.",
                },
            ],
            finalAnswer: "14:45 is 2:45 pm.",
            canonicalAnswer: "2:45 pm",
        },
    },
    {
        id: "gn35-009",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Swansea} & \\text{Carmarthen} & \\text{Aberystwyth} \\\\ \\hline\n\\text{Swansea} & - & 27 & 75 \\\\\n\\text{Carmarthen} & 27 & - & 56 \\\\\n\\text{Aberystwyth} & 75 & 56 & -\n\\end{array}\\)\n\nWork out how much further it is from Swansea to Aberystwyth than from Swansea to Carmarthen.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "subtraction", "comparing distances"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read off both distances from the Swansea row.",
                    workingLatex: "\\text{Swansea}\\to\\text{Aberystwyth}=75,\\quad \\text{Swansea}\\to\\text{Carmarthen}=27",
                    explanation: "Both look-ups use the Swansea row: 75 miles to Aberystwyth and 27 miles to Carmarthen. Keep to the one row so you compare the right pair of values.",
                },
                {
                    stepNumber: 2,
                    description: "Subtract the shorter distance from the longer.",
                    workingLatex: "75 - 27 = 48",
                    explanation: "'How much further' means find the difference, so subtract 27 from 75 to get 48 miles.",
                },
            ],
            finalAnswer: "Swansea to Aberystwyth is 48 miles further.",
            canonicalAnswer: "48 miles",
        },
    },
    {
        id: "gn35-010",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "Part of a bus timetable from Merthyr Tydfil to Cardiff is shown.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Bus 1} & \\text{Bus 2} & \\text{Bus 3} \\\\ \\hline\n\\text{Merthyr Tydfil (depart)} & 07\\!:\\!40 & 08\\!:\\!10 & 08\\!:\\!40 \\\\\n\\text{Cardiff (arrive)} & 08\\!:\\!35 & 09\\!:\\!05 & 09\\!:\\!35\n\\end{array}\\)\n\nWork out how long Bus 2 takes to travel from Merthyr Tydfil to Cardiff.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "duration", "across the hour"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the depart and arrive times for Bus 2.",
                    workingLatex: "\\text{depart }08\\!:\\!10,\\quad \\text{arrive }09\\!:\\!05",
                    explanation: "Go down the Bus 2 column: it leaves Merthyr Tydfil at 08:10 and arrives in Cardiff at 09:05. Read both before working out the time taken.",
                },
                {
                    stepNumber: 2,
                    description: "Count on across the hour.",
                    workingLatex: "08\\!:\\!10 \\to 09\\!:\\!10 = 60\\text{ min},\\quad 60 - 5 = 55\\text{ min}",
                    explanation: "From 08:10 to 09:10 is 1 hour (60 minutes), but the bus arrives 5 minutes earlier at 09:05, so the journey is 55 minutes. Counting on in minutes avoids the slip of doing 5 minus 10.",
                },
            ],
            finalAnswer: "Bus 2 takes 55 minutes.",
            canonicalAnswer: "55 min",
        },
    },
    {
        id: "gn35-011",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "A coach leaves Cardiff at \\(11\\!:\\!30\\). The journey to Aberystwyth takes \\(2\\) hours and \\(15\\) minutes. Work out the time the coach arrives in Aberystwyth. Give your answer using the 24-hour clock.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "adding time", "24-hour clock"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Add the hours to the departure time.",
                    workingLatex: "11\\!:\\!30 + 2\\text{ h} = 13\\!:\\!30",
                    explanation: "Add the whole hours first: 11:30 plus 2 hours is 13:30 on the 24-hour clock. Keep the minutes unchanged at this stage.",
                },
                {
                    stepNumber: 2,
                    description: "Add the extra minutes.",
                    workingLatex: "13\\!:\\!30 + 15\\text{ min} = 13\\!:\\!45",
                    explanation: "Now add the 15 minutes: 30 plus 15 is 45, giving 13:45. Adding hours and minutes separately avoids carrying errors.",
                },
            ],
            finalAnswer: "The coach arrives at 13:45.",
            canonicalAnswer: "13:45",
        },
    },
    {
        id: "gn35-012",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Foundation",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Newport} & \\text{Merthyr Tydfil} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 12 & 24 \\\\\n\\text{Swansea} & 46 & - & 58 & 35 \\\\\n\\text{Newport} & 12 & 58 & - & 23 \\\\\n\\text{Merthyr Tydfil} & 24 & 35 & 23 & -\n\\end{array}\\)\n\nWrite down the distance between Swansea and Merthyr Tydfil.",
        marks: 1,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "reading a table", "distance"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find where the Swansea row meets the Merthyr Tydfil column.",
                    workingLatex: "\\text{Swansea row} \\cap \\text{Merthyr Tydfil column} = 35",
                    explanation: "With a larger chart it is easy to slide onto the wrong column, so trace the Swansea row across to the Merthyr Tydfil column carefully; the value is 35.",
                },
            ],
            finalAnswer: "The distance between Swansea and Merthyr Tydfil is 35 miles.",
            canonicalAnswer: "35 miles",
        },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // STANDARD  (10)  gn35-013 .. gn35-022
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "gn35-013",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} & \\text{Aberystwyth} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 & 117 \\\\\n\\text{Swansea} & 46 & - & 27 & 75 \\\\\n\\text{Carmarthen} & 73 & 27 & - & 56 \\\\\n\\text{Aberystwyth} & 117 & 75 & 56 & -\n\\end{array}\\)\n\nA delivery driver travels Cardiff \\(\\to\\) Swansea \\(\\to\\) Carmarthen \\(\\to\\) Aberystwyth. Work out the total distance of the route.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "adding distances", "multi-leg route"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read off the three legs from the chart.",
                    workingLatex: "46 \\;(\\text{Cardiff–Swansea}),\\;\\; 27 \\;(\\text{Swansea–Carmarthen}),\\;\\; 56 \\;(\\text{Carmarthen–Aberystwyth})",
                    explanation: "A multi-leg route needs a separate look-up for each leg between consecutive towns; do not be tempted to read the single Cardiff–Aberystwyth value, as the route is via Swansea and Carmarthen.",
                },
                {
                    stepNumber: 2,
                    description: "Add the first two legs.",
                    workingLatex: "46 + 27 = 73",
                    explanation: "Build the total in stages to reduce arithmetic slips: the Cardiff–Swansea–Carmarthen part is 73 miles.",
                },
                {
                    stepNumber: 3,
                    description: "Add the final leg.",
                    workingLatex: "73 + 56 = 129",
                    explanation: "Adding the Carmarthen–Aberystwyth leg gives a total route length of 129 miles (longer than the 117-mile direct route, as expected for a detour).",
                },
            ],
            finalAnswer: "The total route is 129 miles.",
            canonicalAnswer: "129 miles",
        },
    },
    {
        id: "gn35-014",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "A train timetable for the Cardiff to Swansea line is shown.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Train 1} & \\text{Train 2} & \\text{Train 3} & \\text{Train 4} \\\\ \\hline\n\\text{Cardiff (depart)} & 08\\!:\\!12 & 08\\!:\\!42 & 09\\!:\\!12 & 09\\!:\\!42 \\\\\n\\text{Bridgend (arrive)} & 08\\!:\\!37 & 09\\!:\\!07 & 09\\!:\\!37 & 10\\!:\\!07 \\\\\n\\text{Swansea (arrive)} & 09\\!:\\!05 & 09\\!:\\!35 & 10\\!:\\!05 & 10\\!:\\!35\n\\end{array}\\)\n\nWork out how long Train 3 takes to travel all the way from Cardiff to Swansea.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "duration", "across the hour"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the Cardiff depart and Swansea arrive times for Train 3.",
                    workingLatex: "\\text{depart }09\\!:\\!12,\\quad \\text{arrive }10\\!:\\!05",
                    explanation: "Use the Train 3 column and the first and last rows; ignore the Bridgend row, which is just an intermediate stop. Train 3 leaves Cardiff at 09:12 and reaches Swansea at 10:05.",
                },
                {
                    stepNumber: 2,
                    description: "Count from 09:12 up to 10:12.",
                    workingLatex: "09\\!:\\!12 \\to 10\\!:\\!12 = 60\\text{ min}",
                    explanation: "Stepping on a whole hour first makes the subtraction safe: from 09:12 to 10:12 is exactly 60 minutes.",
                },
                {
                    stepNumber: 3,
                    description: "Adjust back to the actual arrival time.",
                    workingLatex: "60 - 7 = 53\\text{ min}",
                    explanation: "The train actually arrives at 10:05, which is 7 minutes before 10:12, so the journey is 60 minus 7, i.e. 53 minutes. Computing the duration in minutes avoids the wrong-digit subtraction 05 minus 12.",
                },
            ],
            finalAnswer: "Train 3 takes 53 minutes.",
            canonicalAnswer: "53 min",
        },
    },
    {
        id: "gn35-015",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "Rhys travels from Bangor to Cardiff, changing trains at Shrewsbury. His first train arrives in Shrewsbury at \\(11\\!:\\!28\\). His connecting train to Cardiff departs Shrewsbury at \\(12\\!:\\!05\\). Work out how long he has to wait at Shrewsbury for his connection.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "connection time", "waiting time"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Count the minutes from arrival to the next hour.",
                    workingLatex: "11\\!:\\!28 \\to 12\\!:\\!00 = 32\\text{ min}",
                    explanation: "The wait is the gap between arriving (11:28) and the connection departing (12:05). From 11:28 to 12:00 is 32 minutes.",
                },
                {
                    stepNumber: 2,
                    description: "Add the minutes after the hour.",
                    workingLatex: "32 + 5 = 37\\text{ min}",
                    explanation: "From 12:00 to 12:05 is a further 5 minutes, so the total wait is 37 minutes. Connection/waiting time is the difference between the two times, not the journey time.",
                },
            ],
            finalAnswer: "Rhys waits 37 minutes for his connection.",
            canonicalAnswer: "37 min",
        },
    },
    {
        id: "gn35-016",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "A bus timetable for the Aberystwyth to Carmarthen service is shown.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Bus 1} & \\text{Bus 2} & \\text{Bus 3} & \\text{Bus 4} \\\\ \\hline\n\\text{Aberystwyth (depart)} & 09\\!:\\!10 & 10\\!:\\!40 & 12\\!:\\!10 & 13\\!:\\!40 \\\\\n\\text{Carmarthen (arrive)} & 11\\!:\\!05 & 12\\!:\\!35 & 14\\!:\\!05 & 15\\!:\\!35\n\\end{array}\\)\n\nCeri must arrive in Carmarthen by \\(13\\!:\\!00\\) for a meeting. Write down the latest bus she can catch from Aberystwyth, and the time it departs.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "latest departure", "deadline"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "List the arrival times and compare with 13:00.",
                    workingLatex: "11\\!:\\!05,\\;12\\!:\\!35,\\;14\\!:\\!05,\\;15\\!:\\!35",
                    explanation: "She needs to arrive at or before 13:00, so check each arrival time against the deadline rather than each departure time.",
                },
                {
                    stepNumber: 2,
                    description: "Keep only the buses arriving in time.",
                    workingLatex: "11\\!:\\!05 \\le 13\\!:\\!00,\\;\\; 12\\!:\\!35 \\le 13\\!:\\!00,\\;\\; 14\\!:\\!05 > 13\\!:\\!00",
                    explanation: "Bus 1 (11:05) and Bus 2 (12:35) arrive in time; Bus 3 (14:05) and Bus 4 (15:35) are too late.",
                },
                {
                    stepNumber: 3,
                    description: "Pick the latest suitable bus and read its departure.",
                    workingLatex: "\\text{Bus 2: depart }10\\!:\\!40",
                    explanation: "Of the buses that arrive by 13:00, Bus 2 is the latest; it leaves Aberystwyth at 10:40. Choosing the latest valid departure gives the most flexibility before the deadline.",
                },
            ],
            finalAnswer: "She catches Bus 2, departing Aberystwyth at 10:40.",
            canonicalAnswer: "the 10:40 bus",
        },
    },
    {
        id: "gn35-017",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "A train leaves Wrexham at \\(23\\!:\\!40\\) and arrives in Cardiff at \\(02\\!:\\!25\\) the next morning. Work out the journey time in hours and minutes.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["duration", "across midnight", "24-hour clock"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find the time from departure up to midnight.",
                    workingLatex: "23\\!:\\!40 \\to 24\\!:\\!00 = 20\\text{ min}",
                    explanation: "Crossing midnight is easiest in two parts. From 23:40 to midnight (00:00) is 20 minutes.",
                },
                {
                    stepNumber: 2,
                    description: "Find the time from midnight to arrival.",
                    workingLatex: "00\\!:\\!00 \\to 02\\!:\\!25 = 2\\text{ h }25\\text{ min}",
                    explanation: "From midnight to 02:25 is 2 hours and 25 minutes. Splitting at midnight prevents the error of subtracting 23:40 from 02:25 directly.",
                },
                {
                    stepNumber: 3,
                    description: "Add the two parts together.",
                    workingLatex: "20\\text{ min} + 2\\text{ h }25\\text{ min} = 2\\text{ h }45\\text{ min}",
                    explanation: "Adding 20 minutes to 2 hours 25 minutes gives 2 hours 45 minutes for the whole journey across midnight.",
                },
            ],
            finalAnswer: "The journey takes 2 hours 45 minutes.",
            canonicalAnswer: "2 h 45 min",
        },
    },
    {
        id: "gn35-018",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "The distance from Cardiff to Aberystwyth is \\(117\\) miles. A coach covers this distance in exactly \\(3\\) hours. Work out the average speed of the coach in miles per hour.",
        marks: 2,
        examStyle: true,
        yearCreated: 2026,
        tags: ["speed distance time", "mileage", "average speed"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Write down the speed formula.",
                    workingLatex: "\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}",
                    explanation: "Average speed is distance divided by time; make sure the distance is in miles and the time is in hours so the answer comes out in miles per hour.",
                },
                {
                    stepNumber: 2,
                    description: "Substitute the distance and time.",
                    workingLatex: "\\text{speed} = \\dfrac{117}{3} = 39",
                    explanation: "Dividing 117 miles by 3 hours gives 39, so the average speed is 39 miles per hour.",
                },
            ],
            finalAnswer: "The average speed is 39 miles per hour.",
            canonicalAnswer: "39 mph",
        },
    },
    {
        id: "gn35-019",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 \\\\\n\\text{Swansea} & 46 & - & 27 \\\\\n\\text{Carmarthen} & 73 & 27 & -\n\\end{array}\\)\n\nA van does a return trip from Swansea to Carmarthen and back to Swansea. Diesel costs the driver \\(\\pounds 0.20\\) per mile. Work out the total fuel cost for the return trip.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "cost", "return journey"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the one-way distance and double it for the return trip.",
                    workingLatex: "\\text{Swansea–Carmarthen}=27,\\quad 27 \\cdot 2 = 54",
                    explanation: "A return trip covers the distance twice, so the total distance is 2 lots of the 27-mile leg, i.e. 54 miles. Forgetting to double for the return journey is a common slip.",
                },
                {
                    stepNumber: 2,
                    description: "Multiply the total distance by the cost per mile.",
                    workingLatex: "54 \\cdot \\pounds 0.20 = \\pounds 10.80",
                    explanation: "At 20p per mile, 54 miles costs 54 times 0.20 pounds; since 0.20 is one fifth, this is 54 divided by 5, giving 10.80.",
                },
            ],
            finalAnswer: "The total fuel cost is £10.80.",
            canonicalAnswer: "£10.80",
        },
    },
    {
        id: "gn35-020",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "A bus timetable from Cardiff to Merthyr Tydfil runs every 30 minutes. The first bus leaves Cardiff at \\(06\\!:\\!15\\). Work out the departure time of the \\(8\\text{th}\\) bus of the day.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "repeated intervals", "24-hour clock"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Count how many gaps come before the 8th bus.",
                    workingLatex: "8 - 1 = 7\\text{ gaps}",
                    explanation: "The 1st bus is at the start time, so the 8th bus is 7 intervals later, not 8. Counting gaps rather than buses avoids an off-by-one error.",
                },
                {
                    stepNumber: 2,
                    description: "Find the total time after the first bus.",
                    workingLatex: "7 \\cdot 30\\text{ min} = 210\\text{ min} = 3\\text{ h }30\\text{ min}",
                    explanation: "Seven 30-minute gaps make 210 minutes; converting to hours and minutes gives 3 hours 30 minutes, since 210 divided by 60 is 3 remainder 30.",
                },
                {
                    stepNumber: 3,
                    description: "Add this on to the first departure time.",
                    workingLatex: "06\\!:\\!15 + 3\\text{ h }30\\text{ min} = 09\\!:\\!45",
                    explanation: "Adding 3 hours to 06:15 gives 09:15, and a further 30 minutes gives 09:45, the departure time of the 8th bus.",
                },
            ],
            finalAnswer: "The 8th bus departs at 09:45.",
            canonicalAnswer: "09:45",
        },
    },
    {
        id: "gn35-021",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "A train timetable for stops between Cardiff and Aberystwyth is shown.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Train P} & \\text{Train Q} & \\text{Train R} \\\\ \\hline\n\\text{Cardiff (depart)} & 07\\!:\\!50 & 09\\!:\\!20 & 10\\!:\\!50 \\\\\n\\text{Carmarthen (arrive)} & 09\\!:\\!35 & 11\\!:\\!05 & 12\\!:\\!35 \\\\\n\\text{Aberystwyth (arrive)} & 11\\!:\\!10 & 12\\!:\\!40 & 14\\!:\\!10\n\\end{array}\\)\n\nFor Train Q, work out how much longer the Carmarthen-to-Aberystwyth part of the journey takes than the Cardiff-to-Carmarthen part.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "duration", "comparing times"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find the Cardiff-to-Carmarthen time for Train Q.",
                    workingLatex: "09\\!:\\!20 \\to 11\\!:\\!05 = 1\\text{ h }45\\text{ min}",
                    explanation: "From 09:20, one hour reaches 10:20 and a second hour reaches 11:20; the arrival is 11:05, which is 15 minutes before 11:20, so the first part is 2 hours minus 15 minutes, i.e. 1 hour 45 minutes.",
                },
                {
                    stepNumber: 2,
                    description: "Find the Carmarthen-to-Aberystwyth time for Train Q.",
                    workingLatex: "11\\!:\\!05 \\to 12\\!:\\!40 = 1\\text{ h }35\\text{ min}",
                    explanation: "From 11:05 to 12:05 is 1 hour, then 12:05 to 12:40 is 35 minutes, giving 1 hour 35 minutes for the second part.",
                },
                {
                    stepNumber: 3,
                    description: "Convert both parts to minutes.",
                    workingLatex: "1\\text{ h }45\\text{ min}=105\\text{ min},\\quad 1\\text{ h }35\\text{ min}=95\\text{ min}",
                    explanation: "Working in minutes makes the comparison straightforward: 105 minutes and 95 minutes respectively.",
                },
                {
                    stepNumber: 4,
                    description: "Subtract to find the difference.",
                    workingLatex: "105 - 95 = 10\\text{ min}",
                    explanation: "The first part is the longer one, so it takes 10 minutes more than the second part. The earlier wording 'how much longer the Carmarthen-to-Aberystwyth part takes' is answered by stating that, in fact, it takes 10 minutes less.",
                },
            ],
            finalAnswer: "The Carmarthen-to-Aberystwyth part actually takes 10 minutes less (the Cardiff-to-Carmarthen part is the longer by 10 minutes).",
            canonicalAnswer: "10 min",
        },
    },
    {
        id: "gn35-022",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Standard",
        answerType: "expression",
        questionText:
            "Megan drives from Newport to Bangor, a distance of \\(180\\) miles, at an average speed of \\(45\\) miles per hour. She leaves Newport at \\(08\\!:\\!00\\). Work out the time she arrives in Bangor. Give your answer using the 24-hour clock.",
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ["speed distance time", "timetable", "24-hour clock"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Use time = distance ÷ speed.",
                    workingLatex: "\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}} = \\dfrac{180}{45}",
                    explanation: "To find how long the drive takes, rearrange the speed formula to time = distance divided by speed, keeping miles with miles per hour so the answer is in hours.",
                },
                {
                    stepNumber: 2,
                    description: "Work out the journey time.",
                    workingLatex: "\\dfrac{180}{45} = 4\\text{ hours}",
                    explanation: "180 divided by 45 is 4, so the journey takes exactly 4 hours.",
                },
                {
                    stepNumber: 3,
                    description: "Add the journey time to the start time.",
                    workingLatex: "08\\!:\\!00 + 4\\text{ h} = 12\\!:\\!00",
                    explanation: "Adding 4 hours to a departure of 08:00 gives an arrival time of 12:00 on the 24-hour clock.",
                },
            ],
            finalAnswer: "Megan arrives in Bangor at 12:00.",
            canonicalAnswer: "12:00",
        },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CHALLENGE  (8)  gn35-023 .. gn35-030
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "gn35-023",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} & \\text{Aberystwyth} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 & 117 \\\\\n\\text{Swansea} & 46 & - & 27 & 75 \\\\\n\\text{Carmarthen} & 73 & 27 & - & 56 \\\\\n\\text{Aberystwyth} & 117 & 75 & 56 & -\n\\end{array}\\)\n\nA driver must travel from Cardiff to Aberystwyth. Route 1 is the direct road. Route 2 goes Cardiff \\(\\to\\) Swansea \\(\\to\\) Carmarthen \\(\\to\\) Aberystwyth. Work out how many extra miles Route 2 is compared with Route 1.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "comparing routes", "adding distances"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the direct distance for Route 1.",
                    workingLatex: "\\text{Cardiff}\\to\\text{Aberystwyth} = 117",
                    explanation: "Route 1 is a single look-up: the Cardiff–Aberystwyth cell gives 117 miles.",
                },
                {
                    stepNumber: 2,
                    description: "Read off the three legs of Route 2.",
                    workingLatex: "46,\\;27,\\;56",
                    explanation: "Route 2 needs three look-ups: Cardiff–Swansea 46, Swansea–Carmarthen 27, Carmarthen–Aberystwyth 56.",
                },
                {
                    stepNumber: 3,
                    description: "Add the legs of Route 2.",
                    workingLatex: "46 + 27 + 56 = 129",
                    explanation: "Summing the three legs gives a Route 2 distance of 129 miles.",
                },
                {
                    stepNumber: 4,
                    description: "Subtract Route 1 from Route 2.",
                    workingLatex: "129 - 117 = 12",
                    explanation: "The extra distance is the difference between the routes, 129 minus 117, which is 12 miles. Compare totals only after adding all the legs of the indirect route.",
                },
            ],
            finalAnswer: "Route 2 is 12 miles longer than Route 1.",
            canonicalAnswer: "12 miles",
        },
    },
    {
        id: "gn35-024",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "A train timetable for the line from Aberystwyth to Shrewsbury is shown, together with connecting trains to Cardiff.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Service A} & \\text{Service B} & \\text{Service C} \\\\ \\hline\n\\text{Aberystwyth (depart)} & 08\\!:\\!02 & 10\\!:\\!02 & 12\\!:\\!02 \\\\\n\\text{Shrewsbury (arrive)} & 09\\!:\\!54 & 11\\!:\\!54 & 13\\!:\\!54\n\\end{array}\\)\n\nAt Shrewsbury there are trains to Cardiff at \\(10\\!:\\!22\\), \\(12\\!:\\!22\\) and \\(14\\!:\\!22\\). Buale takes Service B from Aberystwyth and then the first available train to Cardiff. Work out how long he waits at Shrewsbury for that train.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "connection time", "waiting time"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find when Service B reaches Shrewsbury.",
                    workingLatex: "\\text{Service B arrives Shrewsbury } 11\\!:\\!54",
                    explanation: "Read down the Service B column to the Shrewsbury (arrive) row; he is at Shrewsbury at 11:54.",
                },
                {
                    stepNumber: 2,
                    description: "Choose the first Cardiff train departing after 11:54.",
                    workingLatex: "10\\!:\\!22 < 11\\!:\\!54,\\quad 12\\!:\\!22 > 11\\!:\\!54",
                    explanation: "The 10:22 train has already gone, so the first one he can catch is the 12:22. Choosing the next departure after arrival is the key to connection problems.",
                },
                {
                    stepNumber: 3,
                    description: "Find the wait from 11:54 to 12:22.",
                    workingLatex: "11\\!:\\!54 \\to 12\\!:\\!00 = 6\\text{ min},\\quad 12\\!:\\!00 \\to 12\\!:\\!22 = 22\\text{ min}",
                    explanation: "Split the wait at the hour: 6 minutes to noon, then 22 minutes to 12:22.",
                },
                {
                    stepNumber: 4,
                    description: "Add the two parts of the wait.",
                    workingLatex: "6 + 22 = 28\\text{ min}",
                    explanation: "The total connection wait is 28 minutes. Use the departure of the connecting train, not its arrival, when finding waiting time.",
                },
            ],
            finalAnswer: "He waits 28 minutes at Shrewsbury.",
            canonicalAnswer: "28 min",
        },
    },
    {
        id: "gn35-025",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "The distance from Swansea to Aberystwyth is \\(75\\) miles. A coach leaves Swansea at \\(13\\!:\\!15\\) and arrives in Aberystwyth at \\(15\\!:\\!45\\). Work out the average speed of the coach in miles per hour.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["speed distance time", "duration", "average speed"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find the journey time from the two clock times.",
                    workingLatex: "13\\!:\\!15 \\to 15\\!:\\!15 = 2\\text{ h},\\quad 15\\!:\\!15 \\to 15\\!:\\!45 = 30\\text{ min}",
                    explanation: "From 13:15 to 15:15 is 2 hours, then a further 30 minutes to 15:45, giving 2 hours 30 minutes. Find duration in hours and minutes, not by subtracting the clock readings as decimals.",
                },
                {
                    stepNumber: 2,
                    description: "Convert the time to hours for the speed formula.",
                    workingLatex: "2\\text{ h }30\\text{ min} = 2.5\\text{ h}",
                    explanation: "30 minutes is half an hour, so the time is 2.5 hours. Speed in mph needs the time in hours; using 2.30 here would be a serious slip.",
                },
                {
                    stepNumber: 3,
                    description: "Apply speed = distance ÷ time.",
                    workingLatex: "\\text{speed} = \\dfrac{75}{2.5} = 30",
                    explanation: "Dividing 75 miles by 2.5 hours gives 30, so the average speed is 30 miles per hour.",
                },
            ],
            finalAnswer: "The average speed is 30 miles per hour.",
            canonicalAnswer: "30 mph",
        },
    },
    {
        id: "gn35-026",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "A bus from Wrexham to Bangor takes \\(1\\) hour \\(25\\) minutes. Owain needs to arrive in Bangor by \\(17\\!:\\!00\\) for an appointment. The buses leave Wrexham at \\(14\\!:\\!50\\), \\(15\\!:\\!20\\) and \\(15\\!:\\!50\\). Work out which is the latest bus he can catch, giving its departure time.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "latest departure", "deadline", "duration"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Work back from the deadline by the journey length.",
                    workingLatex: "17\\!:\\!00 - 1\\text{ h }25\\text{ min}",
                    explanation: "Each bus takes the same 1 hour 25 minutes, so the latest he can leave is the deadline minus the journey time. Working backwards is quicker than adding the time onto every departure.",
                },
                {
                    stepNumber: 2,
                    description: "Subtract the hours, then the minutes.",
                    workingLatex: "17\\!:\\!00 - 1\\text{ h} = 16\\!:\\!00,\\quad 16\\!:\\!00 - 25\\text{ min} = 15\\!:\\!35",
                    explanation: "Take off 1 hour to reach 16:00, then 25 minutes to reach 15:35. So he must depart by 15:35 to arrive by 17:00.",
                },
                {
                    stepNumber: 3,
                    description: "Pick the latest departure that is no later than 15:35.",
                    workingLatex: "15\\!:\\!20 \\le 15\\!:\\!35 < 15\\!:\\!50",
                    explanation: "The 15:50 bus leaves too late (it would arrive at 17:15), so the latest he can use is the 15:20 bus, which arrives at 16:45 — comfortably before 17:00.",
                },
            ],
            finalAnswer: "He must catch the 15:20 bus from Wrexham.",
            canonicalAnswer: "the 15:20 bus",
        },
    },
    {
        id: "gn35-027",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|cccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} & \\text{Aberystwyth} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 & 117 \\\\\n\\text{Swansea} & 46 & - & 27 & 75 \\\\\n\\text{Carmarthen} & 73 & 27 & - & 56 \\\\\n\\text{Aberystwyth} & 117 & 75 & 56 & -\n\\end{array}\\)\n\nA delivery driver leaves Cardiff, drives to Swansea, then to Carmarthen, then returns directly to Cardiff. She drives at an average speed of \\(40\\) miles per hour. Work out the total driving time, in hours and minutes.",
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "speed distance time", "multi-leg route"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the three legs of the round trip.",
                    workingLatex: "\\text{Cardiff–Swansea}=46,\\;\\;\\text{Swansea–Carmarthen}=27,\\;\\;\\text{Carmarthen–Cardiff}=73",
                    explanation: "The final leg returns directly to Cardiff, so use the Carmarthen–Cardiff cell (73), not a route back through Swansea. Each leg is its own look-up.",
                },
                {
                    stepNumber: 2,
                    description: "Add the legs to find the total distance.",
                    workingLatex: "46 + 27 + 73 = 146",
                    explanation: "The whole round trip is 146 miles.",
                },
                {
                    stepNumber: 3,
                    description: "Use time = distance ÷ speed.",
                    workingLatex: "\\text{time} = \\dfrac{146}{40} = 3.65\\text{ hours}",
                    explanation: "Dividing 146 miles by 40 miles per hour gives 3.65 hours. This is a decimal number of hours and must be converted, not read as 3 hours 65 minutes.",
                },
                {
                    stepNumber: 4,
                    description: "Convert the decimal part of an hour into minutes.",
                    workingLatex: "0.65 \\cdot 60 = 39\\text{ min}",
                    explanation: "To change 0.65 of an hour into minutes, multiply by 60: 0.65 times 60 is 39 minutes. Converting the decimal correctly is the step most often slipped.",
                },
                {
                    stepNumber: 5,
                    description: "State the total time.",
                    workingLatex: "3.65\\text{ h} = 3\\text{ h }39\\text{ min}",
                    explanation: "The 3 whole hours stay as hours and the 0.65 becomes 39 minutes, so the driving time is 3 hours 39 minutes.",
                },
            ],
            finalAnswer: "The total driving time is 3 hours 39 minutes.",
            canonicalAnswer: "3 h 39 min",
        },
    },
    {
        id: "gn35-028",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "A train timetable for the Cardiff to Holyhead line is shown.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Train 1} & \\text{Train 2} & \\text{Train 3} \\\\ \\hline\n\\text{Cardiff (depart)} & 22\\!:\\!35 & 23\\!:\\!05 & 23\\!:\\!50 \\\\\n\\text{Bangor (arrive)} & 01\\!:\\!50 & 02\\!:\\!20 & 03\\!:\\!05\n\\end{array}\\)\n\nFor Train 3, work out the journey time from Cardiff to Bangor, in hours and minutes.",
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "across midnight", "duration"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Read the depart and arrive times for Train 3.",
                    workingLatex: "\\text{depart }23\\!:\\!50,\\quad \\text{arrive }03\\!:\\!05",
                    explanation: "Train 3 leaves Cardiff at 23:50 and arrives in Bangor at 03:05 the next day, so the journey crosses midnight.",
                },
                {
                    stepNumber: 2,
                    description: "Find the time from departure to midnight.",
                    workingLatex: "23\\!:\\!50 \\to 24\\!:\\!00 = 10\\text{ min}",
                    explanation: "From 23:50 to midnight (00:00) is 10 minutes. Splitting at midnight is essential when the arrival is on the next day.",
                },
                {
                    stepNumber: 3,
                    description: "Find the time from midnight to arrival.",
                    workingLatex: "00\\!:\\!00 \\to 03\\!:\\!05 = 3\\text{ h }5\\text{ min}",
                    explanation: "From midnight to 03:05 is 3 hours and 5 minutes.",
                },
                {
                    stepNumber: 4,
                    description: "Add the two parts.",
                    workingLatex: "10\\text{ min} + 3\\text{ h }5\\text{ min} = 3\\text{ h }15\\text{ min}",
                    explanation: "Adding 10 minutes to 3 hours 5 minutes gives 3 hours 15 minutes for the whole overnight journey.",
                },
            ],
            finalAnswer: "Train 3 takes 3 hours 15 minutes.",
            canonicalAnswer: "3 h 15 min",
        },
    },
    {
        id: "gn35-029",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "The distance chart shows distances in miles between towns in Wales.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Cardiff} & \\text{Swansea} & \\text{Carmarthen} \\\\ \\hline\n\\text{Cardiff} & - & 46 & 73 \\\\\n\\text{Swansea} & 46 & - & 27 \\\\\n\\text{Carmarthen} & 73 & 27 & -\n\\end{array}\\)\n\nA van's fuel economy is \\(36\\) miles per gallon, and diesel costs \\(\\pounds 6.30\\) per gallon. The van drives from Cardiff to Carmarthen and back to Cardiff. Work out the total fuel cost for the round trip.",
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ["mileage chart", "cost", "fuel economy", "return journey"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find the total round-trip distance.",
                    workingLatex: "\\text{Cardiff–Carmarthen}=73,\\quad 73 \\cdot 2 = 146",
                    explanation: "The Cardiff–Carmarthen cell is 73 miles; the round trip covers this twice, giving 146 miles. Remember to double for there and back.",
                },
                {
                    stepNumber: 2,
                    description: "Work out how many gallons of fuel are needed.",
                    workingLatex: "\\text{gallons} = \\dfrac{146}{36}",
                    explanation: "Miles per gallon means each gallon covers 36 miles, so the number of gallons is the distance divided by the economy.",
                },
                {
                    stepNumber: 3,
                    description: "Carry out the division.",
                    workingLatex: "\\dfrac{146}{36} = 4.0\\overline{5}\\,\\text{ gallons} \\approx 4.0556",
                    explanation: "146 divided by 36 is about 4.0556 gallons; keep the unrounded value for now so the cost is accurate.",
                },
                {
                    stepNumber: 4,
                    description: "Multiply the gallons by the price per gallon.",
                    workingLatex: "4.0556 \\cdot \\pounds 6.30 = \\pounds 25.55",
                    explanation: "Multiplying the gallons by 6.30 pounds gives 25.55 pounds (to the nearest penny). Multiplying distance directly by price would be wrong — you must convert to gallons first.",
                },
            ],
            finalAnswer: "The total fuel cost is about £25.55.",
            canonicalAnswer: "£25.55",
        },
    },
    {
        id: "gn35-030",
        topicRef: "gn35",
        topicTitle: "Reading mileage charts and timetables (Wales)",
        difficulty: "Challenge",
        answerType: "expression",
        questionText:
            "A bus timetable from Cardiff to Aberystwyth, calling at Merthyr Tydfil, is shown.\n\n\\(\\begin{array}{l|ccc}\n & \\text{Bus 1} & \\text{Bus 2} & \\text{Bus 3} \\\\ \\hline\n\\text{Cardiff (depart)} & 06\\!:\\!55 & 09\\!:\\!25 & 11\\!:\\!55 \\\\\n\\text{Merthyr Tydfil (arrive)} & 07\\!:\\!50 & 10\\!:\\!20 & 12\\!:\\!50 \\\\\n\\text{Merthyr Tydfil (depart)} & 07\\!:\\!58 & 10\\!:\\!28 & 12\\!:\\!58 \\\\\n\\text{Aberystwyth (arrive)} & 10\\!:\\!05 & 12\\!:\\!35 & 15\\!:\\!05\n\\end{array}\\)\n\nDelyth needs to arrive in Aberystwyth by \\(13\\!:\\!00\\). She takes the latest possible bus. Work out the total time her journey takes from leaving Cardiff to arriving in Aberystwyth, including the stop at Merthyr Tydfil.",
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ["timetable", "latest departure", "duration", "deadline"],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Compare the Aberystwyth arrival times with 13:00.",
                    workingLatex: "10\\!:\\!05 \\le 13\\!:\\!00,\\;\\; 12\\!:\\!35 \\le 13\\!:\\!00,\\;\\; 15\\!:\\!05 > 13\\!:\\!00",
                    explanation: "She must arrive by 13:00, so check the final-row arrival times. Bus 1 and Bus 2 are in time; Bus 3 arrives too late at 15:05.",
                },
                {
                    stepNumber: 2,
                    description: "Choose the latest bus that arrives in time.",
                    workingLatex: "\\text{Bus 2: depart Cardiff }09\\!:\\!25,\\;\\text{arrive Aberystwyth }12\\!:\\!35",
                    explanation: "Of the two suitable buses, Bus 2 leaves later, so the latest possible bus is Bus 2, departing Cardiff at 09:25 and arriving 12:35.",
                },
                {
                    stepNumber: 3,
                    description: "Count from 09:25 up to whole hours near the arrival.",
                    workingLatex: "09\\!:\\!25 \\to 12\\!:\\!25 = 3\\text{ h}",
                    explanation: "Adding three whole hours to 09:25 reaches 12:25; this keeps the calculation in clean steps and includes the Merthyr Tydfil stop automatically, since we are using start and end times.",
                },
                {
                    stepNumber: 4,
                    description: "Add the remaining minutes to reach 12:35.",
                    workingLatex: "12\\!:\\!25 \\to 12\\!:\\!35 = 10\\text{ min}",
                    explanation: "From 12:25 to the arrival at 12:35 is a further 10 minutes.",
                },
                {
                    stepNumber: 5,
                    description: "State the total journey time.",
                    workingLatex: "3\\text{ h} + 10\\text{ min} = 3\\text{ h }10\\text{ min}",
                    explanation: "The total time from leaving Cardiff to arriving in Aberystwyth is 3 hours 10 minutes; because we measured from departure to final arrival, the 8-minute stop at Merthyr Tydfil is already included.",
                },
            ],
            finalAnswer: "The journey takes 3 hours 10 minutes in total.",
            canonicalAnswer: "3 h 10 min",
        },
    },
];
