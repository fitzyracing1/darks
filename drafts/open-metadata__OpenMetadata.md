<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15519 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("py-cli-e2e-tests", "SonarCloud Ingestion Nightly", "SonarCloud UI Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### py-cli-e2e-tests (`.github/workflows/py-cli-e2e-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39345621667 — dark (conclusion: `failure`), 2026-10-20 00:06 UTC
- Dark since: 2026-10-20 00:06 UTC (first run of the current streak)
- Job / step: `py-cli-e2e-tests (python-integration)` → `Run Python Integration Tests`
- Likely cause: nox > Session integration-tests failed.

<details><summary>End of the job log</summary>

```
- generated xml file: /home/runner/work/***/***/ingestion/junit/test-results-integration.xml -
=========================== short test summary info ============================
ERROR tests/integration/sources/database/cockroach/test_metadata.py
!!!!!!!!!!!!!!!!!!!! Interrupted: 1 error during collection !!!!!!!!!!!!!!!!!!!!
=================== 1 skipped, 2 warnings, 1 error in 15.00s ===================
nox > Command pytest -c pyproject.toml --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-integration.xml tests/integration/ --durations=5 failed with exit code 2
nox > Session integration-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud Ingestion Nightly (`.github/workflows/py-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39357649048 — dark (conclusion: `failure`), 2026-10-20 02:12 UTC
- Dark since: 2026-10-20 02:12 UTC (first run of the current streak)
- Job / step: `Integration Tests (shard-2)` → `Run Integration Tests`
- Likely cause: nox > Session integration-tests failed.

<details><summary>End of the job log</summary>

```
- generated xml file: /home/runner/work/OpenMetadata/OpenMetadata/ingestion/junit/test-results-integration.xml -
=========================== short test summary info ============================
ERROR tests/integration/sources/database/cockroach/test_metadata.py
!!!!!!!!!!!!!!!!!!!! Interrupted: 1 error during collection !!!!!!!!!!!!!!!!!!!!
======================== 2 warnings, 1 error in 19.30s =========================
nox > Command pytest -c pyproject.toml --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-integration.xml tests/integration/ --durations=5 --ignore=tests/integration/ometa --ignore=tes…
nox > Session integration-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39362465758 — dark (conclusion: `failure`), 2026-10-20 03:05 UTC
- Dark since: 2026-10-20 03:05 UTC (first run of the current streak)
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
