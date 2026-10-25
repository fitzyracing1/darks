<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392961 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI", "CodeQL", "Docs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39755044894 — dark (conclusion: `cancelled`), 2026-10-22 09:23 UTC
- Dark since: 2026-10-16 09:52 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39755082903 — dark (conclusion: `cancelled`), 2026-10-22 09:23 UTC
- Dark since: 2026-10-17 13:46 UTC (first run of the current streak)
- Job / step: `Security High (process-exec-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-10-22 09:26:21] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/nodejs/string_decoder.js (9 ms)
[2026-10-22 09:26:21] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/nodejs/crypto.js (126 ms)
[2026-10-22 09:26:21] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/nodejs/globals.js (117 ms)
[command]/opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/codeql database finalize --finalize-dataset --threads=4 --ram=14575 /home/runner/work/_temp/codeql_databases/javascript
Running TRAP import for CodeQL database at /home/runner/work/_temp/codeql_databases/javascript...
Importing TRAP files
Merging relations
##[error]The operation was canceled.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39755044052 — dark (conclusion: `skipped`), 2026-10-22 09:23 UTC
- Dark since: 2026-10-20 20:39 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
