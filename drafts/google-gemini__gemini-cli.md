<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108589 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Memory Tests: Nightly", "Performance Tests: Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40642628697 — dark (conclusion: `failure`), 2026-10-28 06:14 UTC
- Dark since: 2026-10-28 00:22 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Effort Triage Analysis`
- Likely cause: Unhandled error: HttpError: Resource not accessible by integration

<details><summary>End of the job log</summary>

```
##[start-action display=Run Gemini CLI;id=gemini_effort_issue_analysis.gemini_run]
##[warning]Gemini CLI stderr was not valid JSON
##[end-action id=gemini_effort_issue_analysis.gemini_run;outcome=success;conclusion=success;duration_ms=202915]
##[start-action display=Upload Gemini CLI outputs;id=gemini_effort_issue_analysis.__actions_upload-artifact]
With the provided path, there will be 3 files uploaded
Artifact name is valid!
Root directory input is valid!
##[error]Failed to CreateArtifact: Received non-retryable error: Failed request: (409) Conflict: an artifact with this name already exists on the workflow run
```

</details>

### Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40620187824 — dark (conclusion: `failure`), 2026-10-28 02:18 UTC
- Dark since: 2026-10-28 02:18 UTC (first run of the current streak)
- Job / step: `Run Memory Usage Tests` → `Run Memory Tests`
- Likely cause: Tests  2 failed | 5 passed (7)

<details><summary>End of the job log</summary>

```
    228|           `  Measured:  ${formatMB(result.finalHeapUsed)} heap used\n`…
 ❯ memory-usage.test.ts:155:15
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
 Test Files  1 failed (1)
      Tests  2 failed | 5 passed (7)
   Start at  02:20:36
   Duration  105.49s (transform 1.93s, setup 0ms, collect 3.35s, tests 101.34s, environment 0ms, prepare 55ms)
##[error]Process completed with exit code 1.
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40625634633 — dark (conclusion: `failure`), 2026-10-28 03:15 UTC
- Dark since: 2026-10-28 03:15 UTC (first run of the current streak)
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
