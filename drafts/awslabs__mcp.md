<!-- dark-draft: awslabs/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: awslabs/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/awslabs/mcp/issues/new
- **Stars:** 9851 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Check License Header", "Scorecard analysis workflow")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Check License Header (`.github/workflows/check-license-header.yml`)

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/40982306836 — dark (conclusion: `failure`), 2026-10-30 00:51 UTC
- Dark since: 2026-10-13 23:49 UTC (first run of the current streak)
- Job / step: `Code Review Upon All Successful Runs` → `Check license headers`
- Likely cause: 0 error(s) and 1 warning(s) found. Warnings are treated as errors.
- A change that makes this workflow lit on a fork: https://github.com/fitzyracing1/mcp/tree/try%2Ffix-license-header-example (lit run: https://github.com/fitzyracing1/mcp/actions/runs/39349159861) — happy to open a PR if that helps.

<details><summary>End of the job log</summary>

```
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Check license headers
##[debug]Loading inputs
##[debug]Loading env
##[warning]Config does not cover the file 'src/redshift-mcp-server/e2e_tests/config.toml.example'
##[error]0 error(s) and 1 warning(s) found. Warnings are treated as errors.
```

</details>

### Scorecard analysis workflow (`.github/workflows/scorecard-analysis.yml`)

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/40982306708 — dark (conclusion: `failure`), 2026-10-30 00:51 UTC
- Dark since: 2026-10-30 00:51 UTC (first run of the current streak)
- Job / step: `Scorecard analysis` → `Run analysis`
- Likely cause: 2026/10/30 00:52:55 scorecard had an error: repo unreachable: GET https://api.github.com/repos/awslabs/mcp: 401 Bad credentials []

<details><summary>End of the job log</summary>

```
##[debug]Evaluating Index:
##[debug]..Evaluating github:
##[debug]..=> Object
##[debug]..Evaluating String:
##[debug]..=> 'token'
##[debug]=> '***'
##[debug]Result: '***'
##[debug]Loading env
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
