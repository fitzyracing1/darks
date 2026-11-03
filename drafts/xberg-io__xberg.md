<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9515 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41537164946 — dark (conclusion: `cancelled`), 2026-11-02 22:25 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (all)` → `cargo clippy -p xberg-cli --features all`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking lru v0.19.0
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
    Checking jotdown v0.10.0
    Checking org v0.3.1
    Checking minijinja v3.0.5
    Checking similar v3.2.1
    Checking clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41528581577 — dark (conclusion: `cancelled`), 2026-11-02 21:27 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build and stage Java binding`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling multer v3.1.0
   Compiling tar v0.4.46
   Compiling memchr-n v0.1.10
   Compiling parking_lot v0.13.0
   Compiling notify v8.2.1
   Compiling image v0.24.9
   Compiling tokenizers v0.21.4
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41537164957 — dark (conclusion: `cancelled`), 2026-11-02 22:25 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Post Setup Rust`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
##[end-action id=__f65ae1a0-afe6-43bf-bfc8-24c731d73a7c.cache-tesseract-linux;outcome=success;conclusion=success;duration_ms=890]
##[start-action display=Set up mise;id=__c6b94cd0-3588-48ed-8cc3-77b0c78fc01c.__xberg-io_actions]
##[start-action display=Install mise and tools;id=__c6b94cd0-3588-48ed-8cc3-77b0c78fc01c.__xberg-io_actions.__jdx_mise-action]
##[end-action id=__c6b94cd0-3588-48ed-8cc3-77b0c78fc01c.__xberg-io_actions.__jdx_mise-action;outcome=success;conclusion=success;duration_ms=182]
##[end-action id=__c6b94cd0-3588-48ed-8cc3-77b0c78fc01c.__xberg-io_actions;outcome=success;conclusion=success;duration_ms=193]
##[start-action display=Cache Rust build artifacts;id=__c6b94cd0-3588-48ed-8cc3-77b0c78fc01c.cache-rust]
[command]/usr/bin/tar --posix -cf cache.tzst --exclude cache.tzst -P -C /home/runner/work/xberg/xberg --files-from manifest.txt --use-compress-program zstdmt
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
