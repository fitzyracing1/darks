<!-- dark-draft: vuejs/core -->
<!-- draft-state: ready -->
# Upstream issue draft: vuejs/core

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vuejs/core/issues/new
- **Stars:** 54799 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vuejs/core/actions/runs/40840579968 — dark (conclusion: `failure`), 2026-10-29 08:13 UTC
- Dark since: 2026-10-29 08:13 UTC (first run of the current streak)
- Job / step: `test / e2e-test` → `Run e2e tests`
- Likely cause: AssertionError: expected '<div class="test-enter-active test-en…' to be '<div class="" style="display: none;">…' // Object.is equality (packages/vue/__tests__/e2e/Transition.spec.ts:1942)

<details><summary>End of the job log</summary>

```
    1943|           `<div class="" style="display: none;"><h2>I shouldn't show <…
    1944|             `<h2>This is page1</h2>` +
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 119 passed (120)
   Start at  08:13:51
   Duration  20.05s (transform 1.12s, setup 280ms, import 3.18s, tests 56.85s, environment 8.30s)
##[error]AssertionError: expected '<div class="test-enter-active test-en…' to be '<div class="" style="display: none;">…' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining core!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
