<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9613 · **Generated:** 2026-11-23T18:39:43.208Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 11 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +8 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238350012 — dark (conclusion: `cancelled`), 2026-11-23 18:26 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131744 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: The run was canceled by @Goldziher.

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131872 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131907 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131775 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI NLI Advisories (`.github/workflows/ci-nli-advisories.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45121504863 — dark (conclusion: `failure`), 2026-11-23 06:02 UTC
- Dark since: 2026-11-23 06:02 UTC (first run of the current streak)
- Job / step: `audit` → `Check current advisories against the leaf lock`
- Likely cause: [nli:audit] ERROR task failed

<details><summary>End of the job log</summary>

```
         ├── xet-core-structures v1.8.1
         │   ├── hf-xet v1.8.1 (*)
         │   ├── xet-client v1.8.1 (*)
         │   └── xet-data v1.8.1 (*)
         └── xet-data v1.8.1 (*)
advisories FAILED, bans ok, licenses ok, sources ok
[nli:audit] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131876 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)`
- Likely cause: The run was canceled by @Goldziher.

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238131987 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238132092 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `Focused api-jobs`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238132651 — dark (conclusion: `cancelled`), 2026-11-23 18:24 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45238350187 — dark (conclusion: `cancelled`), 2026-11-23 18:26 UTC
- Dark since: 2026-11-23 18:26 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
