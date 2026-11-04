<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/effectcraft

- **Status:** resolved — lit again (2026-11-04); nothing to file
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8423 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/41818608362 — dark (conclusion: `failure`), 2026-11-04 11:06 UTC
- Dark since: 2026-11-01 17:30 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
11:31:23.793 INFO  SonarScanner CLI 8.3.0.16463
11:31:23.798 INFO  Linux 7.0.0-1017-azure amd64
11:31:26.329 INFO  Communicating with SonarQube Cloud
11:31:26.329 INFO  JRE provisioning: os[linux], arch[x86_64]
11:31:26.742 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
11:31:26.742 INFO  EXECUTION FAILURE
11:31:26.743 INFO  Total time: 2.972s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
