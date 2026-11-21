<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9605 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- CI Lint (`.github/workflows/ci-lint.yaml`): [issue #3343](https://github.com/xberg-io/xberg/issues/3343) "ci(lint): enforce cargo-deny on the shipped feature graphs and remove stale exceptions"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Integrations", "CI E2E", "CI Rust", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842060628 — dark (conclusion: `cancelled`), 2026-11-21 00:10 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842060587 — dark (conclusion: `cancelled`), 2026-11-21 00:10 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842060597 — dark (conclusion: `cancelled`), 2026-11-21 00:10 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44711470031 — dark (conclusion: `failure`), 2026-11-20 09:31 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Run API contract tests with schemathesis`
- Likely cause: Failed to establish a new connection: [Errno 111] Connection refused

<details><summary>End of the job log</summary>

```
━━━━━━━━━━━━━━━━━━━━
 ❌  Failed to load specification from http://localhost:8000/openapi.json after
 0.02s
 Schema Loading Error
 Connection failed
     Failed to establish a new connection: [Errno 111] Connection refused
Tip: Use `--wait-for-schema=NUM` to wait up to NUM seconds for schema availability.
##[error]Process completed with exit code 2.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842060652 — dark (conclusion: `cancelled`), 2026-11-21 00:10 UTC
- Dark since: 2026-11-20 18:26 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr`
- Likely cause: Canceling since a higher priority waiting request for ci-focused-pr-refs/heads/main-regressions exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
