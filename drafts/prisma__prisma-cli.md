<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 26 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish to npm" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish to npm** workflow (`.github/workflows/publish.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/45965380342 — dark (conclusion: `failure`), 2026-11-27 08:24 UTC
- Dark since: 2026-11-27 08:09 UTC (first run of the current streak)
- Job / step: `Publish packages to npm` → `Check the dev version`
- Likely cause: AssertionError: expected [ 'migration ref policy delete', …(2) ] to deeply equal [] (packages/cli/tests/mount-coverage.test.ts:186)

<details><summary>End of the job log</summary>

```
ℹ Granting execute permission to dist/cli.js
ℹ dist/cli.js                        593.96 kB │ gzip: 141.35 kB
ℹ dist/sender.js                       6.56 kB │ gzip:   2.85 kB
ℹ dist/payload-B88Qvzxk-CrtTXSOe.js    1.60 kB │ gzip:   0.76 kB
ℹ 3 files, total: 602.12 kB
✔ Build complete in 114ms
@prisma/cli:check:grammar
##[error]command (/home/runner/work/prisma-cli/prisma-cli/packages/cli) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run check:grammar exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
