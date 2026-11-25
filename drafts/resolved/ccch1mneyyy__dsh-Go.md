<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: resolved -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 31297 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("iOS compile", "CI", "OHOS compile")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45458905251 — dark (conclusion: `cancelled`), 2026-11-24 18:22 UTC
- Dark since: 2026-11-24 08:03 UTC (first run of the current streak)
- Job / step: `engine`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45450263022 — dark (conclusion: `failure`), 2026-11-24 17:35 UTC
- Dark since: 2026-11-24 12:19 UTC (first run of the current streak)
- Job / step: `Flutter 0` → `Test every third file`
- Likely cause: 5242 tests passed, 2 failed, 178 skipped.

<details><summary>End of the job log</summary>

```
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: directory_browser (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page_empty (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspaces_page_empty (light)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspace_actions (dark)
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_golden_test.dart: workspace_actions (light)
##[error]5242 tests passed, 2 failed, 178 skipped.
```

</details>

### OHOS compile (`.github/workflows/ohos-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45458905114 — dark (conclusion: `cancelled`), 2026-11-24 18:22 UTC
- Dark since: 2026-11-24 18:22 UTC (first run of the current streak)
- Job / step: `compile` → `Restore the pub cache`
- Likely cause: Canceling since a higher priority waiting request for ohos-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Received 2197815296 of 2401170728 (91.5%), 55.1 MBs/sec
Received 2260729856 of 2401170728 (94.2%), 55.2 MBs/sec
Received 2315255808 of 2401170728 (96.4%), 55.1 MBs/sec
Received 2382364672 of 2401170728 (99.2%), 55.4 MBs/sec
Received 2401170728 of 2401170728 (100.0%), 55.4 MBs/sec
Cache Size: ~2290 MB (2401170728 B)
[command]/opt/homebrew/bin/gtar -xf /Users/runner/work/_temp/1bef5358-701a-42c1-93a2-bb28f86d2274/cache.tzst -P -C /Users/runner/work/dsh-Go/dsh-Go --delay-directory-restore --use-compress-program unzstd
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
