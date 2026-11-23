<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28714 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "PBT campaign" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PBT campaign** workflow (`.github/workflows/pbt-campaign.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/44997701412 — dark (conclusion: `failure`), 2026-11-22 07:19 UTC
- Dark since: 2026-11-21 07:19 UTC (first run of the current streak)
- Job / step: `campaign` → `Hunt`
- Likely cause: 1 failed, 10 passed in 581.01s (0:09:41)

<details><summary>End of the job log</summary>

```
instance: {'b': 1e+20}
rejected with: 1 validation error for nullable[function-wrap[_apply_defaults()]]
b
  Unable to parse input string as an integer, exceeded maximum size [type=int_parsing_size, input_value=1e+20, input_type=float]
    For further information visit https://errors.pydantic.dev/2.14/v/int_parsing_size
You can reproduce this test case by temporarily adding @reproduce_failure('6.170.15', b'AXicc+RhdGR0ZHBkZGBwRIEMDIwwigmkhNmRmYEBAHGUBG0=') as a decorator on your test function
1 failed, 10 passed in 581.01s (0:09:41)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
