<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27662 · **Generated:** 2026-10-24T12:48:18.474Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/40078238876 — dark (conclusion: `failure`), 2026-10-24 08:29 UTC
- Dark since: 2026-10-23 04:08 UTC (first run of the current streak)
- Job / step: `build` → `Run cd docs && pnpm install --frozen-lockfile && pnpm build`
- Likely cause: Error: SEO verification failed:

<details><summary>End of the job log</summary>

```
if (errors.length) throw new Error(`SEO verification failed:\n${errors.join("\n")}`);
                         ^
Error: SEO verification failed:
/en/plugins/io.github.caichangqing1120.xxljob: duplicate title in the same language
    at file:///home/runner/work/dbx/dbx/docs/scripts/verify-seo.mjs:43:26
Node.js v22.23.3
 ELIFECYCLE  Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/40078271322 — dark (conclusion: `failure`), 2026-10-24 08:30 UTC
- Dark since: 2026-10-24 08:21 UTC (first run of the current streak)
- Job / step: `frontend-test (2/2)` → `Run frontend test shard`
- Likely cause: AssertionError: expected '\n ' to be '\n SELECT 1;\n' // Object.is equality (apps/desktop/src/lib/editor/__tests__/codemirrorSqlBlockFolding.spec.ts:27)

<details><summary>End of the job log</summary>

```
     28|     expect(flatten).not.toHaveBeenCalled();
     29|   });
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 995 passed (996)
      Tests  1 failed | 12870 passed (12871)
   Start at  08:32:29
   Duration  371.30s (transform 81.87s, setup 0ms, import 517.15s, tests 537.09s, environment 165.98s)
##[error]AssertionError: expected '\n ' to be '\n SELECT 1;\n' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
