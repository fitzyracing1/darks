<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143102 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("build-and-test", "Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39514658506 — dark (conclusion: `failure`), 2026-10-20 23:23 UTC
- Dark since: 2026-10-20 17:41 UTC (first run of the current streak)
- Job / step: `test rspack dev (3/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
end of test/development/app-dir/runtime-error-events/runtime-error-events.test.ts output
--test output start-- {"numFailedTestSuites":1,"numFailedTests":12,"numPassedTestSuites":0,"numPassedTests":9,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":1,"numTodoTests":0,"numTotalTestSuit…
Test result cache: skipped 328 cached, re-ran 1
Some tests failed
Successfully updated test timings in KV store
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39547512494 — dark (conclusion: `failure`), 2026-10-21 05:04 UTC
- Dark since: 2026-10-21 05:04 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (Integration) (8/12) / build` → `Run # legacy integration tests with `node run-tests.js``
- Likely cause: Unable to download artifact(s): Artifact not found for name: next-swc-aarch64-unknown-linux-gnu

<details><summary>End of the job log</summary>

```
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
Waiting for background step(s) to complete: install-rust
Finished waiting for background step(s).
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
Downloading single artifact
##[error]Unable to download artifact(s): Artifact not found for name: next-swc-aarch64-unknown-linux-gnu
```

</details>

### Rspack Next.js development integration tests (`.github/workflows/rspack-nextjs-dev-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39547970350 — dark (conclusion: `failure`), 2026-10-21 05:09 UTC
- Dark since: 2026-10-21 05:09 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (Integration) (6/16) / build` → `Run # legacy integration tests with `node run-tests.js``
- Likely cause: Unable to download artifact(s): Artifact not found for name: next-swc-aarch64-unknown-linux-gnu

<details><summary>End of the job log</summary>

```
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
Waiting for background step(s) to complete: install-rust
Finished waiting for background step(s).
/etc/profile.d/apps-bin-path.sh: line 10: XDG_DATA_DIRS: unbound variable
Downloading single artifact
##[error]Unable to download artifact(s): Artifact not found for name: next-swc-aarch64-unknown-linux-gnu
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
