<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90389 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Desktop Canary (Linux)", "Publish MCP Registry")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Desktop Canary (Linux) (`.github/workflows/test-linux-app.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42567226797 — dark (conclusion: `failure`), 2026-11-09 05:25 UTC
- Dark since: 2026-11-09 05:25 UTC (first run of the current streak)
- Job / step: `test-linux-app` → `Build Tauri app`
- Likely cause: Command "npm ["run","tauri","build"]" failed with exit code 1

<details><summary>End of the job log</summary>

```
warning: `world-monitor` (bin "world-monitor") generated 1 warning (run `cargo fix --bin "world-monitor" -p world-monitor` to apply 1 suggestion)
    Finished `release` profile [optimized] target(s) in 1m 00s
       Built application at: /home/runner/work/worldmonitor/worldmonitor/src-tauri/target/release/world-monitor
        Info Patching /home/runner/work/worldmonitor/worldmonitor/src-tauri/target/release/world-monitor with bundle type information: appimage
 Downloading https://github.com/tauri-apps/binary-releases/releases/download/apprun-old/AppRun-x86_64
failed to bundle project `http status: 504`
       Error failed to bundle project `http status: 504`
##[error]Command "npm ["run","tauri","build"]" failed with exit code 1
```

</details>

### Publish MCP Registry (`.github/workflows/publish-mcp-registry.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42568863963 — dark (conclusion: `failure`), 2026-11-09 05:42 UTC
- Dark since: 2026-11-09 05:42 UTC (first run of the current streak)
- Job / step: `publish` → `Install mcp-publisher`
- Likely cause: curl: (22) The requested URL returned error: 504

<details><summary>End of the job log</summary>

```
node: v24.22.2
npm: 11.19.1
yarn: 1.22.22
curl: (22) The requested URL returned error: 504
curl: (22) The requested URL returned error: 504
curl: (22) The requested URL returned error: 504
curl: (22) The requested URL returned error: 504
##[error]Process completed with exit code 22.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
