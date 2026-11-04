<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108713 · **Generated:** 2026-11-04T06:44:24.955Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`): [issue #30084](https://github.com/google-gemini/gemini-cli/issues/30084) "CI: memory-nightly failing: 4 memory regressions over 10% (idle-session-startup +54.2%: 107.6MB vs 69.8MB)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Testing: E2E (Chained)", "Performance Tests: Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Testing: E2E (Chained) (`.github/workflows/chained_e2e.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/41732233624 — dark (conclusion: `failure`), 2026-11-03 22:36 UTC
- Dark since: 2026-11-03 22:27 UTC (first run of the current streak)
- Job / step: `Slow E2E - Win` → `Run E2E tests`
- Likely cause: Tests  8 failed | 86 passed | 53 skipped (147)

<details><summary>End of the job log</summary>

```
 ❯ TestRig.setup ../packages/test-utils/src/test-rig.ts:394:12
 ❯ test-mcp-support.test.ts:29:15
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[16/24]⎯
 Test Files  7 failed | 31 passed | 10 skipped (48)
      Tests  8 failed | 86 passed | 53 skipped (147)
   Start at  22:44:00
   Duration  180.16s (transform 10.36s, setup 0ms, collect 423.70s, tests 2310.93s, environment 15ms, prepare 10.32s)
##[error]Process completed with exit code 1.
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/41765592789 — dark (conclusion: `failure`), 2026-11-04 03:11 UTC
- Dark since: 2026-11-04 03:11 UTC (first run of the current streak)
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
