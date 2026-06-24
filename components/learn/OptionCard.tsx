"use client";

import { MathText } from "@/components/questions/MathText";
import { cn } from "@/lib/utils";

export type OptionState = "idle" | "wrong" | "correct" | "dimmed";

/**
 * A Brilliant-style tappable answer card for a lesson mini-question.
 * Shows correct/wrong/dimmed states with the right colour + icon.
 */
export function OptionCard({
  label,
  text,
  state,
  disabled,
  onClick,
}: {
  label: string;
  text: string;
  state: OptionState;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group relative flex items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left transition-all",
        state === "idle" &&
          "border-border bg-card hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_28px_-10px_hsl(var(--accent)/0.6)]",
        state === "correct" && "border-emerald-400/70 bg-emerald-500/15 pop-in",
        state === "wrong" && "border-rose-400/70 bg-rose-500/15 shake",
        state === "dimmed" && "border-border bg-card opacity-40",
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors",
          state === "correct"
            ? "bg-emerald-500 text-white"
            : state === "wrong"
              ? "bg-rose-500 text-white"
              : "bg-muted text-foreground/70 group-hover:bg-accent/20 group-hover:text-accent",
        )}
      >
        {state === "correct" ? "✓" : state === "wrong" ? "✕" : label}
      </span>
      <span className="flex-1 text-[0.95rem] font-medium text-foreground">
        <MathText text={text} />
      </span>
    </button>
  );
}
