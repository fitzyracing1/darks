<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 209133 · **Generated:** 2026-10-30T18:36:41.749Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41104990020 — dark (conclusion: `skipped`), 2026-10-30 18:13 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41102506788 — dark (conclusion: `failure`), 2026-10-30 17:55 UTC
- Dark since: 2026-10-30 17:47 UTC (first run of the current streak)
- Job / step: `Unit tests (26.12.1) / Backend Unit Tests` → `Test Unit (backend, except cli and nodes-base)`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/@n8n/agents) /home/runner/setup-pnpm/pnpm run test:unit exited (1)

<details><summary>End of the job log</summary>

```
      Tests  355 passed | 8 skipped (363)
   Start at  18:01:27
   Duration  32.78s (tests 61%, import 31%, transform 7%)
     Import  245 modules were evaluated 796 times · 19.60s total, 31% of tracked time
             ~4.21s faster with isolate: false — shared modules are evaluated once per worker instead of once per file
             learn more: https://vitest.dev/guide/improving-performance#test-isolation
JUNIT report written to /home/runner/_work/n8n/n8n/packages/modules/insights/backend/junit.xml
##[error]command (/home/runner/_work/n8n/n8n/packages/@n8n/agents) /home/runner/setup-pnpm/pnpm run test:unit exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
