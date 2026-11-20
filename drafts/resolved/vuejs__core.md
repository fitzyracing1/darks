<!-- dark-draft: vuejs/core -->
<!-- draft-state: resolved -->
# Upstream issue draft: vuejs/core

- **Status:** resolved — lit again (2026-11-20); nothing to file
- **Would be filed at:** https://github.com/vuejs/core/issues/new
- **Stars:** 55052 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vuejs/core/actions/runs/44686632605 — dark (conclusion: `failure`), 2026-11-20 06:16 UTC
- Dark since: 2026-11-20 06:16 UTC (first run of the current streak)
- Job / step: `test / e2e-test` → `Run e2e tests`
- Likely cause: AssertionError: expected '<div class="test-anim-enter-active te…' to be '<div class="">CompA</div>' // Object.is equality (packages/vue/__tests__/e2e/Transition.spec.ts:1752)

<details><summary>End of the job log</summary>

```
    1753|
    1754|         expect(onUnmountedSpyB).toBeCalledTimes(1)
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 123 passed (124)
   Start at  06:17:04
   Duration  19.12s (transform 967ms, setup 137ms, import 2.44s, tests 50.38s, environment 7.26s)
##[error]AssertionError: expected '<div class="test-anim-enter-active te…' to be '<div class="">CompA</div>' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining core!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
