<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12069 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("FreeBSD", "Release", "Windows ARM64", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45326000401 — dark (conclusion: `failure`), 2026-11-24 04:23 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/root/.rustup/toolchains/stable-x86_64-unknown-freebsd/bin/rustc --crate-name vectorcraft_engine --edition=2024 crates/engine/src/lib.rs --error-format=json --json=diagnostic-rendered-…

<details><summary>End of the job log</summary>

```
   |
23 | egui_extras = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `egui_extras`
warning: `vectorcraft-web` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45315618486 — dark (conclusion: `failure`), 2026-11-24 02:53 UTC
- Dark since: 2026-11-24 02:53 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: packaging/freebsd/package.sh: line 52:  9696 Killed                     ( cd "$ROOT" && cargo build --release --locked -p vectorcraft -p vectorcraft-cli ${CARGO_BUILD_TARGET:+--target "$CARGO_BUILD_TARGET"} )

<details><summary>End of the job log</summary>

```
   Compiling enum-map v3.1.0
   Compiling vectorcraft v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling resvg v0.45.1
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling vectorcraft-mcp v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/mcp)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
packaging/freebsd/package.sh: line 52:  9696 Killed                     ( cd "$ROOT" && cargo build --release --locked -p vectorcraft -p vectorcraft-cli ${CARGO_BUILD_TARGET:+--target "$CARGO_BUILD_TARGET"} )
##[error]Process completed with exit code 137.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45331574892 — dark (conclusion: `cancelled`), 2026-11-24 05:11 UTC
- Dark since: 2026-11-24 05:11 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
   Compiling enum-map-derive v1.0.1
   Compiling vectorcraft v0.24.1 (D:\a\vectorcraft\vectorcraft\apps\vectorcraft)
   Compiling enum-map v3.1.0
   Compiling resvg v0.45.1
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling vectorcraft-mcp v0.24.1 (D:\a\vectorcraft\vectorcraft\crates\mcp)
   Compiling vectorcraft-cli v0.24.1 (D:\a\vectorcraft\vectorcraft\apps\vectorcraft-cli)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45506123572 — dark (conclusion: `cancelled`), 2026-11-24 23:00 UTC
- Dark since: 2026-11-24 23:00 UTC (first run of the current streak)
- Job / step: `gate / cache warm (ubuntu-24.04)` → `Gate`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
warning: patch `egui_system_font_provider v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)` was not used in the crate graph
help: Check that the patched package version and available features are compatible
      with the dependency requirements. If the patch has a different version from
      what is locked in the Cargo.lock file, run `cargo update` to use the new
      version. This may also occur with an optional dependency that is not enabled.
warning: vectorcraft-text@0.24.1: web build won't fetch: Cairo Regular, Tajawal ExtraLight, Tajawal Light, Tajawal Regular, Tajawal Medium, Tajawal Bold, Tajawal ExtraBold, Tajawal Black, Almarai Light, Almarai Regular,…
   Compiling vectorcraft-ui-egui v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/ui-egui)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
