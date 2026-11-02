<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9512 · **Generated:** 2026-11-02T12:41:31.933Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI Lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41413729213 — dark (conclusion: `failure`), 2026-11-02 08:31 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: using 'chunks_exact' with a constant chunk size (crates/xberg/src/layout/models/pp_doclayout_v3/production_parity/png_identity_tests.rs:215)

<details><summary>End of the job log</summary>

```
    Checking criterion v0.8.2
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking dotenvy v0.15.7
error: very complex type used. Consider factoring parts into `type` definitions
##[error]   --> crates\xberg\src\layout\models\pp_doclayout_v3.rs:193:45
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41440399391 — dark (conclusion: `cancelled`), 2026-11-02 11:54 UTC
- Dark since: 2026-11-02 04:52 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Setup Elixir`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Action fetch /builds/otp/amd64/ubuntu-24.04/builds.txt failed for mirror https://cdn.hex.pm, with TypeError: fetch failed
getaddrinfo ENOTFOUND cdn.hex.pm
Waiting 18 seconds before trying again
getaddrinfo ENOTFOUND cdn.hex.pm
Waiting 18 seconds before trying again
Action install Erlang/OTP OTP-28.5.0.8 failed for mirror https://cdn.hex.pm, with Error: getaddrinfo ENOTFOUND cdn.hex.pm
[command]/usr/bin/tar zx --strip-components=1 --warning=no-unknown-keyword --overwrite -C /home/runner/work/_temp/5d2392f5-5514-4332-a440-b526e7d1b692 -f /home/runner/work/_temp/1f643bd7-75ca-49e9-9bc2-77ee013066bd
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
