<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 107869 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Memory Tests: Nightly", "Performance Tests: Nightly", "Label Workstream Rollup")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40053991525 — dark (conclusion: `failure`), 2026-10-24 02:23 UTC
- Dark since: 2026-10-24 02:23 UTC (first run of the current streak)
- Job / step: `Run Memory Usage Tests` → `Run Memory Tests`
- Likely cause: Tests  2 failed | 5 passed (7)

<details><summary>End of the job log</summary>

```
    228|           `  Measured:  ${formatMB(result.finalHeapUsed)} heap used\n`…
 ❯ memory-usage.test.ts:114:15
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
 Test Files  1 failed (1)
      Tests  2 failed | 5 passed (7)
   Start at  02:25:27
   Duration  104.68s (transform 1.90s, setup 0ms, collect 3.32s, tests 100.58s, environment 0ms, prepare 55ms)
##[error]Process completed with exit code 1.
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40057810087 — dark (conclusion: `failure`), 2026-10-24 03:19 UTC
- Dark since: 2026-10-24 03:19 UTC (first run of the current streak)
- Job / step: `Run Performance Usage Tests` → `Run Performance Tests`
- Likely cause: 29|     throw new Error('Failed to download ripgrep binary');

<details><summary>End of the job log</summary>

```
 ❯ Vitest.initializeGlobalSetup ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9724:35
 ❯ ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9636:5
 ❯ Vitest.runFiles ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9666:10
 ❯ Vitest.start ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9554:18
 ❯ startVitest ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:10510:8
 ❯ start ../node_modules/vitest/dist/chunks/cac.Cb-PYCCB.js:1412:15
 ❯ CAC.run ../node_modules/vitest/dist/chunks/cac.Cb-PYCCB.js:1391:2
##[error]Process completed with exit code 1.
```

</details>

### Label Workstream Rollup (`.github/workflows/label-workstream-rollup.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40119922560 — dark (conclusion: `failure`), 2026-10-24 18:16 UTC
- Dark since: 2026-10-24 18:16 UTC (first run of the current streak)
- Job / step: `labeler` → `Check for Parent Workstream and Apply Label`
- Likely cause: Workflow failed: We had issues producing the response to your request. Sorry about that. Please try resubmitting your request and contact us if the problem persists.

<details><summary>End of the job log</summary>

```
SUCCESS: Issue #18280 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/17760 -> https://github.com/google-gemini/gemini-cli/issues/31…
SUCCESS: Issue #18282 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/22597 -> https://github.com/google-gemini/gemini-cli/issues/15…
SUCCESS: Issue #18283 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/17762 -> https://github.com/google-gemini/gemini-cli/issues/31…
SUCCESS: Issue #18285 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/17764 -> https://github.com/google-gemini/gemini-cli/issues/31…
SUCCESS: Issue #18286 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/17764 -> https://github.com/google-gemini/gemini-cli/issues/31…
SUCCESS: Issue #18287 is a descendant of https://github.com/google-gemini/gemini-cli/issues/15324. Trace: https://github.com/google-gemini/gemini-cli/issues/17764 -> https://github.com/google-gemini/gemini-cli/issues/31…
Failed to fetch issues batch: RequestError [HttpError]: We had issues producing the response to your request. Sorry about that. Please try resubmitting your request and contact us if the problem persists.
##[error]Workflow failed: We had issues producing the response to your request. Sorry about that. Please try resubmitting your request and contact us if the problem persists.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
