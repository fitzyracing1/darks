<!-- dark-draft: DayuanJiang/next-ai-draw-io -->
<!-- draft-state: ready -->
# Upstream issue draft: DayuanJiang/next-ai-draw-io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DayuanJiang/next-ai-draw-io/issues/new
- **Stars:** 36509 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker Build and Push" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker Build and Push** workflow (`.github/workflows/docker-build.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DayuanJiang/next-ai-draw-io/actions/runs/41141479309 — dark (conclusion: `failure`), 2026-10-30 22:57 UTC
- Dark since: 2026-10-30 22:57 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push Docker image`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
  45 | >>> RUN npm run build
  46 |
  47 |     # Stage 3: Production runtime
--------------------
ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1
builder-f9ac2cc4-ce11-4d48-8a56-d8580404861a/builder-f9ac2cc4-ce11-4d48-8a56-d8580404861a0/5q27vso41p5q1qqt4f47liwch
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next-ai-draw-io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
