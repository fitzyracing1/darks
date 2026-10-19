<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: resolved -->
# Upstream issue draft: openclaw/openclaw

- **Status:** resolved — lit again 2026-10-18; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392338 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on the default branch ("CodeQL", "Docs", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on the default branch: https://github.com/openclaw/openclaw/actions/runs/38911369715 — dark (conclusion: `cancelled`), 2026-10-16 13:53 UTC
- Dark since: 2026-10-08 16:30 UTC (first run of the current streak)
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

### Docs (`.github/workflows/docs.yml`)

- Latest run on the default branch: https://github.com/openclaw/openclaw/actions/runs/38911370002 — dark (conclusion: `skipped`), 2026-10-16 13:53 UTC
- Dark since: 2026-10-16 13:53 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on the default branch: https://github.com/openclaw/openclaw/actions/runs/38883485449 — dark (conclusion: `cancelled`), 2026-10-16 09:52 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on the default branch: https://github.com/openclaw/openclaw/actions/runs/38966379601 — dark (conclusion: `cancelled`), 2026-10-16 21:01 UTC
- Dark since: 2026-10-17 12:36 UTC (first run of the current streak)
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
