<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108820 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43533308093 — dark (conclusion: `failure`), 2026-11-14 00:18 UTC
- Dark since: 2026-11-11 14:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Standard Triage Analysis`
- Likely cause: google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077a: {"error":"invalid_target","

<details><summary>End of the job log</summary>

```
##[end-action id=gemini_standard_issue_analysis.sanitize_workflow_name;outcome=success;conclusion=success;duration_ms=18]
##[start-action display=Configure Gemini CLI;id=gemini_standard_issue_analysis.__run]
##[end-action id=gemini_standard_issue_analysis.__run;outcome=success;conclusion=success;duration_ms=18]
##[start-action display=Install Custom Commands;id=gemini_standard_issue_analysis.__run_2]
##[end-action id=gemini_standard_issue_analysis.__run_2;outcome=success;conclusion=success;duration_ms=281]
##[start-action display=Authenticate to Google Cloud;id=gemini_standard_issue_analysis.auth]
Created credentials file at "/home/runner/work/gemini-cli/gemini-cli/gha-creds-0060ece8aeddc4a7.json"
##[error]google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
