<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9513 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Lint", "CI Integrations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41490535437 — dark (conclusion: `cancelled`), 2026-11-02 17:22 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  tesseractclass.cpp
  tessvars.cpp
  tfacepp.cpp
  thresholder.cpp
  werdit.cpp
  blamer.cpp
  Generating Code...
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41493847951 — dark (conclusion: `cancelled`), 2026-11-02 17:43 UTC
- Dark since: 2026-11-02 04:52 UTC (first run of the current streak)
- Job / step: `Submodule gitlinks reachable`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41493847663 — dark (conclusion: `cancelled`), 2026-11-02 17:43 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41493847828 — dark (conclusion: `cancelled`), 2026-11-02 17:43 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 47%] Building C object src/CMakeFiles/leptonica.dir/map.c.o
[ 48%] Building C object src/CMakeFiles/leptonica.dir/maze.c.o
[ 48%] Building C object src/CMakeFiles/leptonica.dir/morph.c.o
[ 49%] Building C object src/CMakeFiles/leptonica.dir/morphapp.c.o
[ 49%] Building C object src/CMakeFiles/leptonica.dir/morphdwa.c.o
[ 50%] Building C object src/CMakeFiles/leptonica.dir/morphseq.c.o
[ 50%] Building C object src/CMakeFiles/leptonica.dir/numabasic.c.o
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41493848572 — dark (conclusion: `cancelled`), 2026-11-02 17:43 UTC
- Dark since: 2026-11-02 17:22 UTC (first run of the current streak)
- Job / step: `docs / Build` → `Build site`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

<details><summary>End of the job log</summary>

```
18:16:39 [build] Rearranging server assets...
 generating static routes
18:16:44 [WARN] [content] The collection "i18n" does not exist or is empty. Please check your content config file for errors.
18:16:44   ├─ /_llms-txt/get-started.txt (+1.64s)
18:16:46   ├─ /_llms-txt/guides.txt (+5.74s)
18:16:52   ├─ /_llms-txt/concepts.txt (+239ms)
18:16:52   ├─ /_llms-txt/integrations.txt (+189ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
