<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78219 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/40819536349 — dark (conclusion: `failure`), 2026-10-29 04:45 UTC
- Dark since: 2026-10-29 04:45 UTC (first run of the current streak)
- Job / step: `build-wheel-windows` → `Build wheel (fast CI cargo profile)`
- Likely cause: A device which does not exist was specified. : 'D:\a\_temp\_runner_file_commands\add_path_25f340a1-5492-4719-90c3-a1075c8af9bd'

<details><summary>End of the job log</summary>

```
warning: build failed, waiting for other jobs to finish...
error: could not compile `encoding_rs` (lib) due to 1 previous error
error: could not compile `image` (lib) due to 1 previous error
error: could not compile `tokenizers` (lib) due to 1 previous error
💥 maturin failed
  Caused by: Failed to build a native library through cargo
  Caused by: Cargo build finished with "exit code: 101": `"cargo" "rustc" "--profile" "ci" "--features" "extension-module" "--message-format" "json-render-diagnostics" "--manifest-path" "D:\\a\\headroom\\headroom\\crate…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
