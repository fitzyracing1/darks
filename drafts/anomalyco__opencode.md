<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 223780 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on dev ("nightly-beta", "bot-docs-locale", "check-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41292748654 — dark (conclusion: `failure`), 2026-11-01 09:20 UTC
- Dark since: 2026-10-31 09:21 UTC (first run of the current streak)
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

### bot-docs-locale (`.github/workflows/bot-docs-locale.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41258306679 — dark (conclusion: `skipped`), 2026-11-01 00:47 UTC
- Dark since: 2026-11-01 00:47 UTC (first run of the current streak)
- Likely cause: run skipped

### check-test (`.github/workflows/check-test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41329534446 — dark (conclusion: `failure`), 2026-11-01 17:04 UTC
- Dark since: 2026-11-01 17:04 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

<details><summary>End of the job log</summary>

```
Failed to persist session tabs 148 |     const token = [redacted] ?? randomBytes(16).toString("hex")
149 |     const metaPath = path.join(lockDir, "meta.json")
150 |     const heartbeatPath = path.join(lockDir, "heartbeat")
151 |
152 |     try {
153 |       await mkdir(lockDir, { mode: 0o700 })
                  ^
##[error]@opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
