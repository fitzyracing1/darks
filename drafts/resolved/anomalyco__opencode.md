<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: resolved -->
# Upstream issue draft: anomalyco/opencode

- **Status:** resolved — lit again (2026-11-22); nothing to file
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 228435 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44889165786 — dark (conclusion: `failure`), 2026-11-21 09:21 UTC
- Dark since: 2026-11-21 09:21 UTC (first run of the current streak)
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44935087327 — dark (conclusion: `failure`), 2026-11-21 18:21 UTC
- Dark since: 2026-11-21 18:21 UTC (first run of the current streak)
- Job / step: `sign-macos` → `Sign desktop`
- Likely cause: hdiutil: create failed - Resource busy

<details><summary>End of the job log</summary>

```
Processing: /var/folders/q2/p1t6rgxj5fj32g1dc7dmd49r0000gn/T/tmp.hHpcsZSiCr/x64/OpenCode Dev.app
The staple and validate action worked!
Processing: /var/folders/q2/p1t6rgxj5fj32g1dc7dmd49r0000gn/T/tmp.hHpcsZSiCr/x64/OpenCode Dev.app
The validate action worked!
/var/folders/q2/p1t6rgxj5fj32g1dc7dmd49r0000gn/T/tmp.hHpcsZSiCr/x64/OpenCode Dev.app: accepted
source=Notarized Developer ID
hdiutil: create failed - Resource busy
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
