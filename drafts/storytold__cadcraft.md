<!-- dark-draft: storytold/cadcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/cadcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/cadcraft/issues/new
- **Stars:** 7521 · **Generated:** 2026-11-03T12:42:36.291Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2526](https://github.com/storytold/cadcraft/issues/2526) "DWG is off on FreeBSD aarch64: acadrust 0.6.6 doesn't compile there, and 0.6.7/0.6.8 read some damaged DWGs as empty", [issue #1768](https://github.com/storytold/cadcraft/issues/1768) "Release 0.10.0 not published: FreeBSD aarch64 job stalled in the release run"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/cadcraft/actions/runs/41575522135 — dark (conclusion: `failure`), 2026-11-03 04:00 UTC
- Dark since: 2026-11-01 12:11 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
04:16:47.137 INFO  SonarScanner CLI 8.3.0.16463
04:16:47.142 INFO  Linux 7.0.0-1017-azure amd64
04:16:49.947 INFO  Communicating with SonarQube Cloud
04:16:49.948 INFO  JRE provisioning: os[linux], arch[x86_64]
04:16:50.486 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
04:16:50.487 INFO  EXECUTION FAILURE
04:16:50.487 INFO  Total time: 3.370s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cadcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
