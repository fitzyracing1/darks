<!-- dark-draft: iptv-org/iptv -->
<!-- draft-state: ready -->
# Upstream issue draft: iptv-org/iptv

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/iptv-org/iptv/issues/new
- **Stars:** 144168 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "update" workflow failing on master since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **update** workflow (`.github/workflows/update.yml`) on `master` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/iptv-org/iptv/actions/runs/43779061241 — dark (conclusion: `failure`), 2026-11-16 00:13 UTC
- Dark since: 2026-11-16 00:13 UTC (first run of the current streak)
- Job / step: `main` → `Check internal playlists`
- Likely cause: 4 problems (4 errors, 0 warnings)

<details><summary>End of the job log</summary>

```
streams/br.m3u
 136   error    "CazeTV.br" is on the blocklist due to claims of copyright holders (https://github.com/iptv-org/iptv/issues/6973)
streams/hn.m3u
 40    error    "DeportesTVC.hn" is on the blocklist due to claims of copyright holders (https://github.com/iptv-org/iptv/issues/6973)
 42    error    "DeportesTVC.hn" is on the blocklist due to claims of copyright holders (https://github.com/iptv-org/iptv/issues/6973)
 44    error    "DeportesTVC.hn" is on the blocklist due to claims of copyright holders (https://github.com/iptv-org/iptv/issues/6973)
4 problems (4 errors, 0 warnings)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining iptv!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
