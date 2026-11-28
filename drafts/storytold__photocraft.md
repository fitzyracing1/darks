<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 81905 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Perf (nightly)", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/46098067427 — dark (conclusion: `failure`), 2026-11-28 02:26 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
26 | photocraft-ui-egui = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `photocraft-ui-egui`
warning: `photocraft-web` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/46103063582 — dark (conclusion: `cancelled`), 2026-11-28 03:29 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling photocraft-engine v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/engine)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling open v5.4.5
   Compiling memory-stats v1.2.0
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=932a73b28560acb1a695533307b2cd0d66a42081#932a73b2)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/46102142798 — dark (conclusion: `failure`), 2026-11-28 03:17 UTC
- Dark since: 2026-11-28 03:17 UTC (first run of the current streak)
- Job / step: `gate / test 2/4 (artcraft-k8s-main)` → `Gate`
- Likely cause: skip  panic_hunt

<details><summary>End of the job log</summary>

```
    corpus/psd-tools: all 309 files (PHOTOCRAFT_FULL_SWEEP=1)
    (test timed out)
error: test run failed
error: ci failed at `test`
CI summary:
  FAIL  test: cargo nextest run --profile ci --binaries-metadata /home/runner/_work/photocraft/photocraft/target/nextest-archive/target/nextest/binaries-metadata.json --cargo-metadata /home/runner/_work/photocraft/photo…
  skip  panic_hunt
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
