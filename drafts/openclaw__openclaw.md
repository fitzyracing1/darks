<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393672 · **Generated:** 2026-11-02T06:51:01.101Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI", "Docs", "CodeQL", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564956588 — dark (conclusion: `cancelled`), 2026-10-21 07:51 UTC
- Dark since: 2026-10-14 21:18 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564955392 — dark (conclusion: `skipped`), 2026-10-21 07:51 UTC
- Dark since: 2026-10-14 21:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564955394 — dark (conclusion: `cancelled`), 2026-10-21 07:51 UTC
- Dark since: 2026-10-21 07:51 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39564955391 — dark (conclusion: `cancelled`), 2026-10-21 07:51 UTC
- Dark since: 2026-10-21 07:51 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
