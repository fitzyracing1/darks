<!-- dark-draft: rollup/rollup -->
<!-- draft-state: ready -->
# Upstream issue draft: rollup/rollup

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rollup/rollup/issues/new
- **Stars:** 26300 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on master since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/build-and-tests.yml`) on `master` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/rollup/rollup/actions/runs/42464172705 — dark (conclusion: `failure`), 2026-11-08 08:44 UTC
- Dark since: 2026-11-08 08:15 UTC (first run of the current streak)
- Job / step: `Build wasm` → `Build (Matrix override)`
- Likely cause: Caused by: failed to download from https://github.com/WebAssembly/binaryen/releases/download/version_130/binaryen-version_130-x86_64-linux.tar.gz

<details><summary>End of the job log</summary>

```
   Installed package `wasm-bindgen-cli v0.2.130` (executables `wasm-bindgen`, `wasm-bindgen-test-runner`, `wasm2es6js`)
warning: be sure to add `/home/runner/.cache/.wasm-pack/.wasm-bindgen-cargo-install-0.2.130-pid2857/bin` to your PATH to be able to run the installed binaries
warning: the `target_features` custom section is missing, likely due to `strip = true`, so wasm-bindgen cannot detect which Wasm features are enabled. Avoid `strip = true` and run `wasm-opt` on the wasm-bindgen output i…
Error: failed to download from https://github.com/WebAssembly/binaryen/releases/download/version_130/binaryen-version_130-x86_64-linux.tar.gz
To disable `wasm-opt`, add `wasm-opt = false` to your package metadata in your `Cargo.toml`.
Caused by: failed to download from https://github.com/WebAssembly/binaryen/releases/download/version_130/binaryen-version_130-x86_64-linux.tar.gz
To disable `wasm-opt`, add `wasm-opt = false` to your package metadata in your `Cargo.toml`.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rollup!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
