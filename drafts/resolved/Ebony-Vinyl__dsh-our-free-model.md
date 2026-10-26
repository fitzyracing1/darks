<!-- dark-draft: Ebony-Vinyl/dsh-our-free-model -->
<!-- draft-state: resolved -->
# Upstream issue draft: Ebony-Vinyl/dsh-our-free-model

- **Status:** resolved — lit again (2026-10-26); nothing to file
- **Would be filed at:** https://github.com/Ebony-Vinyl/dsh-our-free-model/issues/new
- **Stars:** 44364 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "test" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Ebony-Vinyl/dsh-our-free-model/actions/runs/40288676050 — dark (conclusion: `failure`), 2026-10-26 07:54 UTC
- Dark since: 2026-10-26 07:54 UTC (first run of the current streak)
- Job / step: `offline` → `Validate code or the complete main tree`
- Likely cause: 100/101 suites passed — desktop-update failed

<details><summary>End of the job log</summary>

```
ok   plugin-bench-ui    51 ms
(node:3873) ExperimentalWarning: stripTypeScriptTypes is an experimental feature and might change at any time
ok gateway source: chat system, Responses system/developer/instructions, independent identities and unchanged other roles
(Use `node --trace-warnings ...` to show where the warning was created)
ok gateway reasoning: chat history keeps reasoning_content / reasoning, including a single-space placeholder
ok   gateway-source    92 ms
100/101 suites passed — desktop-update failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-our-free-model!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
