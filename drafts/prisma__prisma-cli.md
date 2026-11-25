<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 26 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "End-to-end (real API)" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **End-to-end (real API)** workflow (`.github/workflows/test-e2e.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/45552259944 — dark (conclusion: `failure`), 2026-11-25 05:15 UTC
- Dark since: 2026-11-25 05:15 UTC (first run of the current streak)
- Job / step: `e2e` → `Run the real-API end-to-end suite`
- Likely cause: Error: expected 'service version promote cpv_ygptev0mdy1h5hl412mz2rzi --json' to succeed, but it failed with SERVICE.DEPLOY_FAILED: Failed to promote version (packages/cli/e2e/harness.ts:216)

<details><summary>End of the job log</summary>

```
    218|           `${envelope.error?.code ?? "(no code)"}: ` +
 ❯ e2e/address.e2e.ts:189:3
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 10 passed (11)
      Tests  62 passed | 11 skipped (73)
   Start at  05:15:46
   Duration  193.10s (transform 285ms, setup 0ms, import 766ms, tests 190.92s, environment 1ms)
##[error]Error: expected `service version promote cpv_ygptev0mdy1h5hl412mz2rzi --json` to succeed, but it failed with SERVICE.DEPLOY_FAILED: Failed to promote version
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
