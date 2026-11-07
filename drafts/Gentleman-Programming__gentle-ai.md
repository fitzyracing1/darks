<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 8548 · **Generated:** 2026-11-07T12:37:41.487Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Windows Full Suite" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Windows Full Suite** workflow (`.github/workflows/windows-full-suite.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/42367599712 — dark (conclusion: `failure`), 2026-11-07 11:18 UTC
- Dark since: 2026-11-06 12:01 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (cli-r-other)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
WARNING: missing dependencies:
Missing 0 required dependency(ies): none
Install hints:
Gentle AI sends anonymous usage metrics (version, OS, agents, counters) and may send anonymous runtime usage from supported Pi/OpenCode/Codex integrations (public model, effort, agent class, available token usage, timin…
FAIL
FAIL	github.com/gentleman-programming/gentle-ai/v4/internal/cli	339.734s
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
