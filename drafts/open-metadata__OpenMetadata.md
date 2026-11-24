<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15859 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45391841994 — dark (conclusion: `failure`), 2026-11-24 12:16 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27589/27867)
Updating files: 100% (27867/27867)
Updating files: 100% (27867/27867), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
8cf6180e5c1b8e3ef1c2964957d6504014bbc1e4
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45388143188 — dark (conclusion: `failure`), 2026-11-24 11:52 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45376228419 — dark (conclusion: `failure`), 2026-11-24 10:35 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: [INFO] org.openmetadata.it.tests.alerts.WebhookSecretsIT.aValueNoKeyDecryptsIsRefusedStopsNoEditAndDeliversOnceEntered(TestNamespace) -- Time elapsed: 2.950 s

<details><summary>End of the job log</summary>

```
[INFO] org.openmetadata.it.tests.alerts.WebhookSecretsIT.aStatusSentWithTheAlertIsNeverStored(TestNamespace) -- Time elapsed: 0.103 s
[INFO] org.openmetadata.it.tests.alerts.WebhookSecretsIT.credentialsStoredBeforeTheUpgradeKeepSending(TestNamespace) -- Time elapsed: 2.965 s
[INFO] org.openmetadata.it.tests.alerts.WebhookSecretsIT.aListOfAlertsReadsEachDestinationsStatus(TestNamespace) -- Time elapsed: 2.916 s
[INFO] org.openmetadata.it.tests.alerts.WebhookSecretsIT.secretsEnteredForADestinationStillDeliver(TestNamespace) -- Time elapsed: 2.965 s
[INFO] Running org.openmetadata.it.tests.alerts.AlertTickOutcomesIT
INFO  [2026-11-24 11:44:51,873] org.openmetadata.service.jdbi3.EntityRepository: Created eventsubscription:cf58ae30-3e71-441d-8f6f-7288e148bcc5:self_driven__84717cd853a14fc1b27d5768220e0ef3__AlertTickOutcomesIT__selfDri…
[0:0:0:0:0:0:0:1] - - [24/Nov/2026:11:44:51 +0000] "POST /api/v1/events/subscriptions HTTP/1.1" 201 545 "-" "okhttp/5.5.0" 13
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45376228237 — dark (conclusion: `failure`), 2026-11-24 10:35 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45376228275 — dark (conclusion: `failure`), 2026-11-24 10:35 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45383757618 — dark (conclusion: `failure`), 2026-11-24 11:23 UTC
- Dark since: 2026-11-23 16:56 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45383772526

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 138409298882)
  * Integration Tests (MySQL + Elasticsearch)
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 45383772526
Triggered via workflow_dispatch about 57 minutes ago
JOBS
X maven-collate-om-ci in 56m25s (ID 138409298882)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45383772526
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45389894227 — dark (conclusion: `failure`), 2026-11-24 12:03 UTC
- Dark since: 2026-11-24 10:17 UTC (first run of the current streak)
- Job / step: `warm-fixture / plan-playwright` → `Verify browser helper behavior`
- Likely cause: Error: Cannot find module '/workspace/openmetadata-ui/src/main/resources/ui/node_modules/playwright-core/lib/generated/storageScriptSource.js'

<details><summary>End of the job log</summary>

```
  53 | } = require('../../scripts/patch-playwright-indexeddb.cjs');
> 54 | const installedStorageSource: string = require(join(
     |                                        ^
  55 |   dirname(require.resolve('playwright-core/package.json')),
  56 |   'lib/generated/storageScriptSource.js'
  57 | )).source;
    at Object.<anonymous> (/workspace/openmetadata-ui/src/main/resources/ui/playwright/browser-tests/indexedDbStorage.spec.ts:54:40)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
