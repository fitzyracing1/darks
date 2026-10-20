<!-- dark-draft: colinhacks/zod -->
<!-- draft-state: ready -->
# Upstream issue draft: colinhacks/zod

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/colinhacks/zod/issues/new
- **Stars:** 44163 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** account-level problem on their side — do not file

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release on npm" workflow getting cancelled on main since 2026-09-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release on npm** workflow (`.github/workflows/release.yml`) on `main` has been getting cancelled since 2026-09-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/colinhacks/zod/actions/runs/35609668087 — dark (conclusion: `cancelled`), 2026-09-21 14:04 UTC
- Dark since: 2026-09-21 11:01 UTC (first run of the current streak)
- Job / step: `build_and_publish`
- Likely cause: owner marked spammy

<details><summary>End of the job log</summary>

```
nub: vitest.config.ts imports `vitest`, which isn't in package.json. Run `nub add vitest` (WARN_PHANTOM_DEP).
$ nub ../../scripts/check-versions.ts
✅ Versions match: 4.6.8 === 4.6.8
✅ @zod/mini 4.6.8 with peer zod@^4.6.0 (npm + jsr)
✅ Versions match: 4.6.8 === 4.6.8
✅ @zod/mini 4.6.8 with peer zod@^4.6.0 (npm + jsr)
  × publish failed: 404 Not Found: {"error":"Not found"}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining zod!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
