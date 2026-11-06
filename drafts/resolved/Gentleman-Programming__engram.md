<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: resolved -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** resolved — lit again (2026-11-06); nothing to file
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7813 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stable release gap audit" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stable release gap audit** workflow (`.github/workflows/release-gap-audit.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
