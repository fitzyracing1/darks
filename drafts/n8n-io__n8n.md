<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212174 · **Generated:** 2026-11-26T06:45:55.978Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45767453645 — dark (conclusion: `skipped`), 2026-11-26 06:20 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45739987619 — dark (conclusion: `failure`), 2026-11-26 02:04 UTC
- Dark since: 2026-11-26 02:04 UTC (first run of the current streak)
- Job / step: `Unit Coverage (backend + nodes)` → `Run tests`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/@n8n/expression-runtime) /home/runner/setup-pnpm/pnpm run test:unit exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/modules/agents/__tests__/agent-vector-stores.test.ts (6 tests) 31ms
 ✓ src/services/__tests__/engine-data-plane-proxy.service.test.ts (15 tests) 7ms
 ✓ src/workflows/publication/__tests__/workflow-publication-lifecycle-lock.test.ts (9 tests) 5ms
 ✓ src/executions/__tests__/response-wait-tracker.service.test.ts (15 tests) 11ms
 ✓ src/modules/agent-evals/__tests__/agent-eval-judge.test.ts (10 tests) 183ms
 ✓ src/modules/mcp/__tests__/get-workflow-version.tool.test.ts (6 tests) 7ms
 ✓ src/modules/agents/__tests__/agent-workspace.service.test.ts (5 tests) 6ms
##[error]command (/home/runner/_work/n8n/n8n/packages/@n8n/expression-runtime) /home/runner/setup-pnpm/pnpm run test:unit exited (1)
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45747286034 — dark (conclusion: `skipped`), 2026-11-26 03:11 UTC
- Dark since: 2026-11-26 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
