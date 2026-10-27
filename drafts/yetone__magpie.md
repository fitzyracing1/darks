<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 23339 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/40492644859 — dark (conclusion: `failure`), 2026-10-27 10:58 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Job / step: `test (ubuntu-latest)` → `Test`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
?   	github.com/yetone/magpie/plugins/routing	[no test files]
ok  	github.com/yetone/magpie/plugins/search	0.017s
?   	github.com/yetone/magpie/plugins/sessions	[no test files]
ok  	github.com/yetone/magpie/plugins/tools	0.008s
?   	github.com/yetone/magpie/plugins/usage	[no test files]
?   	github.com/yetone/magpie/plugins/warmups	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
