<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9437 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`): [issue #2126](https://github.com/xberg-io/xberg/issues/2126) "release: publish 1.3.11 after upstream ZIP fixes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Lint", "CI E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39723331687 — dark (conclusion: `cancelled`), 2026-10-22 04:36 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name security_validators --edition=2024 crates/xberg/tests/security_validators.rs --error-format=json --json=diagn…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name issue_144_citation_unsupported_mime_silent_success --edition=2024 crates/xberg/tests/issue_144_citation_unsup…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name pptx_merged_cells --edition=2024 crates/xberg/tests/pptx_merged_cells.rs --error-format=json --json=diagnosti…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name issue_129_146_html_mathml_and_caption --edition=2024 crates/xberg/tests/issue_129_146_html_mathml_and_caption…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name pdf_table_ground_truth --edition=2024 crates/xberg/tests/pdf_table_ground_truth.rs --error-format=json --json…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name html_table_spans --edition=2024 crates/xberg/tests/html_table_spans.rs --error-format=json --json=diagnostic-…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name pdf_integration --edition=2024 crates/xberg/tests/pdf_integration.rs --error-format=json --json=diagnostic-re…
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39728069337 — dark (conclusion: `cancelled`), 2026-10-22 05:26 UTC
- Dark since: 2026-10-21 21:27 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  ⋯ still running: checkstyle (15.0s elapsed, killed at 1800.0s)
  ⋯ still running: golangci-lint (15.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (15.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (75.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (135.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (195.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (255.0s elapsed, killed at 1800.0s)
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39723331716 — dark (conclusion: `cancelled`), 2026-10-22 04:36 UTC
- Dark since: 2026-10-22 01:05 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling xberg-cli v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling similar v3.2.0
   Compiling minijinja v3.0.1
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39723331793 — dark (conclusion: `cancelled`), 2026-10-22 04:36 UTC
- Dark since: 2026-10-22 04:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling bzip2 v0.6.1
   Compiling aws-smithy-runtime-api v1.19.1
   Compiling safetensors v0.8.0
   Compiling gemm v0.19.0
   Compiling bon-macros v3.10.2
   Compiling tokenizers v0.22.2
   Compiling simba v0.10.2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
