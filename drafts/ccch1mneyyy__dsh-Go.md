<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 30380 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45116277153 — dark (conclusion: `failure`), 2026-11-23 05:12 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `engine` → `Call the browser and system tools inside the app`
- Likely cause: searchd EXC_CRASH SIGABRT  Abort trap: 6 | libsystem_kernel.dylib __pthread_kill+8 | libsystem_pthread.dylib pthread_kill+264 | libsystem_c.dylib abort+116 | libsystem_c.dylib abort_report_np+80 | SpotlightIndex __si_indexingWatchdogInit_bl

<details><summary>End of the job log</summary>

```
open {"url":"https://example.com/"} 31950ms ok: 已打开： https://example.com/ 接着用 read 看页面。
WRONG read {"maxBytes":49152} 303ms error: 页面脚本出错了，页面可能已经变了。先用 read 重新看一遍。
screenshot {} 6960ms ok image 123825: 当前页面的截图：https://example.com/
##[notice]queued {} 0ms ok: perform before attach
attached {} 0ms ok: perform after attach; no replay
##[notice]file-collection {} 0ms ok: real file providers and sealed inbox
total-byte-limit {} 0ms ok: two boundary-sized files, one byte beyond total refused
##[error]browser read: expected ok
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
