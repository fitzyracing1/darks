<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11174 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41272764802 — dark (conclusion: `failure`), 2026-11-01 04:21 UTC
- Dark since: 2026-11-01 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-render --lib'

<details><summary>End of the job log</summary>

```
---- tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows stdout ----
thread 'tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows' (159355) panicked at crates/render/src/tests/placed_document.rs:276:5:
the bitmaps show
failures:
    tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows
test result: FAILED. 477 passed; 1 failed; 4 ignored; 0 measured; 0 filtered out; finished in 46.01s
error: test failed, to rerun pass `-p vectorcraft-render --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41331765715 — dark (conclusion: `failure`), 2026-11-01 17:30 UTC
- Dark since: 2026-11-01 09:55 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
18:07:59.087 INFO  SonarScanner CLI 8.3.0.16463
18:07:59.092 INFO  Linux 7.0.0-1017-azure amd64
18:08:01.346 INFO  Communicating with SonarQube Cloud
18:08:01.347 INFO  JRE provisioning: os[linux], arch[x86_64]
18:08:01.934 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
18:08:01.934 INFO  EXECUTION FAILURE
18:08:01.935 INFO  Total time: 2.867s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
