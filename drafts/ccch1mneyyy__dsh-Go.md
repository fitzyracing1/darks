<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 29965 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "iOS UI tour")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45021565174 — dark (conclusion: `cancelled`), 2026-11-22 12:18 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `compile` → `Compile for the simulator`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling web-time v1.1.0
   Compiling siphasher v1.0.4
   Compiling base64 v0.22.1
   Compiling idevice v0.1.68 (/Users/runner/work/dsh-Go/dsh-Go/tooling/ios/phone-self-runner/.upstream/idevice)
   Compiling dsh-phone-self-runner v0.1.0 (/Users/runner/work/dsh-Go/dsh-Go/tooling/ios/phone-self-runner)
    Finished `release` profile [optimized] target(s) in 1m 08s
info: downloading component rust-std
##[error]The operation was canceled.
```

</details>

### iOS UI tour (`.github/workflows/ios-ui-tour.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45021565148 — dark (conclusion: `cancelled`), 2026-11-22 12:18 UTC
- Dark since: 2026-11-22 06:05 UTC (first run of the current streak)
- Job / step: `tour` → `Build the tour for the simulator`
- Likely cause: Canceling since a higher priority waiting request for ios-ui-tour-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling cpufeatures v0.2.17
   Compiling crypto-common v0.1.7
   Compiling block-buffer v0.10.4
   Compiling libm v0.2.16
   Compiling zerocopy v0.8.63
   Compiling digest v0.10.7
   Compiling futures-core v0.3.34
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
