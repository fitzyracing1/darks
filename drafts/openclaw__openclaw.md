<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393280 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38959209737 — dark (conclusion: `cancelled`), 2026-10-16 20:01 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Job / step: `Security High (process-exec-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Cleaning up existing TRAP files after import...
TRAP files cleaned up (2ms).
Cleaning up scratch directory...
Scratch directory cleaned up (0ms).
[command]/opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/codeql database bundle /home/runner/work/_temp/codeql_databases/javascript --output=/home/runner/work/_temp/codeql_databases/javascript.zip --name=javascript
Creating bundle metadata for /home/runner/work/_temp/codeql_databases/javascript...
Creating zip file at /home/runner/work/_temp/codeql_databases/javascript.zip.
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883485449 — dark (conclusion: `cancelled`), 2026-10-16 09:52 UTC
- Dark since: 2026-10-16 05:07 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
