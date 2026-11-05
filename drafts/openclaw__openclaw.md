<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393928 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docs", "CI", "Docs Sync Publish Repo")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/41980997269 — dark (conclusion: `skipped`), 2026-11-05 06:31 UTC
- Dark since: 2026-11-04 00:41 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/41980827865 — dark (conclusion: `cancelled`), 2026-11-05 06:30 UTC
- Dark since: 2026-11-05 06:30 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Sync Publish Repo (`.github/workflows/docs-sync-publish.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/41980895398 — dark (conclusion: `cancelled`), 2026-11-05 06:30 UTC
- Dark since: 2026-11-05 06:30 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
