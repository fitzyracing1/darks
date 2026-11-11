<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15853 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42995185442 — dark (conclusion: `failure`), 2026-11-11 09:26 UTC
- Dark since: 2026-11-11 08:16 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Combine shard coverage`
- Likely cause: error: no profile can be merged

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.99.1-x86_64-unknown-linux-gnu installed - rustc 1.99.1 (58cf8f9c3 2026-10-13)
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   53G   93G  37% /
/dev/root       145G   53G   93G  37% /
warning: profraw/shard-1-13836-808685859262199371_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
