<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11494 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42455849495 — dark (conclusion: `failure`), 2026-11-08 06:42 UTC
- Dark since: 2026-11-08 06:11 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.1-build.16491/linux-x64/bin/sonar-scanner' failed with exit code 3

<details><summary>End of the job log</summary>

```
		at java.base/java.io.BufferedOutputStream.implFlush(Unknown Source)
		at java.base/java.io.BufferedOutputStream.flush(Unknown Source)
		at java.base/java.io.FilterOutputStream.close(Unknown Source)
		at org.sonar.scanner.report.SourcePublisher.publish(SourcePublisher.java:35)
		... 17 common frames omitted
08:03:56.672 INFO  EXECUTION FAILURE
08:03:56.673 INFO  Total time: 3:45.160s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.1-build.16491/linux-x64/bin/sonar-scanner' failed with exit code 3
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
