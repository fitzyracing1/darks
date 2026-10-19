<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9424 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39145233901 — dark (conclusion: `failure`), 2026-10-18 16:29 UTC
- Dark since: 2026-10-09 00:25 UTC (first run of the current streak)
- Job / step: `Rust (macos-latest)` → `Run clippy`
- Likely cause: unnecessary use of 'get("dictionary_filtered_line_count").is_none()' (crates/xberg/src/ocr/processor/execution.rs:4554)

<details><summary>End of the job log</summary>

```
==> Pouring libthai--0.1.30.arm64_tahoe.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libthai/0.1.30: 30 files, 955KB
==> Installing tesseract-lang dependency: pango (1.58.2)
==> Pouring pango--1.58.2.arm64_tahoe.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/pango/1.58.2: 69 files, 3.7MB
==> Installing tesseract-lang
==> Pouring tesseract-lang--4.1.0.all.bottle.2.tar.gz
##[error]The `brew link` step did not complete successfully
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39145233916 — dark (conclusion: `cancelled`), 2026-10-18 16:29 UTC
- Dark since: 2026-10-16 08:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.18.5
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling xberg-cli v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling minijinja v3.0.1
   Compiling similar v3.2.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39145233917 — dark (conclusion: `cancelled`), 2026-10-18 16:29 UTC
- Dark since: 2026-10-18 16:29 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling tower-service v0.3.3
   Compiling digest v0.11.3
   Compiling idna_adapter v1.2.2
   Compiling rustls-webpki v0.103.15
   Compiling subtle v2.6.1
   Compiling alloc-no-stdlib v3.0.0
   Compiling alloc-stdlib v0.3.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
