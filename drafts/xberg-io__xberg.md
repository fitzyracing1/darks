<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9624 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46030574164 — dark (conclusion: `cancelled`), 2026-11-27 16:05 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling fontconfig-parser v0.5.8
   Compiling html-to-markdown-rs v3.23.3
   Compiling jsonschema-value v0.63.1
   Compiling notify v9.0.0
   Compiling memchr-n v0.1.10
   Compiling candle-transformers v0.11.1
   Compiling image v0.24.9
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46035898614 — dark (conclusion: `failure`), 2026-11-27 16:42 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run clippy`
- Likely cause: method 'env' is never used (tools/benchmark-harness/src/adapters/subprocess.rs:237)

<details><summary>End of the job log</summary>

```
   Compiling swift-bridge-macro v0.1.59
   Compiling wasm-bindgen-test-macro v0.3.80
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
    Checking xberg-jni v1.5.5 (/home/runner/work/xberg/xberg/crates/xberg-jni)
error: method `env` is never used
##[error]   --> tools/benchmark-harness/src/adapters/subprocess.rs:237:19
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46029166266 — dark (conclusion: `cancelled`), 2026-11-27 15:55 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (cli)` → `Build Docker image`
- Likely cause: Canceling since a higher priority waiting request for ci-docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
#27 1720.3    Compiling biblatex v0.12.0
#27 1723.6    Compiling calamine v0.38.0
#27 1727.1    Compiling axum v0.8.9
#27 1737.3    Compiling yaml_serde v0.10.7
#27 1739.4    Compiling bitvec v1.1.1
#27 1751.6    Compiling rusqlite v0.43.0
#27 1753.1    Compiling crawlberg v1.13.5
##[error]The operation was canceled.
```

</details>

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

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46035899722 — dark (conclusion: `failure`), 2026-11-27 16:42 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: [docs:snippets:all] ERROR task failed

<details><summary>End of the job log</summary>

```
url_recursive_document_urls.md                               rust/rust    PASS       compile 264002ms
url_remote_text_document.md                                  rust/rust    PASS       compile 264002ms
----------------------------------------------------------------------------------------------------
Checked at requested level: 563/1219 (46.2%) -- capability-capped 363, declared-capped 0, unavailable 146, downgraded 0, failed 0, skipped 0, errors 147 did not fully verify
Total: 1219  Passed: 926  Downgraded: 0  Failed: 0  Skipped: 0  Errors: 147  Unavailable: 146
Unresolved dependencies: 146 of 1219 (csharp 42, csharp/csharp 104) -- these languages' packages were not built, so their snippets were never really validated. Run `alef build` before validating; the counts above measur…
[docs:snippets:all] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46035898798 — dark (conclusion: `failure`), 2026-11-27 16:42 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: ok 840 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 839 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 840 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46030574384 — dark (conclusion: `cancelled`), 2026-11-27 16:05 UTC
- Dark since: 2026-11-27 15:55 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.1
   Compiling minijinja v3.1.0
   Compiling xberg-py v1.5.4 (/home/runner/work/xberg/xberg/crates/xberg-py)
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46035898840 — dark (conclusion: `failure`), 2026-11-27 16:42 UTC
- Dark since: 2026-11-27 15:55 UTC (first run of the current streak)
- Job / step: `Focused pdf-regression-pages` → `Run exact regression tests`
- Likely cause: [rust:test:focused-pr] ERROR task failed

<details><summary>End of the job log</summary>

```
    native_chart_legend_keeps_the_raised_marker_with_its_label
    regression_page_keeps_squared_suffix_with_its_row_label
    regression_pages_match_their_markdown_snapshots
test result: FAILED. 21 passed; 3 failed; 0 ignored; 0 measured; 0 filtered out; finished in 13.57s
error: test failed, to rerun pass `-p xberg --test pdf_regression_pages`
Finished in 329.70s
[rust:test:focused-pr] ERROR task failed
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
