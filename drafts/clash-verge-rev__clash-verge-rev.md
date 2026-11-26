<!-- dark-draft: clash-verge-rev/clash-verge-rev -->
<!-- draft-state: ready -->
# Upstream issue draft: clash-verge-rev/clash-verge-rev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/clash-verge-rev/clash-verge-rev/issues/new
- **Stars:** 160855 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Auto Build" workflow failing on dev since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Auto Build** workflow (`.github/workflows/autobuild.yml`) on `dev` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/clash-verge-rev/clash-verge-rev/actions/runs/45797346883 — dark (conclusion: `failure`), 2026-11-26 10:01 UTC
- Dark since: 2026-11-25 22:01 UTC (first run of the current streak)
- Job / step: `Autobuild ARM Linux (ubuntu-22.04, aarch64-unknown-linux-gnu, arm64)` → `Setup for linux`
- Likely cause: E: Unable to correct problems, you have held broken packages.

<details><summary>End of the job log</summary>

```
 libgtk-3-dev:arm64 : Depends: libgdk-pixbuf-2.0-dev:arm64 (>= 2.40.0) but it is not installable or
                               libgdk-pixbuf2.0-dev:arm64 (>= 2.40.0) but it is not installable
 librsvg2-dev:arm64 : Depends: libgdk-pixbuf-2.0-dev:arm64 (>= 2.23.5-2) but it is not installable or
                               libgdk-pixbuf2.0-dev:arm64 (>= 2.23.5-2) but it is not installable
                      Depends: librsvg2-2:arm64 (= 2.52.5+dfsg-3ubuntu0.2) but it is not installable
                      Depends: librsvg2-common:arm64 (= 2.52.5+dfsg-3ubuntu0.2) but it is not installable
E: Unable to correct problems, you have held broken packages.
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining clash-verge-rev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
