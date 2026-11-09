<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-11-09); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20041 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Windows ARM64", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42542462588 — dark (conclusion: `cancelled`), 2026-11-09 00:51 UTC
- Dark since: 2026-11-09 00:29 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Cache hit for: freebsd-15.1-2.2.8-amd64-v3
Received 301989888 of 1023108531 (29.5%), 288.0 MBs/sec
Received 629145600 of 1023108531 (61.5%), 300.0 MBs/sec
Received 939524096 of 1023108531 (91.8%), 298.7 MBs/sec
Received 1023108531 of 1023108531 (100.0%), 301.9 MBs/sec
Cache Size: ~976 MB (1023108531 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/2c56d492-1d50-41c5-9234-50e1a3620639/cache.tzst -P -C /home/runner/work/pdfcraft/pdfcraft --use-compress-program unzstd
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42542462685 — dark (conclusion: `cancelled`), 2026-11-09 00:51 UTC
- Dark since: 2026-11-09 00:29 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Run Swatinem/rust-cache@d1527c8f67ef9af357290475d4af4b0fab8f12e0`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
binary: rustc
commit-hash: 58cf8f9c35b355199727627d07ae34a4e2846d67
commit-date: 2026-10-13
host: x86_64-pc-windows-msvc
release: 1.99.1
LLVM version: 23.1.1
##[end-action id=__dtolnay_rust-toolchain.__run_10;outcome=success;conclusion=success;duration_ms=90]
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42542511027 — dark (conclusion: `cancelled`), 2026-11-09 00:52 UTC
- Dark since: 2026-11-09 00:29 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
