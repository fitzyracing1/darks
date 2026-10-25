<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: resolved -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** resolved — lit again (2026-10-25); nothing to file
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28193 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Upgrade checks" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Upgrade checks** workflow (`.github/workflows/run-upgrade-checks.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/40052627116 — dark (conclusion: `failure`), 2026-10-24 02:04 UTC
- Dark since: 2026-10-22 02:05 UTC (first run of the current streak)
- Job / step: `Static analysis` → `Run prek`
- Likely cause: prek exited with code 1

<details><summary>End of the job log</summary>

```
2026-10-24T02:04:53.464933Z TRACE run{hook_id=codespell language=python}: Executing `cd /home/runner/work/fastmcp/fastmcp && /home/runner/.cache/prek/hooks/python-A88WIVLsqk3bqPX8E6lb/bin/python /home/runner/.cache/prek…
2026-10-24T02:04:53.465398Z TRACE run{hook_id=codespell language=python}: Executing `cd /home/runner/work/fastmcp/fastmcp && /home/runner/.cache/prek/hooks/python-A88WIVLsqk3bqPX8E6lb/bin/python /home/runner/.cache/prek…
2026-10-24T02:04:53.465892Z TRACE run{hook_id=codespell language=python}: Executing `cd /home/runner/work/fastmcp/fastmcp && /home/runner/.cache/prek/hooks/python-A88WIVLsqk3bqPX8E6lb/bin/python /home/runner/.cache/prek…
2026-10-24T02:04:53.466443Z TRACE run{hook_id=codespell language=python}: Executing `cd /home/runner/work/fastmcp/fastmcp && /home/runner/.cache/prek/hooks/python-A88WIVLsqk3bqPX8E6lb/bin/python /home/runner/.cache/prek…
2026-10-24T02:04:54.562771Z  INFO run{hook_id=codespell language=python}: close time.busy=2.51ms time.idle=1.10s
2026-10-24T02:04:54.562815Z TRACE diff_worktree{path="/home/runner/work/fastmcp/fastmcp"}: Executing `cd /home/runner/work/fastmcp/fastmcp && /usr/bin/git -c core.useBuiltinFSMonitor=false diff --full-index --no-ext-dif…
2026-10-24T02:04:54.573486Z TRACE diff_worktree{path="/home/runner/work/fastmcp/fastmcp"}: close time.busy=615µs time.idle=10.1ms
##[error]prek exited with code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
