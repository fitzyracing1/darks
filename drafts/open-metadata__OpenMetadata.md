<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15703 · **Generated:** 2026-11-07T06:41:09.321Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 12 workflows dark on main ("Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", +9 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42338500324 — dark (conclusion: `failure`), 2026-11-07 04:26 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202457 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (MySQL + Elasticsearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202774 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (PostgreSQL + OpenSearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202660 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42346158254 — dark (conclusion: `failure`), 2026-11-07 06:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (26998/27270)
Updating files: 100% (27270/27270)
Updating files: 100% (27270/27270), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
3ae2bf85de11e668c26a291a1dabd344c8979d72
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42345297449 — dark (conclusion: `failure`), 2026-11-07 06:03 UTC
- Dark since: 2026-11-07 00:05 UTC (first run of the current streak)
- Job / step: `populate` → `Report warm failures`
- Likely cause: cache warmers failed: browser — downstream runs stay on the previous main-scoped copies (or the resilient miss path) until the next populate

<details><summary>End of the job log</summary>

```
Received 432 of 432 (100.0%), 0.0 MBs/sec
Cache Size: ~0 MB (432 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/3f1333af-f0c5-4025-962a-9b0af3d849fa/cache.tzst -P -C /home/runner/work/OpenMetadata/OpenMetadata --use-compress-program unzstd
Cache restored successfully
Cache restored from key: Linux-playwright-f610a2dca1c82dfa7e9b43390b7cb2f6aac1388645c9d65f21d0f27da55923d4
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42317831122 — dark (conclusion: `failure`), 2026-11-07 00:22 UTC
- Dark since: 2026-11-07 00:22 UTC (first run of the current streak)
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

### Storybook nightly build (`.github/workflows/storybook-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42327421750 — dark (conclusion: `cancelled`), 2026-11-07 02:05 UTC
- Dark since: 2026-11-07 02:05 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
#15 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
#15 ...
#18 [linux/amd64 server 3/4] COPY --from=builder /app/storybook-static /app/storybook-static
#18 DONE 0.1s
#19 [linux/amd64 server 4/4] RUN printf '{"rewrites":[{"source":"/iframe","destination":"/iframe.html"}]}'     > /app/serve.json
#19 DONE 0.0s
#15 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
##[error]The operation was canceled.
```

</details>

### SonarCloud Ingestion Nightly (`.github/workflows/py-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42327632401 — dark (conclusion: `cancelled`), 2026-11-07 02:07 UTC
- Dark since: 2026-11-07 02:07 UTC (first run of the current streak)
- Job / step: `Unit Tests` → `Run Unit Tests`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42330036194 — dark (conclusion: `failure`), 2026-11-07 02:35 UTC
- Dark since: 2026-11-07 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-01, chromium-01.json, 3, chromium, false)` → `Install Playwright Browsers`
- Likely cause: Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64

<details><summary>End of the job log</summary>

```
##[start-action display=Run actions/cache/save@55cc8345863c7cc4c66a329aec7e433d2d1c52a9;id=apt-deps-cache.save-cache]
##[end-action id=apt-deps-cache.save-cache;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Run rm -rf ~/cache-apt-pkgs;id=apt-deps-cache.clean-cache]
##[end-action id=apt-deps-cache.clean-cache;outcome=success;conclusion=success;duration_ms=31]
apt deps cache hit — skipping install-deps (files already restored; apt would re-download from the mirror)
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### SSO Login Nightly (`.github/workflows/playwright-sso-login-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42332021546 — dark (conclusion: `failure`), 2026-11-07 03:01 UTC
- Dark since: 2026-11-07 03:01 UTC (first run of the current streak)
- Job / step: `sso-login (basic, BASIC, --grep @basic)` → `Install Playwright Browsers`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42332181623 — dark (conclusion: `failure`), 2026-11-07 03:03 UTC
- Dark since: 2026-11-07 03:03 UTC (first run of the current streak)
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
