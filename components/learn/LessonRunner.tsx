"use client";

import { useState, Fragment } from "react";
import { MathText } from "@/components/questions/MathText";
import { CurveDiagram } from "@/components/questions/CurveDiagram";
import { MathSymbolField } from "@/components/tutor/MathSymbolField";
import { OptionCard, type OptionState } from "@/components/learn/OptionCard";
import { Confetti } from "@/components/ui/Confetti";
import type { Lesson } from "@/lib/data/lessons/types";
import type { TurnEvaluation, GuidedAttempt } from "@/lib/ai/socratic/types";

/** Mark a subtopic's lesson complete (lightweight client-side progress). */
function markDone(ref: string) {
  try {
    localStorage.setItem(`learn:done:${ref}`, "1");
  } catch {
    /* ignore (private mode / disabled storage) */
  }
}

export function lessonIsDone(ref: string): boolean {
  try {
    return localStorage.getItem(`learn:done:${ref}`) === "1";
  } catch {
    return false;
  }
}

const LETTERS = ["A", "B", "C", "D", "E"];

/** A left-aligned tutor message bubble. */
function TutorBubble({ tone = "accent", children }: { tone?: "accent" | "emerald" | "amber"; children: React.ReactNode }) {
  const tones = {
    accent: "border-accent/25 bg-accent/[0.07]",
    emerald: "border-emerald-400/40 bg-emerald-500/12",
    amber: "border-amber-400/40 bg-amber-500/10",
  } as const;
  const dot = { accent: "bg-accent", emerald: "bg-emerald-500", amber: "bg-amber-500" } as const;
  return (
    <div className={`mr-auto max-w-[88%] rounded-2xl rounded-tl-sm border px-4 py-3 fade-up ${tones[tone]}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-[#04222a] ${dot[tone]}`}>W</span>
        <p className="text-[10px] font-bold uppercase tracking-wide text-foreground/55">Wisest Tutor</p>
      </div>
      {children}
    </div>
  );
}

/** A right-aligned student message bubble. */
function UserBubble({ text, correct }: { text: string; correct?: boolean }) {
  return (
    <div className={`ml-auto max-w-[80%] rounded-2xl rounded-tr-sm border px-4 py-2.5 fade-up ${correct ? "border-emerald-400/40 bg-emerald-500/10" : "border-border bg-surface-raised"}`}>
      <div className="text-sm font-medium text-foreground"><MathText text={text} /></div>
    </div>
  );
}

