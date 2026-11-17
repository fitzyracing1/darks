<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11840 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
