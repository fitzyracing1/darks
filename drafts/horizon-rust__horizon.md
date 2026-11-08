<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8081 · **Generated:** 2026-11-08T18:35:29.654Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("parity-main", "checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### parity-main (`.github/workflows/parity-main.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42509277236 — dark (conclusion: `cancelled`), 2026-11-08 18:17 UTC
- Dark since: 2026-11-08 04:57 UTC (first run of the current streak)
- Likely cause: run cancelled

### checks (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42509277206 — dark (conclusion: `failure`), 2026-11-08 18:17 UTC
- Dark since: 2026-11-08 18:17 UTC (first run of the current streak)
- Job / step: `verify` → `Test Rust core and voxel kernel correctness`
- Likely cause: error: test failed, to rerun pass '-p horizon-client-lib --lib'

<details><summary>End of the job log</summary>

```
---- save::tests::older_worlds_are_upgraded_on_opening stdout ----
thread 'save::tests::older_worlds_are_upgraded_on_opening' (15925) panicked at crates/horizon-world/src/datafix/tables.rs:218:13:
/home/runner/work/horizon/horizon/crates/horizon-world/../../.local/horizon-client/26.3/datafix-tables.json: No such file or directory (os error 2) (/home/runner/work/horizon/horizon/crates/horizon-world/../../.local/ho…
failures:
    save::tests::older_worlds_are_upgraded_on_opening
test result: FAILED. 2342 passed; 1 failed; 90 ignored; 0 measured; 0 filtered out; finished in 10.95s
error: test failed, to rerun pass `-p horizon-client-lib --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
