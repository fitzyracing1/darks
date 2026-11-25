<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143688 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("Next Maintainer Auto Close", "Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### Next Maintainer Auto Close (`.github/workflows/next-maintainer-auto-close.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/45558484358 — dark (conclusion: `failure`), 2026-11-25 06:09 UTC
- Dark since: 2026-11-24 22:05 UTC (first run of the current streak)
- Job / step: `close-one-verified-issue` → `Pull and deliver every released close`
- Likely cause: Unhandled error: Error: Queue returned 404: Not found

<details><summary>End of the job log</summary>

```
/home/runner/work/_temp/git-credentials-ed657a44-f32d-4211-a780-1e0ea85a4cb1.config
/home/runner/work/_temp/git-credentials-ed657a44-f32d-4211-a780-1e0ea85a4cb1.config
/github/runner_temp/git-credentials-ed657a44-f32d-4211-a780-1e0ea85a4cb1.config
/github/runner_temp/git-credentials-ed657a44-f32d-4211-a780-1e0ea85a4cb1.config
Removing credentials config '/home/runner/work/_temp/git-credentials-ed657a44-f32d-4211-a780-1e0ea85a4cb1.config'
Error: Queue returned 404: Not found
    at queueRequest (/home/runner/work/next.js/next.js/.github/scripts/next-maintainer-auto-close.js:24:13)
##[error]Unhandled error: Error: Queue returned 404: Not found
```

</details>

### Rspack Next.js production integration tests (`.github/workflows/rspack-nextjs-build-integration-tests.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/45550836645 — dark (conclusion: `failure`), 2026-11-25 05:02 UTC
- Dark since: 2026-11-25 05:02 UTC (first run of the current streak)
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/45551284416 — dark (conclusion: `failure`), 2026-11-25 05:06 UTC
- Dark since: 2026-11-25 05:06 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and development) (14/16) / build` → `Run # e2e and development tests with `node run-tests.js``
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
