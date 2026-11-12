<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 15908 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"
- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations"
- External corpus (`.github/workflows/external-corpus.yml`): [issue #10788](https://github.com/tangency-labs/solidcraft/issues/10788) "CI: external-corpus failing: 5 NIST STEP files exceed 0.10% volume tolerance (e.g. nist_ctc_04_ap203 -17.77%)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SolidCore nightly" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SolidCore nightly** workflow (`.github/workflows/solidcore-nightly.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/43212391582 — dark (conclusion: `failure`), 2026-11-12 11:49 UTC
- Dark since: 2026-11-12 11:49 UTC (first run of the current streak)
- Job / step: `SolidCore slow checks` → `Slow regressions`
- Likely cause: error: test failed, to rerun pass '-p solidcore --test max_solve_branches_tiny_torus'

<details><summary>End of the job log</summary>

```
thread 'max_solve_branches_tiny_torus_booleans_finish' (3971) panicked at crates/solidcore/tests/max_solve_branches_tiny_torus.rs:36:13:
tiny-scale box / torus intersection failed: curve::line::Line::create_line_segment: invalid input: start and end points coincide
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    max_solve_branches_tiny_torus_booleans_finish
test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s
error: test failed, to rerun pass `-p solidcore --test max_solve_branches_tiny_torus`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
