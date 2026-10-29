<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 28170 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/40920320922 — dark (conclusion: `failure`), 2026-10-29 17:20 UTC
- Dark since: 2026-10-29 17:19 UTC (first run of the current streak)
- Job / step: `frontend-test (1/2)` → `Run frontend test shard`
- Likely cause: AssertionError: the given combination of arguments (null and string) is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a string (apps/desktop/src/lib/elasticsearch/__tests__/elasticsearchLanguage.spec.ts:50)

<details><summary>End of the job log</summary>

```
     51|     expect(elasticsearchJsonDiagnostics(state)).toEqual([]);
     52|   });
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 1079 passed (1080)
      Tests  1 failed | 15781 passed | 1 skipped (15783)
   Start at  17:20:55
   Duration  464.44s (transform 98.65s, setup 0ms, import 663.76s, tests 699.79s, environment 188.02s)
##[error]AssertionError: the given combination of arguments (null and string) is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a string
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
