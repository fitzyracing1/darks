<!-- dark-draft: erkamyaman/rust-anything -->
<!-- draft-state: resolved -->
# Upstream issue draft: erkamyaman/rust-anything

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/erkamyaman/rust-anything/issues/new
- **Stars:** 9445 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/erkamyaman/rust-anything/actions/runs/45597165813 — dark (conclusion: `failure`), 2026-11-25 10:40 UTC
- Dark since: 2026-11-25 08:49 UTC (first run of the current streak)
- Job / step: `check` → `Run cargo test`
- Likely cause: error: test failed, to rerun pass '--test app_stale'

<details><summary>End of the job log</summary>

```
thread 'an_http_case_dropped_from_the_inputs_is_removed_on_rerecord' (79102) panicked at tests/app_stale.rs:45:6:
called `Result::unwrap()` on an `Err` value: port 36239 is already in use
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    an_http_case_dropped_from_the_inputs_is_removed_on_rerecord
test result: FAILED. 8 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.22s
error: test failed, to rerun pass `--test app_stale`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rust-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
