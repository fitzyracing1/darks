<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9592 · **Generated:** 2026-11-16T12:52:35.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Lint", "CI Docker", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43758280305 — dark (conclusion: `failure`), 2026-11-15 20:28 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: called '.err().expect()' on a 'Result' value (crates/xberg/src/extractors/pdf/ocr/retained_read_metadata_tests.rs:318)

<details><summary>End of the job log</summary>

```
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking jpeg-encoder v0.7.1
    Checking dotenvy v0.15.7
error: called `.err().expect()` on a `Result` value
##[error]   --> crates\xberg\src\extractors\pdf\ocr\retained_read_metadata_tests.rs:318:10
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43832842095 — dark (conclusion: `failure`), 2026-11-16 08:38 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
  tree walk: 9849 file(s) opened, 884 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
Generated files drifted from a fresh render detected (this run's backends would emit different content than the owned bytes on disk -- rerun the owning stage, e.g. `alef generate`/`alef all`/`alef docs`, to refresh it):
  /home/runner/work/xberg/xberg/docs-site/src/content/docs/reference/api-rust.md
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43832841467 — dark (conclusion: `failure`), 2026-11-16 08:38 UTC
- Dark since: 2026-11-16 08:38 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Build Docker image`
- Likely cause: buildx failed with: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json && break;         [ \"$attempt\

<details><summary>End of the job log</summary>

```
 239 | >>>     chown -R xberg:xberg /app/.xberg && \
 240 | >>>     echo "All models ready (PaddleOCR + layout detection)"
 241 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json && break;         [ \"$…
builder-86a5f756-b742-4e19-a63f-8ca2fbb4e4ad/builder-86a5f756-b742-4e19-a63f-8ca2fbb4e4ad0/hqkj2vk13z6qi1p2hlol0f5a6
Build summary supported!
##[error]buildx failed with: failed to build: failed to solve: process "/bin/sh -c for attempt in 1 2 3 4 5; do         XBERG_CACHE_DIR=/app/.xberg /usr/local/bin/xberg cache warm --cache-dir /app/.xberg --format json &…
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43832841430 — dark (conclusion: `failure`), 2026-11-16 08:38 UTC
- Dark since: 2026-11-16 08:38 UTC (first run of the current streak)
- Job / step: `Focused nli` → `Run exact regression tests`
- Likely cause: [nli:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
##[start-action display=Prepare ONNX Runtime (Windows);id=__self.__run_3]
##[end-action id=__self.__run_3;outcome=skipped;conclusion=skipped;duration_ms=0]
[nli:ci] $ ~/work/xberg/xberg/mise-tasks/nli/ci.sh
    Updating crates.io index
error: cannot update the lock file /home/runner/work/xberg/xberg/tools/benchmark-harness/nli_qualification/Cargo.lock because --locked was passed to prevent this
help: to generate the lock file without accessing the network, remove the --locked flag and use --offline instead.
[nli:ci] ERROR task failed
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
