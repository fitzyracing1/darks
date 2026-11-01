<!-- dark-draft: f/prompts.chat -->
<!-- draft-state: resolved -->
# Upstream issue draft: f/prompts.chat

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/f/prompts.chat/issues/new
- **Stars:** 175457 · **Generated:** 2026-11-01T06:42:01.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Publish Docker Image" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Publish Docker Image** workflow (`.github/workflows/docker-publish.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/f/prompts.chat/actions/runs/41259339426 — dark (conclusion: `failure`), 2026-11-01 01:02 UTC
- Dark since: 2026-11-01 01:02 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Build and push Docker image`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
  44 | >>> RUN npm run build
  45 |
  46 |     # ---- Stage 4: Runner ----
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
builder-517150f6-086a-47e2-901a-2f36a6c98f69/builder-517150f6-086a-47e2-901a-2f36a6c98f690/wx1ddvqbapb002rla6tyzkrgt
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prompts.chat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
