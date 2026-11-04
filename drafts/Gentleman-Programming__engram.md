<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7773 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Stable release gap audit", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Stable release gap audit (`.github/workflows/release-gap-audit.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/41420418718 — dark (conclusion: `failure`), 2026-11-02 09:24 UTC
- Dark since: 2026-11-02 09:24 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: ℹ fail 0

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 49.422417
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.4.2.** 49 relevant path(s) changed on main: `".github/workflows/publish-pi.yml"`, `"plugin/pi/.gitignore"`, `"plugin/pi/cli.js"`, `"plugin/pi/index.ts"`, `"plugin/pi/memory-tool-chrome…
- **Go latest stable GitHub Release: gap after v3.6.0.** 63 relevant path(s) changed on main: `"cmd/engram/autosync_e2e_test.go"`, `"cmd/engram/autosync_fake_store_test.go"`, `"cmd/engram/hook_claude.go"`, `"cmd/engram/…
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/41819019911 — dark (conclusion: `failure`), 2026-11-04 11:09 UTC
- Dark since: 2026-11-04 11:09 UTC (first run of the current streak)
- Job / step: `Windows Setup Test` → `Run Windows-specific setup test`
- Likely cause: github.com/mark3labs/mcp-go@v0.44.0: Get "https://proxy.golang.org/github.com/mark3labs/mcp-go/@v/v0.44.0.zip": net/http: TLS handshake timeout (internal/mcp/agent_contract.go:10)

<details><summary>End of the job log</summary>

```
go: downloading github.com/mattn/go-isatty v0.0.24
go: downloading modernc.org/mathutil v1.7.1
go: downloading github.com/dustin/go-humanize v1.0.1
go: downloading github.com/ncruces/go-strftime v1.0.0
go: downloading modernc.org/memory v1.12.1
go: downloading github.com/remyoudompheng/bigfft v0.0.0-20230129092748-24d4a6f8daec
# github.com/Gentleman-Programming/engram/v3/internal/setup
##[error]internal\mcp\consolidate.go:11:2: github.com/mark3labs/mcp-go@v0.44.0: Get "https://proxy.golang.org/github.com/mark3labs/mcp-go/@v/v0.44.0.zip": net/http: TLS handshake timeout
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
