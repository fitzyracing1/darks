<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27366 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39466344109 — dark (conclusion: `failure`), 2026-10-20 17:28 UTC
- Dark since: 2026-10-20 06:40 UTC (first run of the current streak)
- Job / step: `frontend-test (1/2)` → `Run frontend test shard`
- Likely cause: AssertionError: expected undefined to be false // Object.is equality (apps/desktop/src/components/objects/__tests__/ObjectSourceDialog.dependencies.spec.ts:83)

<details><summary>End of the job log</summary>

```
     84|     button("contextMenu.editView").click();
     85|     await vi.waitFor(() => expect(document.querySelector("[data-object…
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 960 passed (961)
      Tests  1 failed | 13262 passed (13263)
   Start at  17:29:50
   Duration  349.85s (transform 85.63s, setup 0ms, import 507.21s, tests 470.24s, environment 155.39s)
##[error]AssertionError: expected undefined to be false // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
