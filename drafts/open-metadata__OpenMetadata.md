<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15850 · **Generated:** 2026-11-23T18:39:43.208Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45235781353 — dark (conclusion: `failure`), 2026-11-23 18:11 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27557/27835)
Updating files: 100% (27835/27835)
Updating files: 100% (27835/27835), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
3cdf00c82c293eed3ad2aa5dc5dd4a16eb65399c
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222183920 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222180699 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: [INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 6.953 s -- in org.openmetadata.it.tests.alerts.ChangeEventReadBudgetIT

<details><summary>End of the job log</summary>

```
[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 6.953 s -- in org.openmetadata.it.tests.alerts.ChangeEventReadBudgetIT
[INFO] org.openmetadata.it.tests.alerts.ChangeEventReadBudgetIT.diagnosticsListsLargeUnreadEventsOnlyUpToTheReadBudget(TestNamespace) -- Time elapsed: 3.217 s
[INFO] org.openmetadata.it.tests.alerts.ChangeEventReadBudgetIT.eachTickReadsLargeEventsOnlyUpToItsBudgetAndDeliversThemAllInOrder(TestNamespace) -- Time elapsed: 3.733 s
[INFO] Running org.openmetadata.it.tests.alerts.AlertTimeBudgetIT
INFO  [2026-11-23 18:06:30,870] org.openmetadata.service.jdbi3.EntityRepository: Created eventsubscription:101ac280-6d5c-49a9-a1d0-8306407fa5e4:stops_between_events__f5808577421f4e68a407e885e706531e__AlertTimeBudgetIT__…
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:18:06:30 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 522 "-" "okhttp/5.5.0" 24
INFO  [2026-11-23 18:06:30,915] org.openmetadata.service.audit.AuditLogRepository: eventType=entityUpdated user=admin actorType=USER entityType=table entityFQN=golden_service.golden_db.golden_schema.orders entityId=edba…
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222180399 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: [INFO] Tests run: 5, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 3.093 s -- in org.openmetadata.it.tests.alerts.WebhookSecretsMigrationIT

<details><summary>End of the job log</summary>

```
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:18:04:13 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 744 "-" "okhttp/5.5.0" 17
INFO  [2026-11-23 18:04:13,585] org.openmetadata.service.jdbi3.EntityRepository: Created eventsubscription:91681bdb-8a67-47fe-92ab-976e41cdc3a3:slow_8__a03ef69926764f1baf071482550713dd__SlowEndpointIT__tenSlowAlertsStil…
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:18:04:13 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 744 "-" "okhttp/5.5.0" 20
INFO  [2026-11-23 18:04:13,611] org.openmetadata.service.jdbi3.EntityRepository: Created eventsubscription:820127a2-d354-47c6-bd3b-db10685d31cb:slow_9__a03ef69926764f1baf071482550713dd__SlowEndpointIT__tenSlowAlertsStil…
[0:0:0:0:0:0:0:1] - - [23/Nov/2026:18:04:13 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 743 "-" "okhttp/5.5.0" 28
INFO  [2026-11-23 18:04:16,384] org.openmetadata.service.alerting.channel.feed.ActivityStreamPublisher: Closing Activity Stream Publisher
INFO  [2026-11-23 18:05:00,011] org.openmetadata.service.apps.scheduler.OmAppJobListener: App RdfInferenceApp has ID: 318ab868-c6c4-48cb-b8aa-b2c91dd0ac46
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222180471 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
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

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222180821 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
- Dark since: 2026-11-23 16:56 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222201155

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222201155
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/45222201155?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222201155
```

</details>

### Workflows and Data Access Request E2E tests (`.github/workflows/data-access-request-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45222180675 — dark (conclusion: `failure`), 2026-11-23 16:56 UTC
- Dark since: 2026-11-23 16:56 UTC (first run of the current streak)
- Job / step: `data-access-request-e2e` → `Trigger Collate Playwright run & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222350132

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: data-access-request-e2e
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222350132
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/45222350132?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45222350132
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
