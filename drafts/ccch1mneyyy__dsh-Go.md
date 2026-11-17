<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 24789 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/43979402495 — dark (conclusion: `cancelled`), 2026-11-16 23:27 UTC
- Dark since: 2026-11-16 13:50 UTC (first run of the current streak)
- Job / step: `engine` → `Capture the native pet renderer in the simulator`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
2026-11-17 00:34:22.898 xcodebuild[37409:357553] [MT] IDETestOperationsObserverDebug: 118.334 sec, +118.334 sec -- end
Test session results, code coverage, and logs:
	/Users/runner/work/_temp/swift-contracts.xcresult
** TEST SUCCEEDED **
Testing started
##[notice]IOSPhoneSelfRunnerTests 16, IOSPhonePairingStoreTests 13, IOSPhoneCoreDeviceTests 37, IOSPhoneScreenTests 38, IOSPhoneDDIBackgroundTests 4, IOSPhoneOperationTests 36, IOSPhoneApprovalTests 8, IOSPhoneClipboard…
clang: warning: using sysroot for 'MacOSX' but targeting 'iPhone' [-Wincompatible-sysroot]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
