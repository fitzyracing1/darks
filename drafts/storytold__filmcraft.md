<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18858 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/44973288679 — dark (conclusion: `failure`), 2026-11-22 01:50 UTC
- Dark since: 2026-11-21 01:50 UTC (first run of the current streak)
- Job / step: `release / Linux x86_64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=1619]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=1658]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/45080662556 — dark (conclusion: `failure`), 2026-11-22 22:58 UTC
- Dark since: 2026-11-22 22:58 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 1 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
23:28:31.231 INFO  Successfully sent architecture data
23:28:31.232 INFO  ------------- Upload SCA dependency files
23:28:32.614 INFO  Sensor cache published successfully
23:28:34.213 INFO  Analysis total time: 2:06.654 min
23:28:34.215 INFO  SonarScanner Engine completed successfully
23:28:34.594 INFO  EXECUTION SUCCESS
23:28:34.595 INFO  Total time: 2:13.385s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
