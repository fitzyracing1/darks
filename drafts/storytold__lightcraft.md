<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15887 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43209547314 — dark (conclusion: `failure`), 2026-11-12 11:29 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 1/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 1's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.99.1-x86_64-unknown-linux-gnu installed - rustc 1.99.1 (58cf8f9c3 2026-10-13)
Raw profiles: 1.6G in 973 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   61G   84G  42% /
warning: profraw/shard-1-15173-3831191675021996432_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 1 wrote a truncated or corrupt coverage profile: profraw/shard-1-15173-3831191675021996432_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
