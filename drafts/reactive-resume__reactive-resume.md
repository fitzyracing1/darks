<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45296 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41744700988 — dark (conclusion: `failure`), 2026-11-04 00:09 UTC
- Dark since: 2026-11-03 22:43 UTC (first run of the current streak)
- Job / step: `Run browser tests` → `Run browser tests`
- Likely cause: 2) [chromium] › tests/e2e/specs/senior-tailoring.spec.ts:81:5 › first-run Choose a file opens the picker and imports the picked file (J2-15) (tests/e2e/specs/senior-tailoring.spec.ts:98)

<details><summary>End of the job log</summary>

```
  ✓   92 [chromium] › tests/e2e/specs/assistant-import-cancellation.spec.ts:22:7 › close PDF import disconnects the provider and saves no document (2.2s)
  ✓   94 [chromium] › tests/e2e/specs/assistant-import-cancellation.spec.ts:88:6 › a cold link explains its missing document after redirect, once (1.2s)
[WebServer] [OpenAPI] NOT_FOUND
[WebServer] [OpenAPI] NOT_FOUND
[WebServer] [OpenAPI] NOT_FOUND
[WebServer] [oRPC Server] CONFLICT
  ✘   97 [chromium] › tests/e2e/specs/assistant.spec.ts:290:5 › posting create and resume link reject foreign resources and mismatched account envelopes through HTTP (324ms)
##[error]  1) [chromium] › tests/e2e/specs/assistant.spec.ts:290:5 › posting create and resume link reject foreign resources and mismatched account envelopes through HTTP
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
