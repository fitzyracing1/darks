<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9615 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI E2E", "CI Rust", "CI Docker", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45289705661 — dark (conclusion: `failure`), 2026-11-23 23:32 UTC
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45392191742 — dark (conclusion: `cancelled`), 2026-11-24 12:18 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run ./.github/actions/qualify-ocr-orientation`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test cached_context_changed_during_extraction_is_not_written ... ok
test cached_engine_bytes_recover_when_osd_is_installed_without_changing_the_configuration ... ok
test cached_file_recovers_when_osd_is_installed_without_changing_the_configuration ... ok
test caller_psm1_word_elements_on_an_upside_down_page_carry_no_internal_marker ... ok
test explicit_language_block_recovers_the_counterclockwise_source_grid ... ok
test explicit_language_block_recovers_the_upside_down_source_grid ... ok
test explicit_language_block_recovers_without_classifier_features ... ok
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45392191745 — dark (conclusion: `failure`), 2026-11-24 12:18 UTC
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45392191301 — dark (conclusion: `failure`), 2026-11-24 12:18 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
