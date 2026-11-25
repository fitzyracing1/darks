<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212067 · **Generated:** 2026-11-25T06:46:34.527Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45559810807 — dark (conclusion: `skipped`), 2026-11-25 06:20 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Test: E2E Coverage Nightly (`.github/workflows/test-e2e-coverage-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45530367343 — dark (conclusion: `failure`), 2026-11-25 02:04 UTC
- Dark since: 2026-11-25 02:04 UTC (first run of the current streak)
- Job / step: `E2E (coverage) / Shard 1` → `Run Tests`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/

<details><summary>End of the job log</summary>

```
(node:15285) [DEP0205] DeprecationWarning: `module.register()` is deprecated. Use `module.registerHooks()` instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
emit-spec-backend-lcovs: 11 dirs → 11 per-spec backend lcov(s) in coverage/by-spec (116512 seen → 54385 resolved (noPkg 11811, noJs 0, noMap 6535, other 43781))
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/n8n/n8n/packages/
  │ quality/testing/playwright
##[error]Process completed with exit code 1.
```

</details>

### Test: E2E on -pc image (`.github/workflows/test-e2e-pc-nightly.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45531685896 — dark (conclusion: `failure`), 2026-11-25 02:15 UTC
- Dark since: 2026-11-25 02:15 UTC (first run of the current streak)
- Job / step: `E2E on the pc twin / Shard 1` → `Run Tests`
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45538248282 — dark (conclusion: `skipped`), 2026-11-25 03:11 UTC
- Dark since: 2026-11-25 03:11 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
