<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 211836 · **Generated:** 2026-11-24T00:51:11.893Z
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

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45297320359 — dark (conclusion: `skipped`), 2026-11-24 00:27 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/45292636937 — dark (conclusion: `failure`), 2026-11-23 23:53 UTC
- Dark since: 2026-11-23 23:53 UTC (first run of the current streak)
- Job / step: `Unit tests (24.22.2) / Frontend (2/4)` → `Test`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui) /home/runner/setup-pnpm/pnpm run test --shard=2/4 exited (1)

<details><summary>End of the job log</summary>

```
   Start at  23:56:06
   Duration  312.78s (import 42%, tests 27%, transform 11%, setup 10%, environment 9%, worker 1%)
     Import  5081 modules were evaluated 553079 times · 345.29s total, 42% of tracked time
             ~112.54s faster with isolate: false — shared modules are evaluated once per worker instead of once per file
             learn more: https://vitest.dev/guide/improving-performance#test-isolation
JUNIT report written to /home/runner/_work/n8n/n8n/packages/frontend/editor-ui/junit.xml
[ELIFECYCLE] Test failed. See above for more details.
##[error]command (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui) /home/runner/setup-pnpm/pnpm run test --shard=2/4 exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
