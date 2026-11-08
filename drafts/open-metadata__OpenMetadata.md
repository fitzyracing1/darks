<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15712 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 11 workflows dark on main ("Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", +8 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42434250822 — dark (conclusion: `failure`), 2026-11-08 01:26 UTC
- Dark since: 2026-11-03 21:06 UTC (first run of the current streak)
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

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42434250862 — dark (conclusion: `failure`), 2026-11-08 01:26 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42434250858 — dark (conclusion: `failure`), 2026-11-08 01:26 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42434250767 — dark (conclusion: `failure`), 2026-11-08 01:26 UTC
- Dark since: 2026-11-06 10:36 UTC (first run of the current streak)
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

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42454007095 — dark (conclusion: `failure`), 2026-11-08 06:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (26997/27269)
Updating files: 100% (27269/27269)
Updating files: 100% (27269/27269), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
2561f69b1f4c46a78b00c019aac8421d2b50f3bb
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42453167479 — dark (conclusion: `failure`), 2026-11-08 06:03 UTC
- Dark since: 2026-11-07 00:05 UTC (first run of the current streak)
- Job / step: `populate` → `Report warm failures`
- Likely cause: cache warmers failed: browser — downstream runs stay on the previous main-scoped copies (or the resilient miss path) until the next populate

<details><summary>End of the job log</summary>

```
Received 434 of 434 (100.0%), 0.0 MBs/sec
Cache Size: ~0 MB (434 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/0ffed3fa-4def-4a51-92f3-d7c29816ffa3/cache.tzst -P -C /home/runner/work/OpenMetadata/OpenMetadata --use-compress-program unzstd
Cache restored successfully
Cache restored from key: Linux-playwright-66168dfd1632ada5ad220ce3a6895756fffe473058832476a5baa78c015dda96
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42434250880 — dark (conclusion: `failure`), 2026-11-08 01:26 UTC
- Dark since: 2026-11-08 01:26 UTC (first run of the current streak)
- Job / step: `openmetadata-service-unit-tests` → `Run openmetadata-service unit tests`
- Likely cause: There were 1 failed tests

<details><summary>End of the job log</summary>

```
! at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:100)
! at org.junit.platform.engine.support.hierarchical.ForkJoinPoolHierarchicalTestExecutorService$ExclusiveTask.exec(ForkJoinPoolHierarchicalTestExecutorService.java:274)
! at java.base/java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:387)
! at java.base/java.util.concurrent.ForkJoinPool$WorkQueue.topLevelExec(ForkJoinPool.java:1312)
! at java.base/java.util.concurrent.ForkJoinPool.scan(ForkJoinPool.java:1843)
! at java.base/java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1808)
! at java.base/java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:188)
##[error]Exception in thread "om-credential-read-90" java.lang.StackOverflowError: injected overflow in the decrypt of bob
```

</details>

### SonarCloud Ingestion Nightly (`.github/workflows/py-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42437218649 — dark (conclusion: `failure`), 2026-11-08 02:08 UTC
- Dark since: 2026-11-08 02:08 UTC (first run of the current streak)
- Job / step: `Unit Tests` → `Run Unit Tests`
- Likely cause: The operation was canceled.

<details><summary>End of the job log</summary>

```
........................................................................ [  1%]
........................................................................ [  2%]
........................................................................ [  2%]
........................................................................ [  3%]
........................................................................ [  3%]
........................................................................ [  4%]
........................................................................ [  4%]
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42439183611 — dark (conclusion: `failure`), 2026-11-08 02:35 UTC
- Dark since: 2026-11-08 02:35 UTC (first run of the current streak)
- Job / step: `playwright / prepare-playwright-fixture` → `Install fixture-state browser`
- Likely cause: Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64

<details><summary>End of the job log</summary>

```
##[start-action display=Run actions/cache/save@55cc8345863c7cc4c66a329aec7e433d2d1c52a9;id=apt-deps-cache.save-cache]
##[end-action id=apt-deps-cache.save-cache;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Run rm -rf ~/cache-apt-pkgs;id=apt-deps-cache.clean-cache]
##[end-action id=apt-deps-cache.clean-cache;outcome=success;conclusion=success;duration_ms=34]
apt deps cache hit — skipping install-deps (files already restored; apt would re-download from the mirror)
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### SSO Login Nightly (`.github/workflows/playwright-sso-login-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42440955448 — dark (conclusion: `failure`), 2026-11-08 03:01 UTC
- Dark since: 2026-11-08 03:01 UTC (first run of the current streak)
- Job / step: `sso-login (keycloak-oidc-public, KEYCLOAK_OIDC, --grep @keycloak-oidc-public, keycloak)` → `Install Playwright Browsers`
- Likely cause: Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64

<details><summary>End of the job log</summary>

```
║     npx playwright install                                                    ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
BEWARE: your OS is not officially supported by Playwright; installing dependencies for ubuntu26.04-x64 as a fallback.
Cannot install dependencies for ubuntu26.04-x64 with Playwright 1.57.0!
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42441114938 — dark (conclusion: `failure`), 2026-11-08 03:03 UTC
- Dark since: 2026-11-08 03:03 UTC (first run of the current streak)
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
