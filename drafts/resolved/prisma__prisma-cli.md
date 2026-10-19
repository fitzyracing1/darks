<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: resolved -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** resolved — lit again (2026-10-19); nothing to file
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 23 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish to npm" workflow failing on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish to npm** workflow (`.github/workflows/publish.yml`) on `main` has been failing since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/38887483144 — dark (conclusion: `failure`), 2026-10-16 10:28 UTC
- Dark since: 2026-10-16 10:28 UTC (first run of the current streak)
- Job / step: `Publish packages to npm` → `Check the dev version`
- Likely cause: AssertionError: expected [ 'dev url', 'dev stop', …(1) ] to deeply equal [] (packages/cli/tests/mount-coverage.test.ts:182)

<details><summary>End of the job log</summary>

```
ℹ dist/sender.js                       6.56 kB │ gzip:   2.85 kB
ℹ dist/payload-B88Qvzxk-CrtTXSOe.js    1.60 kB │ gzip:   0.76 kB
ℹ 3 files, total: 563.06 kB
✔ Build complete in 156ms
@prisma/cli:check:grammar
cache bypass, force executing 4ec27949f5a1fe7e
$ vitest run tests/mount-coverage.test.ts
##[error]command (/home/runner/work/prisma-cli/prisma-cli/packages/cli) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run check:grammar exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
