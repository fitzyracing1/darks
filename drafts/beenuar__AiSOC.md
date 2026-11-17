<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 8029 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Grading integrity", "Deploy Docs to GitHub Pages", "Live agent eval (local model)", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44079385626 — dark (conclusion: `failure`), 2026-11-17 12:02 UTC
- Dark since: 2026-11-16 12:10 UTC (first run of the current streak)
- Job / step: `No run on main ended cancelled` → `Ask the Actions API what actually ran`
- Likely cause: the cancellation is correct, record it in that gate's EXCEPTIONS with the

<details><summary>End of the job log</summary>

```
Find out why it was cancelled. If a concurrency group did it,
scripts/check_workflow_concurrency.py explains the shape and the fix. If
the cancellation is correct, record it in that gate's EXCEPTIONS with the
reason and what is lost.
Re-run it rather than excusing it, and do so now: the window above is the
whole of what this gate can see, so once the run ages out of it this
report goes green with nothing fixed.
##[error]Process completed with exit code 1.
```

</details>

### Deploy Docs to GitHub Pages (`.github/workflows/deploy-docs.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44077678541 — dark (conclusion: `failure`), 2026-11-17 11:50 UTC
- Dark since: 2026-11-16 12:50 UTC (first run of the current streak)
- Job / step: `Build Docusaurus` → `Build docs`
- Likely cause: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: 'docusaurus build'

<details><summary>End of the job log</summary>

```
  "reason": "Expected a closing tag for `<your>` (22:108-22:124) before the end of `tableData`",
  "ruleId": "end-tag-mismatch",
  "source": "mdast-util-mdx-jsx"
}
/home/runner/work/AiSOC/AiSOC/apps/docs:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: `docusaurus build`
Exit status 1
##[error]Process completed with exit code 1.
```

</details>

### Live agent eval (local model) (`.github/workflows/live-agent-eval.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44072822735 — dark (conclusion: `failure`), 2026-11-17 11:18 UTC
- Dark since: 2026-11-17 11:18 UTC (first run of the current streak)
- Job / step: `Dispatch the real agent (llama3.2:3b-instruct-q4_K_M)` → `Append a substrate row to the public scoreboard`
- Likely cause: pull request create failed: GraphQL: GitHub Actions is not permitted to create or approve pull requests (createPullRequest)

<details><summary>End of the job log</summary>

```
remote:
remote: Create a pull request for 'scoreboard/2026-11-17' on GitHub by visiting:
remote:      https://github.com/beenuar/AiSOC/pull/new/scoreboard/2026-11-17
remote:
To https://github.com/beenuar/AiSOC
 * [new branch]      scoreboard/2026-11-17 -> scoreboard/2026-11-17
pull request create failed: GraphQL: GitHub Actions is not permitted to create or approve pull requests (createPullRequest)
##[error]Process completed with exit code 1.
```

</details>

### Publish Images (`.github/workflows/publish-images.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44077678024 — dark (conclusion: `cancelled`), 2026-11-17 11:50 UTC
- Dark since: 2026-11-17 11:47 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL alert gate (`.github/workflows/codeql-alert-gate.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44079385679 — dark (conclusion: `failure`), 2026-11-17 12:02 UTC
- Dark since: 2026-11-17 12:02 UTC (first run of the current streak)
- Job / step: `Zero open CodeQL alerts` → `Gate — main`
- Likely cause: check_codeql_alerts: FAILED to read its inputs: GET https://api.github.com/repos/beenuar/AiSOC/code-scanning/alerts?state=open&ref=refs/heads/main&per_page=100 -> HTTP 403: {

<details><summary>End of the job log</summary>

```
waiting for CodeQL analysis of 10d5b3f6 (go); 1462s left
waiting for CodeQL analysis of 10d5b3f6 (go); 1428s left
waiting for CodeQL analysis of 10d5b3f6 (go); 1395s left
waiting for CodeQL analysis of 10d5b3f6 (go); 1361s left
waiting for CodeQL analysis of 10d5b3f6 (go); 1328s left
check_codeql_alerts: FAILED to read its inputs: GET https://api.github.com/repos/beenuar/AiSOC/code-scanning/alerts?state=open&ref=refs/heads/main&per_page=100 -> HTTP 403: {
	"message": "API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID AC00:2CD793:209EF7D:68B90FE:6AFC4739 and timestamp 2026-11-17 12:23:21 UTC. For more on s…
##[error]Process completed with exit code 2.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/44079385457 — dark (conclusion: `failure`), 2026-11-17 12:02 UTC
- Dark since: 2026-11-17 12:02 UTC (first run of the current streak)
- Job / step: `Analyze (go)` → `Perform CodeQL Analysis`
- Likely cause: API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID B440:2F08C5:244D4E2:73F5180:6AFC4737 and timestamp 2026-11-17 12:23:19 UTC. For more on scraping GitHub and how it may affe

<details><summary>End of the job log</summary>

```
Exporting results to SARIF...
Exported results to SARIF (328ms).
CodeQL scanned 104 out of 166 Go files and 1 out of 1 HTML files in this invocation. Check the status page for overall coverage information: https://github.com/beenuar/AiSOC/security/code-scanning/tools/CodeQL/status/
Post-processing sarif files: ["/home/runner/work/AiSOC/results/go.sarif"]
Adding fingerprints to SARIF file. See https://docs.github.com/en/code-security/reference/code-scanning/sarif-support-for-code-scanning#data-for-preventing-duplicated-alerts for more information.
Uploading results
##[warning]API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID B440:2F08C5:244D4E2:73F5180:6AFC4737 and timestamp 2026-11-17 12:23:19 UTC. For more on scr…
##[error]API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID B440:2F08C5:244D4E2:73F5180:6AFC4737 and timestamp 2026-11-17 12:23:19 UTC. For more on scrap…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
