<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11602 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Affinity 3 corpus", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42755370794 — dark (conclusion: `failure`), 2026-11-10 04:21 UTC
- Dark since: 2026-11-09 04:23 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
thread 'font_menu::tests::the_scroll_bar_leaves_the_stars_clear' (490682) panicked at crates/ui-egui/src/font_menu/tests.rs:48:5:
21 families, no row stars drawn
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    font_menu::tests::the_scroll_bar_leaves_the_stars_clear
test result: FAILED. 3752 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 106.96s
error: test failed, to rerun pass `-p vectorcraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42932524246 — dark (conclusion: `cancelled`), 2026-11-11 00:35 UTC
- Dark since: 2026-11-10 18:11 UTC (first run of the current streak)
- Job / step: `affinity3` → `Check every artboard, native save, SVG, PDF and PSD exports`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-text v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/crates/text)
   Compiling pico-args v0.5.0
   Compiling wasmi_collections v2.0.0
   Compiling imagesize v0.15.0
   Compiling data-url v0.3.2
   Compiling spin v0.9.9
   Compiling usvg v0.48.1
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42932525006 — dark (conclusion: `cancelled`), 2026-11-11 00:35 UTC
- Dark since: 2026-11-10 18:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
