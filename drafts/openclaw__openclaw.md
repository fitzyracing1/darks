<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392681 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Docs", "CodeQL", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38875583957 — dark (conclusion: `skipped`), 2026-10-16 08:43 UTC
- Dark since: 2026-10-11 01:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39435682763 — dark (conclusion: `cancelled`), 2026-10-20 14:02 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Job / step: `Security High (mcp-process-tool-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-10-20 14:03:57] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/supervisor-log.runtime.ts
[2026-10-20 14:03:57] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/supervisor-log.runtime.ts (2 ms)
[2026-10-20 14:03:57] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/supervisor.ts
[2026-10-20 14:03:57] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/supervisor.ts (98 ms)
[2026-10-20 14:03:57] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/types.ts
[2026-10-20 14:03:57] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/src/process/supervisor/types.ts (30 ms)
[2026-10-20 14:03:57] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/src/agents/agent-tool-definition-adapter.ts
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883485449 — dark (conclusion: `cancelled`), 2026-10-16 09:52 UTC
- Dark since: 2026-10-16 09:52 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39435682465 — dark (conclusion: `cancelled`), 2026-10-20 14:02 UTC
- Dark since: 2026-10-20 14:02 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
