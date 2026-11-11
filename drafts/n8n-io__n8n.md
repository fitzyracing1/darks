<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210068 · **Generated:** 2026-11-11T06:45:44.706Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42971616793 — dark (conclusion: `skipped`), 2026-11-11 06:19 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42943371635 — dark (conclusion: `failure`), 2026-11-11 02:03 UTC
- Dark since: 2026-11-11 02:03 UTC (first run of the current streak)
- Job / step: `Unit Coverage (backend + nodes)` → `Run tests`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/@n8n/expression-runtime) /home/runner/setup-pnpm/pnpm run test:unit exited (1)

<details><summary>End of the job log</summary>

```
 ✓ src/observability/__tests__/outbound-propagator.test.ts (6 tests) 3ms
 ✓ src/modules/token-exchange/services/__tests__/trusted-key-refresh.task.test.ts (2 tests) 3ms
 ✓ src/jwks/__tests__/jwks.config.test.ts (5 tests) 4ms
 ✓ src/modules/skills/__tests__/in-memory-skill-source-client.test.ts (13 tests) 10ms
 ✓ src/scheduling/system-tasks/__tests__/system-task-version-stamp.test.ts (8 tests) 3ms
 Test Files  1562 passed (1562)
   Start at  02:15:07
##[error]command (/home/runner/_work/n8n/n8n/packages/@n8n/expression-runtime) /home/runner/setup-pnpm/pnpm run test:unit exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
