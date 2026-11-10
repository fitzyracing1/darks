<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7882 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Stable release gap audit")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/42573048789 — dark (conclusion: `failure`), 2026-11-09 06:26 UTC
- Dark since: 2026-11-09 06:26 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (Observational)` → `Run full default-tags module suite`
- Likely cause: {"Time":"2026-11-09T06:36:49.291401Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":411.727}

<details><summary>End of the job log</summary>

```
{"Time":"2026-11-09T06:36:49.2807627Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Output":"    hooks_quoting_test.go:87: checked 6 hook comm…
{"Time":"2026-11-09T06:36:49.2807627Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Output":"--- PASS: TestHooksJSONPluginRootIsQuoted (0.00s)…
{"Time":"2026-11-09T06:36:49.2807627Z","Action":"pass","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Elapsed":0}
{"Time":"2026-11-09T06:36:49.2807627Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\n"}
{"Time":"2026-11-09T06:36:49.291401Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\tgithub.com/Gentleman-Programming/engram/v3/plugin\t411.727s\n"}
{"Time":"2026-11-09T06:36:49.291401Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":411.727}
go: downloading golang.org/x/net v0.57.0
##[error]Process completed with exit code 1.
```

</details>

### Stable release gap audit (`.github/workflows/release-gap-audit.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/42593253704 — dark (conclusion: `failure`), 2026-11-09 09:25 UTC
- Dark since: 2026-11-09 09:25 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: ℹ fail 0

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 95.553084
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.7.0.** 6 relevant path(s) changed on main: `"plugin/pi/index.ts"`, `"plugin/pi/test/index-source.test.mjs"`, `"plugin/pi/test/org-inheritance.test.mjs"`, `"plugin/pi/test/pinned-startu…
- **Go latest stable GitHub Release: gap after v3.7.0.** 23 relevant path(s) changed on main: `"cmd/engram/compatibility_fixture_test.go"`, `"cmd/engram/compatibility_test.go"`, `"cmd/engram/fixture_cleanup_windows_test…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
