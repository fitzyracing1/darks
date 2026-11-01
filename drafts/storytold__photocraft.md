<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 75570 · **Generated:** 2026-11-01T00:58:31.984Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Packaging lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41250150504 — dark (conclusion: `cancelled`), 2026-10-31 22:53 UTC
- Dark since: 2026-10-31 22:53 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Install Linux build dependencies`
- Likely cause: The job has exceeded the maximum execution time of 1h40m0s

<details><summary>End of the job log</summary>

```
Ign:11 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages
Ign:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en
Ign:13 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages
Ign:14 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en
Ign:15 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en
Get:4 https://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:5 https://archive.ubuntu.com/ubuntu noble-security InRelease [126 kB]
##[error]The operation was canceled.
```

</details>

### Packaging lint (`.github/workflows/packaging-lint.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41250150465 — dark (conclusion: `cancelled`), 2026-10-31 22:53 UTC
- Dark since: 2026-10-31 22:53 UTC (first run of the current streak)
- Job / step: `lint / lint` → `Run packaging lint`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
Ign:11 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages
Ign:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en
Ign:13 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages
Ign:14 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en
Ign:15 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en
Get:4 https://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:5 https://archive.ubuntu.com/ubuntu noble-security InRelease [126 kB]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
