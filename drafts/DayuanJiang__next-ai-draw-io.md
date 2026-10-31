<!-- dark-draft: DayuanJiang/next-ai-draw-io -->
<!-- draft-state: ready -->
# Upstream issue draft: DayuanJiang/next-ai-draw-io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DayuanJiang/next-ai-draw-io/issues/new
- **Stars:** 36508 · **Generated:** 2026-10-31T06:39:29.667Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build and Push", "Test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build and Push (`.github/workflows/docker-build.yml`)

- Latest run on `main`: https://github.com/DayuanJiang/next-ai-draw-io/actions/runs/41159721926 — dark (conclusion: `failure`), 2026-10-31 02:22 UTC
- Dark since: 2026-10-30 22:57 UTC (first run of the current streak)
- Job / step: `build (arm64, ubuntu-24.04-arm)` → `Build and push Docker image`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
  45 | >>> RUN npm run build
  46 |
  47 |     # Stage 3: Production runtime
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
builder-549b8f33-7a68-4587-982d-a8947580b44b/builder-549b8f33-7a68-4587-982d-a8947580b44b0/09xlftl65lc4y53fn91aafrw0
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
```

</details>

### Test (`.github/workflows/test.yml`)

- Latest run on `main`: https://github.com/DayuanJiang/next-ai-draw-io/actions/runs/41159721938 — dark (conclusion: `failure`), 2026-10-31 02:22 UTC
- Dark since: 2026-10-31 02:22 UTC (first run of the current streak)
- Job / step: `E2E Tests (2/6)` → `Build app`
- Likely cause: - Execution of <NextFontGoogleFontFileReplacer as ImportMappingReplacement>::result failed

<details><summary>End of the job log</summary>

```
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
    at <unknown> ([next]/internal/font/google/jetbrains_mono_124868b8.module.css:88:8)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
    at <unknown> ([next]/internal/font/google/jetbrains_mono_124868b8.module.css:97:8)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
    at <unknown> ([next]/internal/font/google/jetbrains_mono_124868b8.module.css:106:8)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next-ai-draw-io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
