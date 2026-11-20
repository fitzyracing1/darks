<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: resolved -->
# Upstream issue draft: openclaw/openclaw

- **Status:** resolved — lit again (2026-11-20); nothing to file
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 394863 · **Generated:** 2026-11-20T06:46:04.904Z
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

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/44688751296 — dark (conclusion: `skipped`), 2026-11-20 06:34 UTC
- Dark since: 2026-11-19 00:43 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/44688482176 — dark (conclusion: `cancelled`), 2026-11-20 06:32 UTC
- Dark since: 2026-11-20 06:31 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Sync Publish Repo (`.github/workflows/docs-sync-publish.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/44688480792 — dark (conclusion: `cancelled`), 2026-11-20 06:32 UTC
- Dark since: 2026-11-20 06:32 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
