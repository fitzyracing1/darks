<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 19157 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/41964542130 — dark (conclusion: `failure`), 2026-11-05 03:55 UTC
- Dark since: 2026-11-04 23:01 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Unit + integration tests`
- Likely cause: error: could not compile 'xerj-api' (test "index_pattern_mid_wildcard") due to 1 previous error

<details><summary>End of the job log</summary>

```
  = note: some arguments are omitted. use `--verbose` to show all linker arguments
  = note: PLEASE submit a bug report to https://github.com/llvm/llvm-project/issues/ and include the crash backtrace and instructions to reproduce the bug.
          Stack dump without symbol names (ensure you have llvm-symbolizer in your PATH or set the environment var `LLVM_SYMBOLIZER_PATH` to point to it):
          0  libLLVM.so.22.1-rust-1.97.1-stable 0x00007f7b17f4cc07 llvm::sys::PrintStackTrace(llvm::raw_ostream&, int) + 39
          1 collect2: fatal error: ld terminated with signal 7 [Bus error], core dumped
          compilation terminated.
error: could not compile `xerj-api` (test "index_pattern_mid_wildcard") due to 1 previous error
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
