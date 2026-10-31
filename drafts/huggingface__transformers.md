<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168375 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main (".github/workflows/build_documentation.yml", "Nightly integration-failure triage")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### .github/workflows/build_documentation.yml (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41072438986 — dark (conclusion: `failure`), 2026-10-30 14:32 UTC
- Dark since: 2026-10-30 01:10 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nightly integration-failure triage (`.github/workflows/nightly-integration-failure-triage-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41135725308 — dark (conclusion: `failure`), 2026-10-30 22:05 UTC
- Dark since: 2026-10-30 22:05 UTC (first run of the current streak)
- Job / step: `triage / triage` → `Compute triage report and dispatch to Serge`
- Likely cause: return opener.open(url, data, timeout)

<details><summary>End of the job log</summary>

```
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 1423, in getresponse
    response.begin()
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 330, in begin
    version, status, reason = self._read_status()
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 299, in _read_status
    raise RemoteDisconnected("Remote end closed connection without"
http.client.RemoteDisconnected: Remote end closed connection without response
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
