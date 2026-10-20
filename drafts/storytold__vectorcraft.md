<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10032 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39348302458 — dark (conclusion: `cancelled`), 2026-10-20 00:33 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling guillotiere v0.7.0
   Compiling vectorcraft-pathops v0.13.1 (/home/runner/work/vectorcraft/vectorcraft/crates/pathops)
   Compiling float-cmp v0.9.0
   Compiling either v1.18.0
   Compiling strict-num v0.1.1
   Compiling vectorcraft-three-d v0.13.1 (/home/runner/work/vectorcraft/vectorcraft/crates/three-d)
   Compiling vectorcraft-plugins v0.13.1 (/home/runner/work/vectorcraft/vectorcraft/crates/plugins)
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39348302562 — dark (conclusion: `cancelled`), 2026-10-20 00:33 UTC
- Dark since: 2026-10-19 23:07 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-format v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\format)
   Compiling vectorcraft-trace v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\trace)
   Compiling vectorcraft-scriptcheck v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\scriptcheck)
   Compiling vectorcraft-engine v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\engine)
   Compiling vectorcraft-ui-egui v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\ui-egui)
   Compiling vectorcraft v0.13.1 (D:\a\vectorcraft\vectorcraft\apps\vectorcraft)
   Compiling vectorcraft-mcp v0.13.1 (D:\a\vectorcraft\vectorcraft\crates\mcp)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
