<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108802 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Testing: CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43336093700 — dark (conclusion: `failure`), 2026-11-13 00:19 UTC
- Dark since: 2026-11-11 14:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Standard Triage Analysis`
- Likely cause: google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077a: {"error":"invalid_target","

<details><summary>End of the job log</summary>

```
##[end-action id=gemini_standard_issue_analysis.sanitize_workflow_name;outcome=success;conclusion=success;duration_ms=19]
##[start-action display=Configure Gemini CLI;id=gemini_standard_issue_analysis.__run]
##[end-action id=gemini_standard_issue_analysis.__run;outcome=success;conclusion=success;duration_ms=16]
##[start-action display=Install Custom Commands;id=gemini_standard_issue_analysis.__run_2]
##[end-action id=gemini_standard_issue_analysis.__run_2;outcome=success;conclusion=success;duration_ms=17]
##[start-action display=Authenticate to Google Cloud;id=gemini_standard_issue_analysis.auth]
Created credentials file at "/home/runner/work/gemini-cli/gemini-cli/gha-creds-1d9c1541081c5988.json"
##[error]google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077…
```

</details>

### Testing: CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43322567677 — dark (conclusion: `failure`), 2026-11-12 22:43 UTC
- Dark since: 2026-11-12 22:43 UTC (first run of the current streak)
- Job / step: `Slow Test - Win - cli` → `Run tests and generate reports`
- Likely cause: The strategy configuration was canceled because "test_windows.others" failed

<details><summary>End of the job log</summary>

```
   ✓ <StatusRow /> > renders generic retry phrase in low error verbosity mode when attempt threshold is met  1062ms
   ✓ <StatusRow /> > renders active hook status and does not crash when active hooks are present  1055ms
   ✓ <StatusRow /> > renders retry status correctly in narrow terminal mode  1049ms
   ✓ <StatusRow /> > renders statusPhrase even when showLoadingIndicator is false  1063ms
stdout | src/ui/auth/useAuth.test.tsx > useAuth > useAuthCommand > should authenticate successfully for valid auth type
Authenticated via "oauth-personal".
Terminate batch job (Y/N)?
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
