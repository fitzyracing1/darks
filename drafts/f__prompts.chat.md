<!-- dark-draft: f/prompts.chat -->
<!-- draft-state: ready -->
# Upstream issue draft: f/prompts.chat

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/f/prompts.chat/issues/new
- **Stars:** 175130 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Publish Docker Image" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Publish Docker Image** workflow (`.github/workflows/docker-publish.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/f/prompts.chat/actions/runs/40864432736 — dark (conclusion: `failure`), 2026-10-29 11:19 UTC
- Dark since: 2026-10-29 11:19 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push Docker image`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
  44 | >>> RUN npm run build
  45 |
  46 |     # ---- Stage 4: Runner ----
--------------------
ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1
builder-3d442e83-3e79-488c-a13a-ea6c8b5435d4/builder-3d442e83-3e79-488c-a13a-ea6c8b5435d40/dj2cbqnyc87bkre9l1rymn2il
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/dev/.buildkit_qemu_emulator /bin/sh -c npm run build" did not complete successfully: exit code: 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prompts.chat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
