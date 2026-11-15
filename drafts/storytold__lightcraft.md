<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15990 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43637077175 — dark (conclusion: `failure`), 2026-11-14 20:21 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 2/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 2's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.4G in 894 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   82G  44% /
warning: profraw/shard-2-12584-13058369011178764092_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 2 wrote a truncated or corrupt coverage profile: profraw/shard-2-12584-13058369011178764092_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43555779728 — dark (conclusion: `failure`), 2026-11-14 04:16 UTC
- Dark since: 2026-11-14 04:16 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p lightcraft-engine --lib'

<details><summary>End of the job log</summary>

```
noise 0.01: none 1180486 B, ZIP 1214459 B (+2.9 %), LZW 1136338 B (-3.7 %)
thread 'export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed' (115495) panicked at crates/engine/src/export/tests.rs:962:9:
noise 0.01: 16-bit ZIP 1214459 B is larger than uncompressed 1180486 B
failures:
    export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed
test result: FAILED. 1716 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 137.15s
error: test failed, to rerun pass `-p lightcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
