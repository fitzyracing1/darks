<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9455 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Lint", "CI Rust", "AI-Rulez validation")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40626384006 — dark (conclusion: `failure`), 2026-10-28 03:23 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
    344 absent (reported under the missing-file headings)
      of which 321 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 344 above)
    14 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 8741 file(s) opened, 611 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
##[error]exit status 1
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40626383576 — dark (conclusion: `failure`), 2026-10-28 03:23 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-latest)` → `Clippy no-ORT tract engine`
- Likely cause: function 'split_cell_grid' is never used (crates/xberg/src/rendering/table_math.rs:23)

<details><summary>End of the job log</summary>

```
    Checking tract-onnx-opl v0.23.9
    Checking tract-onnx v0.23.9
warning: xberg-tesseract@1.4.0: Library already available at expected location: /Users/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-37d798e84495a619/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.4.0: Library already available at expected location: /Users/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-37d798e84495a619/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
error: type alias `MathCell` is never used
##[error]  --> crates/xberg/src/rendering/table_math.rs:13:6
```

</details>

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40534777134 — dark (conclusion: `cancelled`), 2026-10-27 15:49 UTC
- Dark since: 2026-10-27 09:10 UTC (first run of the current streak)
- Job / step: `validate`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
