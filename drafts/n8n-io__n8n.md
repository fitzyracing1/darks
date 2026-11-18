<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210893 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "Test: E2E Coverage Nightly", "Security: Sync Bundle Branches")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44250496046 — dark (conclusion: `skipped`), 2026-11-18 06:19 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44220614666 — dark (conclusion: `failure`), 2026-11-18 02:04 UTC
- Dark since: 2026-11-18 02:04 UTC (first run of the current streak)
- Job / step: `Unit Coverage (frontend)` → `Run tests`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/modules/type-availability-policies/frontend) /home/runner/setup-pnpm/pnpm run test exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/features/shared/editors/composables/useExpressionEditor.test.ts (27 tests) 3411ms
 ✓ src/features/agents/__tests__/agent-plan.test.ts (116 tests) 110ms
 ✓ src/features/execution/executions/composables/useExecutionPreviewDocument.test.ts (22 tests) 654ms
 ✓ src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupInputs.test.ts (24 tests) 40ms
 ✓ src/features/ai/chatHub/composables/useChatPushHandler.test.ts (32 tests) 68ms
 ✓ src/features/credentials/components/CredentialCard.test.ts (36 tests) 1686ms
   ✓ CredentialsView (20)
##[error]command (/home/runner/_work/n8n/n8n/packages/modules/type-availability-policies/frontend) /home/runner/setup-pnpm/pnpm run test exited (1)
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44228676409 — dark (conclusion: `skipped`), 2026-11-18 03:11 UTC
- Dark since: 2026-11-18 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
