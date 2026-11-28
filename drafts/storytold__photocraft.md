<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 81932 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Perf (nightly)", "SonarCloud")
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

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/46138025137 — dark (conclusion: `failure`), 2026-11-28 11:03 UTC
- Dark since: 2026-11-28 11:03 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 2/4` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 2's profiles (exit 1)

<details><summary>End of the job log</summary>

```
  1.100.0-x86_64-unknown-linux-gnu updated - rustc 1.100.0 (0ef1bc386 2026-11-09) (from rustc 1.100.0 (0ef1bc386 2026-11-09))
Raw profiles: 17G in 4240 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   85G   61G  59% /
warning: profraw/shard-2-10885-2493178448070436744_0.profraw: invalid instrumentation profile data (file header is corrupt)
warning: profraw/shard-2-10928-2493178448070436744_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 2 wrote a truncated or corrupt coverage profile: profraw/shard-2-10885-2493178448070436744_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
