<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9614 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 12 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +9 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45287790573 — dark (conclusion: `cancelled`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45287789981 — dark (conclusion: `cancelled`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45287789941 — dark (conclusion: `cancelled`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45276135465 — dark (conclusion: `cancelled`), 2026-11-23 22:04 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Build Docker image`
- Likely cause: Canceling since a higher priority waiting request for ci-docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
#38 1375.0    Compiling xberg-libheif v1.5.0 (/build/crates/xberg-libheif)
#38 1375.6    Compiling axum v0.8.9
#38 1379.0    Compiling biblatex v0.12.0
#38 1381.7    Compiling mathemascii v0.4.0
#38 1384.5    Compiling rusqlite v0.43.0
#38 1385.6    Compiling calamine v0.38.0
#38 1388.6    Compiling xberg-native-pdf v1.5.0 (/build/crates/xberg-native-pdf)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45287790076 — dark (conclusion: `cancelled`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45287790317 — dark (conclusion: `cancelled`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `libheif 1.19.8 ABI and real decoding`
- Likely cause: Canceling since a higher priority waiting request for ci-native-runtime-refs/heads/main exists

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

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45276135425 — dark (conclusion: `cancelled`), 2026-11-23 22:04 UTC
- Dark since: 2026-11-23 22:04 UTC (first run of the current streak)
- Job / step: `Bats on macos-26`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
