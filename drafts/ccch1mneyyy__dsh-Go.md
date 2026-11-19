<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 28114 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- iOS guest (`.github/workflows/ios-guest.yml`): [issue #651](https://github.com/ccch1mneyyy/dsh-Go/issues/651) "Bug iOS：guest 任务卡住后取消会把内核 quarantine，之后所有 Linux 命令报 "Guest resource exit was not confirmed""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44573979779 — dark (conclusion: `cancelled`), 2026-11-19 17:08 UTC
- Dark since: 2026-11-18 02:01 UTC (first run of the current streak)
- Job / step: `engine` → `Run the engine inside the app`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  vector_graphics_compiler 1.3.4 (1.3.6 available)
  windows_file_picker 2.0.1 (2.0.2 available)
  xml 7.0.1 (7.1.0 available)
Got dependencies!
47 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
Building io.github.ccch1mneyyy.dshgo for simulator (ios)...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
