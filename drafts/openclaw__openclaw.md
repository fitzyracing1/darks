<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 394046 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docs", "CI", "ClawSweeper Dispatch")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42270484035 — dark (conclusion: `skipped`), 2026-11-06 18:24 UTC
- Dark since: 2026-11-06 18:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42271052874 — dark (conclusion: `cancelled`), 2026-11-06 18:28 UTC
- Dark since: 2026-11-06 18:24 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42271515501 — dark (conclusion: `cancelled`), 2026-11-06 18:31 UTC
- Dark since: 2026-11-06 18:31 UTC (first run of the current streak)
- Job / step: `dispatch` → `Debounce main push dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Cache mode: write
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/create-github-app-token@64ab729a6294000f5aa4a4bc0b73d1f32bc45510' (SHA:64ab729a6294000f5aa4a4bc0b73d1f32bc45510)
Download action repository 'actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1' (SHA:949feb2413d6458794dcd2491c4babbbce0c15c1)
Complete job name: dispatch
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
