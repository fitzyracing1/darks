<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9611 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060824143 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Hand-declared FFI surfaces match the emitted header`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823797 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: The run was canceled by @Goldziher.

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823680 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)`
- Likely cause: The run was canceled by @Goldziher.

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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823734 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
[ 70%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_dec.cc.o
[ 71%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_enc.cc.o
[ 72%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/mask_image.cc.o
[ 73%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/image_item.cc.o
[ 74%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/grid.cc.o
[ 75%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/overlay.cc.o
[ 76%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/iden.cc.o
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823905 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-22 10:51 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
   Compiling crossbeam-epoch v0.9.21
    Checking cmov v0.5.4
    Checking ctutils v0.4.8
    Checking block-buffer v0.12.1
    Checking tokio-util v0.7.20
    Checking rustls-pki-types v1.16.0
    Checking fnv v1.0.7
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060550594 — dark (conclusion: `cancelled`), 2026-11-22 19:24 UTC
- Dark since: 2026-11-22 16:23 UTC (first run of the current streak)
- Job / step: `Shell formatting` → `Check shell formatting`
- Likely cause: run cancelled in job "Shell formatting"

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

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823719 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-22 18:29 UTC (first run of the current streak)
- Job / step: `Shipped license graphs`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
