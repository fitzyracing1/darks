<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 227198 · **Generated:** 2026-11-16T12:52:35.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "check-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43840413786 — dark (conclusion: `failure`), 2026-11-16 09:30 UTC
- Dark since: 2026-11-13 09:22 UTC (first run of the current streak)
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43865599159 — dark (conclusion: `failure`), 2026-11-16 12:19 UTC
- Dark since: 2026-11-16 11:20 UTC (first run of the current streak)
- Job / step: `e2e (windows, app-2)` → `Run app e2e tests against production build`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
[375/375] [chromium] › e2e\regression\settings.spec.ts:2677:1 › the Side tabs interface mode switches to vertical tabs and survives reload
[376/375] [chromium] › e2e\regression\settings.spec.ts:2696:3 › settings layout (desktop): every page scrolls inside settings with room below
[377/375] [chromium] › e2e\regression\settings.spec.ts:2696:3 › settings layout (mobile): every page scrolls inside settings with room below
  1 failed
    [chromium] › e2e\regression\settings.spec.ts:278:3 › background activity alignment stays physical and persists (ar)
  374 passed (5.2m)
error: script "test:e2e:built" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
