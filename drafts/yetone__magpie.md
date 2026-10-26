<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 21796 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/40278827704 — dark (conclusion: `failure`), 2026-10-26 06:16 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Job / step: `test (ubuntu-latest)` → `Install GTK and WebKitGTK`
- Likely cause: The action 'Install GTK and WebKitGTK' has timed out after 15 minutes.

<details><summary>End of the job log</summary>

```
Get:73 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libgstreamer-gl1.0-0 amd64 1.28.2-1ubuntu0.1 [231 kB]
Get:74 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libharfbuzz-icu0 amd64 12.3.2-2 [11.8 kB]
Get:75 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libhyphen0 amd64 2.8.8-7build4 [26.7 kB]
Get:76 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libsecret-common all 0.21.7-2build1 [5608 B]
Get:77 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libsecret-1-0 amd64 0.21.7-2build1 [119 kB]
Get:78 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libwayland-server0 amd64 1.24.0-2 [36.0 kB]
Get:79 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libwebkit2gtk-4.1-0 amd64 2.52.6-0ubuntu0.26.04.1 [25.7 MB]
##[error]The action 'Install GTK and WebKitGTK' has timed out after 15 minutes.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
