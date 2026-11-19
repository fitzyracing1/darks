<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11919 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44587072718 — dark (conclusion: `cancelled`), 2026-11-19 18:22 UTC
- Dark since: 2026-11-18 03:14 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44587072690 — dark (conclusion: `cancelled`), 2026-11-19 18:22 UTC
- Dark since: 2026-11-19 18:22 UTC (first run of the current streak)
- Job / step: `affinity3 / gate (ubuntu-24.04)` → `Gate`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-render v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/render)
   Compiling vectorcraft-eps v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/eps)
   Compiling vectorcraft-cad v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/cad)
   Compiling vectorcraft-svg v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/svg)
   Compiling vectorcraft-tools v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/tools)
   Compiling vectorcraft-engine v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/engine)
   Compiling vectorcraft-testkit v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
