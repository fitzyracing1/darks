<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 208355 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "Test: E2E Performance", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39911856636 — dark (conclusion: `skipped`), 2026-10-23 06:30 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Performance (`.github/workflows/test-e2e-performance-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39880375843 — dark (conclusion: `failure`), 2026-10-23 00:49 UTC
- Dark since: 2026-10-23 00:49 UTC (first run of the current streak)
- Job / step: `idle-memory-baselines / Shard 1` → `Run Tests`
- Likely cause: Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/efficiency
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
Safe-chain: error connecting to cy.currents.dev:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39912992753 — dark (conclusion: `failure`), 2026-10-23 06:41 UTC
- Dark since: 2026-10-23 03:35 UTC (first run of the current streak)
- Job / step: `Verify single-instance deps (npm-install) / verify` → `Verify npm-install closure (changed packages)`
- Likely cause: {"error":"Command failed: npm install --no-audit --no-fund --ignore-scripts --no-package-lock"}

<details><summary>End of the job log</summary>

```
npm error notsup Valid libc:  musl
npm error notsup Actual libc: glibc
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-23T06_43_51_737Z-debug-0.log
npm install failed — its output is in the "npm install output" group above.
{"error":"Command failed: npm install --no-audit --no-fund --ignore-scripts --no-package-lock"}
ℹ Safe-chain: Some package versions were suppressed during package metadata resolution due to minimum package age.
  To disable this check, use: --safe-chain-skip-minimum-package-age
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
