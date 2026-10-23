<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10504 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39994426411 — dark (conclusion: `failure`), 2026-10-23 17:21 UTC
- Dark since: 2026-10-23 14:15 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
    "PDF security settings are not an object",
]
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    i18n::tests::complete_languages_translate_every_message
test result: FAILED. 2045 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 79.07s
error: test failed, to rerun pass `-p vectorcraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/39994425804 — dark (conclusion: `cancelled`), 2026-10-23 17:21 UTC
- Dark since: 2026-10-23 14:15 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: Canceling since a higher priority waiting request for sonarcloud-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  - /home/runner/work/vectorcraft/vectorcraft/crates/tools/Cargo.toml
  - /home/runner/work/vectorcraft/vectorcraft/crates/trace/Cargo.toml
  - /home/runner/work/vectorcraft/vectorcraft/crates/ui-egui/Cargo.toml
  - /home/runner/work/vectorcraft/vectorcraft/xtask/Cargo.toml
... Restoring cache ...
No cache found.
info: cargo-llvm-cov currently setting cfg(coverage); you can opt-out it by passing --no-cfg-coverage
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