export function LessonRunner({ lesson, onExit }: { lesson: Lesson; onExit: () => void }) {
  const [cardIndex, setCardIndex] = useState(0);

  // Free-text (fallback) state
  const [answer, setAnswer] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [evaluation, setEvaluation] = useState<TurnEvaluation | null>(null);

  // MCQ state
  const [wrongChoices, setWrongChoices] = useState<number[]>([]);
  const [solvedBy, setSolvedBy] = useState<"correct" | "reveal" | null>(null);

  // Shared
  const [attempts, setAttempts] = useState<GuidedAttempt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // The answer that resolved the card (shown as the final chat bubble).
  const [finalAnswer, setFinalAnswer] = useState<string | null>(null);

  const total = lesson.cards.length;
  const finished = cardIndex >= total;
  const card = finished ? null : lesson.cards[cardIndex];
  const mq = card?.miniQuestion;
  const isMCQ = !!mq?.options && mq.options.length > 0 && mq.correctIndex !== undefined;

  const solved = isMCQ ? solvedBy !== null : !!evaluation && (evaluation.answerCorrect || !!evaluation.correctWorking);

  function resetCardState() {
    setAnswer("");
    setReasoning("");
    setEvaluation(null);
    setWrongChoices([]);
    setSolvedBy(null);
    setAttempts([]);
    setError(null);
    setFinalAnswer(null);
  }

  function nextCard() {
    if (cardIndex + 1 >= total) markDone(lesson.topicRef);
    setCardIndex((i) => i + 1);
    resetCardState();
  }

  // ── AI nudge for a wrong MCQ choice ──────────────────────────────
  async function nudgeForChoice(optionText: string) {
    if (!card) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "check",
          topicRef: lesson.topicRef,
          cardId: card.id,
          answer: optionText,
          reasoning: "(picked this option)",
          attempts,
          revealRequested: false,
        }),
      });
      const data = await res.json();
      const ev = data.evaluation as TurnEvaluation | undefined;
      if (ev) {
        setAttempts((prev) => [
          ...prev,
          { answer: optionText, reasoning: "", feedback: ev.feedback, guidingQuestion: ev.guidingQuestion },
        ]);
      }
    } catch {
      /* a missing nudge shouldn't block the lesson — they can keep trying */
    } finally {
      setLoading(false);
    }
  }

  function pickOption(i: number) {
    if (!mq || solved || wrongChoices.includes(i)) return;
    if (i === mq.correctIndex) {
      setFinalAnswer(mq.options![i]);
      setSolvedBy("correct");
    } else {
      setWrongChoices((prev) => [...prev, i]);
      nudgeForChoice(mq.options![i]);
    }
  }

  function revealMCQ() {
    setSolvedBy("reveal");
  }

  // ── Free-text submit (fallback) ──────────────────────────────────
  async function submitText(reveal = false) {
    if (!card) return;
    const last = attempts[attempts.length - 1];
    const useAnswer = reveal && last ? last.answer : answer.trim();
    const useReasoning = reveal && last ? last.reasoning : reasoning.trim();
    if (!useAnswer) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "check",
          topicRef: lesson.topicRef,
          cardId: card.id,
          answer: useAnswer,
          reasoning: useReasoning,
          attempts,
          revealRequested: reveal,
        }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      const ev = data.evaluation as TurnEvaluation | undefined;
      if (!ev) { setError("Couldn't check that. Please try again."); return; }
      const stillNudging = !reveal && !ev.answerCorrect && !ev.correctWorking;
      if (stillNudging) {
        setAttempts((p) => [...p, { answer: useAnswer, reasoning: useReasoning, feedback: ev.feedback, guidingQuestion: ev.guidingQuestion }]);
        setAnswer("");
        setReasoning("");
      } else {
        if (ev.answerCorrect) setFinalAnswer(useAnswer);
        setEvaluation(ev);
      }
    } catch {
      setError("Couldn't reach the tutor. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const optionState = (i: number): OptionState => {
    if (!mq) return "idle";
    if (solvedBy && i === mq.correctIndex) return "correct";
    if (wrongChoices.includes(i)) return "wrong";
    if (solvedBy) return "dimmed";
    return "idle";
  };

  return (
    <div className="space-y-6">
      {finished && <Confetti />}

      {/* Progress header */}
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-foreground/55">
          <span className="font-display">{finished ? "Complete" : `Card ${cardIndex + 1} of ${total}`}</span>
          <button onClick={onExit} className="hover:text-accent transition-colors">Exit lesson</button>
        </div>
        <div className="seg-progress">
          {lesson.cards.map((_, i) => (
            <span key={i} className={finished || i < cardIndex ? "is-done" : i === cardIndex ? "is-active" : ""} />
          ))}
        </div>
      </div>

      {/* Completion */}
      {finished && (
        <div className="card-dark-glow rounded-3xl p-8 text-center fade-up">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-secondary text-3xl text-[#04222a] shadow-[0_0_40px_-6px_hsl(var(--accent)/0.7)] pop-in">🎉</div>
          <h2 className="font-display text-2xl font-extrabold text-foreground">Lesson complete!</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-foreground/65">You worked through every idea in <span className="font-semibold text-foreground">{lesson.title}</span>. That one&apos;s yours now.</p>
          <button onClick={onExit} className="btn-3d mt-6 inline-flex items-center gap-2 px-7 py-3.5 text-sm">
            Back to lessons <span aria-hidden>→</span>
          </button>
        </div>
      )}

      {/* Active card */}
      {card && mq && (
        <div className="space-y-5 fade-up">
          {/* Concept */}
          <div className="card-dark-glow rounded-3xl p-6">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Concept</div>
            <h2 className="font-display text-xl font-bold text-foreground">{card.title}</h2>
            <div className="mt-3 text-[0.97rem] leading-relaxed text-foreground/85"><MathText text={card.concept} /></div>
            {card.diagram && <CurveDiagram config={card.diagram} />}
          </div>

          {/* ── Chat thread: question → attempts → nudges → resolution ── */}
          <div className="space-y-3">
            {/* Tutor poses the mini-question */}
            <TutorBubble>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-accent/80">Your turn</div>
              <div className="text-[0.97rem] font-semibold leading-relaxed text-foreground"><MathText text={mq.prompt} /></div>
            </TutorBubble>

            {/* Each prior wrong attempt + the tutor's guiding question */}
            {attempts.map((a, i) => (
              <Fragment key={i}>
                <UserBubble text={a.answer} />
                <TutorBubble>
                  <div className="text-sm leading-relaxed text-foreground/85"><MathText text={a.feedback} /></div>
                  {a.guidingQuestion && (
                    <div className="mt-2 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-sm font-medium text-foreground"><MathText text={a.guidingQuestion} /></div>
                  )}
                </TutorBubble>
              </Fragment>
            ))}

            {/* Resolution: the winning answer + the insight */}
            {solved && (
              <>
                {finalAnswer && <UserBubble text={finalAnswer} correct={solvedBy === "correct"} />}
                <TutorBubble tone={solvedBy === "reveal" ? "amber" : "emerald"}>
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {solvedBy === "reveal" ? "Here's the idea" : evaluation && !evaluation.answerCorrect ? "Let's walk through it" : "Correct! 🎉"}
                  </h3>
                  {!isMCQ && evaluation && (
                    <div className="mt-1 text-sm leading-relaxed text-foreground/85"><MathText text={evaluation.feedback} /></div>
                  )}
                  <div className="mt-1 text-sm leading-relaxed text-foreground/85"><MathText text={mq.insight} /></div>
                  {!isMCQ && evaluation?.correctWorking && (
                    <div className="mt-3 space-y-1.5 rounded-xl border border-border bg-card/60 p-4 text-sm text-foreground/80">
                      {evaluation.correctWorking.split("\n").filter((l) => l.trim()).map((l, i) => (
                        <div key={i}><MathText text={l.trim()} /></div>
                      ))}
                    </div>
                  )}
                </TutorBubble>
              </>
            )}

            {loading && <p className="pl-1 text-xs text-foreground/45">Wisest Tutor is thinking…</p>}
          </div>

          {/* ── Answer dock (pinned below the chat) ── */}
          {!solved ? (
            <div className="card-dark-glow space-y-4 rounded-3xl p-5">
              {isMCQ ? (
                <>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {mq.options!.map((opt, i) => (
                      <OptionCard
                        key={i}
                        label={LETTERS[i] ?? String(i + 1)}
                        text={opt}
                        state={optionState(i)}
                        disabled={solved || wrongChoices.includes(i)}
                        onClick={() => pickOption(i)}
                      />
                    ))}
                  </div>
                  {wrongChoices.length > 0 && (
                    <button onClick={revealMCQ} className="text-xs font-semibold text-foreground/50 underline underline-offset-2 hover:text-accent">
                      Stuck? Reveal the answer
                    </button>
                  )}
                </>
              ) : (
                <>
                  <MathSymbolField label="Your answer" value={answer} onChange={setAnswer} maxLength={500} placeholder="Type your answer…" />
                  <MathSymbolField label="Your thinking (optional)" value={reasoning} onChange={setReasoning} maxLength={500} placeholder="Why? (optional)" />
                  {error && <div className="rounded-lg border border-rose-400/40 bg-rose-500/10 p-4 text-sm text-rose-300">{error}</div>}
                  <div className="flex flex-wrap items-center gap-4">
                    <button onClick={() => submitText()} disabled={!answer.trim() || loading} className="btn-3d inline-flex items-center gap-2 px-6 py-3 text-sm">
                      {loading ? "Checking…" : attempts.length > 0 ? "Send" : "Check"}
                    </button>
                    {attempts.length > 0 && (
                      <button onClick={() => submitText(true)} disabled={loading} className="text-xs font-semibold text-foreground/50 underline underline-offset-2 hover:text-accent disabled:opacity-40">
                        Stuck? Show me the answer
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          ) : (
            <button onClick={nextCard} className="btn-3d inline-flex items-center gap-2 px-7 py-3.5 text-sm">
              {cardIndex + 1 >= total ? "Finish lesson" : "Continue"} <span aria-hidden>→</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
