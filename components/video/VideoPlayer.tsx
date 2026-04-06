"use client";

import { useState, useEffect, useCallback } from "react";

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtu\.be\/([^?]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function extractVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : null;
}

interface VideoPlayerProps {
  url: string;
  title: string;
  onVideoComplete?: () => void;
}

export function VideoPlayer({ url, title, onVideoComplete }: VideoPlayerProps) {
  const [completed, setCompleted] = useState(false);

  /* Simulate completion after 5 minutes (or instantly in dev for testing) */
  useEffect(() => {
    if (!url || completed) return;
    const timer = setTimeout(() => {
      setCompleted(true);
      onVideoComplete?.();
    }, 5 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [url, completed, onVideoComplete]);

  const markComplete = useCallback(() => {
    if (!completed) {
      setCompleted(true);
      onVideoComplete?.();
    }
  }, [completed, onVideoComplete]);

  const youtubeId = url ? extractYouTubeId(url) : null;
  const vimeoId = url && !youtubeId ? extractVimeoId(url) : null;

  const embedSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?rel=0`
    : vimeoId
      ? `https://player.vimeo.com/video/${vimeoId}`
      : url || null;

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-md">
      <div className="relative aspect-video bg-primary/5">
        {embedSrc ? (
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <svg className="h-16 w-16 text-muted-foreground/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-sm font-medium text-muted-foreground">Video coming soon</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-border bg-white px-4 py-3">
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        {url && (
          <button
            onClick={markComplete}
            disabled={completed}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              completed
                ? "bg-green-100 text-green-700 cursor-default"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-white"
            }`}
          >
            {completed ? "Completed" : "Mark Complete"}
          </button>
        )}
      </div>
    </div>
  );
}
