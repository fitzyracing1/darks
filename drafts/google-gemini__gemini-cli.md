<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108606 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Release: Nightly", "Memory Tests: Nightly", "Performance Tests: Nightly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release: Nightly (`.github/workflows/release-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40793711761 — dark (conclusion: `failure`), 2026-10-29 00:23 UTC
- Dark since: 2026-10-29 00:23 UTC (first run of the current streak)
- Job / step: `build-mac / Build Unsigned (x64)` → `Install dependencies`
- Likely cause: 1: 0x102c25058 node::AsyncHooks::FailWithCorruptedAsyncStack(double) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]

<details><summary>End of the job log</summary>

```
11: 0x1038424b1 uv__async_io [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
12: 0x103855ee3 uv__io_poll [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
13: 0x103842a30 uv_run [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
14: 0x102be5793 node::SpinEventLoopInternal(node::Environment*) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
15: 0x102d30ca3 node::NodeMainInstance::Run() [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
16: 0x102ca108d node::Start(int, char**) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
17: 0x2087721c8
##[error]Process completed with exit code 1.
```

</details>

### Memory Tests: Nightly (`.github/workflows/memory-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40805636489 — dark (conclusion: `failure`), 2026-10-29 02:19 UTC
- Dark since: 2026-10-29 02:19 UTC (first run of the current streak)
- Job / step: `Run Memory Usage Tests` → `Run Memory Tests`
- Likely cause: Tests  4 failed | 3 passed (7)

<details><summary>End of the job log</summary>

```
    228|           `  Measured:  ${formatMB(result.finalHeapUsed)} heap used\n`…
 ❯ memory-usage.test.ts:311:17
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯
 Test Files  1 failed (1)
      Tests  4 failed | 3 passed (7)
   Start at  02:20:49
   Duration  106.16s (transform 1.85s, setup 0ms, collect 3.24s, tests 102.13s, environment 0ms, prepare 55ms)
##[error]Process completed with exit code 1.
```

</details>

### Performance Tests: Nightly (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40811110444 — dark (conclusion: `failure`), 2026-10-29 03:15 UTC
- Dark since: 2026-10-29 03:15 UTC (first run of the current streak)
- Job / step: `Run Performance Usage Tests` → `Run Performance Tests`
- Likely cause: 29|     throw new Error('Failed to download ripgrep binary');

<details><summary>End of the job log</summary>

```
 ❯ Vitest.initializeGlobalSetup ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9724:35
 ❯ ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9636:5
 ❯ Vitest.runFiles ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9666:10
 ❯ Vitest.start ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:9554:18
 ❯ startVitest ../node_modules/vitest/dist/chunks/cli-api.BkDphVBG.js:10510:8
 ❯ start ../node_modules/vitest/dist/chunks/cac.Cb-PYCCB.js:1412:15
 ❯ CAC.run ../node_modules/vitest/dist/chunks/cac.Cb-PYCCB.js:1391:2
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
