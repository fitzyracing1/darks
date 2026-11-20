<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9602 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Lint", "CI Mobile", "CI Docs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44581871013 — dark (conclusion: `failure`), 2026-11-19 17:52 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate Publish workflow contracts`
- Likely cause: [release:test:contracts] ERROR task failed

<details><summary>End of the job log</summary>

```
    test()
    ~~~~^^
  File "/home/runner/work/xberg/xberg/scripts/ci/test_publish_workflow_contracts.py", line 1429, in test_lint_go_inputs_override_incompatible_reusable_defaults
    assert go_version == [tools["go"]], "lint must use the repository's locked Go version"
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: lint must use the repository's locked Go version
[release:test:contracts] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951723 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking base64 v0.22.1
    Checking quick-error v2.0.1
    Checking tract-data v0.23.10
    Checking zune-jpeg v0.5.15
    Checking transpose v0.2.3
    Checking num-rational v0.4.2
    Checking sharded-slab v0.1.7
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459952392 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
