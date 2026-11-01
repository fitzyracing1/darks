<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: resolved -->
# Upstream issue draft: seedds/nxnative

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 10706 · **Generated:** 2026-11-01T06:42:01.505Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow getting cancelled on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/tests.yml`) on `main` has been getting cancelled since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41280208174 — dark (conclusion: `cancelled`), 2026-11-01 06:17 UTC
- Dark since: 2026-11-01 06:14 UTC (first run of the current streak)
- Job / step: `Build check (Mac host, gfx tests, iOS sources)` → `Every gfx test compiled, not run`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

<details><summary>End of the job log</summary>

```
      |                                                                    ^
./../nvn/nvn_mtl.m:9838:43: warning: passing '__strong id<MTLRenderCommandEncoder>' to parameter of incompatible type 'id<MTL4RenderCommandEncoder>'
 9838 |         if (di->count) enc_r_draw_indexed(en, mp, di->count, di->itype == 1 ? MTLIndexTypeUInt16 : MTLIndexTypeUInt32, gpu, ((__bridge id<MTLBuffer>)mb).length - mo,
      |                                           ^~
./../nvn/nvn_mtl.m:976:68: note: passing argument to parameter 'e' here
  976 | static inline void enc_r_draw_indexed(id<MTL4RenderCommandEncoder> e, MTLPrimitiveType p, NSUInteger n, MTLIndexType t, uint64_t gpu, NSUInteger len, NSUInteger i, NSInteger bv, NSUInteger bi) { [e drawIndexedPr…
      |                                                                    ^
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
