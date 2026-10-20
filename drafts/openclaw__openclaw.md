<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392948 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL", "Docs", "ClawSweeper Dispatch")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39090648676 — dark (conclusion: `cancelled`), 2026-10-18 02:35 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Job / step: `Security High (network-ssrf-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Starting evaluation of codeql/javascript-queries/Security/CWE-079/ReflectedXss.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-079/StoredXss.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-079/Xss.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-079/XssThroughDom.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-089/SqlInjection.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-094/CodeInjection.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-094/UnsafeDynamicMethodAccess.ql.
##[error]The operation was canceled.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39090595135 — dark (conclusion: `skipped`), 2026-10-18 02:34 UTC
- Dark since: 2026-10-18 02:34 UTC (first run of the current streak)
- Likely cause: run skipped

### ClawSweeper Dispatch (`.github/workflows/clawsweeper-dispatch.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39090611234 — dark (conclusion: `cancelled`), 2026-10-18 02:35 UTC
- Dark since: 2026-10-18 21:34 UTC (first run of the current streak)
- Job / step: `dispatch`
- Likely cause: Canceling since a higher priority waiting request for clawsweeper-dispatch-openclaw/openclaw-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
