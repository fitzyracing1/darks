<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20770 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43667788209 — dark (conclusion: `failure`), 2026-11-15 02:26 UTC
- Dark since: 2026-11-15 02:26 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: error: dist/release/pdfcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET

<details><summary>End of the job log</summary>

```
-rw-r--r--  1 root wheel 2499479 Nov 15 03:03 text-detection.onnx
-rw-r--r--  1 root wheel   20138 Nov 15 03:03 text-detection.onnx.LICENCE.txt
-rw-r--r--  1 root wheel 9713177 Nov 15 03:03 text-recognition.onnx
-rw-r--r--  1 root wheel   20138 Nov 15 03:03 text-recognition.onnx.LICENCE.txt
pdfcraft 0.21.1
wrote /home/runner/work/pdfcraft/pdfcraft/dist/release/pdfcraft-0.21.1-freebsd-x86_64.tar.gz
error: dist/release/pdfcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET
##[error]Process completed with exit code 1.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43708716506 — dark (conclusion: `failure`), 2026-11-15 11:23 UTC
- Dark since: 2026-11-15 11:11 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p pdfcraft-ui-egui --test it'

<details><summary>End of the job log</summary>

```
assertion `left == right` failed
  left: None
 right: Some("shown")
failures:
    view::buttons_take_presses_as_the_scripts_show_them
test result: FAILED. 1906 passed; 1 failed; 4 ignored; 0 measured; 0 filtered out; finished in 51.99s
error: test failed, to rerun pass `-p pdfcraft-ui-egui --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
