"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Renders a TikZ diagram by loading TikZJax inside an isolated iframe.
 *
 * Why an iframe?
 *   TikZJax scans the document for <script type="text/tikz"> once, synchronously,
 *   when its JS loads — it has no public re-scan API and no MutationObserver.
 *   Making that work with React's dynamic rendering (worked solutions unfold
 *   lazily, multiple diagrams mount independently) is fragile. An iframe gives
 *   each diagram a fresh document, so TikZJax's standard load-time scan works
 *   without any coordination.
 *
 * The iframe posts its content size back to the parent so we can match heights.
 */
export function TikzDiagram({ source }: { source: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(420);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const srcDoc = useMemo(
    () => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
  <style>
    html, body { margin: 0; padding: 16px; font-family: system-ui, sans-serif; background: transparent; }
    body { display: flex; justify-content: center; align-items: center; }
    svg { max-width: 100%; height: auto; }
    #err { color: #b91c1c; font-size: 12px; padding: 8px; }
  </style>
</head>
<body>
  <div id="wrap"><script type="text/tikz" data-show-console="true">${source}</script></div>
  <script src="https://tikzjax.com/v1/tikzjax.js"></script>
  <script>
    (function () {
      function report() {
        var svg = document.querySelector('svg');
        var ready = !!svg;
        var h = Math.ceil(document.body.scrollHeight) + 4;
        window.parent.postMessage({ type: 'tikz', ready: ready, height: h }, '*');
      }
      // Poll briefly until SVG appears (TikZJax is async internally).
      var tries = 0;
      var id = setInterval(function () {
        tries++;
        var svg = document.querySelector('svg');
        if (svg) { report(); clearInterval(id); }
        else if (tries > 120) { // ~60s max
          clearInterval(id);
          window.parent.postMessage({ type: 'tikz', ready: false, height: 60, error: true }, '*');
        }
      }, 500);
      window.addEventListener('error', function (e) {
        window.parent.postMessage({ type: 'tikz', ready: false, height: 60, error: true, message: String(e.message || e) }, '*');
      });
    })();
  </script>
</body>
</html>`,
    [source],
  );

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || e.data.type !== "tikz") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      if (typeof e.data.height === "number") {
        setHeight(Math.max(80, e.data.height));
      }
      if (e.data.ready) setStatus("ready");
      else if (e.data.error) setStatus("error");
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="my-4">
      <iframe
        ref={iframeRef}
        srcDoc={srcDoc}
        title="TikZ diagram"
        sandbox="allow-scripts allow-same-origin"
        style={{
          width: "100%",
          height: `${height}px`,
          border: "none",
          display: "block",
        }}
      />
      {status === "loading" && (
        <p className="mt-1 text-center text-xs italic text-muted-foreground">
          Rendering diagram… (first load downloads the TikZJax engine, ~2 MB)
        </p>
      )}
      {status === "error" && (
        <p className="mt-1 text-center text-xs italic text-red-600">
          Diagram failed to render.
        </p>
      )}
    </div>
  );
}
