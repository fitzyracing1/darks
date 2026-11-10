<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: resolved -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** resolved — lit again (2026-11-10); nothing to file
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 17573 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/42611034126 — dark (conclusion: `failure`), 2026-11-09 11:41 UTC
- Dark since: 2026-11-09 11:41 UTC (first run of the current streak)
- Job / step: `Flutter 2` → `Test every third file`
- Likely cause: 3563 tests passed, 1 failed, 15 skipped.

<details><summary>End of the job log</summary>

```
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: directory_browser (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page_empty (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page_empty (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspace_actions (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspace_actions (light)
##[error]3563 tests passed, 1 failed, 15 skipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
