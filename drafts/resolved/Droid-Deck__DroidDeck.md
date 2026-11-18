<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-11-18); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 20680 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/44247664882 — dark (conclusion: `failure`), 2026-11-18 05:56 UTC
- Dark since: 2026-11-17 22:37 UTC (first run of the current streak)
- Job / step: `announce` → `Run actions/create-github-app-token@v2`
- Likely cause: Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)

<details><summary>End of the job log</summary>

```
Failed to create token for "DroidDeck-CI" (attempt 1): Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
Failed to create token for "DroidDeck-CI" (attempt 2): Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
Failed to create token for "DroidDeck-CI" (attempt 3): Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
Failed to create token for "DroidDeck-CI" (attempt 4): Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
RequestError [HttpError]: Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
    at fetchWrapper (/home/runner/work/_actions/actions/create-github-app-token/v2/dist/main.cjs:46271:26)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
##[error]Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
