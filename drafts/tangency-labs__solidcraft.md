<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 7595 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Pages" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Pages** workflow (`.github/workflows/pages.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39371025042 — dark (conclusion: `failure`), 2026-10-20 04:42 UTC
- Dark since: 2026-10-19 06:16 UTC (first run of the current streak)
- Job / step: `build` → `Test the web app offline and across an update (headless Chrome)`
- Likely cause: error: launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac98":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac…

<details><summary>End of the job log</summary>

```
2026-10-20T05:17:59.522529Z  INFO finished hook cargo
2026-10-20T05:17:59.522587Z  INFO applying new distribution
2026-10-20T05:17:59.523117Z  INFO ✅ success
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.09s
     Running `target/debug/xtask web-offline-test --site dist/web`
retry launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac98":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac9…
error: launch 1 starts build v1: timed out after 240s; last state: {"build":"v1","caches":{"solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac98":10},"complete":["solidcraft-app /solidcraft/app/ 0.16.2-7812db4904efac…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
