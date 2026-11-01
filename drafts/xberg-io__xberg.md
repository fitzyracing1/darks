<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9491 · **Generated:** 2026-11-01T00:58:31.984Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41232653037 — dark (conclusion: `failure`), 2026-10-31 19:06 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G  142G  2.8G  99% /
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 5331.82s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41247380468 — dark (conclusion: `cancelled`), 2026-10-31 22:15 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `E2E (java)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling tempfile v3.27.0
   Compiling zune-jpeg v0.5.15
   Compiling derive_builder_core v0.20.2
   Compiling futures v0.3.34
   Compiling phf_codegen v0.14.0
   Compiling symphonia-core v0.6.1
   Compiling bstr v1.13.1
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41247380742 — dark (conclusion: `failure`), 2026-10-31 22:15 UTC
- Dark since: 2026-10-31 17:19 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: [e2e:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
 #    Do NOT spawn our own server.
-# 2. Standalone mode (direct `mix test` / `mise run elixir:smoke`): Build the
+# 2. Standalone mode (`mix test` run directly or from a `mise run` task): Build the
 #    mock-server binary if it is missing, then spawn it, capture its URL, and
 #    let it run for the duration of the test suite.
 mock_server_bin = Path.expand("../../rust/target/release/mock-server", __DIR__)
[e2e:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
