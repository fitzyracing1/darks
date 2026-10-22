<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10385 · **Generated:** 2026-10-22T12:57:28.437Z
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

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39777394213 — dark (conclusion: `cancelled`), 2026-10-22 12:19 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling chacha20 v0.10.2
   Compiling rusty-fork v0.3.1
   Compiling vectorcraft-svg v0.14.0 (/home/runner/work/vectorcraft/vectorcraft/crates/svg)
   Compiling vectorcraft-eps v0.14.0 (/home/runner/work/vectorcraft/vectorcraft/crates/eps)
   Compiling rand v0.10.3
   Compiling rand_xorshift v0.5.0
   Compiling vectorcraft-cad v0.14.0 (/home/runner/work/vectorcraft/vectorcraft/crates/cad)
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39777394435 — dark (conclusion: `cancelled`), 2026-10-22 12:19 UTC
- Dark since: 2026-10-22 12:06 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-cad v0.14.0 (D:\a\vectorcraft\vectorcraft\crates\cad)
   Compiling vectorcraft-scriptcheck v0.14.0 (D:\a\vectorcraft\vectorcraft\crates\scriptcheck)
   Compiling vectorcraft-ui-egui v0.14.0 (D:\a\vectorcraft\vectorcraft\crates\ui-egui)
   Compiling vectorcraft v0.14.0 (D:\a\vectorcraft\vectorcraft\apps\vectorcraft)
   Compiling vectorcraft-engine v0.14.0 (D:\a\vectorcraft\vectorcraft\crates\engine)
   Compiling vectorcraft-mcp v0.14.0 (D:\a\vectorcraft\vectorcraft\crates\mcp)
   Compiling vectorcraft-cli v0.14.0 (D:\a\vectorcraft\vectorcraft\apps\vectorcraft-cli)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
