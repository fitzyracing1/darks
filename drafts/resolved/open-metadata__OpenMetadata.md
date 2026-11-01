<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15641 · **Generated:** 2026-11-01T06:42:01.505Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("py-cli-e2e-tests", "security-scan", "SonarCloud UI Nightly", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### py-cli-e2e-tests (`.github/workflows/py-cli-e2e-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41255162613 — dark (conclusion: `failure`), 2026-11-01 00:05 UTC
- Dark since: 2026-11-01 00:05 UTC (first run of the current streak)
- Job / step: `py-cli-e2e-tests (athena)` → `Setup Openmetadata Test Environment`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
Ign:11 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages
Ign:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en
Ign:13 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages
Ign:14 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en
Ign:15 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en
Get:4 https://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:5 https://archive.ubuntu.com/ubuntu noble-security InRelease [126 kB]
##[error]The operation was canceled.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41256944870 — dark (conclusion: `failure`), 2026-11-01 00:29 UTC
- Dark since: 2026-11-01 00:29 UTC (first run of the current streak)
- Job / step: `security-scan` → `Fail on high/critical Snyk findings`
- Likely cause: Snyk found 16 high/critical vulnerabilities (see Job Summary)

<details><summary>End of the job log</summary>

```
#26 writing image sha256:98111b4cda849cbe28d7d8d3b13ffec15fa85ebbb63296c2cccabffecc7ebda7 done
#26 naming to docker.io/library/openmetadata-server:scan done
#26 DONE 0.8s
snyk container test openmetadata-server:scan --file=docker/development/Dockerfile --severity-threshold=high --json > security-report/server-docker-scan.json | true;
snyk test --all-projects --severity-threshold=high --json > security-report/server-dep-scan.json | true;
snyk code test --all-projects --severity-threshold=high --json > security-report/server-code-scan.json | true;
snyk test --file=openmetadata-ui/src/main/resources/ui/yarn.lock --severity-threshold=high --json > security-report/ui-dep-scan.json | true;
##[error]Snyk found 16 high/critical vulnerabilities (see Job Summary)
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41267660340 — dark (conclusion: `failure`), 2026-11-01 03:04 UTC
- Dark since: 2026-11-01 03:04 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41270228759 — dark (conclusion: `failure`), 2026-11-01 03:42 UTC
- Dark since: 2026-11-01 03:42 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
