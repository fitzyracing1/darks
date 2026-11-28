<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212352 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on master ("Security: Sync from Public", "Test: Benchmark Nightly", "Test: E2E Infrastructure", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46115908024 — dark (conclusion: `skipped`), 2026-11-28 06:17 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: Benchmark Nightly (`.github/workflows/test-benchmark-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46103358805 — dark (conclusion: `failure`), 2026-11-28 03:32 UTC
- Dark since: 2026-11-28 01:34 UTC (first run of the current streak)
- Job / step: `build` → `Run the benchmark`
- Likely cause: Error: Benchmarks failed for setups: sqlite, sqlite-ledger

<details><summary>End of the job log</summary>

```
Error: Benchmarks failed for setups: sqlite, sqlite-ledger
    at runBenchmarksOnVm (file:///home/runner/work/n8n/n8n/packages/quality/efficiency/scale/benchmark/scripts/run-in-cloud.mjs:102:9)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async runInCloud (file:///home/runner/work/n8n/n8n/packages/quality/efficiency/scale/benchmark/scripts/run-in-cloud.mjs:51:2)
    at async main (file:///home/runner/work/n8n/n8n/packages/quality/efficiency/scale/benchmark/scripts/run.mjs:32:3)
[ELIFECYCLE] Command failed with exit code 1.
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E Infrastructure (`.github/workflows/test-e2e-infrastructure-reusable.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46096088247 — dark (conclusion: `failure`), 2026-11-28 02:02 UTC
- Dark since: 2026-11-28 02:02 UTC (first run of the current streak)
- Job / step: `kafka / Shard 2` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
│ Profile  │ complete │ exec/s │     p50 │     p99 │ errors │ ev lag │ CPU │   RAM │ PG CPU │ pg tx/s │
├──────────┼──────────┼────────┼─────────┼─────────┼────────┼────────┼─────┼───────┼────────┼─────────┤
│ v2 eager │   100.0% │  119.3 │ 29020ms │ 29411ms │      0 │    4ms │ 41% │ 720MB │    18% │     645 │
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46096251325 — dark (conclusion: `failure`), 2026-11-28 02:04 UTC
- Dark since: 2026-11-28 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 20` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
(node:17081) [DEP0205] DeprecationWarning: `module.register()` is deprecated. Use `module.registerHooks()` instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
emit-spec-backend-lcovs: 16 dirs → 16 per-spec backend lcov(s) in coverage/by-spec (139121 seen → 66069 resolved (noPkg 14857, noJs 0, noMap 6644, other 51551))
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E on -pc image (`.github/workflows/test-e2e-pc-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46097021760 — dark (conclusion: `failure`), 2026-11-28 02:13 UTC
- Dark since: 2026-11-28 02:13 UTC (first run of the current streak)
- Job / step: `E2E on the pc twin / Shard 20` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
  Finalizing uploading artifacts to Currents...
================================================================
🏁 Done!
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Security: Sync Bundle Branches (`.github/workflows/sec-sync-bundle-branches.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46101608012 — dark (conclusion: `skipped`), 2026-11-28 03:10 UTC
- Dark since: 2026-11-28 03:10 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
