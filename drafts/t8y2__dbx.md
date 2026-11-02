<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 28661 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/41497055641 — dark (conclusion: `cancelled`), 2026-11-02 18:04 UTC
- Dark since: 2026-11-02 16:36 UTC (first run of the current streak)
- Job / step: `frontend-typecheck` → `Type-check frontend`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Received 0 of 144173681 (0.0%), 0.0 MBs/sec
Received 121634816 of 144173681 (84.4%), 58.0 MBs/sec
Received 144173681 of 144173681 (100.0%), 54.0 MBs/sec
Cache Size: ~137 MB (144173681 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/67da83e0-15bb-449a-8388-a4856cbf6ee4/cache.tzst -P -C /home/runner/work/dbx/dbx --use-compress-program unzstd
Cache restored successfully
Cache restored from key: node-cache-Linux-x64-pnpm-f9f09fa9b90629b6dd784882f70b1417a89bfe0f0634c959fd1312c7b3526266
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
