<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9617 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45565767712 — dark (conclusion: `cancelled`), 2026-11-25 07:08 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `E2E (ruby)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45576027318 — dark (conclusion: `cancelled`), 2026-11-25 08:24 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)`
- Likely cause: cause not readable (GET /repos/xberg-io/xberg/actions/runs/45576027318/jobs?filter=latest&per_page=5)

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45565767373 — dark (conclusion: `failure`), 2026-11-25 07:08 UTC
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

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45576027400 — dark (conclusion: `failure`), 2026-11-25 08:24 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `Shipped license graphs` → `Check the third-party notice bundle is current`
- Likely cause: /home/runner/work/xberg/xberg/THIRD_PARTY_LICENSES.md is stale at line 185:

<details><summary>End of the job log</summary>

```
ok   xberg-swift (default): 0 errors, 66 warnings, 871 licenses accepted
ok   xberg-dart (default): 0 errors, 71 warnings, 871 licenses accepted
ok   xberg_nif (default): 0 errors, 65 warnings, 842 licenses accepted
ok   xberg-rb (default): 0 errors, 67 warnings, 852 licenses accepted
ok   xberg-cli --features mcp,mcp-http,api (windows no-heic): 0 errors, 59 warnings, 699 licenses accepted
checked 13 graphs; 14 license exceptions, each matched by at least one graph
[notices:check] $ python3 scripts/ci/generate-notices.py --check
##[error]/home/runner/work/xberg/xberg/THIRD_PARTY_LICENSES.md is stale at line 185:
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45576027289 — dark (conclusion: `cancelled`), 2026-11-25 08:24 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Download snap "snapd" (28332) from channel "stable"                            \
Download snap "snapd" (28332) from channel "stable"                            |
Download snap "snapd" (28332) from channel "stable"            0% 1.57MB/s 21.6s
Download snap "snapd" (28332) from channel "stable"            3% 4.36MB/s 7.61s
Download snap "snapd" (28332) from channel "stable"           14% 15.3MB/s 1.92s
Download snap "snapd" (28332) from channel "stable"           59% 48.9MB/s 285ms
Download snap "snapd" (28332) from channel "stable"          100% 51.5MB/s 0.0ns
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45576028097 — dark (conclusion: `cancelled`), 2026-11-25 08:24 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `AI governance validation`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45576259420 — dark (conclusion: `failure`), 2026-11-25 08:26 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: ok 800 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 799 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 800 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
