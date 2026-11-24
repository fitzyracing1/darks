<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15859 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45456983102 — dark (conclusion: `failure`), 2026-11-24 18:12 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27594/27872)
Updating files: 100% (27872/27872)
Updating files: 100% (27872/27872), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
5d8ec8ae558773db1b1db7f63cf7ee20f630a461
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45457869257 — dark (conclusion: `failure`), 2026-11-24 18:17 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45446722145 — dark (conclusion: `failure`), 2026-11-24 17:16 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: INFO  [2026-11-24 18:27:14,824] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)

<details><summary>End of the job log</summary>

```
INFO  [2026-11-24 18:26:21,145] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=team entityFQN=legacy_cipher_team__c0421c3dd9a24fa09b72f69593f3b95c__Webhoo…
INFO  [2026-11-24 18:26:21,146] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=team entityFQN=legacy_team__c0421c3dd9a24fa09b72f69593f3b95c__WebhookSecret…
INFO  [2026-11-24 18:26:21,147] org.openmetadata.service.audit.AuditLogRepository: eventType=entityUpdated user=admin actorType=USER entityType=team entityFQN=null entityId=3d8bea51-2739-4154-9df5-d54d7cf2dda3 service=n…
INFO  [2026-11-24 18:26:21,147] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=team entityFQN=stopped_team__c0421c3dd9a24fa09b72f69593f3b95c__WebhookSecre…
INFO  [2026-11-24 18:26:32,748] org.openmetadata.service.alerting.channel.feed.ActivityStreamPublisher: Closing Activity Stream Publisher
INFO  [2026-11-24 18:27:14,822] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Performing startup recovery for distributed indexing jobs...
INFO  [2026-11-24 18:27:14,824] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45446722085 — dark (conclusion: `failure`), 2026-11-24 17:16 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45446722190 — dark (conclusion: `failure`), 2026-11-24 17:16 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45456127565 — dark (conclusion: `failure`), 2026-11-24 18:07 UTC
- Dark since: 2026-11-23 16:56 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45456149720

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/45456149720
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/45456149720?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/45456149720
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45457869721 — dark (conclusion: `failure`), 2026-11-24 18:17 UTC
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
