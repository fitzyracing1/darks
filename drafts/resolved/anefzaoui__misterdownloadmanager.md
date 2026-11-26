<!-- dark-draft: anefzaoui/misterdownloadmanager -->
<!-- draft-state: resolved -->
# Upstream issue draft: anefzaoui/misterdownloadmanager

- **Status:** resolved — lit again (2026-11-26); nothing to file
- **Would be filed at:** https://github.com/anefzaoui/misterdownloadmanager/issues/new
- **Stars:** 18264 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/45727918962 — dark (conclusion: `failure`), 2026-11-26 00:19 UTC
- Dark since: 2026-11-26 00:19 UTC (first run of the current streak)
- Job / step: `ubuntu-latest` → `Tests`
- Likely cause: error: test failed, to rerun pass '-p mdm-app --lib'

<details><summary>End of the job log</summary>

```
---- app::fresh_address_tests::the_browsers_new_link_continues_the_download_whose_link_expired stdout ----
thread 'app::fresh_address_tests::the_browsers_new_link_continues_the_download_whose_link_expired' (22120) panicked at crates/app/src/app.rs:18853:13:
the download never started
failures:
    app::fresh_address_tests::the_browsers_new_link_continues_the_download_whose_link_expired
test result: FAILED. 896 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 21.52s
error: test failed, to rerun pass `-p mdm-app --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining misterdownloadmanager!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
