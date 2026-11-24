<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16360 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45252221610 — dark (conclusion: `failure`), 2026-11-23 19:45 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 5/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 5's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.4G in 875 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   82G  44% /
warning: profraw/shard-5-8994-15144663631034114290_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 5 wrote a truncated or corrupt coverage profile: profraw/shard-5-8994-15144663631034114290_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45331846184 — dark (conclusion: `cancelled`), 2026-11-24 05:14 UTC
- Dark since: 2026-11-24 05:14 UTC (first run of the current streak)
- Job / step: `windows-arm64 / install and run on ARM64` → `Install the MSI, check it, run it, uninstall it`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
SHA256 digest of downloaded artifact is 79110b478012fc0e584d6f3040d0810a6fcedff95276860e3625df4833955649
Artifact download completed successfully.
Total of 1 artifact(s) downloaded
Download artifact has finished successfully
ok C:\Users\runneradmin\AppData\Local\Programs\ArtCraft\LightCraft\lightcraft.exe (ARM64)
ok C:\Users\runneradmin\AppData\Local\Programs\ArtCraft\LightCraft\lightcraft-cli.exe (ARM64)
ok lightcraft-cli.exe --version: lightcraft-cli 0.21.1
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
