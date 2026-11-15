<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15997 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43637077175 — dark (conclusion: `failure`), 2026-11-14 20:21 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 2/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 2's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.4G in 894 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   82G  44% /
warning: profraw/shard-2-12584-13058369011178764092_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 2 wrote a truncated or corrupt coverage profile: profraw/shard-2-12584-13058369011178764092_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### Release (`.github/workflows/release.yml`)

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
