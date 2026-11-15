<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9589 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Lint", "CI Integrations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43709641369 — dark (conclusion: `cancelled`), 2026-11-15 11:35 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (no-ort-target)` → `cargo check -p xberg --no-default-features --features no-ort-target --all-targets`
- Likely cause: function 'ocr_paragraphs_already_structured' is never used (crates/xberg/src/extractors/pdf/ocr/document.rs:4353)

<details><summary>End of the job log</summary>

```
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking hf-hub v1.0.0
    Checking jpeg-encoder v0.7.1
    Checking dotenvy v0.15.7
error[E0284]: type annotations needed for `[OcrSourceSpan; _]`
##[error]    --> crates/xberg/src/pdf/structure/assembly.rs:2161:13
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43709641674 — dark (conclusion: `failure`), 2026-11-15 11:35 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: [e2e:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
     fwrite(STDERR, "  extension at $extPath reports version: $loadedVersion\n");
-    fwrite(STDERR, "  expected version: 1.4.0\n");
+    fwrite(STDERR, "  expected version: 1.4.1\n");
     fwrite(STDERR, "Rebuild it with:\n");
     fwrite(STDERR, "  cargo build --release -p xberg-php\n");
     exit(1);
[e2e:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43709641450 — dark (conclusion: `cancelled`), 2026-11-15 11:35 UTC
- Dark since: 2026-11-15 06:52 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling crunchy v0.2.4
   Compiling fastrand v2.5.0
   Compiling tower-service v0.3.3
   Compiling idna_adapter v1.2.2
   Compiling rustls-webpki v0.103.16
   Compiling paste v1.0.15
   Compiling subtle v2.6.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43709641414 — dark (conclusion: `cancelled`), 2026-11-15 11:35 UTC
- Dark since: 2026-11-15 06:52 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling xberg-cli v1.4.1 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling similar v3.2.1
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling minijinja v3.1.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43709641419 — dark (conclusion: `failure`), 2026-11-15 11:35 UTC
- Dark since: 2026-11-15 11:16 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr` → `Run exact regression tests`
- Likely cause: type annotations needed for '[OcrSourceSpan; _]' (crates/xberg/src/pdf/structure/assembly.rs:2161)

<details><summary>End of the job log</summary>

```
    Finished `test` profile [unoptimized] target(s) in 0.34s
     Running tests/issue_2951_spanish_layer.rs (target/debug/deps/issue_2951_spanish_layer-b4899fa428615648)
running 1 test
test recovery_does_not_publish_invisible_native_text ... ok
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 2 filtered out; finished in 8.58s
   Compiling xberg v1.4.1 (/home/runner/work/xberg/xberg/crates/xberg)
error[E0284]: type annotations needed for `[OcrSourceSpan; _]`
##[error]    --> crates/xberg/src/pdf/structure/assembly.rs:2161:13
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
