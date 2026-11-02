<!-- dark-draft: langgenius/dify -->
<!-- draft-state: resolved -->
# Upstream issue draft: langgenius/dify

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 160229 · **Generated:** 2026-11-02T12:41:31.933Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Run Full VDB Tests", "Post-Merge Checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Run Full VDB Tests (`.github/workflows/vdb-tests-full.yml`)

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/41380753082 — dark (conclusion: `failure`), 2026-11-02 03:01 UTC
- Dark since: 2026-11-02 03:01 UTC (first run of the current streak)
- Job / step: `Full VDB Tests (3.13)` → `Test Vector Stores`
- Likely cause: INTERNALERROR>     )

<details><summary>End of the job log</summary>

```
INTERNALERROR>     stack.up()
INTERNALERROR>     ~~~~~~~~^^
INTERNALERROR>   File "/home/runner/work/dify/dify/api/tests/pytest_dify.py", line 128, in up
INTERNALERROR>     raise subprocess.CalledProcessError(
INTERNALERROR>     ...<4 lines>...
INTERNALERROR>     )
INTERNALERROR> subprocess.CalledProcessError: Command '['docker', 'compose', '--project-name', 'dify-pytest-vdb', '--env-file', '/home/runner/work/dify/dify/docker/.env', '--profile', 'weaviate', '--profile', 'qdrant', …
##[error]Process completed with exit code 3.
```

</details>

### Post-Merge Checks (`.github/workflows/post-merge.yml`)

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/41437190670 — dark (conclusion: `failure`), 2026-11-02 11:29 UTC
- Dark since: 2026-11-02 11:29 UTC (first run of the current streak)
- Job / step: `External Runtime E2E / Web Full-Stack E2E` → `Run prepared and external runtime E2E tests`
- Likely cause: 379 steps (377 passed, 1 skipped, 1 failed)

<details><summary>End of the job log</summary>

```
 Container docker-ssrf_proxy-1  Removing
 Container docker-ssrf_proxy-1  Removed
 Container docker-sandbox-1  Removed
 Network docker_default  Removing
 Network docker_ssrf_proxy_network  Removing
 Network docker_default  Removed
 Network docker_ssrf_proxy_network  Removed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
