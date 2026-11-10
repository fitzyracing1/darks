<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108748 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Release: Nightly (`.github/workflows/release-nightly.yml`): [issue #30215](https://github.com/google-gemini/gemini-cli/issues/30215) "Nightly Release Failed for v0.69.0-nightly.20261110.g1930f2539 on 2026-11-10"
- Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`): [issue #30084](https://github.com/google-gemini/gemini-cli/issues/30084) "CI: memory-nightly failing: 4 memory regressions over 10% (idle-session-startup +54.2%: 107.6MB vs 69.8MB)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Performance Tests: Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/42766878619 — dark (conclusion: `failure`), 2026-11-10 06:11 UTC
- Dark since: 2026-11-09 11:06 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Apply Triaged Labels`
- Likely cause: Unhandled error: HttpError: Resource not accessible by integration

<details><summary>End of the job log</summary>

```
##[end-action id=gemini_standard_issue_analysis.__run_3;outcome=success;conclusion=success;duration_ms=16]
Direct JSON parsing failed. Trying to extract from a markdown block.
Aggregated triage results for 1 issues.
RequestError [HttpError]: Resource not accessible by integration
    at /home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:9537:21
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async module.exports (/home/runner/work/gemini-cli/gemini-cli/.github/scripts/apply-issue-labels.cjs:221:7)
##[error]Unhandled error: HttpError: Resource not accessible by integration
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/42747958950 — dark (conclusion: `failure`), 2026-11-10 03:13 UTC
- Dark since: 2026-11-10 03:13 UTC (first run of the current streak)
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
