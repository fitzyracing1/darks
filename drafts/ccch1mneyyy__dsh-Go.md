<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 28465 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- iOS guest (`.github/workflows/ios-guest.yml`): [issue #651](https://github.com/ccch1mneyyy/dsh-Go/issues/651) "Bug iOS：guest 任务卡住后取消会把内核 quarantine，之后所有 Linux 命令报 "Guest resource exit was not confirmed""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44680663099 — dark (conclusion: `cancelled`), 2026-11-20 05:23 UTC
- Dark since: 2026-11-20 01:21 UTC (first run of the current streak)
- Job / step: `engine` → `Archive as for TestFlight, and look inside`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is bc0514fc8d43d7f000e7742dc0ac7dfe6176c4a8590dbddadb5953451081c6e0
Finalizing artifact upload
Artifact ios-native-tools.zip successfully finalized. Artifact ID 14607000608
Artifact ios-native-tools has been successfully uploaded! Final size is 7432 bytes. Artifact ID is 14607000608
Artifact download URL: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44680663099/artifacts/14607000608
Shared CoreDevice/XCTest native owner restored for these inputs; nothing to build.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
