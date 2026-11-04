<!-- dark-draft: nukeop/nuclear -->
<!-- draft-state: ready -->
# Upstream issue draft: nukeop/nuclear

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/nukeop/nuclear/issues/new
- **Stars:** 18865 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on master since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `master` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/nukeop/nuclear/actions/runs/41744028285 — dark (conclusion: `failure`), 2026-11-04 00:04 UTC
- Dark since: 2026-11-03 00:29 UTC (first run of the current streak)
- Job / step: `test` → `Run tests with coverage`
- Likely cause: command (/home/runner/work/nuclear/nuclear/packages/ui) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:coverage exited (1)

<details><summary>End of the job log</summary>

```
   Start at  00:04:49
   Duration  84.31s (environment 28%, import 28%, setup 24%, tests 14%, transform 5%, worker 2%)
Environment  jsdom was created 76 times · 60.74s total, 28% of tracked time
             create it once per worker with pool: 'vmThreads' (keeps per-file isolation) or isolate: false (shares it across files)
             learn more: https://vitest.dev/guide/improving-performance#test-environments
JUNIT report written to /home/runner/work/nuclear/nuclear/packages/ui/test-results/junit.xml
[ELIFECYCLE] Command failed with exit code 1.
##[error]command (/home/runner/work/nuclear/nuclear/packages/ui) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:coverage exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nuclear!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
