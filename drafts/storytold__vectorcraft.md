<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10298 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Windows ARM64", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39654089453 — dark (conclusion: `cancelled`), 2026-10-21 18:35 UTC
- Dark since: 2026-10-17 18:48 UTC (first run of the current streak)
- Likely cause: run cancelled

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39654089579 — dark (conclusion: `cancelled`), 2026-10-21 18:35 UTC
- Dark since: 2026-10-21 17:25 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
##[start-action display=Install WiX;id=__storytold_craft-common-actions.__run]
You can invoke the tool using the following command: wix
Tool 'wix' (version '5.0.2') was successfully installed.
##[end-action id=__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=11173]
VectorCraft 0.14.0 for Windows arm64 (aarch64-pc-windows-msvc)
==> cargo build (aarch64-pc-windows-msvc)
    Updating crates.io index
##[error]The operation was canceled.
```

</details>

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39654088833 — dark (conclusion: `cancelled`), 2026-10-21 18:35 UTC
- Dark since: 2026-10-21 18:35 UTC (first run of the current streak)
- Job / step: `affinity3` → `Parse every file and freeze actual Affinity 3 feature retention`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling regex-syntax v0.8.11
   Compiling proptest v1.12.0
   Compiling zerocopy-derive v0.8.63
   Compiling half v2.7.1
   Compiling tiff v0.11.3
   Compiling image v0.25.10
   Compiling vectorcraft-affinity v0.14.0 (/home/runner/work/vectorcraft/vectorcraft/crates/affinity)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
