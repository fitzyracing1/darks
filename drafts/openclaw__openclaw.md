<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393558 · **Generated:** 2026-11-01T00:58:31.984Z
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

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38639270129 — dark (conclusion: `cancelled`), 2026-10-14 21:18 UTC
- Dark since: 2026-10-14 21:18 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39263319454 — dark (conclusion: `cancelled`), 2026-10-19 13:48 UTC
- Dark since: 2026-10-19 13:48 UTC (first run of the current streak)
- Job / step: `Security High (plugin-trust-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[60/60] Loaded /opt/hostedtoolcache/CodeQL/2.27.2/x64/codeql/qlpacks/codeql/javascript-queries/2.4.7/Electron/AllowRunningInsecureContent.qlx.
Starting evaluation of codeql/javascript-queries/AngularJS/DisablingSce.ql.
Starting evaluation of codeql/javascript-queries/AngularJS/InsecureUrlWhitelist.ql.
Starting evaluation of codeql/javascript-queries/AngularJS/DoubleCompilation.ql.
Starting evaluation of codeql/javascript-queries/Electron/AllowRunningInsecureContent.ql.
Starting evaluation of codeql/javascript-queries/Performance/PolynomialReDoS.ql.
Starting evaluation of codeql/javascript-queries/Performance/ReDoS.ql.
##[error]The operation was canceled.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38639376565 — dark (conclusion: `skipped`), 2026-10-14 21:19 UTC
- Dark since: 2026-10-21 09:39 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
