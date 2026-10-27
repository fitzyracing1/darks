<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9453 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40478820302 — dark (conclusion: `failure`), 2026-10-27 09:10 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
    warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
    warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
    error: could not compile `xberg` (lib) due to 3 previous errors
----------------------------------------------------------------------------------------------------
Checked at requested level: 685/1219 (56.2%) -- capability-capped 363, declared-capped 0, unavailable 0, downgraded 0, failed 171, skipped 0, errors 0 did not fully verify
Total: 1219  Passed: 1048  Downgraded: 0  Failed: 171  Skipped: 0  Errors: 0  Unavailable: 0
task: Failed to run task "docs:snippets:all": exit status 1
##[error]exit status 1
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40469638017 — dark (conclusion: `cancelled`), 2026-10-27 07:51 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
   Compiling similar v3.2.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=similar CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/similar-3.2.0 C…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,class…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40472058001 — dark (conclusion: `cancelled`), 2026-10-27 08:13 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking similar v3.2.0
    Checking criterion v0.8.2
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking dotenvy v0.15.7
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40468355719 — dark (conclusion: `cancelled`), 2026-10-27 07:38 UTC
- Dark since: 2026-10-26 19:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40468355717 — dark (conclusion: `cancelled`), 2026-10-27 07:38 UTC
- Dark since: 2026-10-26 19:57 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking linux-raw-sys v0.12.1
    Checking httpdate v1.0.3
    Checking rawpointer v0.2.1
    Checking unicase v2.10.0
   Compiling crunchy v0.2.4
    Checking tower-layer v0.3.3
    Checking hyper v1.12.0
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872239 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-27 00:03 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
- Likely cause: The run was canceled by @Goldziher.

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40472794107 — dark (conclusion: `cancelled`), 2026-10-27 08:20 UTC
- Dark since: 2026-10-27 08:20 UTC (first run of the current streak)
- Job / step: `docs / Deploy`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40478819841 — dark (conclusion: `failure`), 2026-10-27 09:10 UTC
- Dark since: 2026-10-27 09:10 UTC (first run of the current streak)
- Job / step: `validate` → `Run xberg-io/agent-conventions/actions/context-exposure@6e7f6a6793ea7380b916367e10a8acd13c3afbc3`
- Likely cause: xberg/claude: 5224 start tokens, budget 4100

<details><summary>End of the job log</summary>

```
WARN  OpenCode needs a provider-qualified model (provider/model); omitting it so the agent inherits the session model agent=performance-engineer model=sonnet hint=set opencode_model in the agent frontmatter or defaults.…
WARN  OpenCode needs a provider-qualified model (provider/model); omitting it so the agent inherits the session model agent=security-auditor model=sonnet hint=set opencode_model in the agent frontmatter or defaults.mode…
WARN  OpenCode needs a provider-qualified model (provider/model); omitting it so the agent inherits the session model agent=test-writer model=sonnet hint=set opencode_model in the agent frontmatter or defaults.model_by_…
INFO  Generated files are up to date roots=1
expected configs=2; validated configs=2; tracked files checked=9576
##[end-action id=__xberg-io_actions_2.__run;outcome=success;conclusion=success;duration_ms=28686]
##[start-action display=Check context exposure;id=__xberg-io_agent-conventions.__run]
##[error]xberg/claude: 5224 start tokens, budget 4100
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
