<!-- dark-draft: clash-verge-rev/clash-verge-rev -->
<!-- draft-state: ready -->
# Upstream issue draft: clash-verge-rev/clash-verge-rev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/clash-verge-rev/clash-verge-rev/issues/new
- **Stars:** 159643 · **Generated:** 2026-11-21T06:41:51.202Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Auto Build" workflow failing on dev since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Auto Build** workflow (`.github/workflows/autobuild.yml`) on `dev` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/clash-verge-rev/clash-verge-rev/actions/runs/44825405821 — dark (conclusion: `failure`), 2026-11-20 22:01 UTC
- Dark since: 2026-11-20 10:01 UTC (first run of the current streak)
- Job / step: `Autobuild ARM Linux (ubuntu-22.04, armv7-unknown-linux-gnueabihf, armhf)` → `Tauri Build for Linux`
- Likely cause: Error failed to build app: failed to build app

<details><summary>End of the job log</summary>

```
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ evaluation of `_` failed here
For more information about this error, try `rustc --explain E0080`.
error: could not compile `tristr` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
failed to build app: failed to build app
       Error failed to build app: failed to build app
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining clash-verge-rev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
