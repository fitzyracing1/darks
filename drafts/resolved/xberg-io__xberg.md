<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: resolved -->
# Upstream issue draft: xberg-io/xberg

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9431 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- CI E2E (`.github/workflows/ci-e2e.yaml`): [issue #2163](https://github.com/xberg-io/xberg/issues/2163) "ci(e2e): kotlin-android job loses its runner after ~1h50 on every completed run"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Lint", "CI Integrations", "CI Rust", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39460883066 — dark (conclusion: `cancelled`), 2026-10-20 16:50 UTC
- Dark since: 2026-10-19 19:30 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: run cancelled in job "validate / Validate (poly)"

<details><summary>End of the job log</summary>

```
whole-project checks
  ✓ cargo-clippy
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  × pyrefly
      pyrefly: 1: pyrefly: not found
##[error]Process completed with exit code 1.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39460882637 — dark (conclusion: `cancelled`), 2026-10-20 16:50 UTC
- Dark since: 2026-10-20 16:01 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling jsonschema v0.59.0
   Compiling icu_segmenter v2.3.0
   Compiling rmp-serde v1.3.1
   Compiling resvg v0.48.1
   Compiling rqrr-zeroize v0.10.1
   Compiling model2vec-rs v0.3.0
   Compiling liter-llm v2.3.0
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39460882651 — dark (conclusion: `cancelled`), 2026-10-20 16:50 UTC
- Dark since: 2026-10-20 16:01 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (paddle-ocr)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39460882630 — dark (conclusion: `cancelled`), 2026-10-20 16:50 UTC
- Dark since: 2026-10-20 16:50 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
