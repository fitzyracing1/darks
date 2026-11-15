<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16008 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43667123980 — dark (conclusion: `failure`), 2026-11-15 02:18 UTC
- Dark since: 2026-11-15 02:18 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: error: dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET

<details><summary>End of the job log</summary>

```
   Compiling lightcraft-mcp v0.21.1 (/home/runner/work/lightcraft/lightcraft/crates/mcp)
   Compiling lightcraft-cli v0.21.1 (/home/runner/work/lightcraft/lightcraft/apps/lightcraft-cli)
    Finished `release` profile [optimized + debuginfo] target(s) in 25m 00s
wrote /home/runner/work/lightcraft/lightcraft/dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz
lightcraft-cli 0.21.1
==> done
error: dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
