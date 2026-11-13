<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 459079 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CD - Docker - GHCR Images" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CD - Docker - GHCR Images** workflow (`.github/workflows/docker-ghcr.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/43378863865 — dark (conclusion: `failure`), 2026-11-13 06:27 UTC
- Dark since: 2026-11-13 06:22 UTC (first run of the current streak)
- Job / step: `Build and Push Images` → `Build and push images`
- Likely cause: buildx bake failed with: failed to solve: process "/bin/sh -c pnpm install --frozen-lockfile" did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
  65 | >>> RUN pnpm install --frozen-lockfile
  66 |
  67 |     # Source files for builds
--------------------
ERROR: failed to solve: process "/bin/sh -c pnpm install --frozen-lockfile" did not complete successfully: exit code: 1
builder-5d404708-c2ba-43c8-bffc-e5d920fdea4b/builder-5d404708-c2ba-43c8-bffc-e5d920fdea4b0/06gp3qysc6cbzle7ibneiomif
Build summary supported!
##[error]buildx bake failed with: failed to solve: process "/bin/sh -c pnpm install --frozen-lockfile" did not complete successfully: exit code: 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
