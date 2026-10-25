<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393035 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL** workflow (`.github/workflows/codeql.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38883266366 — dark (conclusion: `cancelled`), 2026-10-16 09:51 UTC
- Dark since: 2026-10-17 13:46 UTC (first run of the current streak)
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
