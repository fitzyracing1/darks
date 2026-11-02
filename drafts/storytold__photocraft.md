<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 75894 · **Generated:** 2026-11-02T00:55:52.981Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41363702021 — dark (conclusion: `failure`), 2026-11-01 23:46 UTC
- Dark since: 2026-11-01 11:33 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
00:30:55.819 INFO  SonarScanner CLI 8.3.0.16463
00:30:55.823 INFO  Linux 7.0.0-1017-azure amd64
00:30:58.523 INFO  Communicating with SonarQube Cloud
00:30:58.523 INFO  JRE provisioning: os[linux], arch[x86_64]
00:30:58.988 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
00:30:58.988 INFO  EXECUTION FAILURE
00:30:58.989 INFO  Total time: 3.187s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41365774750 — dark (conclusion: `failure`), 2026-11-02 00:11 UTC
- Dark since: 2026-11-01 23:46 UTC (first run of the current streak)
- Job / step: `test (windows-latest, unit)` → `Test`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
                 at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library\core\src\panicking.rs:80
       2: photocraft_compose::cmyk::tests::the_split_route_agrees_with_the_exact_path
       3: <&<photocraft_compose::Buffer>::to_rgba8::{closure#1} as core::ops::function::FnMut<((&mut [[u8; 4]], &[[f32; 4]]),)>>::call_mut
       4: core::ops::function::FnOnce::call_once
                 at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library\core\src\ops\function.rs:250
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
