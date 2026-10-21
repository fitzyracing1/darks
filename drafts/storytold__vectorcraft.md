<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10261 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39585715257 — dark (conclusion: `cancelled`), 2026-10-21 10:35 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling read-fonts v0.43.3
   Compiling wasmi_core v2.0.0
   Compiling wasmi v2.0.0
   Compiling vectorcraft-text v0.14.0 (/home/runner/work/vectorcraft/vectorcraft/crates/text)
warning: vectorcraft-text@0.14.0: web build won't fetch: Cairo Regular, Tajawal ExtraLight, Tajawal Light, Tajawal Regular, Tajawal Medium, Tajawal Bold, Tajawal ExtraBold, Tajawal Black, Almarai Light, Almarai Regular,…
   Compiling harfrust v0.13.3
   Compiling icu_segmenter v2.3.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
