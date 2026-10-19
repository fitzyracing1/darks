<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 207963 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "Test: E2E Coverage Nightly", "Test: E2E Infrastructure")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39211305188 — dark (conclusion: `skipped`), 2026-10-19 06:40 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39088926493 — dark (conclusion: `cancelled`), 2026-10-18 02:07 UTC
- Dark since: 2026-10-17 02:06 UTC (first run of the current streak)
- Job / step: `Unit Coverage (backend + nodes)` → `Run tests`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/39188464388 — dark (conclusion: `failure`), 2026-10-19 02:07 UTC
- Dark since: 2026-10-19 02:07 UTC (first run of the current streak)
- Job / step: `kafka / Shard 1` → `Run Tests`
- Likely cause: Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party

<details><summary>End of the job log</summary>

```
│ noop output │   100.0% │   10.4 │      — │     — │     — │      0 │    1ms │  7% │ 378MB │    10% │     263 │     0 │
│ 10KB output │    99.6% │    9.5 │    9.7 │ 483ms │ 484ms │      0 │    1ms │  4% │ 352MB │     9% │     232 │     0 │
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
Safe-chain: error connecting to currents-production.e8d8fcf9734e9ea0a5c511fc6813faf3.r2.cloudflarestorage.com:443 - This socket has been ended by the other party
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
