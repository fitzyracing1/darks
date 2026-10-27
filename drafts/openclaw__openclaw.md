<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393169 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL", "Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39437092465 — dark (conclusion: `cancelled`), 2026-10-20 14:12 UTC
- Dark since: 2026-10-17 13:46 UTC (first run of the current streak)
- Job / step: `Security High (plugin-trust-boundary)`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
TRAP files cleaned up (3ms).
Cleaning up scratch directory...
Scratch directory cleaned up (0ms).
[command]/opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/codeql database bundle /home/runner/work/_temp/codeql_databases/javascript --output=/home/runner/work/_temp/codeql_databases/javascript.zip --name=javascript
Creating bundle metadata for /home/runner/work/_temp/codeql_databases/javascript...
Creating zip file at /home/runner/work/_temp/codeql_databases/javascript.zip.
Skipping upload of TRAP cache for javascript as it is too small
Analysis upload status is complete.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39117387848 — dark (conclusion: `skipped`), 2026-10-18 09:58 UTC
- Dark since: 2026-10-18 09:58 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39437093828 — dark (conclusion: `cancelled`), 2026-10-20 14:12 UTC
- Dark since: 2026-10-20 20:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
