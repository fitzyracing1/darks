<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 212334 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46088075734 — dark (conclusion: `skipped`), 2026-11-28 00:28 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/46048318244 — dark (conclusion: `failure`), 2026-11-27 18:17 UTC
- Dark since: 2026-11-27 17:22 UTC (first run of the current streak)
- Job / step: `Unit tests (26) / Frontend (2/4)` → `Test`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/modules/roles/frontend) /usr/local/bin/pnpm run test --shard=2/4 exited (1)

<details><summary>End of the job log</summary>

```
    at /home/runner/_work/n8n/n8n/node_modules/.pnpm/jsdom@23.0.1_bufferutil@4.0.9_supports-color@8.1.1_utf-8-validate@5.0.10/node_modules/jsdom/lib/jsdom/browser/Window.js:898:7
    at openSafeUrl (/home/runner/_work/n8n/n8n/packages/frontend/@n8n/frontend-utils/src/htmlUtils.ts:73:10)
    at openResource (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui/src/features/ndv/parameters/components/ResourceLocator/ResourceLocator.vue:718:2)
    at handleAddResourceClick (/home/runner/_work/n8n/n8n/packages/frontend/editor-ui/src/features/ndv/parameters/components/ResourceLocator/ResourceLocator.vue:495:3)
    at callWithErrorHandling (/home/runner/_work/n8n/n8n/node_modules/.pnpm/@vue+runtime-core@3.5.26/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
    at callWithAsyncErrorHandling (/home/runner/_work/n8n/n8n/node_modules/.pnpm/@vue+runtime-core@3.5.26/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:207:17)
    at emit (/home/runner/_work/n8n/n8n/node_modules/.pnpm/@vue+runtime-core@3.5.26/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:4358:5)
##[error]command (/home/runner/_work/n8n/n8n/packages/modules/roles/frontend) /usr/local/bin/pnpm run test --shard=2/4 exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
