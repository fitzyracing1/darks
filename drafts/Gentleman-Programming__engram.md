<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 8229 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Stable release gap audit", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Stable release gap audit (`.github/workflows/release-gap-audit.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/43840382777 — dark (conclusion: `failure`), 2026-11-16 09:30 UTC
- Dark since: 2026-11-09 09:25 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: - **Go latest stable GitHub Release: gap after v3.7.2.** 15 relevant path(s) changed on main: '"cmd/engram/hook_claude.go"', '"cmd/engram/hook_claude_context.go"', '"cmd/engram/hook_claude_context_test.go"', '"cmd/engra…

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 108.716235
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.8.0.** 5 relevant path(s) changed on main: `"plugin/pi/index.ts"`, `"plugin/pi/runtime-contract.js"`, `"plugin/pi/test/index-source.test.mjs"`, `"plugin/pi/test/received-http-error.tes…
- **Go latest stable GitHub Release: gap after v3.7.2.** 15 relevant path(s) changed on main: `"cmd/engram/hook_claude.go"`, `"cmd/engram/hook_claude_context.go"`, `"cmd/engram/hook_claude_context_test.go"`, `"cmd/engra…
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/44152269204 — dark (conclusion: `failure`), 2026-11-17 18:51 UTC
- Dark since: 2026-11-17 18:51 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (Observational)` → `Run full default-tags module suite`
- Likely cause: {"Time":"2026-11-17T19:06:51.4175331Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":440.069}

<details><summary>End of the job log</summary>

```
{"Time":"2026-11-17T19:06:51.4076132Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Output":"    hooks_quoting_test.go:87: checked 6 hook comm…
{"Time":"2026-11-17T19:06:51.4076132Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Output":"--- PASS: TestHooksJSONPluginRootIsQuoted (0.00s)…
{"Time":"2026-11-17T19:06:51.4076132Z","Action":"pass","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Elapsed":0}
{"Time":"2026-11-17T19:06:51.4076132Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\n"}
{"Time":"2026-11-17T19:06:51.4175331Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\tgithub.com/Gentleman-Programming/engram/v3/plugin\t440.069s\n"}
{"Time":"2026-11-17T19:06:51.4175331Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":440.069}
go: downloading golang.org/x/net v0.57.0
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
