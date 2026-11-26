<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21855 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Nightly macOS", "FreeBSD", "CI", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly macOS (`.github/workflows/nightly-macos.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45744146118 — dark (conclusion: `failure`), 2026-11-26 02:41 UTC
- Dark since: 2026-11-23 02:42 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-latest)` → `Gate`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
34 | egui_extras = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `egui_extras`
warning: `pdfcraft-ui-egui` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45868009624 — dark (conclusion: `cancelled`), 2026-11-26 17:28 UTC
- Dark since: 2026-11-23 19:45 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling egui-wgpu v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling egui-winit v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling craft-ui-panels v0.1.0 (https://github.com/storytold/craft-libs?rev=0a6e42b80bfd586aee6ee1144aa98cf1ea37a844#0a6e42b8)
   Compiling pdfcraft-edit v0.22.0 (/home/runner/work/pdfcraft/pdfcraft/crates/edit)
   Compiling egui_glow v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling pollster v1.0.1
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45868009605 — dark (conclusion: `failure`), 2026-11-26 17:28 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: CI: 9 of 11 steps passed, FAILED: test, deny

<details><summary>End of the job log</summary>

```
  K Optimize and standards                  58       20       12      44.8%
  L Print and print production              41       21        3      54.9%
  M Accessibility                           61       39       10      72.1%
  N Compare, automation, AI, misc           76       19       14      34.2%
note: 100 shipped feature(s) have no automation tool yet (AGENTS.md §3): core.malformed-input-safety, core.xref-streams, core.stream-filters, core.decompression-limits, core.unicode-passwords, core.permissions-enforced,…
xtask ci: error: ci failed at `test`, `deny`
CI: 9 of 11 steps passed, FAILED: test, deny
##[error]Process completed with exit code 1.
```

</details>

### Fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45748588731 — dark (conclusion: `failure`), 2026-11-26 03:23 UTC
- Dark since: 2026-11-26 03:23 UTC (first run of the current streak)
- Job / step: `fuzz (mutation, 15 min)` → `Fuzz`
- Likely cause: xtask fuzz: error: 1 crash(es): see fuzz-out/findings/

<details><summary>End of the job log</summary>

```
   | ^^^^^^^^^^^^
   |
help: consider removing the workspace dependency `pdfcraft-prc`
fuzz: 787 seeds, 2 jobs, 900 s, timeout 10 s, seed 34
  Crash from issue5972.pdf: signal: 6 (SIGABRT) (core dumped); memory allocation of 14026296352 bytes failed → fuzz-out/findings/crash-a8b634a499cb874b.pdf (294 bytes)
fuzz: 170179 runs in 900 s (189.1/s): 1 distinct crash(es), 0 hang(s)
xtask fuzz: error: 1 crash(es): see fuzz-out/findings/
##[error]Process completed with exit code 1.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45868009562 — dark (conclusion: `cancelled`), 2026-11-26 17:28 UTC
- Dark since: 2026-11-26 15:23 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling pdfcraft-platform v0.22.0 (D:\a\pdfcraft\pdfcraft\crates\platform)
   Compiling pdfcraft-ui-egui v0.22.0 (D:\a\pdfcraft\pdfcraft\crates\ui-egui)
   Compiling pdfcraft-prc-render v0.22.0 (D:\a\pdfcraft\pdfcraft\crates\prc-render)
   Compiling pdfcraft v0.22.0 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft)
   Compiling pdfcraft-cli v0.22.0 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft-cli)
   Compiling edit-session v0.1.0-alpha.2 (D:\a\pdfcraft\pdfcraft\vendor\edit-session)
   Compiling pdfcraft-automation v0.22.0 (D:\a\pdfcraft\pdfcraft\crates\automation)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
