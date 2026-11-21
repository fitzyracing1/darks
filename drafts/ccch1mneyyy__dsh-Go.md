<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 29536 · **Generated:** 2026-11-21T18:36:18.976Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- iOS guest (`.github/workflows/ios-guest.yml`): [issue #651](https://github.com/ccch1mneyyy/dsh-Go/issues/651) "Bug iOS：guest 任务卡住后取消会把内核 quarantine，之后所有 Linux 命令报 "Guest resource exit was not confirmed""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("iOS compile", "CI", "OHOS compile", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44935145311 — dark (conclusion: `cancelled`), 2026-11-21 18:22 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `engine` → `Prepare the engine`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  File "/opt/homebrew/Cellar/python@3.15/3.15.2/Frameworks/Python.framework/Versions/3.15/lib/python3.15/json/decoder.py", line 376, in raw_decode
    raise JSONDecodeError("Expecting value", s, err.value) from None
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)
----------------------------------------
PASS: 22 production lifecycle messages preserve independent PiP/continued/audio/location sources
Background protection: consent, demand, arbitration, revocation and source composition passed
Python 3.15.2
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44935145275 — dark (conclusion: `cancelled`), 2026-11-21 18:22 UTC
- Dark since: 2026-11-21 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### OHOS compile (`.github/workflows/ohos-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44935145159 — dark (conclusion: `cancelled`), 2026-11-21 18:22 UTC
- Dark since: 2026-11-21 18:19 UTC (first run of the current streak)
- Job / step: `compile` → `Compile to libapp.so`
- Likely cause: Canceling since a higher priority waiting request for ohos-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
! webview_flutter 4.13.1 from git https://atomgit.com/oh-flutter/flutter_packages.git at 89476b in packages/webview_flutter/webview_flutter (overridden in ./pubspec_overrides.yaml)
  windows_file_picker 2.0.1 (2.0.2 available)
  xml 7.0.1 (7.1.0 available)
! xterm 4.0.0 from path ohos/.vendor/xterm (overridden in ./pubspec_overrides.yaml)
Got dependencies!
43 packages have newer versions incompatible with dependency constraints.
Try `dart pub outdated` for more information.
##[error]The operation was canceled.
```

</details>

### iOS UI tour (`.github/workflows/ios-ui-tour.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44934898173 — dark (conclusion: `cancelled`), 2026-11-21 18:19 UTC
- Dark since: 2026-11-21 18:19 UTC (first run of the current streak)
- Job / step: `tour` → `Build the tour for the simulator`
- Likely cause: Canceling since a higher priority waiting request for ios-ui-tour-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling ring v0.17.14
   Compiling socket2 v0.6.5
   Compiling ppv-lite86 v0.2.21
   Compiling mio v1.2.4
   Compiling bytes v1.12.1
   Compiling equivalent v1.0.3
   Compiling simd-adler32 v0.3.10
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
