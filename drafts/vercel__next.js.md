<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143215 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("Rspack Next.js production integration tests", "Rspack Next.js development integration tests", "build-and-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40064806114 — dark (conclusion: `failure`), 2026-10-24 05:04 UTC
- Dark since: 2026-10-24 05:04 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and production) (1/12) / build` → `Run # e2e and production tests with `node run-tests.js``
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40065109215 — dark (conclusion: `failure`), 2026-10-24 05:08 UTC
- Dark since: 2026-10-24 05:08 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and development) (7/16) / build` → `Run # e2e and development tests with `node run-tests.js``
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

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40110696943 — dark (conclusion: `cancelled`), 2026-10-24 16:15 UTC
- Dark since: 2026-10-24 16:15 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
