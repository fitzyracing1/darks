<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 7551 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/39361575041 — dark (conclusion: `cancelled`), 2026-10-20 02:55 UTC
- Dark since: 2026-10-19 02:57 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling calloop v0.13.0
   Compiling wgpu-core v30.0.1
   Compiling x11-dl v2.21.0
   Compiling gethostname v1.1.0
   Compiling emath v0.36.2
   Compiling litrs v1.0.0
   Compiling x11rb-protocol v0.13.2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
