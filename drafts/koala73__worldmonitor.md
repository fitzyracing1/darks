<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89731 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Desktop Canary (Linux)" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Desktop Canary (Linux)** workflow (`.github/workflows/test-linux-app.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40823444326 — dark (conclusion: `failure`), 2026-10-29 05:26 UTC
- Dark since: 2026-10-29 05:26 UTC (first run of the current streak)
- Job / step: `test-linux-app` → `Smoke-test AppImage`
- Likely cause: ✅ Sidecar remained alive through the observation window

<details><summary>End of the job log</summary>

```
SIDECAR_STATUS=ready
SIDECAR_FINAL_STATUS=alive
sidecar remained alive with HTTP 401
APP_STATUS=running
✅ AppImage launched successfully
✅ Sidecar became ready on 127.0.0.1:46123
✅ Sidecar remained alive through the observation window
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
