<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108624 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Testing: CI", "Memory Tests: Nightly", "Performance Tests: Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Testing: CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40952570363 — dark (conclusion: `failure`), 2026-10-29 20:50 UTC
- Dark since: 2026-10-29 20:48 UTC (first run of the current streak)
- Job / step: `Slow Test - Win - cli` → `Run tests and generate reports`
- Likely cause: The strategy configuration was canceled because "test_windows.others" failed

<details><summary>End of the job log</summary>

```
   ✓ CloudFreePrivacyNotice > exits on Escape in 'non-free tier state': true  2027ms
   ✓ CloudFreePrivacyNotice > exits on Escape in 'tier unavailable state': true  2017ms
   ✓ CloudFreePrivacyNotice > exits on Escape in 'free tier state (no selection)': false  2023ms
   ✓ CloudFreePrivacyNotice > provides renderItem to RadioButtonSelect that wraps option text without truncation  1024ms
   ✓ CloudFreePrivacyNotice > RadioButtonSelect interaction > calls correct functions on selecting "'Yes'"  2029ms
   ✓ CloudFreePrivacyNotice > RadioButtonSelect interaction > calls correct functions on selecting "'No'"  2028ms
Terminate batch job (Y/N)?
##[error]The operation was canceled.
```

</details>

### Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40990969730 — dark (conclusion: `failure`), 2026-10-30 02:19 UTC
- Dark since: 2026-10-30 02:19 UTC (first run of the current streak)
- Job / step: `Run Memory Usage Tests` → `Run Memory Tests`
- Likely cause: Tests  5 failed | 2 passed (7)

<details><summary>End of the job log</summary>

```
    228|           `  Measured:  ${formatMB(result.finalHeapUsed)} heap used\n`…
 ❯ memory-usage.test.ts:360:17
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/5]⎯
 Test Files  1 failed (1)
      Tests  5 failed | 2 passed (7)
   Start at  02:20:46
   Duration  108.19s (transform 1.91s, setup 0ms, collect 3.35s, tests 104.04s, environment 0ms, prepare 55ms)
##[error]Process completed with exit code 1.
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40996359631 — dark (conclusion: `failure`), 2026-10-30 03:15 UTC
- Dark since: 2026-10-30 03:15 UTC (first run of the current streak)
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
