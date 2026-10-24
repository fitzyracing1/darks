<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65968 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/40004683425 — dark (conclusion: `failure`), 2026-10-23 18:36 UTC
- Dark since: 2026-10-23 15:35 UTC (first run of the current streak)
- Job / step: `syntax-equivalence (webkit)` → `Install the pinned browser`
- Likely cause: The action 'Install the pinned browser' has timed out after 40 minutes.

<details><summary>End of the job log</summary>

```
Get:112 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libevent-2.1-7t64 amd64 2.1.12-stable-10ubuntu0.2 [146 kB]
Get:113 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 libfaad2 amd64 2.11.2-1build1 [215 kB]
Get:114 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 libfarmhash0 amd64 0~git20190513.0d859a8-4 [13.2 kB]
Get:115 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libfftw3-single3 amd64 3.3.10-2fakesync1build3 [865 kB]
Get:116 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 libinstpatch-1.0-2 amd64 1.1.7-1.1 [253 kB]
Get:117 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libjack-jackd2-0 amd64 1.9.22~dfsg-5build1 [294 kB]
Get:118 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libwebrtc-audio-processing-1-3 amd64 1.3-3build2 [416 kB]
##[error]The action 'Install the pinned browser' has timed out after 40 minutes.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
