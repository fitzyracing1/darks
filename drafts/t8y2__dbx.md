<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 31663 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/45985681510 — dark (conclusion: `failure`), 2026-11-27 10:51 UTC
- Dark since: 2026-11-27 07:57 UTC (first run of the current streak)
- Job / step: `frontend-test (1/2)` → `Run frontend test shard`
- Likely cause: AssertionError: expected '50' to be '500' // Object.is equality (apps/desktop/src/components/editor/__tests__/EditorSettingsDialog.footerLayout.integration.spec.ts:145)

<details><summary>End of the job log</summary>

```
    146|     input.focus();
    147|     for (const value of ["50", "5", "", "2000", "20000"]) {
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 1186 passed (1187)
      Tests  1 failed | 18802 passed | 1 skipped (18804)
   Start at  11:06:13
   Duration  362.10s (transform 76.02s, setup 0ms, import 469.65s, tests 654.51s, environment 119.50s)
##[error]AssertionError: expected '50' to be '500' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
