<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16836 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-python", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46033036406 — dark (conclusion: `failure`), 2026-11-27 16:22 UTC
- Dark since: 2026-11-27 11:07 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "worker" is not a known attribute of "None" (dm/tools/tests/test_shader_cache.py:748)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]"worker" is not a known attribute of "None"
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46034242824 — dark (conclusion: `cancelled`), 2026-11-27 16:30 UTC
- Dark since: 2026-11-27 16:22 UTC (first run of the current streak)
- Job / step: `Tool tests` → `Post Run actions/setup-dotnet@a98b56852c35b8e3190ac28c8c2271da59106c68`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
/Users/runner/work/nxnative/nxnative/dm/gfx/tools/dmsh_build.py:977: ResourceWarning: unclosed file <_io.TextIOWrapper name='/var/folders/5n/5t77mfb93jd7q8v9s6f0dn0m0000gn/T/vs_mask_uniform_7mlgahfo/built.metal' mode='w…
  src = dmsh_entry.vs_base_instance(dmsh_entry.vs_layer(dmsh_entry.vs_init(src))); open(msl, 'w').write(src)
ResourceWarning: Enable tracemalloc to get the object allocation traceback
ok
----------------------------------------------------------------------
Ran 7 tests in 2.037s
OK (skipped=1)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
