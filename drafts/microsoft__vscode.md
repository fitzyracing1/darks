<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 193940 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CSS Cascade-Order Scan" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CSS Cascade-Order Scan** workflow (`.github/workflows/css-order-scan.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39204701850 — dark (conclusion: `cancelled`), 2026-10-19 05:28 UTC
- Dark since: 2026-10-17 05:24 UTC (first run of the current streak)
- Job / step: `Scan CSS cascade-order dependencies` → `Run CSS order scan`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
  probe #2: reverse[254, 339) -> same (6198ms)
  probe #3: reverse[211, 339) -> same (6089ms)
  probe #4: reverse[190, 339) -> DIFFERS (6136ms)
  probe #5: reverse[200, 339) -> same (6144ms)
  probe #6: reverse[195, 339) -> same (6151ms)
  probe #7: reverse[192, 339) -> same (6117ms)
  probe #8: reverse[191, 339) -> DIFFERS (6163ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
