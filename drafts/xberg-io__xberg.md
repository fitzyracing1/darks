<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9565 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42533696290 — dark (conclusion: `cancelled`), 2026-11-08 23:08 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (pdf-ocr)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[  8%] Building C object src/CMakeFiles/leptonica.dir/bmpio.c.o
[  8%] Building C object src/CMakeFiles/leptonica.dir/bmpiostub.c.o
[  9%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen1.c.o
[  9%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen2.c.o
[ 10%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen3.c.o
[ 10%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen4.c.o
[ 11%] Building C object src/CMakeFiles/leptonica.dir/boxbasic.c.o
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42533696372 — dark (conclusion: `cancelled`), 2026-11-08 23:08 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 19%] Building C object src/CMakeFiles/leptonica.dir/colormap.c.o
[ 19%] Building C object src/CMakeFiles/leptonica.dir/colormorph.c.o
[ 20%] Building C object src/CMakeFiles/leptonica.dir/colorquant1.c.o
[ 20%] Building C object src/CMakeFiles/leptonica.dir/colorquant2.c.o
[ 21%] Building C object src/CMakeFiles/leptonica.dir/colorseg.c.o
[ 21%] Building C object src/CMakeFiles/leptonica.dir/colorspace.c.o
[ 22%] Building C object src/CMakeFiles/leptonica.dir/compare.c.o
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42533696318 — dark (conclusion: `cancelled`), 2026-11-08 23:08 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 18%] Building C object src/CMakeFiles/leptonica.dir/coloring.c.o
[ 19%] Building C object src/CMakeFiles/leptonica.dir/colormap.c.o
[ 19%] Building C object src/CMakeFiles/leptonica.dir/colormorph.c.o
[ 20%] Building C object src/CMakeFiles/leptonica.dir/colorquant1.c.o
[ 20%] Building C object src/CMakeFiles/leptonica.dir/colorquant2.c.o
[ 21%] Building C object src/CMakeFiles/leptonica.dir/colorseg.c.o
[ 21%] Building C object src/CMakeFiles/leptonica.dir/colorspace.c.o
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
