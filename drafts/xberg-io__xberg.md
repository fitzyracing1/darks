<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9583 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 10 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +7 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750354 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750328 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750311 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750920 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Plugin bundle freshness`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750172 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `cargo ndk check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking lru v0.19.0
    Checking fs2 v0.4.3
   Compiling xberg-dart v1.4.0 (/home/runner/work/xberg/xberg/packages/dart/rust)
    Checking similar v3.2.1
    Checking org v0.3.1
    Checking jotdown v0.10.0
    Finished `dev` profile [unoptimized] target(s) in 4m 57s
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43454302041 — dark (conclusion: `cancelled`), 2026-11-13 15:36 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Docker (cli)` → `Fetch test_documents fixtures`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
fetched: fdcafeff1f7c21bc0ac0164c4a5c2f1463397f21ffdfe468e3b9560b9625324e
fetched: fe2befea29c1d04fb3b7569c777d604ea6e987f583dcaff4580edb75176d6517
fetched: ff71364af261de74ec7eac344c3fa23047ce4235526b3168609073b6a5a3da4f
fetched: ff5490d3ab2a13ff36e8e05cd5696970051d7ccbfd4a05d355c72fb1d0c153a7
fetched: fd68d213ffffdbf730d9fe76df362598f55338ff05aa289f4f0b3b9438587d07
fetched: fd3dd2ab72ab39969442736f778ffc89e279016a29ced1f9692d449aeb834877
fetched: fffa8137159d247dcf4984a13aba12451bcc7402bbe0bfbc7d93ff6d43689593
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43480491989 — dark (conclusion: `cancelled`), 2026-11-13 18:13 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

<details><summary>End of the job log</summary>

```
ok 468 ELF closure should copy transitive library bytes and set ORIGIN on every bundled artifact
ok 469 ELF closure should reject unresolved shared libraries even if ldd exits zero
ok 470 ELF closure should reject dependencies that still resolve outside the bundle
ok 471 ELF closure should allow host-provided Python symbols only after its loader probe succeeds
ok 472 ELF closure should reject a loader failure after ldd reports complete dependencies
ok 473 ELF closure should propagate failed RPATH rewriting before declaring a verified bundle
ok 474 ELF closure should reject a directory containing zero supported native artifacts
##[error]The operation was canceled.
```

</details>

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43454301775 — dark (conclusion: `cancelled`), 2026-11-13 15:36 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43454301856 — dark (conclusion: `cancelled`), 2026-11-13 15:36 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Decision log` → `Run xberg-io/actions/setup-mise@v1`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
Detected a mise lock file, running `mise install --locked`
[command]/home/runner/.local/share/mise/bin/mise install --locked github:Goldziher/adrlint
mise by @jdx – installing 1 tool
mise ✓ github:Goldziher/adrlint@0.4.1  986ms  adrlint-x86_64-unknown-linux-gnu.tar.gz
mise ████████████████ 1/1 · installed 1 tool in 987ms
[command]/usr/bin/tar --posix -cf cache.tzst --exclude cache.tzst -P -C /home/runner/work/xberg/xberg --files-from manifest.txt --use-compress-program zstdmt
Sent 42598400 of 64053029 (66.5%), 40.6 MBs/sec
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43481750975 — dark (conclusion: `cancelled`), 2026-11-13 18:20 UTC
- Dark since: 2026-11-13 18:13 UTC (first run of the current streak)
- Job / step: `Focused nli` → `Run exact regression tests`
- Likely cause: Canceling since a higher priority waiting request for ci-focused-pr-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling jotdown v0.10.0
   Compiling hex v0.4.3
   Compiling rustix v1.1.6
   Compiling log v0.4.35
   Compiling sha2 v0.11.1
   Compiling linux-raw-sys v0.12.1
   Compiling tempfile v3.27.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
