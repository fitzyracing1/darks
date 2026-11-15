<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9588 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI Lint")
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43669354876 — dark (conclusion: `failure`), 2026-11-15 02:46 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate Publish workflow contracts`
- Likely cause: [release:test:contracts] ERROR task failed

<details><summary>End of the job log</summary>

```
Checked latest-only groups for 18 CI workflows and 78 jobs
[release:test:contracts] $ python3 scripts/ci/test_publish_workflow_contracts.py
Traceback (most recent call last):
  File "/home/runner/work/xberg/xberg/scripts/ci/test_publish_workflow_contracts.py", line 15, in <module>
    import yaml
ModuleNotFoundError: No module named 'yaml'
[release:test:contracts] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
