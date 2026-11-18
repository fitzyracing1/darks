<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9598 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "ADRs", "CI E2E", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44194583846 — dark (conclusion: `cancelled`), 2026-11-17 22:54 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Setup ONNX Runtime`
- Likely cause: run cancelled in job "Rust (windows-latest)"

<details><summary>End of the job log</summary>

```
##[start-action display=Prepare ONNX Runtime (Windows);id=__self_2.__run_3]
Cache miss: Downloading ONNX Runtime 1.24.2
Invoke-WebRequest: D:\a\xberg\xberg\scripts\ci\actions\setup-onnx-runtime\windows.ps1:38
Line |
  38 |    Invoke-WebRequest -Uri "https://github.com/microsoft/onnxruntime/re …
     |    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | Not Found
##[error]Process completed with exit code 1.
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44194583844 — dark (conclusion: `cancelled`), 2026-11-17 22:54 UTC
- Dark since: 2026-11-17 08:05 UTC (first run of the current streak)
- Job / step: `E2E (ruby)` → `Compile Ruby native extension`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling magnus-macros v0.9.1
   Compiling minijinja v3.1.0
   Compiling similar v3.2.1
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling xberg-rb v1.4.1 (/home/runner/work/xberg/xberg/packages/ruby/ext/xberg_rb/native)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44194583756 — dark (conclusion: `cancelled`), 2026-11-17 22:54 UTC
- Dark since: 2026-11-17 20:14 UTC (first run of the current streak)
- Job / step: `Python (py3.11.18)`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44194584413 — dark (conclusion: `failure`), 2026-11-17 22:54 UTC
- Dark since: 2026-11-17 22:54 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Format check`
- Likely cause: would reformat ./crates/xberg/tests/pdf_timeout_partial_pages_2958.rs

<details><summary>End of the job log</summary>

```
    e.g. ./.cargo/config.toml, ./README.md, ./crates/xberg/README.md
  pass --verbose to list every skipped file, or --format json for the full set
3 files will change.
  4,074 files checked
  1,653 files skipped: hash-stamped generated file (pass --fix-generated to format)
  79 files and 46 directories excluded by config
  204 files of unrecognized type not checked
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
