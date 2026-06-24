"use client";

/**
 * A text field (single-line or multiline) with a built-in maths-symbol palette.
 *
 * The student writes a plain-text answer/reasoning; the palette inserts common
 * Unicode maths glyphs (Greek letters, operators, powers, calculus, set/logic)
 * at the caret. Glyphs are used rather than LaTeX commands so they read cleanly
 * inside the input and are still understood by the AI evaluator downstream.
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Sym {
  label: string;
  insert: string;
  title?: string;
}
interface Group {
  name: string;
  icon: string;
  symbols: Sym[];
}

const GROUPS: Group[] = [
  {
    name: "Greek",
    icon: "π",
    symbols: [
      { label: "π", insert: "π", title: "pi" },
      { label: "θ", insert: "θ", title: "theta" },
      { label: "α", insert: "α", title: "alpha" },
      { label: "β", insert: "β", title: "beta" },
      { label: "γ", insert: "γ", title: "gamma" },
      { label: "δ", insert: "δ", title: "delta" },
      { label: "ε", insert: "ε", title: "epsilon" },
      { label: "λ", insert: "λ", title: "lambda" },
      { label: "μ", insert: "μ", title: "mu" },
      { label: "ρ", insert: "ρ", title: "rho" },
      { label: "σ", insert: "σ", title: "sigma" },
      { label: "φ", insert: "φ", title: "phi" },
      { label: "ω", insert: "ω", title: "omega" },
      { label: "Δ", insert: "Δ", title: "Delta" },
      { label: "Σ", insert: "Σ", title: "Sigma" },
      { label: "Ω", insert: "Ω", title: "Omega" },
    ],
  },
  {
    name: "Operators",
    icon: "±",
    symbols: [
      { label: "×", insert: "×" },
      { label: "÷", insert: "÷" },
      { label: "±", insert: "±" },
      { label: "∓", insert: "∓" },
      { label: "·", insert: "·", title: "multiply (dot)" },
      { label: "√", insert: "√" },
      { label: "∛", insert: "∛", title: "cube root" },
      { label: "≤", insert: "≤" },
      { label: "≥", insert: "≥" },
      { label: "≠", insert: "≠" },
      { label: "≈", insert: "≈" },
      { label: "≡", insert: "≡" },
      { label: "∝", insert: "∝", title: "proportional to" },
      { label: "∞", insert: "∞" },
      { label: "°", insert: "°", title: "degrees" },
      { label: "|x|", insert: "||", title: "modulus" },
    ],
  },
  {
    name: "Powers",
    icon: "x²",
    symbols: [
      { label: "x²", insert: "²", title: "squared" },
      { label: "x³", insert: "³", title: "cubed" },
      { label: "xⁿ", insert: "^", title: "power (caret)" },
      { label: "√( )", insert: "√()", title: "square root of…" },
      { label: "ⁿ√", insert: "ⁿ√", title: "nth root" },
      { label: "x₁", insert: "₁" },
      { label: "x₂", insert: "₂" },
      { label: "xₙ", insert: "ₙ" },
      { label: "½", insert: "½" },
      { label: "⅓", insert: "⅓" },
      { label: "¼", insert: "¼" },
      { label: "⅔", insert: "⅔" },
    ],
  },
  {
    name: "Calculus",
    icon: "∫",
    symbols: [
      { label: "∫", insert: "∫" },
      { label: "∫ dx", insert: "∫  dx", title: "definite/indefinite integral" },
      { label: "∮", insert: "∮", title: "contour integral" },
      { label: "∑", insert: "∑", title: "sum" },
      { label: "∏", insert: "∏", title: "product" },
      { label: "∂", insert: "∂", title: "partial derivative" },
      { label: "∇", insert: "∇", title: "nabla / grad" },
      { label: "′", insert: "′", title: "prime (f′)" },
      { label: "″", insert: "″", title: "double prime" },
      { label: "dy/dx", insert: "dy/dx", title: "first derivative" },
      { label: "d/dx", insert: "d/dx", title: "derivative operator" },
      { label: "d²y/dx²", insert: "d²y/dx²", title: "second derivative" },
      { label: "lim", insert: "lim ", title: "limit" },
      { label: "→", insert: "→", title: "tends to" },
    ],
  },
  {
    name: "Sets / Logic",
    icon: "∈",
    symbols: [
      { label: "∈", insert: "∈" },
      { label: "∉", insert: "∉" },
      { label: "⊆", insert: "⊆" },
      { label: "⊂", insert: "⊂" },
      { label: "∪", insert: "∪" },
      { label: "∩", insert: "∩" },
      { label: "∀", insert: "∀", title: "for all" },
      { label: "∃", insert: "∃", title: "there exists" },
      { label: "⇒", insert: "⇒", title: "implies" },
      { label: "⇔", insert: "⇔", title: "if and only if" },
      { label: "∴", insert: "∴", title: "therefore" },
      { label: "∵", insert: "∵", title: "because" },
    ],
  },
];

interface MathSymbolFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
}

export function MathSymbolField({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  multiline = false,
  rows = 4,
  disabled = false,
}: MathSymbolFieldProps) {
  const fieldRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pendingCaret = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(0);

  // Restore the caret after a symbol insertion re-renders the controlled field.
  useLayoutEffect(() => {
    if (pendingCaret.current != null && fieldRef.current) {
      const p = pendingCaret.current;
      fieldRef.current.focus();
      fieldRef.current.setSelectionRange(p, p);
      pendingCaret.current = null;
    }
  }, [value]);

  // Close the palette on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function insert(text: string) {
    if (disabled) return;
    const el = fieldRef.current;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? start;
    const next = value.slice(0, start) + text + value.slice(end);
    if (maxLength != null && next.length > maxLength) return; // respect the cap
    // Drop the caret just inside a trailing "()" / "||" wrapper so the student
    // can type the contents straight away.
    const inside = text.endsWith("()") || text.endsWith("||") ? 1 : 0;
    pendingCaret.current = start + text.length - inside;
    onChange(next);
  }

  const fieldClasses =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

  return (
    <div ref={wrapRef}>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="block text-sm font-semibold text-foreground">{label}</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            disabled={disabled}
            aria-expanded={open}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
              open
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-border bg-card text-foreground/70 hover:border-accent/30 hover:text-accent",
            )}
          >
            <span className="font-math text-sm leading-none">∑</span>
            Symbols
          </button>

          {open && (
            <div className="absolute right-0 top-9 z-30 w-[300px] rounded-xl border border-border bg-card p-3 shadow-xl sm:w-[340px]">
              {/* Group tabs */}
              <div className="mb-2 flex flex-wrap gap-1">
                {GROUPS.map((g, i) => (
                  <button
                    key={g.name}
                    type="button"
                    onClick={() => setGroup(i)}
                    className={cn(
                      "rounded-md px-2 py-1 text-xs font-medium transition-colors",
                      i === group
                        ? "bg-accent text-white"
                        : "text-foreground/60 hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <span className="font-math mr-1">{g.icon}</span>
                    {g.name}
                  </button>
                ))}
              </div>
              {/* Symbols grid */}
              <div className="grid grid-cols-6 gap-1.5">
                {GROUPS[group].symbols.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    title={s.title ?? s.label}
                    onClick={() => insert(s.insert)}
                    className="font-math flex h-9 items-center justify-center rounded-md border border-border bg-card text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Inserts at the cursor. Tip: use <span className="font-math">^</span> for powers,
                e.g. <span className="font-math">x^2</span>.
              </p>
            </div>
          )}
        </div>
      </div>

      {multiline ? (
        <textarea
          ref={fieldRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(fieldClasses, disabled && "cursor-not-allowed opacity-60")}
        />
      ) : (
        <input
          ref={fieldRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(fieldClasses, disabled && "cursor-not-allowed opacity-60")}
        />
      )}

      {maxLength != null && (
        <p className="mt-1 text-xs text-muted-foreground">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
}
