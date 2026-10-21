<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 194183 · **Generated:** 2026-10-21T18:50:03.780Z
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

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39549636098 — dark (conclusion: `cancelled`), 2026-10-21 05:27 UTC
- Dark since: 2026-10-21 05:27 UTC (first run of the current streak)
- Job / step: `Scan CSS cascade-order dependencies` → `Run CSS order scan`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
  probe #17: reverse[0, 121) -> same (6899ms)
  probe #18: reverse[0, 122) -> DIFFERS (6787ms)
  → #121 modelPicker.css loses to #121 modelPicker.css
[185/1643] Localizing sessions/compareModels/sessionComparisonModelPicker/NoAttemptsSelected/Dark (337 documents)...
  hashes: baseline=98c6a4b5e1e40be2297bfa1c6f09c1ab59b9c3cf2de168c8cb107c1b3d7f5c18 reversed=8999f82ed387578b4c746de53e0be3a7b89eb99ed45be639660a682b9652077c
  probe #1: reverse[168, 337) -> same (6597ms)
  probe #2: reverse[84, 337) -> DIFFERS (6703ms)
##[error]The operation was canceled.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39652163379 — dark (conclusion: `cancelled`), 2026-10-21 18:22 UTC
- Dark since: 2026-10-21 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
