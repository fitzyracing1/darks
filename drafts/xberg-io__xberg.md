<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9598 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "ADRs", "CI E2E", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44239908473 — dark (conclusion: `cancelled`), 2026-11-18 04:48 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (pdf-heuristic)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44229631351 — dark (conclusion: `cancelled`), 2026-11-18 03:19 UTC
- Dark since: 2026-11-17 08:05 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling candle-transformers v0.11.1
   Compiling notify v8.2.2
   Compiling image v0.24.9
   Compiling v_escape-base v1.0.0
   Compiling strum v0.27.2
   Compiling strum v0.28.0
   Compiling gcp_auth v0.12.7
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44239908451 — dark (conclusion: `cancelled`), 2026-11-18 04:48 UTC
- Dark since: 2026-11-17 20:14 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44239909131 — dark (conclusion: `cancelled`), 2026-11-18 04:48 UTC
- Dark since: 2026-11-17 22:54 UTC (first run of the current streak)
- Job / step: `Plugin bundle freshness` → `Verify generated plugin bundles are current`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
##[end-action id=__xberg-io_actions_2.__run_3;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Cache Go modules for the source build;id=__xberg-io_actions_2.__actions_cache]
##[end-action id=__xberg-io_actions_2.__actions_cache;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Build pinned AI-Rulez with static native dependencies;id=__xberg-io_actions_2.__run_4]
##[end-action id=__xberg-io_actions_2.__run_4;outcome=skipped;conclusion=skipped;duration_ms=0]
Cache not found for input keys: uv-Linux-3.15.2-36276d22c8b4d79f4653f6c316391020ab0f0b8375d1722017e054e704e2e55a, uv-Linux-3.15.2-
integration versions in sync with core 1.4.1
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44239908588 — dark (conclusion: `cancelled`), 2026-11-18 04:48 UTC
- Dark since: 2026-11-18 00:32 UTC (first run of the current streak)
- Job / step: `Docker (cli)` → `Build Docker image`
- Likely cause: Canceling since a higher priority waiting request for ci-docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
#27 809.4    Compiling utf8parse v0.2.2
#27 809.4    Compiling anstyle-parse v1.0.0
#27 813.6    Compiling alloc-stdlib v0.2.4
#27 813.7    Compiling stringprep v0.1.5
#27 815.1    Compiling transpose v0.2.3
#27 819.5    Compiling read-fonts v0.47.0
#27 851.2    Compiling candle-core v0.11.1
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
