<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12154 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI", "SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/46107108299 — dark (conclusion: `cancelled`), 2026-11-28 04:20 UTC
- Dark since: 2026-11-27 22:28 UTC (first run of the current streak)
- Job / step: `gate / cache warm (ubuntu-24.04)` → `Gate`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
warning: patch `egui_system_font_provider v0.37.0 (https://github.com/storytold/egui.git?rev=b15ffe9bfc2c8e6748533b32b708e10abaf2afec#b15ffe9b)` was not used in the crate graph
help: Check that the patched package version and available features are compatible
      with the dependency requirements. If the patch has a different version from
      what is locked in the Cargo.lock file, run `cargo update` to use the new
      version. This may also occur with an optional dependency that is not enabled.
warning: vectorcraft-text@0.24.1: web build won't fetch: Cairo Regular, Tajawal ExtraLight, Tajawal Light, Tajawal Regular, Tajawal Medium, Tajawal Bold, Tajawal ExtraBold, Tajawal Black, Almarai Light, Almarai Regular,…
   Compiling vectorcraft-ui-egui v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/ui-egui)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/46116163956 — dark (conclusion: `cancelled`), 2026-11-28 06:20 UTC
- Dark since: 2026-11-27 22:28 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/46116163940 — dark (conclusion: `cancelled`), 2026-11-28 06:20 UTC
- Dark since: 2026-11-28 05:35 UTC (first run of the current streak)
- Job / step: `affinity3 / gate (ubuntu-24.04)` → `Gate`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-metafile v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/metafile)
   Compiling vectorcraft-pdf v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/pdf)
   Compiling craft-affinity v0.1.0 (https://github.com/storytold/craft-libs?rev=51fcc3b0413af193db952df28dffae2321745703#51fcc3b0)
   Compiling craft-dxf v0.1.0 (https://github.com/storytold/craft-libs?rev=51fcc3b0413af193db952df28dffae2321745703#51fcc3b0)
   Compiling craft-mime v0.1.0 (https://github.com/storytold/craft-libs?rev=51fcc3b0413af193db952df28dffae2321745703#51fcc3b0)
   Compiling craft-gzip v0.1.0 (https://github.com/storytold/craft-libs?rev=51fcc3b0413af193db952df28dffae2321745703#51fcc3b0)
   Compiling craft-plotter v0.1.0 (https://github.com/storytold/craft-libs?rev=51fcc3b0413af193db952df28dffae2321745703#51fcc3b0)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
