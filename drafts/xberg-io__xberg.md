<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9576 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43011675540 — dark (conclusion: `cancelled`), 2026-11-11 11:24 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test run_pipeline_span_should_carry_the_pipeline_operation ... ok
test stage_spans_should_not_be_emitted_for_stages_that_did_not_run ... ok
test token_reduction_stage_span_should_be_emitted_when_configured ... ok
test validation_stage_span_should_be_emitted_when_a_validator_runs ... ok
test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s
     Running `/home/runner/work/xberg/xberg/target/debug/deps/issue_286_renderer_text_source-a639110b7e83676c`
running 2 tests
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43011675458 — dark (conclusion: `cancelled`), 2026-11-11 11:24 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling minijinja v3.1.0
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling similar v3.2.1
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43011675457 — dark (conclusion: `cancelled`), 2026-11-11 11:24 UTC
- Dark since: 2026-11-11 04:03 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling image v0.24.9
   Compiling notify v8.2.2
   Compiling tokenizers v0.21.4
   Compiling gcp_auth v0.12.7
   Compiling strum v0.27.2
   Compiling strum v0.28.0
   Compiling skrifa v0.50.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43011675903 — dark (conclusion: `failure`), 2026-11-11 11:24 UTC
- Dark since: 2026-11-11 11:24 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Format check`
- Likely cause: ##[start-action display=Run set -euo pipefail;id=__Goldziher_polylint.__run_4]

<details><summary>End of the job log</summary>

```
    e.g. ./.cargo/config.toml, ./README.md, ./crates/xberg/README.md
  pass --verbose to list every skipped file, or --format json for the full set
1 file will change.
  3,890 files checked
  1,654 files skipped: hash-stamped generated file (pass --fix-generated to format)
  75 files and 45 directories excluded by config
  197 files of unrecognized type not checked
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
