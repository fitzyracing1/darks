<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 211554 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44844136701 — dark (conclusion: `skipped`), 2026-11-21 00:29 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44839439329 — dark (conclusion: `failure`), 2026-11-20 23:48 UTC
- Dark since: 2026-11-20 23:48 UTC (first run of the current streak)
- Job / step: `Unit tests (24.22.2) / CLI Integration Tests (2/2)` → `Test Integration (cli, scoped)`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:integration --shard=2/2 --maxWorkers=50% --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
 ✓ test/integration/dynamic-credentials/dynamic-credential-user-entry.repository.test.ts (16 tests) 277ms
 ✓ src/modules/n8n-packages/__tests__/export-folder.integration.test.ts (22 tests) 1843ms
 ✓ test/integration/ldap/ldap.api.test.ts (32 tests) 1099ms
(node:24549) TimeoutNaNWarning: NaN is not a number.
Timeout duration was set to 1.
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ test/integration/external-secrets/secret-providers-project.api.test.ts (46 tests) 1374ms
##[error]command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:integration --shard=2/2 --maxWorkers=50% --passWithNoTests exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
