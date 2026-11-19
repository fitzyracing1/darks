<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 27831 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44508267838 — dark (conclusion: `cancelled`), 2026-11-19 10:43 UTC
- Dark since: 2026-11-18 02:01 UTC (first run of the current streak)
- Job / step: `engine` → `Launch the real app`
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
