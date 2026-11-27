<!-- dark-draft: erkamyaman/rust-anything -->
<!-- draft-state: resolved -->
# Upstream issue draft: erkamyaman/rust-anything

- **Status:** resolved — lit again (2026-11-27); nothing to file
- **Would be filed at:** https://github.com/erkamyaman/rust-anything/issues/new
- **Stars:** 10065 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/erkamyaman/rust-anything/actions/runs/45853601304 — dark (conclusion: `failure`), 2026-11-26 15:53 UTC
- Dark since: 2026-11-25 20:39 UTC (first run of the current streak)
- Job / step: `macos` → `Run cargo test`
- Likely cause: error: test failed, to rerun pass '--test http'

<details><summary>End of the job log</summary>

```
thread 'a_ready_request_that_never_answers_2xx_fails_and_stops_the_server' (204262) panicked at tests/http.rs:507:5:
`python3 server.py` did not listen within 1s on port 53121
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    a_ready_request_that_never_answers_2xx_fails_and_stops_the_server
test result: FAILED. 26 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 736.58s
error: test failed, to rerun pass `--test http`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rust-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
