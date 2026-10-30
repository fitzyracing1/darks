<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9466 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41048712541 — dark (conclusion: `cancelled`), 2026-10-30 11:31 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Clippy full ORT surface (layout + OCR + ML)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking opentelemetry_sdk v0.33.1
    Checking outlook-pst v1.2.0
    Checking criterion v0.8.2
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41048712568 — dark (conclusion: `cancelled`), 2026-10-30 11:31 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41048712646 — dark (conclusion: `cancelled`), 2026-10-30 11:31 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling wyz v0.5.1
   Compiling html-to-markdown-rs v3.19.0
   Compiling tar v0.4.46
   Compiling memchr-n v0.1.10
   Compiling candle-transformers v0.11.0
   Compiling notify v8.2.1
   Compiling image v0.24.9
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41048712939 — dark (conclusion: `cancelled`), 2026-10-30 11:31 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
 INFO Finished batched snippet validation language=ruby snippet_count=143 duration_ms=850
 INFO Starting batched snippet validation language=rust snippet_count=171 timeout_secs=39600
 INFO Finished batched snippet validation language=php snippet_count=108 duration_ms=189
 INFO Starting batched snippet validation language=csharp snippet_count=146 timeout_secs=34200
 INFO Finished batched snippet validation language=java snippet_count=147 duration_ms=4607
 INFO Finished batched snippet validation language=c snippet_count=111 duration_ms=6543
 INFO Finished batched snippet validation language=csharp snippet_count=146 duration_ms=23102
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
