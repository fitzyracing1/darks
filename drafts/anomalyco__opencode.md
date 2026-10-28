<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 222684 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on dev ("nightly-beta", "release", "check-nix", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40664054770 — dark (conclusion: `failure`), 2026-10-28 09:25 UTC
- Dark since: 2026-10-28 09:25 UTC (first run of the current streak)
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40744374355 — dark (conclusion: `cancelled`), 2026-10-28 18:21 UTC
- Dark since: 2026-10-28 17:23 UTC (first run of the current streak)
- Likely cause: run cancelled

### check-nix (`.github/workflows/check-nix.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40744374615 — dark (conclusion: `cancelled`), 2026-10-28 18:21 UTC
- Dark since: 2026-10-28 18:21 UTC (first run of the current streak)
- Job / step: `nix-eval`
- Likely cause: Canceling since a higher priority waiting request for check-nix-refs/heads/dev exists

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40744374349 — dark (conclusion: `cancelled`), 2026-10-28 18:21 UTC
- Dark since: 2026-10-28 18:21 UTC (first run of the current streak)
- Likely cause: run cancelled

### deploy-www (`.github/workflows/deploy-www.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40744374424 — dark (conclusion: `cancelled`), 2026-10-28 18:21 UTC
- Dark since: 2026-10-28 18:21 UTC (first run of the current streak)
- Likely cause: run cancelled

### deploy-files (`.github/workflows/deploy-files.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40744374438 — dark (conclusion: `cancelled`), 2026-10-28 18:21 UTC
- Dark since: 2026-10-28 18:21 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
