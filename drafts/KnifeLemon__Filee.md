<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 21727 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41828632665 — dark (conclusion: `cancelled`), 2026-11-04 12:21 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Build Explorer menu extension`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Received 54525952 of 83785201 (65.1%), 47.6 MBs/sec
Received 83785201 of 83785201 (100.0%), 28.7 MBs/sec
Cache Size: ~80 MB (83785201 B)
[command]"C:\Program Files\Git\usr\bin\tar.exe" -xf C:/a/_temp/5f4e7182-9124-4f9b-8e4b-39af0e701b04/cache.tzst -P -C C:/a/Filee/Filee --force-local --use-compress-program "zstd -d"
Cache restored successfully
Cache restored from key: zig-0.16.0-x86_64-windows
build FileeExplorerMenu.dll 2.3.0 (arm64)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
