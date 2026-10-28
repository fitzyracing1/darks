<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9455 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Lint", "CI Rust", "CI Scripts")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40674768736 — dark (conclusion: `failure`), 2026-10-28 10:46 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
    warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
    error: ort-sys@2.0.0-rc.14: extraction of prebuilt binaries downloaded from `https://cdn.pyke.io/0/pyke:ort-rs/ms@1.31.0/x86_64-unknown-linux-gnu.tar.lzma2` failed: Failed to extract to '/home/runner/.cache/ort.pyke…
    error: build script logged errors
----------------------------------------------------------------------------------------------------
Checked at requested level: 685/1219 (56.2%) -- capability-capped 363, declared-capped 0, unavailable 0, downgraded 0, failed 171, skipped 0, errors 0 did not fully verify
Total: 1219  Passed: 1048  Downgraded: 0  Failed: 171  Skipped: 0  Errors: 0  Unavailable: 0
task: Failed to run task "docs:snippets:all": exit status 1
##[error]exit status 1
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40674768283 — dark (conclusion: `failure`), 2026-10-28 10:46 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: manual implementation of '.is_multiple_of()' (crates/xberg/src/extraction/metafile/tests.rs:81)

<details><summary>End of the job log</summary>

```
    Checking criterion v0.8.2
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking dotenvy v0.15.7
error: manual implementation of `.is_multiple_of()`
##[error]  --> crates\xberg\tests\metafile_embedded_text.rs:95:15
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40674768334 — dark (conclusion: `failure`), 2026-10-28 10:46 UTC
- Dark since: 2026-10-28 10:46 UTC (first run of the current streak)
- Job / step: `Shell formatting` → `Check shell formatting`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
 	grep -Fxq package.json "$XBERG_WORK/archive-entries"
 	grep -Fxq ./xberg.node "$XBERG_WORK/archive-entries"
-	[ "$(wc -l < "$XBERG_WORK/archive-entries" | tr -d '[:space:]')" -eq 2 ]
+	[ "$(wc -l <"$XBERG_WORK/archive-entries" | tr -d '[:space:]')" -eq 2 ]
 	[ "$(tar -xOzf npm/fixture-linux-x64-1.4.0.tgz ./xberg.node)" = 'native fixture for linux-x64' ]
 }
task: Failed to run task "lint:shell": exit status 1
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
