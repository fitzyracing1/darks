<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8756 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43338702922 — dark (conclusion: `cancelled`), 2026-11-13 00:38 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Frontend` → `Run pnpm test`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
 ✓ src/features/http-client/spring/spring.test.ts (17 tests) 32ms
 ✓ src/features/run/gradleRun.test.ts (19 tests) 22ms
 ✓ src/features/github/list/list.test.tsx (15 tests) 701ms
 ✓ scripts/theme/theme.test.ts (16 tests) 23ms
 ✓ src/features/run/session.test.tsx (22 tests) 547ms
 ✓ src/features/settings/__tests__/ssh.test.tsx (19 tests) 1562ms
 ✓ src/editor/core/file-open-order.test.ts (17 tests) 99ms
##[error]The operation was canceled.
```

</details>

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43338702940 — dark (conclusion: `cancelled`), 2026-11-13 00:38 UTC
- Dark since: 2026-11-13 00:14 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
