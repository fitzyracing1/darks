<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 8130 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Windows Full Suite" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Windows Full Suite** workflow (`.github/workflows/windows-full-suite.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40879365629 — dark (conclusion: `failure`), 2026-10-29 13:09 UTC
- Dark since: 2026-10-29 05:10 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (cli-p-q-s-z)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
To install only into the current workspace, rerun with --scope=workspace.
WARNING: missing dependencies:
Missing 0 required dependency(ies): none
Install hints:
FAIL
FAIL	github.com/gentleman-programming/gentle-ai/v4/internal/cli	862.932s
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
