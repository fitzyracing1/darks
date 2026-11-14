<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 79374 · **Generated:** 2026-11-14T18:37:03.336Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43604422679 — dark (conclusion: `failure`), 2026-11-14 14:21 UTC
- Dark since: 2026-11-12 12:27 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
17:50:17.613 INFO  ------------- Upload SCA dependency files
17:50:18.803 INFO  Successfully sent architecture data
17:50:20.237 INFO  Sensor cache published successfully
17:50:22.523 INFO  Analysis total time: 2:37.481 min
17:50:22.525 INFO  SonarScanner Engine completed successfully
17:50:22.662 INFO  EXECUTION SUCCESS
17:50:22.663 INFO  Total time: 2:42.163s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43604422686 — dark (conclusion: `failure`), 2026-11-14 14:21 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `test (without heif)`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
    failures:
    failures:
        svg::gzip_compressed_embedded_svg_decompresses_once_with_a_size_cap
    test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 603 filtered out; finished in 0.37s
  stderr ───
    thread 'svg::gzip_compressed_embedded_svg_decompresses_once_with_a_size_cap' (278792) panicked at crates/io/tests/it/svg.rs:12:62:
    SVG: embedded SVG images exceed the byte or nesting budget
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><image x="0" y="0" width="10" height="10" href="data:image/svg+xml;base64,H4sIAAAAAAAE/7IpLktXqMjNySu2VcooKSmw0tcvLy/XKzfWyy9K1zcyMDDQLy5LV1Ioz0wpybBVMl…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
