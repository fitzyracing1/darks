<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 224764 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "Process daemon")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42081374747 — dark (conclusion: `cancelled`), 2026-11-05 18:08 UTC
- Dark since: 2026-11-05 16:59 UTC (first run of the current streak)
- Likely cause: run cancelled

### Process daemon (`.github/workflows/check-process-daemon.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42070085454 — dark (conclusion: `failure`), 2026-11-05 16:59 UTC
- Dark since: 2026-11-05 16:59 UTC (first run of the current streak)
- Job / step: `Windows (arm64)` → `Check Clippy`
- Likely cause: at /rustc/1159e78c4747b02ef996e55082b704c09b970588/library\core\src\panicking.rs:75

<details><summary>End of the job log</summary>

```
     3: build_script_build::main
               at .\build.rs:121
     4: core::ops::function::FnOnce::call_once<void (*)(),tuple$<> >
               at /rustc/1159e78c4747b02ef996e55082b704c09b970588\library\core\src\ops\function.rs:253
     5: core::hint::black_box
               at /rustc/1159e78c4747b02ef996e55082b704c09b970588\library\core\src\hint.rs:482
  note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
