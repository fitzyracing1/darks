<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 32199 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45725659952 — dark (conclusion: `failure`), 2026-11-26 00:01 UTC
- Dark since: 2026-11-26 00:01 UTC (first run of the current streak)
- Job / step: `engine` → `Exercise Swift phone and companion voice contracts`
- Likely cause: searchd EXC_CRASH SIGABRT  Abort trap: 6 | libsystem_kernel.dylib __pthread_kill+8 | libsystem_pthread.dylib pthread_kill+264 | libsystem_c.dylib abort+116 | libsystem_c.dylib abort_report_np+80 | SpotlightIndex __si_indexingWatchdogInit_bl

<details><summary>End of the job log</summary>

```
Test session results, code coverage, and logs:
	/Users/runner/work/_temp/swift-contracts.xcresult
Failing tests:
	IOSAudioSessionCoordinatorTests.testMainThreadCleanupIsOneShotAcrossQueuedAndImmediateCalls()
** TEST FAILED **
Testing started
##[notice]IOSPhoneSelfRunnerTests 16, IOSPhonePairingStoreTests 13, IOSPhoneCoreDeviceTests 37, IOSPhoneScreenTests 38, IOSPhoneDDIBackgroundTests 4, IOSPhoneOperationTests 36, IOSPhoneApprovalTests 8, IOSPhoneClipboard…
##[error]IOSAudioSessionCoordinatorTests.testMainThreadCleanupIsOneShotAcrossQueuedAndImmediateCalls() Failed IOSAudioSessionCoordinatorTests.swift:852: Asynchronous wait failed: Exceeded timeout of 2 seconds, with unfu…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
