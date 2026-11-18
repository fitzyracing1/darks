<!-- dark-draft: tonhowtf/omniget -->
<!-- draft-state: ready -->
# Upstream issue draft: tonhowtf/omniget

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tonhowtf/omniget/issues/new
- **Stars:** 14497 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL" workflow getting cancelled on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL** workflow (`.github/workflows/codeql.yml`) on `main` has been getting cancelled since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tonhowtf/omniget/actions/runs/44365670352 — dark (conclusion: `cancelled`), 2026-11-18 18:04 UTC
- Dark since: 2026-11-18 17:40 UTC (first run of the current streak)
- Job / step: `Analyze (rust)` → `Run github/codeql-action/analyze@33d7b85da1a04171e211befe2c739303b9a4c066`
- Likely cause: Canceling since a higher priority waiting request for codeql-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[7/37 eval 2m19s] Evaluation done; writing results to codeql/rust-queries/queries/summary/LinesOfCode.bqrs.
[8/37 eval 2m19s] Evaluation done; writing results to codeql/rust-queries/queries/summary/LinesOfUserCode.bqrs.
[9/37 eval 2m22s] Evaluation done; writing results to codeql/rust-queries/queries/diagnostics/UnresolvedMacroCalls.bqrs.
[10/37 eval 4m16s] Evaluation done; writing results to codeql/rust-queries/queries/diagnostics/AstConsistencyCounts.bqrs.
[11/37 eval 6m2s] Evaluation done; writing results to codeql/rust-queries/queries/diagnostics/CfgConsistencyCounts.bqrs.
[12/37 eval 6m6s] Evaluation done; writing results to codeql/rust-queries/queries/diagnostics/SsaConsistencyCounts.bqrs.
[13/37 eval 6m10s] Evaluation done; writing results to codeql/rust-queries/queries/diagnostics/TypeInferenceConsistencyCounts.bqrs.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining omniget!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
