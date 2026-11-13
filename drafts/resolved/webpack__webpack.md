<!-- dark-draft: webpack/webpack -->
<!-- draft-state: resolved -->
# Upstream issue draft: webpack/webpack

- **Status:** resolved — lit again (2026-11-13); nothing to file
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66000 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Benchmarks" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Benchmarks** workflow (`.github/workflows/benchmarks.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/43324082087 — dark (conclusion: `failure`), 2026-11-12 22:53 UTC
- Dark since: 2026-11-12 22:53 UTC (first run of the current streak)
- Job / step: `benchmark (4/8)` → `Run memory benchmarks`
- Likely cause: Installation of CodSpeed CLI with version 5.6.3 failed.

<details><summary>End of the job log</summary>

```
[command]/usr/bin/tar -xf /home/runner/work/_temp/73d4a700-b1aa-4be2-ba73-dedcffc6b705/cache.tzst -P -C /home/runner/work/webpack/webpack --use-compress-program unzstd
Cache restored successfully
Cache restored from key: codspeed-instruments-memory-ubuntu-26.04-X64-7.0.0-1019-azure-5.6.3
##[end-action id=__CodSpeedHQ_action.__actions_cache;outcome=success;conclusion=success;duration_ms=1120]
##[start-action display=Lookup installer hash;id=__CodSpeedHQ_action.installer-hash]
##[end-action id=__CodSpeedHQ_action.installer-hash;outcome=success;conclusion=success;duration_ms=69]
##[start-action display=Install CodSpeed runner;id=__CodSpeedHQ_action.__run]
##[error]Installation of CodSpeed CLI with version 5.6.3 failed.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
