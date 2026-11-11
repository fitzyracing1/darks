<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: resolved -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 18681 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/42782302996 — dark (conclusion: `failure`), 2026-11-10 08:23 UTC
- Dark since: 2026-11-10 06:54 UTC (first run of the current streak)
- Job / step: `Flutter 0` → `Test every third file`
- Likely cause: 3464 tests passed, 4 failed, 268 skipped.

<details><summary>End of the job log</summary>

```
[webview] resource: code=-2 type=unknown mainFrame=true
[webview] resource: code=-2 type=unknown mainFrame=true
[webview] resource: code=-2 type=unknown mainFrame=true
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/web/web_view_page_test.dart: chart preview keeps its header and chart out of a side cutout
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: drawer switcher glyph on the 20 line, highlight on the 10 line, 36 tall, one centre line
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: breadcrumbs capsules: equal insets, one height, one centre line; first on the page gutter
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: switcher sheet cards 20 in on both sides; rows share the glyph column
##[error]3464 tests passed, 4 failed, 268 skipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
