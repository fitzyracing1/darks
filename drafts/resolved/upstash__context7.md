<!-- dark-draft: upstash/context7 -->
<!-- draft-state: resolved -->
# Upstream issue draft: upstash/context7

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/upstash/context7/issues/new
- **Stars:** 64553 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow getting cancelled on master since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `master` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/upstash/context7/actions/runs/42852288101 — dark (conclusion: `cancelled`), 2026-11-10 16:13 UTC
- Dark since: 2026-11-10 16:13 UTC (first run of the current streak)
- Job / step: `test` → `Install Dependencies`
- Likely cause: Canceling since a higher priority waiting request for Test-refs/heads/master exists

<details><summary>End of the job log</summary>

```
+ eslint 10.11.0
+ eslint-config-prettier 10.1.8
+ eslint-plugin-prettier 5.5.6
+ prettier 3.9.9
+ typescript 6.0.3
+ typescript-eslint 8.72.1
Done in 3.5s using pnpm v10.34.9
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context7!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
