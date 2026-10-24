<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 107573 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Memory Tests: Nightly", "Performance Tests: Nightly")
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

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
