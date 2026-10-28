<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9455 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Lint", "CI Rust", "CI Docker", +2 more)
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
