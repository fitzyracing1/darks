<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15889 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- security-scan (`.github/workflows/security-scan.yml`): [issue #38522](https://github.com/open-metadata/OpenMetadata/issues/38522) "security-scan fails on ubuntu-latest (Ubuntu 26.04): E: Package 'wkhtmltopdf' has no installation candidate"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Backend CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45916892850 — dark (conclusion: `failure`), 2026-11-27 00:28 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27861/28142)
Updating files: 100% (28142/28142)
Updating files: 100% (28142/28142), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
8c4010a70491e69aa0eea73937001ef062639a73
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45884124037 — dark (conclusion: `failure`), 2026-11-26 19:30 UTC
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

### Backend CI (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45884124448 — dark (conclusion: `failure`), 2026-11-26 19:30 UTC
- Dark since: 2026-11-26 19:30 UTC (first run of the current streak)
- Job / step: `it-postgres-elasticsearch-redis / Integration Test Lane (postgres-elasticsearch-redis, parallel)` → `Run Integration Tests (postgres-elasticsearch-redis)`
- Likely cause: INFO  [2026-11-26 20:40:37,770] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)

<details><summary>End of the job log</summary>

```
INFO  [2026-11-26 20:40:25,687] org.openmetadata.service.alerting.channel.feed.ActivityStreamPublisher: Closing Activity Stream Publisher
INFO  [2026-11-26 20:40:37,090] org.openmetadata.mcp.server.auth.repository.OAuthTokenRepository: Deleted expired access and refresh tokens
INFO  [2026-11-26 20:40:37,091] org.openmetadata.mcp.server.auth.repository.OAuthAuthorizationCodeRepository: Deleted expired authorization codes
INFO  [2026-11-26 20:40:37,092] org.openmetadata.mcp.server.auth.repository.McpPendingAuthRequestRepository: Deleted expired pending auth requests
INFO  [2026-11-26 20:40:37,092] org.openmetadata.mcp.server.auth.jobs.OAuthTokenCleanupJob: OAuth token cleanup completed successfully
INFO  [2026-11-26 20:40:37,768] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Performing startup recovery for distributed indexing jobs...
INFO  [2026-11-26 20:40:37,770] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)
##[error]Process completed with exit code 124.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
