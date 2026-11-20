<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11956 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44783339247 — dark (conclusion: `cancelled`), 2026-11-20 17:26 UTC
- Dark since: 2026-11-18 03:14 UTC (first run of the current streak)
- Likely cause: run cancelled

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44673985543 — dark (conclusion: `failure`), 2026-11-20 04:22 UTC
- Dark since: 2026-11-20 04:22 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-eps --lib'

<details><summary>End of the job log</summary>

```
thread 'import::tests::search_in_a_loop_runs_out_of_the_budget' (216675) panicked at crates/eps/src/import/tests.rs:1239:101:
reading 0 0 10 10 rectfill /h 4194304 string def /n 2097152 string def n 2097152 1 sub 1 put { h n search { pop pop pop } { pop } ifelse } loop did not finish
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    import::tests::search_in_a_loop_runs_out_of_the_budget
test result: FAILED. 1842 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 479.86s
error: test failed, to rerun pass `-p vectorcraft-eps --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
