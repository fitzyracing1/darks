<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 27087 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44250135934 — dark (conclusion: `failure`), 2026-11-18 06:16 UTC
- Dark since: 2026-11-18 02:01 UTC (first run of the current streak)
- Job / step: `engine` → `Drive other apps with the phone runner`
- Likely cause: searchd EXC_CRASH SIGABRT  Abort trap: 6 | libsystem_kernel.dylib __pthread_kill+8 | libsystem_pthread.dylib pthread_kill+264 | libsystem_c.dylib abort+116 | libsystem_c.dylib abort_report_np+80 | SpotlightIndex __si_indexingWatchdogInit_bl

<details><summary>End of the job log</summary>

```
[7] 列表项 "John Appleseed"
[8] 按钮 "Contact photo for John Appleseed"
[9] 文字 "John Appleseed"
[10] 列表项 "b"
[11] 文字 "B"
[12] 列表项 "Kate Bell"
##[notice][phone-runner] frame changed (read 1 of 3): 260405/3162132 pixels, largest 255, box 51,224-1196,2615, size 1206x2622
##[error]typing didn't reach the field: Error Domain=com.apple.dt.xctest.ui-testing.error Code=10008 "No matches found for first query match sequence: `Descendants matching type Any` -> `Elements matching predicate 'has…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
