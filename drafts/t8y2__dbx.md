<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 31525 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/45797761521 — dark (conclusion: `failure`), 2026-11-26 10:03 UTC
- Dark since: 2026-11-26 10:02 UTC (first run of the current streak)
- Job / step: `rust-fmt-clippy` → `Install system dependencies`
- Likely cause: APT backup download failed (exit=100, timed_out=False)

<details><summary>End of the job log</summary>

```
  libwayland-doc gstreamer1.0-libav gstreamer1.0-plugins-bad gstreamer1.0-alsa
  libx11-doc libxcb-doc libxext-doc graphicsmagick accountsservice evince
  xdg-desktop-portal-gnome
The following NEW packages will be installed:
  bubblewrap bzip2-doc gir1.2-appindicator3-0.1 gir1.2-atk-1.0
  gir1.2-atspi-2.0 gir1.2-dbusmenu-glib-0.4 gir1.2-freedesktop
  gir1.2-freedesktop-dev gir1.2-gdkpixbuf-2.0 gir1.2-glib-2.0-dev
##[error]APT backup download failed (exit=100, timed_out=False)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
