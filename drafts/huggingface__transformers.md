<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168948 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "PR CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43441332337 — dark (conclusion: `startup_failure`), 2026-11-13 14:17 UTC
- Dark since: 2026-11-13 14:17 UTC (first run of the current streak)
- Likely cause: run startup_failure

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43473813447 — dark (conclusion: `failure`), 2026-11-13 17:32 UTC
- Dark since: 2026-11-13 17:32 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
