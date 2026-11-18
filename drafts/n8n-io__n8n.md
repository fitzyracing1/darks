<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210951 · **Generated:** 2026-11-18T18:38:42.583Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44367085722 — dark (conclusion: `skipped`), 2026-11-18 18:12 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44355620361 — dark (conclusion: `failure`), 2026-11-18 17:10 UTC
- Dark since: 2026-11-18 17:10 UTC (first run of the current streak)
- Job / step: `Unit tests (26.13.0) / CLI Unit Tests (2/2)` → `Test Unit (cli, scoped)`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:unit --shard=2/2 --maxWorkers=100% --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
   Start at  17:11:47
   Duration  383.86s (setup 43%, import 31%, transform 18%, tests 8%)
     Import  3506 modules were evaluated 91464 times · 441.13s total, 31% of tracked time
             ~99.24s faster with isolate: false — shared modules are evaluated once per worker instead of once per file
             learn more: https://vitest.dev/guide/improving-performance#test-isolation
JUNIT report written to /home/runner/_work/n8n/n8n/packages/cli/junit.xml
[ELIFECYCLE] Command failed with exit code 1.
##[error]command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:unit --shard=2/2 --maxWorkers=100% --passWithNoTests exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
