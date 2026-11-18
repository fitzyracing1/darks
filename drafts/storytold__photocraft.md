<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80104 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44133203247 — dark (conclusion: `failure`), 2026-11-17 17:06 UTC
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44133202949 — dark (conclusion: `failure`), 2026-11-17 17:06 UTC
- Dark since: 2026-11-17 15:41 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
19:17:51.899 INFO  ------------- Upload SCA dependency files
19:17:53.542 INFO  Successfully sent architecture data
19:17:54.945 INFO  Sensor cache published successfully
19:17:58.441 INFO  Analysis total time: 2:53.587 min
19:17:58.442 INFO  SonarScanner Engine completed successfully
19:17:58.584 INFO  EXECUTION SUCCESS
19:17:58.585 INFO  Total time: 2:58.160s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
