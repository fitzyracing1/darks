<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 224806 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Process daemon" workflow failing on dev since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Process daemon** workflow (`.github/workflows/check-process-daemon.yml`) on `dev` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

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
