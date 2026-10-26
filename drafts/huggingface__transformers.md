<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168200 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: "Self-hosted runner (nightly-past-ci-caller)" workflow failing to start on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Self-hosted runner (nightly-past-ci-caller)** workflow (`.github/workflows/self-nightly-past-ci-caller.yml`) on `main` has been failing to start since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40346570369 — dark (conclusion: `startup_failure`), 2026-10-26 15:09 UTC
- Dark since: 2026-10-26 15:09 UTC (first run of the current streak)
- Likely cause: run startup_failure

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
