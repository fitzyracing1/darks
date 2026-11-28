<!-- dark-draft: erkamyaman/rust-anything -->
<!-- draft-state: resolved -->
# Upstream issue draft: erkamyaman/rust-anything

- **Status:** resolved — lit again (2026-11-28); nothing to file
- **Would be filed at:** https://github.com/erkamyaman/rust-anything/issues/new
- **Stars:** 10878 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/erkamyaman/rust-anything/actions/runs/46070244944 — dark (conclusion: `failure`), 2026-11-27 21:25 UTC
- Dark since: 2026-11-27 20:59 UTC (first run of the current streak)
- Job / step: `check` → `Run cargo test`
- Likely cause: error: test failed, to rerun pass '--test http'

<details><summary>End of the job log</summary>

```
  left: 0
 right: 6
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    go_server
test result: FAILED. 28 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 168.87s
error: test failed, to rerun pass `--test http`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rust-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
