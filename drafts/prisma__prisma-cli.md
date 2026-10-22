<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 25 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish to npm", "End-to-end (real API)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish to npm (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/39730761161 — dark (conclusion: `failure`), 2026-10-22 05:55 UTC
- Dark since: 2026-10-22 05:55 UTC (first run of the current streak)
- Job / step: `Publish packages to npm` → `Stamp the dev version`
- Likely cause: This error happened while installing the dependencies of @prisma/composer-cli@0.33.0-dev.1

<details><summary>End of the job log</summary>

```
/home/runner/work/prisma-cli/prisma-cli/packages/cli:
[ERR_PNPM_NO_MATCHING_VERSION] No matching version found for @prisma/composer@0.33.0-dev.1 while fetching it from https://registry.npmjs.org/
This error happened while installing the dependencies of @prisma/composer-cli@0.33.0-dev.1
The latest release of @prisma/composer is "0.33.0".
Other releases are:
  * dev: 0.32.0-dev.6
If you need the full list of all 214 published versions run "pnpm view @prisma/composer versions".
##[error]Process completed with exit code 1.
```

</details>

### End-to-end (real API) (`.github/workflows/test-e2e.yml`)

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/39730761125 — dark (conclusion: `cancelled`), 2026-10-22 05:55 UTC
- Dark since: 2026-10-22 05:55 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
