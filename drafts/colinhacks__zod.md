<!-- dark-draft: colinhacks/zod -->
<!-- draft-state: ready -->
# Upstream issue draft: colinhacks/zod

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/colinhacks/zod/issues/new
- **Stars:** 44246 · **Generated:** 2026-11-02T12:41:31.933Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Check zod and @zod/mini lockstep on npm (`.github/workflows/lockstep.yml`): [issue #6715](https://github.com/colinhacks/zod/issues/6715) "CI: lockstep check failing: Node provisioning from .nvmrc 'latest' (27.0.0) 404s"
- test (`.github/workflows/test.yml`): [issue #6716](https://github.com/colinhacks/zod/issues/6716) "CI failing: .nvmrc 'latest' resolves to Node 27.0.0 which 404s on nodejs.org (ERR_NUB_NODE_PROVISION_FAILED)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Refresh the ISO 4217 currency list" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Refresh the ISO 4217 currency list** workflow (`.github/workflows/iso-4217.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/colinhacks/zod/actions/runs/41401519591 — dark (conclusion: `failure`), 2026-11-02 06:41 UTC
- Dark since: 2026-11-02 06:41 UTC (first run of the current streak)
- Job / step: `refresh` → `Run nub run update:iso4217`
- Likely cause: Error: ERR_NUB_NODE_PROVISION_FAILED: failed to provision Node latest (pinned via .nvmrc): downloading Node 27.0.0: downloading https://nodejs.org/dist/v27.0.0/node-v27.0.0-linux-x64.tar.xz: HTTP status client error (40…

<details><summary>End of the job log</summary>

```
+ zod3@3.24.3
+ zod4@4.0.0-beta.20250420T053007
WARN ignored build scripts for 1 package(s): @biomejs/biome@1.9.4. Run `nub approve-builds` to review and enable them, or set `strictDepBuilds=true` to fail installs that have unreviewed builds. code=WARN_NUB_IGNORED_BU…
$ nub scripts/update-iso-4217.ts
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
