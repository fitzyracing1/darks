<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9596 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI Lint", "ADRs", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44047226673 — dark (conclusion: `cancelled`), 2026-11-17 08:29 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (formats-no-heic)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44051203772 — dark (conclusion: `failure`), 2026-11-17 08:57 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
         = note: requested on the command line with `-D clippy::print-stderr`
      error: could not compile `xberg-native-pdf` (test "test_render_resolution_pipeline_qa_wave5") due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425774 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44047226696 — dark (conclusion: `cancelled`), 2026-11-17 08:29 UTC
- Dark since: 2026-11-17 08:05 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44047226921 — dark (conclusion: `failure`), 2026-11-17 08:29 UTC
- Dark since: 2026-11-17 08:05 UTC (first run of the current streak)
- Job / step: `Shell formatting` → `Check shell formatting`
- Likely cause: [lint:shell] ERROR task failed

<details><summary>End of the job log</summary>

```
 	[ ! -x "$BATS_TEST_TMPDIR/rustup-init" ]
-	sed '/sha256sum -c - &&$/d' "$BATS_TEST_TMPDIR/bootstrap-inert" > "$BATS_TEST_TMPDIR/bootstrap-unverified"
+	sed '/sha256sum -c - &&$/d' "$BATS_TEST_TMPDIR/bootstrap-inert" >"$BATS_TEST_TMPDIR/bootstrap-unverified"
 	run run_inert_bootstrap aarch64 yes bootstrap-unverified
 	[ "$status" -eq 0 ]
 	[ -f "$BATS_TEST_TMPDIR/executed" ]
[lint:shell] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
