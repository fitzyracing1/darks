<!-- dark-draft: NandhaKishorM/laya -->
<!-- draft-state: ready -->
# Upstream issue draft: NandhaKishorM/laya

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NandhaKishorM/laya/issues/new
- **Stars:** 34305 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: ".NET" workflow getting cancelled on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **.NET** workflow (`.github/workflows/dotnet.yml`) on `main` has been getting cancelled since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/40216054446 — dark (conclusion: `cancelled`), 2026-10-25 17:21 UTC
- Dark since: 2026-10-25 17:21 UTC (first run of the current streak)
- Job / step: `parity (typed-decisions)` → `Run the tests against the fresh goldens`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
  from /home/runner/work/laya/laya/laya-dotnet/tests/Laya.Tests/bin/Release/net10.0/Laya.Tests.dll (net10.0|x64)
skipped Laya.Tests.PredictParityTests.PlainPredictIsAOneStateBatch(checkpoint: Multilingual)
  no ONNX artifacts for 'Multilingual'; set LAYA_ONNX_ROOT to the parent of all checkpoints, or LAYA_ONNX_DIR for multilingual
  from /home/runner/work/laya/laya/laya-dotnet/tests/Laya.Tests/bin/Release/net10.0/Laya.Tests.dll (net10.0|x64)
skipped Laya.Tests.PredictParityTests.IsSafeToCallFromSeveralThreadsAtOnce
  no ONNX artifacts for 'Multilingual'; set LAYA_ONNX_ROOT to the parent of all checkpoints, or LAYA_ONNX_DIR for multilingual
  from /home/runner/work/laya/laya/laya-dotnet/tests/Laya.Tests/bin/Release/net10.0/Laya.Tests.dll (net10.0|x64)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining laya!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
