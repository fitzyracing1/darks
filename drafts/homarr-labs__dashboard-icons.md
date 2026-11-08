<!-- dark-draft: homarr-labs/dashboard-icons -->
<!-- draft-state: ready -->
# Upstream issue draft: homarr-labs/dashboard-icons

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/homarr-labs/dashboard-icons/issues/new
- **Stars:** 9034 · **Generated:** 2026-11-08T18:35:29.654Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Main CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Main CI** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/homarr-labs/dashboard-icons/actions/runs/42485637016 — dark (conclusion: `failure`), 2026-11-08 13:34 UTC
- Dark since: 2026-11-04 21:07 UTC (first run of the current streak)
- Job / step: `build-images / build (amd64, ubuntu-24.04)` → `Build native image`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: failed to push ghcr.io/homarr-labs/dashboard-icons:build-amd64: can't push tagged ref ghcr.io/homarr-labs/dashboard-icons:build-amd64 by digest

<details><summary>End of the job log</summary>

```
#42 CANCELED
------
 > exporting to image:
------
ERROR: failed to build: failed to solve: failed to push ghcr.io/homarr-labs/dashboard-icons:build-amd64: can't push tagged ref ghcr.io/homarr-labs/dashboard-icons:build-amd64 by digest
builder-1e8810ce-31ae-4330-a636-bf96e9dde1f9/builder-1e8810ce-31ae-4330-a636-bf96e9dde1f90/6sqllkpfaszpsk7vjtpa38lr2
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: failed to push ghcr.io/homarr-labs/dashboard-icons:build-amd64: can't push tagged ref ghcr.io/homarr-labs/dashboard-icons:build-amd64 by digest
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dashboard-icons!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
