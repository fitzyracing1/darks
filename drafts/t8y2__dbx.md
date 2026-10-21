<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27365 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39477145673 — dark (conclusion: `failure`), 2026-10-20 18:42 UTC
- Dark since: 2026-10-20 06:40 UTC (first run of the current streak)
- Job / step: `frontend-test (2/2)` → `Run frontend test shard`
- Likely cause: AssertionError: expected '' to match /PARTITION BY\s+HASH/ (apps/desktop/src/components/structure/__tests__/TableStructureEditor.ddlTabLifecycle.spec.ts:272)

<details><summary>End of the job log</summary>

```
    273|     expect(content()).not.toContain("PCTFREE");
    274|     expect(toggle().getAttribute("aria-checked")).toBe("true");
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 960 passed (961)
      Tests  1 failed | 12158 passed (12159)
   Start at  18:44:01
   Duration  327.79s (transform 82.94s, setup 0ms, import 450.72s, tests 481.42s, environment 137.96s)
##[error]AssertionError: expected '' to match /PARTITION BY\s+HASH/
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
