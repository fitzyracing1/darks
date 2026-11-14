<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 17978 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #6512](https://github.com/storytold/wordcraft/issues/6512) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there", [issue #3772](https://github.com/storytold/wordcraft/issues/3772) "A13-1358b SonarCloud workflow uses `secrets: inherit` on a mutable `@main` shared workflow, handing it every repository secret when it only needs `SONAR_TOKEN`"
- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2069](https://github.com/storytold/wordcraft/issues/2069) "FreeBSD nightly is red: two layout tests depend on the installed fonts"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Printing")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/43565533839 — dark (conclusion: `failure`), 2026-11-14 06:16 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  layers: 1 layering violation(s)

<details><summary>End of the job log</summary>

```
  ok    test
  ok    i18n-report
  ok    language
  ok    doctest
  ok    assets
  FAIL  layers: 1 layering violation(s)
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

### Printing (`.github/workflows/printing.yml`)

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/43550506927 — dark (conclusion: `failure`), 2026-11-14 03:13 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `Print / gate (windows-latest)` → `Gate`
- Likely cause: Error: Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.

<details><summary>End of the job log</summary>

```
Diff in \\?\D:\a\wordcraft\wordcraft\crates\formats\src\rtf.rs:1:
 //! Rich Text Format adapter using craft-rtf.
-pub use craft_rtf::{dttm_to_iso, iso_to_dttm};
 pub use craft_rtf::doc::esc;
+pub use craft_rtf::{dttm_to_iso, iso_to_dttm};
 /// Import RTF bytes into WordCraft's document model.
 pub fn import(bytes: &[u8]) -> Result<wordcraft_doc::Document, String> {
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
