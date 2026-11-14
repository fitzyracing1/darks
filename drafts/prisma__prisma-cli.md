<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 25 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish to npm" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish to npm** workflow (`.github/workflows/publish.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/43480794352 — dark (conclusion: `failure`), 2026-11-13 18:15 UTC
- Dark since: 2026-11-13 18:15 UTC (first run of the current streak)
- Job / step: `Publish packages to npm` → `Verify the dev version resolves`
- Likely cause: @prisma/cli@8.0.0-rc.33-dev.187 never became resolvable. It may still be propagating, but this run cannot say it shipped.

<details><summary>End of the job log</summary>

```
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
@prisma/cli@8.0.0-rc.33-dev.187 not resolvable yet...
##[error]@prisma/cli@8.0.0-rc.33-dev.187 never became resolvable. It may still be propagating, but this run cannot say it shipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
