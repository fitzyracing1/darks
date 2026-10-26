<!-- dark-draft: vercel/next.js -->
<!-- draft-state: resolved -->
# Upstream issue draft: vercel/next.js

- **Status:** resolved — lit again (2026-10-26); nothing to file
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143296 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on canary ("Update Font Data", "Rspack Next.js production integration tests", "Rspack Next.js development integration tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### Update Font Data (`.github/workflows/update_fonts_data.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40248844648 — dark (conclusion: `failure`), 2026-10-26 00:20 UTC
- Dark since: 2026-10-25 00:20 UTC (first run of the current streak)
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40272435096 — dark (conclusion: `failure`), 2026-10-26 05:05 UTC
- Dark since: 2026-10-25 05:04 UTC (first run of the current streak)
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

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40272874464 — dark (conclusion: `failure`), 2026-10-26 05:11 UTC
- Dark since: 2026-10-25 05:08 UTC (first run of the current streak)
- Job / step: `Rspack integration tests / Next.js integration test (E2E and development) (8/16) / build` → `Run # e2e and development tests with `node run-tests.js``
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
