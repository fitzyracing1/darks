<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 223179 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "nightly-beta" workflow failing on dev since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **nightly-beta** workflow (`.github/workflows/nightly-beta.yml`) on `dev` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41033239224 — dark (conclusion: `failure`), 2026-10-30 09:24 UTC
- Dark since: 2026-10-30 09:24 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
