<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21111 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "CI", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44360560930 — dark (conclusion: `cancelled`), 2026-11-18 17:36 UTC
- Dark since: 2026-11-18 09:27 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling async-executor v1.14.0
   Compiling async-broadcast v0.7.2
   Compiling ordered-stream v0.2.0
   Compiling rustc-hash v1.1.0
   Compiling xcursor v0.3.11
   Compiling hex v0.4.3
   Compiling xkeysym v0.2.1
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44352651921 — dark (conclusion: `cancelled`), 2026-11-18 16:54 UTC
- Dark since: 2026-11-18 09:29 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Post Run storytold/craft-common-actions/actions/rust-cache@main`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
(Use `node --trace-deprecation ...` to show where the warning was created)
... Cleaning D:\a\pdfcraft\pdfcraft\target ...
... Cleaning cargo registry (cache-all-crates: false) ...
... Cleaning cargo/bin ...
... Cleaning cargo git cache ...
... Saving cache ...
[command]"C:\Program Files\Git\usr\bin\tar.exe" --posix -cf cache.tzst --exclude cache.tzst -P -C D:/a/pdfcraft/pdfcraft --files-from manifest.txt --force-local --use-compress-program "zstd -T0"
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44360560917 — dark (conclusion: `cancelled`), 2026-11-18 17:36 UTC
- Dark since: 2026-11-18 17:36 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=725a39fca940f77149ffbb9c58eef405a16997bc#725a39fc)
   Compiling rfd v0.17.2
   Compiling pdfcraft v0.21.1 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft)
   Compiling pdfcraft-cli v0.21.1 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft-cli)
   Compiling edit-session v0.1.0-alpha.2 (D:\a\pdfcraft\pdfcraft\vendor\edit-session)
   Compiling uds_windows v1.2.1
   Compiling pdfcraft-automation v0.21.1 (D:\a\pdfcraft\pdfcraft\crates\automation)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
