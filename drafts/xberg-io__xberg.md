<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9594 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI Lint", "CI Integrations", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43963567746 — dark (conclusion: `cancelled`), 2026-11-16 21:47 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Post Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
##[start-action display=Cache ONNX Runtime;id=__ad1c35e5-9872-4152-a08f-5b170916b9d0.cache-onnx]
[warning]Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.
##[end-action id=__ad1c35e5-9872-4152-a08f-5b170916b9d0.cache-onnx;outcome=success;conclusion=success;duration_ms=651]
##[start-action display=Cache libheif + boost + zlib vcpkg (Windows);id=__46c92d46-e067-47a7-9dae-33059ede50c6.cache-libheif-windows]
[command]"C:\Program Files\Git\usr\bin\tar.exe" --posix -cf cache.tzst --exclude cache.tzst -P -C D:/a/xberg/xberg --files-from manifest.txt --force-local --use-compress-program "zstd -T0"
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43963568255 — dark (conclusion: `cancelled`), 2026-11-16 21:47 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `AI governance validation`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43943263858 — dark (conclusion: `failure`), 2026-11-16 19:49 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build and stage Java binding`
- Likely cause: [integrations:ci:build:java-binding] ERROR task failed

<details><summary>End of the job log</summary>

```
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
[integrations:ci:build:java-binding] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43943263765 — dark (conclusion: `cancelled`), 2026-11-16 19:49 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `E2E (java)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

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

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
