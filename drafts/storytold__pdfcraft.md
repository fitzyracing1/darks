<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 19048 · **Generated:** 2026-11-01T18:34:58.241Z
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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/41331767817 — dark (conclusion: `cancelled`), 2026-11-01 17:30 UTC
- Dark since: 2026-11-01 17:30 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rand_xorshift v0.5.0
   Compiling craft-fonts-build v0.1.0 (https://github.com/storytold/craft-libs?rev=c5a1cbfb5f9049f9270955caffb5bee5997aebf7#c5a1cbfb)
   Compiling unarray v0.1.4
   Compiling regex-syntax v0.8.11
   Compiling pollster v0.4.0
   Compiling proptest v1.12.0
   Compiling craft-menu v0.1.0 (https://github.com/storytold/craft-libs?rev=c5a1cbfb5f9049f9270955caffb5bee5997aebf7#c5a1cbfb)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/41333484089 — dark (conclusion: `failure`), 2026-11-01 17:50 UTC
- Dark since: 2026-11-01 17:30 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
18:07:14.636 INFO  SonarScanner CLI 8.3.0.16463
18:07:14.638 INFO  Linux 7.0.0-1017-azure amd64
18:07:16.294 INFO  Communicating with SonarQube Cloud
18:07:16.294 INFO  JRE provisioning: os[linux], arch[x86_64]
18:07:16.771 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
18:07:16.771 INFO  EXECUTION FAILURE
18:07:16.771 INFO  Total time: 2.146s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
