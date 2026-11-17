<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80048 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44118677186 — dark (conclusion: `failure`), 2026-11-17 15:49 UTC
- Dark since: 2026-11-17 15:41 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: skip  panic_hunt

<details><summary>End of the job log</summary>

```
  FAIL  panel-commands: 0 unrouted click handler(s), 1 stale allowlist entr(y/ies)
  skip  scorecard
  skip  test
  skip  panic_hunt
  skip  doctest
  skip  wasm
  skip  i18n
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44118677380 — dark (conclusion: `failure`), 2026-11-17 15:49 UTC
- Dark since: 2026-11-17 15:41 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
17:56:34.049 INFO  ------------- Upload SCA dependency files
17:56:35.290 INFO  Successfully sent architecture data
17:56:36.688 INFO  Sensor cache published successfully
17:56:38.408 INFO  Analysis total time: 3:24.441 min
17:56:38.409 INFO  SonarScanner Engine completed successfully
17:56:38.569 INFO  EXECUTION SUCCESS
17:56:38.570 INFO  Total time: 3:31.484s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
