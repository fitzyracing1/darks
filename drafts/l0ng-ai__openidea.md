<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9008 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43673616768 — dark (conclusion: `cancelled`), 2026-11-15 03:43 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Run cargo nextest run --workspace --no-fail-fast`
- Likely cause: run cancelled in job "Rust (windows-latest)"

<details><summary>End of the job log</summary>

```
────────────
     Summary [ 360.111s] 4380 tests run: 4376 passed, 4 failed, 105 skipped
        FAIL [   0.373s] (1819/4380) ide-host::plugins background_tasks_scale_and_renew_cpu_fuel_budget
        FAIL [   0.041s] (2688/4380) ide-lsp::mock_server library_classes_without_sources_open_decompiled_by_a_running_jdtls
        FAIL [   0.281s] (2840/4380) ide-profiler formats::tests::cpuprofile_frames_take_the_source_a_debugger_mapped_them_to
        FAIL [   0.070s] (3284/4380) ide-sdk tests::a_member_without_python_falls_back_to_the_primary_project_interpreter
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
