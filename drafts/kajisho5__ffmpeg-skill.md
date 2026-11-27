<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 11828 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- pages (`.github/workflows/pages.yml`): [issue #690](https://github.com/kajisho5/ffmpeg-skill/issues/690) "Use-case pages, the first five minutes, and a Japanese README"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow getting cancelled on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/46020994164 — dark (conclusion: `cancelled`), 2026-11-27 15:00 UTC
- Dark since: 2026-11-27 15:00 UTC (first run of the current streak)
- Job / step: `test (macos-latest, py3.10, 1/3)`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
