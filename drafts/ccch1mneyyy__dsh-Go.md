<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 32418 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45808685029 — dark (conclusion: `cancelled`), 2026-11-26 11:13 UTC
- Dark since: 2026-11-26 00:01 UTC (first run of the current streak)
- Job / step: `engine` → `Archive as for TestFlight, and look inside`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is de953d6fa590ff7158d37992af4530d37c6dbdd3a4daf773038fca489e70ed3f
Finalizing artifact upload
Artifact ios-native-tools.zip successfully finalized. Artifact ID 15115542071
Artifact ios-native-tools has been successfully uploaded! Final size is 7510 bytes. Artifact ID is 15115542071
Artifact download URL: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45808685029/artifacts/15115542071
Shared CoreDevice/XCTest native owner restored for these inputs; nothing to build.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
