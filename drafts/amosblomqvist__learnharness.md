<!-- dark-draft: amosblomqvist/learnharness -->
<!-- draft-state: ready -->
# Upstream issue draft: amosblomqvist/learnharness

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/amosblomqvist/learnharness/issues/new
- **Stars:** 12561 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/amosblomqvist/learnharness/actions/runs/45738715099 — dark (conclusion: `failure`), 2026-11-26 01:53 UTC
- Dark since: 2026-11-26 01:51 UTC (first run of the current streak)
- Job / step: `Standalone (mac-arm64)` → `Run node scripts/smoke-plan-labels.mjs`
- Likely cause: FAILED: 1 checks. Evidence: /var/folders/9d/l02zfgrs7c16twd3wbpdmhkc0000gn/T/lh-plan-labels-GbffS6

<details><summary>End of the job log</summary>

```
ok   hydration errors on cold load: 0
ok   font switch rewraps titles with an unchanged sentinel
ok   unchanged sentinel · Settings font switch: 66 label lines
ok   font load restores monospace line breaks without another setting change
ok   font load restores the measured monospace boxes
ok   unchanged sentinel · delayed font load: 66 label lines
FAILED: 1 checks. Evidence: /var/folders/9d/l02zfgrs7c16twd3wbpdmhkc0000gn/T/lh-plan-labels-GbffS6
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining learnharness!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
