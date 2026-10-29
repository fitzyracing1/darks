<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47753 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL SAST" workflow getting cancelled on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL SAST** workflow (`.github/workflows/codeql.yml`) on `main` has been getting cancelled since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40814126317 — dark (conclusion: `cancelled`), 2026-10-29 03:47 UTC
- Dark since: 2026-10-29 00:08 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)` → `Build for CodeQL analysis (full)`
- Likely cause: Canceling since a higher priority waiting request for codeql-c-cpp-refs/heads/main exists

<details><summary>End of the job log</summary>

```
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_mojo.o internal/cbm/grammar_mojo.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_move.o internal/cbm/grammar_move.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_nasm.o internal/cbm/grammar_nasm.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_nickel.o internal/cbm/grammar_nickel.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_nix.o internal/cbm/grammar_nix.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_objc.o internal/cbm/grammar_objc.c
gcc  -std=c11 -D_DEFAULT_SOURCE -O2 -w -Iinternal/cbm -Iinternal/cbm/vendored/ts_runtime/include -Iinternal/cbm/vendored/ts_runtime/src   -c -o build/c/prod_grammar_objectscript_routine.o internal/cbm/grammar_objectscri…
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
