<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210007 · **Generated:** 2026-11-10T18:39:11.864Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42872695271 — dark (conclusion: `skipped`), 2026-11-10 18:11 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/42864631194 — dark (conclusion: `failure`), 2026-11-10 17:24 UTC
- Dark since: 2026-11-10 15:01 UTC (first run of the current streak)
- Job / step: `Unit tests (24.22.2) / CLI Integration Tests (1/2)` → `Test Integration (cli, scoped)`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:integration --shard=1/2 --maxWorkers=50% --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
     ✓ counts nothing for an uninvolved project member 449ms
 ✓ src/modules/skills/__tests__/integration/skill-source-check.integration.test.ts (39 tests) 3874ms
 ✓ src/modules/n8n-packages/__tests__/import-workflow-with-tags.integration.test.ts (26 tests) 4546ms
   ✓ workflow package import — with tags (26)
     ✓ create missing mode (default) (4)
       ✓ creates an absent shared tag once with its source id and name, attaching imported workflows 427ms
       ✓ attaches without creating when a tag with the same id and name exists 314ms
##[error]command (/home/runner/_work/n8n/n8n/packages/cli) /home/runner/setup-pnpm/pnpm run test:integration --shard=1/2 --maxWorkers=50% --passWithNoTests exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
