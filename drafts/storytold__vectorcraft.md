<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10445 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39878036053 — dark (conclusion: `cancelled`), 2026-10-23 00:25 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling accesskit_consumer v0.35.0
   Compiling getopts v0.2.24
   Compiling craft-print v0.1.0 (https://github.com/storytold/craft-libs?rev=d991bf6792f8ade99c51358bf3c1d902c8cd96b5#d991bf67)
   Compiling dify v0.8.0
   Compiling kittest v0.4.0
   Compiling open v5.4.4
   Compiling egui_kittest v0.36.2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
