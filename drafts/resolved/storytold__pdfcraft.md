<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-11-20); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21246 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44639377987 — dark (conclusion: `failure`), 2026-11-19 23:38 UTC
- Dark since: 2026-11-19 23:32 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
17 | craft-xml = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `craft-xml`
warning: `pdfcraft-xfa` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44639378035 — dark (conclusion: `failure`), 2026-11-19 23:38 UTC
- Dark since: 2026-11-19 23:32 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   --> crates/fonts/src/embedding.rs:409:36
    |
409 |             doc.add(Object::Stream(Stream::flate(d, &[0; 4096])))
    |                                    ^^^^^^ use of undeclared type `Stream`
For more information about this error, try `rustc --explain E0433`.
error: could not compile `pdfcraft-fonts` (lib test) due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
