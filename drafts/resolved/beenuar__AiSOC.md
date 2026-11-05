<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: resolved -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** resolved — lit again (2026-11-05); nothing to file
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7347 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Grading integrity" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Grading integrity** workflow (`.github/workflows/grading-integrity.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/42018308468 — dark (conclusion: `failure`), 2026-11-05 11:21 UTC
- Dark since: 2026-11-04 23:40 UTC (first run of the current streak)
- Job / step: `No run on main ended cancelled` → `Ask the Actions API what actually ran`
- Likely cause: the cancellation is correct, record it in that gate's EXCEPTIONS with the

<details><summary>End of the job log</summary>

```
      https://github.com/beenuar/AiSOC/actions/runs/42004496102
A cancelled run on a protected branch is a commit nothing graded, and it
reports `cancelled` rather than `failure`, so nothing else will say so.
Find out why it was cancelled. If a concurrency group did it,
scripts/check_workflow_concurrency.py explains the shape and the fix. If
the cancellation is correct, record it in that gate's EXCEPTIONS with the
reason and what is lost.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
