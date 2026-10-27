<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 8043 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Windows Full Suite" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Windows Full Suite** workflow (`.github/workflows/windows-full-suite.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40445214918 — dark (conclusion: `failure`), 2026-10-27 03:37 UTC
- Dark since: 2026-10-25 12:37 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (rest)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/update/upgrade	5.455s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/verify	0.025s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/versions	0.022s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts	[no test files]
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts/crosslane	2.087s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts/gen-sdd-agent-digests	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
