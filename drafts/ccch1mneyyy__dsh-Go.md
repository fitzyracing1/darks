<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 30181 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "iOS compile" workflow getting cancelled on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **iOS compile** workflow (`.github/workflows/ios-compile.yml`) on `main` has been getting cancelled since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45088143218 — dark (conclusion: `cancelled`), 2026-11-23 00:20 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `engine` → `Run the engine inside the app`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
48 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
Building io.github.ccch1mneyyy.dshgo for simulator (ios)...
Running Xcode build...
Xcode build done.                                           373.4s
✓ Built build/ios/iphonesimulator/Runner.app
launched as 58650
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
