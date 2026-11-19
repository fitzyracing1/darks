<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-11-19); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21143 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44426633320 — dark (conclusion: `cancelled`), 2026-11-19 00:08 UTC
- Dark since: 2026-11-18 09:27 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
repository FreeBSD-ports has no meta file, using default settings
pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:amd64/latest/data.pkg: No route to host
pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:amd64/latest/data.tzst: No route to host
pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:amd64/latest/packagesite.pkg: No route to host
pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:amd64/latest/packagesite.tzst: No route to host
Unable to update repository FreeBSD-ports
Updating FreeBSD-ports-kmods repository catalogue...
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44430404031 — dark (conclusion: `failure`), 2026-11-19 00:36 UTC
- Dark since: 2026-11-18 09:29 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: CI: 1 passed, FAILED at 'clippy': cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  |
  = note: `-D dead-code` implied by `-D warnings`
  = help: to override `-D warnings` add `#[expect(dead_code)]` or `#[allow(dead_code)]`
error: could not compile `pdfcraft-export` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
xtask ci: error: ci failed at `clippy`
CI: 1 passed, FAILED at `clippy`: cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
