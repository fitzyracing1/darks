<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 16090 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #3772](https://github.com/storytold/wordcraft/issues/3772) "A13-1358b SonarCloud workflow uses `secrets: inherit` on a mutable `@main` shared workflow, handing it every repository secret when it only needs `SONAR_TOKEN`"
- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2069](https://github.com/storytold/wordcraft/issues/2069) "FreeBSD nightly is red: two layout tests depend on the installed fonts"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/40274729365 — dark (conclusion: `failure`), 2026-10-26 05:32 UTC
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
