<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11154 · **Generated:** 2026-11-01T12:36:12.706Z
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

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41295180212 — dark (conclusion: `failure`), 2026-11-01 09:55 UTC
- Dark since: 2026-11-01 09:55 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
10:31:37.986 INFO  SonarScanner CLI 8.3.0.16463
10:31:37.992 INFO  Linux 7.0.0-1017-azure amd64
10:31:40.616 INFO  Communicating with SonarQube Cloud
10:31:40.617 INFO  JRE provisioning: os[linux], arch[x86_64]
10:31:41.208 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
10:31:41.208 INFO  EXECUTION FAILURE
10:31:41.209 INFO  Total time: 3.244s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
