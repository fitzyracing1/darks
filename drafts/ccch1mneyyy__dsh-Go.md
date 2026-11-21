<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 29334 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- iOS guest (`.github/workflows/ios-guest.yml`): [issue #651](https://github.com/ccch1mneyyy/dsh-Go/issues/651) "Bug iOS：guest 任务卡住后取消会把内核 quarantine，之后所有 Linux 命令报 "Guest resource exit was not confirmed""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44802596262 — dark (conclusion: `failure`), 2026-11-20 19:29 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `engine` → `Drive other apps with the phone runner`
- Likely cause: searchd EXC_CRASH SIGABRT  Abort trap: 6 | libsystem_kernel.dylib __pthread_kill+8 | libsystem_pthread.dylib pthread_kill+264 | libsystem_c.dylib abort+116 | libsystem_c.dylib abort_report_np+80 | SpotlightIndex __si_indexingWatchdogInit_bl

<details><summary>End of the job log</summary>

```
[11] 文字 "B"
[12] 列表项 "Kate Bell"
##[notice][phone-runner] frame changed (read 1 of 3): 257411/3162132 pixels, largest 255, box 51,224-1196,2615, size 1206x2622
[phone-runner] focused field reports no value (placeholder 6 characters)
[phone-runner] frame changed: 410595/3162132 pixels, largest 255, box 54,224-1198,2507, size 1206x2622
[phone-runner] focused field reports no value (placeholder 6 characters)
[phone-runner] focused field reports no value (placeholder 6 characters)
##[error]home failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
