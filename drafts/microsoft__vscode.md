<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 194063 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "CSS Cascade-Order Scan")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39422644931 — dark (conclusion: `cancelled`), 2026-10-20 12:29 UTC
- Dark since: 2026-10-19 18:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### CSS Cascade-Order Scan (`.github/workflows/css-order-scan.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39374987385 — dark (conclusion: `cancelled`), 2026-10-20 05:27 UTC
- Dark since: 2026-10-20 05:27 UTC (first run of the current streak)
- Job / step: `Scan CSS cascade-order dependencies` → `Run CSS order scan`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
  probe #1: reverse[169, 339) -> same (10719ms)
  probe #2: reverse[84, 339) -> same (10372ms)
  probe #3: reverse[42, 339) -> DIFFERS (10424ms)
  probe #4: reverse[63, 339) -> DIFFERS (10290ms)
  probe #5: reverse[73, 339) -> DIFFERS (10737ms)
  probe #6: reverse[78, 339) -> DIFFERS (10439ms)
  probe #7: reverse[81, 339) -> same (10422ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
