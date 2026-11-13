<!-- dark-draft: nextlevelbuilder/ui-ux-pro-max-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: nextlevelbuilder/ui-ux-pro-max-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/issues/new
- **Stars:** 148914 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Release", "Refresh upstream catalogs", "Check asset sync")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/42821127768 — dark (conclusion: `failure`), 2026-11-10 13:04 UTC
- Dark since: 2026-10-03 16:05 UTC (first run of the current streak)
- Job / step: `Semantic release` → `Run semantic-release`
- Likely cause: at default (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/@semantic-release/npm/lib/get-error.js:7:10)

<details><summary>End of the job log</summary>

```
        at async Promise.all (index 0)
        at async next (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/p-reduce/index.js:15:44)
    at file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/semantic-release/lib/plugins/pipeline.js:55:13
    at async pluginsConfigAccumulator.<computed> [as verifyConditions] (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/semantic-release/lib/plugins/index.js:87:11)
    at async run (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/semantic-release/index.js:106:3)
    at async Module.default (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/semantic-release/index.js:278:22)
    at async default (file:///home/runner/.npm/_npx/63271f8df082dd7b/node_modules/semantic-release/cli.js:55:5)
##[error]Process completed with exit code 1.
```

</details>

### Refresh upstream catalogs (`.github/workflows/refresh-catalogs.yml`)

- Latest run on `main`: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/42556212531 — dark (conclusion: `failure`), 2026-11-09 03:24 UTC
- Dark since: 2026-10-05 03:42 UTC (first run of the current streak)
- Job / step: `Build review-only catalog candidates` → `Report refresh validation failure`
- Likely cause: A catalog candidate failed validation; inspect the uploaded review artifact.

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is 918e195f00ebc8e4401f37331b4413bd3619fc91eb16eb77a068a8844f0b7868
Finalizing artifact upload
Artifact catalog-refresh-review-42556212531.zip successfully finalized. Artifact ID 13647630653
Artifact catalog-refresh-review-42556212531 has been successfully uploaded! Final size is 144146 bytes. Artifact ID is 13647630653
Artifact download URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/42556212531/artifacts/13647630653
A catalog candidate failed validation; inspect the uploaded review artifact.
##[error]Process completed with exit code 1.
```

</details>

### Check asset sync (`.github/workflows/check-asset-sync.yml`)

- Latest run on `main`: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/42404475367 — dark (conclusion: `failure`), 2026-11-07 19:05 UTC
- Dark since: 2026-11-07 19:05 UTC (first run of the current streak)
- Job / step: `cli/assets and .claude/skills/ui-ux-pro-max must match src/ui-ux-pro-max` → `Path contract - no install-specific skill paths`
- Likely cause: project- or variable-rooted skill paths (.claude/skills/<skill>, $HOME/..., ${CLAUDE_PLUGIN_ROOT}/... outside the core skill) only resolve for one install layout - use skill-relative paths (see #474); grep rc=0

<details><summary>End of the job log</summary>

```
node: v20.20.2
npm: 10.8.2
yarn: 1.22.22
> ui-ux-pro-max-cli@2.5.0 check:assets
> node scripts/sync-assets.mjs --check
Assets are in sync.
.claude/skills/ui-ux-pro-max/scripts/tests/test_ime_composition.py:25:                         ".claude/skills/ui-ux-pro-max/references/quick-reference.md"):
##[error]project- or variable-rooted skill paths (.claude/skills/<skill>, $HOME/..., ${CLAUDE_PLUGIN_ROOT}/... outside the core skill) only resolve for one install layout - use skill-relative paths (see #474); grep rc=0
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ui-ux-pro-max-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
