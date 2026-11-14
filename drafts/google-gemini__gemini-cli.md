<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108821 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Release: Nightly (`.github/workflows/release-nightly.yml`): [issue #30291](https://github.com/google-gemini/gemini-cli/issues/30291) "Nightly Release Failed for v0.70.0-nightly.20261114.g4ed06ed0d on 2026-11-14"
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

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43565084417 — dark (conclusion: `failure`), 2026-11-14 06:11 UTC
- Dark since: 2026-11-11 14:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Standard Triage Analysis`
- Likely cause: google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077a: {"error":"invalid_target","

<details><summary>End of the job log</summary>

```
##[end-action id=gemini_standard_issue_analysis.sanitize_workflow_name;outcome=success;conclusion=success;duration_ms=21]
##[start-action display=Configure Gemini CLI;id=gemini_standard_issue_analysis.__run]
##[end-action id=gemini_standard_issue_analysis.__run;outcome=success;conclusion=success;duration_ms=18]
##[start-action display=Install Custom Commands;id=gemini_standard_issue_analysis.__run_2]
##[end-action id=gemini_standard_issue_analysis.__run_2;outcome=success;conclusion=success;duration_ms=20]
##[start-action display=Authenticate to Google Cloud;id=gemini_standard_issue_analysis.auth]
Created credentials file at "/home/runner/work/gemini-cli/gemini-cli/gha-creds-3ff36f89322701c8.json"
##[error]google-github-actions/auth failed with: failed to generate Google Cloud federated token for //iam.googleapis.com/projects/710019748844/locations/global/workloadIdentityPools/github-29fc077a/providers/gh-29fc077…
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43550398328 — dark (conclusion: `failure`), 2026-11-14 03:12 UTC
- Dark since: 2026-11-14 03:12 UTC (first run of the current streak)
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
