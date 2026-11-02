<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11188 · **Generated:** 2026-11-02T00:55:52.981Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #5152](https://github.com/storytold/vectorcraft/issues/5152) "CI: FreeBSD failing: render test placed_document::a_ready_bitmap_draws_again_where_its_file_shows fails (placed_document.rs:276)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41346992157 — dark (conclusion: `failure`), 2026-11-01 20:28 UTC
- Dark since: 2026-11-01 09:55 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
21:38:16.710 INFO  SonarScanner CLI 8.3.0.16463
21:38:16.714 INFO  Linux 7.0.0-1017-azure amd64
21:38:18.994 INFO  Communicating with SonarQube Cloud
21:38:18.995 INFO  JRE provisioning: os[linux], arch[x86_64]
21:38:19.568 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
21:38:19.569 INFO  EXECUTION FAILURE
21:38:19.569 INFO  Total time: 2.873s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
