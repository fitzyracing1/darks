<!-- dark-draft: qingjian-team/qingjian -->
<!-- draft-state: resolved -->
# Upstream issue draft: qingjian-team/qingjian

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/qingjian-team/qingjian/issues/new
- **Stars:** 6946 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/qingjian-team/qingjian/actions/runs/39424380179 — dark (conclusion: `failure`), 2026-10-20 12:42 UTC
- Dark since: 2026-10-20 12:32 UTC (first run of the current streak)
- Job / step: `core` → `Dependency licenses, sources and wildcards`
- Likely cause: Error: ENOENT: no such file or directory, opendir '/home/runner/work/qingjian/qingjian/target/fcitx5-stage1/CMakeFiles/test-lifecycle.dir/tests/target'

<details><summary>End of the job log</summary>

```
Received 939524096 of 1106466814 (84.9%), 111.9 MBs/sec
Received 1061158912 of 1106466814 (95.9%), 112.3 MBs/sec
Received 1106466814 of 1106466814 (100.0%), 110.8 MBs/sec
Cache Size: ~1055 MB (1106466814 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/76286057-9f90-491e-92b5-9307b498cff7/cache.tzst -P -C /home/runner/work/qingjian/qingjian --use-compress-program unzstd
Cache restored successfully
Restored from cache key "v0-rust-core-Linux-x64-0e312029-40e8f07c" full match: false.
##[error]ENOENT: no such file or directory, opendir '/home/runner/work/qingjian/qingjian/target/fcitx5-stage1/CMakeFiles/test-selection.dir/tests/target'
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining qingjian!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
