<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9621 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 12 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +9 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495309 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495298 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: The run was canceled by @Goldziher.

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495515 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
- Likely cause: The run was canceled by @Goldziher.

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

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495361 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `Shipped license graphs`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495147 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45782178668 — dark (conclusion: `failure`), 2026-11-26 08:19 UTC
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

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495301 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)`
- Likely cause: The run was canceled by @Goldziher.

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45627495194 — dark (conclusion: `cancelled`), 2026-11-25 13:49 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding`
- Likely cause: The run was canceled by @Goldziher.

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45642042236 — dark (conclusion: `cancelled`), 2026-11-25 15:09 UTC
- Dark since: 2026-11-25 13:49 UTC (first run of the current streak)
- Job / step: `docs / Build`
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
