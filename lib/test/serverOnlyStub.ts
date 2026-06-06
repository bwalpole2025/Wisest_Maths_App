// Empty stand-in for the `server-only` package in the vitest (node) environment.
// `server-only` throws on import outside a React Server Component, which breaks
// importing server modules (e.g. lib/services/quizGenerator) under test.
export {};
