<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108775 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Testing: E2E (Chained)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43074720886 — dark (conclusion: `failure`), 2026-11-11 18:07 UTC
- Dark since: 2026-11-11 14:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Effort Triage Analysis`
- Likely cause: Failed to CreateArtifact: Received non-retryable error: Failed request: (409) Conflict: an artifact with this name already exists on the workflow run

<details><summary>End of the job log</summary>

```
##[start-action display=Run Gemini CLI;id=gemini_effort_issue_analysis.gemini_run]
##[warning]Gemini CLI stderr was not valid JSON
##[end-action id=gemini_effort_issue_analysis.gemini_run;outcome=success;conclusion=success;duration_ms=316534]
##[start-action display=Upload Gemini CLI outputs;id=gemini_effort_issue_analysis.__actions_upload-artifact]
With the provided path, there will be 3 files uploaded
Artifact name is valid!
Root directory input is valid!
##[error]Failed to CreateArtifact: Received non-retryable error: Failed request: (409) Conflict: an artifact with this name already exists on the workflow run
```

</details>

### Testing: E2E (Chained) (`.github/workflows/chained_e2e.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43069839711 — dark (conclusion: `failure`), 2026-11-11 17:36 UTC
- Dark since: 2026-11-11 17:36 UTC (first run of the current streak)
- Job / step: `Slow E2E - Win` → `Run E2E tests`
- Likely cause: Tests  1 failed | 93 passed | 53 skipped (147)

<details><summary>End of the job log</summary>

```
 ❯ TestRig.setup ../packages/test-utils/src/test-rig.ts:394:12
 ❯ shell-background.test.ts:26:9
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/3]⎯
 Test Files  1 failed | 37 passed | 10 skipped (48)
      Tests  1 failed | 93 passed | 53 skipped (147)
   Start at  17:41:33
   Duration  341.79s (transform 10.21s, setup 0ms, collect 480.20s, tests 1330.56s, environment 15ms, prepare 11.99s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
