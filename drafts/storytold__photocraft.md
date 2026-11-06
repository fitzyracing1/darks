<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 77349 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Perf (nightly)" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Perf (nightly)** workflow (`.github/workflows/perf-nightly.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42156702258 — dark (conclusion: `failure`), 2026-11-06 03:27 UTC
- Dark since: 2026-11-02 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: P44 Open .psd, 36 MP, 3 layers: **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  P40 Brush dab 60 px on 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P41 Gaussian Blur r 40 on 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 1…
  P42 Curves dialog change, layer preview, 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with…
  P43 Save .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P44 Open .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  bench interactive_bench: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  bench large_file_bench: large_file_bench --reps 3 --json /Users/runner/work/photocraft/photocraft/target/perf/large_file_bench.json: exited with exit status: 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
