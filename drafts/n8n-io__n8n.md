<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 210941 · **Generated:** 2026-11-17T18:39:49.297Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44145527392 — dark (conclusion: `skipped`), 2026-11-17 18:13 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44144046673 — dark (conclusion: `failure`), 2026-11-17 18:05 UTC
- Dark since: 2026-11-17 18:05 UTC (first run of the current streak)
- Job / step: `Unit tests (24.22.2) / Frontend (1/4)` → `Test`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/modules/type-availability-policies/frontend) /home/runner/setup-pnpm/pnpm run test --shard=1/4 exited (1)

<details><summary>End of the job log</summary>

```
      Tests  5735 passed (5735)
   Start at  18:08:41
   Duration  406.16s (import 45%, tests 19%, transform 15%, setup 11%, environment 9%, worker 1%)
     Import  6272 modules were evaluated 525435 times · 473.94s total, 45% of tracked time
             ~154.02s faster with isolate: false — shared modules are evaluated once per worker instead of once per file
             learn more: https://vitest.dev/guide/improving-performance#test-isolation
JUNIT report written to /home/runner/_work/n8n/n8n/packages/frontend/editor-ui/junit.xml
##[error]command (/home/runner/_work/n8n/n8n/packages/modules/type-availability-policies/frontend) /home/runner/setup-pnpm/pnpm run test --shard=1/4 exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
