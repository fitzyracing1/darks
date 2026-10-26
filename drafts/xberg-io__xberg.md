<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9448 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Lint", "CI E2E", "CI Rust")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221620074 — dark (conclusion: `failure`), 2026-10-25 18:31 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
      of which 321 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 344 above)
    14 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 8390 file(s) opened, 599 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
task: Failed to run task "alef:verify": exit status 1
##[error]exit status 1
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221619737 — dark (conclusion: `failure`), 2026-10-25 18:31 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `E2E (csharp)` → `Setup .NET`
- Likely cause: Failed to install dotnet, exit code: 1. dotnet_install: Error: Could not find '.NET Core SDK' with version = 10.0.403

<details><summary>End of the job log</summary>

```
dotnet-install: Download attempt #1 has failed: 409 Unable to download https://dotnetorigin.blob.core.windows.net/dotnet/Sdk/10.0.403/dotnet-sdk-10.0.403-linux-x64.tar.gz. Returned HTTP status code: 409.
dotnet-install: Attempt #2 will start in 10 seconds.
dotnet-install: Download attempt #2 has failed: 409 Unable to download https://dotnetorigin.blob.core.windows.net/dotnet/Sdk/10.0.403/dotnet-sdk-10.0.403-linux-x64.tar.gz. Returned HTTP status code: 409.
dotnet-install: Attempt #3 will start in 20 seconds.
dotnet-install: Failed to download aka.ms link 'https://dotnetorigin.blob.core.windows.net/dotnet/Sdk/10.0.403/dotnet-sdk-10.0.403-linux-x64.tar.gz': 409 Unable to download https://dotnetorigin.blob.core.windows.net/dot…
dotnet_install: Error: Could not find `.NET Core SDK` with version = 10.0.403
dotnet_install: Error: Refer to: https://aka.ms/dotnet-os-lifecycle for information on .NET Core support
##[error]Failed to install dotnet, exit code: 1. dotnet_install: Error: Could not find `.NET Core SDK` with version = 10.0.403
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221619697 — dark (conclusion: `failure`), 2026-10-25 18:31 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-latest)` → `Run tests`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
Collecting diagnostic information...
Disk space:
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   266Gi    32Gi    90%    2.1M  334M    1%   /System/Volumes/Data
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
