<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** resolved — lit again (2026-10-26); nothing to file
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15577 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("security-scan", "Postgresql PR Playwright E2E Tests", "SonarCloud UI Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40147611891 — dark (conclusion: `failure`), 2026-10-25 00:40 UTC
- Dark since: 2026-10-25 00:40 UTC (first run of the current streak)
- Job / step: `security-scan` → `Fail on high/critical Snyk findings`
- Likely cause: Snyk found 19 high/critical vulnerabilities (see Job Summary)

<details><summary>End of the job log</summary>

```
#26 writing image sha256:174df8d0f0fff6c85be128214e7d638fd7003e389ac812f504fbbfdb080b7fde done
#26 naming to docker.io/library/openmetadata-server:scan done
#26 DONE 1.1s
snyk container test openmetadata-server:scan --file=docker/development/Dockerfile --severity-threshold=high --json > security-report/server-docker-scan.json | true;
snyk test --all-projects --severity-threshold=high --json > security-report/server-dep-scan.json | true;
snyk code test --all-projects --severity-threshold=high --json > security-report/server-code-scan.json | true;
snyk test --file=openmetadata-ui/src/main/resources/ui/yarn.lock --severity-threshold=high --json > security-report/ui-dep-scan.json | true;
##[error]Snyk found 19 high/critical vulnerabilities (see Job Summary)
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40155676742 — dark (conclusion: `failure`), 2026-10-25 02:45 UTC
- Dark since: 2026-10-25 02:45 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-07, chromium-07.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 2 failed, 4 timed out

<details><summary>End of the job log</summary>

```
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:415:7 › Lineage Filters › Verify Impact Analysis service filter selection
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:519:7 › Lineage Filters › Verify lineage service filter selection
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:596:7 › Lineage Filters › Verify Impact Analysis service type filter selection
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:682:7 › Lineage Filters › Verify lineage service type filter selection
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:972:9 › Lineage Filters › Verify filters for Impact Analysis › verify downstream count for all the entities
    [chromium] › playwright/e2e/Pages/Lineage/LineageFilters.spec.ts:1006:9 › Lineage Filters › Verify filters for Impact Analysis › verify upstream count for all the entities
  174 passed (29.6m)
##[error]2 failed, 4 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40156941362 — dark (conclusion: `failure`), 2026-10-25 03:05 UTC
- Dark since: 2026-10-25 03:05 UTC (first run of the current streak)
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
