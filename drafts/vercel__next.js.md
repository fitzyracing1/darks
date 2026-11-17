<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143660 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("build-and-test", "Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/43984741475 — dark (conclusion: `cancelled`), 2026-11-17 00:05 UTC
- Dark since: 2026-11-16 23:17 UTC (first run of the current streak)
- Job / step: `test turbopack production (1/7, 18.3.1) / build` → `Run export IS_TURBOPACK_TEST=1`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
test/production/static-404/static-404.test.ts finished on retry 0/2 in 11.139s
test/production/typescript-build-output/typescript-build-output.test.ts finished on retry 0/2 in 7.671s
test/production/with-electron/with-electron.test.ts finished on retry 0/2 in 7.656s
test/production/segment-config-precedence/segment-config-precedence.test.ts finished on retry 0/2 in 37.195s
test/production/create-next-app/examples.test.ts finished on retry 0/2 in 104.598s
test/production/create-next-app/templates/matrix-pages-2.test.ts finished on retry 0/2 in 150.633s
test/production/app-dir/use-cache-cross-deployment/use-cache-cross-deployment.test.ts finished on retry 0/2 in 192.623s
##[error]The operation was canceled.
```

</details>

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/44021295245 — dark (conclusion: `failure`), 2026-11-17 05:02 UTC
- Dark since: 2026-11-17 05:02 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and production) (11/12) / build` → `Run # e2e and production tests with `node run-tests.js``
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/44021714407 — dark (conclusion: `failure`), 2026-11-17 05:06 UTC
- Dark since: 2026-11-17 05:06 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and development) (2/16) / build` → `Run # e2e and development tests with `node run-tests.js``
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
