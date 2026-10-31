<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9481 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41199536053 — dark (conclusion: `cancelled`), 2026-10-31 12:05 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: run cancelled in job "Rust (macos-26)"

<details><summary>End of the job log</summary>

```
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   269Gi    29Gi    91%    2.1M  302M    1%   /System/Volumes/Data
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 5026.25s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41203549508 — dark (conclusion: `cancelled`), 2026-10-31 13:00 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling org v0.3.1
   Compiling minijinja v3.0.5
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling jotdown v0.10.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41215099611 — dark (conclusion: `cancelled`), 2026-10-31 15:29 UTC
- Dark since: 2026-10-31 12:05 UTC (first run of the current streak)
- Job / step: `Docker (cli)` → `Build Docker image`
- Likely cause: Canceling since a higher priority waiting request for ci-docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
#26 3325.5    Compiling lru v0.19.0
#26 3325.8    Compiling similar v3.2.1
#26 3342.2    Compiling minijinja v3.0.5
#26 3362.7    Compiling org v0.3.1
#26 3363.1    Compiling xberg-cli v1.4.0 (/build/crates/xberg-cli)
#26 3363.3    Compiling jotdown v0.10.0
#26 4391.5    Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
