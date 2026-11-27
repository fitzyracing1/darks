<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15891 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Storybook nightly build", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45950960900 — dark (conclusion: `failure`), 2026-11-27 06:18 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27867/28148)
Updating files: 100% (28148/28148)
Updating files: 100% (28148/28148), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
2115aeebedfad497f3d216357335b96be80b4d68
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45952600536 — dark (conclusion: `failure`), 2026-11-27 06:33 UTC
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

### Storybook nightly build (`.github/workflows/storybook-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45926280003 — dark (conclusion: `cancelled`), 2026-11-27 02:05 UTC
- Dark since: 2026-11-27 02:05 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
#14 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
#14 ...
#18 [linux/amd64 server 3/4] COPY --from=builder /app/storybook-static /app/storybook-static
#18 DONE 0.1s
#19 [linux/amd64 server 4/4] RUN printf '{"rewrites":[{"source":"/iframe","destination":"/iframe.html"}]}'     > /app/serve.json
#19 DONE 0.1s
#14 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
##[error]The operation was canceled.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45929335653 — dark (conclusion: `failure`), 2026-11-27 02:36 UTC
- Dark since: 2026-11-27 02:36 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-24, chromium-24.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 timed out

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Flow-AlertSeveralSources-A-bb6bb-e-its-trigger-never-reaches-chromium-retry1/trace.zip
    Usage:
        npx playwright show-trace playwright/output/test-results/Flow-AlertSeveralSources-A-bb6bb-e-its-trigger-never-reaches-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [chromium] › playwright/e2e/Flow/AlertSeveralSources.spec.ts:121:3 › Alerts with several sources › Observability alert warns about a source its trigger never reaches
  177 passed (15.6m)
##[error]1 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45931925488 — dark (conclusion: `failure`), 2026-11-27 03:03 UTC
- Dark since: 2026-11-27 03:03 UTC (first run of the current streak)
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
