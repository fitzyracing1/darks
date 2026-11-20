<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 211462 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on master ("Security: Sync from Public", "Test: E2E Coverage Nightly", "Test: E2E on -pc image", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44686987493 — dark (conclusion: `skipped`), 2026-11-20 06:19 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44658219349 — dark (conclusion: `failure`), 2026-11-20 02:04 UTC
- Dark since: 2026-11-20 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 2` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E on -pc image (`.github/workflows/test-e2e-pc-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44659326459 — dark (conclusion: `failure`), 2026-11-20 02:14 UTC
- Dark since: 2026-11-20 02:14 UTC (first run of the current streak)
- Job / step: `E2E on the pc twin / Shard 2` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44665984499 — dark (conclusion: `skipped`), 2026-11-20 03:11 UTC
- Dark since: 2026-11-20 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
