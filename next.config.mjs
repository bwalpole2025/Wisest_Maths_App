/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

/**
 * Content-Security-Policy.
 *
 * Applied in production only — the Next.js dev server relies on inline eval and
 * websockets for HMR, which a strict CSP would break. Hardening follow-up:
 * replace 'unsafe-inline' on script-src with a per-request nonce.
 *
 * tikzjax.com is allowed because the app loads its stylesheet/fonts (see
 * app/layout.tsx) for rendering TikZ maths diagrams.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://tikzjax.com",
  "style-src 'self' 'unsafe-inline' https://tikzjax.com",
  "img-src 'self' data: https:",
  "font-src 'self' data: https://tikzjax.com",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS only meaningful over HTTPS — emit in production.
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        { key: "Content-Security-Policy", value: csp },
      ]
    : []),
];

const nextConfig = {
  // /api/summaries reads lib/data/summaries.generated.json at runtime with fs
  // (not via import, to keep the 4MB file out of the bundle). Ensure the file is
  // traced into the standalone/serverless output so the read works in prod.
  outputFileTracingIncludes: {
    "/api/summaries": ["./lib/data/summaries.generated.json"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
