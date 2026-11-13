<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again (2026-11-13); nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 30241 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/43380620262 — dark (conclusion: `cancelled`), 2026-11-13 06:42 UTC
- Dark since: 2026-11-13 06:12 UTC (first run of the current streak)
- Job / step: `changes`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
