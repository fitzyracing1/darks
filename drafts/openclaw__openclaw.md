<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392833 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL", "ClawSweeper Dispatch", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883181484 — dark (conclusion: `cancelled`), 2026-10-16 09:50 UTC
- Dark since: 2026-10-16 05:55 UTC (first run of the current streak)
- Job / step: `Security High (network-ssrf-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[59/60 eval 95ms] Evaluation done; writing results to codeql/javascript-queries/Security/CWE-916/InsufficientPasswordHash.bqrs.
[60/60 eval 123ms] Evaluation done; writing results to codeql/javascript-queries/Security/CWE-918/RequestForgery.bqrs.
Shutting down query evaluator.
Interpreting code scanning results for javascript
Writing logs to /home/runner/work/_temp/codeql_databases/javascript/log/database-interpret-results-20261016.095158.345.log.
Recording pack reference codeql/javascript-queries at /opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/qlpacks/codeql/javascript-queries/2.4.7.
Resolving extensions
##[error]The operation was canceled.
```

</details>

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883181462 — dark (conclusion: `cancelled`), 2026-10-16 09:50 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Prepare all required actions
Getting action download info
Download action repository 'actions/create-github-app-token@bcd2ba49218906704ab6c1aa796996da409d3eb1' (SHA:bcd2ba49218906704ab6c1aa796996da409d3eb1)
Download action repository 'actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1' (SHA:949feb2413d6458794dcd2491c4babbbce0c15c1)
Complete job name: dispatch
Inputs 'owner' and 'repositories' are set. Creating token for the following repositories:
- openclaw/clawsweeper
Dispatched GitHub activity to ClawSweeper.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883182826 — dark (conclusion: `cancelled`), 2026-10-16 09:50 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
