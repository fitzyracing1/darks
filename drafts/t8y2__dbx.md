<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27672 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/40118790098 — dark (conclusion: `failure`), 2026-10-24 18:01 UTC
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

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/40120368494 — dark (conclusion: `failure`), 2026-10-24 18:22 UTC
- Dark since: 2026-10-24 08:21 UTC (first run of the current streak)
- Job / step: `frontend-test (2/2)` → `Run frontend test shard`
- Likely cause: AssertionError: Expected values to be strictly equal: (packages/app-tests/dataGridEditor.test.ts:2172)

<details><summary>End of the job log</summary>

```
    2173|   assert.deepEqual(savedDirtyRows, [[[0, [[1, "Ada 1"]]]], [[0, [[1, "…
    2174|   assert.equal(editor.dirtyRows.value.size, 0);
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/5]⎯
 Test Files  1 failed | 1001 passed (1002)
      Tests  5 failed | 12939 passed (12944)
   Start at  18:23:54
   Duration  253.33s (transform 63.68s, setup 0ms, import 348.50s, tests 393.17s, environment 95.77s)
##[error]AssertionError: Expected values to be strictly equal:
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
