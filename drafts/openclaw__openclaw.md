<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 393123 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "Docs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/38900162092 — dark (conclusion: `cancelled`), 2026-10-16 12:23 UTC
- Dark since: 2026-10-17 13:46 UTC (first run of the current streak)
- Job / step: `Security High (process-exec-boundary)` → `Analyze`
- Likely cause: Canceling since a higher priority waiting request for codeql-CodeQL-ref-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-10-16 12:25:42] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-launch.runtime.ts
[2026-10-16 12:25:43] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-launch.runtime.ts (167 ms)
[2026-10-16 12:25:43] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-merge-patch.ts
[2026-10-16 12:25:43] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-merge-patch.ts (6 ms)
[2026-10-16 12:25:43] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-model-selection.ts
[2026-10-16 12:25:43] [build-stdout] Done extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-model-selection.ts (3 ms)
[2026-10-16 12:25:43] [build-stdout] Extracting /home/runner/work/openclaw/openclaw/extensions/qa-lab/src/suite-planning.ts
##[error]The operation was canceled.
```

</details>

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/39493784323 — dark (conclusion: `skipped`), 2026-10-20 20:39 UTC
- Dark since: 2026-10-20 20:39 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
