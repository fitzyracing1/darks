<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 18527 · **Generated:** 2026-11-07T12:37:41.487Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42333988641 — dark (conclusion: `cancelled`), 2026-11-07 03:26 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build aarch64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42350943745 — dark (conclusion: `failure`), 2026-11-07 07:21 UTC
- Dark since: 2026-11-07 06:22 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Unit + integration tests`
- Likely cause: error: test failed, to rerun pass '-p xerj-autoindex --test field_report_surfaces'

<details><summary>End of the job log</summary>

```
thread 'homepage_prompt_defers_the_field_report_to_llms_txt' (35736) panicked at crates/xerj-autoindex/tests/field_report_surfaces.rs:145:5:
the homepage prompt a person reads must be the short llms.txt prompt
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    homepage_prompt_defers_the_field_report_to_llms_txt
test result: FAILED. 3 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
error: test failed, to rerun pass `-p xerj-autoindex --test field_report_surfaces`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
