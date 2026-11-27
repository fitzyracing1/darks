<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212389 · **Generated:** 2026-11-27T18:37:03.333Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46047751945 — dark (conclusion: `skipped`), 2026-11-27 18:12 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46047206160 — dark (conclusion: `failure`), 2026-11-27 18:08 UTC
- Dark since: 2026-11-27 17:22 UTC (first run of the current streak)
- Job / step: `Unit tests (26) / Frontend (2/4)` → `Test`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/modules/roles/frontend) /usr/local/bin/pnpm run test --shard=2/4 exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/features/ai/assistant/focusedNodes.store.test.ts (59 tests) 524ms
 ✓ src/app/views/OAuthConsentView.test.ts (38 tests) 1059ms
 ✓ src/features/ai/instanceAi/composables/useMcpServerConnect.test.ts (38 tests) 197ms
 ✓ src/features/ai/instanceAi/components/__tests__/InstanceAiInput.attachments.test.ts (35 tests) 2102ms
 ✓ src/features/execution/logs/components/LogsPanel.test.ts (30 tests) 2687ms
 ✓ src/features/credentials/__tests__/credentials.store.test.ts (35 tests) 35ms
 ✓ src/app/composables/useWorkflowActivate.test.ts (29 tests) 17ms
##[error]command (/home/runner/_work/n8n/n8n/packages/modules/roles/frontend) /usr/local/bin/pnpm run test --shard=2/4 exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
