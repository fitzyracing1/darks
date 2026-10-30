<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168348 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build documentation" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build documentation** workflow (`.github/workflows/build_documentation.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41047268616 — dark (conclusion: `failure`), 2026-10-30 11:19 UTC
- Dark since: 2026-10-30 01:10 UTC (first run of the current streak)
- Job / step: `build_other_lang / build_main_documentation` → `Make documentation`
- Likely cause: Unable to find Llama4ImageProcessorPil in transformers. Make sure the path to that object is correct.

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/build_doc.py", line 397, in build_doc
    anchors_mapping, source_files_mapping = build_mdx_files(
                                            ^^^^^^^^^^^^^^^^
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/build_doc.py", line 255, in build_mdx_files
    raise type(e)(f"There was an error when converting {file} to the MDX format.\n" + e.args[0]) from e
ValueError: There was an error when converting ../transformers/docs/source/ko/model_doc/llama4.md to the MDX format.
Unable to find Llama4ImageProcessorPil in transformers. Make sure the path to that object is correct.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
