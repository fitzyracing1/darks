<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: resolved -->
# Upstream issue draft: anomalyco/opencode

- **Status:** resolved — lit again 2026-10-18; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 215972 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 9 workflows dark on the default branch ("publish", "deploy", "docs-update", +6 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### publish (`.github/workflows/publish.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39126906618 — dark (conclusion: `failure`), 2026-10-18 12:20 UTC
- Dark since: 2026-10-18 09:54 UTC (first run of the current streak)
- Likely cause: at ShellPromise (unknown:75:16) (unknown:75)

### deploy (`.github/workflows/deploy.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39126906568 — dark (conclusion: `failure`), 2026-10-18 12:20 UTC
- Dark since: 2026-10-18 09:54 UTC (first run of the current streak)
- Likely cause: step "Run bun sst deploy --stage=dev" in job "deploy" exited nonzero

### docs-update (`.github/workflows/docs-update.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39126540875 — dark (conclusion: `skipped`), 2026-10-18 12:15 UTC
- Dark since: 2026-10-18 12:15 UTC (first run of the current streak)
- Likely cause: run skipped

### compliance-close (`.github/workflows/compliance-close.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/38562326252 — dark (conclusion: `failure`), 2026-10-14 12:14 UTC
- Dark since: 2026-10-14 12:14 UTC (first run of the current streak)
- Likely cause: Unhandled error: HttpError: Unexpected end of JSON input

### stats (`.github/workflows/stats.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39125950483 — dark (conclusion: `failure`), 2026-10-18 12:06 UTC
- Dark since: 2026-10-18 12:06 UTC (first run of the current streak)
- Likely cause: step "Commit stats" in job "stats" exited nonzero

### test (`.github/workflows/test.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/38900307252 — dark (conclusion: `failure`), 2026-10-16 12:24 UTC
- Dark since: 2026-10-16 12:22 UTC (first run of the current streak)
- Likely cause: @opencode/cli#test: command (C:\runner\_work\opencode\opencode\packages\cli) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

### docs-locale-sync (`.github/workflows/docs-locale-sync.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/38779621348 — dark (conclusion: `skipped`), 2026-10-15 17:42 UTC
- Dark since: 2026-10-15 17:42 UTC (first run of the current streak)
- Likely cause: run skipped

### deploy-www (`.github/workflows/deploy-www.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39126906508 — dark (conclusion: `failure`), 2026-10-18 12:20 UTC
- Dark since: 2026-10-18 09:54 UTC (first run of the current streak)
- Likely cause: step "Deploy" in job "deploy" exited nonzero

### deploy-files (`.github/workflows/deploy-files.yml`)

- Latest run on the default branch: https://github.com/anomalyco/opencode/actions/runs/39126906573 — dark (conclusion: `failure`), 2026-10-18 12:20 UTC
- Dark since: 2026-10-18 09:54 UTC (first run of the current streak)
- Likely cause: step "Deploy" in job "deploy" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
