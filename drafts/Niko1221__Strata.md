<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 42729 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Checks" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Checks** workflow (`.github/workflows/check.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/42771970599 — dark (conclusion: `failure`), 2026-11-10 06:57 UTC
- Dark since: 2026-11-09 10:12 UTC (first run of the current streak)
- Job / step: `Windows / Python tools/` → `tools/check`
- Likely cause: check: 0 passed, 1 failed, 0 not run (of 1 steps)

<details><summary>End of the job log</summary>

```
  py-tools           1  set STRATA_LIVE_HF=1 to read real headers from Hugging Face
  py-tools           1  reads the Linux sysfs paths
  py-tools           1  the lspci probe is Linux only (needs lspci and the sysfs layout)
  py-tools           1  POSIX paths
  py-tools           1  llama.cpp's ggml-vocab-qwen35.gguf test vectors are not here
check: 0 passed, 1 failed, 0 not run (of 1 steps)
scratch kept: D:\a\_temp\check
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
