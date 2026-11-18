<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80212 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI", "SonarCloud", "FreeBSD", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44278542810 — dark (conclusion: `failure`), 2026-11-18 09:43 UTC
- Dark since: 2026-11-17 15:41 UTC (first run of the current streak)
- Job / step: `corpus tests` → `Corpus tests`
- Likely cause: error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101

<details><summary>End of the job log</summary>

```
711 |         s.actions.list.iter().find(|a| a.name == "Parent").unwrap().steps.clone()
    |                        ^^^^ method not found in `craft::craft_automation::actions::ActionList`
Some errors have detailed explanations: E0308, E0599.
For more information about an error, try `rustc --explain E0308`.
error: could not compile `photocraft-engine` (lib test) due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44278542757 — dark (conclusion: `failure`), 2026-11-18 09:43 UTC
- Dark since: 2026-11-17 15:41 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
18 | photocraft-formats = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `photocraft-formats`
warning: `photocraft-format` (manifest) generated 1 warning
error: command `/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo '--color=always' test --no-run '--message-format=json-render-diagnostics' --workspace` exited with code 101
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44223231034 — dark (conclusion: `failure`), 2026-11-18 02:26 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: 'default-features = false' cannot override workspace's 'default-features'

<details><summary>End of the job log</summary>

```
  failed to load manifest for dependency `photocraft-text`
Caused by:
  failed to parse manifest at `/home/runner/work/photocraft/photocraft/crates/text/Cargo.toml`
Caused by:
  error inheriting `craft` from workspace root manifest's `workspace.dependencies.craft`
Caused by:
  `default-features = false` cannot override workspace's `default-features`
##[error]Process completed with exit code 101.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44224002107 — dark (conclusion: `failure`), 2026-11-18 02:32 UTC
- Dark since: 2026-11-18 02:32 UTC (first run of the current streak)
- Job / step: `release / Windows x64` → `Post Run step-security/rust-cache@851174d9a2fdc03e0896e02844dcc61d81dd7851`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
(Use `node --trace-deprecation ...` to show where the warning was created)
... Cleaning D:\a\photocraft\photocraft\target ...
... Cleaning cargo registry (cache-all-crates: false) ...
... Cleaning cargo/bin ...
... Cleaning cargo git cache ...
... Saving cache ...
[command]"C:\Program Files\Git\usr\bin\tar.exe" --posix -cf cache.tzst --exclude cache.tzst -P -C D:/a/photocraft/photocraft --files-from manifest.txt --force-local --use-compress-program "zstd -T0"
##[error]The operation was canceled.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44230748066 — dark (conclusion: `failure`), 2026-11-18 03:29 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: error: cargo build --release -p photocraft-ui-egui --example perf_scenarios --example perf_scenarios --example flat_open_bench --example interactive_bench --example fx_bench --example bevel_bench --example camera_raw_be…

<details><summary>End of the job log</summary>

```
997 |     T: Serialize,
    |        ^^^^^^^^^ required by this bound in `to_value`
    = note: this error originates in the macro `$crate::json_internal` which comes from the expansion of the macro `json` (in Nightly builds, run with -Z macro-backtrace for more info)
For more information about this error, try `rustc --explain E0277`.
error: could not compile `photocraft-ui-egui` (lib) due to 13 previous errors
warning: build failed, waiting for other jobs to finish...
error: cargo build --release -p photocraft-ui-egui --example perf_scenarios --example perf_scenarios --example flat_open_bench --example interactive_bench --example fx_bench --example bevel_bench --example camera_raw_be…
##[error]Process completed with exit code 1.
```

</details>

### ast-grep (`.github/workflows/ast-grep.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44276194392 — dark (conclusion: `failure`), 2026-11-18 09:28 UTC
- Dark since: 2026-11-18 09:28 UTC (first run of the current streak)
- Job / step: `scan / scan` → `ast-grep`
- Likely cause: String as an error type (apps/photocraft/src/main.rs:102)

<details><summary>End of the job log</summary>

```
Running 4 tests
----------- Case Details -----------
PASS args-os  ..........
PASS string-error  ............
PASS clap-error-message  ............
PASS clap-error-message-variable  ..........
test result: ok. 4 passed; 0 failed;
##[error]String as an error type
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
