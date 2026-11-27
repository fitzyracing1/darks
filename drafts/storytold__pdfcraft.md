<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21872 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Nightly macOS", "FreeBSD", "CI", +1 more)
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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45877412988 — dark (conclusion: `failure`), 2026-11-26 18:37 UTC
- Dark since: 2026-11-23 19:45 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
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

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45889982203 — dark (conclusion: `failure`), 2026-11-26 20:17 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: CI: 9 of 11 steps passed, FAILED: test, deny

<details><summary>End of the job log</summary>

```
  K Optimize and standards                  58       20       12      44.8%
  L Print and print production              41       21        3      54.9%
  M Accessibility                           61       39       10      72.1%
  N Compare, automation, AI, misc           76       19       14      34.2%
xtask ci: error: ci failed at `test`, `deny`
note: 100 shipped feature(s) have no automation tool yet (AGENTS.md §3): core.malformed-input-safety, core.xref-streams, core.stream-filters, core.decompression-limits, core.unicode-passwords, core.permissions-enforced,…
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

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
