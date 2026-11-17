<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 227527 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "check-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44055008456 — dark (conclusion: `failure`), 2026-11-17 09:22 UTC
- Dark since: 2026-11-17 09:22 UTC (first run of the current streak)
- Job / step: `dispatch` → `Dispatch beta test runs`
- Likely cause: could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: dispatch
could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)
##[error]Process completed with exit code 1.
```

</details>

### check-test (`.github/workflows/check-test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44143212983 — dark (conclusion: `failure`), 2026-11-17 18:00 UTC
- Dark since: 2026-11-17 17:53 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

<details><summary>End of the job log</summary>

```
[18:03:39.842] INFO (#57318): watcher subscribe {
  path: "C:\\Users\\runneradmin\\AppData\\Local\\Temp\\oc-ovpSh4\\tmp\\opencode-core-test-jsHunE\\config\\AGENTS.md",
  type: "file",
  ignores: 0,
}
[18:03:39.843] INFO (#57318): watcher subscribe {
  path: "C:\\Users\\runneradmin\\AppData\\Local\\Temp\\oc-ovpSh4\\.claude\\CLAUDE.md",
##[error]@opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
