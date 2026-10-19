<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15510 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Storybook nightly build", "Postgresql PR Playwright E2E Tests", "SonarCloud UI Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Storybook nightly build (`.github/workflows/storybook-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39088991032 — dark (conclusion: `cancelled`), 2026-10-18 02:08 UTC
- Dark since: 2026-10-18 02:08 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
#14 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
#14 ...
#18 [linux/amd64 server 3/4] COPY --from=builder /app/storybook-static /app/storybook-static
#18 DONE 0.0s
#19 [linux/amd64 server 4/4] RUN printf '{"rewrites":[{"source":"/iframe","destination":"/iframe.html"}]}'     > /app/serve.json
#19 DONE 0.0s
#14 [linux/arm64 builder 4/6] RUN yarn install --frozen-lockfile --network-timeout 120000
##[error]The operation was canceled.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39091104477 — dark (conclusion: `failure`), 2026-10-18 02:43 UTC
- Dark since: 2026-10-18 02:43 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-05, chromium-05.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Flow-NotificationAlerts-Multiple-Filters-Alert-chromium-retry1/trace.zip
    Usage:
        npx playwright show-trace playwright/output/test-results/Flow-NotificationAlerts-Multiple-Filters-Alert-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [chromium] › playwright/e2e/Flow/NotificationAlerts.spec.ts:247:1 › Multiple Filters Alert ─────
  181 passed (20.6m)
##[error]1 failed
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39092378731 — dark (conclusion: `failure`), 2026-10-18 03:05 UTC
- Dark since: 2026-10-18 03:05 UTC (first run of the current streak)
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
