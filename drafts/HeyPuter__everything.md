<!-- dark-draft: HeyPuter/everything -->
<!-- draft-state: ready -->
# Upstream issue draft: HeyPuter/everything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/HeyPuter/everything/issues/new
- **Stars:** 9539 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Browser tests" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Browser tests** workflow (`.github/workflows/e2e.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/HeyPuter/everything/actions/runs/45558893254 — dark (conclusion: `failure`), 2026-11-25 06:12 UTC
- Dark since: 2026-11-24 06:12 UTC (first run of the current streak)
- Job / step: `parametric` → `Run npm run test:e2e -- --shard=1/1`
- Likely cause: [desktop] › tests/e2e/assistant.spec.ts:78:1 › files go with a message: picked, pasted or dropped, and refused when the assistant cannot read them

<details><summary>End of the job log</summary>

```
    [mobile] › tests/e2e/mobile.spec.ts:356:1 › a small phone shows the equations table, Delete buttons included, without scrolling sideways
  3 flaky
    [desktop] › tests/e2e/chrome.spec.ts:240:1 › a value under a field's minimum says what is allowed in plain words
    [desktop] › tests/e2e/chrome.spec.ts:968:1 › selected rows, chosen tabs and pressed buttons stand out in high contrast mode
    [desktop] › tests/e2e/sketch.spec.ts:605:3 › sketching › a collapsed mirror axis gives feedback without adding geometry or undo history
  1 skipped
  677 passed (17.3m)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining everything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
