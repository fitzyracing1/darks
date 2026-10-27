<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168215 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Build documentation")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40346570369 — dark (conclusion: `startup_failure`), 2026-10-26 15:09 UTC
- Dark since: 2026-10-26 15:09 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Build documentation (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40427300134 — dark (conclusion: `failure`), 2026-10-27 00:34 UTC
- Dark since: 2026-10-27 00:34 UTC (first run of the current streak)
- Job / step: `build_other_lang / build_main_documentation` → `Push to dataset (legacy, kept for rollback safety)`
- Likely cause: RuntimeError: push_command_add failed

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/commands/doc_builder_cli.py", line 52, in main
    args.func(args)
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/commands/push.py", line 114, in push_command
    push_command_add(args)
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/commands/push.py", line 191, in push_command_add
    raise RuntimeError("push_command_add failed") from e
RuntimeError: push_command_add failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
