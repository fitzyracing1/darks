<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 194202 · **Generated:** 2026-10-22T12:57:28.437Z
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

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39778146417 — dark (conclusion: `cancelled`), 2026-10-22 12:24 UTC
- Dark since: 2026-10-21 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### CSS Cascade-Order Scan (`.github/workflows/css-order-scan.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39728093754 — dark (conclusion: `cancelled`), 2026-10-22 05:27 UTC
- Dark since: 2026-10-22 05:27 UTC (first run of the current streak)
- Job / step: `Scan CSS cascade-order dependencies` → `Run CSS order scan`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
  probe #11: reverse[0, 87) -> same (8806ms)
  probe #12: reverse[0, 130) -> DIFFERS (8752ms)
  probe #13: reverse[0, 108) -> DIFFERS (8734ms)
  probe #14: reverse[0, 97) -> DIFFERS (8877ms)
  probe #15: reverse[0, 92) -> DIFFERS (8682ms)
  probe #16: reverse[0, 89) -> same (8684ms)
  probe #17: reverse[0, 90) -> same (8695ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
