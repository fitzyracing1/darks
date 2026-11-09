<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 225659 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("nightly-beta", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42593308411 — dark (conclusion: `failure`), 2026-11-09 09:25 UTC
- Dark since: 2026-11-07 09:21 UTC (first run of the current streak)
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42574030435 — dark (conclusion: `failure`), 2026-11-09 06:36 UTC
- Dark since: 2026-11-09 05:07 UTC (first run of the current streak)
- Job / step: `build-desktop-windows-installer (windows-x64, blacksmith-4vcpu-windows-2025)` → `Pack`
- Likely cause: at new ShellPromise (native:75:16) (native:75)

<details><summary>End of the job log</summary>

```
    at TLSWrap.onStreamRead (node:internal/stream_base_commons:194:23)
ShellError: Failed with exit code 1
 exitCode: 1,
   stdout: "  • electron-builder  version=26.15.7 os=10.0.26100\n  • loaded configuration  file=C:\\runner\\_work\\opencode\\opencode\\packages\\desktop\\electron-builder.config.ts\n  • description is missed in the pack…
   stderr: "",
      at new ShellPromise (native:75:16)
      at BunShell (native:194:35)
##[error]
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
