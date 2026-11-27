<!-- dark-draft: anefzaoui/misterdownloadmanager -->
<!-- draft-state: ready -->
# Upstream issue draft: anefzaoui/misterdownloadmanager

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anefzaoui/misterdownloadmanager/issues/new
- **Stars:** 18640 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/45943881730 — dark (conclusion: `failure`), 2026-11-27 05:07 UTC
- Dark since: 2026-11-27 05:07 UTC (first run of the current streak)
- Job / step: `windows-latest` → `Tests`
- Likely cause: error: test failed, to rerun pass '-p mdm-torrent --lib'

<details><summary>End of the job log</summary>

```
  left: 0
 right: 1048576
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    tests::a_torrent_picks_up_at_once_when_the_network_comes_back
test result: FAILED. 103 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 50.57s
error: test failed, to rerun pass `-p mdm-torrent --lib`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining misterdownloadmanager!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
