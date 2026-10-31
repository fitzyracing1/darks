<!-- dark-draft: colinhacks/zod -->
<!-- draft-state: ready -->
# Upstream issue draft: colinhacks/zod

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/colinhacks/zod/issues/new
- **Stars:** 44235 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Check zod and @zod/mini lockstep on npm", "test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Check zod and @zod/mini lockstep on npm (`.github/workflows/lockstep.yml`)

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

### test (`.github/workflows/test.yml`)

- Latest run on `main`: https://github.com/colinhacks/zod/actions/runs/41124590189 — dark (conclusion: `failure`), 2026-10-30 20:36 UTC
- Dark since: 2026-10-30 20:36 UTC (first run of the current streak)
- Job / step: `Lint on Node latest` → `Run nub run check:comments`
- Likely cause: Error: ERR_NUB_NODE_PROVISION_FAILED: failed to provision Node latest (pinned via .nvmrc): downloading Node 27.0.0: downloading https://nodejs.org/dist/v27.0.0/node-v27.0.0-linux-x64.tar.xz: HTTP status client error (40…

<details><summary>End of the job log</summary>

```
Checked 457 files in 1111ms. No fixes applied.
$ nub exec --node biome lint .
Checked 457 files in 622ms. No fixes applied.
$ nub scripts/check-comments.ts
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
