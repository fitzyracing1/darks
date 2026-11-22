<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 17656 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- External corpus (`.github/workflows/external-corpus.yml`): [issue #10788](https://github.com/tangency-labs/solidcraft/issues/10788) "CI: external-corpus failing: 5 NIST STEP files exceed 0.10% volume tolerance (e.g. nist_ctc_04_ap203 -17.77%)"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SolidCore nightly" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SolidCore nightly** workflow (`.github/workflows/solidcore-nightly.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/44981937842 — dark (conclusion: `failure`), 2026-11-22 03:43 UTC
- Dark since: 2026-11-22 03:43 UTC (first run of the current streak)
- Job / step: `SolidCore slow checks` → `Slow regressions`
- Likely cause: error: test failed, to rerun pass '-p solidcore --test geometry'

<details><summary>End of the job log</summary>

```
thread 'max_solve_branches_tiny_torus::max_solve_branches_tiny_torus_booleans_finish' (4929) panicked at crates/solidcore/tests/geometry/../max_solve_branches_tiny_torus.rs:36:13:
tiny-scale box / torus intersection failed: topology::brep::p6: no radial sector of the edge takes the new edge use
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    max_solve_branches_tiny_torus::max_solve_branches_tiny_torus_booleans_finish
test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 446 filtered out; finished in 0.02s
error: test failed, to rerun pass `-p solidcore --test geometry`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
