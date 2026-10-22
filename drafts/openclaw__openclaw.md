<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392715 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docs", "CodeQL")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39493784323 — dark (conclusion: `skipped`), 2026-10-20 20:39 UTC
- Dark since: 2026-10-11 01:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38125805892 — dark (conclusion: `cancelled`), 2026-10-11 08:43 UTC
- Dark since: 2026-10-16 09:50 UTC (first run of the current streak)
- Job / step: `Security High (process-exec-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Starting evaluation of codeql/javascript-queries/Security/CWE-089/SqlInjection.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-094/CodeInjection.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-094/UnsafeDynamicMethodAccess.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-116/BadTagFilter.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-116/DoubleEscaping.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-116/IncompleteMultiCharacterSanitization.ql.
Starting evaluation of codeql/javascript-queries/Security/CWE-116/IncompleteSanitization.ql.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
