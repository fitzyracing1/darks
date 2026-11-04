<!-- dark-draft: wonderwhy-er/DesktopCommanderMCP -->
<!-- draft-state: ready -->
# Upstream issue draft: wonderwhy-er/DesktopCommanderMCP

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/wonderwhy-er/DesktopCommanderMCP/issues/new
- **Stars:** 10215 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Codespell" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Codespell** workflow (`.github/workflows/codespell.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/wonderwhy-er/DesktopCommanderMCP/actions/runs/41835933440 — dark (conclusion: `failure`), 2026-11-04 13:12 UTC
- Dark since: 2026-11-03 22:05 UTC (first run of the current streak)
- Job / step: `Check for spelling errors` → `Codespell`
- Likely cause: inly ==> only (src/remote-device/mqtt/mqtt-transport.ts:301)

<details><summary>End of the job log</summary>

```
Exclude file ''
Ignore words file ''
Ignore words list ''
Ignore URI words list ''
Skipping './.git'
Resulting CLI options  --skip ./.git
2
##[error]./src/remote-device/mqtt/mqtt-transport.ts:264: otehr ==> other
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DesktopCommanderMCP!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
