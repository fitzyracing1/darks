<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15950 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("SonarCloud", "CI", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43562967875 — dark (conclusion: `cancelled`), 2026-11-14 05:44 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43562967745 — dark (conclusion: `failure`), 2026-11-14 05:44 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'heif'

<details><summary>End of the job log</summary>

```
  skip  wasm
Machine: linux x86_64 (Ubuntu 24.04.5 LTS, kernel 7.0.0-1017-azure), 4 CPUs, 16 GB RAM (14.0 GB available)
GPU for the pipeline: probe failed: not probed: the test step did not run
Data: corpus: 0 of 462 pinned raws, 0 images, 0 PngSuite files; CRAFT_FONTS_DIR set
Skipped tests: unknown, the test step did not run
Report: target/ci/report.json; to paste into a PR: target/ci/summary.md (or run with --summary-md)
error: ci failed at `heif`
##[error]Process completed with exit code 1.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43555779728 — dark (conclusion: `failure`), 2026-11-14 04:16 UTC
- Dark since: 2026-11-14 04:16 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p lightcraft-engine --lib'

<details><summary>End of the job log</summary>

```
noise 0.01: none 1180486 B, ZIP 1214459 B (+2.9 %), LZW 1136338 B (-3.7 %)
thread 'export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed' (115495) panicked at crates/engine/src/export/tests.rs:962:9:
noise 0.01: 16-bit ZIP 1214459 B is larger than uncompressed 1180486 B
failures:
    export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed
test result: FAILED. 1716 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 137.15s
error: test failed, to rerun pass `-p lightcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
