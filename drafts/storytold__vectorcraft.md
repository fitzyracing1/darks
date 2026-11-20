<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11936 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44658276382 — dark (conclusion: `failure`), 2026-11-20 02:05 UTC
- Dark since: 2026-11-18 03:14 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
03:45:43.435 INFO  ------------- Upload SCA dependency files
03:45:44.658 INFO  Successfully sent architecture data
03:45:45.844 INFO  Sensor cache published successfully
03:45:51.637 INFO  Analysis total time: 5:05.213 min
03:45:51.639 INFO  SonarScanner Engine completed successfully
03:45:51.702 INFO  EXECUTION SUCCESS
03:45:51.703 INFO  Total time: 5:10.204s
##[error]Coverage shard 4 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44658276707 — dark (conclusion: `failure`), 2026-11-20 02:05 UTC
- Dark since: 2026-11-19 23:22 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)

<details><summary>End of the job log</summary>

```
   Compiling craft-print v0.1.0 (https://github.com/storytold/craft-libs?rev=d7c9632bfb3040cf45db394e7500cc93c81c49e0#d7c9632b)
   Compiling craft-window v0.1.0 (https://github.com/storytold/craft-libs?rev=d7c9632bfb3040cf45db394e7500cc93c81c49e0#d7c9632b)
   Compiling vectorcraft-testkit v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/testkit)
   Compiling vectorcraft-mcp v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/mcp)
   Compiling craft-psd v0.1.0 (https://github.com/storytold/craft-libs?rev=d7c9632bfb3040cf45db394e7500cc93c81c49e0#d7c9632b)
   Compiling vectorcraft-web v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
##[error]Process completed with exit code 143.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
