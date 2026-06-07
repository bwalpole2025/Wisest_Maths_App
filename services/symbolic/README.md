# Symbolic sidecar (optional)

A minimal SymPy HTTP service for symbolic checks the Node diagnosis engine can't
do reliably with numeric sampling: true antiderivative comparison, robust
simplification, and exact-form classification. It is **optional** — when it is not
configured or is unreachable, the engine degrades to the sampling/math.js path.

## Endpoints
- `POST /equivalent  { a, b, mode }` → `{ equivalent: bool }`
  - `mode: "simplify"` — `a ≡ b` (simplify/expand/trigsimp/numeric).
  - `mode: "derivative"` — `a ≡ d/dx(b)`.
  - `mode: "antiderivative"` — `a` and `b` are antiderivatives of a common
    function (equal up to an additive constant).
- `POST /classify-form { expr }` → `{ isExact, hasSurd, hasFraction, isBareDecimal }`
- `GET /health` → `{ ok: true }`

## Security
- Input is parsed with `parse_expr` using a fixed whitelist of SymPy functions and
  **no Python builtins** — arbitrary code (`__import__`, `exec`, `eval`, quotes,
  underscores) is rejected before parsing. Inputs over 256 chars are refused.
- Each request runs in a **separate worker process with a hard wall-clock timeout**;
  an overrunning computation is terminated.
- **Run internally only.** Bind to loopback / a private network; never expose the
  port publicly. The Node app reaches it over the internal URL.

## Run (local dev)
```bash
cd services/symbolic
python -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --host 127.0.0.1 --port 8765
```
Then point the Node app at it:
```bash
export SYMBOLIC_SIDECAR_URL=http://127.0.0.1:8765
# optional: SYMBOLIC_SIDECAR_TIMEOUT_MS=1500
```
With `SYMBOLIC_SIDECAR_URL` unset, the engine runs sampling-only (no behaviour change).

## Test
```bash
cd services/symbolic && pip install -r requirements.txt
pytest                       # modes, classify-form, malicious-input rejection, hard timeout
```
(The Python tests are not part of `npm test`.)

## Docker
```bash
docker build -t wisest-symbolic services/symbolic
docker run --rm -p 127.0.0.1:8765:8765 wisest-symbolic   # loopback-only publish
```
