<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210611 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on master ("Security: Sync from Public", "Test: E2E Infrastructure", "Test: E2E Coverage Nightly", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/43817177842 — dark (conclusion: `skipped`), 2026-11-16 06:30 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/43789792836 — dark (conclusion: `failure`), 2026-11-16 02:03 UTC
- Dark since: 2026-11-14 02:03 UTC (first run of the current streak)
- Job / step: `kafka / Shard 2` → `Run Tests`
- Likely cause: Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/43789986027 — dark (conclusion: `failure`), 2026-11-16 02:05 UTC
- Dark since: 2026-11-14 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 4` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/43796787317 — dark (conclusion: `skipped`), 2026-11-16 03:12 UTC
- Dark since: 2026-11-14 03:09 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
