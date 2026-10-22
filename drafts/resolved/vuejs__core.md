<!-- dark-draft: vuejs/core -->
<!-- draft-state: resolved -->
# Upstream issue draft: vuejs/core

- **Status:** resolved — lit again (2026-10-22); nothing to file
- **Would be filed at:** https://github.com/vuejs/core/issues/new
- **Stars:** 54719 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vuejs/core/actions/runs/39533998254 — dark (conclusion: `failure`), 2026-10-21 02:36 UTC
- Dark since: 2026-10-21 02:36 UTC (first run of the current streak)
- Job / step: `test / e2e-test` → `Run e2e tests`
- Likely cause: AssertionError: expected '<div class="test-enter-active test-en…' to be '<div class="" style="display: none;">…' // Object.is equality (packages/vue/__tests__/e2e/Transition.spec.ts:1942)

<details><summary>End of the job log</summary>

```
    1943|           `<div class="" style="display: none;"><h2>I shouldn't show <…
    1944|             `<h2>This is page1</h2>` +
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 119 passed (120)
   Start at  02:37:25
   Duration  21.42s (transform 2.25s, setup 556ms, import 4.66s, tests 61.52s, environment 13.97s)
##[error]AssertionError: expected '<div class="test-enter-active test-en…' to be '<div class="" style="display: none;">…' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining core!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
