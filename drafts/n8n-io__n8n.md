<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212366 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Security: Sync from Public", "Test: E2E Infrastructure", "Security: Sync Bundle Branches")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45951156294 — dark (conclusion: `skipped`), 2026-11-27 06:19 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45926024905 — dark (conclusion: `failure`), 2026-11-27 02:02 UTC
- Dark since: 2026-11-27 02:02 UTC (first run of the current streak)
- Job / step: `kafka / Shard 2` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
│ Profile  │ complete │ exec/s │     p50 │     p99 │ errors │ ev lag │ CPU │   RAM │ PG CPU │ pg tx/s │
├──────────┼──────────┼────────┼─────────┼─────────┼────────┼────────┼─────┼───────┼────────┼─────────┤
│ v2 eager │   100.0% │  108.7 │ 33720ms │ 34457ms │      0 │    1ms │ 54% │ 745MB │    20% │     571 │
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45932711760 — dark (conclusion: `skipped`), 2026-11-27 03:11 UTC
- Dark since: 2026-11-27 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
