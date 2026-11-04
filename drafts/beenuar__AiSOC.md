<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7178 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "README · onramp gates" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **README · onramp gates** workflow (`.github/workflows/readme-gates.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41852733055 — dark (conclusion: `failure`), 2026-11-04 14:57 UTC
- Dark since: 2026-11-04 14:51 UTC (first run of the current streak)
- Job / step: `aisoc-sandbox · offline smoke (macos-latest)`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
