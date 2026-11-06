<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143359 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on canary ("Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/42166048569 — dark (conclusion: `failure`), 2026-11-06 05:02 UTC
- Dark since: 2026-11-06 05:02 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (Integration) (1/12) / build` → `Run # legacy integration tests with `node run-tests.js``
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/42166396910 — dark (conclusion: `failure`), 2026-11-06 05:06 UTC
- Dark since: 2026-11-06 05:06 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (Integration) (9/16) / build` → `Run # legacy integration tests with `node run-tests.js``
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
