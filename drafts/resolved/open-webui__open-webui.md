<!-- dark-draft: open-webui/open-webui -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-webui/open-webui

- **Status:** resolved — lit again 2026-10-14: https://github.com/open-webui/open-webui/actions/runs/38595211615; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/open-webui/open-webui/issues/new
- **Stars:** 155627 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release to PyPI" workflow failing on the default branch since 2026-10-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release to PyPI** workflow (`.github/workflows/release-pypi.yml`) on the default branch has been failing since 2026-10-10. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/open-webui/open-webui/actions/runs/38086579658 — dark (conclusion: `failure`), 2026-10-10 21:10 UTC
- Dark since: 2026-10-10 21:10 UTC (first run of the current streak)
- Likely cause: step "Publish package distributions to PyPI" in job "release" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining open-webui!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
