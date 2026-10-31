<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7714 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/41122234694 — dark (conclusion: `failure`), 2026-10-30 20:19 UTC
- Dark since: 2026-10-27 20:07 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (Observational)` → `Run full default-tags module suite`
- Likely cause: {"Time":"2026-10-30T20:29:48.7697909Z","Action":"fail","Package":"github.com/Gentleman-Programming/engram/v3/plugin","Elapsed":369.69}

<details><summary>End of the job log</summary>

```
go: downloading modernc.org/memory v1.12.1
go: downloading github.com/bahlo/generic-list-go v0.2.0
go: downloading github.com/buger/jsonparser v1.1.1
go: downloading github.com/mailru/easyjson v0.7.7
go: downloading golang.org/x/sync v0.22.0
go: downloading github.com/xo/terminfo v0.0.0-20220910002029-abceb7e1c41e
go: downloading github.com/remyoudompheng/bigfft v0.0.0-20230129092748-24d4a6f8daec
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
