<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9836 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/45035645771 — dark (conclusion: `failure`), 2026-11-22 14:57 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Cargo deny` → `Run cargo deny check`
- Likely cause: advisories FAILED, bans ok, licenses ok, sources ok

<details><summary>End of the job log</summary>

```
         │   └── openidea v0.1.50 (*)
         ├── tauri-plugin-opener v2.7.2
         │   └── openidea v0.1.50 (*)
         ├── tauri-plugin-single-instance v2.5.4
         │   └── openidea v0.1.50 (*)
         └── zbus-secret-service-keyring-store v1.0.1 (*)
advisories FAILED, bans ok, licenses ok, sources ok
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
