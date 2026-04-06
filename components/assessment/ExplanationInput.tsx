"use client";

import { useState } from "react";

export function ExplanationInput({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState("");

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        Explain your reasoning
      </label>
      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded border border-input px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        placeholder="Describe the steps you took to solve this problem..."
      />
      <button
        onClick={() => onSubmit(text)}
        className="mt-3 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent/90"
      >
        Submit Explanation
      </button>
    </div>
  );
}
