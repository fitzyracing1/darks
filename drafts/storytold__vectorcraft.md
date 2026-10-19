<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 9893 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39151597855 — dark (conclusion: `cancelled`), 2026-10-18 17:52 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling slab v0.4.12
   Compiling scoped-tls v1.0.1
   Compiling downcast-rs v1.2.1
   Compiling polling v3.11.0
   Compiling quick-xml v0.41.0
   Compiling wayland-backend v0.3.17
   Compiling cfg_aliases v0.2.2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
