<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9626 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI E2E", "CI Rust", "CI NLI Advisories", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46136744670 — dark (conclusion: `cancelled`), 2026-11-28 10:46 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.2
   Compiling similar v3.2.1
   Compiling xberg-cli v1.5.5 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling minijinja v3.1.0
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling clap_complete v4.6.12
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46136744643 — dark (conclusion: `failure`), 2026-11-28 10:46 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust pdfium gating (no library)` → `Check with the pdfium engine compiled in`
- Likely cause: methods 'apply_furniture_filter' and 'drop_orphaned_tables' are never used (crates/xberg/src/types/internal.rs:468)

<details><summary>End of the job log</summary>

```
    Checking tokio-test v0.4.6
    Checking tar v0.4.46
    Checking qrcode v0.15.0
    Checking xberg-child-test v0.0.0 (/home/runner/work/xberg/xberg/crates/xberg/tests/support/child-process)
    Checking jpeg-encoder v0.7.1
    Checking dotenvy v0.15.7
error: methods `apply_furniture_filter` and `drop_orphaned_tables` are never used
##[error]   --> crates/xberg/src/types/internal.rs:468:19
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46142258787 — dark (conclusion: `failure`), 2026-11-28 11:57 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
      of which 324 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 347 above)
    15 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 10569 file(s) opened, 973 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46136744649 — dark (conclusion: `failure`), 2026-11-28 10:46 UTC
- Dark since: 2026-11-28 07:39 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr` → `Run exact regression tests`
- Likely cause: methods 'apply_furniture_filter' and 'drop_orphaned_tables' are never used (crates/xberg/src/types/internal.rs:468)

<details><summary>End of the job log</summary>

```
   Compiling tokio-test v0.4.6
   Compiling tar v0.4.46
   Compiling qrcode v0.15.0
   Compiling xberg-child-test v0.0.0 (/home/runner/work/xberg/xberg/crates/xberg/tests/support/child-process)
   Compiling dotenvy v0.15.7
   Compiling jpeg-encoder v0.7.1
error: methods `apply_furniture_filter` and `drop_orphaned_tables` are never used
##[error]   --> crates/xberg/src/types/internal.rs:468:19
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46136744667 — dark (conclusion: `cancelled`), 2026-11-28 10:46 UTC
- Dark since: 2026-11-28 07:39 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rawpointer v0.2.1
   Compiling typewit v1.15.2
   Compiling pastey v0.2.3
   Compiling const_panic v0.2.17
   Compiling chrono v0.4.45
   Compiling unicode-normalization v0.1.26
   Compiling image v0.25.10
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
