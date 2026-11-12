<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28402 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Upgrade checks (`.github/workflows/run-upgrade-checks.yml`): [issue #6443](https://github.com/PrefectHQ/fastmcp/issues/6443) "Upgrade checks failing on main branch"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Tests", "Downstream smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Tests (`.github/workflows/run-tests.yml`)

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/43120814336 — dark (conclusion: `failure`), 2026-11-11 23:34 UTC
- Dark since: 2026-11-11 23:34 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.14 on windows-latest` → `Run unit tests`
- Likely cause: = 1 failed, 11319 passed, 70 skipped, 3 xfailed, 132 warnings in 213.02s (0:03:33) =

<details><summary>End of the job log</summary>

```
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[None-auto]
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[0-auto]
0.72s setup    tests/server/auth/oauth_proxy/test_client_registration.py::TestOAuthProxyClientRegistration::test_dcr_client_rejects_unregistered_redirect_uri
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[0-legacy]
=========================== short test summary info ===========================
FAILED tests/cli/test_client_commands.py::TestBuildClient::test_encrypted_oauth_reused_by_fresh_client[sse-oauth] - assert not [<WarningMessage {message : ResourceWarning("unclosed <socket.socket fd=1612, family=2, type…
= 1 failed, 11319 passed, 70 skipped, 3 xfailed, 132 warnings in 213.02s (0:03:33) =
##[error]Process completed with exit code 1.
```

</details>

### Downstream smoke (`.github/workflows/run-downstream-smoke.yml`)

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/43142005831 — dark (conclusion: `failure`), 2026-11-12 02:31 UTC
- Dark since: 2026-11-12 02:31 UTC (first run of the current streak)
- Job / step: `pydantic-ai smoke` → `Resolve pydantic-ai environment`
- Likely cause: error: No solution found when resolving '--with' dependencies

<details><summary>End of the job log</summary>

```
(Use `node --trace-deprecation ...` to show where the warning was created)
SHA256 digest of downloaded artifact is 7947c8c5dcbda8b14c4e05300f4da99ab589919183d6fa7fb020a4f7fea43585
Artifact download completed successfully.
Total of 1 artifact(s) downloaded
Download artifact has finished successfully
error: No solution found when resolving `--with` dependencies
  cause: Because there is no version of pydantic-ai-slim[mcp]==2.68.0 and you require pydantic-ai-slim[mcp]==2.68.0, we can conclude that your requirements are unsatisfiable.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
