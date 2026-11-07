<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108766 · **Generated:** 2026-11-07T18:36:17.303Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Performance Tests: Nightly" workflow failing on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Performance Tests: Nightly** workflow (`.github/workflows/perf-nightly.yml`) on `main` has been failing since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/42332911925 — dark (conclusion: `failure`), 2026-11-07 03:12 UTC
- Dark since: 2026-11-07 03:12 UTC (first run of the current streak)
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
