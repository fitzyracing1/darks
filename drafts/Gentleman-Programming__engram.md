<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7693 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Stable release gap audit", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Stable release gap audit (`.github/workflows/release-gap-audit.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/40301736593 — dark (conclusion: `failure`), 2026-10-26 09:43 UTC
- Dark since: 2026-10-26 09:43 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: ℹ fail 0

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 74.066302
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.4.2.** 49 relevant path(s) changed on main: `".github/workflows/publish-pi.yml"`, `"plugin/pi/.gitignore"`, `"plugin/pi/cli.js"`, `"plugin/pi/index.ts"`, `"plugin/pi/memory-tool-chrome…
- **Go latest stable GitHub Release: gap after v3.6.0.** 11 relevant path(s) changed on main: `"cmd/engram/main.go"`, `"cmd/engram/mcp_stdio_eof_test.go"`, `"cmd/engram/prompt_discard_test.go"`, `"internal/cloud/cloudst…
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/40769893442 — dark (conclusion: `failure`), 2026-10-28 21:11 UTC
- Dark since: 2026-10-27 20:07 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (Observational)` → `Run full default-tags module suite`
- Likely cause: {"Time":"2026-10-28T21:33:50.5601956Z","Action":"pass","Package":"github.com/Gentleman-Programming/engram/v3/tools/release-candidate","Test":"TestSourceEvidence/link_cannot_execute_source","Elapsed":0.54}

<details><summary>End of the job log</summary>

```
go: downloading github.com/mailru/easyjson v0.7.7
go: downloading github.com/xo/terminfo v0.0.0-20220910002029-abceb7e1c41e
go: downloading github.com/ncruces/go-strftime v1.0.0
go: downloading github.com/dustin/go-humanize v1.0.1
go: downloading modernc.org/memory v1.12.1
go: downloading modernc.org/mathutil v1.7.1
go: downloading github.com/remyoudompheng/bigfft v0.0.0-20230129092748-24d4a6f8daec
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
