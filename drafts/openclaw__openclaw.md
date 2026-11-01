<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393610 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI", "CodeQL", "Docs Sync Publish Repo", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39749651131 — dark (conclusion: `cancelled`), 2026-10-22 08:41 UTC
- Dark since: 2026-10-14 21:18 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39749650533 — dark (conclusion: `cancelled`), 2026-10-22 08:41 UTC
- Dark since: 2026-10-19 13:48 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Sync Publish Repo (`.github/workflows/docs-sync-publish.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564861929 — dark (conclusion: `cancelled`), 2026-10-21 07:50 UTC
- Dark since: 2026-10-21 07:50 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564861870 — dark (conclusion: `skipped`), 2026-10-21 07:50 UTC
- Dark since: 2026-10-21 09:39 UTC (first run of the current streak)
- Likely cause: run skipped

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39749650433 — dark (conclusion: `cancelled`), 2026-10-22 08:41 UTC
- Dark since: 2026-10-22 11:21 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
