<!-- dark-draft: socketio/socket.io -->
<!-- draft-state: ready -->
# Upstream issue draft: socketio/socket.io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/socketio/socket.io/issues/new
- **Stars:** 63220 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build examples" workflow failing on main since 2026-09-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build examples** workflow (`.github/workflows/build-examples.yml`) on `main` has been failing since 2026-09-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/socketio/socket.io/actions/runs/39084062607 — dark (conclusion: `failure`), 2026-10-18 00:47 UTC
- Dark since: 2026-09-27 00:53 UTC (first run of the current streak)
- Job / step: `build-examples (basic-crud-application/angular-client)` → `Build basic-crud-application/angular-client`
- Likely cause: ✘ [ERROR] TS2552: Cannot find name 'MapIterator'. Did you mean 'Iterator'? [plugin angular-compiler]

<details><summary>End of the job log</summary>

```
> ng build
- Building...
Application bundle generation failed. [7.218 seconds]
✘ [ERROR] TS2552: Cannot find name 'MapIterator'. Did you mean 'Iterator'? [plugin angular-compiler]
    node_modules/engine.io-client/build/esm/globals.node.d.ts:17:19:
      17 │     get cookies(): MapIterator<[string, Cookie]>;
         ╵                    ~~~~~~~~~~~
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining socket.io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
