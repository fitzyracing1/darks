<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9624 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495309 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45782178108 — dark (conclusion: `failure`), 2026-11-26 08:19 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   48G   97G  33% /
Cargo environment:
cargo 1.100.0 (3acc79c0c 2026-11-05)
rustc 1.100.0 (0ef1bc386 2026-11-09)
Finished in 14860.63s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45962348767 — dark (conclusion: `failure`), 2026-11-27 08:00 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (core)` → `Run API contract tests with schemathesis`
- Likely cause: Failed to establish a new connection: [Errno 111] Connection refused

<details><summary>End of the job log</summary>

```
━━━━━━━━━━━━━━━━━━━━
 ❌  Failed to load specification from http://localhost:8000/openapi.json after
 0.02s
 Schema Loading Error
 Connection failed
     Failed to establish a new connection: [Errno 111] Connection refused
Tip: Use `--wait-for-schema=NUM` to wait up to NUM seconds for schema availability.
##[error]Process completed with exit code 2.
```

</details>

### CI NLI Advisories (`.github/workflows/ci-nli-advisories.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45121504863 — dark (conclusion: `failure`), 2026-11-23 06:02 UTC
- Dark since: 2026-11-23 06:02 UTC (first run of the current streak)
- Job / step: `audit` → `Check current advisories against the leaf lock`
- Likely cause: [nli:audit] ERROR task failed

<details><summary>End of the job log</summary>

```
         ├── xet-core-structures v1.8.1
         │   ├── hf-xet v1.8.1 (*)
         │   ├── xet-client v1.8.1 (*)
         │   └── xet-data v1.8.1 (*)
         └── xet-data v1.8.1 (*)
advisories FAILED, bans ok, licenses ok, sources ok
[nli:audit] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45964081844 — dark (conclusion: `failure`), 2026-11-27 08:13 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: [e2e:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
     fwrite(STDERR, "  extension at $extPath reports version: $loadedVersion\n");
-    fwrite(STDERR, "  expected version: 1.5.3\n");
+    fwrite(STDERR, "  expected version: 1.5.4\n");
     fwrite(STDERR, "Rebuild it with:\n");
     fwrite(STDERR, "  cargo build --release -p xberg-php\n");
     exit(1);
[e2e:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45782178312 — dark (conclusion: `failure`), 2026-11-26 08:19 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: ok 809 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 808 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 809 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495194 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642041843 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
