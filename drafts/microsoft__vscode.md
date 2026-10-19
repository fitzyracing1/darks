<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 193840 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CSS Cascade-Order Scan", "CodeQL")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CSS Cascade-Order Scan (`.github/workflows/css-order-scan.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39100430588 — dark (conclusion: `cancelled`), 2026-10-18 05:24 UTC
- Dark since: 2026-10-17 05:24 UTC (first run of the current streak)
- Job / step: `Scan CSS cascade-order dependencies` → `Run CSS order scan`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
  probe #1: reverse[169, 338) -> same (6181ms)
  probe #2: reverse[84, 338) -> same (6183ms)
  probe #3: reverse[42, 338) -> DIFFERS (6146ms)
  probe #4: reverse[63, 338) -> DIFFERS (6117ms)
  probe #5: reverse[73, 338) -> DIFFERS (6154ms)
  probe #6: reverse[78, 338) -> DIFFERS (6296ms)
  probe #7: reverse[81, 338) -> same (6183ms)
##[error]The operation was canceled.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39180553168 — dark (conclusion: `cancelled`), 2026-10-19 00:23 UTC
- Dark since: 2026-10-19 00:23 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
