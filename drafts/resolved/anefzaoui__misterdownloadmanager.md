<!-- dark-draft: anefzaoui/misterdownloadmanager -->
<!-- draft-state: resolved -->
# Upstream issue draft: anefzaoui/misterdownloadmanager

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/anefzaoui/misterdownloadmanager/issues/new
- **Stars:** 17917 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/45557892852 — dark (conclusion: `failure`), 2026-11-25 06:04 UTC
- Dark since: 2026-11-24 17:25 UTC (first run of the current streak)
- Job / step: `windows-x86` → `Tests`
- Likely cause: error: test failed, to rerun pass '-p mdm-crash --lib'

<details><summary>End of the job log</summary>

```
thread 'client::tests::a_monitor_that_exits_before_listening_is_not_waited_for' (4984) panicked at crates\crash\src\client.rs:463:9:
a gone monitor is not kept being waited for
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    client::tests::a_monitor_that_exits_before_listening_is_not_waited_for
test result: FAILED. 36 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.58s
error: test failed, to rerun pass `-p mdm-crash --lib`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining misterdownloadmanager!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
