<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 27485 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44464025480 — dark (conclusion: `failure`), 2026-11-19 05:16 UTC
- Dark since: 2026-11-18 02:01 UTC (first run of the current streak)
- Job / step: `engine` → `Exercise Swift phone and companion voice contracts`
- Likely cause: IOSAudioSessionCoordinatorTests.testBackgroundLeaseDestructionStillStopsItsOutputBeforePreemption() Failed IOSAudioSessionCoordinatorTests.swift:837: Asynchronous wait failed: Exceeded timeout of 2 seconds, with unfulfilled expectations: "q

<details><summary>End of the job log</summary>

```
Test session results, code coverage, and logs:
	/Users/runner/work/_temp/swift-contracts.xcresult
Failing tests:
	IOSAudioSessionCoordinatorTests.testBackgroundLeaseDestructionStillStopsItsOutputBeforePreemption()
** TEST FAILED **
Testing started
##[notice]IOSPhoneSelfRunnerTests 16, IOSPhonePairingStoreTests 13, IOSPhoneCoreDeviceTests 37, IOSPhoneScreenTests 38, IOSPhoneDDIBackgroundTests 4, IOSPhoneOperationTests 36, IOSPhoneApprovalTests 8, IOSPhoneClipboard…
##[error]IOSAudioSessionCoordinatorTests.testBackgroundLeaseDestructionStillStopsItsOutputBeforePreemption() Failed IOSAudioSessionCoordinatorTests.swift:837: Asynchronous wait failed: Exceeded timeout of 2 seconds, wit…
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44464025516 — dark (conclusion: `failure`), 2026-11-19 05:16 UTC
- Dark since: 2026-11-19 02:49 UTC (first run of the current streak)
- Job / step: `Flutter 2` → `Test every third file`
- Likely cause: 5025 tests passed, 3 failed, 151 skipped.

<details><summary>End of the job log</summary>

```
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: text errors are one short line
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace the one whose conversation moved last
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace a workspace with no known conversation counts from its creation
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspaces_state_test.dart: recentWorkspace nothing to tell them apart: the first on the list; none: null
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: drawer switcher glyph on the 20 line, highlight on the 10 line, 36 tall, one centre line
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: breadcrumbs capsules: equal insets, one height, one centre line; first on the page gutter
✅ /home/runner/work/dsh-Go/dsh-Go/app/test/workspace/workspace_geometry_test.dart: switcher sheet cards 20 in on both sides; rows share the glyph column
##[error]5025 tests passed, 3 failed, 151 skipped.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
