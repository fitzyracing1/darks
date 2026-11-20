<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9602 · **Generated:** 2026-11-20T12:41:20.099Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44725309428 — dark (conclusion: `failure`), 2026-11-20 11:09 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: [docs:snippets:all] ERROR task failed

<details><summary>End of the job log</summary>

```
url_html_page_extract.md                                     rust/rust    PASS       compile 281262ms
url_recursive_document_urls.md                               rust/rust    PASS       compile 281262ms
url_remote_text_document.md                                  rust/rust    PASS       compile 281262ms
----------------------------------------------------------------------------------------------------
Checked at requested level: 709/1219 (58.2%) -- capability-capped 363, declared-capped 0, unavailable 0, downgraded 0, failed 0, skipped 0, errors 147 did not fully verify
Total: 1219  Passed: 1072  Downgraded: 0  Failed: 0  Skipped: 0  Errors: 147  Unavailable: 0
[docs:snippets:all] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44719407515 — dark (conclusion: `cancelled`), 2026-11-20 10:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling crc-fast v1.10.0
   Compiling xet-core-structures v1.8.1
   Compiling toml_parser v1.1.5+spec-1.1.0
   Compiling ort-sys v2.0.0-rc.15
   Compiling num v0.4.3
   Compiling web_atoms v0.3.0
   Compiling serde_with v3.24.0
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44719407478 — dark (conclusion: `cancelled`), 2026-11-20 10:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling xberg-cli v1.4.2 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling jotdown v0.10.0
   Compiling similar v3.2.1
   Compiling minijinja v3.1.0
   Compiling org v0.3.1
   Compiling clap_complete v4.6.12
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44719407470 — dark (conclusion: `cancelled`), 2026-11-20 10:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Build xberg test harness (ocr + static-embeddings, real MSVC link)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling libyaml-rs v0.3.0
   Compiling oorandom v11.1.5
   Compiling typed-arena v2.0.2
   Compiling daachorse v3.0.3
   Compiling pulldown-cmark-escape v0.11.0
   Compiling utf8-zero v0.8.1
   Compiling xet-data v1.8.1
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44711470031 — dark (conclusion: `failure`), 2026-11-20 09:31 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Run API contract tests with schemathesis`
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

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
