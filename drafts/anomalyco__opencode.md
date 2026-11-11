<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 226041 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "nightly-beta")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43010476312 — dark (conclusion: `failure`), 2026-11-11 11:15 UTC
- Dark since: 2026-11-10 16:09 UTC (first run of the current streak)
- Job / step: `publish-attestations` → `Download`
- Likely cause: Missing digest for build-archives

<details><summary>End of the job log</summary>

```
Artifact download completed successfully.
SHA256 digest of downloaded artifact is c8c3e70eb7c2ab0917e3ee40c58941fc19b9d1c8ef8e81933517d2f1793067f8
Artifact download completed successfully.
Total of 2 artifact(s) downloaded
Download artifact has finished successfully
##[end-action id=__self.__actions_download-artifact;outcome=success;conclusion=success;duration_ms=108871]
##[start-action display=Run bash "${GITHUB_ACTION_PATH//\\//}/../verify-artifacts.sh" "$RUNNER_TEMP/in";id=__self.__run]
##[error]Missing digest for build-archives
```

</details>

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42994526997 — dark (conclusion: `failure`), 2026-11-11 09:21 UTC
- Dark since: 2026-11-11 09:21 UTC (first run of the current streak)
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
