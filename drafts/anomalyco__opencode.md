<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 224112 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "deploy")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41420494223 — dark (conclusion: `failure`), 2026-11-02 09:25 UTC
- Dark since: 2026-11-02 09:25 UTC (first run of the current streak)
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

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41524153625 — dark (conclusion: `failure`), 2026-11-02 20:59 UTC
- Dark since: 2026-11-02 20:59 UTC (first run of the current streak)
- Job / step: `deploy` → `Run bun sst deploy --stage=dev`
- Likely cause: [ERROR] POST "https://api.cloudflare.com/client/v4/accounts/15d29c8639fd3733b1b5486a2acfd968/workers/assets/upload?base64=true": 401 Unauthorized : failed to upload assets

<details><summary>End of the job log</summary>

```
#20 DONE 6.8s
#21 resolving provenance for metadata file
|  Updated     StatsSyncService sst:aws:Service → StatsSyncServiceImageStatsSyncService docker-build:index:Image (25.8s)
✕  Failed
Console sst:cloudflare:SolidStart → ConsoleWorkerScript cloudflare:index:WorkersScript
[ERROR] POST "https://api.cloudflare.com/client/v4/accounts/15d29c8639fd3733b1b5486a2acfd968/workers/assets/upload?base64=true": 401 Unauthorized : failed to upload assets
error: "sst" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
