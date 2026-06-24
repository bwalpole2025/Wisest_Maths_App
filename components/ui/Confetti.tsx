"use client";

/**
 * CSS-only celebration confetti. Renders a fixed full-screen burst of falling
 * pieces; mount it briefly (e.g. on a lesson-complete screen). Deterministic
 * (no Math.random) so it's SSR-safe.
 */
const COLORS = ["#22d3ee", "#a78bfa", "#a3e635", "#fb923c", "#f472b6", "#facc15"];

export function Confetti({ pieces = 80 }: { pieces?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden>
      {Array.from({ length: pieces }).map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i % 10) * 0.12;
        const duration = 2.4 + ((i * 13) % 18) / 10;
        const color = COLORS[i % COLORS.length];
        const rotate = (i * 47) % 360;
        return (
          <span
            key={i}
            className="confetti-piece"
            style={{
              left: `${left}%`,
              background: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
