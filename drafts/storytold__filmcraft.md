<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 15153 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/39191965057 — dark (conclusion: `cancelled`), 2026-10-19 02:52 UTC
- Dark since: 2026-10-19 02:52 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling smithay-clipboard v0.7.3
   Compiling accesskit_winit v0.32.2
   Compiling arboard v3.6.1
   Compiling serde_spanned v1.1.1
   Compiling toml_writer v1.1.2+spec-1.1.0
   Compiling egui-winit v0.36.2
   Compiling toml v1.1.6+spec-1.1.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
