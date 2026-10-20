<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 7303 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39347676524 — dark (conclusion: `failure`), 2026-10-20 00:26 UTC
- Dark since: 2026-10-19 06:16 UTC (first run of the current streak)
- Job / step: `build` → `Test the web app offline and across an update (headless Chrome)`
- Likely cause: error: launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec7c":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec…

<details><summary>End of the job log</summary>

```
2026-10-20T00:50:37.220250Z  INFO finished hook cargo
2026-10-20T00:50:37.220309Z  INFO applying new distribution
2026-10-20T00:50:37.221107Z  INFO ✅ success
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.10s
     Running `target/debug/xtask web-offline-test --site dist/web`
retry launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec7c":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec7…
error: launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec7c":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-b731806673adec…
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39347676710 — dark (conclusion: `failure`), 2026-10-20 00:26 UTC
- Dark since: 2026-10-19 23:14 UTC (first run of the current streak)
- Job / step: `Windows app startup` → `Start the app under different settings`
- Likely cause: | failed: default order, saved 8x anti-aliasing, saved 2x, backend preference dx12, damaged graphics.json,

<details><summary>End of the job log</summary>

```
FAIL: safe mode: no frame drawn: {"error":"no frame was presented (window hidden?); use ui.render","id":1,"ok":false}
Write-Error: C:\runner\_work\_temp\ab733728-7b26-497f-bc71-15aab5bb8c76.ps1:2
Line |
   2 |  tools/windows-startup-smoke.ps1 -Exe target/ci/solidcraft.exe
     |  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | failed: default order, saved 8x anti-aliasing, saved 2x, backend preference dx12, damaged graphics.json,
     | WGPU_BACKEND=dx12 with FXC, safe mode
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
