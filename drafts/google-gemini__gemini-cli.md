<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 107477 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Testing: CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Testing: CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/39510335880 — dark (conclusion: `failure`), 2026-10-20 22:44 UTC
- Dark since: 2026-10-20 22:44 UTC (first run of the current streak)
- Job / step: `Slow Test - Win - cli` → `Configure Windows Defender exclusions`
- Likely cause: Add-MpPreference: Operation failed with the following error: 0x800106ba. Operation: MpPreference. Target: ConfigListExtension.

<details><summary>End of the job log</summary>

```
Received 58720256 of 121812976 (48.2%), 55.8 MBs/sec
Received 121812976 of 121812976 (100.0%), 77.6 MBs/sec
Cache Size: ~116 MB (121812976 B)
[command]"C:\Program Files\Git\usr\bin\tar.exe" -xf C:/a/_temp/081bd932-32aa-4533-ae05-53de42b6c36e/cache.tzst -P -C C:/a/gemini-cli/gemini-cli --force-local --use-compress-program "zstd -d"
Cache restored successfully
Cache restored from key: node-cache-Windows-x64-npm-02311d8a86eed0868072dcea14eadbaad434f9734eb852cb8d22ff4edfc4c3b0
Add-MpPreference: Operation failed with the following error: 0x800106ba. Operation: MpPreference. Target: ConfigListExtension.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
