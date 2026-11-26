<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 11442 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- pages (`.github/workflows/pages.yml`): [issue #690](https://github.com/kajisho5/ffmpeg-skill/issues/690) "Use-case pages, the first five minutes, and a Japanese README"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/45867489572 — dark (conclusion: `failure`), 2026-11-26 17:24 UTC
- Dark since: 2026-11-26 17:24 UTC (first run of the current streak)
- Job / step: `test (ubuntu-latest, py3.10, 3/3)` → `Install ffmpeg (Linux)`
- Likely cause: E: Failed to fetch https://packages.microsoft.com/ubuntu/24.04/prod/dists/noble/InRelease  403  Forbidden [IP: 13.107.246.40 443]

<details><summary>End of the job log</summary>

```
Get:15 http://us-east-2.ec2.archive.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1233 kB]
Get:16 http://us-east-2.ec2.archive.ubuntu.com/ubuntu noble-security/universe Translation-en [249 kB]
Get:17 http://us-east-2.ec2.archive.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [1842 kB]
Get:18 http://us-east-2.ec2.archive.ubuntu.com/ubuntu noble-security/restricted Translation-en [429 kB]
Reading package lists...
E: Failed to fetch https://packages.microsoft.com/ubuntu/24.04/prod/dists/noble/InRelease  403  Forbidden [IP: 13.107.246.40 443]
E: The repository 'https://packages.microsoft.com/ubuntu/24.04/prod noble InRelease' is no longer signed.
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
