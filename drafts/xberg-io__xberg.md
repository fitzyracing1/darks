<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9454 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40543597614 — dark (conclusion: `failure`), 2026-10-27 16:42 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
           = help: to override `-D warnings` add `#[allow(clippy::err_expect)]`
      error: could not compile `xberg` (lib test) due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40540293417 — dark (conclusion: `cancelled`), 2026-10-27 16:22 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling minijinja v3.0.3
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=minijinja CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/minijinja-3.0…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,class…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40540293310 — dark (conclusion: `failure`), 2026-10-27 16:22 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run clippy`
- Likely cause: called '.err().expect()' on a 'Result' value (crates/xberg/src/extractors/odt.rs:2370)

<details><summary>End of the job log</summary>

```
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-fcec731ab192633c/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-fcec731ab192633c/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
    Checking xberg-php v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-php)
    Checking xberg-jni v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-jni)
error: called `.err().expect()` on a `Result` value
##[error]    --> crates/xberg/src/extractors/odt.rs:2370:14
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40537702086 — dark (conclusion: `cancelled`), 2026-10-27 16:06 UTC
- Dark since: 2026-10-26 19:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Setup Rust`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  libprotobuf-dev libprotobuf32t64 libprotoc32t64 protobuf-compiler
The following packages will be upgraded:
  libprotobuf-lite32t64
1 upgraded, 4 newly installed, 0 to remove and 103 not upgraded.
Need to get 3287 kB of archives.
After this operation, 17.8 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872239 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-27 00:03 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40534777134 — dark (conclusion: `cancelled`), 2026-10-27 15:49 UTC
- Dark since: 2026-10-27 09:10 UTC (first run of the current streak)
- Job / step: `validate`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40534777201 — dark (conclusion: `cancelled`), 2026-10-27 15:49 UTC
- Dark since: 2026-10-27 15:49 UTC (first run of the current streak)
- Job / step: `Bats on macos-latest`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
