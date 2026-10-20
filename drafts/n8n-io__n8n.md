<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 208086 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)", "Test: E2E Infrastructure")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39380658877 — dark (conclusion: `skipped`), 2026-10-20 06:29 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39376733753 — dark (conclusion: `failure`), 2026-10-20 05:46 UTC
- Dark since: 2026-10-19 21:24 UTC (first run of the current streak)
- Job / step: `Unit tests (24.18.1) / CLI Unit Tests (2/2)` → `Test Unit (cli, scoped)`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:unit:changed --shard=2/2 --maxWorkers=100% --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/oauth/__tests__/oauth.service.test.ts (217 tests) 148ms
 ✓ src/scaling/__tests__/job-processor.service.test.ts (88 tests) 859ms
 ✓ src/modules/mcp/__tests__/update-workflow.tool.test.ts (158 tests) 109ms
 ✓ src/webhooks/__tests__/webhook-helpers.test.ts (147 tests) 814ms
 ✓ src/__tests__/credentials-helper.test.ts (87 tests) 85ms
 ✓ src/events/__tests__/log-streaming-event-relay.test.ts (132 tests) 199ms
 ✓ src/modules/agents/__tests__/agents-builder-tools.service.test.ts (98 tests) 607ms
##[error]command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:unit:changed --shard=2/2 --maxWorkers=100% --passWithNoTests exited (1)
```

</details>

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39356905901 — dark (conclusion: `failure`), 2026-10-20 02:04 UTC
- Dark since: 2026-10-20 02:04 UTC (first run of the current streak)
- Job / step: `kafka / Shard 1` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
├──────────┼────────┼────────┼────────┼────────┼─────┼───────┼────────┼─────────┼───────┤
│   100.0% │   11.8 │   14.7 │      0 │    1ms │  9% │ 383MB │    13% │     372 │     0 │
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
