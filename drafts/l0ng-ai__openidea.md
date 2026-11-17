<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9164 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43985290366 — dark (conclusion: `cancelled`), 2026-11-17 00:09 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Frontend` → `Run pnpm test`
- Likely cause: AssertionError: expected '# Theme plugins\n\nOpenIDEA ships sev…' to be '# Theme plugins\n\nOpenIDEA ships sev…' // Object.is equality (scripts/theme/theme.test.ts:45)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 1013 passed (1014)
      Tests  1 failed | 12922 passed | 6 skipped (12929)
   Start at  00:23:40
   Duration  770.44s (environment 40%, import 21%, tests 20%, setup 11%, transform 8%)
Environment  jsdom was created 1014 times · 854.11s total, 40% of tracked time
             create it once per worker with pool: 'vmThreads' (keeps per-file isolation) or isolate: false (shares it across files)
             learn more: https://vitest.dev/guide/improving-performance#test-environments
##[error]AssertionError: expected '# Theme plugins\n\nOpenIDEA ships sev…' to be '# Theme plugins\n\nOpenIDEA ships sev…' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
