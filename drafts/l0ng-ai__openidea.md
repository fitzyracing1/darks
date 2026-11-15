<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9026 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43708897044 — dark (conclusion: `cancelled`), 2026-11-15 11:26 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `E2E` → `Run pnpm e2e`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
  ✓  409 [chromium] › e2e/settingsListLayout.spec.ts:4:3 › target settings keep long names and details inside their selection row (7.9s)
  ✓  410 [chromium] › e2e/settingsPaneLayout.spec.ts:10:3 › build.deployment keeps its details usable beside the list (6.9s)
  ✓  411 [chromium] › e2e/settingsPaneLayout.spec.ts:10:3 › editor.inspections keeps its details usable beside the list (7.6s)
  ✓  412 [chromium] › e2e/settingsPaneLayout.spec.ts:10:3 › languages.servers keeps its details usable beside the list (8.1s)
  ✓  413 [chromium] › e2e/settingsPaneLayout.spec.ts:10:3 › plugins keeps its details usable beside the list (7.8s)
  ✓  414 [chromium] › e2e/settingsPaneLayout.spec.ts:10:3 › agents.list keeps its details usable beside the list (7.1s)
context canceled
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
