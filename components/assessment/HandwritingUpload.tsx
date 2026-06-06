"use client";

/**
 * HandwritingUpload — lets a student photograph their handwritten working and
 * have it marked. POSTs the image (multipart) to /api/marking, which transcribes
 * the final answer (vision model) and marks it by symbolic equivalence. The
 * image is processed in-memory server-side and never stored.
 */

import { useRef, useState } from "react";
import { MathTextInline } from "@/components/questions/MathText";
import type { HandwritingMarkingResult } from "@/lib/types";

type Status = "idle" | "loading" | "done" | "error";

export function HandwritingUpload({
  questionId,
  disabled,
}: {
  questionId: string;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<HandwritingMarkingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
    setResult(null);
    setError(null);
    setStatus("idle");
  }

  async function submit() {
    if (!file) return;
    setStatus("loading");
    setError(null);
    const fd = new FormData();
    fd.append("image", file);
    fd.append("questionId", questionId);
    try {
      const res = await fetch("/api/marking", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Couldn't mark the photo. Please try again.");
        setStatus("error");
        return;
      }
      setResult(data as HandwritingMarkingResult);
      setStatus("done");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
        Or upload a photo or PDF of your working
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/heic,application/pdf"
        className="hidden"
        onChange={onPick}
        disabled={disabled}
      />

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled || status === "loading"}
          className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent/10 disabled:opacity-40"
        >
          {file ? "Choose a different file" : "Take a photo or choose an image / PDF"}
        </button>
        {file && (
          <button
            type="button"
            onClick={submit}
            disabled={disabled || status === "loading"}
            className="btn-shine rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-4 py-2 text-sm font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {status === "loading" ? "Marking…" : "Mark my work"}
          </button>
        )}
      </div>

      {preview && file?.type.startsWith("image/") && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="Your uploaded working"
          className="mt-3 max-h-56 rounded-lg border border-black/10 object-contain"
        />
      )}
      {file && !file.type.startsWith("image/") && (
        <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-3 py-2 text-sm text-foreground/70">
          <span aria-hidden>📄</span> PDF ready to mark
        </p>
      )}

      {status === "error" && error && (
        <p className="mt-3 rounded-lg bg-rose-50 border border-rose-200 px-3 py-2 text-sm text-rose-700">
          {error}
        </p>
      )}

      {status === "done" && result && <MarkingVerdict result={result} />}
    </div>
  );
}

function MarkingVerdict({ result }: { result: HandwritingMarkingResult }) {
  // Could not read the photo at all.
  if (!result.legible || result.recognised === null) {
    return (
      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-800">
        We couldn&apos;t read a final answer from your photo. Try a clearer, well-lit picture with the
        answer on its own line.
      </div>
    );
  }

  const tone =
    result.equivalent === true
      ? { box: "border-emerald-200 bg-emerald-50 text-emerald-800", label: "Correct" }
      : result.equivalent === false
        ? { box: "border-rose-200 bg-rose-50 text-rose-800", label: "Not quite" }
        : { box: "border-amber-200 bg-amber-50 text-amber-800", label: "Recorded — needs manual marking" };

  return (
    <div className={`mt-3 rounded-lg border px-3 py-2.5 text-sm ${tone.box}`}>
      <p className="font-bold">{tone.label}</p>
      <p className="mt-1">
        We read your answer as: <span className="font-mono">
          <MathTextInline text={result.recognised} />
        </span>
      </p>
      {result.equivalent === null && (
        <p className="mt-1 text-xs opacity-80">
          Your answer has been recorded; your teacher will review it.
        </p>
      )}
    </div>
  );
}
