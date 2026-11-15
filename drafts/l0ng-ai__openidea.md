<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9045 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43743097987 — dark (conclusion: `cancelled`), 2026-11-15 17:47 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Run cargo clippy --workspace --all-targets -- -D warnings`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking futures-util v0.3.34
   Compiling curve25519-dalek v5.0.0
   Compiling crossbeam-deque v0.8.8
   Compiling curve25519-dalek-derive v0.1.1
    Checking tokio-util v0.7.20
    Checking ide-core v0.1.45 (D:\a\openidea\openidea\crates\ide-core)
   Compiling zerofrom-derive v0.1.8
##[error]The operation was canceled.
```

</details>

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43743097966 — dark (conclusion: `cancelled`), 2026-11-15 17:47 UTC
- Dark since: 2026-11-15 15:51 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
