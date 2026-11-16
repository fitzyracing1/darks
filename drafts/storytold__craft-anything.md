<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 33750 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43667762639 — dark (conclusion: `failure`), 2026-11-15 02:26 UTC
- Dark since: 2026-11-12 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-ai --lib'

<details><summary>End of the job log</summary>

```
  left: 0
 right: 3
failures:
    rebuild::kinds::runs::tests::a_relative_project_runs_a_console_check
    rebuild::tests::console_study_keeps_two_real_observations_for_each_input
test result: FAILED. 664 passed; 2 failed; 3 ignored; 0 measured; 0 filtered out; finished in 11.39s
error: test failed, to rerun pass `-p craft-anything-ai --lib`
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43745765821 — dark (conclusion: `failure`), 2026-11-15 18:15 UTC
- Dark since: 2026-11-15 18:15 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-engine --lib'

<details><summary>End of the job log</summary>

```
   5: <fn() -> core::result::Result<(), alloc::string::String> as core::ops::function::FnOnce<()>>::call_once
             at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core/src/ops/function.rs:250:5
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    plugins::tests::a_plugin_that_exits_at_once_says_what_it_printed_and_leaves_a_log
test result: FAILED. 688 passed; 1 failed; 13 ignored; 0 measured; 0 filtered out; finished in 6.03s
error: test failed, to rerun pass `-p craft-anything-engine --lib`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
