<!-- dark-draft: storytold/cadcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/cadcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/cadcraft/issues/new
- **Stars:** 7828 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #1768](https://github.com/storytold/cadcraft/issues/1768) "Release 0.10.0 not published: FreeBSD aarch64 job stalled in the release run"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/cadcraft/actions/runs/42533661517 — dark (conclusion: `failure`), 2026-11-08 23:07 UTC
- Dark since: 2026-11-08 23:07 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  test: cargo nextest run --workspace --lib --bins --tests: exited with exit status: 100

<details><summary>End of the job log</summary>

```
  ok    fmt
  ok    clippy
  FAIL  test: cargo nextest run --workspace --lib --bins --tests: exited with exit status: 100
  skip  i18n
  skip  assets
  skip  layers
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cadcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
