<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: resolved -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7729 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/41324367581 — dark (conclusion: `failure`), 2026-11-01 16:03 UTC
- Dark since: 2026-11-01 06:07 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (Observational)` → `Run full default-tags module suite`
- Likely cause: {"Time":"2026-11-01T16:14:16.5391196Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":370.166}

<details><summary>End of the job log</summary>

```
{"Time":"2026-11-01T16:14:16.5264558Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Output":"--- PASS: TestHooksJSONPluginRootIsQuoted (0.00s)…
{"Time":"2026-11-01T16:14:16.5264558Z","Action":"pass","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Test":"TestHooksJSONPluginRootIsQuoted","Elapsed":0}
{"Time":"2026-11-01T16:14:16.5264558Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\n"}
{"Time":"2026-11-01T16:14:16.5391196Z","Action":"output","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Output":"FAIL\tgithub.com/Gentleman-Programming/engram/v3/plugin\t370.166s\n"}
{"Time":"2026-11-01T16:14:16.5391196Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":370.166}
{"Time":"2026-11-01T16:14:23.6010913Z","Action":"pass","Package":"github.com/Gentleman-Programming/engram/v3/internal/store","Elapsed":447.213}
go: downloading golang.org/x/net v0.57.0
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
