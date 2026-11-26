<!-- dark-draft: openfilm/openfilm -->
<!-- draft-state: ready -->
# Upstream issue draft: openfilm/openfilm

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openfilm/openfilm/issues/new
- **Stars:** 9500 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow getting cancelled on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/openfilm/openfilm/actions/runs/45866184847 — dark (conclusion: `cancelled`), 2026-11-26 17:15 UTC
- Dark since: 2026-11-23 11:02 UTC (first run of the current streak)
- Job / step: `macos / shard 2/3`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining openfilm!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
