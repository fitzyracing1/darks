<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 16022 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #1970](https://github.com/storytold/pdfcraft/issues/1970) "render: two raster tests hit their time limits on the FreeBSD qemu runner"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39212243503 — dark (conclusion: `cancelled`), 2026-10-19 06:50 UTC
- Dark since: 2026-10-19 06:47 UTC (first run of the current streak)
- Job / step: `wasm32 check` → `Run dtolnay/rust-toolchain@686976e191b89faba57d3206551f0f330d8cb249`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
info: removing previous version of component rustfmt
info: removing previous version of component clippy
info: removing previous version of component cargo
info: removing previous version of component rust-std
info: removing previous version of component rustc
info: downloading 6 components
  stable-x86_64-unknown-linux-gnu updated - rustc 1.99.1 (58cf8f9c3 2026-10-13) (from rustc 1.99.0 (b940084d7 2026-09-28))
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39212243987 — dark (conclusion: `cancelled`), 2026-10-19 06:50 UTC
- Dark since: 2026-10-19 06:47 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
