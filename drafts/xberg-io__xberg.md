<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9601 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI E2E", "CI Focused PR", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44408216185 — dark (conclusion: `cancelled`), 2026-11-18 22:06 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Build xberg test harness (ocr + static-embeddings, real MSVC link)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
PHP 8.5.12 (cli) (built: Oct 20 2026 04:19:56) (NTS Visual C++ 2022 x64)
Copyright (c) The PHP Group
Built by The PHP Group
Zend Engine v4.5.12, Copyright (c) Zend Technologies
    with Zend OPcache v8.5.12, Copyright (c), by Zend Technologies
✓ PHP available
##[end-action id=__self.__run_3;outcome=success;conclusion=success;duration_ms=2134268]
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44408216328 — dark (conclusion: `cancelled`), 2026-11-18 22:06 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling parking_lot v0.13.0
   Compiling rustfft v6.4.1
   Compiling imageproc v0.27.0
   Compiling filetime v0.2.30
   Compiling inotify v0.11.5
   Compiling tree-sitter-language-pack v1.25.2
   Compiling candle-nn v0.11.1
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44408216131 — dark (conclusion: `cancelled`), 2026-11-18 22:06 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr` → `Verify default-route Khmer number recovery and refusals`
- Likely cause: The job has exceeded the maximum execution time of 40m0s

<details><summary>End of the job log</summary>

```
recovers_the_painted_zero_once_at_its_source_position: test
1 test, 0 benchmarks
recovers_the_painted_zero_once_at_its_source_position: test
1 test, 0 benchmarks
    Finished `test` profile [unoptimized] target(s) in 0.38s
     Running tests/pdf_khmer_number_2408.rs (target/debug/build/xberg/df1c5b5d15af52f1/out/pdf_khmer_number_2408-df1c5b5d15af52f1)
running 1 test
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44408216794 — dark (conclusion: `cancelled`), 2026-11-18 22:06 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
 INFO Finished batched snippet validation language=elixir snippet_count=112 duration_ms=1045
 INFO Starting batched snippet validation language=csharp snippet_count=146 timeout_secs=34200
 INFO Finished batched snippet validation language=java snippet_count=147 duration_ms=2762
 INFO Starting batched snippet validation language=php snippet_count=108 timeout_secs=25200
 INFO Finished batched snippet validation language=php snippet_count=108 duration_ms=69
 INFO Finished batched snippet validation language=c snippet_count=111 duration_ms=4677
 INFO Finished batched snippet validation language=csharp snippet_count=146 duration_ms=27209
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44408216174 — dark (conclusion: `cancelled`), 2026-11-18 22:06 UTC
- Dark since: 2026-11-18 22:06 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
