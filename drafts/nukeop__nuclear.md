<!-- dark-draft: nukeop/nuclear -->
<!-- draft-state: ready -->
# Upstream issue draft: nukeop/nuclear

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/nukeop/nuclear/issues/new
- **Stars:** 18863 · **Generated:** 2026-11-03T12:42:36.291Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on master since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `master` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/nukeop/nuclear/actions/runs/41557438902 — dark (conclusion: `failure`), 2026-11-03 01:05 UTC
- Dark since: 2026-11-03 00:29 UTC (first run of the current streak)
- Job / step: `test` → `Run tests with coverage`
- Likely cause: command (/home/runner/work/nuclear/nuclear/packages/ui) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:coverage exited (1)

<details><summary>End of the job log</summary>

```
$ vitest --run --coverage
 RUN  v5.0.0 /home/runner/work/nuclear/nuclear/packages/player
      Coverage enabled with v8
stderr | src/views/Playlists/Playlists.test.tsx > Playlists view > renders playlist cards when playlists exist
Warning: Received `false` for a non-boolean attribute `initial`.
If you want to write it to the DOM, pass a string instead: initial="false" or initial={value.toString()}.
If you used to conditionally omit it with initial={condition && value}, pass initial={condition ? value : undefined} instead.
##[error]command (/home/runner/work/nuclear/nuclear/packages/ui) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:coverage exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nuclear!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
