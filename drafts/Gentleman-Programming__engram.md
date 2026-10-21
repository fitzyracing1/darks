<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7494 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stable release gap audit" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stable release gap audit** workflow (`.github/workflows/release-gap-audit.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/39231641848 — dark (conclusion: `failure`), 2026-10-19 09:38 UTC
- Dark since: 2026-10-19 09:38 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: ℹ fail 0

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 75.185217
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.4.2.** 30 relevant path(s) changed on main: `".github/workflows/publish-pi.yml"`, `"plugin/pi/index.ts"`, `"plugin/pi/memory-tool-chrome.js"`, `"plugin/pi/package.json"`, `"plugin/pi/r…
- **Go latest stable GitHub Release: gap after v3.4.0.** 141 relevant path(s) changed on main: `".github/workflows/release.yml"`, `"cmd/engram/capture_project_provenance_test.go"`, `"cmd/engram/compatibility_test.go"`, …
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
