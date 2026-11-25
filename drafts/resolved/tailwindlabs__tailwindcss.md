<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: resolved -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 98821 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Integration Tests", "Release", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Integration Tests (`.github/workflows/integration-tests.yml`)

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/45612734070 — dark (conclusion: `cancelled`), 2026-11-25 12:20 UTC
- Dark since: 2026-11-24 18:04 UTC (first run of the current streak)
- Job / step: `macOS /  vite` → `Test vite`
- Likely cause: Canceling since a higher priority waiting request for Integration Tests-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   ✓ dev mode  14817ms
   ✓ build mode  11478ms
   ✓ import aliases should work in <style> blocks  11590ms
stdout | vite/qwik.test.ts > dev mode
  ➜  Local:   http://localhost:5173/
 ✓ vite/qwik.test.ts (1 test) 7750ms
   ✓ dev mode  7749ms
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/45612733848 — dark (conclusion: `cancelled`), 2026-11-25 12:20 UTC
- Dark since: 2026-11-25 12:20 UTC (first run of the current streak)
- Job / step: `Build x86_64-unknown-freebsd (OXIDE)` → `Build FreeBSD`
- Likely cause: Canceling since a higher priority waiting request for Release-push-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling futures v0.3.32
   Compiling tailwind-oxide v0.0.0 (/home/runner/work/tailwindcss/tailwindcss/crates/node)
   Compiling classification-macros v0.1.0 (/home/runner/work/tailwindcss/tailwindcss/crates/classification-macros)
   Compiling ctor v1.0.12
   Compiling nohash-hasher v0.2.0
   Compiling napi-derive v3.7.1
   Compiling tailwindcss-oxide v0.1.0 (/home/runner/work/tailwindcss/tailwindcss/crates/oxide)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/45612733881 — dark (conclusion: `cancelled`), 2026-11-25 12:20 UTC
- Dark since: 2026-11-25 12:20 UTC (first run of the current streak)
- Job / step: `Windows` → `Install Playwright Browsers`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     ✓ keeps `--tw-*` declarations that are not related to a sibling with the same value  683ms
     ✓ reuses dynamic utility lookups across candidate collapse groups  674ms
     ✓ keeps the CSS the same  952ms
 Test Files  86 passed (86)
      Tests  6103 passed | 1 skipped (6104)
   Start at  12:25:34
   Duration  87.47s (transform 8.95s, setup 0ms, import 22.88s, tests 160.03s, environment 16ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
