<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393235 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CodeQL", "CI", "ClawSweeper Dispatch", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39003311415 — dark (conclusion: `cancelled`), 2026-10-17 04:38 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39003303720 — dark (conclusion: `cancelled`), 2026-10-17 04:38 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39003311326 — dark (conclusion: `cancelled`), 2026-10-17 04:38 UTC
- Dark since: 2026-10-17 04:37 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39003303132 — dark (conclusion: `skipped`), 2026-10-17 04:38 UTC
- Dark since: 2026-10-17 04:38 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
