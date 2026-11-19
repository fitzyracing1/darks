<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90934 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Status Page Monitor" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Status Page Monitor** workflow (`.github/workflows/status-page-monitor.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44522975786 — dark (conclusion: `failure`), 2026-11-19 12:20 UTC
- Dark since: 2026-11-19 12:20 UTC (first run of the current streak)
- Job / step: `monitor` → `Run npx playwright install --with-deps chromium`
- Likely cause: Error: Installation process exited with code: 100

<details><summary>End of the job log</summary>

```
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/x/xfonts-encodings/xfonts-encodings_1.0.5-0ubuntu3_all.deb  Could not wait for server fd - select (11: Resource temporarily unavailable) [IP: 91.189.91.81 …
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/x/xfonts-utils/xfonts-utils_7.7%2b7build1_amd64v3.deb  Could not wait for server fd - select (11: Resource temporarily unavailable) [IP: 91.189.91.81 443]
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/x/xfonts-cyrillic/xfonts-cyrillic_1.0.5%2bnmu1build1_all.deb  Could not wait for server fd - select (11: Resource temporarily unavailable) [IP: 91.189.…
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/x/xfonts-scalable/xfonts-scalable_1.0.3-1.3build1_all.deb  Could not wait for server fd - select (11: Resource temporarily unavailable) [IP: 91.189.91.…
E: Unable to fetch some archives, maybe run apt update or try with --fix-missing?
Failed to install browsers
Error: Installation process exited with code: 100
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
