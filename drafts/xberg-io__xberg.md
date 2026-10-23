<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9440 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- CI Rust (`.github/workflows/ci-rust.yaml`): [issue #2126](https://github.com/xberg-io/xberg/issues/2126) "release: publish 1.3.11 after upstream ZIP fixes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Integrations", "CI E2E", "CI Lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39909818102 — dark (conclusion: `cancelled`), 2026-10-23 06:09 UTC
- Dark since: 2026-10-23 06:09 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling jotdown v0.10.0
   Compiling minijinja v3.0.2
   Compiling org v0.3.1
   Compiling similar v3.2.0
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39909818204 — dark (conclusion: `cancelled`), 2026-10-23 06:09 UTC
- Dark since: 2026-10-23 06:09 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xberg-libheif v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-libheif)
   Compiling dbase v0.8.0
   Compiling v_htmlescape v0.17.0
   Compiling biblib v0.10.0
   Compiling biblatex v0.12.0
   Compiling bitvec v1.1.1
   Compiling lofty v0.25.4
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39909818447 — dark (conclusion: `cancelled`), 2026-10-23 06:09 UTC
- Dark since: 2026-10-23 06:09 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Set up Elixir`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
+ web_socket_channel 3.0.3
+ webkit_inspection_protocol 1.2.1
+ yaml 3.1.4
Changed 72 dependencies!
##[start-action display=Normalize ImageOS for unsupported runner labels;id=__xberg-io_actions_3.__run]
##[end-action id=__xberg-io_actions_3.__run;outcome=success;conclusion=success;duration_ms=21]
##[start-action display=Setup Beam;id=__xberg-io_actions_3.__erlef_setup-beam]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
