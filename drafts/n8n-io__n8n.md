<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 211689 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on master ("Security: Sync from Public", "Test: E2E Coverage Nightly", "Security: Sync Bundle Branches", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44993052996 — dark (conclusion: `skipped`), 2026-11-22 06:17 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44974414205 — dark (conclusion: `failure`), 2026-11-22 02:05 UTC
- Dark since: 2026-11-21 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 1` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
(node:16222) [DEP0205] DeprecationWarning: `module.register()` is deprecated. Use `module.registerHooks()` instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
emit-spec-backend-lcovs: 11 dirs → 11 per-spec backend lcov(s) in coverage/by-spec (115573 seen → 53630 resolved (noPkg 11799, noJs 0, noMap 6525, other 43619))
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44979467746 — dark (conclusion: `skipped`), 2026-11-22 03:11 UTC
- Dark since: 2026-11-21 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44974251922 — dark (conclusion: `failure`), 2026-11-22 02:03 UTC
- Dark since: 2026-11-22 02:03 UTC (first run of the current streak)
- Job / step: `kafka / Shard 2` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
│ Profile  │ complete │ exec/s │     p50 │     p99 │ errors │ ev lag │ CPU │   RAM │ PG CPU │ pg tx/s │
├──────────┼──────────┼────────┼─────────┼─────────┼────────┼────────┼─────┼───────┼────────┼─────────┤
│ v2 eager │   100.0% │  111.2 │ 33215ms │ 33443ms │      0 │    1ms │ 45% │ 712MB │    18% │     605 │
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
