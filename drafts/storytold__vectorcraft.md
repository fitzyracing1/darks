<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11847 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44006329901 — dark (conclusion: `failure`), 2026-11-17 02:54 UTC
- Dark since: 2026-11-17 02:54 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Set up the aarch64 cross toolchain`
- Likely cause: pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:aarch64/quarterly/All/Hashed/pygobject-common-3.58.0~2$pa5wseei.pkg: Not Found

<details><summary>End of the job log</summary>

```
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Exec SSH: [ -L "$HOME/work" ] || ln -s /home/runner/work $HOME/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
tar: Removing leading '/' from member names
pkg: https://pkgmir.geo.freebsd.org/FreeBSD:15:aarch64/quarterly/All/Hashed/pygobject-common-3.58.0~2$pa5wseei.pkg: Not Found
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44168885948 — dark (conclusion: `cancelled`), 2026-11-17 20:23 UTC
- Dark since: 2026-11-17 20:23 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
    Checking wgpu-core v30.0.1
    Checking craft-keymap v0.1.0 (https://github.com/storytold/craft-libs?rev=64b181977a0488e4d1e167bc5cc8cfededc2ed4b#64b18197)
    Checking craft-ui v0.1.0 (https://github.com/storytold/craft-libs?rev=64b181977a0488e4d1e167bc5cc8cfededc2ed4b#64b18197)
    Checking egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
    Checking wgpu v30.0.1
    Checking egui-wgpu v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
    Checking eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
