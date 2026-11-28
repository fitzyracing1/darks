<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12148 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/46076907612 — dark (conclusion: `cancelled`), 2026-11-27 22:29 UTC
- Dark since: 2026-11-27 22:28 UTC (first run of the current streak)
- Job / step: `gate / cache warm (ubuntu-24.04)` → `Gate`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
   Compiling craft-stream-codecs v0.1.0 (https://github.com/storytold/craft-libs?rev=b0d422cf0c23baccdaca314b916458a89c0952e0#b0d422cf)
   Compiling subsetter v0.2.6
   Compiling icu_segmenter v2.3.0
   Compiling vectorcraft-doc v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/doc)
   Compiling craft v0.1.0 (https://github.com/storytold/craft-libs?rev=b0d422cf0c23baccdaca314b916458a89c0952e0#b0d422cf)
   Compiling vello_cpu v0.2.0
   Compiling craft-proof v0.1.0 (https://github.com/storytold/craft-libs?rev=b0d422cf0c23baccdaca314b916458a89c0952e0#b0d422cf)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/46076865750 — dark (conclusion: `cancelled`), 2026-11-27 22:28 UTC
- Dark since: 2026-11-27 22:28 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
