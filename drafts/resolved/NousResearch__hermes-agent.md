<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: resolved -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 259668 · **Generated:** 2026-11-02T12:41:31.933Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yaml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/41441958433 — dark (conclusion: `failure`), 2026-11-02 12:06 UTC
- Dark since: 2026-11-02 06:28 UTC (first run of the current streak)
- Job / step: `JS & TS checks / JS & TS checks` → `Run all workspace checks`
- Likely cause: 1 of 10 checks failed

<details><summary>End of the job log</summary>

```
    127|     cwd: tmpdir(), env: { ...process.env, PATH: '', HERMES_DESKTOP_VAR…
    128|   })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 37 passed (38)
      Tests  1 failed | 218 passed | 1 skipped (220)
   Start at  12:06:59
   Duration  19.27s (transform 17.96s, setup 0ms, import 26.16s, tests 74.89s, environment 882ms)
##[error]Error: Command failed: /home/runner/_work/_temp/setup-pm/tools/node-26.12.1-linux-x64/bin/node /home/runner/_work/hermes-agent/hermes-agent/scripts/build/desktop.mjs --source /tmp/desktop build with spaces-luiX…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
