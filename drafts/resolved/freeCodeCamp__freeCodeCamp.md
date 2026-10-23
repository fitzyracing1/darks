<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: resolved -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** resolved — lit again (2026-10-23); nothing to file
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 457704 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI - Node.js" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI - Node.js** workflow (`.github/workflows/node.js-tests.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/39801798257 — dark (conclusion: `failure`), 2026-10-22 15:07 UTC
- Dark since: 2026-10-22 15:07 UTC (first run of the current streak)
- Job / step: `Lint (24)`
- Likely cause: The hosted runner lost communication with the server. Anything in your workflow that terminates the runner process, starves it for CPU/Memory, or blocks its network access can cause this error.

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
