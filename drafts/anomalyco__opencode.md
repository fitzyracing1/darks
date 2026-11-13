<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 226627 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "check-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43400813781 — dark (conclusion: `failure`), 2026-11-13 09:22 UTC
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43482088029 — dark (conclusion: `failure`), 2026-11-13 18:22 UTC
- Dark since: 2026-11-13 18:10 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/tui#test: command (C:\runner\_work\opencode\opencode\packages\tui) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

<details><summary>End of the job log</summary>

```
  ignores: 0,
}
[18:24:47.268] INFO (#30059): watcher subscribe {
  path: "C:\\Users\\runneradmin\\AppData\\Local\\Temp\\oc-0bEKjp\\AGENTS.md",
  type: "file",
  ignores: 0,
}
##[error]@opencode/tui#test: command (C:\runner\_work\opencode\opencode\packages\tui) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
