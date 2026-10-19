<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 9813 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39151580311 — dark (conclusion: `cancelled`), 2026-10-18 17:52 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Recommended packages:
  ipxe-qemu-256k-compat-efi-roms qemu-system-gui qemu-system-modules-spice
  qemu-system-modules-opengl qemu-block-extra cpu-checker
The following NEW packages will be installed:
  ipxe-qemu libbrlapi0.8 libcacard0 libdaxctl1 libfdt1 libndctl6 libpcsclite1
  libpmem1 librdmacm1t64 liburing2 libusbredirparser1t64 ovmf
  qemu-system-common qemu-system-data qemu-system-x86 qemu-utils seabios
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
