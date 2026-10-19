<!-- dark-draft: microsoft/TypeScript -->
<!-- draft-state: resolved -->
# Upstream issue draft: microsoft/TypeScript

- **Status:** resolved — lit again 2026-10-16: https://github.com/microsoft/TypeScript/actions/runs/38980809207; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/microsoft/TypeScript/issues/new
- **Stars:** 111498 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on the default branch since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on the default branch has been failing since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/microsoft/TypeScript/actions/runs/38851701511 — dark (conclusion: `failure`), 2026-10-16 04:38 UTC
- Dark since: 2026-10-16 04:38 UTC (first run of the current streak)
- Likely cause: The self-hosted runner lost communication with the server. Verify the machine is running and has a healthy network connection. Anything in your workflow that terminates the runner process, starves it for CPU/Memory, or blocks its network ac

If this is already known or expected, feel free to close. Thanks for maintaining TypeScript!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
