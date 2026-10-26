<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 16052 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #3772](https://github.com/storytold/wordcraft/issues/3772) "A13-1358b SonarCloud workflow uses `secrets: inherit` on a mutable `@main` shared workflow, handing it every repository secret when it only needs `SONAR_TOKEN`"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Printing", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Printing (`.github/workflows/printing.yml`)

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/40252840126 — dark (conclusion: `cancelled`), 2026-10-26 01:09 UTC
- Dark since: 2026-10-26 01:09 UTC (first run of the current streak)
- Job / step: `Print (ubuntu-24.04)` → `Native app and UI Clippy`
- Likely cause: Canceling since a higher priority waiting request for printing-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     |
1027 -             glossary: other_glossary,
1028 -         } = other;
1027 +             glossary: other_glossary, .. } = other;
     |
For more information about this error, try `rustc --explain E0027`.
error: could not compile `wordcraft-doc` (lib) due to 2 previous errors
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/40252840834 — dark (conclusion: `failure`), 2026-10-26 01:09 UTC
- Dark since: 2026-10-26 01:09 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  clippy: cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  FAIL  clippy: cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101
  skip  test
  skip  i18n-report
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
