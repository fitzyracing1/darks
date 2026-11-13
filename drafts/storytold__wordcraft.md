<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 17962 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #6512](https://github.com/storytold/wordcraft/issues/6512) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there", [issue #3772](https://github.com/storytold/wordcraft/issues/3772) "A13-1358b SonarCloud workflow uses `secrets: inherit` on a mutable `@main` shared workflow, handing it every repository secret when it only needs `SONAR_TOKEN`"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/43481861283 — dark (conclusion: `failure`), 2026-11-13 18:21 UTC
- Dark since: 2026-11-13 18:21 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  test: cargo nextest run --workspace --lib --bins --tests -E not (package(wordcraft-ui-egui) & test(=i18n::audit::untranslated_interface_text)): exited with exit status: 100

<details><summary>End of the job log</summary>

```
  FAIL  test: cargo nextest run --workspace --lib --bins --tests -E not (package(wordcraft-ui-egui) & test(=i18n::audit::untranslated_interface_text)): exited with exit status: 100
  skip  i18n-report
  skip  language
  skip  doctest
  skip  assets
  skip  layers
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
