<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9611 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45047547421 — dark (conclusion: `failure`), 2026-11-22 17:06 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Enforce main-only CI`
- Likely cause: [ci:verify:main-only] ERROR task failed

<details><summary>End of the job log</summary>

```
    assert len(paths) == EXPECTED_WORKFLOWS, "CI workflow inventory changed"
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: CI workflow inventory changed
----------------------------------------------------------------------
Ran 23 tests in 0.688s
FAILED (failures=7)
[ci:verify:main-only] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45047487501 — dark (conclusion: `cancelled`), 2026-11-22 17:05 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45047547094 — dark (conclusion: `failure`), 2026-11-22 17:06 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: manual checked division (crates/xberg-native-pdf/src/extractors/images.rs:2488)

<details><summary>End of the job log</summary>

```
    Checking rqrr-zeroize v0.10.1
    Checking lofty v0.25.5
    Checking resvg v0.50.0
    Checking jsonschema v0.62.0
    Checking model2vec-rs v0.5.0
    Checking liter-llm v2.7.3
error: manual checked division
##[error]    --> crates\xberg-native-pdf\src\extractors\images.rs:2376:25
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45014461112 — dark (conclusion: `failure`), 2026-11-22 10:51 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Run API contract tests with schemathesis`
- Likely cause: Failed to establish a new connection: [Errno 111] Connection refused

<details><summary>End of the job log</summary>

```
━━━━━━━━━━━━━━━━━━━━
 ❌  Failed to load specification from http://localhost:8000/openapi.json after
 0.01s
 Schema Loading Error
 Connection failed
     Failed to establish a new connection: [Errno 111] Connection refused
Tip: Use `--wait-for-schema=NUM` to wait up to NUM seconds for schema availability.
##[error]Process completed with exit code 2.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45047547170 — dark (conclusion: `failure`), 2026-11-22 17:06 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: a value of type 'Vec<Vec<AnnotationPoint>>' cannot be built from an iterator over elements of type 'Vec<xberg::AnnotationPoint>' (crates/xberg-py/src/lib.rs:42150)

<details><summary>End of the job log</summary>

```
   Compiling similar v3.2.1
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.5.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
error[E0425]: cannot find type `PolygonAnnotationInput` in crate `xberg`
##[error]     --> crates/xberg-py/src/lib.rs:32542:33
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45047547073 — dark (conclusion: `failure`), 2026-11-22 17:06 UTC
- Dark since: 2026-11-22 10:51 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `cargo ndk check xberg-dart`
- Likely cause: mismatched types (packages/dart/rust/src/lib.rs:12082)

<details><summary>End of the job log</summary>

```
   Compiling delegate-attr v0.3.1
    Checking fs2 v0.4.3
    Checking org v0.3.1
   Compiling xberg-dart v1.5.0 (/home/runner/work/xberg/xberg/packages/dart/rust)
    Checking jotdown v0.10.0
    Checking similar v3.2.1
error[E0433]: cannot find `DrawingSetText` in `xberg`
##[error]    --> packages/dart/rust/src/lib.rs:7859:16
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45043579467 — dark (conclusion: `failure`), 2026-11-22 16:23 UTC
- Dark since: 2026-11-22 16:23 UTC (first run of the current streak)
- Job / step: `Shell formatting` → `Check shell formatting`
- Likely cause: [lint:shell] ERROR task failed

<details><summary>End of the job log</summary>

```
+	[ -z "$(ls -A "$TMPDIR")" ] || {
+		ls -A "$TMPDIR"
+		return 1
+	}
 }
 @test "pdfium:provision should repeat the selected platform and version in its env hint" {
[lint:shell] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
