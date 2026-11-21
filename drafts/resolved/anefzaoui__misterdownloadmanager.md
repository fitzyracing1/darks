<!-- dark-draft: anefzaoui/misterdownloadmanager -->
<!-- draft-state: resolved -->
# Upstream issue draft: anefzaoui/misterdownloadmanager

- **Status:** resolved — lit again (2026-11-21); nothing to file
- **Would be filed at:** https://github.com/anefzaoui/misterdownloadmanager/issues/new
- **Stars:** 14770 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/44896904172 — dark (conclusion: `failure`), 2026-11-21 10:59 UTC
- Dark since: 2026-11-21 10:32 UTC (first run of the current streak)
- Job / step: `windows-x86` → `Tests`
- Likely cause: error: test failed, to rerun pass '-p mdm-tools --lib'

<details><summary>End of the job log</summary>

```
thread 'node::tests::installs_from_a_release_checked_against_its_signed_sums' (6468) panicked at crates\tools\src\node.rs:699:9:
Ok(Got { latest: "24.22.3", settled: None })
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    node::tests::installs_from_a_release_checked_against_its_signed_sums
test result: FAILED. 251 passed; 1 failed; 7 ignored; 0 measured; 0 filtered out; finished in 10.48s
error: test failed, to rerun pass `-p mdm-tools --lib`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining misterdownloadmanager!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
