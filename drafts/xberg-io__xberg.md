<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9588 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Lint", "CI Scripts", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43647711559 — dark (conclusion: `failure`), 2026-11-14 22:22 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Clippy formula recognition cell`
- Likely cause: function 'prune_element_text' is never used (crates/xberg/src/extractors/pdf/ocr/symbol_noise_lines.rs:371)

<details><summary>End of the job log</summary>

```
    Checking zip v9.5.1
    Checking criterion v0.8.2
    Checking jsonschema v0.61.1
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking qrcode v0.14.1
error: function `prune_element_text` is never used
##[error]   --> crates/xberg/src/extractors/pdf/ocr/symbol_noise_lines.rs:371:4
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43652792241 — dark (conclusion: `cancelled`), 2026-11-14 23:20 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `AI governance validation`
- Likely cause: The run was canceled by @tobocop2.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43652791896 — dark (conclusion: `cancelled`), 2026-11-14 23:20 UTC
- Dark since: 2026-11-14 14:35 UTC (first run of the current streak)
- Job / step: `Shell formatting`
- Likely cause: The run was canceled by @tobocop2.

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43652791834 — dark (conclusion: `cancelled`), 2026-11-14 23:20 UTC
- Dark since: 2026-11-14 23:20 UTC (first run of the current streak)
- Job / step: `Docker (full)`
- Likely cause: The run was canceled by @tobocop2.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
