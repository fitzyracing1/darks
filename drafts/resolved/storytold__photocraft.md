<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/photocraft

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 79828 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Perf (nightly)", "FreeBSD", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43798983157 — dark (conclusion: `failure`), 2026-11-16 03:34 UTC
- Dark since: 2026-11-12 03:28 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: | P44 | Open .psd, 36 MP, 3 layers | track only | – | – | – | – | – | – | **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive…

<details><summary>End of the job log</summary>

```
| Id | Scenario | Target | Why | Issue |
|---|---|---|---|---|
| P15 | Zoom / pan frame time on a 15000×10000 16-bit document | ≤ 16 ms per frame | no headless canvas frame harness yet (zoom and pan sample the GPU texture in the egui paint callback) | [#209](https://github.com/stor…
| P23 | Warp / Puppet / Perspective preview at 4K | ≤ 16 ms per frame, commit in the background | the previews run inside the UI tools; no headless frame harness, no background commit | [#210](https://github.com/storyto…
| P34 | Brush preview memory, small dab on an 8K viewport | ≤ 2 MiB | the live brush preview buffers are UI-side; no headless counter yet | [#211](https://github.com/storytold/photocraft/issues/211) |
| P35 | Marquee drag on 24 MP with Alt/Shift | ≤ 17 ms p95 | Shift/Alt marquee modifiers don't exist yet (#208) and the drag preview is UI-side | [#211](https://github.com/storytold/photocraft/issues/211) |
wrote /Users/runner/work/photocraft/photocraft/target/perf/results.json
##[error]Process completed with exit code 1.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43792347118 — dark (conclusion: `failure`), 2026-11-16 02:28 UTC
- Dark since: 2026-11-15 02:25 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: cannot update the lock file /home/runner/work/photocraft/photocraft/Cargo.lock because --locked was passed to prevent this

<details><summary>End of the job log</summary>

```
warning: patch `egui_system_font_provider v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)` was not used in the crate graph
help: Check that the patched package version and available features are compatible
      with the dependency requirements. If the patch has a different version from
      what is locked in the Cargo.lock file, run `cargo update` to use the new
      version. This may also occur with an optional dependency that is not enabled.
error: cannot update the lock file /home/runner/work/photocraft/photocraft/Cargo.lock because --locked was passed to prevent this
help: to generate the lock file without accessing the network, remove the --locked flag and use --offline instead.
##[error]Process completed with exit code 101.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43792966491 — dark (conclusion: `failure`), 2026-11-16 02:34 UTC
- Dark since: 2026-11-15 02:32 UTC (first run of the current streak)
- Job / step: `release / Git dependencies come from storytold` → `Git dependencies come from storytold`
- Likely cause: error: cannot update the lock file /home/runner/work/photocraft/photocraft/Cargo.lock because --locked was passed to prevent this

<details><summary>End of the job log</summary>

```
warning: patch `egui_system_font_provider v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)` was not used in the crate graph
help: Check that the patched package version and available features are compatible
      with the dependency requirements. If the patch has a different version from
      what is locked in the Cargo.lock file, run `cargo update` to use the new
      version. This may also occur with an optional dependency that is not enabled.
error: cannot update the lock file /home/runner/work/photocraft/photocraft/Cargo.lock because --locked was passed to prevent this
help: to generate the lock file without accessing the network, remove the --locked flag and use --offline instead.
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
