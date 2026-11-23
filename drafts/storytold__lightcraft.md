<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16312 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45100534009 — dark (conclusion: `failure`), 2026-11-23 02:29 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 4/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 4's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.4G in 877 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   82G  44% /
warning: profraw/shard-4-9571-15144630631723491570_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 4 wrote a truncated or corrupt coverage profile: profraw/shard-4-9571-15144630631723491570_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
