<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 220539 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- stats (`.github/workflows/stats.yml`): [issue #57878](https://github.com/anomalyco/opencode/issues/57878) "cli: stats totals differ from stored session usage", [issue #53657](https://github.com/anomalyco/opencode/issues/53657) "FEATURE: Show a back shortcut hint on the TUI stats screen", [issue #51534](https://github.com/anomalyco/opencode/issues/51534) "fix(core): empty `--project` makes session stats silently report zero", [issue #47481](https://github.com/anomalyco/opencode/issues/47481) "cli: stats --days N omits cost/token/cache breakdown that v1 showed by default"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "publish" workflow getting cancelled on dev since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **publish** workflow (`.github/workflows/publish.yml`) on `dev` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40000630545 — dark (conclusion: `cancelled`), 2026-10-23 18:06 UTC
- Dark since: 2026-10-23 18:06 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
