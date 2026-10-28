<!-- dark-draft: webpack/webpack -->
<!-- draft-state: resolved -->
# Upstream issue draft: webpack/webpack

- **Status:** resolved — lit again (2026-10-28); nothing to file
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65970 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/40537384065 — dark (conclusion: `failure`), 2026-10-27 16:05 UTC
- Dark since: 2026-10-27 16:04 UTC (first run of the current streak)
- Job / step: `syntax-equivalence` → `Install the pinned browser`
- Likely cause: The action 'Install the pinned browser' has timed out after 40 minutes.

<details><summary>End of the job log</summary>

```
Get:116 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 libinstpatch-1.0-2 amd64 1.1.7-1.1 [253 kB]
Get:117 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libjack-jackd2-0 amd64 1.9.22~dfsg-5build1 [294 kB]
Get:118 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libwebrtc-audio-processing-1-3 amd64 1.3-3build2 [416 kB]
Get:119 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libspa-0.2-modules amd64 1.6.2-1ubuntu1.2 [1163 kB]
Get:120 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libpipewire-0.3-0t64 amd64 1.6.2-1ubuntu1.2 [302 kB]
Get:121 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 libsdl3-0 amd64 3.4.2+ds-1ubuntu1 [1155 kB]
Get:122 http://azure.archive.ubuntu.com/ubuntu resolute/universe amd64v3 timgm6mb-soundfont all 1.3-5build1 [5577 kB]
##[error]The action 'Install the pinned browser' has timed out after 40 minutes.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
