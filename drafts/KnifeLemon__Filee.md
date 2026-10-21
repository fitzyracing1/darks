<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 8026 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/39518009707 — dark (conclusion: `failure`), 2026-10-20 23:54 UTC
- Dark since: 2026-10-20 22:54 UTC (first run of the current streak)
- Job / step: `portable / portable (ubuntu-24.04, linux-x64)` → `Build and test native projects`
- Likely cause: Failed!  - Failed:     1, Passed:   428, Skipped:     0, Total:   429, Duration: 11 s - Filee.Core.Tests.dll (net10.0)

<details><summary>End of the job log</summary>

```
Collection: ["/tmp/filee-tests/c6c2e28e/a.jpg"]
  Stack Trace:
     at Filee.Core.Tests.WebDropJobTests.A_job_cancelled_before_it_runs_still_cleans_up_and_ends_the_transfer() in /home/runner/work/Filee/Filee/tests/Filee.Core.Tests/WebDropJobTests.cs:line 121
   at Filee.Core.Tests.WebDropJobTests.A_job_cancelled_before_it_runs_still_cleans_up_and_ends_the_transfer()
--- End of stack trace from previous location ---
Results File: /home/runner/work/Filee/Filee/TestResults/linux-x64/_runnervm8k3b6_2026-10-20_23_57_14_net10.0.trx
Failed!  - Failed:     1, Passed:   428, Skipped:     0, Total:   429, Duration: 11 s - Filee.Core.Tests.dll (net10.0)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
