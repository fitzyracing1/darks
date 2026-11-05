<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 10848 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/42024269279 — dark (conclusion: `failure`), 2026-11-05 12:05 UTC
- Dark since: 2026-11-05 12:05 UTC (first run of the current streak)
- Job / step: `Flutter 2` → `Test every third file`
- Likely cause: 3349 tests passed, 1 failed, 7 skipped.

<details><summary>End of the job log</summary>

```
[webview] resource: code=-2 type=unknown mainFrame=true
[webview] resource: code=-2 type=unknown mainFrame=true
[webview] resource: code=-2 type=unknown mainFrame=true
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/web/web_view_page_test.dart: chart preview keeps its header and chart out of a side cutout
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: drawer switcher glyph on the 20 line, highlight on the 10 line, 36 tall, one centre line
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: breadcrumbs capsules: equal insets, one height, one centre line; first on the page gutter
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: switcher sheet cards 20 in on both sides; rows share the glyph column
##[error]3349 tests passed, 1 failed, 7 skipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
