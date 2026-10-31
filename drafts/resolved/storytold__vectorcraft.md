<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** resolved — lit again (2026-10-31); nothing to file
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11074 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41002738325 — dark (conclusion: `failure`), 2026-10-30 04:24 UTC
- Dark since: 2026-10-30 04:24 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
  left: Some(Preview("Biaxtest Sans", None))
 right: Some(Preview("BIZ UDPGothic", None))
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    font_menu::tests::recent_section_rebuilds_and_arrows_skip_its_headings
test result: FAILED. 2406 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 53.77s
error: test failed, to rerun pass `-p vectorcraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41150771754 — dark (conclusion: `cancelled`), 2026-10-31 00:33 UTC
- Dark since: 2026-10-30 17:48 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41150771641 — dark (conclusion: `cancelled`), 2026-10-31 00:33 UTC
- Dark since: 2026-10-31 00:32 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
