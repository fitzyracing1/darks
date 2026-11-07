<!-- dark-draft: homarr-labs/dashboard-icons -->
<!-- draft-state: ready -->
# Upstream issue draft: homarr-labs/dashboard-icons

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/homarr-labs/dashboard-icons/issues/new
- **Stars:** 9021 · **Generated:** 2026-11-07T06:41:09.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Main CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Main CI** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/homarr-labs/dashboard-icons/actions/runs/41913031421 — dark (conclusion: `failure`), 2026-11-04 21:07 UTC
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
builder-d7e8a0d0-7cee-4d66-89d4-7adb32989a14/builder-d7e8a0d0-7cee-4d66-89d4-7adb32989a140/hk0533avge72vrqj7q90zwhma
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: failed to push ghcr.io/homarr-labs/dashboard-icons:build-amd64: can't push tagged ref ghcr.io/homarr-labs/dashboard-icons:build-amd64 by digest
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dashboard-icons!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
