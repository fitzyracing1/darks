<!-- dark-draft: Comfy-Org/ComfyUI -->
<!-- draft-state: ready -->
# Upstream issue draft: Comfy-Org/ComfyUI

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Comfy-Org/ComfyUI/issues/new
- **Stars:** 143528 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Generate Pydantic Stubs from api.comfy.org" workflow failing on master since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Generate Pydantic Stubs from api.comfy.org** workflow (`.github/workflows/update-api-stubs.yml`) on `master` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Comfy-Org/ComfyUI/actions/runs/40248565848 — dark (conclusion: `failure`), 2026-10-26 00:16 UTC
- Dark since: 2026-10-26 00:16 UTC (first run of the current streak)
- Job / step: `generate-models` → `Filter OpenAPI spec with Redocly`
- Likely cause: Successfully installed MarkupSafe-3.0.4 annotated-types-0.8.0 anyio-4.15.1 argcomplete-3.7.2 black-26.10.1 certifi-2026.10.23 click-8.5.0 datamodel-code-generator-0.86.0 exceptiongroup-1.3.1 genson-1.4.0 h11-0.16.0 http…

<details><summary>End of the job log</summary>

```
  % Total    % Received % Xferd  Average Speed  Time    Time    Time   Current
                                 Dload  Upload  Total   Spent   Left   Speed
  0      0   0      0   0      0      0      0                              0
100  1.65M   0  1.65M   0      0  7.35M      0                              0
100  1.65M   0  1.65M   0      0  7.35M      0                              0
100  1.65M   0  1.65M   0      0  7.35M      0                              0
Please provide a valid path to the configuration file.
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ComfyUI!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
