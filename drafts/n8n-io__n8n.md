<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 209965 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "Test: E2E Infrastructure", "Test: E2E Coverage Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42767672204 — dark (conclusion: `skipped`), 2026-11-10 06:18 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42739987373 — dark (conclusion: `failure`), 2026-11-10 02:02 UTC
- Dark since: 2026-11-10 02:02 UTC (first run of the current streak)
- Job / step: `kafka / Shard 1` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42740182760 — dark (conclusion: `failure`), 2026-11-10 02:04 UTC
- Dark since: 2026-11-10 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 6` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
