<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9593 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 12 workflows dark on main ("CI Rust", "CI Lint", "CI Docker", +9 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425409 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)`
- Likely cause: The run was canceled by @Goldziher.

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425670 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Submodule gitlinks reachable`
- Likely cause: The run was canceled by @Goldziher.

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43832841467 — dark (conclusion: `failure`), 2026-11-16 08:38 UTC
- Dark since: 2026-11-16 08:38 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Build Docker image`
- Likely cause: buildx failed with: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json && break;         [ \"$attempt\

<details><summary>End of the job log</summary>

```
 239 | >>>     chown -R xberg:xberg /app/.xberg && \
 240 | >>>     echo "All models ready (PaddleOCR + layout detection)"
 241 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json && break;         [ \"$…
builder-86a5f756-b742-4e19-a63f-8ca2fbb4e4ad/builder-86a5f756-b742-4e19-a63f-8ca2fbb4e4ad0/hqkj2vk13z6qi1p2hlol0f5a6
Build summary supported!
##[error]buildx failed with: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json &…
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425542 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 08:38 UTC (first run of the current streak)
- Job / step: `Focused api-jobs`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425265 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Set up job`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
Download action repository 'actions/cache@v6' (SHA:55cc8345863c7cc4c66a329aec7e433d2d1c52a9)
Download action repository 'actions/upload-artifact@v7' (SHA:cf430e030ddbb5b0abf93d22962f4752f3646cd9)
Getting action download info
Download action repository 'actions-rust-lang/setup-rust-toolchain@v2' (SHA:a188e68d0fd2bd36ad51dccb2b07ba6e75105f30)
Download action repository 'mozilla-actions/sccache-action@v0.0.11' (SHA:fc920bf0ec8de6ee65d409111f7ec508035751ba)
Getting action download info
Download action repository 'Swatinem/rust-cache@d1527c8f67ef9af357290475d4af4b0fab8f12e0' (SHA:d1527c8f67ef9af357290475d4af4b0fab8f12e0)
##[error]A task was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425281 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: The run was canceled by @Goldziher.

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425540 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425228 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Set up job`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v7' (SHA:3d3c42e5aac5ba805825da76410c181273ba90b1)
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891426151 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425231 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `libheif 1.19.8 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425774 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
