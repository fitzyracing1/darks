<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8845 · **Generated:** 2026-11-12T06:44:18.567Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "checks" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **checks** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43163920620 — dark (conclusion: `failure`), 2026-11-12 05:49 UTC
- Dark since: 2026-11-11 18:17 UTC (first run of the current streak)
- Job / step: `verify` → `Test Rust core and voxel kernel correctness`
- Likely cause: error: test failed, to rerun pass '-p horizon-threads --lib'

<details><summary>End of the job log</summary>

```
             at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library/std/src/sys/thread/unix.rs:123:17
  27: <unknown>
  28: <unknown>
failures:
    stack_dump::tests::reads_the_stack_of_a_busy_thread_from_another
test result: FAILED. 23 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.48s
error: test failed, to rerun pass `-p horizon-threads --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
