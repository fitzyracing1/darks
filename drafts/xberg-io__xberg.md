<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9627 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI E2E", "CI Rust", "CI NLI Advisories", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46091241038 — dark (conclusion: `failure`), 2026-11-28 01:04 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `E2E (swift)` → `Run e2e tests (swift, instrumented)`
- Likely cause: [swift:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
[swift] Failed frontend command:
[swift] /usr/share/swift/usr/bin/swift-frontend -frontend -c /home/runner/work/xberg/xberg/packages/swift/Sources/Xberg/BridgeRegistrationOverloads.swift -primary-file /home/runner/work/xberg/xberg/packages/swift/Source…
[swift] error: Build failed
[swift] error: fatalError
ERROR test failed: swift — Command failed: cd packages/swift && swift test (env: LD_LIBRARY_PATH)
ERROR Command failed: cd packages/swift && swift test (env: LD_LIBRARY_PATH)
[swift:e2e] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46091240980 — dark (conclusion: `failure`), 2026-11-28 01:04 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Install system dependencies`
- Likely cause: Expected Tesseract pkg-config 5.5.4

<details><summary>End of the job log</summary>

```
CMake:
cmake version 4.5.1
✓ Set CMAKE=/opt/homebrew/bin/cmake in GITHUB_ENV
✓ Added cmake directory to GITHUB_PATH: /opt/homebrew/bin
Tesseract:
tesseract 5.5.5
Expected Tesseract pkg-config 5.5.4
##[error]Process completed with exit code 1.
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/46091241424 — dark (conclusion: `failure`), 2026-11-28 01:04 UTC
- Dark since: 2026-11-25 06:57 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
      of which 324 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 347 above)
    15 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 10557 file(s) opened, 973 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
