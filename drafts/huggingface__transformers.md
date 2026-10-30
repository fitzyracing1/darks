<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168358 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main (".github/workflows/build_documentation.yml", "Self-hosted runner (nightly-past-ci-caller)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### .github/workflows/build_documentation.yml (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41072438986 — dark (conclusion: `failure`), 2026-10-30 14:32 UTC
- Dark since: 2026-10-30 01:10 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41071051826 — dark (conclusion: `startup_failure`), 2026-10-30 14:20 UTC
- Dark since: 2026-10-30 14:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
