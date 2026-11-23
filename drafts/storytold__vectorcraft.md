<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12027 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44984725992 — dark (conclusion: `failure`), 2026-11-22 04:21 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-engine --lib'

<details><summary>End of the job log</summary>

```
assertion `left == right` failed: turned 180: {"fonts":[{"area":false,"family":"Source Sans 3","leading":null,"score":0.889,"size":39.92530781914129,"style":"Regular","tracking":0.0}],"ids":[9],"texts":["no"],"truncated…
  left: Array [String("no")]
 right: Array [String("no.")]
failures:
    cmd::retype::tests::turned_near_matched_round_glyphs_keep_the_line_turn
test result: FAILED. 8293 passed; 1 failed; 15 ignored; 0 measured; 0 filtered out; finished in 247.85s
error: test failed, to rerun pass `-p vectorcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
