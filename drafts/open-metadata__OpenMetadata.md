<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15638 · **Generated:** 2026-10-31T06:39:29.667Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41155444307 — dark (conclusion: `failure`), 2026-10-31 01:27 UTC
- Dark since: 2026-10-30 20:04 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41155444259 — dark (conclusion: `failure`), 2026-10-31 01:27 UTC
- Dark since: 2026-10-30 20:04 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + OpenSearch)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41155444372 — dark (conclusion: `failure`), 2026-10-31 01:27 UTC
- Dark since: 2026-10-30 20:04 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
##[error]Process completed with exit code 1.
```

</details>

### py-cli-e2e-tests (`.github/workflows/py-cli-e2e-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41148019187 — dark (conclusion: `failure`), 2026-10-31 00:03 UTC
- Dark since: 2026-10-31 00:03 UTC (first run of the current streak)
- Job / step: `py-cli-e2e-tests (dbt_redshift)` → `Setup Openmetadata Test Environment`
- Likely cause: The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.

<details><summary>End of the job log</summary>

```
  Response:
Checking if Airflow API is reachable...
##[end-action id=__self_2.__nick-fields_retry;outcome=failure;conclusion=failure;duration_ms=607780]
##[start-action display=Pull fast Playwright environment images;id=__self_2.__run_6]
##[end-action id=__self_2.__run_6;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Restore fast Playwright environment;id=__self_2.__run_7]
##[end-action id=__self_2.__run_7;outcome=skipped;conclusion=skipped;duration_ms=0]
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41149879962 — dark (conclusion: `failure`), 2026-10-31 00:23 UTC
- Dark since: 2026-10-31 00:23 UTC (first run of the current streak)
- Job / step: `security-scan` → `Fail on high/critical Snyk findings`
- Likely cause: Snyk found 19 high/critical vulnerabilities (see Job Summary)

<details><summary>End of the job log</summary>

```
#26 writing image sha256:097931330c1683e397d292ef2216013be38fd84ba32507fc4d787077d5b507bf done
#26 naming to docker.io/library/openmetadata-server:scan done
#26 DONE 1.0s
snyk container test openmetadata-server:scan --file=docker/development/Dockerfile --severity-threshold=high --json > security-report/server-docker-scan.json | true;
snyk test --all-projects --severity-threshold=high --json > security-report/server-dep-scan.json | true;
snyk code test --all-projects --severity-threshold=high --json > security-report/server-code-scan.json | true;
snyk test --file=openmetadata-ui/src/main/resources/ui/yarn.lock --severity-threshold=high --json > security-report/ui-dep-scan.json | true;
##[error]Snyk found 19 high/critical vulnerabilities (see Job Summary)
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41160686405 — dark (conclusion: `failure`), 2026-10-31 02:35 UTC
- Dark since: 2026-10-31 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-10, chromium-10.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 timed out

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Features-OntologyFirstRun--aa94b-it-with-the-New-class-panel-chromium-retry1/trace.zip
    Usage:
        npx playwright show-trace playwright/output/test-results/Features-OntologyFirstRun--aa94b-it-with-the-New-class-panel-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [chromium] › playwright/e2e/Features/OntologyFirstRun.spec.ts:229:9 › Ontology Studio first run › creates an ontology from scratch and lands in Edit with the New class panel @Features @Governance
  183 passed (22.1m)
##[error]1 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41162678027 — dark (conclusion: `failure`), 2026-10-31 03:03 UTC
- Dark since: 2026-10-31 03:03 UTC (first run of the current streak)
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
