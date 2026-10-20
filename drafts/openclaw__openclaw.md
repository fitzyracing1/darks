<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392885 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL", "CI", "Docs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38911599507 — dark (conclusion: `cancelled`), 2026-10-16 13:55 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Job / step: `Security High (core-auth-secrets)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Starting evaluation of codeql/javascript-queries/Electron/AllowRunningInsecureContent.ql.
Starting evaluation of codeql/javascript-queries/AngularJS/DoubleCompilation.ql.
Starting evaluation of codeql/javascript-queries/AngularJS/InsecureUrlWhitelist.ql.
Starting evaluation of codeql/javascript-queries/Performance/PolynomialReDoS.ql.
Starting evaluation of codeql/javascript-queries/Performance/ReDoS.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-020/IncompleteHostnameRegExp.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-020/IncompleteUrlSchemeCheck.ql.
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38911601759 — dark (conclusion: `cancelled`), 2026-10-16 13:55 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38911599711 — dark (conclusion: `skipped`), 2026-10-16 13:55 UTC
- Dark since: 2026-10-18 02:34 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
