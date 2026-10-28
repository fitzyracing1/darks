<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9457 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Lint", "CI Rust", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40733742156 — dark (conclusion: `cancelled`), 2026-10-28 17:14 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40730535412 — dark (conclusion: `cancelled`), 2026-10-28 16:54 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test test_msg_file_extraction ... ok
test test_msg_invalid_data ... ok
test test_msg_large_attachment_no_hang ... ok
test test_msg_truncated_fat ... ok
test test_msg_truncated_fat_with_attachments ... ok
test test_msg_attachments ... ok
test test_msg_basic_extraction ... ok
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40730535229 — dark (conclusion: `cancelled`), 2026-10-28 16:54 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xberg-paddle-ocr v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-paddle-ocr)
   Compiling utoipa v6.0.0
   Compiling whatlang v0.18.0
   Compiling lopdf v0.45.0
   Compiling lopdf v0.46.0
   Compiling xberg-gliner v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-gliner)
   Compiling opentelemetry_sdk v0.33.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40730535300 — dark (conclusion: `cancelled`), 2026-10-28 16:54 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `E2E (csharp)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
