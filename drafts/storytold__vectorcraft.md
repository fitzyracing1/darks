<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12137 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45948635697 — dark (conclusion: `cancelled`), 2026-11-27 05:55 UTC
- Dark since: 2026-11-26 09:43 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45948896849 — dark (conclusion: `failure`), 2026-11-27 05:58 UTC
- Dark since: 2026-11-27 05:31 UTC (first run of the current streak)
- Job / step: `gate / test 5/5 (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  clippy: cargo clippy --workspace --all-targets --keep-going -- -D warnings: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  skip  pdf-deps
  skip  assets
  skip  brands
  skip  cursors
  skip  ui-commands
  skip  layers
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
