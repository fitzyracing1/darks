<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 16846 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("hub packs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### hub packs (`.github/workflows/hub-packs.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40312923645 — dark (conclusion: `failure`), 2026-10-26 11:09 UTC
- Dark since: 2026-10-26 11:09 UTC (first run of the current streak)
- Job / step: `re-pin moved upstreams (opens PRs)` → `Open re-pin pull requests`
- Likely cause: 7 re-pin PR(s) could not be opened

<details><summary>End of the job log</summary>

```
##[warning]exploit-pocs-2026/oscar-mine--CVE-2026-33017-Exploit: cannot read HEAD of https://github.com/oscar-mine/CVE-2026-33017-Exploit; skipped
##[warning]exploit-pocs-2026/punitdarji--Gitlab-CVE-2026-19478: cannot read HEAD of https://github.com/punitdarji/Gitlab-CVE-2026-19478; skipped
##[warning]exploit-pocs-2026/ChrisSEC2014--amasty-chekout-POC-rce: cannot read HEAD of https://github.com/ChrisSEC2014/amasty-chekout-POC-rce; skipped
##[warning]exploit-pocs-2026/coey0814--DirtyFrag-Galaxy: cannot read HEAD of https://github.com/coey0814/DirtyFrag-Galaxy; skipped
##[warning]exploit-pocs-2026/devtint--CVE-2026-31431: cannot read HEAD of https://github.com/devtint/CVE-2026-31431; skipped
##[warning]exploit-pocs-2026/tmvictorpeters--jbo4rgl: cannot read HEAD of https://github.com/tmvictorpeters/jbo4rgl; skipped
repin: classes=weekly; 7 corpus(es) moved
##[error]7 re-pin PR(s) could not be opened
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40424326466 — dark (conclusion: `cancelled`), 2026-10-27 00:07 UTC
- Dark since: 2026-10-26 14:11 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Unit + integration tests`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test every_help_surface_invites_a_report_by_default ... ok
test disable_feedback_works_in_either_argument_order ... ok
test json_examples_in_help_still_parse ... ok
test the_env_var_silences_every_surface ... ok
test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.41s
     Running tests/grpc_h2c_fail_closed.rs (target/ci-test/deps/grpc_h2c_fail_closed-002cb3db46d6c426)
running 3 tests
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
