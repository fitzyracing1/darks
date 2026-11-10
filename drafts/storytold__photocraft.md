<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 78318 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Perf (nightly)", "FreeBSD", "Documentation", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42749578800 — dark (conclusion: `failure`), 2026-11-10 03:27 UTC
- Dark since: 2026-11-02 03:29 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42742638249 — dark (conclusion: `failure`), 2026-11-10 02:25 UTC
- Dark since: 2026-11-09 02:25 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p photocraft-engine --lib'

<details><summary>End of the job log</summary>

```
  left: [[105.5, 15.5]]
 right: [[105.0, 15.0]]
failures:
    cmd::artboard_cmds::tests::a_board_past_the_origin_moves_the_color_samplers_and_symmetry_with_the_document
    cmd::artboard_cmds::tests::duplicating_a_board_beside_one_past_the_origin_moves_the_color_samplers_with_the_document
test result: FAILED. 3366 passed; 2 failed; 15 ignored; 0 measured; 0 filtered out; finished in 123.98s
error: test failed, to rerun pass `-p photocraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

### Documentation (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42674268037 — dark (conclusion: `failure`), 2026-11-09 18:28 UTC
- Dark since: 2026-11-09 18:28 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42740217776 — dark (conclusion: `failure`), 2026-11-10 02:04 UTC
- Dark since: 2026-11-10 02:04 UTC (first run of the current streak)
- Job / step: `corpus tests` → `Corpus tests`
- Likely cause: error: cargo test --release --features corpus,heif (photocraft-psd, photocraft-codecs, photocraft-io, photocraft-engine): exited with exit status: 101

<details><summary>End of the job log</summary>

```
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    cmd::artboard_cmds::tests::a_board_past_the_origin_moves_the_color_samplers_and_symmetry_with_the_document
    cmd::artboard_cmds::tests::duplicating_a_board_beside_one_past_the_origin_moves_the_color_samplers_with_the_document
test result: FAILED. 3367 passed; 2 failed; 15 ignored; 0 measured; 0 filtered out; finished in 79.92s
error: test failed, to rerun pass `-p photocraft-engine --lib`
error: cargo test --release --features corpus,heif (photocraft-psd, photocraft-codecs, photocraft-io, photocraft-engine): exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
