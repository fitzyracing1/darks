<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393479 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("ClawSweeper Dispatch", "Docs", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39263457867 — dark (conclusion: `cancelled`), 2026-10-19 13:49 UTC
- Dark since: 2026-10-14 21:18 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Prepare all required actions
Getting action download info
Download action repository 'actions/create-github-app-token@64ab729a6294000f5aa4a4bc0b73d1f32bc45510' (SHA:64ab729a6294000f5aa4a4bc0b73d1f32bc45510)
Download action repository 'actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1' (SHA:949feb2413d6458794dcd2491c4babbbce0c15c1)
Complete job name: dispatch
Inputs 'owner' and 'repositories' are set. Creating token for the following repositories:
- openclaw/clawsweeper
Dispatched GitHub activity to ClawSweeper.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39253320320 — dark (conclusion: `skipped`), 2026-10-19 12:36 UTC
- Dark since: 2026-10-19 11:03 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39263321789 — dark (conclusion: `cancelled`), 2026-10-19 13:48 UTC
- Dark since: 2026-10-19 13:48 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39263457610 — dark (conclusion: `cancelled`), 2026-10-19 13:49 UTC
- Dark since: 2026-10-20 14:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
