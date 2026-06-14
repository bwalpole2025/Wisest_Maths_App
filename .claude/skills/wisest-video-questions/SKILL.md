---
name: wisest-video-questions
description: "Produce a LaTeX video recording-script for the Wisest AI Tutor platform: fresh A-Level Mathematics questions with fully-narrated worked solutions, auto-packed to fit a 10-minute video. Trigger whenever the user says 'run wisest video questions on [topic]', or asks for a video script, recording script, lesson script, narrated worked solutions, or video-ready content for an A-Level maths topic — even if they don't mention LaTeX, Wisest, or video explicitly. Also trigger on topic codes like y2df3, y2in4, y2pf1 paired with words like 'video', 'script', 'record', 'narrate', or 'explain on camera'. Generates the questions, writes spoken narration plus on-screen maths as two parallel tracks with timing markers, and compiles a PDF."
---

# Wisest Video Questions

Turn an A-Level Maths topic into a **ready-to-record video script**: a LaTeX document containing freshly-generated questions with fully-narrated worked solutions, sized so the finished video runs **no longer than 10 minutes**.

This is the *narrated, spoken* counterpart to the `wisest-question-generator` skill. That skill is deliberately terse (silent worked solutions, empty explanations). **This skill is the opposite** — every step has a voiceover that explains the *why* in warm, spoken English, because a human is going to read it aloud on camera.

## When to use

The headline trigger is **"run wisest video questions on [topic]"**, where `[topic]` is an A-Level Maths topic or subtopic (a name, a topicRef code like `y2df3`, or both). Also use it for any request for a video / recording / lesson script or narrated worked solutions for an A-Level topic.

The input is a **topic**, not an existing question file — generate fresh questions tuned for video.

## Core workflow

1. **Confirm the topic and a topicRef code.** If the user gave a topic name but no code (e.g. "quotient rule"), propose a sensible `topicRef` (e.g. `y2df`-style) and the exam-board context. If they already gave a code, don't re-ask.

2. **Read `references/timing-and-method.md`.** It holds the timing model, the Edexcel method constraints, the difficulty ramp, and the narration style. Follow it closely — the timing model is the heart of this skill.

3. **Generate questions one at a time on an easy→hard ramp**, estimating each one's spoken runtime as you go (formula in the reference). Keep a running total. **Stop adding questions before the total would exceed the ceiling** — reserve overhead for intro/outro. Aim to *fill* roughly 8:30–9:45; never exceed 10:00. This usually lands at 4–7 questions.

4. **Write each question as two parallel tracks:**
   - **SAY** — the narration: spoken-English explanation of each step, naming the A-Level method, explaining why, flagging common slips.
   - **ON SCREEN** — the maths line the presenter writes at that moment, in the codebase LaTeX conventions.
   Pair one SAY block with the one ON SCREEN line it produces.

5. **Build the `.tex` from `assets/video-script-template.tex`.** Copy the template, keep its preamble and the `\question`, `say`, `screen`, `answer` environments intact, and fill in the content. Put a cumulative timing range on every question heading and the final runtime estimate in the title block and page header.

6. **Compile and present.** Save to `/mnt/user-data/outputs/`, compile with `pdflatex` (run it twice so the header runtime resolves), and present **both** the `.tex` and the `.pdf` with `present_files`. Then tell the user the final estimated runtime and the question count.

## Method quality (non-negotiable)

Every line of working must be **correct** and reachable with **Edexcel A-Level methods only** — see the method constraints in the reference. Differentiate / integrate / solve each question yourself before writing it down, and check the final answer matches the last on-screen line. If a clean solution would need an off-spec tool (L'Hôpital, etc.), swap the question rather than smuggling the tool in.

## Output format

Always this structure (the template enforces it):

```
Title block:  topic, topicRef, question count, estimated runtime, 10:00 ceiling
Intro:        one SAY line the presenter opens with
Per question: \question{n}{difficulty}{start}{end}{descriptor}
                ON SCREEN  — the question as posed
                SAY        — read it + "pause and try" cue
                SAY / ON SCREEN pairs, one per solution step
                ANSWER     — final answer
Outro:        (implicit in the runtime budget)
```

## Compiling

```bash
cd /mnt/user-data/outputs
pdflatex -interaction=nonstopmode <file>.tex
pdflatex -interaction=nonstopmode <file>.tex   # twice: resolves the header clock
```

The template uses `tcolorbox`, `titlesec`, `fancyhdr`, `enumitem` — standard TeX Live packages. If a compile fails because a package is missing in the user's environment, report the missing package; don't silently strip the styling.

## Interaction style

This skill is for Benjamin building Wisest, not for end-students. Be direct, skip pleasantries. Confirm topic + code, generate, pack to time, compile, present, report the runtime. Done.

If the user provides an example script or states a preference (pace, more/fewer common-error callouts, a different difficulty mix), mirror it — their stated style beats the defaults here.
