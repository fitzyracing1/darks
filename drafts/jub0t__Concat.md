<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: ready -->
# Upstream issue draft: jub0t/Concat

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 8916 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Build for phones", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build for phones (`.github/workflows/mobile.yml`)

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39124157274 — dark (conclusion: `failure`), 2026-10-18 11:40 UTC
- Dark since: 2026-10-16 06:38 UTC (first run of the current streak)
- Job / step: `Android smoke (API 30)` → `Start the APK on an emulator`
- Likely cause: The action 'Start the APK on an emulator' has timed out after 30 minutes.

<details><summary>End of the job log</summary>

```
Status: ok
LaunchState: COLD
Activity: app.concat.editor/android.app.NativeActivity
TotalTime: 1260
WaitTime: 1264
Complete
== watch for 60s
##[error]The action 'Start the APK on an emulator' has timed out after 30 minutes.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39124157347 — dark (conclusion: `failure`), 2026-10-18 11:40 UTC
- Dark since: 2026-10-16 17:34 UTC (first run of the current streak)
- Job / step: `Engine tests and lints` → `Run cargo fmt --check`
- Likely cause: +            assert!(

<details><summary>End of the job log</summary>

```
+                check(&minted).is_ok(),
+                "{minted}: {}",
+                estimated_bits(&minted)
+            );
         }
         for weak in [
             "",
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
