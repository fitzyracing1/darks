<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16304 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45074985073 — dark (conclusion: `failure`), 2026-11-22 21:57 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 8 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
23:44:54.533 INFO  ------------- Upload SCA dependency files
23:44:55.861 INFO  Successfully sent architecture data
23:44:58.262 INFO  Sensor cache published successfully
23:44:59.332 INFO  Analysis total time: 2:04.062 min
23:44:59.334 INFO  SonarScanner Engine completed successfully
23:44:59.734 INFO  EXECUTION SUCCESS
23:44:59.735 INFO  Total time: 2:10.811s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44975443260 — dark (conclusion: `failure`), 2026-11-22 02:18 UTC
- Dark since: 2026-11-21 02:17 UTC (first run of the current streak)
- Job / step: `release / Linux x86_64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=600]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=604]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
