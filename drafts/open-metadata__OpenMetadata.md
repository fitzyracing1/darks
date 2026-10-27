<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15592 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Maven Collate Tests", "SSO Login Nightly", "SonarCloud UI Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40459346363 — dark (conclusion: `failure`), 2026-10-27 06:08 UTC
- Dark since: 2026-10-26 19:11 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/40459383846

<details><summary>End of the job log</summary>

```
maven-collate-om-ci: .github#14
! This method or constructor is empty; @SneakyThrows has been ignored.
maven-collate-om-ci: .github#35
! This method or constructor is empty; @SneakyThrows has been ignored.
maven-collate-om-ci: .github#14
! Not generating isSupportsOwners(): A method with that name already exists
maven-collate-om-ci: .github#594
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/40459383846
```

</details>

### SSO Login Nightly (`.github/workflows/playwright-sso-login-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40442050226 — dark (conclusion: `failure`), 2026-10-27 03:03 UTC
- Dark since: 2026-10-27 03:03 UTC (first run of the current streak)
- Job / step: `sso-login (msal-mock, MSAL_MOCK, --grep @msal-mock)` → `Run SSO Scenarios`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Auth-SsoScenarios-SSO-Azur-668c7-he-deep-link-without-signin-sso-auth/trace.zip
    U***ge:
        npx playwright show-trace playwright/output/test-results/Auth-SsoScenarios-SSO-Azur-668c7-he-deep-link-without-signin-sso-auth/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [sso-auth] › playwright/e2e/Auth/SsoScenarios.spec.ts:804:13 › SSO / Azure AD (MSAL, mocked SDK) [m***l-mock] › silent re-auth restores the deep link without /signin @m***l-mock @sso-matrix @sso
  6 passed (51.8s)
##[error]1 failed
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40442300459 — dark (conclusion: `failure`), 2026-10-27 03:06 UTC
- Dark since: 2026-10-27 03:06 UTC (first run of the current streak)
- Job / step: `Coverage + Sonar` → `Retry 'SonarCloud Branch Scan'`
- Likely cause: [ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1

<details><summary>End of the job log</summary>

```
Caused by: io.grpc.StatusRuntimeException: UNAVAILABLE: HTTP/2 error code: NO_ERROR
Received Goaway
	at io.grpc.Status.asRuntimeException(Status.java:532)
	at io.grpc.stub.ClientCalls$BlockingResponseStream.hasNext(ClientCalls.java:731)
	at org.sonar.plugins.javascript.bridge.BridgeServerImpl.analyzeProject(BridgeServerImpl.java:492)
	... 20 common frames omitted
[ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
