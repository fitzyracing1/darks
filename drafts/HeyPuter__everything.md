<!-- dark-draft: HeyPuter/everything -->
<!-- draft-state: ready -->
# Upstream issue draft: HeyPuter/everything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/HeyPuter/everything/issues/new
- **Stars:** 9725 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Browser tests", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Browser tests (`.github/workflows/e2e.yml`)

- Latest run on `main`: https://github.com/HeyPuter/everything/actions/runs/45950379725 — dark (conclusion: `failure`), 2026-11-27 06:12 UTC
- Dark since: 2026-11-27 06:12 UTC (first run of the current streak)
- Job / step: `parametric` → `Run npm run test:e2e -- --shard=1/1`
- Likely cause: [desktop] › tests/e2e/assistant.spec.ts:78:1 › files go with a message: picked, pasted or dropped, and refused when the assistant cannot read them

<details><summary>End of the job log</summary>

```
    [desktop] › tests/e2e/sketch.spec.ts:1306:3 › sketching › Enter does not repeat Delete or Redo on what is selected next
    [desktop] › tests/e2e/sketch.spec.ts:1422:3 › sketching › Ctrl+A is the browser select-all outside a sketch and in text fields
    [mobile] › tests/e2e/mobile.spec.ts:356:1 › a small phone shows the equations table, Delete buttons included, without scrolling sideways
  1 flaky
    [desktop] › tests/e2e/modeling.spec.ts:514:1 › dragging the rollback bar rolls back past several features in one undo step
  1 skipped
  721 passed (25.3m)
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/HeyPuter/everything/actions/runs/46091451758 — dark (conclusion: `failure`), 2026-11-28 01:06 UTC
- Dark since: 2026-11-28 01:06 UTC (first run of the current streak)
- Job / step: `spreadsheet (2/4)` → `Test`
- Likely cause: 7: 0x1467825 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]

<details><summary>End of the job log</summary>

```
 5: 0x14921f9 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 6: 0x14668f8 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0x1467825 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 8: 0x144042e v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
 9: 0x18a2d3c v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
10: 0x71a444e6caf6
Aborted (core dumped)
##[error]Process completed with exit code 134.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining everything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
