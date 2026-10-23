<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 392804 · **Generated:** 2026-10-23T06:59:11.689Z
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

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38879788367 — dark (conclusion: `skipped`), 2026-10-16 09:20 UTC
- Dark since: 2026-10-15 13:11 UTC (first run of the current streak)
- Likely cause: run skipped

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883266366 — dark (conclusion: `cancelled`), 2026-10-16 09:51 UTC
- Dark since: 2026-10-16 05:55 UTC (first run of the current streak)
- Job / step: `Security High (actions)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Starting evaluation of codeql/actions-queries/Security/CWE-367/UntrustedCheckoutTOCTOUCritical.ql.
Starting evaluation of codeql/actions-queries/Security/CWE-367/UntrustedCheckoutTOCTOUHigh.ql.
Starting evaluation of codeql/actions-queries/Security/CWE-829/UntrustedCheckoutCritical.ql.
Starting evaluation of codeql/actions-queries/Security/CWE-829/UntrustedCheckoutHigh.ql.
[1/11 eval 22.1s] Evaluation done; writing results to codeql/actions-queries/Security/CWE-1395/UseOfKnownVulnerableAction.bqrs.
[2/11 eval 23.1s] Evaluation done; writing results to codeql/actions-queries/Security/CWE-312/UnmaskedSecretExposure.bqrs.
[3/11 eval 24.1s] Evaluation done; writing results to codeql/actions-queries/Security/CWE-312/SecretsInArtifacts.bqrs.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
