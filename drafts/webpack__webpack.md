<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66018 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow getting cancelled on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/45883525151 — dark (conclusion: `cancelled`), 2026-11-26 19:25 UTC
- Dark since: 2026-11-25 21:14 UTC (first run of the current streak)
- Job / step: `runtimes (deno)` → `Run yarn test:deno --maxWorkers=100% --ci`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
    at wasmStreamingCallback (ext:runtime_main/js/99_main.js:1:9042)
`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:
 TypeError: Failed to execute 'WebAssembly.compileStreaming': Argument 1 is not of type Response
    at makeException (ext:deno_webidl/00_webidl.js:1:1739)
    at Array.Response (ext:deno_webidl/00_webidl.js:1:14125)
    at handleWasmStreaming (ext:deno_fetch/26_fetch.js:2:7718)
    at wasmStreamingCallback (ext:runtime_main/js/99_main.js:1:9042)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
