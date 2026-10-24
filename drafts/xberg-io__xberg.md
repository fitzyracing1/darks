<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9441 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI Lint" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI Lint** workflow (`.github/workflows/ci-lint.yaml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40075812976 — dark (conclusion: `failure`), 2026-10-24 07:51 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
      of which 321 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 344 above)
    14 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 8388 file(s) opened, 599 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
task: Failed to run task "alef:verify": exit status 1
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
