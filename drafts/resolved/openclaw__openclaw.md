<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: resolved -->
# Upstream issue draft: openclaw/openclaw

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 394601 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/43990888013 — dark (conclusion: `skipped`), 2026-11-17 00:50 UTC
- Dark since: 2026-11-16 18:25 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/43990144344 — dark (conclusion: `cancelled`), 2026-11-17 00:45 UTC
- Dark since: 2026-11-17 00:45 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
