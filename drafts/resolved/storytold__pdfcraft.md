<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20321 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42973070127 — dark (conclusion: `cancelled`), 2026-11-11 06:31 UTC
- Dark since: 2026-11-10 20:37 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Get:4 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libpcsclite1 amd64 2.4.1-1 [24.6 kB]
Get:5 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libcacard0 amd64 1:2.8.1-2 [36.7 kB]
Get:6 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libdaxctl1 amd64 81-1ubuntu1 [22.7 kB]
Get:7 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libndctl6 amd64 81-1ubuntu1 [63.3 kB]
Get:8 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libpmem1 amd64 1.13.1-1.1ubuntu4 [80.1 kB]
Get:9 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 librdmacm1t64 amd64 61.0-2ubuntu3 [75.5 kB]
Get:10 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 libusbredirparser1t64 amd64 0.15.0-1build1 [16.8 kB]
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42973070197 — dark (conclusion: `cancelled`), 2026-11-11 06:31 UTC
- Dark since: 2026-11-11 06:31 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Check out craft-i18n`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  git switch -
Turn off this advice by setting config variable advice.detachedHead to false
HEAD is now at 575cfde Merge pull request #147 from storytold/fix/pdfcraft-menu-arrows
[command]"C:\Program Files\Git\bin\git.exe" log -1 --format=%H
575cfdef63227b14daf173b8cc87928bfdfa325e
[command]"C:\Program Files\Git\bin\git.exe" config --local --name-only --get-regexp core\.sshCommand
[command]"C:\Program Files\Git\bin\git.exe" submodule foreach --recursive "sh -c \"git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :\""
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
