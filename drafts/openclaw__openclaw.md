<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393398 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docs", "CodeQL", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/40110626490 — dark (conclusion: `skipped`), 2026-10-24 16:14 UTC
- Dark since: 2026-10-15 07:33 UTC (first run of the current streak)
- Likely cause: run skipped

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/40110626520 — dark (conclusion: `cancelled`), 2026-10-24 16:14 UTC
- Dark since: 2026-10-20 14:11 UTC (first run of the current streak)
- Job / step: `Security High (process-exec-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-10-24 16:16:38] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/scripts/dependency-ownership-surface-report.mts
[2026-10-24 16:16:38] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/scripts/dependency-ownership-surface-report.mts (65 ms)
[2026-10-24 16:16:38] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/scripts/dependency-vulnerability-gate.mts
[2026-10-24 16:16:38] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/scripts/dependency-vulnerability-gate.mts (64 ms)
[2026-10-24 16:16:38] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/scripts/detect-private-keys.mts
[2026-10-24 16:16:38] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/scripts/detect-private-keys.mts (16 ms)
[2026-10-24 16:16:38] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/scripts/diagnostic-cpu-native-parents.mts
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39395564616 — dark (conclusion: `cancelled`), 2026-10-20 08:44 UTC
- Dark since: 2026-10-20 14:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
