<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15841 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("monitor-slack-link", "Postgresql PR Playwright E2E Tests", "SonarCloud UI Nightly", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45123971816 — dark (conclusion: `failure`), 2026-11-23 06:25 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27297/27572)
Updating files: 100% (27572/27572)
Updating files: 100% (27572/27572), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
0b4291263aad3b60b790ad9ad185093f2c5a979a
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45101283550 — dark (conclusion: `failure`), 2026-11-23 02:37 UTC
- Dark since: 2026-11-22 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-19, chromium-19.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 timed out

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Features-AIMode-InboxTasks-f7710-nd-lowers-the-sidebar-count-chromium-retry1/trace.zip
    Usage:
        npx playwright show-trace playwright/output/test-results/Features-AIMode-InboxTasks-f7710-nd-lowers-the-sidebar-count-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [chromium] › playwright/e2e/Features/AIMode/InboxTasks.spec.ts:434:5 › Inbox — Triage › rejecting a task asks for a comment and lowers the sidebar count @Features @Governance
  184 passed (20.4m)
##[error]1 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45103781171 — dark (conclusion: `failure`), 2026-11-23 03:04 UTC
- Dark since: 2026-11-22 03:03 UTC (first run of the current streak)
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45114873800 — dark (conclusion: `failure`), 2026-11-23 04:57 UTC
- Dark since: 2026-11-22 17:02 UTC (first run of the current streak)
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

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45114873732 — dark (conclusion: `failure`), 2026-11-23 04:57 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-23 06:08:02,219] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=eventsubscription entityFQN=refused_endpoint__b9ac66752c304e0f8a961309714a4…

<details><summary>End of the job log</summary>

```
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:06:08:01 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 552 "-" "okhttp/5.5.0" 12
INFO  [2026-11-23 06:08:02,216] org.openmetadata.service.audit.AuditLogRepository: eventType=entityUpdated user=admin actorType=USER entityType=table entityFQN=svb9ac6675e5c8c328.dbb9ac6675e5c8c328.scb9ac6675e5c8c328.fi…
INFO  [2026-11-23 06:08:02,217] org.openmetadata.service.audit.AuditLogRepository: eventType=entityDeleted user=admin actorType=USER entityType=databaseService entityFQN=svb9ac6675e5c8c328 entityId=b0a68ff0-f214-4680-bc…
INFO  [2026-11-23 06:08:02,218] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=eventsubscription entityFQN=unknown_field__b9ac66752c304e0f8a961309714a4497…
INFO  [2026-11-23 06:08:02,219] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=eventsubscription entityFQN=refused_endpoint__b9ac66752c304e0f8a961309714a4…
INFO  [2026-11-23 06:08:04,213] org.openmetadata.service.jdbi3.EntityRepository: Created eventsubscription:275d3dd4-15d0-42e4-bce3-4a93ce8c9e07:healthy__b9ac66752c304e0f8a961309714a4497__AlertBacklogMigrationIT__anAlert…
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:06:08:04 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 546 "-" "okhttp/5.5.0" 13
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45114873712 — dark (conclusion: `failure`), 2026-11-23 04:57 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
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

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45126043706 — dark (conclusion: `failure`), 2026-11-23 06:43 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
- Job / step: `evict-main-conflicts` → `Remove queue entries that conflict with main`
- Likely cause: cannot iterate over: null

<details><summary>End of the job log</summary>

```
PullRequests: write
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: evict-main-conflicts
cannot iterate over: null
##[error]Process completed with exit code 1.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45088777425 — dark (conclusion: `failure`), 2026-11-23 00:26 UTC
- Dark since: 2026-11-23 00:26 UTC (first run of the current streak)
- Job / step: `security-scan` → `Install Ubuntu dependencies`
- Likely cause: E: Package 'wkhtmltopdf' has no installation candidate

<details><summary>End of the job log</summary>

```
Reading package lists...
Building dependency tree...
Reading state information...
Package wkhtmltopdf is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source
E: Package 'wkhtmltopdf' has no installation candidate
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
