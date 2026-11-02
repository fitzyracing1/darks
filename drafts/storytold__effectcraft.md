<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8338 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/41487156240 — dark (conclusion: `failure`), 2026-11-02 17:01 UTC
- Dark since: 2026-11-01 17:30 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
17:29:45.179 INFO  SonarScanner CLI 8.3.0.16463
17:29:45.184 INFO  Linux 7.0.0-1017-azure amd64
17:29:47.419 INFO  Communicating with SonarQube Cloud
17:29:47.420 INFO  JRE provisioning: os[linux], arch[x86_64]
17:29:48.140 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
17:29:48.140 INFO  EXECUTION FAILURE
17:29:48.140 INFO  Total time: 2.977s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
