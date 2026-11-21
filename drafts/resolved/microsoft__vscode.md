<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: resolved -->
# Upstream issue draft: microsoft/vscode

- **Status:** resolved — lit again (2026-11-21); nothing to file
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 195694 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL" workflow getting cancelled on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL** workflow (`.github/workflows/codeql.yml`) on `main` has been getting cancelled since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/44844531469 — dark (conclusion: `cancelled`), 2026-11-21 00:32 UTC
- Dark since: 2026-11-20 12:08 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
