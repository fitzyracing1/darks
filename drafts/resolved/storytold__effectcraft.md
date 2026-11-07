<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/effectcraft

- **Status:** resolved — lit again (2026-11-07); nothing to file
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8515 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/42153014207 — dark (conclusion: `failure`), 2026-11-06 02:52 UTC
- Dark since: 2026-11-06 02:52 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p effectcraft-export --test it'

<details><summary>End of the job log</summary>

```
  left: [11481081329658612517, 11481081329658612517, 9025404547238986533, 4008026620737413925, 4008026620737413925, 9025404547238986533, 7925015967884059941, 7925015967884059941, 9025404547238986533, 1148108132965861251…
 right: [11481081329658612517, 11481081329658612517, 9025404547238986533, 4008026620737413925, 4008026620737413925, 9025404547238986533, 13118394903164073253, 13118394903164073253, 9025404547238986533, 11481081329658612…
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    exr_scene_linear::exr_clip_with_srgb_output_is_unchanged
test result: FAILED. 90 passed; 1 failed; 1 ignored; 0 measured; 0 filtered out; finished in 1.99s
error: test failed, to rerun pass `-p effectcraft-export --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
