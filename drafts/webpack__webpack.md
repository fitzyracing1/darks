<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65967 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Github Actions", "Benchmarks", "Code Size", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Github Actions (`.github/workflows/test.yml`)

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39826426882 — dark (conclusion: `cancelled`), 2026-10-22 17:52 UTC
- Dark since: 2026-10-22 11:37 UTC (first run of the current streak)
- Job / step: `unit` → `Run yarn cover:unit --ci --cacheDirectory .jest-cache`
- Likely cause: The run was canceled by @alexander-akait.

<details><summary>End of the job log</summary>

```
Cache restored from key: jest-unit-Linux-2372275ae6996fb8fe2d181ae5874dc35d9f20c41d446929c3e2b14f8b5f1da2-c1f61fc64dda46d9cc7d766d0ba27af3875a8f9a
yarn run v1.22.22
$ yarn cover:base --testMatch "<rootDir>/test/unitCases/**/*.unittest.js" --coverage --ci --cacheDirectory .jest-cache
$ node --expose-gc --max-old-space-size=4096 --experimental-vm-modules node_modules/jest-cli/bin/jest --workerIdleMemoryLimit=512MB --logHeapUsage --testMatch '<rootDir>/test/unitCases/**/*.unittest.js' --coverage --ci …
Failed to parse the inline source map for /home/runner/work/webpack/webpack/test/unitCases/javascript/printer.unittest.js; its stack frames stay untranslated.
[BABEL] Note: The code generator has deoptimised the styling of /home/runner/work/webpack/webpack/lib/javascript/syntax-printer.js as it exceeds the max of 500KB.
Failed to parse the inline source map for /home/runner/work/webpack/webpack/lib/javascript/syntax-printer.js; its stack frames stay untranslated.
##[error]The operation was canceled.
```

</details>

### Benchmarks (`.github/workflows/benchmarks.yml`)

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39826426508 — dark (conclusion: `cancelled`), 2026-10-22 17:52 UTC
- Dark since: 2026-10-22 16:36 UTC (first run of the current streak)
- Job / step: `benchmark-memory (2/2)` → `Run memory benchmarks`
- Likely cause: The run was canceled by @alexander-akait.

<details><summary>End of the job log</summary>

```
Teardown (run mode): benchmark "asset-modules-bytes", scenario '{"name":"mode-development","mode":"development"}'
[CodSpeed] Measured test/BenchmarkTestCases.benchmark.mjs::benchmark "asset-modules-bytes", scenario '{"name":"mode-development","mode":"development"}'
[CodSpeed] Done running 1 benches.
Worker 2738: running asset-modules-bytes-mode-production
Register: benchmark "asset-modules-bytes", scenario '{"name":"mode-production","mode":"production"}' HEAD
[CodSpeed] running with @codspeed/tinybench (memory mode, 2 warmup iterations)
[CodSpeed] memory mode: priming 1 tasks before measurement.
##[error]The operation was canceled.
```

</details>

### Code Size (`.github/workflows/code-size.yml`)

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39826426525 — dark (conclusion: `cancelled`), 2026-10-22 17:52 UTC
- Dark since: 2026-10-22 17:51 UTC (first run of the current streak)
- Job / step: `code-size` → `Measure generated code size`
- Likely cause: The run was canceled by @alexander-akait.

<details><summary>End of the job log</summary>

```
yarn run v1.22.22
$ node --max-old-space-size=4096 ./test/CodeSizeTestCases.size.js --output code-size-report.json --baseline baseline/code-size-report.json --summary code-size-report.md
Measuring 2275 case(s)…
  100/2275 case(s) in 7s
  200/2275 case(s) in 17s
  300/2275 case(s) in 26s
  400/2275 case(s) in 44s
##[error]The operation was canceled.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39826427419 — dark (conclusion: `cancelled`), 2026-10-22 17:52 UTC
- Dark since: 2026-10-22 17:52 UTC (first run of the current streak)
- Job / step: `Analyze / Analyze (javascript)` → `Perform CodeQL Analysis`
- Likely cause: The run was canceled by @alexander-akait.

<details><summary>End of the job log</summary>

```
[2026-10-22 17:53:31] [build-stdout] Extracting /home/runner/work/webpack/webpack/test/specCases/html5lib.spectest.js
[2026-10-22 17:53:31] [build-stdout] Done extracting /home/runner/work/webpack/webpack/test/helpers/jsFuzzProgram.js (305 ms)
[2026-10-22 17:53:31] [build-stdout] Extracting /home/runner/work/webpack/webpack/test/specCases/js-fuzz.spectest.js
[2026-10-22 17:53:31] [build-stdout] Done extracting /home/runner/work/webpack/webpack/test/specCases/html5lib.spectest.js (96 ms)
[2026-10-22 17:53:31] [build-stdout] Extracting /home/runner/work/webpack/webpack/test/specCases/minify-corpora.spectest.js
[2026-10-22 17:53:31] [build-stdout] Done extracting /home/runner/work/webpack/webpack/test/specCases/js-fuzz.spectest.js (172 ms)
[2026-10-22 17:53:31] [build-stdout] Extracting /home/runner/work/webpack/webpack/test/specCases/syntaxEquivalence.spectest.js
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
