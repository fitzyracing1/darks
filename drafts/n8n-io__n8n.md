<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 208139 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39474053308 — dark (conclusion: `skipped`), 2026-10-20 18:21 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39463628147 — dark (conclusion: `failure`), 2026-10-20 17:09 UTC
- Dark since: 2026-10-20 17:09 UTC (first run of the current streak)
- Job / step: `Unit tests (26.5.1) / Frontend (1/4)` → `Test`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui) /home/runner/setup-pnpm/pnpm run test:changed --shard=1/4 exited (1)

<details><summary>End of the job log</summary>

```
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
 RUN  v5.0.1 /home/runner/_work/n8n/n8n/packages/frontend/editor-ui
 ✓ src/features/workflows/canvas/composables/useCanvasLayout.test.ts (47 tests) 509ms
 ✓ src/features/agents/__tests__/agentEvals.store.test.ts (98 tests) 646ms
 ✓ src/features/ai/assistant/composables/useAIAssistantHelpers.test.ts (54 tests) 795ms
 ✓ src/features/agents/channels/teams/AgentChannelTeamsSetup.test.ts (106 tests) 13108ms
n8n-editor-ui#test:changed:  WARNING  command finished with error, but continuing...
##[error]command (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui) /home/runner/setup-pnpm/pnpm run test:changed --shard=1/4 exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
