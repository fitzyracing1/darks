<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 24096 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/43812446941 — dark (conclusion: `failure`), 2026-11-16 05:46 UTC
- Dark since: 2026-11-16 05:35 UTC (first run of the current streak)
- Job / step: `compile` → `Check where the engine looks for its addons`
- Likely cause: raise CalledProcessError(self.returncode, self.args, self.stdout,

<details><summary>End of the job log</summary>

```
  File "/Users/runner/work/dsh-Go/dsh-Go/runtime/tests/ohos/host-core.py", line 29, in main
    build.check_returncode()
    ~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/homebrew/Cellar/python@3.15/3.15.2/Frameworks/Python.framework/Versions/3.15/lib/python3.15/subprocess.py", line 623, in check_returncode
    raise CalledProcessError(self.returncode, self.args, self.stdout,
                             self.stderr)
subprocess.CalledProcessError: Command ['clang++', '-DDSH_IOS_HOST', '-std=c++17', '-Wall', '-Wextra', '-Werror', '-I', '/Users/runner/work/dsh-Go/dsh-Go/app/ohos/entry/src/main/cpp', '/Users/runner/work/dsh-Go/dsh-Go/a…
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/43813094056 — dark (conclusion: `failure`), 2026-11-16 05:52 UTC
- Dark since: 2026-11-16 05:46 UTC (first run of the current streak)
- Job / step: `Flutter 0` → `Test every third file`
- Likely cause: 4914 tests passed, 4 failed, 128 skipped.

<details><summary>End of the job log</summary>

```
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: text paths: phone storage, home, elsewhere
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: text breadcrumbs start at 手机存储 / 主目录 / 根目录
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: text errors are one short line
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace the one whose conversation moved last
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace a workspace with no known conversation counts from its creation
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace nothing to tell them apart: the first on the list; none: null
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: switcher sheet cards 20 in on both sides; rows share the glyph column
##[error]4914 tests passed, 4 failed, 128 skipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
