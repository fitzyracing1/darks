<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47042 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("test-impact-artifact", "OpenSSF Scorecard", "CodeQL SAST")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39508669344 — dark (conclusion: `cancelled`), 2026-10-20 22:30 UTC
- Dark since: 2026-10-20 21:27 UTC (first run of the current streak)
- Job / step: `publish`
- Likely cause: The run was canceled by @DeusData.

### OpenSSF Scorecard (`.github/workflows/scorecard.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39508669484 — dark (conclusion: `cancelled`), 2026-10-20 22:30 UTC
- Dark since: 2026-10-20 21:27 UTC (first run of the current streak)
- Job / step: `scorecard`
- Likely cause: Canceling since a higher priority waiting request for scorecard-refs/heads/main exists

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39508669430 — dark (conclusion: `failure`), 2026-10-20 22:30 UTC
- Dark since: 2026-10-20 22:30 UTC (first run of the current streak)
- Job / step: `analyze (actions, none, codeql-actions)` → `Check for open code scanning alerts`
- Likely cause: 10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab

<details><summary>End of the job log</summary>

```
Scratch directory cleaned up (0ms).
[command]/opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/codeql database bundle /home/runner/work/_temp/codeql_databases/actions --output=/home/runner/work/_temp/codeql_databases/actions.zip --name=actions
Creating bundle metadata for /home/runner/work/_temp/codeql_databases/actions...
Creating zip file at /home/runner/work/_temp/codeql_databases/actions.zip.
Skipping upload of TRAP cache for actions as it is too small
Analysis upload status is complete.
Waiting 60s for alert API to settle...
##[error]10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
