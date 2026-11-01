<!-- dark-draft: nextlevelbuilder/ui-ux-pro-max-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: nextlevelbuilder/ui-ux-pro-max-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/issues/new
- **Stars:** 143737 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "Refresh upstream catalogs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/41283307259 — dark (conclusion: `failure`), 2026-11-01 07:04 UTC
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

- Latest run on `main`: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/40265025286 — dark (conclusion: `failure`), 2026-10-26 03:37 UTC
- Dark since: 2026-10-05 03:42 UTC (first run of the current streak)
- Job / step: `Build review-only catalog candidates` → `Report refresh validation failure`
- Likely cause: A catalog candidate failed validation; inspect the uploaded review artifact.

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is 536b5a0a2fa8e0fb479c513cbab59102ec0ee72e3cecf0d87fedab3a2290c1de
Finalizing artifact upload
Artifact catalog-refresh-review-40265025286.zip successfully finalized. Artifact ID 12626271141
Artifact catalog-refresh-review-40265025286 has been successfully uploaded! Final size is 144148 bytes. Artifact ID is 12626271141
Artifact download URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/actions/runs/40265025286/artifacts/12626271141
A catalog candidate failed validation; inspect the uploaded review artifact.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ui-ux-pro-max-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
