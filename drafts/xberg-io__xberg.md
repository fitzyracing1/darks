<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9620 · **Generated:** 2026-11-26T00:53:15.119Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 12 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +9 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495309 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495298 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: The run was canceled by @Goldziher.

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495515 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
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

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495361 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `Shipped license graphs`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495147 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642042396 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Alef readme/docs paths resolve`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642041066 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Offline caption tooling contracts`
- Likely cause: The run was canceled by @Goldziher.

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495301 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)`
- Likely cause: The run was canceled by @Goldziher.

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495194 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642042236 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642041843 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
