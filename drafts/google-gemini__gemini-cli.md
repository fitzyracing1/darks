<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108672 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/41497765909 — dark (conclusion: `failure`), 2026-11-02 18:08 UTC
- Dark since: 2026-11-02 11:06 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Effort Triage Analysis`
- Likely cause: Failed to CreateArtifact: Received non-retryable error: Failed request: (409) Conflict: an artifact with this name already exists on the workflow run

<details><summary>End of the job log</summary>

```
##[start-action display=Run Gemini CLI;id=gemini_effort_issue_analysis.gemini_run]
##[warning]Gemini CLI stderr was not valid JSON
##[end-action id=gemini_effort_issue_analysis.gemini_run;outcome=success;conclusion=success;duration_ms=47047]
##[start-action display=Upload Gemini CLI outputs;id=gemini_effort_issue_analysis.__actions_upload-artifact]
With the provided path, there will be 3 files uploaded
Artifact name is valid!
Root directory input is valid!
##[error]Failed to CreateArtifact: Received non-retryable error: Failed request: (409) Conflict: an artifact with this name already exists on the workflow run
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
