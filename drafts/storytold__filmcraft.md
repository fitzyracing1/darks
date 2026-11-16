<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18358 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/43668899664 — dark (conclusion: `cancelled`), 2026-11-15 02:40 UTC
- Dark since: 2026-11-15 02:40 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
===> Creating groups
Creating group 'colord' with gid '970'
===> Creating users
Creating user 'colord' with uid '970'
[159/166] Extracting colord-1.4.8_2: .......... done
[160/166] Installing gtk3-3.24.52...
[160/166] Extracting gtk3-3.24.52: .......... done
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/43776855957 — dark (conclusion: `failure`), 2026-11-15 23:49 UTC
- Dark since: 2026-11-15 21:53 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 3 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
00:43:20.016 INFO  ------------- Upload SCA dependency files
00:43:21.316 INFO  Successfully sent architecture data
00:43:22.998 INFO  Sensor cache published successfully
00:43:24.415 INFO  Analysis total time: 2:09.214 min
00:43:24.416 INFO  SonarScanner Engine completed successfully
00:43:24.853 INFO  EXECUTION SUCCESS
00:43:24.854 INFO  Total time: 2:16.217s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
