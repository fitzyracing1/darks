<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 79304 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Perf (nightly)", "SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43551672201 — dark (conclusion: `failure`), 2026-11-14 03:26 UTC
- Dark since: 2026-11-12 03:28 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: P44 Open .psd, 36 MP, 3 layers: **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  P41 Gaussian Blur r 40 on 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 1…
  P42 Curves dialog change, layer preview, 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with…
  P43 Save .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P44 Open .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P90 Free Transform begin, 2 layers on 24 MP (Ctrl+T + first preview frame): **BUDGET BROKEN**
  bench interactive_bench: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  bench large_file_bench: large_file_bench --reps 3 --json /Users/runner/work/photocraft/photocraft/target/perf/large_file_bench.json: exited with exit status: 1
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43562973500 — dark (conclusion: `failure`), 2026-11-14 05:44 UTC
- Dark since: 2026-11-12 12:27 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
08:16:11.695 INFO  ------------- Upload SCA dependency files
08:16:12.806 INFO  Successfully sent architecture data
08:16:14.416 INFO  Sensor cache published successfully
08:16:16.785 INFO  Analysis total time: 2:44.872 min
08:16:16.787 INFO  SonarScanner Engine completed successfully
08:16:16.932 INFO  EXECUTION SUCCESS
08:16:16.933 INFO  Total time: 2:49.766s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43562973482 — dark (conclusion: `failure`), 2026-11-14 05:44 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `corpus tests` → `Corpus tests`
- Likely cause: error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101

<details><summary>End of the job log</summary>

```
   3: <photocraft_io::svg::tests::the_deepest_chain_of_embedded_svg_images_fits_a_small_stack::{closure#0} as core::ops::function::FnOnce<()>>::call_once
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    svg::tests::the_deepest_chain_of_embedded_svg_images_fits_a_small_stack
test result: FAILED. 682 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 8.49s
error: test failed, to rerun pass `-p photocraft-io --lib`
error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
