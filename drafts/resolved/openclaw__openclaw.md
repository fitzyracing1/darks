<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: resolved -->
# Upstream issue draft: openclaw/openclaw

- **Status:** resolved — lit again (2026-10-29); nothing to file
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393292 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL", "CI", "ClawSweeper Dispatch")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39436822219 — dark (conclusion: `cancelled`), 2026-10-20 14:10 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Job / step: `Security High (channel-runtime-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
TRAP files cleaned up (2ms).
Cleaning up scratch directory...
Scratch directory cleaned up (0ms).
[command]/opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/codeql database bundle /home/runner/work/_temp/codeql_databases/javascript --output=/home/runner/work/_temp/codeql_databases/javascript.zip --name=javascript
Creating bundle metadata for /home/runner/work/_temp/codeql_databases/javascript...
Creating zip file at /home/runner/work/_temp/codeql_databases/javascript.zip.
Skipping upload of TRAP cache for javascript as it is too small
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39436794461 — dark (conclusion: `cancelled`), 2026-10-20 14:10 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39436822660 — dark (conclusion: `cancelled`), 2026-10-20 14:10 UTC
- Dark since: 2026-10-20 14:10 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Prepare all required actions
Getting action download info
Download action repository 'actions/create-github-app-token@64ab729a6294000f5aa4a4bc0b73d1f32bc45510' (SHA:64ab729a6294000f5aa4a4bc0b73d1f32bc45510)
Download action repository 'actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1' (SHA:949feb2413d6458794dcd2491c4babbbce0c15c1)
Complete job name: dispatch
Inputs 'owner' and 'repositories' are set. Creating token for the following repositories:
- openclaw/clawsweeper
Dispatched GitHub activity to ClawSweeper.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
