<!-- dark-draft: colinhacks/zod -->
<!-- draft-state: ready -->
# Upstream issue draft: colinhacks/zod

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/colinhacks/zod/issues/new
- **Stars:** 44232 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Check zod and @zod/mini lockstep on npm" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Check zod and @zod/mini lockstep on npm** workflow (`.github/workflows/lockstep.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/colinhacks/zod/actions/runs/41014531054 — dark (conclusion: `failure`), 2026-10-30 06:30 UTC
- Dark since: 2026-10-30 06:30 UTC (first run of the current streak)
- Job / step: `check` → `Run nub run check:lockstep`
- Likely cause: Error: ERR_NUB_NODE_PROVISION_FAILED: failed to provision Node latest (pinned via .nvmrc): downloading Node 27.0.0: downloading https://nodejs.org/dist/v27.0.0/node-v27.0.0-linux-x64.tar.xz: HTTP status client error (40…

<details><summary>End of the job log</summary>

```
+ zod3@3.24.3
+ zod4@4.0.0-beta.20250420T053007
WARN ignored build scripts for 1 package(s): @biomejs/biome@1.9.4. Run `nub approve-builds` to review and enable them, or set `strictDepBuilds=true` to fail installs that have unreviewed builds. code=WARN_NUB_IGNORED_BU…
$ nub scripts/check-lockstep.ts
Using Node.js 27.0.0 (resolved from .nvmrc)
Error: ERR_NUB_NODE_PROVISION_FAILED: failed to provision Node latest (pinned via .nvmrc): downloading Node 27.0.0: downloading https://nodejs.org/dist/v27.0.0/node-v27.0.0-linux-x64.tar.xz: HTTP status client error (40…
  Check your network / proxy, or pre-install Node latest so it's on PATH.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining zod!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
