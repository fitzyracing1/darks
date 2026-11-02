<!-- dark-draft: vercel/next.js -->
<!-- draft-state: resolved -->
# Upstream issue draft: vercel/next.js

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143459 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("build-and-test", "Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/41251925383 — dark (conclusion: `failure`), 2026-10-31 23:17 UTC
- Dark since: 2026-10-31 23:17 UTC (first run of the current streak)
- Job / step: `test rspack dev (5/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
end of test/e2e/app-dir/logging/fetch-logging.test.ts output
--test output start-- {"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":0,"numPassedTests":48,"numPendingTestSuites":0,"numPendingTests":4,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuit…
test/e2e/prerender.test.ts finished on retry 0/2 in 78.525s
test/e2e/next-image-legacy/default/default.test.ts finished on retry 0/2 in 113.587s
Successfully updated test timings in KV store
Some tests failed
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/41275379838 — dark (conclusion: `failure`), 2026-11-01 05:02 UTC
- Dark since: 2026-11-01 05:02 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and production) (4/12) / build` → `Run # e2e and production tests with `node run-tests.js``
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/41275581850 — dark (conclusion: `failure`), 2026-11-01 05:05 UTC
- Dark since: 2026-11-01 05:05 UTC (first run of the current streak)
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
