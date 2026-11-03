<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 209416 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "Test: E2E Coverage Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41589101314 — dark (conclusion: `skipped`), 2026-11-03 06:18 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41563763191 — dark (conclusion: `failure`), 2026-11-03 02:04 UTC
- Dark since: 2026-11-03 02:04 UTC (first run of the current streak)
- Job / step: `Unit Coverage (backend + nodes)` → `Run tests`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/modules/insights/backend) /home/runner/setup-pnpm/pnpm run test:unit exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/task-runners/task-broker/__tests__/task-broker-server.test.ts (11 tests) 42ms
 ✓ src/modules/instance-ai/eval/__tests__/mock-handler-integration.test.ts (4 tests) 64ms
 ✓ src/deprecation/__tests__/deprecation.service.test.ts (70 tests) 10ms
 ✓ src/modules/agents/json-config/__tests__/model-config.test.ts (18 tests) 26ms
 ✓ src/modules/agents/integrations/__tests__/n8n-chat-integration.test.ts (19 tests) 14ms
 ✓ src/modules/mcp/__tests__/publish-workflow.tool.test.ts (10 tests) 14ms
 ✓ src/__tests__/abstract-server.test.ts (12 tests) 9ms
##[error]command (/home/runner/_work/n8n/n8n/packages/modules/insights/backend) /home/runner/setup-pnpm/pnpm run test:unit exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
