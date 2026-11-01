<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: resolved -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 150780 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/41218483931 — dark (conclusion: `failure`), 2026-10-31 16:11 UTC
- Dark since: 2026-10-31 16:11 UTC (first run of the current streak)
- Job / step: `Frontend Checks` → `Unit tests`
- Likely cause: Error: expect(element).not.toBeInTheDocument() (tests/components/StackSettingsSheet.test.tsx:201)

<details><summary>End of the job log</summary>

```
    202|
    203|     await user.click(toggle);
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 269 passed (270)
      Tests  1 failed | 3473 passed (3474)
   Start at  16:12:47
   Duration  295.65s (transform 12.79s, setup 134.54s, collect 104.12s, tests 407.78s, environment 161.51s, prepare 27.99s)
##[error]Error: expect(element).not.toBeInTheDocument()
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
