<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 26723 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/43482257636 — dark (conclusion: `cancelled`), 2026-11-13 18:23 UTC
- Dark since: 2026-11-13 18:23 UTC (first run of the current streak)
- Job / step: `changes`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
