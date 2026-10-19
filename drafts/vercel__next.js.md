<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143072 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on canary ("build-and-test", "Update Font Data", "Rspack Next.js production integration tests", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39078616789 — dark (conclusion: `failure`), 2026-10-17 23:20 UTC
- Dark since: 2026-10-17 23:20 UTC (first run of the current streak)
- Job / step: `test rspack production (3/7, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-build-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
end of test/e2e/app-dir/app-static/app-static.test.ts output
--test output start-- {"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":0,"numPassedTests":0,"numPendingTestSuites":0,"numPendingTests":111,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSui…
Test result cache: skipped 199 cached, re-ran 1
Some tests failed
Successfully updated test timings in KV store
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

### Update Font Data (`.github/workflows/update_fonts_data.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39082402261 — dark (conclusion: `failure`), 2026-10-18 00:20 UTC
- Dark since: 2026-10-18 00:20 UTC (first run of the current streak)
- Job / step: `create-pull-request` → `Create Pull Request`
- Likely cause: 'husky - pre-commit script failed (code 1)\n'

<details><summary>End of the job log</summary>

```
    '\n' +
    '  ⚠ lint-staged prevented an empty git commit.\n' +
    '  Use the --allow-empty option to continue, or check your task configuration\n' +
    '\n' +
    '[ELIFECYCLE] Command failed with exit code 1.\n' +
    'husky - pre-commit script failed (code 1)\n'
}
##[error]Process completed with exit code 1.
```

</details>

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39099260267 — dark (conclusion: `failure`), 2026-10-18 05:04 UTC
- Dark since: 2026-10-18 05:04 UTC (first run of the current streak)
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39099529923 — dark (conclusion: `failure`), 2026-10-18 05:08 UTC
- Dark since: 2026-10-18 05:08 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (Integration) (5/16) / build` → `Run # legacy integration tests with `node run-tests.js``
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
