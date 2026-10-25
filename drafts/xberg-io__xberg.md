<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9447 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Lint", "CI Integrations", "CI E2E", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221589926 — dark (conclusion: `cancelled`), 2026-10-25 18:30 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate benchmark scripts`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
OK
task: [benchmark:validate:scripts] python3 -m unittest tools/benchmark-harness/tests/test_mineru_extract.py
......
----------------------------------------------------------------------
Ran 6 tests in 0.019s
OK
task: [benchmark:validate:scripts] tools/benchmark-harness/tests/test_restore_corpus_cache.sh
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221589583 — dark (conclusion: `cancelled`), 2026-10-25 18:30 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Setting up php8.3-snmp (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-odbc (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-sybase (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-curl (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-imap (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-pgsql (8.3.6-0ubuntu0.24.04.13) ...
Setting up php8.3-intl (8.3.6-0ubuntu0.24.04.13) ...
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221589580 — dark (conclusion: `cancelled`), 2026-10-25 18:30 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Preparing to unpack .../26-php8.3-cgi_8.3.6-0ubuntu0.24.04.13_amd64.deb ...
Unpacking php8.3-cgi (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Preparing to unpack .../27-php8.3-bz2_8.3.6-0ubuntu0.24.04.13_amd64.deb ...
Unpacking php8.3-bz2 (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Preparing to unpack .../28-php8.3-bcmath_8.3.6-0ubuntu0.24.04.13_amd64.deb ...
Unpacking php8.3-bcmath (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Preparing to unpack .../29-php8.3-common_8.3.6-0ubuntu0.24.04.13_amd64.deb ...
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221589643 — dark (conclusion: `cancelled`), 2026-10-25 18:30 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Preparing to unpack .../27-php8.3-bz2_8.3.6-0ubuntu0.24.04.13_arm64.deb ...
Unpacking php8.3-bz2 (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Preparing to unpack .../28-php8.3-bcmath_8.3.6-0ubuntu0.24.04.13_arm64.deb ...
Unpacking php8.3-bcmath (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Preparing to unpack .../29-php8.3-common_8.3.6-0ubuntu0.24.04.13_arm64.deb ...
Unpacking php8.3-common (8.3.6-0ubuntu0.24.04.13) over (8.3.6-0ubuntu0.24.04.11) ...
Setting up php8.3-common (8.3.6-0ubuntu0.24.04.13) ...
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40221589764 — dark (conclusion: `cancelled`), 2026-10-25 18:30 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `Run xberg-io/actions/setup-rust@v1`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
warn: to install the active toolchain, use `rustup install` instead
warn: see <https://github.com/rust-lang/rustup/issues/4836> for more info
1.99.1-x86_64-unknown-linux-gnu (overridden by '/home/runner/work/xberg/xberg/rust-toolchain.toml')
info: component rustfmt is up to date
info: component clippy is up to date
info: component rust-src is up to date
info: downloading component llvm-tools
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
