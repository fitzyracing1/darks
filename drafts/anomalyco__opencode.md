<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 227787 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44275288645 — dark (conclusion: `failure`), 2026-11-18 09:22 UTC
- Dark since: 2026-11-18 09:22 UTC (first run of the current streak)
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

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44303999431 — dark (conclusion: `failure`), 2026-11-18 12:26 UTC
- Dark since: 2026-11-18 12:26 UTC (first run of the current streak)
- Job / step: `publish-npm` → `Publish`
- Likely cause: @opencode/cli-windows-x64-baseline@0.0.0-dev-1311 did not appear in the registry

<details><summary>End of the job log</summary>

```
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
waiting for @opencode/cli-windows-x64-baseline@0.0.0-dev-1311
##[error]@opencode/cli-windows-x64-baseline@0.0.0-dev-1311 did not appear in the registry
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
