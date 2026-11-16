<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 227266 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "release")
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

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43868068201 — dark (conclusion: `failure`), 2026-11-16 12:36 UTC
- Dark since: 2026-11-16 12:36 UTC (first run of the current streak)
- Job / step: `publish-npm` → `Publish`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-16T13_07_45_887Z-debug-0.log

<details><summary>End of the job log</summary>

```
npm notice npm tokens that bypass 2FA are being restricted for account changes and direct publishing. Learn how to prepare: https://gh.io/npm-gat-bypass2fa-deprecation
npm notice Publishing to https://registry.npmjs.org/ with tag dev and public access
npm notice publish Signed provenance statement with source and build information from GitHub Actions
npm notice publish Provenance statement published to transparency log: https://search.sigstore.dev/?logIndex=3926054119
npm error code E401
npm error 401 Unauthorized - PUT https://registry.npmjs.org/@opencode%2fcli-windows-arm64 - Failed to generate Web Auth URLs due to error: BadRequestError: token is invalid
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-16T13_07_45_887Z-debug-0.log
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
