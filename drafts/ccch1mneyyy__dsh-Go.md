<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 31149 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45386265814 — dark (conclusion: `cancelled`), 2026-11-24 11:40 UTC
- Dark since: 2026-11-24 08:03 UTC (first run of the current streak)
- Job / step: `engine` → `Call the browser and system tools inside the app`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
screen {} 200 2578ms ok
type {"screen":"s13","id":37,"text":"wifi"} 200 28123ms ok
screen {} 200 2090ms ok
key {"screen":"s15","key":"home"} 200 6788ms ok
apps {} 200 60ms ok
nonsense {} 200 5ms error: 没有这个工具：nonsense
done in 105798 ms
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45392447249 — dark (conclusion: `cancelled`), 2026-11-24 12:19 UTC
- Dark since: 2026-11-24 12:19 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
